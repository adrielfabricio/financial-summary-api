import { localityController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => localityController.getAllLocalities(req, res));

export default router;
