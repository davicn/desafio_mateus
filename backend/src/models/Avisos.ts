import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("avisos")
class Avisos {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  titulo: string;

  @Column()
  texto: string;

  @Column()
  urlImage: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Avisos };