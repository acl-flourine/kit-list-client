'use strict';

var app = app || {};

const weather = [];
let userWeather = {};

(function(module) {

    function Weather (obj) {
        this.location = obj.location;
        this.temperature = obj.temperature;
        this.wind = obj.wind;
        this.conditions = obj.conditions;
    }

    Weather.getUserWeather = (id) => {
        $.get(`${API_URL}/api/v1/weather`, {id: id})
        .catch(console.error)
        .then( res => {
            console.log('weather: ', res);
            userWeather = {
                location: res[0],
                temperature: res[1],
                wind: res[2],
                conditions: res[3]
            }
            const olympia = new Weather(userWeather);
            $('#weather-view').children().empty();
            $('#weather-view').append(olympia.toHtml());
        })
    }

    Weather.prototype.toHtml = function() {
        const weatherTemplate = $(`#weather-template`).html();
        const templateFiller = Handlebars.compile(weatherTemplate);
        const filledTemplate = templateFiller(this);
        return filledTemplate;
    }  

    module.Weather = Weather;

})(app);
