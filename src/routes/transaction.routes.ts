import { transactionController } from "@container";
import { Router } from "express";

const router = Router();

// get financial transactions
router.get("/", transactionController.getFinancialTransactions);

export default router;
