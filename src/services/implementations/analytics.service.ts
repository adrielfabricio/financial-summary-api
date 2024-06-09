import { IAnalyticsRepository } from "@repositories/interfaces/IAnalyticsRepository";
import { IAnalyticsService } from "@services/interfaces/IAnalyticsService";

export default class AnalyticsService implements IAnalyticsService {
  private analyticsRepository: IAnalyticsRepository;

  constructor(analyticsRepository: IAnalyticsRepository) {
    this.analyticsRepository = analyticsRepository;
  }

  async getAnalyticsData(criteria: any): Promise<any> {
    return this.analyticsRepository.fetchAnalyticsData(criteria);
  }
}
