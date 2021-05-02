import getResults_country from "./countries.js";
//import getResults_weather from "./weather.js";
const weather_api = {
  key: "553df87b08ae6c796e00b5b44924fbf5",
  base: "https://api.openweathermap.org/data/2.5/",
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  alert("Location not found");
}
function success(getCordinates) {
  let lat = getCordinates.coords.latitude;
  let lon = getCordinates.coords.longitude;
  console.log(lat, lon);

  fetch(
    `${weather_api.base}weather?lat=${lat}&lon=${lon}&appid=${weather_api.key}`
  )
    .then((weather) => weather.json())
    .then(dataC);
}
function dataC(weather) {
  let father = document.querySelector(".search-information_text");
  let here = document.createElement("p");
  father.appendChild(here);
  here.textContent = weather.name;
}
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    //   getResults_weather(searchBox.value);
    getResults_country(searchBox.value);
  }
}

export default getResults_country;
