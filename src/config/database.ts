import { DataSource } from "typeorm";
import City from "@models/city.model";
import Neighborhood from "@models/neighborhood.model";
import Locality from "@models/locality.model";
import Enterprise from "@models/enterprise.model";
import Employee from "@models/employee.model";
import Customer from "@models/customer.model";
import PaymentMethod from "@models/payment-method.model";
import Order from "@models/order.model";
// import other models as needed

class Database {
  private static instance: Database;
  private dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_NAME || "ifoodsocial",
      entities: [
        City,
        Neighborhood,
        Locality,
        Enterprise,
        Employee,
        Customer,
        PaymentMethod,
        Order,
        // add other models here
      ],
      synchronize: false,
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async initialize() {
    try {
      await this.dataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (error) {
      console.error("Error during Data Source initialization:", error);
      throw error;
    }
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }
}

export default Database;
