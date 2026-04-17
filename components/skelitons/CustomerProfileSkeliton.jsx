const CustomerProfileSkeliton = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden animate-pulse">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 w-40 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden animate-pulse">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="p-6 space-y-3">
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-56 bg-gray-200 rounded"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileSkeliton;
