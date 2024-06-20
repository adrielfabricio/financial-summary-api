import { ITransactionService } from "@services/interfaces/ITransactionService";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";
import Order from "@models/order.model";

class TransactionService implements ITransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async getTransactionDetails(transactionId: number): Promise<Order | null> {
    return await this.transactionRepository.getTransactionDetails(
      transactionId
    );
  }

  async getTransactionsByCustomer(customerId: number): Promise<Order[]> {
    return await this.transactionRepository.getTransactionsByCustomer(
      customerId
    );
  }
}

export default TransactionService;
