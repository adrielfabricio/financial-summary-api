import Customer from "@models/customer.model";

export interface ICustomerService {
  getMostActiveCustomers(): Promise<Customer[]>;
}
