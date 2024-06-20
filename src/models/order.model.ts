import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Customer from "./customer.model";
import PaymentMethod from "./payment-method.model";

@Entity("PEDIDO")
class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "char", length: 1, nullable: true })
  type: string | null;

  @Column({ type: "datetime", nullable: true })
  date: Date | null;

  @Column({ type: "decimal", precision: 9, scale: 2, nullable: true })
  value: number | null;

  @Column({ type: "int" })
  customerId: number;

  @Column({ type: "int", nullable: true })
  paymentMethodId: number | null;

  @Column({ type: "varchar", length: 200, nullable: true })
  paymentData: string | null;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "customerId" })
  customer: Customer;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: "paymentMethodId" })
  paymentMethod: PaymentMethod;
}

export default Order;
