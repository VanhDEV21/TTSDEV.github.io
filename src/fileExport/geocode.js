const request = require('request');
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+encodeURIComponent(address)+'&proximity=ip&access_token=pk.eyJ1IjoidmlldGFuaHp6bW1tbSIsImEiOiJjbTN5NXo0ZjkxZWZzMmpxdDFwZDR4cWQxIn0.OObL2XzLuCan8NNPmWTjeA'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
        callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
        callback('Unable to find location. Try another search.',undefined)
        } else {
        callback(undefined, {
        latitude: response.body.features[0].geometry.coordinates[1],
        longitude: response.body.features[0].geometry.coordinates[0],
        location: response.body.features[0].properties.full_address,
        })
        }
        })
}

module.exports = geocode 