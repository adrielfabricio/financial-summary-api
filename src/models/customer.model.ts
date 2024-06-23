import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("CLIENTE")
class Customer {
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
  email: string | null;

  @Column({
    type: "varchar",
    length: 15,
    name: "TELEFONE_CLIENTE",
    nullable: true,
  })
  phone: string | null;

  @Column({ type: "date", name: "DATA_CADASTRO" })
  registrationDate: Date;
}

export default Customer;
