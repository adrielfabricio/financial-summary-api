import Order from "@models/order.model";

export interface ITransactionRepository {
  getFinancialTransactions(): Promise<Order[]>;
}
