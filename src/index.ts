import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


//rutass ola
import administratorRoutes from './Routes/Administrator.routes'
import partidoRoutes from './Routes/Partidos.routes'


dotenv.config();
require('dotenv').config();
const app: Express = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use('/administrator', administratorRoutes);
app.use('/partidos', partidoRoutes);

//Servidor Raiz.
app.get('/', (req: Request, res: Response) => {
    res.send('Root server is on yai');
});

//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});