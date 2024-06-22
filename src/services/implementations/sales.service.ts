import { ISalesService } from "@services/interfaces/ISalesService";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";
import Order from "@models/order.model";

class SalesService implements ISalesService {
  private salesRepository: ISalesRepository;

  constructor(salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository;
  }

  async getSalesByCategory(category: string): Promise<Order[]> {
    return await this.salesRepository.getSalesByCategory(category);
  }

  async getSalesByProduct(product: string): Promise<Order[]> {
    return await this.salesRepository.getSalesByProduct(product);
  }

  async getSalesByLocation(location: string): Promise<Order[]> {
    return await this.salesRepository.getSalesByLocation(location);
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Order[]> {
    return await this.salesRepository.getSalesByPeriod(startDate, endDate);
  }
}

export default SalesService;
