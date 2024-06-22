import Order from "@models/order.model";

export interface ISalesService {
  getSalesByCategory(category: string): Promise<Order[]>;
  getSalesByProduct(product: string): Promise<Order[]>;
  getSalesByLocation(location: string): Promise<Order[]>;
  getSalesByPeriod(startDate: Date, endDate: Date): Promise<Order[]>;
}
