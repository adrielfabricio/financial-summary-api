import { Repository } from "typeorm";
import Database from "@config/database";
import Customer from "@models/customer.model";
import { ICustomerRepository } from "@repositories/interfaces/ICustomerRepository";

export default class CustomerRepository implements ICustomerRepository {
  private customerRepository: Repository<Customer>;

  constructor() {
    this.customerRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Customer);
  }

  async getMostActiveCustomers(): Promise<Customer[]> {
    return await this.customerRepository
      .createQueryBuilder("customer")
      .select("customer.name")
      .addSelect("COUNT(order.id)", "num_sales")
      .innerJoin("customer.orders", "order")
      .groupBy("customer.name")
      .orderBy("num_sales", "DESC")
      .getRawMany();
  }
}
