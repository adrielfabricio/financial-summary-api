import { IAnalyticsService } from "@services/interfaces/IAnalyticsService";
import { IAnalyticsRepository } from "@repositories/interfaces/IAnalyticsRepository";
import Order from "@models/order.model";

class AnalyticsService implements IAnalyticsService {
  private analyticsRepository: IAnalyticsRepository;

  constructor(analyticsRepository: IAnalyticsRepository) {
    this.analyticsRepository = analyticsRepository;
  }

  async getSalesDataByPeriod(startDate: Date, endDate: Date): Promise<Order[]> {
    return await this.analyticsRepository.getSalesDataByPeriod(
      startDate,
      endDate
    );
  }

  async getTopSellingProducts(): Promise<any[]> {
    return await this.analyticsRepository.getTopSellingProducts();
  }
}

export default AnalyticsService;
