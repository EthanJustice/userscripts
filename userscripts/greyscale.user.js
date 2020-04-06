// ==UserScript==
// @name     Greyscale
// @description  Applies greyscale to websites
// @version  0.0.1
// @run-at   document-start
// @grant    none
// ==/UserScript==
document.documentElement.style.filter = 'grayscale(100%)';
document.querySelectorAll('img').forEach(element => {
	element.style.filter = 'grayscale(100%)';
});