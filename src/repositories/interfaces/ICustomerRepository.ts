import Customer from "@models/customer.model";

export interface ICustomerRepository {
  getMostActiveCustomers(): Promise<Customer[]>;
}
