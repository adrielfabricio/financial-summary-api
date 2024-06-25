import { Request, Response } from "express";
import { ITransactionService } from "@services/interfaces/ITransactionService";

export default class TransactionController {
  private transactionService: ITransactionService;

  constructor(transactionService: ITransactionService) {
    this.transactionService = transactionService;
  }

  async getFinancialTransactions(req: Request, res: Response) {
    try {
      const data = await this.transactionService.getFinancialTransactions();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving financial transactions", error });
    }
  }

  async exportTransactionsToXLS(req: Request, res: Response) {
    try {
      const buffer = await this.transactionService.exportTransactionsToXLS();
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=transactions.xlsx"
      );
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.end(buffer);
    } catch (error) {
      res
        .status(500)
        .send("An error occurred while exporting the transactions.");
    }
  }
}
