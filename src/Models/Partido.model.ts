import supabase from "../Utils/supabase";

interface CrearPartidoResultado {
  codigo: number;
  mensaje: string;
  id_partido: number | null;
}

interface ResultadoInicio {
  codigo: number;
  mensaje: string;
  id_partido_out: number;
  id_set_out: number;
  id_juego_out: number;
}

export class Partido {
  static async cancelarPartido(idPartido: number) {
    const { data, error } = await supabase.rpc("p_cancelar_partido", {
      p_id_partido: idPartido,
    });

    if (error) {
      throw error;
    }

    return data;
  }

  static async finalizarPartido(idPartido: number) {
    const { data, error } = await supabase.rpc("p_finalizar_partido", {
      p_id_partido: idPartido,
    });

    if (error) {
      throw error;
    }

    return data;
  }

  static async crear_partido(
    id_cancha: number,
    id_jugador_1: number,
    id_jugador_2: number,
    fecha_partido: string,
    hora_inicio: string
  ) {
    const { data, error } = await supabase.rpc("fn_crear_partido", {
      fn_id_cancha: id_cancha,
      fn_id_jugador_1: id_jugador_1,
      fn_id_jugador_2: id_jugador_2,
      fn_fecha_partido: fecha_partido,
      fn_hora_inicio: hora_inicio,
    });

    if (error) {
      throw new Error(`Error Supabase: ${error.message}`);
    }

    const resultado = data[0];
    return resultado;
  }

  static async iniciarPartido(idPartido: number): Promise<ResultadoInicio> {
    const { data, error } = await supabase.rpc("fn_iniciar_partido", {
      fn_id_partido: idPartido,
    });

    if (error) {
      throw new Error(`Error Supabase: ${error.message}`);
    }

    const resultado = data[0];
    return resultado;
  }
}
