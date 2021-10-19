import { GetAirQualityUseCase } from "./GetAirQualityUseCase";



class GetAirQualityController {

    constructor(private getAirQualityUseCase: GetAirQualityUseCase ){

    }


   async  handle(req:Request, res:Response) : Promise<Response>{

        const {city, state} = req.headers


        try {
            
           const airQuality = await  this.getAirQualityUseCase.execute({city,state});
           return res.status(200).send(airQuality)

        } catch (error) {

           return res.status(500).json({"error": error.message})
            
        }

    }

}


export {GetAirQualityController}