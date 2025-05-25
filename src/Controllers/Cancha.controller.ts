import { Request, response, Response } from "express";
import { Cancha } from "../Models/Cancha.model";

export const obtenerCanchas = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const canchas = await Cancha.obtenerCanchas();

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
  } catch (error) {
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? (error as { message: string }).message
        : String(error);

    console.error("Error al iniciar partido:", errorMessage);
    return res.status(500).json({
      mensaje: "Error interno del servidor",
      detalle: errorMessage,
      codigoResultado: -99,
    });
  }
};
