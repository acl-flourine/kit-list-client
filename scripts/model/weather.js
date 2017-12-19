'use strict';

var app = app || {};

const weather = [];

const weatherObject = {
    location: "Portland",
    temperature: "50",
    weather: "rain"
};


(function(module) {

    function Weather (obj) {
        this.location = obj.location;
        this.temperature = obj.temperature;
        this.weather = obj.weather;
    }

    Weather.prototype.toHtml = function() {
        const weatherTemplate = $(`#weather-template`).html();
        const templateFiller = Handlebars.compile(weatherTemplate);
        const filledTemplate = templateFiller(this);
        return filledTemplate;
    }

    Weather.populateWeather = () => {
            const LA = new Weather(weatherObject);
            $('#weather-view').append(LA.toHtml());
        }    

    module.Weather = Weather;

})(app);

console.log(app);