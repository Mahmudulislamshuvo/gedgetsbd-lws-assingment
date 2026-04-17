import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/serverAuth";
import { getProfileData } from "@/actions";

export async function GET(request) {
  const auth = await requireAuth(request);
  if (!auth.ok) {
    return auth.response;
  }

  const result = await getProfileData(auth.user.id, auth.user.userType);

  if (!result.success) {
    return NextResponse.json(
      { success: false, message: result.error },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Profile data fetched successfully",
      data: result.data,
    },
    { status: 200 },
  );
}
