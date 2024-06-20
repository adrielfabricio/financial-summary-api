import { Between, Repository } from "typeorm";
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
        date: Between(
          new Date(date.setHours(0, 0, 0, 0)),
          new Date(date.setHours(23, 59, 59, 999))
        ),
      },
    });
  }

  async getWeeklySales(startDate: Date): Promise<Order[]> {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);
    return await this.orderRepository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
  }

  async getMonthlySales(month: number, year: number): Promise<Order[]> {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    return await this.orderRepository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
  }
}

export default SalesRepository;
