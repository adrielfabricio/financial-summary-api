import { Router } from "express";
import { transactionController } from "@container";

const router = Router();

// get financial transactions
router.get("/", (req, res) =>
  transactionController.getFinancialTransactions(req, res)
);
router.get("/export", (req, res) =>
  transactionController.exportTransactionsToXLS(req, res)
);

export default router;
