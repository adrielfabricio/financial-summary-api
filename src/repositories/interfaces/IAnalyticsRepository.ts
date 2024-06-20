import Order from "@models/order.model";

export interface IAnalyticsRepository {
  getSalesDataByPeriod(startDate: Date, endDate: Date): Promise<Order[]>;
  getTopSellingProducts(): Promise<any[]>;
  // other methods
}
