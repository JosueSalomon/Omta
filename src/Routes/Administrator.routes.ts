import express from 'express';
import { sumarPuntos} from '../Controllers/Administrator.controller';

const router = express.Router();

router.post("/sumapunto/partido/:id",sumarPuntos)


export default router;