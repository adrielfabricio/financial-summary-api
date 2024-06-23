import Sale from "@models/sale.model";

export interface ISalesService {
  getSalesByCategory(categoryId: number): Promise<Sale[]>;
  getSalesByProduct(productId: number): Promise<Sale[]>;
  getSalesByLocality(locationId: number): Promise<Sale[]>;
  getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]>;
}
