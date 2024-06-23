import { Repository } from "typeorm";
import { dataSource } from "@config/database";
import ProductType from "@models/product-type.model";
import { ICategoryRepository } from "@repositories/interfaces/ICategoryRepository";

export default class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<ProductType>;

  constructor() {
    this.categoryRepository = dataSource.getRepository(ProductType);
  }

  async getAllCategories(): Promise<ProductType[]> {
    return await this.categoryRepository.find();
  }
}
