import ProductForm from "@/components/managelist/ProductForm";
import { auth } from "@/lib/auth";

const CreateProductPage = async () => {
  const data = await auth();

  return (
    <>
      <div className="max-w-4xl mx-auto w-full">
        <ProductForm shopId={data?.user?.shopId} />
      </div>
    </>
  );
};

export default CreateProductPage;
