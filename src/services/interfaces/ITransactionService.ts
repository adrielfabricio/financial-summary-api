import * as Excel from "exceljs";
import FinancialTransaction from "@models/financial-transaction.model";

export interface ITransactionService {
  getFinancialTransactions(): Promise<FinancialTransaction[]>;
  exportTransactionsToXLS(): Promise<Excel.Buffer>;
}
