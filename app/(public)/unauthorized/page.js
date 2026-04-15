import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="a-box p-6 w-full max-w-md text-center space-y-3">
        <h1 className="text-2xl font-semibold">Unauthorized</h1>
        <p className="text-sm text-gray-600">
          You do not have permission to access this page.
        </p>
        <Link href="/" className="text-amazon-blue hover:underline">
          Go to home
        </Link>
      </div>
    </div>
  );
}
