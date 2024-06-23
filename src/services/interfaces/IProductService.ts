import Product from "@models/product.model";

export interface IProductService {
  getAllProducts(): Promise<Product[]>;
}
