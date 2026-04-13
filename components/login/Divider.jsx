const Divider = () => {
  return (
    <div className="w-full max-w-sm mb-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-2 text-gray-500">
            New to Gadgets BD?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Divider;
