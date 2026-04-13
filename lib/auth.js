import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookies } from "next/headers";
import { z } from "zod";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import Shop from "@/Models/shopSchema";
import {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenExpiry,
  getRefreshTokenExpiry,
  verifyRefreshToken,
} from "@/lib/tokenUtils";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

async function upsertShopForOwner(user, preferredName) {
  if (user.userType !== "shopOwner") {
    return user.shopId || null;
  }

  if (user.shopId) {
    return user.shopId;
  }

  const shop = await Shop.create({
    name: preferredName || `${user.name || "Shop Owner"}'s Shop`,
    ownerId: user._id,
  });

  user.shopId = shop._id;
  await user.save();
  return shop._id;
}

async function rotateTokenSetForUser(user) {
  const accessToken = generateAccessToken(user._id, user.userType);
  const refreshToken = generateRefreshToken(user._id);
  const refreshTokenHash = hashToken(refreshToken);
  const refreshTokenExpires = new Date(getRefreshTokenExpiry());
  const accessTokenExpires = getAccessTokenExpiry();

  user.refreshToken = refreshTokenHash;
  user.refreshTokenExpires = refreshTokenExpires;
  await user.save();

  return {
    accessToken,
    refreshToken,
    accessTokenExpires,
    refreshTokenExpires: refreshTokenExpires.getTime(),
  };
}

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !user.password) {
          return null;
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image || null,
          userType: user.userType,
          shopId: user.shopId ? user.shopId.toString() : null,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();

      if (account?.provider !== "google") {
        return true;
      }

      const existing = await User.findOne({ email: user.email?.toLowerCase() });
      if (existing) {
        user.id = existing._id.toString();
        user.userType = existing.userType;
        user.shopId = existing.shopId ? existing.shopId.toString() : null;
        return true;
      }

      const requestedTypeCookie = (await cookies()).get(
        "google_signup_type",
      )?.value;
      const requestedType =
        requestedTypeCookie === "shopOwner" ? "shopOwner" : "customer";
      const created = await User.create({
        name: user.name || "Google User",
        email: (user.email || "").toLowerCase(),
        password: null,
        image: user.image || null,
        userType: requestedType,
      });

      if (created.userType === "shopOwner") {
        await upsertShopForOwner(
          created,
          `${created.name || "Shop Owner"}'s Shop`,
        );
      }

      user.id = created._id.toString();
      user.userType = created.userType;
      user.shopId = created.shopId ? created.shopId.toString() : null;

      return true;
    },
    async jwt({ token, user, trigger, session }) {
      await dbConnect();

      if (user?.id) {
        const dbUser = await User.findById(user.id);
        if (!dbUser) {
          return { ...token, error: "UserNotFound" };
        }

        const rotated = await rotateTokenSetForUser(dbUser);
        token.sub = dbUser._id.toString();
        token.userType = dbUser.userType;
        token.shopId = dbUser.shopId ? dbUser.shopId.toString() : null;
        token.picture = dbUser.image || null;
        token.accessToken = rotated.accessToken;
        token.refreshToken = rotated.refreshToken;
        token.accessTokenExpires = rotated.accessTokenExpires;
        token.error = undefined;

        return token;
      }

      if (trigger === "update" && session?.user?.userType) {
        token.userType = session.user.userType;
      }

      if (Date.now() < Number(token.accessTokenExpires || 0)) {
        return token;
      }

      const refreshPayload = verifyRefreshToken(token.refreshToken);
      if (!refreshPayload?.sub) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      const dbUser = await User.findById(refreshPayload.sub);
      if (!dbUser || !dbUser.refreshToken || !dbUser.refreshTokenExpires) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      const storedHash = dbUser.refreshToken;
      const incomingHash = hashToken(token.refreshToken || "");
      const isExpired = dbUser.refreshTokenExpires.getTime() < Date.now();
      if (storedHash !== incomingHash || isExpired) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      const rotated = await rotateTokenSetForUser(dbUser);
      return {
        ...token,
        sub: dbUser._id.toString(),
        userType: dbUser.userType,
        shopId: dbUser.shopId ? dbUser.shopId.toString() : null,
        picture: dbUser.image || null,
        accessToken: rotated.accessToken,
        refreshToken: rotated.refreshToken,
        accessTokenExpires: rotated.accessTokenExpires,
        error: undefined,
      };
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub,
        userType: token.userType,
        shopId: token.shopId || null,
        image: token.picture || null,
      };

      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
