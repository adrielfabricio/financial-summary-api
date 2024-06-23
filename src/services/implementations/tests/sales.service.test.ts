import { mock, instance, when, verify } from "ts-mockito";
import Sale from "@models/sale.model";
import { ISalesRepository } from "@repositories/interfaces/ISalesRepository";
import SalesService from "../sales.service";

describe("SalesService", () => {
  let salesService: SalesService;
  let mockedSaleRepository: ISalesRepository;

  beforeAll(() => {
    mockedSaleRepository = mock<ISalesRepository>();
    salesService = new SalesService(instance(mockedSaleRepository));
  });

  it("should return sales by period", async () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");
    const sales = [new Sale(), new Sale()];

    when(mockedSaleRepository.getSalesByPeriod(startDate, endDate)).thenResolve(
      sales
    );

    const result = await salesService.getSalesByPeriod(startDate, endDate);

    expect(result).toBe(sales);
    verify(mockedSaleRepository.getSalesByPeriod(startDate, endDate)).once();
  });
});
