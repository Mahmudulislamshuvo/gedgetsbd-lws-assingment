const productIsAvailable = (input) => {
  const stockQuantity =
    typeof input === "number" ? input : input?.stockQuantity;

  if (stockQuantity == null) return "Out of Stock";
  if (stockQuantity <= 0) return "Out of Stock";
  if (stockQuantity <= 5) return "Low Stock";
  return "In Stock";
};

export default productIsAvailable;
