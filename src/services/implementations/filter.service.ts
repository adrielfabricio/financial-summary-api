import { IFilterRepository } from "@repositories/interfaces/IFilterRepository";
import { IFilterService } from "@services/interfaces/IFilterService";

export default class FilterService implements IFilterService {
  private filterRepository: IFilterRepository;

  constructor(filterRepository: IFilterRepository) {
    this.filterRepository = filterRepository;
  }

  async getFilteredData(filters: any): Promise<any> {
    return this.filterRepository.fetchFilteredData(filters);
  }
}
