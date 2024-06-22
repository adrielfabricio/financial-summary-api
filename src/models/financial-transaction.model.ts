import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Sale from "./sale.model";
import Customer from "./customer.model";
import Deliverer from "./deliverer.model";

@Entity("TRANSAÇÃO_FINANCEIRA")
class FinancialTransaction {
  @PrimaryGeneratedColumn({ name: "COD_TRANSACAO" })
  id: number;

  @Column({ type: "date", name: "DATA_TRANSACAO" })
  transactionDate: Date;

  @Column({ type: "decimal", precision: 10, scale: 2, name: "VALOR_TRANSACAO" })
  transactionValue: number;

  @Column({ type: "int", name: "COD_VENDA" })
  saleId: number;

  @Column({ type: "int", name: "COD_CLIENTE" })
  customerId: number;

  @Column({ type: "int", name: "COD_ENTREGADOR", nullable: true })
  delivererId: number | null;

  @ManyToOne(() => Sale)
  @JoinColumn({ name: "COD_VENDA" })
  sale: Sale;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "COD_CLIENTE" })
  customer: Customer;

  @ManyToOne(() => Deliverer)
  @JoinColumn({ name: "COD_ENTREGADOR" })
  deliverer: Deliverer;
}

export default FinancialTransaction;
