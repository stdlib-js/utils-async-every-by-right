// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var d=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("every-by-right-async:limit");function f(e,m){var f,p,u;if(f={},arguments.length>1){if(p=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(s("1R32o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!c(e.limit))?new TypeError(s("1R33P","limit",e.limit)):null):new TypeError(s("1R32V",t))}(f,e),p)throw p;u=m}else u=e;if(!t(u))throw new TypeError(s("1R33q",u));return f.series?f.limit=1:f.limit||(f.limit=i),function(e,i){if(!r(e))throw new TypeError(s("1R3Ah",e));if(!t(i))throw new TypeError(s("1R33q",i));return function(e,t,r,i){var s,n,o,l,c,m;if(l=e.length,d("Collection length: %d",l),0===l)return d("Finished processing a collection."),i(null,!0);for(o=l<t.limit?l:t.limit,d("Concurrency limit: %d",o),d("Number of arguments: %d",r.length),s=0,c=l,m=0;m<o;m++)c>0&&f();function f(){d("Collection element %d: %s.",c-=1,JSON.stringify(e[c])),2===r.length?r.call(t.thisArg,e[c],p):3===r.length?r.call(t.thisArg,e[c],c,p):r.call(t.thisArg,e[c],c,e,p)}function p(e,t){if(!n)return e?(n=!0,d("Encountered an error: %s",e.message),i(e)):(d("Processed %d of %d collection elements.",s+=1,l),d("Test result: %s",!!t),t||n?c>0?f():s===l?(d("Finished processing a collection."),i(null,!0)):void 0:(n=!0,d("Finished processing a collection."),i(null,!1)))}}(e,f,u,(function(e,t){if(e)return i(e,!1);i(null,t)}))}}function p(e,t,r,i){if(arguments.length<4)return f(t)(e,r);f(t,r)(e,i)}e(p,"factory",f);export{p as default,f as factory};
//# sourceMappingURL=index.mjs.map
