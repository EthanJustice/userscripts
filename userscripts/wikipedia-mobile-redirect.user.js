// ==UserScript==
// @name     Mobile Wikipedia Redirect
// @version  0.0.1
// @grant    none
// @match    https://*.wikipedia.org/*
// @run-at   document-start
// ==/UserScript==
let current = window.location.href;
let destination = current;
// prevent m.m.wikipedia.org recursion
if (current.includes("m.wikipedia.org") == false) {
    destination = current.replace("wikipedia.org", "m.wikipedia.org");
    window.location = destination;
}
