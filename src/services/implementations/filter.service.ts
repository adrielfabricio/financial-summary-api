import { IFilterService } from "@services/interfaces/IFilterService";
import { IFilterRepository } from "@repositories/interfaces/IFilterRepository";
import Order from "@models/order.model";

class FilterService implements IFilterService {
  private filterRepository: IFilterRepository;

  constructor(filterRepository: IFilterRepository) {
    this.filterRepository = filterRepository;
  }

  async filterOrders(criteria: any): Promise<Order[]> {
    return await this.filterRepository.filterOrders(criteria);
  }
}

export default FilterService;
