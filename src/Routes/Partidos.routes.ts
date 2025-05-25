import express from 'express';
import { cancelarPartido } from '../Controllers/Partido.controller'

const router = express.Router();

router.get('/cancelar/:id', cancelarPartido)

export default router;