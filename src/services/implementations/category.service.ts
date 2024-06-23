import { ICategoryRepository } from "@repositories/interfaces/ICategoryRepository";
import { ICategoryService } from "@services/interfaces/ICategoryService";

export default class CategoryService implements ICategoryService {
  private categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAllCategories() {
    return await this.categoryRepository.getAllCategories();
  }
}
