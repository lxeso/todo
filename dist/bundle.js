(()=>{"use strict";var n={866:()=>{var n=[];function e(){var t=document.querySelector("#todo_list");t.innerHTML="",n.forEach((function(o,r){var i=document.createElement("li");i.classList.toggle("completed",o.completed);var a=document.createElement("input");a.type="checkbox",a.checked=o.completed,a.addEventListener("change",(function(){o.completed=!o.completed,e()}));var c=document.createElement("span");c.textContent=o.text;var d=document.createElement("button");d.textContent="Delete",d.addEventListener("click",(function(){n.splice(r,1),e()})),i.appendChild(a),i.appendChild(c),i.appendChild(d),t.appendChild(i)}))}document.querySelector("#input_button").addEventListener("click",(function(){var t=document.querySelector(".item").value;""!==t&&(n.push({text:t,completed:!1}),document.querySelector(".item").value="",document.querySelector(".item").focus(),e())}))},208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"/* 기본 스타일 */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    background-color: #4CAF50;\n    color: white;\n    padding: 20px;\n    width: 100%;\n    text-align: center;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\nmain {\n    width: 100%;\n    max-width: 600px;\n    margin: 20px;\n    padding: 20px;\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.input-section {\n    display: flex;\n    margin-bottom: 20px;\n}\n\n#input {\n    flex: 1;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-right: 10px;\n}\n\n#input_button {\n    padding: 10px 20px;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#input_button:hover {\n    background-color: #45a049;\n}\n\n.todo-list-section ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.todo-list-section li {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n}\n\n.todo-list-section li:last-child {\n    border-bottom: none;\n}\n\n.todo-list-section li.completed {\n    text-decoration: line-through;\n    color: #888;\n}\n\n.todo-list-section li button {\n    margin-left: auto;\n    background-color: #f44336;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.todo-list-section li button:hover {\n    background-color: #e53935;\n}\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;t(866);var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),d=t.n(c),s=t(56),l=t.n(s),u=t(540),p=t.n(u),f=t(113),m=t.n(f),v=t(208),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p();r()(v.A,h);v.A&&v.A.locals&&v.A.locals})();