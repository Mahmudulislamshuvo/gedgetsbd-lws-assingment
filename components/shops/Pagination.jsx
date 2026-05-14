import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const buildPageItems = (currentPage, totalPages) => {
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set([1, totalPages, currentPage]);
  pages.add(Math.max(1, currentPage - 1));
  pages.add(Math.min(totalPages, currentPage + 1));

  if (currentPage <= 2) {
    pages.add(3);
  }

  if (currentPage >= totalPages - 1) {
    pages.add(totalPages - 2);
  }

  const sorted = Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const items = [];
  for (let i = 0; i < sorted.length; i += 1) {
    const page = sorted[i];
    const prev = sorted[i - 1];
    if (i > 0 && page - prev > 1) {
      items.push("ellipsis");
    }
    items.push(page);
  }

  return items;
};

const Pagination = ({
  currentPage,
  totalPages,
  basePath = "/shops",
  query = {},
}) => {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;
  const pageItems = buildPageItems(currentPage, totalPages);

  const buildHref = (page) => {
    const params = new URLSearchParams(query);
    params.set("page", String(page));
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {prevDisabled ? (
        <span className="px-4 py-2 border border-gray-300 rounded-md text-sm opacity-50 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
        </span>
      ) : (
        <Link
          href={buildHref(currentPage - 1)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
      )}

      {pageItems.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
              ...
            </span>
          );
        }

        const pageNumber = item;
        const isActive = pageNumber === currentPage;

        return (
          <Link
            key={pageNumber}
            href={buildHref(pageNumber)}
            className={`px-4 py-2 border border-gray-300 rounded-md text-sm ${
              isActive
                ? "bg-amazon-yellow border-amazon-secondary font-bold"
                : "hover:bg-gray-50"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </Link>
        );
      })}

      {nextDisabled ? (
        <span className="px-4 py-2 border border-gray-300 rounded-md text-sm opacity-50 cursor-not-allowed">
          <ChevronRight className="w-4 h-4" />
        </span>
      ) : (
        <Link
          href={buildHref(currentPage + 1)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
