// ==UserScript==
// @name         Custom CSS - DeepSeek chat
// @namespace    https://github.com/athrunsun
// @version      0.1.1
// @author       okampfer <okampfer@foxmail.com>
// @match        *://chat.deepseek.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/deepseek-chat.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/deepseek-chat.user.js
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-name', 'deepseek-chat');

  const css = `
    #root > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > div {
      max-width: unset;
    }

    #root > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > div:nth-child(3) > div:first-child {
      max-width: unset;
    }
  `;

  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
