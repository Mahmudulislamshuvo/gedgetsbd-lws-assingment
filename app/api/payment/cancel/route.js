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

    console.warn("Payment Canceled:", { tran_id });

    await Order.findOneAndUpdate(
      { tran_id: tran_id },
      {
        paymentStatus: "Canceled",
        orderStatus: "Canceled",
      },
      { new: true },
    );

    return NextResponse.redirect(new URL("/payment-process", request.url));
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
