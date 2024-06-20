import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("CIDADE")
class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  name: string | null;
}

export default City;
