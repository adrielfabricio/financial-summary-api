import { Repository } from "typeorm";
import Database from "@config/database";
import FinancialTransaction from "@models/financial-transaction.model";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";

export default class TransactionRepository implements ITransactionRepository {
  private financialTransactionRepository: Repository<FinancialTransaction>;

  constructor() {
    this.financialTransactionRepository = Database.getInstance()
      .getDataSource()
      .getRepository(FinancialTransaction);
  }

  async getFinancialTransactions(): Promise<FinancialTransaction[]> {
    return await this.financialTransactionRepository
      .createQueryBuilder("transaction")
      .leftJoinAndSelect("transaction.sale", "sale")
      .leftJoinAndSelect("transaction.customer", "customer")
      .leftJoinAndSelect("transaction.deliverer", "deliverer")
      .getMany();
  }
}
