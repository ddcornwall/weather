
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
var degF = 9*conditions.main.temp/5+32; // calculate temp in fahrenheit
$("#local-weather").append("Temperature: " + conditions.main.temp.toFixed(0) + "C / " + degF.toFixed(0) + "F");
     // caluculate pressure in inches
var inches = 0.0295300*conditions.main.pressure;
$("#local-weather").append("</br>Pressure: " + conditions.main.pressure.toFixed(1) + "mb  / " + inches.toFixed(1) + "in");
$("#local-weather").append("</br>Humidity: " + conditions.main.humidity + "%");
     // calculate windspeed in miles per hour
var mph = (conditions.wind.speed*3600)/1609.34;
$("#local-weather").append("</br>Wind Speed: " + conditions.wind.speed.toFixed(1) +"mps / " + mph.toFixed(1) +"mph");
    //convert degrees to a wind Direction
    var winDir="";
    if (conditions.wind.deg >= 0 && conditions.wind.deg <= 33.75) {
    winDir="N";
  } else if (conditions.wind.deg >= 33.76 && conditions.wind.deg <= 78.75) {
    winDir="NE";
  } else if (conditions.wind.deg >= 78.76 && conditions.wind.deg <= 123.75) {
    winDir="E";
  } else if (conditions.wind.deg >= 123.76 && conditions.wind.deg <= 168.75) {
    winDir="SE";
  } else if (conditions.wind.deg >= 168.76 && conditions.wind.deg <= 213.75) {
    winDir="S";
    } else if (conditions.wind.deg >= 213.76 && conditions.wind.deg <= 258.75) {
    winDir="SW";
    } else if (conditions.wind.deg >= 258.76 && conditions.wind.deg <= 303.75) {
    winDir="W";
  } else if (conditions.wind.deg >= 303.76 && conditions.wind.deg <= 359.99) {
    winDir="NW";
    }
  $("#local-weather").append("</br>Wind Direction: " + winDir);

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
