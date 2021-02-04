const api = {
  key: "553df87b08ae6c796e00b5b44924fbf5",
  base_weather: "https://api.openweathermap.org/data/2.5/",
  base_map: "http://maps.openweathermap.org/maps/2.0/weather/",
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults_wheather(searchBox.value);
    getResults_map(searchBox.value);
  }
}

function getResults_weather(query) {
  fetch(`${api.base_weather}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>ºc</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}ºc / ${Math.round(
    weather.main.temp_max
  )}ºc`;
}

function dateBuilder(d) {
  let months = [
    "Junuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "Agust",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Moday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function getResults_map() {
  fetch(`${api.base_map}/TA2/{z}/{x}/{y}/&appid={api.key}`)
    .then((map) => {
      return map.json();
    })
    .then(displayResults_map);
}
