import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Filial } from "./Filial";


@Entity("usuarios")
class Usuario {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string

  @ManyToOne(()=>Filial)
  @JoinColumn({name:"idFilial"})
  idFilial: Filial;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Usuario }