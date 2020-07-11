// ==UserScript==
// @name     crates.io Redirect
// @version  0.0.1
// @grant    none
// @match    https://crates.io/*
// @run-at   document-start
// ==/UserScript==
let current = window.location.href;
let destination = current;
destination = current.replace('crates.io', 'lib.rs')
window.location = destination;