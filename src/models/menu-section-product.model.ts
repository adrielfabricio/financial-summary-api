import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Product from "./product.model";
import MenuSection from "./menu-section.model";

@Entity("SECAO_PRODUTO")
class MenuSectionProduct {
  @PrimaryGeneratedColumn({ name: "COD_SECAO_PRODUTO" })
  id: number;

  @Column({ type: "int", name: "PRODUTO_COD_PRODUTO" })
  productId: number;

  @Column({ type: "int", name: "SECAO_CARDAPIO_COD_SECAO_CARDAPIO" })
  menuSectionId: number;

  @Column({ type: "int", name: "NUM_ORDEM", nullable: true })
  order: number | null;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "PRODUTO_COD_PRODUTO" })
  product: Product;

  @ManyToOne(() => MenuSection)
  @JoinColumn({ name: "SECAO_CARDAPIO_COD_SECAO_CARDAPIO" })
  menuSection: MenuSection;
}

export default MenuSectionProduct;
