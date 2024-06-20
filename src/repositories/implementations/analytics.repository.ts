import { Between, Repository } from "typeorm";

import { IAnalyticsRepository } from "@repositories/interfaces/IAnalyticsRepository";
import Order from "@models/order.model";
import Database from "@config/database";

class AnalyticsRepository implements IAnalyticsRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async getSalesDataByPeriod(startDate: Date, endDate: Date): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
  }

  async getTopSellingProducts(): Promise<any[]> {
    return [];
  }
}

export default AnalyticsRepository;
