// ==UserScript==
// @name     Image Remover
// @description Removes images
// @version  0.0.1
// @grant    none
// @run-at   document-start
// ==/UserScript==
document.body.querySelectorAll('img').forEach(item => {
    item.remove();
});
