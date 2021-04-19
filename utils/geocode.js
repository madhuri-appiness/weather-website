const request = require('request');

const geoCode = (address, callback) => {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFkaHVyaS1wYXRpbCIsImEiOiJja21hNm01YWMxb2ZwMnJvOTg4d2c0ZnBjIn0.Ir6LzK1ojUQE_xziF8UBUw';
    request({ url: geoCodeUrl, json: true }, (err, res) => {
        if (err) {
            callback("Unable to get geocode", undefined)
        } else if (!res.body.features.length) {  
            callback("Unable to find location, try again with diffrerent search", undefined)

        } else {
            callback(undefined, {
                'long': res.body.features[0].center[0],
                'lat': res.body.features[0].center[1],
            })

        }
    })
}


module.exports= geoCode;