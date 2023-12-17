/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

let responsive = document.getElementById('responsive');

function changeImage(x) {
  if (x === 1) {
    responsive.src = 'images/boatkinggg.jpg';
  }

  if (x === 2) {
    responsive.src = 'images/lowking.jpg';
  }
}

let runAnimation = function () {
  responsive.classList.add("animate");
  setTimeout(clearClass, 4000);
}

responsive.addEventListener("mouseenter", runAnimation);

let clearClass = function () {
  responsive.classList.remove("animate");
};








