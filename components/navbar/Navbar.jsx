import { auth } from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <nav className="bg-amazon text-white">
      {/* <!-- Top Nav --> */}
      <div className="max-w-375 mx-auto flex items-center p-2 gap-4">
        {/* <!-- Logo --> */}
        <Link
          href="/"
          className="flex items-center hover:outline-1 hover:outline-white rounded-sm p-1"
        >
          <span className="text-2xl font-bold tracking-tighter">
            gadgets<span className="italic text-amazon-secondary">BD</span>
          </span>
        </Link>

        {/* <!-- Search --> */}
        <div className="flex-1 flex h-10 rounded-md overflow-hidden focus-within:ring-3 focus-within:ring-amazon-secondary">
          <select className="bg-gray-100 text-black text-xs px-2 border-r border-gray-300 cursor-pointer hover:bg-gray-200">
            <option>All</option>
            <option>Laptops</option>
            <option>Phones</option>
            <option>Accessories</option>
            <option>Gaming</option>
          </select>
          <input
            type="text"
            placeholder="Search Gadgets, Laptops, Phones..."
            className="flex-1 px-3 text-black outline-none"
          />
          <button className="bg-amazon-secondary hover:bg-[#fa8900] px-4 flex items-center justify-center">
            <i data-lucide="search" className="text-black w-5 h-5"></i>
          </button>
        </div>

        {/* <!-- Right Actions --> */}
        <div className="flex items-center gap-4">
          {/* <!-- Language --> */}
          <div className="hidden md:flex items-center hover:outline-1 hover:outline-white rounded-sm p-1 cursor-pointer">
            <div className="font-bold text-sm">EN</div>
          </div>

          {/* <!-- Account --> */}

          {session?.user ? (
            <Link
              href={
                session?.user?.userType === "shopOwner"
                  ? "/dashboard"
                  : "/profile"
              }
              className="hover:outline-1 hover:outline-white rounded-sm p-1 cursor-pointer"
            >
              <div className="text-xs leading-none text-gray-300">
                Hello, {session.user.name}
              </div>
              <div className="font-bold text-sm">Account & Lists</div>
            </Link>
          ) : (
            <Link
              href="/login"
              className="hover:outline-1 hover:outline-white rounded-sm p-1 cursor-pointer"
            >
              <div className="text-xs leading-none text-gray-300">
                Hello, Sign in
              </div>
              <div className="font-bold text-sm">Account & Lists</div>
            </Link>
          )}

          {/* <!-- Cart --> */}
          <Link
            href="/cart"
            className="flex items-end hover:outline-1 hover:outline-white rounded-sm p-1 cursor-pointer relative"
          >
            <i data-lucide="shopping-cart" className="w-8 h-8"></i>
            <span className="font-bold text-amazon-secondary absolute top-0 left-1/2 -translate-x-1/2 text-sm">
              3
            </span>
            <span className="font-bold text-sm hidden md:block">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
