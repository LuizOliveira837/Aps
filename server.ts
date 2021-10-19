import express from 'express';
import { routesAirQuality } from './routes/airQuality.routes';


const server = express();


server.use('/air-quality', routesAirQuality)

server.listen(3300, ()=>console.log('SERVER ON'))