"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearPartido = exports.finalizarPartido = exports.cancelarPartido = void 0;
const Partido_model_1 = require("../Models/Partido.model");
const cancelarPartido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const partido = yield Partido_model_1.Partido.cancelarPartido(Number(id));
        res.status(201).json({
            partido,
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === "object"
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || "Unknown error";
        console.error("Error Information: ", errorInfo);
        res.status(500).json({
            message: "Error Information: ",
            error: errorInfo,
        });
    }
});
exports.cancelarPartido = cancelarPartido;
const finalizarPartido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const partido = yield Partido_model_1.Partido.finalizarPartido(Number(id));
        res.status(201).json({
            partido,
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === "object"
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || "Unknown error";
        console.error("Error Information: ", errorInfo);
        res.status(500).json({
            message: "Error Information: ",
            error: errorInfo,
        });
    }
});
exports.finalizarPartido = finalizarPartido;
const crearPartido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_cancha, id_jugador_1, id_jugador_2, fecha_partido, hora_inicio, } = req.body;
        if (!id_cancha ||
            !id_jugador_1 ||
            !id_jugador_2 ||
            !fecha_partido ||
            !hora_inicio) {
            return res.status(400).json({
                mensaje: "Faltan campos en el body",
                codigoResultado: -1,
            });
        }
        const resultado = yield Partido_model_1.Partido.crear_partido(id_cancha, id_jugador_1, id_jugador_2, fecha_partido, hora_inicio);
        if (resultado.codigo !== 0) {
            return res.status(400).json({
                mensaje: resultado.mensaje,
                codigoResultado: resultado.codigo,
            });
        }
        return res.status(201).json({
            mensaje: resultado.mensaje,
            codigoResultado: resultado.codigo,
            id_partido: resultado.id_partido,
        });
    }
    catch (error) {
        const errorMessage = error && typeof error === "object" && "message" in error
            ? error.message
            : String(error);
        console.error("Error al crear partido:", errorMessage);
        return res.status(500).json({
            mensaje: "Error interno del servidor",
            detalle: errorMessage,
            codigoResultado: -99,
        });
    }
});
exports.crearPartido = crearPartido;
