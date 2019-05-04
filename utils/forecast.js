const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/565fde47159033ae922330d4f359c13b/' + lat + ',' + long

    request({ url: url, json: true }, (error, response)=> {
        if(error){
            callback('Unable to connect to weather services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} There is ${response.body.currently.temperature} out there. chance of rain ${response.body.currently.precipProbability} %`)
        }   
    })
}

module.exports = forecast