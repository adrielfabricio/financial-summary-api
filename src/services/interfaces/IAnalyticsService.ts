export interface IAnalyticsService {
  getAnalyticsData(criteria: any): Promise<any>;
}
