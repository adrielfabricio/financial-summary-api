import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import ProductType from "./product-type.model";

@Entity("PRODUTO")
class Product {
  @PrimaryGeneratedColumn({ name: "COD_PRODUTO" })
  id: number;

  @Column({ type: "varchar", length: 45, name: "DCR_PRODUTO", nullable: true })
  description: string | null;

  @Column({ type: "int", name: "COD_TIPO_PRODUTO" })
  productTypeId: number;

  @ManyToOne(() => ProductType)
  @JoinColumn({ name: "COD_TIPO_PRODUTO" })
  productType: ProductType;
}

export default Product;
