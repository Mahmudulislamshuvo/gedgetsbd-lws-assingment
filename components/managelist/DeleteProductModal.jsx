"use client";

const DeleteProductModal = ({
  open,
  onClose,
  onConfirm,
  title = "Delete product",
  description = "This action cannot be undone.",
  productName,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-product-title"
    >
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl z-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-red-500"
          aria-label="Close"
        >
          X
        </button>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">
              !
            </div>
            <div className="space-y-2">
              <h2 id="delete-product-title" className="text-lg font-semibold">
                {title}
              </h2>
              <p className="text-sm text-gray-600">
                {description}
              </p>
              {productName ? (
                <p className="text-sm text-gray-900 font-medium">
                  {productName}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-sm font-semibold text-white hover:bg-red-700"
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
