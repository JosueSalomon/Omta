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
      nombre_jugador_1,
      nombre_jugador_2,
      fecha_partido,
      hora_inicio,
      ventaja,
      super_tie_break,
    } = req.body;

    if (
      id_cancha == null ||
      nombre_jugador_1 == null ||
      nombre_jugador_2 == null ||
      fecha_partido == null ||
      hora_inicio == null ||
      ventaja == null ||
      super_tie_break == null
    ) {
      return res.status(400).json({
        mensaje: "Faltan campos en el body",
        codigoResultado: -1,
      });
    }

    const resultado = await Partido.crear_partido(
      id_cancha,
      nombre_jugador_1,
      nombre_jugador_2,
      fecha_partido,
      hora_inicio,
      ventaja,
      super_tie_break
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

export const obtenerHistorialPartidos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const historialPartidos = await Partido.obtenerHistorialPartidos(
      Number(id)
    );

    res.status(201).json({
      historialPartidos,
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

export const obenterPartidosDiaActual = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id_cancha = Number(req.params.id_cancha);

    if (!id_cancha) {
      return res.status(400).json({
        message: "El parametro id cancha es requerido",
        resultado: -2,
      });
    }

    const partidos = await Partido.obtenerPartidosDelDiaActual(id_cancha);
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

export const obtenerInfoPartido = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id_partido = Number(req.params.id_partido);

    if (!id_partido) {
      return res.status(400).json({
        message: "El parametro id_partido es requerido",
        codigoResultado: -1,
      });
    }

    const informacion = await Partido.obtenerInformacionPartido(id_partido);

    return res.status(200).json({
      message: "Información encontrada",
      data: informacion,
      codigoResultado: 0,
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
