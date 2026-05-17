import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Order from "@/Models/orderSchema";
import { requireAuth } from "@/lib/serverAuth";

export async function GET(request, { params }) {
  const authResult = await requireAuth(request);
  if (!authResult.ok) {
    return authResult.response;
  }

  await dbConnect();

  const { tran_id } = await params;
  if (!tran_id) {
    return NextResponse.json(
      { message: "Transaction id is required" },
      { status: 400 },
    );
  }

  const order = await Order.findOne({
    tran_id,
    userId: authResult.user.id,
  }).lean();

  if (!order) {
    return NextResponse.json({ message: "Order not found" }, { status: 404 });
  }

  const customer = {
    name: authResult.user.name || "",
    email: authResult.user.email || "",
  };

  return NextResponse.json({
    order: {
      ...order,
      _id: order._id?.toString?.(),
      userId: order.userId?.toString?.(),
      items: (order.items || []).map((item) => ({
        ...item,
        productId: item.productId?.toString?.(),
        shopId: item.shopId?.toString?.() || null,
      })),
      customer,
    },
  });
}
