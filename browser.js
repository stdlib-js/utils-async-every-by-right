// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).everyByRightAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&d.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof A?A:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,F=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function M(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var k="function"==typeof s||"object"==typeof F||"function"==typeof I?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};function G(t){return"function"===k(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}var Y=Number.POSITIVE_INFINITY;function z(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var D,J=Object.getPrototypeOf;D=G(Object.getPrototypeOf)?J:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=D;var q=Object.prototype;function H(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),X(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&G(e.constructor)&&"[object Function]"===h(e.constructor)&&g(e,"isPrototypeOf")&&G(e.isPrototypeOf)&&(e===q||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var et=Q.NEGATIVE_INFINITY;function rt(t){return t<Y&&t>et&&R(t)}function nt(t){return K(t)&&rt(t)}function ot(t){return $(t)&&rt(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function lt(t){return ut(t)||ct(t)}function ft(t,e){return H(e)?(g(e,"thisArg")&&(t.thisArg=e.thisArg),g(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(z("0iN30","series",t.series)):g(e,"limit")&&(t.limit=e.limit,!ut(t.limit))?new TypeError(z("0iN3b","limit",t.limit)):null):new TypeError(z("0iN2h",e))}function at(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(lt,"isPrimitive",ut),a(lt,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("every-by-right-async:limit");function pt(t,e,r,n){var o,i,u,c,l,f;if(c=t.length,st("Collection length: %d",c),0===c)return st("Finished processing a collection."),n(null,!0);for(u=c<e.limit?c:e.limit,st("Concurrency limit: %d",u),st("Number of arguments: %d",r.length),o=0,l=c,f=0;f<u;f++)l>0&&a();function a(){st("Collection element %d: %s.",l-=1,JSON.stringify(t[l])),2===r.length?r.call(e.thisArg,t[l],s):3===r.length?r.call(e.thisArg,t[l],l,s):r.call(e.thisArg,t[l],l,t,s)}function s(t,e){if(!i)return t?(i=!0,st("Encountered an error: %s",t.message),n(t)):(st("Processed %d of %d collection elements.",o+=1,c),st("Test result: %s",!!e),e||i?l>0?a():o===c?(st("Finished processing a collection."),n(null,!0)):void 0:(i=!0,st("Finished processing a collection."),n(null,!1)))}}function yt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=ft(r,t))throw n;o=e}else o=t;if(!G(o))throw new TypeError(z("0iN43",o));return r.series?r.limit=1:r.limit||(r.limit=Y),i;function i(t,e){if(!U(t))throw new TypeError(z("0iNBO",t));if(!G(e))throw new TypeError(z("0iN43",e));return pt(t,r,o,(function(t,r){if(t)return e(t,!1);e(null,r)}))}}function bt(t,e,r,n){if(arguments.length<4)return yt(e)(t,r);yt(e,r)(t,n)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=browser.js.map
