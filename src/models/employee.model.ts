import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("FUNCIONARIO")
class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  name: string | null;

  @Column({ type: "varchar", length: 15, nullable: true })
  phoneNumber: string | null;

  @Column({ type: "varchar", length: 45, nullable: true })
  email: string | null;
}

export default Employee;
