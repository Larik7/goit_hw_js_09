!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i,u=r("6JpON");function a(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}function l(n){n.preventDefault();for(var o=n.currentTarget.elements,t=o.delay,r=o.step,i=o.amount,l=0;l<Number(i.value);l+=1)a(l+1,Number(t.value)+l*Number(r.value)).then((function(n){var o=n.position,t=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})})).catch((function(n){var o=n.position,t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"),{useIcon:!1})}))}(i=document.querySelector(".form"))?i.addEventListener("submit",l):console.log("Error: invalid markup!")}();
//# sourceMappingURL=03-promises.15052737.js.map
