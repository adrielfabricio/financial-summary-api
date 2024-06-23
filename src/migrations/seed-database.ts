import { faker } from "@faker-js/faker";
import { MigrationInterface, QueryRunner } from "typeorm";
import { dataSource } from "@config/database";
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
    const cityRepository = dataSource.getRepository(City);
    const neighborhoodRepository = dataSource.getRepository(Neighborhood);
    const localityRepository = dataSource.getRepository(Locality);
    const productTypeRepository = dataSource.getRepository(ProductType);
    const productRepository = dataSource.getRepository(Product);
    const customerRepository = dataSource.getRepository(Customer);
    const delivererRepository = dataSource.getRepository(Deliverer);
    const saleRepository = dataSource.getRepository(Sale);
    const financialTransactionRepository =
      dataSource.getRepository(FinancialTransaction);

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

    // Populate TIPO_PRODUTO com categorias de comidas e bebidas
    const productTypes: any[] = [];
    const categories = [
      "Pizza",
      "Hambúrguer",
      "Bebidas",
      "Sobremesas",
      "Lanches",
      "Sushi",
      "Massas",
      "Saladas",
    ];
    for (const category of categories) {
      const productType = productTypeRepository.create({
        description: category,
      });
      productTypes.push(productType);
    }
    await productTypeRepository.save(productTypes);

    // Populate PRODUTO com comidas e bebidas
    const products = [
      { name: "Pizza Margherita", category: "Pizza" },
      { name: "Pizza Pepperoni", category: "Pizza" },
      { name: "Pizza Quatro Queijos", category: "Pizza" },
      { name: "Hambúrguer", category: "Hambúrguer" },
      { name: "Cheeseburger", category: "Hambúrguer" },
      { name: "Coca Cola", category: "Bebidas" },
      { name: "Suco de Laranja", category: "Bebidas" },
      { name: "Cerveja", category: "Bebidas" },
      { name: "Vinho Tinto", category: "Bebidas" },
      { name: "Bolo de Chocolate", category: "Sobremesas" },
      { name: "Sorvete de Baunilha", category: "Sobremesas" },
      { name: "Donuts", category: "Sobremesas" },
      { name: "Cookies", category: "Sobremesas" },
      { name: "Batata Frita", category: "Lanches" },
      { name: "Sushi de Salmão", category: "Sushi" },
      { name: "Temaki", category: "Sushi" },
      { name: "Espaguete à Bolonhesa", category: "Massas" },
      { name: "Lasanha", category: "Massas" },
      { name: "Salada Caesar", category: "Saladas" },
      { name: "Salada Grega", category: "Saladas" },
    ];

    const productEntities = products.map((product) => {
      const productType = productTypes.find(
        (type) => type.description === product.category
      );
      return productRepository.create({
        description: product.name,
        productType,
      });
    });

    await productRepository.save(productEntities);

    // Populate CLIENTE
    const customers = [];
    for (let i = 0; i < 100; i++) {
      const customer = customerRepository.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("###########"), // Limit the phone number length to 15 characters
        registrationDate: faker.date.past().toISOString().split("T")[0], // Ensure the date is in string format
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
        saleDate: faker.date.recent().toISOString().split("T")[0], // Ensure the date is in string format
        totalValue: parseFloat(faker.commerce.price()),
        product:
          productEntities[
            faker.number.int({ min: 0, max: productEntities.length - 1 })
          ],
        customer:
          customers[faker.number.int({ min: 0, max: customers.length - 1 })],
        locality:
          localities[faker.number.int({ min: 0, max: localities.length - 1 })],
      });
      sales.push(sale);
    }
    await saleRepository.save(sales);

    // Populate TRANSAÇÃO_FINANCEIRA
    const financialTransactions = [];
    for (let i = 0; i < 1000; i++) {
      const financialTransaction = financialTransactionRepository.create({
        transactionDate: faker.date.recent().toISOString().split("T")[0], // Ensure the date is in string format
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
    await queryRunner.query(`DELETE FROM TRANSAÇÃO_FINANCEIRA`);
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
