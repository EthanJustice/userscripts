// ==UserScript==
// @name     Design Mode
// @description Turn on document.designMode
// @version  0.0.1
// @grant    none
// ==/UserScript==
document.designMode = 'on';
document.querySelectorAll('a[href]').forEach(item => item.disabled = true);