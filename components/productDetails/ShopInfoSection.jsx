const ShopInfoSection = () => {
  return (
    <div id="shop-tab" className="tab-content">
      <h2 className="text-xl font-bold mb-4">Shop Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">Official Apple Store</h3>
          <p className="text-sm text-gray-600 mb-4">
            Authorized Apple reseller providing genuine products with official
            warranty.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-bold">Rating:</span> 4.9/5 (2,450 reviews)
            </p>
            <p>
              <span className="font-bold">Products:</span> 156 items
            </p>
            <p>
              <span className="font-bold">Joined:</span>
              January 2020
            </p>
            <p>
              <span className="font-bold">Response Time:</span>
              Within 2 hours
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Policies</h3>
          <div className="space-y-2 text-sm">
            <p>
              <i
                data-lucide="check-circle"
                className="w-4 h-4 inline text-green-600 mr-1"
              ></i>
              14-day return policy
            </p>
            <p>
              <i
                data-lucide="check-circle"
                className="w-4 h-4 inline text-green-600 mr-1"
              ></i>
              1-year official warranty
            </p>
            <p>
              <i
                data-lucide="check-circle"
                className="w-4 h-4 inline text-green-600 mr-1"
              ></i>
              Free shipping on orders over ৳50,000
            </p>
            <p>
              <i
                data-lucide="check-circle"
                className="w-4 h-4 inline text-green-600 mr-1"
              ></i>
              Secure payment options
            </p>
          </div>
          <a
            href="shops.html"
            className="inline-block mt-4 text-amazon-blue hover:underline text-sm"
          >
            Visit Shop Page →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoSection;
