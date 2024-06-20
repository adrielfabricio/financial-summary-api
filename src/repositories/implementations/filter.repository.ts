import { Repository } from "typeorm";
import { IFilterRepository } from "@repositories/interfaces/IFilterRepository";
import Order from "@models/order.model";
import Database from "@config/database";

class FilterRepository implements IFilterRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async filterOrders(criteria: any): Promise<Order[]> {
    return [];
  }
}

export default FilterRepository;
