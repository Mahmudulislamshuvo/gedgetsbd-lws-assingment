import Link from "next/link";

const CreateAccouuntButton = () => {
  return (
    <div className="w-full max-w-[350px] mb-8">
      <Link
        href="/register"
        className="block w-full py-1.5 border border-gray-400 rounded-sm text-center text-sm hover:bg-gray-50 transition-colors"
      >
        Create your Gadgets BD account
      </Link>
    </div>
  );
};

export default CreateAccouuntButton;
