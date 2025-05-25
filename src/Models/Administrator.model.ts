import supabase from '../Utils/supabase';

export class Administrator {
    static async sumarPunto(p_id_partido: number, p_id_set: number, p_id_jugador_que_aumenta_punto: number) {
    const { data, error } = await supabase.rpc("fn_sumar_punto", {
        p_id_partido: p_id_partido,
        p_id_set:p_id_set,
        p_id_jugador_que_aumenta_punto: p_id_jugador_que_aumenta_punto
    });

    if (error) {
        throw error;
    }

    return data;
    }
}