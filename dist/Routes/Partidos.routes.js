"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Partido_controller_1 = require("../Controllers/Partido.controller");
const router = express_1.default.Router();
//rutas
router.get('/cancelar/:id', Partido_controller_1.cancelarPartido);
router.get('/finalizar/:id', Partido_controller_1.finalizarPartido);
exports.default = router;
