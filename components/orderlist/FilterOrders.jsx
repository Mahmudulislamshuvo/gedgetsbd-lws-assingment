const FilterOrders = () => {
  return (
    <div className="text-sm mb-6 flex items-center gap-1">
      <span className="font-bold">2 orders</span>
      <span>placed in</span>
      <select className="bg-gray-100 border border-gray-300 rounded shadow-sm px-2 py-1 text-xs outline-none hover:bg-gray-200">
        <option>past 3 months</option>
        <option>2024</option>
        <option>2023</option>
      </select>
    </div>
  );
};

export default FilterOrders;
