import { Repository } from "typeorm";
import { dataSource } from "@config/database";
import FinancialTransaction from "@models/financial-transaction.model";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";

export default class TransactionRepository implements ITransactionRepository {
  private financialTransactionRepository: Repository<FinancialTransaction>;

  constructor() {
    this.financialTransactionRepository =
      dataSource.getRepository(FinancialTransaction);
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
