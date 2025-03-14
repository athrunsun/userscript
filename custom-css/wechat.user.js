// ==UserScript==
// @name         Custom CSS - wechat
// @namespace    https://github.com/athrunsun
// @version      0.1.0
// @author       okampfer <okampfer@foxmail.com>
// @match        *://wx*.qq.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/wechat.user.js
// @downloadURL  https://raw.githubusercontent.com/athrunsun/userscript/master/custom-css/wechat.user.js
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('data-name', 'wechat');

    const css = `
        .main {
            padding-top: 0;
        }

        .main_inner {
            width: 100vw;
            height: 100vh;
            margin: 0;
            display: flex;
            border-radius: unset;
            max-width: unset;
        }

        *[ui-view='contentView'] {
            height: 100%;
            flex-grow: 1;
        }

        .bubble {
            max-width: 100%;
        }

        body .main .copyright {
            display: none;
        }
    `;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
