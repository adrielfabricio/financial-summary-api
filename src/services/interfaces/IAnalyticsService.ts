import Order from "@models/order.model";

export interface IAnalyticsService {
  getSalesDataByPeriod(startDate: Date, endDate: Date): Promise<Order[]>;
  getTopSellingProducts(): Promise<any[]>;
}
