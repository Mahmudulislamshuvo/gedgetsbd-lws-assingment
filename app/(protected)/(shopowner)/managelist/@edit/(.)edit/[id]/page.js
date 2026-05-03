import { auth } from "@/lib/auth";
import { getProductById } from "@/actions";
import EditProductModalClient from "@/components/managelist/EditProductModalClient";

const EditProductModal = async ({ params }) => {
  const data = await auth();
  const shopId = data?.user?.shopId;
  const { id: productId } = await params;

  const result = await getProductById(productId, shopId);
  const product = result?.data;

  return <EditProductModalClient shopId={shopId} product={product} />;
};

export default EditProductModal;
