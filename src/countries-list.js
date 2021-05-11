const globalCountriesURL = "https://restcountries.eu/rest/v2/all";

let letters = [
  "A",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let button_listCountry = document
  .querySelector(".countries-list-action")
  .addEventListener("click", () => {
    fetch(`${globalCountriesURL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
