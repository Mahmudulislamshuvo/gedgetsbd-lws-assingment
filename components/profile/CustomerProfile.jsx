import { auth } from "@/lib/auth";
import { getProfileData } from "@/actions";
import CustomerPersonalDetailsCard from "./CustomerPersonalDetailsCard";
import SingOutButtonProfile from "./SingOutButtonProfile";

const CustomerProfile = async () => {
  const session = await auth();

  if (!session?.user) {
    return <div>Please log in</div>;
  }

  const result = await getProfileData(session.user.id);
  const profileData = result.success ? result.data : null;

  return (
    <div className="max-w-300 mx-auto w-full p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-normal">Customer Profile</h1>
        <p className="text-sm text-gray-600">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Details Card */}
        <CustomerPersonalDetailsCard initialData={profileData} />

        {/* Quick Actions Side */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Account Summary
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-600">Total Orders</span>
                <span className="font-bold text-amazon-orange text-lg">12</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-600">
                  Pending Deliveries
                </span>
                <span className="font-bold text-amazon-blue text-lg">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reviews Written</span>
                <span className="font-bold text-gray-800 text-lg">4</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Quick Links
              </h2>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <a
                href="/orderlist"
                className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline px-2 py-1"
              >
                View Order History
              </a>
              <a
                href="/cart"
                className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline px-2 py-1"
              >
                Go to Cart
              </a>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <SingOutButtonProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
