import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'
//ola
config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, { db: { schema: 'omta' } });

export default supabase;