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
exports.sumarPuntos = void 0;
const Administrator_model_1 = require("../Models/Administrator.model");
const sumarPuntos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { id_set, id_jugador } = req.body;
        const result = yield Administrator_model_1.Administrator.sumarPunto(Number(id), id_set, id_jugador);
        res.status(201).json({
            result,
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
exports.sumarPuntos = sumarPuntos;
