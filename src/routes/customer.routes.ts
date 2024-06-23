import { Router } from "express";
import { customerController } from "@container";

const router = Router();

router.get("/most-active", (req, res) =>
  customerController.getMostActiveCustomers(req, res)
);

export default router;
