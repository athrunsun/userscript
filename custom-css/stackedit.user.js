// ==UserScript==
// @name         Custom CSS - stackedit
// @namespace    https://github.com/athrunsun
// @version      0.1
// @author       okampfer <okampfer@foxmail.com>
// @match        *://*.stackedit.io/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/stackedit.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/stackedit.user.js
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('data-name', 'stackedit');

    const css = `
        #preview-contents {
            font-family: 'JetBrains Mono Medium', 'Cascadia Mono', Monaco, 'Noto Sans CJK SC', 'Microsoft Yahei UI',
                'WenQuanYi Micro Hei';
            font-size: 16px;
        }

        .preview-panel {
            background: #ffffff;
        }

        .preview {
            font-family: 'JetBrains Mono Medium', 'Cascadia Mono', Monaco, 'Noto Sans CJK SC', 'Microsoft Yahei UI',
                'WenQuanYi Micro Hei';
            font-size: 16px;
            background: #ffffff;
        }
    `;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
