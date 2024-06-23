import Sale from "@models/sale.model";
import { ISalesService } from "@services/interfaces/ISalesService";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";

class SalesService implements ISalesService {
  private salesRepository: ISalesRepository;

  constructor(salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository;
  }

  async getSalesByCategory(categoryId: number): Promise<Sale[]> {
    return await this.salesRepository.getSalesByCategory(categoryId);
  }

  async getSalesByProduct(productId: number): Promise<Sale[]> {
    return await this.salesRepository.getSalesByProduct(productId);
  }

  async getSalesByLocality(locationId: number): Promise<Sale[]> {
    return await this.salesRepository.getSalesByLocality(locationId);
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]> {
    return await this.salesRepository.getSalesByPeriod(startDate, endDate);
  }
}

export default SalesService;
