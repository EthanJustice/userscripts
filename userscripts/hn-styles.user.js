// ==UserScript==
// @name     HackerNews Styling
// @description  Styling for Y-Combinator's HackerNews
// @version  0.0.3
// @run-at   document-start
// @grant    none
// @match 	 https://news.ycombinator.com/*
// ==/UserScript==
document.body.style.cssText = `
    margin: 0;
    background: #212121;
`

document.getElementsByTagName('tbody')[0].getElementsByTagName('table')[0].style.cssText = `
    background: #cb4b16;
`

document.getElementsByTagName('center')[0].style.cssText = `
    width: 100%;
    background: #212121;
`

document.getElementById('hnmain').style.cssText = `
    width: 90%;
    background: #212121;
`

const athings = document.getElementsByClassName('athing');
for (let i = 0; i < athings.length; i++) {
    athings[i].style.cssText = `
        background: #333;
        width: 1190px;
    `
};

const links = document.getElementsByTagName('a');
for (let f = 0; f < links.length; f++) {
    links[f].addEventListener('mousemove', function() { increaseOpacity(links[f]) });

    links[f].addEventListener('mouseleave', function() {
        links[f].style.opacity = `0.7`;
    });

    links[f].style.cssText = `
        color: #fafafa;
        opacity: 0.7;
				font-size: 10pt;
    `
}

const subtexts = document.getElementsByClassName('subtext');
for (let z = 0; z < subtexts.length; z++) {
    subtexts[z].style.cssText = `
        background: #333;
        width: 1200px;
				font-size: 4pt;
    `
}

const yclinksLinks = document.getElementsByClassName('yclinks')[0].getElementsByTagName('a');
for (let e = 0; e < yclinksLinks; e++) {
    yclinksLinks[e].style.cssText = `
        color: #f5f5f5
    `
}

const search = document.getElementsByTagName('input')[0];

search.style.cssText = `
    background: #333;
    border: none;
    width: 20%;
    color: #fafafa;
    opacity: 0.7;
`

search.addEventListener('mousemove', function() { increaseOpacity(search) })

const commtexts = document.getElementsByClassName('commtext');
for (let o = 0; o < commtexts.length; o++) {
    commtexts[o].style.cssText = `
        color: #fafafa;
    `
}

function increaseOpacity(element) { element.style.opacity = '1' }

const elements = document.getElementsByTagName('*');
for (let p = 0; p < elements.length; p++) {
    elements[p] == document.body || elements[p] == document.documentElement || elements[p] == document.head || elements[p] == center ? null : elements[p].style.transition = `0.1s linear`
}