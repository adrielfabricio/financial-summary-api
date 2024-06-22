import FinancialTransaction from "@models/financial-transaction.model";

export interface ITransactionService {
  getFinancialTransactions(): Promise<FinancialTransaction[]>;
}
