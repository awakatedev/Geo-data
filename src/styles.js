//styles dark mode
let bg_color_header = document.querySelector("header");
let bg_color_main = document.querySelector("main");
let title_color = document.querySelector(".title-container");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");

moon.addEventListener("click", function () {
  if ((bg_color_header.style.background = "#00ff3aa6")) {
    bg_color_header.style.background = "#040c18f7";
    bg_color_main.style.background = "#040c18f7";
    title_color.style.color = "#fff";
    moon.style.display = "none";
    sun.style.display = "block";
  }
});

sun.addEventListener("click", function () {
  if ((moon.style.display = "none")) {
    bg_color_header.style.background = "#00ff3aa6";
    bg_color_main.style.background = "#00ff3aa6";
    title_color.style.color = "#000";
    moon.style.display = "block";
    sun.style.display = "none";
  }
});
