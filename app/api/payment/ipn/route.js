import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const tran_id = formData.get("tran_id");
    const status = formData.get("status");

    console.log("Payment IPN:", { tran_id, status });

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Payment IPN Error:", error);
    return NextResponse.json({ received: false }, { status: 500 });
  }
}
