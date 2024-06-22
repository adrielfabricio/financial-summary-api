import { ICustomerService } from "@services/interfaces/ICustomerService";
import { ICustomerRepository } from "@repositories/interfaces/ICustomerRepository";

export default class CustomerService implements ICustomerService {
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async getMostActiveCustomers(): Promise<any[]> {
    return await this.customerRepository.getMostActiveCustomers();
  }
}
