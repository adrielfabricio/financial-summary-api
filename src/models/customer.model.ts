import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Sale from "./sale.model";

@Entity("CLIENTE")
export class Customer {
  @PrimaryGeneratedColumn({ name: "COD_CLIENTE" })
  id: number;

  @Column({ type: "varchar", length: 100, name: "NOME_CLIENTE" })
  name: string;

  @Column({
    type: "varchar",
    length: 100,
    name: "EMAIL_CLIENTE",
    nullable: true,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 15,
    name: "TELEFONE_CLIENTE",
    nullable: true,
  })
  phone: string;

  @Column({ type: "date", name: "DATA_CADASTRO" })
  registrationDate: string;

  @OneToMany(() => Sale, (sale) => sale.customer)
  sales: Sale[];
}

export default Customer;
