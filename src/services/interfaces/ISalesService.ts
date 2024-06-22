import Sale from "@models/sale.model";

export interface ISalesService {
  getSalesByCategory(category: string): Promise<Sale[]>;
  getSalesByProduct(product: string): Promise<Sale[]>;
  getSalesByLocation(location: string): Promise<Sale[]>;
  getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]>;
}
