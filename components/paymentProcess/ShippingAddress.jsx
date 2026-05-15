const ShippingAddress = ({ userInfo }) => {
  const address = userInfo?.address;
  const addressText = address
    ? [address.village, address.upazila, address.district]
        .filter(Boolean)
        .join(", ")
    : "";

  return (
    <div class="hover:bg-gray-50 border-b border-gray-300 pb-6 flex justify-between items-start transition-colors cursor-pointer">
      <div>
        <span class="section-number mr-4">1</span>
        <span class="font-bold text-lg">Shipping address</span>
      </div>
      <div class="text-sm flex-1 ml-10">
        <p>{userInfo?.name}</p>
        <p>{addressText}</p>
        <p>
          {userInfo?.city}, {userInfo?.postalCode}
        </p>
        {/* <p>{userInfo?.country}</p> */}
        <p class="mt-1 text-gray-600">Phone: {userInfo?.phone}</p>
      </div>
      <a
        href="#"
        class="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
      >
        Change
      </a>
    </div>
  );
};

export default ShippingAddress;
