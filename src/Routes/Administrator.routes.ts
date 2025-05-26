import express from 'express';
import { sumarPuntos, Login} from '../Controllers/Administrator.controller';

const router = express.Router();

router.post("/sumapunto/partido/:id",sumarPuntos);
router.post("/login",Login);


export default router;