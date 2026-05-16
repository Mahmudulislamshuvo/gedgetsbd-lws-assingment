import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const tran_id = url.searchParams.get("tran_id");

    console.warn("Payment Canceled:", { tran_id });

    return NextResponse.redirect(
      new URL("/payment-process?status=canceled", request.url),
    );
  } catch (error) {
    console.error("Payment Cancel Error:", error);
    return NextResponse.redirect(
      new URL("/payment-process?status=error", request.url),
    );
  }
}

export async function GET(request) {
  return POST(request);
}
