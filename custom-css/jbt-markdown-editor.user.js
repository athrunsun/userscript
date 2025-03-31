// ==UserScript==
// @name         Custom CSS - jbt markdown editor
// @namespace    https://github.com/athrunsun
// @version      0.1.0
// @author       okampfer <okampfer@foxmail.com>
// @match        *://jbt.github.io/markdown-editor/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/jbt-markdown-editor.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/jbt-markdown-editor.user.js
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style');
  style.type = 'text/css';
  style.setAttribute('data-name', 'jbt-markdown-editor');

  const css = `
    .CodeMirror-code {
        font-size: 16px;
    }

    #out {
      background: #ffffff;
      font-family: 'JetBrains Mono Medium', 'Cascadia Mono', Monaco, 'Noto Sans CJK SC', 'Microsoft Yahei UI', 'WenQuanYi Micro Hei';
    }
  `;

  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
