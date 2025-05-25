"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Partido_controller_1 = require("../Controllers/Partido.controller");
const router = express_1.default.Router();
//rutas
router.post("/crear", Partido_controller_1.crearPartido);
router.put("/cancelar/:id", Partido_controller_1.cancelarPartido);
router.put("/finalizar/:id", Partido_controller_1.finalizarPartido);
router.post("/iniciarPartido/:id_partido", Partido_controller_1.iniciarPartido);
router.get("/historial", Partido_controller_1.obtenerHistorialPartidos);
exports.default = router;
