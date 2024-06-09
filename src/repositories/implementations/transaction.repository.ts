import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";

export default class TransactionRepository implements ITransactionRepository {
  public async fetchTransactionDetails(filters: any): Promise<any> {
    // Implement logic to fetch transaction details
  }
}
