import { transactionController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/transaction/details", transactionController.getTransactionDetails);

export default router;
