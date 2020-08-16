// ==UserScript==
// @name     RSS Notifier
// @description  Notifier that site contains RSS feed hints
// @version  0.0.2
// @grant    none
// @run-at   document-idle
// ==/UserScript==
let feeds = false;
if (document.head.querySelector('link[type="application/atom+xml"],link[type="application/feed+json"],link[type="rss+xml"]')) { feeds = true }

if (feeds == true) {
	let newElement = document.createElement('p');
	newElement.style = `
		background: crimson;
		color: black;
		position: absolute;
		width: 10%;
		padding: 10px;
		top: 2%;
		left: 2%;
		z-index: 99999;
		text-align: center;
		font-size: 20pt;
	`
	newElement.innerText = 'Feeds';
	document.body.insertBefore(newElement, document.body.firstChild);

	setTimeout(() => newElement.remove(), 3000);
}