import { Router } from "express";
import { analyticsController } from "@container";

const router = Router();

router.get("/analytics/sales-period", (req, res) =>
  analyticsController.getSalesDataByPeriod(req, res)
);
router.get("/analytics/top-products", (req, res) =>
  analyticsController.getTopSellingProducts(req, res)
);

export default router;
