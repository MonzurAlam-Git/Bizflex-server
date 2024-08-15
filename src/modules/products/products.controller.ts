import { ProductServices } from "./products.service";
import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;
    // handle order validation
    // const zodOrderParser = OrderValidationSchema.parse(OrderData);

    const result = await ProductServices.createProductsIntoDB(ProductData);

    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
};
