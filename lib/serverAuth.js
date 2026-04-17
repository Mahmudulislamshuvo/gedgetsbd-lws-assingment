import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import { verifyAccessToken } from "@/lib/tokenUtils";

function getBearerToken(request) {
  const header = request?.headers?.get("authorization") || "";

  if (!header.startsWith("Bearer ")) {
    return "";
  }

  return header.slice(7).trim();
}

export async function requireAuth(request) {
  const bearerToken = getBearerToken(request);

  if (bearerToken) {
    const payload = verifyAccessToken(bearerToken);

    if (!payload?.sub) {
      return {
        ok: false,
        response: NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 },
        ),
      };
    }

    await dbConnect();

    const user = await User.findById(payload.sub);
    if (!user) {
      return {
        ok: false,
        response: NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 },
        ),
      };
    }

    return {
      ok: true,
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        userType: user.userType,
        shopId: user.shopId ? user.shopId.toString() : null,
      },
      token: payload,
    };
  }

  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      response: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    };
  }

  return {
    ok: true,
    user: session.user,
    session,
  };
}

export async function requireRole(role, request) {
  const authResult = await requireAuth(request);
  if (!authResult.ok) {
    return authResult;
  }

  if (authResult.user.userType !== role) {
    return {
      ok: false,
      response: NextResponse.json({ message: "Forbidden" }, { status: 403 }),
    };
  }

  return authResult;
}
