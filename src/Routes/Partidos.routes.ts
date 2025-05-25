import express from "express";
import {
  cancelarPartido,
  finalizarPartido,
  crearPartido,
  iniciarPartido,
  obtenerHistorialPartidos,
  obenterPartidosDiaActual,
} from "../Controllers/Partido.controller";

const router = express.Router();
//rutas
router.post("/crear", crearPartido);
router.put("/cancelar/:id", cancelarPartido);
router.put("/finalizar/:id", finalizarPartido);
router.post("/iniciarPartido/:id_partido", iniciarPartido);
router.get("/historial", obtenerHistorialPartidos);

router.get("/obtenerPartidosDiaActual/:id_cancha", obenterPartidosDiaActual);

export default router;
