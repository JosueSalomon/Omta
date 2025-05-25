import supabase from "../Utils/supabase";

export class Cancha {
  static async obtenerCanchas() {
    const { data, error } = await supabase.rpc("fn_obtener_canchas");

    if (error) {
      throw new Error(`Error Supabase: ${error.message}`);
    }

    return data;
  }
}
