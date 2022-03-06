'use strict';

let mainslideMenu = document.querySelector('.mainslideMenuBlack');
let mainslideMenuList = document.querySelector('.mainslideMenuList');
let menubars = document.querySelector('.menubars');
let krestix = document.querySelector('.krestix');

function toggleMenu() {
    mainslideMenu.classList.toggle('hidden');
    mainslideMenuList.classList.toggle('hidden');
}

menubars.addEventListener('click', toggleMenu);
krestix.addEventListener('click', toggleMenu);