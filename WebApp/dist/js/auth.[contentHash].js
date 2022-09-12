(()=>{function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}var r=Math.floor,t={1553:(e)=>{var t=function(e){"use strict";function t(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}function r(e,t,r,n){var i=t&&t.prototype instanceof o?t:o,s=Object.create(i.prototype),d=new g(n||[]);return s._invoke=c(e,r,d),s}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function s(){}function d(e){["next","throw","return"].forEach(function(r){t(e,r,function(e){return this._invoke(r,e)})})}function l(e,t){function r(o,i,s,d){var l=n(e[o],e,i);if("throw"===l.type)d(l.arg);else{var c=l.arg,m=c.value;return m&&"object"==typeof m&&w.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,s,d)},function(e){r("throw",e,s,d)}):t.resolve(m).then(function(e){c.value=e,s(c)},function(e){return r("throw",e,s,d)})}}function o(e,n){function o(){return new t(function(t,o){r(e,n,t,o)})}return i=i?i.then(o,o):o()}var i;this._invoke=o}function c(e,t,r){var o=I;return function(i,s){if(o===E)throw new Error("Generator is already running");if(o===_){if("throw"===i)throw s;return b()}for(r.method=i,r.arg=s;;){var d=r.delegate;if(d){var l=m(d,r);if(l){if(l===S)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===I)throw o=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=E;var c=n(e,t,r);if("normal"===c.type){if(o=r.done?_:T,c.arg===S)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=_,r.method="throw",r.arg=c.arg)}}}function m(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=void 0,m(e,t),"throw"===t.method))return S;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,S;var i=o.arg;if(!i)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,S;if(i.done)t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0);else return i;return t.delegate=null,S}function p(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function u(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function g(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(p,this),this.reset(!0)}function f(e){if(e){var t=e[x];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(w.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:b}}function b(){return{value:void 0,done:!0}}var h=Object.prototype,w=h.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},x=y.iterator||"@@iterator",v=y.asyncIterator||"@@asyncIterator",k=y.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,t,r){return e[t]=r}}e.wrap=r;var I="suspendedStart",T="suspendedYield",E="executing",_="completed",S={},C={};t(C,x,function(){return this});var A=Object.getPrototypeOf,N=A&&A(A(f([])));N&&N!==h&&w.call(N,x)&&(C=N);var D=s.prototype=o.prototype=Object.create(C);return i.prototype=s,t(D,"constructor",s),t(s,"constructor",i),i.displayName=t(s,k,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,t(e,k,"GeneratorFunction")),e.prototype=Object.create(D),e},e.awrap=function(e){return{__await:e}},d(l.prototype),t(l.prototype,v,function(){return this}),e.AsyncIterator=l,e.async=function(t,n,o,i,s){void 0===s&&(s=Promise);var d=new l(r(t,n,o,i),s);return e.isGeneratorFunction(n)?d:d.next().then(function(e){return e.done?e.value:d.next()})},d(D),t(D,k,"Generator"),t(D,x,function(){return this}),t(D,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=f,g.prototype={constructor:g,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(u),!e)for(var t in this)"t"===t.charAt(0)&&w.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var s=w.call(o,"catchLoc"),d=w.call(o,"finallyLoc");if(s&&d){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);}else if(!d)throw new Error("try statement without catch or finally");else if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1,n;0<=r;--r)if(n=this.tryEntries[r],n.tryLoc<=this.prev&&w.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),S},finish:function(e){for(var t=this.tryEntries.length-1,r;0<=t;--t)if(r=this.tryEntries[t],r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),u(r),S},catch:function(e){for(var t=this.tryEntries.length-1,r;0<=t;--t)if(r=this.tryEntries[t],r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;u(r)}return o}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:f(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),S}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},7757:(e,t,r)=>{e.exports=r(1553)},1194:(e,t,r)=>{var n=r(3645);t=n(!1),t.push([e.id,"@charset \"UTF-8\";\n/*!\n * Bootstrap v5.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-primary-rgb: 13, 110, 253;\n  --bs-secondary-rgb: 108, 117, 125;\n  --bs-success-rgb: 25, 135, 84;\n  --bs-info-rgb: 13, 202, 240;\n  --bs-warning-rgb: 255, 193, 7;\n  --bs-danger-rgb: 220, 53, 69;\n  --bs-light-rgb: 248, 249, 250;\n  --bs-dark-rgb: 33, 37, 41;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-bg: #fff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25;\n}\n\nhr:not([size]) {\n  height: 1px;\n}\n\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\n\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\n\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\n\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-bs-original-title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall, .small {\n  font-size: 0.875em;\n}\n\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\na:hover {\n  color: #0a58ca;\n}\n\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.875em;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n  font-weight: 700;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\nlabel {\n  display: inline-block;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n}\n\n::file-selector-button {\n  font: inherit;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\niframe {\n  border: 0;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"\u2014\xA0\";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-sm-0,\n.gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-sm-0,\n.gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-sm-1,\n.gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-sm-1,\n.gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-sm-2,\n.gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-sm-2,\n.gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-sm-3,\n.gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-sm-3,\n.gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-sm-4,\n.gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-sm-4,\n.gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-sm-5,\n.gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-sm-5,\n.gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-md-0,\n.gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-md-0,\n.gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-md-1,\n.gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-md-1,\n.gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-md-2,\n.gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-md-2,\n.gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-md-3,\n.gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-md-3,\n.gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-md-4,\n.gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-md-4,\n.gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-md-5,\n.gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-md-5,\n.gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-lg-0,\n.gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-lg-0,\n.gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-lg-1,\n.gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-lg-1,\n.gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-lg-2,\n.gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-lg-2,\n.gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-lg-3,\n.gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-lg-3,\n.gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-lg-4,\n.gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-lg-4,\n.gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-lg-5,\n.gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-lg-5,\n.gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-xl-0,\n.gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xl-0,\n.gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xl-1,\n.gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xl-1,\n.gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xl-2,\n.gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xl-2,\n.gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xl-3,\n.gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xl-3,\n.gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xl-4,\n.gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xl-4,\n.gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xl-5,\n.gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xl-5,\n.gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .g-xxl-0,\n.gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n\n  .g-xxl-0,\n.gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n\n  .g-xxl-1,\n.gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n\n  .g-xxl-1,\n.gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n\n  .g-xxl-2,\n.gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n\n  .g-xxl-2,\n.gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n\n  .g-xxl-3,\n.gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n\n  .g-xxl-3,\n.gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n\n  .g-xxl-4,\n.gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n\n  .g-xxl-4,\n.gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n\n  .g-xxl-5,\n.gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n\n  .g-xxl-5,\n.gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.table {\n  --bs-table-bg: transparent;\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: #212529;\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: #212529;\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: #212529;\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  vertical-align: top;\n  border-color: #dee2e6;\n}\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  background-color: var(--bs-table-bg);\n  border-bottom-width: 1px;\n  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n}\n.table > tbody {\n  vertical-align: inherit;\n}\n.table > thead {\n  vertical-align: bottom;\n}\n.table > :not(:first-child) {\n  border-top: 2px solid currentColor;\n}\n\n.caption-top {\n  caption-side: top;\n}\n\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem;\n}\n\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0;\n}\n.table-bordered > :not(caption) > * > * {\n  border-width: 0 1px;\n}\n\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0;\n}\n.table-borderless > :not(:first-child) {\n  border-top-width: 0;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) > * {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color);\n}\n\n.table-hover > tbody > tr:hover > * {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color);\n}\n\n.table-primary {\n  --bs-table-bg: #cfe2ff;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bacbe6;\n}\n\n.table-secondary {\n  --bs-table-bg: #e2e3e5;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #cbccce;\n}\n\n.table-success {\n  --bs-table-bg: #d1e7dd;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bcd0c7;\n}\n\n.table-info {\n  --bs-table-bg: #cff4fc;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #badce3;\n}\n\n.table-warning {\n  --bs-table-bg: #fff3cd;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #e6dbb9;\n}\n\n.table-danger {\n  --bs-table-bg: #f8d7da;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfc2c4;\n}\n\n.table-light {\n  --bs-table-bg: #f8f9fa;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfe0e1;\n}\n\n.table-dark {\n  --bs-table-bg: #212529;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: #fff;\n  border-color: #373b3e;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.form-label {\n  margin-bottom: 0.5rem;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n  .form-control::file-selector-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #dde0e3;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n  margin-inline-end: 0.5rem;\n}\n\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n  margin-inline-end: 1rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n  margin-inline-end: 1rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n  margin-inline-end: 1rem;\n}\n\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n\n.form-control-color {\n  width: 3rem;\n  height: auto;\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n.form-control-color::-webkit-color-swatch {\n  height: 1.5em;\n  border-radius: 0.25rem;\n}\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-select {\n    transition: none;\n  }\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: #e9ecef;\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #212529;\n}\n\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  opacity: 0.5;\n}\n\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-select {\n  height: calc(3.5rem + 2px);\n  line-height: 1.25;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  pointer-events: none;\n  border: 1px solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    transition: none;\n  }\n}\n.form-floating > .form-control {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-select ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus {\n  z-index: 3;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 3;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: #198754;\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #198754;\n}\n\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,\n.was-validated .input-group .form-select:valid,\n.input-group .form-select.is-valid {\n  z-index: 1;\n}\n.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,\n.was-validated .input-group .form-select:valid:focus,\n.input-group .form-select.is-valid:focus {\n  z-index: 3;\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,\n.was-validated .input-group .form-select:invalid,\n.input-group .form-select.is-invalid {\n  z-index: 2;\n}\n.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,\n.was-validated .input-group .form-select:invalid:focus,\n.input-group .form-select.is-invalid:focus {\n  z-index: 3;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n}\n.btn-check:focus + .btn, .btn:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.btn-check:focus + .btn-primary, .btn-primary:focus {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0a58ca;\n  border-color: #0a53be;\n}\n.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-primary:disabled, .btn-primary.disabled {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.btn-check:focus + .btn-secondary, .btn-secondary:focus {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #565e64;\n  border-color: #51585e;\n}\n.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary:disabled, .btn-secondary.disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-check:focus + .btn-success, .btn-success:focus {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #146c43;\n  border-color: #13653f;\n}\n.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-success:disabled, .btn-success.disabled {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n\n.btn-info {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-info:hover {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n}\n.btn-check:focus + .btn-info, .btn-info:focus {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {\n  color: #000;\n  background-color: #3dd5f3;\n  border-color: #25cff2;\n}\n.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-info:disabled, .btn-info.disabled {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n\n.btn-warning {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n.btn-check:focus + .btn-warning, .btn-warning:focus {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {\n  color: #000;\n  background-color: #ffcd39;\n  border-color: #ffc720;\n}\n.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-warning:disabled, .btn-warning.disabled {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n.btn-check:focus + .btn-danger, .btn-danger:focus {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #b02a37;\n  border-color: #a52834;\n}\n.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger:disabled, .btn-danger.disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-light {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:focus + .btn-light, .btn-light:focus {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-light:disabled, .btn-light.disabled {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n}\n.btn-check:focus + .btn-dark, .btn-dark:focus {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1a1e21;\n  border-color: #191c1f;\n}\n.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-dark:disabled, .btn-dark.disabled {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-outline-primary:disabled, .btn-outline-primary.disabled {\n  color: #0d6efd;\n  background-color: transparent;\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-success {\n  color: #198754;\n  border-color: #198754;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-outline-success:disabled, .btn-outline-success.disabled {\n  color: #198754;\n  background-color: transparent;\n}\n\n.btn-outline-info {\n  color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-outline-info:hover {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-outline-info:disabled, .btn-outline-info.disabled {\n  color: #0dcaf0;\n  background-color: transparent;\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning:disabled, .btn-outline-warning.disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger:disabled, .btn-outline-danger.disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light:disabled, .btn-outline-light.disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-dark {\n  color: #212529;\n  border-color: #212529;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-outline-dark:disabled, .btn-outline-dark.disabled {\n  color: #212529;\n  background-color: transparent;\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: #0a58ca;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n.collapsing.collapse-horizontal {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.collapse-horizontal {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: 0.125rem;\n}\n\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle::after {\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #1e2125;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0d6efd;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529;\n}\n\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n  color: #fff;\n  background-color: #0d6efd;\n}\n.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n  color: #adb5bd;\n}\n.dropdown-menu-dark .dropdown-divider {\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu-dark .dropdown-item-text {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-header {\n  color: #adb5bd;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn,\n.btn-group > .btn-check:focus + .btn,\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn-check:checked + .btn,\n.btn-group-vertical > .btn-check:focus + .btn,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn,\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #0d6efd;\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: #0a58ca;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background: none;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n  isolation: isolate;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar > .container,\n.navbar > .container-fluid,\n.navbar > .container-sm,\n.navbar > .container-md,\n.navbar > .container-lg,\n.navbar > .container-xl,\n.navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .navbar-toggler {\n    transition: none;\n  }\n}\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-sm .offcanvas-top,\n.navbar-expand-sm .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-sm .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-md .offcanvas-top,\n.navbar-expand-md .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-md .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-lg .offcanvas-top,\n.navbar-expand-lg .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-lg .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-xl .offcanvas-top,\n.navbar-expand-xl .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-xl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xxl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xxl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xxl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xxl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xxl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xxl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas {\n    position: inherit;\n    bottom: 0;\n    z-index: 1000;\n    flex-grow: 1;\n    visibility: visible !important;\n    background-color: transparent;\n    border-right: 0;\n    border-left: 0;\n    transition: none;\n    transform: none;\n  }\n  .navbar-expand-xxl .offcanvas-top,\n.navbar-expand-xxl .offcanvas-bottom {\n    height: auto;\n    border-top: 0;\n    border-bottom: 0;\n  }\n  .navbar-expand-xxl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .offcanvas-header {\n  display: none;\n}\n.navbar-expand .offcanvas {\n  position: inherit;\n  bottom: 0;\n  z-index: 1000;\n  flex-grow: 1;\n  visibility: visible !important;\n  background-color: transparent;\n  border-right: 0;\n  border-left: 0;\n  transition: none;\n  transform: none;\n}\n.navbar-expand .offcanvas-top,\n.navbar-expand .offcanvas-bottom {\n  height: auto;\n  border-top: 0;\n  border-bottom: 0;\n}\n.navbar-expand .offcanvas-body {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.55);\n}\n.navbar-light .navbar-text a,\n.navbar-light .navbar-text a:hover,\n.navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.55);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.55);\n}\n.navbar-dark .navbar-text a,\n.navbar-dark .navbar-text a:hover,\n.navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n}\n\n.card-title {\n  margin-bottom: 0.5rem;\n}\n\n.card-subtitle {\n  margin-top: -0.25rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link + .card-link {\n  margin-left: 1rem;\n}\n\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-footer {\n  padding: 0.5rem 1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-group > .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button {\n    transition: none;\n  }\n}\n.accordion-button:not(.collapsed) {\n  color: #0c63e4;\n  background-color: #e7f1ff;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);\n}\n.accordion-button:not(.collapsed)::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  transform: rotate(-180deg);\n}\n.accordion-button::after {\n  flex-shrink: 0;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: auto;\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: 1.25rem;\n  transition: transform 0.2s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button::after {\n    transition: none;\n  }\n}\n.accordion-button:hover {\n  z-index: 2;\n}\n.accordion-button:focus {\n  z-index: 3;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.accordion-item:first-of-type {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.accordion-item:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item:last-of-type {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.accordion-body {\n  padding: 1rem 1.25rem;\n}\n\n.accordion-flush .accordion-collapse {\n  border-width: 0;\n}\n.accordion-flush .accordion-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush .accordion-item:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item:last-child {\n  border-bottom: 0;\n}\n.accordion-flush .accordion-item .accordion-button {\n  border-radius: 0;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 0;\n  margin-bottom: 1rem;\n  list-style: none;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  color: #0d6efd;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-link {\n    transition: none;\n  }\n}\n.page-link:hover {\n  z-index: 2;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  color: #0a58ca;\n  background-color: #e9ecef;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.page-link {\n  padding: 0.375rem 0.75rem;\n}\n\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.alert {\n  position: relative;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n\n.alert-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n  border-color: #b6d4fe;\n}\n.alert-primary .alert-link {\n  color: #06357a;\n}\n\n.alert-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n  border-color: #d3d6d8;\n}\n.alert-secondary .alert-link {\n  color: #34383c;\n}\n\n.alert-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n  border-color: #badbcc;\n}\n.alert-success .alert-link {\n  color: #0c4128;\n}\n\n.alert-info {\n  color: #055160;\n  background-color: #cff4fc;\n  border-color: #b6effb;\n}\n.alert-info .alert-link {\n  color: #04414d;\n}\n\n.alert-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n  border-color: #ffecb5;\n}\n.alert-warning .alert-link {\n  color: #523e02;\n}\n\n.alert-danger {\n  color: #842029;\n  background-color: #f8d7da;\n  border-color: #f5c2c7;\n}\n.alert-danger .alert-link {\n  color: #6a1a21;\n}\n\n.alert-light {\n  color: #636464;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light .alert-link {\n  color: #4f5050;\n}\n\n.alert-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n  border-color: #bcbebf;\n}\n.alert-dark .alert-link {\n  color: #101214;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0d6efd;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n  animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > li::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #212529;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xxl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #084298;\n  background-color: #bacbe6;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #084298;\n  border-color: #084298;\n}\n\n.list-group-item-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #41464b;\n  background-color: #cbccce;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #41464b;\n  border-color: #41464b;\n}\n\n.list-group-item-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #0f5132;\n  background-color: #bcd0c7;\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #0f5132;\n  border-color: #0f5132;\n}\n\n.list-group-item-info {\n  color: #055160;\n  background-color: #cff4fc;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #055160;\n  background-color: #badce3;\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #055160;\n  border-color: #055160;\n}\n\n.list-group-item-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #664d03;\n  background-color: #e6dbb9;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #664d03;\n  border-color: #664d03;\n}\n\n.list-group-item-danger {\n  color: #842029;\n  background-color: #f8d7da;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #842029;\n  background-color: #dfc2c4;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #842029;\n  border-color: #842029;\n}\n\n.list-group-item-light {\n  color: #636464;\n  background-color: #fefefe;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #636464;\n  background-color: #e5e5e5;\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #636464;\n  border-color: #636464;\n}\n\n.list-group-item-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #141619;\n  background-color: #bebebf;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #141619;\n  border-color: #141619;\n}\n\n.btn-close {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5;\n}\n.btn-close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  opacity: 1;\n}\n.btn-close:disabled, .btn-close.disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  opacity: 0.25;\n}\n\n.btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n\n.toast {\n  width: 350px;\n  max-width: 100%;\n  font-size: 0.875rem;\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.toast.showing {\n  opacity: 0;\n}\n.toast:not(.show) {\n  display: none;\n}\n\n.toast-container {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container > :not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.toast-header .btn-close {\n  margin-right: -0.375rem;\n  margin-left: 0.75rem;\n}\n\n.toast-body {\n  padding: 0.75rem;\n  word-wrap: break-word;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1055;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1080;\n  display: block;\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .tooltip-arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .tooltip-arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  top: -1px;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\n  right: -1px;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  bottom: -1px;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\n  left: -1px;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  z-index: 1070;\n  display: block;\n  max-width: 276px;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .popover-arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n}\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 1rem 1rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: 0.75s linear infinite spinner-border;\n  animation: 0.75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: 0.75s linear infinite spinner-grow;\n  animation: 0.75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n.spinner-grow {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n  }\n}\n.offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: 1045;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  visibility: hidden;\n  background-color: #fff;\n  background-clip: padding-box;\n  outline: 0;\n  transition: transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .offcanvas {\n    transition: none;\n  }\n}\n\n.offcanvas-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade {\n  opacity: 0;\n}\n.offcanvas-backdrop.show {\n  opacity: 0.5;\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n}\n.offcanvas-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin-top: -0.5rem;\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: 1rem 1rem;\n  overflow-y: auto;\n}\n\n.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: 400px;\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateX(-100%);\n}\n\n.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: 400px;\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateX(100%);\n}\n\n.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateY(-100%);\n}\n\n.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: 30vh;\n  max-height: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  transform: translateY(100%);\n}\n\n.offcanvas.show {\n  transform: none;\n}\n\n.placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentColor;\n  opacity: 0.5;\n}\n.placeholder.btn::before {\n  display: inline-block;\n  content: \"\";\n}\n\n.placeholder-xs {\n  min-height: 0.6em;\n}\n\n.placeholder-sm {\n  min-height: 0.8em;\n}\n\n.placeholder-lg {\n  min-height: 1.2em;\n}\n\n.placeholder-glow .placeholder {\n  -webkit-animation: placeholder-glow 2s ease-in-out infinite;\n  animation: placeholder-glow 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n\n@keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n.placeholder-wave {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n  mask-size: 200% 100%;\n  -webkit-animation: placeholder-wave 2s linear infinite;\n  animation: placeholder-wave 2s linear infinite;\n}\n\n@-webkit-keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n    mask-position: -200% 0%;\n  }\n}\n\n@keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n    mask-position: -200% 0%;\n  }\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.link-primary {\n  color: #0d6efd;\n}\n.link-primary:hover, .link-primary:focus {\n  color: #0a58ca;\n}\n\n.link-secondary {\n  color: #6c757d;\n}\n.link-secondary:hover, .link-secondary:focus {\n  color: #565e64;\n}\n\n.link-success {\n  color: #198754;\n}\n.link-success:hover, .link-success:focus {\n  color: #146c43;\n}\n\n.link-info {\n  color: #0dcaf0;\n}\n.link-info:hover, .link-info:focus {\n  color: #3dd5f3;\n}\n\n.link-warning {\n  color: #ffc107;\n}\n.link-warning:hover, .link-warning:focus {\n  color: #ffcd39;\n}\n\n.link-danger {\n  color: #dc3545;\n}\n.link-danger:hover, .link-danger:focus {\n  color: #b02a37;\n}\n\n.link-light {\n  color: #f8f9fa;\n}\n.link-light:hover, .link-light:focus {\n  color: #f9fafb;\n}\n\n.link-dark {\n  color: #212529;\n}\n.link-dark:hover, .link-dark:focus {\n  color: #1a1e21;\n}\n\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.vr {\n  display: inline-block;\n  align-self: stretch;\n  width: 1px;\n  min-height: 1em;\n  background-color: currentColor;\n  opacity: 0.25;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.float-start {\n  float: left !important;\n}\n\n.float-end {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n.opacity-0 {\n  opacity: 0 !important;\n}\n\n.opacity-25 {\n  opacity: 0.25 !important;\n}\n\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n\n.opacity-100 {\n  opacity: 1 !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-visible {\n  overflow: visible !important;\n}\n\n.overflow-scroll {\n  overflow: scroll !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.top-0 {\n  top: 0 !important;\n}\n\n.top-50 {\n  top: 50% !important;\n}\n\n.top-100 {\n  top: 100% !important;\n}\n\n.bottom-0 {\n  bottom: 0 !important;\n}\n\n.bottom-50 {\n  bottom: 50% !important;\n}\n\n.bottom-100 {\n  bottom: 100% !important;\n}\n\n.start-0 {\n  left: 0 !important;\n}\n\n.start-50 {\n  left: 50% !important;\n}\n\n.start-100 {\n  left: 100% !important;\n}\n\n.end-0 {\n  right: 0 !important;\n}\n\n.end-50 {\n  right: 50% !important;\n}\n\n.end-100 {\n  right: 100% !important;\n}\n\n.translate-middle {\n  transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x {\n  transform: translateX(-50%) !important;\n}\n\n.translate-middle-y {\n  transform: translateY(-50%) !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-end {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-end-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-start {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-start-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #0d6efd !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #198754 !important;\n}\n\n.border-info {\n  border-color: #0dcaf0 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #212529 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.border-1 {\n  border-width: 1px !important;\n}\n\n.border-2 {\n  border-width: 2px !important;\n}\n\n.border-3 {\n  border-width: 3px !important;\n}\n\n.border-4 {\n  border-width: 4px !important;\n}\n\n.border-5 {\n  border-width: 5px !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.gap-0 {\n  gap: 0 !important;\n}\n\n.gap-1 {\n  gap: 0.25rem !important;\n}\n\n.gap-2 {\n  gap: 0.5rem !important;\n}\n\n.gap-3 {\n  gap: 1rem !important;\n}\n\n.gap-4 {\n  gap: 1.5rem !important;\n}\n\n.gap-5 {\n  gap: 3rem !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.order-first {\n  order: -1 !important;\n}\n\n.order-0 {\n  order: 0 !important;\n}\n\n.order-1 {\n  order: 1 !important;\n}\n\n.order-2 {\n  order: 2 !important;\n}\n\n.order-3 {\n  order: 3 !important;\n}\n\n.order-4 {\n  order: 4 !important;\n}\n\n.order-5 {\n  order: 5 !important;\n}\n\n.order-last {\n  order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n\n.fs-6 {\n  font-size: 1rem !important;\n}\n\n.fst-italic {\n  font-style: italic !important;\n}\n\n.fst-normal {\n  font-style: normal !important;\n}\n\n.fw-light {\n  font-weight: 300 !important;\n}\n\n.fw-lighter {\n  font-weight: lighter !important;\n}\n\n.fw-normal {\n  font-weight: 400 !important;\n}\n\n.fw-bold {\n  font-weight: 700 !important;\n}\n\n.fw-bolder {\n  font-weight: bolder !important;\n}\n\n.lh-1 {\n  line-height: 1 !important;\n}\n\n.lh-sm {\n  line-height: 1.25 !important;\n}\n\n.lh-base {\n  line-height: 1.5 !important;\n}\n\n.lh-lg {\n  line-height: 2 !important;\n}\n\n.text-start {\n  text-align: left !important;\n}\n\n.text-end {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-secondary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-success {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-info {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-warning {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-danger {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-light {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-black {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-white {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-body {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-muted {\n  --bs-text-opacity: 1;\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-reset {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n\n.text-opacity-25 {\n  --bs-text-opacity: 0.25;\n}\n\n.text-opacity-50 {\n  --bs-text-opacity: 0.5;\n}\n\n.text-opacity-75 {\n  --bs-text-opacity: 0.75;\n}\n\n.text-opacity-100 {\n  --bs-text-opacity: 1;\n}\n\n.bg-primary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-secondary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-success {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-info {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-warning {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-danger {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-light {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-dark {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-black {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-body {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-transparent {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n\n.bg-opacity-10 {\n  --bs-bg-opacity: 0.1;\n}\n\n.bg-opacity-25 {\n  --bs-bg-opacity: 0.25;\n}\n\n.bg-opacity-50 {\n  --bs-bg-opacity: 0.5;\n}\n\n.bg-opacity-75 {\n  --bs-bg-opacity: 0.75;\n}\n\n.bg-opacity-100 {\n  --bs-bg-opacity: 1;\n}\n\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n\n.user-select-all {\n  -webkit-user-select: all !important;\n  -moz-user-select: all !important;\n  user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  user-select: none !important;\n}\n\n.pe-none {\n  pointer-events: none !important;\n}\n\n.pe-auto {\n  pointer-events: auto !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.rounded-1 {\n  border-radius: 0.2rem !important;\n}\n\n.rounded-2 {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-3 {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-end {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-start {\n  border-bottom-left-radius: 0.25rem !important;\n  border-top-left-radius: 0.25rem !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n\n  .float-sm-end {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-grid {\n    display: grid !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-sm-first {\n    order: -1 !important;\n  }\n\n  .order-sm-0 {\n    order: 0 !important;\n  }\n\n  .order-sm-1 {\n    order: 1 !important;\n  }\n\n  .order-sm-2 {\n    order: 2 !important;\n  }\n\n  .order-sm-3 {\n    order: 3 !important;\n  }\n\n  .order-sm-4 {\n    order: 4 !important;\n  }\n\n  .order-sm-5 {\n    order: 5 !important;\n  }\n\n  .order-sm-last {\n    order: 6 !important;\n  }\n\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-sm-start {\n    text-align: left !important;\n  }\n\n  .text-sm-end {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n\n  .float-md-end {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-grid {\n    display: grid !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-md-none {\n    display: none !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-md-first {\n    order: -1 !important;\n  }\n\n  .order-md-0 {\n    order: 0 !important;\n  }\n\n  .order-md-1 {\n    order: 1 !important;\n  }\n\n  .order-md-2 {\n    order: 2 !important;\n  }\n\n  .order-md-3 {\n    order: 3 !important;\n  }\n\n  .order-md-4 {\n    order: 4 !important;\n  }\n\n  .order-md-5 {\n    order: 5 !important;\n  }\n\n  .order-md-last {\n    order: 6 !important;\n  }\n\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-md-start {\n    text-align: left !important;\n  }\n\n  .text-md-end {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n\n  .float-lg-end {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-grid {\n    display: grid !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-lg-first {\n    order: -1 !important;\n  }\n\n  .order-lg-0 {\n    order: 0 !important;\n  }\n\n  .order-lg-1 {\n    order: 1 !important;\n  }\n\n  .order-lg-2 {\n    order: 2 !important;\n  }\n\n  .order-lg-3 {\n    order: 3 !important;\n  }\n\n  .order-lg-4 {\n    order: 4 !important;\n  }\n\n  .order-lg-5 {\n    order: 5 !important;\n  }\n\n  .order-lg-last {\n    order: 6 !important;\n  }\n\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-lg-start {\n    text-align: left !important;\n  }\n\n  .text-lg-end {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n\n  .float-xl-end {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-grid {\n    display: grid !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-xl-first {\n    order: -1 !important;\n  }\n\n  .order-xl-0 {\n    order: 0 !important;\n  }\n\n  .order-xl-1 {\n    order: 1 !important;\n  }\n\n  .order-xl-2 {\n    order: 2 !important;\n  }\n\n  .order-xl-3 {\n    order: 3 !important;\n  }\n\n  .order-xl-4 {\n    order: 4 !important;\n  }\n\n  .order-xl-5 {\n    order: 5 !important;\n  }\n\n  .order-xl-last {\n    order: 6 !important;\n  }\n\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xl-start {\n    text-align: left !important;\n  }\n\n  .text-xl-end {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n\n  .float-xxl-end {\n    float: right !important;\n  }\n\n  .float-xxl-none {\n    float: none !important;\n  }\n\n  .d-xxl-inline {\n    display: inline !important;\n  }\n\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xxl-block {\n    display: block !important;\n  }\n\n  .d-xxl-grid {\n    display: grid !important;\n  }\n\n  .d-xxl-table {\n    display: table !important;\n  }\n\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xxl-flex {\n    display: flex !important;\n  }\n\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-xxl-none {\n    display: none !important;\n  }\n\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n\n  .order-xxl-first {\n    order: -1 !important;\n  }\n\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n\n  .order-xxl-last {\n    order: 6 !important;\n  }\n\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .text-xxl-start {\n    text-align: left !important;\n  }\n\n  .text-xxl-end {\n    text-align: right !important;\n  }\n\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-grid {\n    display: grid !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .d-print-none {\n    display: none !important;\n  }\n}",""]),e.exports=t},2385:(e,t,r)=>{var n=r(3645);t=n(!1),t.push([e.id,".swal2-popup.swal2-toast {\n  box-sizing: border-box;\n  grid-column: 1/4 !important;\n  grid-row: 1/4 !important;\n  grid-template-columns: 1fr 99fr 1fr;\n  padding: 1em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075), 1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075), 2px 4px 16px hsla(0deg, 0%, 0%, 0.075);\n  pointer-events: all;\n}\n.swal2-popup.swal2-toast > * {\n  grid-column: 2;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  margin: 0.5em 1em;\n  padding: 0;\n  font-size: 1em;\n  text-align: initial;\n}\n.swal2-popup.swal2-toast .swal2-loading {\n  justify-content: center;\n}\n.swal2-popup.swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.5em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  grid-column: 3/3;\n  grid-row: 1/99;\n  align-self: center;\n  width: 0.8em;\n  height: 0.8em;\n  margin: 0;\n  font-size: 2em;\n}\n.swal2-popup.swal2-toast .swal2-html-container {\n  margin: 0.5em 1em;\n  padding: 0;\n  font-size: 1em;\n  text-align: initial;\n}\n.swal2-popup.swal2-toast .swal2-html-container:empty {\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-loader {\n  grid-column: 1;\n  grid-row: 1/99;\n  align-self: center;\n  width: 2em;\n  height: 2em;\n  margin: 0.25em;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  grid-column: 1;\n  grid-row: 1/99;\n  align-self: center;\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0 0.5em 0 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  justify-content: flex-start;\n  height: auto;\n  margin: 0;\n  margin-top: 0.5em;\n  padding: 0 0.5em;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0.25em 0.5em;\n  padding: 0.4em 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  transform: rotate(-45deg);\n  transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;\n          animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-toast-animate-success-line-long 0.75s;\n          animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: swal2-toast-show 0.5s;\n          animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  -webkit-animation: swal2-toast-hide 0.1s forwards;\n          animation: swal2-toast-hide 0.1s forwards;\n}\n\n.swal2-container {\n  display: grid;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n  grid-template-areas: \"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";\n  grid-template-rows: minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto);\n  grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);\n  height: 100%;\n  padding: 0.625em;\n  overflow-x: hidden;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-center-start, .swal2-container.swal2-bottom-start {\n  grid-template-columns: minmax(0, 1fr) auto auto;\n}\n.swal2-container.swal2-top, .swal2-container.swal2-center, .swal2-container.swal2-bottom {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-center-end, .swal2-container.swal2-bottom-end {\n  grid-template-columns: auto auto minmax(0, 1fr);\n}\n.swal2-container.swal2-top-start > .swal2-popup {\n  align-self: start;\n}\n.swal2-container.swal2-top > .swal2-popup {\n  grid-column: 2;\n  align-self: start;\n  justify-self: center;\n}\n.swal2-container.swal2-top-end > .swal2-popup, .swal2-container.swal2-top-right > .swal2-popup {\n  grid-column: 3;\n  align-self: start;\n  justify-self: end;\n}\n.swal2-container.swal2-center-start > .swal2-popup, .swal2-container.swal2-center-left > .swal2-popup {\n  grid-row: 2;\n  align-self: center;\n}\n.swal2-container.swal2-center > .swal2-popup {\n  grid-column: 2;\n  grid-row: 2;\n  align-self: center;\n  justify-self: center;\n}\n.swal2-container.swal2-center-end > .swal2-popup, .swal2-container.swal2-center-right > .swal2-popup {\n  grid-column: 3;\n  grid-row: 2;\n  align-self: center;\n  justify-self: end;\n}\n.swal2-container.swal2-bottom-start > .swal2-popup, .swal2-container.swal2-bottom-left > .swal2-popup {\n  grid-column: 1;\n  grid-row: 3;\n  align-self: end;\n}\n.swal2-container.swal2-bottom > .swal2-popup {\n  grid-column: 2;\n  grid-row: 3;\n  justify-self: center;\n  align-self: end;\n}\n.swal2-container.swal2-bottom-end > .swal2-popup, .swal2-container.swal2-bottom-right > .swal2-popup {\n  grid-column: 3;\n  grid-row: 3;\n  align-self: end;\n  justify-self: end;\n}\n.swal2-container.swal2-grow-row > .swal2-popup, .swal2-container.swal2-grow-fullscreen > .swal2-popup {\n  grid-column: 1/4;\n  width: 100%;\n}\n.swal2-container.swal2-grow-column > .swal2-popup, .swal2-container.swal2-grow-fullscreen > .swal2-popup {\n  grid-row: 1/4;\n  align-self: stretch;\n}\n.swal2-container.swal2-no-transition {\n  transition: none !important;\n}\n\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  grid-template-columns: minmax(0, 100%);\n  width: 32em;\n  max-width: 100%;\n  padding: 0 0 1.25em;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  color: #545454;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0;\n  padding: 0.8em 1em 0;\n  color: inherit;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n\n.swal2-actions {\n  display: flex;\n  z-index: 1;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  margin: 1.25em auto 0;\n  padding: 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n\n.swal2-loader {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 2.2em;\n  height: 2.2em;\n  margin: 0 1.875em;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border-width: 0.25em;\n  border-style: solid;\n  border-radius: 100%;\n  border-color: #2778c4 transparent #2778c4 transparent;\n}\n\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 1.1em;\n  transition: box-shadow 0.1s;\n  box-shadow: 0 0 0 3px transparent;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #7066e0;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled.swal2-confirm:focus {\n  box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);\n}\n.swal2-styled.swal2-deny {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #dc3741;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled.swal2-deny:focus {\n  box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #6e7881;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled.swal2-cancel:focus {\n  box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);\n}\n.swal2-styled.swal2-default-outline:focus {\n  box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-styled:focus {\n  outline: none;\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n\n.swal2-footer {\n  justify-content: center;\n  margin: 1em 0 0;\n  padding: 1em 1em 0;\n  border-top: 1px solid #eee;\n  color: inherit;\n  font-size: 1em;\n}\n\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  grid-column: auto !important;\n  overflow: hidden;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.swal2-image {\n  max-width: 100%;\n  margin: 2em auto 1em;\n}\n\n.swal2-close {\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: -1.2em;\n  padding: 0;\n  overflow: hidden;\n  transition: color 0.1s, box-shadow 0.1s;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  color: #ccc;\n  font-family: serif;\n  font-family: monospace;\n  font-size: 2.5em;\n  cursor: pointer;\n  justify-self: end;\n}\n.swal2-close:hover {\n  transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n\n.swal2-html-container {\n  z-index: 1;\n  justify-content: center;\n  margin: 1em 1.6em 0.3em;\n  padding: 0;\n  overflow: auto;\n  color: inherit;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em 2em 3px;\n}\n\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: auto;\n  transition: border-color 0.1s, box-shadow 0.1s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: transparent;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-input::-moz-placeholder, .swal2-file::-moz-placeholder, .swal2-textarea::-moz-placeholder {\n  color: #ccc;\n}\n.swal2-input:-ms-input-placeholder, .swal2-file:-ms-input-placeholder, .swal2-textarea:-ms-input-placeholder {\n  color: #ccc;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #ccc;\n}\n\n.swal2-range {\n  margin: 1em 2em 3px;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n\n.swal2-file {\n  width: 75%;\n  margin-right: auto;\n  margin-left: auto;\n  background: transparent;\n  font-size: 1.125em;\n}\n\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: transparent;\n  color: inherit;\n  font-size: 1.125em;\n}\n\n.swal2-radio,\n.swal2-checkbox {\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  flex-shrink: 0;\n  margin: 0 0.4em;\n}\n\n.swal2-input-label {\n  display: flex;\n  justify-content: center;\n  margin: 1em auto 0;\n}\n\n.swal2-validation-message {\n  align-items: center;\n  justify-content: center;\n  margin: 1em 0 0;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 2.5em auto 0.6em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  border-color: #000;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  -webkit-animation: swal2-animate-error-x-mark 0.5s;\n          animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-warning.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content {\n  -webkit-animation: swal2-animate-i-mark 0.5s;\n          animation: swal2-animate-i-mark 0.5s;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-info.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content {\n  -webkit-animation: swal2-animate-i-mark 0.8s;\n          animation: swal2-animate-i-mark 0.8s;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-question.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content {\n  -webkit-animation: swal2-animate-question-mark 0.8s;\n          animation: swal2-animate-question-mark 0.8s;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n\n.swal2-progress-steps {\n  flex-wrap: wrap;\n  align-items: center;\n  max-width: 100%;\n  margin: 1.25em auto;\n  padding: 0;\n  background: transparent;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  flex-shrink: 0;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #2778c4;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #2778c4;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  flex-shrink: 0;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #2778c4;\n}\n\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s;\n}\n\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards;\n}\n\n.swal2-noanimation {\n  transition: none;\n}\n\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n.swal2-rtl .swal2-close {\n  margin-right: initial;\n  margin-left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n\n.swal2-no-war {\n  display: flex;\n  position: fixed;\n  z-index: 1061;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 3.375em;\n  background: #20232a;\n  color: #fff;\n  text-align: center;\n}\n.swal2-no-war a {\n  color: #61dafb;\n  text-decoration: none;\n}\n.swal2-no-war a:hover {\n  text-decoration: underline;\n}\n\n@-webkit-keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n\n@keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@-webkit-keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@-webkit-keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes swal2-animate-question-mark {\n  0% {\n    transform: rotateY(-360deg);\n  }\n  100% {\n    transform: rotateY(0);\n  }\n}\n@keyframes swal2-animate-question-mark {\n  0% {\n    transform: rotateY(-360deg);\n  }\n  100% {\n    transform: rotateY(0);\n  }\n}\n@-webkit-keyframes swal2-animate-i-mark {\n  0% {\n    transform: rotateZ(45deg);\n    opacity: 0;\n  }\n  25% {\n    transform: rotateZ(-25deg);\n    opacity: 0.4;\n  }\n  50% {\n    transform: rotateZ(15deg);\n    opacity: 0.8;\n  }\n  75% {\n    transform: rotateZ(-5deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotateX(0);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-i-mark {\n  0% {\n    transform: rotateZ(45deg);\n    opacity: 0;\n  }\n  25% {\n    transform: rotateZ(-25deg);\n    opacity: 0.4;\n  }\n  50% {\n    transform: rotateZ(15deg);\n    opacity: 0.8;\n  }\n  75% {\n    transform: rotateZ(-5deg);\n    opacity: 1;\n  }\n  100% {\n    transform: rotateX(0);\n    opacity: 1;\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  background-color: transparent !important;\n  pointer-events: none;\n}\nbody.swal2-no-backdrop .swal2-container .swal2-popup {\n  pointer-events: all;\n}\nbody.swal2-no-backdrop .swal2-container .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  box-sizing: border-box;\n  width: 360px;\n  max-width: 100%;\n  background-color: transparent;\n  pointer-events: none;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}",""]),e.exports=t},7148:(e,t,r)=>{var n=r(3645);t=n(!1),t.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam&family=Bebas+Neue&family=Big+Shoulders+Stencil+Text&family=DM+Sans&family=Homenaje&family=Staatliches&family=Timmana&display=swap);"]),t.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap);"]),t.push([e.id,"p {\n  margin-bottom: 0rem !important;\n}\n\n.flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.flex-start-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-end-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-between-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-between-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.flex-arround-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-arround-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.flex-arround-end {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.flex-evenly-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-evenly-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.flex-center-start {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.flex-center-end {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.flex-center-between {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: space-between;\n      -ms-flex-align: space-between;\n          align-items: space-between;\n}\n\n.flex-center-arround {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.default {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.absolute {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*::before, *::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nbody {\n  min-width: 100vw;\n  max-width: 100vw;\n  min-height: 100vh;\n  max-height: 100vh;\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n  font-family: \"Be Vietnam\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  position: relative;\n}\n\nbody::-webkit-scrollbar-track {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n}\n\nbody::-webkit-scrollbar {\n  width: 8px;\n  background-color: transparent;\n}\n\nbody::-webkit-scrollbar-thumb {\n  background-color: #2a3340;\n}\n\nbody .auth-panel {\n  max-width: 100vw;\n  max-height: 100vh;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  outline: none;\n}\n\nbody .auth-panel .wrapper {\n  margin: 0;\n}\n\nbody .auth-panel .wrapper .title-devices-page {\n  visibility: visible;\n  display: block;\n  margin-bottom: 2rem !important;\n  font-size: 3rem;\n  color: #2a95bf;\n  font-weight: 850;\n  font-family: \"Orbitron\", cursive;\n  line-height: 3rem;\n}\n\n@media (min-width: 47.99875em) {\n  body .auth-panel .wrapper .title-devices-page {\n    visibility: hidden;\n    display: none;\n  }\n}\n\nbody .auth-panel .wrapper .left {\n  max-width: 30%;\n  background-color: #e69429;\n  color: #ebf2ff;\n  padding: 0 1rem;\n  visibility: visible;\n  display: inherit;\n}\n\n@media (max-width: 48em) {\n  body .auth-panel .wrapper .left {\n    visibility: hidden;\n    display: none;\n  }\n}\n\nbody .auth-panel .wrapper .left .content-left {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nbody .auth-panel .wrapper .left .content-left .on-text-logg {\n  width: 100%;\n}\n\nbody .auth-panel .wrapper .left .content-left .on-text-logg .title-page {\n  font-size: 4rem;\n  line-height: 60px;\n  white-space: 5px;\n  margin-bottom: 1.25rem;\n  text-align: center;\n  font-family: \"Orbitron\", cursive;\n  font-weight: 900;\n  color: #2a95bf;\n}\n\nbody .auth-panel .wrapper .left .content-left .logo-img-app {\n  padding: 10px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nbody .auth-panel .wrapper .left .content-left .logo-img-app img {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nbody .auth-panel .wrapper .left .content-left .footer-logg-page {\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\nbody .auth-panel .wrapper .left .content-left .footer-logg-page .upper {\n  font-size: 16px;\n  color: #00678f;\n}\n\nbody .auth-panel .wrapper .right {\n  max-width: 70%;\n}\n\n@media (max-width: 48em) {\n  body .auth-panel .wrapper .right {\n    max-width: 100%;\n  }\n}\n\nbody .auth-panel .wrapper .right .wrapper {\n  padding: 2rem 3rem;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nbody .auth-panel .wrapper .right .wrapper .title-page {\n  line-height: 2.5;\n  margin-bottom: 1rem;\n  font-weight: 650;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form {\n  position: relative;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form .overlay-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ebf2ff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  z-index: -1;\n  border-radius: 20px;\n  -webkit-transition: 500ms -webkit-transform ease-in-out;\n  transition: 500ms -webkit-transform ease-in-out;\n  transition: 500ms transform ease-in-out;\n  transition: 500ms transform ease-in-out, 500ms -webkit-transform ease-in-out;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form .overlay-loading.show-loader {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  z-index: 100;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form .overlay-loading .spinner-border {\n  margin: auto auto;\n  color: #00678f;\n  width: 50px;\n  height: 50px;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form input,\nbody .auth-panel .wrapper .right .wrapper .form label {\n  width: 100%;\n  display: block;\n}\n\nbody .auth-panel .wrapper .right .wrapper .form label {\n  font-weight: 700;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\nbody .auth-panel .wrapper .right .wrapper input {\n  background-color: rgba(208, 226, 255, 0.75);\n  border-radius: 10px !important;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: 200ms all ease-in-out;\n  transition: 200ms all ease-in-out;\n}\n\nbody .auth-panel .wrapper .right .wrapper input::-webkit-input-placeholder {\n  letter-spacing: 1.5px;\n  font-style: italic;\n}\n\nbody .auth-panel .wrapper .right .wrapper input:-ms-input-placeholder {\n  letter-spacing: 1.5px;\n  font-style: italic;\n}\n\nbody .auth-panel .wrapper .right .wrapper input::-ms-input-placeholder {\n  letter-spacing: 1.5px;\n  font-style: italic;\n}\n\nbody .auth-panel .wrapper .right .wrapper input::placeholder {\n  letter-spacing: 1.5px;\n  font-style: italic;\n}\n\nbody .auth-panel .wrapper .right .wrapper input:active, body .auth-panel .wrapper .right .wrapper input:focus, body .auth-panel .wrapper .right .wrapper input:hover {\n  background-color: white;\n  -webkit-box-shadow: 0px 0px 3px 4px rgba(0, 103, 143, 0.55);\n          box-shadow: 0px 0px 3px 4px rgba(0, 103, 143, 0.55);\n}\n\nbody .auth-panel .wrapper .right .wrapper input .error-input {\n  border-bottom-color: red;\n}\n\nbody .auth-panel .wrapper .right .wrapper .input-group:not(:last-child) {\n  margin-bottom: 1.55rem;\n}\n\nbody .auth-panel .wrapper .right .wrapper .input-group .row-inputs-label {\n  width: 100%;\n}\n\nbody .auth-panel .wrapper .right .wrapper .input-group .row-inputs-label .forgot-link {\n  width: 60%;\n  font-size: 16px;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: #ffc55b;\n}\n\n@media (max-width: 48em) {\n  body .auth-panel .wrapper .right .wrapper .input-group .row-inputs-label .forgot-link {\n    width: 130%;\n  }\n}\n\nbody .auth-panel .wrapper .right .wrapper button {\n  width: 50%;\n  background-color: #2a95bf;\n  color: #ebf2ff;\n  padding: 0.55rem 2rem;\n  border: none;\n}\n\n@media (max-width: 48em) {\n  body .auth-panel .wrapper .right .wrapper button {\n    width: 100%;\n  }\n}",""]),e.exports=t},3645:(e)=>{"use strict";function t(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o),s=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")});return[n].concat(s).concat([i]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var n=t(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n}).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var s=0,i;s<this.length;s++)i=this[s][0],null!=i&&(o[i]=!0);for(var d=0,l;d<e.length;d++)(l=[].concat(e[d]),!(n&&o[l[0]]))&&(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))},r}},2814:(e,t,r)=>{var n=r(3379),o=r(1194);o=o.__esModule?o.default:o,"string"==typeof o&&(o=[[e.id,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},1717:(e,t,r)=>{var n=r(3379),o=r(2385);o=o.__esModule?o.default:o,"string"==typeof o&&(o=[[e.id,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},8343:(e,t,r)=>{var n=r(3379),o=r(7148);o=o.__esModule?o.default:o,"string"==typeof o&&(o=[[e.id,o,""]]),n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},3379:(e,t,r)=>{"use strict";function n(e){for(var t=-1,r=0;r<u.length;r++)if(u[r].identifier===e){t=r;break}return t}function o(e,t){for(var r={},o=[],s=0;s<e.length;s++){var i=e[s],d=t.base?i[0]+t.base:i[0],l=r[d]||0,m="".concat(d," ").concat(l);r[d]=l+1;var p=n(m),g={css:i[1],media:i[2],sourceMap:i[3]};-1===p?u.push({identifier:m,updater:c(g,t),references:1}):(u[p].references++,u[p].updater(g)),o.push(m)}return o}function i(e){var t=document.createElement("style"),n=e.attributes||{};if("undefined"==typeof n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var i=p(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}function s(e){return null!==e.parentNode&&void e.parentNode.removeChild(e)}function d(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function l(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var r,n,o;if(t.singleton){var c=b++;r=f||(f=i(t)),n=d.bind(null,r,c,!1),o=d.bind(null,r,c,!0)}else r=i(t),n=l.bind(null,r,t),o=function(){s(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}var m=function(){var e;return function(){return"undefined"==typeof e&&(e=!!(window&&document&&document.all&&!window.atob)),e}}(),p=function(){var e={};return function(t){if("undefined"==typeof e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=[],g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}(),f=null,b=0;e.exports=function(e,t){t=t||{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),e=e||[];var r=o(e,t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<r.length;s++){var i=r[s],d=n(i);u[d].references--}for(var l=o(e,t),c=0;c<r.length;c++){var m=r[c],p=n(m);0===u[p].references&&(u[p].updater(),u.splice(p,1))}r=l}}}},6455:function(e){(function(t,r){e.exports=r()})(this,function(){"use strict";function e(e,r,o){const i=ne(),s=oe(),d=ie();n(i,"confirm",o),n(s,"deny",o),n(d,"cancel",o),t(i,s,d,o),o.reverseButtons&&(o.toast?(e.insertBefore(d,i),e.insertBefore(s,i)):(e.insertBefore(d,r),e.insertBefore(s,r),e.insertBefore(i,r)))}function t(e,t,r,n){return n.buttonsStyling?void(ke([e,t,r],G.styled),n.confirmButtonColor&&(e.style.backgroundColor=n.confirmButtonColor,ke(e,G["default-outline"])),n.denyButtonColor&&(t.style.backgroundColor=n.denyButtonColor,ke(t,G["default-outline"])),n.cancelButtonColor&&(r.style.backgroundColor=n.cancelButtonColor,ke(r,G["default-outline"]))):Ie([e,t,r],G.styled)}function n(e,t,r){Ae(e,r["show".concat(v(t),"Button")],"inline-block"),fe(e,r["".concat(t,"ButtonText")]),e.setAttribute("aria-label",r["".concat(t,"ButtonAriaLabel")]),e.className=G[t],we(e,r,"".concat(t,"Button")),ke(e,r["".concat(t,"ButtonClass")])}function o(e,t){"string"==typeof t?e.style.background=t:!t&&ke([document.documentElement,document.body],G["no-backdrop"])}function i(e,t){t in G?ke(e,G[t]):(I("The \"position\" parameter is not valid, defaulting to \"center\""),ke(e,G.center))}function s(e,t){if(t&&"string"==typeof t){const r="grow-".concat(t);r in G&&ke(e,G[r])}}function d(e){e.inputValidator||Object.keys(Kt).forEach((t)=>{e.input===t&&(e.inputValidator=Kt[t])})}function l(e){e.target&&("string"!=typeof e.target||document.querySelector(e.target))&&("string"==typeof e.target||e.target.appendChild)||(I("Target parameter is not valid, defaulting to \"body\""),e.target="body")}function c(e){d(e),e.showLoaderOnConfirm&&!e.preConfirm&&I("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),l(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),We(e)}function m(){const e=rt.innerParams.get(this);if(e){const t=rt.domCache.get(this);Se(t.loader),ue()?e.icon&&_e($()):yr(t),Ie([t.popup,t.actions],G.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}}function p(e,t,r,n){ue()?Vr(e,n):(Be(r).then(()=>Vr(e,n)),kr(Ve));const o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);o?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),pe()&&(Wt(),er(),Rt()),u()}function u(){Ie([document.documentElement,document.body],[G.shown,G["height-auto"],G["no-backdrop"],G["toast-shown"]])}function g(e){e=Pr(e);const t=xr.swalPromiseResolve.get(this),r=Lr(this);this.isAwaitingPromise()?!e.isDismissed&&(Rr(this),t(e)):r&&t(e)}function f(e){const t=xr.swalPromiseReject.get(this);Rr(this),t&&t(e)}function b(e,t,r){const n=rt.domCache.get(e);t.forEach((e)=>{n[e].disabled=r})}function h(e,t){if(!e)return!1;if("radio"===e.type){const r=e.parentNode.parentNode,n=r.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function w(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"data-swal-template";mn[e]=this,cn||(document.body.addEventListener("click",pn),cn=!0)}const y="SweetAlert2:",x=(e)=>{const t=[];for(let r=0;r<e.length;r++)-1===t.indexOf(e[r])&&t.push(e[r]);return t},v=(e)=>e.charAt(0).toUpperCase()+e.slice(1),k=(e)=>Array.prototype.slice.call(e),I=(e)=>{console.warn("".concat(y," ").concat("object"==typeof e?e.join(" "):e))},T=(e)=>{console.error("".concat(y," ").concat(e))},E=[],_=(e)=>{E.includes(e)||(E.push(e),I(e))},S=(e,t)=>{_("\"".concat(e,"\" is deprecated and will be removed in the next major release. Please use \"").concat(t,"\" instead."))},C=(e)=>"function"==typeof e?e():e,A=(e)=>e&&"function"==typeof e.toPromise,N=(e)=>A(e)?e.toPromise():Promise.resolve(e),D=(e)=>e&&Promise.resolve(e)===e,L=(e)=>e[r(Math.random()*e.length)],R={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},P=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],M={},O=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],V=(e)=>Object.prototype.hasOwnProperty.call(R,e),z=(e)=>-1!==P.indexOf(e),B=(e)=>M[e],j=(e)=>{V(e)||I("Unknown parameter \"".concat(e,"\""))},F=(e)=>{O.includes(e)&&I("The parameter \"".concat(e,"\" is incompatible with toasts"))},U=(e)=>{B(e)&&S(e,B(e))},q=(e)=>{for(const t in!e.backdrop&&e.allowOutsideClick&&I("\"allowOutsideClick\" parameter requires `backdrop` parameter to be set to `true`"),e)j(t),e.toast&&F(t),U(t)},K=(e)=>{const t={};for(const r in e)t[e[r]]="swal2-"+e[r];return t},G=K(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","no-war"]),H=K(["success","warning","info","question","error"]),W=()=>document.body.querySelector(".".concat(G.container)),Y=(e)=>{const t=W();return t?t.querySelector(e):null},X=(e)=>Y(".".concat(e)),Q=()=>X(G.popup),$=()=>X(G.icon),Z=()=>X(G.title),J=()=>X(G["html-container"]),ee=()=>X(G.image),te=()=>X(G["progress-steps"]),re=()=>X(G["validation-message"]),ne=()=>Y(".".concat(G.actions," .").concat(G.confirm)),oe=()=>Y(".".concat(G.actions," .").concat(G.deny)),ae=()=>Y(".".concat(G.loader)),ie=()=>Y(".".concat(G.actions," .").concat(G.cancel)),se=()=>X(G.actions),de=()=>X(G.footer),le=()=>X(G["timer-progress-bar"]),ce=()=>X(G.close),me=()=>{const e=k(Q().querySelectorAll("[tabindex]:not([tabindex=\"-1\"]):not([tabindex=\"0\"])")).sort((e,t)=>{const r=parseInt(e.getAttribute("tabindex")),n=parseInt(t.getAttribute("tabindex"));return r>n?1:r<n?-1:0}),t=k(Q().querySelectorAll("\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n")).filter((e)=>"-1"!==e.getAttribute("tabindex"));return x(e.concat(t)).filter((e)=>Ne(e))},pe=()=>be(document.body,G.shown)&&!be(document.body,G["toast-shown"])&&!be(document.body,G["no-backdrop"]),ue=()=>Q()&&be(Q(),G.toast),ge={previousBodyPadding:null},fe=(e,t)=>{if(e.textContent="",t){const r=new DOMParser,n=r.parseFromString(t,"text/html");k(n.querySelector("head").childNodes).forEach((t)=>{e.appendChild(t)}),k(n.querySelector("body").childNodes).forEach((t)=>{e.appendChild(t)})}},be=(e,t)=>{if(!t)return!1;const r=t.split(/\s+/);for(let n=0;n<r.length;n++)if(!e.classList.contains(r[n]))return!1;return!0},he=(e,t)=>{k(e.classList).forEach((r)=>{Object.values(G).includes(r)||Object.values(H).includes(r)||Object.values(t.showClass).includes(r)||e.classList.remove(r)})},we=(e,t,r)=>{if(he(e,t),t.customClass&&t.customClass[r]){if("string"!=typeof t.customClass[r]&&!t.customClass[r].forEach)return I("Invalid type of customClass.".concat(r,"! Expected string or iterable object, got \"").concat(typeof t.customClass[r],"\""));ke(e,t.customClass[r])}},ye=(e,t)=>t?"select"===t||"textarea"===t||"file"===t?e.querySelector(".".concat(G.popup," > .").concat(G[t])):"checkbox"===t?e.querySelector(".".concat(G.popup," > .").concat(G.checkbox," input")):"radio"===t?e.querySelector(".".concat(G.popup," > .").concat(G.radio," input:checked"))||e.querySelector(".".concat(G.popup," > .").concat(G.radio," input:first-child")):"range"===t?e.querySelector(".".concat(G.popup," > .").concat(G.range," input")):e.querySelector(".".concat(G.popup," > .").concat(G.input)):null,xe=(e)=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},ve=(e,t,r)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t)=>{Array.isArray(e)?e.forEach((e)=>{r?e.classList.add(t):e.classList.remove(t)}):r?e.classList.add(t):e.classList.remove(t)}))},ke=(e,t)=>{ve(e,t,!0)},Ie=(e,t)=>{ve(e,t,!1)},Te=(e,t)=>{const r=k(e.childNodes);for(let n=0;n<r.length;n++)if(be(r[n],t))return r[n]},Ee=(e,t,r)=>{r==="".concat(parseInt(r))&&(r=parseInt(r)),r||0===parseInt(r)?e.style[t]="number"==typeof r?"".concat(r,"px"):r:e.style.removeProperty(t)},_e=function(e){let t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},Se=(e)=>{e.style.display="none"},Ce=(e,t,r,n)=>{const o=e.querySelector(t);o&&(o.style[r]=n)},Ae=function(e,t){let r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"flex";t?_e(e,r):Se(e)},Ne=(e)=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),De=()=>!Ne(ne())&&!Ne(oe())&&!Ne(ie()),Le=(e)=>!!(e.scrollHeight>e.clientHeight),Re=(e)=>{const t=window.getComputedStyle(e),r=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return 0<r||0<n},Pe=function(e){let t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];const r=le();Ne(r)&&(t&&(r.style.transition="none",r.style.width="100%"),setTimeout(()=>{r.style.transition="width ".concat(e/1e3,"s linear"),r.style.width="0%"},10))},Me=()=>{const e=le(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const r=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="".concat(100*(t/r),"%")},Oe=()=>"undefined"==typeof window||"undefined"==typeof document,Ve={},ze=()=>{Ve.previousActiveElement instanceof HTMLElement?(Ve.previousActiveElement.focus(),Ve.previousActiveElement=null):document.body&&document.body.focus()},Be=(e)=>new Promise((t)=>{if(!e)return t();const r=window.scrollX,n=window.scrollY;Ve.restoreFocusTimeout=setTimeout(()=>{ze(),t()},100),window.scrollTo(r,n)}),je="\n <div aria-labelledby=\"".concat(G.title,"\" aria-describedby=\"").concat(G["html-container"],"\" class=\"").concat(G.popup,"\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(G.close,"\"></button>\n   <ul class=\"").concat(G["progress-steps"],"\"></ul>\n   <div class=\"").concat(G.icon,"\"></div>\n   <img class=\"").concat(G.image,"\" />\n   <h2 class=\"").concat(G.title,"\" id=\"").concat(G.title,"\"></h2>\n   <div class=\"").concat(G["html-container"],"\" id=\"").concat(G["html-container"],"\"></div>\n   <input class=\"").concat(G.input,"\" />\n   <input type=\"file\" class=\"").concat(G.file,"\" />\n   <div class=\"").concat(G.range,"\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(G.select,"\"></select>\n   <div class=\"").concat(G.radio,"\"></div>\n   <label for=\"").concat(G.checkbox,"\" class=\"").concat(G.checkbox,"\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(G.label,"\"></span>\n   </label>\n   <textarea class=\"").concat(G.textarea,"\"></textarea>\n   <div class=\"").concat(G["validation-message"],"\" id=\"").concat(G["validation-message"],"\"></div>\n   <div class=\"").concat(G.actions,"\">\n     <div class=\"").concat(G.loader,"\"></div>\n     <button type=\"button\" class=\"").concat(G.confirm,"\"></button>\n     <button type=\"button\" class=\"").concat(G.deny,"\"></button>\n     <button type=\"button\" class=\"").concat(G.cancel,"\"></button>\n   </div>\n   <div class=\"").concat(G.footer,"\"></div>\n   <div class=\"").concat(G["timer-progress-bar-container"],"\">\n     <div class=\"").concat(G["timer-progress-bar"],"\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g,""),Fe=()=>{const e=W();return!!e&&(e.remove(),Ie([document.documentElement,document.body],[G["no-backdrop"],G["toast-shown"],G["has-column"]]),!0)},Ue=()=>{Ve.currentInstance.resetValidationMessage()},qe=()=>{const e=Q(),t=Te(e,G.input),r=Te(e,G.file),n=e.querySelector(".".concat(G.range," input")),o=e.querySelector(".".concat(G.range," output")),i=Te(e,G.select),s=e.querySelector(".".concat(G.checkbox," input")),d=Te(e,G.textarea);t.oninput=Ue,r.onchange=Ue,i.onchange=Ue,s.onchange=Ue,d.oninput=Ue,n.oninput=()=>{Ue(),o.value=n.value},n.onchange=()=>{Ue(),o.value=n.value}},Ke=(e)=>"string"==typeof e?document.querySelector(e):e,Ge=(e)=>{const t=Q();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},He=(e)=>{"rtl"===window.getComputedStyle(e).direction&&ke(W(),G.rtl)},We=(e)=>{const t=Fe();if(Oe())return void T("SweetAlert2 requires document to initialize");const r=document.createElement("div");r.className=G.container,t&&ke(r,G["no-transition"]),fe(r,je);const n=Ke(e.target);n.appendChild(r),Ge(e),He(n),qe(),Ye(r,e)},Ye=(e,t)=>{if(!t.toast){const t=L([{text:"\u0428\u0412\u0410\u0420\u0426\u0415\u041D\u0415\u0413\u0413\u0415\u0420 \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F <br> \u043A \u0420\u0423\u0421\u0421\u041A\u041E\u041C\u0423 \u041D\u0410\u0420\u041E\u0414\u0423 \u043E \u0432\u043E\u0439\u043D\u0435",youtubeId:"fWClXZd9c78"},{text:"\u0420\u0423\u0421\u0421\u041A\u0418\u0419 \u041F\u0410\u0422\u0420\u0418\u041E\u0422 <br> \u043E\u0442\u043A\u0440\u044B\u043B \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0442\u0430\u0439\u043D\u0443 \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",youtubeId:"_RjBNkn88yA"},{text:"\u0413\u0415\u0420\u041E\u0419 \u041D\u041E\u0412\u041E\u0420\u041E\u0421\u0421\u0418\u0418 \u0421\u0422\u0420\u0415\u041B\u041A\u041E\u0412 <br> \u0434\u0430\u043B \u043E\u0446\u0435\u043D\u043A\u0443 \u0445\u043E\u0434\u0443 \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",youtubeId:"yUmzQT4C8JY"},{text:"\u0424\u0418\u041D\u0421\u041A\u0418\u0419 \u0414\u0420\u0423\u0413 \u0420\u041E\u0421\u0421\u0418\u0418 <br> \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u041F\u041E-\u0420\u0423\u0421\u0421\u041A\u0418 \u043E \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",youtubeId:"hkCYb6edUrQ"},{text:"\u042E\u0420\u0418\u0419 \u041F\u041E\u0414\u041E\u041B\u042F\u041A\u0410 \u0447\u0435\u0441\u0442\u043D\u043E <br> \u043E \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u0430\u0445 \u0420\u0423\u0421\u0421\u041A\u041E\u0419 \u0410\u0420\u041C\u0418\u0418",youtubeId:"w4-_8BJKfpk"},{text:"\u041F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A \u0424\u0421\u0411 \u0421\u0422\u0420\u0415\u041B\u041A\u041E\u0412 <br> \u043E\u0431 \u0443\u0441\u043F\u0435\u0445\u0430\u0445 \u0420\u041E\u0421\u0421\u0418\u0418 \u0432 \u0441\u043F\u0435\u0446\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",youtubeId:"saK5UTKroDA"}]);if("ru"===navigator.language&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const r=document.createElement("div");r.className=G["no-war"],fe(r,"<a href=\"https://www.youtube.com/watch?v=".concat(t.youtubeId,"\" target=\"_blank\">").concat(t.text,"</a>")),e.appendChild(r),e.style.paddingTop="4em"}}},Xe=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?Qe(e,t):e&&fe(t,e)},Qe=(e,t)=>{e.jquery?$e(t,e):fe(t,e.toString())},$e=(e,t)=>{if(e.textContent="",0 in t)for(let r=0;r in t;r++)e.appendChild(t[r].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Ze=(()=>{if(Oe())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&"undefined"!=typeof e.style[r])return t[r];return!1})(),Je=()=>{const e=document.createElement("div");e.className=G["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},et=(t,r)=>{const n=se(),o=ae();r.showConfirmButton||r.showDenyButton||r.showCancelButton?_e(n):Se(n),we(n,r,"actions"),e(n,o,r),fe(o,r.loaderHtml),we(o,r,"loader")},tt=(e,t)=>{const r=W();r&&(o(r,t.backdrop),i(r,t.position),s(r,t.grow),we(r,t,"container"))};var rt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const nt=["input","file","range","select","radio","checkbox","textarea"],ot=(e,t)=>{const r=Q(),n=rt.innerParams.get(e),o=!n||t.input!==n.input;nt.forEach((e)=>{const n=Te(r,G[e]);st(e,t.inputAttributes),n.className=G[e],o&&Se(n)}),t.input&&(o&&at(t),dt(t))},at=(e)=>{if(!ut[e.input])return T("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(e.input,"\""));const t=mt(e.input),r=ut[e.input](t,e);_e(t),setTimeout(()=>{xe(r)})},it=(e)=>{for(let t=0;t<e.attributes.length;t++){const r=e.attributes[t].name;["type","value","style"].includes(r)||e.removeAttribute(r)}},st=(e,t)=>{const r=ye(Q(),e);if(r)for(const e in it(r),t)r.setAttribute(e,t[e])},dt=(e)=>{const t=mt(e.input);"object"==typeof e.customClass&&ke(t,e.customClass.input)},lt=(e,t)=>{(!e.placeholder||t.inputPlaceholder)&&(e.placeholder=t.inputPlaceholder)},ct=(e,t,r)=>{if(r.inputLabel){e.id=G.input;const n=document.createElement("label"),o=G["input-label"];n.setAttribute("for",e.id),n.className=o,"object"==typeof r.customClass&&ke(n,r.customClass.inputLabel),n.innerText=r.inputLabel,t.insertAdjacentElement("beforebegin",n)}},mt=(e)=>Te(Q(),G[e]||G.input),pt=(e,t)=>{["string","number"].includes(typeof t)?e.value="".concat(t):!D(t)&&I("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof t,"\""))},ut={};ut.text=ut.email=ut.password=ut.number=ut.tel=ut.url=(e,t)=>(pt(e,t.inputValue),ct(e,e,t),lt(e,t),e.type=t.input,e),ut.file=(e,t)=>(ct(e,e,t),lt(e,t),e),ut.range=(e,t)=>{const r=e.querySelector("input"),n=e.querySelector("output");return pt(r,t.inputValue),r.type=t.input,pt(n,t.inputValue),ct(r,e,t),e},ut.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const r=document.createElement("option");fe(r,t.inputPlaceholder),r.value="",r.disabled=!0,r.selected=!0,e.appendChild(r)}return ct(e,e,t),e},ut.radio=(e)=>(e.textContent="",e),ut.checkbox=(e,t)=>{const r=ye(Q(),"checkbox");r.value="1",r.id=G.checkbox,r.checked=!!t.inputValue;const n=e.querySelector("span");return fe(n,t.inputPlaceholder),r},ut.textarea=(e,t)=>{pt(e,t.inputValue),lt(e,t),ct(e,e,t);const r=(e)=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(Q()).width);new MutationObserver(()=>{const n=e.offsetWidth+r(e);Q().style.width=n>t?"".concat(n,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const gt=(e,t)=>{const r=J();we(r,t,"htmlContainer"),t.html?(Xe(t.html,r),_e(r,"block")):t.text?(r.textContent=t.text,_e(r,"block")):Se(r),ot(e,t)},ft=(e,t)=>{const r=de();Ae(r,t.footer),t.footer&&Xe(t.footer,r),we(r,t,"footer")},bt=(e,t)=>{const r=ce();fe(r,t.closeButtonHtml),we(r,t,"closeButton"),Ae(r,t.showCloseButton),r.setAttribute("aria-label",t.closeButtonAriaLabel)},ht=(e,t)=>{const r=rt.innerParams.get(e),n=$();return r&&t.icon===r.icon?(xt(n,t),void wt(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(H).indexOf(t.icon)?(T("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(t.icon,"\"")),void Se(n)):void(_e(n),xt(n,t),wt(n,t),ke(n,t.showClass.icon)):void Se(n)},wt=(e,t)=>{for(const r in H)t.icon!==r&&Ie(e,H[r]);ke(e,H[t.icon]),vt(e,t),yt(),we(e,t,"icon")},yt=()=>{const e=Q(),t=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<r.length;e++)r[e].style.backgroundColor=t},xt=(e,t)=>{let r=e.innerHTML,n;t.iconHtml?n=kt(t.iconHtml):"success"===t.icon?(n="\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n",r=r.replace(/ style=".*?"/g,"")):"error"===t.icon?n="\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n":n=kt({question:"?",warning:"!",info:"i"}[t.icon]),r.trim()!==n.trim()&&fe(e,n)},vt=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const r of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ce(e,r,"backgroundColor",t.iconColor);Ce(e,".swal2-success-ring","borderColor",t.iconColor)}},kt=(e)=>"<div class=\"".concat(G["icon-content"],"\">").concat(e,"</div>"),It=(e,t)=>{const r=ee();return t.imageUrl?void(_e(r,""),r.setAttribute("src",t.imageUrl),r.setAttribute("alt",t.imageAlt),Ee(r,"width",t.imageWidth),Ee(r,"height",t.imageHeight),r.className=G.image,we(r,t,"image")):Se(r)},Tt=(e,t)=>{const r=te();return t.progressSteps&&0!==t.progressSteps.length?void(_e(r),r.textContent="",t.currentProgressStep>=t.progressSteps.length&&I("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach((e,n)=>{const o=Et(e);if(r.appendChild(o),n===t.currentProgressStep&&ke(o,G["active-progress-step"]),n!==t.progressSteps.length-1){const e=_t(t);r.appendChild(e)}})):Se(r)},Et=(e)=>{const t=document.createElement("li");return ke(t,G["progress-step"]),fe(t,e),t},_t=(e)=>{const t=document.createElement("li");return ke(t,G["progress-step-line"]),e.progressStepsDistance&&Ee(t,"width",e.progressStepsDistance),t},St=(e,t)=>{const r=Z();Ae(r,t.title||t.titleText,"block"),t.title&&Xe(t.title,r),t.titleText&&(r.innerText=t.titleText),we(r,t,"title")},Ct=(e,t)=>{const r=W(),n=Q();t.toast?(Ee(r,"width",t.width),n.style.width="100%",n.insertBefore(ae(),$())):Ee(n,"width",t.width),Ee(n,"padding",t.padding),t.color&&(n.style.color=t.color),t.background&&(n.style.background=t.background),Se(re()),At(n,t)},At=(e,t)=>{e.className="".concat(G.popup," ").concat(Ne(e)?t.showClass.popup:""),t.toast?(ke([document.documentElement,document.body],G["toast-shown"]),ke(e,G.toast)):ke(e,G.modal),we(e,t,"popup"),"string"==typeof t.customClass&&ke(e,t.customClass),t.icon&&ke(e,G["icon-".concat(t.icon)])},Nt=(e,t)=>{Ct(e,t),tt(e,t),Tt(e,t),ht(e,t),It(e,t),St(e,t),bt(e,t),gt(e,t),et(e,t),ft(e,t),"function"==typeof t.didRender&&t.didRender(Q())},Dt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Lt=()=>{const e=k(document.body.children);e.forEach((e)=>{e===W()||e.contains(W())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Rt=()=>{const e=k(document.body.children);e.forEach((e)=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Pt=["swal-title","swal-html","swal-footer"],Mt=(e)=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const r=t.content;Ut(r);const n=Object.assign(Ot(r),Vt(r),zt(r),Bt(r),jt(r),Ft(r,Pt));return n},Ot=(e)=>{const t={};return k(e.querySelectorAll("swal-param")).forEach((e)=>{qt(e,["name","value"]);const r=e.getAttribute("name"),n=e.getAttribute("value");"boolean"==typeof R[r]&&"false"===n&&(t[r]=!1),"object"==typeof R[r]&&(t[r]=JSON.parse(n))}),t},Vt=(e)=>{const t={};return k(e.querySelectorAll("swal-button")).forEach((e)=>{qt(e,["type","color","aria-label"]);const r=e.getAttribute("type");t["".concat(r,"ButtonText")]=e.innerHTML,t["show".concat(v(r),"Button")]=!0,e.hasAttribute("color")&&(t["".concat(r,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t["".concat(r,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),t},zt=(e)=>{const t={},r=e.querySelector("swal-image");return r&&(qt(r,["src","width","height","alt"]),r.hasAttribute("src")&&(t.imageUrl=r.getAttribute("src")),r.hasAttribute("width")&&(t.imageWidth=r.getAttribute("width")),r.hasAttribute("height")&&(t.imageHeight=r.getAttribute("height")),r.hasAttribute("alt")&&(t.imageAlt=r.getAttribute("alt"))),t},Bt=(e)=>{const t={},r=e.querySelector("swal-icon");return r&&(qt(r,["type","color"]),r.hasAttribute("type")&&(t.icon=r.getAttribute("type")),r.hasAttribute("color")&&(t.iconColor=r.getAttribute("color")),t.iconHtml=r.innerHTML),t},jt=(e)=>{const t={},r=e.querySelector("swal-input");r&&(qt(r,["type","label","placeholder","value"]),t.input=r.getAttribute("type")||"text",r.hasAttribute("label")&&(t.inputLabel=r.getAttribute("label")),r.hasAttribute("placeholder")&&(t.inputPlaceholder=r.getAttribute("placeholder")),r.hasAttribute("value")&&(t.inputValue=r.getAttribute("value")));const n=e.querySelectorAll("swal-input-option");return n.length&&(t.inputOptions={},k(n).forEach((e)=>{qt(e,["value"]);const r=e.getAttribute("value"),n=e.innerHTML;t.inputOptions[r]=n})),t},Ft=(e,t)=>{const r={};for(const n in t){const o=t[n],i=e.querySelector(o);i&&(qt(i,[]),r[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return r},Ut=(e)=>{const t=Pt.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);k(e.children).forEach((e)=>{const r=e.tagName.toLowerCase();-1===t.indexOf(r)&&I("Unrecognized element <".concat(r,">"))})},qt=(e,t)=>{k(e.attributes).forEach((r)=>{-1===t.indexOf(r.name)&&I(["Unrecognized attribute \"".concat(r.name,"\" on <").concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])})};var Kt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};class Gt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ht=()=>{null!==ge.previousBodyPadding||document.body.scrollHeight>window.innerHeight&&(ge.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ge.previousBodyPadding+Je(),"px"))},Wt=()=>{null!==ge.previousBodyPadding&&(document.body.style.paddingRight="".concat(ge.previousBodyPadding,"px"),ge.previousBodyPadding=null)},Yt=()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints;if(e&&!be(document.body,G.iosfix)){const e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),ke(document.body,G.iosfix),Qt(),Xt()}},Xt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),r=!!e.match(/WebKit/i),n=t&&r&&!e.match(/CriOS/i);if(n){const e=44;Q().scrollHeight>window.innerHeight-e&&(W().style.paddingBottom="".concat(e,"px"))}},Qt=()=>{const e=W();let t;e.ontouchstart=(r)=>{t=$t(r)},e.ontouchmove=(r)=>{t&&(r.preventDefault(),r.stopPropagation())}},$t=(e)=>{const t=e.target,r=W();return!(Zt(e)||Jt(e))&&(t===r||!(Le(r)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||Le(J())&&J().contains(t)))},Zt=(e)=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Jt=(e)=>e.touches&&1<e.touches.length,er=()=>{if(be(document.body,G.iosfix)){const e=parseInt(document.body.style.top,10);Ie(document.body,G.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},tr=10,rr=(e)=>{const t=W(),r=Q();"function"==typeof e.willOpen&&e.willOpen(r);const n=window.getComputedStyle(document.body),o=n.overflowY;ir(t,r,e),setTimeout(()=>{or(t,r)},tr),pe()&&(ar(t,e.scrollbarPadding,o),Lt()),ue()||Ve.previousActiveElement||(Ve.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout(()=>e.didOpen(r)),Ie(t,G["no-transition"])},nr=(e)=>{const t=Q();if(e.target===t){const e=W();t.removeEventListener(Ze,nr),e.style.overflowY="auto"}},or=(e,t)=>{Ze&&Re(t)?(e.style.overflowY="hidden",t.addEventListener(Ze,nr)):e.style.overflowY="auto"},ar=(e,t,r)=>{Yt(),t&&"hidden"!==r&&Ht(),setTimeout(()=>{e.scrollTop=0})},ir=(e,t,r)=>{ke(e,r.showClass.backdrop),t.style.setProperty("opacity","0","important"),_e(t,"grid"),setTimeout(()=>{ke(t,r.showClass.popup),t.style.removeProperty("opacity")},tr),ke([document.documentElement,document.body],G.shown),r.heightAuto&&r.backdrop&&!r.toast&&ke([document.documentElement,document.body],G["height-auto"])},sr=(e)=>{let t=Q();t||new In,t=Q();const r=ae();ue()?Se($()):dr(t,e),_e(r),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},dr=(e,t)=>{const r=se(),n=ae();!t&&Ne(ne())&&(t=ne()),_e(r),t&&(Se(t),n.setAttribute("data-button-to-replace",t.className)),n.parentNode.insertBefore(n,t),ke([e,r],G.loading)},lr=(e,t)=>{"select"===t.input||"radio"===t.input?gr(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(A(t.inputValue)||D(t.inputValue))&&(sr(ne()),fr(e,t))},cr=(e,t)=>{const r=e.getInput();if(!r)return null;switch(t.input){case"checkbox":return mr(r);case"radio":return pr(r);case"file":return ur(r);default:return t.inputAutoTrim?r.value.trim():r.value;}},mr=(e)=>e.checked?1:0,pr=(e)=>e.checked?e.value:null,ur=(e)=>e.files.length?null===e.getAttribute("multiple")?e.files[0]:e.files:null,gr=(e,t)=>{const r=Q(),n=(e)=>br[t.input](r,hr(e),t);A(t.inputOptions)||D(t.inputOptions)?(sr(ne()),N(t.inputOptions).then((t)=>{e.hideLoading(),n(t)})):"object"==typeof t.inputOptions?n(t.inputOptions):T("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))},fr=(e,t)=>{const r=e.getInput();Se(r),N(t.inputValue).then((n)=>{r.value="number"===t.input?parseFloat(n)||0:"".concat(n),_e(r),r.focus(),e.hideLoading()}).catch((t)=>{T("Error in inputValue promise: ".concat(t)),r.value="",_e(r),r.focus(),e.hideLoading()})},br={select:(e,t,r)=>{const n=Te(e,G.select),i=(e,t,n)=>{const o=document.createElement("option");o.value=n,fe(o,t),o.selected=wr(n,r.inputValue),e.appendChild(o)};t.forEach((e)=>{const t=e[0],r=e[1];if(Array.isArray(r)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,n.appendChild(e),r.forEach((t)=>i(e,t[1],t[0]))}else i(n,r,t)}),n.focus()},radio:(e,t,r)=>{const n=Te(e,G.radio);t.forEach((e)=>{const t=e[0],o=e[1],i=document.createElement("input"),s=document.createElement("label");i.type="radio",i.name=G.radio,i.value=t,wr(t,r.inputValue)&&(i.checked=!0);const d=document.createElement("span");fe(d,o),d.className=G.label,s.appendChild(i),s.appendChild(d),n.appendChild(s)});const o=n.querySelectorAll("input");o.length&&o[0].focus()}},hr=(e)=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach((e,r)=>{let n=e;"object"==typeof n&&(n=hr(n)),t.push([r,n])}):Object.keys(e).forEach((r)=>{let n=e[r];"object"==typeof n&&(n=hr(n)),t.push([r,n])}),t},wr=(e,t)=>t&&t.toString()===e.toString(),yr=(e)=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?_e(t[0],"inline-block"):De()&&Se(e.actions)};var xr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const vr=()=>ne()&&ne().click(),kr=(e)=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Ir=(t,e,r,n)=>{kr(e),r.toast||(e.keydownHandler=(r)=>Sr(t,r,n),e.keydownTarget=r.keydownListenerCapture?window:Q(),e.keydownListenerCapture=r.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Tr=(e,t,r)=>{const n=me();return n.length?(t+=r,t===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus()):void Q().focus()},Er=["ArrowRight","ArrowDown"],_r=["ArrowLeft","ArrowUp"],Sr=(t,r,e)=>{const n=rt.innerParams.get(t);!n||r.isComposing||229===r.keyCode||(n.stopKeydownPropagation&&r.stopPropagation(),"Enter"===r.key?Cr(t,r,n):"Tab"===r.key?Ar(r,n):[...Er,..._r].includes(r.key)?Nr(r.key):"Escape"===r.key&&Dr(r,n,e))},Cr=(t,r,e)=>{if(C(e.allowEnterKey)&&r.target&&t.getInput()&&r.target instanceof HTMLElement&&r.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(e.input))return;vr(),r.preventDefault()}},Ar=(t,e)=>{const r=t.target,n=me();let o=-1;for(let s=0;s<n.length;s++)if(r===n[s]){o=s;break}t.shiftKey?Tr(e,o,-1):Tr(e,o,1),t.stopPropagation(),t.preventDefault()},Nr=(e)=>{const t=ne(),r=oe(),n=ie();if(document.activeElement instanceof HTMLElement&&![t,r,n].includes(document.activeElement))return;const o=Er.includes(e)?"nextElementSibling":"previousElementSibling";let i=document.activeElement;for(let t=0;t<se().children.length;t++){if(i=i[o],!i)return;if(i instanceof HTMLButtonElement&&Ne(i))break}i instanceof HTMLButtonElement&&i.focus()},Dr=(t,e,r)=>{C(e.allowEscapeKey)&&(t.preventDefault(),r(Dt.esc))},Lr=(e)=>{const t=Q();if(!t)return!1;const r=rt.innerParams.get(e);if(!r||be(t,r.hideClass.popup))return!1;Ie(t,r.showClass.popup),ke(t,r.hideClass.popup);const n=W();return Ie(n,r.showClass.backdrop),ke(n,r.hideClass.backdrop),Mr(e,t,r),!0},Rr=(e)=>{e.isAwaitingPromise()&&(rt.awaitingPromise.delete(e),!rt.innerParams.get(e)&&e._destroy())},Pr=(e)=>"undefined"==typeof e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Mr=(e,t,r)=>{const n=W(),o=Ze&&Re(t);"function"==typeof r.willClose&&r.willClose(t),o?Or(e,t,n,r.returnFocus,r.didClose):p(e,n,r.returnFocus,r.didClose)},Or=(e,t,r,n,o)=>{Ve.swalCloseEventFinishedCallback=p.bind(null,e,r,n,o),t.addEventListener(Ze,function(r){r.target===t&&(Ve.swalCloseEventFinishedCallback(),delete Ve.swalCloseEventFinishedCallback)})},Vr=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})},zr=(e)=>{const t={};return Object.keys(e).forEach((r)=>{z(r)?t[r]=e[r]:I("Invalid parameter to update: ".concat(r))}),t},Br=(e)=>{jr(e),delete e.params,delete Ve.keydownHandler,delete Ve.keydownTarget,delete Ve.currentInstance},jr=(e)=>{e.isAwaitingPromise()?(Fr(rt,e),rt.awaitingPromise.set(e,!0)):(Fr(xr,e),Fr(rt,e))},Fr=(e,t)=>{for(const r in e)e[r].delete(t)};var Ur=Object.freeze({hideLoading:m,disableLoading:m,getInput:function(e){const t=rt.innerParams.get(e||this),r=rt.domCache.get(e||this);return r?ye(r.popup,t.input):null},close:g,isAwaitingPromise:function(){return!!rt.awaitingPromise.get(this)},rejectPromise:f,handleAwaitingPromise:Rr,closePopup:g,closeModal:g,closeToast:g,enableButtons:function(){b(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){b(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return h(this.getInput(),!1)},disableInput:function(){return h(this.getInput(),!0)},showValidationMessage:function(e){const t=rt.domCache.get(this),r=rt.innerParams.get(this);fe(t.validationMessage,e),t.validationMessage.className=G["validation-message"],r.customClass&&r.customClass.validationMessage&&ke(t.validationMessage,r.customClass.validationMessage),_e(t.validationMessage);const n=this.getInput();n&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedby",G["validation-message"]),xe(n),ke(n,G.inputerror))},resetValidationMessage:function(){const e=rt.domCache.get(this);e.validationMessage&&Se(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Ie(t,G.inputerror))},getProgressSteps:function(){const e=rt.domCache.get(this);return e.progressSteps},update:function(e){const t=Q(),r=rt.innerParams.get(this);if(!t||be(t,r.hideClass.popup))return I("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const n=zr(e),o=Object.assign({},r,n);Nt(this,o),rt.innerParams.set(this,o),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){const e=rt.domCache.get(this),t=rt.innerParams.get(this);return t?void(e.popup&&Ve.swalCloseEventFinishedCallback&&(Ve.swalCloseEventFinishedCallback(),delete Ve.swalCloseEventFinishedCallback),"function"==typeof t.didDestroy&&t.didDestroy(),Br(this)):void jr(this)}});const qr=(e)=>{const t=rt.innerParams.get(e);e.disableButtons(),t.input?Hr(e,"confirm"):$r(e,!0)},Kr=(e)=>{const t=rt.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Hr(e,"deny"):Yr(e,!1)},Gr=(e,t)=>{e.disableButtons(),t(Dt.cancel)},Hr=(e,t)=>{const r=rt.innerParams.get(e);if(!r.input)return T("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(v(t)));const n=cr(e,r);r.inputValidator?Wr(e,n,t):e.getInput().checkValidity()?"deny"===t?Yr(e,n):$r(e,n):(e.enableButtons(),e.showValidationMessage(r.validationMessage))},Wr=(e,t,r)=>{const n=rt.innerParams.get(e);e.disableInput();const o=Promise.resolve().then(()=>N(n.inputValidator(t,n.validationMessage)));o.then((n)=>{e.enableButtons(),e.enableInput(),n?e.showValidationMessage(n):"deny"===r?Yr(e,t):$r(e,t)})},Yr=(e,t)=>{const r=rt.innerParams.get(e||void 0);if(r.showLoaderOnDeny&&sr(oe()),r.preDeny){rt.awaitingPromise.set(e||void 0,!0);const n=Promise.resolve().then(()=>N(r.preDeny(t,r.validationMessage)));n.then((r)=>{!1===r?(e.hideLoading(),Rr(e)):e.closePopup({isDenied:!0,value:"undefined"==typeof r?t:r})}).catch((t)=>Qr(e||void 0,t))}else e.closePopup({isDenied:!0,value:t})},Xr=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},Qr=(e,t)=>{e.rejectPromise(t)},$r=(e,t)=>{const r=rt.innerParams.get(e||void 0);if(r.showLoaderOnConfirm&&sr(),r.preConfirm){e.resetValidationMessage(),rt.awaitingPromise.set(e||void 0,!0);const n=Promise.resolve().then(()=>N(r.preConfirm(t,r.validationMessage)));n.then((r)=>{Ne(re())||!1===r?(e.hideLoading(),Rr(e)):Xr(e,"undefined"==typeof r?t:r)}).catch((t)=>Qr(e||void 0,t))}else Xr(e,t)},Zr=(e,t,r)=>{const n=rt.innerParams.get(e);n.toast?Jr(e,t,r):(rn(t),nn(t),on(e,t,r))},Jr=(e,t,r)=>{t.popup.onclick=()=>{const t=rt.innerParams.get(e);t&&(en(t)||t.timer||t.input)||r(Dt.close)}},en=(e)=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let tn=!1;const rn=(t)=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(r){t.container.onmouseup=void 0,r.target===t.container&&(tn=!0)}}},nn=(t)=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(r){t.popup.onmouseup=void 0,(r.target===t.popup||t.popup.contains(r.target))&&(tn=!0)}}},on=(t,r,n)=>{r.container.onclick=(o)=>{const e=rt.innerParams.get(t);return tn?void(tn=!1):void(o.target===r.container&&C(e.allowOutsideClick)&&n(Dt.backdrop))}},an=(e)=>"object"==typeof e&&e.jquery,sn=(e)=>e instanceof Element||an(e),dn=()=>{if(Ve.timeout)return Me(),Ve.timeout.stop()},ln=()=>{if(Ve.timeout){const e=Ve.timeout.start();return Pe(e),e}};let cn=!1;const mn={},pn=(e)=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in mn){const r=t.getAttribute(e);if(r)return void mn[e].fire({template:r})}};var un=Object.freeze({isValidParameter:V,isUpdatableParameter:z,isDeprecatedParameter:B,argsToParams:(e)=>{const t={};return"object"!=typeof e[0]||sn(e[0])?["title","html","icon"].forEach((r,n)=>{const o=e[n];"string"==typeof o||sn(o)?t[r]=o:void 0!==o&&T("Unexpected type of ".concat(r,"! Expected \"string\" or \"Element\", got ").concat(typeof o))}):Object.assign(t,e[0]),t},isVisible:()=>Ne(Q()),clickConfirm:vr,clickDeny:()=>oe()&&oe().click(),clickCancel:()=>ie()&&ie().click(),getContainer:W,getPopup:Q,getTitle:Z,getHtmlContainer:J,getImage:ee,getIcon:$,getInputLabel:()=>X(G["input-label"]),getCloseButton:ce,getActions:se,getConfirmButton:ne,getDenyButton:oe,getCancelButton:ie,getLoader:ae,getFooter:de,getTimerProgressBar:le,getFocusableElements:me,getValidationMessage:re,isLoading:()=>Q().hasAttribute("data-loading"),fire:function(){const e=this;for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return new e(...r)},mixin:function(e){class t extends this{_main(t,r){return super._main(t,Object.assign({},e,r))}}return t},showLoading:sr,enableLoading:sr,getTimerLeft:()=>Ve.timeout&&Ve.timeout.getTimerLeft(),stopTimer:dn,resumeTimer:ln,toggleTimer:()=>{const e=Ve.timeout;return e&&(e.running?dn():ln())},increaseTimer:(e)=>{if(Ve.timeout){const t=Ve.timeout.increase(e);return Pe(t,!0),t}},isTimerRunning:()=>Ve.timeout&&Ve.timeout.isRunning(),bindClickHandler:w});let gn;class fn{constructor(){if("undefined"!=typeof window){gn=this;for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const o=gn._main(gn.params);rt.promise.set(this,o)}}_main(e){let t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};q(Object.assign({},t,e)),Ve.currentInstance&&(Ve.currentInstance._destroy(),pe()&&Rt()),Ve.currentInstance=gn;const r=hn(e,t);c(r),Object.freeze(r),Ve.timeout&&(Ve.timeout.stop(),delete Ve.timeout),clearTimeout(Ve.restoreFocusTimeout);const n=wn(gn);return Nt(gn,r),rt.innerParams.set(gn,r),bn(gn,n,r)}then(e){const t=rt.promise.get(this);return t.then(e)}finally(e){const t=rt.promise.get(this);return t.finally(e)}}const bn=(e,t,r)=>new Promise((n,o)=>{const i=(t)=>{e.closePopup({isDismissed:!0,dismiss:t})};xr.swalPromiseResolve.set(e,n),xr.swalPromiseReject.set(e,o),t.confirmButton.onclick=()=>qr(e),t.denyButton.onclick=()=>Kr(e),t.cancelButton.onclick=()=>Gr(e,i),t.closeButton.onclick=()=>i(Dt.close),Zr(e,t,i),Ir(e,Ve,r,i),lr(e,r),rr(r),yn(Ve,r,i),xn(t,r),setTimeout(()=>{t.container.scrollTop=0})}),hn=(e,t)=>{const r=Mt(e),n=Object.assign({},R,t,r,e);return n.showClass=Object.assign({},R.showClass,n.showClass),n.hideClass=Object.assign({},R.hideClass,n.hideClass),n},wn=(e)=>{const t={popup:Q(),container:W(),actions:se(),confirmButton:ne(),denyButton:oe(),cancelButton:ie(),loader:ae(),closeButton:ce(),validationMessage:re(),progressSteps:te()};return rt.domCache.set(e,t),t},yn=(e,t,r)=>{const n=le();Se(n),t.timer&&(e.timeout=new Gt(()=>{r("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(_e(n),we(n,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&Pe(t.timer)})))},xn=(e,t)=>t.toast?void 0:C(t.allowEnterKey)?void(!vn(e,t)&&Tr(t,-1,1)):kn(),vn=(e,t)=>t.focusDeny&&Ne(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Ne(e.cancelButton)?(e.cancelButton.focus(),!0):!!(t.focusConfirm&&Ne(e.confirmButton))&&(e.confirmButton.focus(),!0),kn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};Object.assign(fn.prototype,Ur),Object.assign(fn,un),Object.keys(Ur).forEach((e)=>{fn[e]=function(){if(gn)return gn[e](...arguments)}}),fn.DismissReason=Dt,fn.version="11.4.17";const In=fn;return In.default=In,In}),"undefined"!=typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(r,e){var t=r.createElement("style");if(r.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch(r){t.innerText=e}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}")}},n={};(()=>{e.n=(t)=>{var r=t&&t.__esModule?()=>t["default"]:()=>t;return e.d(r,{a:r}),r}})(),(()=>{e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}})(),(()=>{e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}()})(),(()=>{e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{e.nc=void 0})();(()=>{"use strict";function n(e,t,r,n,o,i,s){try{var d=e[i](s),l=d.value}catch(e){return void r(e)}d.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){function s(e){n(l,o,i,s,d,"next",e)}function d(e){n(l,o,i,s,d,"throw",e)}var l=e.apply(t,r);s(void 0)})}}function i(e,t,r,n){return jb().fire({title:e,text:t,icon:r,confirmButtonText:n,confirmButtonColor:"#2a95bf"})}function s(){return d.apply(this,arguments)}function d(){return d=o(Kb().mark(function t(r,n,o,i,s,e){var l;return Kb().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,jb().fire({title:r,text:n,icon:o,timer:i,timerProgressBar:!1,showConfirmButton:!1,willClose:function(){clearInterval(l),s&&window.location.assign(e)}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop();}},t)})),d.apply(this,arguments)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function u(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&e.id!==void 0}function g(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function f(){const e=c();return 0<=e.indexOf("MSIE ")||0<=e.indexOf("Trident/")}function b(){return"object"==typeof indexedDB}function h(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function _(){return!!("undefined"!=typeof navigator&&navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return e.replace(mh,(e,r)=>{const n=t[r];return null==n?`<${r}?>`:n+""})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return JSON.parse(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $r(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const r=e[o],i=t[o];if(nn(r)&&nn(i)){if(!$r(r,i))return!1;}else if(r!==i)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function nn(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e)=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function An(e){const t={},r=e.replace(/^\?/,"").split("&");return r.forEach((e)=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function qo(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,0<r?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e,t){const r=new fh(e,t);return r.subscribe.bind(r)}function da(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}function la(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e,t=hh,r=wh){const n=t*Ob(r,e),o=Mb(2*(xh*n*(Math.random()-.5)));return Pb(yh,n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t){return new Promise((r,n)=>{e.onsuccess=(e)=>{r(e.target.result)},e.onerror=(e)=>{var r;n(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}})}function ri(e,t,r){return new Promise((n,o)=>{try{const i=indexedDB.open(e,t);i.onsuccess=(e)=>{n(new vh(e.target.result))},i.onerror=(e)=>{var t;o(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},i.onupgradeneeded=(e)=>{r(new vh(i.result),e.oldVersion,e.newVersion,new kh(i.transaction))}}catch(t){o(`Error opening indexedDB: ${t.message}`)}})}function oi(e){return e===Ch?void 0:e}function ai(e){return"EAGER"===e.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}function ci(t,r){try{t.container.addComponent(r)}catch(n){Xh.debug(`Component ${r.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(e){const t=e.name;if(ew.has(t))return Xh.debug(`There were multiple attempts to register component ${t}.`),!1;ew.set(t,e);for(const t of Jh.values())ci(t,e);return!0}function fi(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&void r.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e=Qh){const t=Jh.get(e);if(!t)throw tw.create("no-app",{appName:e});return t}function yi(e,t,r){var n;let o=null!==(n=$h[e])&&void 0!==n?n:e;r&&(o+=`-${r}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${o}" with version "${t}":`];return i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Xh.warn(e.join(" "))}ui(new Sh(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return sw||(sw=ri(ow,aw,(e,t)=>{0===t?e.createObjectStore(iw):void 0}).catch((t)=>{throw tw.create("storage-open",{originalErrorMessage:t.message})})),sw}async function _d(e){try{const t=await Zs();return t.transaction(iw).objectStore(iw).get(Yd(e))}catch(t){throw tw.create("storage-get",{originalErrorMessage:t.message})}}async function Wd(e,t){try{const r=await Zs(),n=r.transaction(iw,"readwrite"),o=n.objectStore(iw);return await o.put(t,Yd(e)),n.complete}catch(t){throw tw.create("storage-set",{originalErrorMessage:t.message})}}function Yd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){const e=new Date;return e.toISOString().substring(0,10)}function $d(e,t=dw){const r=[];let n=e.slice();for(const o of e){const e=r.find((e)=>e.agent===o.agent);if(!e){if(r.push({agent:o.agent,dates:[o.date]}),Zd(r)>t){r.pop();break}}else if(e.dates.push(o.date),Zd(r)>t){e.dates.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}function Zd(e){return nh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r,n){var e={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&0>n.indexOf(t)&&(e[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)0>n.indexOf(t[o])&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(e[t[o]]=r[t[o]]);return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}function ol(e,...t){hw.logLevel<=zh.ERROR&&hw.error(`Auth (${nw}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e,...t){throw dl(e,...t)}function il(e,...t){return dl(e,...t)}function sl(e,t,r){const n=Object.assign(Object.assign({},fw()),{[t]:r}),o=new ch("auth","Firebase",n);return o.create(t,{appName:e.name})}function dl(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return bw.create(e,...t)}function ll(e,t,...r){if(!e)throw dl(t,...r)}function cl(e){const t=`INTERNAL ASSERTION FAILED: `+e;throw ol(t),new Error(t)}function pl(e,t){e||cl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e){pl(e instanceof Function,"Expected a class definition");let t=ww.get(e);return t?(pl(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ww.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(e,t){const r=fi(e,"auth");if(r.isInitialized()){const e=r.getImmediate(),n=r.getOptions();if($r(n,null!==t&&void 0!==t?t:{}))return e;al(e,"already-initialized")}const n=r.initialize({options:t});return n}function fl(e,t){const r=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ul);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function hl(){return"http:"===wl()||"https:"===wl()}function wl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(hl()||u()||"connection"in navigator))||navigator.onLine}function xl(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e,t){pl(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Il(e,t,r,n,o={}){return Tl(e,o,async()=>{let o={},i={};n&&("GET"===t?i=n:o={body:JSON.stringify(n)});const s=In(Object.assign({key:e.config.apiKey},i)).slice(1),d=await e._getAdditionalHeaders();return d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode),xw.fetch()(_l(e,e.config.apiHost,r,s),Object.assign({method:t,headers:d,referrerPolicy:"no-referrer"},o))})}async function Tl(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},vw),e);try{const e=new Iw(t),o=await Promise.race([r(),e.promise]);e.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw Sl(t,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;else{const e=o.ok?i.errorMessage:i.error.message,[r,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Sl(t,"credential-already-in-use",i);else if("EMAIL_EXISTS"===r)throw Sl(t,"email-already-in-use",i);const d=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw sl(t,d,s);else al(t,d)}}catch(r){if(r instanceof lh)throw r;al(t,"network-request-failed")}}async function El(e,t,r,n,o={}){const i=await Il(e,t,r,n,o);return"mfaPendingCredential"in i&&al(e,"multi-factor-auth-required",{_serverResponse:i}),i}function _l(e,t,r,n){const o=`${t}${r}?${n}`;return e.config.emulator?vl(e.config,o):`${e.config.apiScheme}://${o}`}function Sl(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const o=il(e,t,n);return o.customData._tokenResponse=r,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(e,t){return Il(e,"POST","/v1/accounts:delete",t)}async function Al(e,t){return Il(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){if(e)try{const t=new Date(+e);if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(e,t=!1){const r=ei(e),n=await r.getIdToken(t),o=Rl(n);ll(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const i="object"==typeof o.firebase?o.firebase:void 0,s=null===i||void 0===i?void 0:i.sign_in_provider;return{claims:o,token:n,authTime:Nl(Ll(o.auth_time)),issuedAtTime:Nl(Ll(o.iat)),expirationTime:Nl(Ll(o.exp)),signInProvider:s||null,signInSecondFactor:(null===i||void 0===i?void 0:i.sign_in_second_factor)||null}}function Ll(e){return 1e3*+e}function Rl(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const e=ih(r);return e?JSON.parse(e):(ol("Failed to decode base64 JWT payload"),null)}catch(t){return ol("Caught error parsing JWT payload as JSON",t),null}}function Pl(e){const t=Rl(e);return ll(t,"internal-error"),ll("undefined"!=typeof t.exp,"internal-error"),ll("undefined"!=typeof t.iat,"internal-error"),+t.exp-+t.iat}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t,e,r=!1){if(r)return e;try{return await e}catch(r){throw r instanceof lh&&Ol(r)&&t.auth.currentUser===t&&(await t.auth.signOut()),r}}function Ol({code:e}){return`auth/${"user-disabled"}`===e||`auth/${"user-token-expired"}`===e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(e){var t;const r=e.auth,n=await e.getIdToken(),o=await Ml(e,Al(r,{idToken:n}));ll(null===o||void 0===o?void 0:o.users.length,r,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?jl(i.providerUserInfo):[],d=Bl(e.providerData,s),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&(!(null!==d&&void 0!==d)||!d.length),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:d,metadata:new Ew(i.createdAt,i.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,m)}async function zl(e){const t=ei(e);await Vl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Bl(e,t){const r=e.filter((e)=>!t.some((t)=>t.providerId===e.providerId));return[...r,...t]}function jl(e){return e.map((e)=>{var{providerId:t}=e,r=el(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(e,t){const r=await Tl(e,{},async()=>{const r=In({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:o}=e.config,i=_l(e,n,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",xw.fetch()(i,{method:"POST",headers:s,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t){ll("string"==typeof e||"undefined"==typeof e,"internal-error",{appName:t})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e,t,r){return`${"firebase"}:${e}:${t}:${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ql(t))return"Blackberry";if($l(t))return"Webos";if(Hl(t))return"Safari";if((t.includes("chrome/")||Wl(t))&&!t.includes("edge/"))return"Chrome";if(Xl(t))return"Android";else{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null===r||void 0===r?void 0:r.length))return r[1]}return"Other"}function Gl(e=c()){return /firefox\//i.test(e)}function Hl(e=c()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wl(e=c()){return /crios\//i.test(e)}function Yl(e=c()){return /iemobile/i.test(e)}function Xl(e=c()){return /android/i.test(e)}function Ql(e=c()){return /blackberry/i.test(e)}function $l(e=c()){return /webos/i.test(e)}function Zl(e=c()){return /iphone|ipad|ipod/i.test(e)}function Jl(e=c()){var t;return Zl(e)&&!(!(null!==(t=window.navigator)&&void 0!==t)||!t.standalone)}function em(){return f()&&10===document.documentMode}function tm(e=c()){return Zl(e)||Xl(e)||$l(e)||Ql(e)||/windows phone/i.test(e)||Yl(e)}function rm(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e,t=[]){let r="Browser"===e?Kl(c()):"Worker"===e?`${Kl(c())}-${e}`:e;const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/${"JsCore"}/${nw}/${n}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(e){return ei(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(e,t){return Il(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(e,t){return El(e,"POST","/v1/accounts:signInWithPassword",kl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(e,t){return El(e,"POST","/v1/accounts:signInWithEmailLink",kl(e,t))}async function dm(e,t){return El(e,"POST","/v1/accounts:signInWithEmailLink",kl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(e,t){return El(e,"POST","/v1/accounts:signInWithIdp",kl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(e,t){return Il(e,"POST","/v1/accounts:sendVerificationCode",kl(e,t))}async function mm(e,t){return El(e,"POST","/v1/accounts:signInWithPhoneNumber",kl(e,t))}async function pm(e,t){const r=await El(e,"POST","/v1/accounts:signInWithPhoneNumber",kl(e,t));if(r.temporaryProof)throw Sl(e,"account-exists-with-different-credential",r);return r}async function um(e,t){const r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return El(e,"POST","/v1/accounts:signInWithPhoneNumber",kl(e,r),Ow)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e){return"recoverEmail"===e?"RECOVER_EMAIL":"resetPassword"===e?"PASSWORD_RESET":"signIn"===e?"EMAIL_SIGNIN":"verifyEmail"===e?"VERIFY_EMAIL":"verifyAndChangeEmail"===e?"VERIFY_AND_CHANGE_EMAIL":"revertSecondFactorAddition"===e?"REVERT_SECOND_FACTOR_ADDITION":null}function fm(e){const t=An(qo(e)).link,r=t?An(qo(t)).deep_link_id:null,n=An(qo(e)).deep_link_id,o=n?An(qo(n)).link:null;return o||n||r||t||e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e,t,r,n){const o="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return o.catch((r)=>{if(`auth/${"multi-factor-auth-required"}`===r.code)throw Qw._fromErrorAndOperation(e,r,t,n);throw r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(e,t,r=!1){const n=await Ml(e,t._linkToIdToken(e.auth,(await e.getIdToken())),r);return Xw._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(e,t,r=!1){const{auth:n}=e,o="reauthenticate";try{const i=await Ml(e,hm(n,o,t,e),r);ll(i.idToken,n,"internal-error");const s=Rl(i.idToken);ll(s,n,"internal-error");const{sub:d}=s;return ll(e.uid===d,n,"user-mismatch"),Xw._forOperation(e,o,i)}catch(t){throw`auth/${"user-not-found"}`===(null===t||void 0===t?void 0:t.code)&&al(n,"user-mismatch"),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(e,t,r=!1){const n="signIn",o=await hm(e,n,t),i=await Xw._fromIdTokenResponse(e,n,o);return r||(await e._updateCurrentUser(i.user)),i}async function vm(e,t){return xm(om(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(e,t,r){return vm(ei(e),Bw.credential(t,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(e,t){return Il(e,"POST","/v2/accounts/mfaEnrollment:start",kl(e,t))}function Tm(e,t){return Il(e,"POST","/v2/accounts/mfaEnrollment:finalize",kl(e,t))}function Em(e,t){return Il(e,"POST","/v2/accounts/mfaEnrollment:withdraw",kl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){const e=c();return Hl(e)||Zl(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e){return Promise.all(e.map(async(e)=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(e="",t=10){let n="";for(let o=0;o<t;o++)n+=r(10*Math.random());return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return window}function Nm(e){Am().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return"undefined"!=typeof Am().WorkerGlobalScope&&"function"==typeof Am().importScripts}async function Lm(){if(!(null!==navigator&&void 0!==navigator)||!navigator.serviceWorker)return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Rm(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Pm(){return Dm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(e,t){return e.transaction([hy],t?"readwrite":"readonly").objectStore(hy)}function Om(){const e=indexedDB.deleteDatabase(fy);return new yy(e).toPromise()}function Vm(){const e=indexedDB.open(fy,by);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(hy,{keyPath:wy})}catch(t){r(t)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hy)?t(r):(r.close(),await Om(),t((await Vm())))})})}async function zm(e,t,r){const n=Mm(e,!0).put({[wy]:t,value:r});return new yy(n).toPromise()}async function Bm(e,t){const r=Mm(e,!1).get(t),n=await new yy(r).toPromise();return n===void 0?null:n.value}function jm(e,t){const r=Mm(e,!0).delete(t);return new yy(r).toPromise()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(e,t){return Il(e,"POST","/v2/accounts/mfaSignIn:start",kl(e,t))}function Um(e,t){return Il(e,"POST","/v2/accounts/mfaSignIn:finalize",kl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(e){return(await Il(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Gm(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=(t)=>{const e=il("internal-error");e.customData=t,r(e)},n.type="text/javascript",n.charset="UTF-8",Km().appendChild(n)})}function Hm(e){return`__${e}${r(1e6*Math.random())}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let o=0;o<e;o++)t.push(n.charAt(r(Math.random()*n.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(e){return 6>=e.length&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}function Xm(){let t=null;return new Promise((e)=>"complete"===document.readyState?void e():void(t=()=>e(),window.addEventListener("load",t))).catch((r)=>{throw t&&window.removeEventListener("load",t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(e,t,r){var n;const o=await r.verify();try{ll("string"==typeof o,e,"argument-error"),ll(r.type===Cy,e,"argument-error");let i;if(i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){ll("enroll"===t.type,e,"internal-error");const r=await Im(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return r.phoneSessionInfo.sessionInfo}else{ll("signin"===t.type,e,"internal-error");const r=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;ll(r,e,"missing-multi-factor-info");const s=await Fm(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}else{const{sessionInfo:t}=await cm(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(e,t){return t?ul(t):(ll(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e){return xm(e.auth,new Ly(e),e.bypassAuthState)}function Jm(e){const{auth:t,user:r}=e;return ll(r,t,"internal-error"),ym(r,new Ly(e),e.bypassAuthState)}async function ep(e){const{auth:t,user:r}=e;return ll(r,t,"internal-error"),wm(r,new Ly(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(e,t){const r=np(t),n=rp(e);if(!(await n._isAvailable()))return!1;const o="true"===(await n._get(r));return await n._remove(r),o}function rp(e){return ul(e._redirectPersistence)}function np(e){return ql(Oy,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(e,t,r=!1){const n=om(e),o=$m(n,t),i=new zy(n,o,r),s=await i.execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((e)=>e).join("-")}function ip({type:e,error:t}){return"unknown"===e&&`auth/${"no-auth-event"}`===(null===t||void 0===t?void 0:t.code)}function sp(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(e);default:return!1;}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(e,t={}){return Il(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(e){if(!e.config.emulator){const{authorizedDomains:t}=await dp(e);for(const e of t)try{if(cp(e))return}catch(e){}al(e,"unauthorized-domain")}}function cp(e){const t=bl(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===n}if(!Fy.test(r))return!1;if(jy.test(e))return n===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){const e=Am().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function pp(e){return new Promise((t,r)=>{function n(){mp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mp(),r(il(e,"network-request-failed"))},timeout:Uy.get()})}var o,i,s;if(null===(i=null===(o=Am().gapi)||void 0===o?void 0:o.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null!==(s=Am().gapi)&&void 0!==s&&s.load)n();else{const t=Hm("iframefcb");return Am()[t]=()=>{gapi.load?n():r(il(e,"network-request-failed"))},Gm(`https://apis.google.com/js/api.js?onload=${t}`).catch((t)=>r(t))}}).catch((e)=>{throw qy=null,e})}function up(e){return qy=qy||pp(e),qy}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e){const t=e.config;ll(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?vl(t,Hy):`https://${e.config.authDomain}/${Gy}`,n={apiKey:t.apiKey,appName:e.name,v:nw},o=Yy.get(e.config.apiHost);o&&(n.eid=o);const i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${In(n).slice(1)}`}async function fp(e){const t=await up(e),r=Am().gapi;return ll(r,e,"internal-error"),t.open({where:document.body,url:gp(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wy,dontclear:!0},(t)=>new Promise(async(r,n)=>{function o(){Am().clearTimeout(s),r(t)}await t.restyle({setHideOnLeave:!1});const i=il(e,"network-request-failed"),s=Am().setTimeout(()=>{n(i)},Ky.get());t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(e,t,r,n=Qy,o=$y){const i=Db((window.screen.availHeight-o)/2,0).toString(),s=Db((window.screen.availWidth-n)/2,0).toString();let d="";const l=Object.assign(Object.assign({},Xy),{width:n.toString(),height:o.toString(),top:i,left:s}),m=c().toLowerCase();r&&(d=Wl(m)?Zy:r),Gl(m)&&(t=t||Jy,l.scrollbars="yes");const p=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(Jl(m)&&"_self"!==d)return hp(t||"",d),new ex(null);const u=window.open(t||"",d,p);ll(u,e,"popup-blocked");try{u.focus()}catch(t){}return new ex(u)}function hp(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e,t,r,n,o,i){ll(e.config.authDomain,e,"auth-domain-config-required"),ll(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:nw,eventId:o};if(t instanceof jw){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",yt(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))s[e]=t}if(t instanceof Fw){const e=t.getScopes().filter((e)=>""!==e);0<e.length&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const d=s;for(const s of Object.keys(d))void 0===d[s]&&delete d[s];return`${yp(e)}?${In(d).slice(1)}`}function yp({config:e}){return e.emulator?vl(e,rx):`https://${e.authDomain}/${tx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e){return"Node"===e?"node":"ReactNative"===e?"rn":"Worker"===e?"webworker":"Cordova"===e?"cordova":void 0}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(e){return e instanceof lh&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp({projectId:e}){return`${fx}/projects/${e}/installations`}function Ip(e){return{token:e.token,requestStatus:2,expiresIn:Cp(e.expiresIn),creationTime:Date.now()}}async function Tp(e,t){const r=await t.json(),n=r.error;return hx.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ep({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _p(e,{refreshToken:t}){const r=Ep(e);return r.append("Authorization",Ap(t)),r}async function Sp(e){const t=await e();return 500<=t.status&&600>t.status?e():t}function Cp(e){return+e.replace("s","000")}function Ap(e){return`${gx} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const n=kp(e),o=Ep(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={fid:r,authVersion:gx,appId:e.appId,sdkVersion:ux},d={method:"POST",headers:o,body:JSON.stringify(s)},l=await Sp(()=>fetch(n,d));if(l.ok){const e=await l.json(),t={fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ip(e.authToken)};return t}throw await Tp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(e){return new Promise((t)=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(e){const t=btoa(Vb(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const r=Pp(e);return wx.test(r)?r:yx}catch(e){return yx}}function Pp(e){const t=Lp(e);return t.substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(e,t){const r=Mp(e);Vp(r,t),zp(r,t)}function Vp(e,t){const r=xx.get(e);if(r)for(const e of r)e(t)}function zp(e,t){const r=Bp();r&&r.postMessage({key:e,fid:t}),jp()}function Bp(){return!vx&&"BroadcastChannel"in self&&(vx=new BroadcastChannel("[Firebase] FID Change"),vx.onmessage=(t)=>{Vp(t.data.key,t.data.fid)}),vx}function jp(){0===xx.size&&vx&&(vx.close(),vx=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return Ex||(Ex=ri(kx,Ix,(e,t)=>{0===t?e.createObjectStore(Tx):void 0})),Ex}async function Up(e,t){const r=Mp(e),n=await Fp(),o=n.transaction(Tx,"readwrite"),i=o.objectStore(Tx),s=await i.get(r);return await i.put(t,r),await o.complete,s&&s.fid===t.fid||Op(e,t.fid),t}async function qp(e){const t=Mp(e),r=await Fp(),n=r.transaction(Tx,"readwrite");await n.objectStore(Tx).delete(t),await n.complete}async function Kp(e,t){const r=Mp(e),n=await Fp(),o=n.transaction(Tx,"readwrite"),i=o.objectStore(Tx),s=await i.get(r),d=t(s);return void 0===d?await i.delete(r):await i.put(d,r),await o.complete,d&&(!s||s.fid!==d.fid)&&Op(e,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(e){let t;const r=await Kp(e.appConfig,(r)=>{const n=Hp(r),o=Wp(e,n);return t=o.registrationPromise,o.installationEntry});return r.fid===yx?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function Hp(e){const t=e||{fid:Rp(),registrationStatus:0};return $p(t)}function Wp(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(hx.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=Yp(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Xp(e)}:{installationEntry:t}}async function Yp(t,r){try{const e=await Np(t,r);return Up(t.appConfig,e)}catch(n){throw vp(n)&&409===n.customData.serverCode?await qp(t.appConfig):await Up(t.appConfig,{fid:r.fid,registrationStatus:0}),n}}async function Xp(e){let t=await Qp(e.appConfig);for(;1===t.registrationStatus;)await Dp(100),t=await Qp(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:r}=await Gp(e);return r?r:t}return t}function Qp(e){return Kp(e,(e)=>{if(!e)throw hx.create("installation-not-found");return $p(e)})}function $p(e){return Zp(e)?{fid:e.fid,registrationStatus:0}:e}function Zp(e){return 1===e.registrationStatus&&e.registrationTime+px<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp({appConfig:e,heartbeatServiceProvider:t},r){const n=Pu(e,r),o=_p(e,r),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={installation:{sdkVersion:ux,appId:e.appId}},d={method:"POST",headers:o,body:JSON.stringify(s)},l=await Sp(()=>fetch(n,d));if(l.ok){const e=await l.json(),t=Ip(e);return t}throw await Tp("Generate Auth Token",l)}function Pu(e,{fid:t}){return`${kp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(e,t=!1){let r;const n=await Kp(e.appConfig,(n)=>{if(!tg(n))throw hx.create("not-registered");const o=n.authToken;if(!t&&rg(o))return n;if(1===o.requestStatus)return r=Fu(e,t),n;else{if(!navigator.onLine)throw hx.create("app-offline");const t=og(n);return r=eg(e,t),t}}),o=r?await r:n.authToken;return o}async function Fu(e,t){let r=await Xu(e.appConfig);for(;1===r.authToken.requestStatus;)await Dp(100),r=await Xu(e.appConfig);const n=r.authToken;return 0===n.requestStatus?Ou(e,t):n}function Xu(e){return Kp(e,(e)=>{if(!tg(e))throw hx.create("not-registered");const t=e.authToken;return ag(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eg(t,e){try{const r=await Jp(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await Up(t.appConfig,n),r}catch(r){if(vp(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await qp(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Up(t.appConfig,r)}throw r}}function tg(e){return e!==void 0&&2===e.registrationStatus}function rg(e){return 2===e.requestStatus&&!ng(e)}function ng(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+bx}function og(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ag(e){return 1===e.requestStatus&&e.requestTime+px<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(e){const t=e,{installationEntry:r,registrationPromise:n}=await Gp(t);return n?n.catch(console.error):Ou(t).catch(console.error),r.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(e,t=!1){const r=e;await dg(r);const n=await Ou(r,t);return n.token}async function dg(e){const{registrationPromise:t}=await Gp(e);t&&(await t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(e){if(!e||!e.options)throw cg("App Configuration");if(!e.name)throw cg("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw cg(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function cg(e){return hx.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e){return Promise.all(e.map((e)=>e.catch((t)=>t)))}function pg(e,t){const r=document.createElement("script");r.src=`${Px}?l=${e}&id=${t}`,r.async=!0,document.head.appendChild(r)}function ug(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function gg(e,t,r,n,o,i){const s=n[o];try{if(s)await t[s];else{const e=await mg(r),n=e.find((e)=>e.measurementId===o);n&&(await t[n.appId])}}catch(t){Mx.error(t)}e("config",o,i)}async function fg(e,t,r,n,o){try{let i=[];if(o&&o.send_to){let e=o.send_to;Array.isArray(e)||(e=[e]);const n=await mg(r);for(const r of e){const e=n.find((e)=>e.measurementId===r),o=e&&t[e.appId];if(o)i.push(o);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",n,o||{})}catch(t){Mx.error(t)}}function bg(e,t,r,n){return async function(o,i,s){try{"event"===o?await fg(e,t,r,i,s):"config"===o?await gg(e,t,r,n,i,s):e("set",i)}catch(t){Mx.error(t)}}}function hg(e,t,r,n,o){let i=function(...e){window[n].push(arguments)};return window[o]&&"function"==typeof window[o]&&(i=window[o]),window[o]=bg(i,e,t,r),{gtagCore:i,wrappedGtag:window[o]}}function wg(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Px))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function xg(e){var t;const{appId:r,apiKey:n}=e,o={method:"GET",headers:yg(n)},i=Rx.replace("{app-id}",r),s=await fetch(i,o);if(200!==s.status&&304!==s.status){let e="";try{const r=await s.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw Ox.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function vg(e,t=zx,r){const{appId:n,apiKey:o,measurementId:i}=e.options;if(!n)throw Ox.create("no-app-id");if(!o){if(i)return{measurementId:i,appId:n};throw Ox.create("no-api-key")}const s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new Bx;return setTimeout(async()=>{d.abort()},void 0===r?Lx:r),kg({appId:n,apiKey:o,measurementId:i},s,d,t)}async function kg(t,{throttleEndTimeMillis:e,backoffCount:r},n,o=zx){const{appId:i,measurementId:s}=t;try{await Ig(n,e)}catch(t){if(s)return Mx.warn(`Timed out fetching this Firebase app's measurement ID from the server.`+` Falling back to the measurement ID ${s}`+` provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:i,measurementId:s};throw t}try{const e=await xg(t);return o.deleteThrottleMetadata(i),e}catch(d){if(!Tg(d)){if(o.deleteThrottleMetadata(i),s)return Mx.warn(`Failed to fetch this Firebase app's measurement ID from the server.`+` Falling back to the measurement ID ${s}`+` provided in the "measurementId" field in the local Firebase config. [${d.message}]`),{appId:i,measurementId:s};throw d}const e=503===+d.customData.httpStatus?ka(r,o.intervalMillis,Vx):ka(r,o.intervalMillis),l={throttleEndTimeMillis:Date.now()+e,backoffCount:r+1};return o.setThrottleMetadata(i,l),Mx.debug(`Calling attemptFetch again in ${e} millis`),kg(t,l,n,o)}}function Ig(e,t){return new Promise((r,n)=>{const o=Db(t-Date.now(),0),i=setTimeout(r,o);e.addEventListener(()=>{clearTimeout(i),n(Ox.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Tg(t){if(!(t instanceof lh)||!t.customData)return!1;const e=+t.customData.httpStatus;return 429==e||500==e||503==e||504==e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(){if(!b())return Mx.warn(Ox.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await h()}catch(t){return Mx.warn(Ox.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function _g(e,t,r,n,o,i,s){var d;const l=vg(e);l.then((t)=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Mx.warn(`The measurement ID in the local Firebase config (${e.options.measurementId})`+` does not match the measurement ID fetched from the server (${t.measurementId}).`+` To ensure analytics events are always sent to the correct Analytics property,`+` update the`+` measurement ID field in the local config or remove it from the local config.`)}).catch((t)=>Mx.error(t)),t.push(l);const c=Eg().then((e)=>e?n.getId():void 0),[m,p]=await Promise.all([l,c]);wg()||pg(i,m.measurementId),o("js",new Date);const u=null!==(d=null===s||void 0===s?void 0:s.config)&&void 0!==d?d:{};return u[Dx]="firebase",u.update=!0,null!=p&&(u[Nx]=p),o("config",m.measurementId,u),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){const e=[];if(u()&&e.push("This is a browser extension environment."),_()||e.push("Cookies are not available."),0<e.length){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=Ox.create("invalid-analytics-context",{errorInfo:t});Mx.warn(r.message)}}function Cg(e,t,r){Sg();const n=e.options.appId;if(!n)throw Ox.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Mx.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest`+` measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId}`+` provided in the "measurementId" field in the local Firebase config.`);else throw Ox.create("no-api-key");if(null!=Fx[n])throw Ox.create("already-exists",{id:n});if(!Hx){ug(Kx);const{wrappedGtag:e,gtagCore:t}=hg(Fx,Ux,qx,Kx,Gx);Yx=e,Wx=t,Hx=!0}Fx[n]=_g(e,Ux,qx,t,Wx,Kx,r);const o=new jx(e);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(e,t,r,n,o){if(o&&o.global)return void e("event",r,n);else{const o=await t,i=Object.assign(Object.assign({},n),{send_to:o});e("event",r,i)}}function Ng(e,t={}){const r=fi(e,Ax);if(r.isInitialized()){const e=r.getImmediate();if($r(t,r.getOptions()))return e;throw Ox.create("already-initialized")}const n=r.initialize({options:t});return n}function Dg(e,t,r,n){e=ei(e),Ag(Yx,Fx[e.app.options.appId],t,r,n).catch((t)=>Mx.error(t))}function Lg(){}function aa(e){var t=typeof e;return t="object"==t?e?Array.isArray(e)?"array":t:"null":t,"array"==t||"object"==t&&"number"==typeof e.length}function ba(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return e.call.apply(e.bind,arguments)}function ha(t,r){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,n),t.apply(r,o)}}return function(){return t.apply(r,arguments)}}function ia(){return ia=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:ha,ia.apply(null,arguments)}function q(e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ja(e,t){function r(){}r.prototype=t.prototype,e.Z=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Vb=function(r,o){for(var e=Array(arguments.length-2),i=2;i<arguments.length;i++)e[i-2]=arguments[i];return t.prototype[o].apply(r,e)}}function t(){this.s=this.s,this.o=this.o}function v(t){a:{var r=Bd;const n=t.length,o="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in o&&r.call(void 0,o[i],i,t)){r=i;break a}r=-1}return 0>r?null:"string"==typeof t?t.charAt(r):t[r]}function oa(){return Array.prototype.concat.apply([],arguments)}function qa(e){const t=e.length;if(0<t){const r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function ra(e){return /^[\s\xa0]*$/.test(e)}function sa(e,t){return-1!=e.indexOf(t)}function w(e,t){return e<t?-1:e>t?1:0}function ua(e,t,r){for(const n in e)t.call(r,e[n],n,e)}function xa(e){const t={};for(const r in e)t[r]=e[r];return t}function ya(t){let r,n;for(let o=1;o<arguments.length;o++){for(r in n=arguments[o],n)t[r]=n[r];for(let e=0;e<wa.length;e++)r=wa[e],Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}}function Aa(e){return Aa[" "](e),e}function Ca(e){var t=Qa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}function Fa(){var e=ev.document;return e?e.documentMode:void 0}function Ma(){return Ca(function(){let t=0;const r=na(La+"").split("."),n=na("9").split("."),o=Db(r.length,n.length);for(let s=0;0==t&&s<o;s++){var i=r[s]||"",e=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""],0==i[0].length&&0==e[0].length)break;t=w(0==i[1].length?0:parseInt(i[1],10),0==e[1].length?0:parseInt(e[1],10))||w(0==i[2].length,0==e[2].length)||w(i[2],e[2]),i=i[3],e=e[3]}while(0==t)}return 0<=t})}function Ra(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function z(t,r){if(Ra.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,!(r=t.relatedTarget))"mouseover"==n?r=t.fromElement:"mouseout"==n&&(r=t.toElement);else if(Ja){a:{try{Aa(r.nodeName);var i=!0;break a}catch(e){}i=!1}i||(r=null)}this.relatedTarget=r,o?(this.clientX=void 0===o.clientX?o.pageX:o.clientX,this.clientY=void 0===o.clientY?o.pageY:o.clientY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=void 0===t.clientX?t.pageX:t.clientX,this.clientY=void 0===t.clientY?t.pageY:t.clientY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Va[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&z.Z.h.call(this)}}function A(t,r,n,o,i){this.listener=t,this.proxy=null,this.src=r,this.type=n,this.capture=!!o,this.ia=i,this.key=++B,this.ca=this.fa=!1}function Ya(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Za(e){this.src=e,this.g={},this.h=0}function $a(t,r){var n=r.type;if(n in t.g){var o=t.g[n],i=k(o,r),e;(e=0<=i)&&Array.prototype.splice.call(o,i,1),e&&(Ya(r),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Rg(t,r,n,o){for(var i=0,e;i<t.length;++i)if(e=t[i],!e.ca&&e.listener==r&&e.capture==!!n&&e.ia==o)return i;return-1}function Pg(t,r,n,o,i){if(o&&o.once)return Vg(t,r,n,o,i);if(Array.isArray(r)){for(var e=0;e<r.length;e++)Pg(t,r[e],n,o,i);return null}return n=qg(n),t&&t[Wa]?t.N(r,n,ba(o)?!!o.capture:!!o,i):Mg(t,r,n,!1,o,i)}function Mg(t,r,o,i,s,d){if(!r)throw Error("Invalid event type");var l=ba(s)?!!s.capture:!!s,c=Ug(t);if(c||(t[Xa]=c=new Za(t)),o=c.add(r,o,i,l,d),o.proxy)return o;if(i=Og(),o.proxy=i,i.src=t,i.listener=o,t.addEventListener)tv||(s=l),void 0===s&&(s=!1),t.addEventListener(r.toString(),i,s);else if(t.attachEvent)t.attachEvent(jg(r.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Og(){function e(r){return t.call(e.src,e.listener,r)}var t=Fg;return e}function Vg(t,r,n,o,i){if(Array.isArray(r)){for(var e=0;e<r.length;e++)Vg(t,r[e],n,o,i);return null}return n=qg(n),t&&t[Wa]?t.O(r,n,ba(o)?!!o.capture:!!o,i):Mg(t,r,n,!0,o,i)}function zg(t,r,n,o,i){if(Array.isArray(r))for(var e=0;e<r.length;e++)zg(t,r[e],n,o,i);else(o=ba(o)?!!o.capture:!!o,n=qg(n),t&&t[Wa])?(t=t.i,r=(r+"").toString(),r in t.g&&(e=t.g[r],n=Rg(e,n,o,i),-1<n&&(Ya(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[r],t.h--)))):t&&(t=Ug(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Rg(r,n,o,i)),(n=-1<t?r[t]:null)&&Bg(n))}function Bg(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Wa])$a(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(jg(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=Ug(t))?($a(r,e),0==r.h&&(r.src=null,t[Xa]=null)):Ya(e)}}}function jg(e){return e in cb?cb[e]:cb[e]="on"+e}function Fg(e,t){if(e.ca)e=!0;else{t=new z(t,this);var r=e.listener,n=e.ia||e.src;e.fa&&Bg(e),e=r.call(n,t)}return e}function Ug(e){return e=e[Xa],e instanceof Za?e:null}function qg(e){return"function"==typeof e?e:(e[db]||(e[db]=function(t){return e.handleEvent(t)}),e[db])}function Kg(){t.call(this),this.i=new Za(this),this.P=this,this.I=null}function C(t,r){var n=t.I,o;if(n)for(o=[];n;n=n.I)o.push(n);if(t=t.P,n=r.type||r,"string"==typeof r)r=new Ra(r,t);else if(r instanceof Ra)r.target=r.target||t;else{var i=r;r=new Ra(n,t),ya(r,i)}if(i=!0,o)for(var e=o.length-1,s;0<=e;e--)s=r.g=o[e],i=D(s,n,!0,r)&&i;if(s=r.g=t,i=D(s,n,!0,r)&&i,i=D(s,n,!1,r)&&i,o)for(e=0;e<o.length;e++)s=r.g=o[e],i=D(s,n,!1,r)&&i}function D(t,r,o,i){if(r=t.i.g[r+""],!r)return!0;r=r.concat();for(var s=!0,e=0,d;e<r.length;++e)if(d=r[e],d&&!d.ca&&d.capture==o){var l=d.listener,n=d.ia||d.src;d.fa&&$a(t.i,d),s=!1!==l.call(n,i)&&s}return s&&!i.defaultPrevented}function Gg(){var e=Cb;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}function Hg(e){ev.setTimeout(()=>{throw e},0)}function Wg(e,t){tb||Yg(),wb||(tb(),wb=!0),Cb.add(e,t)}function Yg(){var e=ev.Promise.resolve(void 0);tb=function(){e.then(Xg)}}function Xg(){for(var e;e=Gg();){try{e.h.call(e.g)}catch(e){Hg(e)}var t=rb;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wb=!1}function Qg(e,t){Kg.call(this),this.h=e||1,this.g=t||ev,this.j=ia(this.kb,this),this.l=Date.now()}function $g(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Zg(e,t,r){if("function"==typeof e)r&&(e=ia(e,r));else if(e&&"function"==typeof e.handleEvent)e=ia(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<+t?-1:ev.setTimeout(e,t||0)}function Jg(e){e.g=Zg(()=>{e.g=null,e.i&&(e.i=!1,Jg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}function ef(e){t.call(this),this.h=e,this.g={}}function E(t,r,n,o){Array.isArray(n)||(n&&(Ib[0]=n.toString()),n=Ib);for(var i=0,e;i<n.length&&(e=Pg(r,n[i],o||t.handleEvent,!1,t.h||t),!!e);i++)t.g[e.key]=e}function tf(e){ua(e.g,function(e,t){this.g.hasOwnProperty(t)&&Bg(e)},e),e.g={}}function rf(){this.g=!0}function nf(t,o,i,s,d,e){t.info(function(){if(!t.g)l=e;else if(e){for(var l="",c=e.split("&"),n=0,p;n<c.length;n++)if(p=c[n].split("="),1<p.length){var m=p[0];p=p[1];var r=m.split("_");l=2<=r.length&&"type"==r[1]?l+(m+"="+p+"&"):l+(m+"=redacted&")}}else l=null;return"XMLHTTP REQ ("+s+") [attempt "+d+"]: "+o+"\n"+i+"\n"+l})}function of(t,r,n,o,i,e,s){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+i+"]: "+r+"\n"+n+"\n"+e+" "+s})}function af(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+sf(e,r)+(n?" "+n:"")})}function F(e,t){e.info(function(){return"TIMEOUT: "+t})}function sf(t,r){if(!t.g)return r;if(!r)return null;try{var n=JSON.parse(r);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var o=n[t];if(!(2>o.length)){var i=o[1];if(Array.isArray(i)&&!(1>i.length)){var e=i[0];if("noop"!=e&&"stop"!=e&&"close"!=e)for(var s=1;s<i.length;s++)i[s]=""}}}return pb(n)}catch(e){return r}}function df(){return H=H||new Kg}function lf(e){Ra.call(this,Jb.Ma,e)}function cf(e){const t=df();C(t,new lf(t,e))}function I(e,t){Ra.call(this,Jb.STAT_EVENT,e),this.stat=t}function mf(e){const t=df();C(t,new I(t,e))}function J(e,t){Ra.call(this,Jb.Na,e),this.size=t}function pf(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ev.setTimeout(function(){e()},t)}function K(){}function uf(e){return e.h||(e.h=e.i())}function gf(){}function ff(){Ra.call(this,"d")}function ac(){Ra.call(this,"c")}function bc(){}function dc(e,t,r,n){this.l=e,this.j=t,this.m=r,this.X=n||1,this.V=new ef(this),this.P=cc,e=Ia?125:void 0,this.W=new Qg(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new M}function M(){this.i=null,this.g="",this.h=!1}function fc(e,t,r){e.K=1,e.v=R(U(t)),e.s=r,e.U=!0,ic(e,null)}function ic(e,t){e.F=Date.now(),vc(e),e.A=U(e.v);var r=e.A,n=e.X;Array.isArray(n)||(n=[n+""]),ed(r.h,"t",n),e.C=0,r=e.l.H,e.h=new M,e.g=Ec(e.l,r?t:null,!e.s),0<e.O&&(e.L=new Ab(ia(e.Ia,e,e.g),e.O)),E(e.V,e.g,"readystatechange",e.gb),t=e.H?xa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),cf(1),nf(e.j,e.u,e.A,e.m,e.X,e.s)}function kc(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Ba}function qc(t,r,n){let o=!0,i;for(;!t.I&&t.C<n.length;)if(i=tc(t,n),i==gc){4==r&&(t.o=4,mf(14),o=!1),af(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ec){t.o=4,mf(15),af(t.j,t.m,n,"[Invalid Chunk]"),o=!1;break}else af(t.j,t.m,i,null),P(t,i);kc(t)&&i!=gc&&i!=ec&&(t.h.g="",t.C=0),4!=r||0!=n.length||t.h.h||(t.o=1,mf(16),o=!1),t.i=t.i&&o,o?0<n.length&&!t.aa&&(t.aa=!0,r=t.l,r.g==t&&r.$&&!r.L&&(r.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bc(r),r.L=!0,mf(11))):(af(t.j,t.m,n,"[Invalid Chunked Response]"),rc(t),pc(t))}function tc(e,t){var r=e.C,n=t.indexOf("\n",r);return-1==n?gc:(r=+t.substring(r,n),isNaN(r))?ec:(n+=1,n+r>t.length)?gc:(t=t.substr(n,r),e.C=n+r,t)}function vc(e){e.Y=Date.now()+e.P,lc(e,e.P)}function lc(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pf(ia(e.eb,e),t)}function xc(e){e.B&&(ev.clearTimeout(e.B),e.B=null)}function pc(e){0==e.l.G||e.I||zc(e.l,e)}function rc(e){xc(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$g(e.W),tf(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function P(t,r){try{var o=t.l;if(0!=o.G&&(o.g==t||Cc(o.i,t)))if(o.I=t.N,!t.J&&Cc(o.i,t)&&3==o.G){try{var i=o.Ca.g.parse(r)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){a:if(!o.u){if(o.g)if(o.g.F+3E3<t.F)Rd(o),Ic(o);else break a;Gc(o),mf(18)}}else o.ta=s[1],0<o.ta-o.U&&37500>s[2]&&o.N&&0==o.A&&!o.v&&(o.v=pf(ia(o.ab,o),6E3));if(1>=id(o.i)&&o.ka){try{o.ka()}catch(e){}o.ka=void 0}}else Od(o,11)}else if((t.J||o.g==t)&&Rd(o),!ra(r))for(s=o.Ca.g.parse(r),r=0;r<s.length;r++){let c=s[r];if(o.U=c[0],c=c[1],2!=o.G)3==o.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Od(o,7):Id(o):"noop"!=c[0]&&o.j&&o.j.wa(c),o.A=0);else if("c"==c[0]){o.J=c[1],o.la=c[2];const s=c[3];null!=s&&(o.ma=s,o.h.info("VER="+o.ma));const r=c[4];null!=r&&(o.za=r,o.h.info("SVER="+o.za));const m=c[5];null!=m&&"number"==typeof m&&0<m&&(i=1.5*m,o.K=i,o.h.info("backChannelRequestTimeoutMs_="+i)),i=o;const p=t.g;if(p){const t=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var e=i.i;!e.g&&(sa(t,"spdy")||sa(t,"quic")||sa(t,"h2"))&&(e.j=e.l,e.g=new Set,e.h&&(yc(e,e.h),e.h=null))}if(i.D){const e=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Sc(i.F,i.D,e))}}o.G=3,o.j&&o.j.xa(),o.$&&(o.O=Date.now()-t.F,o.h.info("Handshake RTT: "+o.O+"ms")),i=o;var d=t;if(i.oa=Ld(i,i.H?i.la:null,i.W),d.J){Dc(i.i,d);var l=d,n=i.K;n&&l.setTimeout(n),l.B&&(xc(l),vc(l)),i.g=d}else Pd(i);0<o.l.length&&Md(o)}else"stop"!=c[0]&&"close"!=c[0]||Od(o,7)}cf(4)}catch(e){}}function sc(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(aa(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}function Jc(t,r){if(t.forEach&&"function"==typeof t.forEach)t.forEach(r,void 0);else if(aa(t)||"string"==typeof t)ma(t,r,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(aa(t)||"string"==typeof t){n=[];for(var o=t.length,i=0;i<o;i++)n.push(i)}else for(i in n=[],o=0,t)n[o++]=i;o=sc(t),i=o.length;for(var e=0;e<i;e++)r.call(void 0,o[e],n&&n[e],t)}}function Kc(e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Kc)for(t=e.T(),r=0;r<t.length;r++)this.set(t[r],e.get(t[r]));else for(r in e)this.set(r,e[r])}function S(t){if(t.i!=t.g.length){for(var r=0,n=0,o;r<t.g.length;)o=t.g[r],Lc(t.h,o)&&(t.g[n++]=o),r++;t.g.length=n}if(t.i!=t.g.length){var i={};for(n=r=0;r<t.g.length;)o=t.g[r],Lc(i,o)||(t.g[n++]=o,i[o]=1),r++;t.g.length=n}}function Lc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(t,r){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var o=t[n].indexOf("="),i=null;if(0<=o){var e=t[n].substring(0,o);i=t[n].substring(o+1)}else e=t[n];r(e,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nc(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Nc){this.g=void 0===t?e.g:t,N(this,e.j),this.s=e.s,Oc(this,e.i),Pc(this,e.m),this.l=e.l,t=e.h;var r=new cd;r.i=t.i,t.g&&(r.g=new Kc(t.g),r.h=t.h),Qc(this,r),this.o=e.o}else e&&(r=(e+"").match(hc))?(this.g=!!t,N(this,r[1]||"",!0),this.s=bd(r[2]||""),Oc(this,r[3]||"",!0),Pc(this,r[4]),this.l=bd(r[5]||"",!0),Qc(this,r[6]||"",!0),this.o=bd(r[7]||"")):(this.g=!!t,this.h=new cd(null,this.g))}function U(e){return new Nc(e)}function N(e,t,r){e.j=r?bd(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oc(e,t,r){e.i=r?bd(t,!0):t}function Pc(e,t){if(t){if(t=+t,isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qc(e,t,r){t instanceof cd?(e.h=t,W(e.h,e.g)):(r||(t=Tc(t,Wc)),e.h=new cd(t,e.g))}function Sc(e,t,r){e.h.set(t,r)}function R(e){return Sc(e,"zx",r(2147483648*Math.random()).toString(36)+Lb(r(2147483648*Math.random())^Date.now()).toString(36)),e}function jc(e){return e instanceof Nc?U(e):new Nc(e,void 0)}function ad(t,r,n,o){var i=new Nc(null,void 0);return t&&N(i,t),r&&Oc(i,r),n&&Pc(i,n),o&&(i.l=o),i}function bd(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Tc(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,Uc),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Uc(e){return e=e.charCodeAt(0),"%"+(15&e>>4).toString(16)+(15&e).toString(16)}function cd(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rc(e){e.g||(e.g=new Kc,e.h=0,e.i&&T(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function V(e,t){Rc(e),t=mc(e,t),Lc(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Lc(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&S(e)))}function dd(e,t){return Rc(e),t=mc(e,t),Lc(e.g.h,t)}function ed(e,t,r){V(e,t),0<r.length&&(e.i=null,e.g.set(mc(e,t),qa(r)),e.h+=r.length)}function mc(e,t){return t+="",e.j&&(t=t.toLowerCase()),t}function W(e,t){t&&!e.j&&(Rc(e),e.i=null,e.g.forEach(function(t,r){var n=r.toLowerCase();r!=n&&(V(this,r),ed(this,n,t))},e)),e.j=t}function Zc(e){this.l=e||fd,ev.PerformanceNavigationTiming?(e=ev.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(ev.g&&ev.g.Ea&&ev.g.Ea()&&ev.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gd(e){return!!e.h||!!e.g&&e.g.size>=e.j}function id(e){return e.h?1:e.g?e.g.size:0}function Cc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yc(e,t){e.g?e.g.add(t):e.h=t}function Dc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Fc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const r of e.g.values())t=t.concat(r.D);return t}return qa(e.i)}function jd(){}function kd(){this.g=new jd}function ld(e,t,r){const n=r||"";try{Jc(e,function(r,e){let o=r;ba(r)&&(o=pb(r)),t.push(n+e+"="+encodeURIComponent(o))})}catch(r){throw t.push(n+"type="+encodeURIComponent("_badmap")),r}}function md(e,t){const r=new rf;if(ev.Image){const n=new Image;n.onload=q(nd,r,n,"TestLoadImage: loaded",!0,t),n.onerror=q(nd,r,n,"TestLoadImage: error",!1,t),n.onabort=q(nd,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=q(nd,r,n,"TestLoadImage: timeout",!1,t),ev.setTimeout(function(){n.ontimeout&&n.ontimeout()},1E4),n.src=e}else t(!1)}function nd(t,r,n,o,i){try{r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null,i(o)}catch(e){}}function od(e){this.l=e.$b||null,this.j=e.ib||!1}function pd(e,t){Kg.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=hd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}function qd(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ud(e){e.readyState=4,e.l=null,e.j=null,e.A=null,td(e)}function td(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function sd(e){Kg.call(this),this.headers=new Kc,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vd,this.K=this.L=!1}function X(e){return Ha&&Ma()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}function Bd(e){return"content-type"==e.toLowerCase()}function pa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zd(e),Ed(e)}function zd(e){e.D||(e.D=!0,C(e,"complete"),C(e,"error"))}function Cd(t){if(t.h&&"undefined"!=typeof Jx&&(!t.C[1]||4!=Ad(t)||2!=t.ba()))if(t.v&&4==Ad(t))Zg(t.Fa,0,t);else if(C(t,"readystatechange"),4==Ad(t)){t.h=!1;try{const l=t.ba();a:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break a;default:r=!1;}var o;if(!(o=r)){var i;if(i=0===l){var n=(t.H+"").match(hc)[1]||null;if(!n&&ev.self&&ev.self.location){var s=ev.self.location.protocol;n=s.substr(0,s.length-1)}i=!wd.test(n?n.toLowerCase():"")}o=i}if(o)C(t,"complete"),C(t,"success");else{t.m=6;try{var d=2<Ad(t)?t.g.statusText:""}catch(e){d=""}t.j=d+" ["+t.ba()+"]",zd(t)}}finally{Ed(t)}}}function Ed(e,t){if(e.g){Dd(e);const r=e.g,n=e.C[0]?Lg:null;e.g=null,e.C=null,t||C(e,"ready");try{r.onreadystatechange=n}catch(t){}}}function Dd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ev.clearTimeout(e.A),e.A=null)}function Ad(e){return e.g?e.g.readyState:0}function O(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case vd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer;}return null}catch(e){return null}}function oc(e){let t="";return ua(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function Fd(e,t,r){a:{for(n in r){var n=!1;break a}n=!0}n||(r=oc(r),"string"==typeof e?null!=r&&encodeURIComponent(r+""):Sc(e,t,r))}function Gd(e,t,r){return r&&r.internalChannelParams?r.internalChannelParams[e]||t:t}function Hd(e){this.za=0,this.l=[],this.h=new rf,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Gd("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Gd("baseRetryDelayMs",5E3,e),this.$a=Gd("retryDelaySeedMs",1E4,e),this.Ya=Gd("forwardChannelMaxRetries",2,e),this.ra=Gd("forwardChannelRequestTimeoutMs",2E4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Zc(e&&e.concurrentRequestLimit),this.Ca=new kd,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Id(e){if(Ac(e),3==e.G){var t=e.V++,r=U(e.F);Sc(r,"SID",e.J),Sc(r,"RID",t),Sc(r,"TYPE","terminate"),Qd(e,r),t=new dc(e,e.h,t,void 0),t.K=2,t.v=R(U(r)),r=!1,ev.navigator&&ev.navigator.sendBeacon&&(r=ev.navigator.sendBeacon(t.v.toString(),"")),!r&&ev.Image&&(new Image().src=t.v,r=!0),r||(t.g=Ec(t.l,null),t.g.ea(t.v)),t.F=Date.now(),vc(t)}Q(e)}function Ic(e){e.g&&(Bc(e),e.g.cancel(),e.g=null)}function Ac(e){Ic(e),e.u&&(ev.clearTimeout(e.u),e.u=null),Rd(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ev.clearTimeout(e.m),e.m=null)}function Jd(e,t){e.l.push(new Yc(e.Za++,t)),3==e.G&&Md(e)}function Md(e){gd(e.i)||e.m||(e.m=!0,Wg(e.Ha,e),e.C=0)}function Hc(e,t){return!(id(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pf(ia(e.Ha,e,t),uc(e,e.C)),e.C++,!0))}function Nd(e,t){var r=t?t.m:e.V++;const n=U(e.F);Sc(n,"SID",e.J),Sc(n,"RID",r),Sc(n,"AID",e.U),Qd(e,n),e.o&&e.s&&Fd(n,e.o,e.s),r=new dc(e,e.h,r,e.C+1),null===e.o&&(r.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Kd(e,r,1E3),r.setTimeout(Mb(.5*e.ra)+Mb(.5*e.ra*Math.random())),yc(e.i,r),fc(r,n,t)}function Qd(e,t){e.j&&Jc({},function(e,r){Sc(t,r,e)})}function Kd(t,r,o){o=Pb(t.l.length,o);var n=t.j?ia(t.j.Oa,t.j,t):null;a:{var i=t.l;for(let e=-1;;){const t=["count="+o];-1==e?0<o?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let d=0,l;d<o;d++){l=i[d].h;const o=i[d].g;if(l-=e,0>l)e=Db(0,i[d].h-100),s=!1;else try{ld(o,t,"req"+l+"_")}catch(e){n&&n(o)}}if(s){n=t.join("&");break a}}}return t=t.l.splice(0,o),r.D=t,n}function Pd(e){e.g||e.u||(e.Y=1,Wg(e.Ga,e),e.A=0)}function Gc(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pf(ia(e.Ga,e),uc(e,e.A)),e.A++,!0)}function Bc(e){null!=e.B&&(ev.clearTimeout(e.B),e.B=null)}function wc(e){e.g=new dc(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=U(e.oa);Sc(t,"RID","rpc"),Sc(t,"SID",e.J),Sc(t,"CI",e.N?"0":"1"),Sc(t,"AID",e.U),Qd(e,t),Sc(t,"TYPE","xmlhttp"),e.o&&e.s&&Fd(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var r=e.g;e=e.la,r.K=1,r.v=R(U(t)),r.s=null,r.U=!0,ic(r,e)}function Rd(e){null!=e.v&&(ev.clearTimeout(e.v),e.v=null)}function zc(t,r){var n=null;if(t.g==r){Rd(t),Bc(t),t.g=null;var o=2}else if(Cc(t.i,r))n=r.D,Dc(t.i,r),o=1;else return;if(t.I=r.N,0!=t.G)if(r.i){if(1==o){n=r.s?r.s.length:0,r=Date.now()-r.F;var i=t.C;o=df(),C(o,new J(o,n,r,i)),Md(t)}else Pd(t);}else if(i=r.o,3==i||0==i&&0<t.I||!(1==o&&Hc(t,r)||2==o&&Gc(t)))switch(n&&0<n.length&&(r=t.i,r.i=r.i.concat(n)),i){case 1:Od(t,5);break;case 4:Od(t,10);break;case 3:Od(t,6);break;default:Od(t,2);}}function uc(e,t){let n=e.Pa+r(Math.random()*e.$a);return e.j||(n*=2),n*t}function Od(e,t){if(e.h.info("Error code "+t),2==t){var r=null;e.j&&(r=null);var n=ia(e.jb,e);r||(r=new Nc("//www.google.com/images/cleardot.gif"),ev.location&&"http"==ev.location.protocol||N(r,"https"),R(r)),md(r.toString(),n)}else mf(2);e.G=0,e.j&&e.j.va(t),Q(e),Ac(e)}function Q(e){e.G=0,e.I=-1,e.j&&((0!=Fc(e.i).length||0!=e.l.length)&&(e.i.i.length=0,qa(e.l),e.l.length=0),e.j.ua())}function Ld(e,t,r){let n=jc(r);if(""!=n.i)t&&Oc(n,t+"."+n.i),Pc(n,n.m);else{const o=ev.location;n=ad(o.protocol,t?t+"."+o.hostname:o.hostname,+o.port,r)}return e.aa&&ua(e.aa,function(t,e){Sc(n,e,t)}),t=e.D,r=e.sa,t&&r&&Sc(n,t,r),Sc(n,"VER",e.ma),Qd(e,n),n}function Ec(e,t,r){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=r&&e.Ba&&!e.qa?new sd(new od({ib:!0})):new sd(e.qa),t.L=e.H,t}function nc(){}function Sd(){if(Ha&&!(10<=+Ta))throw Error("Environmental error: no available transport.")}function Td(e,t){Kg.call(this),this.g=new Hd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ra(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ra(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Vd(this)}function Y(e){ff.call(this);var t=e.__sm__;if(t){a:{for(const r in t){e=r;break a}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ud(){ac.call(this),this.status=1}function Vd(e){this.g=e}function Z(){return uv.logLevel}function bf(r,...t){if(uv.logLevel<=zh.DEBUG){const e=t.map($);uv.debug(`Firestore (${pv}): ${r}`,...e)}}function hf(r,...t){if(uv.logLevel<=zh.ERROR){const e=t.map($);uv.error(`Firestore (${pv}): ${r}`,...e)}}function wf(r,...t){if(uv.logLevel<=LogLevel.WARN){const e=t.map($);uv.warn(`Firestore (${pv}): ${r}`,...e)}}function $(r){if("string"==typeof r)return r;try{return n=r,JSON.stringify(n)}catch(t){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r="Unexpected state"){const t=`FIRESTORE (${pv}) INTERNAL ASSERTION FAILED: `+r;throw hf(t),new Error(t)}function xf(e){e||yf()}function vf(e){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(o){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(o);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<o;t++)i[t]=r(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(r,t){return r<t?-1:r>t?1:0}function rt(r,o,e){return r.length===o.length&&r.every((r,t)=>e(r,o[t]))}function ot(e){return e+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ht(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function lt(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(o){if(xf(!!o),"string"==typeof o){let i=0;const d=pt.exec(o);if(xf(!!d),d[1]){let e=d[1];e=(e+"000000000").substr(0,9),i=+e}const t=new Date(o);return{seconds:r(t.getTime()/1e3),nanos:i}}return{seconds:Tt(o.seconds),nanos:Tt(o.nanos)}}function Tt(e){return"number"==typeof e?e:"string"==typeof e?+e:0}function Et(e){return"string"==typeof e?gt.fromBase64String(e):gt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(r){var t,e;return"server_timestamp"===(null===(e=((null===(t=null==r?void 0:r.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===e?void 0:e.stringValue)}function Rt(r){const t=r.mapValue.fields.__previous_value__;return At(t)?Rt(t):t}function Pt(r){const t=ft(r.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return null==e}function St(e){return 0===e&&1/e==-1/0}function Dt(e){return"number"==typeof e&&Number.isInteger(e)&&!St(e)&&e<=Nb&&e>=Sb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?At(e)?4:zt(e)?9:10:yf()}function Mt(r,t){if(r===t)return!0;const e=Ct(r);if(e!==Ct(t))return!1;return!(0!==e&&9007199254740991!==e)||(1===e?r.booleanValue===t.booleanValue:4===e?Pt(r).isEqual(Pt(t)):3===e?function(r,t){if("string"==typeof r.timestampValue&&"string"==typeof t.timestampValue&&r.timestampValue.length===t.timestampValue.length)return r.timestampValue===t.timestampValue;const e=ft(r.timestampValue),n=ft(t.timestampValue);return e.seconds===n.seconds&&e.nanos===n.nanos}(r,t):5===e?r.stringValue===t.stringValue:6===e?function(r,t){return Et(r.bytesValue).isEqual(Et(t.bytesValue))}(r,t):7===e?r.referenceValue===t.referenceValue:8===e?function(r,t){return Tt(r.geoPointValue.latitude)===Tt(t.geoPointValue.latitude)&&Tt(r.geoPointValue.longitude)===Tt(t.geoPointValue.longitude)}(r,t):2===e?function(r,t){if("integerValue"in r&&"integerValue"in t)return Tt(r.integerValue)===Tt(t.integerValue);if("doubleValue"in r&&"doubleValue"in t){const e=Tt(r.doubleValue),n=Tt(t.doubleValue);return e===n?St(e)===St(n):isNaN(e)&&isNaN(n)}return!1}(r,t):9===e?rt(r.arrayValue.values||[],t.arrayValue.values||[],Mt):10===e?function(r,t){const e=r.mapValue.fields||{},n=t.mapValue.fields||{};if(ut(e)!==ut(n))return!1;for(const o in e)if(e.hasOwnProperty(o)&&(void 0===n[o]||!Mt(e[o],n[o])))return!1;return!0}(r,t):yf())}function Ot(r,n){return void 0!==(r.values||[]).find((e)=>Mt(e,n))}function Ft(r,t){if(r===t)return 0;const e=Ct(r),n=Ct(t);if(e!==n)return st(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return st(r.booleanValue,t.booleanValue);case 2:return function(r,t){const e=Tt(r.integerValue||r.doubleValue),n=Tt(t.integerValue||t.doubleValue);return e<n?-1:e>n?1:e===n?0:isNaN(e)?isNaN(n)?0:-1:1}(r,t);case 3:return $t(r.timestampValue,t.timestampValue);case 4:return $t(Pt(r),Pt(t));case 5:return st(r.stringValue,t.stringValue);case 6:return function(r,t){const e=Et(r),n=Et(t);return e.compareTo(n)}(r.bytesValue,t.bytesValue);case 7:return function(r,t){const o=r.split("/"),n=t.split("/");for(let i=0;i<o.length&&i<n.length;i++){const t=st(o[i],n[i]);if(0!==t)return t}return st(o.length,n.length)}(r.referenceValue,t.referenceValue);case 8:return function(r,t){const e=st(Tt(r.latitude),Tt(t.latitude));return 0===e?st(Tt(r.longitude),Tt(t.longitude)):e}(r.geoPointValue,t.geoPointValue);case 9:return function(r,t){const o=r.values||[],n=t.values||[];for(let i=0;i<o.length&&i<n.length;++i){const t=Ft(o[i],n[i]);if(t)return t}return st(o.length,n.length)}(r.arrayValue,t.arrayValue);case 10:return function(o,t){const d=o.fields||{},n=Object.keys(d),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let r=0;r<n.length&&r<i.length;++r){const t=st(n[r],i[r]);if(0!==t)return t;const e=Ft(d[n[r]],s[i[r]]);if(0!==e)return e}return st(n.length,i.length)}(r.mapValue,t.mapValue);default:throw yf();}}function $t(r,o){if("string"==typeof r&&"string"==typeof o&&r.length===o.length)return st(r,o);const d=ft(r),n=ft(o),s=st(d.seconds,n.seconds);return 0===s?st(d.nanos,n.nanos):s}function Bt(e){return Lt(e)}function Lt(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(r){const t=ft(r);return`time(${t.seconds},${t.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?Et(r.bytesValue).toBase64():"referenceValue"in r?(e=r.referenceValue,vt.fromName(e).toString()):"geoPointValue"in r?`geo(${(t=r.geoPointValue).latitude},${t.longitude})`:"arrayValue"in r?function(r){let t="[",e=!0;for(const n of r.values||[])e?e=!1:t+=",",t+=Lt(n);return t+"]"}(r.arrayValue):"mapValue"in r?function(r){const t=Object.keys(r.fields||{}).sort();let e="{",n=!0;for(const o of t)n?n=!1:e+=",",e+=`${o}:${Lt(r.fields[o])}`;return e+"}"}(r.mapValue):yf();var t,e}function Ut(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function qt(e){return!!e&&"integerValue"in e}function Kt(e){return!!e&&"arrayValue"in e}function Gt(e){return!!e&&"nullValue"in e}function Qt(e){return!!e&&"doubleValue"in e&&isNaN(+e.doubleValue)}function jt(e){return!!e&&"mapValue"in e}function Wt(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&"object"==typeof r.timestampValue)return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const o={mapValue:{fields:{}}};return ht(r.mapValue.fields,(e,t)=>o.mapValue.fields[e]=Wt(t)),o}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Wt(r.arrayValue.values[e]);return t}return Object.assign({},r)}function zt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ht(e){return"nullValue"in e?Nt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Sb}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Ut(Vt.empty(),vt.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:yf()}function Jt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Sb}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Ut(Vt.empty(),vt.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?xt:yf()}function Yt(r,t){return void 0===r?t:void 0===t||0<Ft(r,t)?r:t}function Xt(r,t){return void 0===r?t:void 0===t||0>Ft(r,t)?r:t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return e.fields.find((e)=>2===e.kind)}function ie(e){return e.fields.filter((e)=>2!==e.kind)}function re(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,o=at.fromTimestamp(1e9===n?new it(e+1,0):new it(e,n));return new ue(o,vt.empty(),t)}function ae(e){return new ue(e.readTime,e.key,-1)}function ce(r,t){let e=r.readTime.compareTo(t.readTime);return 0===e?(e=vt.comparator(r.documentKey,t.documentKey),0===e?st(r.largestBatchId,t.largestBatchId):e):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(d,t=null,e=[],n=[],s=null,i=null,r=null){return new he(d,t,e,n,s,i,r)}function de(r){const n=vf(r);if(null===n.P){let e=n.path.canonicalString();null!==n.collectionGroup&&(e+="|cg:"+n.collectionGroup),e+="|f:",e+=n.filters.map((r)=>{return(t=r).field.canonicalString()+t.op.toString()+Bt(t.value);var t}).join(","),e+="|ob:",e+=n.orderBy.map((e)=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),bt(n.limit)||(e+="|l:",e+=n.limit),n.startAt&&(e+="|lb:",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map((e)=>Bt(e)).join(",")),n.endAt&&(e+="|ub:",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map((e)=>Bt(e)).join(",")),n.P=e}return n.P}function _e(r){let t=r.path.canonicalString();return null!==r.collectionGroup&&(t+=" collectionGroup="+r.collectionGroup),0<r.filters.length&&(t+=`, filters: [${r.filters.map((r)=>{return`${(t=r).field.canonicalString()} ${t.op} ${Bt(t.value)}`;var t}).join(", ")}]`),bt(r.limit)||(t+=", limit: "+r.limit),0<r.orderBy.length&&(t+=`, orderBy: [${r.orderBy.map((e)=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),r.startAt&&(t+=", startAt: ",t+=r.startAt.inclusive?"b:":"a:",t+=r.startAt.position.map((e)=>Bt(e)).join(",")),r.endAt&&(t+=", endAt: ",t+=r.endAt.inclusive?"a:":"b:",t+=r.endAt.position.map((e)=>Bt(e)).join(",")),`Target(${t})`}function we(r,t){if(r.limit!==t.limit)return!1;if(r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Pe(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let o=0;o<r.filters.length;o++)if(e=r.filters[o],n=t.filters[o],e.op!==n.op||!e.field.isEqual(n.field)||!Mt(e.value,n.value))return!1;var e,n;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ne(r.startAt,t.startAt)&&Ne(r.endAt,t.endAt)}function me(e){return vt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ge(r,n){return r.filters.filter((e)=>e instanceof fe&&e.field.isEqual(n))}function ye(o,t,e){let d=!0,l;for(const r of ge(o,t)){let n=!0,e;switch(r.op){case"<":case"<=":e=Ht(r.value);break;case"==":case"in":case">=":e=r.value;break;case">":e=r.value,n=!1;break;case"!=":case"not-in":e=Nt;}Yt(l,e)===e&&(l=e,d=n)}if(null!==e)for(let n=0;n<o.orderBy.length;++n)if(o.orderBy[n].field.isEqual(t)){const r=e.position[n];Yt(l,r)===r&&(l=r,d=e.inclusive);break}return{value:l,inclusive:d}}function pe(o,t,e){let d=!0,l;for(const r of ge(o,t)){let n=!0,e;switch(r.op){case">=":case">":e=Jt(r.value),n=!1;break;case"==":case"in":case"<=":e=r.value;break;case"<":e=r.value,n=!1;break;case"!=":case"not-in":e=xt;}Xt(l,e)===e&&(l=e,d=n)}if(null!==e)for(let n=0;n<o.orderBy.length;++n)if(o.orderBy[n].field.isEqual(t)){const r=e.position[n];Xt(l,r)===r&&(l=r,d=e.inclusive);break}return{value:l,inclusive:d}}function Ie(r,t){var e;return((null===(e=t.arrayValue)||void 0===e?void 0:e.values)||[]).map((e)=>vt.fromName(e.referenceValue))}function Pe(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}function xe(d,t,e){let n=0;for(let s=0;s<d.position.length;s++){const i=t[s],r=d.position[s];if(n=i.field.isKeyField()?vt.comparator(vt.fromName(r.referenceValue),e.key):Ft(r,e.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function Ne(r,t){if(null===r)return null===t;if(null===t)return!1;if(r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Mt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(d,t,e,n,s,i,r,o){return new Ce(d,t,e,n,s,i,r,o)}function Oe(e){return new Ce(e)}function Fe(e){return!bt(e.limit)&&"F"===e.limitType}function $e(e){return!bt(e.limit)&&"L"===e.limitType}function Be(e){return 0<e.explicitOrderBy.length?e.explicitOrderBy[0].field:null}function Le(r){for(const t of r.filters)if(t.S())return t.field;return null}function Ue(e){return null!==e.collectionGroup}function qe(r){const o=vf(r);if(null===o.D){o.D=[];const e=Le(o),t=Be(o);if(null!==e&&null===t)e.isKeyField()||o.D.push(new De(e)),o.D.push(new De(wt.keyField(),"asc"));else{let e=!1;for(const t of o.explicitOrderBy)o.D.push(t),t.field.isKeyField()&&(e=!0);if(!e){const e=0<o.explicitOrderBy.length?o.explicitOrderBy[o.explicitOrderBy.length-1].dir:"asc";o.D.push(new De(wt.keyField(),e))}}}return o.D}function Ke(r){const o=vf(r);if(!o.C)if("F"===o.limitType)o.C=le(o.path,o.collectionGroup,qe(o),o.filters,o.limit,o.startAt,o.endAt);else{const r=[];for(const t of qe(o)){const n="desc"===t.dir?"asc":"desc";r.push(new De(t.field,n))}const e=o.endAt?new Se(o.endAt.position,!o.endAt.inclusive):null,t=o.startAt?new Se(o.startAt.position,!o.startAt.inclusive):null;o.C=le(o.path,o.collectionGroup,r,o.filters,o.limit,e,t)}return o.C}function Ge(r,t,e){return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Qe(r,t){return we(Ke(r),Ke(t))&&r.limitType===t.limitType}function je(e){return`${de(Ke(e))}|lt:${e.limitType}`}function We(e){return`Query(target=${_e(Ke(e))}; limitType=${e.limitType})`}function ze(r,t){return t.isFoundDocument()&&function(r,t){const e=t.key.path;return null===r.collectionGroup?vt.isDocumentKey(r.path)?r.path.isEqual(e):r.path.isImmediateParentOf(e):t.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(e)}(r,t)&&function(r,t){for(const e of r.explicitOrderBy)if(!e.field.isKeyField()&&null===t.data.field(e.field))return!1;return!0}(r,t)&&function(r,t){for(const e of r.filters)if(!e.matches(t))return!1;return!0}(r,t)&&function(r,t){return(!r.startAt||function(r,t,e){const n=xe(r,t,e);return r.inclusive?0>=n:0>n}(r.startAt,qe(r),t))&&(!r.endAt||function(r,t,e){const n=xe(r,t,e);return r.inclusive?0<=n:0<n}(r.endAt,qe(r),t))}(r,t)}function He(e){return e.collectionGroup||(1==e.path.length%2?e.path.lastSegment():e.path.get(e.path.length-2))}function Je(r){return(o,e)=>{let n=!1;for(const s of qe(r)){const r=Ye(s,o,e);if(0!==r)return r;n=n||s.field.isKeyField()}return 0}}function Ye(r,t,e){const n=r.field.isKeyField()?vt.comparator(t.key,e.key):function(r,t,e){const n=t.data.field(r),o=e.data.field(r);return null!==n&&null!==o?Ft(n,o):yf()}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return yf();}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(r,t){if(r.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:St(t)?"-0":t}}function Ze(e){return{integerValue:""+e}}function tn(r,t){return Dt(t)?Ze(t):Xe(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(r,t,e){return r instanceof Me?function(r,t){const e={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return t&&(e.fields.__previous_value__=t),{mapValue:e}}(e,t):r instanceof un?on(r,t):r instanceof an?cn(r,t):function(r,t){const e=rn(r,t),n=ln(e)+ln(r.k);return qt(e)&&qt(r.k)?Ze(n):Xe(r.M,n)}(r,t)}function sn(r,t,e){return r instanceof un?on(r,t):r instanceof an?cn(r,t):e}function rn(r,t){return r instanceof hn?qt(e=t)||function(e){return!!e&&"doubleValue"in e}(e)?t:{integerValue:0}:null;var e}function on(r,t){const o=dn(t);for(const n of r.elements)o.some((e)=>Mt(e,n))||o.push(n);return{arrayValue:{values:o}}}function cn(r,t){let o=dn(t);for(const n of r.elements)o=o.filter((e)=>!Mt(e,n));return{arrayValue:{values:o}}}function ln(e){return Tt(e.integerValue||e.doubleValue)}function dn(e){return Kt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(r,t){return r.field.isEqual(t.field)&&function(r,t){return r instanceof un&&t instanceof un||r instanceof an&&t instanceof an?rt(r.elements,t.elements,Mt):r instanceof hn&&t instanceof hn?Mt(r.k,t.k):r instanceof Me&&t instanceof Me}(r.transform,t.transform)}function mn(r,t){return void 0===r.updateTime?void 0===r.exists||r.exists===t.isFoundDocument():t.isFoundDocument()&&t.version.isEqual(r.updateTime)}function pn(r,t,e){r instanceof yn?function(r,t,e){const n=r.value.clone(),o=vn(r.fieldTransforms,t,e.transformResults);n.setAll(o),t.convertToFoundDocument(e.version,n).setHasCommittedMutations()}(r,t,e):r instanceof bn?function(r,t,e){if(!mn(r.precondition,t))return void t.convertToUnknownDocument(e.version);const n=vn(r.fieldTransforms,t,e.transformResults),o=t.data;o.setAll(Pn(r)),o.setAll(n),t.convertToFoundDocument(e.version,o).setHasCommittedMutations()}(r,t,e):function(r,t,e){t.convertToNoDocument(e.version).setHasCommittedMutations()}(0,t,e)}function Tn(r,t,e){r instanceof yn?function(r,t,e){if(mn(r.precondition,t)){const n=r.value.clone(),o=Sn(r.fieldTransforms,e,t);n.setAll(o),t.convertToFoundDocument(Rn(t),n).setHasLocalMutations()}}(r,t,e):r instanceof bn?function(r,t,e){if(mn(r.precondition,t)){const n=Sn(r.fieldTransforms,e,t),o=t.data;o.setAll(Pn(r)),o.setAll(n),t.convertToFoundDocument(Rn(t),o).setHasLocalMutations()}}(r,t,e):function(r,t){mn(r.precondition,t)&&t.convertToNoDocument(at.min())}(r,t)}function En(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(r,t){return void 0===r&&void 0===t||r&&t&&rt(r,t,(r,t)=>_n(r,t))}(r.fieldTransforms,t.fieldTransforms)&&(0===r.type?r.value.isEqual(t.value):1!==r.type||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}function Rn(e){return e.isFoundDocument()?e.version:at.min()}function Pn(r){const t=new Map;return r.fieldMask.fields.forEach((e)=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function vn(d,t,e){const n=new Map;xf(d.length===e.length);for(let s=0;s<e.length;s++){const i=d[s],r=i.transform,o=t.data.field(i.field);n.set(i.field,sn(r,o,e[s]))}return n}function Sn(r,o,e){const n=new Map;for(const s of r){const i=s.transform,t=e.data.field(s.field);n.set(s.field,en(i,t,o))}return n}function Dn(e){return e!==gv.UNAUTHENTICATED&&(!(e!==gv.DATA_LOSS)||yf())}function On(e){if(void 0===e)return hf("GRPC error has no .code"),gv.UNKNOWN;return e===Nn.OK?gv.OK:e===Nn.CANCELLED?gv.CANCELLED:e===Nn.UNKNOWN?gv.UNKNOWN:e===Nn.DEADLINE_EXCEEDED?gv.DEADLINE_EXCEEDED:e===Nn.RESOURCE_EXHAUSTED?gv.RESOURCE_EXHAUSTED:e===Nn.INTERNAL?gv.INTERNAL:e===Nn.UNAVAILABLE?gv.UNAVAILABLE:e===Nn.UNAUTHENTICATED?gv.UNAUTHENTICATED:e===Nn.INVALID_ARGUMENT?gv.INVALID_ARGUMENT:e===Nn.NOT_FOUND?gv.NOT_FOUND:e===Nn.ALREADY_EXISTS?gv.ALREADY_EXISTS:e===Nn.PERMISSION_DENIED?gv.PERMISSION_DENIED:e===Nn.FAILED_PRECONDITION?gv.FAILED_PRECONDITION:e===Nn.ABORTED?gv.ABORTED:e===Nn.OUT_OF_RANGE?gv.OUT_OF_RANGE:e===Nn.UNIMPLEMENTED?gv.UNIMPLEMENTED:e===Nn.DATA_LOSS?gv.DATA_LOSS:yf()}function Fn(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return Kn}function jn(){return Qn}function zn(){return new Mn((e)=>e.toString(),(r,t)=>r.isEqual(t))}function Hn(...r){let t=Jn;for(const e of r)t=t.add(e);return t}function Xn(){return Yn}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return new $n(vt.comparator)}function as(){return new $n(vt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(r,t){return r.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ds(r,t){return r.N?t.toBase64():t.toUint8Array()}function _s(r,t){return cs(r,t.toTimestamp())}function ws(e){return xf(!!e),at.fromTimestamp(function(r){const t=ft(r);return new it(t.seconds,t.nanos)}(e))}function ms(r,t){return function(e){return new dt(["projects",e.projectId,"databases",e.database])}(r).child("documents").child(t).canonicalString()}function gs(r){const t=dt.fromString(r);return xf(Ks(t)),t}function ys(r,t){return ms(r.databaseId,t.path)}function ps(r,t){const e=gs(t);if(e.get(1)!==r.databaseId.projectId)throw new G(gv.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new G(gv.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new vt(As(e))}function Is(r,t){return ms(r.databaseId,t)}function Ts(r){const t=gs(r);return 4===t.length?dt.emptyPath():As(t)}function Es(e){return new dt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function As(e){return xf(4<e.length&&"documents"===e.get(4)),e.popFirst(5)}function Rs(r,t,e){return{name:ys(r,t),fields:e.value.mapValue.fields}}function Ps(d,t,e){const n=ps(d,t.name),s=ws(t.updateTime),i=new kt({mapValue:{fields:t.fields}}),r=te.newFoundDocument(n,s,i);return e&&r.setHasCommittedMutations(),e?r.setHasCommittedMutations():r}function bs(r,t){return"found"in t?function(r,t){xf(!!t.found),t.found.name,t.found.updateTime;const e=ps(r,t.found.name),n=ws(t.found.updateTime),o=new kt({mapValue:{fields:t.found.fields}});return te.newFoundDocument(e,n,o)}(r,t):"missing"in t?function(r,t){xf(!!t.missing),xf(!!t.readTime);const e=ps(r,t.missing),n=ws(t.readTime);return te.newNoDocument(e,n)}(r,t):yf()}function Vs(d,l){let e;if("targetChange"in l){l.targetChange;const t=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:yf()}(l.targetChange.targetChangeType||"NO_CHANGE"),n=l.targetChange.targetIds||[],i=function(r,t){return r.N?(xf(void 0===t||"string"==typeof t),gt.fromBase64String(t||"")):(xf(void 0===t||t instanceof Uint8Array),gt.fromUint8Array(t||new Uint8Array))}(d,l.targetChange.resumeToken),r=l.targetChange.cause,o=r&&function(r){const t=void 0===r.code?gv.UNKNOWN:On(r.code);return new G(t,r.message||"")}(r);e=new is(t,n,i,o||null)}else if("documentChange"in l){l.documentChange;const t=l.documentChange;t.document,t.document.name,t.document.updateTime;const n=ps(d,t.document.name),i=ws(t.document.updateTime),r=new kt({mapValue:{fields:t.document.fields}}),o=te.newFoundDocument(n,i,r),s=t.targetIds||[],m=t.removedTargetIds||[];e=new ns(s,m,o.key,o)}else if("documentDelete"in l){l.documentDelete;const t=l.documentDelete;t.document;const n=ps(d,t.document),i=t.readTime?ws(t.readTime):at.min(),r=te.newNoDocument(n,i),o=t.removedTargetIds||[];e=new ns([],o,r.key,r)}else if("documentRemove"in l){l.documentRemove;const t=l.documentRemove;t.document;const n=ps(d,t.document),o=t.removedTargetIds||[];e=new ns([],o,n,null)}else{if(!("filter"in l))return yf();{l.filter;const n=l.filter;n.targetId;const t=n.count||0,o=new xn(t),i=n.targetId;e=new ss(i,o)}}return e}function vs(r,t){let e;if(t instanceof yn)e={update:Rs(r,t.key,t.value)};else if(t instanceof Vn)e={delete:ys(r,t.key)};else if(t instanceof bn)e={update:Rs(r,t.key,t.data),updateMask:qs(t.fieldMask)};else{if(!(t instanceof Cn))return yf();e={verify:ys(r,t.key)}}return 0<t.fieldTransforms.length&&(e.updateTransforms=t.fieldTransforms.map((e)=>function(r,t){const e=t.transform;if(e instanceof Me)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(e instanceof un)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:e.elements}};if(e instanceof an)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:e.elements}};if(e instanceof hn)return{fieldPath:t.field.canonicalString(),increment:e.k};throw yf()}(0,e))),t.precondition.isNone||(e.currentDocument=function(r,t){return void 0===t.updateTime?void 0===t.exists?yf():{exists:t.exists}:{updateTime:_s(r,t.updateTime)}}(r,t.precondition)),e}function Ss(o,d){const e=d.currentDocument?function(e){return void 0===e.updateTime?void 0===e.exists?gn.none():gn.exists(e.exists):gn.updateTime(ws(e.updateTime))}(d.currentDocument):gn.none(),n=d.updateTransforms?d.updateTransforms.map((t)=>function(r,o){let e=null;if("setToServerValue"in o)xf("REQUEST_TIME"===o.setToServerValue),e=new Me;else if("appendMissingElements"in o){const r=o.appendMissingElements.values||[];e=new un(r)}else if("removeAllFromArray"in o){const r=o.removeAllFromArray.values||[];e=new an(r)}else"increment"in o?e=new hn(r,o.increment):yf();const t=wt.fromServerFormat(o.fieldPath);return new fn(t,e)}(o,t)):[];if(d.update){d.update.name;const s=ps(o,d.update.name),i=new kt({mapValue:{fields:d.update.fields}});if(d.updateMask){const r=function(r){const t=r.fieldPaths||[];return new mt(t.map((e)=>wt.fromServerFormat(e)))}(d.updateMask);return new bn(s,i,r,e,n)}return new yn(s,i,e,n)}if(d.delete){const t=ps(o,d.delete);return new Vn(t,e)}if(d.verify){const t=ps(o,d.verify);return new Cn(t,e)}return yf()}function Ds(r,n){return r&&0<r.length?(xf(void 0!==n),r.map((e)=>function(r,t){let e=r.updateTime?ws(r.updateTime):ws(t);return e.isEqual(at.min())&&(e=ws(t)),new wn(e,r.transformResults||[])}(e,n))):[]}function Cs(r,t){return{documents:[Is(r,t.path)]}}function xs(d,t){const e={structuredQuery:{}},n=t.path;null===t.collectionGroup?(e.parent=Is(d,n.popLast()),e.structuredQuery.from=[{collectionId:n.lastSegment()}]):(e.parent=Is(d,n),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]);const s=function(r){if(0!==r.length){const t=r.map((e)=>function(e){if("=="===e.op){if(Qt(e.value))return{unaryFilter:{field:$s(e.field),op:"IS_NAN"}};if(Gt(e.value))return{unaryFilter:{field:$s(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Qt(e.value))return{unaryFilter:{field:$s(e.field),op:"IS_NOT_NAN"}};if(Gt(e.value))return{unaryFilter:{field:$s(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(e.field),op:Fs(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}}(t.filters);s&&(e.structuredQuery.where=s);const i=function(e){return 0===e.length?void 0:e.map((e)=>function(e){return{field:$s(e.field),direction:Os(e.dir)}}(e))}(t.orderBy);i&&(e.structuredQuery.orderBy=i);const r=function(r,t){return r.N||bt(t)?t:{value:t}}(d,t.limit);var o;return null!==r&&(e.structuredQuery.limit=r),t.startAt&&(e.structuredQuery.startAt={before:(o=t.startAt).inclusive,values:o.position}),t.endAt&&(e.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),e}function Ns(d){let l=Ts(d.parent);const e=d.structuredQuery,n=e.from?e.from.length:0;let s=null;if(0<n){xf(1===n);const r=e.from[0];r.allDescendants?s=r.collectionId:l=l.child(r.collectionId)}let t=[];e.where&&(t=Ms(e.where));let r=[];e.orderBy&&(r=e.orderBy.map((e)=>function(e){return new De(Bs(e.field),function(e){return"ASCENDING"===e?"asc":"DESCENDING"===e?"desc":void 0}(e.direction))}(e)));let o=null;e.limit&&(o=function(r){let n;return n="object"==typeof r?r.value:r,bt(n)?null:n}(e.limit));let i=null;e.startAt&&(i=function(r){const t=!!r.before,e=r.values||[];return new Se(e,t)}(e.startAt));let m=null;return e.endAt&&(m=function(r){const t=!r.before,e=r.values||[];return new Se(e,t)}(e.endAt)),ke(l,s,r,t,o,"F",i,m)}function ks(r,t){const e=function(r,t){return 0===t?null:1===t?"existence-filter-mismatch":2===t?"limbo-document":yf()}(0,t.purpose);return null==e?null:{"goog-listen-tags":e}}function Ms(e){return e?void 0===e.unaryFilter?void 0===e.fieldFilter?void 0===e.compositeFilter?yf():e.compositeFilter.filters.map((e)=>Ms(e)).reduce((r,t)=>r.concat(t)):[Ls(e)]:[Us(e)]:[]}function Os(e){return us[e]}function Fs(e){return hs[e]}function $s(e){return{fieldPath:e.canonicalString()}}function Bs(e){return wt.fromServerFormat(e.fieldPath)}function Ls(e){return fe.create(Bs(e.fieldFilter.field),function(e){return"EQUAL"===e?"==":"NOT_EQUAL"===e?"!=":"GREATER_THAN"===e?">":"GREATER_THAN_OR_EQUAL"===e?">=":"LESS_THAN"===e?"<":"LESS_THAN_OR_EQUAL"===e?"<=":"ARRAY_CONTAINS"===e?"array-contains":"IN"===e?"in":"NOT_IN"===e?"not-in":"ARRAY_CONTAINS_ANY"===e?"array-contains-any":yf()}(e.fieldFilter.op),e.fieldFilter.value)}function Us(r){switch(r.unaryFilter.op){case"IS_NAN":const t=Bs(r.unaryFilter.field);return fe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const e=Bs(r.unaryFilter.field);return fe.create(e,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Bs(r.unaryFilter.field);return fe.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(r.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return yf();}}function qs(r){const n=[];return r.fields.forEach((e)=>n.push(e.canonicalString())),{fieldPaths:n}}function Ks(e){return 4<=e.length&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(r){let t="";for(let e=0;e<r.length;e++)0<t.length&&(t=js(t)),t=Qs(r.get(e),t);return js(t)}function Qs(r,t){let o=t;const n=r.length;for(let i=0;i<n;i++){const e=r.charAt(i);o+="\0"===e?"\x01\x10":"\x01"===e?"\x01\x11":e}return o}function js(e){return e+"\x01\x01"}function Ws(d){const t=d.length;if(xf(2<=t),2===t)return xf("\x01"===d.charAt(0)&&"\x01"===d.charAt(1)),dt.emptyPath();const l=[];let s="";for(let i=0;i<t;){const t=d.indexOf("\x01",i);switch((0>t||t>e)&&yf(),d.charAt(t+1)){case"\x01":const e=d.substring(i,t);let r;0===s.length?r=e:(s+=e,r=s,s=""),l.push(r);break;case"\x10":s+=d.substring(i,t),s+="\0";break;case"\x11":s+=d.substring(i,t+1);break;default:yf();}i=t+2}return new dt(l)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(r,t){return[r,Gs(t)]}function Js(r,t,e){return[r,Gs(t),e]}function Ys(e){return"IndexedDbTransactionError"===e.name}function Ri(r){return new gi((o,i)=>{r.onsuccess=(e)=>{const t=e.target.result;o(t)},r.onerror=(r)=>{const t=bi(r.target.error);i(t)}})}function bi(r){const t=Ii.Vt(getUA());if(12.2<=t&&13>t){const n="An internal error was encountered in the Indexed Database server";if(0<=r.message.indexOf(n)){const e=new G("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pi||(Pi=!0,setTimeout(()=>{throw e},0)),e}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(r,t){const e=vf(r);return Ii.xt(e.Ht,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(r,o){let e;if(o.document)e=Ps(r.Jt,o.document,!!o.hasCommittedMutations);else if(o.noDocument){const r=vt.fromSegments(o.noDocument.path),t=Bi(o.noDocument.readTime);e=te.newNoDocument(r,t),o.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!o.unknownDocument)return yf();{const r=vt.fromSegments(o.unknownDocument.path),t=Bi(o.unknownDocument.version);e=te.newUnknownDocument(r,t)}}return o.readTime&&e.setReadTime(function(r){const t=new it(r[0],r[1]);return at.fromTimestamp(t)}(o.readTime)),e}function Oi(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Fi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(r,t){return{name:ys(r,t.key),fields:t.data.value.mapValue.fields,updateTime:cs(r,t.version.toTimestamp())}}(r.Jt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:$i(t.version)};else{if(!t.isUnknownDocument())return yf();n.unknownDocument={path:e.path.toArray(),version:$i(t.version)}}return n}function Fi(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function $i(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Bi(r){const t=new it(r.seconds,r.nanoseconds);return at.fromTimestamp(t)}function Li(r,o){const e=(o.baseMutations||[]).map((t)=>Ss(r.Jt,t));for(let e=0;e<o.mutations.length-1;++e){const t=o.mutations[e];if(e+1<o.mutations.length&&void 0!==o.mutations[e+1].transform){const r=o.mutations[e+1];t.updateTransforms=r.transform.fieldTransforms,o.mutations.splice(e+1,1),++e}}const t=o.mutations.map((t)=>Ss(r.Jt,t)),n=it.fromMillis(o.localWriteTimeMs);return new Si(o.batchId,n,e,t)}function Ui(r){const t=Bi(r.readTime),e=void 0===r.lastLimboFreeSnapshotVersion?at.min():Bi(r.lastLimboFreeSnapshotVersion);let n;var o;return void 0===r.query.documents?n=function(e){return Ke(Ns(e))}(r.query):(xf(1===(o=r.query).documents.length),n=Ke(Oe(Ts(o.documents[0])))),new Ni(n,r.targetId,0,r.lastListenSequenceNumber,t,e,gt.fromBase64String(r.resumeToken))}function qi(o,t){const e=$i(t.snapshotVersion),d=$i(t.lastLimboFreeSnapshotVersion);let l=me(t.target)?Cs(o.Jt,t.target):xs(o.Jt,t.target);const c=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:de(t.target),readTime:e,resumeToken:c,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:d,query:l}}function Ki(r){const t=Ns({parent:r.parent,structuredQuery:r.structuredQuery});return"LAST"===r.limitType?Ge(t,t.limit,"L"):t}function Gi(r,t){return new xi(t.largestBatchId,Ss(r.Jt,t.overlayMutation))}function Qi(r,t){const e=t.path.lastSegment();return[r,Gs(t.path.popLast()),e]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){return vi(e,"bundles")}function zi(e){return vi(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e){return vi(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(r){if(0===r)return 8;let t=0;return 0==r>>4&&(t+=4,r<<=4),0==r>>6&&(t+=2,r<<=2),0==r>>7&&(t+=1),t}function Zi(r){const t=64-function(r){let t=0;for(let e=0;8>e;++e){const n=Yi(255&r[e]);if(t+=n,8!==n)break}return t}(r);return Math.ceil(t/8)}function tr(r,t){let e=r.indexId-t.indexId;return 0===e?(e=or(r.arrayValue,t.arrayValue),0===e?(e=or(r.directionalValue,t.directionalValue),0===e?vt.comparator(r.documentKey,t.documentKey):e):e):e}function or(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(0!=n)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){return vi(e,"collectionParents")}function dr(e){return vi(e,"indexEntries")}function _r(e){return vi(e,"indexConfiguration")}function wr(e){return vi(e,"indexState")}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(d,l,e){const t=d.store("mutations"),n=d.store("documentMutations"),i=[],r=IDBKeyRange.only(e.batchId);let s=0;const m=t.Wt({range:r},(r,t,e)=>(s++,e.delete()));i.push(m.next(()=>{xf(1==s)}));const p=[];for(const r of e.mutations){const t=Js(l,r.key.path,e.batchId);i.push(n.delete(t)),p.push(r.key)}return gi.waitFor(i).next(()=>p)}function pr(r){if(!r)return 0;let n;if(r.document)n=r.document;else if(r.unknownDocument)n=r.unknownDocument;else{if(!r.noDocument)throw yf();n=r.noDocument}return JSON.stringify(n).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(d,l,e){const t=zs(l,e.path),c=t[1],n=IDBKeyRange.lowerBound(t);let i=!1;return Ar(d).Wt({range:n,jt:!0},(e,t,n)=>{const[o,r,s]=e;o===l&&r===c&&(i=!0),n.done()}).next(()=>i)}function Er(e){return vi(e,"mutations")}function Ar(e){return vi(e,"documentMutations")}function Rr(e){return vi(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){return vi(e,"targets")}function vr(e){return vi(e,"targetGlobal")}function Sr(e){return vi(e,"targetDocuments")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e){if(e.code!==gv.FAILED_PRECONDITION||e.message!==mi)throw e;bf("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr([r,t],[e,n]){const o=st(r,e);return 0===o?st(t,n):o}function xr(r,t){return Sr(r).put(function(r,t){return{targetId:0,path:Gs(r.path),sequenceNumber:t}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){return vi(e,"remoteDocumentGlobal")}function Ur(e){return vi(e,"remoteDocumentsV14")}function qr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Kr(r,t){const e=t.documentKey.path.toArray();return[r,Fi(t.readTime),e.slice(0,e.length-2),0<e.length?e[e.length-1]:""]}function Gr(r,t){const e=r.path.toArray(),n=t.path.toArray();let o=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(o=st(e[i],n[i]),o)return o;return o=st(e.length,n.length),o||(o=st(e[e.length-2],n[n.length-2]),o||st(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e){e.createObjectStore("targetDocuments",{keyPath:ni}).createIndex("documentTargetsIndex",Iv,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xs,{unique:!0}),e.createObjectStore("targetGlobal")}function Wr(e){return vi(e,"owner")}function Jr(e){return vi(e,"clientMetadata")}function Yr(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(r,t,e,n){return new eo(r,t,e,n)}async function so(r,o){const d=vf(r);return await d.persistence.runTransaction("Handle user change","readonly",(n)=>{let e;return d.Bs.getAllMutationBatches(n).next((t)=>(e=t,d.ai(o),d.Bs.getAllMutationBatches(n))).next((s)=>{const l=[],c=[];let m=Hn();for(const r of e){l.push(r.batchId);for(const t of r.mutations)m=m.add(t.key)}for(const r of s){c.push(r.batchId);for(const t of r.mutations)m=m.add(t.key)}return d.ci.Ks(n,m).next((e)=>({hi:e,removedBatchIds:l,addedBatchIds:c}))})})}function io(r,o){const e=vf(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r)=>{const t=o.batch.keys(),n=e.ui.newChangeBuffer({trackRemovals:!0});return function(d,l,c,n){const s=c.batch,e=s.keys();let r=gi.resolve();return e.forEach((o)=>{r=r.next(()=>n.getEntry(l,o)).next((t)=>{const e=c.docVersions.get(o);xf(null!==e),0>t.version.compareTo(e)&&(s.applyToRemoteDocument(t,c),t.isValidDocument()&&(t.setReadTime(c.commitVersion),n.addEntry(t)))})}),r.next(()=>d.Bs.removeMutationBatch(l,s))}(e,r,o,n).next(()=>n.apply(r)).next(()=>e.Bs.performConsistencyCheck(r)).next(()=>e.ci.Ks(r,t))})}function ro(r){const n=vf(r);return n.persistence.runTransaction("Get last remote snapshot version","readonly",(e)=>n.fs.getLastRemoteSnapshotVersion(e))}function oo(r,d){const l=vf(r),e=d.snapshotVersion;let n=l.ii;return l.persistence.runTransaction("Apply remote event","readwrite-primary",(i)=>{const t=l.ui.newChangeBuffer({trackRemovals:!0});n=l.ii;const m=[];d.targetChanges.forEach((t,r)=>{const o=n.get(r);if(!o)return;m.push(l.fs.removeMatchingKeys(i,t.removedDocuments,r).next(()=>l.fs.addMatchingKeys(i,t.addedDocuments,r)));let s=o.withSequenceNumber(i.currentSequenceNumber);d.targetMismatches.has(r)?s=s.withResumeToken(gt.EMPTY_BYTE_STRING,at.min()).withLastLimboFreeSnapshotVersion(at.min()):0<t.resumeToken.approximateByteSize()&&(s=s.withResumeToken(t.resumeToken,e)),n=n.insert(r,s),function(r,t,e){return!(0!==r.resumeToken.approximateByteSize())||!!(3e8<=t.snapshotVersion.toMicroseconds()-r.snapshotVersion.toMicroseconds())||0<e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size}(o,s,t)&&m.push(l.fs.updateTargetData(i,s))});let r=Gn();if(d.documentUpdates.forEach((e)=>{d.resolvedLimboDocuments.has(e)&&m.push(l.persistence.referenceDelegate.updateLimboDocument(i,e))}),m.push(uo(i,t,d.documentUpdates).next((e)=>{r=e})),!e.isEqual(at.min())){const t=l.fs.getLastRemoteSnapshotVersion(i).next(()=>l.fs.setTargetsMetadata(i,i.currentSequenceNumber,e));m.push(t)}return gi.waitFor(m).next(()=>t.apply(i)).next(()=>l.ci.Gs(i,r)).next(()=>r)}).then((e)=>(l.ii=n,e))}function uo(r,o,e){let n=Hn();return e.forEach((e)=>n=n.add(e)),o.getEntries(r,n).next((d)=>{let t=Gn();return e.forEach((e,n)=>{const i=d.get(e);n.isNoDocument()&&n.version.isEqual(at.min())?(o.removeEntry(e,n.readTime),t=t.insert(e,n)):!i.isValidDocument()||0<n.version.compareTo(i.version)||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(o.addEntry(n),t=t.insert(e,n)):bf("LocalStore","Ignoring outdated watch update for ",e,". Current version:",i.version," Watch version:",n.version)}),t})}function ao(r,o){const e=vf(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(r)=>(void 0===o&&(o=-1),e.Bs.getNextMutationBatchAfterBatchId(r,o)))}function co(r,o){const e=vf(r);return e.persistence.runTransaction("Allocate target","readwrite",(r)=>{let t;return e.fs.getTargetData(r,o).next((n)=>n?(t=n,gi.resolve(t)):e.fs.allocateTargetId(r).next((n)=>(t=new Ni(o,n,0,r.currentSequenceNumber),e.fs.addTargetData(r,t).next(()=>t))))}).then((r)=>{const t=e.ii.get(r.targetId);return(null===t||0<r.snapshotVersion.compareTo(t.snapshotVersion))&&(e.ii=e.ii.insert(r.targetId,r),e.ri.set(o,r.targetId)),r})}async function ho(o,d,e){const n=vf(o),s=n.ii.get(d),t=e?"readwrite":"readwrite-primary";try{e||(await n.persistence.runTransaction("Release target",t,(e)=>n.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Ys(e))throw e;bf("LocalStore",`Failed to update sequence numbers for target ${d}: ${e}`)}n.ii=n.ii.remove(d),n.ri.delete(s.target)}function lo(o,d,e){const n=vf(o);let s=at.min(),i=Hn();return n.persistence.runTransaction("Execute query","readonly",(o)=>function(r,t,e){const n=vf(r),o=n.ri.get(e);return void 0===o?n.fs.getTargetData(t,e):gi.resolve(n.ii.get(o))}(n,o,Ke(d)).next((t)=>{if(t)return s=t.lastLimboFreeSnapshotVersion,n.fs.getMatchingKeysForTargetId(o,t.targetId).next((e)=>{i=e})}).next(()=>n.si.Qs(o,d,e?s:at.min(),e?i:Hn())).next((e)=>(wo(n,He(d),e),{documents:e,li:i})))}function fo(r,o){const e=vf(r),n=vf(e.fs),t=e.ii.get(o);return t?Promise.resolve(t.target):e.persistence.runTransaction("Get target data","readonly",(e)=>n.Et(e,o).next((e)=>e?e.target:null))}function _o(r,o){const e=vf(r),n=e.oi.get(o)||at.min();return e.persistence.runTransaction("Get new document changes","readonly",(r)=>e.ui.getAllFromCollectionGroup(r,o,re(n,-1),Number.MAX_SAFE_INTEGER)).then((r)=>(wo(e,o,r),r))}function wo(r,t,e){let n=at.min();e.forEach((r,t)=>{0<t.readTime.compareTo(n)&&(n=t.readTime)}),r.oi.set(t,n)}async function mo(d,l,e,t){const n=vf(d);let i=Hn(),r=Gn();for(const o of e){const e=l.fi(o.metadata.name);o.document&&(i=i.add(e));const t=l.di(o);t.setReadTime(l._i(o.metadata.readTime)),r=r.insert(e,t)}const o=n.ui.newChangeBuffer({trackRemovals:!0}),s=await co(n,function(e){return Ke(Oe(dt.fromString(`__bundle__/docs/${e}`)))}(t));return n.persistence.runTransaction("Apply bundle documents","readwrite",(d)=>uo(d,o,r).next((t)=>(o.apply(d),t)).next((t)=>n.fs.removeMatchingKeysForTargetId(d,s.targetId).next(()=>n.fs.addMatchingKeys(d,i,s.targetId)).next(()=>n.ci.Gs(d,t)).next(()=>t)))}async function go(r,d,e=Hn()){const n=await co(r,Ke(Ki(d.bundledQuery))),s=vf(r);return s.persistence.runTransaction("Save named query","readwrite",(i)=>{const t=ws(d.readTime);if(0<=n.snapshotVersion.compareTo(t))return s._s.saveNamedQuery(i,d);const r=n.withResumeToken(gt.EMPTY_BYTE_STRING,t);return s.ii=s.ii.insert(r.targetId,r),s.fs.updateTargetData(i,r).next(()=>s.fs.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.fs.addMatchingKeys(i,e,n.targetId)).next(()=>s._s.saveNamedQuery(i,d))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(r,t){return`firestore_clients_${r}_${t}`}function Do(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function Co(r,t){return`firestore_targets_${r}_${t}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return"undefined"==typeof window?null:window}function Qo(){return"undefined"==typeof document?null:document}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){return new ls(e,!0)}async function Wo(r){if(au(r))for(const t of r.du)await t(!0)}async function eu(r){for(const t of r.du)await t(!1)}function nu(r,t){const e=vf(r);e.lu.has(t.targetId)||(e.lu.set(t.targetId,t),uu(e)?ou(e):bu(e).xo()&&iu(e,t))}function su(r,t){const e=vf(r),n=bu(e);e.lu.delete(t),n.xo()&&ru(e,t),0===e.lu.size&&(n.xo()?n.Mo():au(e)&&e.wu.set("Unknown"))}function iu(r,t){r.mu.Z(t.targetId),bu(r).jo(t)}function ru(r,t){r.mu.Z(t),bu(r).Wo(t)}function ou(r){r.mu=new os({getRemoteKeysForTarget:(t)=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:(t)=>r.lu.get(t)||null}),bu(r).start(),r.wu.ru()}function uu(e){return au(e)&&!bu(e).Co()&&0<e.lu.size}function au(e){return 0===vf(e).fu.size}function cu(e){e.mu=void 0}async function hu(r){r.lu.forEach((t)=>{iu(r,t)})}async function lu(r,t){cu(r),uu(r)?(r.wu.au(t),ou(r)):r.wu.set("Unknown")}async function fu(r,t,o){if(r.wu.set("Online"),t instanceof is&&2===t.state&&t.cause)try{await async function(r,t){const e=t.cause;for(const n of t.targetIds)r.lu.has(n)&&(await r.remoteSyncer.rejectListen(n,e),r.lu.delete(n),r.mu.removeTarget(n))}(r,t)}catch(e){bf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),e),await du(r,e)}else if(t instanceof ns?r.mu.ut(t):t instanceof ss?r.mu._t(t):r.mu.ht(t),!o.isEqual(at.min()))try{const t=await ro(r.localStore);0<=o.compareTo(t)&&(await function(r,t){const e=r.mu.yt(t);return e.targetChanges.forEach((e,n)=>{if(0<e.resumeToken.approximateByteSize()){const o=r.lu.get(n);o&&r.lu.set(n,o.withResumeToken(e.resumeToken,t))}}),e.targetMismatches.forEach((t)=>{const e=r.lu.get(t);if(e){r.lu.set(t,e.withResumeToken(gt.EMPTY_BYTE_STRING,e.snapshotVersion)),ru(r,t);const n=new Ni(e.target,t,1,e.sequenceNumber);iu(r,n)}}),r.remoteSyncer.applyRemoteEvent(e)}(r,o))}catch(t){bf("RemoteStore","Failed to raise snapshot:",t),await du(r,t)}}async function du(r,t,e){if(!Ys(t))throw t;r.fu.add(1),await eu(r),r.wu.set("Offline"),e||(e=()=>ro(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{bf("RemoteStore","Retrying IndexedDB access"),await e(),r.fu.delete(1),await Wo(r)})}function _u(r,t){return t().catch((e)=>du(r,e,t))}async function wu(r){const o=vf(r),e=Vu(o);for(let n=0<o.hu.length?o.hu[o.hu.length-1].batchId:-1;mu(o);)try{const r=await ao(o.localStore,n);if(null===r){0===o.hu.length&&e.Mo();break}n=r.batchId,gu(o,r)}catch(e){await du(o,e)}yu(o)&&pu(o)}function mu(e){return au(e)&&10>e.hu.length}function gu(r,t){r.hu.push(t);const e=Vu(r);e.xo()&&e.Ho&&e.Jo(t.mutations)}function yu(e){return au(e)&&!Vu(e).Co()&&0<e.hu.length}function pu(e){Vu(e).start()}async function Iu(e){Vu(e).Zo()}async function Tu(r){const t=Vu(r);for(const e of r.hu)t.Jo(e.mutations)}async function Eu(r,t,e){const n=r.hu.shift(),o=Ci.from(n,t,e);await _u(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await wu(r)}async function Au(r,t){t&&Vu(r).Ho&&(await async function(r,t){if(e=t.code,Dn(e)&&e!==gv.ABORTED){const e=r.hu.shift();Vu(r).ko(),await _u(r,()=>r.remoteSyncer.rejectFailedWrite(e.batchId,t)),await wu(r)}var e}(r,t)),yu(r)&&pu(r)}async function Ru(r,t){const e=vf(r);t?(e.fu.delete(2),await Wo(e)):t||(e.fu.add(2),await eu(e),e.wu.set("Unknown"))}function bu(r){return r.gu||(r.gu=function(r,t,e){const n=vf(r);return n.eu(),new zo(t,n.bo,n.authCredentials,n.appCheckCredentials,n.M,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.datastore,r.asyncQueue,{Hr:hu.bind(null,r),Yr:lu.bind(null,r),Qo:fu.bind(null,r)}),r.du.push(async(t)=>{t?(r.gu.ko(),uu(r)?ou(r):r.wu.set("Unknown")):(await r.gu.stop(),cu(r))})),r.gu}function Vu(r){return r.yu||(r.yu=function(r,t,e){const n=vf(r);return n.eu(),new Jo(t,n.bo,n.authCredentials,n.appCheckCredentials,n.M,e)}(r.datastore,r.asyncQueue,{Hr:Iu.bind(null,r),Yr:Au.bind(null,r),Xo:Tu.bind(null,r),Yo:Eu.bind(null,r)}),r.du.push(async(t)=>{t?(r.yu.ko(),await wu(r)):(await r.yu.stop(),0<r.hu.length&&(bf("RemoteStore",`Stopping write stream with ${r.hu.length} pending writes`),r.hu=[]))})),r.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(r,t){if(hf("AsyncQueue",`${t}: ${r}`),Ys(r))return new G(gv.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(r,o){const d=vf(r);let n=!1;for(const s of o){const t=s.query,r=d.queries.get(t);if(r){for(const t of r.listeners)t.Ru(s)&&(n=!0);r.Tu=s}}n&&Bu(d)}function $u(r,t,e){const n=vf(r),o=n.queries.get(t);if(o)for(const r of o.listeners)r.onError(e);n.queries.delete(t)}function Bu(e){e.Eu.forEach((e)=>{e.next()})}function Lu(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(d,t,e,n){d.la=(t,e,r)=>async function(d,l,e,t){let n=l.view.Gu(e);n.ni&&(n=await lo(d.localStore,l.query,!1).then(({documents:e})=>l.view.Gu(e,n)));const i=t&&t.targetChanges.get(l.targetId),r=l.view.applyChanges(n,d.isPrimaryClient,i);return Nf(d,l.targetId,r.Hu),r.snapshot}(d,t,e,r);const s=await lo(d.localStore,t,!0),i=new Wu(t,s.li),r=i.Gu(s.documents),o=es.createSynthesizedTargetChangeForCurrentChange(e,n&&"Offline"!==d.onlineState),l=i.applyChanges(r,d.isPrimaryClient,o);Nf(d,e,l.Hu);const m=new zu(t,e,i);return d.ea.set(t,m),d.na.has(e)?d.na.get(e).push(t):d.na.set(e,[t]),l.snapshot}async function Zu(r,o){const i=vf(r);try{const e=await oo(i.localStore,o);o.targetChanges.forEach((r,t)=>{const e=i.ra.get(t);e&&(xf(1>=r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size),0<r.addedDocuments.size?e.Zu=!0:0<r.modifiedDocuments.size?xf(e.Zu):0<r.removedDocuments.size&&(xf(e.Zu),e.Zu=!1))}),await _a(i,e,o)}catch(e){await Dr(e)}}function If(r,o,e){const n=vf(r);if(n.isPrimaryClient&&0===e||!n.isPrimaryClient&&1===e){const e=[];n.ea.forEach((t,r)=>{const n=r.view.Au(o);n.snapshot&&e.push(n.snapshot)}),function(r,o){const e=vf(r);e.onlineState=o;let i=!1;e.queries.forEach((e,r)=>{for(const n of r.listeners)n.Au(o)&&(i=!0)}),i&&Bu(e)}(n.eventManager,o),e.length&&n.ta.Qo(e),n.onlineState=o,n.isPrimaryClient&&n.sharedClientState.setOnlineState(o)}}async function Tf(o,d,e){const l=vf(o);l.sharedClientState.updateQueryState(d,"rejected",e);const t=l.ra.get(d),s=t&&t.key;if(s){let e=new $n(vt.comparator);e=e.insert(s,te.newNoDocument(s,at.min()));const t=Hn().add(s),r=new Zn(at.min(),new Map(),new Un(st),e,t);await Zu(l,r),l.ia=l.ia.remove(s),l.ra.delete(d),Lf(l)}else await ho(l.localStore,d,!1).then(()=>ca(l,d,e)).catch(Dr)}async function Ef(r,o){const e=vf(r),n=o.batch.batchId;try{const r=await io(e.localStore,o);Cf(e,n,null),Sf(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _a(e,r)}catch(e){await Dr(e)}}async function _f(r,o,e){const n=vf(r);try{const r=await function(r,o){const i=vf(r);return i.persistence.runTransaction("Reject batch","readwrite-primary",(r)=>{let t;return i.Bs.lookupMutationBatch(r,o).next((n)=>(xf(null!==n),t=n.keys(),i.Bs.removeMutationBatch(r,n))).next(()=>i.Bs.performConsistencyCheck(r)).next(()=>i.ci.Ks(r,t))})}(n.localStore,o);Cf(n,o,e),Sf(n,o),n.sharedClientState.updateMutationState(o,"rejected",e),await _a(n,r)}catch(e){await Dr(e)}}function Sf(r,t){(r.aa.get(t)||[]).forEach((e)=>{e.resolve()}),r.aa.delete(t)}function Cf(r,o,e){const n=vf(r);let s=n.ua[n.currentUser.toKey()];if(s){const r=s.get(o);r&&(e?r.reject(e):r.resolve(),s=s.remove(o)),n.ua[n.currentUser.toKey()]=s}}function ca(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.na.get(t))r.ea.delete(n),e&&r.ta.fa(n,e);(r.na.delete(t),r.isPrimaryClient)&&r.oa.Pi(t).forEach((t)=>{r.oa.containsKey(t)||Af(r,t)})}function Af(r,t){r.sa.delete(t.path.canonicalString());const e=r.ia.get(t);null!==e&&(su(r.remoteStore,e),r.ia=r.ia.remove(t),r.ra.delete(e),Lf(r))}function Nf(r,t,e){for(const n of e)n instanceof Gu?(r.oa.addReference(n.key,t),Df(r,n)):n instanceof ju?(bf("SyncEngine","Document no longer in limbo: "+n.key),r.oa.removeReference(n.key,t),r.oa.containsKey(n.key)||Af(r,n.key)):yf()}function Df(r,t){const e=t.key,n=e.path.canonicalString();r.ia.get(e)||r.sa.has(n)||(bf("SyncEngine","New document in limbo: "+e),r.sa.add(n),Lf(r))}function Lf(r){for(;0<r.sa.size&&r.ia.size<r.maxConcurrentLimboResolutions;){const t=r.sa.values().next().value;r.sa.delete(t);const e=new vt(dt.fromString(t)),n=r.ca.next();r.ra.set(n,new Hu(e)),r.ia=r.ia.insert(e,n),nu(r.remoteStore,new Ni(Ke(Oe(e.path)),n,2,tt.A))}}async function _a(d,l,e){const n=vf(d),s=[],i=[],r=[];n.ea.isEmpty()||(n.ea.forEach((o,d)=>{r.push(n.la(d,l,e).then((r)=>{if(r){n.isPrimaryClient&&n.sharedClientState.updateQueryState(d.targetId,r.fromCache?"not-current":"current"),s.push(r);const t=Zr.Ys(d.targetId,r);i.push(t)}}))}),await Promise.all(r),n.ta.Qo(s),await async function(r,o){const d=vf(r);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(r)=>gi.forEach(o,(t)=>gi.forEach(t.Hs,(e)=>d.persistence.referenceDelegate.addReference(r,t.targetId,e)).next(()=>gi.forEach(t.Js,(e)=>d.persistence.referenceDelegate.removeReference(r,t.targetId,e)))))}catch(e){if(!Ys(e))throw e;bf("LocalStore","Failed to update sequence numbers: "+e)}for(const n of o){const r=n.targetId;if(!n.fromCache){const e=d.ii.get(r),t=e.snapshotVersion,n=e.withLastLimboFreeSnapshotVersion(t);d.ii=d.ii.insert(r,n)}}}(n.localStore,i))}async function Rf(r,o){const e=vf(r);if(!e.currentUser.isEqual(o)){bf("SyncEngine","User change. New user:",o.toKey());const r=await so(e.localStore,o);e.currentUser=o,function(r,n){r.aa.forEach((e)=>{e.forEach((e)=>{e.reject(new G(gv.CANCELLED,n))})}),r.aa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(o,r.removedBatchIds,r.addedBatchIds),await _a(e,r.hi)}}function Pf(r,o){const i=vf(r),e=i.ra.get(o);if(e&&e.Zu)return Hn().add(e.key);{let r=Hn();const t=i.na.get(o);if(!t)return r;for(const n of t){const e=i.ea.get(n);r=r.unionWith(e.view.Ku)}return r}}async function ga(r,t){const e=vf(r),n=await lo(e.localStore,t.query,!0),o=t.view.Yu(n);return e.isPrimaryClient&&Nf(e,t.targetId,o.Hu),o}async function Mf(r,t){const e=vf(r);return _o(e.localStore,t).then((r)=>_a(e,r))}async function Of(o,t,e,n){const s=vf(o),i=await function(r,o){const i=vf(r),e=vf(i.Bs);return i.persistence.runTransaction("Lookup mutation documents","readonly",(r)=>e.fn(r,o).next((t)=>t?i.ci.Ks(r,t):gi.resolve(null)))}(s.localStore,t);null===i?bf("SyncEngine","Cannot apply mutation batch with id: "+t):("pending"===e?await wu(s.remoteStore):"acknowledged"===e||"rejected"===e?(Cf(s,t,n||null),Sf(s,t),function(r,t){vf(vf(r).Bs)._n(t)}(s.localStore,t)):yf(),await _a(s,i))}async function Vf(r,t){const o=vf(r);if(Uf(o),qf(o),!0===t&&!0!==o.ha){const r=o.sharedClientState.getAllActiveQueryTargets(),n=await zf(o,r.toArray());o.ha=!0,await Ru(o.remoteStore,!0);for(const e of n)nu(o.remoteStore,e)}else if(!1===t&&!1!==o.ha){const r=[];let t=Promise.resolve();o.na.forEach((e,n)=>{o.sharedClientState.isLocalQueryTarget(n)?r.push(n):t=t.then(()=>(ca(o,n),ho(o.localStore,n,!0))),su(o.remoteStore,n)}),await t,await zf(o,r),function(r){const o=vf(r);o.ra.forEach((e,t)=>{su(o.remoteStore,t)}),o.oa.bi(),o.ra=new Map,o.ia=new $n(vt.comparator)}(o),o.ha=!1,await Ru(o.remoteStore,!1)}}async function zf(n,o){const d=vf(n),s=[],i=[];for(const r of o){let t;const e=d.na.get(r);if(e&&0!==e.length){t=await co(d.localStore,Ke(e[0]));for(const r of e){const t=d.ea.get(r),e=await ga(d,t);e.snapshot&&i.push(e.snapshot)}}else{const e=await fo(d.localStore,r);t=await co(d.localStore,e),await Qu(d,Ea(e),r,!1)}s.push(t)}return d.ta.Qo(i),s}function Ea(e){return ke(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Bf(r){const t=vf(r);return vf(vf(t.localStore).persistence).Fs()}async function jf(o,d,e,t){const n=vf(o);if(n.ha)return void bf("SyncEngine","Ignoring unexpected query state notification.");const i=n.na.get(d);if(i&&0<i.length)switch(e){case"current":case"not-current":{const r=await _o(n.localStore,He(i[0])),t=Zn.createSynthesizedRemoteEventForCurrentChange(d,"current"===e);await _a(n,r,t);break}case"rejected":await ho(n.localStore,d,!0),ca(n,d,t);break;default:yf();}}async function Ff(r,o,e){const i=Uf(r);if(i.ha){for(const r of o){if(i.na.has(r)){bf("SyncEngine","Adding an already active target "+r);continue}const t=await fo(i.localStore,r),e=await co(i.localStore,t);await Qu(i,Ea(t),e.targetId,!1),nu(i.remoteStore,e)}for(const r of e)i.na.has(r)&&(await ho(i.localStore,r,!1).then(()=>{su(i.remoteStore,r),ca(i,r)}).catch(Dr))}}function Uf(r){const t=vf(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tf.bind(null,t),t.ta.Qo=Du.bind(null,t.eventManager),t.ta.fa=$u.bind(null,t.eventManager),t}function qf(r){const t=vf(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_f.bind(null,t),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r,t,e,n){if(!0===t&&!0===n)throw new G(gv.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Gf(r){if(void 0===r)return"undefined";if(null===r)return"null";if("string"==typeof r)return 20<r.length&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if("number"==typeof r||"boolean"==typeof r)return""+r;if("object"==typeof r){if(r instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return"function"==typeof r?"a function":yf()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(r){var t;const e=r._freezeSettings(),n=function(r,t,e,n){return new It(r,t,e,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(r._databaseId,(null===(t=r._app)||void 0===t?void 0:t.options.appId)||"",r._persistenceKey,e);r._firestoreClient=new Nv(r._authCredentials,r._appCheckCredentials,r._queue,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yf();}}function Yf(r){const t=r._freezeSettings(),e=jo(r._databaseId);return new Hv(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Xf(d,l,e,t,n,i={}){const r=d.ac(i.merge||i.mergeFields?2:0,l,e,n);ab("Data must be an object, but it was:",r,t);const o=nb(t,r);let s,m;if(i.merge)s=new mt(r.fieldMask),m=r.fieldTransforms;else if(i.mergeFields){const n=[];for(const t of i.mergeFields){const o=ib(l,t,e);if(!r.contains(o))throw new G(gv.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);mb(n,o)||n.push(o)}s=new mt(n),m=r.fieldTransforms.filter((e)=>s.covers(e.field))}else s=null,m=r.fieldTransforms;return new qv(new kt(o),s,m)}function Qf(r,t,e){return new Gv({Xa:3,uc:t.settings.uc,methodName:r._methodName,ec:e},t.databaseId,t.M,t.ignoreUndefinedProperties)}function $f(d,l,e,t){const n=d.ac(1,l,e);ab("Data must be an object, but it was:",n,t);const i=[],r=kt.empty();ht(t,(o,d)=>{const s=sb(l,o,e);d=getModularInstance(d);const c=n.sc(s);if(d instanceof th)i.push(s);else{const e=eb(d,c);null!=e&&(i.push(s),r.set(s,e))}});const o=new mt(i);return new Kv(r,o,n.fieldTransforms)}function Zf(d,m,e,t,n,i){const r=d.ac(1,m,e),o=[ib(m,t,e)],p=[n];if(0!=i.length%2)throw new G(gv.INVALID_ARGUMENT,`Function ${m}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let r=0;r<i.length;r+=2)o.push(ib(m,i[r])),p.push(i[r+1]);const u=[],c=kt.empty();for(let l=o.length-1;0<=l;--l)if(!mb(u,o[l])){const i=o[l];let e=p[l];e=getModularInstance(e);const n=r.sc(i);if(e instanceof th)u.push(i);else{const r=eb(e,n);null!=r&&(u.push(i),c.set(i,r))}}const s=new mt(u);return new Kv(c,s,r.fieldTransforms)}function Jf(r,t,e,n=!1){return eb(e,r.ac(n?4:3,t))}function eb(n,t){if(ob(n=getModularInstance(n)))return ab("Unsupported field value:",t,n),nb(n,t);if(n instanceof jv)return function(r,t){if(!Wf(t.Xa))throw t.rc(`${r._methodName}() can only be used with update() and set()`);if(!t.path)throw t.rc(`${r._methodName}() is not currently supported inside arrays`);const e=r._toFieldTransform(t);e&&t.fieldTransforms.push(e)}(n,t),null;if(void 0===n&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(r,o){const e=[];let d=0;for(const n of r){let r=eb(n,o.ic(d));null==r&&(r={nullValue:"NULL_VALUE"}),e.push(r),d++}return{arrayValue:{values:e}}}(n,t)}return function(o,i){if(null===(o=getModularInstance(o)))return{nullValue:"NULL_VALUE"};if("number"==typeof o)return tn(i.M,o);if("boolean"==typeof o)return{booleanValue:o};if("string"==typeof o)return{stringValue:o};if(o instanceof Date){const e=it.fromDate(o);return{timestampValue:cs(i.M,e)}}if(o instanceof it){const e=new it(o.seconds,1e3*r(o.nanoseconds/1e3));return{timestampValue:cs(i.M,e)}}if(o instanceof Fv)return{geoPointValue:{latitude:o.latitude,longitude:o.longitude}};if(o instanceof Bv)return{bytesValue:ds(i.M,o._byteString)};if(o instanceof _c){const e=i.databaseId,t=o.firestore._databaseId;if(!t.isEqual(e))throw i.rc(`Document reference is for database ${t.projectId}/${t.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:ms(o.firestore._databaseId||i.databaseId,o._key.path)}}throw i.rc(`Unsupported field value: ${Gf(o)}`)}(n,t)}function nb(r,o){const e={};return lt(r)?o.path&&0<o.path.length&&o.fieldMask.push(o.path):ht(r,(r,t)=>{const n=eb(t,o.tc(r));null!=n&&(e[r]=n)}),{mapValue:{fields:e}}}function ob(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof it||e instanceof Fv||e instanceof Bv||e instanceof _c||e instanceof jv)}function ab(r,t,e){if(!ob(e)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(e)){const n=Gf(e);throw"an object"===n?t.rc(r+" a custom object"):t.rc(r+" "+n)}}function ib(r,t,o){if((t=getModularInstance(t))instanceof zv)return t._internalPath;if("string"==typeof t)return sb(r,t);throw lb("Field path arguments must be of type string or ",r,!1,void 0,o)}function sb(r,t,e){if(0<=t.search(ah))throw lb(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new zv(...t.split("."))._internalPath}catch(n){throw lb(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function lb(d,t,e,n,s){const i=n&&!n.isEmpty(),r=void 0!==s;let o=`Function ${t}() called with invalid data`;e&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||r)&&(l+=" (found",i&&(l+=` in field ${n}`),r&&(l+=` in document ${s}`),l+=")"),new G(gv.INVALID_ARGUMENT,o+d+l)}function mb(r,n){return r.some((e)=>e.isEqual(n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(r,t){return"string"==typeof t?sb(r,t):t instanceof zv?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(e){return 0===e?"added":2===e||3===e?"modified":1===e?"removed":yf()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(r,t,e,n){if(e[0]=getModularInstance(e[0]),e[0]instanceof gh)return function(o,t,e,d,n){if(!d)throw new G(gv.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${e}().`);const i=[];for(const r of qe(o))if(r.field.isKeyField())i.push(Ut(t,d.key));else{const e=d.data.field(r.field);if(At(e))throw new G(gv.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field \""+r.field+"\" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)");if(null===e){const e=r.field.canonicalString();throw new G(gv.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Se(i,n)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const o=Yf(r.firestore);return function(d,t,e,l,n,i){const s=d.explicitOrderBy;if(n.length>s.length)throw new G(gv.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const r=[];for(let o=0;o<n.length;o++){const c=n[o];if(s[o].field.isKeyField()){if("string"!=typeof c)throw new G(gv.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof c}`);if(!Ue(d)&&-1!==c.indexOf("/"))throw new G(gv.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${c}' contains a slash.`);const e=d.path.child(dt.fromString(c));if(!vt.isDocumentKey(e))throw new G(gv.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${e}' is not because it contains an odd number of segments.`);const n=new vt(e);r.push(Ut(t,n))}else{const n=Jf(e,l,c);r.push(n)}}return new Se(r,i)}(r._query,r.firestore._databaseId,o,t,e,n)}}function bb(r,t,e){if("string"==typeof(e=getModularInstance(e))){if(""===e)throw new G(gv.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ue(t)&&-1!==e.indexOf("/"))throw new G(gv.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(dt.fromString(e));if(!vt.isDocumentKey(n))throw new G(gv.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ut(r,new vt(n))}if(e instanceof _c)return Ut(r,e._key);throw new G(gv.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gf(e)}.`)}function hb(r,t){if(!Array.isArray(r)||0===r.length)throw new G(gv.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(10<r.length)throw new G(gv.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function yb(r,t,e){if(!e.isEqual(t))throw new G(gv.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}function kb(r,t){if((r=getModularInstance(r)).firestore!==t)throw new G(gv.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){""==Qv.value?s("\xA1Algo sali\xF3 mal!","El campo correo es obligatorio","error",2e3):tk?""==$v.value?s("\xA1Algo sali\xF3 mal!","El campo contrase\xF1a es obligatorio","error",2e3):rk?Tb():s("\xA1Algo sali\xF3 mal!","El campo contrase\xF1a no es valido","error",2e3):s("\xA1Algo sali\xF3 mal!","El campo correo no es valido","error",2e3)}function Tb(){Jv.classList.add("show-loader");var e=Qv.value,t=$v.value;km(Xv,e,t).then(function(e){e.user,s("\xA1Inicio de sesi\xF3n completo!","Bienvenido Admin, ser\xE1 redirigido a el dashboard","success",2e3,!0,"http://thealth.smarthinkscorp.com/herons")})["catch"](function(e){var t=e.code,r="";"auth/user-not-found"==t?r="El correo ingresado no corresponde a ninguna cuenta, intente de nuevo":"auth/wrong-password"==t&&(r="La contrase\xF1a de este correo no es correcta, intente de nuevo"),i("\xA1Algo sali\xF3 mal!",r,"error","Cerrar")}),Jv.classList.remove("show-loader")}var Eb=Number.NEGATIVE_INFINITY,_b=Number.POSITIVE_INFINITY,Sb=Number.MIN_SAFE_INTEGER,Nb=Number.MAX_SAFE_INTEGER,Db=Math.max,Lb=Math.abs,Pb=Math.min,Mb=Math.round,Ob=Math.pow,Vb=String.fromCharCode,zb=e(2814),Bb=e(6455),jb=e.n(Bb),Fb=e(1717),Ub=e(8343),qb=e(7757),Kb=e.n(qb);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},Hb=function(e,t){if(!e)throw Yb(t)},Yb=function(e){return new Error("Firebase Database ("+Gb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},Qb=function(e){const t=[];let r=0;for(let n=0,o;n<e.length;n++)o=e.charCodeAt(n),128>o?t[r++]=o:2048>o?(t[r++]=192|o>>6,t[r++]=128|63&o):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=240|o>>18,t[r++]=128|63&o>>12,t[r++]=128|63&o>>6,t[r++]=128|63&o):(t[r++]=224|o>>12,t[r++]=128|63&o>>6,t[r++]=128|63&o);return t},$b=function(e){const t=[];for(let r=0,n=0;r<e.length;){const o=e[r++];if(128>o)t[n++]=Vb(o);else if(191<o&&224>o){const i=e[r++];t[n++]=Vb((31&o)<<6|63&i)}else if(239<o&&365>o){const i=e[r++],s=e[r++],d=e[r++],l=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&d)-65536;t[n++]=Vb(55296+(l>>10)),t[n++]=Vb(56320+(1023&l))}else{const i=e[r++],s=e[r++];t[n++]=Vb((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},Zb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,d=o+2<e.length,l=d?e[o+2]:0;let c=(15&s)<<2|l>>6,m=63&l;d||(m=64,!i&&(c=64)),n.push(r[t>>2],r[(3&t)<<4|s>>4],r[c],r[m])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$b(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const t=r[e.charAt(o++)],i=o<e.length,s=i?r[e.charAt(o)]:0;++o;const d=o<e.length,l=d?r[e.charAt(o)]:64;++o;const c=o<e.length,m=c?r[e.charAt(o)]:64;if(++o,null==t||null==s||null==l||null==m)throw Error();if(n.push(t<<2|s>>4),64!==l){if(n.push(240&s<<4|l>>2),64!==m){n.push(192&l<<6|m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},eh=function(e){const t=Qb(e);return Zb.encodeByteArray(t,!0)},nh=function(e){return eh(e).replace(/\./g,"")},ih=function(e){try{return Zb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class lh extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,lh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ch.prototype.create)}}class ch{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,o=this.errors[e],i=o?ee(o,r):"Error",s=`${this.serviceName}: ${i} (${n}).`,d=new lh(n,s,r);return d}}const mh=/\{\$([^}]+)}/g,ph=function(e){let t={},r={},n={},o="";try{const i=e.split(".");t=et(ih(i[0])||""),r=et(ih(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(t){}return{header:t,claims:r,data:n,signature:o}};class fh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch((t)=>{this.error(t)})}next(e){this.forEachObserver((t)=>{t.next(e)})}error(e){this.forEachObserver((t)=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver((e)=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=da(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=la),void 0===n.error&&(n.error=la),void 0===n.complete&&(n.complete=la);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}}),this.observers.push(n),o}unsubscribeOne(e){void 0===this.observers||void 0===this.observers[e]||(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}const hh=1e3,wh=2,yh=14400000,xh=.5;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new kh(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Ih(this._db.createObjectStore(e,t))}close(){this._db.close()}}class kh{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new Ih(this._transaction.objectStore(e))}}class Ih{constructor(e){this._store=e}index(e){return new _h(this._store.index(e))}createIndex(e,t,r){return new _h(this._store.createIndex(e,t,r))}get(e){const t=this._store.get(e);return ti(t,"Error reading from IndexedDB")}put(e,t){const r=this._store.put(e,t);return ti(r,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return ti(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ti(e,"Error clearing IndexedDB object store")}}class _h{constructor(e){this._index=e}get(e){const t=this._index.get(e);return ti(t,"Error reading from IndexedDB")}}class Sh{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new dh;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(t){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=!(null===(t=null===e||void 0===e?void 0:e.optional)||void 0===t)&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(t){if(n)return null;throw t}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ai(e))try{this.getOrInitializeService({instanceIdentifier:Ch})}catch(t){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(t){}}}}clearInstance(e=Ch){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e)=>"INTERNAL"in e).map((e)=>e.INTERNAL.delete()),...e.filter((e)=>"_delete"in e).map((e)=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Ch){return this.instances.has(e)}getOptions(e=Ch){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[t,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(t);r===e&&o.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),o=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;o.add(e),this.onInitCallbacks.set(n,o);const i=this.instances.get(n);return i&&e(i,n),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oi(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=Ch){return this.component?this.component.multipleInstances?e:Ch:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Dh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ah(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=[];var zh;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(zh||(zh={}));const Bh={debug:zh.DEBUG,verbose:zh.VERBOSE,info:zh.INFO,warn:zh.WARN,error:zh.ERROR,silent:zh.SILENT},jh=zh.INFO,Uh={[zh.DEBUG]:"log",[zh.VERBOSE]:"log",[zh.INFO]:"info",[zh.WARN]:"warn",[zh.ERROR]:"error"},qh=(e,t,...r)=>{if(!(t<e.logLevel)){const n=new Date().toISOString(),o=Uh[t];if(o)console[o](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)}};class Gh{constructor(e){this.name=e,this._logLevel=jh,this._logHandler=qh,this._userLogHandler=null,Oh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in zh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,zh.DEBUG,...e),this._logHandler(this,zh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,zh.VERBOSE,...e),this._logHandler(this,zh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,zh.INFO,...e),this._logHandler(this,zh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,zh.WARN,...e),this._logHandler(this,zh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,zh.ERROR,...e),this._logHandler(this,zh.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e)=>{if(li(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter((e)=>e).join(" ")}}const Wh="@firebase/app",Yh="0.7.22",Xh=new Gh("@firebase/app"),Qh="[DEFAULT]",$h={[Wh]:"fire-core",["@firebase/app-compat"]:"fire-core-compat",["@firebase/analytics"]:"fire-analytics",["@firebase/analytics-compat"]:"fire-analytics-compat",["@firebase/app-check"]:"fire-app-check",["@firebase/app-check-compat"]:"fire-app-check-compat",["@firebase/auth"]:"fire-auth",["@firebase/auth-compat"]:"fire-auth-compat",["@firebase/database"]:"fire-rtdb",["@firebase/database-compat"]:"fire-rtdb-compat",["@firebase/functions"]:"fire-fn",["@firebase/functions-compat"]:"fire-fn-compat",["@firebase/installations"]:"fire-iid",["@firebase/installations-compat"]:"fire-iid-compat",["@firebase/messaging"]:"fire-fcm",["@firebase/messaging-compat"]:"fire-fcm-compat",["@firebase/performance"]:"fire-perf",["@firebase/performance-compat"]:"fire-perf-compat",["@firebase/remote-config"]:"fire-rc",["@firebase/remote-config-compat"]:"fire-rc-compat",["@firebase/storage"]:"fire-gcs",["@firebase/storage-compat"]:"fire-gcs-compat",["@firebase/firestore"]:"fire-fst",["@firebase/firestore-compat"]:"fire-fst-compat","fire-js":"fire-js",["firebase"]:"fire-js-all"},Jh=new Map,ew=new Map,tw=new ch("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tw.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="9.7.0",ow="firebase-heartbeat-database",aw=1,iw="firebase-heartbeat-store";let sw=null;const dw=1024;class lw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cw(t),this._heartbeatsCachePromise=this._storage.read().then((e)=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Xd();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e)=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e)=>{const t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592000000}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&(await this._heartbeatsCachePromise),null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Xd(),{heartbeatsToSend:t,unsentEntries:r}=$d(this._heartbeatsCache.heartbeats),n=nh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,0<r.length?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],void this._storage.overwrite(this._heartbeatsCache)),n}}class cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!b()&&h().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};else{const e=await _d(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;const r=await this._canUseIndexedDBPromise;if(!r)return;else{const r=await this.read();return Wd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const r=await this._canUseIndexedDBPromise;if(!r)return;else{const r=await this.read();return Wd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}(function(e){ui(new Sh("platform-logger",(e)=>new Hh(e),"PRIVATE")),ui(new Sh("heartbeat",(e)=>new lw(e),"PRIVATE")),yi(Wh,Yh,e),yi(Wh,Yh,"esm2017"),yi("fire-js","")})("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var mw=function(e,t){return mw=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},mw(e,t)},pw=function(){return pw=Object.assign||function(e){for(var t=1,r=arguments.length,n;t<r;t++)for(var o in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},pw.apply(this,arguments)},uw=Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};var gw=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=rl,bw=new ch("auth","Firebase",rl()),hw=new Gh("@firebase/auth"),ww=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.shortDelay=e,this.longDelay=t,pl(t>e,"Short delay should be less than long delay!"),this.isMobile=m()||g()}get(){return yl()?this.isMobile?this.longDelay:this.shortDelay:Pb(5e3,this.shortDelay)}}class xw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cl("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cl("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cl("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},kw=new yw(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(il(this.auth,"network-request-failed")),kw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}class Tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Pb(2*this.errorBackoff,96e4),e}else{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Db(0,r)}}schedule(e=!1){if(this.isRunning){const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void(`auth/${"network-request-failed"}`===t.code&&this.schedule(!0))}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nl(this.lastLoginAt),this.creationTime=Nl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}class _w{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ll(e.idToken,"internal-error"),ll("undefined"!=typeof e.idToken,"internal-error"),ll("undefined"!=typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!=typeof e.expiresIn?+e.expiresIn:Pl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ll(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:o}=await Fl(e,t);this.updateTokensAndExpiration(r,n,+o)}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:o}=t,i=new _w;return r&&(ll("string"==typeof r,"internal-error",{appName:e}),i.refreshToken=r),n&&(ll("string"==typeof n,"internal-error",{appName:e}),i.accessToken=n),o&&(ll("number"==typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _w,this.toJSON())}_performRefresh(){return cl("not implemented")}}class Sw{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,o=el(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ew(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ml(this,this.stsTokenManager.getToken(this.auth,e));return ll(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dl(this,e)}reload(){return zl(this)}_assign(e){this===e||(ll(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e)=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Sw(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ll(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(await Vl(this)),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ml(this,Cl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e)=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,o,i,s,d,l,c;const m=null!==(r=t.displayName)&&void 0!==r?r:void 0,p=null!==(n=t.email)&&void 0!==n?n:void 0,u=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,g=null!==(i=t.photoURL)&&void 0!==i?i:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,b=null!==(d=t._redirectEventId)&&void 0!==d?d:void 0,h=null!==(l=t.createdAt)&&void 0!==l?l:void 0,w=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:x,isAnonymous:v,providerData:k,stsTokenManager:I}=t;ll(y&&I,e,"internal-error");const T=_w.fromJSON(this.name,I);ll("string"==typeof y,e,"internal-error"),Ul(m,e.name),Ul(p,e.name),ll("boolean"==typeof x,e,"internal-error"),ll("boolean"==typeof v,e,"internal-error"),Ul(u,e.name),Ul(g,e.name),Ul(f,e.name),Ul(b,e.name),Ul(h,e.name),Ul(w,e.name);const E=new Sw({uid:y,auth:e,email:p,emailVerified:x,displayName:m,isAnonymous:v,photoURL:g,phoneNumber:u,tenantId:f,stsTokenManager:T,createdAt:h,lastLoginAt:w});return k&&Array.isArray(k)&&(E.providerData=k.map((e)=>Object.assign({},e))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,t,r=!1){const n=new _w;n.updateFromServerResponse(t);const o=new Sw({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Vl(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(){}_removeListener(){}}Cw.type="NONE";const Aw=Cw;class Nw{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:o}=this.auth;this.fullUserKey=ql(this.userKey,n.apiKey,o),this.fullPersistenceKey=ql("persistence",n.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sw._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence!==e){const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Nw(ul(Aw),e,r);const n=(await Promise.all(t.map(async(e)=>(await e._isAvailable())?e:void 0))).filter((e)=>e);let o=n[0]||ul(Aw);const i=ql(r,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(i);if(t){const r=Sw._fromJSON(e,t);n!==o&&(s=r),o=n;break}}catch(e){}const d=n.filter((e)=>e._shouldAllowMigration);return o._shouldAllowMigration&&d.length?(o=d[0],s&&(await o._set(i,s.toJSON())),await Promise.all(t.map(async(e)=>{if(e!==o)try{await e._remove(i)}catch(e){}})),new Nw(o,e,r)):new Nw(o,e,r)}}class Dw{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lw(this),this.idTokenSubscription=new Lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ul(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Nw.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(!this._deleted){const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,i=await this.tryRedirectSignIn(e);(!n||n===o)&&(null===i||void 0===i?void 0:i.user)&&(r=i.user)}return r?r._redirectEventId?(ll(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(t){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(t){if(`auth/${"network-request-failed"}`!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ei(e):null;return t&&ll(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ll(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&(await this._setRedirectUser(null)),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ul(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ch("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ul(e)||this._popupRedirectResolver;ll(t,this,"argument-error"),this.redirectPersistenceManager=await Nw.create(this,[ul(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&(await this.queue(async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const o="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return ll(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ll(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}class Lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ho((e)=>this.observer=e)}get next(){return ll(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}class Rw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cl("not implemented")}_getIdTokenResponse(){return cl("not implemented")}_linkToIdToken(){return cl("not implemented")}_getReauthenticationResolver(){return cl("not implemented")}}class Pw extends Rw{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Pw(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Pw(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return im(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sm(e,{email:this._email,oobCode:this._password});default:al(e,"internal-error");}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return am(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dm(e,{idToken:t,email:this._email,oobCode:this._password});default:al(e,"internal-error");}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}class Mw extends Rw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mw(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):al("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,o=el(t,["providerId","signInMethod"]);if(!r||!n)return null;const i=new Mw(r,n);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return lm(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lm(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lm(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=In(t)}return e}}const Ow={USER_NOT_FOUND:"user-not-found"};class Vw extends Rw{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Vw({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Vw({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return mm(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pm(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return um(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:o}=e;return r||t||n||o?new Vw({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:o}):null}}class zw{constructor(e){var t,r,n,o,i,s;const d=An(qo(e)),l=null!==(t=d.apiKey)&&void 0!==t?t:null,c=null!==(r=d.oobCode)&&void 0!==r?r:null,m=gm(null!==(n=d.mode)&&void 0!==n?n:null);ll(l&&c&&m,"argument-error"),this.apiKey=l,this.operation=m,this.code=c,this.continueUrl=null!==(o=d.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(i=d.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(s=d.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=fm(e);try{return new zw(t)}catch(e){return null}}}class Bw{constructor(){this.providerId=Bw.PROVIDER_ID}static credential(e,t){return Pw._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=zw.parseLink(t);return ll(r,"argument-error"),Pw._fromEmailAndCode(e,r.code,r.tenantId)}}Bw.PROVIDER_ID="password",Bw.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Bw.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw extends jw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Uw extends null{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return ll("providerId"in t&&"signInMethod"in t,"argument-error"),Mw._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ll(e.idToken||e.accessToken,"argument-error"),Mw._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Uw.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Uw.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:n,pendingToken:o,nonce:i,providerId:s}=e;if(!r&&!n&&!t&&!o)return null;if(!s)return null;try{return new Uw(s)._credential({idToken:t,accessToken:r,nonce:i,pendingToken:o})}catch(t){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw extends Fw{constructor(){super("facebook.com")}static credential(e){return Mw._fromParams({providerId:qw.PROVIDER_ID,signInMethod:qw.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qw.credentialFromTaggedObject(e)}static credentialFromError(e){return qw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qw.credential(e.oauthAccessToken)}catch(e){return null}}}qw.FACEBOOK_SIGN_IN_METHOD="facebook.com",qw.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw extends Fw{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mw._fromParams({providerId:Kw.PROVIDER_ID,signInMethod:Kw.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kw.credentialFromTaggedObject(e)}static credentialFromError(e){return Kw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Kw.credential(t,r)}catch(e){return null}}}Kw.GOOGLE_SIGN_IN_METHOD="google.com",Kw.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Fw{constructor(){super("github.com")}static credential(e){return Mw._fromParams({providerId:Gw.PROVIDER_ID,signInMethod:Gw.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gw.credentialFromTaggedObject(e)}static credentialFromError(e){return Gw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gw.credential(e.oauthAccessToken)}catch(e){return null}}}Gw.GITHUB_SIGN_IN_METHOD="github.com",Gw.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends null{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return lm(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lm(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lm(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,pendingToken:o}=t;return r&&n&&o&&r===n?new Hw(r,o):null}static _create(e,t){return new Hw(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww extends null{constructor(e){ll(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Ww.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ww.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Hw.fromJSON(e);return ll(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Hw._create(r,t)}catch(t){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends Fw{constructor(){super("twitter.com")}static credential(e,t){return Mw._fromParams({providerId:Yw.PROVIDER_ID,signInMethod:Yw.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yw.credentialFromTaggedObject(e)}static credentialFromError(e){return Yw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yw.credential(t,r)}catch(e){return null}}}Yw.TWITTER_SIGN_IN_METHOD="twitter.com",Yw.PROVIDER_ID="twitter.com";class Xw{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const o=await Sw._fromIdTokenResponse(e,r,n),i=bm(r),s=new Xw({user:o,providerId:i,_tokenResponse:r,operationType:t});return s}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=bm(r);return new Xw({user:e,providerId:n,_tokenResponse:r,operationType:t})}}class Qw extends lh{constructor(e,t,r,n){var o;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Qw.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Qw(e,t,r,n)}}class $w{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Zw._fromServerResponse(e,t):al(e,"internal-error")}}class Zw extends null{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Zw(t)}}class Jw{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class ey extends null{constructor(e,t){super(e,"facebook.com",t)}}class ty extends null{constructor(e,t){super(e,"github.com",t,"string"==typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class ry extends null{constructor(e,t){super(e,"google.com",t)}}class ny extends null{constructor(e,t,r){super(e,"twitter.com",t,r)}}class oy{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new oy("enroll",e)}static _fromMfaPendingCredential(e){return new oy("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,r;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return oy._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return oy._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=om(e),n=t.customData._serverResponse,o=(n.mfaInfo||[]).map((e)=>$w._fromServerResponse(r,e));ll(n.mfaPendingCredential,r,"internal-error");const i=oy._fromMfaPendingCredential(n.mfaPendingCredential);return new ay(i,o,async(e)=>{const o=await e._process(r,i);delete n.mfaInfo,delete n.mfaPendingCredential;const s=Object.assign(Object.assign({},n),{idToken:o.idToken,refreshToken:o.refreshToken});switch(t.operationType){case"signIn":const e=await Xw._fromIdTokenResponse(r,t.operationType,s);return await r._updateCurrentUser(e.user),e;case"reauthenticate":return ll(t.user,r,"internal-error"),Xw._forOperation(t.user,t.operationType,s);default:al(r,"internal-error");}})}async resolveSignIn(e){return this.signInResolver(e)}}class iy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t)=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t)=>$w._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new iy(e)}async getSession(){return oy._fromIdtoken((await this.user.getIdToken()))}async enroll(e,t){const r=await this.getSession(),n=await Ml(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,r=await this.user.getIdToken(),n=await Ml(this.user,Em(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(n);try{await this.user.reload()}catch(t){if(`auth/${"user-token-expired"}`!==t.code)throw t}}}const sy=new WeakMap,dy="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dy,"1"),this.storage.removeItem(dy),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class cy extends ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&rm(),this.fallbackToPolling=tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(r);if(e.newValue!==n)null===e.newValue?this.storage.removeItem(r):this.storage.setItem(r,e.newValue);else if(this.localCache[r]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);em()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cy.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(){}_removeListener(){}}my.type="SESSION";const py=my;class uy{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t)=>t.isListeningto(e));if(t)return t;const r=new uy(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:o}=t.data,i=this.handlersMap[n];if(null!==i&&void 0!==i&&i.size){t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const e=Array.from(i).map(async(e)=>e(t.origin,o)),s=await Sm(e);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:s})}}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uy.receivers=[];class gy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"==typeof MessageChannel?null:new MessageChannel;if(!n)throw new Error("connection_unavailable");let o,i;return new Promise((s,d)=>{const l=Cm("",20);n.port1.start();const c=setTimeout(()=>{d(new Error("unsupported_event"))},r);i={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(c),clearTimeout(o),d(new Error("invalid_response"));}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}const fy="firebaseLocalStorageDb",by=1,hy="firebaseLocalStorage",wy="fbase_key";class yy{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}class xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){for(let t=0;;)try{const t=await this._openDb();return await e(t)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uy._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(e,t)=>{const r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async()=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lm(),!!this.activeServiceWorker){this.sender=new gy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Rm()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await zm(e,dy,"1"),await jm(e,dy),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries((r)=>zm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries((t)=>Bm(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries((t)=>jm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries((e)=>{const t=Mm(e,!1).getAll();return new yy(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:n,value:o}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(o)&&(this.notifyListeners(n,o),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,void this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}xy.type="LOCAL";const vy=1e12;class ky{constructor(e){this.auth=e,this.counter=vy,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Iy(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||vy;void(null===(t=this._widgets.get(r))||void 0===t?void 0:t.delete()),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||vy))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return void(null===(t=this._widgets.get(e||vy))||void 0===t?void 0:t.execute()),""}}class Iy{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"==typeof e?document.getElementById(e):e;ll(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted();this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=Wm(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(t){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(t){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Ty=Hm("rcb"),Ey=new yw(3e4,6e4);class _y{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Am().grecaptcha}load(e,t=""){return ll(Ym(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Am().grecaptcha):new Promise((r,n)=>{const o=Am().setTimeout(()=>{n(il(e,"network-request-failed"))},Ey.get());Am()[Ty]=()=>{Am().clearTimeout(o),delete Am()[Ty];const i=Am().grecaptcha;if(!i)return void n(il(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const r=s(e,t);return this.counter++,r},this.hostLanguage=t,r(i)};const i=`${"https://www.google.com/recaptcha/api.js?"}?${querystring({onload:Ty,render:"explicit",hl:t})}`;Gm(i).catch(()=>{clearTimeout(o),n(il(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Am().grecaptcha&&(e===this.hostLanguage||0<this.counter||this.librarySeparatelyLoaded)}}class Sy{async load(e){return new ky(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="recaptcha",Ay={theme:"light",type:"image"};class Ny{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Vw._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}class Dy{constructor(e){this.providerId=Dy.PROVIDER_ID,this.auth=om(e)}verifyPhoneNumber(e,t){return Qm(this.auth,e,ei(t))}static credential(e,t){return Vw._fromVerification(e,t)}static credentialFromResult(e){return Dy.credentialFromTaggedObject(e)}static credentialFromError(e){return Dy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Vw._fromTokenResponse(t,r):null}}Dy.PROVIDER_ID="phone",Dy.PHONE_SIGN_IN_METHOD="phone";class Ly extends Rw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lm(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lm(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lm(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}class Ry{constructor(e,t,r,n,o=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve((await this.getIdpTask(s)(d)))}catch(t){this.reject(t)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zm;case"linkViaPopup":case"linkViaRedirect":return ep;case"reauthViaPopup":case"reauthViaRedirect":return Jm;default:al(this.auth,"internal-error");}}resolve(e){pl(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pl(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new yw(2e3,1e4);class My extends Ry{constructor(e,t,r,n,o){super(e,t,n,o),this.provider=r,this.authWindow=null,this.pollId=null,My.currentPopupAction&&My.currentPopupAction.cancel(),My.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ll(e,this.auth,"internal-error"),e}async onExecution(){pl(1===this.filter.length,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((t)=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,(e)=>{e||this.reject(il(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(il(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,My.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;return(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?void(this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(il(this.auth,"popup-closed-by-user"))},2e3)):void(this.pollId=window.setTimeout(e,Py.get()))};e()}}My.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="pendingRedirect",Vy=new Map;class zy extends Ry{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let t=Vy.get(this.auth._key());if(!t){try{const e=await tp(this.resolver,this.auth),r=e?await super.execute():null;t=()=>Promise.resolve(r)}catch(r){t=()=>Promise.reject(r)}Vy.set(this.auth._key(),t)}return this.bypassAuthState||Vy.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type)return void this.resolve(null);if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}class By{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return(this.consumers.forEach((r)=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sp(e))?t:(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0),t)}sendToConsumer(e,t){var r;if(e.error&&!ip(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(il(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=600000&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(e))}saveEventToCache(e){this.cachedEventUids.add(ap(e)),this.lastProcessedEventTime=Date.now()}}const jy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/,Uy=new yw(3e4,6e4);let qy=null;const Ky=new yw(5e3,15e3),Gy="__/auth/iframe",Hy="emulator/auth/iframe",Wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]),Xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qy=500,$y=600,Zy="_blank",Jy="http://localhost";class ex{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}const tx="__/auth/handler",rx="emulator/auth/handler",nx="webStorageSupport";class ox{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=py,this._completeRedirectFn=op}async _openPopup(e,t,r,n){var o;pl(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=wp(e,t,r,bl(),n);return bp(e,i,Cm())}async _openRedirect(e,t,r,n){return await this._originValidation(e),Nm(wp(e,t,r,bl(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(pl(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fp(e),r=new By(e);return t.register("authEvent",(t)=>{ll(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){const r=this.iframes[e._key()];r.send(nx,{type:nx},(r)=>{var n;const o=null===(n=null===r||void 0===r?void 0:r[0])||void 0===n?void 0:n[nx];o!==void 0&&t(!!o),al(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tm()||Hl()||Zl()}}class ax{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return cl("unexpected MultiFactorSessionType");}}}class ix extends ax{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ix(e)}_finalizeEnroll(e,t,r){return Tm(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Um(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}(class{constructor(){}static assertion(e){return ix._fromCredential(e)}}).FACTOR_ID="phone";var sx="@firebase/auth",dx="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){const t=this.auth.onIdTokenChanged((t)=>{var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ll(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){0<this.internalListeners.size?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}(function(e){ui(new Sh("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{ll(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),ll(null===s||void 0===s||!s.includes(":"),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nm(e)},d=new Dw(t,n,o);return fl(d,r),d})(n,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e)=>{const t=e.getProvider("auth-internal");t.initialize()})),ui(new Sh("auth-internal",(e)=>{const t=om(e.getProvider("auth").getImmediate());return((e)=>new lx(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(sx,dx,xp(e)),yi(sx,dx,"esm2017")})("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi("firebase","9.7.0","app");const cx="@firebase/installations",mx="0.5.8",px=1e4,ux=`w:${mx}`,gx="FIS_v2",fx="https://firebaseinstallations.googleapis.com/v1",bx=3600000,hx=new ch("installations","Installations",{"missing-app-config-values":"Missing App configuration value: \"{$valueName}\"","not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":"{$requestName} request failed with error \"{$serverCode} {$serverStatus}: {$serverMessage}\"","app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."}),wx=/^[cdef][\w-]{21}$/,yx="",xx=new Map;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vx=null;const kx="firebase-installations-database",Ix=1,Tx="firebase-installations-store";let Ex=null;const _x="installations",Sx=(e)=>{const t=e.getProvider("app").getImmediate(),r=lg(t),n=fi(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},Cx=(e)=>{const t=e.getProvider("app").getImmediate(),r=fi(t,_x).getImmediate();return{getId:()=>ig(r),getToken:(e)=>sg(r,e)}};(function(){ui(new Sh(_x,Sx,"PUBLIC")),ui(new Sh("installations-internal",Cx,"PRIVATE"))})(),yi(cx,mx),yi(cx,mx,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="analytics",Nx="firebase_id",Dx="origin",Lx=60000,Rx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Px="https://www.googletagmanager.com/gtag/js",Mx=new Gh("@firebase/analytics"),Ox=new ch("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":"The \"apiKey\" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.","no-app-id":"The \"appId\" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID."}),Vx=30;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};class Bx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e)=>e())}}class jx{constructor(e){this.app=e}_delete(){return delete Fx[this.app.options.appId],Promise.resolve()}}let Fx={},Ux=[];const qx={};let Kx="dataLayer",Gx="gtag",Hx=!1,Wx,Yx;const Xx="@firebase/analytics",Qx="0.7.8";(function(){ui(new Sh(Ax,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return Cg(r,n,t)},"PUBLIC")),ui(new Sh("analytics-internal",function(e){try{const t=e.getProvider(Ax).getImmediate();return{logEvent:(e,r,n)=>Dg(t,e,r,n)}}catch(t){throw Ox.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),yi(Xx,Qx),yi(Xx,Qx,"esm2017")})();var $x="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof e.g?"undefined"==typeof self?{}:self:e.g:window:globalThis,Zx={},Jx=Jx||{},ev=$x||self,l="closure_uid_"+(1E9*Math.random()>>>0),ea=0,fa;t.prototype.s=!1,t.prototype.na=function(){},t.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return-1},ma=Array.prototype.forEach?function(e,t,r){Array.prototype.forEach.call(e,t,r)}:function(t,r,n){const o=t.length,i="string"==typeof t?t.split(""):t;for(let e=0;e<o;e++)e in i&&r.call(n,i[e],e,t)};var na=String.prototype.trim?function(e){return e.trim()}:function(e){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},ta;a:{var x=ev.navigator;if(x){var va=x.userAgent;if(va){ta=va;break a}}ta=""}var wa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];Aa[" "]=Lg;var za=sa(ta,"Opera"),Ha=sa(ta,"Trident")||sa(ta,"MSIE"),y=sa(ta,"Edge"),Ia=y||Ha,Ja=sa(ta,"Gecko")&&(!sa(ta.toLowerCase(),"webkit")||sa(ta,"Edge"))&&!(sa(ta,"Trident")||sa(ta,"MSIE"))&&!sa(ta,"Edge"),Ka=sa(ta.toLowerCase(),"webkit")&&!sa(ta,"Edge"),La;a:{var Na="",Oa=function(){var e=ta;return Ja?/rv:([^\);]+)(\)|;)/.exec(e):y?/Edge\/([\d\.]+)/.exec(e):Ha?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Ka?/WebKit\/(\S+)/.exec(e):za?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Oa&&(Na=Oa?Oa[1]:""),Ha){var Pa=Fa();if(null!=Pa&&Pa>parseFloat(Na)){La=Pa+"";break a}}La=Na}var Qa={},Ga;if(ev.document&&Ha){var Sa=Fa();Ga=Sa?Sa:parseInt(La,10)||void 0}else Ga=void 0;var Ta=Ga,tv=function(){if(!ev.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ev.addEventListener("test",Lg,t),ev.removeEventListener("test",Lg,t)}catch(e){}return e}();Ra.prototype.h=function(){this.defaultPrevented=!0},ja(z,Ra);var Va={2:"touch",3:"pen",4:"mouse"};z.prototype.h=function(){z.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Wa="closure_listenable_"+(0|1E6*Math.random()),B=0;Za.prototype.add=function(t,r,n,o,i){var e=t.toString();t=this.g[e],t||(t=this.g[e]=[],this.h++);var s=Rg(t,r,o,i);return-1<s?(r=t[s],n||(r.fa=!1)):(r=new A(r,this.src,e,!!o,i),r.fa=n,t.push(r)),r};var Xa="closure_lm_"+(0|1E6*Math.random()),cb={},db="__closure_events_fn_"+(1E9*Math.random()>>>0);ja(Kg,t),Kg.prototype[Wa]=!0,Kg.prototype.removeEventListener=function(e,t,r,n){zg(this,e,t,r,n)},Kg.prototype.M=function(){if(Kg.Z.M.call(this),this.i){var t=this.i,r;for(r in t.g){for(var n=t.g[r],o=0;o<n.length;o++)Ya(n[o]);delete t.g[r],t.h--}}this.I=null},Kg.prototype.N=function(e,t,r,n){return this.i.add(e+"",t,!1,r,n)},Kg.prototype.O=function(e,t,r,n){return this.i.add(e+"",t,!0,r,n)};var pb=ev.JSON.stringify;var rb=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new vb,(e)=>e.reset());class vb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}var wb=!1,Cb=new class{constructor(){this.h=this.g=null}add(e,t){const r=rb.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},tb;ja(Qg,Kg),fa=Qg.prototype,fa.da=!1,fa.S=null,fa.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),C(this,"tick"),this.da&&($g(this),this.start()))}},fa.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},fa.M=function(){Qg.Z.M.call(this),$g(this),delete this.g};class Ab extends t{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(){this.h=arguments,this.g?this.i=!0:Jg(this)}M(){super.M(),this.g&&(ev.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}ja(ef,t);var Ib=[];ef.prototype.M=function(){ef.Z.M.call(this),tf(this)},ef.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},rf.prototype.Aa=function(){this.g=!1},rf.prototype.info=function(){};var Jb={},H=null;Jb.Ma="serverreachability",ja(lf,Ra),Jb.STAT_EVENT="statevent",ja(I,Ra),Jb.Na="timingevent",ja(J,Ra);var Rb={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Wb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};K.prototype.h=null;var Xb={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};ja(ff,Ra),ja(ac,Ra);var L;ja(bc,K),bc.prototype.g=function(){return new XMLHttpRequest},bc.prototype.i=function(){return{}},L=new bc;var cc=45E3,ec={},gc={};fa=dc.prototype,fa.setTimeout=function(e){this.P=e},fa.gb=function(e){e=e.target;const t=this.L;t&&3==Ad(e)?t.l():this.Ia(e)},fa.Ia=function(t){try{if(t==this.g)a:{const m=Ad(this.g);var o=this.g.Da();const p=this.g.ba();if(!(3>m)&&(3!=m||Ia||this.g&&(this.h.h||this.g.ga()||O(this.g)))){this.I||4!=m||7==o||(8==o||0>=p?cf(3):cf(2)),xc(this);var i=this.g.ba();this.N=i;b:if(kc(this)){var r=O(this.g);t="";var s=r.length,e=4==Ad(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rc(this),pc(this);var d="";break b}this.h.i=new ev.TextDecoder}for(o=0;o<s;o++)this.h.h=!0,t+=this.h.i.decode(r[o],{stream:e&&o==s-1});r.splice(0,s),this.h.g+=t,this.C=0,d=this.h.g}else d=this.g.ga();if(this.i=200==i,of(this.j,this.u,this.A,this.m,this.X,m,i),this.i){if(this.$&&!this.J){b:{if(this.g){var l=this.g,c;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(c)){var n=c;break b}}n=null}if(i=n)af(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,P(this,i);else{this.i=!1,this.o=3,mf(12),rc(this),pc(this);break a}}this.U?(qc(this,m,d),Ia&&this.i&&3==m&&(E(this.V,this.W,"tick",this.fb),this.W.start())):(af(this.j,this.m,d,null),P(this,d)),4==m&&rc(this),this.i&&!this.I&&(4==m?zc(this.l,this):(this.i=!1,vc(this)))}else 400==i&&0<d.indexOf("Unknown SID")?(this.o=3,mf(12)):(this.o=0,mf(13)),rc(this),pc(this)}}}catch(e){}finally{}},fa.fb=function(){if(this.g){var e=Ad(this.g),t=this.g.ga();this.C<t.length&&(xc(this),qc(this,e,t),this.i&&4!=e&&vc(this))}},fa.cancel=function(){this.I=!0,rc(this)},fa.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(F(this.j,this.A),2!=this.K&&(cf(3),mf(17)),rc(this),this.o=2,pc(this)):lc(this,this.Y-e)},fa=Kc.prototype,fa.R=function(){S(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},fa.T=function(){return S(this),this.g.concat()},fa.get=function(e,t){return Lc(this.h,e)?this.h[e]:t},fa.set=function(e,t){Lc(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},fa.forEach=function(t,r){for(var n=this.T(),o=0;o<n.length;o++){var i=n[o],e=this.get(i);t.call(r,e,i,this)}};var hc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;Nc.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Tc(t,Mc,!0),":");var r=this.i;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Tc(t,Mc,!0),"@"),e.push(encodeURIComponent(r+"").replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,null!=r&&e.push(":",r+"")),(r=this.l)&&(this.i&&"/"!=r.charAt(0)&&e.push("/"),e.push(Tc(r,"/"==r.charAt(0)?Xc:Vc,!0))),(r=this.h.toString())&&e.push("?",r),(r=this.o)&&e.push("#",Tc(r,$c)),e.join("")};var Mc=/[#\/\?@]/g,Vc=/[#\?:]/g,Xc=/[#\?]/g,Wc=/[#\?@]/g,$c=/#/g;fa=cd.prototype,fa.add=function(e,t){Rc(this),this.i=null,e=mc(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},fa.forEach=function(t,r){Rc(this),this.g.forEach(function(e,n){ma(e,function(o){t.call(r,o,n,this)},this)},this)},fa.T=function(){Rc(this);for(var t=this.g.R(),r=this.g.T(),n=[],o=0;o<r.length;o++)for(var i=t[o],e=0;e<i.length;e++)n.push(r[o]);return n},fa.R=function(e){Rc(this);var t=[];if("string"==typeof e)dd(this,e)&&(t=oa(t,this.g.get(mc(this,e))));else{e=this.g.R();for(var r=0;r<e.length;r++)t=oa(t,e[r])}return t},fa.set=function(e,t){return Rc(this),this.i=null,e=mc(this,e),dd(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},fa.get=function(e,t){return e?(e=this.R(e),0<e.length?e[0]+"":t):t},fa.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],r=this.g.T(),n=0;n<r.length;n++){var o=r[n],i=encodeURIComponent(o+"");o=this.R(o);for(var e=0,s;e<o.length;e++)s=i,""!==o[e]&&(s+="="+encodeURIComponent(o[e]+"")),t.push(s)}return this.i=t.join("&")};var Yc=class{constructor(e,t){this.h=e,this.g=t}},fd=10;Zc.prototype.cancel=function(){if(this.i=Fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},jd.prototype.stringify=function(e){return ev.JSON.stringify(e,void 0)},jd.prototype.parse=function(e){return ev.JSON.parse(e,void 0)},ja(od,K),od.prototype.g=function(){return new pd(this.l,this.j)},od.prototype.i=function(e){return function(){return e}}({}),ja(pd,Kg);var hd=0;fa=pd.prototype,fa.open=function(e,t){if(this.readyState!=hd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,td(this)},fa.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ev).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},fa.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ud(this)),this.readyState=hd},fa.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,td(this)),this.g&&(this.readyState=3,td(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!=typeof ev.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error("responseType must be empty for \"streamBinaryChunks\" mode responses.");this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qd(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},fa.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ud(this):td(this),3==this.readyState&&qd(this)}},fa.Ua=function(e){this.g&&(this.response=this.responseText=e,ud(this))},fa.Ta=function(e){this.g&&(this.response=e,ud(this))},fa.ha=function(){this.g&&ud(this)},fa.setRequestHeader=function(e,t){this.v.append(e,t)},fa.getResponseHeader=function(e){return this.h?this.h.get(e.toLowerCase())||"":""},fa.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var r=t.next();!r.done;)r=r.value,e.push(r[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(pd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var rd=ev.JSON.parse;ja(sd,Kg);var vd="",wd=/^https?$/i,xd=["POST","PUT"];fa=sd.prototype,fa.ea=function(t,r,n,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);r=r?r.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():L.g(),this.C=this.u?uf(this.u):uf(L),this.g.onreadystatechange=ia(this.Fa,this);try{this.F=!0,this.g.open(r,t+"",!0),this.F=!1}catch(e){return void pa(this,e)}t=n||"";const i=new Kc(this.headers);o&&Jc(o,function(e,t){i.set(t,e)}),o=v(i.T()),n=ev.FormData&&t instanceof ev.FormData,!(0<=k(xd,r))||o||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(e,t){this.g.setRequestHeader(t,e)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dd(this),0<this.B&&((this.K=X(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ia(this.pa,this)):this.A=Zg(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){pa(this,e)}},fa.pa=function(){"undefined"!=typeof Jx&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,C(this,"timeout"),this.abort(8))},fa.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,C(this,"complete"),C(this,"abort"),Ed(this))},fa.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ed(this,!0)),sd.Z.M.call(this)},fa.Fa=function(){this.s||(this.F||this.v||this.l?Cd(this):this.cb())},fa.cb=function(){Cd(this)},fa.ba=function(){try{return 2<Ad(this)?this.g.status:-1}catch(e){return-1}},fa.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},fa.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),rd(t)}},fa.Da=function(){return this.m},fa.La=function(){return"string"==typeof this.j?this.j:this.j+""},fa=Hd.prototype,fa.ma=8,fa.G=1,fa.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},fa.Ha=function(t){if(this.m)if(!(this.m=null,1==this.G))3==this.G&&(t?Nd(this,t):0==this.l.length||gd(this.i)||Nd(this));else if(!t){this.V=r(1E5*Math.random()),t=this.V++;const i=new dc(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=xa(s),ya(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)a:{for(var n=0,o=0;o<this.l.length;o++){b:{var e=this.l[o];if("__data__"in e.g&&(e=e.g.__data__,"string"==typeof e)){e=e.length;break b}e=void 0}if(void 0===e)break;if(n+=e,4096<n){n=o;break a}if(4096===n||o===this.l.length-1){n=o+1;break a}}n=1E3}else n=1E3;n=Kd(this,i,n),o=U(this.F),Sc(o,"RID",t),Sc(o,"CVER",22),this.D&&Sc(o,"X-HTTP-Session-Id",this.D),Qd(this,o),this.o&&s&&Fd(o,this.o,s),yc(this.i,i),this.Ra&&Sc(o,"TYPE","init"),this.ja?(Sc(o,"$req",n),Sc(o,"SID","null"),i.$=!0,fc(i,o,null)):fc(i,o,n),this.G=2}},fa.Ga=function(){if(this.u=null,wc(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pf(ia(this.bb,this),e)}},fa.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,mf(10),Ic(this),wc(this))},fa.ab=function(){null!=this.v&&(this.v=null,Ic(this),Gc(this),mf(19))},fa.jb=function(e){e?(this.h.info("Successfully pinged google.com"),mf(2)):(this.h.info("Failed to ping google.com"),mf(1))},fa=nc.prototype,fa.xa=function(){},fa.wa=function(){},fa.va=function(){},fa.ua=function(){},fa.Oa=function(){},Sd.prototype.g=function(e,t){return new Td(e,t)},ja(Td,Kg),Td.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,r=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Wg(ia(e.hb,e,t))),mf(0),e.W=t,e.aa=r||{},e.N=e.X,e.F=Ld(e,null,e.W),Md(e)},Td.prototype.close=function(){Id(this.g)},Td.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Jd(this.g,t)}else this.v?(t={},t.__data__=pb(e),Jd(this.g,t)):Jd(this.g,e)},Td.prototype.M=function(){this.g.j=null,delete this.j,Id(this.g),delete this.g,Td.Z.M.call(this)},ja(Y,ff),ja(Ud,ac),ja(Vd,nc),Vd.prototype.xa=function(){C(this.g,"a")},Vd.prototype.wa=function(e){C(this.g,new Y(e))},Vd.prototype.va=function(e){C(this.g,new Ud(e))},Vd.prototype.ua=function(){C(this.g,"b")},Sd.prototype.createWebChannel=Sd.prototype.g,Td.prototype.send=Td.prototype.u,Td.prototype.open=Td.prototype.m,Td.prototype.close=Td.prototype.close,Rb.NO_ERROR=0,Rb.TIMEOUT=8,Rb.HTTP_ERROR=6,Wb.COMPLETE="complete",gf.EventType=Xb,Xb.OPEN="a",Xb.CLOSE="b",Xb.ERROR="c",Xb.MESSAGE="d",Kg.prototype.listen=Kg.prototype.N,sd.prototype.listenOnce=sd.prototype.O,sd.prototype.getLastError=sd.prototype.La,sd.prototype.getLastErrorCode=sd.prototype.Da,sd.prototype.getStatus=sd.prototype.ba,sd.prototype.getResponseJson=sd.prototype.Qa,sd.prototype.getResponseText=sd.prototype.ga,sd.prototype.send=sd.prototype.ea;var yd=Zx.createWebChannelTransport=function(){return new Sd},rv=Zx.getStatEventTarget=function(){return df()},nv=Zx.ErrorCode=Rb,ov=Zx.EventType=Wb,av=Zx.Event=Jb,iv=Zx.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sv=Zx.FetchXmlHttpFactory=od,dv=Zx.WebChannel=gf,lv=Zx.XhrIo=sd;const cv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mv.UNAUTHENTICATED=new mv(null),mv.GOOGLE_CREDENTIALS=new mv("google-credentials-uid"),mv.FIRST_PARTY=new mv("first-party-uid"),mv.MOCK_USER=new mv("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pv="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Gh("@firebase/firestore"),gv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends lh{constructor(r,t){super(r,t),this.code=r,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.promise=new Promise((r,t)=>{this.resolve=r,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(r,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${r}`)}}class bv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(r,t){r.enqueueRetryable(()=>t(mv.UNAUTHENTICATED))}shutdown(){}}class hv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(r,t){this.changeListener=t,r.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wv{constructor(e){this.t=e,this.currentUser=mv.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(d,l){let e=this.i;const t=(r)=>this.i===e?Promise.resolve():(e=this.i,l(r));let n=new fv;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new fv,d.enqueueRetryable(()=>t(this.currentUser))};const i=()=>{const r=n;d.enqueueRetryable(async()=>{await r.promise,await t(this.currentUser)})},r=(e)=>{bf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e)=>r(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?r(e):(bf("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new fv)}},0),i()}getToken(){const r=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t)=>this.i===r?t?(xf("string"==typeof t.accessToken),new j(t.accessToken,this.currentUser)):null:(bf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken())):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xf(null===e||"string"==typeof e),new mv(e)}}class yv{constructor(r,t,e){this.type="FirstParty",this.user=mv.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const n=r.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),e&&this.headers.set("X-Goog-Iam-Authorization-Token",e)}}class xv{constructor(r,t,e){this.h=r,this.l=t,this.m=e}getToken(){return Promise.resolve(new yv(this.h,this.l,this.m))}start(r,t){r.enqueueRetryable(()=>t(mv.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&0<e.length&&this.headers.set("x-firebase-appcheck",this.value)}}class kv{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(r,o){const t=(e)=>{null!=e.error&&bf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const t=e.token!==this.p;return this.p=e.token,bf("FirebaseAppCheckTokenProvider",`Received ${t?"new":"existing"} token.`),t?o(e.token):Promise.resolve()};this.o=(n)=>{r.enqueueRetryable(()=>t(n))};const e=(e)=>{bf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((r)=>e(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?e(r):bf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e)=>e?(xf("string"==typeof e.token),this.p=e.token,new vv(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(r,n){this.previousValue=r,n&&(n.sequenceNumberHandler=(e)=>this.I(e),this.T=(e)=>n.writeSequenceNumber(e))}I(e){return this.previousValue=Db(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}tt.A=-1;class nt{static R(){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=r(256/o.length)*o.length;let e="";for(;20>e.length;){const r=kf(40);for(let n=0;n<r.length;++n)20>e.length&&r[n]<t&&(e+=o.charAt(r[n]%o.length))}return e}}class it{constructor(r,t){if(this.seconds=r,this.nanoseconds=t,0>t)throw new G(gv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(1e9<=t)throw new G(gv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(-62135596800>r)throw new G(gv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+r);if(253402300800<=r)throw new G(gv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+r)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(o){const t=r(o/1e3),e=r(1e6*(o-1e3*t));return new it(t,e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?st(this.nanoseconds,e.nanoseconds):st(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return(e+"").padStart(12,"0")+"."+(this.nanoseconds+"").padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.timestamp=e}static fromTimestamp(e){return new at(e)}static min(){return new at(new it(0,0))}static max(){return new at(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class ct{constructor(r,t,e){void 0===t?t=0:t>r.length&&yf(),void 0===e?e=r.length-t:e>r.length-t&&yf(),this.segments=r,this.offset=t,this.len=e}get length(){return this.len}isEqual(e){return 0===ct.comparator(this,e)}child(r){const n=this.segments.slice(this.offset,this.limit());return r instanceof ct?r.forEach((e)=>{n.push(e)}):n.push(r),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(r){if(r.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==r.get(t))return!1;return!0}isImmediateParentOf(r){if(this.length+1!==r.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==r.get(t))return!1;return!0}forEach(r){for(let t=this.offset,e=this.limit();t<e;t++)r(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(r,t){const e=Pb(r.length,t.length);for(let o=0;o<e;o++){const e=r.get(o),n=t.get(o);if(e<n)return-1;if(e>n)return 1}return r.length<t.length?-1:r.length>t.length?1:0}}class dt extends ct{construct(r,t,e){return new dt(r,t,e)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...r){const t=[];for(const e of r){if(0<=e.indexOf("//"))throw new G(gv.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);t.push(...e.split("/").filter((e)=>0<e.length))}return new dt(t)}static emptyPath(){return new dt([])}}const _t=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends null{construct(r,t,e){return new wt(r,t,e)}static isValidIdentifier(e){return _t.test(e)}canonicalString(){return this.toArray().map((e)=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new wt(["__name__"])}static fromServerFormat(o){const t=[];let d="",n=0;const s=()=>{if(0===d.length)throw new G(gv.INVALID_ARGUMENT,`Invalid field path (${o}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(d),d=""};let i=!1;for(;n<o.length;){const t=o[n];if("\\"===t){if(n+1===o.length)throw new G(gv.INVALID_ARGUMENT,"Path has trailing escape character: "+o);const t=o[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new G(gv.INVALID_ARGUMENT,"Path has invalid escape sequence: "+o);d+=t,n+=2}else"`"===t?(i=!i,n++):"."!==t||i?(d+=t,n++):(s(),n++)}if(s(),i)throw new G(gv.INVALID_ARGUMENT,"Unterminated ` in path: "+o);return new wt(t)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(wt.comparator)}covers(r){for(const t of this.fields)if(t.isPrefixOf(r))return!0;return!1}isEqual(e){return rt(this.fields,e.fields,(r,t)=>r.isEqual(t))}}class gt{constructor(e){this.binaryString=e}static fromBase64String(r){const t=atob(r);return new gt(t)}static fromUint8Array(r){const t=function(r){let t="";for(let e=0;e<r.length;++e)t+=Vb(r[e]);return t}(r);return new gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(r){const t=new Uint8Array(r.length);for(let e=0;e<r.length;e++)t[e]=r.charCodeAt(e);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return st(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const pt=null;class It{constructor(d,t,e,n,s,i,r,o){this.databaseId=d,this.appId=t,this.persistenceKey=e,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=r,this.useFetchStreams=o}}class Vt{constructor(r,t){this.projectId=r,this.database=t||"(default)"}static empty(){return new Vt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Vt&&e.projectId===this.projectId&&e.database===this.database}}class vt{constructor(e){this.path=e}static fromPath(e){return new vt(dt.fromString(e))}static fromName(e){return new vt(dt.fromString(e).popFirst(5))}static empty(){return new vt(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return 2<=this.path.length&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===dt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(r,t){return dt.comparator(r.path,t.path)}static isDocumentKey(e){return 0==e.length%2}static fromSegments(e){return new vt(new dt(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Nt={nullValue:"NULL_VALUE"};class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(r){if(r.isEmpty())return this.value;{let t=this.value;for(let e=0;e<r.length-1;++e)if(t=(t.mapValue.fields||{})[r.get(e)],!jt(t))return null;return t=(t.mapValue.fields||{})[r.lastSegment()],t||null}}set(r,t){this.getFieldsMap(r.popLast())[r.lastSegment()]=Wt(t)}setAll(r){let o=wt.emptyPath(),e={},n=[];r.forEach((r,s)=>{if(!o.isImmediateParentOf(s)){const r=this.getFieldsMap(o);this.applyChanges(r,e,n),e={},n=[],o=s.popLast()}r?e[s.lastSegment()]=Wt(r):n.push(s.lastSegment())});const t=this.getFieldsMap(o);this.applyChanges(t,e,n)}delete(r){const t=this.field(r.popLast());jt(t)&&t.mapValue.fields&&delete t.mapValue.fields[r.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(r){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let e=0,n;e<r.length;++e)n=t.mapValue.fields[r.get(e)],jt(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[r.get(e)]=n),t=n;return t.mapValue.fields}applyChanges(r,t,o){ht(t,(t,e)=>r[t]=e);for(const n of o)delete r[n]}clone(){return new kt(Wt(this.value))}}class te{constructor(o,t,e,n,s,i){this.key=o,this.documentType=t,this.version=e,this.readTime=n,this.data=s,this.documentState=i}static newInvalidDocument(e){return new te(e,0,at.min(),at.min(),kt.empty(),0)}static newFoundDocument(r,t,e){return new te(r,1,t,at.min(),e,0)}static newNoDocument(r,t){return new te(r,2,t,at.min(),kt.empty(),0)}static newUnknownDocument(r,t){return new te(r,3,t,at.min(),kt.empty(),2)}convertToFoundDocument(r,t){return this.version=r,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ne{constructor(r,t,e,n){this.indexId=r,this.collectionGroup=t,this.fields=e,this.indexState=n}}ne.UNKNOWN_ID=-1;class se{constructor(r,t){this.fieldPath=r,this.kind=t}}class oe{constructor(r,t){this.sequenceNumber=r,this.offset=t}static empty(){return new oe(0,ue.min())}}class ue{constructor(r,t,e){this.readTime=r,this.documentKey=t,this.largestBatchId=e}static min(){return new ue(at.min(),vt.empty(),-1)}static max(){return new ue(at.max(),vt.empty(),-1)}}class he{constructor(d,t=null,e=[],n=[],s=null,i=null,r=null){this.path=d,this.collectionGroup=t,this.orderBy=e,this.filters=n,this.limit=s,this.startAt=i,this.endAt=r,this.P=null}}class fe extends null{constructor(r,t,e){super(),this.field=r,this.op=t,this.value=e}static create(r,t,e){return r.isKeyField()?"in"===t||"not-in"===t?this.V(r,t,e):new Te(r,t,e):"array-contains"===t?new Re(r,e):"in"===t?new be(r,e):"not-in"===t?new Ve(r,e):"array-contains-any"===t?new ve(r,e):new fe(r,t,e)}static V(r,t,e){return"in"===t?new Ee(r,e):new Ae(r,e)}matches(r){const t=r.data.field(this.field);return"!="===this.op?null!==t&&this.v(Ft(t,this.value)):null!==t&&Ct(this.value)===Ct(t)&&this.v(Ft(t,this.value))}v(e){switch(this.op){case"<":return 0>e;case"<=":return 0>=e;case"==":return 0===e;case"!=":return 0!==e;case">":return 0<e;case">=":return 0<=e;default:return yf();}}S(){return 0<=["<","<=",">",">=","!=","not-in"].indexOf(this.op)}}class Te extends null{constructor(r,t,e){super(r,t,e),this.key=vt.fromName(e.referenceValue)}matches(r){const t=vt.comparator(r.key,this.key);return this.v(t)}}class Ee extends null{constructor(r,t){super(r,"in",t),this.keys=Ie("in",t)}matches(r){return this.keys.some((t)=>t.isEqual(r.key))}}class Ae extends null{constructor(r,t){super(r,"not-in",t),this.keys=Ie("not-in",t)}matches(r){return!this.keys.some((t)=>t.isEqual(r.key))}}class Re extends null{constructor(r,t){super(r,"array-contains",t)}matches(r){const t=r.data.field(this.field);return Kt(t)&&Ot(t.arrayValue,this.value)}}class be extends null{constructor(r,t){super(r,"in",t)}matches(r){const t=r.data.field(this.field);return null!==t&&Ot(this.value.arrayValue,t)}}class Ve extends null{constructor(r,t){super(r,"not-in",t)}matches(r){if(Ot(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=r.data.field(this.field);return null!==t&&!Ot(this.value.arrayValue,t)}}class ve extends null{constructor(r,t){super(r,"array-contains-any",t)}matches(r){const t=r.data.field(this.field);return Kt(t)&&t.arrayValue.values&&t.arrayValue.values.some((e)=>Ot(this.value.arrayValue,e))}}class Se{constructor(r,t){this.position=r,this.inclusive=t}}class De{constructor(r,t="asc"){this.field=r,this.dir=t}}class Ce{constructor(d,t=null,e=[],n=[],s=null,i="F",r=null,o=null){this.path=d,this.collectionGroup=t,this.explicitOrderBy=e,this.filters=n,this.limit=s,this.limitType=i,this.startAt=r,this.endAt=o,this.D=null,this.C=null,this.startAt,this.endAt}}class Me extends null{}class un extends null{constructor(e){super(),this.elements=e}}class an extends null{constructor(e){super(),this.elements=e}}class hn extends null{constructor(r,t){super(),this.M=r,this.k=t}}class fn{constructor(r,t){this.field=r,this.transform=t}}class wn{constructor(r,t){this.version=r,this.transformResults=t}}class gn{constructor(r,t){this.updateTime=r,this.exists=t}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class yn extends null{constructor(r,t,e,n=[]){super(),this.key=r,this.value=t,this.precondition=e,this.fieldTransforms=n,this.type=0}}class bn extends null{constructor(r,t,e,n,o=[]){super(),this.key=r,this.data=t,this.fieldMask=e,this.precondition=n,this.fieldTransforms=o,this.type=1}}class Vn extends null{constructor(r,t){super(),this.key=r,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Cn extends null{constructor(r,t){super(),this.key=r,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn,kn;(kn=Nn||(Nn={}))[kn.OK=0]="OK",kn[kn.CANCELLED=1]="CANCELLED",kn[kn.UNKNOWN=2]="UNKNOWN",kn[kn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",kn[kn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",kn[kn.NOT_FOUND=5]="NOT_FOUND",kn[kn.ALREADY_EXISTS=6]="ALREADY_EXISTS",kn[kn.PERMISSION_DENIED=7]="PERMISSION_DENIED",kn[kn.UNAUTHENTICATED=16]="UNAUTHENTICATED",kn[kn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",kn[kn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",kn[kn.ABORTED=10]="ABORTED",kn[kn.OUT_OF_RANGE=11]="OUT_OF_RANGE",kn[kn.UNIMPLEMENTED=12]="UNIMPLEMENTED",kn[kn.INTERNAL=13]="INTERNAL",kn[kn.UNAVAILABLE=14]="UNAVAILABLE",kn[kn.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(r,t){this.mapKeyFn=r,this.equalsFn=t,this.inner={},this.innerSize=0}get(r){const t=this.mapKeyFn(r),o=this.inner[t];if(void 0!==o)for(const[t,e]of o)if(this.equalsFn(t,r))return e}has(e){return void 0!==this.get(e)}set(r,t){const e=this.mapKeyFn(r),o=this.inner[e];if(void 0===o)return this.inner[e]=[[r,t]],void this.innerSize++;for(let e=0;e<o.length;e++)if(this.equalsFn(o[e][0],r))return void(o[e]=[r,t]);o.push([r,t]),this.innerSize++}delete(r){const t=this.mapKeyFn(r),e=this.inner[t];if(void 0===e)return!1;for(let n=0;n<e.length;n++)if(this.equalsFn(e[n][0],r))return 1===e.length?delete this.inner[t]:e.splice(n,1),this.innerSize--,!0;return!1}forEach(r){ht(this.inner,(t,o)=>{for(const[n,e]of o)r(n,e)})}isEmpty(){return lt(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(r,t){this.comparator=r,this.root=t||Ln.EMPTY}insert(r,t){return new $n(this.comparator,this.root.insert(r,t,this.comparator).copy(null,null,Ln.BLACK,null,null))}remove(e){return new $n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ln.BLACK,null,null))}get(r){for(let t=this.root;!t.isEmpty();){const e=this.comparator(r,t.key);if(0===e)return t.value;0>e?t=t.left:0<e&&(t=t.right)}return null}indexOf(r){for(let t=0,e=this.root;!e.isEmpty();){const n=this.comparator(r,e.key);if(0===n)return t+e.left.size;0>n?e=e.left:(t+=e.left.size+1,e=e.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(r){this.inorderTraversal((t,e)=>(r(t,e),!1))}toString(){const r=[];return this.inorderTraversal((t,e)=>(r.push(`${t}:${e}`),!1)),`{${r.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bn(this.root,e,this.comparator,!0)}}class Bn{constructor(r,t,e,n){this.isReverse=n,this.nodeStack=[];for(let o=1;!r.isEmpty();)if(o=t?e(r.key,t):1,t&&n&&(o*=-1),0>o)r=this.isReverse?r.left:r.right;else{if(0===o){this.nodeStack.push(r);break}this.nodeStack.push(r),r=this.isReverse?r.right:r.left}}getNext(){let r=this.nodeStack.pop();const t={key:r.key,value:r.value};if(this.isReverse)for(r=r.left;!r.isEmpty();)this.nodeStack.push(r),r=r.right;else for(r=r.right;!r.isEmpty();)this.nodeStack.push(r),r=r.left;return t}hasNext(){return 0<this.nodeStack.length}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ln{constructor(r,t,e,n,o){this.key=r,this.value=t,this.color=null==e?Ln.RED:e,this.left=null==n?Ln.EMPTY:n,this.right=null==o?Ln.EMPTY:o,this.size=this.left.size+1+this.right.size}copy(r,t,e,n,o){return new Ln(null==r?this.key:r,null==t?this.value:t,null==e?this.color:e,null==n?this.left:n,null==o?this.right:o)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(r,t,e){let n=this;const o=e(r,n.key);return n=0>o?n.copy(null,null,null,n.left.insert(r,t,e),null):0===o?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(r,t,e)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(r,t){let e=this,o;if(0>t(r,e.key))e.left.isEmpty()||e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.remove(r,t),null);else{if(e.left.isRed()&&(e=e.rotateRight()),e.right.isEmpty()||e.right.isRed()||e.right.left.isRed()||(e=e.moveRedRight()),0===t(r,e.key)){if(e.right.isEmpty())return Ln.EMPTY;o=e.right.min(),e=e.copy(o.key,o.value,null,null,e.right.removeMin())}e=e.copy(null,null,null,null,e.right.remove(r,t))}return e.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const r=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,r,t)}checkMaxDepth(){const e=this.check();return Ob(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yf();if(this.right.isRed())throw yf();const e=this.left.check();if(e!==this.right.check())throw yf();return e+(this.isRed()?0:1)}}Ln.EMPTY=null,Ln.RED=!0,Ln.BLACK=!1,Ln.EMPTY=new class{constructor(){this.size=0}get key(){throw yf()}get value(){throw yf()}get color(){throw yf()}get left(){throw yf()}get right(){throw yf()}copy(){return this}insert(r,t){return new Ln(r,t)}remove(){return this}isEmpty(){return!0}inorderTraversal(){return!1}reverseTraversal(){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.comparator=e,this.data=new $n(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(r){this.data.inorderTraversal((t)=>(r(t),!1))}forEachInRange(r,t){for(const e=this.data.getIteratorFrom(r[0]);e.hasNext();){const n=e.getNext();if(0<=this.comparator(n.key,r[1]))return;t(n.key)}}forEachWhile(r,t){let e;for(e=void 0===t?this.data.getIterator():this.data.getIteratorFrom(t);e.hasNext();)if(!r(e.getNext().key))return}firstAfterOrEqual(r){const t=this.data.getIteratorFrom(r);return t.hasNext()?t.getNext().key:null}getIterator(){return new qn(this.data.getIterator())}getIteratorFrom(e){return new qn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(r){let n=this;return n.size<r.size&&(n=r,r=this),r.forEach((e)=>{n=n.add(e)}),n}isEqual(r){if(!(r instanceof Un))return!1;if(this.size!==r.size)return!1;for(const o=this.data.getIterator(),e=r.data.getIterator();o.hasNext();){const r=o.getNext().key,t=e.getNext().key;if(0!==this.comparator(r,t))return!1}return!0}toArray(){const r=[];return this.forEach((t)=>{r.push(t)}),r}toString(){const r=[];return this.forEach((t)=>r.push(t)),"SortedSet("+r.toString()+")"}copy(r){const t=new Un(this.comparator);return t.data=r,t}}class qn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}const Kn=new $n(vt.comparator),Qn=new $n(vt.comparator),Wn=new $n(vt.comparator),Jn=new Un(vt.comparator),Yn=new Un(st);class Zn{constructor(r,t,e,n,o){this.snapshotVersion=r,this.targetChanges=t,this.targetMismatches=e,this.documentUpdates=n,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(r,t){const e=new Map;return e.set(r,es.createSynthesizedTargetChangeForCurrentChange(r,t)),new Zn(at.min(),e,Xn(),Gn(),Hn())}}class es{constructor(r,t,e,n,o){this.resumeToken=r,this.current=t,this.addedDocuments=e,this.modifiedDocuments=n,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(r,t){return new es(gt.EMPTY_BYTE_STRING,t,Hn(),Hn(),Hn())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(r,t,e,n){this.O=r,this.removedTargetIds=t,this.key=e,this.F=n}}class ss{constructor(r,t){this.targetId=r,this.$=t}}class is{constructor(r,t,e=gt.EMPTY_BYTE_STRING,n=null){this.state=r,this.targetIds=t,this.resumeToken=e,this.cause=n}}class rs{constructor(){this.B=0,this.L=as(),this.U=gt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){0<e.approximateByteSize()&&(this.K=!0,this.U=e)}H(){let r=Hn(),t=Hn(),e=Hn();return this.L.forEach((n,o)=>{0===o?r=r.add(n):2===o?t=t.add(n):1===o?e=e.add(n):yf()}),new es(this.U,this.q,r,t,e)}J(){this.K=!1,this.L=as()}Y(r,t){this.K=!0,this.L=this.L.insert(r,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class os{constructor(e){this.nt=e,this.st=new Map,this.it=Gn(),this.rt=ts(),this.ot=new Un(st)}ut(r){for(const t of r.O)r.F&&r.F.isFoundDocument()?this.at(t,r.F):this.ct(t,r.key,r.F);for(const t of r.removedTargetIds)this.ct(t,r.key,r.F)}ht(r){this.forEachTarget(r,(t)=>{const e=this.lt(t);switch(r.state){case 0:this.ft(t)&&e.W(r.resumeToken);break;case 1:e.tt(),e.G||e.J(),e.W(r.resumeToken);break;case 2:e.tt(),e.G||this.removeTarget(t);break;case 3:this.ft(t)&&(e.et(),e.W(r.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),e.W(r.resumeToken));break;default:yf();}})}forEachTarget(r,o){0<r.targetIds.length?r.targetIds.forEach(o):this.st.forEach((e,t)=>{this.ft(t)&&o(t)})}_t(r){const o=r.targetId,e=r.$.count,n=this.wt(o);if(n){const r=n.target;if(!me(r))this.gt(o)!==e&&(this.dt(o),this.ot=this.ot.add(o));else if(0===e){const e=new vt(r.path);this.ct(o,e,te.newNoDocument(e,at.min()))}else xf(1===e)}}yt(r){const t=new Map;this.st.forEach((e,n)=>{const o=this.wt(n);if(o){if(e.current&&me(o.target)){const t=new vt(o.target.path);null!==this.it.get(t)||this.It(n,t)||this.ct(n,t,te.newNoDocument(t,r))}e.j&&(t.set(n,e.H()),e.J())}});let o=Hn();this.rt.forEach((r,t)=>{let n=!0;t.forEachWhile((r)=>{const t=this.wt(r);return!t||2===t.purpose||(n=!1,!1)}),n&&(o=o.add(r))}),this.it.forEach((t,e)=>e.setReadTime(r));const e=new Zn(r,t,this.ot,this.it,o);return this.it=Gn(),this.rt=ts(),this.ot=new Un(st),e}at(r,t){if(this.ft(r)){const e=this.It(r,t.key)?2:0;this.lt(r).Y(t.key,e),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(r))}}ct(r,t,e){if(this.ft(r)){const n=this.lt(r);this.It(r,t)?n.Y(t,1):n.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(r)),e&&(this.it=this.it.insert(t,e))}}removeTarget(e){this.st.delete(e)}gt(r){const t=this.lt(r).H();return this.nt.getRemoteKeysForTarget(r).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(r){let t=this.st.get(r);return t||(t=new rs,this.st.set(r,t)),t}Tt(r){let t=this.rt.get(r);return t||(t=new Un(st),this.rt=this.rt.insert(r,t)),t}ft(r){const t=null!==this.wt(r);return t||bf("WatchChangeAggregator","Detected inactive target",r),t}wt(r){const t=this.st.get(r);return t&&t.G?null:this.nt.Et(r)}dt(r){this.st.set(r,new rs),this.nt.getRemoteKeysForTarget(r).forEach((t)=>{this.ct(r,t,null)})}It(r,t){return this.nt.getRemoteKeysForTarget(r).has(t)}}const us=(()=>{return{asc:"ASCENDING",desc:"DESCENDING"}})(),hs=(()=>{return{"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class ls{constructor(r,t){this.databaseId=r,this.N=t}}const fs=null,Hs={},Xs=null,ni=null,Iv=null,ii=[...[...[...[...["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments"],"clientMetadata"],"remoteDocumentGlobal"],"collectionParents"],"bundles","namedQueries"],di=[...ii,"documentOverlays"],_i=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wi=[..._i,"indexConfiguration","indexState","indexEntries"],mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e)=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},(e)=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(r,o){return this.callbackAttached&&yf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(o,this.error):this.wrapSuccess(r,this.result):new gi((i,n)=>{this.nextCallback=(t)=>{this.wrapSuccess(r,t).next(i,n)},this.catchCallback=(e)=>{this.wrapFailure(o,e).next(i,n)}})}toPromise(){return new Promise((r,t)=>{this.next(r,t)})}wrapUserFunction(r){try{const t=r();return t instanceof gi?t:gi.resolve(t)}catch(e){return gi.reject(e)}}wrapSuccess(r,t){return r?this.wrapUserFunction(()=>r(t)):gi.resolve(t)}wrapFailure(r,t){return r?this.wrapUserFunction(()=>r(t)):gi.reject(t)}static resolve(r){return new gi((t)=>{t(r)})}static reject(r){return new gi((t,e)=>{e(r)})}static waitFor(o){return new gi((t,e)=>{let n=0,s=0,i=!1;o.forEach((r)=>{++n,r.next(()=>{++s,i&&s==n&&t()},(r)=>e(r))}),i=!0,s==n&&t()})}static or(r){let t=gi.resolve(!1);for(const e of r)t=t.next((r)=>r?gi.resolve(r):e());return t}static forEach(r,o){const e=[];return r.forEach((r,t)=>{e.push(o.call(this,r,t))}),this.waitFor(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(r,t){this.action=r,this.transaction=t,this.aborted=!1,this.At=new fv,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Ei(r,t.error)):this.At.resolve()},this.transaction.onerror=(t)=>{const e=bi(t.target.error);this.At.reject(new Ei(r,e))}}static open(r,o,e,t){try{return new pi(o,r.transaction(t,e))}catch(e){throw new Ei(o,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(bf("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(r){const t=this.transaction.objectStore(r);return new Ai(t)}}class Ii{constructor(r,t,e){this.name=r,this.version=t,this.bt=e,12.2===Ii.Vt(getUA())&&hf("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return bf("SimpleDb","Removing database:",e),Ri(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!isIndexedDBAvailable())return!1;if(Ii.St())return!0;const r=getUA(),t=Ii.Vt(r),e=Ii.Dt(r);return!(0<r.indexOf("MSIE ")||0<r.indexOf("Trident/")||0<r.indexOf("Edge/")||0<t&&10>t||0<e&&4.5>e)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Ct)}static xt(r,t){return r.store(t)}static Vt(r){const t=r.match(/i(?:phone|pad|pod) os ([\d_]+)/i),e=t?t[1].split("_").slice(0,2).join("."):"-1";return+e}static Dt(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return+e}async Nt(r){return this.db||(bf("SimpleDb","Opening database:",this.name),this.db=await new Promise((o,t)=>{const n=indexedDB.open(this.name,this.version);n.onsuccess=(e)=>{const t=e.target.result;o(t)},n.onblocked=()=>{t(new Ei(r,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=(n)=>{const e=n.target.error;"VersionError"===e.name?t(new G(gv.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===e.name?t(new G(gv.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+e)):t(new Ei(r,e))},n.onupgradeneeded=(r)=>{bf("SimpleDb","Database \""+this.name+"\" requires upgrade from version:",r.oldVersion);const t=r.target.result;this.bt.kt(t,n.transaction,r.oldVersion,this.version).next(()=>{bf("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=(e)=>this.Mt(e)),this.db}Ot(r){this.Mt=r,this.db&&(this.db.onversionchange=(t)=>r(t))}async runTransaction(o,t,i,n){for(let s=0;;){++s;try{this.db=await this.Nt(o);const s=pi.open(this.db,o,"readonly"===s?"readonly":"readwrite",i),e=n(s).next((e)=>(s.Pt(),e)).catch((e)=>(s.abort(e),gi.reject(e))).toPromise();return e.catch(()=>{}),await s.Rt,e}catch(r){const t="FirebaseError"!==r.name&&3>s;if(bf("SimpleDb","Transaction failed with error:",r.message,"Retrying:",t),this.close(),!t)return Promise.reject(r)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ti{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Ri(this.Ft.delete())}}class Ei extends null{constructor(r,t){super(gv.UNAVAILABLE,`IndexedDB transaction '${r}' failed: ${t}`),this.name="IndexedDbTransactionError"}}class Ai{constructor(e){this.store=e}put(r,t){let e;return void 0===t?(bf("SimpleDb","PUT",this.store.name,"<auto-key>",r),e=this.store.put(r)):(bf("SimpleDb","PUT",this.store.name,r,t),e=this.store.put(t,r)),Ri(e)}add(e){return bf("SimpleDb","ADD",this.store.name,e,e),Ri(this.store.add(e))}get(r){return Ri(this.store.get(r)).next((t)=>(void 0===t&&(t=null),bf("SimpleDb","GET",this.store.name,r,t),t))}delete(e){return bf("SimpleDb","DELETE",this.store.name,e),Ri(this.store.delete(e))}count(){return bf("SimpleDb","COUNT",this.store.name),Ri(this.store.count())}qt(r,t){const o=this.options(r,t);if(o.index||"function"!=typeof this.store.getAll){const r=this.cursor(o),i=[];return this.Kt(r,(e,t)=>{i.push(t)}).next(()=>i)}{const r=this.store.getAll(o.range);return new gi((o,e)=>{r.onerror=(r)=>{e(r.target.error)},r.onsuccess=(e)=>{o(e.target.result)}})}}Gt(r,t){const o=this.store.getAll(r,null===t?void 0:t);return new gi((r,n)=>{o.onerror=(e)=>{n(e.target.error)},o.onsuccess=(t)=>{r(t.target.result)}})}Qt(r,t){bf("SimpleDb","DELETE ALL",this.store.name);const e=this.options(r,t);e.jt=!1;const n=this.cursor(e);return this.Kt(n,(r,t,e)=>e.delete())}Wt(r,t){let e;t?e=r:(e={},t=r);const n=this.cursor(e);return this.Kt(n,t)}zt(r){const t=this.cursor({});return new gi((o,n)=>{t.onerror=(r)=>{const t=bi(r.target.error);n(t)},t.onsuccess=(t)=>{const e=t.target.result;e?r(e.primaryKey,e.value).next((r)=>{r?e.continue():o()}):o()}})}Kt(r,d){const e=[];return new gi((n,o)=>{r.onerror=(e)=>{o(e.target.error)},r.onsuccess=(s)=>{const t=s.target.result;if(!t)return void n();const l=new Ti(t),r=d(t.primaryKey,t.value,l);if(r instanceof gi){const n=r.catch((e)=>(l.done(),gi.reject(e)));e.push(n)}l.isDone?n():null===l.Lt?t.continue():t.continue(l.Lt)}}).next(()=>gi.waitFor(e))}options(r,o){let i;return void 0!==r&&("string"==typeof r?i=r:o=r),{index:i,range:o}}cursor(r){let t="next";if(r.reverse&&(t="prev"),r.index){const e=this.store.index(r.index);return r.jt?e.openKeyCursor(r.range,t):e.openCursor(r.range,t)}return this.store.openCursor(r.range,t)}}let Pi=null;class Vi extends null{constructor(r,t){super(),this.Ht=r,this.currentSequenceNumber=t}}class Si{constructor(r,t,e,n){this.batchId=r,this.localWriteTime=t,this.baseMutations=e,this.mutations=n}applyToRemoteDocument(r,t){const o=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const e=this.mutations[n];e.key.isEqual(r.key)&&pn(e,r,o[n])}}applyToLocalView(r){for(const t of this.baseMutations)t.key.isEqual(r.key)&&Tn(t,r,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(r.key)&&Tn(t,r,this.localWriteTime)}applyToLocalDocumentSet(r){this.mutations.forEach((t)=>{const e=r.get(t.key),n=e;this.applyToLocalView(n),e.isValidDocument()||n.convertToNoDocument(at.min())})}keys(){return this.mutations.reduce((r,t)=>r.add(t.key),Hn())}isEqual(e){return this.batchId===e.batchId&&rt(this.mutations,e.mutations,(r,t)=>En(r,t))&&rt(this.baseMutations,e.baseMutations,(r,t)=>En(r,t))}}class Ci{constructor(r,t,e,n){this.batch=r,this.commitVersion=t,this.mutationResults=e,this.docVersions=n}static from(r,t,e){xf(r.mutations.length===e.length);let n=Wn;const o=r.mutations;for(let i=0;i<o.length;i++)n=n.insert(o[i].key,e[i].version);return new Ci(r,t,e,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(r,t){this.largestBatchId=r,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(d,t,e,n,s=at.min(),i=at.min(),r=gt.EMPTY_BYTE_STRING){this.target=d,this.targetId=t,this.purpose=e,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=r}withSequenceNumber(e){return new Ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(r,t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,r)}withLastLimboFreeSnapshotVersion(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.Jt=e}}class Mi{getBundleMetadata(r,t){return ji(r).get(t).next((r)=>{if(r)return{id:(t=r).bundleId,createTime:Bi(t.createTime),version:t.version};var t})}saveBundleMetadata(r,t){return ji(r).put({bundleId:(e=t).id,createTime:$i(ws(e.createTime)),version:e.version});var e}getNamedQuery(r,t){return zi(r).get(t).next((r)=>{if(r)return{name:(t=r).name,query:Ki(t.bundledQuery),readTime:Bi(t.readTime)};var t})}saveNamedQuery(r,t){return zi(r).put(function(e){return{name:e.name,readTime:$i(ws(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}class Wi{constructor(r,t){this.M=r,this.userId=t}static Yt(r,t){const e=t.uid||"";return new Wi(r,e)}getOverlay(r,t){return Hi(r).get(Qi(this.userId,t)).next((e)=>e?Gi(this.M,e):null)}saveOverlays(o,t,e){const d=[];return e.forEach((e,n)=>{const i=new xi(t,n);d.push(this.Xt(o,i))}),gi.waitFor(d)}removeOverlaysForBatchId(r,t,o){const e=new Set;t.forEach((r)=>e.add(Gs(r.getCollectionPath())));const n=[];return e.forEach((t)=>{const e=IDBKeyRange.bound([this.userId,t,o],[this.userId,t,o+1],!1,!0);n.push(Hi(r).Qt("collectionPathOverlayIndex",e))}),gi.waitFor(n)}getOverlaysForCollection(o,t,e){const n=zn(),s=Gs(t),i=IDBKeyRange.bound([this.userId,s,e],[this.userId,s,_b],!0);return Hi(o).qt("collectionPathOverlayIndex",i).next((r)=>{for(const o of r){const e=Gi(this.M,o);n.set(e.getKey(),e)}return n})}getOverlaysForCollectionGroup(d,t,e,l){const s=zn();let i;const r=IDBKeyRange.bound([this.userId,t,e],[this.userId,t,_b],!0);return Hi(d).Wt({index:"collectionGroupOverlayIndex",range:r},(r,t,e)=>{const n=Gi(this.M,t);s.size()<l||n.largestBatchId===i?(s.set(n.getKey(),n),i=n.largestBatchId):e.done()}).next(()=>s)}Xt(r,t){return Hi(r).put(function(o,t,d){const[n,s,l]=Qi(t,d.mutation.key);return{userId:t,collectionPath:s,documentId:l,collectionGroup:d.mutation.key.getCollectionGroup(),largestBatchId:d.largestBatchId,overlayMutation:vs(o.Jt,d.mutation)}}(this.M,this.userId,t))}}class Ji{constructor(){}Zt(r,t){this.te(r,t),t.ee()}te(r,t){if("nullValue"in r)this.ne(t,5);else if("booleanValue"in r)this.ne(t,10),t.se(r.booleanValue?1:0);else if("integerValue"in r)this.ne(t,15),t.se(Tt(r.integerValue));else if("doubleValue"in r){const e=Tt(r.doubleValue);isNaN(e)?this.ne(t,13):(this.ne(t,15),St(e)?t.se(0):t.se(e))}else if("timestampValue"in r){const e=r.timestampValue;this.ne(t,20),"string"==typeof e?t.ie(e):(t.ie(`${e.seconds||""}`),t.se(e.nanos||0))}else if("stringValue"in r)this.re(r.stringValue,t),this.oe(t);else if("bytesValue"in r)this.ne(t,30),t.ue(Et(r.bytesValue)),this.oe(t);else if("referenceValue"in r)this.ae(r.referenceValue,t);else if("geoPointValue"in r){const e=r.geoPointValue;this.ne(t,45),t.se(e.latitude||0),t.se(e.longitude||0)}else"mapValue"in r?zt(r)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(r.mapValue,t),this.oe(t)):"arrayValue"in r?(this.he(r.arrayValue,t),this.oe(t)):yf()}re(r,t){this.ne(t,25),this.le(r,t)}le(r,t){t.ie(r)}ce(r,o){const e=r.fields||{};this.ne(o,55);for(const n of Object.keys(e))this.re(n,o),this.te(e[n],o)}he(r,o){const e=r.values||[];this.ne(o,50);for(const n of e)this.te(n,o)}ae(r,n){this.ne(n,37),vt.fromName(r).path.forEach((e)=>{this.ne(n,60),this.le(e,n)})}ne(r,t){r.se(t)}oe(e){e.se(2)}}Ji.fe=new Ji;class Xi{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(r){const t=r[Symbol.iterator]();for(let e=t.next();!e.done;)this._e(e.value),e=t.next();this.we()}me(r){const t=r[Symbol.iterator]();for(let e=t.next();!e.done;)this.ge(e.value),e=t.next();this.ye()}pe(r){for(const n of r){const e=n.charCodeAt(0);if(128>e)this._e(e);else if(2048>e)this._e(960|e>>>6),this._e(128|63&e);else if("\uD800">n||"\uDBFF"<n)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=n.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(r){for(const n of r){const e=n.charCodeAt(0);if(128>e)this.ge(e);else if(2048>e)this.ge(960|e>>>6),this.ge(128|63&e);else if("\uD800">n||"\uDBFF"<n)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=n.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(r){const o=this.Ee(r),e=Zi(o);this.Ae(1+e),this.buffer[this.position++]=255&e;for(let n=o.length-e;n<o.length;++n)this.buffer[this.position++]=255&o[n]}Re(r){const o=this.Ee(r),e=Zi(o);this.Ae(1+e),this.buffer[this.position++]=~(255&e);for(let n=o.length-e;n<o.length;++n)this.buffer[this.position++]=~(255&o[n])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(r){const o=function(r){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,r,!1),new Uint8Array(t.buffer)}(r),e=0!=(128&o[0]);o[0]^=e?255:128;for(let n=1;n<o.length;++n)o[n]^=e?255:0;return o}_e(r){const t=255&r;0==t?(this.be(0),this.be(255)):255==t?(this.be(255),this.be(0)):this.be(t)}ge(r){const t=255&r;0==t?(this.ve(0),this.ve(255)):255==t?(this.ve(255),this.ve(0)):this.ve(r)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(r){const t=r+this.position;if(t<=this.buffer.length)return;let e=2*this.buffer.length;e<t&&(e=t);const n=new Uint8Array(e);n.set(this.buffer),this.buffer=n}}class er{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.Pe()}}class nr{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class sr{constructor(){this.De=new Xi,this.Ce=new er(this.De),this.xe=new nr(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(r,t,e,n){this.indexId=r,this.documentKey=t,this.arrayValue=e,this.directionalValue=n}ke(){const r=this.directionalValue.length,t=0===r||255===this.directionalValue[r-1]?r+1:r,e=new Uint8Array(t);return e.set(this.directionalValue,0),t===r?++e[e.length-1]:e.set([0],this.directionalValue.length),new ir(this.indexId,this.documentKey,this.arrayValue,e)}}class rr{constructor(r){this.collectionId=null==r.collectionGroup?r.path.lastSegment():r.collectionGroup,this.Me=r.orderBy,this.Oe=[];for(const n of r.filters){const e=n;e.S()?this.Fe=e:this.Oe.push(e)}}$e(r){const t=Zt(r);if(void 0!==t&&!this.Be(t))return!1;const e=ie(r);let n=0,o=0;for(;n<e.length&&this.Be(e[n]);++n);if(n===e.length)return!0;if(void 0!==this.Fe){const r=e[n];if(!this.Le(this.Fe,r)||!this.Ue(this.Me[o++],r))return!1;++n}for(;n<e.length;++n){const r=e[n];if(o>=this.Me.length||!this.Ue(this.Me[o++],r))return!1}return!0}Be(r){for(const t of this.Oe)if(this.Le(t,r))return!0;return!1}Le(r,t){if(void 0===r||!r.field.isEqual(t.fieldPath))return!1;const e="array-contains"===r.op||"array-contains-any"===r.op;return 2===t.kind==e}Ue(r,t){return!!r.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===r.dir||1===t.kind&&"desc"===r.dir)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.qe=new cr}addToCollectionParentIndex(r,t){return this.qe.add(t),gi.resolve()}getCollectionParents(r,t){return gi.resolve(this.qe.getEntries(t))}addFieldIndex(){return gi.resolve()}deleteFieldIndex(){return gi.resolve()}getDocumentsMatchingTarget(){return gi.resolve(null)}getFieldIndex(){return gi.resolve(null)}getFieldIndexes(){return gi.resolve([])}getNextCollectionGroupToUpdate(){return gi.resolve(null)}updateCollectionGroup(){return gi.resolve()}updateIndexEntries(){return gi.resolve()}}class cr{constructor(){this.index={}}add(r){const t=r.lastSegment(),e=r.popLast(),n=this.index[t]||new Un(dt.comparator),o=!n.has(e);return this.index[t]=n.add(e),o}has(r){const t=r.lastSegment(),e=r.popLast(),n=this.index[t];return n&&n.has(e)}getEntries(e){return(this.index[e]||new Un(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Uint8Array(0);class lr{constructor(r,t){this.user=r,this.databaseId=t,this.Ke=new cr,this.Ge=new Mn((e)=>de(e),(r,t)=>we(r,t)),this.uid=r.uid||""}addToCollectionParentIndex(r,t){if(!this.Ke.has(t)){const e=t.lastSegment(),o=t.popLast();r.addOnCommittedListener(()=>{this.Ke.add(t)});const s={collectionId:e,parent:Gs(o)};return ur(r).put(s)}return gi.resolve()}getCollectionParents(r,t){const e=[],n=IDBKeyRange.bound([t,""],[ot(t),""],!1,!0);return ur(r).qt(n).next((r)=>{for(const n of r){if(n.collectionId!==t)break;e.push(Ws(n.parent))}return e})}addFieldIndex(r,t){const e=_r(r),n=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e)=>[e.fieldPath.canonicalString(),e.kind])}}(t);return delete n.indexId,e.add(n).next()}deleteFieldIndex(r,t){const e=_r(r),n=wr(r),o=dr(r);return e.delete(t.indexId).next(()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(r,m){const e=dr(r);let n=!0;const o=new Map;return gi.forEach(this.Qe(m),(i)=>this.getFieldIndex(r,i).next((e)=>{n&&(n=!!e),o.set(i,e)})).next(()=>{if(n){let r=Hn();const t=[];return gi.forEach(o,(n,i)=>{var s;bf("IndexedDbIndexManager",`Using index ${(s=n,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map((e)=>`${e.fieldPath}:${e.kind}`).join(",")}`)} to execute ${de(m)}`);const o=function(r,t){const o=Zt(t);if(void 0===o)return null;for(const n of ge(r,o.fieldPath))switch(n.op){case"array-contains-any":return n.value.arrayValue.values||[];case"array-contains":return[n.value];}return null}(i,n),p=function(r,t){const o=new Map;for(const n of ie(t))for(const t of ge(r,n.fieldPath))switch(t.op){case"==":case"in":o.set(n.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return o.set(n.fieldPath.canonicalString(),t.value),Array.from(o.values());}return null}(i,n),u=function(r,t){const o=[];let n=!0;for(const s of ie(t)){const t=0===s.kind?ye(r,s.fieldPath,r.startAt):pe(r,s.fieldPath,r.startAt);if(!t.value)return null;o.push(t.value),n&&(n=t.inclusive)}return new Se(o,n)}(i,n),g=function(r,t){const o=[];let n=!0;for(const s of ie(t)){const t=0===s.kind?pe(r,s.fieldPath,r.endAt):ye(r,s.fieldPath,r.endAt);if(!t.value)return null;o.push(t.value),n&&(n=t.inclusive)}return new Se(o,n)}(i,n),b=this.je(n,i,u),l=this.je(n,i,g),f=this.We(n,i,p),d=this.ze(n.indexId,o,b,!!u&&u.inclusive,l,!!g&&g.inclusive,f);return gi.forEach(d,(n)=>e.Gt(n,m.limit).next((n)=>{n.forEach((o)=>{const e=vt.fromSegments(o.documentKey);r.has(e)||(r=r.add(e),t.push(e))})}))}).next(()=>t)}return gi.resolve(null)})}Qe(r){let t=this.Ge.get(r);return t||(t=[r],this.Ge.set(r,t),t)}ze(d,t,e,n,s,i,r){const o=(null==t?1:t.length)*Db(null==e?1:e.length,null==s?1:s.length),m=o/(null==t?1:t.length),p=[];for(let c=0;c<o;++c){const o=t?this.He(t[c/m]):hr,u=e?this.Je(d,o,e[c%m],n):this.Ye(d),l=s?this.Xe(d,o,s[c%m],i):this.Ye(d+1);p.push(...this.createRange(u,l,r.map((t)=>this.Je(d,o,t,!0))))}return p}Je(r,t,e,n){const o=new ir(r,vt.empty(),t,e);return n?o:o.ke()}Xe(r,t,e,n){const o=new ir(r,vt.empty(),t,e);return n?o.ke():o}Ye(e){return new ir(e,vt.empty(),hr,hr)}getFieldIndex(r,t){const e=new rr(t),n=null==t.collectionGroup?t.path.lastSegment():t.collectionGroup;return this.getFieldIndexes(r,n).next((r)=>{const t=r.filter((r)=>e.$e(r));return t.sort((r,t)=>t.fields.length-r.fields.length),0<t.length?t[0]:null})}Ze(r,o){const e=new sr;for(const n of ie(r)){const r=o.data.field(n.fieldPath);if(null==r)return null;const t=e.Ne(n.kind);Ji.fe.Zt(r,t)}return e.Se()}He(r){const t=new sr;return Ji.fe.Zt(r,t.Ne(0)),t.Se()}tn(r,t){const e=new sr;return Ji.fe.Zt(Ut(this.databaseId,t),e.Ne(function(r){const t=ie(r);return 0===t.length?0:t[t.length-1].kind}(r))),e.Se()}We(o,d,e){if(null===e)return[];let l=[new sr],n=0;for(const i of ie(o)){const r=e[n++];for(const t of l)if(this.en(d,i.fieldPath)&&Kt(r))l=this.nn(l,i,r);else{const n=t.Ne(i.kind);Ji.fe.Zt(r,n)}}return this.sn(l)}je(r,t,e){return null==e?null:this.We(r,t,e.position)}sn(r){const t=[];for(let e=0;e<r.length;++e)t[e]=r[e].Se();return t}nn(r,o,e){const d=[...r],l=[];for(const i of e.arrayValue.values||[])for(const e of d){const t=new sr;t.seed(e.Se()),Ji.fe.Zt(i,t.Ne(o.kind)),l.push(t)}return l}en(r,n){return!!r.filters.find((e)=>e instanceof fe&&e.field.isEqual(n)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(r,t){const e=_r(r),n=wr(r);return(t?e.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):e.qt()).next((r)=>{const o=[];return gi.forEach(r,(e)=>n.get([e.indexId,this.uid]).next((t)=>{o.push(function(r,t){const e=t?new oe(t.sequenceNumber,new ue(Bi(t.readTime),new vt(Ws(t.documentKey)),t.largestBatchId)):oe.empty(),n=r.fields.map(([r,t])=>new se(wt.fromServerFormat(r),t));return new ne(r.indexId,r.collectionGroup,n,e)}(e,t))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e)=>0===e.length?null:(e.sort((r,t)=>{const e=r.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0==e?st(r.collectionGroup,t.collectionGroup):e}),e[0].collectionGroup))}updateCollectionGroup(r,o,d){const e=_r(r),n=wr(r);return this.rn(r).next((r)=>e.qt("collectionGroupIndex",IDBKeyRange.bound(o,o)).next((t)=>gi.forEach(t,(t)=>n.put(function(r,o,e,i){return{indexId:r,uid:o.uid||"",sequenceNumber:e,readTime:$i(i.readTime),documentKey:Gs(i.documentKey.path),largestBatchId:i.largestBatchId}}(t.indexId,this.user,r,d)))))}updateIndexEntries(r,t){const o=new Map;return gi.forEach(t,(t,d)=>{const e=o.get(t.collectionGroup);return(e?gi.resolve(e):this.getFieldIndexes(r,t.collectionGroup)).next((e)=>(o.set(t.collectionGroup,e),gi.forEach(e,(o)=>this.on(r,t,o).next((t)=>{const e=this.un(d,o);return t.isEqual(e)?gi.resolve():this.an(r,d,o,t,e)}))))})}cn(r,t,e,n){return dr(r).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,orderedDocumentKey:this.tn(e,t.key),documentKey:t.key.path.toArray()})}hn(r,t,e,n){return dr(r).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,this.tn(e,t.key),t.key.path.toArray()])}on(r,o,e){const t=dr(r);let n=new Un(tr);return t.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([e.indexId,this.uid,this.tn(e,o)])},(r,t)=>{n=n.add(new ir(e.indexId,o,t.arrayValue,t.directionalValue))}).next(()=>n)}un(o,t){let e=new Un(tr);const n=this.Ze(t,o);if(null==n)return e;const s=Zt(t);if(null!=s){const d=o.data.field(s.fieldPath);if(Kt(d))for(const r of d.arrayValue.values||[])e=e.add(new ir(t.indexId,o.key,this.He(r),n))}else e=e.add(new ir(t.indexId,o.key,hr,n));return e}an(o,t,e,n,s){bf("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(d,t,l,n,s){const i=d.getIterator(),r=t.getIterator();for(let o=Fn(i),c=Fn(r);o||c;){let d=!1,t=!1;if(o&&c){const e=l(o,c);0>e?t=!0:0<e&&(d=!0)}else null==o?d=!0:t=!0;d?(n(c),c=Fn(r)):t?(s(o),o=Fn(i)):(o=Fn(i),c=Fn(r))}}(n,s,tr,(r)=>{i.push(this.cn(o,t,e,r))},(r)=>{i.push(this.hn(o,t,e,r))}),gi.waitFor(i)}rn(r){let o=1;return wr(r).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Nb])},(e,t,r)=>{r.done(),o=t.sequenceNumber+1}).next(()=>o)}createRange(o,t,e){e=e.sort((r,t)=>tr(r,t)).filter((r,t,o)=>!t||0!==tr(r,o[t-1]));const d=[o];for(const s of e){const e=tr(s,o),n=tr(s,t);if(0===e)d[0]=o.ke();else if(0<e&&0>n)d.push(s),d.push(s.ke());else if(0<n)break}d.push(t);const r=[];for(let n=0;n<d.length;n+=2)r.push(IDBKeyRange.bound([d[n].indexId,this.uid,d[n].arrayValue,d[n].directionalValue,hr,[]],[d[n+1].indexId,this.uid,d[n+1].arrayValue,d[n+1].directionalValue,hr,[]]));return r}}const fr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gr{constructor(r,t,e){this.cacheSizeCollectionThreshold=r,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=e}static withCacheSize(e){return new gr(e,gr.DEFAULT_COLLECTION_PERCENTILE,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}gr.DEFAULT_COLLECTION_PERCENTILE=10,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gr.DEFAULT=new gr(41943040,gr.DEFAULT_COLLECTION_PERCENTILE,gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gr.DISABLED=new gr(-1,0,0);class yr{constructor(r,t,e,n){this.userId=r,this.M=t,this.indexManager=e,this.referenceDelegate=n,this.ln={}}static Yt(r,t,e,n){xf(""!==r.uid);const o=r.isAuthenticated()?r.uid:"";return new yr(o,t,e,n)}checkEmpty(r){let o=!0;const e=IDBKeyRange.bound([this.userId,Eb],[this.userId,_b]);return Er(r).Wt({index:"userMutationsIndex",range:e},(e,t,r)=>{o=!1,r.done()}).next(()=>o)}addMutationBatch(d,t,e,n){const s=Ar(d),i=Er(d);return i.add({}).next((r)=>{xf("number"==typeof r);const l=new Si(r,t,e,n),m=function(r,t,o){const n=o.baseMutations.map((t)=>vs(r.Jt,t)),d=o.mutations.map((t)=>vs(r.Jt,t));return{userId:t,batchId:o.batchId,localWriteTimeMs:o.localWriteTime.toMillis(),baseMutations:n,mutations:d}}(this.M,this.userId,l),p=[];let c=new Un((r,t)=>st(r.canonicalString(),t.canonicalString()));for(const o of n){const t=Js(this.userId,o.key.path,r);c=c.add(o.key.path.popLast()),p.push(i.put(m)),p.push(s.put(t,Hs))}return c.forEach((t)=>{p.push(this.indexManager.addToCollectionParentIndex(d,t))}),d.addOnCommittedListener(()=>{this.ln[r]=l.keys()}),gi.waitFor(p).next(()=>l)})}lookupMutationBatch(r,t){return Er(r).get(t).next((e)=>e?(xf(e.userId===this.userId),Li(this.M,e)):null)}fn(r,o){return this.ln[o]?gi.resolve(this.ln[o]):this.lookupMutationBatch(r,o).next((e)=>{if(e){const t=e.keys();return this.ln[o]=t,t}return null})}getNextMutationBatchAfterBatchId(r,t){const o=t+1,e=IDBKeyRange.lowerBound([this.userId,o]);let n=null;return Er(r).Wt({index:"userMutationsIndex",range:e},(r,t,e)=>{t.userId===this.userId&&(xf(t.batchId>=o),n=Li(this.M,t)),e.done()}).next(()=>n)}getHighestUnacknowledgedBatchId(r){const t=IDBKeyRange.upperBound([this.userId,_b]);let o=-1;return Er(r).Wt({index:"userMutationsIndex",range:t,reverse:!0},(r,t,e)=>{o=t.batchId,e.done()}).next(()=>o)}getAllMutationBatches(r){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,_b]);return Er(r).qt("userMutationsIndex",t).next((e)=>e.map((e)=>Li(this.M,e)))}getAllMutationBatchesAffectingDocumentKey(d,t){const e=zs(this.userId,t.path),r=IDBKeyRange.lowerBound(e),n=[];return Ar(d).Wt({range:r},(e,i,s)=>{const[r,o,l]=e,m=Ws(o);return r===this.userId&&t.path.isEqual(m)?Er(d).get(l).next((e)=>{if(!e)throw yf();xf(e.userId===this.userId),n.push(Li(this.M,e))}):void s.done()}).next(()=>n)}getAllMutationBatchesAffectingDocumentKeys(d,t){let l=new Un(st);const n=[];return t.forEach((c)=>{const e=zs(this.userId,c.path),t=IDBKeyRange.lowerBound(e),i=Ar(d).Wt({range:t},(e,t,n)=>{const[i,r,o]=e,s=Ws(r);i===this.userId&&c.path.isEqual(s)?l=l.add(o):n.done()});n.push(i)}),gi.waitFor(n).next(()=>this.dn(d,l))}getAllMutationBatchesAffectingQuery(d,t){const l=t.path,n=l.length+1,e=zs(this.userId,l),i=IDBKeyRange.lowerBound(e);let s=new Un(st);return Ar(d).Wt({range:i},(o,t,e)=>{const[i,r,d]=o,m=Ws(r);i===this.userId&&l.isPrefixOf(m)?m.length===n&&(s=s.add(d)):e.done()}).next(()=>this.dn(d,s))}dn(r,t){const e=[],n=[];return t.forEach((t)=>{n.push(Er(r).get(t).next((r)=>{if(null===r)throw yf();xf(r.userId===this.userId),e.push(Li(this.M,r))}))}),gi.waitFor(n).next(()=>e)}removeMutationBatch(r,t){return mr(r.Ht,this.userId,t).next((e)=>(r.addOnCommittedListener(()=>{this._n(t.batchId)}),gi.forEach(e,(t)=>this.referenceDelegate.markPotentiallyOrphaned(r,t))))}_n(e){delete this.ln[e]}performConsistencyCheck(r){return this.checkEmpty(r).next((t)=>{if(!t)return gi.resolve();const o=IDBKeyRange.lowerBound([this.userId]),i=[];return Ar(r).Wt({range:o},(r,t,e)=>{if(r[0]===this.userId){const t=Ws(r[1]);i.push(t)}else e.done()}).next(()=>{xf(0===i.length)})})}containsKey(r,t){return Ir(r,this.userId,t)}wn(e){return Rr(e).get(this.userId).next((e)=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}class Tr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Tr(0)}static yn(){return new Tr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(r,t){this.referenceDelegate=r,this.M=t}allocateTargetId(r){return this.pn(r).next((t)=>{const e=new Tr(t.highestTargetId);return t.highestTargetId=e.next(),this.In(r,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.pn(e).next((e)=>at.fromTimestamp(new it(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.pn(e).next((e)=>e.highestListenSequenceNumber)}setTargetsMetadata(r,t,e){return this.pn(r).next((n)=>(n.highestListenSequenceNumber=t,e&&(n.lastRemoteSnapshotVersion=e.toTimestamp()),t>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t),this.In(r,n)))}addTargetData(r,t){return this.Tn(r,t).next(()=>this.pn(r).next((e)=>(e.targetCount+=1,this.En(t,e),this.In(r,e))))}updateTargetData(r,t){return this.Tn(r,t)}removeTargetData(r,t){return this.removeMatchingKeysForTargetId(r,t.targetId).next(()=>Pr(r).delete(t.targetId)).next(()=>this.pn(r)).next((t)=>(xf(0<t.targetCount),t.targetCount-=1,this.In(r,t)))}removeTargets(d,t,e){let n=0;const s=[];return Pr(d).Wt((i,r)=>{const o=Ui(r);o.sequenceNumber<=t&&null===e.get(o.targetId)&&(n++,s.push(this.removeTargetData(d,o)))}).next(()=>gi.waitFor(s)).next(()=>n)}forEachTarget(r,o){return Pr(r).Wt((e,t)=>{const r=Ui(t);o(r)})}pn(e){return vr(e).get("targetGlobalKey").next((e)=>(xf(null!==e),e))}In(r,t){return vr(r).put("targetGlobalKey",t)}Tn(r,t){return Pr(r).put(qi(this.M,t))}En(r,t){let e=!1;return r.targetId>t.highestTargetId&&(t.highestTargetId=r.targetId,e=!0),r.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=r.sequenceNumber,e=!0),e}getTargetCount(e){return this.pn(e).next((e)=>e.targetCount)}getTargetData(r,o){const e=de(o),t=IDBKeyRange.bound([e,Eb],[e,_b]);let d=null;return Pr(r).Wt({range:t,index:"queryTargetsIndex"},(e,t,n)=>{const i=Ui(t);we(o,i.target)&&(d=i,n.done())}).next(()=>d)}addMatchingKeys(o,t,d){const l=[],s=Sr(o);return t.forEach((t)=>{const e=Gs(t.path);l.push(s.put({targetId:d,path:e})),l.push(this.referenceDelegate.addReference(o,d,t))}),gi.waitFor(l)}removeMatchingKeys(r,t,o){const n=Sr(r);return gi.forEach(t,(t)=>{const e=Gs(t.path);return gi.waitFor([n.delete([o,e]),this.referenceDelegate.removeReference(r,o,t)])})}removeMatchingKeysForTargetId(r,t){const e=Sr(r),n=IDBKeyRange.bound([t],[t+1],!1,!0);return e.delete(n)}getMatchingKeysForTargetId(r,t){const e=IDBKeyRange.bound([t],[t+1],!1,!0),o=Sr(r);let d=Hn();return o.Wt({range:e,jt:!0},(e)=>{const t=Ws(e[1]),n=new vt(t);d=d.add(n)}).next(()=>d)}containsKey(r,t){const e=Gs(t.path),n=IDBKeyRange.bound([e],[ot(e)],!1,!0);let o=0;return Sr(r).Wt({index:"documentTargetsIndex",jt:!0,range:n},([r,t],e,n)=>{0!==r&&(o++,n.done())}).next(()=>0<o)}Et(r,t){return Pr(r).get(t).next((e)=>e?Ui(e):null)}}class Vr{constructor(e){this.An=e,this.buffer=new Un(Cr),this.Rn=0}Pn(){return++this.Rn}bn(r){const n=[r,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(n);else{const e=this.buffer.last();0>Cr(n,e)&&(this.buffer=this.buffer.delete(e).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Nr{constructor(r,t){this.garbageCollector=r,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(r){const t=this.Vn?3e5:6e4;bf("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.vn=null,this.Vn=!0;try{await r.collectGarbage(this.garbageCollector)}catch(e){Ys(e)?bf("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Dr(e)}await this.Sn(r)})}}class kr{constructor(r,t){this.Dn=r,this.params=t}calculateTargetCount(n,o){return this.Dn.Cn(n).next((e)=>r(o/100*e))}nthSequenceNumber(r,t){if(0===t)return gi.resolve(tt.A);const e=new Vr(t);return this.Dn.forEachTarget(r,(r)=>e.bn(r.sequenceNumber)).next(()=>this.Dn.xn(r,(r)=>e.bn(r))).next(()=>e.maxValue)}removeTargets(r,t,e){return this.Dn.removeTargets(r,t,e)}removeOrphanedDocuments(r,t){return this.Dn.removeOrphanedDocuments(r,t)}collect(r,t){return-1===this.params.cacheSizeCollectionThreshold?(bf("LruGarbageCollector","Garbage collection skipped; disabled"),gi.resolve(fr)):this.getCacheSize(r).next((e)=>e<this.params.cacheSizeCollectionThreshold?(bf("LruGarbageCollector",`Garbage collection skipped; Cache size ${e} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fr):this.Nn(r,t))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(d,t){let l,n,m,p,e,r,o;const c=Date.now();return this.calculateTargetCount(d,this.params.percentileToCollect).next((t)=>(t>this.params.maximumSequenceNumbersToCollect?(bf("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,p=Date.now(),this.nthSequenceNumber(d,n))).next((r)=>(l=r,e=Date.now(),this.removeTargets(d,l,t))).next((t)=>(m=t,r=Date.now(),this.removeOrphanedDocuments(d,l))).next((d)=>((o=Date.now(),Z()<=LogLevel.DEBUG)&&bf("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${p-c}ms\n\tDetermined least recently used ${n} in `+(e-p)+"ms\n"+`\tRemoved ${m} targets in `+(r-e)+"ms\n"+`\tRemoved ${d} documents in `+(o-r)+"ms\n"+`Total Duration: ${o-c}ms`),gi.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:m,documentsRemoved:d})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(r,t){this.db=r,this.garbageCollector=function(r,t){return new kr(r,t)}(this,t)}Cn(r){const n=this.kn(r);return this.db.getTargetCache().getTargetCount(r).next((r)=>n.next((t)=>r+t))}kn(r){let t=0;return this.xn(r,()=>{t++}).next(()=>t)}forEachTarget(r,t){return this.db.getTargetCache().forEachTarget(r,t)}xn(r,o){return this.Mn(r,(e,t)=>o(t))}addReference(r,t,e){return xr(r,e)}removeReference(r,t,e){return xr(r,e)}removeTargets(r,t,e){return this.db.getTargetCache().removeTargets(r,t,e)}markPotentiallyOrphaned(r,t){return xr(r,t)}On(r,t){return function(r,t){let e=!1;return Rr(r).zt((n)=>Ir(r,n,t).next((r)=>(r&&(e=!0),gi.resolve(!r)))).next(()=>e)}(r,t)}removeOrphanedDocuments(o,t){const d=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[];let s=0;return this.Mn(o,(i,e)=>{if(e<=t){const t=this.On(o,i).next((t)=>{if(!t)return s++,d.getEntry(o,i).next(()=>(d.removeEntry(i,at.min()),Sr(o).delete([0,Gs(i.path)])))});n.push(t)}}).next(()=>gi.waitFor(n)).next(()=>d.apply(o)).next(()=>s)}removeTarget(r,t){const e=t.withSequenceNumber(r.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(r,e)}updateLimboDocument(r,t){return xr(r,t)}Mn(r,d){const e=Sr(r);let l=tt.A,i;return e.Wt({index:"documentTargetsIndex"},([e,t],{path:n,sequenceNumber:r})=>{0===e?(l!==tt.A&&d(new vt(Ws(i)),l),l=r,i=n):l=tt.A}).next(()=>{l!==tt.A&&d(new vt(Ws(i)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(r,t,e){return Ur(r).put(e)}removeEntry(r,t,e){return Ur(r).delete(function(r,t){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],Fi(t),e[e.length-1]]}(t,e))}updateMetadata(r,t){return this.getMetadata(r).next((e)=>(e.byteSize+=t,this.Fn(r,e)))}getEntry(r,o){let e=te.newInvalidDocument(o);return Ur(r).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(qr(o))},(r,t)=>{e=this.$n(o,t)}).next(()=>e)}Bn(r,o){let e={size:0,document:te.newInvalidDocument(o)};return Ur(r).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(qr(o))},(r,t)=>{e={document:this.$n(o,t),size:pr(t)}}).next(()=>e)}getEntries(r,t){let o=Gn();return this.Ln(r,t,(r,t)=>{const e=this.$n(r,t);o=o.insert(r,e)}).next(()=>o)}Un(r,t){let o=Gn(),d=new $n(vt.comparator);return this.Ln(r,t,(r,t)=>{const e=this.$n(r,t);o=o.insert(r,e),d=d.insert(r,pr(t))}).next(()=>({documents:o,qn:d}))}Ln(d,t,l){if(t.isEmpty())return gi.resolve();let e=new Un(Gr);t.forEach((r)=>e=e.add(r));const n=IDBKeyRange.bound(qr(e.first()),qr(e.last())),c=e.getIterator();let r=c.getNext();return Ur(d).Wt({index:"documentKeyIndex",range:n},(n,t,e)=>{const o=vt.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;r&&0>Gr(r,o);)l(r,null),r=c.getNext();r&&r.isEqual(o)&&(l(r,t),r=c.hasNext()?c.getNext():null),r?e.Ut(qr(r)):e.done()}).next(()=>{for(;r;)l(r,null),r=c.hasNext()?c.getNext():null})}getAllFromCollection(r,t,e){const n=[t.popLast().toArray(),t.lastSegment(),Fi(e.readTime),e.documentKey.path.isEmpty()?"":e.documentKey.path.lastSegment()],o=[t.popLast().toArray(),t.lastSegment(),[Nb,Nb],""];return Ur(r).qt(IDBKeyRange.bound(n,o,!0)).next((r)=>{let o=Gn();for(const e of r){const r=this.$n(vt.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);o=o.insert(r.key,r)}return o})}getAllFromCollectionGroup(d,t,e,l){let s=Gn();const n=Kr(t,e),r=Kr(t,ue.max());return Ur(d).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(n,r,!0)},(o,t,e)=>{const n=this.$n(vt.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(n.key,n),s.size===l&&e.done()}).next(()=>s)}newChangeBuffer(e){return new Br(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e)=>e.byteSize)}getMetadata(e){return Fr(e).get("remoteDocumentGlobalKey").next((e)=>(xf(!!e),e))}Fn(r,t){return Fr(r).put("remoteDocumentGlobalKey",t)}$n(r,n){if(n){const e=Di(this.M,n);if(!(e.isNoDocument()&&e.version.isEqual(at.min())))return e}return te.newInvalidDocument(r)}}class Br extends null{constructor(r,t){super(),this.Kn=r,this.trackRemovals=t,this.Gn=new Mn((e)=>e.toString(),(r,t)=>r.isEqual(t))}applyChanges(d){const t=[];let e=0,n=new Un((r,t)=>st(r.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const r=this.Gn.get(s);if(t.push(this.Kn.removeEntry(d,s,r.readTime)),i.isValidDocument()){const o=Oi(this.Kn.M,i);n=n.add(s.path.popLast());const l=pr(o);e+=l-r.size,t.push(this.Kn.addEntry(d,s,o))}else if(e-=r.size,this.trackRemovals){const e=Oi(this.Kn.M,i.convertToNoDocument(at.min()));t.push(this.Kn.addEntry(d,s,e))}}),n.forEach((e)=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(d,e))}),t.push(this.Kn.updateMetadata(d,e)),gi.waitFor(t)}getFromCache(r,n){return this.Kn.Bn(r,n).next((e)=>(this.Gn.set(n,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(r,t){return this.Kn.Un(r,t).next(({documents:r,qn:t})=>(t.forEach((t,e)=>{this.Gn.set(t,{size:e,readTime:r.get(t).readTime})}),r))}}class Lr{constructor(e){this.M=e}kt(o,t,e,n){const s=new pi("createOrUpgrade",t);1>e&&1<=n&&(function(e){e.createObjectStore("owner")}(o),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fs,{unique:!0}),e.createObjectStore("documentMutations")}(o),Qr(o),function(e){e.createObjectStore("remoteDocuments")}(o));let i=gi.resolve();return 3>e&&3<=n&&(0!==e&&(!function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(o),Qr(o)),i=i.next(()=>function(r){const t=r.store("targetGlobal"),e={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:at.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",e)}(s))),4>e&&4<=n&&(0!==e&&(i=i.next(()=>function(r,t){return t.store("mutations").qt().next((e)=>{r.deleteObjectStore("mutations"),r.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fs,{unique:!0});const n=t.store("mutations"),o=e.map((e)=>n.put(e));return gi.waitFor(o)})}(o,s))),i=i.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(o)})),5>e&&5<=n&&(i=i.next(()=>this.Qn(s))),6>e&&6<=n&&(i=i.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(o),this.jn(s)))),7>e&&7<=n&&(i=i.next(()=>this.Wn(s))),8>e&&8<=n&&(i=i.next(()=>this.zn(o,s))),9>e&&9<=n&&(i=i.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(o)})),10>e&&10<=n&&(i=i.next(()=>this.Hn(s))),11>e&&11<=n&&(i=i.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(o),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(o)})),12>e&&12<=n&&(i=i.next(()=>{!function(r){const t=r.createObjectStore("documentOverlays",{keyPath:null});t.createIndex("collectionPathOverlayIndex",null,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(o)})),13>e&&13<=n&&(i=i.next(()=>function(r){const t=r.createObjectStore("remoteDocumentsV14",{keyPath:null});t.createIndex("documentKeyIndex",null),t.createIndex("collectionGroupIndex",null)}(o)).next(()=>this.Jn(o,s)).next(()=>o.deleteObjectStore("remoteDocuments"))),14>e&&14<=n&&(i=i.next(()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})}(o)})),i}jn(r){let o=0;return r.store("remoteDocuments").Wt((e,t)=>{o+=pr(t)}).next(()=>{const t={byteSize:o};return r.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",t)})}Qn(r){const t=r.store("mutationQueues"),o=r.store("mutations");return t.qt().next((t)=>gi.forEach(t,(t)=>{const e=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return o.qt("userMutationsIndex",e).next((e)=>gi.forEach(e,(e)=>{xf(e.userId===t.userId);const n=Li(this.M,e);return mr(r,t.userId,n).next(()=>{})}))}))}Wn(r){const i=r.store("targetDocuments"),e=r.store("remoteDocuments");return r.store("targetGlobal").get("targetGlobalKey").next((r)=>{const t=[];return e.Wt((e)=>{const s=new dt(e),n=function(e){return[0,Gs(e)]}(s);t.push(i.get(n).next((e)=>e?gi.resolve():((e)=>i.put({targetId:0,path:Gs(e),sequenceNumber:r.highestListenSequenceNumber}))(s)))}).next(()=>gi.waitFor(t))})}zn(r,t){r.createObjectStore("collectionParents",{keyPath:null});const o=t.store("collectionParents"),e=new cr,s=(r)=>{if(e.add(r)){const t=r.lastSegment(),n=r.popLast();return o.put({collectionId:t,parent:Gs(n)})}};return t.store("remoteDocuments").Wt({jt:!0},(e)=>{const t=new dt(e);return s(t.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([o,t,e])=>{const n=Ws(t);return s(n.popLast())}))}Hn(r){const o=r.store("targets");return o.Wt((e,t)=>{const r=Ui(t),n=qi(this.M,r);return o.put(n)})}Jn(r,d){const e=d.store("remoteDocuments"),l=[];return e.Wt((e,t)=>{const n=d.store("remoteDocumentsV14"),i=(r=t,r.document?new vt(dt.fromString(r.document.name).popFirst(5)):r.noDocument?vt.fromSegments(r.noDocument.path):r.unknownDocument?vt.fromSegments(r.unknownDocument.path):yf()).path.toArray();var r;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:t.readTime||[0,0],unknownDocument:t.unknownDocument,noDocument:t.noDocument,document:t.document,hasCommittedMutations:!!t.hasCommittedMutations};l.push(n.put(o))}).next(()=>gi.waitFor(l))}}const jr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zr{constructor(d,t,e,n,s,i,r,o,l,m,c=13){if(this.allowTabSynchronization=d,this.persistenceKey=t,this.clientId=e,this.Yn=s,this.window=i,this.document=r,this.Xn=l,this.Zn=m,this.ts=c,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Eb,this.cs=()=>Promise.resolve(),!zr.vt())throw new G(gv.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Mr(this,n),this.hs=t+"main",this.M=new ki(o),this.ls=new Ii(this.hs,this.ts,new Lr(this.M)),this.fs=new br(this.referenceDelegate,this.M),this.ds=function(e){return new Or(e)}(this.M),this._s=new Mi,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===m&&hf("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new G(gv.FAILED_PRECONDITION,jr);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e)=>this.fs.getHighestSequenceNumber(e))}).then((e)=>{this.es=new tt(e,this.Xn)}).then(()=>{this.ns=!0}).catch((e)=>(this.ls&&this.ls.close(),Promise.reject(e)))}Ts(r){return this.cs=async(t)=>{if(this.started)return r(t)},r(this.isPrimary)}setDatabaseDeletedListener(r){this.ls.Ot(async(t)=>{null===t.newVersion&&(await r())})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget(async()=>{this.started&&(await this.gs())}))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(r)=>Jr(r).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Es(r).next((e)=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)))})}).next(()=>this.As(r)).next((t)=>this.isPrimary&&!t?this.Rs(r).next(()=>!1):!!t&&this.Ps(r).next(()=>!0))).catch((e)=>{if(Ys(e))return bf("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return bf("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then((e)=>{this.isPrimary!==e&&this.Yn.enqueueRetryable(()=>this.cs(e)),this.isPrimary=e})}Es(e){return Wr(e).get("owner").next((e)=>gi.resolve(this.bs(e)))}Vs(e){return Jr(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const r=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(r)=>{const n=vi(r,"clientMetadata");return n.qt().next((e)=>{const r=this.Ds(e,18e5),t=e.filter((e)=>-1===r.indexOf(e));return gi.forEach(t,(e)=>n.delete(e.clientId)).next(()=>t)})}).catch(()=>[]);if(this.ws)for(const t of r)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gs().then(()=>this.vs()).then(()=>this.Is()))}bs(e){return!!e&&e.ownerId===this.clientId}As(r){return this.Zn?gi.resolve(!0):Wr(r).get("owner").next((t)=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new G(gv.FAILED_PRECONDITION,jr);return!1}}return this.networkEnabled&&this.inForeground||Jr(r).qt().next((e)=>void 0===this.Ds(e,5e3).find((r)=>{if(this.clientId!==r.clientId){const t=!this.networkEnabled&&r.networkEnabled,e=!this.inForeground&&r.inForeground,n=this.networkEnabled===r.networkEnabled;if(t||e&&n)return!0}return!1}))}).next((e)=>(this.isPrimary!==e&&bf("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(r)=>{const t=new Vi(r,tt.A);return this.Rs(t).next(()=>this.Vs(t))}),this.ls.close(),this.Os()}Ds(r,n){return r.filter((e)=>this.Ss(e.updateTimeMs,n)&&!this.xs(e.clientId))}Fs(){return this.runTransaction("getActiveClients","readonly",(e)=>Jr(e).qt().next((e)=>this.Ds(e,18e5).map((e)=>e.clientId)))}get started(){return this.ns}getMutationQueue(r,t){return yr.Yt(r,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new lr(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return Wi.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(d,t,l){bf("IndexedDbPersistence","Starting transaction:",d);const e="readonly"===t?"readonly":"readwrite",n=14===(i=this.ts)?wi:13===i?_i:12===i?di:11===i?ii:void yf();var i;let r;return this.ls.runTransaction(d,e,n,(e)=>(r=new Vi(e,this.es?this.es.next():tt.A),"readwrite-primary"===t?this.Es(r).next((e)=>!!e||this.As(r)).next((t)=>{if(!t)throw hf(`Failed to obtain primary lease for action '${d}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)),new G(gv.FAILED_PRECONDITION,mi);return l(r)}).next((e)=>this.Ps(r).next(()=>e)):this.$s(r).next(()=>l(r)))).then((e)=>(r.raiseOnCommittedEvent(),e))}$s(e){return Wr(e).get("owner").next((e)=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.bs(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new G(gv.FAILED_PRECONDITION,jr)})}Ps(r){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wr(r).put("owner",t)}static vt(){return Ii.vt()}Rs(r){const n=Wr(r);return n.get("owner").next((e)=>this.bs(e)?(bf("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):gi.resolve())}Ss(r,t){const e=Date.now();return!(r<e-t)&&(!(r>e)||(hf(`Detected an update time that is in the future: ${r} > ${e}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.gs()))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(r){var t;try{const e=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(r)));return bf("IndexedDbPersistence",`Client '${r}' ${e?"is":"is not"} zombied in LocalStorage`),e}catch(e){return hf("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),Date.now()+"")}catch(e){hf("Failed to set zombie client id.",e)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(e){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}class Hr{constructor(r,t,e){this.ds=r,this.Bs=t,this.indexManager=e}Ls(r,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(r,t).next((e)=>this.Us(r,t,e))}Us(r,t,o){return this.ds.getEntry(r,t).next((r)=>{for(const t of o)t.applyToLocalView(r);return r})}qs(r,o){r.forEach((e,r)=>{for(const n of o)n.applyToLocalView(r)})}Ks(r,t){return this.ds.getEntries(r,t).next((t)=>this.Gs(r,t).next(()=>t))}Gs(r,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(r,n).next((e)=>this.qs(n,e))}Qs(r,t,e){return function(e){return vt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(r,t.path):Ue(t)?this.Ws(r,t,e):this.zs(r,t,e)}js(r,t){return this.Ls(r,new vt(t)).next((r)=>{let t=jn();return r.isFoundDocument()&&(t=t.insert(r.key,r)),t})}Ws(d,t,e){const n=t.collectionGroup;let r=jn();return this.indexManager.getCollectionParents(d,n).next((o)=>gi.forEach(o,(i)=>{const s=function(r,t){return new Ce(t,null,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t,i.child(n));return this.zs(d,s,e).next((e)=>{e.forEach((n,t)=>{r=r.insert(n,t)})})}).next(()=>r))}zs(r,o,e){let d;return this.ds.getAllFromCollection(r,o.path,e).next((e)=>(d=e,this.Bs.getAllMutationBatchesAffectingQuery(r,o))).next((r)=>{for(const o of r)for(const e of o.mutations){const t=e.key;let r=d.get(t);null==r&&(r=te.newInvalidDocument(t),d=d.insert(t,r)),Tn(e,r,o.localWriteTime),r.isFoundDocument()||(d=d.remove(t))}}).next(()=>(d.forEach((e,t)=>{ze(o,t)||(d=d.remove(e))}),d))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(r,t,e,n){this.targetId=r,this.fromCache=t,this.Hs=e,this.Js=n}static Ys(r,o){let e=Hn(),n=Hn();for(const i of o.docChanges)switch(i.type){case 0:e=e.add(i.doc.key);break;case 1:n=n.add(i.doc.key);}return new Zr(r,o.fromCache,e,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{Xs(e){this.Zs=e}Qs(o,t,e,n){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||e.isEqual(at.min())?this.ti(o,t):this.Zs.Ks(o,n).next((s)=>{const i=this.ei(t,s);return(Fe(t)||$e(t))&&this.ni(t.limitType,i,n,e)?this.ti(o,t):(Z()<=LogLevel.DEBUG&&bf("QueryEngine","Re-using previous result from %s to execute query: %s",e.toString(),We(t)),this.Zs.Qs(o,t,re(e,-1)).next((r)=>(i.forEach((t)=>{r=r.insert(t.key,t)}),r)))})}ei(r,t){let o=new Un(Je(r));return t.forEach((t,e)=>{ze(r,e)&&(o=o.add(e))}),o}ni(r,t,e,n){if(e.size!==t.size)return!0;const o="F"===r?t.last():t.first();return!!o&&(o.hasPendingWrites||0<o.version.compareTo(n))}ti(r,t){return Z()<=LogLevel.DEBUG&&bf("QueryEngine","Using full collection scan to execute query:",We(t)),this.Zs.Qs(r,t,ue.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(r,t,e,n){this.persistence=r,this.si=t,this.M=n,this.ii=new $n(st),this.ri=new Mn((e)=>de(e),we),this.oi=new Map,this.ui=r.getRemoteDocumentCache(),this.fs=r.getTargetCache(),this._s=r.getBundleCache(),this.ai(e)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new Hr(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(r){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t)=>r.collect(t,this.ii))}}class no{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(r,t){return gi.resolve(this.wi.get(t))}saveBundleMetadata(r,t){var e;return this.wi.set(t.id,{id:(e=t).id,version:e.version,createTime:ws(e.createTime)}),gi.resolve()}getNamedQuery(r,t){return gi.resolve(this.mi.get(t))}saveNamedQuery(r,t){return this.mi.set(t.name,function(e){return{name:e.name,query:Ki(e.bundledQuery),readTime:ws(e.readTime)}}(t)),gi.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.overlays=new $n(vt.comparator),this.gi=new Map}getOverlay(r,t){return gi.resolve(this.overlays.get(t))}saveOverlays(r,t,e){return e.forEach((e,n)=>{this.Xt(r,t,n)}),gi.resolve()}removeOverlaysForBatchId(r,t,e){const n=this.gi.get(e);return void 0!==n&&(n.forEach((e)=>this.overlays=this.overlays.remove(e)),this.gi.delete(e)),gi.resolve()}getOverlaysForCollection(d,l,e){const n=zn(),s=l.length+1,t=new vt(l.child("")),i=this.overlays.getIteratorFrom(t);for(;i.hasNext();){const o=i.getNext().value,t=o.getKey();if(!l.isPrefixOf(t.path))break;t.path.length===s&&o.largestBatchId>e&&n.set(o.getKey(),o)}return gi.resolve(n)}getOverlaysForCollectionGroup(r,d,e,t){let n=new $n((r,t)=>r-t);for(const o=this.overlays.getIterator();o.hasNext();){const r=o.getNext().value;if(r.getKey().getCollectionGroup()===d&&r.largestBatchId>e){let t=n.get(r.largestBatchId);null===t&&(t=zn(),n=n.insert(r.largestBatchId,t)),t.set(r.getKey(),r)}}const i=zn(),o=n.getIterator();for(;o.hasNext()&&!(o.getNext().value.forEach((r,t)=>i.set(r,t)),i.size()>=t););return gi.resolve(i)}Xt(r,t,e){if(null===e)return;const n=this.overlays.get(e.key);if(null!==n){const r=this.gi.get(n.largestBatchId).delete(e.key);this.gi.set(n.largestBatchId,r)}this.overlays=this.overlays.insert(e.key,new xi(t,e));let o=this.gi.get(t);void 0===o&&(o=Hn(),this.gi.set(t,o)),this.gi.set(t,o.add(e.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.yi=new Un(To.pi),this.Ii=new Un(To.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(r,t){const e=new To(r,t);this.yi=this.yi.add(e),this.Ii=this.Ii.add(e)}Ei(r,n){r.forEach((e)=>this.addReference(e,n))}removeReference(r,t){this.Ai(new To(r,t))}Ri(r,n){r.forEach((e)=>this.removeReference(e,n))}Pi(r){const t=new vt(new dt([])),e=new To(t,r),n=new To(t,r+1),o=[];return this.Ii.forEachInRange([e,n],(e)=>{this.Ai(e),o.push(e.key)}),o}bi(){this.yi.forEach((e)=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(r){const t=new vt(new dt([])),e=new To(t,r),n=new To(t,r+1);let o=Hn();return this.Ii.forEachInRange([e,n],(e)=>{o=o.add(e.key)}),o}containsKey(r){const t=new To(r,0),e=this.yi.firstAfterOrEqual(t);return null!==e&&r.isEqual(e.key)}}class To{constructor(r,t){this.key=r,this.vi=t}static pi(r,t){return vt.comparator(r.key,t.key)||st(r.vi,t.vi)}static Ti(r,t){return st(r.vi,t.vi)||vt.comparator(r.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(r,t){this.indexManager=r,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new Un(To.pi)}checkEmpty(){return gi.resolve(0===this.Bs.length)}addMutationBatch(o,t,e,n){const s=this.Si;this.Si++,0<this.Bs.length&&this.Bs[this.Bs.length-1];const i=new Si(s,t,e,n);this.Bs.push(i);for(const r of n)this.Di=this.Di.add(new To(r.key,s)),this.indexManager.addToCollectionParentIndex(o,r.key.path.popLast());return gi.resolve(i)}lookupMutationBatch(r,t){return gi.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(r,t){const e=this.xi(t+1),n=0>e?0:e;return gi.resolve(this.Bs.length>n?this.Bs[n]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(){return gi.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(r,t){const e=new To(t,0),n=new To(t,_b),o=[];return this.Di.forEachInRange([e,n],(r)=>{const t=this.Ci(r.vi);o.push(t)}),gi.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(r,t){let e=new Un(st);return t.forEach((r)=>{const t=new To(r,0),n=new To(r,_b);this.Di.forEachInRange([t,n],(r)=>{e=e.add(r.vi)})}),gi.resolve(this.Ni(e))}getAllMutationBatchesAffectingQuery(d,t){const l=t.path,n=l.length+1;let e=l;vt.isDocumentKey(e)||(e=e.child(""));const i=new To(new vt(e),0);let r=new Un(st);return this.Di.forEachWhile((o)=>{const t=o.key.path;return!!l.isPrefixOf(t)&&(t.length===n&&(r=r.add(o.vi)),!0)},i),gi.resolve(this.Ni(r))}Ni(r){const o=[];return r.forEach((e)=>{const t=this.Ci(e);null!==t&&o.push(t)}),o}removeMutationBatch(r,t){xf(0===this.ki(t.batchId,"removed")),this.Bs.shift();let e=this.Di;return gi.forEach(t.mutations,(n)=>{const o=new To(n.key,t.batchId);return e=e.delete(o),this.referenceDelegate.markPotentiallyOrphaned(r,n.key)}).next(()=>{this.Di=e})}_n(){}containsKey(r,t){const e=new To(t,0),n=this.Di.firstAfterOrEqual(e);return gi.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(){return this.Bs.length,gi.resolve()}ki(e){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(r){const t=this.xi(r);return 0>t||t>=this.Bs.length?null:this.Bs[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Mi=e,this.docs=new $n(vt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(o,t){const e=t.key,n=this.docs.get(e),s=n?n.size:0,i=this.Mi(t);return this.docs=this.docs.insert(e,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(o,e.path.popLast())}removeEntry(r){const t=this.docs.get(r);t&&(this.docs=this.docs.remove(r),this.size-=t.size)}getEntry(r,t){const e=this.docs.get(t);return gi.resolve(e?e.document.mutableCopy():te.newInvalidDocument(t))}getEntries(r,t){let o=Gn();return t.forEach((r)=>{const t=this.docs.get(r);o=o.insert(r,t?t.document.mutableCopy():te.newInvalidDocument(r))}),gi.resolve(o)}getAllFromCollection(o,d,e){let n=Gn();const t=new vt(d.child("")),s=this.docs.getIteratorFrom(t);for(;s.hasNext();){const{key:r,value:{document:t}}=s.getNext();if(!d.isPrefixOf(r.path))break;r.path.length>d.length+1||0>=ce(ae(t),e)||(n=n.insert(t.key,t.mutableCopy()))}return gi.resolve(n)}getAllFromCollectionGroup(){yf()}Oi(r,n){return gi.forEach(this.docs,(e)=>n(e))}newChangeBuffer(){return new Ro(this)}getSize(){return gi.resolve(this.size)}}class Ro extends null{constructor(e){super(),this.Kn=e}applyChanges(r){const t=[];return this.changes.forEach((e,n)=>{n.isValidDocument()?t.push(this.Kn.addEntry(r,n)):this.Kn.removeEntry(e)}),gi.waitFor(t)}getFromCache(r,t){return this.Kn.getEntry(r,t)}getAllFromCache(r,t){return this.Kn.getEntries(r,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.persistence=e,this.Fi=new Mn((e)=>de(e),we),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Io,this.targetCount=0,this.Li=Tr.gn()}forEachTarget(r,o){return this.Fi.forEach((e,t)=>o(t)),gi.resolve()}getLastRemoteSnapshotVersion(){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(){return gi.resolve(this.$i)}allocateTargetId(){return this.highestTargetId=this.Li.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(r,t,e){return e&&(this.lastRemoteSnapshotVersion=e),t>this.$i&&(this.$i=t),gi.resolve()}Tn(r){this.Fi.set(r.target,r);const t=r.targetId;t>this.highestTargetId&&(this.Li=new Tr(t),this.highestTargetId=t),r.sequenceNumber>this.$i&&(this.$i=r.sequenceNumber)}addTargetData(r,t){return this.Tn(t),this.targetCount+=1,gi.resolve()}updateTargetData(r,t){return this.Tn(t),gi.resolve()}removeTargetData(r,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,gi.resolve()}removeTargets(d,t,e){let n=0;const s=[];return this.Fi.forEach((i,r)=>{r.sequenceNumber<=t&&null===e.get(r.targetId)&&(this.Fi.delete(i),s.push(this.removeMatchingKeysForTargetId(d,r.targetId)),n++)}),gi.waitFor(s).next(()=>n)}getTargetCount(){return gi.resolve(this.targetCount)}getTargetData(r,t){const e=this.Fi.get(t)||null;return gi.resolve(e)}addMatchingKeys(r,t,e){return this.Bi.Ei(t,e),gi.resolve()}removeMatchingKeys(r,t,e){this.Bi.Ri(t,e);const n=this.persistence.referenceDelegate,o=[];return n&&t.forEach((t)=>{o.push(n.markPotentiallyOrphaned(r,t))}),gi.waitFor(o)}removeMatchingKeysForTargetId(r,t){return this.Bi.Pi(t),gi.resolve()}getMatchingKeysForTargetId(r,t){const e=this.Bi.Vi(t);return gi.resolve(e)}containsKey(r,t){return gi.resolve(this.Bi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(r,t){this.Ui={},this.overlays={},this.es=new tt(0),this.ns=!1,this.ns=!0,this.referenceDelegate=r(this),this.fs=new Po(this),this.indexManager=new ar,this.ds=function(e){return new Ao(e)}((e)=>this.referenceDelegate.qi(e)),this.M=new ki(t),this._s=new no(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.indexManager}getDocumentOverlayCache(r){let t=this.overlays[r.toKey()];return t||(t=new po,this.overlays[r.toKey()]=t),t}getMutationQueue(r,t){let e=this.Ui[r.toKey()];return e||(e=new Eo(t,this.referenceDelegate),this.Ui[r.toKey()]=e),e}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(r,t,e){bf("MemoryPersistence","Starting transaction:",r);const n=new Vo(this.es.next());return this.referenceDelegate.Ki(),e(n).next((e)=>this.referenceDelegate.Gi(n).next(()=>e)).toPromise().then((e)=>(n.raiseOnCommittedEvent(),e))}Qi(r,t){return gi.or(Object.values(this.Ui).map((e)=>()=>e.containsKey(r,t)))}}class Vo extends null{constructor(e){super(),this.currentSequenceNumber=e}}class vo{constructor(e){this.persistence=e,this.ji=new Io,this.Wi=null}static zi(e){return new vo(e)}get Hi(){if(this.Wi)return this.Wi;throw yf()}addReference(r,t,e){return this.ji.addReference(e,t),this.Hi.delete(e.toString()),gi.resolve()}removeReference(r,t,e){return this.ji.removeReference(e,t),this.Hi.add(e.toString()),gi.resolve()}markPotentiallyOrphaned(r,t){return this.Hi.add(t.toString()),gi.resolve()}removeTarget(r,t){this.ji.Pi(t.targetId).forEach((e)=>this.Hi.add(e.toString()));const e=this.persistence.getTargetCache();return e.getMatchingKeysForTargetId(r,t.targetId).next((e)=>{e.forEach((e)=>this.Hi.add(e.toString()))}).next(()=>e.removeTargetData(r,t))}Ki(){this.Wi=new Set}Gi(r){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Hi,(e)=>{const o=vt.fromPath(e);return this.Ji(r,o).next((e)=>{e||n.removeEntry(o,at.min())})}).next(()=>(this.Wi=null,n.apply(r)))}updateLimboDocument(r,n){return this.Ji(r,n).next((e)=>{e?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(){return 0}Ji(r,t){return gi.or([()=>gi.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(r,t),()=>this.persistence.Qi(r,t)])}}class So{constructor(r,t,e,n){this.user=r,this.batchId=t,this.state=e,this.error=n}static Yi(o,t,e){const n=JSON.parse(e);let d="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error),r;return d&&n.error&&(d="string"==typeof n.error.message&&"string"==typeof n.error.code,d&&(r=new G(n.error.code,n.error.message))),d?new So(o,t,n.state,r):(hf("SharedClientState",`Failed to parse mutation state for ID '${t}': ${e}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class No{constructor(r,t,e){this.targetId=r,this.state=t,this.error=e}static Yi(r,t){const e=JSON.parse(t);let o="object"==typeof e&&-1!==["not-current","current","rejected"].indexOf(e.state)&&(void 0===e.error||"object"==typeof e.error),i;return o&&e.error&&(o="string"==typeof e.error.message&&"string"==typeof e.error.code,o&&(i=new G(e.error.code,e.error.message))),o?new No(r,e.state,i):(hf("SharedClientState",`Failed to parse target state for ID '${r}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ko{constructor(r,t){this.clientId=r,this.activeTargetIds=t}static Yi(r,t){const e=JSON.parse(t);let o="object"==typeof e&&e.activeTargetIds instanceof Array,s=Xn();for(let n=0;o&&n<e.activeTargetIds.length;++n)o=Dt(e.activeTargetIds[n]),s=s.add(e.activeTargetIds[n]);return o?new ko(r,s):(hf("SharedClientState",`Failed to parse client data for instance '${r}': ${t}`),null)}}class Mo{constructor(r,t){this.clientId=r,this.onlineState=t}static Yi(r){const t=JSON.parse(r);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Mo(t.clientId,t.onlineState):(hf("SharedClientState",`Failed to parse online state: ${r}`),null)}}class Oo{constructor(){this.activeTargetIds=Xn()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fo{constructor(o,t,e,n,s){this.window=o,this.Yn=t,this.persistenceKey=e,this.er=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.nr=this.sr.bind(this),this.ir=new $n(st),this.started=!1,this.rr=[];const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ur=yo(this.persistenceKey,this.er),this.ar=function(e){return`firestore_sequence_number_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ir=this.ir.insert(this.er,new Oo),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.hr=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.lr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.dr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._r=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.nr)}static vt(e){return e&&e.localStorage}async start(){const r=await this.syncEngine.Fs();for(const o of r){if(o===this.er)continue;const e=this.getItem(yo(this.persistenceKey,o));if(e){const t=ko.Yi(o,e);t&&(this.ir=this.ir.insert(t.clientId,t))}}this.wr();const n=this.storage.getItem(this.dr);if(n){const e=this.mr(n);e&&this.gr(e)}for(const e of this.rr)this.sr(e);this.rr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.yr(this.ir)}isActiveQueryTarget(r){let t=!1;return this.ir.forEach((e,n)=>{n.activeTargetIds.has(r)&&(t=!0)}),t}addPendingMutation(e){this.pr(e,"pending")}updateMutationState(r,t,e){this.pr(r,t,e),this.Ir(r)}addLocalQueryTarget(r){let t="not-current";if(this.isActiveQueryTarget(r)){const e=this.storage.getItem(Co(this.persistenceKey,r));if(e){const n=No.Yi(r,e);n&&(t=n.state)}}return this.Tr.Zi(r),this.wr(),t}removeLocalQueryTarget(e){this.Tr.tr(e),this.wr()}isLocalQueryTarget(e){return this.Tr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Co(this.persistenceKey,e))}updateQueryState(r,t,e){this.Er(r,t,e)}handleUserChange(r,t,e){t.forEach((e)=>{this.Ir(e)}),this.currentUser=r,e.forEach((e)=>{this.addPendingMutation(e)})}setOnlineState(e){this.Ar(e)}notifyBundleLoaded(e){this.Rr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.nr),this.removeItem(this.ur),this.started=!1)}getItem(r){const t=this.storage.getItem(r);return bf("SharedClientState","READ",r,t),t}setItem(r,t){bf("SharedClientState","SET",r,t),this.storage.setItem(r,t)}removeItem(e){bf("SharedClientState","REMOVE",e),this.storage.removeItem(e)}sr(r){const n=r;if(n.storageArea===this.storage){if(bf("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ur)return void hf("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable(async()=>{if(!this.started)this.rr.push(n);else if(null!==n.key)if(this.cr.test(n.key)){if(null==n.newValue){const e=this.Pr(n.key);return this.br(e,null)}{const e=this.Vr(n.key,n.newValue);if(e)return this.br(e.clientId,e)}}else if(this.hr.test(n.key)){if(null!==n.newValue){const e=this.vr(n.key,n.newValue);if(e)return this.Sr(e)}}else if(this.lr.test(n.key)){if(null!==n.newValue){const e=this.Dr(n.key,n.newValue);if(e)return this.Cr(e)}}else if(n.key===this.dr){if(null!==n.newValue){const e=this.mr(n.newValue);if(e)return this.gr(e)}}else if(n.key===this.ar){const e=function(r){let t=tt.A;if(null!=r)try{const e=JSON.parse(r);xf("number"==typeof e),t=e}catch(e){hf("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(n.newValue);e!==tt.A&&this.sequenceNumberHandler(e)}else if(n.key===this._r){const e=this.Nr(n.newValue);await Promise.all(e.map((e)=>this.syncEngine.kr(e)))}})}}get Tr(){return this.ir.get(this.er)}wr(){this.setItem(this.ur,this.Tr.Xi())}pr(r,t,e){const n=new So(this.currentUser,r,t,e),o=Do(this.persistenceKey,this.currentUser,r);this.setItem(o,n.Xi())}Ir(r){const t=Do(this.persistenceKey,this.currentUser,r);this.removeItem(t)}Ar(r){const n={clientId:this.er,onlineState:r};this.storage.setItem(this.dr,JSON.stringify(n))}Er(r,t,e){const n=Co(this.persistenceKey,r),o=new No(r,t,e);this.setItem(n,o.Xi())}Rr(r){const t=JSON.stringify(Array.from(r));this.setItem(this._r,t)}Pr(r){const t=this.cr.exec(r);return t?t[1]:null}Vr(r,t){const e=this.Pr(r);return ko.Yi(e,t)}vr(r,t){const e=this.hr.exec(r),n=+e[1],o=void 0===e[2]?null:e[2];return So.Yi(new mv(o),n,t)}Dr(r,t){const e=this.lr.exec(r),n=+e[1];return No.Yi(n,t)}mr(e){return Mo.Yi(e)}Nr(e){return JSON.parse(e)}async Sr(e){return e.user.uid===this.currentUser.uid?this.syncEngine.Mr(e.batchId,e.state,e.error):void bf("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Cr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(d,t){const e=t?this.ir.insert(d,t):this.ir.remove(d),n=this.yr(this.ir),s=this.yr(e),i=[],r=[];return s.forEach((e)=>{n.has(e)||i.push(e)}),n.forEach((e)=>{s.has(e)||r.push(e)}),this.syncEngine.Fr(i,r).then(()=>{this.ir=e})}gr(e){this.ir.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}yr(r){let o=Xn();return r.forEach((e,t)=>{o=o.unionWith(t.activeTargetIds)}),o}}class $o{constructor(){this.$r=new Oo,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(){}updateMutationState(){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(r,t){this.Br[r]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Oo,Promise.resolve()}handleUserChange(){}setOnlineState(){}shutdown(){}writeSequenceNumber(){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{Lr(){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){bf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){bf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends null{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(d,t,e,n){return new Promise((s,i)=>{const r=new XhrIo;r.listenOnce(EventType.COMPLETE,()=>{try{switch(r.getLastErrorCode()){case ErrorCode.NO_ERROR:const t=r.getResponseJson();bf("Connection","XHR received:",JSON.stringify(t)),s(t);break;case ErrorCode.TIMEOUT:bf("Connection","RPC \""+d+"\" timed out"),i(new G(gv.DEADLINE_EXCEEDED,"Request time out"));break;case ErrorCode.HTTP_ERROR:const e=r.getStatus();if(bf("Connection","RPC \""+d+"\" failed with status:",e,"response text:",r.getResponseText()),0<e){const n=r.getResponseJson().error;if(n&&n.status&&n.message){const t=function(r){const t=r.toLowerCase().replace(/_/g,"-");return 0<=Object.values(gv).indexOf(t)?t:gv.UNKNOWN}(n.status);i(new G(t,n.message))}else i(new G(gv.UNKNOWN,"Server responded with status "+r.getStatus()))}else i(new G(gv.UNAVAILABLE,"Connection failed."));break;default:yf();}}finally{bf("Connection","RPC \""+d+"\" completed.")}});const o=JSON.stringify(n);r.send(t,"POST",o,e,15)})}lo(d,t,e){const n=[this.io,"/","google.firestore.v1.Firestore","/",d,"/channel"],s=createWebChannelTransport(),i=getStatEventTarget(),r={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(r.xmlHttpFactory=new FetchXmlHttpFactory({})),this.ao(r.initMessageHeaders,t,e),isMobileCordova()||isReactNative()||isElectron()||isIE()||isUWP()||isBrowserExtension()||(r.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");bf("Connection","Creating WebChannel: "+o,r);const m=s.createWebChannel(o,r);let p=!1,c=!1;const u=new Uo({Wr:(e)=>{c?bf("Connection","Not sending because WebChannel is closed:",e):(p||(bf("Connection","Opening WebChannel transport."),m.open(),p=!0),bf("Connection","WebChannel sending:",e),m.send(e))},zr:()=>m.close()}),l=(r,t,e)=>{r.listen(t,(r)=>{try{e(r)}catch(e){setTimeout(()=>{throw e},0)}})};return l(m,WebChannel.EventType.OPEN,()=>{c||bf("Connection","WebChannel transport opened.")}),l(m,WebChannel.EventType.CLOSE,()=>{c||(c=!0,bf("Connection","WebChannel transport closed"),u.no())}),l(m,WebChannel.EventType.ERROR,(e)=>{c||(c=!0,wf("Connection","WebChannel transport errored:",e),u.no(new G(gv.UNAVAILABLE,"The operation could not be completed")))}),l(m,WebChannel.EventType.MESSAGE,(r)=>{var t;if(!c){const e=r.data[0];xf(!!e);const o=e,s=o.error||(null===(t=o[0])||void 0===t?void 0:t.error);if(s){bf("Connection","WebChannel received error:",s);const r=s.status;let t=function(r){const t=Nn[r];if(void 0!==t)return On(t)}(r),e=s.message;void 0===t&&(t=gv.INTERNAL,e="Unknown error status: "+r+" with message "+s.message),c=!0,u.no(new G(t,e)),m.close()}else bf("Connection","WebChannel received:",e),u.so(e)}}),l(i,Event.STAT_EVENT,(e)=>{e.stat===Stat.PROXY?bf("Connection","Detected buffering proxy"):e.stat===Stat.NOPROXY&&bf("Connection","Detected no buffering proxy")}),setTimeout(()=>{u.eo()},0),u}}class Go{constructor(r,t,e=1e3,n=1.5,o=6e4){this.Yn=r,this.timerId=t,this.fo=e,this._o=n,this.wo=o,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(o){this.cancel();const t=r(this.mo+this.Eo()),e=Db(0,Date.now()-this.po),n=Db(0,t-e);0<n&&bf("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${e} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,n,()=>(this.po=Date.now(),o())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends null{constructor(o,t,e,n,s,i){super(o,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,e,n,i),this.M=s}Go(r,t){return this.bo.lo("Listen",r,t)}onMessage(r){this.Do.reset();const t=Vs(this.M,r),e=function(r){if(!("targetChange"in r))return at.min();const t=r.targetChange;return t.targetIds&&t.targetIds.length?at.min():t.readTime?ws(t.readTime):at.min()}(r);return this.listener.Qo(t,e)}jo(r){const t={database:Es(this.M),addTarget:function(r,t){let e;const n=t.target;return e=me(n)?{documents:Cs(r,n)}:{query:xs(r,n)},e.targetId=t.targetId,0<t.resumeToken.approximateByteSize()?e.resumeToken=ds(r,t.resumeToken):0<t.snapshotVersion.compareTo(at.min())&&(e.readTime=cs(r,t.snapshotVersion.toTimestamp())),e}(this.M,r)},e=ks(this.M,r);e&&(t.labels=e),this.Fo(t)}Wo(r){const t={};t.database=Es(this.M),t.removeTarget=r,this.Fo(t)}}class Jo extends null{constructor(o,t,e,n,s,i){super(o,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,e,n,i),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(r,t){return this.bo.lo("Write",r,t)}onMessage(r){if(xf(!!r.streamToken),this.lastStreamToken=r.streamToken,this.zo){this.Do.reset();const t=Ds(r.writeResults,r.commitTime),e=ws(r.commitTime);return this.listener.Yo(e,t)}return xf(!r.writeResults||0===r.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=Es(this.M),this.Fo(e)}Jo(r){const t={streamToken:this.lastStreamToken,writes:r.map((e)=>vs(this.M,e))};this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends null{constructor(r,t,e,n){super(),this.authCredentials=r,this.appCheckCredentials=t,this.bo=e,this.M=n,this.tu=!1}eu(){if(this.tu)throw new G(gv.FAILED_PRECONDITION,"The client has already been terminated.")}oo(r,t,e){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,o])=>this.bo.oo(r,t,e,n,o)).catch((e)=>{throw"FirebaseError"===e.name?(e.code===gv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new G(gv.UNKNOWN,e.toString())})}ho(r,t,e){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,o])=>this.bo.ho(r,t,e,n,o)).catch((e)=>{throw"FirebaseError"===e.name?(e.code===gv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new G(gv.UNKNOWN,e.toString())})}terminate(){this.tu=!0}}class Xo{constructor(r,t){this.asyncQueue=r,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,1<=this.nu&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(r){const t=`Could not reach Cloud Firestore backend. ${r}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(hf(t),this.iu=!1):bf("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(r,t,e,n,o){this.localStore=r,this.datastore=t,this.asyncQueue=e,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=o,this._u.Lr(()=>{e.enqueueAndForget(async()=>{au(this)&&(bf("RemoteStore","Restarting streams for network reachability change."),await async function(r){const t=vf(r);t.fu.add(4),await eu(t),t.wu.set("Unknown"),t.fu.delete(4),await Wo(t)}(this))})}),this.wu=new Xo(e,n)}}class tu{constructor(r,t,e,n,o){this.asyncQueue=r,this.timerId=t,this.targetTimeMs=e,this.op=n,this.removalCallback=o,this.deferred=new fv,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(()=>{})}static createAndSchedule(d,t,e,n,s){const i=Date.now()+e,r=new tu(d,t,i,n,s);return r.start(e),r}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new G(gv.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null===this.timerHandle?Promise.resolve():(this.clearTimeout(),this.op().then((e)=>this.deferred.resolve(e))))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Su{constructor(r){this.comparator=r?(t,e)=>r(t,e)||vt.comparator(t.key,e.key):(r,t)=>vt.comparator(r.key,t.key),this.keyedMap=jn(),this.sortedSet=new $n(this.comparator)}static emptySet(e){return new Su(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(r){const t=this.keyedMap.get(r);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(r){this.sortedSet.inorderTraversal((t)=>(r(t),!1))}add(r){const t=this.delete(r.key);return t.copy(t.keyedMap.insert(r.key,r),t.sortedSet.insert(r,null))}delete(r){const t=this.get(r);return t?this.copy(this.keyedMap.remove(r),this.sortedSet.remove(t)):this}isEqual(r){if(!(r instanceof Su))return!1;if(this.size!==r.size)return!1;for(const o=this.sortedSet.getIterator(),e=r.sortedSet.getIterator();o.hasNext();){const r=o.getNext().key,t=e.getNext().key;if(!r.isEqual(t))return!1}return!0}toString(){const r=[];return this.forEach((t)=>{r.push(t.toString())}),0===r.length?"DocumentSet ()":"DocumentSet (\n  "+r.join("  \n")+"\n)"}copy(r,t){const e=new Su;return e.comparator=this.comparator,e.keyedMap=r,e.sortedSet=t,e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.pu=new $n(vt.comparator)}track(r){const t=r.doc.key,e=this.pu.get(t);e?0!==r.type&&3===e.type?this.pu=this.pu.insert(t,r):3===r.type&&1!==e.type?this.pu=this.pu.insert(t,{type:e.type,doc:r.doc}):2===r.type&&2===e.type?this.pu=this.pu.insert(t,{type:2,doc:r.doc}):2===r.type&&0===e.type?this.pu=this.pu.insert(t,{type:0,doc:r.doc}):1===r.type&&0===e.type?this.pu=this.pu.remove(t):1===r.type&&2===e.type?this.pu=this.pu.insert(t,{type:1,doc:e.doc}):0===r.type&&1===e.type?this.pu=this.pu.insert(t,{type:2,doc:r.doc}):yf():this.pu=this.pu.insert(t,r)}Iu(){const r=[];return this.pu.inorderTraversal((t,e)=>{r.push(e)}),r}}class xu{constructor(d,t,e,n,s,i,r,o){this.query=d,this.docs=t,this.oldDocs=e,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=r,this.excludesMetadataChanges=o}static fromInitialDocuments(r,t,e,n){const o=[];return t.forEach((e)=>{o.push({type:0,doc:e})}),new xu(r,t,Su.emptySet(t),o,e,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(r){if(!(this.fromCache===r.fromCache&&this.syncStateChanged===r.syncStateChanged&&this.mutatedKeys.isEqual(r.mutatedKeys)&&Qe(this.query,r.query)&&this.docs.isEqual(r.docs)&&this.oldDocs.isEqual(r.oldDocs)))return!1;const o=this.docChanges,e=r.docChanges;if(o.length!==e.length)return!1;for(let n=0;n<o.length;n++)if(o[n].type!==e[n].type||!o[n].doc.isEqual(e[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Tu=void 0,this.listeners=[]}}class ku{constructor(){this.queries=new Mn((e)=>je(e),Qe),this.onlineState="Unknown",this.Eu=new Set}}class Mu{constructor(r,t,e){this.query=r,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=e||{}}Ru(r){if(!this.options.includeMetadataChanges){const t=[];for(const e of r.docChanges)3!==e.type&&t.push(e);r=new xu(r.query,r.docs,r.oldDocs,t,r.mutatedKeys,r.fromCache,r.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(r)&&(this.Pu.next(r),t=!0):this.Su(r,this.onlineState)&&(this.Du(r),t=!0),this.Vu=r,t}onError(e){this.Pu.error(e)}Au(r){this.onlineState=r;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,r)&&(this.Du(this.Vu),t=!0),t}Su(r,t){if(!r.fromCache)return!0;return(!this.options.Cu||!("Offline"!==t))&&(!r.docs.isEmpty()||"Offline"===t)}vu(r){if(0<r.docChanges.length)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==r.hasPendingWrites;return(r.syncStateChanged||t)&&!0===this.options.includeMetadataChanges}Du(e){e=xu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(r,t){this.payload=r,this.byteLength=t}xu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.M=e}fi(e){return ps(this.M,e)}di(e){return e.metadata.exists?Ps(this.M,e.document,!1):te.newNoDocument(this.fi(e.metadata.name),this._i(e.metadata.readTime))}_i(e){return ws(e)}}class Ku{constructor(r,t,e){this.Nu=r,this.localStore=t,this.M=e,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Lu(r)}ku(r){this.progress.bytesLoaded+=r.byteLength;let t=this.progress.documentsLoaded;if(r.payload.namedQuery)this.queries.push(r.payload.namedQuery);else if(r.payload.documentMetadata){this.documents.push({metadata:r.payload.documentMetadata}),r.payload.documentMetadata.exists||++t;const e=dt.fromString(r.payload.documentMetadata.name);this.collectionGroups.add(e.get(e.length-2))}else r.payload.document&&(this.documents[this.documents.length-1].document=r.payload.document,++t);return t===this.progress.documentsLoaded?null:(this.progress.documentsLoaded=t,Object.assign({},this.progress))}Mu(r){const o=new Map,e=new qu(this.M);for(const i of r)if(i.metadata.queries){const r=e.fi(i.metadata.name);for(const e of i.metadata.queries){const t=(o.get(e)||Hn()).add(r);o.set(e,t)}}return o}async complete(){const r=await mo(this.localStore,new qu(this.M),this.documents,this.Nu.id),n=this.Mu(this.documents);for(const e of this.queries)await go(this.localStore,e,n.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Fu:r}}}class Gu{constructor(e){this.key=e}}class ju{constructor(e){this.key=e}}class Wu{constructor(r,t){this.query=r,this.$u=t,this.Bu=null,this.current=!1,this.Lu=Hn(),this.mutatedKeys=Hn(),this.Uu=Je(r),this.qu=new Su(this.Uu)}get Ku(){return this.$u}Gu(d,t){const m=t?t.Qu:new Cu,p=t?t.qu:this.qu;let s=t?t.mutatedKeys:this.mutatedKeys,g=p,b=!1;const w=Fe(this.query)&&p.size===this.query.limit?p.last():null,u=$e(this.query)&&p.size===this.query.limit?p.first():null;if(d.inorderTraversal((r,t)=>{const e=p.get(r),n=ze(this.query,t)?t:null,o=!!e&&this.mutatedKeys.has(e.key),i=!!n&&(n.hasLocalMutations||this.mutatedKeys.has(n.key)&&n.hasCommittedMutations);let l=!1;e&&n?e.data.isEqual(n.data)?o!==i&&(m.track({type:3,doc:n}),l=!0):this.ju(e,n)||(m.track({type:2,doc:n}),l=!0,(w&&0<this.Uu(n,w)||u&&0>this.Uu(n,u))&&(b=!0)):!e&&n?(m.track({type:0,doc:n}),l=!0):e&&!n&&(m.track({type:1,doc:e}),l=!0,(w||u)&&(b=!0)),l&&(n?(g=g.add(n),s=i?s.add(r):s.delete(r)):(g=g.delete(r),s=s.delete(r)))}),Fe(this.query)||$e(this.query))for(;g.size>this.query.limit;){const e=Fe(this.query)?g.last():g.first();g=g.delete(e.key),s=s.delete(e.key),m.track({type:1,doc:e})}return{qu:g,Qu:m,ni:b,mutatedKeys:s}}ju(r,t){return r.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(d,t,e){const n=this.qu;this.qu=d.qu,this.mutatedKeys=d.mutatedKeys;const s=d.Qu.Iu();s.sort((r,t)=>function(r,t){const e=(e)=>0===e?1:2===e||3===e?2:1===e?0:yf();return e(r)-e(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.type,t.type)||this.Uu(r.doc,t.doc)),this.Wu(e);const i=t?this.zu():[],l=0===this.Lu.size&&this.current?1:0,o=l!==this.Bu;return(this.Bu=l,0!==s.length||o)?{snapshot:new xu(this.query,d.qu,n,s,d.mutatedKeys,0==l,o,!1),Hu:i}:{Hu:i}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Cu,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach((e)=>this.$u=this.$u.add(e)),e.modifiedDocuments.forEach(()=>{}),e.removedDocuments.forEach((e)=>this.$u=this.$u.delete(e)),this.current=e.current)}zu(){if(!this.current)return[];const r=this.Lu;this.Lu=Hn(),this.qu.forEach((e)=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))});const o=[];return r.forEach((e)=>{this.Lu.has(e)||o.push(new ju(e))}),this.Lu.forEach((e)=>{r.has(e)||o.push(new Gu(e))}),o}Yu(r){this.$u=r.li,this.Lu=Hn();const t=this.Gu(r.documents);return this.applyChanges(t,!0)}Xu(){return xu.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class zu{constructor(r,t,e){this.query=r,this.targetId=t,this.view=e}}class Hu{constructor(e){this.key=e,this.Zu=!1}}class Ju{constructor(o,t,e,n,s,i){this.localStore=o,this.remoteStore=t,this.eventManager=e,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.ta={},this.ea=new Mn((e)=>je(e),Qe),this.na=new Map,this.sa=new Set,this.ia=new $n(vt.comparator),this.ra=new Map,this.oa=new Io,this.ua={},this.aa=new Map,this.ca=Tr.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}class Yu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=jo(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(){return null}ga(e){return Xr(this.persistence,new to,e.initialUser,this.M)}wa(){return new bo(vo.zi,this.M)}_a(){return new $o}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Da extends null{constructor(r,t,e){super(),this.ya=r,this.cacheSizeBytes=t,this.forceOwnership=e,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ya.initialize(this,e),await qf(this.ya.syncEngine),await wu(this.ya.remoteStore),await this.persistence.Ts(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}ga(e){return Xr(this.persistence,new to,e.initialUser,this.M)}ma(r){const t=this.persistence.referenceDelegate.garbageCollector;return new Nr(t,r.asyncQueue)}wa(r){const t=Yr(r.databaseInfo.databaseId,r.databaseInfo.persistenceKey),e=void 0===this.cacheSizeBytes?gr.DEFAULT:gr.withCacheSize(this.cacheSizeBytes);return new zr(this.synchronizeTabs,t,r.clientId,e,r.asyncQueue,xo(),Qo(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(){return new $o}}class Tv extends null{constructor(r,t){super(r,t,!1),this.ya=r,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(r){await super.initialize(r);const t=this.ya.syncEngine;this.sharedClientState instanceof Fo&&(this.sharedClientState.syncEngine={Mr:Of.bind(null,t),Or:jf.bind(null,t),Fr:Ff.bind(null,t),Fs:Bf.bind(null,t),kr:Mf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts(async(e)=>{await Vf(this.ya.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}_a(r){const t=xo();if(!Fo.vt(t))throw new G(gv.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const e=Yr(r.databaseInfo.databaseId,r.databaseInfo.persistenceKey);return new Fo(t,r.asyncQueue,e,r.clientId,r.initialUser)}}class Ev{async initialize(r,t){this.localStore||(this.localStore=r.localStore,this.sharedClientState=r.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!r.synchronizeTabs),this.sharedClientState.onlineStateHandler=(e)=>If(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rf.bind(null,this.syncEngine),await Ru(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(){return new ku}createDatastore(r){const t=jo(r.databaseInfo.databaseId),e=(n=r.databaseInfo,new Ko(n));var n;return function(r,t,e,n){return new Yo(r,t,e,n)}(r.authCredentials,r.appCheckCredentials,e,t)}createRemoteStore(o){return t=this.localStore,e=this.datastore,n=o.asyncQueue,s=(e)=>If(this.syncEngine,e,0),i=Lo.vt()?new Lo:new Bo,new Zo(t,e,n,s,i);var t,e,n,s,i}createSyncEngine(r,t){return function(d,t,e,n,s,i,r){const o=new Ju(d,t,e,n,s,i);return r&&(o.ha=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,r.initialUser,r.maxConcurrentLimboResolutions,t)}terminate(){return async function(r){const t=vf(r);bf("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await eu(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}class _v{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(r,t){this.muted||setTimeout(()=>{this.muted||r(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(r,t){this.Ta=r,this.M=t,this.metadata=new fv,this.buffer=new Uint8Array,this.Ea=new TextDecoder("utf-8"),this.Aa().then((e)=>{e&&e.xu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))},(e)=>this.metadata.reject(e))}close(){return this.Ta.cancel()}async getMetadata(){return this.metadata.promise}async da(){return await this.getMetadata(),this.Aa()}async Aa(){const r=await this.Ra();if(null===r)return null;const t=this.Ea.decode(r),o=+t;isNaN(o)&&this.Pa(`length string (${t}) is not valid number`);const n=await this.ba(o);return new Uu(JSON.parse(n),r.length+o)}Va(){return this.buffer.findIndex((e)=>e===123)}async Ra(){for(;0>this.Va()&&!(await this.va()););if(0===this.buffer.length)return null;const r=this.Va();0>r&&this.Pa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,r);return this.buffer=this.buffer.slice(r),t}async ba(r){for(;this.buffer.length<r;)(await this.va())&&this.Pa("Reached the end of bundle when more is expected.");const t=this.Ea.decode(this.buffer.slice(0,r));return this.buffer=this.buffer.slice(r),t}Pa(e){throw this.Ta.cancel(),new Error(`Invalid bundle format: ${e}`)}async va(){const r=await this.Ta.read();if(!r.done){const t=new Uint8Array(this.buffer.length+r.value.length);t.set(this.buffer),t.set(r.value,this.buffer.length),this.buffer=t}return r.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(r){if(this.ensureCommitNotCalled(),0<this.mutations.length)throw new G(gv.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(d,t){const l=vf(d),e=Es(l.M)+"/documents",n={documents:t.map((e)=>ys(l.M,e))},i=await l.ho("BatchGetDocuments",e,n),r=new Map;i.forEach((n)=>{const t=bs(l.M,n);r.set(t.key.toString(),t)});const o=[];return t.forEach((n)=>{const t=r.get(n.toString());xf(!!t),o.push(t)}),o}(this.datastore,r);return t.forEach((e)=>this.recordVersion(e)),t}set(r,t){this.write(t.toMutation(r,this.precondition(r))),this.writtenDocs.add(r.toString())}update(r,t){try{this.write(t.toMutation(r,this.preconditionForUpdate(r)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(r.toString())}delete(e){this.write(new Vn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const r=this.readVersions;this.mutations.forEach((t)=>{r.delete(t.key.toString())}),r.forEach((r,t)=>{const e=vt.fromPath(t);this.mutations.push(new Cn(e,this.precondition(e)))}),await async function(r,t){const e=vf(r),n=Es(e.M)+"/documents",o={writes:t.map((r)=>vs(e.M,r))};await e.oo("Commit",n,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(r){let t;if(r.isFoundDocument())t=r.version;else{if(!r.isNoDocument())throw yf();t=at.min()}const e=this.readVersions.get(r.key.toString());if(!e)this.readVersions.set(r.key.toString(),t);else if(!t.isEqual(e))throw new G(gv.ABORTED,"Document version changed between two reads.")}precondition(r){const t=this.readVersions.get(r.toString());return!this.writtenDocs.has(r.toString())&&t?gn.updateTime(t):gn.none()}preconditionForUpdate(r){const t=this.readVersions.get(r.toString());if(!this.writtenDocs.has(r.toString())&&t){if(t.isEqual(at.min()))throw new G(gv.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gn.updateTime(t)}return gn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(r,t,e,n){this.asyncQueue=r,this.datastore=t,this.updateFunction=e,this.deferred=n,this.Sa=5,this.Do=new Go(this.asyncQueue,"transaction_retry")}run(){this.Sa-=1,this.Da()}Da(){this.Do.To(async()=>{const r=new Cv(this.datastore),t=this.Ca(r);t&&t.then((t)=>{this.asyncQueue.enqueueAndForget(()=>r.commit().then(()=>{this.deferred.resolve(t)}).catch((e)=>{this.xa(e)}))}).catch((e)=>{this.xa(e)})})}Ca(r){try{const t=this.updateFunction(r);return!bt(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}xa(e){0<this.Sa&&this.Na(e)?(this.Sa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Da(),Promise.resolve()))):this.deferred.reject(e)}Na(r){if("FirebaseError"===r.name){const t=r.code;return"aborted"===t||"failed-precondition"===t||!Dn(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(r,t,e,n){this.authCredentials=r,this.appCheckCredentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=mv.UNAUTHENTICATED,this.clientId=nt.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(e,async(e)=>{bf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(e,(e)=>(bf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(gv.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const r=new fv;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&(await this.onlineComponents.terminate()),this.offlineComponents&&(await this.offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),r.resolve()}catch(t){const e=vu(t,"Failed to shutdown persistence");r.reject(e)}}),r.promise}}const Ba=new Map;class Dv{constructor(r){var t;if(void 0===r.host){if(void 0!==r.ssl)throw new G(gv.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=r.host,this.ssl=null===(t=r.ssl)||void 0===t||t;if(this.credentials=r.credentials,this.ignoreUndefinedProperties=!!r.ignoreUndefinedProperties,void 0===r.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==r.cacheSizeBytes&&1048576>r.cacheSizeBytes)throw new G(gv.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=r.cacheSizeBytes}this.experimentalForceLongPolling=!!r.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!r.experimentalAutoDetectLongPolling,this.useFetchStreams=!!r.useFetchStreams,Kf("experimentalForceLongPolling",r.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",r.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(r,t,e){this._authCredentials=t,this._appCheckCredentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dv({}),this._settingsFrozen=!1,r instanceof Vt?this._databaseId=r:(this._app=r,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new G(gv.INVALID_ARGUMENT,"\"projectId\" not provided in firebase.initializeApp.");return new Vt(e.options.projectId)}(r))}get app(){if(!this._app)throw new G(gv.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new G(gv.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dv(e),void 0!==e.credentials&&(this._authCredentials=function(r){if(!r)return new bv;switch(r.type){case"gapi":const t=r.client;return xf("object"==typeof t&&null!==t&&t.auth&&t.auth.getAuthHeaderValueForFirstParty),new xv(t,r.sessionIndex||"0",r.iamToken||null);case"provider":return r.client;default:throw new G(gv.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type");}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const t=Ba.get(r);t&&(bf("ComponentProvider","Removing Datastore"),Ba.delete(r),t.terminate())}(this),Promise.resolve()}}class _c{constructor(r,t,e){this.converter=t,this._key=e,this.type="document",this.firestore=r}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _c(this.firestore,e,this._key)}}class Rv{constructor(r,t,e){this.converter=t,this._query=e,this.type="query",this.firestore=r}withConverter(e){return new Rv(this.firestore,e,this._query)}}class Pv extends null{constructor(r,t,e){super(r,t,Oe(e)),this._path=e,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _c(this.firestore,null,new vt(e))}withConverter(e){return new Pv(this.firestore,e,this._path)}}class Mv{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Go(this,"async_queue_retry"),this.qa=()=>{const e=Qo();e&&bf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=Qo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(r){if(!this.Oa){this.Oa=!0,this.La=r||!1;const t=Qo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(r){if(this.Ka(),this.Oa)return new Promise(()=>{});const t=new fv;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(r().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Ys(e))throw e;bf("AsyncQueue","Operation failed with retryable error: "+e)}0<this.Ma.length&&this.Do.To(()=>this.Qa())}}Ga(r){const t=this.ka.then(()=>(this.Ba=!0,r().catch((r)=>{this.$a=r,this.Ba=!1;const t=function(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+"\n"+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);throw hf("INTERNAL UNHANDLED ERROR: ",t),r}).then((e)=>(this.Ba=!1,e))));return this.ka=t,t}enqueueAfterDelay(r,t,e){this.Ka(),-1<this.Ua.indexOf(r)&&(t=0);const n=tu.createAndSchedule(this,r,t,e,(e)=>this.ja(e));return this.Fa.push(n),n}Ka(){this.$a&&yf()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(r){for(const t of this.Fa)if(t.timerId===r)return!0;return!1}Ha(r){return this.Wa().then(()=>{this.Fa.sort((r,t)=>r.targetTimeMs-t.targetTimeMs);for(const t of this.Fa)if(t.skipDelay(),"all"!==r&&t.timerId===r)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(r){const t=this.Fa.indexOf(r);this.Fa.splice(t,1)}}class Ov{constructor(){this._progressObserver={},this._taskCompletionResolver=new fv,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(r,o,i){this._progressObserver={next:r,error:o,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(r,t){return this._taskCompletionResolver.promise.then(r,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends Lv{constructor(r,t,e){super(r,t,e),this.type="firestore",this._queue=new Mv,this._persistenceKey="name"in r?r.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Hf(this),this._firestoreClient.terminate()}}class zv{constructor(...r){for(let t=0;t<r.length;++t)if(0===r[t].length)throw new G(gv.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(r)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class Bv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bv(gt.fromBase64String(e))}catch(e){throw new G(gv.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bv(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(r,t){if(!isFinite(r)||-90>r||90<r)throw new G(gv.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+r);if(!isFinite(t)||-180>t||180<t)throw new G(gv.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=r,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return st(this._lat,e._lat)||st(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=/^__.*__$/;class qv{constructor(r,t,e){this.data=r,this.fieldMask=t,this.fieldTransforms=e}toMutation(r,t){return null===this.fieldMask?new yn(r,this.data,t,this.fieldTransforms):new bn(r,this.data,this.fieldMask,t,this.fieldTransforms)}}class Kv{constructor(r,t,e){this.data=r,this.fieldMask=t,this.fieldTransforms=e}toMutation(r,t){return new bn(r,this.data,this.fieldMask,t,this.fieldTransforms)}}class Gv{constructor(o,t,e,n,s,i){this.settings=o,this.databaseId=t,this.M=e,this.ignoreUndefinedProperties=n,void 0===s&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Gv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(r){var t;const e=null===(t=this.path)||void 0===t?void 0:t.child(r),o=this.Za({path:e,ec:!1});return o.nc(r),o}sc(r){var t;const e=null===(t=this.path)||void 0===t?void 0:t.child(r),o=this.Za({path:e,ec:!1});return o.Ya(),o}ic(){return this.Za({path:void 0,ec:!0})}rc(e){return lb(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(r){return void 0!==this.fieldMask.find((t)=>r.isPrefixOf(t))||void 0!==this.fieldTransforms.find((t)=>r.isPrefixOf(t.field))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(Wf(this.Xa)&&Uv.test(e))throw this.rc("Document fields cannot begin and end with \"__\"")}}class Hv{constructor(r,t,e){this.databaseId=r,this.ignoreUndefinedProperties=t,this.M=e||jo(r)}ac(r,o,i,d=!1){return new Gv({Xa:r,methodName:o,uc:i,path:wt.emptyPath(),ec:!1,oc:d},this.databaseId,this.M,this.ignoreUndefinedProperties)}}class th extends null{_toFieldTransform(e){if(2!==e.Xa)throw 1===e.Xa?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof th}}class sh extends null{_toFieldTransform(e){return new fn(e.path,new Me())}isEqual(e){return e instanceof sh}}class rh extends null{constructor(r,t){super(r),this.cc=t}_toFieldTransform(r){const o=Qf(this,r,!0),e=this.cc.map((e)=>eb(e,o)),t=new un(e);return new fn(r.path,t)}isEqual(e){return this===e}}class oh extends null{constructor(r,t){super(r),this.cc=t}_toFieldTransform(r){const o=Qf(this,r,!0),e=this.cc.map((e)=>eb(e,o)),t=new an(e);return new fn(r.path,t)}isEqual(e){return this===e}}class uh extends null{constructor(r,t){super(r),this.hc=t}_toFieldTransform(r){const t=new hn(r.M,tn(r.M,this.hc));return new fn(r.path,t)}isEqual(e){return this===e}}const ah=null;class gh{constructor(r,t,e,n,o){this._firestore=r,this._userDataWriter=t,this._key=e,this._document=n,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _c(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Th(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(r){if(this._document){const t=this._document.data.field(ub("DocumentSnapshot.get",r));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Th extends null{data(){return super.data()}}class Eh{constructor(r,t){this.hasPendingWrites=r,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rh extends null{constructor(o,t,e,n,s,i){super(o,t,e,n,i),this._firestore=o,this._firestoreImpl=o,this.metadata=s}exists(){return super.exists()}data(r={}){if(this._document){if(this._converter){const t=new Ph(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,r)}return this._userDataWriter.convertValue(this._document.data.value,r.serverTimestamps)}}get(r,t={}){if(this._document){const e=this._document.data.field(ub("DocumentSnapshot.get",r));if(null!==e)return this._userDataWriter.convertValue(e,t.serverTimestamps)}}}class Ph extends null{data(e={}){return super.data(e)}}class bh{constructor(r,t,e,n){this._firestore=r,this._userDataWriter=t,this._snapshot=n,this.metadata=new Eh(n.hasPendingWrites,n.fromCache),this.query=e}get docs(){const r=[];return this.forEach((t)=>r.push(t)),r}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(r,t){this._snapshot.docs.forEach((e)=>{r.call(t,new Ph(this._firestore,this._userDataWriter,e.key,e,new Eh(this._snapshot.mutatedKeys.has(e.key),this._snapshot.fromCache),this.query.converter))})}docChanges(r={}){const t=!!r.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(gv.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,r){if(o._snapshot.oldDocs.isEmpty()){let t=0;return o._snapshot.docChanges.map((e)=>({type:"added",doc:new Ph(o._firestore,o._userDataWriter,e.doc.key,e.doc,new Eh(o._snapshot.mutatedKeys.has(e.doc.key),o._snapshot.fromCache),o.query.converter),oldIndex:-1,newIndex:t++}))}{let t=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((e)=>r||3!==e.type).map((n)=>{const e=new Ph(o._firestore,o._userDataWriter,n.doc.key,n.doc,new Eh(o._snapshot.mutatedKeys.has(n.doc.key),o._snapshot.fromCache),o.query.converter);let d=-1,l=-1;return 0!==n.type&&(d=t.indexOf(n.doc.key),t=t.delete(n.doc.key)),1!==n.type&&(t=t.add(n.doc),l=t.indexOf(n.doc.key)),{type:gb(n.type),doc:e,oldIndex:d,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class Vh extends null{constructor(r,t,e){super(),this.lc=r,this.fc=t,this.dc=e,this.type="where"}_apply(r){const t=Yf(r.firestore),e=function(d,t,e,l,n,i,r){let o;if(n.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new G(gv.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){hb(r,i);const t=[];for(const e of r)t.push(bb(l,d,e));o={arrayValue:{values:t}}}else o=bb(l,d,r)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||hb(r,i),o=Jf(e,t,r,"in"===i||"not-in"===i);const s=fe.create(n,i,o);return function(r,t){if(t.S()){const e=Le(r);if(null!==e&&!e.isEqual(t.field))throw new G(gv.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${e.toString()}' and '${t.field.toString()}'`);const n=Be(r);null!==n&&yb(r,t.field,n)}const e=function(r,t){for(const e of r.filters)if(0<=t.indexOf(e.op))return e.op;return null}(r,function(e){return"!="===e?["!=","not-in"]:"array-contains"===e?["array-contains","array-contains-any","not-in"]:"in"===e?["array-contains-any","in","not-in"]:"array-contains-any"===e?["array-contains","array-contains-any","in","not-in"]:"not-in"===e?["array-contains","array-contains-any","in","not-in","!="]:[]}(t.op));if(null!==e)throw e===t.op?new G(gv.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new G(gv.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}(d,s),s}(r._query,"where",t,r.firestore._databaseId,this.lc,this.fc,this.dc);return new Rv(r.firestore,r.converter,function(r,t){const e=r.filters.concat([t]);return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}(r._query,e))}}class Nh extends null{constructor(r,t){super(),this.lc=r,this._c=t,this.type="orderBy"}_apply(r){const t=function(r,t,e){if(null!==r.startAt)throw new G(gv.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==r.endAt)throw new G(gv.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const n=new De(t,e);return function(r,t){if(null===Be(r)){const e=Le(r);null!==e&&yb(r,e,t.field)}}(r,n),n}(r._query,this.lc,this._c);return new Rv(r.firestore,r.converter,function(r,t){const e=r.explicitOrderBy.concat([t]);return new Ce(r.path,r.collectionGroup,e,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(r._query,t))}}class Mh extends null{constructor(r,t,e){super(),this.type=r,this.wc=t,this.mc=e}_apply(e){return new Rv(e.firestore,e.converter,Ge(e._query,this.wc,this.mc))}}class Fh extends null{constructor(r,t,e){super(),this.type=r,this.gc=t,this.yc=e}_apply(r){const t=fb(r,this.type,this.gc,this.yc);return new Rv(r.firestore,r.converter,function(r,t){return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,t,r.endAt)}(r._query,t))}}class Lh extends null{constructor(r,t,e){super(),this.type=r,this.gc=t,this.yc=e}_apply(r){const t=fb(r,this.type,this.gc,this.yc);return new Rv(r.firestore,r.converter,function(r,t){return new Ce(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,t)}(r._query,t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(r,t){this._firestore=r,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yf(r)}set(o,t,e){this._verifyNotCommitted();const n=kb(o,this._firestore),s=xb(n.converter,t,e),i=Xf(this._dataReader,"WriteBatch.set",n._key,s,null!==n.converter,e);return this._mutations.push(i.toMutation(n._key,gn.none())),this}update(o,t,e,...n){this._verifyNotCommitted();const s=kb(o,this._firestore);let i;return i="string"==typeof(t=getModularInstance(t))||t instanceof zv?Zf(this._dataReader,"WriteBatch.update",s._key,t,e,n):$f(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,gn.exists(!0))),this}delete(r){this._verifyNotCommitted();const t=kb(r,this._firestore);return this._mutations=this._mutations.concat(new Vn(t._key,gn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,0<this._mutations.length?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(gv.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}class Zh extends null{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bv(e)}convertReference(r){const t=this.convertDocumentKey(r,this.firestore._databaseId);return new _c(this.firestore,null,t)}}class nl extends null{constructor(r,t){super(r,t),this._firestore=r}get(r){const o=kb(r,this._firestore),e=new Zh(this._firestore);return super.get(r).then((r)=>new Rh(this._firestore,e,o._key,r._document,new Eh(!1,!1),o.converter))}}!function(r,o=!0){!function(e){pv=e}(nw),ui(new Sh("firestore",(r,{options:t})=>{const n=r.getProvider("app").getImmediate(),s=new Vv(n,new wv(r.getProvider("auth-internal")),new kv(r.getProvider("app-check-internal")));return t=Object.assign({useFetchStreams:o},t),s._setSettings(t),s},"PUBLIC")),yi(cv,"3.4.8",r),yi(cv,"3.4.8","esm2017")}();var ml=function(e,t={}){if("object"!=typeof t){const e=t;t={name:e}}const r=Object.assign({name:Qh,automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw tw.create("bad-app-name",{appName:n+""});const o=Jh.get(n);if(o){if($r(e,o.options)&&$r(r,o.config))return o;throw tw.create("duplicate-app",{appName:n})}const i=new Dh(n);for(const r of ew.values())i.addComponent(r);const s=new rw(e,r,i);return Jh.set(n,s),s}({apiKey:"AIzaSyAcx5DkrtOAFBTfO1gp1LGF6OxZNRGF_qs",authDomain:"heronsapp.firebaseapp.com",projectId:"heronsapp",storageBucket:"heronsapp.appspot.com",messagingSenderId:"211986004035",appId:"1:211986004035:web:91428c733eb9c7f1617cf6",measurementId:"G-9GYBXZSCDQ"}),Wv=function(e=hi()){e=ei(e);const t=fi(e,Ax);return t.isInitialized()?t.getImmediate():Ng(e)}(ml),Yv=function(t=hi()){return fi(t,"firestore").getImmediate()}(ml),Xv=function(e=hi()){const t=fi(e,"auth");return t.isInitialized()?t.getImmediate():gl(e,{popupRedirectResolver:ox,persistence:[xy,cy,py]})}(ml);var Qv=document.querySelector("#input_mail_user"),$v=document.querySelector("#input_pass_user"),Zv=document.querySelector("#login-btn"),Jv=document.querySelector(".overlay-loading"),ek=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,tk=!1,rk=!1;Qv.addEventListener("keydown",function(e){var t=e.target.value.toLowerCase();tk=!!ek.test(t)}),$v.addEventListener("keydown",function(e){13==e.keyCode&&(console.log("enter event"),tl());var t=e.target.value;rk=!(8>t.length)}),Zv.addEventListener("click",function(){tl()})})()})();