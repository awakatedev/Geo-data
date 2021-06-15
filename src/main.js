import getResults_country from "./countries-browser.js";
import { LOCATION, dataIP } from "./geoLocation.js";
import getLocal_weather from "./weather.js";

//getting IP adress to get geoLocation
fetch(`https://api64.ipify.org?format=json`)
  .then((IP) => IP.json())
  .then((IP) => dataIP(IP));

//Country browser
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults_country(searchBox.value);
  }
}

//Weather
const btnWeather = document.querySelector("#getLocal-weather");
btnWeather.addEventListener("click", () => getLocal_weather(LOCATION.city));

// function getLocal_weather_click()
// {
//   getLocal_weather(LOCATION.city);
// }