import { Router } from "express";
import { getAirQualityController } from "../src/modules/AirQuality/UseCase";

const routesAirQuality = Router();


 


routesAirQuality.post('/',  (req, res) => {

    getAirQualityController.handle(req, res);

})


export {routesAirQuality}