var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=031988d57a1c5ed49f97d41e8ff1ed77';

module.exports = {
    // getTemp: function (location) {
    //     var encodedLocation = encodeURIComponent(location);
    //     var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //
    //     return axios.get(requestURL).then(function (res) {
    //         if(res.data.cod && res.data.message){
    //             throw new Error(res.data.message);
    //         }else{
    //             return res.data.main.temp;
    //         }
    //     },function (res) {
    //         throw new Error(res.data.message);
    //     })
    // }
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            //throw new Error(err.response.data.message);
            throw new Error('Unable to fetch weather for that location.');
        });
    }
};