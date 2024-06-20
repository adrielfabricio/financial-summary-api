import { Router } from "express";
import { salesController } from "@container";

const router = Router();

router.get("/sales/daily", (req, res) =>
  salesController.getDailySales(req, res)
);
router.get("/sales/weekly", (req, res) =>
  salesController.getWeeklySales(req, res)
);
router.get("/sales/monthly", (req, res) =>
  salesController.getMonthlySales(req, res)
);
router.get("/sales/period", (req, res) =>
  salesController.getSalesByPeriod(req, res)
);

export default router;
