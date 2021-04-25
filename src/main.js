import getResults_country from "./countries.js";
//import getResults_weather from "./weather.js";

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    //getResults_weather(searchBox.value);
    getResults_country(searchBox.value);
  }
}

export default getResults_country;
//export default getResults_weather;
