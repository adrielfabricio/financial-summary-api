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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  name: string | null;

  @Column({ type: "int" })
  neighborhoodId: number;

  @Column({ type: "int" })
  parentLocalityId: number;

  @ManyToOne(() => Neighborhood)
  @JoinColumn({ name: "neighborhoodId" })
  neighborhood: Neighborhood;

  @ManyToOne(() => Locality)
  @JoinColumn({ name: "parentLocalityId" })
  parentLocality: Locality;
}

export default Locality;
