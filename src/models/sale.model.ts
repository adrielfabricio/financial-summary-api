import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Product from "./product.model";
import Customer from "./customer.model";
import Locality from "./locality.model";

@Entity("VENDA")
export class Sale {
  @PrimaryGeneratedColumn({ name: "COD_VENDA" })
  id: number;

  @Column({ type: "date", name: "DATA_VENDA" })
  saleDate: string;

  @Column({ type: "decimal", precision: 10, scale: 2, name: "VALOR_TOTAL" })
  totalValue: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "COD_PRODUTO" })
  product: Product;

  @ManyToOne(() => Customer, (customer) => customer.sales)
  @JoinColumn({ name: "COD_CLIENTE" })
  customer: Customer;

  @ManyToOne(() => Locality)
  @JoinColumn({ name: "COD_LOCALIDADE" })
  locality: Locality;
}

export default Sale;
