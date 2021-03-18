import { Router } from 'express';
import { AvisosController } from './controllers/AvisosController';
import { HealthController } from './controllers/HealthController';

const router = Router();

const healthController = new HealthController();
const avisosController = new AvisosController();


router.get('/health', healthController.status);
router.get('/avisos',avisosController.show)

export { router };