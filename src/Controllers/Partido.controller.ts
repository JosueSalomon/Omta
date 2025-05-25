import { Request, Response } from 'express';
import { Partido } from '../Models/Partido.model';


export const cancelarPartido = async (req: Request, res: Response) => {
    try{

        const {id} = req.params;
    
        const partido = await Partido.cancelarPartido(Number(id));

        res.status(201).json({
            partido
        })
    } catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : error?.toString() || 'Unknown error';

        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ', 
            error: errorInfo
        });
    }
};