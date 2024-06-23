import { faker } from "@faker-js/faker";
import { MigrationInterface, QueryRunner } from "typeorm";
import City from "@models/city.model";
import Neighborhood from "@models/neighborhood.model";
import Locality from "@models/locality.model";
import ProductType from "@models/product-type.model";
import Product from "@models/product.model";
import Customer from "@models/customer.model";
import Deliverer from "@models/deliverer.model";
import Sale from "@models/sale.model";
import FinancialTransaction from "@models/financial-transaction.model";

export class SeedDatabase1625072334000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const cityRepository = queryRunner.manager.getRepository(City);
    const neighborhoodRepository =
      queryRunner.manager.getRepository(Neighborhood);
    const localityRepository = queryRunner.manager.getRepository(Locality);
    const productTypeRepository =
      queryRunner.manager.getRepository(ProductType);
    const productRepository = queryRunner.manager.getRepository(Product);
    const customerRepository = queryRunner.manager.getRepository(Customer);
    const delivererRepository = queryRunner.manager.getRepository(Deliverer);
    const saleRepository = queryRunner.manager.getRepository(Sale);
    const financialTransactionRepository =
      queryRunner.manager.getRepository(FinancialTransaction);

    // Populate CIDADE
    const cities = [];
    for (let i = 0; i < 10; i++) {
      const city = cityRepository.create({
        description: faker.address.city(),
      });
      cities.push(city);
    }
    await cityRepository.save(cities);

    // Populate BAIRRO
    const neighborhoods = [];
    for (let i = 0; i < 50; i++) {
      const neighborhood = neighborhoodRepository.create({
        description: faker.address.county(),
        city: cities[faker.number.int({ min: 0, max: cities.length - 1 })],
      });
      neighborhoods.push(neighborhood);
    }
    await neighborhoodRepository.save(neighborhoods);

    // Populate LOCALIDADE
    const localities = [];
    for (let i = 0; i < 100; i++) {
      const locality = localityRepository.create({
        description: faker.address.streetName(),
        neighborhood:
          neighborhoods[
            faker.number.int({ min: 0, max: neighborhoods.length - 1 })
          ],
      });
      localities.push(locality);
    }
    await localityRepository.save(localities);

    // Populate TIPO_PRODUTO
    const productTypes = [];
    for (let i = 0; i < 10; i++) {
      const productType = productTypeRepository.create({
        description: faker.commerce.department(),
      });
      productTypes.push(productType);
    }
    await productTypeRepository.save(productTypes);

    // Populate PRODUTO
    const products = [];
    for (let i = 0; i < 100; i++) {
      const product = productRepository.create({
        description: faker.commerce.productName(),
        productType:
          productTypes[
            faker.number.int({ min: 0, max: productTypes.length - 1 })
          ],
      });
      products.push(product);
    }
    await productRepository.save(products);

    // Populate CLIENTE
    const customers = [];
    for (let i = 0; i < 100; i++) {
      const customer = customerRepository.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("###########"), // Limit the phone number length to 15 characters
        registrationDate: faker.date.past(),
      });
      customers.push(customer);
    }
    await customerRepository.save(customers);

    // Populate ENTREGADOR
    const deliverers = [];
    for (let i = 0; i < 50; i++) {
      const deliverer = delivererRepository.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("###########"), // Limit the phone number length to 15 characters
      });
      deliverers.push(deliverer);
    }
    await delivererRepository.save(deliverers);

    // Populate VENDA
    const sales = [];
    for (let i = 0; i < 1000; i++) {
      const sale = saleRepository.create({
        saleDate: faker.date.recent(),
        totalValue: parseFloat(faker.commerce.price()),
        product:
          products[faker.number.int({ min: 0, max: products.length - 1 })],
        customer:
          customers[faker.number.int({ min: 0, max: customers.length - 1 })],
        locality:
          localities[faker.number.int({ min: 0, max: localities.length - 1 })],
      });
      sales.push(sale);
    }
    await saleRepository.save(sales);

    // Populate TRANSACAO_FINANCEIRA
    const financialTransactions = [];
    for (let i = 0; i < 1000; i++) {
      const financialTransaction = financialTransactionRepository.create({
        transactionDate: faker.date.recent(),
        transactionValue: parseFloat(faker.commerce.price()),
        sale: sales[faker.number.int({ min: 0, max: sales.length - 1 })],
        customer:
          customers[faker.number.int({ min: 0, max: customers.length - 1 })],
        deliverer:
          deliverers[faker.number.int({ min: 0, max: deliverers.length - 1 })],
      });
      financialTransactions.push(financialTransaction);
    }
    await financialTransactionRepository.save(financialTransactions);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove all data
    await queryRunner.query(`DELETE FROM TRANSACAO_FINANCEIRA`);
    await queryRunner.query(`DELETE FROM VENDA`);
    await queryRunner.query(`DELETE FROM ENTREGADOR`);
    await queryRunner.query(`DELETE FROM CLIENTE`);
    await queryRunner.query(`DELETE FROM PRODUTO`);
    await queryRunner.query(`DELETE FROM TIPO_PRODUTO`);
    await queryRunner.query(`DELETE FROM LOCALIDADE`);
    await queryRunner.query(`DELETE FROM BAIRRO`);
    await queryRunner.query(`DELETE FROM CIDADE`);
  }
}
