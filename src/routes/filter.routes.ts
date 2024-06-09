import { filterController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/filter", filterController.getFilteredData);

export default router;
