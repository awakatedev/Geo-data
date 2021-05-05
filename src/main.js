import getResults_country from "./countries.js";
//import getResults_weather from "./weather.js";
let myIp = document.querySelector("#my-location");
myIp.addEventListener("click", getIP);
function getIP(json) {
  fetch(``);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  alert("Location not found");
}
function success(getCordinates) {
  let lat = getCordinates.coords.latitude;
  let lon = getCordinates.coords.longitude;
  console.log(lat, lon);

  fetch(`http://ip-api.com/json/181.208.166.47`)
    .then((location) => location.json())
    .then(dataC);
}
function dataC(location) {
  let $containerLocation = document.querySelector(".search-information_text");
  let name = document.createElement("h2");
  $containerLocation.appendChild(name);
  name.textContent = location.city;

  let country = document.createElement("p");
  $containerLocation.appendChild(country);
  country.textContent = "Country:" + country;
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
