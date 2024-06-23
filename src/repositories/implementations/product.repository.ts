import { Repository } from "typeorm";
import Product from "@models/product.model";
import { dataSource } from "@config/database";
import { IProductRepository } from "@repositories/interfaces/IProductRepository";

export default class ProductRepository implements IProductRepository {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = dataSource.getRepository(Product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
