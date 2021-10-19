import { Router } from "express";
import https from "https"
import { getAirQualityController } from "../src/modules/AirQuality/UseCase";

const routesAirQuality = Router();


 


routesAirQuality.get('/',  (req, res) => {

    getAirQualityController.handle(req, res);

})


export {routesAirQuality}