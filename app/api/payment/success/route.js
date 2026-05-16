import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // URL থেকে ট্রানজেকশন আইডি বের করা
    const url = new URL(request.url);
    const tran_id = url.searchParams.get("tran_id");

    // SSLCommerz ফর্ম ডাটা হিসেবে রেসপন্স পাঠায়
    const formData = await request.formData();
    const val_id = formData.get("val_id"); // ভ্যালিডেশন আইডি

    // এখানে ডাটাবেসে ট্রানজেকশন আইডি (tran_id) দিয়ে অর্ডারটি খুঁজবেন
    // এবং অর্ডারের পেমেন্ট স্ট্যাটাস "Paid" করে দেবেন।

    // আপডেট সফল হলে ইউজারকে আপনার ফ্রন্টএন্ডের সাকসেস পেজে রিডাইরেক্ট করে দিন
    return NextResponse.redirect(new URL("/success", request.url));
  } catch (error) {
    console.error("Payment Success Error:", error);
    return NextResponse.redirect(
      new URL("/payment-process?status=error", request.url),
    );
  }
}
