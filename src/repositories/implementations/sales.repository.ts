import { Between, Repository } from "typeorm";
import Sale from "@models/sale.model";
import { dataSource } from "@config/database";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";

class SalesRepository implements ISalesRepository {
  private saleRepository: Repository<Sale>;

  constructor() {
    this.saleRepository = dataSource.getRepository(Sale);
  }

  async getSalesByCategory(category: string): Promise<Sale[]> {
    return await this.saleRepository
      .createQueryBuilder("productType")
      .leftJoinAndSelect("productType.products", "product")
      .leftJoinAndSelect("product.sales", "sale")
      .select("productType.description", "category")
      .addSelect("SUM(sale.totalValue)", "totalSales")
      .groupBy("productType.description")
      .getRawMany();
  }

  async getSalesByProduct(product: string): Promise<Sale[]> {
    return await this.saleRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.sales", "sale")
      .select("product.description", "product")
      .addSelect("SUM(sale.totalValue)", "totalSales")
      .groupBy("product.description")
      .getRawMany();
  }

  async getSalesByLocation(location: string): Promise<Sale[]> {
    return await this.saleRepository
      .createQueryBuilder("locality")
      .leftJoinAndSelect("locality.sales", "sale")
      .select("locality.description", "location")
      .addSelect("SUM(sale.totalValue)", "totalSales")
      .groupBy("locality.description")
      .getRawMany();
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]> {
    return await this.saleRepository.find({
      where: {
        saleDate: Between(startDate, endDate),
      },
      relations: ["product", "customer", "locality"],
    });
  }
}

export default SalesRepository;
