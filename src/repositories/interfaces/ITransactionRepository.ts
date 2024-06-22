import FinancialTransaction from "@models/financial-transaction.model";

export interface ITransactionRepository {
  getFinancialTransactions(): Promise<FinancialTransaction[]>;
}
