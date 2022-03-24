'use strict';

let mainslideMenu = document.querySelector('.mainslideMenu');
let menubars = document.querySelector('.menubars');
let krestix = document.querySelector('.krestix');

function toggleMenu() {
    mainslideMenu.classList.toggle('hidden');
}

menubars.addEventListener('click', toggleMenu);
krestix.addEventListener('click', toggleMenu);