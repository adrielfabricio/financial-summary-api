import { transactionController } from "@container";
import { Router } from "express";

const router = Router();

router.get(":transactionId", (req, res) =>
  transactionController.getTransactionDetails(req, res)
);
router.get("/:customerId/transactions", (req, res) =>
  transactionController.getTransactionsByCustomer(req, res)
);

export default router;
