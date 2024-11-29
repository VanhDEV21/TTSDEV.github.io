const request = require('request');

const forecast =(lat,long, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=416daec6f15092778a3324d53dfd77cb&query='+ lat +','+ long+'&units=f';

    request({url:url,json:true},(error,res)=>{
        if(error){
            callback('Unable to connect to the internet', undefined)
        }else if(res.body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined, {
                current_weather: res.body.current.weather_descriptions[0],
                feelslike: res.body.current.feelslike,
                country: res.body.location.country,
                region: res.body.location.region,
            })
    }
});

}

module.exports = forecast;