import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function requireAuth() {
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

export async function requireRole(role) {
  const authResult = await requireAuth();
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
