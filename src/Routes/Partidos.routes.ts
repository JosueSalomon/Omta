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

router.get("/prueba", (req: Request, res: Response): any => {
  res.json({
    mensaje: "Hola jajaj",
  });
});

export default router;
