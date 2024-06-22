import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Menu from "./menu.model";

@Entity("SECAO_CARDAPIO")
class MenuSection {
  @PrimaryGeneratedColumn({ name: "COD_SECAO_CARDAPIO" })
  id: number;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_SECAO_CARDAPIO",
    nullable: true,
  })
  description: string | null;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_TITULO_APRES",
    nullable: true,
  })
  title: string | null;

  @Column({ type: "int", name: "COD_CARDAPIO" })
  menuId: number;

  @Column({ type: "int", name: "NUM_ORDEM", nullable: true })
  order: number | null;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: "COD_CARDAPIO" })
  menu: Menu;
}

export default MenuSection;
