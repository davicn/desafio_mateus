import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("grupos")
class Grupo {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  descGrupo: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Grupo };