interface IProduct {
  id: string;
  name: string;
  // Stock Keeping Unit
  sku: string;
  category: string; // Can be a category ID or name
  price: number;
  quantity: number;
  description?: string;
  status: "inStock" | "stockOut";
  createdAt: Date;
  updatedAt: Date;
}

export default IProduct;
