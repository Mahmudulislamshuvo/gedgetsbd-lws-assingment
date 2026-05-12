"use client";

import { Eye, Pencil } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const EditAndViewButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentMode = searchParams.get("mode") || "view";

  const handleModeChange = (mode) => {
    const params = new URLSearchParams(searchParams.toString());

    if (mode === "edit") {
      params.set("mode", "edit");
    } else {
      params.set("mode", "view");
    }
    // saving the mode in the URL query parameters to persist the state across page reloads and direct links
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleModeChange("view")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          currentMode === "view"
            ? "bg-amazon-yellow hover:bg-amazon-yellow_hover border-amazon-secondary"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <Eye className="w-4 h-4 inline mr-1" />
        View Mode
      </button>

      <button
        onClick={() => handleModeChange("edit")}
        className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
          currentMode === "edit"
            ? "bg-amazon-yellow hover:bg-amazon-yellow_hover border-amazon-secondary"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <Pencil className="w-4 h-4 inline mr-1" />
        Edit Mode
      </button>
    </div>
  );
};

export default EditAndViewButton;
