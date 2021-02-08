import { getResults_rest } from "./main.js";

function getResults_rest(query) {
  fetch("https://restcountries.eu/rest/v2/neme/"`${query}`)
    .then((response) => {
      return response.json();
    })
    .then(data);
}

function data(response) {
  let flag = document.querySelector(".first-info .flag");
  flag.innerText = `${flag}`;

  let name = document.querySelector(".first-info .flag");
  name.innerText = `${name}, ${alpha3Code}`;

  let lenguage = document.querySelector(".first-info .lenguage");
  lenguage.innerText = `${lenguages.name}`;

  let borders = document.querySelector(".firt-information .borders");
  borders.innerText = `${borders}`;
}
