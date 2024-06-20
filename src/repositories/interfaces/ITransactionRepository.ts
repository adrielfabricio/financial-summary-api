import Order from "@models/order.model";

export interface ITransactionRepository {
  getTransactionDetails(transactionId: number): Promise<Order | null>;
  getTransactionsByCustomer(customerId: number): Promise<Order[]>;
  // Adicione outros métodos conforme necessário
}
