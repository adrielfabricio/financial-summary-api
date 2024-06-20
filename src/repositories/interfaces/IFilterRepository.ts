import Order from "@models/order.model";

export interface IFilterRepository {
  filterOrders(criteria: any): Promise<Order[]>;
  // other methods
}
