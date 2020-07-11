// ==UserScript==
// @name     Rust Doc/Crate Switcher
// @version  0.0.1
// @grant    none
// @include    https://crates.io/crates/*
// @include    https://lib.rs/crates/*
// @include    https://docs.rs/*
// ==/UserScript==
const buildElement = (type, text, attributes) => {
	let element = document.createElement(type);
	element.innerText = text || '';
	if (attributes) {
		Object.keys(attributes).forEach(item => {
			if (item.includes('data_')) { element.setAttribute(item.replace(new RegExp('_', 'g'), '-'), attributes[item]) }
			else { element[item] = attributes[item] }
		});
	}
	return element;
}

let pack;
if (window.location.href.includes('docs.rs')) {
	pack = window.location.href.split('.rs/')[1].split('/')[0];
} else {
	pack = window.location.href.split('/crates/')[1].split('/')[0];
}

let container = buildElement('div', '', {
	style: `
		position: fixed;
		top: 2%;
		left: 5%;
		display: block;
		z-index: 999999;
		background: #404040;
		padding: 10px;
	`
});

let linkStyles = `
	color: #fafafa;
	display: block;
	font-size: 16pt;
	margin: 2% auto;
`

let docs = buildElement('a', 'Docs', {
	href: `https://docs.rs/${pack}/`,
	style: linkStyles
});

let lib = buildElement('a', 'Lib', {
	href: `https://lib.rs/crates/${pack}`,
	style: linkStyles
});

container.appendChild(docs);
container.appendChild(lib);

document.body.insertBefore(container, document.body.firstChild);
