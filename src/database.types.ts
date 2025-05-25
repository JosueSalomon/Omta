export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  omta: {
    Tables: {
      tbl_canchas: {
        Row: {
          id_cancha: number
          nombre_cancha: string
        }
        Insert: {
          id_cancha?: number
          nombre_cancha: string
        }
        Update: {
          id_cancha?: number
          nombre_cancha?: string
        }
        Relationships: []
      }
      tbl_estados_partido: {
        Row: {
          estado_partido: string
          id_estado_partido: number
        }
        Insert: {
          estado_partido: string
          id_estado_partido?: number
        }
        Update: {
          estado_partido?: string
          id_estado_partido?: number
        }
        Relationships: []
      }
      tbl_juegos: {
        Row: {
          estado_juego: string | null
          id_juego: number
          id_jugador_ganador_juego: number | null
          id_jugador_servidor: number | null
          id_set: number
          id_tipo_juego: number
          numero_juego: number
          puntos_jugador1: string | null
          puntos_jugador2: string | null
        }
        Insert: {
          estado_juego?: string | null
          id_juego?: number
          id_jugador_ganador_juego?: number | null
          id_jugador_servidor?: number | null
          id_set: number
          id_tipo_juego: number
          numero_juego: number
          puntos_jugador1?: string | null
          puntos_jugador2?: string | null
        }
        Update: {
          estado_juego?: string | null
          id_juego?: number
          id_jugador_ganador_juego?: number | null
          id_jugador_servidor?: number | null
          id_set?: number
          id_tipo_juego?: number
          numero_juego?: number
          puntos_jugador1?: string | null
          puntos_jugador2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_juegos_id_jugador_ganador_juego_fkey"
            columns: ["id_jugador_ganador_juego"]
            isOneToOne: false
            referencedRelation: "tbl_jugadores"
            referencedColumns: ["id_jugador"]
          },
          {
            foreignKeyName: "tbl_juegos_id_set_fkey"
            columns: ["id_set"]
            isOneToOne: false
            referencedRelation: "tbl_sets"
            referencedColumns: ["id_set"]
          },
          {
            foreignKeyName: "tbl_juegos_id_tipo_juego_fkey"
            columns: ["id_tipo_juego"]
            isOneToOne: false
            referencedRelation: "tbl_tipos_juego"
            referencedColumns: ["id_tipo_juego"]
          },
        ]
      }
      tbl_jugadores: {
        Row: {
          id_jugador: number
          nombre: string
        }
        Insert: {
          id_jugador?: number
          nombre: string
        }
        Update: {
          id_jugador?: number
          nombre?: string
        }
        Relationships: []
      }
      tbl_marcador_cache: {
        Row: {
          actualizado_en: string | null
          cancha: string | null
          id_marcador_cache: number
          id_partido: number
          jugador1: string | null
          jugador2: string | null
          puntos_jugador1: string | null
          puntos_jugador2: string | null
          sets: Json | null
        }
        Insert: {
          actualizado_en?: string | null
          cancha?: string | null
          id_marcador_cache?: number
          id_partido: number
          jugador1?: string | null
          jugador2?: string | null
          puntos_jugador1?: string | null
          puntos_jugador2?: string | null
          sets?: Json | null
        }
        Update: {
          actualizado_en?: string | null
          cancha?: string | null
          id_marcador_cache?: number
          id_partido?: number
          jugador1?: string | null
          jugador2?: string | null
          puntos_jugador1?: string | null
          puntos_jugador2?: string | null
          sets?: Json | null
        }
        Relationships: []
      }
      tbl_partidos: {
        Row: {
          duracion: string | null
          fecha: string
          hora_final: string | null
          hora_inicio: string
          id_cancha: number
          id_estado_partido: number
          id_jugador_ganador: number | null
          id_jugador1: number | null
          id_jugador2: number | null
          id_partido: number
          id_torneo: number | null
        }
        Insert: {
          duracion?: string | null
          fecha: string
          hora_final?: string | null
          hora_inicio: string
          id_cancha: number
          id_estado_partido?: number
          id_jugador_ganador?: number | null
          id_jugador1?: number | null
          id_jugador2?: number | null
          id_partido?: number
          id_torneo?: number | null
        }
        Update: {
          duracion?: string | null
          fecha?: string
          hora_final?: string | null
          hora_inicio?: string
          id_cancha?: number
          id_estado_partido?: number
          id_jugador_ganador?: number | null
          id_jugador1?: number | null
          id_jugador2?: number | null
          id_partido?: number
          id_torneo?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_partidos_id_cancha_fkey"
            columns: ["id_cancha"]
            isOneToOne: false
            referencedRelation: "tbl_canchas"
            referencedColumns: ["id_cancha"]
          },
          {
            foreignKeyName: "tbl_partidos_id_estado_partido_fkey"
            columns: ["id_estado_partido"]
            isOneToOne: false
            referencedRelation: "tbl_estados_partido"
            referencedColumns: ["id_estado_partido"]
          },
          {
            foreignKeyName: "tbl_partidos_id_jugador_ganador_fkey"
            columns: ["id_jugador_ganador"]
            isOneToOne: false
            referencedRelation: "tbl_jugadores"
            referencedColumns: ["id_jugador"]
          },
          {
            foreignKeyName: "tbl_partidos_id_jugador1_fkey"
            columns: ["id_jugador1"]
            isOneToOne: false
            referencedRelation: "tbl_jugadores"
            referencedColumns: ["id_jugador"]
          },
          {
            foreignKeyName: "tbl_partidos_id_jugador2_fkey"
            columns: ["id_jugador2"]
            isOneToOne: false
            referencedRelation: "tbl_jugadores"
            referencedColumns: ["id_jugador"]
          },
          {
            foreignKeyName: "tbl_partidos_id_torneo_fkey"
            columns: ["id_torneo"]
            isOneToOne: false
            referencedRelation: "tbl_torneos"
            referencedColumns: ["id_torneo"]
          },
        ]
      }
      tbl_puntos: {
        Row: {
          id_juego: number
          id_jugador_ganador_punto: number | null
          id_punto: number
          numero_punto: number
          puntuacion_jugador1: string | null
          puntuacion_jugador2: string | null
        }
        Insert: {
          id_juego: number
          id_jugador_ganador_punto?: number | null
          id_punto?: number
          numero_punto: number
          puntuacion_jugador1?: string | null
          puntuacion_jugador2?: string | null
        }
        Update: {
          id_juego?: number
          id_jugador_ganador_punto?: number | null
          id_punto?: number
          numero_punto?: number
          puntuacion_jugador1?: string | null
          puntuacion_jugador2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_puntos_id_juego_fkey"
            columns: ["id_juego"]
            isOneToOne: false
            referencedRelation: "tbl_juegos"
            referencedColumns: ["id_juego"]
          },
        ]
      }
      tbl_sets: {
        Row: {
          cantidad_juegos_jugador1: number | null
          cantidad_juegos_jugador2: number | null
          estado_set: string | null
          id_jugador_ganador_set: number | null
          id_partido: number
          id_set: number
          numero_set: number
        }
        Insert: {
          cantidad_juegos_jugador1?: number | null
          cantidad_juegos_jugador2?: number | null
          estado_set?: string | null
          id_jugador_ganador_set?: number | null
          id_partido: number
          id_set?: number
          numero_set: number
        }
        Update: {
          cantidad_juegos_jugador1?: number | null
          cantidad_juegos_jugador2?: number | null
          estado_set?: string | null
          id_jugador_ganador_set?: number | null
          id_partido?: number
          id_set?: number
          numero_set?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_sets_id_jugador_ganador_set_fkey"
            columns: ["id_jugador_ganador_set"]
            isOneToOne: false
            referencedRelation: "tbl_jugadores"
            referencedColumns: ["id_jugador"]
          },
          {
            foreignKeyName: "tbl_sets_id_partido_fkey"
            columns: ["id_partido"]
            isOneToOne: false
            referencedRelation: "tbl_partidos"
            referencedColumns: ["id_partido"]
          },
          {
            foreignKeyName: "tbl_sets_id_partido_fkey"
            columns: ["id_partido"]
            isOneToOne: false
            referencedRelation: "v_marcador_vivo"
            referencedColumns: ["id_partido"]
          },
        ]
      }
      tbl_tipos_juego: {
        Row: {
          id_tipo_juego: number
          tipo_juego: string
        }
        Insert: {
          id_tipo_juego?: number
          tipo_juego: string
        }
        Update: {
          id_tipo_juego?: number
          tipo_juego?: string
        }
        Relationships: []
      }
      tbl_torneos: {
        Row: {
          fecha_fin: string | null
          fecha_inicio: string | null
          id_torneo: number
          lugar: string | null
          nombre: string | null
        }
        Insert: {
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id_torneo?: number
          lugar?: string | null
          nombre?: string | null
        }
        Update: {
          fecha_fin?: string | null
          fecha_inicio?: string | null
          id_torneo?: number
          lugar?: string | null
          nombre?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      v_marcador_vivo: {
        Row: {
          cantidad_juegos_jugador1: number | null
          cantidad_juegos_jugador2: number | null
          id_partido: number | null
          jugador1: string | null
          jugador2: string | null
          nombre_cancha: string | null
          numero_set: number | null
          puntos_jugador1: string | null
          puntos_jugador2: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      f_get_marcador_vivo: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      f_sumar_punto: {
        Args: {
          p_id_partido: number
          p_id_set: number
          p_id_jugador_que_anota: number
        }
        Returns: string
      }
      fn_crear_partido: {
        Args:
          | {
              fn_id_cancha: number
              fn_id_jugador_1: number
              fn_id_jugador_2: number
              fn_fecha_partido: string
              fn_hora_inicio: string
            }
          | {
              fn_id_cancha: number
              nombre_jugador_1: string
              nombre_jugador_2: string
              fn_fecha_partido: string
              fn_hora_inicio: string
            }
        Returns: {
          codigo: number
          mensaje: string
          id_partido: number
        }[]
      }
      fn_iniciar_partido: {
        Args: { fn_id_partido: number }
        Returns: {
          codigo: number
          mensaje: string
          id_partido_out: number
          id_set_out: number
          id_juego_out: number
        }[]
      }
      fn_obtener_canchas: {
        Args: Record<PropertyKey, never>
        Returns: {
          id_cancha_out: number
          nombre_cancha_out: string
        }[]
      }
      fn_obtener_informacion_partido: {
        Args: { fn_id_partido: number }
        Returns: {
          id_partido_out: number
          id_cancha_out: number
          nombre_cancha_out: string
          id_jugador_1_out: number
          nombre_jugador_1_out: string
          id_jugador_2_out: number
          nombre_jugador_2_out: string
          id_estado_partido_out: number
          estado_partido_out: string
          fecha_partido_out: string
          hora_inicio_out: string
          id_set_out: number
          estado_set_out: string
          numero_set_out: number
          cantidad_juegos_jugador1_out: number
          id_jugador_ganador_set_out: number
          cantidad_juegos_jugador_2_out: number
          tipo_juego_out: string
          numero_juego_actual_out: number
          puntos_jugador1_out: string
          puntos_jugador_2out: string
          id_jugador_ganador_juego_out: number
        }[]
      }
      fn_obtener_partidos_fecha_actual: {
        Args: Record<PropertyKey, never> | { fn_id_cancha: number }
        Returns: {
          id_partido_out: number
          id_cancha_out: number
          nombre_cancha_out: string
          fecha_out: string
          hora_inicio_out: string
        }[]
      }
      fn_sumar_punto: {
        Args: {
          p_id_partido: number
          p_id_set: number
          p_id_jugador_que_aumenta_punto: number
        }
        Returns: Json
      }
      get_canchas: {
        Args: Record<PropertyKey, never>
        Returns: {
          id_cancha: number
          nombre_cancha: string
        }[]
      }
      p_cancelar_partido: {
        Args: { p_id_partido: number }
        Returns: Record<string, unknown>
      }
      p_finalizar_partido: {
        Args: { p_id_partido: number }
        Returns: Record<string, unknown>
      }
      p_obtener_historial_partidos: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  omta: {
    Enums: {},
  },
} as const
