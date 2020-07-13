// ==UserScript==
// @name     Link Target Changer
// @description  Changes link targets to open in the same tab
// @version  0.0.1
// @grant    none
// @run-at   document-end
// ==/UserScript==
document.querySelectorAll('a').forEach(element => {
    element.setAttribute('target', '_self');

    element.addEventListener('mouseover', function () {
        element.setAttribute('target', '_self');
    });
});