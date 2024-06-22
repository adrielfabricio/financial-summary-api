import { Repository } from "typeorm";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";
import Order from "@models/order.model";
import Database from "@config/database";

export default class TransactionRepository implements ITransactionRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async getFinancialTransactions(): Promise<Order[]> {
    return await this.orderRepository.find({
      relations: ["customer", "deliveryman"],
    });
  }
}
