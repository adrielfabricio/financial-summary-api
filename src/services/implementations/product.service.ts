import { IProductRepository } from "@repositories/interfaces/IProductRepository";
import { IProductService } from "@services/interfaces/IProductService";

export default class ProductService implements IProductService {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return await this.productRepository.getAllProducts();
  }
}
