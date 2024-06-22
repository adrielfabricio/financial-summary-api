import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("TIPO_CARDAPIO")
class MenuType {
  @PrimaryGeneratedColumn({ name: "COD_TIPO_CARDAPIO" })
  id: number;

  @Column({
    type: "varchar",
    length: 45,
    name: "DCR_TIPO_CARDAPIO",
    nullable: true,
  })
  description: string | null;
}

export default MenuType;
