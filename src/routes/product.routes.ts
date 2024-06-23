import { Router } from "express";
import { productController } from "@container";

const router = Router();

router.get("/", (req, res) => productController.getAllProducts(req, res));

export default router;
