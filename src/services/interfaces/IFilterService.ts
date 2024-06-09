export interface IFilterService {
  getFilteredData(filters: any): Promise<any>;
}
