import { auth } from "@/lib/auth";
import { getProductById } from "@/actions";
import ProductForm from "@/components/managelist/ProductForm";

const EditProductPage = async ({ params }) => {
  const data = await auth();
  const shopId = data?.user?.shopId;
  const { id: productId } = await params;

  const result = await getProductById(productId, shopId);
  const product = result?.data;

  if (!product) {
    return (
      <div className="w-full p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="text-sm text-gray-600 mt-2">
            The product you are trying to edit does not exist or was removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full">
      <ProductForm shopId={shopId} product={product} />
    </div>
  );
};

export default EditProductPage;
