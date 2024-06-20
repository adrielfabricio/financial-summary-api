import { filterController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/filters/orders", (req, res) =>
  filterController.filterOrders(req, res)
);

export default router;
