import { dbConnect } from "@/lib/dbConnect";
import Order from "@/Models/orderSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  await dbConnect();

  try {
    const url = new URL(request.url);
    const tran_id = url.searchParams.get("tran_id");

    if (!tran_id) {
      return NextResponse.redirect(
        new URL("/payment-process?status=error", request.url),
      );
    }

    const formData = await request.formData();
    const status = formData.get("status");

    console.warn("Payment Failed:", { tran_id, status });

    await Order.findOneAndUpdate(
      { tran_id: tran_id },
      {
        paymentStatus: "Failed",
        orderStatus: "Canceled",
      },
      { new: true },
    );

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
