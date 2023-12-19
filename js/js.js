/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

let responsive = document.getElementById('responsive');

/** here once hovered over img it changes img  */

function changeImage(x) {
  if (x === 1) {
    responsive.src = 'images/boatkinggg.jpg';
  }

  if (x === 2) {
    responsive.src = 'images/lowking.jpg';
  }
}

/** here  its an animation.. once hovered over img it dimmes and opens up again  */


let runAnimation = function () {
  responsive.classList.add("animate");
  setTimeout(clearClass, 4000);
}

responsive.addEventListener("mouseenter", runAnimation);

let clearClass = function () {
  responsive.classList.remove("animate");
};








