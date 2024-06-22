import { ITransactionService } from "@services/interfaces/ITransactionService";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";
import Order from "@models/order.model";

class TransactionService implements ITransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async getFinancialTransactions(): Promise<Order[]> {
    return await this.transactionRepository.getFinancialTransactions();
  }
}

export default TransactionService;
