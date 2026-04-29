import Link from "next/link";

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
    .filter((p) => p >= 1 && p <= totalPages)
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
  start,
  end,
  total,
  currentPage,
  totalPages,
  basePath = "/managelist",
}) => {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;
  const pageItems = buildPageItems(currentPage, totalPages);

  return (
    <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
      <div>
        Showing {start}-{end} of {total} products
      </div>
      <div className="flex items-center gap-2">
        {prevDisabled ? (
          <span className="px-3 py-1 border border-gray-300 rounded opacity-50 cursor-not-allowed">
            Previous
          </span>
        ) : (
          <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
          >
            Previous
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
              href={`${basePath}?page=${pageNumber}`}
              className={`px-3 py-1 border border-gray-300 rounded ${
                isActive ? "bg-amazon-yellow font-bold" : "hover:bg-gray-50"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {nextDisabled ? (
          <span className="px-3 py-1 border border-gray-300 rounded opacity-50 cursor-not-allowed">
            Next
          </span>
        ) : (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
