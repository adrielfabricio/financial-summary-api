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

  async getSalesByCategory(category: string): Promise<Order[]> {
    return await this.orderRepository
      .createQueryBuilder("order")
      .select("order.category")
      .addSelect("SUM(order.totalValue)", "total_sales")
      .groupBy("order.category")
      .getRawMany();
  }

  async getSalesByProduct(product: string): Promise<Order[]> {
    return await this.orderRepository
      .createQueryBuilder("order")
      .select("order.product")
      .addSelect("SUM(order.totalValue)", "total_sales")
      .groupBy("order.product")
      .getRawMany();
  }

  async getSalesByLocation(location: string): Promise<Order[]> {
    return await this.orderRepository
      .createQueryBuilder("order")
      .select("order.location")
      .addSelect("SUM(order.totalValue)", "total_sales")
      .groupBy("order.location")
      .getRawMany();
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
