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

    static async Login(user: string, contra: string){
        const{data,error} = await supabase.rpc("login_admin",{
            p_user:user,
            p_contra:contra
        });

        if (!data) {
            return "null";
        }

        if (data.codigo === 1) {
            return {
                code: 1,
                message: "Usuario no encontrado"
            };
        }

        if (data.codigo === 2) {
            return {
                code: 2,
                message: "Contraseña incorrecta"
            };
        }

        if (data.codigo === 3) {
            return {
                code: 3,
                message: "Login exitoso"
            };
        };

        if (data.codigo === 4) {
            return {
                code: 4,
                message: "Error insesperado"
            };
        };
    }
    

}