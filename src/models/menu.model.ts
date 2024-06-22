import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import MenuType from "./menu-type.model";

@Entity("CARDAPIO")
class Menu {
  @PrimaryGeneratedColumn({ name: "COD_CARDAPIO" })
  id: number;

  @Column({ type: "varchar", length: 45, name: "DCR_CARDAPIO", nullable: true })
  description: string | null;

  @Column({ type: "int", name: "COD_TIPO_CARDAPIO" })
  menuTypeId: number;

  @ManyToOne(() => MenuType)
  @JoinColumn({ name: "COD_TIPO_CARDAPIO" })
  menuType: MenuType;
}

export default Menu;
