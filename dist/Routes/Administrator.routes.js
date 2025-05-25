"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Administrator_controller_1 = require("../Controllers/Administrator.controller");
const router = express_1.default.Router();
router.post("/sumapunto/partido/:id", Administrator_controller_1.sumarPuntos);
exports.default = router;
