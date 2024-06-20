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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  name: string | null;

  @Column({ type: "int" })
  cityId: number;

  @ManyToOne(() => City)
  @JoinColumn({ name: "cityId" })
  city: City;
}

export default Neighborhood;
