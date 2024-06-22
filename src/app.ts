import express from "express";

import salesRoutes from "@routes/sales.routes";
import transactionRoutes from "@routes/transaction.routes";

const app = express();

app.use(express.json());

app.use("/sales", salesRoutes);
app.use("/transactions", transactionRoutes);

export default app;
