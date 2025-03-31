// ==UserScript==
// @name         Custom CSS - reddit
// @namespace    https://github.com/athrunsun
// @version      0.1.0
// @author       okampfer <okampfer@foxmail.com>
// @match        *://*.reddit.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/reddit.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/reddit.user.js
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-name', 'reddit');

  const css = `
    .ListingLayout-backgroundContainer + div {
      background-color: #252525;
    }

    div[tabindex='0'] + div {
      background-color: #2d2d2d;
    }

    div[tabindex='0'] + div > div {
      background-color: #2d2d2d;
    }

    .RichTextJSON-root p {
      color: #ccc;
    }
  `;

  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
