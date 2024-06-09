import { Request, Response } from "express";
import { ISalesService } from "@services/interfaces/ISalesService";

export default class SalesController {
  private salesService: ISalesService;

  constructor(salesService: ISalesService) {
    this.salesService = salesService;
  }

  public async getDailySales(req: Request, res: Response): Promise<void> {
    try {
      const sales = await this.salesService.getSalesByPeriod("daily");
      res.status(200).json(sales);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getWeeklySales(req: Request, res: Response): Promise<void> {
    try {
      const sales = await this.salesService.getSalesByPeriod("weekly");
      res.status(200).json(sales);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getMonthlySales(req: Request, res: Response): Promise<void> {
    try {
      const sales = await this.salesService.getSalesByPeriod("monthly");
      res.status(200).json(sales);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
