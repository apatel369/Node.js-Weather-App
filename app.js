const request = require('request')

const url = 'https://api.darksky.net/forecast/565fde47159033ae922330d4f359c13b/37.8267,-122.4233'

request({ url: url, json: true }, (error, response)=> {
    console.log(` ${response.body.daily.data[0].summary} There is ${response.body.currently.temperature} out there. chance of rain ${response.body.currently.precipProbability} %`)
})

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXAzNjkiLCJhIjoiY2p2N2U5c2Z1MGY1NTRlcGZ0NnhzeGNpcCJ9.t8k7MT8jKGxjfd2ck48bSQ"

request({ url: url2, json:true }, (error, response)=> {
    console.log(`lat: ${response.body.features[0].center[1]} long: ${response.body.features[0].center[0]}`)
})