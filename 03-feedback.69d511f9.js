var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return d.Date.now()};function b(e,t,o){var r,i,a,f,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function T(){var e=p();if(j(e))return w(e);u=setTimeout(T,function(e){var n=t-(e-c);return d?v(n,a-(e-l)):n}(e))}function w(e){return u=void 0,m&&r?b(e):(r=i=void 0,f)}function O(){var e=p(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(T,t),s?b(e):f}(c);if(d)return u=setTimeout(T,t),b(c)}return void 0===u&&(u=setTimeout(T,t)),f}return t=h(t)||0,y(o)&&(s=!!o.leading,a=(d="maxWait"in o)?g(h(o.maxWait)||0,t):a,m="trailing"in o?!!o.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return o;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=f.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):a.test(e)?o:+e}t=function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return y(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const j=document.querySelector(".feedback-form");let T={email:"",message:""};const w=localStorage.getItem("feedback-form-state");!function(e){if(null===e)return;try{T=JSON.parse(w)}catch(e){console.log(e.name),console.log(e.message)}for(const e in T)j[e].value=T[e]}(w),j.addEventListener("input",t((function(e){const t=e.target.value.trim();T[e.target.name]=t,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),T.email="",T.message="",e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.69d511f9.js.map