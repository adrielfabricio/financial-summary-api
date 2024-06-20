import Order from "@models/order.model";

export interface IFilterService {
  filterOrders(criteria: any): Promise<Order[]>;
}
