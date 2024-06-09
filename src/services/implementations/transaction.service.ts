import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";
import { ITransactionService } from "@services/interfaces/ITransactionService";

export default class TransactionService implements ITransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async getTransactionDetails(filters: any): Promise<any> {
    return this.transactionRepository.fetchTransactionDetails(filters);
  }
}
