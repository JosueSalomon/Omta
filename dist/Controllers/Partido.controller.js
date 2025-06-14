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
exports.obtenerInfoPartido = exports.obenterPartidosDiaActual = exports.obtenerHistorialPartidos = exports.iniciarPartido = exports.crearPartido = exports.finalizarPartido = exports.cancelarPartido = void 0;
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
        const { id_cancha, nombre_jugador_1, nombre_jugador_2, fecha_partido, hora_inicio, ventaja, super_tie_break, } = req.body;
        if (id_cancha == null ||
            nombre_jugador_1 == null ||
            nombre_jugador_2 == null ||
            fecha_partido == null ||
            hora_inicio == null ||
            ventaja == null ||
            super_tie_break == null) {
            return res.status(400).json({
                mensaje: "Faltan campos en el body",
                codigoResultado: -1,
            });
        }
        const resultado = yield Partido_model_1.Partido.crear_partido(id_cancha, nombre_jugador_1, nombre_jugador_2, fecha_partido, hora_inicio, ventaja, super_tie_break);
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
const iniciarPartido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_partido = req.params.id_partido;
        if (!id_partido) {
            return res.status(400).json({
                mensaje: "El campo 'id_partido' es requerido",
                codigoResultado: -1,
            });
        }
        // Llama al método correspondiente en el modelo Partido para iniciar el partido
        const resultado = yield Partido_model_1.Partido.iniciarPartido(Number(id_partido));
        return res.status(200).json({
            mensaje: resultado.mensaje,
            codigoResultado: resultado.codigo,
            id_partido: resultado.id_partido_out,
            id_set: resultado.id_set_out,
            id_juego: resultado.id_juego_out,
        });
    }
    catch (error) {
        const errorMessage = error && typeof error === "object" && "message" in error
            ? error.message
            : String(error);
        console.error("Error al iniciar partido:", errorMessage);
        return res.status(500).json({
            mensaje: "Error interno del servidor",
            detalle: errorMessage,
            codigoResultado: -99,
        });
    }
});
exports.iniciarPartido = iniciarPartido;
const obtenerHistorialPartidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const historialPartidos = yield Partido_model_1.Partido.obtenerHistorialPartidos(Number(id));
        res.status(201).json({
            historialPartidos,
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
exports.obtenerHistorialPartidos = obtenerHistorialPartidos;
const obenterPartidosDiaActual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_cancha = Number(req.params.id_cancha);
        if (!id_cancha) {
            return res.status(400).json({
                message: "El parametro id cancha es requerido",
                resultado: -2,
            });
        }
        const partidos = yield Partido_model_1.Partido.obtenerPartidosDelDiaActual(id_cancha);
        console.log(partidos);
        if (partidos.length === 0) {
            return res.status(400).json({
                message: "No se encontraron partidos en el día de hoy para la cancha",
                id_cancha,
                codigoResultado: -1,
                data: [],
            });
        }
        if (partidos[0].id_partido_out === 0) {
            return res.status(400).json({
                message: "No existe el id cancha",
                codigoResultado: -3,
            });
        }
        return res.status(200).json({
            message: "Partidos encontrados",
            codigoResultado: 0,
            data: partidos,
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
exports.obenterPartidosDiaActual = obenterPartidosDiaActual;
const obtenerInfoPartido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_partido = Number(req.params.id_partido);
        if (!id_partido) {
            return res.status(400).json({
                message: "El parametro id_partido es requerido",
                codigoResultado: -1,
            });
        }
        const informacion = yield Partido_model_1.Partido.obtenerInformacionPartido(id_partido);
        return res.status(200).json({
            message: "Información encontrada",
            data: informacion,
            codigoResultado: 0,
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
exports.obtenerInfoPartido = obtenerInfoPartido;
