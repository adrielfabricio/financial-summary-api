import * as Excel from "exceljs";
import FinancialTransaction from "@models/financial-transaction.model";
import { ITransactionService } from "@services/interfaces/ITransactionService";
import { ITransactionRepository } from "@repositories/interfaces/ITransactionRepository";

class TransactionService implements ITransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async getFinancialTransactions(): Promise<FinancialTransaction[]> {
    return await this.transactionRepository.getFinancialTransactions();
  }

  async exportTransactionsToXLS(): Promise<Excel.Buffer> {
    const transactions = await this.getFinancialTransactions();
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");
    worksheet.columns = [
      { header: "Transaction ID", key: "id", width: 15 },
      { header: "Transaction Date", key: "transactionDate", width: 25 },
      { header: "Transaction Value", key: "transactionValue", width: 20 },
      { header: "Sale ID", key: "saleId", width: 15 },
      { header: "Customer ID", key: "customerId", width: 15 },
      { header: "Deliverer ID", key: "delivererId", width: 15 },
    ];

    transactions.forEach((transaction) => {
      worksheet.addRow({
        id: transaction.id,
        transactionDate: transaction.transactionDate,
        transactionValue: transaction.transactionValue,
        saleId: transaction.saleId,
        customerId: transaction.customerId,
        delivererId: transaction.delivererId || "N/A",
      });
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}

export default TransactionService;
