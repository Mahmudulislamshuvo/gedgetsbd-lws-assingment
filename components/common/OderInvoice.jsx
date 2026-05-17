import React, { forwardRef } from "react";

const OderInvoice = forwardRef(
  (
    {
      title = "Order Invoice",
      company = {
        name: "Amazon BD",
        address: "Dhaka, Bangladesh",
        phone: "+880 1XX-XXXXXXX",
        email: "support@amazonbd.example",
      },
      customer = {
        name: "Guest Customer",
        address: "N/A",
        phone: "N/A",
        email: "N/A",
      },
      invoice = {
        id: "INV-00001",
        transactionId: "N/A",
        date: new Date().toLocaleDateString(),
        status: "Paid",
        paymentMethod: "",
      },
      items = [
        {
          name: "Sample Product",
          sku: "SKU-001",
          qty: 1,
          unitPrice: 299,
          total: 299,
        },
      ],
      summary = {
        subtotal: 299,
        shipping: 0,
        tax: 0,
        discount: 0,
        total: 299,
      },
      summaryRows = null,
      currencySymbol = "৳",
      note = "Thank you for your purchase. Keep this invoice for your records.",
    },
    ref,
  ) => {
    const resolvedSummaryRows = summaryRows || [
      { label: "Subtotal", value: summary.subtotal },
      { label: "Shipping", value: summary.shipping },
      { label: "Tax", value: summary.tax },
      { label: "Discount", value: -Math.abs(summary.discount || 0) },
    ];
    const formatMoney = (value) => `${currencySymbol}${value ?? 0}`;

    return (
      <div
        ref={ref}
        data-invoice-root
        className="bg-[#f8fafc] p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              {title}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              {company.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1">{company.address}</p>
            <p className="text-sm text-slate-600">{company.phone}</p>
            <p className="text-sm text-slate-600">{company.email}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 min-w-[220px]">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Invoice</span>
              <span className="font-semibold text-slate-900">{invoice.id}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600 mt-2">
              <span>Date</span>
              <span className="font-medium text-slate-900">{invoice.date}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600 mt-2">
              <span>Status</span>
              <span className="font-medium text-emerald-600">
                {invoice.status}
              </span>
            </div>
            {invoice.paymentMethod ? (
              <div className="flex items-center justify-between text-sm text-slate-600 mt-2">
                <span>Method</span>
                <span className="font-medium text-slate-900">
                  {invoice.paymentMethod}
                </span>
              </div>
            ) : null}
            <div className="mt-3 text-xs text-slate-500">
              Transaction:{" "}
              <span className="font-mono">{invoice.transactionId}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Billed To
            </p>
            <p className="text-base font-semibold text-slate-900 mt-2">
              {customer.name}
            </p>
            <p className="text-sm text-slate-600">{customer.address}</p>
            <p className="text-sm text-slate-600">{customer.phone}</p>
            <p className="text-sm text-slate-600">{customer.email}</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
              Total Due
            </p>
            <p className="text-3xl font-semibold mt-2">৳{summary.total}</p>
            <p className="text-xs text-slate-200 mt-2">Payable upon receipt</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid grid-cols-12 gap-2 bg-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className="col-span-4">Item</span>
            <span className="col-span-2">SKU</span>
            <span className="col-span-2 text-right">Qty</span>
            <span className="col-span-2 text-right">Unit</span>
            <span className="col-span-2 text-right">Total</span>
          </div>
          {items.map((item, index) => (
            <div
              key={`${item.sku}-${index}`}
              className="grid grid-cols-12 gap-2 px-4 py-3 text-sm text-slate-700 border-t border-slate-100"
            >
              <span className="col-span-4 font-medium text-slate-900">
                {item.name}
              </span>
              <span className="col-span-2 font-mono text-xs">{item.sku}</span>
              <span className="col-span-2 text-right">{item.qty}</span>
              <span className="col-span-2 text-right">
                {formatMoney(item.unitPrice ?? item.price ?? 0)}
              </span>
              <span className="col-span-2 text-right">
                {formatMoney(item.total ?? item.price ?? 0)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-sm text-slate-600">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Note
            </p>
            <p className="mt-2">{note}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            {resolvedSummaryRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between text-sm text-slate-600 mt-2 first:mt-0"
              >
                <span>{row.label}</span>
                <span className="font-medium text-slate-900">
                  {formatMoney(row.value)}
                </span>
              </div>
            ))}
            <div className="border-t border-slate-200 mt-3 pt-3 flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatMoney(summary.total)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

OderInvoice.displayName = "OderInvoice";

export default OderInvoice;
