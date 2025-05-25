import  { Request, Response } from 'express';
import { Administrator } from '../Models/Administrator.model'

export const sumarPuntos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {id_set, id_jugador} = req.body

    const result = await Administrator.sumarPunto(Number(id),id_set,id_jugador);

    res.status(201).json({
      result,
    });
  } catch (error) {
    const errorInfo =
      error && typeof error === "object"
        ? JSON.stringify(error, null, 2)
        : error?.toString() || "Unknown error";

    console.error("Error Information: ", errorInfo);
    res.status(500).json({
      message: "Error Information: ",
      error: errorInfo,
    });
  }
};