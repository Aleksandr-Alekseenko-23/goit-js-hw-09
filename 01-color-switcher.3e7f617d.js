const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop");let n=null;function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(()=>{n=setInterval((()=>{o()}),1e3),t.disabled=!0})),e.addEventListener("click",(e=>{clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3e7f617d.js.map