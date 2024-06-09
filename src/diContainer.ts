// Sales
import SalesService from "@services/implementations/sales.service";
import SalesRepository from "@repositories/implementations/sales.repository";
import SalesController from "@controllers/sales.controller";

// Analytics
import AnalyticsService from "@services/implementations/analytics.service";
import AnalyticsRepository from "@repositories/implementations/analytics.repository";
import AnalyticsController from "@controllers/analytics.controller";

// Filter
import FilterService from "@services/implementations/filter.service";
import FilterRepository from "@repositories/implementations/filter.repository";
import FilterController from "@controllers/filter.controller";

// Transaction
import TransactionService from "@services/implementations/transaction.service";
import TransactionRepository from "@repositories/implementations/transaction.repository";
import TransactionController from "@controllers/transaction.controller";

const salesRepository = new SalesRepository();
const salesService = new SalesService(salesRepository);
const salesController = new SalesController(salesService);

const analyticsRepository = new AnalyticsRepository();
const analyticsService = new AnalyticsService(analyticsRepository);
const analyticsController = new AnalyticsController(analyticsService);

const filterRepository = new FilterRepository();
const filterService = new FilterService(filterRepository);
const filterController = new FilterController(filterService);

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

export {
  salesController,
  analyticsController,
  filterController,
  transactionController,
};
