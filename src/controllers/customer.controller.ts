import { Request, Response } from "express";
import { ICustomerService } from "@services/interfaces/ICustomerService";

export default class CustomerController {
  private customerService: ICustomerService;

  constructor(customerService: ICustomerService) {
    this.customerService = customerService;
  }

  async getMostActiveCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.getMostActiveCustomers();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving most active customers", error });
    }
  }
}
