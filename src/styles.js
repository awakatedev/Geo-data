let dark_mode = document.querySelector(".dark-mode_icon");
let bg_color_header = document.querySelector("header");
let bg_color_main = document.querySelector("main");
let title_color = document.querySelector(".title h1");

dark_mode.addEventListener("click", function () {
  if ((bg_color_header.style.background = "#00ff3aa6")) {
    bg_color_header.style.background = "#040c18f7";
    bg_color_main.style.background = "#040c18f7";
    title_color.style.color = "#fff";
  }
});
