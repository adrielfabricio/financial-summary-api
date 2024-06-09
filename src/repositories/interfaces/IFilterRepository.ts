export interface IFilterRepository {
  fetchFilteredData(filters: any): Promise<any>;
}
