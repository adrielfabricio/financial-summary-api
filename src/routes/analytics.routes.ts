import { Router } from "express";
import { analyticsController } from "@container";

const router = Router();

router.get("/analytics", analyticsController.getAnalyticsData);

export default router;
