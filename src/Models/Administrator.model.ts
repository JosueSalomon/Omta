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

static async insertUserToken(user: any, contrasenia: any, token: any): Promise<any> {
    try {
        const { data, error } = await supabase.rpc('insertar_token_usuario', {
        p_user: user,
        p_contrasenia: contrasenia,
        p_token: token
        });

        if (error) {
            console.log(error)
        throw new Error(`Error: ${error.message}`)
        }
        
        console.log(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
        throw new Error(error.message);
        } else {
        throw new Error("Unknown error");
        }
    }
    }
}