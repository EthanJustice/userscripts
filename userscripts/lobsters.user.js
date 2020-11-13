// ==UserScript==
// @name     lobste.rs styling
// @description  simple dark mode styling for lobste.rs
// @version  0.0.1
// @grant    none
// @run-at   document-end
// @match    https://lobste.rs/*
// ==/UserScript==
let style = document.createElement("style");
style.innerText = `
body {
    background-color: #212121;
    color: #fafafa;
  }

  a {
    color: #2965e5;
	}

  a:visited {
		color: #16c581 !important;
  }
`;
document.head.appendChild(style);
