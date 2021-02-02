const api = {
  key: "553df87b08ae6c796e00b5b44924fbf5",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}
