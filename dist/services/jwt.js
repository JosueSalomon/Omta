"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createToken = (user_id, names, email, img, user_type_id) => {
    const token = jsonwebtoken_1.default.sign({
        user_id,
        names,
        email,
        img,
        user_type_id
    }, process.env.SECRET_TOKEN || 'secure_token', {
        expiresIn: '24hr' //token valid for 24 hours
    });
    return token;
};
exports.createToken = createToken;
