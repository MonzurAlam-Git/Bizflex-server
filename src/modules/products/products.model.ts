import { model, Schema } from "mongoose";
import IProduct from "./products.interface";

const productSchema = new Schema<IProduct>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String, // This can be modified to ObjectId if you use a reference
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["inStock", "stockOut"],
    default: "inStock",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// productSchema.pre("save", function (next: NextFunction) {
//   this.updatedAt = Date.now();
//   next();
// });

export const ProductModel = model<IProduct>("Product-Model", productSchema);

// export const OrderModel = model<Order>("Order-Model", orderSchema);
