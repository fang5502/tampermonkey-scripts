// ==UserScript==
// @name         vclass player helper
// @description  Set the player of vclass to forward and backward as 3 sec
// @namespace    fang5502
// @version      0.3
// @license      MIT
// @author       fang5502
// @source       https://github.com/fang5502/tampermonkey-scripts
// @match        *://vclass-course.voicetube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // Event triggered when a key is pressed
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

  // Detect long press of the space key for more than 0.5 seconds and play the video at double speed
  let timer = null;
  const triggerKey = ' ';
  let backupSpeed = 1;
  let isPaused = false;
  let isLongPress = false;
  document.addEventListener('keydown', (event) => {
    if (event.key === triggerKey) {
      event.preventDefault();
      event.stopPropagation();
      if (timer !== null) return;

      timer = setTimeout(() => {
        isLongPress = true;
        backupSpeed = window.player.speed;
        window.player.speed = 2;

        isPaused = window.player.paused;
        if (isPaused) window.player.play();
      }, 500);
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === triggerKey) {
      event.preventDefault();
      event.stopPropagation();

      clearTimeout(timer);
      timer = null;

      if (isLongPress) {
        isLongPress = false;
        window.player.speed = backupSpeed;
        if (isPaused) window.player.pause();
      } else {
        if (window.player.playing) player.pause();
        else player.play();
      }
    }
  });
})();
