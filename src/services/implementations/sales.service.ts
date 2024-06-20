import { ISalesService } from "@services/interfaces/ISalesService";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";
import Order from "@models/order.model";

class SalesService implements ISalesService {
  private salesRepository: ISalesRepository;

  constructor(salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository;
  }

  async getDailySales(date: Date): Promise<Order[]> {
    return await this.salesRepository.getDailySales(date);
  }

  async getWeeklySales(startDate: Date): Promise<Order[]> {
    return await this.salesRepository.getWeeklySales(startDate);
  }

  async getMonthlySales(month: number, year: number): Promise<Order[]> {
    return await this.salesRepository.getMonthlySales(month, year);
  }
}

export default SalesService;
