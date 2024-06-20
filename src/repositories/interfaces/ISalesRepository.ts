import Order from "@models/order.model";

export interface ISalesRepository {
  getDailySales(date: Date): Promise<Order[]>;
  getWeeklySales(startDate: Date): Promise<Order[]>;
  getMonthlySales(month: number, year: number): Promise<Order[]>;
}
