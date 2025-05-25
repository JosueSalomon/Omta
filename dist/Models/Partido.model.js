"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partido = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Partido {
    static cancelarPartido(idPartido) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("p_cancelar_partido", {
                p_id_partido: idPartido,
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static finalizarPartido(idPartido) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("p_finalizar_partido", {
                p_id_partido: idPartido,
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static crear_partido(id_cancha, nombre_jugador_1, nombre_jugador_2, fecha_partido, hora_inicio) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("fn_crear_partido", {
                fn_id_cancha: id_cancha,
                nombre_jugador_1: nombre_jugador_1,
                nombre_jugador_2: nombre_jugador_2,
                fn_fecha_partido: fecha_partido,
                fn_hora_inicio: hora_inicio,
            });
            if (error) {
                throw new Error(`Error Supabase: ${error.message}`);
            }
            const resultado = data[0];
            return resultado;
        });
    }
    static iniciarPartido(idPartido) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("fn_iniciar_partido", {
                fn_id_partido: idPartido,
            });
            if (error) {
                throw new Error(`Error Supabase: ${error.message}`);
            }
            const resultado = data[0];
            return resultado;
        });
    }
    //Historial
    static obtenerHistorialPartidos(idPartido) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("p_obtener_historial_partidos");
            if (error) {
                throw error;
            }
            return data;
        });
    }
}
exports.Partido = Partido;
