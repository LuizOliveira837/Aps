import https from "https"
import { Weather } from "../helpers/Weather";
import {AirQuality} from '../helpers/AirQuality';


interface AirQualityDTO {
    city : string;
    state: string;
}



class GetAirQualityUseCase{

    constructor(){

    }



    async execute({city, state}: AirQualityDTO) : Promise<JSON>{

        const weather =  new Weather(city, state)

        const airQuality = new AirQuality(city)

        try {
            const airQualityJson  = await airQuality.getAirQualityRequest();
            const WeatherJson = await weather.getWeatherRequest();

            const date: Date =  new Date();

            const hours = `${('0' + date.getHours()).substring(1,3) }:${('0' + date.getMinutes()).substring(1,3)}`


            const {stations} = JSON.parse(airQualityJson)
            const {temp,date,city_name} = JSON.parse(WeatherJson)

            const {CO, NO2} = stations[0]
            const {category} = stations[0].aqiInfo


            return {city_name, date, temp,category, CO, NO2, 'hours': hours };
            
        } catch (error) {

            throw new Error(error.message);
            
        }
    }



    



 



}


export {GetAirQualityUseCase}