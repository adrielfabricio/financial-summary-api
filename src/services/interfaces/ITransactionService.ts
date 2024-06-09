export interface ITransactionService {
  getTransactionDetails(filters: any): Promise<any>;
}
