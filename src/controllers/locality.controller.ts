import { Request, Response } from "express";
import { ILocalityService } from "@services/interfaces/ILocalityService";

export default class LocalityController {
  private localityService: ILocalityService;

  constructor(localityService: ILocalityService) {
    this.localityService = localityService;
  }

  async getAllLocalities(req: Request, res: Response) {
    try {
      const data = await this.localityService.getAllLocalities();
      return res.json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving localities", error });
    }
  }
}
