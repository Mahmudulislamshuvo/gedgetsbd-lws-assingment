import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Order from "@/Models/orderSchema";
import { cookies } from "next/headers";

export async function POST(request) {
  await dbConnect();

  try {
    const url = new URL(request.url);
    const tran_id = url.searchParams.get("tran_id");

    if (!tran_id) {
      return NextResponse.redirect(new URL("/checkout/error", request.url));
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { tran_id: tran_id },
      {
        paymentStatus: "Paid",
        orderStatus: "Processing",
      },
      { new: true },
    );

    // if order is found and updated successfully, then we can clear the relevant items from the cart cookie
    if (updatedOrder) {
      const cookiesStore = await cookies();
      const existingCart = cookiesStore.get("cart");

      if (existingCart?.value) {
        let cart = JSON.parse(existingCart.value);

        // in the order ids and cart ids finding and matching then only we will remove the items from the cart
        const orderedProductIds = updatedOrder.items.map((item) =>
          item.productId.toString(),
        );

        // cart set will be updated by filtering out the items that were just ordered
        const updatedCart = cart.filter(
          (item) => !orderedProductIds.includes(item.productId.toString()),
        );

        // updated cart cookie will be set with the new cart data after removing the ordered items
        cookiesStore.set("cart", JSON.stringify(updatedCart), {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7,
        });
      }
    }

    // after finish the payment process we will redirect home
    return NextResponse.redirect(
      new URL(`/payment/success?tran_id=${tran_id}`, request.url),
    );
  } catch (error) {
    console.error("Payment Success Error:", error);
    return NextResponse.redirect(new URL("/checkout/error", request.url));
  }
}
