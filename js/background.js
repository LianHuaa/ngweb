const catalogue = "./img/";

const suffix = ".png";

const num = 3;

let num_random = Math.floor(Math.random() * num);

(function () {
  document.body.style.backgroundImage = `url(${catalogue}${num_random}${suffix})`
}());

const Button = document.querySelector('#butt');
const topnav = document.querySelector('.topnav');

Button.addEventListener('click', function () {
  topnav.classList.toggle('topnav_modify');
});
