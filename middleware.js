import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// only for customer routes
const customerRoutes = [
  "/profile",
  "/cart",
  "/checkout",
  "/orderlist",
  "/reviewmodal",
  "/success",
];

// only for shop owner routes
const shopOwnerRoutes = ["/create", "/managelist"];

// shared routes for both logged-in user types
const sharedRoutes = ["/products", "/details", "/shop-profile", "/shops"];

// only for public authentication routes (logged-in users cannot access these)
const publicAuthRoutes = ["/login", "/register"];

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // getting the token to check if the user is logged in and to get their role
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = Boolean(token?.sub);
  const userRole = token?.userType; // 'customer' or 'shopOwner'

  const isCustomerRoute = customerRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isShopOwnerRoute = shopOwnerRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isPublicAuthRoute = publicAuthRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isSharedRoute = sharedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // 1. User is not logged in and tries to access protected routes
  if ((isCustomerRoute || isShopOwnerRoute || isSharedRoute) && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    const nextPath = pathname + search;
    loginUrl.searchParams.set("next", nextPath); // After login, redirect back to this page
    return NextResponse.redirect(loginUrl);
  }

  // 2. Logged-in user tries to access shop owner route but doesn't have the correct role
  if (isShopOwnerRoute && userRole !== "shopOwner") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // 3. Logged-in user tries to access customer route but doesn't have the correct role
  if (isCustomerRoute && userRole !== "customer") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // 4. Logged-in user tries to access public authentication routes (like login or register)
  if (isPublicAuthRoute && isLoggedIn) {
    if (userRole === "shopOwner") {
      return NextResponse.redirect(new URL("/managelist", request.url));
    }
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

// Matcher to specify which routes should be protected by this middleware
export const config = {
  matcher: [
    /* Customer routes */
    "/cart/:path*",
    "/orderlist/:path*",
    "/profile/:path*",
    "/checkout/:path*",
    "/reviewmodal/:path*",
    "/success/:path*",

    /* Shop Owner routes */
    "/create/:path*",
    "/managelist/:path*",

    /* Shared authenticated routes */
    "/products/:path*",
    "/details/:path*",
    "/shop-profile/:path*",
    "/shops/:path*",

    /* Public Authentication routes */
    "/login",
    "/register",
  ],
};
