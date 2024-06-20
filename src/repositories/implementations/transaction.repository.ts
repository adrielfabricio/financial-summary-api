import { Repository } from "typeorm";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";
import Order from "@models/order.model";
import Database from "@config/database";

class TransactionRepository implements ITransactionRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async getTransactionDetails(transactionId: number): Promise<Order | null> {
    return await this.orderRepository.findOne({
      where: {
        id: transactionId,
      },
    });
  }

  async getTransactionsByCustomer(customerId: number): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        customerId,
      },
    });
  }
}

export default TransactionRepository;
