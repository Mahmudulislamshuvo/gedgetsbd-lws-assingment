import { getProductsByIds, getProfileData } from "@/actions";
import PaymentMethod from "@/components/paymentProcess/PaymentMethod";
import RideSideSummery from "@/components/paymentProcess/RideSideSummery";
import SelectedProducts from "@/components/paymentProcess/SelectedProducts";
import ShippingAddress from "@/components/paymentProcess/ShippingAddress";
import { auth } from "@/lib/auth";
import { getUserCartItems } from "@/utils/getCarts";

const PaymentProcessPage = async () => {
  const session = await auth();
  const cartItems = await getUserCartItems();

  const existingCartItems = await getProductsByIds(
    cartItems.map((item) => item.productId),
  );

  const getUserInfo = await getProfileData(session?.user?.id);

  return (
    <div class="checkout-container flex-1 py-10 px-4 flex flex-col lg:flex-row gap-8">
      {/* <!-- Left Side: Steps --> */}
      <div class="flex-1 space-y-6">
        {/* <!-- 1. Shipping Address Summary --> */}
        <ShippingAddress userInfo={getUserInfo?.data} />

        {/* <!-- 2. Selected Products List --> */}
        <SelectedProducts products={existingCartItems} cartItems={cartItems} />

        {/* <!-- 3. Payment Method --> */}
        <PaymentMethod />
      </div>

      {/* <!-- Right Side: Order Summary --> */}
      <RideSideSummery userInfo={getUserInfo?.data} />
    </div>
  );
};

export default PaymentProcessPage;
