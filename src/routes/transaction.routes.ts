import { transactionController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/transactions/:transactionId", (req, res) =>
  transactionController.getTransactionDetails(req, res)
);
router.get("/customers/:customerId/transactions", (req, res) =>
  transactionController.getTransactionsByCustomer(req, res)
);

export default router;
