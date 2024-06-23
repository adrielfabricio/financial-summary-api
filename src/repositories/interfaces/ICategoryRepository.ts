import ProductType from "@models/product-type.model";

export interface ICategoryRepository {
  getAllCategories(): Promise<ProductType[]>;
}
