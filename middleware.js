import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/profile", "/checkout", "/account", "/orders"];
const shopOwnerRoutes = ["/shop-owner"];
const publicAuthRoutes = ["/login", "/register"];

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isLoggedIn = Boolean(token?.sub);

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isShopOwnerRoute = shopOwnerRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isPublicAuthRoute = publicAuthRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    const nextPath = pathname + search;
    loginUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(loginUrl);
  }

  if (isShopOwnerRoute && token?.userType !== "shopOwner") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (isPublicAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/checkout/:path*",
    "/account/:path*",
    "/orders/:path*",
    "/shop-owner/:path*",
    "/login",
    "/register",
  ],
};
