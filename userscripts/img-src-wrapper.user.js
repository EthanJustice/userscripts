// ==UserScript==
// @name     Image Link Wrapper
// @description Wrap images in a link pointing to their source
// @version  1
// @grant    none
// @run-at   document-idle
// ==/UserScript==
let l = window.location.href;
if (l.endsWith('png') || l.endsWith('jpeg')) { return }
document.body.querySelectorAll('img[src]').forEach(item => {
    let element = document.createElement('a');
    element.href = item.src;
    item.insertAdjacentElement('beforebegin', element);
    element.appendChild(item);
});