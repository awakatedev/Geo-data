const ListCountryApi = "https://restcountries.eu/rest/v2/all";

let button_listCountry = document
  .querySelector(".countries-list-action")
  .addEventListener("click", get_countryList);

function getCountry_list() {
  fetch(`${ListCountryApi}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // data.forEach((Country2) => {
      //  let $blockCoutry_list = document.createElement("section");
      // });
      //  let $carousel_coutries = document.createElement("section");
      //  document.querySelector(".block-cards_soon").appendChild($carousel_countries);
      //  $card_country.className = "carousel_countries";
    });
}
