const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/565fde47159033ae922330d4f359c13b/' + lat + ',' + long

    request({ url, json: true }, (error, { body })=> {
        if(error){
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} There is ${body.currently.temperature} out there. chance of rain ${body.currently.precipProbability} %`)
        }   
    })
}

module.exports = forecast