// ==UserScript==
// @name     Image Link Wrapper
// @description Wrap images in a link pointing to their source
// @version  0.0.1
// @grant    none
// @run-at   document-idle
// ==/UserScript==
document.body.querySelectorAll('img[src]').forEach(item => {
    let element = document.createElement('a');
    element.href = item.src;
    item.insertAdjacentElement('beforebegin', element);
    element.appendChild(item);
});