import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";
import { ISalesService } from "@services/interfaces/ISalesService";

export default class SalesService implements ISalesService {
  private salesRepository: ISalesRepository;

  constructor(salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository;
  }

  async getSalesByPeriod(period: string): Promise<any> {
    return this.salesRepository.fetchSalesByPeriod(period);
  }
}
