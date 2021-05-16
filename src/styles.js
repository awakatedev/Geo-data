//styles dark mode
let title_color = document.querySelector(".title-container");
let list = document.querySelector("#icon-listCoutry");
let lbl = document.querySelector(".lbl");

let btnSwitch = document.querySelector('input[id="switch"]');
btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  lbl.classList.toggle("active");

  //save dark-mode in LocaleStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  lbl.classList.add("active");
  btnSwitch.checked = true;
} else {
  document.body.classList.remove("dark");
  lbl.classList.remove("active");
  btnSwitch.checked = false;
}
