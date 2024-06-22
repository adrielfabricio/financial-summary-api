import Sale from "@models/sale.model";
import { ISalesService } from "@services/interfaces/ISalesService";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";

class SalesService implements ISalesService {
  private salesRepository: ISalesRepository;

  constructor(salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository;
  }

  async getSalesByCategory(category: string): Promise<Sale[]> {
    return await this.salesRepository.getSalesByCategory(category);
  }

  async getSalesByProduct(product: string): Promise<Sale[]> {
    return await this.salesRepository.getSalesByProduct(product);
  }

  async getSalesByLocation(location: string): Promise<Sale[]> {
    return await this.salesRepository.getSalesByLocation(location);
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]> {
    return await this.salesRepository.getSalesByPeriod(startDate, endDate);
  }
}

export default SalesService;
