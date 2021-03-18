import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("filiais")
class Filial {
  @PrimaryColumn()
  id: Number;

  @Column()
  descFilial: string

}

export { Filial };