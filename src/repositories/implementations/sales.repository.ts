import { Repository } from "typeorm";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";
import Order from "@models/order.model";
import Database from "@config/database";

class SalesRepository implements ISalesRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async getDailySales(date: Date): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        date,
      },
    });
  }

  async getWeeklySales(startDate: Date): Promise<Order[]> {
    return [];
  }

  async getMonthlySales(month: number, year: number): Promise<Order[]> {
    return [];
  }

  async getYearlySales(year: number): Promise<Order[]> {
    return [];
  }
}

export default SalesRepository;
