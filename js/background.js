let catalogue = "./img/";

let suffix = ".png";

let num = 3;

let num_random = Math.floor(Math.random() * num);

(function () {
  document.body.style.backgroundImage = `url(${catalogue}${num_random}${suffix})`
  return document.body.style.backgroundImage;
}());

const Button = document.querySelector('#butt');
const topnav = document.querySelector('.topnav');

Button.addEventListener('click', function () {
  topnav.classList.toggle('topnav_modify');
});
