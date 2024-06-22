import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Locality from "./locality.model";

@Entity("EMPREENDIMENTO")
class Enterprise {
  @PrimaryGeneratedColumn({ name: "COD_EMPREENDIMENTO" })
  id: number;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_EMPREENDIMENTO",
    nullable: true,
  })
  description: string | null;

  @Column({ type: "int", name: "COD_LOCALIDADE" })
  localityId: number;

  @ManyToOne(() => Locality)
  @JoinColumn({ name: "COD_LOCALIDADE" })
  locality: Locality;
}

export default Enterprise;
