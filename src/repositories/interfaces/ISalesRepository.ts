import Sale from "@models/sale.model";

export interface ISalesRepository {
  getSalesByCategory(categoryId: number): Promise<Sale[]>;
  getSalesByProduct(productId: number): Promise<Sale[]>;
  getSalesByLocality(localityId: number): Promise<Sale[]>;
  getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]>;
}
