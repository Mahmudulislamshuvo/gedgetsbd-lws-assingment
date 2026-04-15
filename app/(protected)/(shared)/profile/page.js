import ShopProfile from "@/components/profile/ShopProfile";
import CustomerProfile from "@/components/profile/CustomerProfile";
import React from "react";
import { auth } from "@/lib/auth";

const ProfilePage = async () => {
  const session = await auth();

  return (
    <>
      {session?.user?.userType === "customer" ? (
        <CustomerProfile />
      ) : (
        <ShopProfile />
      )}
    </>
  );
};

export default ProfilePage;
