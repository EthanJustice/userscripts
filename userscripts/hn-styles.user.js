// ==UserScript==
// @name     HackerNews Styling
// @description  Styling for Y-Combinator's HackerNews
// @version  0.0.4
// @run-at   document-idle
// @grant    none
// @match 	 https://news.ycombinator.com/*
// ==/UserScript==
let n = document.createElement("style");
n.innerText = `
	body {
    margin: 0;
    background: #212121;
	}

	* {
		background: #212121 !important;
	}

	table tbody {
      background: #cb4b16;
	}

	center {
      width: 100%;
      background: #212121;
	}

	#hnmain {
      width: 90%;
      background: #212121;
	}

	.athing {
		background: #333;
		width: 1190px;
	}
	
	a, a.storylink, .c00 a, .c00 a:link {
		color: #2965e5;
		font-size: 10pt;
	}

	a:visited {
		color: #16c581;
	}

	.subtext {
		background: #333;
		width: 1200px;
		font-size: 4pt;
	}

	.yclinks a {
		color: #f5f5f5
	}

	input {
		background: #333;
		border: none;
		width: 20%;
		color: #fafafa;
		opacity: 0.7;
	}

	input:hover { opacity: 1 }

	.commtext {
		color: #fafafa;
	}

	textarea, td form, a[href^="reply"] {
		display: none !important;
	}

	.comment-tree table {
		border-top: 2px solid #404040;
		width: 100%;
		margin: 1% 0;
	}
`;
document.head.appendChild(n);
// removes the top banner
document.querySelector("tr").remove();
