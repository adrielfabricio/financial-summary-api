import { Repository } from "typeorm";
import { dataSource } from "@config/database";
import Customer from "@models/customer.model";
import { ICustomerRepository } from "@repositories/interfaces/ICustomerRepository";

export default class CustomerRepository implements ICustomerRepository {
  private customerRepository: Repository<Customer>;

  constructor() {
    this.customerRepository = dataSource.getRepository(Customer);
  }

  async getMostActiveCustomers(): Promise<Customer[]> {
    return await this.customerRepository
      .createQueryBuilder("customer")
      .leftJoinAndSelect("customer.sales", "sale")
      .select("customer.name", "customer")
      .addSelect("COUNT(sale.id)", "numSales")
      .groupBy("customer.name")
      .orderBy("numSales", "DESC")
      .getRawMany();
  }
}
