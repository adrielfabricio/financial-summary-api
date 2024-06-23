import Customer from "@models/customer.model";
import { ICustomerService } from "@services/interfaces/ICustomerService";
import { ICustomerRepository } from "@repositories/interfaces/ICustomerRepository";

export default class CustomerService implements ICustomerService {
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async getMostActiveCustomers(): Promise<Customer[]> {
    return await this.customerRepository.getMostActiveCustomers();
  }
}
