// ==UserScript==
// @name         Custom CSS - stackoverflow
// @namespace    https://github.com/athrunsun
// @version      0.1.0
// @author       okampfer <okampfer@foxmail.com>
// @match        *://*.stackoverflow.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/stackoverflow.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/stackoverflow.user.js
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-name', 'stackoverflow');

  const css = `
    .post-text p {
      color: #ccc;
    }

    .comment .comment-text {
      color: #ccc;
    }
  `;

  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
