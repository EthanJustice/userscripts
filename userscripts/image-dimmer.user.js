// ==UserScript==
// @name     Image Dimmer 238611
// @version  0.0.1
// @run-at   document-idle
// @grant    none
// ==/UserScript==
const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = '0.4';
    images[i].style.transition = '0.1s linear';
    images[i].addEventListener('mousemove', function() { increaseOpacity(images[i]) })
    images[i].addEventListener('mouseleave', function() { decreaseOpacity(images[i]) })
}
function increaseOpacity(elem) { elem.style.opacity = '1' };
function decreaseOpacity(elem) { elem.style.opacity = '0.4' };