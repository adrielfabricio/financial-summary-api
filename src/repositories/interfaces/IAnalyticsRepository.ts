export interface IAnalyticsRepository {
  fetchAnalyticsData(criteria: any): Promise<any>;
}
