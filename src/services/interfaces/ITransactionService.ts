import Order from "@models/order.model";

export interface ITransactionService {
  getTransactionDetails(transactionId: number): Promise<Order | null>;
  getTransactionsByCustomer(customerId: number): Promise<Order[]>;
}
