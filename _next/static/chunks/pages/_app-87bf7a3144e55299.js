(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9766:function(e,t,n){var r={EventEmitter:n(7333),EmitterSubscription:n(6584)};e.exports=r},7333:function(e,t,n){"use strict";var r=n(6584),o=n(8231),u=n(3759),i=n(139),c=function(){function e(){this._subscriber=new o,this._currentSubscription=null}var t=e.prototype;return t.addListener=function(e,t,n){return this._subscriber.addSubscription(e,new r(this._subscriber,t,n))},t.once=function(e,t,n){var r=this;return this.addListener(e,(function(){r.removeCurrentListener(),t.apply(n,arguments)}))},t.removeAllListeners=function(e){this._subscriber.removeAllSubscriptions(e)},t.removeCurrentListener=function(){this._currentSubscription||u(!1),this._subscriber.removeSubscription(this._currentSubscription)},t.listeners=function(e){var t=this._subscriber.getSubscriptionsForType(e);return t?t.filter(i.thatReturnsTrue).map((function(e){return e.listener})):[]},t.emit=function(e){var t=this._subscriber.getSubscriptionsForType(e);if(t){for(var n=Object.keys(t),r=0;r<n.length;r++){var o=n[r],u=t[o];u&&(this._currentSubscription=u,this.__emitToSubscription.apply(this,[u].concat(Array.prototype.slice.call(arguments))))}this._currentSubscription=null}},t.__emitToSubscription=function(e,t){var n=Array.prototype.slice.call(arguments,2);e.listener.apply(e.context,n)},e}();e.exports=c},6584:function(e,t,n){"use strict";var r=function(e){var t,n;function r(t,n,r){var o;return(o=e.call(this,t)||this).listener=n,o.context=r,o}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(n(7024));e.exports=r},7024:function(e){"use strict";var t=function(){function e(e){this.subscriber=e}return e.prototype.remove=function(){this.subscriber&&(this.subscriber.removeSubscription(this),this.subscriber=null)},e}();e.exports=t},8231:function(e,t,n){"use strict";var r=n(3759),o=function(){function e(){this._subscriptionsForType={},this._currentSubscription=null}var t=e.prototype;return t.addSubscription=function(e,t){t.subscriber!==this&&r(!1),this._subscriptionsForType[e]||(this._subscriptionsForType[e]=[]);var n=this._subscriptionsForType[e].length;return this._subscriptionsForType[e].push(t),t.eventType=e,t.key=n,t},t.removeAllSubscriptions=function(e){void 0===e?this._subscriptionsForType={}:delete this._subscriptionsForType[e]},t.removeSubscription=function(e){var t=e.eventType,n=e.key,r=this._subscriptionsForType[t];r&&delete r[n]},t.getSubscriptionsForType=function(e){return this._subscriptionsForType[e]},e}();e.exports=o},139:function(e){"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},3759:function(e){"use strict";var t=function(e){};e.exports=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];if(t(n),!e){var i;if(void 0===n)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=0;(i=new Error(n.replace(/%s/g,(function(){return String(o[c++])})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3300)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,i=(u=n(7294))&&u.__esModule?u:{default:u},c=n(6273),a=n(387),s=n(7190);var f={};function l(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,r=a.useRouter(),u=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):u||n}}),[r,e.href,e.as]),p=u.href,d=u.as,h=e.children,v=e.replace,b=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(s.useIntersection({rootMargin:"200px"}),2),x=w[0],_=w[1],S=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=_&&n&&c.isLocalURL(p),t="undefined"!==typeof m?m:r&&r.locale,o=f[p+"%"+d+(t?"%"+t:"")];e&&!o&&l(r,p,d,{locale:t})}),[d,p,_,m,n,r]);var E={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:i}))}(e,r,p,d,v,b,y,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&l(r,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof m?m:r&&r.locale,O=r&&r.isLocaleDomain&&c.getDomainLocale(d,j,r&&r.locales,r&&r.domainLocales);E.href=O||c.addBasePath(c.addLocale(d,j,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=p},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,f=u.useRef(),l=o(u.useState(!1),2),p=l[0],d=l[1],h=o(u.useState(t?t.current:null),2),v=h[0],b=h[1],y=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||p||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),s.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,i=r.elements;return i.set(e,t),u.observe(e),function(){if(i.delete(e),u.unobserve(e),0===i.size){u.disconnect(),a.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,p]);return u.useEffect((function(){if(!c&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),u.useEffect((function(){t&&b(t.current)}),[t]),[y,p]};var u=n(7294),i=n(9311),c="undefined"!==typeof IntersectionObserver;var a=new Map,s=[]},6565:function(e,t,n){"use strict";n.d(t,{H:function(){return h},Z:function(){return v}});var r=n(5893),o=n(1664),u=n(7294);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var h={"/":(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"HOME"})},0),"/about":(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:"ABOUT"})},1),"/works":(0,r.jsx)(o.default,{href:"/works",children:(0,r.jsx)("a",{children:"WORKS"})},2),"/contact":(0,r.jsx)(o.default,{href:"/contact",children:(0,r.jsx)("a",{children:"CONTACT"})},3)},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,u=d(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=u.call(this,e)).eventSubscription=null,t.state={mobileExpand:!1},t.eventSubscription=t.props.appEvents.addListener("navigating",(function(){t.props.setMobileMenuExpand(!1),t.setState(s({},t.state,{mobileExpand:!1}))})),t}return t=c,(n=[{key:"componentWillUnmount",value:function(){var e;null===(e=this.eventSubscription)||void 0===e||e.remove()}},{key:"onMenuButtonClicked",value:function(){this.props.setMobileMenuExpand(!this.state.mobileExpand),this.setState(s({},this.state,{mobileExpand:!this.state.mobileExpand}))}},{key:"render",value:function(){var e=s({},h);return e[this.props.href]&&delete e[this.props.href],(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"menu_button"+(this.state.mobileExpand?" expand":"")+("/"===this.props.href?" white":""),role:"button","aria-expanded":this.state.mobileExpand,onClick:this.onMenuButtonClicked.bind(this),children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)("nav",{className:"navbar"+(this.state.mobileExpand?" expand":""),children:(0,r.jsx)("div",{className:"navbar_links"+("/"===this.props.href?" white":""),children:Object.keys(e).map((function(t){return e[t]}))})})]})}}])&&i(t.prototype,n),o&&i(t,o),c}(u.Component)},3300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5893),o=n(7294),u=n(9766);function i(e,t){return e===t}function c(e){return"function"===typeof e?function(){return e}:e}function a(e,t,n){var r=n&&n.equalityFn||i,u=function(e){var t=(0,o.useState)(c(e)),n=t[0],r=t[1];return[n,(0,o.useCallback)((function(e){return r(c(e))}),[])]}(e),a=u[0],s=u[1],f=function(e,t,n){var r=this,u=(0,o.useRef)(null),i=(0,o.useRef)(0),c=(0,o.useRef)(null),a=(0,o.useRef)([]),s=(0,o.useRef)(),f=(0,o.useRef)(),l=(0,o.useRef)(e),p=(0,o.useRef)(!0);l.current=e;var d=!t&&0!==t&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,v=!("trailing"in n)||!!n.trailing,b="maxWait"in n,y=b?Math.max(+n.maxWait||0,t):null;(0,o.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]);var m=(0,o.useMemo)((function(){var e=function(e){var t=a.current,n=s.current;return a.current=s.current=null,i.current=e,f.current=l.current.apply(n,t)},n=function(e,t){d&&cancelAnimationFrame(c.current),c.current=d?requestAnimationFrame(e):setTimeout(e,t)},o=function(e){if(!p.current)return!1;var n=e-u.current,r=e-i.current;return!u.current||n>=t||n<0||b&&r>=y},m=function(t){return c.current=null,v&&a.current?e(t):(a.current=s.current=null,f.current)},g=function(){var e=Date.now();if(o(e))return m(e);if(p.current){var r=e-u.current,c=e-i.current,a=t-r,s=b?Math.min(a,y-c):a;n(g,s)}},w=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var v=Date.now(),y=o(v);if(a.current=l,s.current=r,u.current=v,y){if(!c.current&&p.current)return i.current=u.current,n(g,t),h?e(u.current):f.current;if(b)return n(g,t),e(u.current)}return c.current||n(g,t),f.current};return w.cancel=function(){c.current&&(d?cancelAnimationFrame(c.current):clearTimeout(c.current)),i.current=0,a.current=u.current=s.current=c.current=null},w.isPending=function(){return!!c.current},w.flush=function(){return c.current?m(Date.now()):f.current},w}),[h,b,t,y,v,d]);return m}((0,o.useCallback)((function(e){return s(e)}),[s]),t,n),l=(0,o.useRef)(e);return r(l.current,e)||(f(e),l.current=e),[a,f]}var s=function(e,t,n){return e[t]?e[t][0]?e[t][0][n]:e[t][n]:"contentBoxSize"===t?e.contentRect["inlineSize"===n?"width":"height"]:void 0};function f(e){void 0===e&&(e={});var t=e.onResize,n=(0,o.useRef)(void 0);n.current=t;var r=e.round||Math.round,u=(0,o.useRef)(),i=(0,o.useState)({width:void 0,height:void 0}),c=i[0],a=i[1],f=(0,o.useRef)(!1);(0,o.useEffect)((function(){return function(){f.current=!0}}),[]);var l=(0,o.useRef)({width:void 0,height:void 0}),p=function(e,t){var n=(0,o.useRef)(null),r=(0,o.useRef)(null),u=(0,o.useRef)(),i=(0,o.useCallback)((function(){var o=null;n.current?o=n.current:t&&(o=t instanceof HTMLElement?t:t.current),r.current&&r.current.element===o&&r.current.reporter===i||(u.current&&(u.current(),u.current=null),r.current={reporter:i,element:o},o&&(u.current=e(o)))}),[t,e]);return(0,o.useEffect)((function(){i()}),[i]),(0,o.useCallback)((function(e){n.current=e,i()}),[i])}((0,o.useCallback)((function(t){return u.current&&u.current.box===e.box&&u.current.round===r||(u.current={box:e.box,round:r,instance:new ResizeObserver((function(t){var o=t[0],u="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize",i=s(o,u,"inlineSize"),c=s(o,u,"blockSize"),p=i?r(i):void 0,d=c?r(c):void 0;if(l.current.width!==p||l.current.height!==d){var h={width:p,height:d};l.current.width=p,l.current.height=d,n.current?n.current(h):f.current||a(h)}}))}),u.current.instance.observe(t,{box:e.box}),function(){u.current&&u.current.instance.unobserve(t)}}),[e.box,r]),e.ref);return(0,o.useMemo)((function(){return{ref:p,width:c.width,height:c.height}}),[p,c?c.width:null,c?c.height:null])}var l=n(6565),p="/_next/static/media/kotatu_ws.d7fb4c8f.png";function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,u=g(i);function i(){return d(this,i),u.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)("div",{className:"splash"+(this.props.splashEnded?" close":""),children:(0,r.jsx)("img",{src:p,alt:"\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u306e\u3053\u305f\u3064\u306e\u753b\u50cf"})})}}])&&h(t.prototype,n),o&&h(t,o),i}(o.Component);n(7153),n(8453);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}function E(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=".bottom_group";function O(e){var t=e.Component,i=e.pageProps,c=e.router,s=(0,o.useState)(""),p=s[0],d=s[1],h=new u.EventEmitter,v=(0,o.useRef)(null),b=(0,o.useRef)(null),y=f(),m=y.height,g=y.width,x=y.ref,_=(0,o.useState)(!1),O=_[0],R=_[1],T=(0,o.useState)(!1),k=T[0],C=T[1],A=(0,o.useState)(!1),M=A[0],P=A[1],L=function(){b.current.on("scroll",(function(e){["greet_container","intro_container"].concat(E(E(Array(6)).map((function(e,t){return"work_"+(t+1)})))).forEach((function(t){if("object"===typeof e.currentElements[t]){var n=e.currentElements[t];n.progress<=.03?n.el.classList.remove("in-view"):n.progress>=.35&&n.el.classList.add("in-view")}}))}))};return(0,o.useEffect)((function(){if(window){var e=E(document.querySelectorAll(j));e.forEach((function(e){return e.style.display="none"}));var t=function(){var t=document.querySelector(".splash");setTimeout((function(){C(!0),t&&t.addEventListener("animationend",(function(){t.style.display="none",e.forEach((function(e){return e.style.display="block"})),P(!0)}))}),300)};"complete"===window.document.readyState?t():window.addEventListener("load",(function(){return t()})),n.e(563).then(n.bind(n,7563)).then((function(e){(0,e.checkWebp)((function(e){return d(e?" webp":" png")}))})),n.e(384).then(n.bind(n,4384)).then((function(e){(0,e.setVhCssVariable)()})),n.e(267).then(n.bind(n,6267)).then((function(e){v.current=e.default,b.current=new v.current({el:document.getElementById("__next"),smooth:!0}),L()}))}var r=function(e){var t,n,r;h.emit("navigating",e),null===(t=b.current)||void 0===t||t.stop(),null===(n=b.current)||void 0===n||n.scrollTo(0,{duration:500,disableLerp:!0}),null===(r=b.current)||void 0===r||r.start(),P(!1)},o=function(){var e;null===(e=b.current)||void 0===e||e.update(),setTimeout((function(){P(!0)}),20)};return c.events.on("routeChangeStart",r),c.events.on("routeChangeComplete",o),function(){c.events.off("routeChangeStart",r),c.events.off("routeChangeComplete",o),b.current&&(b.current.destroy(),b.current=null)}}),[]),(0,o.useEffect)((function(){var e;null===(e=b.current)||void 0===e||e.update()}),a(m,50)),(0,o.useEffect)((function(){v.current&&(b.current&&b.current.destroy(),b.current=new v.current({el:document.querySelector("[data-scroll-container]"),smooth:!0}),L())}),a(g,100)),(0,o.useEffect)((function(){window&&E(document.querySelectorAll(j)).forEach((function(e){return e.style.filter=O?"blur(15px)":"none"}))}),[O]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{splashEnded:k}),(0,r.jsxs)("div",{className:"top_container "+(c.pathname.substring(1)||"home")+p+(M?" show":""),ref:x,"data-scroll-container":!0,children:[(0,r.jsx)(l.Z,{href:c.pathname,appEvents:h,setMobileMenuExpand:R}),(0,r.jsx)(t,S({},i))]})]})}},8453:function(){},7153:function(){},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);