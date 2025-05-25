import express from "express";
import { obtenerCanchas } from "../Controllers/Cancha.controller";

const routerCancha = express.Router();

routerCancha.get("/obtener", obtenerCanchas);

export default routerCancha;
