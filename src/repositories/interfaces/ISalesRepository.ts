export interface ISalesRepository {
  fetchSalesByPeriod(period: string): Promise<any>;
}
