import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/serverAuth";

export async function GET(request) {
  const auth = await requireAuth(request);
  if (!auth.ok) {
    return auth.response;
  }

  console.log(auth);

  return NextResponse.json(
    {
      success: true,
      message: "Checkout API access granted",
      user: {
        id: auth.user?.id,
        userType: auth.user?.userType,
      },
    },
    { status: 200 },
  );
}
