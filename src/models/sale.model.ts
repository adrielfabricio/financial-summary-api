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
class Sale {
  @PrimaryGeneratedColumn({ name: "COD_VENDA" })
  id: number;

  @Column({ type: "date", name: "DATA_VENDA" })
  saleDate: string;

  @Column({ type: "decimal", precision: 10, scale: 2, name: "VALOR_TOTAL" })
  totalValue: number;

  @Column({ type: "int", name: "COD_PRODUTO" })
  productId: number;

  @Column({ type: "int", name: "COD_CLIENTE" })
  customerId: number;

  @Column({ type: "int", name: "COD_LOCALIDADE" })
  localityId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "COD_PRODUTO" })
  product: Product;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "COD_CLIENTE" })
  customer: Customer;

  @ManyToOne(() => Locality)
  @JoinColumn({ name: "COD_LOCALIDADE" })
  locality: Locality;
}

export default Sale;
