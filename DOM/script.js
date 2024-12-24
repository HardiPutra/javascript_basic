const body = document.querySelector("body");
const Btn = document.querySelector("#tombol");
const judul = document.querySelector("h1");

function darkMode() {
  body.style.backgroundColor = "black";
  judul.style.color = "white";
}

function lightMode() {
  body.style.backgroundColor = "white";
  judul.style.color = "black";
}

Btn.addEventListener("click", darkMode);
Btn.addEventListener("dblclick", lightMode);
// Btn.addEventListener("click", function () {
//   body.style.backgroundColor = "black";
//   judul.style.color = "white";
// });

// Btn.addEventListener("dbclick", lightMode());

// function lightMode() {
//   body.style.backgroundColor = "white";
//   judul.style.color = "black";
// }
