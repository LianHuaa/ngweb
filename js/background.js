(function () {
    const catalogue = "./img/";
    const suffix = ".png";
    const num = 3;
    const num_random = Math.floor(Math.random() * num);
    document.body.style.backgroundImage = `url(${catalogue}${num_random}${suffix})`
}());

document.querySelector('#butt').addEventListener('click', function () {
    document.querySelector('.topnav').classList.toggle('topnav_modify');
});
