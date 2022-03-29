// ==UserScript==
// @name         vclass player helper
// @description  Set the player of vclass to forward and backward as 3 sec
// @namespace    fang5502
// @version      0.1
// @license      MIT
// @author       fang5502
// @match        *://vclass-course.voicetube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const include = ['ArrowLeft', 'ArrowRight'].includes(key);
    switch ((include && (event.preventDefault(), event.stopPropagation()), key)) {
      case 'ArrowLeft':
        window.player.currentTime -= 3;
        break;
      case 'ArrowRight':
        window.player.currentTime += 3;
        break;
    }
  });
})();
