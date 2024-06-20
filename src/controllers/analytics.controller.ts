import { Request, Response } from "express";
import { IAnalyticsService } from "@services/interfaces/IAnalyticsService";

class AnalyticsController {
  private analyticsService: IAnalyticsService;

  constructor(analyticsService: IAnalyticsService) {
    this.analyticsService = analyticsService;
  }

  async getSalesDataByPeriod(req: Request, res: Response): Promise<Response> {
    try {
      const { startDate, endDate } = req.query;
      const data = await this.analyticsService.getSalesDataByPeriod(
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

  async getTopSellingProducts(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.analyticsService.getTopSellingProducts();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving top selling products", error });
    }
  }
}

export default AnalyticsController;
