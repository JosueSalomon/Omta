import express, { Request, Response } from "express";
import {
  cancelarPartido,
  finalizarPartido,
  crearPartido,
  iniciarPartido,
} from "../Controllers/Partido.controller";

const router = express.Router();
//rutas
router.post("/crear", crearPartido);
router.put("/cancelar/:id", cancelarPartido);
router.put("/finalizar/:id", finalizarPartido);
router.post("/iniciarPartido/:id_partido", iniciarPartido);

export default router;
