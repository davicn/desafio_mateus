import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { GruposRepository } from '../repositories/GruposRepository';

class GruposController {
  async show(request: Request, response: Response) {
    const gruposRepository = getCustomRepository(GruposRepository);

    const all = await gruposRepository.find();

    response.status(201).json(all);
  }
};

export { GruposController };