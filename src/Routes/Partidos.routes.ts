import express from 'express';
import { cancelarPartido, finalizarPartido } from '../Controllers/Partido.controller'

const router = express.Router();
//rutas
router.get('/cancelar/:id', cancelarPartido);
router.get('/finalizar/:id', finalizarPartido);

export default router;