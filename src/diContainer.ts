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

const salesRepository = new SalesRepository();
const salesService = new SalesService(salesRepository);
const salesController = new SalesController(salesService);

const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

export { salesController, transactionController, customerController };
