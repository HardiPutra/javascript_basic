const tombol = document.querySelector("#tbl");
const body = document.querySelector("body");
// tombol.addEventListener("click", bg());

function bg() {
  body.style.backgroundColor = "blue";
}
tombol.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
