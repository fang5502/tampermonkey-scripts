// ==UserScript==
// @name         google translate auto focus textarea
// @description  google translate auto focus textarea
// @namespace    fang5502
// @version      0.4
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
    const target = document
      .querySelector('.VfPpkd-Bz112c-LgbsSe.VfPpkd-Bz112c-LgbsSe-OWXEXe-e5LLRc-SxQuSe.fzRBVc.tmJved.mN1ivc.rrPCWc.VfPpkd-ksKsZd-mWPk3d.VfPpkd-ksKsZd-mWPk3d-OWXEXe-ZNMTqd');
    if (target) {
      target.click();
    }
    else {
      console.error('[google-translate-auto-focus-textarea] Can not find the button');
    }
    setTimeout(() => {
      isDelay = false;
    }, 500);
    isDelay = true;
  }

  document.addEventListener('keydown', (event) => {
    [
      {
        key(event) {
          return event.metaKey && event.key === 'e';
        },
        execute: speakLeftText,
      },
    ].some((element) => element.key(event) && (element.execute(), true));
  });
})();
