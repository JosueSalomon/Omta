import { Request, Response } from "express";
import { Partido } from "../Models/Partido.model";

export const cancelarPartido = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const partido = await Partido.cancelarPartido(Number(id));

    res.status(201).json({
      partido,
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

export const finalizarPartido = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const partido = await Partido.finalizarPartido(Number(id));

    res.status(201).json({
      partido,
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

export const crearPartido = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {
      id_cancha,
      id_jugador_1,
      id_jugador_2,
      fecha_partido,
      hora_inicio,
    } = req.body;

    if (
      !id_cancha ||
      !id_jugador_1 ||
      !id_jugador_2 ||
      !fecha_partido ||
      !hora_inicio
    ) {
      return res.status(400).json({
        mensaje: "Faltan campos en el body",
        codigoResultado: -1,
      });
    }

    const resultado = await Partido.crear_partido(
      id_cancha,
      id_jugador_1,
      id_jugador_2,
      fecha_partido,
      hora_inicio
    );

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
  } catch (error) {
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? (error as { message: string }).message
        : String(error);

    console.error("Error al crear partido:", errorMessage);
    return res.status(500).json({
      mensaje: "Error interno del servidor",
      detalle: errorMessage,
      codigoResultado: -99,
    });
  }
};
