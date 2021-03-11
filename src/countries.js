const country_api = "https://restcountries.eu/rest/v2/name/";

function getResults_rest(query) {
  fetch(`${country_api}${query}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //});
      //}
      //function data(response) {
      // let flag = document.querySelector(".flag");
      // flag.textContent = flag.name;
      data.forEach((info) => {
        const flag = document.createElement("img");
        flag.src = info.flag;
        document.querySelector(".flag").appendChild(flag);

        const name = document.createElement("h2");
        name.textContent = info.name;
        document.querySelector(".name").appendChild(name);
      });
    });
}
export default getResults_rest;
