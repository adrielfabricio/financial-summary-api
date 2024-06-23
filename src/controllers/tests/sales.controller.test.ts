import { mock, instance, when, verify, capture, anything } from "ts-mockito";
import { Request, Response } from "express";
import SalesController from "../sales.controller";
import { ISalesService } from "@services/interfaces/ISalesService";

describe("SalesController", () => {
  let salesController: SalesController;
  let mockedSalesService: ISalesService;
  let req: Request;
  let res: Response;

  beforeAll(() => {
    mockedSalesService = mock<ISalesService>();
    salesController = new SalesController(instance(mockedSalesService));
  });

  beforeEach(() => {
    req = {
      query: {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
      },
    } as unknown as Request;

    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
  });

  it("should return sales by period", async () => {
    const sales: any = [
      {
        id: 1,
        saleDate: "2024-06-22",
        totalValue: "388.00",
        product: {
          id: 17,
          description: "Espaguete à Bolonhesa",
          productTypeId: 7,
        },
        customer: {
          id: 57,
          name: "Iris Medhurst",
          email: "Florian.Ortiz17@yahoo.com",
          phone: "92834600990",
          registrationDate: "2024-02-17",
        },
        locality: {
          id: 100,
          description: "Elm Close",
          neighborhoodId: 34,
        },
      },
      {
        id: 2,
        saleDate: "2024-06-23",
        totalValue: "404.00",
        product: {
          id: 6,
          description: "Coca Cola",
          productTypeId: 3,
        },
        customer: {
          id: 15,
          name: "Traci Macejkovic III",
          email: "Nola.Flatley41@hotmail.com",
          phone: "64115438204",
          registrationDate: "2024-05-26",
        },
        locality: {
          id: 63,
          description: "The Causeway",
          neighborhoodId: 17,
        },
      },
    ];

    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");

    when(
      mockedSalesService.getSalesByPeriod(anything(), anything())
    ).thenResolve(sales);

    await salesController.getSalesByPeriod(req, res);

    const [capturedStartDate, capturedEndDate] = capture(
      mockedSalesService.getSalesByPeriod
    ).last();

    expect(capturedStartDate.toISOString().split("T")[0]).toBe(
      startDate.toISOString().split("T")[0]
    );
    expect(capturedEndDate.toISOString().split("T")[0]).toBe(
      endDate.toISOString().split("T")[0]
    );

    verify(mockedSalesService.getSalesByPeriod(anything(), anything())).once();
    expect(res.json).toHaveBeenCalledWith(sales);
  });
});
