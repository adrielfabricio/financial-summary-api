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
    const query = `
          SELECT p.name, SUM(oi.quantity) as totalQuantity
          FROM order_items oi
          JOIN products p ON oi.productId = p.id
          GROUP BY p.name
          ORDER BY totalQuantity DESC
          LIMIT 10;
      `;
    return await this.orderRepository.query(query);
  }
}

export default AnalyticsRepository;
