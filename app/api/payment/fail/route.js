import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const tran_id = url.searchParams.get("tran_id");

    const formData = await request.formData();
    const status = formData.get("status");

    console.warn("Payment Failed:", { tran_id, status });

    return NextResponse.redirect(
      new URL("/payment-process?status=failed", request.url),
    );
  } catch (error) {
    console.error("Payment Fail Error:", error);
    return NextResponse.redirect(
      new URL("/payment-process?status=error", request.url),
    );
  }
}
