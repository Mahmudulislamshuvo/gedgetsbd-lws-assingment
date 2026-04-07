import Link from "next/link";

const AlreadyHaveAccount = () => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-300">
      <p className="text-sm">
        Already have an account?
        <Link
          href="/login"
          className="text-amazon-blue hover:text-amazon-orange hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default AlreadyHaveAccount;
