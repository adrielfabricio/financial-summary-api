import { Router } from "express";
import { customerController } from "@container";

const router = Router();

router.get("/most-active", customerController.getMostActiveCustomers);

export default router;
