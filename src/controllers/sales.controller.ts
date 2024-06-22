import { Request, Response } from "express";
import { ISalesService } from "@services/interfaces/ISalesService";

class SalesController {
  private salesService: ISalesService;

  constructor(salesService: ISalesService) {
    this.salesService = salesService;
  }

  async getSalesByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { category } = req.query;
      const data = await this.salesService.getSalesByCategory(
        category as string
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving sales data", error });
    }
  }

  async getSalesByProduct(req: Request, res: Response): Promise<Response> {
    try {
      const { product } = req.query;
      const data = await this.salesService.getSalesByProduct(product as string);
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving sales data", error });
    }
  }

  async getSalesByLocation(req: Request, res: Response): Promise<Response> {
    try {
      const { location } = req.query;
      const data = await this.salesService.getSalesByLocation(
        location as string
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving sales data", error });
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
