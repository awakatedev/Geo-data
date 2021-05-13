
const weather_api = {
  key: "553df87b08ae6c796e00b5b44924fbf5",
  base: "https://api.openweathermap.org/data/2.5/",
};


const searchBox = document.querySelector(".weather-browser");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults_weather(searchBox.value);
  }
}

function getResults_weather(query) {
  fetch(
    `${weather_api.base}weather?q=${query}&units=metric&APPID=${weather_api.key}`
  )
    .then((weather) =>  weather.json()) 
    .then((data) => {
     data.forEach((city) => {
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
});

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
export default getResults_weather;
