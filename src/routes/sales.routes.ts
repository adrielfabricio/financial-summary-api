import { Router } from "express";
import { salesController } from "@container";

const router = Router();

router.get("/sales/daily", salesController.getDailySales);
router.get("/sales/weekly", salesController.getWeeklySales);
router.get("/sales/monthly", salesController.getMonthlySales);

export default router;
