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

export const iniciarPartido = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id_partido = req.params.id_partido;

    if (!id_partido) {
      return res.status(400).json({
        mensaje: "El campo 'id_partido' es requerido",
        codigoResultado: -1,
      });
    }

    // Llama al método correspondiente en el modelo Partido para iniciar el partido
    const resultado = await Partido.iniciarPartido(Number(id_partido));

    return res.status(200).json({
      mensaje: resultado.mensaje,
      codigoResultado: resultado.codigo,
      id_partido: resultado.id_partido_out,
      id_set: resultado.id_set_out,
      id_juego: resultado.id_juego_out,
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
