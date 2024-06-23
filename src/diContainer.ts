// Sales
import SalesService from "@services/implementations/sales.service";
import SalesRepository from "@repositories/implementations/sales.repository";
import SalesController from "@controllers/sales.controller";
// Customer
import CustomerService from "@services/implementations/customer.service";
import CustomerRepository from "@repositories/implementations/customer.repository";
import CustomerController from "@controllers/customer.controller";
// Transaction
import TransactionService from "@services/implementations/transaction.service";
import TransactionRepository from "@repositories/implementations/transaction.repository";
import TransactionController from "@controllers/transaction.controller";
// Category
import CategoryService from "@services/implementations/category.service";
import CategoryRepository from "@repositories/implementations/category.repository";
import CategoryController from "@controllers/category.controller";
// Product
import ProductService from "@services/implementations/product.service";
import ProductRepository from "@repositories/implementations/product.repository";
import ProductController from "@controllers/product.controller";
// Locality
import LocalityService from "@services/implementations/locality.service";
import LocalityRepository from "@repositories/implementations/locality.repository";
import LocalityController from "@controllers/locality.controller";

const salesRepository = new SalesRepository();
const salesService = new SalesService(salesRepository);
const salesController = new SalesController(salesService);

const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const localityRepository = new LocalityRepository();
const localityService = new LocalityService(localityRepository);
const localityController = new LocalityController(localityService);

export {
  salesController,
  transactionController,
  customerController,
  categoryController,
  productController,
  localityController,
};
