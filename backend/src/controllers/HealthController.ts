import { Response, Request } from 'express';


class HealthController {
  status(resquest: Request, response: Response) {
    return response.status(201).json({ status: "up!" })
  }
}


export { HealthController }