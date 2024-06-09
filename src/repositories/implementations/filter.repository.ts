import { IFilterRepository } from "@repositories/interfaces/IFilterRepository";

export default class FilterRepository implements IFilterRepository {
  public async fetchFilteredData(filters: any): Promise<any> {
    // Implement logic to fetch filtered data
  }
}
