/*Добавление спойлера*/
const rowArrow = document.querySelector(".row--skills-block");
const spoilerBlock = document.querySelector(".spoiler-wrap");
if (rowArrow) {
  rowArrow.addEventListener("click", function (e) {
    rowArrow.classList.toggle("_active");
    spoilerBlock.classList.toggle("_active");
  });
}
