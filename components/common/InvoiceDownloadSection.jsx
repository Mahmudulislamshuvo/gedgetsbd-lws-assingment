"use client";

import React from "react";
import { toast } from "@/utils/toastify";
import OderInvoice from "@/components/common/OderInvoice";
import { useInvoiceDownload } from "@/utils/useInvoiceDownload";

const InvoiceDownloadSection = ({
  payload,
  fileName = "invoice.pdf",
  disabled = false,
  buttonLabel = "Download Invoice",
  loadingLabel = "Preparing Invoice...",
  showPreview = true,
  className = "",
}) => {
  const { downloadInvoice, downloading } = useInvoiceDownload();

  const handleDownload = async () => {
    try {
      await downloadInvoice(payload, fileName);
    } catch (error) {
      toast.error("Invoice download failed. Please try again.");
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleDownload}
        disabled={disabled || downloading}
        className="w-full mb-4 bg-slate-900 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors inline-flex items-center justify-center font-medium disabled:opacity-60"
      >
        {downloading ? loadingLabel : buttonLabel}
      </button>
      {showPreview ? <OderInvoice {...payload} /> : null}
    </div>
  );
};

export default InvoiceDownloadSection;
