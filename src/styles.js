//styles dark mode
let title_color = document.querySelector(".title-container");
let list = document.querySelector("#icon-listCoutry");

let btnSwich = document.querySelector("#swich");

btnSwich.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwich.classList.toggle("active");
});
