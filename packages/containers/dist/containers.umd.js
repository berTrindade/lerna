!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@components/floatingpage")):"function"==typeof define&&define.amd?define(["@components/floatingpage"],t):(e||self).containers=t(e.floatingpage)}(this,function(e){function t(e){var t={exports:{}};return e(t,t.exports),t.exports}var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var u,i,c=a(e),s=1;s<arguments.length;s++){for(var l in u=Object(arguments[s]))n.call(u,l)&&(c[l]=u[l]);if(r){i=r(u);for(var f=0;f<i.length;f++)o.call(u,i[f])&&(c[i[f]]=u[i[f]])}}return c},i=t(function(e,t){var r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,a=60110,i=60112;t.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),n=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),o=l("react.provider"),a=l("react.context"),i=l("react.forward_ref"),t.Suspense=l("react.suspense"),c=l("react.memo"),s=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function v(){}function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var g=h.prototype=new v;g.constructor=h,u(g,m.prototype),g.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,a={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:i,props:a,_owner:b.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function S(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===a?"."+j(c,0):a,Array.isArray(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),S(u,t,o,"",function(e){return e})):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=a+j(i=e[s],s);c+=S(i,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)c+=S(i=i.value,t,o,l=a+j(i,s++),u);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",function(e){return t.call(r,e,o++)}),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(p(321));return e}var x={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:u};t.Children={map:O,forEach:function(e,t,r){O(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=u({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"}),c=t(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e=u,r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,a=60110,i=60112;t.Suspense=60113;var c=60120,s=60115,l=60116,f=60121,p=60122,d=60117,y=60129,m=60131;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;r=v("react.element"),n=v("react.portal"),t.Fragment=v("react.fragment"),t.StrictMode=v("react.strict_mode"),t.Profiler=v("react.profiler"),o=v("react.provider"),a=v("react.context"),i=v("react.forward_ref"),t.Suspense=v("react.suspense"),c=v("react.suspense_list"),s=v("react.memo"),l=v("react.lazy"),f=v("react.block"),p=v("react.server.block"),d=v("react.fundamental"),v("react.scope"),v("react.opaque.id"),y=v("react.debug_trace_mode"),v("react.offscreen"),m=v("react.legacy_hidden")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e["@@iterator"];return"function"==typeof t?t:null}var b={current:null},_={current:null},w={},k=null;function C(e){k=e}w.setExtraStackFrame=function(e){k=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";k&&(e+=k);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var R={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};function j(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("warn",e,r)}function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("error",e,r)}function O(e,t,r){var n=R.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map(function(e){return""+e});o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}R.ReactDebugCurrentFrame=w;var P={};function E(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;P[o]||(S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),P[o]=!0)}var $={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){E(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){E(e,"replaceState")},enqueueSetState:function(e,t,r,n){E(e,"setState")}},x={};function T(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||$}Object.freeze(x),T.prototype.isReactComponent={},T.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},T.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var F={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},N=function(e,t){Object.defineProperty(T.prototype,e,{get:function(){j("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var D in F)F.hasOwnProperty(D)&&N(D,F[D]);function I(){}function A(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||$}I.prototype=T.prototype;var M=A.prototype=new I;function U(e){return e.displayName||"Context"}function q(e){if(null==e)return null;if("number"==typeof e.tag&&S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case t.Fragment:return"Fragment";case n:return"Portal";case t.Profiler:return"Profiler";case t.StrictMode:return"StrictMode";case t.Suspense:return"Suspense";case c:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case a:return U(e)+".Consumer";case o:return U(e._context)+".Provider";case i:return d=(p=e.render).displayName||p.name||"",e.displayName||(""!==d?"ForwardRef("+d+")":"ForwardRef");case s:return q(e.type);case f:return q(e._render);case l:var r=e._payload,u=e._init;try{return q(u(r))}catch(e){return null}}var p,d;return null}M.constructor=A,e(M,T.prototype),M.isPureReactComponent=!0;var z,V,L,W=Object.prototype.hasOwnProperty,Y={key:!0,ref:!0,__self:!0,__source:!0};function B(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function H(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function J(e,t){var r=function(){z||(z=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function X(e,t){var r=function(){V||(V=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function G(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=q(_.current.type);L[t]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),L[t]=!0)}}L={};var K=function(e,t,n,o,a,u,i){var c={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function Q(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in B(t)&&(u=t.ref,G(t)),H(t)&&(a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)W.call(t,n)&&!Y.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&J(o,d),u&&X(o,d)}return K(e,a,u,i,c,_.current,o)}function Z(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,u=e({},t.props),i=t.key,c=t.ref,s=t._self,l=t._source,f=t._owner;if(null!=r)for(o in B(r)&&(c=r.ref,f=_.current),H(r)&&(i=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)W.call(r,o)&&!Y.hasOwnProperty(o)&&(u[o]=void 0===r[o]&&void 0!==a?a[o]:r[o]);var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];u.children=d}return K(t.type,i,c,s,l,f,u)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var te=!1,re=/\/+/g;function ne(e){return e.replace(re,"$&/")}function oe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r={"=":"=0",":":"=2"},"$"+(""+e.key).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function ae(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+oe(p,0):a;if(Array.isArray(d)){var m="";null!=y&&(m=ne(y)+"/"),ae(d,t,m,"",function(e){return e})}else null!=d&&(ee(d)&&(c=d,s=o+(!d.key||p&&p.key===d.key?"":ne(""+d.key)+"/")+y,d=K(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),t.push(d));return 1}var v=0,h=""===a?".":a+":";if(Array.isArray(e))for(var b=0;b<e.length;b++)v+=ae(l=e[b],t,o,h+oe(l,b),u);else{var _=g(e);if("function"==typeof _){var w=e;_===w.entries&&(te||j("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),te=!0);for(var k,C=_.call(w),R=0;!(k=C.next()).done;)v+=ae(l=k.value,t,o,h+oe(l,R++),u)}else if("object"===i){var S=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===S?"object with keys {"+Object.keys(e).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}}return v}function ue(e,t,r){if(null==e)return e;var n=[],o=0;return ae(e,n,"","",function(e){return t.call(r,e,o++)}),n}function ie(e){if(-1===e._status){var t=(0,e._result)(),r=e;r._status=0,r._result=t,t.then(function(t){if(0===e._status){var r=t.default;void 0===r&&S("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);var n=e;n._status=1,n._result=r}},function(t){if(0===e._status){var r=e;r._status=2,r._result=t}})}if(1===e._status)return e._result;throw e._result}function ce(e){return"string"==typeof e||"function"==typeof e||e===t.Fragment||e===t.Profiler||e===y||e===t.StrictMode||e===t.Suspense||e===c||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===l||e.$$typeof===s||e.$$typeof===o||e.$$typeof===a||e.$$typeof===i||e.$$typeof===d||e.$$typeof===f||e[0]===p)}function se(){var e=b.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}var le,fe,pe,de,ye,me,ve,he=0;function ge(){}ge.__reactDisabledLog=!0;var be,_e=R.ReactCurrentDispatcher;function we(e,t,r){if(void 0===be)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||""}return"\n"+be+e}var ke,Ce=!1,Re="function"==typeof WeakMap?WeakMap:Map;function je(t,r){if(!t||Ce)return"";var n,o=ke.get(t);if(void 0!==o)return o;Ce=!0;var a,u=Error.prepareStackTrace;Error.prepareStackTrace=void 0,a=_e.current,_e.current=null,function(){if(0===he){le=console.log,fe=console.info,pe=console.warn,de=console.error,ye=console.group,me=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}he++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(t,[],i)}else{try{i.call()}catch(e){n=e}t.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}t()}}catch(e){if(e&&n&&"string"==typeof e.stack){for(var c=e.stack.split("\n"),s=n.stack.split("\n"),l=c.length-1,f=s.length-1;l>=1&&f>=0&&c[l]!==s[f];)f--;for(;l>=1&&f>=0;l--,f--)if(c[l]!==s[f]){if(1!==l||1!==f)do{if(l--,--f<0||c[l]!==s[f]){var p="\n"+c[l].replace(" at new "," at ");return"function"==typeof t&&ke.set(t,p),p}}while(l>=1&&f>=0);break}}}finally{Ce=!1,_e.current=a,function(){if(0==--he){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:e({},t,{value:le}),info:e({},t,{value:fe}),warn:e({},t,{value:pe}),error:e({},t,{value:de}),group:e({},t,{value:ye}),groupCollapsed:e({},t,{value:me}),groupEnd:e({},t,{value:ve})})}he<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=u}var d=t?t.displayName||t.name:"",y=d?we(d):"";return"function"==typeof t&&ke.set(t,y),y}function Se(e,t,r){return je(e,!1)}function Oe(e,r,n){if(null==e)return"";if("function"==typeof e)return je(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return we(e);switch(e){case t.Suspense:return we("Suspense");case c:return we("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case i:return Se(e.render);case s:return Oe(e.type,r,n);case f:return Se(e._render);case l:var o=e._payload,a=e._init;try{return Oe(a(o),r,n)}catch(e){}}return""}ke=new Re;var Pe,Ee={},$e=R.ReactDebugCurrentFrame;function xe(e){if(e){var t=e._owner,r=Oe(e.type,e._source,t?t.type:null);$e.setExtraStackFrame(r)}else $e.setExtraStackFrame(null)}function Te(e){if(e){var t=e._owner;C(Oe(e.type,e._source,t?t.type:null))}else C(null)}function Fe(){if(_.current){var e=q(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Ne(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Pe=!1;var De={};function Ie(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Fe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!De[r]){De[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+q(e._owner.type)+"."),Te(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Te(null)}}}function Ae(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ee(n)&&Ie(n,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=g(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ee(a.value)&&Ie(a.value,t)}}function Me(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==i&&r.$$typeof!==s)return;t=r.propTypes}if(t){var n=q(r);!function(e,t,r,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": prop type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(xe(o),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),xe(null)),i instanceof Error&&!(i.message in Ee)&&(Ee[i.message]=!0,xe(o),S("Failed %s type: %s",r,i.message),xe(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||Pe||(Pe=!0,S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",q(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ue(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Te(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Te(null);break}}null!==e.ref&&(Te(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),Te(null))}function qe(e,n,o){var a=ce(e);if(!a){var u="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,c=Ne(n);u+=c||Fe(),null===e?i="null":Array.isArray(e)?i="array":void 0!==e&&e.$$typeof===r?(i="<"+(q(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var s=Q.apply(this,arguments);if(null==s)return s;if(a)for(var l=2;l<arguments.length;l++)Ae(arguments[l],e);return e===t.Fragment?Ue(s):Me(s),s}var ze=!1;try{var Ve=Object.freeze({});new Map([[Ve,null]]),new Set([Ve])}catch(e){}var Le=qe,We={map:ue,forEach:function(e,t,r){ue(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=We,t.Component=T,t.PureComponent=A,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){for(var n=Z.apply(this,arguments),o=2;o<arguments.length;o++)Ae(arguments[o],n.type);return Me(n),n},t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&S("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:o,_context:r};var n=!1,u=!1,i=!1,c={$$typeof:a,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(c,{Provider:{get:function(){return u||(u=!0,S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(e){i||(j("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),i=!0)}}}),r.Consumer=c,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=Le,t.createFactory=function(e){var t=qe.bind(null,e);return t.type=e,ze||(ze=!0,j("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return j("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===s?S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?S("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&S("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:i,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,null==e.displayName&&(e.displayName=r)}}),r},t.isValidElement=ee,t.lazy=function(e){var t,r,n={$$typeof:l,_payload:{_status:-1,_result:e},_init:ie};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ce(e)||S("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:s,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,null==e.displayName&&(e.displayName=t)}}),n},t.useCallback=function(e,t){return se().useCallback(e,t)},t.useContext=function(e,t){var r=se();if(void 0!==t&&S("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},t.useDebugValue=function(e,t){return se().useDebugValue(e,t)},t.useEffect=function(e,t){return se().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return se().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return se().useLayoutEffect(e,t)},t.useMemo=function(e,t){return se().useMemo(e,t)},t.useReducer=function(e,t,r){return se().useReducer(e,t,r)},t.useRef=function(e){return se().useRef(e)},t.useState=function(e){return se().useState(e)},t.version="17.0.2"}()}),s=t(function(e){e.exports="production"===process.env.NODE_ENV?i:c});return{EventsModule:function(){/*#__PURE__*/return s.createElement(Fragment,null,/*#__PURE__*/s.createElement("h1",null,"EventsModule"),/*#__PURE__*/s.createElement(e.FloatingPage,{text:"I'm a component from components package"}))}}});
//# sourceMappingURL=containers.umd.js.map
