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
exports.Administrator = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Administrator {
    static sumarPunto(p_id_partido, p_id_set, p_id_jugador_que_aumenta_punto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc("fn_sumar_punto", {
                p_id_partido: p_id_partido,
                p_id_set: p_id_set,
                p_id_jugador_que_aumenta_punto: p_id_jugador_que_aumenta_punto
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static insertUserToken(user, contrasenia, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield supabase_1.default.rpc('insertar_token_usuario', {
                    p_user: user,
                    p_contrasenia: contrasenia,
                    p_token: token
                });
                if (error) {
                    console.log(error);
                    throw new Error(`Error: ${error.message}`);
                }
                console.log(data);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unknown error");
                }
            }
        });
    }
}
exports.Administrator = Administrator;
