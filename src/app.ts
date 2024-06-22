import express from "express";

import salesRoutes from "@routes/sales.routes";
import transactionRoutes from "@routes/transaction.routes";
import customerRoutes from "@routes/customer.routes";

const app = express();

app.use(express.json());

app.use("/sales", salesRoutes);
app.use("/transactions", transactionRoutes);
app.use("/customers", customerRoutes);

export default app;
