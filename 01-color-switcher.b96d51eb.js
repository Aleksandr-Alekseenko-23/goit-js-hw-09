!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop"),e=null;function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}t.addEventListener("click",(function(){e=setInterval((function(){o()}),1e3),t.disabled=!0})),n.addEventListener("click",(function(n){clearInterval(e),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.b96d51eb.js.map