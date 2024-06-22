import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("CIDADE")
class City {
  @PrimaryGeneratedColumn({ name: "COD_CIDADE" })
  id: number;

  @Column({ type: "varchar", length: 45, name: "DCR_CIDADE", nullable: true })
  description: string | null;
}

export default City;
