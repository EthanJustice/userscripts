// ==UserScript==
// @name     Link Text Target Replacer
// @description  Replaces link text with their destination.
// @version  0.1
// @run-at   document-idle
// @grant    none
// ==/UserScript==
document.querySelectorAll('a').forEach(elem => {
    elem.innerHTML = elem.href;
});