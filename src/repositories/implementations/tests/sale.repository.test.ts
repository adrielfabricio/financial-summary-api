import { mock, instance, when, verify, anything, capture } from "ts-mockito";
import { Repository, Between } from "typeorm";
import SaleRepository from "../sales.repository";
import Sale from "@models/sale.model";

describe("SaleRepository", () => {
  let saleRepository: SaleRepository;
  let mockedRepo: Repository<Sale>;

  beforeAll(() => {
    mockedRepo = mock<Repository<Sale>>();
    saleRepository = new SaleRepository();
    // @ts-ignore
    saleRepository.saleRepository = instance(mockedRepo);
  });

  it("should return sales by period", async () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");
    const sales: any[] = [
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

    when(mockedRepo.find(anything())).thenResolve(sales);

    const result = await saleRepository.getSalesByPeriod(startDate, endDate);

    expect(result).toEqual(sales);
    verify(mockedRepo.find(anything())).once();
  });
});
