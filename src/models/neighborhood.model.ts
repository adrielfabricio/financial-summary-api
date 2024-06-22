import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import City from "./city.model";

@Entity("BAIRRO")
class Neighborhood {
  @PrimaryGeneratedColumn({ name: "COD_BAIRRO" })
  id: number;

  @Column({ type: "varchar", length: 45, name: "DCR_BAIRRO", nullable: true })
  description: string | null;

  @Column({ type: "int", name: "COD_CIDADE" })
  cityId: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: "COD_CIDADE" })
  city: City;
}

export default Neighborhood;
