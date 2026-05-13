import EditShopProfile from "./EditShopProfile";
import ShopProfileViewMode from "./ShopProfileViewMode";
import EditAndViewButton from "./EditAndViewButton";
import { auth } from "@/lib/auth";
import { getShopDetails } from "@/actions";

const ShopProfile = async ({ searchParams }) => {
  const session = await auth();
  const resolvedSearchParams = await searchParams;
  const mode = resolvedSearchParams?.mode || "view";

  const shopId = session?.user?.shopId;
  const shopDetails = await getShopDetails(shopId);

  return (
    <div className="max-w-300 mx-auto w-full p-6">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-normal">Shop Profile</h1>
          <p className="text-sm text-gray-600">
            Manage your shop information and appearance on Gadgets BD
          </p>
        </div>
        <EditAndViewButton />
      </div>
      {/* <!-- View Mode --> */}
      {mode === "view" ? (
        <ShopProfileViewMode shopDetails={shopDetails?.data} />
      ) : (
        <EditShopProfile
          shopId={shopId}
          shopDetails={shopDetails?.data}
          searchParams={resolvedSearchParams}
        />
      )}
    </div>
  );
};

export default ShopProfile;
