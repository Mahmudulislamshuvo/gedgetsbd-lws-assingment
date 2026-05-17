"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "@/utils/toastify";
import InvoiceDownloadSection from "@/components/common/InvoiceDownloadSection";

const SuccessPayment = () => {
  const searchParams = useSearchParams();
  const tran_id = searchParams?.get("tran_id") || "";
  const [orderData, setOrderData] = useState(null);
  const [orderLoading, setOrderLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadOrder = async () => {
      if (!tran_id) {
        setOrderLoading(false);
        return;
      }

      try {
        setOrderLoading(true);
        const response = await fetch(`/api/orders/${tran_id}`);
        if (!response.ok) {
          throw new Error("Failed to load order");
        }
        const data = await response.json();
        if (isMounted) {
          setOrderData(data.order || null);
        }
      } catch (error) {
        toast.error("Order info load failed. Please refresh.");
      } finally {
        if (isMounted) {
          setOrderLoading(false);
        }
      }
    };

    loadOrder();

    return () => {
      isMounted = false;
    };
  }, [tran_id]);

  const invoicePayload = useMemo(() => {
    const shippingAddress = orderData?.shippingAddress || {};
    const customerAddressParts = [
      shippingAddress.village,
      shippingAddress.upazila,
      shippingAddress.district,
    ].filter(Boolean);
    const customerAddress = customerAddressParts.length
      ? customerAddressParts.join(", ")
      : "N/A";

    const items = (orderData?.items || []).map((item) => {
      const lineTotal = (item.unitPrice || 0) * (item.quantity || 0);
      return {
        name: item.productName,
        sku: item.productId?.toString?.() || "N/A",
        qty: item.quantity,
        unitPrice: item.unitPrice,
        total: lineTotal,
      };
    });

    const summaryRows = [
      { label: "Subtotal", value: orderData?.subtotal ?? 0 },
      { label: "Shipping", value: orderData?.shippingFee ?? 0 },
      { label: "Service Fee", value: orderData?.serviceFee ?? 0 },
    ];

    return {
      company: {
        name: "Gedget BD",
        address: "Dhaka, Bangladesh",
        phone: "+880 1XX-XXXXXXX",
        email: "support@gedgetbd.com",
      },
      currencySymbol: "BDT ",
      invoice: {
        id: `INV-${tran_id || "00001"}`,
        transactionId: tran_id || "N/A",
        date: orderData?.createdAt
          ? new Date(orderData.createdAt).toLocaleDateString()
          : new Date().toLocaleDateString(),
        status: orderData?.paymentStatus || "Paid",
        paymentMethod: orderData?.paymentMethod || "",
      },
      customer: {
        name: shippingAddress.name || orderData?.customer?.name || "Customer",
        address: customerAddress,
        phone: shippingAddress.phone || "N/A",
        email: orderData?.customer?.email || "N/A",
      },
      items: items.length
        ? items
        : [
            {
              name: "Purchased Items",
              sku: "MULTI-ITEM",
              qty: 1,
              unitPrice: 0,
              total: 0,
            },
          ],
      summary: {
        subtotal: orderData?.subtotal ?? 0,
        shipping: orderData?.shippingFee ?? 0,
        tax: orderData?.serviceFee ?? 0,
        discount: 0,
        total: orderData?.totalAmount ?? 0,
      },
      summaryRows,
    };
  }, [orderData, tran_id]);

  // useEffect(() => {
  //   toast.success("Payment successful! Redirecting to home...");
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
        {/* ট্রানজেকশন আইডি দেখানো হচ্ছে */}
        <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-700 mb-6 text-left">
          <span className="font-semibold block mb-1">Transaction ID:</span>
          <span className="font-mono">{tran_id || "N/A"}</span>
        </div>
        <Link
          href="/"
          className="bg-amazon-orange text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors inline-block font-medium"
        >
          Return to Home
        </Link>
      </div>
      <div className="mt-10 w-full max-w-4xl">
        <InvoiceDownloadSection
          payload={invoicePayload}
          fileName={`invoice-${tran_id || "paid"}.pdf`}
          disabled={orderLoading}
          buttonLabel={orderLoading ? "Loading Order..." : "Download Invoice"}
        />
      </div>
    </div>
  );
};

export default SuccessPayment;
