import { DataSource } from "typeorm";
import City from "@models/city.model";
import Neighborhood from "@models/neighborhood.model";
import Locality from "@models/locality.model";
import Enterprise from "@models/enterprise.model";
import Employee from "@models/employee.model";
import Customer from "@models/customer.model";
import PaymentMethod from "@models/payment-method.model";
import Order from "@models/order.model";
import Deliverer from "@models/deliverer.model";
import FinancialTransaction from "@models/financial-transaction.model";
import MenuSection from "@models/menu-section.model";
import MenuSectionProduct from "@models/menu-section-product.model";
import MenuType from "@models/menu-type.model";
import Menu from "@models/menu.model";
import ProductType from "@models/product-type.model";
import Product from "@models/product.model";
import Sale from "@models/sale.model";

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
        Customer,
        Deliverer,
        Employee,
        Enterprise,
        FinancialTransaction,
        Locality,
        MenuSectionProduct,
        MenuSection,
        MenuType,
        Menu,
        Neighborhood,
        Order,
        PaymentMethod,
        ProductType,
        Product,
        Sale,
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
