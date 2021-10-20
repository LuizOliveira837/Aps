import express from 'express';
import { routesAirQuality } from './routes/airQuality.routes';
import cors from 'cors'



const server = express();

server.use(express.json())
server.use(cors())


server.use('/air-quality', routesAirQuality)

server.listen(3300, ()=>console.log('SERVER ON'))