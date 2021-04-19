const request = require('request');


const getForecast =(lat,long,callback)=>{
    const URL = 'http://api.weatherstack.com/current?access_key=d40a3c8e43da6ff881c0a2528b172b20&query='+lat+','+long+'&units=m';

request({ url: URL, json: true }, (error, res) => {
    if (error) {
        callback("Unable to connect to weather app",undefined)
    } else if (res.body.error) {
        callback(res.body.error,undefined)
    } else {
        callback(undefined,`${res.body.current.weather_descriptions}.It's currently ${res.body.current.temperature} degrees out. There is ${res.body.current.precip}% chance of rain`)

    }
})
}

module.exports = getForecast;