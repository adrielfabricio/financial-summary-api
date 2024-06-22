import Order from "@models/order.model";

export interface ITransactionService {
  getFinancialTransactions(): Promise<Order[]>;
}
