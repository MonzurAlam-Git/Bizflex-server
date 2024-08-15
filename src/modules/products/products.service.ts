import IProduct from "./products.interface";
import { ProductModel } from "./products.model";
const createProductsIntoDB = async (product: IProduct) => {
  const productInstance = await ProductModel.create(product);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { ObjectId } = require('mongodb')
  // const objectId = new ObjectId(orderInstance.productId)

  // const product = await ProductModel.find({
  //   _id: objectId,
  // })

  // const product = await ProductModel.aggregate([{ $match: { _id: objectId } }])
  // console.log('product', product)

  return productInstance;
};

export const ProductServices = {
  createProductsIntoDB,
};
