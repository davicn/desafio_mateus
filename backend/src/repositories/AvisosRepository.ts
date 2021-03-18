import { EntityRepository, Repository } from "typeorm";
import { Avisos } from "../models/Avisos";

@EntityRepository(Avisos)
class AvisosRepository extends Repository<Avisos>{ };

export { AvisosRepository };