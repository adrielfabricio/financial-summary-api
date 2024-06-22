import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ENTREGADOR")
class Deliverer {
  @PrimaryGeneratedColumn({ name: "COD_ENTREGADOR" })
  id: number;

  @Column({ type: "varchar", length: 100, name: "NOME_ENTREGADOR" })
  name: string;

  @Column({
    type: "varchar",
    length: 100,
    name: "EMAIL_ENTREGADOR",
    nullable: true,
  })
  email: string | null;

  @Column({
    type: "varchar",
    length: 15,
    name: "TELEFONE_ENTREGADOR",
    nullable: true,
  })
  phone: string | null;
}

export default Deliverer;
