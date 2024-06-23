import { Request, Response } from "express";
import { IProductService } from "@services/interfaces/IProductService";

export default class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const data = await this.productService.getAllProducts();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving products", error });
    }
  }
}
