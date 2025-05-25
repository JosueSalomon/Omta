"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Cancha_controller_1 = require("../Controllers/Cancha.controller");
const routerCancha = express_1.default.Router();
routerCancha.get("/obtener", Cancha_controller_1.obtenerCanchas);
exports.default = routerCancha;
