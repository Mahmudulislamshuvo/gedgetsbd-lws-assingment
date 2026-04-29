import FilterManagelist from "./FilterManagelist";
import { EyeOffIcon, PencilIcon, Trash2Icon } from "lucide-react";

const AllProductTable = ({ shopAllProduct }) => {
  const products = Array.isArray(shopAllProduct) ? shopAllProduct : [];
  const getStatusClasses = (status) => {
    if (status === "In Stock") return "bg-green-100 text-green-700";
    if (status === "Pre-Order") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <table className="w-full text-sm text-left border-collapse">
      <FilterManagelist />
      <tbody className="divide-y divide-gray-200">
        {products.length === 0 ? (
          <tr>
            <td colSpan="9" className="p-6 text-center text-gray-500">
              No products found.
            </td>
          </tr>
        ) : (
          products.map((product) => {
            const status = product?.availability || "In Stock";
            const statusClasses = getStatusClasses(status);
            const mainImage = product?.images?.mainImage;
            const price =
              typeof product?.price === "number"
                ? product.price.toLocaleString("en-US")
                : (product?.price ?? "--");
            const sku = product?.sku ? `SKU: ${product.sku}` : "SKU: N/A";

            return (
              <tr key={product?._id} className="hover:bg-gray-50">
                <td className="p-3 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-bold rounded ${statusClasses}`}
                  >
                    {status}
                  </span>
                </td>
                <td className="p-3">
                  {mainImage ? (
                    <img
                      src={mainImage}
                      alt={product?.productName || "Product image"}
                      className="w-12 h-12 object-cover rounded border border-gray-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded border border-gray-200 bg-gray-100 text-[10px] text-gray-400 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </td>
                <td className="p-3">
                  <div className="font-medium">
                    {product?.productName || "Unnamed product"}
                  </div>
                  <div className="text-xs text-gray-500">{sku}</div>
                </td>
                <td className="p-3 text-gray-600">
                  {product?.category || "-"}
                </td>
                <td className="p-3 text-gray-600">{product?.brand || "-"}</td>
                <td className="p-3 font-bold">{price}</td>
                <td className="p-3">
                  <span className="text-gray-700 font-bold">
                    {product?.stockQuantity ?? 0}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <PencilIcon className="w-4 h-4 text-amazon-blue" />
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Unpublish"
                    >
                      <EyeOffIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Delete"
                    >
                      <Trash2Icon className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default AllProductTable;
