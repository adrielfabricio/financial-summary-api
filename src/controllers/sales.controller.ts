import { Request, Response } from "express";
import { ISalesService } from "@services/interfaces/ISalesService";

class SalesController {
  private salesService: ISalesService;

  constructor(salesService: ISalesService) {
    this.salesService = salesService;
  }

  async getDailySales(req: Request, res: Response): Promise<Response> {
    try {
      const { date } = req.query;
      const data = await this.salesService.getDailySales(
        new Date(date as string)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving daily sales", error });
    }
  }

  async getWeeklySales(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate } = req.query;
      const data = await this.salesService.getWeeklySales(
        new Date(startDate as string)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving weekly sales", error });
    }
  }

  async getMonthlySales(req: Request, res: Response): Promise<Response> {
    try {
      const { month, year } = req.query;
      const data = await this.salesService.getMonthlySales(
        parseInt(month as string),
        parseInt(year as string)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving monthly sales", error });
    }
  }

  async getSalesByPeriod(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate, endDate } = req.query;
      const data = await this.salesService.getSalesByPeriod(
        new Date(startDate as string),
        new Date(endDate as string)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving sales data", error });
    }
  }
}

export default SalesController;
