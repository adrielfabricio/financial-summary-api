import { Request, Response } from "express";
import { ISalesService } from "@services/interfaces/ISalesService";

export default class SalesController {
  private salesService: ISalesService;

  constructor(salesService: ISalesService) {
    this.salesService = salesService;
  }

  async getSalesByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { categoryId } = req.params;
      const data = await this.salesService.getSalesByCategory(
        parseInt(categoryId)
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
      const { productId } = req.params;
      const data = await this.salesService.getSalesByProduct(
        parseInt(productId)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving sales data", error });
    }
  }

  async getSalesByLocality(req: Request, res: Response): Promise<Response> {
    try {
      const { localityId } = req.params;
      const data = await this.salesService.getSalesByLocality(
        parseInt(localityId)
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
