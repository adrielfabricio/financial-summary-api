import { transactionController } from "@container";
import { Router } from "express";

const router = Router();
console.log(transactionController);

// get financial transactions
router.get("/", (req, res) =>
  transactionController.getFinancialTransactions(req, res)
);

export default router;
