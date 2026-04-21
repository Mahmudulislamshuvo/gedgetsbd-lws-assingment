import { auth } from "@/lib/auth";
import CreateProductModalClient from "@/components/managelist/CreateProductModalClient";

const CreateProductModal = async () => {
  const data = await auth();

  return <CreateProductModalClient shopId={data?.user?.shopId} />;
};

export default CreateProductModal;
