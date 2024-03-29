const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2b82e610546249e07fd3ecd33b6531f4/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature+
            ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.') 
        }
    })
}

module.exports = forecast