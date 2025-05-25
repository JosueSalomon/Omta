import express, { Request, Response } from "express";
import {
  cancelarPartido,
  finalizarPartido,
  crearPartido,
} from "../Controllers/Partido.controller";

const router = express.Router();
//rutas
router.post("/crear", crearPartido);
router.put("/cancelar/:id", cancelarPartido);
router.put("/finalizar/:id", finalizarPartido);

export default router;
