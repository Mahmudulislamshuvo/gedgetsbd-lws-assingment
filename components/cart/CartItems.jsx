const CartItems = ({ item }) => {
  return (
    <div className="p-4 border-b border-gray-300 flex gap-4 hover:bg-gray-50">
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item?.image}
          className="w-full h-full object-cover rounded border border-gray-200"
          alt={item.title}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-base mb-1">
          <a
            href={item?.link}
            className="text-amazon-blue hover:text-amazon-orange hover:underline"
          >
            {item?.title}
          </a>
        </h3>
        <p className="text-sm text-green-700 font-medium">
          {item?.stockStatus}
        </p>
        <p className="text-xs text-gray-600 mt-1">Sold by: {item?.seller}</p>
        <p className="text-xs text-gray-600">{item?.shipping}</p>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-base mb-1">
          <a
            href={item?.link}
            className="text-amazon-blue hover:text-amazon-orange hover:underline"
          >
            {item?.title}
          </a>
        </h3>
        <p className="text-sm text-green-700 font-medium">
          {item?.stockStatus}
        </p>
        <p className="text-xs text-gray-600 mt-1">Sold by: {item?.seller}</p>
        <p className="text-xs text-gray-600">{item?.shipping}</p>

        <div className="flex items-center gap-4 mt-3">
          {/* <!-- Quantity Selector --> */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-600">Qty:</label>
            <select className="border border-gray-400 rounded-md px-2 py-1 text-sm bg-gray-50 outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <span className="text-gray-300">|</span>

          {/* <!-- Delete Button --> */}
          <button className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline">
            Delete
          </button>

          <span className="text-gray-300">|</span>

          {/* <!-- Save for Later --> */}
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-amazon-orange">৳{item?.price}</p>
      </div>
    </div>
  );
};

export default CartItems;
