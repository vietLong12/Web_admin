"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2713],{6878:function(t,e,n){n.d(e,{V:function(){return l}});var r=n(3142),u=n(5942);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){var r;return r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"===o(r)?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var l={defaultProps:{pt:void 0},context:void 0,extend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=f(f({},t.defaultProps),l.defaultProps),n=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=String(u.gb.convertToFlatCase(n)).split("."),c=o.shift(),i=Object.keys(e).find(function(t){return u.gb.convertToFlatCase(t)===c})||"";return c?u.gb.isObject(e)?t(u.gb.getJSXElement(e[i],r),o.join("."),r):void 0:u.gb.getJSXElement(e,r)},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="data-pc-",a=o.props&&o.props.__TYPE&&u.gb.convertToFlatCase(o.props.__TYPE)||"",s=l.context.pt||r.ZP.pt||{},g=u.gb.getPropValue(t,e,o)[e],v=s&&n(s[a],e),p=f(f({},"root"===e&&c({},"".concat(i,"name"),a)),{},c({},"".concat(i,"section"),u.gb.convertToFlatCase(e))),d=f({},u.gb.getMergedProps(v,g));return Object.keys(p).length&&(d=f(f({},d),p)),d};return f(f({getProps:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l.context=n,u.gb.getMergedProps(t,e)},getOtherProps:function(t){return u.gb.getDiffProps(t,e)},setMetaData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o(t,e,n)};return{ptm:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e((t.props||{}).pt,n,f(f({},t),r))},ptmo:e}}},t),{},{defaultProps:e})}}},465:function(t,e,n){n.d(e,{D9:function(){return f},HR:function(){return h},KJ:function(){return b},KS:function(){return s},Nr:function(){return g},OR:function(){return a},Yz:function(){return v},ag:function(){return p},gq:function(){return y},nw:function(){return d},rf:function(){return m},zq:function(){return l}});var r=n(6006),u=n(5942),o=n(3142);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,u,o,c,i=[],f=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;f=!1}else for(;!(f=(r=o.call(n)).done)&&(i.push(r.value),i.length!==e);f=!0);}catch(t){l=!0,u=t}finally{try{if(!f&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw u}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(t){var e=r.useRef(void 0);return r.useEffect(function(){e.current=t}),e.current},l=function(t){return r.useEffect(function(){return t},[])},a=function(t){var e=t.target,n=void 0===e?"document":e,o=t.type,c=t.listener,i=t.options,a=t.when,s=void 0===a||a,g=r.useRef(null),v=r.useRef(null),p=f(i),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u.gb.isNotEmpty(t.target)&&(b(),(t.when||s)&&(g.current=u.p7.getTargetElement(t.target))),!v.current&&g.current&&(v.current=function(t){return c&&c(t)},g.current.addEventListener(o,v.current,i))},b=function(){v.current&&(g.current.removeEventListener(o,v.current,i),v.current=null)};return r.useEffect(function(){s?g.current=u.p7.getTargetElement(n):(b(),g.current=null)},[n,s]),r.useEffect(function(){v.current&&(v.current!==c||p!==i)&&(b(),s&&d())},[c,i]),l(function(){b()}),[d,b]},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],u=r.useRef(null),o=r.useRef(null),c=r.useCallback(function(){return clearTimeout(u.current)},[u.current]);return r.useEffect(function(){o.current=t}),r.useEffect(function(){if(n)return u.current=setTimeout(function(){o.current()},e),c;c()},[e,n]),l(function(){c()}),[c]},g=function(t,e){var n=i(r.useState(t),2),u=n[0],o=n[1],c=i(r.useState(t),2),f=c[0],l=c[1];return s(function(){l(u)},e,u!==f),[u,f,o]},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],u=r.useRef(null),o=r.useRef(null),c=r.useCallback(function(){return clearInterval(u.current)},[u.current]);return r.useEffect(function(){o.current=t}),r.useEffect(function(){if(n)return u.current=setInterval(function(){o.current()},e),c;c()},[e,n]),l(function(){c()}),[c]},p=function(t){var e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=i(r.useState(!1),2),u=n[0],o=n[1],c=r.useRef(null),f=function(t){return o(t.matches)},l=function(){return c.current&&c.current.removeEventListener("change",f)&&(c.current=null)};return r.useEffect(function(){return e&&(c.current=window.matchMedia(t),o(c.current.matches),c.current&&c.current.addEventListener("change",f)),l},[t,e]),u},d=function(t){var e=r.useRef(!1);return r.useEffect(function(){if(!e.current)return e.current=!0,t&&t()},[])},b=function(t){var e=t.target,n=t.listener,c=t.options,i=t.when,a=void 0===i||i,s=r.useRef(null),g=r.useRef(null),v=r.useRef([]),p=f(c),d=r.useContext(o.Ou),b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u.gb.isNotEmpty(t.target)&&(h(),(t.when||a)&&(s.current=u.p7.getTargetElement(t.target))),!g.current&&s.current){var e=v.current=u.p7.getScrollableParents(s.current,d?d.hideOverlaysOnDocumentScrolling:o.ZP.hideOverlaysOnDocumentScrolling);g.current=function(t){return n&&n(t)},e.forEach(function(t){return t.addEventListener("scroll",g.current,c)})}},h=function(){g.current&&(v.current.forEach(function(t){return t.removeEventListener("scroll",g.current,c)}),g.current=null)};return r.useEffect(function(){a?s.current=u.p7.getTargetElement(e):(h(),s.current=null)},[e,a]),r.useEffect(function(){g.current&&(g.current!==n||p!==c)&&(h(),a&&b())},[n,c]),l(function(){h()}),[b,h]},h=function(t){var e=t.listener,n=t.when;return a({target:"window",type:"resize",listener:e,when:void 0===n||n})},y=function(t){var e=t.target,n=t.overlay,o=t.listener,c=t.when,f=void 0===c||c,s=r.useRef(null),g=r.useRef(null),v=i(a({type:"click",listener:function(t){o&&o(t,{type:"outside",valid:3!==t.which&&T(t)})}}),2),p=v[0],d=v[1],y=i(h({listener:function(t){o&&o(t,{type:"resize",valid:!u.p7.isTouchDevice()})}}),2),m=y[0],E=y[1],O=i(a({target:"window",type:"orientationchange",listener:function(t){o&&o(t,{type:"orientationchange",valid:!0})}}),2),w=O[0],P=O[1],S=i(b({target:e,listener:function(t){o&&o(t,{type:"scroll",valid:!0})}}),2),j=S[0],R=S[1],T=function(t){return s.current&&!(s.current.isSameNode(t.target)||s.current.contains(t.target)||g.current&&g.current.contains(t.target))},k=function(){d(),E(),P(),R()};return r.useEffect(function(){f?(s.current=u.p7.getTargetElement(e),g.current=u.p7.getTargetElement(n)):(k(),s.current=g.current=null)},[e,n,f]),r.useEffect(function(){k()},[f]),l(function(){k()}),[function(){p(),m(),w(),j()},k]},m=function(t,e){var n=r.useRef(!1);return r.useEffect(function(){if(!n.current){n.current=!0;return}return t&&t()},e)}}}]);