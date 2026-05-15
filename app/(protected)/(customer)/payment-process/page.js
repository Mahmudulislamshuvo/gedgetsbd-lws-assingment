import { getProductsByIds, updateCartQuantity } from "@/actions";
import PaymentMethod from "@/components/paymentProcess/PaymentMethod";
import RideSideSummery from "@/components/paymentProcess/RideSideSummery";
import SelectedProducts from "@/components/paymentProcess/SelectedProducts";
import ShippingAddress from "@/components/paymentProcess/ShippingAddress";
import { getUserCartItems } from "@/utils/getCarts";

const PaymentProcessPage = async () => {
  const cartItems = await getUserCartItems();

  const existingCartItems = await getProductsByIds(
    cartItems.map((item) => item.productId),
  );

  return (
    <div class="checkout-container flex-1 py-10 px-4 flex flex-col lg:flex-row gap-8">
      {/* <!-- Left Side: Steps --> */}
      <div class="flex-1 space-y-6">
        {/* <!-- 1. Shipping Address Summary --> */}
        <ShippingAddress />

        {/* <!-- 2. Selected Products List --> */}
        <SelectedProducts products={existingCartItems} cartItems={cartItems} />

        {/* <!-- 3. Payment Method --> */}
        <PaymentMethod />
      </div>

      {/* <!-- Right Side: Order Summary --> */}
      <RideSideSummery />
    </div>
  );
};

export default PaymentProcessPage;
