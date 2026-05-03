export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl">
        <div className="p-6 space-y-6 animate-pulse">
          <div className="space-y-2">
            <div className="h-7 w-48 bg-gray-200 rounded" />
            <div className="h-4 w-64 bg-gray-200 rounded" />
          </div>

          <div className="space-y-4">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
            <div className="h-24 bg-gray-200 rounded" />
          </div>

          <div className="space-y-4">
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-4 w-36 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-gray-200 rounded" />
              <div className="aspect-square bg-gray-200 rounded" />
              <div className="aspect-square bg-gray-200 rounded" />
              <div className="aspect-square bg-gray-200 rounded" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <div className="h-10 w-28 bg-gray-200 rounded" />
            <div className="h-10 w-36 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
