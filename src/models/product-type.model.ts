import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("TIPO_PRODUTO")
class ProductType {
  @PrimaryGeneratedColumn({ name: "COD_TIPO_PRODUTO" })
  id: number;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_TIPO_PRODUTO",
    nullable: true,
  })
  description: string | null;
}

export default ProductType;
