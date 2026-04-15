import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOutButton from "@/components/profile/SignOutButton";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="a-box p-4 space-y-2">
        <p>
          <strong>Name:</strong> {session.user.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <p>
          <strong>User type:</strong> {session.user.userType}
        </p>
        <p>
          <strong>Shop ID:</strong> {session.user.shopId || "N/A"}
        </p>

        {session.user.userType === "shopOwner" ? (
          <Link className="text-amazon-blue hover:underline" href="/managelist">
            Go to shop owner area
          </Link>
        ) : null}

        <div className="pt-2">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
