import { Router } from "express";
import { salesController } from "@container";

const router = Router();

router.get("/category/:categoryId", (req, res) =>
  salesController.getSalesByCategory(req, res)
);
router.get("/product/:productId", (req, res) =>
  salesController.getSalesByProduct(req, res)
);
router.get("/locality/:localityId", (req, res) =>
  salesController.getSalesByLocality(req, res)
);
router.get("/period", (req, res) => salesController.getSalesByPeriod(req, res));

export default router;
