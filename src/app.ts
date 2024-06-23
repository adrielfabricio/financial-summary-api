import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import salesRoutes from "@routes/sales.routes";
import transactionRoutes from "@routes/transaction.routes";
import customerRoutes from "@routes/customer.routes";
import categoryRoutes from "@routes/category.routes";
import productRoutes from "@routes/product.routes";
import localityRoutes from "@routes/locality.routes";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/sales", salesRoutes);
app.use("/transactions", transactionRoutes);
app.use("/customers", customerRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/localities", localityRoutes);

export default app;
