import { Router } from "express";
import { salesController } from "@container";

const router = Router();

router.get("/category", salesController.getSalesByCategory);
router.get("/product", salesController.getSalesByProduct);
router.get("/location", salesController.getSalesByLocation);
router.get("/period", salesController.getSalesByPeriod);

export default router;
