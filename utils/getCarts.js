import { auth } from "@/lib/auth";
import { cookies } from "next/headers";

export const getUserCartItems = async () => {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) return [];

    const cookiesStore = await cookies();
    const cartCookie = cookiesStore.get("cart");

    if (!cartCookie?.value) return [];

    const allCartItems = JSON.parse(cartCookie.value);

    return allCartItems.filter((item) => item.userId === userId);
  } catch (error) {
    console.error("Cart fetch error:", error);
    return [];
  }
};
