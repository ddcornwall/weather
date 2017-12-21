


// Try HTML5 geolocation.
   if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
var lat=position.coords.latitude;
var lng=position.coords.longitude;

//Load Weather
wURL="https://fcc-weather-api.glitch.me/api/current?lon=" +lng + "&" + "lat=" + lat;
console.log(wURL);
$.getJSON(wURL, function( data ) {
 conditions=data;
$("#local-location").append("<p> Conditions for " + conditions.name + " located at </br>" +  "Latitude: " + conditions.coord.lat + "</br>" +
"Longitude: " + conditions.coord.lon + "</p>");
$("#local-weather").append("<img src = \"" + conditions.weather[0].icon + "\"> </br>" + conditions.weather[0].description);
$("#local-weather").append("</br></br>Temperature (C): " + conditions.main.temp);
}); //end load weather
});
}
