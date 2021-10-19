
import https from "https"

class AirQuality{

    private city: String = 'saopaulo';


    constructor(city:String) {

        this.city = city;

    }

    getCity() {
        return this.city;
    }


    buildAirQualityRequest(){

        return {
            "method": "GET",
            "hostname": "api.ambeedata.com",
            "port": null,
            "path": `/latest/by-city?city=${this.city}`,
            "headers": {
                "x-api-key": "7ef213e43d4c24f655d9a7f2da025c40b845621b2fd60fc71c5e7c4c1d800bf0",
                "Content-type": "application/json"
            }}
    }


    getAirQualityRequest() : Promise<JSON>{

        return  new Promise((resolve, reject) => {

            const req = https.request(this.buildAirQualityRequest(), function (res) {
    
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


export {AirQuality}