import { categoryController } from "@container";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => categoryController.getAllCategories(req, res));

export default router;
