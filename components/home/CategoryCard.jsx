import { formatUrlText } from "@/utils/formatUrlText";
import Image from "next/image";
import Link from "next/link";

const CategoryGridCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
        <h2 className="text-xl font-bold">Laptops & PCs</h2>

        <div className="grid grid-cols-2 gap-2 h-full">
          <Image
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
            alt="Laptop 1"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
            alt="Laptop 2"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300"
            alt="Laptop 3"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300"
            alt="Laptop 4"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <Link
          href={`/products?category=${formatUrlText("Laptops & Computers")}&page=1`}
          className="text-blue-600 text-sm hover:underline hover:text-red-700 mt-auto"
        >
          See all laptops
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
        <h2 className="text-xl font-bold">Smartphones</h2>

        <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt="Smartphone"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <Link
          href={`/products?category=${formatUrlText("Smartphones & Tablets")}&page=1`}
          className="text-blue-600 text-sm hover:underline hover:text-red-700 mt-auto"
        >
          Shop smartphones
        </Link>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
        <h2 className="text-xl font-bold">Accessories</h2>

        <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            alt="Accessories"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <Link
          href={`/products?category=${formatUrlText("Gaming Accessories")}&page=1`}
          className="text-blue-600 text-sm hover:underline hover:text-red-700 mt-auto"
        >
          Shop accessories
        </Link>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20 justify-between">
        <div>
          <h2 className="text-xl font-bold">Sign in for the best tech deals</h2>

          <button className="bg-yellow-400 w-full py-2 rounded-md shadow-sm mt-4 text-sm hover:bg-yellow-500">
            Sign in securely
          </button>
        </div>

        <div className="mt-4 h-full">
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500"
            alt="Tech"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryGridCard;
