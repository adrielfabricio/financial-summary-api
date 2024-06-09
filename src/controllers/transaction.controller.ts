import { ITransactionService } from "@services/interfaces/ITransactionService";
import { Request, Response } from "express";

export default class TransactionController {
  private transactionService: ITransactionService;

  constructor(transactionService: ITransactionService) {
    this.transactionService = transactionService;
  }

  public async getTransactionDetails(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const filters = req.query;
      const data = await this.transactionService.getTransactionDetails(filters);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
