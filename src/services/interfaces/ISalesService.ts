export interface ISalesService {
  getSalesByPeriod(period: string): Promise<any>;
}
