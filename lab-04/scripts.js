"use strict";

myHeight.addEventListener('input', ev => { 
  document.documentElement.style.setProperty('--height', `${myHeight.value}%`)
});

myBG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--bg-colour', myBG.value);
});

myFG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--fg-colour', myFG.value);
});