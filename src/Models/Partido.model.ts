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
    nombre_jugador_1: string,
    nombre_jugador_2: string,
    fecha_partido: string,
    hora_inicio: string,
    ventaja: boolean,
    super_tie_break: boolean
  ) {
    const { data, error } = await supabase.rpc("fn_crear_partido", {
      fn_id_cancha: id_cancha,
      nombre_jugador_1: nombre_jugador_1,
      nombre_jugador_2: nombre_jugador_2,
      fn_fecha_partido: fecha_partido,
      fn_hora_inicio: hora_inicio,
      fn_ventaja: ventaja,
      fn_super_tie_break: super_tie_break,
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
  //Historial
  static async obtenerHistorialPartidos(idPartido: number) {
    const { data, error } = await supabase.rpc("p_obtener_historial_partidos");

    if (error) {
      throw error;
    }

    return data;
  }

  static async obtenerPartidosDelDiaActual(id_cancha: number) {
    const { data, error } = await supabase.rpc(
      "fn_obtener_partidos_fecha_actual",
      { fn_id_cancha: id_cancha }
    );

    if (error) {
      throw new Error(`Error Supabase: ${error.message}`);
    }

    return data;
  }

  static async obtenerInformacionPartido(id_partido: number) {
    const { data, error } = await supabase.rpc(
      "fn_obtener_informacion_partido",
      {
        fn_id_partido: id_partido,
      }
    );

    if (error) {
      throw new Error(`Error Supabase: ${error.message}`);
    }

    return data;
  }
}
