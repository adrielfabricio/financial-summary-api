import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Neighborhood from "./neighborhood.model";

@Entity("LOCALIDADE")
class Locality {
  @PrimaryGeneratedColumn({ name: "COD_LOCALIDADE" })
  id: number;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_LOCALIDADE",
    nullable: true,
  })
  description: string | null;

  @Column({ type: "int", name: "COD_BAIRRO" })
  neighborhoodId: number;

  @ManyToOne(() => Neighborhood)
  @JoinColumn({ name: "COD_BAIRRO" })
  neighborhood: Neighborhood;
}

export default Locality;
