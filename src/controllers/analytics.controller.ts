import { Request, Response } from "express";
import { IAnalyticsService } from "@services/interfaces/IAnalyticsService";

export default class AnalyticsController {
  private analyticsService: IAnalyticsService;

  constructor(analyticsService: IAnalyticsService) {
    this.analyticsService = analyticsService;
  }

  public async getAnalyticsData(req: Request, res: Response): Promise<void> {
    try {
      const criteria = req.query;
      const data = await this.analyticsService.getAnalyticsData(criteria);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
