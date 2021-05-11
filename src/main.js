import getResults_country from "./countries.js";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  alert("Location not found");
}
function success(getCordinates) {
  console.log(getCordinates.coords);

  fetch(
    `http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,regionName,city,lat,lon,timezone,currency,reverse,mobile,proxy,query`
  )
    .then((location) => location.json())
    .then(dataC);
}
function dataC(location) {
  let $ipAdressContainer = document.querySelector(".ipAdress");
  let ipAdress = document.createElement("p");
  $ipAdressContainer.appendChild(ipAdress);
  ipAdress.textContent = location.query;

  let $lonContainer = document.querySelector(".lon");
  let lon = document.createElement("p");
  $lonContainer.appendChild(lon);
  lon.textContent = location.lon;

  let $latContainer = document.querySelector(".lat");
  let lat = document.createElement("p");
  $latContainer.appendChild(lat);
  lat.textContent = location.lat;

  let $locationData = document.querySelector(
    ".search-information_locationData"
  );
  let city = document.createElement("h2");
  $locationData.appendChild(city);
  city.textContent = location.city + "," + location.countryCode;

  //-------------------------------------------------------------
  let $dataContinent = document.querySelector(".dataOptions_data-continent");
  let continent = document.createElement("p");
  $dataContinent.appendChild(continent);
  continent.textContent = location.continent;

  let $dataCountry = document.querySelector(".dataOptions_data-Country");
  let country = document.createElement("p");
  $dataCountry.appendChild(country);
  country.textContent = location.country;

  let $dataTimezone = document.querySelector(".dataOptions_data-timezone");
  let timeZone = document.createElement("p");
  $dataTimezone.appendChild(timeZone);
  timeZone.textContent = location.timezone;

  let $dataRegion = document.querySelector(".dataOptions_data-region");
  let region = document.createElement("p");
  $dataRegion.appendChild(region);
  region.textContent = location.regionName;

  let $dataCurrency = document.querySelector(".dataOptions_data-Currency");
  let currency = document.createElement("p");
  $dataCurrency.appendChild(currency);
  currency.textContent = location.currency;

  //------------------------------------------------------------
  let $buttonWeather = document.querySelector("#getLocal-weather");
  $buttonWeather.addEventListener("click", () => {
    let cityQuery = location.city;
    console.log(cityQuery);
  });
}

//Country browser
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults_country(searchBox.value);
  }
}

export default getResults_country;
