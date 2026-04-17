"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SingOutButtonProfile = () => {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut({ redirect: false });
        router.push("/login");
      }}
      className="text-sm text-red-600 hover:underline px-2 py-1 font-medium"
    >
      Sign Out
    </button>
  );
};

export default SingOutButtonProfile;
