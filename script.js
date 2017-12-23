
// Get user location by using HTML5 geolocation. Needs to fail gracefully
   if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
var lat=position.coords.latitude;
var lng=position.coords.longitude;

//Load Weather
wURL="https://fcc-weather-api.glitch.me/api/current?lon=" +lng + "&" + "lat=" + lat;
console.log(wURL);
$.getJSON(wURL, function( data ) {
 conditions=data;

//display location information
$("#local-location").append("<p>" + conditions.name + ", located at </br>" +  "Latitude: " + conditions.coord.lat + "</br>" +
"Longitude: " + conditions.coord.lon + "</p>");

//display sky conditions
$("#local-sky").append("<img src = \"" + conditions.weather[0].icon + "\"" + " class=\"center-block\" height=\"125\" width=\"125\" > </br>" + conditions.weather[0].description);

//display weather conditions
$("#local-weather").append("Temperature: " + conditions.main.temp + " C");
$("#local-weather").append("</br>Pressure: " + conditions.main.pressure + " mb");
$("#local-weather").append("</br>Humidity: " + conditions.main.humidity + " %");
$("#local-weather").append("</br>Wind Speed: " + conditions.wind.speed +" meters per second");
$("#local-weather").append("</br>Wind Direction: " + conditions.wind.deg + " Deg");

//Calculate and display sunrise and sunset
var sunrise =  new Date(conditions.sys.sunrise*1000);
var sunset = new Date(conditions.sys.sunset*1000);
var month = sunrise.getMonth() + 1; //Get month returns 0-11 for months
$("#astronomy").append("Date: " + month + "/" + sunrise.getDate() + "/" + sunrise.getFullYear() +"</br>");
$("#astronomy").append("Sunrise: " + sunrise.toLocaleTimeString());
$("#astronomy").append("</br>Sunset:   " + sunset.toLocaleTimeString());
console.log(sunrise);
}); //end load weather
});
}
