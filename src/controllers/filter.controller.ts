import { Request, Response } from "express";
import { IFilterService } from "@services/interfaces/IFilterService";

class FilterController {
  private filterService: IFilterService;

  constructor(filterService: IFilterService) {
    this.filterService = filterService;
  }

  async filterOrders(req: Request, res: Response): Promise<Response> {
    try {
      const criteria = req.body;
      const data = await this.filterService.filterOrders(criteria);
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ message: "Error filtering orders", error });
    }
  }
}

export default FilterController;
