(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(910),t.b),l=a()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var u=s()(d);l.push([n.id,"html{\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n\n}\n\nbody{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    background-image: url("+u+");\n    background-position: center;\n    margin: 0;\n    border: 0;\n}\n\n#content{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 60vh;\n    width: 60vw;\n    \n}\n\n#leftBoard{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 60vh;\n    width: 45vw;\n    background-color: rgb(22, 22, 2, .5);\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n\n#location{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-weight: bolder;\n    font-size: 2rem;\n    color: #F8F8F7;\n}\n\n#country{\n    font-size: 3rem;\n}\n\n#location>p{\n    margin: 0;\n    border: 0;\n}\n\n#weather{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 4rem;\n    color: aliceblue;\n}\n\n#rightBoard{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 60vh;\n    width: 15vw;\n    background-image: linear-gradient(320deg, #F7B242,#F43166,#F56561);\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n\n    \n}\n#rightBoard>p{\n    font-weight: bold;\n    font-size: larger;\n    color: #F1ECD7;\n    margin: 0;\n}\n\n#search{\n    margin-bottom: 0;\n    background-color: rgb(22, 22, 2, .3);\n    border: 0;\n    border-radius: 5px;\n    height: 30px;\n    width: 13vw;\n}\n\n#searchButton{\n    margin-top: 10px;\n    \n}\n\n\n\n\n@media only screen and (max-width: 600px) {\n    #content{\n        flex-direction: column;\n    }\n\n    #leftBoard{\n        width: 80vw;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 20px;\n        border-top-left-radius: 20px;\n    }\n    \n    #rightBoard{\n        width: 80vw;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n\n    }\n\n  }",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},910:(n,e,t)=>{n.exports=t.p+"c5da48c46bdacf02cd64.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h=document.getElementById("country"),g=document.getElementById("city"),v=document.getElementById("date"),b=document.getElementById("clouds"),y=document.getElementById("temperature");async function x(n){const e=await fetch(`http://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=${n}`,{mode:"cors"}),t=await e.json();console.log(t),h.textContent=t.location.country,g.textContent=t.location.name,v.textContent=t.location.localtime,b.textContent=t.current.weather_descriptions[0],y.textContent=`${t.current.temperature}°C`}document.getElementById("searchButton").addEventListener("click",(function(){x(document.getElementById("search").value)})),document.getElementById("search").addEventListener("keydown",(function(n){"Enter"===n.code&&x(search.value)})),x()})()})();