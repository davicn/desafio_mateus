import { EntityRepository, Repository } from "typeorm";
import { Grupo } from "../models/Grupo";


@EntityRepository(Grupo)
class GruposRepository extends Repository<Grupo>{ };

export { GruposRepository };