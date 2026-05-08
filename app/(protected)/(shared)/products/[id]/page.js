import BreadCrumb from "@/components/common/BreadCrumb";
import BuyBox from "@/components/productDetails/BuyBox";
import ProductDetailsImageCompo from "@/components/productDetails/ProductDetailsImageCompo";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import TabSection from "@/components/productDetails/TabSection";

const ProductDetailsPage = () => {
  return (
    <div>
      <div className="flex-1 max-w-[1500px] mx-auto w-full p-4">
        {/* <!-- Breadcrumbs --> */}
        <BreadCrumb />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- Left: Image Gallery --> */}
          <ProductDetailsImageCompo />

          {/* <!-- Center: Product Info --> */}
          <div className="lg:col-span-4">
            <h1 className="text-2xl font-normal mb-2">
              Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD, Space Gray
            </h1>
            <p className="text-sm text-gray-600 mb-3">
              Visit the
              <a href="shops.html" className="text-amazon-blue hover:underline">
                Apple Store
              </a>
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              </div>
              <span className="text-sm text-amazon-blue hover:underline cursor-pointer">
                1,245 ratings
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm">Price:</span>
                <span className="text-3xl text-amazon-orange">৳3,45,000</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Inclusive of all taxes
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-bold text-base mb-2">About this item</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Apple M2 Max chip for exceptional performance</li>
                <li>16-inch Liquid Retina XDR display</li>
                <li>32GB unified memory, 1TB SSD storage</li>
                <li>1080p FaceTime HD camera</li>
                <li>Six-speaker sound system with force-cancelling woofers</li>
                <li>Up to 21 hours battery life</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm mb-2">
                <span className="font-bold">Category:</span> Laptops & Computers
              </p>
              <p className="text-sm mb-2">
                <span className="font-bold">Brand:</span> Apple
              </p>
              <p className="text-sm">
                <span className="font-bold">Stock:</span>
                <span className="text-green-600 font-semibold">
                  24 units available
                </span>
              </p>
            </div>
          </div>

          {/* <!-- Right: Buy Box --> */}
          <BuyBox />
        </div>

        {/* <!-- Tabs Section --> */}
        <TabSection />

        {/* <!-- Related Products --> */}
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
