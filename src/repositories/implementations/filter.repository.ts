import { Repository } from "typeorm";
import { IFilterRepository } from "@repositories/interfaces/IFilterRepository";
import Order from "@models/order.model";
import Database from "@config/database";

class FilterRepository implements IFilterRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = Database.getInstance()
      .getDataSource()
      .getRepository(Order);
  }

  async filterOrders(criteria: any): Promise<Order[]> {
    const queryBuilder = this.orderRepository.createQueryBuilder("order");

    if (criteria.startDate) {
      queryBuilder.andWhere("order.date >= :startDate", {
        startDate: criteria.startDate,
      });
    }

    if (criteria.endDate) {
      queryBuilder.andWhere("order.date <= :endDate", {
        endDate: criteria.endDate,
      });
    }

    if (criteria.customerId) {
      queryBuilder.andWhere("order.customerId = :customerId", {
        customerId: criteria.customerId,
      });
    }

    if (criteria.productId) {
      queryBuilder.innerJoin(
        "order.items",
        "item",
        "item.productId = :productId",
        { productId: criteria.productId }
      );
    }

    if (criteria.minValue) {
      queryBuilder.andWhere("order.value >= :minValue", {
        minValue: criteria.minValue,
      });
    }

    if (criteria.maxValue) {
      queryBuilder.andWhere("order.value <= :maxValue", {
        maxValue: criteria.maxValue,
      });
    }

    return await queryBuilder.getMany();
  }
}

export default FilterRepository;
