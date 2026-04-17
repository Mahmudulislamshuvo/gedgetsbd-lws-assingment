"use client";

import { useState } from "react";
import { updateProfileData } from "@/actions";
import { useRouter } from "next/navigation";

export default function ProfileEditForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await updateProfileData(user._id, user.userType, {
      name: name,
    });

    if (result.success) {
      alert("Profile updated successfully!");
      router.refresh(); // রিফ্রেশ দিলে Server Component নতুন ডাটা নিয়ে আসবে
    } else {
      alert(result.error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="border p-6 rounded shadow-sm bg-white"
    >
      <h3 className="font-bold mb-4 text-lg">Quick Edit Profile Name</h3>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-amazon-secondary"
          placeholder="Full Name"
        />
        <button
          type="submit"
          className="bg-amazon-yellow text-gray-800 px-6 py-2 rounded font-bold hover:bg-amazon-yellow_hover transition-colors whitespace-nowrap border border-amazon-secondary"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
