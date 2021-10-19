import { GetAirQualityController } from "./GetAirQualityController";
import { GetAirQualityUseCase } from "./GetAirQualityUseCase";



const getAirQualityUseCase = new GetAirQualityUseCase();
const getAirQualityController = new GetAirQualityController(getAirQualityUseCase);


export {getAirQualityController}