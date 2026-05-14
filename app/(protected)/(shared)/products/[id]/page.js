import { getShopDetails, getSingleProduct } from "@/actions";
import BreadCrumb from "@/components/common/BreadCrumb";
import BuyBox from "@/components/productDetails/BuyBox";
import ProductDetailsImageCompo from "@/components/productDetails/ProductDetailsImageCompo";
import ProductInfo from "@/components/productDetails/ProductInfo";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import TabSection from "@/components/productDetails/TabSection";

const ProductDetailsPage = async ({ params }) => {
  const { id } = params;

  const singleProduct = await getSingleProduct(id);
  const shopId = singleProduct?.data?.shopId;
  const shopInfo = shopId ? await getShopDetails(shopId) : null;

  return (
    <div>
      <div className="flex-1 max-w-375 mx-auto w-full p-4">
        {/* <!-- Breadcrumbs --> */}
        <BreadCrumb />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- Left: Image Gallery --> */}
          <ProductDetailsImageCompo product={singleProduct} />

          {/* <!-- Center: Product Info --> */}
          <ProductInfo product={singleProduct} />

          {/* <!-- Right: Buy Box --> */}
          <BuyBox />
        </div>

        {/* <!-- Tabs Section --> */}
        <TabSection product={singleProduct} shopInfo={shopInfo} />

        {/* <!-- Related Products --> */}
        <RelatedProducts singleProduct={singleProduct} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
