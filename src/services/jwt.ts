import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createToken = (user_id: any, names:any, email:any, img:any, user_type_id:any): any => {
    const token = jwt.sign(
        {
            user_id,
            names, 
            email,
            img,
            user_type_id
        },
        process.env.SECRET_TOKEN || 'secure_token',
        {
            expiresIn: '24hr' //token valid for 24 hours
        }
    );

    return token;
}
