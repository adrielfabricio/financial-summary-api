import { Request, Response } from "express";
import { ITransactionService } from "@services/interfaces/ITransactionService";

export default class TransactionController {
  private transactionService: ITransactionService;

  constructor(transactionService: ITransactionService) {
    this.transactionService = transactionService;
  }

  async getTransactionDetails(req: Request, res: Response): Promise<Response> {
    try {
      const { transactionId } = req.params;
      const data = await this.transactionService.getTransactionDetails(
        parseInt(transactionId)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving transaction details", error });
    }
  }

  async getTransactionsByCustomer(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { customerId } = req.params;
      const data = await this.transactionService.getTransactionsByCustomer(
        parseInt(customerId)
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving transactions by customer", error });
    }
  }
}
