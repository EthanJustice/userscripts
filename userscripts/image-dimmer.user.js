// ==UserScript==
// @name     Image Dimmer 238611
// @version  0.0.1
// @run-at   document-idle
// @grant    none
// ==/UserScript==
document.body.querySelectorAll('img[src]').forEach(item => {
    item.style.opacity = '0.4';
    item.style.transition = '0.1s linear';
    item.addEventListener('mousemove', function () { increaseOpacity(item) })
    item.addEventListener('mouseleave', function () { decreaseOpacity(item) })
});

function increaseOpacity(elem) { elem.style.opacity = '1' };
function decreaseOpacity(elem) { elem.style.opacity = '0.4' };