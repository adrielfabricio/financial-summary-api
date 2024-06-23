import ProductType from "@models/product-type.model";

export interface ICategoryService {
  getAllCategories(): Promise<ProductType[]>;
}
