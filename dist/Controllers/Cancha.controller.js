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
exports.obtenerCanchas = void 0;
const Cancha_model_1 = require("../Models/Cancha.model");
const obtenerCanchas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const canchas = yield Cancha_model_1.Cancha.obtenerCanchas();
        if (canchas.length === 0) {
            return res.status(400).json({
                message: "No hay canchas registradas",
                data: [],
                codigoResultado: -1,
            });
        }
        return res.status(200).json({
            message: "Canchas obtenidas",
            data: canchas,
            codigoResultado: 0,
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
exports.obtenerCanchas = obtenerCanchas;
