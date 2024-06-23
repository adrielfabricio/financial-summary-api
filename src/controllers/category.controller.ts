import { Request, Response } from "express";
import { ICategoryService } from "@services/interfaces/ICategoryService";

export default class CategoryController {
  private categoryService: ICategoryService;

  constructor(categoryService: ICategoryService) {
    this.categoryService = categoryService;
  }

  async getAllCategories(req: Request, res: Response) {
    try {
      const data = await this.categoryService.getAllCategories();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving categories", error });
    }
  }
}
