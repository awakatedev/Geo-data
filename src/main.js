import getResults_country from "./countries.js";

//get IP adress
fetch(`https://api64.ipify.org?format=json`)
  .then((IP) => IP.json())
  .then(dataIP);

function dataIP(MyIP) {
  console.log(MyIP.ip);

  /**  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    alert("Location not found");
  }
  function success(getCordinates) {
    console.log(getCordinates.coords);
    */
  fetch(`https://ipapi.co/${MyIP.ip}/json/`)
    .then((Location) => Location.json())
    .then(dataC);
  function dataC(location) {
    console.log(location);
    let $ipAdressContainer = document.querySelector(".ipAdress");
    let ipAdress = document.createElement("p");
    $ipAdressContainer.appendChild(ipAdress);
    ipAdress.textContent = location.ip;

    let $latContainer = document.querySelector(".lat");
    let lat = document.createElement("p");
    $latContainer.appendChild(lat);
    lat.textContent = location.latitude;

    let $lonContainer = document.querySelector(".lon");
    let lon = document.createElement("p");
    $lonContainer.appendChild(lon);
    lon.textContent = location.longitude;

    let $locationData = document.querySelector(
      ".search-information_locationData"
    );
    let city = document.createElement("h2");
    $locationData.appendChild(city);
    city.textContent = location.city + "," + location.country_code_iso3;

    //-------------------------------------------------------------
    let $dataCountry = document.querySelector(".dataOptions_data-Country");
    let country = document.createElement("p");
    $dataCountry.appendChild(country);
    country.textContent = location.country_name;

    let $dataTimezone = document.querySelector(".dataOptions_data-timezone");
    let timeZone = document.createElement("p");
    $dataTimezone.appendChild(timeZone);
    timeZone.textContent = location.timezone;

    let $dataRegion = document.querySelector(".dataOptions_data-region");
    let region = document.createElement("p");
    $dataRegion.appendChild(region);
    region.textContent = location.region;

    let $dataCallCode = document.querySelector(".dataOptions_data-callCode");
    let call_code = document.createElement("p");
    $dataCallCode.appendChild(call_code);
    call_code.textContent = location.country_calling_code;

    //------------------------------------------------------------
    let $buttonWeather = document.querySelector("#getLocal-weather");
    $buttonWeather.addEventListener("click", () => {
      let cityQuery = location.location.city;
      console.log(cityQuery);
    });
  }
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
