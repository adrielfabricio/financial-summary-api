import Product from "@models/product.model";

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
}
