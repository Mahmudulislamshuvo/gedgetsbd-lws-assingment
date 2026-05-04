import { notFound } from "next/navigation";

// Direct URL access এ 404 দেখাবে।
// Browser থেকে click করে আসলে intercepting route ধরবে।
export default function DeletePage() {
  notFound();
}
