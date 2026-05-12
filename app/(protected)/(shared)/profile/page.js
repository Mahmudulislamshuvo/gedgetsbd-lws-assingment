import ShopProfile from "@/components/profile/ShopProfile";
import CustomerProfile from "@/components/profile/CustomerProfile";
import React from "react";
import { auth } from "@/lib/auth";

const ProfilePage = async ({ searchParams }) => {
  const session = await auth();

  console.log(session);

  const shopId = session?.user?.shopId;

  return (
    <>
      {session?.user?.userType === "customer" ? (
        <CustomerProfile />
      ) : (
        <ShopProfile searchParams={searchParams} />
      )}
    </>
  );
};

export default ProfilePage;
