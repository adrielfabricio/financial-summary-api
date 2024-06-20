import Order from "@models/order.model";

export interface ISalesService {
  getDailySales(date: Date): Promise<Order[]>;
  getWeeklySales(startDate: Date): Promise<Order[]>;
  getMonthlySales(month: number, year: number): Promise<Order[]>;
  getSalesByPeriod(startDate: Date, endDate: Date): Promise<Order[]>;
}
