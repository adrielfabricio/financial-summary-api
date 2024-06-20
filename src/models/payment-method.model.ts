import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("FORMA_PAGTO")
class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  description: string | null;
}

export default PaymentMethod;
