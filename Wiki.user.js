// ==UserScript==
// @name         Wiki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Madhav Gulati, Ryan Du
// @match        https://dillinger.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dillinger.io
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function insertLink(line) {
    var head, link;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = line;
    head.appendChild(link);
}


var everything = `


/*               LAMBERT_GA CSS STARTS HERE               */

:root {
    --base-header-font: 'Kanit', sans-serif;
    --base-body-font: "Nunito", sans-serif;

    --blue-100: #9A85F7;
    --blue-200: #6A48FF;
    --blue-300: #2D00F7;
    --blue-400: #100CAF;
    --blue-500: #0D005B;

    --red-100: #F66160;
    --red-200: #F85D5C;
    --red-300: #F85D5C;
    --red-400: #CD1307;
    --red-500: #A21F02;
}

#preview {
    background-color: #0D0F12;
}

#preview {
    padding-left: 5%;
    padding-right: 5%;
    max-width: 1000px;
    margin: 0 auto !important;
}

#preview h1, h2, h3 {
    font-family: var(--base-header-font);
    font-weight: 500;
}

#preview h1 {
    font-size: 48px;
    color: white;
    text-align:center;
    margin-top: 120px;
}

#preview h2 {
    font-size: 36px;
    color: white;
    margin-top: 70px;
}

#preview h3 {
    font-size: 24px;
    color: var(--blue-200);
    margin-top: 30px;
    padding: 30px 0px 10px 0px;
}
#preview h4 {
    color: var(--red-300);
}

#preview p, #preview span, #preview li {
	font-family: var(--base-body-font);
	font-size: 18px;
	color: white;
}

#preview .header {
    font-family: var(--base-header-font);
    font-size: 72px;
    color:white;
    letter-spacing: 10px;
    text-align: center;
    z-index: 1;
}

#preview .subheader {
    font-family: var(--base-body-font);
    font-size: 24px;
    text-align: center;
    z-index: 1;
}

#preview .bg-dark {
    background-color: #0D0F12 !important;
}


#preview blockquote {
  position: relative;
  left: 16px;
}

/* single line border on the left */
#preview blockquote::after {
  content: "";
  height: 100%;
  width: 6px;
  background-color: var(--blue-300);
  position: absolute;
  top: 0%;
  left: -16px;
  border-radius: 8px;
}

#preview blockquote p {
  border-left: 0;
}

#preview a {
  color: var(--blue-200);
  text-decoration: none;
}
#preview a:hover {
  color: var(--blue-200);
  text-decoration: underline;
}

#preview code {
  background-color: #1f2225;
  border-radius: 0px;
  padding: 3px 5px 3px;
}

#preview hr {
  border: 0;
  border-radius: 3px;
  background-color: var(--blue-300);
  height: 2px;
  margin: 30px 0px;
  opacity: 1;
}

#preview th,td {
  color: white;
  font-family: "Nunito", sans-serif;
}

#preview th {
  background-color: #1F2225;
  border: #0B0C0D 2px solid;
  border-bottom: var(--blue-300) 2px solid;
}

#preview td {
  background-color: black !important;
  border: #0B0C0D 2px solid;
}

`

addGlobalStyle('<link rel="preconnect" href="https://fonts.googleapis.com">')
addGlobalStyle('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
insertLink("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")

addGlobalStyle(everything);




