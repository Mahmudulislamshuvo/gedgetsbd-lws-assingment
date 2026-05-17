"use client";

import { useCallback, useState } from "react";

const defaultCurrency = "BDT ";

const formatMoney = (currency, value) => {
  const symbol = currency ?? defaultCurrency;
  return `${symbol}${Number(value || 0).toFixed(2)}`.trim();
};

const safeText = (value) => String(value ?? "");

const addHeader = (pdf, label, value, margin, y, pageWidth) => {
  pdf.text(label, margin, y);
  pdf.text(value, pageWidth - margin, y, { align: "right" });
  return y + 6;
};

export const useInvoiceDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadInvoice = useCallback(
    async (payload, fileName) => {
      if (!payload || downloading) return;
      setDownloading(true);

      try {
        const { jsPDF } = await import("jspdf");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 14;
        let y = 16;

        const addLine = (text, fontSize = 11, isBold = false) => {
          pdf.setFontSize(fontSize);
          pdf.setFont(undefined, isBold ? "bold" : "normal");
          pdf.text(text, margin, y);
          y += fontSize * 0.55 + 2;
        };

        const currency = payload.currencySymbol ?? defaultCurrency;

        addLine(payload.company?.name || "", 16, true);
        addLine(payload.company?.address || "", 10);
        addLine(payload.company?.phone || "", 10);
        addLine(payload.company?.email || "", 10);

        y += 4;
        pdf.setFontSize(12);
        pdf.setFont(undefined, "bold");
        pdf.text("Invoice", margin, y);
        pdf.setFont(undefined, "normal");
        pdf.text(payload.invoice?.id || "", pageWidth - margin, y, {
          align: "right",
        });
        y += 6;
        y = addHeader(
          pdf,
          "Date",
          payload.invoice?.date || "",
          margin,
          y,
          pageWidth,
        );
        y = addHeader(
          pdf,
          "Status",
          payload.invoice?.status || "",
          margin,
          y,
          pageWidth,
        );
        if (payload.invoice?.paymentMethod) {
          y = addHeader(
            pdf,
            "Method",
            payload.invoice?.paymentMethod,
            margin,
            y,
            pageWidth,
          );
        }
        y = addHeader(
          pdf,
          "Transaction",
          payload.invoice?.transactionId || "",
          margin,
          y,
          pageWidth,
        );

        y += 8;
        pdf.setFont(undefined, "bold");
        pdf.text("Billed To", margin, y);
        pdf.setFont(undefined, "normal");
        y += 6;
        pdf.text(payload.customer?.name || "", margin, y);
        y += 5;
        pdf.text(payload.customer?.address || "", margin, y);
        y += 5;
        pdf.text(payload.customer?.phone || "", margin, y);
        y += 5;
        pdf.text(payload.customer?.email || "", margin, y);

        y += 8;
        pdf.setFont(undefined, "bold");
        pdf.text("Items", margin, y);
        y += 6;
        pdf.setFontSize(10);
        pdf.text("Item", margin, y);
        pdf.text("SKU", 80, y);
        pdf.text("Qty", 120, y, { align: "right" });
        pdf.text("Unit", 150, y, { align: "right" });
        pdf.text("Total", pageWidth - margin, y, { align: "right" });
        y += 4;
        pdf.setLineWidth(0.2);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 5;
        pdf.setFont(undefined, "normal");

        (payload.items || []).forEach((item) => {
          if (y > pageHeight - 20) {
            pdf.addPage();
            y = 16;
          }
          pdf.text(safeText(item.name), margin, y);
          pdf.text(safeText(item.sku), 80, y);
          pdf.text(safeText(item.qty || 0), 120, y, { align: "right" });
          pdf.text(formatMoney(currency, item.unitPrice), 150, y, {
            align: "right",
          });
          pdf.text(formatMoney(currency, item.total), pageWidth - margin, y, {
            align: "right",
          });
          y += 6;
        });

        y += 6;
        if (y > pageHeight - 40) {
          pdf.addPage();
          y = 16;
        }
        pdf.setFont(undefined, "bold");
        pdf.text("Summary", margin, y);
        pdf.setFont(undefined, "normal");
        y += 6;
        (payload.summaryRows || []).forEach((row) => {
          pdf.text(row.label || "", margin, y);
          pdf.text(formatMoney(currency, row.value), pageWidth - margin, y, {
            align: "right",
          });
          y += 5;
        });
        pdf.setFont(undefined, "bold");
        pdf.text("Total", margin, y);
        pdf.text(
          formatMoney(currency, payload.summary?.total),
          pageWidth - margin,
          y,
          {
            align: "right",
          },
        );

        pdf.save(fileName || "invoice.pdf");
      } catch (error) {
        console.error("Invoice download failed:", error);
      } finally {
        setDownloading(false);
      }
    },
    [downloading],
  );

  return { downloadInvoice, downloading };
};
