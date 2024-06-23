import { Between, Repository } from "typeorm";
import Sale from "@models/sale.model";
import { dataSource } from "@config/database";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";

class SalesRepository implements ISalesRepository {
  private saleRepository: Repository<Sale>;

  constructor() {
    this.saleRepository = dataSource.getRepository(Sale);
  }

  async getSalesByCategory(categoryId: number): Promise<Sale[]> {
    return await this.saleRepository
      .createQueryBuilder("sale")
      .leftJoinAndSelect("sale.product", "product")
      .leftJoinAndSelect("sale.customer", "customer")
      .leftJoinAndSelect("sale.locality", "locality")
      .where("product.productTypeId = :categoryId", { categoryId })
      .getMany();
  }

  async getSalesByProduct(productId: number): Promise<Sale[]> {
    return await this.saleRepository.find({
      where: {
        product: {
          id: productId,
        },
      },
      relations: ["product", "customer", "locality"],
    });
  }

  async getSalesByLocality(localityId: number): Promise<Sale[]> {
    return await this.saleRepository.find({
      where: {
        locality: {
          id: localityId,
        },
      },
      relations: ["product", "customer", "locality"],
    });
  }

  async getSalesByPeriod(startDate: Date, endDate: Date): Promise<Sale[]> {
    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];

    return await this.saleRepository.find({
      where: {
        saleDate: Between(start, end),
      },
      relations: ["product", "customer", "locality"],
    });
  }
}

export default SalesRepository;
