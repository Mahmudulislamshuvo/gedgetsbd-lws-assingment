import { getAllShops } from "@/actions";
import Link from "next/link";

const BrandsCard = () => {
  const allShops = getAllShops();

  const brandList = [
    { id: 1, name: "Apple", value: "apple" },
    { id: 2, name: "Samsung", value: "samsung" },
    { id: 3, name: "Dell", value: "dell" },
    { id: 4, name: "HP", value: "hp" },
    { id: 5, name: "Lenovo", value: "lenovo" },
    { id: 6, name: "Sony", value: "sony" },
    { id: 7, name: "Razer", value: "razer" },
    { id: 8, name: "Logitech", value: "logitech" },
    { id: 9, name: "Sony", value: "sony" },
  ];

  return (
    <>
      {brandList.map((brand) => (
        <Link key={brand.id} href={`/shops?brands=${brand.value}`}>
          <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
            <span className="text-2xl font-bold text-gray-400">
              {brand.name}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BrandsCard;
