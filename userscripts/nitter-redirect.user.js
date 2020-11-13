// ==UserScript==
// @name     nitter redirect
// @description redirects from twitter to nitter
// @version  0.0.1
// @grant    none
// @match    https://twitter.com/*
// @run-at   document-start
// ==/UserScript==
let current = window.location.href;
let destination = current;
destination = current.replace("twitter.com", "nitter.net");
window.location = destination;
