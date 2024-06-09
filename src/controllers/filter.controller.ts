import { Request, Response } from "express";
import { IFilterService } from "@services/interfaces/IFilterService";

export default class FilterController {
  private filterService: IFilterService;

  constructor(filterService: IFilterService) {
    this.filterService = filterService;
  }

  public async getFilteredData(req: Request, res: Response): Promise<void> {
    try {
      const filters = req.query;
      const data = await this.filterService.getFilteredData(filters);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
