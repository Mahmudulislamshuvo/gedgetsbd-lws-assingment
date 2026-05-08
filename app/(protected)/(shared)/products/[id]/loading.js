export default function ProductDetailsLoading() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-amazon-secondary">
        {/* একটি ঘুরন্ত স্পিনার */}
        <Loader2 className="h-8 w-8 animate-spin text-[#e77600]" />
        <p className="text-sm font-medium text-gray-500">Loading products...</p>
      </div>
    </div>
  );
}
