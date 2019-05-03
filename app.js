const request = require('request')

const url = 'https://api.darksky.net/forecast/565fde47159033ae922330d4f359c13b/37.8267,-122.4233'

request({ url: url, json: true }, (error, response)=> {
    console.log(` ${response.body.daily.data[0].summary} There is ${response.body.currently.temperature} out there. chance of rain ${response.body.currently.precipProbability} %`)
})