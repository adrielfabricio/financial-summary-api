import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import City from "./city.model";
import Neighborhood from "./neighborhood.model";
import Locality from "./locality.model";

@Entity("EMPREENDIMENTO")
class Enterprise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  name: string | null;

  @Column({ type: "varchar", length: 45, nullable: true })
  tradeName: string | null;

  @Column({ type: "varchar", length: 45, nullable: true })
  address: string | null;

  @Column({ type: "varchar", length: 45, nullable: true })
  complement: string | null;

  @Column({ type: "varchar", length: 10, nullable: true })
  zipCode: string | null;

  @Column({ type: "int" })
  cityId: number;

  @Column({ type: "int" })
  neighborhoodId: number;

  @Column({ type: "int" })
  localityId: number;

  @Column({ type: "blob", nullable: true })
  image: Buffer | null;

  @ManyToOne(() => City)
  @JoinColumn({ name: "cityId" })
  city: City;

  @ManyToOne(() => Neighborhood)
  @JoinColumn({ name: "neighborhoodId" })
  neighborhood: Neighborhood;

  @ManyToOne(() => Locality)
  @JoinColumn({ name: "localityId" })
  locality: Locality;
}

export default Enterprise;