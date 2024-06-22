import FinancialTransaction from "@models/financial-transaction.model";
import { ITransactionService } from "@services/interfaces/ITransactionService";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";

class TransactionService implements ITransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async getFinancialTransactions(): Promise<FinancialTransaction[]> {
    return await this.transactionRepository.getFinancialTransactions();
  }
}

export default TransactionService;
