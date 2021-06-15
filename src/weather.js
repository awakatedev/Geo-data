
const weather_api = {
  key: "553df87b08ae6c796e00b5b44924fbf5",
  base: "https://api.openweathermap.org/data/2.5/",
};

function getLocal_weather(city)
{
  console.log(city);
    fetch(
    `${weather_api.base}weather?q=${city}&units=metric&APPID=${weather_api.key}`
    )
    .then((weather) =>  weather.json())
    .then(createWeatherContainer);
}

function createWeatherContainer(weather)
{
  // create a fragment
  const main = document.querySelector("main"),
        fragment = document.createDocumentFragment(), 
        section = document.createElement("section"),
        div = document.createElement("div");

  console.log(weather);

  // assign classes in elements
  section.classList.add("search");
  div.classList.add("search-information");

  // create h2 for city name
  createCityNameContainer(div, weather)
  
  // create elements of search-information_dataOptions
  createDataOptionsContainer(div, weather);

  // add div container to section
  section.appendChild(div);
  // add children to fragment
  fragment.appendChild(section);

  // replace fragment in first children
  main.replaceChild(fragment, main.children[0]);
}

function createCityNameContainer(parent, weather)
{
  const section = document.createElement("section"), 
        h2 = document.createElement("h2");
  
  section.classList.add("search-information_locationData");
  h2.textContent = weather.name;

  section.appendChild(h2);
  parent.appendChild(section);
}

function createDataOptionsContainer(parent, weather)
{
  const section = document.createElement("section"),
        data = document.createElement("section"),
        div = createDataOptions_options();
  
  section.classList.add("search-information_dataOptions");
  data.classList.add("dataOptions_data");
  data.appendChild(createDataOptions_data("Feels like:", weather.main["feels_like"]));
  data.appendChild(createDataOptions_data("Humidity:", weather.main["humidity"]));
  data.appendChild(createDataOptions_data("Pressure: "), weather.main["pressure"]);
  data.appendChild(createDataOptions_data("Wind: ", weather.wind["speed"]));

  section.appendChild(data);
  section.appendChild(div);
  parent.appendChild(section);
}

function createDataOptions_data(nameProperty, property)
{
  const div = document.createElement("div"),
        h3 = document.createElement("h3"),
        p = document.createElement("p");

  div.classList.add("dataOptions_data");
  h3.textContent = nameProperty;
  p.textContent = property;

  div.appendChild(h3);
  div.appendChild(p);
  return div;
}

function createDataOptions_options()
{
  const div = document.createElement("div"),
        options = document.createElement("div"),
        btnWeather = document.createElement("button"),
        iconWeather = document.createElement("i"),
        btnCountry = document.createElement("button"),
        iconCountry = document.createElement("i"),
        btnMap = document.createElement("button"),
        iconMap = document.createElement("i");

  div.classList.add("dataOptions_options");
  options.classList.add("options");

  btnWeather.id = "getLocal-weather";
  iconWeather.classList.add("fas", "fa-cloud-sun-rain");
  btnCountry.id = "getCountry";
  iconCountry.classList.add("far", "fa-flag");
  btnMap.id = "getLocamMap";
  iconMap.classList.add("fas", "fa-search-location");

  btnWeather.appendChild(iconWeather);
  btnCountry.appendChild(iconCountry);
  btnMap.appendChild(iconMap);
  
  options.appendChild(btnWeather);
  options.appendChild(btnCountry);
  options.appendChild(btnMap);
  div.appendChild(options);

  return div;
}

export default getLocal_weather;