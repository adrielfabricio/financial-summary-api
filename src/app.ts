import express from "express";

import salesRoutes from "@routes/sales.routes";
import filterRoutes from "@routes/filter.routes";
import transactionRoutes from "@routes/transaction.routes";
import analyticsRoutes from "@routes/analytics.routes";

const app = express();

app.use(express.json());

app.use("/sales", salesRoutes);
app.use("/filter", filterRoutes);
app.use("/transaction", transactionRoutes);
app.use("/analytics", analyticsRoutes);

export default app;
