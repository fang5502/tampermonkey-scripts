// ==UserScript==
// @name         google translate auto focus textarea
// @description  google translate auto focus textarea
// @namespace    fang5502
// @version      0.1
// @license      MIT
// @author       fang5502
// @source       https://github.com/fang5502/tampermonkey-scripts
// @match        *://translate.google.com.tw/*
// @icon         https://ssl.gstatic.com/translate/favicon.ico
// @grant        none
// @noframes
// ==/UserScript==

(function () {
  'use strict';
  window.addEventListener('load', () => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      window.addEventListener('focus', () => {
        document.querySelector('textarea').focus();
      });
      document.querySelector('textarea').addEventListener('blur', () => {
        document.querySelector('textarea').focus();
      });
    }
  });

  let isDelay = false;
  /**
   * 左邊發音
   */
  function speakLeftText() {
    if (isDelay) return;
    document.querySelectorAll('button')[28].click();
    setTimeout(() => {
      isDelay = false;
    }, 500);
    isDelay = true;
  }

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const include = ['e'].includes(key);
    switch ((event.metaKey && include && (event.preventDefault(), event.stopPropagation()), key)) {
      case 'e':
        speakLeftText();
        break;
    }
  });
})();
