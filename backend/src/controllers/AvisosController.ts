import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AvisosRepository } from '../repositories/AvisosRepository'

class AvisosController {
  async show(resquest: Request, response: Response) {
    const avisosRepository = getCustomRepository(AvisosRepository);

    const all = await avisosRepository.find();

    return response.status(201).json(all);
  }
}

export { AvisosController }