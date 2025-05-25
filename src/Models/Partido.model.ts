import supabase from '../Utils/supabase'


export class Partido{

    static async cancelarPartido(idPartido: number){

        const {data, error} = await supabase.rpc('p_cancelar_partido', {
            p_id_partido: idPartido
        });

        if(error){
            throw error;
        }

        return data;

    }

}
