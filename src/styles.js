//styles dark mode
let title_color = document.querySelector(".title-container");
let list = document.querySelector("#icon-listCoutry");

let btnSwich = document.querySelector("#swich");

btnSwich.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwich.classList.toggle("active");

  //save dark-mode in LocaleStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwich.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwich.classList.remove("active");
}
