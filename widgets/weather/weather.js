var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=53.34&lon=-6.26&appid=15f66cafe80e8e468ff38ac9012a076b'

updateWeather()

window.setInterval(function(){
    updateWeather()
}, 60000);

function updateWeather() {
    $.getJSON(weatherApiUrl, function(data) {
        $('#weatherInfoIcon').html('<img id="weatherIcon" src="widgets/weather/icons/'+ data['weather'][0]['icon'] +'.png"/>');
        $('#weatherInfoMain').html(data['weather'][0]['main'])
        $('#weatherInfoDetail').html(data['weather'][0]['description'])
    });
}