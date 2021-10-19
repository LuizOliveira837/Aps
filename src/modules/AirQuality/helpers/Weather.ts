
import https from "https"


class Weather {

    private city: string = 'saopaulo'

    private state: string = 'sp'

    constructor(city: string, state: string){
        this.city = city;
        this.state = state;

    }


    getCity(): string {
        return this.city
    }


    getState(): string {
        return this.state
    }

    buildWeatherRequest(city: string, state: string){
        return {
            "method": "GET",
            "hostname": "api.hgbrasil.com",
            "path": `/weather?array_limit=2&fields=only_results,temp,city_name,max,min,date&key=a5b8055c&city_name=${city},${state}`,
 
        }
    }


    
    getWeatherRequest() : Promise<JSON>{

        return  new Promise((resolve, reject) => {

            const req = https.request(this.buildWeatherRequest(this.city,this.state), function (res) {
    
                const chunks = [];
                
                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });
                
                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    resolve(body.toString())
                });
    
                res.on("error", function (err) {
                    reject(err);
                })
            });
    
            req.end()
    
        })
    }


}


export {Weather}