import { Router } from 'express';
import { AvisosController } from './controllers/AvisosController';
import { GruposController } from './controllers/GruposController';
import { HealthController } from './controllers/HealthController';

const router = Router();

const healthController = new HealthController();
const avisosController = new AvisosController();
const gruposController = new GruposController();

router.get('/health', healthController.status);
router.get('/avisos',avisosController.show);
router.get('/grupos',gruposController.show);
router.post('/grupos',gruposController.create);


export { router };