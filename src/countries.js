const country_api = "https://restcountries.eu/rest/v2/";

let info_container = document.querySelector(".block-cards");
let init_img = document.querySelector(".search");
let height_start = document.querySelector("main");

function getResults_country(query) {
  fetch(`${country_api}name/${query}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //});
      data.forEach((country) => {
        let $card_country = document.createElement("section");
        document.querySelector(".block-cards_soon").appendChild($card_country);
        $card_country.className = "card_country";

        let $firstCountainer = document.createElement("section");
        $card_country.appendChild($firstCountainer);
        $firstCountainer.className = "firstContainer";

        let $container_flagname = document.createElement("div");
        $firstCountainer.appendChild($container_flagname);
        $container_flagname.className = "container_flagname";

        let flag = document.createElement("img");
        flag.src = country.flag;
        $container_flagname.appendChild(flag);
        flag.className = "c_flag";

        let name = document.createElement("h2");
        name.textContent = country.name;
        $container_flagname.appendChild(name);
        name.className = "c_name";

        let $searchContainer = document.createElement("div");
        $firstCountainer.appendChild($searchContainer);
        $searchContainer.className = "searchContainer";

        let searcherInput = document.createElement("input");
        $searchContainer.appendChild(searcherInput);

        let iconSearchCard = document.createElement("i");
        $firstCountainer.appendChild(iconSearchCard);
        iconSearchCard.className = "fas fa-search iconSearchCard";

        //-------------------------------------------------------------
        //container info
        let $container_info = document.createElement("section");
        $card_country.appendChild($container_info);
        $container_info.className = "container_info";

        let $info_one = document.createElement("div");
        $container_info.appendChild($info_one);
        $info_one.className = "info_one";

        let $info_two = document.createElement("div");
        $container_info.appendChild($info_two);
        $info_two.className = "info_two";
        //-------------------------------------------------------------
        //information
        let alpha3Code = document.createElement("p");
        let subTitle1 = document.createElement("h3");
        subTitle1.textContent = "Alpha3Code:";
        alpha3Code.textContent = country.alpha3Code;
        $info_one.appendChild(subTitle1);
        $info_one.appendChild(alpha3Code);

        let capital = document.createElement("p");
        let subTitle2 = document.createElement("h3");
        subTitle2.textContent = "Capital:";
        capital.textContent = country.capital;
        $info_one.appendChild(subTitle2);
        $info_one.appendChild(capital);

        let region = document.createElement("p");
        let subTitle3 = document.createElement("h3");
        subTitle3.textContent = "Region:";
        region.textContent = country.region;
        $info_one.appendChild(subTitle3);
        $info_one.appendChild(region);

        let subregion = document.createElement("p");
        let subTitle4 = document.createElement("h3");
        subTitle4.textContent = "Sub Region:";
        subregion.textContent = country.subregion;
        $info_one.appendChild(subTitle4);
        $info_one.appendChild(subregion);

        let population = document.createElement("p");
        let subTitle5 = document.createElement("h3");
        subTitle5.textContent = "Population:";
        population.textContent = country.population;
        $info_one.appendChild(subTitle5);
        $info_one.appendChild(population);

        //--------------------------------------------------------------
        let timezones = document.createElement("p");
        let subTitle6 = document.createElement("h3");
        subTitle6.textContent = "Time zones:";
        timezones.textContent = country.timezones;
        $info_two.appendChild(subTitle6);
        $info_two.appendChild(timezones);

        let currencies = document.createElement("p");
        let subTitle7 = document.createElement("h3");
        subTitle7.textContent = "Currencies:";
        currencies.textContent = country.currencies[0].code;
        $info_two.appendChild(subTitle7);
        $info_two.appendChild(currencies);

        let language = document.createElement("p");
        let subTitle8 = document.createElement("h3");
        subTitle8.textContent = "Language:";
        language.textContent = country.languages[0].name;
        $info_two.appendChild(subTitle8);
        $info_two.appendChild(language);

        let borders = document.createElement("p");
        let subTitle9 = document.createElement("h3");
        subTitle9.textContent = "Borders:";
        borders.textContent = country.borders;
        $info_two.appendChild(subTitle9);
        $info_two.appendChild(borders);
      });
    });
  if (true) {
    info_container.style.display = "block";
    init_img.style.display = "none";
    height_start.style.height = "100%";
  }
}

export default getResults_country;
