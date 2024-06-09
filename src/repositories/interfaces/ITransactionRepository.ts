export interface ITransactionRepository {
  fetchTransactionDetails(filters: any): Promise<any>;
}
