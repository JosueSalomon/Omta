import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createToken = (user: any, id:any): any => {
    const token = jwt.sign(
        {
            id,
            user
        },
        process.env.SECRET_TOKEN || 'secure_token',
        {
            expiresIn: '24hr' //token valid for 24 hours
        }
    );

    return token;
}
