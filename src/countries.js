let api_country = {
  base:"https://restcountries.eu/rest/v2/name/",
}

function getResults_rest(query){
  fetch(`${api_country.base}${query}`)
    .then((rest) => {
      return rest.json();
    })
    .then(displayResults_info);
}

function displayResults_info(rest) {
  let flag = document.querySelector(".first-info .flag");
  flag.innerText = `${.flag}`;

  let name = document.querySelector(".first-info .flag");
  name.innerText = `${.name}, ${.alpha3Code}`;

  let lenguage = document.querySelector(".first-info .lenguage");
  lenguage.innerText = `${.lenguages.name}`;

  let borders = document.querySelector(".firt-information .borders");
  borders.innerText = `${.borders}`;
}
