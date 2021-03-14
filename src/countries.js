const country_api = "https://restcountries.eu/rest/v2/";

//  let county_elements = [
//  let flag = ,
//  let alpha3Code = ,
//  let capital = ,
//  let region = ,
//  let subregion = ,
//  let population = ,
//  let timezones = ,
//  let currencies = ,
//  let language = ,
//  let borders = ,
//]


let info_container = document.querySelector(".block-cards");
//function refresh_container => {
let init_img = document.querySelector(".search");
//  if(){

  //}
//}



function getResults_rest(query) {
  fetch(`${country_api}name/${query}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //});
      data.forEach((info) => {

        const flag = document.createElement("img");
        flag.src = info.flag;
        document.querySelector(".flag").appendChild(flag);
        flag.setAttribute("height", "200px");
        flag.setAttribute("width", "400px");

        const name = document.createElement("h2");
        name.textContent = info.name;
        document.querySelector(".name").appendChild(name);
        name.setAttribute("margin-top", "50%");

        const alpha3Code = document.createElement("p");
        alpha3Code.textContent = info.alpha3Code;
        document.querySelector(".alpha3Code").appendChild(alpha3Code);

        const capital = document.createElement("p");
        capital.textContent = info.capital;
        document.querySelector(".capital").appendChild(capital);

        const region = document.createElement("p");
        region.textContent = info.region;
        document.querySelector(".region").appendChild(region);

        const subregion = document.createElement("p");
        subregion.textContent = info.subregion;
        document.querySelector(".subregion").appendChild(subregion);

        const population = document.createElement("p");
        population.textContent = info.population;
        document.querySelector(".population").appendChild(population);

        const timezones = document.createElement("p");
        timezones.textContent = info.timezones;
        document.querySelector(".timezones").appendChild(timezones);

        const currencies = document.createElement("p");
        currencies.textContent = info.currencies;
        document.querySelector(".currencies").appendChild(currencies);

        const language = document.createElement("p");
        language.textContent = info.language;
        document.querySelector(".language").appendChild(language);

        const borders = document.createElement("p");
        borders.textContent = info.borders;
        document.querySelector(".borders").appendChild(borders);
      });
    });
    if (true) {
      info_container.style.display = "block";
      init_img.style.display = "none";
    }
}

export default getResults_rest;
