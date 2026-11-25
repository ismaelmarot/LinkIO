/*! For license information please see main.9859c81e.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),o=n(950);function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(l(188))}function f(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=f(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope");var _=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var j=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function P(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function O(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case v:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case S:return"Suspense";case E:return"SuspenseList";case _:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:O(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return O(e(t))}catch(er){}}return null}var L=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},D=[],M=-1;function F(e){return{current:e}}function I(e){0>M||(e.current=D[M],D[M]=null,M--)}function U(e,t){M++,D[M]=e.current,e.current=t}var H,W,B=F(null),V=F(null),q=F(null),Q=F(null);function K(e,t){switch(U(q,t),U(V,e),U(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=yd(t=bd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(B),U(B,e)}function G(){I(B),I(V),I(q)}function Y(e){null!==e.memoizedState&&U(Q,e);var t=B.current,n=yd(t,e.type);t!==n&&(U(V,e),U(B,n))}function X(e){V.current===e&&(I(B),I(V)),Q.current===e&&(I(Q),ff._currentValue=A)}function J(e){if(void 0===H)try{throw Error()}catch(er){var t=er.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",W=-1<er.stack.indexOf("\n    at")?" (<anonymous>)":-1<er.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+H+e+W}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(er){var r=er}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),l=o[0],i=o[1];if(l&&i){var s=l.split("\n"),u=i.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return J("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(er){return"\nError generating stack: "+er.message+"\n"+er.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,le=r.unstable_shouldYield,ie=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,ge=r.log,me=r.unstable_setDisableYieldValue,ve=null,be=null;function ye(e){if("function"===typeof ge&&me(e),be&&"function"===typeof be.setStrictMode)try{be.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=256,Ee=262144,Ce=4194304;function ze(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=134217727&r;return 0!==i?0!==(r=i&~o)?a=ze(r):0!==(l&=i)?a=ze(l):n||0!==(n=i&~e)&&(a=ze(n)):0!==(i=r&~o)?a=ze(i):0!==l?a=ze(l):n||0!==(n=r&~e)&&(a=ze(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function je(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Pe(){var e=Ce;return 0===(62914560&(Ce<<=1))&&(Ce=4194304),e}function Ne(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Le(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function $e(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Ae(n))&(e.suspendedLanes|t))?0:n}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=$.p;return 0!==e?e:void 0===(e=window.event)?32:jf(e.type)}function Fe(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Ie=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Ie,He="__reactProps$"+Ie,We="__reactContainer$"+Ie,Be="__reactEvents$"+Ie,Ve="__reactListeners$"+Ie,qe="__reactHandles$"+Ie,Qe="__reactResources$"+Ie,Ke="__reactMarker$"+Ie;function Ge(e){delete e[Ue],delete e[He],delete e[Be],delete e[Ve],delete e[qe]}function Ye(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Dd(e);null!==e;){if(n=e[Ue])return n;e=Dd(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[Ue]||e[We]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(l(33))}function Ze(e){var t=e[Qe];return t||(t=e[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ke]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},it={};function st(e,t,n){if(a=t,re.call(it,a)||!re.call(lt,a)&&(ot.test(a)?it[a]=!0:(lt[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ut(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ct(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ft(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=ft(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ft(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function gt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var mt=/[\n"\\]/g;function vt(e){return e.replace(mt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,r,a,o,l,i){e.name="",null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.type=l:e.removeAttribute("type"),null!=t?"number"===l?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==l&&"reset"!==l||e.removeAttribute("value"),null!=t?xt(e,l,dt(t)):null!=n?xt(e,l,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.name=""+dt(i):e.removeAttribute("name")}function yt(e,t,n,r,a,o,l,i){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void pt(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l&&(e.name=l),pt(e)}function xt(e,t,n){"number"===t&&gt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(l(92));if(L(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function Et(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ct=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Ct.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _t(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(l(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&zt(e,o,t[o])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nt(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var Lt=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var $t=null,At=null;function Dt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[He]||null;e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[He]||null;if(!a)throw Error(l(90));bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ht(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Mt=!1;function Ft(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==$t||null!==At)&&(ec(),$t&&(t=$t,e=At,At=$t=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[He]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(l(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ht=!1;if(Ut)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ht=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch(Zf){Ht=!1}var Bt=null,Vt=null,qt=null;function Qt(){if(qt)return qt;var e,t,n=Vt,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return qt=a.slice(e,1<t?1-t:void 0)}function Kt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Gt(){return!0}function Yt(){return!1}function Xt(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Gt:Yt,this.isPropagationStopped=Yt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Gt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Gt)},persist:function(){},isPersistent:Gt}),t}var Jt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Xt(tn),rn=p({},tn,{view:0,detail:0}),an=Xt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Jt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Jt=0,en=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Xt(on),sn=Xt(p({},on,{dataTransfer:0})),un=Xt(p({},rn,{relatedTarget:0})),cn=Xt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Xt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),fn=Xt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=gn[e])&&!!t[e]}function vn(){return mn}var bn=Xt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Kt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?hn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vn,charCode:function(e){return"keypress"===e.type?Kt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Kt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),yn=Xt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Xt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vn})),wn=Xt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Xt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Sn=Xt(p({},tn,{newState:0,oldState:0})),En=[9,13,27,32],Cn=Ut&&"CompositionEvent"in window,zn=null;Ut&&"documentMode"in document&&(zn=document.documentMode);var _n=Ut&&"TextEvent"in window&&!zn,jn=Ut&&(!Cn||zn&&8<zn&&11>=zn),Tn=String.fromCharCode(32),Pn=!1;function Nn(e,t){switch(e){case"keyup":return-1!==En.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function On(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ln=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function An(e,t,n,r){$t?At?At.push(r):At=[r]:$t=r,0<(t=ad(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Mn=null;function Fn(e){Yc(e,0)}function In(e){if(ht(Je(e)))return e}function Un(e,t){if("change"===e)return t}var Hn=!1;if(Ut){var Wn;if(Ut){var Bn="oninput"in document;if(!Bn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Bn="function"===typeof Vn.oninput}Wn=Bn}else Wn=!1;Hn=Wn&&(!document.documentMode||9<document.documentMode)}function qn(){Dn&&(Dn.detachEvent("onpropertychange",Qn),Mn=Dn=null)}function Qn(e){if("value"===e.propertyName&&In(Mn)){var t=[];An(t,Mn,e,Rt(e)),Ft(Fn,t)}}function Kn(e,t,n){"focusin"===e?(qn(),Mn=n,(Dn=t).attachEvent("onpropertychange",Qn)):"focusout"===e&&qn()}function Gn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(Mn)}function Yn(e,t){if("click"===e)return In(t)}function Xn(e,t){if("input"===e||"change"===e)return In(t)}var Jn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Zn(e,t){if(Jn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=gt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=gt((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var lr=Ut&&"documentMode"in document&&11>=document.documentMode,ir=null,sr=null,ur=null,cr=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;cr||null==ir||ir!==gt(r)||("selectionStart"in(r=ir)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ur&&Zn(ur,r)||(ur=r,0<(r=ad(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},hr={},gr={};function mr(e){if(hr[e])return hr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in gr)return hr[e]=n[t];return e}Ut&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var vr=mr("animationend"),br=mr("animationiteration"),yr=mr("animationstart"),xr=mr("transitionrun"),wr=mr("transitionstart"),kr=mr("transitioncancel"),Sr=mr("transitionend"),Er=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Er.set(e,t),rt(t,[e])}Cr.push("scrollEnd");var _r="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},jr=[],Tr=0,Pr=0;function Nr(){for(var e=Tr,t=Pr=Tr=0;t<e;){var n=jr[t];jr[t++]=null;var r=jr[t];jr[t++]=null;var a=jr[t];jr[t++]=null;var o=jr[t];if(jr[t++]=null,null!==r&&null!==a){var l=r.pending;null===l?a.next=a:(a.next=l.next,l.next=a),r.pending=a}0!==o&&$r(n,a,o)}}function Or(e,t,n,r){jr[Tr++]=e,jr[Tr++]=t,jr[Tr++]=n,jr[Tr++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Lr(e,t,n,r){return Or(e,t,n,r),Ar(e)}function Rr(e,t){return Or(e,null,null,t),Ar(e)}function $r(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Ar(e){if(50<Vu)throw Vu=0,qu=null,Error(l(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function Mr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,t,n,r){return new Mr(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ur(e,t){var n=e.alternate;return null===n?((n=Fr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wr(e,t,n,r,a,o){var i=0;if(r=e,"function"===typeof e)Ir(e)&&(i=1);else if("string"===typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case _:return(e=Fr(31,n,t,a)).elementType=_,e.lanes=o,e;case v:return Br(n.children,a,o,t);case b:i=8,a|=24;break;case y:return(e=Fr(12,n,t,2|a)).elementType=y,e.lanes=o,e;case S:return(e=Fr(13,n,t,a)).elementType=S,e.lanes=o,e;case E:return(e=Fr(19,n,t,a)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:i=10;break e;case x:i=9;break e;case k:i=11;break e;case C:i=14;break e;case z:i=16,r=null;break e}i=29,n=Error(l(130,null===e?"null":typeof e,"")),r=null}return(t=Fr(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Br(e,t,n,r){return(e=Fr(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Fr(6,e,null,t)).lanes=n,e}function qr(e){var t=Fr(18,null,null,0);return t.stateNode=e,t}function Qr(e,t,n){return(t=Fr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kr=new WeakMap;function Gr(e,t){if("object"===typeof e&&null!==e){var n=Kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Kr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Yr=[],Xr=0,Jr=null,Zr=0,ea=[],ta=0,na=null,ra=1,aa="";function oa(e,t){Yr[Xr++]=Zr,Yr[Xr++]=Jr,Jr=e,Zr=t}function la(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var o=32-xe(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,ra=1<<32-xe(t)+a|n<<a|r,aa=o+e}else ra=1<<o|n<<a|r,aa=e}function ia(e){null!==e.return&&(oa(e,1),la(e,1,0))}function sa(e){for(;e===Jr;)Jr=Yr[--Xr],Yr[Xr]=null,Zr=Yr[--Xr],Yr[Xr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function ua(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ca=null,da=null,fa=!1,pa=null,ha=!1,ga=Error(l(519));function ma(e){throw ka(Gr(Error(l(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ga}function va(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[He]=r,n){case"dialog":Xc("cancel",t),Xc("close",t);break;case"iframe":case"object":case"embed":Xc("load",t);break;case"video":case"audio":for(n=0;n<Kc.length;n++)Xc(Kc[n],t);break;case"source":Xc("error",t);break;case"img":case"image":case"link":Xc("error",t),Xc("load",t);break;case"details":Xc("toggle",t);break;case"input":Xc("invalid",t),yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xc("invalid",t);break;case"textarea":Xc("invalid",t),St(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||cd(t.textContent,n)?(null!=r.popover&&(Xc("beforetoggle",t),Xc("toggle",t)),null!=r.onScroll&&Xc("scroll",t),null!=r.onScrollEnd&&Xc("scrollend",t),null!=r.onClick&&(t.onclick=Ot),t=!0):t=!1,t||ma(e,!0)}function ba(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:return void(ha=!1);case 27:case 3:return void(ha=!0);default:ca=ca.return}}function ya(e){if(e!==ca)return!1;if(!fa)return ba(e),fa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&da&&ma(e),ba(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));da=Ad(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));da=Ad(e)}else 27===n?(n=da,_d(e.type)?(e=$d,$d=null,da=e):da=n):da=ca?Rd(e.stateNode.nextSibling):null;return!0}function xa(){da=ca=null,fa=!1}function wa(){var e=pa;return null!==e&&(null===Nu?Nu=e:Nu.push.apply(Nu,e),pa=null),e}function ka(e){null===pa?pa=[e]:pa.push(e)}var Sa=F(null),Ea=null,Ca=null;function za(e,t,n){U(Sa,t._currentValue),t._currentValue=n}function _a(e){e._currentValue=Sa.current,I(Sa)}function ja(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var i=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),ja(o.return,n,e),r||(i=null);break e}o=s.next}}else if(18===a.tag){if(null===(i=a.return))throw Error(l(341));i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),ja(i,n,e),i=null}else i=a.child;if(null!==i)i.return=a;else for(i=a;null!==i;){if(i===e){i=null;break}if(null!==(a=i.sibling)){a.return=i.return,i=a;break}i=i.return}a=i}}function Pa(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var i=a.alternate;if(null===i)throw Error(l(387));if(null!==(i=i.memoizedProps)){var s=a.type;Jn(a.pendingProps.value,i.value)||(null!==e?e.push(s):e=[s])}}else if(a===Q.current){if(null===(i=a.alternate))throw Error(l(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(ff):e=[ff])}a=a.return}null!==e&&Ta(t,e,n,r),t.flags|=262144}function Na(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ea=e,Ca=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function La(e){return $a(Ea,e)}function Ra(e,t){return null===Ea&&Oa(e),$a(e,t)}function $a(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ca){if(null===e)throw Error(l(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Aa="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Da=r.unstable_scheduleCallback,Ma=r.unstable_NormalPriority,Fa={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ia(){return{controller:new Aa,data:new Map,refCount:0}}function Ua(e){e.refCount--,0===e.refCount&&Da(Ma,function(){e.controller.abort()})}var Ha=null,Wa=0,Ba=0,Va=null;function qa(){if(0===--Wa&&null!==Ha){null!==Va&&(Va.status="fulfilled");var e=Ha;Ha=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Qa=R.S;R.S=function(e,t){Ru=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ha){var n=Ha=[];Wa=0,Ba=Wc(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wa++,t.then(qa,qa)}(0,t),null!==Qa&&Qa(e,t)};var Ka=F(null);function Ga(){var e=Ka.current;return null!==e?e:gu.pooledCache}function Ya(e,t){U(Ka,null===t?Ka.current:t.pool)}function Xa(){var e=Ga();return null===e?null:{parent:Fa._currentValue,pool:e}}var Ja=Error(l(460)),Za=Error(l(474)),eo=Error(l(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw io(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ot,Ot);else{if(null!==(e=gu)&&100<e.shellSuspendCounter)throw Error(l(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw io(e=t.reason),e}throw oo=t,Ja}}function ao(e){try{return(0,e._init)(e._payload)}catch(er){if(null!==er&&"object"===typeof er&&"function"===typeof er.then)throw oo=er,Ja;throw er}}var oo=null;function lo(){if(null===oo)throw Error(l(459));var e=oo;return oo=null,e}function io(e){if(e===Ja||e===eo)throw Error(l(483))}var so=null,uo=0;function co(e){var t=uo;return uo+=1,null===so&&(so=[]),ro(so,e,t)}function fo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function po(e,t){if(t.$$typeof===h)throw Error(l(525));throw e=Object.prototype.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ho(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ur(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===v?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===z&&ao(o)===t.type)?(fo(t=a(t,n.props),n),t.return=e,t):(fo(t=Wr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Qr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Br(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case g:return fo(n=Wr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Qr(t,e.mode,n)).return=e,t;case z:return f(e,t=ao(t),n)}if(L(t)||P(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,co(t),n);if(t.$$typeof===w)return f(e,Ra(e,t),n);po(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case g:return n.key===a?u(e,t,n,r):null;case m:return n.key===a?c(e,t,n,r):null;case z:return p(e,t,n=ao(n),r)}if(L(n)||P(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,co(n),r);if(n.$$typeof===w)return p(e,t,Ra(e,n),r);po(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case z:return h(e,t,n,r=ao(r),a)}if(L(r)||P(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return h(e,t,n,co(r),a);if(r.$$typeof===w)return h(e,t,n,Ra(t,r),a);po(t,r)}return null}function b(s,u,c,d){if("object"===typeof c&&null!==c&&c.type===v&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case g:e:{for(var y=c.key;null!==u;){if(u.key===y){if((y=c.type)===v){if(7===u.tag){n(s,u.sibling),(d=a(u,c.props.children)).return=s,s=d;break e}}else if(u.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===z&&ao(y)===u.type){n(s,u.sibling),fo(d=a(u,c.props),c),d.return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}c.type===v?((d=Br(c.props.children,s.mode,d,c.key)).return=s,s=d):(fo(d=Wr(c.type,c.key,c.props,null,s.mode,d),c),d.return=s,s=d)}return i(s);case m:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(d=a(u,c.children||[])).return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}(d=Qr(c,s.mode,d)).return=s,s=d}return i(s);case z:return b(s,u,c=ao(c),d)}if(L(c))return function(a,l,i,s){for(var u=null,c=null,d=l,g=l=0,m=null;null!==d&&g<i.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(a,d,i[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(a,d),l=o(v,l,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===i.length)return n(a,d),fa&&oa(a,g),u;if(null===d){for(;g<i.length;g++)null!==(d=f(a,i[g],s))&&(l=o(d,l,g),null===c?u=d:c.sibling=d,c=d);return fa&&oa(a,g),u}for(d=r(d);g<i.length;g++)null!==(m=h(d,a,g,i[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),l=o(m,l,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach(function(e){return t(a,e)}),fa&&oa(a,g),u}(s,u,c,d);if(P(c)){if("function"!==typeof(y=P(c)))throw Error(l(150));return function(a,i,s,u){if(null==s)throw Error(l(151));for(var c=null,d=null,g=i,m=i=0,v=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(a,g,b.value,u);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(a,g),i=o(y,i,m),null===d?c=y:d.sibling=y,d=y,g=v}if(b.done)return n(a,g),fa&&oa(a,m),c;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=f(a,b.value,u))&&(i=o(b,i,m),null===d?c=b:d.sibling=b,d=b);return fa&&oa(a,m),c}for(g=r(g);!b.done;m++,b=s.next())null!==(b=h(g,a,m,b.value,u))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),i=o(b,i,m),null===d?c=b:d.sibling=b,d=b);return e&&g.forEach(function(e){return t(a,e)}),fa&&oa(a,m),c}(s,u,c=y.call(c),d)}if("function"===typeof c.then)return b(s,u,co(c),d);if(c.$$typeof===w)return b(s,u,Ra(s,c),d);po(s,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(d=a(u,c)).return=s,s=d):(n(s,u),(d=Vr(c,s.mode,d)).return=s,s=d),i(s)):n(s,u)}return function(e,t,n,r){try{uo=0;var a=b(e,t,n,r);return so=null,a}catch(er){if(er===Ja||er===eo)throw er;var o=Fr(29,er,null,e.mode);return o.lanes=r,o.return=e,o}}}var go=ho(!0),mo=ho(!1),vo=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&hu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Ar(e),$r(e,null,n),t}return Or(e,r,t,n),Ar(e)}function ko(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Eo=!1;function Co(){if(Eo){if(null!==Va)throw Va}}function zo(e,t,n,r){Eo=!1;var a=e.updateQueue;vo=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===l?o=u:l.next=u,l=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==l&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(l=0,c=u=s=null,i=o;;){var f=-536870913&i.lane,h=f!==i.lane;if(h?(vu&f)===f:(r&f)===f){0!==f&&f===Ba&&(Eo=!0),null!==c&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var g=e,m=i;f=t;var v=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){d=g.call(v,d,f);break e}d=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(f="function"===typeof(g=m.payload)?g.call(v,d,f):g)||void 0===f)break e;d=p({},d,f);break e;case 2:vo=!0}}null!==(f=i.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,l|=f;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(h=i).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===o&&(a.shared.lanes=0),Cu|=l,e.lanes=l,e.memoizedState=d}}function _o(e,t){if("function"!==typeof e)throw Error(l(191,e));e.call(t)}function jo(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)_o(n[e],t)}var To=F(null),Po=F(0);function No(e,t){U(Po,e=Su),U(To,t),Su=e|t.baseLanes}function Oo(){U(Po,Su),U(To,To.current)}function Lo(){Su=Po.current,I(To),I(Po)}var Ro=F(null),$o=null;function Ao(e){var t=e.alternate;U(Uo,1&Uo.current),U(Ro,e),null===$o&&(null===t||null!==To.current||null!==t.memoizedState)&&($o=e)}function Do(e){U(Uo,Uo.current),U(Ro,e),null===$o&&($o=e)}function Mo(e){22===e.tag?(U(Uo,Uo.current),U(Ro,e),null===$o&&($o=e)):Fo()}function Fo(){U(Uo,Uo.current),U(Ro,Ro.current)}function Io(e){I(Ro),$o===e&&($o=null),I(Uo)}var Uo=F(0);function Ho(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Od(n)||Ld(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,Bo=null,Vo=null,qo=null,Qo=!1,Ko=!1,Go=!1,Yo=0,Xo=0,Jo=null,Zo=0;function el(){throw Error(l(321))}function tl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function nl(e,t,n,r,a,o){return Wo=o,Bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?vi:bi,Go=!1,o=n(r,a),Go=!1,Ko&&(o=al(t,n,r,a)),rl(e),o}function rl(e){R.H=mi;var t=null!==Vo&&null!==Vo.next;if(Wo=0,qo=Vo=Bo=null,Qo=!1,Xo=0,Jo=null,t)throw Error(l(300));null===e||Ri||null!==(e=e.dependencies)&&Na(e)&&(Ri=!0)}function al(e,t,n,r){Bo=e;var a=0;do{if(Ko&&(Jo=null),Xo=0,Ko=!1,25<=a)throw Error(l(301));if(a+=1,qo=Vo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=yi,o=t(n,r)}while(Ko);return o}function ol(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?dl(t):t,e=e.useState()[0],(null!==Vo?Vo.memoizedState:null)!==e&&(Bo.flags|=1024),t}function ll(){var e=0!==Yo;return Yo=0,e}function il(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sl(e){if(Qo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Qo=!1}Wo=0,qo=Vo=Bo=null,Ko=!1,Xo=Yo=0,Jo=null}function ul(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===qo?Bo.memoizedState=qo=e:qo=qo.next=e,qo}function cl(){if(null===Vo){var e=Bo.alternate;e=null!==e?e.memoizedState:null}else e=Vo.next;var t=null===qo?Bo.memoizedState:qo.next;if(null!==t)qo=t,Vo=e;else{if(null===e){if(null===Bo.alternate)throw Error(l(467));throw Error(l(310))}e={memoizedState:(Vo=e).memoizedState,baseState:Vo.baseState,baseQueue:Vo.baseQueue,queue:Vo.queue,next:null},null===qo?Bo.memoizedState=qo=e:qo=qo.next=e}return qo}function dl(e){var t=Xo;return Xo+=1,null===Jo&&(Jo=[]),e=ro(Jo,e,t),t=Bo,null===(null===qo?t.memoizedState:qo.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?vi:bi),e}function fl(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return dl(e);if(e.$$typeof===w)return La(e)}throw Error(l(438,String(e)))}function pl(e){var t=null,n=Bo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Bo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=j;return t.index++,n}function hl(e,t){return"function"===typeof t?t(e):t}function gl(e){return ml(cl(),Vo,e)}function ml(e,t,n){var r=e.queue;if(null===r)throw Error(l(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var i=a.next;a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=i=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(vu&f)===f:(Wo&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ba&&(d=!0);else{if((Wo&p)===p){c=c.next,p===Ba&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,i=o):u=u.next=f,Bo.lanes|=p,Cu|=p}f=c.action,Go&&n(o,f),o=c.hasEagerState?c.eagerState:n(o,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,i=o):u=u.next=p,Bo.lanes|=f,Cu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?i=o:u.next=s,!Jn(o,e.memoizedState)&&(Ri=!0,d&&null!==(n=Va)))throw n;e.memoizedState=o,e.baseState=i,e.baseQueue=u,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vl(e){var t=cl(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do{o=e(o,i.action),i=i.next}while(i!==a);Jn(o,t.memoizedState)||(Ri=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bl(e,t,n){var r=Bo,a=cl(),o=fa;if(o){if(void 0===n)throw Error(l(407));n=n()}else n=t();var i=!Jn((Vo||a).memoizedState,n);if(i&&(a.memoizedState=n,Ri=!0),a=a.queue,Wl(wl.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||null!==qo&&1&qo.memoizedState.tag){if(r.flags|=2048,Ml(9,{destroy:void 0},xl.bind(null,r,a,n,t),null),null===gu)throw Error(l(349));o||0!==(127&Wo)||yl(r,t,n)}return n}function yl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Bo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xl(e,t,n,r){t.value=n,t.getSnapshot=r,kl(t)&&Sl(e)}function wl(e,t,n){return n(function(){kl(t)&&Sl(e)})}function kl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch(r){return!0}}function Sl(e){var t=Rr(e,2);null!==t&&Gu(t,e,2)}function El(e){var t=ul();if("function"===typeof e){var n=e;if(e=n(),Go){ye(!0);try{n()}finally{ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:e},t}function Cl(e,t,n,r){return e.baseState=n,ml(e,Vo,"function"===typeof r?r:hl)}function zl(e,t,n,r,a){if(pi(e))throw Error(l(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,_l(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _l(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=R.T,l={};R.T=l;try{var i=n(a,r),s=R.S;null!==s&&s(l,i),jl(e,t,i)}catch(u){Pl(e,t,u)}finally{null!==o&&null!==l.types&&(o.types=l.types),R.T=o}}else try{jl(e,t,o=n(a,r))}catch(c){Pl(e,t,c)}}function jl(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Tl(e,t,n)},function(n){return Pl(e,t,n)}):Tl(e,t,n)}function Tl(e,t,n){t.status="fulfilled",t.value=n,Nl(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,_l(e,n)))}function Pl(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Nl(t),t=t.next}while(t!==r)}e.action=null}function Nl(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ol(e,t){return t}function Ll(e,t){if(fa){var n=gu.formState;if(null!==n){e:{var r=Bo;if(fa){if(da){t:{for(var a=da,o=ha;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Rd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){da=Rd(a.nextSibling),r="F!"===a.data;break e}}ma(r)}r=!1}r&&(t=n[0])}}return(n=ul()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ol,lastRenderedState:t},n.queue=r,n=ci.bind(null,Bo,r),r.dispatch=n,r=El(!1),o=fi.bind(null,Bo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ul()).queue=a,n=zl.bind(null,Bo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rl(e){return $l(cl(),Vo,e)}function $l(e,t,n){if(t=ml(e,t,Ol)[0],e=gl(hl)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=dl(t)}catch(er){if(er===Ja)throw eo;throw er}else r=t;var a=(t=cl()).queue,o=a.dispatch;return n!==t.memoizedState&&(Bo.flags|=2048,Ml(9,{destroy:void 0},Al.bind(null,a,n),null)),[r,o,e]}function Al(e,t){e.action=t}function Dl(e){var t=cl(),n=Vo;if(null!==n)return $l(t,n,e);cl(),t=t.memoizedState;var r=(n=cl()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ml(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Bo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fl(){return cl().memoizedState}function Il(e,t,n,r){var a=ul();Bo.flags|=e,a.memoizedState=Ml(1|t,{destroy:void 0},n,void 0===r?null:r)}function Ul(e,t,n,r){var a=cl();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==Vo&&null!==r&&tl(r,Vo.memoizedState.deps)?a.memoizedState=Ml(t,o,n,r):(Bo.flags|=e,a.memoizedState=Ml(1|t,o,n,r))}function Hl(e,t){Il(8390656,8,e,t)}function Wl(e,t){Ul(2048,8,e,t)}function Bl(e){var t=cl().memoizedState;return function(e){Bo.flags|=4;var t=Bo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&hu))throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Vl(e,t){return Ul(4,2,e,t)}function ql(e,t){return Ul(4,4,e,t)}function Ql(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Kl(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ul(4,4,Ql.bind(null,t,e),n)}function Gl(){}function Yl(e,t){var n=cl();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xl(e,t){var n=cl();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&tl(t,r[1]))return r[0];if(r=e(),Go){ye(!0);try{e()}finally{ye(!1)}}return n.memoizedState=[r,t],r}function Jl(e,t,n){return void 0===n||0!==(1073741824&Wo)&&0===(261930&vu)?e.memoizedState=t:(e.memoizedState=n,e=Ku(),Bo.lanes|=e,Cu|=e,n)}function Zl(e,t,n,r){return Jn(n,t)?n:null!==To.current?(e=Jl(e,n,r),Jn(e,t)||(Ri=!0),e):0===(42&Wo)||0!==(1073741824&Wo)&&0===(261930&vu)?(Ri=!0,e.memoizedState=n):(e=Ku(),Bo.lanes|=e,Cu|=e,t)}function ei(e,t,n,r,a){var o=$.p;$.p=0!==o&&8>o?o:8;var l=R.T,i={};R.T=i,fi(e,!1,t,n);try{var s=a(),u=R.S;if(null!==u&&u(i,s),null!==s&&"object"===typeof s&&"function"===typeof s.then){var c=function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r);di(e,t,c,Qu())}else di(e,t,r,Qu())}catch(d){di(e,t,{then:function(){},status:"rejected",reason:d},Qu())}finally{$.p=o,null!==l&&null!==i.types&&(l.types=i.types),R.T=l}}function ti(){}function ni(e,t,n,r){if(5!==e.tag)throw Error(l(476));var a=ri(e).queue;ei(e,a,t,A,null===n?ti:function(){return ai(e),n(r)})}function ri(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:A},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function ai(e){var t=ri(e);null===t.next&&(t=e.alternate.memoizedState),di(e,t.next.queue,{},Qu())}function oi(){return La(ff)}function li(){return cl().memoizedState}function ii(){return cl().memoizedState}function si(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Qu(),r=wo(t,e=xo(n),n);return null!==r&&(Gu(r,t,n),ko(r,t,n)),t={cache:Ia()},void(e.payload=t)}t=t.return}}function ui(e,t,n){var r=Qu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pi(e)?hi(t,n):null!==(n=Lr(e,t,n,r))&&(Gu(n,e,r),gi(n,t,r))}function ci(e,t,n){di(e,t,n,Qu())}function di(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pi(e))hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,Jn(i,l))return Or(e,t,a,0),null===gu&&Nr(),!1}catch(s){}if(null!==(n=Lr(e,t,a,r)))return Gu(n,e,r),gi(n,t,r),!0}return!1}function fi(e,t,n,r){if(r={lane:2,revertLane:Wc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(l(479))}else null!==(t=Lr(e,n,r,2))&&Gu(t,e,2)}function pi(e){var t=e.alternate;return e===Bo||null!==t&&t===Bo}function hi(e,t){Ko=Qo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gi(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var mi={readContext:La,use:fl,useCallback:el,useContext:el,useEffect:el,useImperativeHandle:el,useLayoutEffect:el,useInsertionEffect:el,useMemo:el,useReducer:el,useRef:el,useState:el,useDebugValue:el,useDeferredValue:el,useTransition:el,useSyncExternalStore:el,useId:el,useHostTransitionStatus:el,useFormState:el,useActionState:el,useOptimistic:el,useMemoCache:el,useCacheRefresh:el};mi.useEffectEvent=el;var vi={readContext:La,use:fl,useCallback:function(e,t){return ul().memoizedState=[e,void 0===t?null:t],e},useContext:La,useEffect:Hl,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Il(4194308,4,Ql.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){Il(4,2,e,t)},useMemo:function(e,t){var n=ul();t=void 0===t?null:t;var r=e();if(Go){ye(!0);try{e()}finally{ye(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ul();if(void 0!==n){var a=n(t);if(Go){ye(!0);try{n(t)}finally{ye(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ui.bind(null,Bo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ul().memoizedState=e},useState:function(e){var t=(e=El(e)).queue,n=ci.bind(null,Bo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gl,useDeferredValue:function(e,t){return Jl(ul(),e,t)},useTransition:function(){var e=El(!1);return e=ei.bind(null,Bo,e.queue,!0,!1),ul().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Bo,a=ul();if(fa){if(void 0===n)throw Error(l(407));n=n()}else{if(n=t(),null===gu)throw Error(l(349));0!==(127&vu)||yl(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Hl(wl.bind(null,r,o,e),[e]),r.flags|=2048,Ml(9,{destroy:void 0},xl.bind(null,r,o,n,t),null),n},useId:function(){var e=ul(),t=gu.identifierPrefix;if(fa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-xe(ra)-1)).toString(32)+n),0<(n=Yo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zo++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:oi,useFormState:Ll,useActionState:Ll,useOptimistic:function(e){var t=ul();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fi.bind(null,Bo,!0,n),n.dispatch=t,[e,t]},useMemoCache:pl,useCacheRefresh:function(){return ul().memoizedState=si.bind(null,Bo)},useEffectEvent:function(e){var t=ul(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&hu))throw Error(l(440));return n.impl.apply(void 0,arguments)}}},bi={readContext:La,use:fl,useCallback:Yl,useContext:La,useEffect:Wl,useImperativeHandle:Kl,useInsertionEffect:Vl,useLayoutEffect:ql,useMemo:Xl,useReducer:gl,useRef:Fl,useState:function(){return gl(hl)},useDebugValue:Gl,useDeferredValue:function(e,t){return Zl(cl(),Vo.memoizedState,e,t)},useTransition:function(){var e=gl(hl)[0],t=cl().memoizedState;return["boolean"===typeof e?e:dl(e),t]},useSyncExternalStore:bl,useId:li,useHostTransitionStatus:oi,useFormState:Rl,useActionState:Rl,useOptimistic:function(e,t){return Cl(cl(),0,e,t)},useMemoCache:pl,useCacheRefresh:ii};bi.useEffectEvent=Bl;var yi={readContext:La,use:fl,useCallback:Yl,useContext:La,useEffect:Wl,useImperativeHandle:Kl,useInsertionEffect:Vl,useLayoutEffect:ql,useMemo:Xl,useReducer:vl,useRef:Fl,useState:function(){return vl(hl)},useDebugValue:Gl,useDeferredValue:function(e,t){var n=cl();return null===Vo?Jl(n,e,t):Zl(n,Vo.memoizedState,e,t)},useTransition:function(){var e=vl(hl)[0],t=cl().memoizedState;return["boolean"===typeof e?e:dl(e),t]},useSyncExternalStore:bl,useId:li,useHostTransitionStatus:oi,useFormState:Dl,useActionState:Dl,useOptimistic:function(e,t){var n=cl();return null!==Vo?Cl(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pl,useCacheRefresh:ii};function xi(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}yi.useEffectEvent=Bl;var wi={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qu(),a=xo(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Gu(t,e,r),ko(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qu(),a=xo(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Gu(t,e,r),ko(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qu(),r=xo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=wo(e,r,n))&&(Gu(t,e,n),ko(t,e,n))}};function ki(e,t,n,r,a,o,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!Zn(n,r)||!Zn(a,o))}function Si(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Ei(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Ci(e){_r(e)}function zi(e){console.error(e)}function _i(e){_r(e)}function ji(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ti(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Pi(e,t,n){return(n=xo(n)).tag=3,n.payload={element:null},n.callback=function(){ji(e,t)},n}function Ni(e){return(e=xo(e)).tag=3,e}function Oi(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Ti(t,n,r)}}var l=n.stateNode;null!==l&&"function"===typeof l.componentDidCatch&&(e.callback=function(){Ti(t,n,r),"function"!==typeof a&&(null===Du?Du=new Set([this]):Du.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Li=Error(l(461)),Ri=!1;function $i(e,t,n,r){t.child=null===e?mo(t,null,n,r):go(t,e.child,n,r)}function Ai(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var l={};for(var i in r)"ref"!==i&&(l[i]=r[i])}else l=r;return Oa(t),r=nl(e,t,n,l,o,a),i=ll(),null===e||Ri?(fa&&i&&ia(t),t.flags|=1,$i(e,t,r,a),t.child):(il(e,t,a),os(e,t,a))}function Di(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ir(o)||void 0!==o.defaultProps||null!==n.compare?((e=Wr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Mi(e,t,o,r,a))}if(o=e.child,!ls(e,a)){var l=o.memoizedProps;if((n=null!==(n=n.compare)?n:Zn)(l,r)&&e.ref===t.ref)return os(e,t,a)}return t.flags|=1,(e=Ur(o,r)).ref=t.ref,e.return=t,t.child=e}function Mi(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref){if(Ri=!1,t.pendingProps=r=o,!ls(e,a))return t.lanes=e.lanes,os(e,t,a);0!==(131072&e.flags)&&(Ri=!0)}}return Vi(e,t,n,r,a)}function Fi(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return Ui(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Ui(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ya(0,null!==o?o.cachePool:null),null!==o?No(t,o):Oo(),Mo(t)}else null!==o?(Ya(0,o.cachePool),No(t,o),Fo(),t.memoizedState=null):(null!==e&&Ya(0,null),Oo(),Fo());return $i(e,t,a,n),t.child}function Ii(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ui(e,t,n,r,a){var o=Ga();return o=null===o?null:{parent:Fa._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Ya(0,null),Oo(),Mo(t),null!==e&&Pa(e,t,r,!0),t.childLanes=a,null}function Hi(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Wi(e,t,n){return go(t,e.child,null,n),(e=Hi(t,t.pendingProps)).flags|=2,Io(t),t.memoizedState=null,e}function Bi(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(l(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Vi(e,t,n,r,a){return Oa(t),n=nl(e,t,n,r,void 0,a),r=ll(),null===e||Ri?(fa&&r&&ia(t),t.flags|=1,$i(e,t,n,a),t.child):(il(e,t,a),os(e,t,a))}function qi(e,t,n,r,a,o){return Oa(t),t.updateQueue=null,n=al(t,r,n,a),rl(e),r=ll(),null===e||Ri?(fa&&r&&ia(t),t.flags|=1,$i(e,t,n,o),t.child):(il(e,t,o),os(e,t,o))}function Qi(e,t,n,r,a){if(Oa(t),null===t.stateNode){var o=Dr,l=n.contextType;"object"===typeof l&&null!==l&&(o=La(l)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=wi,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},bo(t),l=n.contextType,o.context="object"===typeof l&&null!==l?La(l):Dr,o.state=t.memoizedState,"function"===typeof(l=n.getDerivedStateFromProps)&&(xi(t,n,l,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(l=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),l!==o.state&&wi.enqueueReplaceState(o,o.state,null),zo(t,r,o,a),Co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var i=t.memoizedProps,s=Ei(n,i);o.props=s;var u=o.context,c=n.contextType;l=Dr,"object"===typeof c&&null!==c&&(l=La(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,i=t.pendingProps!==i,c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i||u!==l)&&Si(t,o,r,l),vo=!1;var f=t.memoizedState;o.state=f,zo(t,r,o,a),Co(),u=t.memoizedState,i||f!==u||vo?("function"===typeof d&&(xi(t,n,d,r),u=t.memoizedState),(s=vo||ki(t,n,s,r,f,u,l))?(c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yo(e,t),c=Ei(n,l=t.memoizedProps),o.props=c,d=t.pendingProps,f=o.context,u=n.contextType,s=Dr,"object"===typeof u&&null!==u&&(s=La(u)),(u="function"===typeof(i=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&Si(t,o,r,s),vo=!1,f=t.memoizedState,o.state=f,zo(t,r,o,a),Co();var p=t.memoizedState;l!==d||f!==p||vo||null!==e&&null!==e.dependencies&&Na(e.dependencies)?("function"===typeof i&&(xi(t,n,i,r),p=t.memoizedState),(c=vo||ki(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&Na(e.dependencies))?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Bi(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=go(t,e.child,null,a),t.child=go(t,null,n,a)):$i(e,t,n,a),t.memoizedState=o.state,e=t.child):e=os(e,t,a),e}function Ki(e,t,n,r){return xa(),t.flags|=256,$i(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yi(e){return{baseLanes:e,cachePool:Xa()}}function Xi(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=ju),e}function Ji(e,t,n){var r,a=t.pendingProps,o=!1,i=0!==(128&t.flags);if((r=i)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Uo.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(fa){if(o?Ao(t):Fo(),(e=da)?null!==(e=null!==(e=Nd(e,ha))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ma(t);return Ld(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,o?(Fo(),s=es({mode:"hidden",children:s},o=t.mode),a=Br(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=Yi(n),a.childLanes=Xi(e,r,n),t.memoizedState=Gi,Ii(null,a)):(Ao(t),Zi(t,s))}var u=e.memoizedState;if(null!==u&&null!==(s=u.dehydrated)){if(i)256&t.flags?(Ao(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Fo(),t.child=e.child,t.flags|=128,t=null):(Fo(),s=a.fallback,o=t.mode,a=es({mode:"visible",children:a.children},o),(s=Br(s,o,n,null)).flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,go(t,e.child,null,n),(a=t.child).memoizedState=Yi(n),a.childLanes=Xi(e,r,n),t.memoizedState=Gi,t=Ii(null,a));else if(Ao(t),Ld(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(l(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=ts(e,t,n)}else if(Ri||Pa(e,t,n,!1),r=0!==(n&e.childLanes),Ri||r){if(null!==(r=gu)&&(0!==(a=$e(r,n))&&a!==u.retryLane))throw u.retryLane=a,Rr(e,a),Gu(r,e,a),Li;Od(s)||ic(),t=ts(e,t,n)}else Od(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,da=Rd(s.nextSibling),ca=t,fa=!0,pa=null,ha=!1,null!==e&&ua(t,e),(t=Zi(t,a.children)).flags|=4096);return t}return o?(Fo(),s=a.fallback,o=t.mode,c=(u=e.child).sibling,(a=Ur(u,{mode:"hidden",children:a.children})).subtreeFlags=65011712&u.subtreeFlags,null!==c?s=Ur(c,s):(s=Br(s,o,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,Ii(null,a),a=t.child,null===(s=e.child.memoizedState)?s=Yi(n):(null!==(o=s.cachePool)?(u=Fa._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=Xa(),s={baseLanes:s.baseLanes|n,cachePool:o}),a.memoizedState=s,a.childLanes=Xi(e,r,n),t.memoizedState=Gi,Ii(e.child,a)):(Ao(t),e=(n=e.child).sibling,(n=Ur(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Zi(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Fr(22,e,null,t)).lanes=0,e}function ts(e,t,n){return go(t,e.child,null,n),(e=Zi(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ja(e.return,t,n)}function rs(e,t,n,r,a,o){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a,l.treeForkCount=o)}function as(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var l=Uo.current,i=0!==(2&l);if(i?(l=1&l|2,t.flags|=128):l&=1,U(Uo,l),$i(e,t,r,n),r=fa?Zr:0,!i&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Ho(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rs(t,!1,a,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ho(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rs(t,!0,n,null,o,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Cu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Pa(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(l(153));if(null!==t.child){for(n=Ur(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ur(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ls(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Na(e))}function is(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ri=!0;else{if(!ls(e,n)&&0===(128&t.flags))return Ri=!1,function(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),za(0,Fa,e.memoizedState.cache),xa();break;case 27:case 5:Y(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:za(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Do(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ao(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Ji(e,t,n):(Ao(t),null!==(e=os(e,t,n))?e.sibling:null);Ao(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Pa(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return as(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(Uo,Uo.current),r)break;return null;case 22:return t.lanes=0,Fi(e,t,n,t.pendingProps);case 24:za(0,Fa,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Ri=0!==(131072&e.flags)}else Ri=!1,fa&&0!==(1048576&t.flags)&&la(t,Zr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ao(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Ai(null,t,e,r,n);break e}if(a===C){t.tag=14,t=Di(null,t,e,r,n);break e}}throw t=O(e)||e,Error(l(306,t,""))}Ir(e)?(r=Ei(e,r),t.tag=1,t=Qi(null,t,e,r,n)):(t.tag=0,t=Vi(null,t,e,r,n))}return t;case 0:return Vi(e,t,t.type,t.pendingProps,n);case 1:return Qi(e,t,r=t.type,a=Ei(r,t.pendingProps),n);case 3:e:{if(K(t,t.stateNode.containerInfo),null===e)throw Error(l(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,yo(e,t),zo(t,r,null,n);var i=t.memoizedState;if(r=i.cache,za(0,Fa,r),r!==o.cache&&Ta(t,[Fa],n,!0),Co(),r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ki(e,t,r,n);break e}if(r!==a){ka(a=Gr(Error(l(424)),t)),t=Ki(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=Rd(e.firstChild),ca=t,fa=!0,pa=null,ha=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===a){t=os(e,t,n);break e}$i(e,t,r,n)}t=t.child}return t;case 26:return Bi(e,t),null===e?(n=qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:fa||(n=t.type,e=t.pendingProps,(r=vd(q.current).createElement(n))[Ue]=t,r[He]=e,pd(r,n,e),et(r),t.stateNode=r):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&fa&&(r=t.stateNode=Md(t.type,t.pendingProps,q.current),ca=t,ha=!0,a=da,_d(t.type)?($d=a,da=Rd(r.firstChild)):da=a),$i(e,t,t.pendingProps.children,n),Bi(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&fa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ke])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Rd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ha))?(t.stateNode=r,ca=t,da=Rd(r.firstChild),ha=!1,a=!0):a=!1),a||ma(t)),Y(t),a=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,r=o.children,xd(a,o)?r=null:null!==i&&xd(a,i)&&(t.flags|=32),null!==t.memoizedState&&(a=nl(e,t,ol,null,null,n),ff._currentValue=a),Bi(e,t),$i(e,t,r,n),t.child;case 6:return null===e&&fa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}(n,t.pendingProps,ha))?(t.stateNode=n,ca=t,da=null,e=!0):e=!1),e||ma(t)),null;case 13:return Ji(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=go(t,null,r,n):$i(e,t,r,n),t.child;case 11:return Ai(e,t,t.type,t.pendingProps,n);case 7:return $i(e,t,t.pendingProps,n),t.child;case 8:case 12:return $i(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,za(0,t.type,r.value),$i(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Oa(t),r=r(a=La(a)),t.flags|=1,$i(e,t,r,n),t.child;case 14:return Di(e,t,t.type,t.pendingProps,n);case 15:return Mi(e,t,t.type,t.pendingProps,n);case 19:return as(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(fa){if("hidden"===r.mode)return e=Hi(t,r),t.lanes=536870912,Ii(null,e);if(Do(t),(e=da)?null!==(e=null!==(e=Nd(e,ha))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ma(t);return t.lanes=536870912,null}return Hi(t,r)}var o=e.memoizedState;if(null!==o){var i=o.dehydrated;if(Do(t),a)if(256&t.flags)t.flags&=-257,t=Wi(e,t,n);else{if(null===t.memoizedState)throw Error(l(558));t.child=e.child,t.flags|=128,t=null}else if(Ri||Pa(e,t,n,!1),a=0!==(n&e.childLanes),Ri||a){if(null!==(r=gu)&&0!==(i=$e(r,n))&&i!==o.retryLane)throw o.retryLane=i,Rr(e,i),Gu(r,e,i),Li;ic(),t=Wi(e,t,n)}else e=o.treeContext,da=Rd(i.nextSibling),ca=t,fa=!0,pa=null,ha=!1,null!==e&&ua(t,e),(t=Hi(t,r)).flags|=4096;return t}return(e=Ur(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Fi(e,t,n,t.pendingProps);case 24:return Oa(t),r=La(Fa),null===e?(null===(a=Ga())&&(a=gu,o=Ia(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},bo(t),za(0,Fa,a)):(0!==(e.lanes&n)&&(yo(e,t),zo(t,null,null,n),Co()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),za(0,Fa,r)):(r=o.cache,za(0,Fa,r),r!==a.cache&&Ta(t,[Fa],n,!0))),$i(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function ss(e){e.flags|=4}function us(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!ac())throw oo=to,Za;e.flags|=8192}}else e.flags&=-16777217}function cs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!of(t)){if(!ac())throw oo=to,Za;e.flags|=8192}}function ds(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Pe():536870912,e.lanes|=t,Tu|=t)}function fs(e,t){if(!fa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hs(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ps(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(Fa),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ya(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,wa())),ps(t),null;case 26:var a=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(ps(t),cs(t,o)):(ps(t),us(t,a,0,0,n))):o?o!==e.memoizedState?(ss(t),ps(t),cs(t,o)):(ps(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),ps(t),us(t,a,0,0,n)),null;case 27:if(X(t),n=q.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(l(166));return ps(t),null}e=B.current,ya(t)?va(t):(e=Md(a,r,n),t.stateNode=e,ss(t))}return ps(t),null;case 5:if(X(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(l(166));return ps(t),null}if(o=B.current,ya(t))va(t);else{var i=vd(q.current);switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(o=i.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?i.createElement(a,{is:r.is}):i.createElement(a)}}o[Ue]=t,o[He]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)o.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=o;e:switch(pd(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return ps(t),us(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(l(166));if(e=q.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ca))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||cd(e.nodeValue,n)))||ma(t,!0)}else(e=vd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return ps(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ya(t),null!==n){if(null===e){if(!r)throw Error(l(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(l(557));e[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),e=!1}else n=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Io(t),t):(Io(t),null);if(0!==(128&t.flags))throw Error(l(558))}return ps(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ya(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317));a[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),a=!1}else a=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Io(t),t):(Io(t),null)}return Io(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ds(t,t.updateQueue),ps(t),null);case 4:return G(),null===e&&ed(t.stateNode.containerInfo),ps(t),null;case 10:return _a(t.type),ps(t),null;case 19:if(I(Uo),null===(r=t.memoizedState))return ps(t),null;if(a=0!==(128&t.flags),null===(o=r.rendering))if(a)fs(r,!1);else{if(0!==Eu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Ho(e))){for(t.flags|=128,fs(r,!1),e=o.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Hr(n,e),n=n.sibling;return U(Uo,1&Uo.current|2),fa&&oa(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>$u&&(t.flags|=128,a=!0,fs(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Ho(o))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),fs(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!fa)return ps(t),null}else 2*se()-r.renderingStartTime>$u&&536870912!==n&&(t.flags|=128,a=!0,fs(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Uo.current,U(Uo,a?1&n|2:1&n),fa&&oa(t,r.treeForkCount),e):(ps(t),null);case 22:case 23:return Io(t),Lo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ps(t),6&t.subtreeFlags&&(t.flags|=8192)):ps(t),null!==(n=t.updateQueue)&&ds(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&I(Ka),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(Fa),ps(t),null;case 25:case 30:return null}throw Error(l(156,t.tag))}function gs(e,t){switch(sa(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return _a(Fa),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Io(t),null===t.alternate)throw Error(l(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Io(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(Uo),null;case 4:return G(),null;case 10:return _a(t.type),null;case 22:case 23:return Io(t),Lo(),null!==e&&I(Ka),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return _a(Fa),null;default:return null}}function ms(e,t){switch(sa(t),t.tag){case 3:_a(Fa),G();break;case 26:case 27:case 5:X(t);break;case 4:G();break;case 31:null!==t.memoizedState&&Io(t);break;case 13:Io(t);break;case 19:I(Uo);break;case 10:_a(t.type);break;case 22:case 23:Io(t),Lo(),null!==e&&I(Ka);break;case 24:_a(Fa)}}function vs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,l=n.inst;r=o(),l.destroy=r}n=n.next}while(n!==a)}}catch(i){Ec(t,t.return,i)}}function bs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var l=r.inst,i=l.destroy;if(void 0!==i){l.destroy=void 0,a=t;var s=n,u=i;try{u()}catch(c){Ec(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){Ec(t,t.return,c)}}function ys(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{jo(t,n)}catch(r){Ec(e,e.return,r)}}}function xs(e,t,n){n.props=Ei(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ec(e,t,r)}}function ws(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){Ec(e,t,a)}}function ks(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){Ec(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){Ec(e,t,o)}else n.current=null}function Ss(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){Ec(e,e.return,a)}}function Es(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,i=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||dd(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":o=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(l(137,t));break;default:h!==f&&dd(e,t,p,h,r,f)}}return void bt(e,i,s,u,c,d,o,a);case"select":for(o in h=i=s=p=null,n)if(u=n[o],n.hasOwnProperty(o)&&null!=u)switch(o){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(o)||dd(e,t,o,null,r,u)}for(a in r)if(o=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=o||null!=u))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:o!==u&&dd(e,t,a,o,r,u)}return t=s,n=i,r=h,void(null!=p?wt(e,!!n,p,!1):!!r!==!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:dd(e,t,s,null,r,a)}for(i in r)if(a=r[i],o=n[i],r.hasOwnProperty(i)&&(null!=a||null!=o))switch(i){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(l(91));break;default:a!==o&&dd(e,t,i,a,r,o)}return void kt(e,p,h);case"option":for(var g in n)if(p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else dd(e,t,g,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else dd(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&dd(e,t,m,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(l(137,t));break;default:dd(e,t,c,p,r,h)}return;default:if(jt(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&fd(e,t,v,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||fd(e,t,d,p,r,h);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!r.hasOwnProperty(b)&&dd(e,t,b,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||dd(e,t,f,p,r,h)}(r,e.type,n,t),r[He]=t}catch(a){Ec(e,e.return,a)}}function Cs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&_d(e.type)||4===e.tag}function zs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Cs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&_d(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _s(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ot));else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(_s(e,t,n),e=e.sibling;null!==e;)_s(e,t,n),e=e.sibling}function js(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(js(e,t,n),e=e.sibling;null!==e;)js(e,t,n),e=e.sibling}function Ts(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);pd(t,r,n),t[Ue]=e,t[He]=n}catch(o){Ec(e,e.return,o)}}var Ps=!1,Ns=!1,Os=!1,Ls="function"===typeof WeakSet?WeakSet:Set,Rs=null;function $s(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gs(e,n),4&r&&vs(5,n);break;case 1:if(Gs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){Ec(n,n.return,l)}else{var a=Ei(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Ec(n,n.return,i)}}64&r&&ys(n),512&r&&ws(n,n.return);break;case 3:if(Gs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{jo(e,t)}catch(l){Ec(n,n.return,l)}}break;case 27:null===t&&4&r&&Ts(n);case 26:case 5:Gs(e,n),null===t&&4&r&&Ss(n),512&r&&ws(n,n.return);break;case 12:Gs(e,n);break;case 31:Gs(e,n),4&r&&Us(e,n);break;case 13:Gs(e,n),4&r&&Hs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=jc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ps)){t=null!==t&&null!==t.memoizedState||Ns,a=Ps;var o=Ns;Ps=r,(Ns=t)&&!o?Xs(e,n,0!==(8772&n.subtreeFlags)):Gs(e,n),Ps=a,Ns=o}break;case 30:break;default:Gs(e,n)}}function As(e){var t=e.alternate;null!==t&&(e.alternate=null,As(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ge(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ds=null,Ms=!1;function Fs(e,t,n){for(n=n.child;null!==n;)Is(e,t,n),n=n.sibling}function Is(e,t,n){if(be&&"function"===typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(ve,n)}catch(o){}switch(n.tag){case 26:Ns||ks(n,t),Fs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Ns||ks(n,t);var r=Ds,a=Ms;_d(n.type)&&(Ds=n.stateNode,Ms=!1),Fs(e,t,n),Fd(n.stateNode),Ds=r,Ms=a;break;case 5:Ns||ks(n,t);case 6:if(r=Ds,a=Ms,Ds=null,Fs(e,t,n),Ms=a,null!==(Ds=r))if(Ms)try{(9===Ds.nodeType?Ds.body:"HTML"===Ds.nodeName?Ds.ownerDocument.body:Ds).removeChild(n.stateNode)}catch(l){Ec(n,t,l)}else try{Ds.removeChild(n.stateNode)}catch(l){Ec(n,t,l)}break;case 18:null!==Ds&&(Ms?(jd(9===(e=Ds).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),qf(e)):jd(Ds,n.stateNode));break;case 4:r=Ds,a=Ms,Ds=n.stateNode.containerInfo,Ms=!0,Fs(e,t,n),Ds=r,Ms=a;break;case 0:case 11:case 14:case 15:bs(2,n,t),Ns||bs(4,n,t),Fs(e,t,n);break;case 1:Ns||(ks(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&xs(n,t,r)),Fs(e,t,n);break;case 21:Fs(e,t,n);break;case 22:Ns=(r=Ns)||null!==n.memoizedState,Fs(e,t,n),Ns=r;break;default:Fs(e,t,n)}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{qf(e)}catch(n){Ec(t,t.return,n)}}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{qf(e)}catch(n){Ec(t,t.return,n)}}function Ws(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ls),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ls),t;default:throw Error(l(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Tc.bind(null,e,t);t.then(r,r)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 27:if(_d(s.type)){Ds=s.stateNode,Ms=!1;break e}break;case 5:Ds=s.stateNode,Ms=!1;break e;case 3:case 4:Ds=s.stateNode.containerInfo,Ms=!0;break e}s=s.return}if(null===Ds)throw Error(l(160));Is(o,i,a),Ds=null,Ms=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)qs(t,e),t=t.sibling}var Vs=null;function qs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),Qs(e),4&r&&(bs(3,e,e.return),vs(3,e),bs(5,e,e.return));break;case 1:Bs(t,e),Qs(e),512&r&&(Ns||null===n||ks(n,n.return)),64&r&&Ps&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Vs;if(Bs(t,e),Qs(e),512&r&&(Ns||null===n||ks(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ke]||o[Ue]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),pd(o,r,n),o[Ue]=e,et(o),r=o;break e;case"link":var i=rf("link","href",a).get(r+(n.href||""));if(i)for(var s=0;s<i.length;s++)if((o=i[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(s,1);break t}pd(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(i=rf("meta","content",a).get(r+(n.content||"")))for(s=0;s<i.length;s++)if((o=i[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(s,1);break t}pd(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(l(468,r))}o[Ue]=e,et(o),r=o}e.stateNode=r}else af(a,e.type,e.stateNode);else e.stateNode=Jd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?af(a,e.type,e.stateNode):Jd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Es(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),Qs(e),512&r&&(Ns||null===n||ks(n,n.return)),null!==n&&4&r&&Es(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),Qs(e),512&r&&(Ns||null===n||ks(n,n.return)),32&e.flags){a=e.stateNode;try{Et(a,"")}catch(g){Ec(e,e.return,g)}}4&r&&null!=e.stateNode&&Es(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Os=!0);break;case 6:if(Bs(t,e),Qs(e),4&r){if(null===e.stateNode)throw Error(l(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(g){Ec(e,e.return,g)}}break;case 3:if(nf=null,a=Vs,Vs=Hd(t.containerInfo),Bs(t,e),Vs=a,Qs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{qf(t.containerInfo)}catch(g){Ec(e,e.return,g)}Os&&(Os=!1,Ks(e));break;case 4:r=Vs,Vs=Hd(e.stateNode.containerInfo),Bs(t,e),Qs(e),Vs=r;break;case 12:default:Bs(t,e),Qs(e);break;case 31:case 19:Bs(t,e),Qs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 13:Bs(t,e),Qs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Lu=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 22:a=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=Ps,d=Ns;if(Ps=c||a,Ns=d||u,Bs(t,e),Ns=d,Ps=c,Qs(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||u||Ps||Ns||Ys(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(o=u.stateNode,a)"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{s=u.stateNode;var f=u.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(g){Ec(u,u.return,g)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(g){Ec(u,u.return,g)}}}else if(18===t.tag){if(null===n){u=t;try{var h=u.stateNode;a?Td(h,!0):Td(u.stateNode,!1)}catch(g){Ec(u,u.return,g)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ws(e,n))));case 30:case 21:}}function Qs(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Cs(r)){n=r;break}r=r.return}if(null==n)throw Error(l(160));switch(n.tag){case 27:var a=n.stateNode;js(e,zs(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(Et(o,""),n.flags&=-33),js(e,zs(e),o);break;case 3:case 4:var i=n.stateNode.containerInfo;_s(e,zs(e),i);break;default:throw Error(l(161))}}catch(s){Ec(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ks(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ks(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Gs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)$s(e,t.alternate,t),t=t.sibling}function Ys(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bs(4,t,t.return),Ys(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xs(t,t.return,n),Ys(t);break;case 27:Fd(t.stateNode);case 26:case 5:ks(t,t.return),Ys(t);break;case 22:null===t.memoizedState&&Ys(t);break;default:Ys(t)}e=e.sibling}}function Xs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,l=o.flags;switch(o.tag){case 0:case 11:case 15:Xs(a,o,n),vs(4,o);break;case 1:if(Xs(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){Ec(r,r.return,u)}if(null!==(a=(r=o).updateQueue)){var i=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)_o(s[a],i)}catch(u){Ec(r,r.return,u)}}n&&64&l&&ys(o),ws(o,o.return);break;case 27:Ts(o);case 26:case 5:Xs(a,o,n),n&&null===r&&4&l&&Ss(o),ws(o,o.return);break;case 12:Xs(a,o,n);break;case 31:Xs(a,o,n),n&&4&l&&Us(a,o);break;case 13:Xs(a,o,n),n&&4&l&&Hs(a,o);break;case 22:null===o.memoizedState&&Xs(a,o,n),ws(o,o.return);break;case 30:break;default:Xs(a,o,n)}t=t.sibling}}function Js(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ua(n))}function Zs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e))}function eu(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tu(e,t,n,r),t=t.sibling}function tu(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:eu(e,t,n,r),2048&a&&vs(9,t);break;case 1:case 31:case 13:default:eu(e,t,n,r);break;case 3:eu(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e)));break;case 12:if(2048&a){eu(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,l=o.id,i=o.onPostCommit;"function"===typeof i&&i(l,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Ec(t,t.return,s)}}else eu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,l=t.alternate,null!==t.memoizedState?2&o._visibility?eu(e,t,n,r):ru(e,t):2&o._visibility?eu(e,t,n,r):(o._visibility|=2,nu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Js(l,t);break;case 24:eu(e,t,n,r),2048&a&&Zs(t.alternate,t)}}function nu(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,l=t,i=n,s=r,u=l.flags;switch(l.tag){case 0:case 11:case 15:nu(o,l,i,s,a),vs(8,l);break;case 23:break;case 22:var c=l.stateNode;null!==l.memoizedState?2&c._visibility?nu(o,l,i,s,a):ru(o,l):(c._visibility|=2,nu(o,l,i,s,a)),a&&2048&u&&Js(l.alternate,l);break;case 24:nu(o,l,i,s,a),a&&2048&u&&Zs(l.alternate,l);break;default:nu(o,l,i,s,a)}t=t.sibling}}function ru(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:ru(n,r),2048&a&&Js(r.alternate,r);break;case 24:ru(n,r),2048&a&&Zs(r.alternate,r);break;default:ru(n,r)}t=t.sibling}}var au=8192;function ou(e,t,n){if(e.subtreeFlags&au)for(e=e.child;null!==e;)lu(e,t,n),e=e.sibling}function lu(e,t,n){switch(e.tag){case 26:ou(e,t,n),e.flags&au&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Qd(r.href),o=t.querySelector(Kd(a));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=sf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o);o=t.ownerDocument||t,r=Gd(r),(a=Id.get(a))&&ef(r,a),et(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pd(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=sf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Vs,e.memoizedState,e.memoizedProps);break;case 5:default:ou(e,t,n);break;case 3:case 4:var r=Vs;Vs=Hd(e.stateNode.containerInfo),ou(e,t,n),Vs=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=au,au=16777216,ou(e,t,n),au=r):ou(e,t,n))}}function iu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function su(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,du(r,e)}iu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)uu(e),e=e.sibling}function uu(e){switch(e.tag){case 0:case 11:case 15:su(e),2048&e.flags&&bs(9,e,e.return);break;case 3:case 12:default:su(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,cu(e)):su(e)}}function cu(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,du(r,e)}iu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:bs(8,t,t.return),cu(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,cu(t));break;default:cu(t)}e=e.sibling}}function du(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:bs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Rs=r;else e:for(n=e;null!==Rs;){var a=(r=Rs).sibling,o=r.return;if(As(r),r===n){Rs=null;break e}if(null!==a){a.return=o,Rs=a;break e}Rs=o}}}var fu={getCacheForType:function(e){var t=La(Fa),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return La(Fa).controller.signal}},pu="function"===typeof WeakMap?WeakMap:Map,hu=0,gu=null,mu=null,vu=0,bu=0,yu=null,xu=!1,wu=!1,ku=!1,Su=0,Eu=0,Cu=0,zu=0,_u=0,ju=0,Tu=0,Pu=null,Nu=null,Ou=!1,Lu=0,Ru=0,$u=1/0,Au=null,Du=null,Mu=0,Fu=null,Iu=null,Uu=0,Hu=0,Wu=null,Bu=null,Vu=0,qu=null;function Qu(){return 0!==(2&hu)&&0!==vu?vu&-vu:null!==R.T?Wc():Me()}function Ku(){if(0===ju)if(0===(536870912&vu)||fa){var e=Ee;0===(3932160&(Ee<<=1))&&(Ee=262144),ju=e}else ju=536870912;return null!==(e=Ro.current)&&(e.flags|=32),ju}function Gu(e,t,n){(e!==gu||2!==bu&&9!==bu)&&null===e.cancelPendingCommit||(nc(e,0),Zu(e,vu,ju,!1)),Oe(e,n),0!==(2&hu)&&e===gu||(e===gu&&(0===(2&hu)&&(zu|=n),4===Eu&&Zu(e,vu,ju,!1)),Ac(e))}function Yu(e,t,n){if(0!==(6&hu))throw Error(l(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||je(e,t),a=r?function(e,t){var n=hu;hu|=2;var r=oc(),a=lc();gu!==e||vu!==t?(Au=null,$u=se()+500,nc(e,t)):wu=je(e,t);e:for(;;)try{if(0!==bu&&null!==mu){t=mu;var o=yu;t:switch(bu){case 1:bu=0,yu=null,pc(e,t,o,1);break;case 2:case 9:if(no(o)){bu=0,yu=null,fc(t);break}t=function(){2!==bu&&9!==bu||gu!==e||(bu=7),Ac(e)},o.then(t,t);break e;case 3:bu=7;break e;case 4:bu=5;break e;case 7:no(o)?(bu=0,yu=null,fc(t)):(bu=0,yu=null,pc(e,t,o,7));break;case 5:var i=null;switch(mu.tag){case 26:i=mu.memoizedState;case 5:case 27:var s=mu;if(i?of(i):s.stateNode.complete){bu=0,yu=null;var u=s.sibling;if(null!==u)mu=u;else{var c=s.return;null!==c?(mu=c,hc(c)):mu=null}break t}}bu=0,yu=null,pc(e,t,o,5);break;case 6:bu=0,yu=null,pc(e,t,o,6);break;case 8:tc(),Eu=6;break e;default:throw Error(l(462))}}cc();break}catch(d){rc(e,d)}return Ca=Ea=null,R.H=r,R.A=a,hu=n,null!==mu?0:(gu=null,vu=0,Nr(),Eu)}(e,t):sc(e,t,!0),o=r;;){if(0===a){wu&&!r&&Zu(e,t,0,!1);break}if(n=e.current.alternate,!o||Ju(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0;else i=0!==(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0;if(0!==i){t=i;e:{var s=e;a=Pu;var u=s.current.memoizedState.isDehydrated;if(u&&(nc(s,i).flags|=256),2!==(i=sc(s,i,!1))){if(ku&&!u){s.errorRecoveryDisabledLanes|=o,zu|=o,a=4;break e}o=Nu,Nu=a,null!==o&&(null===Nu?Nu=o:Nu.push.apply(Nu,o))}a=i}if(o=!1,2!==a)continue}}if(1===a){nc(e,0),Zu(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(l(345));case 4:if((4194048&t)!==t)break;case 6:Zu(r,t,ju,!xu);break e;case 2:Nu=null;break;case 3:case 5:break;default:throw Error(l(329))}if((62914560&t)===t&&10<(a=Lu+300-se())){if(Zu(r,t,ju,!xu),0!==_e(r,0,!0))break e;Uu=t,r.timeoutHandle=kd(Xu.bind(null,r,n,Nu,Au,Ou,t,ju,zu,Tu,xu,o,"Throttled",-0,0),a)}else Xu(r,n,Nu,Au,Ou,t,ju,zu,Tu,xu,o,null,-0,0)}break}a=sc(e,t,!1),o=!1}Ac(e)}function Xu(e,t,n,r,a,o,l,i,s,u,c,d,f,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){lu(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot});var h=(62914560&o)===o?Lu-se():(4194048&o)===o?Ru-se():0;if(h=function(e,t){return e.stylesheets&&0===e.count&&cf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===lf&&(lf=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,l=a.initiatorType,i=a.duration;if(o&&i&&hd(l)){for(l=0,i=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],u=s.startTime;if(u>i)break;var c=s.transferSize,d=s.initiatorType;c&&hd(d)&&(l+=c*((s=s.responseEnd)<i?1:(i-u)/(s-u)))}if(--r,t+=8*(o+l)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>lf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,h),null!==h)return Uu=o,e.cancelPendingCommit=h(mc.bind(null,e,t,o,n,r,a,l,i,s,c,d,null,f,p)),void Zu(e,o,l,!u)}mc(e,t,o,n,r,a,l,i,s)}function Ju(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Jn(o(),a))return!1}catch(l){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zu(e,t,n,r){t&=~_u,t&=~zu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-xe(a),l=1<<o;r[o]=-1,a&=~l}0!==n&&Le(e,n,t)}function ec(){return 0!==(6&hu)||(Dc(0,!1),!1)}function tc(){if(null!==mu){if(0===bu)var e=mu.return;else Ca=Ea=null,sl(e=mu),so=null,uo=0,e=mu;for(;null!==e;)ms(e.alternate,e),e=e.return;mu=null}}function nc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,Sd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uu=0,tc(),gu=e,mu=n=Ur(e.current,null),vu=t,bu=0,yu=null,xu=!1,wu=je(e,t),ku=!1,Tu=ju=_u=zu=Cu=Eu=0,Nu=Pu=null,Ou=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),o=1<<a;t|=e[a],r&=~o}return Su=t,Nr(),n}function rc(e,t){Bo=null,R.H=mi,t===Ja||t===eo?(t=lo(),bu=3):t===Za?(t=lo(),bu=4):bu=t===Li?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,yu=t,null===mu&&(Eu=1,ji(e,Gr(t,e.current)))}function ac(){var e=Ro.current;return null===e||((4194048&vu)===vu?null===$o:((62914560&vu)===vu||0!==(536870912&vu))&&e===$o)}function oc(){var e=R.H;return R.H=mi,null===e?mi:e}function lc(){var e=R.A;return R.A=fu,e}function ic(){Eu=4,xu||(4194048&vu)!==vu&&null!==Ro.current||(wu=!0),0===(134217727&Cu)&&0===(134217727&zu)||null===gu||Zu(gu,vu,ju,!1)}function sc(e,t,n){var r=hu;hu|=2;var a=oc(),o=lc();gu===e&&vu===t||(Au=null,nc(e,t)),t=!1;var l=Eu;e:for(;;)try{if(0!==bu&&null!==mu){var i=mu,s=yu;switch(bu){case 8:tc(),l=6;break e;case 3:case 2:case 9:case 6:null===Ro.current&&(t=!0);var u=bu;if(bu=0,yu=null,pc(e,i,s,u),n&&wu){l=0;break e}break;default:u=bu,bu=0,yu=null,pc(e,i,s,u)}}uc(),l=Eu;break}catch(c){rc(e,c)}return t&&e.shellSuspendCounter++,Ca=Ea=null,hu=r,R.H=a,R.A=o,null===mu&&(gu=null,vu=0,Nr()),l}function uc(){for(;null!==mu;)dc(mu)}function cc(){for(;null!==mu&&!le();)dc(mu)}function dc(e){var t=is(e.alternate,e,Su);e.memoizedProps=e.pendingProps,null===t?hc(e):mu=t}function fc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qi(n,t,t.pendingProps,t.type,void 0,vu);break;case 11:t=qi(n,t,t.pendingProps,t.type.render,t.ref,vu);break;case 5:sl(t);default:ms(n,t),t=is(n,t=mu=Hr(t,Su),Su)}e.memoizedProps=e.pendingProps,null===t?hc(e):mu=t}function pc(e,t,n,r){Ca=Ea=null,sl(t),so=null,uo=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Pa(t,n,a,!0),null!==(n=Ro.current)){switch(n.tag){case 31:case 13:return null===$o?ic():null===n.alternate&&0===Eu&&(Eu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Cc(e,r,a)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Cc(e,r,a)),!1}throw Error(l(435,n.tag))}return Cc(e,r,a),ic(),!1}if(fa)return null!==(t=Ro.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ga&&ka(Gr(e=Error(l(422),{cause:r}),n))):(r!==ga&&ka(Gr(t=Error(l(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Gr(r,n),So(e,a=Pi(e.stateNode,r,a)),4!==Eu&&(Eu=2)),!1;var o=Error(l(520),{cause:r});if(o=Gr(o,n),null===Pu?Pu=[o]:Pu.push(o),4!==Eu&&(Eu=2),null===t)return!0;r=Gr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,So(n,e=Pi(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Du||!Du.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Oi(a=Ni(a),e,n,r),So(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,vu))return Eu=1,ji(e,Gr(n,e.current)),void(mu=null)}catch(o){if(null!==a)throw mu=a,o;return Eu=1,ji(e,Gr(n,e.current)),void(mu=null)}32768&t.flags?(fa||1===r?e=!0:wu||0!==(536870912&vu)?e=!1:(xu=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ro.current)&&13===r.tag&&(r.flags|=16384))),gc(t,e)):hc(t)}function hc(e){var t=e;do{if(0!==(32768&t.flags))return void gc(t,xu);e=t.return;var n=hs(t.alternate,t,Su);if(null!==n)return void(mu=n);if(null!==(t=t.sibling))return void(mu=t);mu=t=e}while(null!==t);0===Eu&&(Eu=5)}function gc(e,t){do{var n=gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(mu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(mu=e);mu=e=n}while(null!==e);Eu=6,mu=null}function mc(e,t,n,r,a,o,i,s,u){e.cancelPendingCommit=null;do{wc()}while(0!==Mu);if(0!==(6&hu))throw Error(l(327));if(null!==t){if(t===e.current)throw Error(l(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=l&~n;0<n;){var c=31-xe(n),d=1<<c;i[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Le(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(l&~t))}(e,n,o|=Pr,i,s,u),e===gu&&(mu=gu=null,vu=0),Iu=t,Fu=e,Uu=n,Hu=o,Wu=a,Bu=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(fe,function(){return kc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=$.p,$.p=2,i=hu,hu|=4;try{!function(e,t){if(e=e.containerInfo,gd=wf,or(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(m){n=null;break e}var i=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=i+a),f!==o||0!==r&&3!==f.nodeType||(u=i+r),3===f.nodeType&&(i+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=i),p===o&&++d===r&&(u=i),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:e,selectionRange:n},wf=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(o=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var g=Ei(n.type,a);e=r.getSnapshotBeforeUpdate(g,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){Ec(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Pd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(l(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{hu=i,$.p=a,R.T=r}}Mu=1,vc(),bc(),yc()}}function vc(){if(1===Mu){Mu=0;var e=Fu,t=Iu,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=$.p;$.p=2;var a=hu;hu|=4;try{qs(t,e);var o=md,l=ar(e.containerInfo),i=o.focusedElem,s=o.selectionRange;if(l!==i&&i&&i.ownerDocument&&rr(i.ownerDocument.documentElement,i)){if(null!==s&&or(i)){var u=s.start,c=s.end;if(void 0===c&&(c=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(c,i.value.length);else{var d=i.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=i.textContent.length,g=Math.min(s.start,h),m=void 0===s.end?g:Math.min(s.end,h);!p.extend&&g>m&&(l=m,m=g,g=l);var v=nr(i,g),b=nr(i,m);if(v&&b&&(1!==p.rangeCount||p.anchorNode!==v.node||p.anchorOffset!==v.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var y=d.createRange();y.setStart(v.node,v.offset),p.removeAllRanges(),g>m?(p.addRange(y),p.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),p.addRange(y))}}}}for(d=[],p=i;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof i.focus&&i.focus(),i=0;i<d.length;i++){var x=d[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}wf=!!gd,md=gd=null}finally{hu=a,$.p=r,R.T=n}}e.current=t,Mu=2}}function bc(){if(2===Mu){Mu=0;var e=Fu,t=Iu,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=$.p;$.p=2;var a=hu;hu|=4;try{$s(e,t.alternate,t)}finally{hu=a,$.p=r,R.T=n}}Mu=3}}function yc(){if(4===Mu||3===Mu){Mu=0,ie();var e=Fu,t=Iu,n=Uu,r=Bu;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Mu=5:(Mu=0,Iu=Fu=null,xc(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Du=null),De(n),t=t.stateNode,be&&"function"===typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(ve,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=$.p,$.p=2,R.T=null;try{for(var o=e.onRecoverableError,l=0;l<r.length;l++){var i=r[l];o(i.value,{componentStack:i.stack})}}finally{R.T=t,$.p=a}}0!==(3&Uu)&&wc(),Ac(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===qu?Vu++:(Vu=0,qu=e):Vu=0,Dc(0,!1)}}function xc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ua(t)))}function wc(){return vc(),bc(),yc(),kc()}function kc(){if(5!==Mu)return!1;var e=Fu,t=Hu;Hu=0;var n=De(Uu),r=R.T,a=$.p;try{$.p=32>n?32:n,R.T=null,n=Wu,Wu=null;var o=Fu,i=Uu;if(Mu=0,Iu=Fu=null,Uu=0,0!==(6&hu))throw Error(l(331));var s=hu;if(hu|=4,uu(o.current),tu(o,o.current,i,n),hu=s,Dc(0,!1),be&&"function"===typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(ve,o)}catch(u){}return!0}finally{$.p=a,R.T=r,xc(e,t)}}function Sc(e,t,n){t=Gr(n,t),null!==(e=wo(e,t=Pi(e.stateNode,t,2),2))&&(Oe(e,2),Ac(e))}function Ec(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Du||!Du.has(r))){e=Gr(n,e),null!==(r=wo(t,n=Ni(2),2))&&(Oi(n,r,t,e),Oe(r,2),Ac(r));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(ku=!0,a.add(n),e=zc.bind(null,e,t,n),t.then(e,e))}function zc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,gu===e&&(vu&n)===n&&(4===Eu||3===Eu&&(62914560&vu)===vu&&300>se()-Lu?0===(2&hu)&&nc(e,0):_u|=n,Tu===vu&&(Tu=0)),Ac(e)}function _c(e,t){0===t&&(t=Pe()),null!==(e=Rr(e,t))&&(Oe(e,t),Ac(e))}function jc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_c(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}null!==r&&r.delete(t),_c(e,n)}var Pc=null,Nc=null,Oc=!1,Lc=!1,Rc=!1,$c=0;function Ac(e){e!==Nc&&null===e.next&&(null===Nc?Pc=Nc=e:Nc=Nc.next=e),Lc=!0,Oc||(Oc=!0,Cd(function(){0!==(6&hu)?ae(ce,Mc):Fc()}))}function Dc(e,t){if(!Rc&&Lc){Rc=!0;do{for(var n=!1,r=Pc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var l=r.suspendedLanes,i=r.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326741&(o&=a&~(l&~i))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Hc(r,o))}else o=vu,0===(3&(o=_e(r,r===gu?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||je(r,o)||(n=!0,Hc(r,o));r=r.next}}while(n);Rc=!1}}function Mc(){Fc()}function Fc(){Lc=Oc=!1;var e=0;0!==$c&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==wd&&(wd=e,!0);return wd=null,!1}()&&(e=$c);for(var t=se(),n=null,r=Pc;null!==r;){var a=r.next,o=Ic(r,t);0===o?(r.next=null,null===n?Pc=a:n.next=a,null===a&&(Nc=n)):(n=r,(0!==e||0!==(3&o))&&(Lc=!0)),r=a}0!==Mu&&5!==Mu||Dc(e,!1),0!==$c&&($c=0)}function Ic(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var l=31-xe(o),i=1<<l,s=a[l];-1===s?0!==(i&n)&&0===(i&r)||(a[l]=Te(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}if(n=vu,n=_e(e,e===(t=gu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===bu||9===bu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||je(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),De(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=Uc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Uc(e,t){if(0!==Mu&&5!==Mu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var r=vu;return 0===(r=_e(e,e===gu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Yu(e,r,t),Ic(e,se()),null!=e.callbackNode&&e.callbackNode===n?Uc.bind(null,e):null)}function Hc(e,t){if(wc())return null;Yu(e,t,!0)}function Wc(){if(0===$c){var e=Ba;0===e&&(e=Se,0===(261888&(Se<<=1))&&(Se=256)),$c=e}return $c}function Bc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Nt(""+e)}function Vc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var qc=0;qc<Cr.length;qc++){var Qc=Cr[qc];zr(Qc.toLowerCase(),"on"+(Qc[0].toUpperCase()+Qc.slice(1)))}zr(vr,"onAnimationEnd"),zr(br,"onAnimationIteration"),zr(yr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(xr,"onTransitionRun"),zr(wr,"onTransitionStart"),zr(kr,"onTransitionCancel"),zr(Sr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kc));function Yc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=u;try{o(a)}catch(c){_r(c)}a.currentTarget=null,o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=u;try{o(a)}catch(c){_r(c)}a.currentTarget=null,o=s}}}}function Xc(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Jc(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zc]){e[Zc]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Gc.has(t)||Jc(t,!1,e),Jc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zc]||(t[Zc]=!0,Jc("selectionchange",!1,t))}}function td(e,t,n,r){switch(jf(t)){case 2:var a=kf;break;case 8:a=Sf;break;default:a=Ef}n=a.bind(null,t,n,e),a=void 0,!Ht||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===a)break;if(4===l)for(l=r.return;null!==l;){var u=l.tag;if((3===u||4===u)&&l.stateNode.containerInfo===a)return;l=l.return}for(;null!==i;){if(null===(l=Ye(i)))return;if(5===(u=l.tag)||6===u||26===u||27===u){r=o=l;continue e}i=i.parentNode}}r=r.return}Ft(function(){var r=o,a=Rt(n),l=[];e:{var i=Er.get(e);if(void 0!==i){var u=nn,c=e;switch(e){case"keypress":if(0===Kt(n))break e;case"keydown":case"keyup":u=bn;break;case"focusin":c="focus",u=un;break;case"focusout":c="blur",u=un;break;case"beforeblur":case"afterblur":u=un;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=xn;break;case vr:case br:case yr:u=cn;break;case Sr:u=wn;break;case"scroll":case"scrollend":u=an;break;case"wheel":u=kn;break;case"copy":case"cut":case"paste":u=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=yn;break;case"toggle":case"beforetoggle":u=Sn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==i?i+"Capture":null:i;d=[];for(var h,g=r;null!==g;){var m=g;if(h=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===h||null===p||null!=(m=It(g,p))&&d.push(rd(g,m,h)),f)break;g=g.return}0<d.length&&(i=new u(i,c,null,n,a),l.push({event:i,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===Lt||!(c=n.relatedTarget||n.fromElement)||!Ye(c)&&!c[We])&&(u||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ye(c):null)&&(f=s(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=ln,m="onMouseLeave",p="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(d=yn,m="onPointerLeave",p="onPointerEnter",g="pointer"),f=null==u?i:Je(u),h=null==c?i:Je(c),(i=new d(m,g+"leave",u,n,a)).target=f,i.relatedTarget=h,m=null,Ye(a)===r&&((d=new d(p,g+"enter",c,n,a)).target=h,d.relatedTarget=f,m=d),f=m,u&&c)e:{for(d=od,g=c,h=0,m=p=u;m;m=d(m))h++;m=0;for(var v=g;v;v=d(v))m++;for(;0<h-m;)p=d(p),h--;for(;0<m-h;)g=d(g),m--;for(;h--;){if(p===g||null!==g&&p===g.alternate){d=p;break e}p=d(p),g=d(g)}d=null}else d=null;null!==u&&ld(l,i,u,d,!1),null!==c&&null!==f&&ld(l,f,c,d,!0)}if("select"===(u=(i=r?Je(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===u&&"file"===i.type)var b=Un;else if($n(i))if(Hn)b=Xn;else{b=Gn;var y=Kn}else!(u=i.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==i.type&&"radio"!==i.type?r&&jt(r.elementType)&&(b=Un):b=Yn;switch(b&&(b=b(e,r))?An(l,b,n,a):(y&&y(e,i,r),"focusout"===e&&r&&"number"===i.type&&null!=r.memoizedProps.value&&xt(i,"number",i.value)),y=r?Je(r):window,e){case"focusin":($n(y)||"true"===y.contentEditable)&&(ir=y,sr=r,ur=null);break;case"focusout":ur=sr=ir=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,dr(l,n,a);break;case"selectionchange":if(lr)break;case"keydown":case"keyup":dr(l,n,a)}var x;if(Cn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ln?Nn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(jn&&"ko"!==n.locale&&(Ln||"onCompositionStart"!==w?"onCompositionEnd"===w&&Ln&&(x=Qt()):(Vt="value"in(Bt=a)?Bt.value:Bt.textContent,Ln=!0)),0<(y=ad(r,w)).length&&(w=new fn(w,e,null,n,a),l.push({event:w,listeners:y}),x?w.data=x:null!==(x=On(n))&&(w.data=x))),(x=_n?function(e,t){switch(e){case"compositionend":return On(t);case"keypress":return 32!==t.which?null:(Pn=!0,Tn);case"textInput":return(e=t.data)===Tn&&Pn?null:e;default:return null}}(e,n):function(e,t){if(Ln)return"compositionend"===e||!Cn&&Nn(e,t)?(e=Qt(),qt=Vt=Bt=null,Ln=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=ad(r,"onBeforeInput")).length&&(y=new fn("onBeforeInput","beforeinput",null,n,a),l.push({event:y,listeners:w}),y.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Bc((a[He]||null).action),l=r.submitter;l&&null!==(t=(t=l[He]||null)?Bc(t.formAction):l.getAttribute("formAction"))&&(o=t,l=null);var i=new nn("action","action",null,r,a);e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==$c){var e=l?Vc(a,l):new FormData(a);ni(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(i.preventDefault(),e=l?Vc(a,l):new FormData(a),ni(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(l,e,r,n,a)}Yc(l,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=It(e,n))&&r.unshift(rd(e,a,o)),null!=(a=It(e,t))&&r.push(rd(e,a,o))),3===e.tag)return r;e=e.return}return[]}function od(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function ld(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(i=i.tag,null!==s&&s===r)break;5!==i&&26!==i&&27!==i||null===u||(s=u,a?null!=(u=It(n,o))&&l.unshift(rd(n,u,s)):a||null!=(u=It(n,o))&&l.push(rd(n,u,s))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var id=/\r\n?/g,sd=/\u0000|\uFFFD/g;function ud(e){return("string"===typeof e?e:""+e).replace(id,"\n").replace(sd,"")}function cd(e,t){return t=ud(t),ud(e)===t}function dd(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||Et(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&Et(e,""+r);break;case"className":ut(e,"class",r);break;case"tabIndex":ut(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(e,n,r);break;case"style":_t(e,r,o);break;case"data":if("object"!==t){ut(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Nt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Nt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ot);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(l(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Nt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xc("beforetoggle",e),Xc("toggle",e),st(e,"popover",r);break;case"xlinkActuate":ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ct(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ct(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ct(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ct(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Tt.get(n)||n,r)}}function fd(e,t,n,r,a,o){switch(n){case"style":_t(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(l(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60));e.innerHTML=n}}break;case"children":"string"===typeof r?Et(e,r):("number"===typeof r||"bigint"===typeof r)&&Et(e,""+r);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[He]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xc("error",e),Xc("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var i=n[r];if(null!=i)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dd(e,t,r,i,n,null)}}return o&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Xc("invalid",e);var s=r=i=o=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":i=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(l(137,t));break;default:dd(e,t,a,d,n,null)}}return void yt(e,r,s,u,c,i,o,!1);case"select":for(o in Xc("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:dd(e,t,o,s,n,null)}return t=r,n=i,e.multiple=!!a,void(null!=t?wt(e,!!a,t,!1):null!=n&&wt(e,!!a,n,!0));case"textarea":for(i in Xc("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(l(91));break;default:dd(e,t,i,s,n,null)}return void St(e,a,o,r);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,u,a,n,null);return;case"dialog":Xc("beforetoggle",e),Xc("toggle",e),Xc("cancel",e),Xc("close",e);break;case"iframe":case"object":Xc("load",e);break;case"video":case"audio":for(a=0;a<Kc.length;a++)Xc(Kc[a],e);break;case"image":Xc("error",e),Xc("load",e);break;case"details":Xc("toggle",e);break;case"embed":case"source":case"link":Xc("error",e),Xc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dd(e,t,c,a,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&fd(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&dd(e,t,s,a,n,null))}function hd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var gd=null,md=null;function vd(e){return 9===e.nodeType?e:e.ownerDocument}function bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,Sd="function"===typeof clearTimeout?clearTimeout:void 0,Ed="function"===typeof Promise?Promise:void 0,Cd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Ed?function(e){return Ed.resolve(null).then(e).catch(zd)}:kd;function zd(e){setTimeout(function(){throw e})}function _d(e){return"head"===e}function jd(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void qf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Fd(e.ownerDocument.documentElement);else if("head"===n){Fd(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var l=o.nextSibling,i=o.nodeName;o[Ke]||"SCRIPT"===i||"STYLE"===i||"LINK"===i&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}else"body"===n&&Fd(e.ownerDocument.body);n=a}while(n);qf(t)}function Td(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Pd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pd(n),Ge(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Nd(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}function Od(e){return"$?"===e.data||"$~"===e.data}function Ld(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var $d=null;function Ad(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Md(e,t,n){switch(t=vd(n),e){case"html":if(!(e=t.documentElement))throw Error(l(452));return e;case"head":if(!(e=t.head))throw Error(l(453));return e;case"body":if(!(e=t.body))throw Error(l(454));return e;default:throw Error(l(451))}}function Fd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ge(e)}var Id=new Map,Ud=new Set;function Hd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Wd=$.d;$.d={f:function(){var e=Wd.f(),t=ec();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?ai(t):Wd.r(e)},D:function(e){Wd.D(e),Vd("dns-prefetch",e,null)},C:function(e,t){Wd.C(e,t),Vd("preconnect",e,t)},L:function(e,t,n){Wd.L(e,t,n);var r=Bd;if(r&&e&&t){var a='link[rel="preload"][as="'+vt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+vt(n.imageSizes)+'"]')):a+='[href="'+vt(e)+'"]';var o=a;switch(t){case"style":o=Qd(e);break;case"script":o=Yd(e)}Id.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Id.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Kd(o))||"script"===t&&r.querySelector(Xd(o))||(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Wd.m(e,t);var n=Bd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+vt(r)+'"][href="'+vt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Yd(e)}if(!Id.has(o)&&(e=p({rel:"modulepreload",href:e},t),Id.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xd(o)))return}pd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Wd.X(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Yd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=p({src:e,async:!0},t),(t=Id.get(a))&&tf(e,t),et(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Wd.S(e,t,n);var r=Bd;if(r&&e){var a=Ze(r).hoistableStyles,o=Qd(e);t=t||"default";var l=a.get(o);if(!l){var i={loading:0,preload:null};if(l=r.querySelector(Kd(o)))i.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Id.get(o))&&ef(e,n);var s=l=r.createElement("link");et(s),pd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Zd(l,t,r)}l={type:"stylesheet",instance:l,count:1,state:i},a.set(o,l)}}},M:function(e,t){Wd.M(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Yd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=Id.get(a))&&tf(e,t),et(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Bd="undefined"===typeof document?null:document;function Vd(e,t,n){var r=Bd;if(r&&"string"===typeof t&&t){var a=vt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Ud.has(a)||(Ud.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function qd(e,t,n,r){var a,o,i,s,u=(u=q.current)?Hd(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Qd(n.href),(r=(n=Ze(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Qd(n.href);var c=Ze(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(Kd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Id.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Id.set(e,n),c||(a=u,o=e,i=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),pd(o,"link",i),et(o),a.head.appendChild(o))))),t&&null===r)throw Error(l(528,""));return d}if(t&&null!==r)throw Error(l(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Yd(n),(r=(n=Ze(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Qd(e){return'href="'+vt(e)+'"'}function Kd(e){return'link[rel="stylesheet"]['+e+"]"}function Gd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Yd(e){return'[src="'+vt(e)+'"]'}function Xd(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),pd(r,"style",a),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":a=Qd(n.href);var o=e.querySelector(Kd(a));if(o)return t.state.loading|=4,t.instance=o,et(o),o;r=Gd(n),(a=Id.get(a))&&ef(r,a),et(o=(e.ownerDocument||e).createElement("link"));var i=o;return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),pd(o,"link",r),t.state.loading|=4,Zd(o,n.precedence,e),t.instance=o;case"script":return o=Yd(n.src),(a=e.querySelector(Xd(o)))?(t.instance=a,et(a),a):(r=n,(a=Id.get(o))&&tf(r=p({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),pd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(l(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,l=0;l<r.length;l++){var i=r[l];if(i.dataset.precedence===t)o=i;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ef(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nf=null;function rf(e,t,n){if(null===nf){var r=new Map,a=nf=new Map;a.set(n,r)}else(r=(a=nf).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ke]||o[Ue]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var l=o.getAttribute(t)||"";l=e+l;var i=r.get(l);i?i.push(o):r.set(l,[o])}}return r}function af(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function of(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var lf=0;function sf(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var uf=null;function cf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,uf=new Map,t.forEach(df,e),uf=null,sf.call(e))}function df(e,t){if(!(4&t.state.loading)){var n=uf.get(e);if(n)var r=n.get(null);else{n=new Map,uf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var l=a[o];"LINK"!==l.nodeName&&"not all"===l.getAttribute("media")||(n.set(l.dataset.precedence,l),r=l)}r&&n.set(null,r)}l=(a=t.instance).getAttribute("data-precedence"),(o=n.get(l)||r)===r&&n.set(null,a),n.set(l,a),this.count++,r=sf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var ff={$$typeof:w,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function pf(e,t,n,r,a,o,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function hf(e,t,n,r,a,o,l,i,s,u,c,d){return e=new pf(e,t,n,l,s,u,c,d,i),t=1,!0===o&&(t|=24),o=Fr(3,null,null,t),e.current=o,o.stateNode=e,(t=Ia()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},bo(o),e}function gf(e){return e?e=Dr:Dr}function mf(e,t,n,r,a,o){a=gf(a),null===r.context?r.context=a:r.pendingContext=a,(r=xo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=wo(e,r,t))&&(Gu(n,0,t),ko(n,e,t))}function vf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function bf(e,t){vf(e,t),(e=e.alternate)&&vf(e,t)}function yf(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Gu(t,0,67108864),bf(e,67108864)}}function xf(e){if(13===e.tag||31===e.tag){var t=Qu(),n=Rr(e,t=Ae(t));null!==n&&Gu(n,0,t),bf(e,t)}}var wf=!0;function kf(e,t,n,r){var a=R.T;R.T=null;var o=$.p;try{$.p=2,Ef(e,t,n,r)}finally{$.p=o,R.T=a}}function Sf(e,t,n,r){var a=R.T;R.T=null;var o=$.p;try{$.p=8,Ef(e,t,n,r)}finally{$.p=o,R.T=a}}function Ef(e,t,n,r){if(wf){var a=Cf(r);if(null===a)nd(e,t,r,zf,n),Df(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pf=Mf(Pf,e,t,n,r,a),!0;case"dragenter":return Nf=Mf(Nf,e,t,n,r,a),!0;case"mouseover":return Of=Mf(Of,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Lf.set(o,Mf(Lf.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rf.set(o,Mf(Rf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Df(e,r),4&t&&-1<Af.indexOf(e)){for(;null!==a;){var o=Xe(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var l=ze(o.pendingLanes);if(0!==l){var i=o;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-xe(l);i.entanglements[1]|=s,l&=~s}Ac(o),0===(6&hu)&&($u=se()+500,Dc(0,!1))}}break;case 31:case 13:null!==(i=Rr(o,2))&&Gu(i,0,2),ec(),bf(o,2)}if(null===(o=Cf(r))&&nd(e,t,r,zf,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Cf(e){return _f(e=Rt(e))}var zf=null;function _f(e){if(zf=null,null!==(e=Ye(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zf=e,null}function jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Tf=!1,Pf=null,Nf=null,Of=null,Lf=new Map,Rf=new Map,$f=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Df(e,t){switch(e){case"focusin":case"focusout":Pf=null;break;case"dragenter":case"dragleave":Nf=null;break;case"mouseover":case"mouseout":Of=null;break;case"pointerover":case"pointerout":Lf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rf.delete(t.pointerId)}}function Mf(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ff(e){var t=Ye(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void Fe(e.priority,function(){xf(n)})}else if(31===t){if(null!==(t=c(n)))return e.blockedOn=t,void Fe(e.priority,function(){xf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function If(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cf(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&yf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Lt=r,n.target.dispatchEvent(r),Lt=null,t.shift()}return!0}function Uf(e,t,n){If(e)&&n.delete(t)}function Hf(){Tf=!1,null!==Pf&&If(Pf)&&(Pf=null),null!==Nf&&If(Nf)&&(Nf=null),null!==Of&&If(Of)&&(Of=null),Lf.forEach(Uf),Rf.forEach(Uf)}function Wf(e,t){e.blockedOn===t&&(e.blockedOn=null,Tf||(Tf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hf)))}var Bf=null;function Vf(e){Bf!==e&&(Bf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Bf===e&&(Bf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===_f(r||n))continue;break}var o=Xe(n);null!==o&&(e.splice(t,3),t-=3,ni(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function qf(e){function t(t){return Wf(t,e)}null!==Pf&&Wf(Pf,e),null!==Nf&&Wf(Nf,e),null!==Of&&Wf(Of,e),Lf.forEach(t),Rf.forEach(t);for(var n=0;n<$f.length;n++){var r=$f[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<$f.length&&null===(n=$f[0]).blockedOn;)Ff(n),null===n.blockedOn&&$f.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],l=a[He]||null;if("function"===typeof o)l||Vf(n);else if(l){var i=null;if(o&&o.hasAttribute("formAction")){if(a=o,l=o[He]||null)i=l.formAction;else if(null!==_f(a))continue}else i=l.action;"function"===typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Vf(n)}}}function Qf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Kf(e){this._internalRoot=e}function Gf(e){this._internalRoot=e}Gf.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(l(409));mf(t.current,Qu(),e,t,null,null)},Gf.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;mf(e.current,2,null,e,null,null),ec(),t[We]=null}},Gf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$f.length&&0!==t&&t<$f[n].priority;n++);$f.splice(n,0,e),0===n&&Ff(e)}};var Yf=a.version;if("19.2.5"!==Yf)throw Error(l(527,Yf,"19.2.5"));$.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(l(188));throw e=Object.keys(e).join(","),Error(l(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return d(a),e;if(o===r)return d(a),t;o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,u=a.child;u;){if(u===n){i=!0,n=a,r=o;break}if(u===r){i=!0,r=a,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=a;break}if(u===r){i=!0,r=o,n=a;break}u=u.sibling}if(!i)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?f(e):null)?null:e.stateNode};var Xf={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.5"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jf.isDisabled&&Jf.supportsFiber)try{ve=Jf.inject(Xf),be=Jf}catch(ep){}}t.createRoot=function(e,t){if(!i(e))throw Error(l(299));var n=!1,r="",a=Ci,o=zi,s=_i;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=hf(e,1,!1,null,0,n,r,null,a,o,s,Qf),e[We]=t.current,ed(e),new Kf(t)},t.hydrateRoot=function(e,t,n){if(!i(e))throw Error(l(299));var r=!1,a="",o=Ci,s=zi,u=_i,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.formState&&(c=n.formState)),(t=hf(e,1,!0,t,0,r,a,c,o,s,u,Qf)).context=gf(null),n=t.current,(a=xo(r=Ae(r=Qu()))).callback=null,wo(n,a,r),n=r,t.current.lanes=n,Oe(t,n),Ac(t),e[We]=t.current,ed(e),new Gf(t)},t.version="19.2.5"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:i,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=l.p;try{if(s.T=null,l.p=2,e)return e()}finally{s.T=t,l.p=n,l.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,l.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&l.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?l.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&l.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);l.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&l.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);l.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else l.d.m(e)},t.requestFormReset=function(e){l.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.5"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var w=x.prototype=new y;w.constructor=x,m(w,b.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function z(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(i){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return P((c=e._init)(e._payload),t,a,o,l)}}if(c)return l=l(e),c=""===o?"."+T(e,0):o,k(l)?(a="",null!=c&&(a=c.replace(j,"$&/")+"/"),P(l,t,a,"",function(e){return e})):null!=l&&(_(l)&&(s=l,u=a+(null==l.key||e&&e.key===l.key?"":(""+l.key).replace(j,"$&/")+"/")+c,l=z(s.type,u,s.props)),t.push(l)),1;c=0;var d,p=""===o?".":o+":";if(k(e))for(var g=0;g<e.length;g++)c+=P(o=e[g],t,a,i=p+T(o,g),l);else if("function"===typeof(g=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=g.call(e),g=0;!(o=e.next()).done;)c+=P(o=o.value,t,a,i=p+T(o,g++),l);else if("object"===i){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function N(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",function(e){return t.call(n,e,a++)}),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=R,t.Component=b,t.Fragment=a,t.Profiler=l,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!C.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var l=Array(o),i=0;i<o;i++)l[i]=arguments[i+2];r.children=l}return z(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:i,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)C.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return z(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),a=E.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(S,L)}catch(o){L(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),E.T=t}},t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useEffectEvent=function(e){return E.H.useEffectEvent(e)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.H.useTransition()},t.version="19.2.5"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(m=!1,w(e),!g)if(null!==r(u))g=!0,E||(E=!0,S());else{var t=r(c);null!==t&&O(k,t.startTime-e)}}var S,E=!1,C=-1,z=5,_=-1;function j(){return!!v||!(t.unstable_now()-_<z)}function T(){if(v=!1,E){var e=t.unstable_now();_=e;var n=!0;try{e:{g=!1,m&&(m=!1,y(C),C=-1),h=!0;var o=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&j());){var l=f.callback;if("function"===typeof l){f.callback=null,p=f.priorityLevel;var i=l(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof i){f.callback=i,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&O(k,s.startTime-e),n=!1}}break e}finally{f=null,p=o,h=!1}n=void 0}}finally{n?S():E=!1}}}if("function"===typeof x)S=function(){x(T)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,N=P.port2;P.port1.onmessage=T,S=function(){N.postMessage(null)}}else S=function(){b(T,0)};function O(e,n){C=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(m?(y(C),C=-1):m=!0,O(k,o-l))):(e.sortIndex=i,n(u,e),g||h||(g=!0,E||(E=!0,S()))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;("object"==typeof i||"function"==typeof i)&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach(e=>l[e]=()=>r[e]);return l.default=()=>r,n.d(o,l),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r=n(43),a=n.t(r,2),o=n(391),l="popstate";function i(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return g(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:o}=n||e.location;return f("",{pathname:r,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:p(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?h(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function g(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,u="POP",c=null,p=h();function h(){return(s.state||{idx:null}).idx}function g(){u="POP";let e=h(),t=null==e?null:e-p;p=e,c&&c({action:u,location:b.location,delta:t})}function v(e){return m(e)}null==p&&(p=0,s.replaceState({...s.state,idx:p},""));let b={get action(){return u},get location(){return e(a,s)},listen(e){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(l,g),c=e,()=>{a.removeEventListener(l,g),c=null}},createHref:e=>t(a,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u="PUSH";let r=i(e)?e:f(b.location,e,t);n&&n(r,e),p=h()+1;let l=d(r,p),g=b.createHref(r.unstable_mask||r);try{s.pushState(l,"",g)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;a.location.assign(g)}o&&c&&c({action:u,location:b.location,delta:1})},replace:function(e,t){u="REPLACE";let r=i(e)?e:f(b.location,e,t);n&&n(r,e),p=h();let a=d(r,p),l=b.createHref(r.unstable_mask||r);s.replaceState(a,"",l),o&&c&&c({action:u,location:b.location,delta:0})},go:e=>s.go(e)};return b}function m(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),u(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function v(e,t){return b(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function b(e,t,n,r){let a=L(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let o=y(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let l=null;for(let i=0;null==l&&i<o.length;++i){let e=O(a);l=T(o[i],e,r)}return l}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,i=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&l)return;u(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=U([r,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(u(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),y(e.children,t,d,c,l)),(null!=e.path||e.index)&&t.push({path:c,score:j(c,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of x(e.path))o(e,t,!0,n);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let l=x(r.join("/")),i=[];return i.push(...l.map(e=>""===e?o:[o,e].join("/"))),a&&i.push(...l),i.map(t=>e.startsWith("/")&&""===t?"/":t)}var w=/^:[\w-]+$/,k=3,S=2,E=1,C=10,z=-2,_=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=z),t&&(r+=S),n.filter(e=>!_(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?E:C),r)}function T(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",l=[];for(let i=0;i<r.length;++i){let e=r[i],s=i===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:U([o,c.pathname]),pathnameBase:W(U([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=U([o,c.pathnameBase]))}return l}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=i[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:l,pattern:e}}function N(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];c("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,o)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function O(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return c(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function $(e,t){let n=H(t).split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function A(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function M(e){let t=D(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function F(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=h(e):(r={...e},u(!r.pathname||!r.pathname.includes("?"),A("?","pathname","search",r)),u(!r.pathname||!r.pathname.includes("#"),A("#","pathname","hash",r)),u(!r.search||!r.search.includes("#"),A("#","search","hash",r)));let o,l=""===e||""===r.pathname,i=l?"/":r.pathname;if(null==i)o=n;else{let e=t.length-1;if(!a&&i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:o=""}="string"===typeof e?h(e):e;return r?(r=I(r),t=r.startsWith("/")?$(r.substring(1),"/"):$(r,n)):t=n,{pathname:t,search:B(a),hash:V(o)}}(r,o),c=i&&"/"!==i&&i.endsWith("/"),d=(l||"."===i)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}var I=e=>e.replace(/\/\/+/g,"/"),U=e=>I(e.join("/")),H=e=>e.replace(/\/+$/,""),W=e=>H(e).replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var q=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Q(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function K(e){let t=e.map(e=>e.route.path).filter(Boolean);return U(t)||"/"}var G="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function Y(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(G)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),o=L(r.pathname,t);r.origin===e.origin&&null!=o?n=o+r.search+r.hash:a=!0}catch(o){c(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var X=["POST","PUT","PATCH","DELETE"],J=(new Set(X),["GET",...X]);new Set(J),Symbol("ResetLoaderData");var Z=r.createContext(null);Z.displayName="DataRouter";var ee=r.createContext(null);ee.displayName="DataRouterState";var te=r.createContext(!1);function ne(){return r.useContext(te)}var re=r.createContext({isTransitioning:!1});re.displayName="ViewTransition";var ae=r.createContext(new Map);ae.displayName="Fetchers";var oe=r.createContext(null);oe.displayName="Await";var le=r.createContext(null);le.displayName="Navigation";var ie=r.createContext(null);ie.displayName="Location";var se=r.createContext({outlet:null,matches:[],isDataRoute:!1});se.displayName="Route";var ue=r.createContext(null);ue.displayName="RouteError";var ce="REACT_ROUTER_ERROR";function de(){return null!=r.useContext(ie)}function fe(){return u(de(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(ie).location}var pe="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function he(e){r.useContext(le).static||r.useLayoutEffect(e)}function ge(){let{isDataRoute:e}=r.useContext(se);return e?function(){let{router:e}=_e("useNavigate"),t=Te("useNavigate"),n=r.useRef(!1);he(()=>{n.current=!0});let a=r.useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(n.current,pe),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return a}():function(){u(de(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(Z),{basename:t,navigator:n}=r.useContext(le),{matches:a}=r.useContext(se),{pathname:o}=fe(),l=JSON.stringify(M(a)),i=r.useRef(!1);he(()=>{i.current=!0});let s=r.useCallback(function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(i.current,pe),!i.current)return;if("number"===typeof r)return void n.go(r);let s=F(r,JSON.parse(l),o,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:U([t,s.pathname])),(a.replace?n.replace:n.push)(s,a.state,a)},[t,n,l,o,e]);return s}()}r.createContext(null);function me(){let{matches:e}=r.useContext(se),t=e[e.length-1];return t?.params??{}}function ve(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(se),{pathname:a}=fe(),o=JSON.stringify(M(n));return r.useMemo(()=>F(e,JSON.parse(o),a,"path"===t),[e,o,a,t])}function be(e,t,n){u(de(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=r.useContext(le),{matches:o}=r.useContext(se),l=o[o.length-1],i=l?l.params:{},s=l?l.pathname:"/",d=l?l.pathnameBase:"/",f=l&&l.route;{let e=f&&f.path||"";Oe(s,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,g=fe();if(t){let e="string"===typeof t?h(t):t;u("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=g;let m=p.pathname||"/",b=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=v(e,{pathname:b});c(f||null!=y,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),c(null==y||void 0!==y[y.length-1].route.element||void 0!==y[y.length-1].route.Component||void 0!==y[y.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Ce(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:U([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:U([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&x?r.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...p},navigationType:"POP"}},x):x}function ye(){let e=Pe(),t=Q(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:l},"ErrorBoundary")," or"," ",r.createElement("code",{style:l},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,i)}var xe=r.createElement(ye,null),we=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${ce}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new q(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(se.Provider,{value:this.props.routeContext},r.createElement(ue.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(Se,{error:e},t):t}};we.contextType=te;var ke=new WeakMap;function Se(e){let{children:t,error:n}=e,{basename:a}=r.useContext(le);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${ce}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=ke.get(n);if(t)throw t;let o=Y(e.location,a);if(G&&!ke.get(n)){if(!o.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:e.replace}));throw ke.set(n,t),t}window.location.href=o.absoluteURL||o.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return t}function Ee(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(Z);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(se.Provider,{value:t},a)}function Ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n?.state;if(null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let o=e,l=a?.errors;if(null!=l){let e=o.findIndex(e=>e.route.id&&void 0!==l?.[e.route.id]);u(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let i=!1,s=-1;if(n&&a){i=a.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=a,l=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||l){n.isStatic&&(i=!0),o=s>=0?o.slice(0,s+1):[o[0]];break}}}}let c=n?.onError,d=a&&c?(e,t)=>{c(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:K(a.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,u)=>{let c,f=!1,p=null,h=null;a&&(c=l&&n.route.id?l[n.route.id]:void 0,p=n.route.errorElement||xe,i&&(s<0&&0===u?(Oe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,h=null):s===u&&(f=!0,h=n.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,u+1)),m=()=>{let t;return t=c?p:f?h:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(Ee,{match:n,routeContext:{outlet:e,matches:g,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===u)?r.createElement(we,{location:a.location,revalidation:a.revalidation,component:p,error:c,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:d}):m()},null)}function ze(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _e(e){let t=r.useContext(Z);return u(t,ze(e)),t}function je(e){let t=r.useContext(ee);return u(t,ze(e)),t}function Te(e){let t=function(e){let t=r.useContext(se);return u(t,ze(e)),t}(e),n=t.matches[t.matches.length-1];return u(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pe(){let e=r.useContext(ue),t=je("useRouteError"),n=Te("useRouteError");return void 0!==e?e:t.errors?.[n]}var Ne={};function Oe(e,t,n){t||Ne[e]||(Ne[e]=!0,c(!1,n))}var Le={};function Re(e,t){e||Le[t]||(Le[t]=!0,console.warn(t))}a.useOptimistic;r.memo($e);function $e(e){let{routes:t,future:n,state:r,isStatic:a,onError:o}=e;return be(t,void 0,{state:r,isStatic:a,onError:o,future:n})}function Ae(e){let{to:t,replace:n,state:a,relative:o}=e;u(de(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=r.useContext(le);c(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=r.useContext(se),{pathname:s}=fe(),d=ge(),f=F(t,M(i),s,"path"===o),p=JSON.stringify(f);return r.useEffect(()=>{d(JSON.parse(p),{replace:n,state:a,relative:o})},[d,p,o,n,a]),null}function De(e){u(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Me(e){let{basename:t="/",children:n=null,location:a,navigationType:o="POP",navigator:l,static:i=!1,unstable_useTransitions:s}=e;u(!de(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:l,static:i,unstable_useTransitions:s,future:{}}),[d,l,i,s]);"string"===typeof a&&(a=h(a));let{pathname:p="/",search:g="",hash:m="",state:v=null,key:b="default",unstable_mask:y}=a,x=r.useMemo(()=>{let e=L(p,d);return null==e?null:{location:{pathname:e,search:g,hash:m,state:v,key:b,unstable_mask:y},navigationType:o}},[d,p,g,m,v,b,o,y]);return c(null!=x,`<Router basename="${d}"> is not able to match the URL "${p}${g}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:r.createElement(le.Provider,{value:f},r.createElement(ie.Provider,{children:n,value:x}))}function Fe(e){let{children:t,location:n}=e;return be(Ie(t),n)}r.Component;function Ie(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,Ie(e.props.children,o));u(e.type===De,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),u(!e.props.index||!e.props.children,"An index route cannot have child routes.");let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=Ie(e.props.children,o)),n.push(l)}),n}var Ue="get",He="application/x-www-form-urlencoded";function We(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Be=null;var Ve=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qe(e){return null==e||Ve.has(e)?e:(c(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${He}"`),null)}function Qe(e,t){let n,r,a,o,l;if(We(i=e)&&"form"===i.tagName.toLowerCase()){let l=e.getAttribute("action");r=l?L(l,t):null,n=e.getAttribute("method")||Ue,a=qe(e.getAttribute("enctype"))||He,o=new FormData(e)}else if(function(e){return We(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return We(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let l=e.form;if(null==l)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let i=e.getAttribute("formaction")||l.getAttribute("action");if(r=i?L(i,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Ue,a=qe(e.getAttribute("formenctype"))||qe(l.getAttribute("enctype"))||He,o=new FormData(l,e),!function(){if(null===Be)try{new FormData(document.createElement("form"),0),Be=!1}catch(e){Be=!0}return Be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(We(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ue,r=null,a=He,l=e}var i;return o&&"text/plain"===a&&(l=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ge(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===L(a.pathname,t)?a.pathname=`${H(t)}/_root.${r}`:a.pathname=`${H(a.pathname)}.${r}`,a}async function Ye(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xe(e){return null!=e&&"string"===typeof e.page}function Je(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ze(e,t,n,r,a,o){let l=(e,t)=>!n[t]||e.route.id!==n[t].route.id,i=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>l(e,t)||i(e,t)):"data"===o?t.filter((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(l(t,o)||i(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function et(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function tt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Xe(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e},[])}function nt(e,t){return"lazy"===e.mode&&!0===t}function rt(){let e=r.useContext(Z);return Ke(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function at(){let e=r.useContext(ee);return Ke(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ot=r.createContext(void 0);function lt(){let e=r.useContext(ot);return Ke(e,"You must render this element inside a <HydratedRouter> element"),e}function it(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function st(e,t,n){if(n&&!pt)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}ot.displayName="FrameworkContext";function ut(e){let{page:t,...n}=e,a=ne(),{router:o}=rt(),l=r.useMemo(()=>v(o.routes,t,o.basename),[o.routes,t,o.basename]);return l?a?r.createElement(dt,{page:t,matches:l,...n}):r.createElement(ft,{page:t,matches:l,...n}):null}function ct(e){let{manifest:t,routeModules:n}=lt(),[a,o]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ye(r,n);return e.links?e.links():[]}return[]}));return tt(r.flat(1).filter(Je).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),a}function dt(e){let{page:t,matches:n,...a}=e,o=fe(),{future:l}=lt(),{basename:i}=rt(),s=r.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=Ge(t,i,l.unstable_trailingSlashAwareDataRequests,"rsc"),r=!1,a=[];for(let t of n)"function"===typeof t.route.shouldRevalidate?r=!0:a.push(t.route.id);return r&&a.length>0&&e.searchParams.set("_routes",a.join(",")),[e.pathname+e.search]},[i,l.unstable_trailingSlashAwareDataRequests,t,o,n]);return r.createElement(r.Fragment,null,s.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})))}function ft(e){let{page:t,matches:n,...a}=e,o=fe(),{future:l,manifest:i,routeModules:s}=lt(),{basename:u}=rt(),{loaderData:c,matches:d}=at(),f=r.useMemo(()=>Ze(t,n,d,i,o,"data"),[t,n,d,i,o]),p=r.useMemo(()=>Ze(t,n,d,i,o,"assets"),[t,n,d,i,o]),h=r.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=i.routes[t.route.id];n&&n.hasLoader&&(!f.some(e=>e.route.id===t.route.id)&&t.route.id in c&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let a=Ge(t,u,l.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[u,l.unstable_trailingSlashAwareDataRequests,c,o,i,f,n,t,s]),g=r.useMemo(()=>et(p,i),[p,i]),m=ct(p);return r.createElement(r.Fragment,null,h.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})),g.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...a})),m.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:a.nonce,...n,crossOrigin:n.crossOrigin??a.crossOrigin})}))}var pt=!1;function ht(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:o,routeDiscovery:l,ssr:i}=lt(),{router:s,static:u,staticContext:c}=rt(),{matches:d}=at(),f=ne(),p=nt(l,i);o&&(o.didRenderScripts=!0);let h=st(d,null,a);r.useEffect(()=>{pt=!0},[]);let g=r.useMemo(()=>{if(f)return null;let a=c?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(t.url)}`};\n${h.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Ke(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:l,clientMiddlewareModule:i,hydrateFallbackModule:s,module:u}=a,c=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...l?[{module:l,varName:`${r}_clientLoader`}]:[],...i?[{module:i,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${c.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),l=["/"];for(o.pop();o.length>0;)l.push(`/${o.join("/")}`),o.pop();l.forEach(e=>{let n=v(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let i=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:i,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${h.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),m=pt||f?[]:(b=t.entry.imports.concat(et(h,t,{includeHydrateFallback:!0})),[...new Set(b)]);var b;let y="object"===typeof t.sri?t.sri:{};return Re(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),pt||f?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,p?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:y[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:y[t.entry.module],suppressHydrationWarning:!0}),m.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:y[t],suppressHydrationWarning:!0})),g)}function gt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function mt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let a,o=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(Q(t))return r.createElement(vt,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),o);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return r.createElement(vt,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function vt(e){let{title:t,renderScripts:n,isOutsideRemixApp:a,children:o}=e,{routeModules:l}=lt();return l.root?.Layout&&!a?o:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?r.createElement(ht,null):null)))}var bt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{bt&&(window.__reactRouterVersion="7.14.2")}catch(os){}function yt(e){let{basename:t,children:n,unstable_useTransitions:a,window:o}=e,l=r.useRef();null==l.current&&(l.current=s({window:o,v5Compat:!0}));let i=l.current,[u,c]=r.useState({action:i.action,location:i.location}),d=r.useCallback(e=>{!1===a?c(e):r.startTransition(()=>c(e))},[a]);return r.useLayoutEffect(()=>i.listen(d),[i,d]),r.createElement(Me,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,unstable_useTransitions:a})}var xt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=r.forwardRef(function(e,t){let{onClick:n,discover:a="render",prefetch:o="none",relative:l,reloadDocument:i,replace:s,unstable_mask:c,state:d,target:f,to:h,preventScrollReset:g,viewTransition:m,unstable_defaultShouldRevalidate:v,...b}=e,{basename:y,navigator:x,unstable_useTransitions:w}=r.useContext(le),k="string"===typeof h&&xt.test(h),S=Y(h,y);h=S.to;let E=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(de(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(le),{hash:o,pathname:l,search:i}=ve(e,{relative:t}),s=l;return"/"!==n&&(s="/"===l?n:U([n,l])),a.createHref({pathname:s,search:i,hash:o})}(h,{relative:l}),C=fe(),z=null;if(c){let e=F(c,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);"/"!==y&&(e.pathname="/"===e.pathname?y:U([y,e.pathname])),z=x.createHref(e)}let[_,j,T]=function(e,t){let n=r.useContext(ot),[a,o]=r.useState(!1),[l,i]=r.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=r.useRef(null);r.useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[a]);let h=()=>{o(!0)},g=()=>{o(!1),i(!1)};return n?"intent"!==e?[l,p,{}]:[l,p,{onFocus:it(s,h),onBlur:it(u,g),onMouseEnter:it(c,h),onMouseLeave:it(d,g),onTouchStart:it(f,h)}]:[!1,p,{}]}(o,b),P=function(e){let{target:t,replace:n,unstable_mask:a,state:o,preventScrollReset:l,relative:i,viewTransition:s,unstable_defaultShouldRevalidate:u,unstable_useTransitions:c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=ge(),f=fe(),h=ve(e,{relative:i});return r.useCallback(g=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(g,t)){g.preventDefault();let t=void 0!==n?n:p(f)===p(h),m=()=>d(e,{replace:t,unstable_mask:a,state:o,preventScrollReset:l,relative:i,viewTransition:s,unstable_defaultShouldRevalidate:u});c?r.startTransition(()=>m()):m()}},[f,d,h,n,a,o,t,e,l,i,s,u,c])}(h,{replace:s,unstable_mask:c,state:d,target:f,preventScrollReset:g,relative:l,viewTransition:m,unstable_defaultShouldRevalidate:v,unstable_useTransitions:w});let N=!(S.isExternal||i),O=r.createElement("a",{...b,...T,href:(N?z:void 0)||S.absoluteURL||E,onClick:N?function(e){n&&n(e),e.defaultPrevented||P(e)}:n,ref:gt(t,j),target:f,"data-discover":k||"render"!==a?void 0:"true"});return _&&!k?r.createElement(r.Fragment,null,O,r.createElement(ut,{page:E})):O});wt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:l=!1,style:i,to:s,viewTransition:c,children:d,...f}=e,p=ve(s,{relative:f.relative}),h=fe(),g=r.useContext(ee),{navigator:m,basename:v}=r.useContext(le),b=null!=g&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(re);u(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Et("useViewTransitionState"),o=ve(e,{relative:t});if(!n.isTransitioning)return!1;let l=L(n.currentLocation.pathname,a)||n.currentLocation.pathname,i=L(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=P(o.pathname,i)||null!=P(o.pathname,l)}(p)&&!0===c,y=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&v&&(w=L(w,v)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,E=x===y||!l&&x.startsWith(y)&&"/"===x.charAt(k),C=null!=w&&(w===y||!l&&w.startsWith(y)&&"/"===w.charAt(y.length)),z={isActive:E,isPending:C,isTransitioning:b},_=E?n:void 0;S="function"===typeof o?o(z):[o,E?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let j="function"===typeof i?i(z):i;return r.createElement(wt,{...f,"aria-current":_,className:S,ref:t,style:j,to:s,viewTransition:c},"function"===typeof d?d(z):d)}).displayName="NavLink";var kt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:i,state:s,method:c=Ue,action:d,onSubmit:f,relative:h,preventScrollReset:g,viewTransition:m,unstable_defaultShouldRevalidate:v,...b}=e,{unstable_useTransitions:y}=r.useContext(le),x=_t(),w=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(le),a=r.useContext(se);u(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...ve(e||".",{relative:t})},i=fe();if(null==e){l.search=i.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();l.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(l.pathname="/"===l.pathname?n:U([n,l.pathname]));return p(l)}(d,{relative:h}),k="get"===c.toLowerCase()?"get":"post",S="string"===typeof d&&xt.test(d);return r.createElement("form",{ref:t,method:k,action:w,onSubmit:l?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c,l=()=>x(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:i,state:s,relative:h,preventScrollReset:g,viewTransition:m,unstable_defaultShouldRevalidate:v});y&&!1!==o?r.startTransition(()=>l()):l()},...b,"data-discover":S||"render"!==n?void 0:"true"})});function St(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Et(e){let t=r.useContext(Z);return u(t,St(e)),t}kt.displayName="Form";var Ct=0,zt=()=>`__${String(++Ct)}__`;function _t(){let{router:e}=Et("useSubmit"),{basename:t}=r.useContext(le),n=Te("useRouteId"),a=e.fetch,o=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:l,method:i,encType:s,formData:u,body:c}=Qe(e,t);if(!1===r.navigate){let e=r.fetcherKey||zt();await a(e,n,r.action||l,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:u,body:c,formMethod:r.method||i,formEncType:r.encType||s,flushSync:r.flushSync})}else await o(r.action||l,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:u,body:c,formMethod:r.method||i,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[a,o,t,n])}var jt=n(579);const Tt={es:{"home.title":"LinkIO","home.add":"Agregar","home.search":"Buscar enlaces...","home.no_links":"No hay enlaces","home.no_links_desc":"Comienza agregando tu primer enlace para construir tu biblioteca personal.","home.see_more":"Ver m\xe1s","home.enlaces":"enlaces","home.enlace":"enlace","home.delete_confirm":"\xbfEliminar enlace?","home.delete_warning":"\xbfEst\xe1s seguro de eliminar","home.cancel":"Cancelar","home.delete":"Eliminar","home.tag_all":"Todos","home.tag_favorites":"Favoritos","home.tag_work":"Trabajo","home.tag_personal":"Personal","add.title":"Agregar","add.url":"Enlace","add.icon":"Icono","add.title_field":"T\xedtulo","add.title_placeholder":"T\xedtulo del enlace","add.subtitle":"Subt\xedtulo","add.subtitle_placeholder":"Subt\xedtulo opcional","add.description":"Descripci\xf3n","add.description_placeholder":"Descripci\xf3n...","add.note":"Nota","add.note_placeholder":"Nota personal...","add.image":"Imagen","add.tags":"Etiquetas","add.cancel":"Cancelar","add.save":"Guardar","add.get_preview":"Obtener vista previa","add.upload_image":"Subir imagen","add.get_from_url":"Se obtendr\xe1 de la URL","add.new_tag_prompt":"Nueva etiqueta:","add.new_tag":"Nueva Etiqueta","add.new_tag_placeholder":"Nombre de la etiqueta","add.add":"Agregar","edit.title":"Editar","edit.cancel":"Cancelar","edit.save":"Guardar","edit.saving":"Guardando...","edit.get_preview":"Obtener vista previa","detail.back":"Atr\xe1s","detail.url":"Enlace","detail.open":"Abrir enlace","detail.edit":"Editar","detail.delete":"Eliminar","detail.delete_confirm":"\xbfEliminar enlace?","detail.delete_warning":"Esta acci\xf3n no se puede deshacer.","detail.cancel":"Cancelar","detail.description":"Descripci\xf3n","detail.note":"Nota personal","detail.added":"Agregado el","detail.more_options":"M\xe1s opciones","detail.less_options":"Menos opciones","detail.loading":"Cargando...","detail.error":"Error","detail.not_found":"No encontrado","detail.not_exist":"El enlace no existe o fue eliminado.","detail.back_home":"Volver al inicio","detail.link":"Enlace","detail.copy":"Copiar","detail.copied":"\xa1Copiado!","detail.added_on":"Agregado el","detail.deleting":"Eliminando...","config.title":"Configuraci\xf3n","config.appearance":"Apariencia","config.mode":"Modo","config.mode_desc":"Selecciona entre claro, oscuro o autom\xe1tico","config.language":"Idioma","config.language_desc":"Selecciona el idioma de la interfaz","config.tags":"Etiquetas","config.new_tag":"Nuevo tag...","config.add_tag":"Agregar etiqueta","config.about":"Acerca de LinkIO","config.about_desc":"LinkIO es tu gestor personal de enlaces organizado y visual. Guarda, categoriza y accede r\xe1pidamente a todos tus enlaces favoritos con una interfaz limpia y moderna inspirada en el dise\xf1o de Apple.","config.save":"Guardar Configuraci\xf3n","config.saving":"Guardando...","config.version":"Versi\xf3n","config.developed":"Desarrollado por","config.rights":"Todos los derechos reservados","config.light":"Claro","config.dark":"Oscuro","config.system":"Autom\xe1tico","nav.home":"Inicio","nav.add":"Agregar","nav.config":"Ajustes"},en:{"home.title":"LinkIO","home.add":"Add","home.search":"Search links...","home.no_links":"No links","home.no_links_desc":"Start by adding your first link to build your personal library.","home.see_more":"See more","home.enlaces":"links","home.enlace":"link","home.delete_confirm":"Delete link?","home.delete_warning":"Are you sure to delete","home.cancel":"Cancel","home.delete":"Delete","home.tag_all":"All","home.tag_favorites":"Favorites","home.tag_work":"Work","home.tag_personal":"Personal","add.title":"Add","add.url":"Link","add.icon":"Icon","add.title_field":"Title","add.title_placeholder":"Link title","add.subtitle":"Subtitle","add.subtitle_placeholder":"Optional subtitle","add.description":"Description","add.description_placeholder":"Description...","add.note":"Note","add.note_placeholder":"Personal note...","add.image":"Image","add.tags":"Tags","add.cancel":"Cancel","add.save":"Save","add.get_preview":"Get preview","add.upload_image":"Upload image","add.get_from_url":"Will be obtained from URL","add.new_tag_prompt":"New tag:","add.new_tag":"New Tag","add.new_tag_placeholder":"Tag name","add.add":"Add","edit.title":"Edit","edit.cancel":"Cancel","edit.save":"Save","edit.saving":"Saving...","edit.get_preview":"Get preview","detail.back":"Back","detail.url":"Link","detail.open":"Open link","detail.edit":"Edit","detail.delete":"Delete","detail.delete_confirm":"Delete link?","detail.delete_warning":"This action cannot be undone.","detail.cancel":"Cancel","detail.description":"Description","detail.note":"Personal note","detail.added":"Added on","detail.more_options":"More options","detail.less_options":"Less options","detail.loading":"Loading...","detail.error":"Error","detail.not_found":"Not found","detail.not_exist":"The link does not exist or was deleted.","detail.back_home":"Back to home","detail.link":"Link","detail.copy":"Copy","detail.copied":"Copied!","detail.added_on":"Added on","detail.deleting":"Deleting...","config.title":"Settings","config.appearance":"Appearance","config.mode":"Mode","config.mode_desc":"Select between light, dark or automatic","config.language":"Language","config.language_desc":"Select the interface language","config.tags":"Tags","config.new_tag":"New tag...","config.add_tag":"Add tag","config.about":"About LinkIO","config.about_desc":"LinkIO is your organized and visual link manager. Save, categorize and quickly access all your favorite links with a clean and modern interface inspired by Apple design.","config.save":"Save Settings","config.saving":"Saving...","config.version":"Version","config.developed":"Developed by","config.rights":"All rights reserved","config.light":"Light","config.dark":"Dark","config.system":"System","nav.home":"Home","nav.add":"Add","nav.config":"Settings"}},Pt=(0,r.createContext)(null),Nt=e=>{let{children:t}=e;const[n,a]=(0,r.useState)(()=>localStorage.getItem("linkio-language")||"es");return(0,jt.jsx)(Pt.Provider,{value:{t:e=>{var t;return(null===(t=Tt[n])||void 0===t?void 0:t[e])||Tt.es[e]||e},language:n,setLanguage:e=>{a(e),localStorage.setItem("linkio-language",e)}},children:t})},Ot=()=>{const e=(0,r.useContext)(Pt);if(!e)throw new Error("useI18n must be used within I18nProvider");return e};var Lt="-ms-",Rt="-moz-",$t="-webkit-",At="comm",Dt="rule",Mt="decl",Ft="@keyframes",It=Math.abs,Ut=String.fromCharCode,Ht=Object.assign;function Wt(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function Vt(e,t,n){return e.replace(t,n)}function qt(e,t,n){return e.indexOf(t,n)}function Qt(e,t){return 0|e.charCodeAt(t)}function Kt(e,t,n){return e.slice(t,n)}function Gt(e){return e.length}function Yt(e){return e.length}function Xt(e,t){return t.push(e),e}function Jt(e,t){return e.filter(function(e){return!Bt(e,t)})}var Zt,en,tn=1,nn=1,rn=0,an=0,on=0,ln="";function sn(e,t,n,r,a,o,l,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:tn,column:nn,length:l,return:"",siblings:i}}function un(e,t){return Ht(sn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cn(e){for(;e.root;)e=un(e.root,{children:[e]});Xt(e,e.siblings)}function dn(){return on=an>0?Qt(ln,--an):0,nn--,10===on&&(nn=1,tn--),on}function fn(){return on=an<rn?Qt(ln,an++):0,nn++,10===on&&(nn=1,tn++),on}function pn(){return Qt(ln,an)}function hn(){return an}function gn(e,t){return Kt(ln,e,t)}function mn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vn(e){return tn=nn=1,rn=Gt(ln=e),an=0,[]}function bn(e){return ln="",e}function yn(e){return Wt(gn(an-1,kn(91===e?e+2:40===e?e+1:e)))}function xn(e){for(;(on=pn())&&on<33;)fn();return mn(e)>2||mn(on)>3?"":" "}function wn(e,t){for(;--t&&fn()&&!(on<48||on>102||on>57&&on<65||on>70&&on<97););return gn(e,hn()+(t<6&&32==pn()&&32==fn()))}function kn(e){for(;fn();)switch(on){case e:return an;case 34:case 39:34!==e&&39!==e&&kn(on);break;case 40:41===e&&kn(e);break;case 92:fn()}return an}function Sn(e,t){for(;fn()&&e+on!==57&&(e+on!==84||47!==pn()););return"/*"+gn(t,an-1)+"*"+Ut(47===e?e:fn())}function En(e){for(;!mn(pn());)fn();return gn(e,an)}function Cn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Mt:return e.return=e.return||e.value;case At:return"";case Ft:return e.return=e.value+"{"+Cn(e.children,r)+"}";case Dt:if(!Gt(e.value=e.props.join(",")))return""}return Gt(n=Cn(e.children,r))?e.return=e.value+"{"+n+"}":""}function _n(e,t,n){switch(function(e,t){return 45^Qt(e,0)?(((t<<2^Qt(e,0))<<2^Qt(e,1))<<2^Qt(e,2))<<2^Qt(e,3):0}(e,t)){case 5103:return $t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return $t+e+e;case 4855:return $t+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $t+e+Rt+e+Lt+e+e;case 5936:switch(Qt(e,t+11)){case 114:return $t+e+Lt+Vt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $t+e+Lt+Vt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $t+e+Lt+Vt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $t+e+Lt+e+e;case 6165:return $t+e+Lt+"flex-"+e+e;case 5187:return $t+e+Vt(e,/(\w+).+(:[^]+)/,$t+"box-$1$2"+Lt+"flex-$1$2")+e;case 5443:return $t+e+Lt+"flex-item-"+Vt(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":Lt+"grid-row-"+Vt(e,/flex-|-self/g,""))+e;case 4675:return $t+e+Lt+"flex-line-pack"+Vt(e,/align-content|flex-|-self/g,"")+e;case 5548:return $t+e+Lt+Vt(e,"shrink","negative")+e;case 5292:return $t+e+Lt+Vt(e,"basis","preferred-size")+e;case 6060:return $t+"box-"+Vt(e,"-grow","")+$t+e+Lt+Vt(e,"grow","positive")+e;case 4554:return $t+Vt(e,/([^-])(transform)/g,"$1"+$t+"$2")+e;case 6187:return Vt(Vt(Vt(e,/(zoom-|grab)/,$t+"$1"),/(image-set)/,$t+"$1"),e,"")+e;case 5495:case 3959:return Vt(e,/(image-set\([^]*)/,$t+"$1$`$1");case 4968:return Vt(Vt(e,/(.+:)(flex-)?(.*)/,$t+"box-pack:$3"+Lt+"flex-pack:$3"),/space-between/,"justify")+$t+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return Lt+"grid-column-align"+Kt(e,t)+e;break;case 2592:case 3360:return Lt+Vt(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Bt(e.props,/grid-\w+-end/)})?~qt(e+(n=n[t].value),"span",0)?e:Lt+Vt(e,"-start","")+e+Lt+"grid-row-span:"+(~qt(n,"span",0)?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":Lt+Vt(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Bt(e.props,/grid-\w+-start/)})?e:Lt+Vt(Vt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Vt(e,/(.+)-inline(.+)/,$t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(Qt(e,t+1)){case 109:if(45!==Qt(e,t+4))break;case 102:return Vt(e,/(.+:)(.+)-([^]+)/,"$1"+$t+"$2-$3$1"+Rt+(108==Qt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~qt(e,"stretch",0)?_n(Vt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Vt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,l,i){return Lt+n+":"+r+i+(a?Lt+n+"-span:"+(o?l:+l-+r)+i:"")+e});case 4949:if(121===Qt(e,t+6))return Vt(e,":",":"+$t)+e;break;case 6444:switch(Qt(e,45===Qt(e,14)?18:11)){case 120:return Vt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$t+(45===Qt(e,14)?"inline-":"")+"box$3$1"+$t+"$2$3$1"+Lt+"$2box$3")+e;case 100:return Vt(e,":",":"+Lt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Vt(e,"scroll-","scroll-snap-")+e}return e}function jn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Mt:return void(e.return=_n(e.value,e.length,n));case Ft:return Cn([un(e,{value:Vt(e.value,"@","@"+$t)})],r);case Dt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Bt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(un(e,{props:[Vt(t,/:(read-\w+)/,":-moz-$1")]})),cn(un(e,{props:[t]})),Ht(e,{props:Jt(n,r)});break;case"::placeholder":cn(un(e,{props:[Vt(t,/:(plac\w+)/,":"+$t+"input-$1")]})),cn(un(e,{props:[Vt(t,/:(plac\w+)/,":-moz-$1")]})),cn(un(e,{props:[Vt(t,/:(plac\w+)/,Lt+"input-$1")]})),cn(un(e,{props:[t]})),Ht(e,{props:Jt(n,r)})}return""})}}function Tn(e){return bn(Pn("",null,null,null,[""],e=vn(e),0,[0],e))}function Pn(e,t,n,r,a,o,l,i,s){for(var u=0,c=0,d=l,f=0,p=0,h=0,g=1,m=1,v=1,b=0,y="",x=a,w=o,k=r,S=y;m;)switch(h=b,b=fn()){case 40:if(108!=h&&58==Qt(S,d-1)){-1!=qt(S+=Vt(yn(b),"&","&\f"),"&\f",It(u?i[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=yn(b);break;case 9:case 10:case 13:case 32:S+=xn(h);break;case 92:S+=wn(hn()-1,7);continue;case 47:switch(pn()){case 42:case 47:Xt(On(Sn(fn(),hn()),t,n,s),s),5!=mn(h||1)&&5!=mn(pn()||1)||!Gt(S)||" "===Kt(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*g:i[u++]=Gt(S)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+c:-1==v&&(S=Vt(S,/\f/g,"")),p>0&&(Gt(S)-d||0===g&&47===h)&&Xt(p>32?Ln(S+";",r,n,d-1,s):Ln(Vt(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Xt(k=Nn(S,t,n,u,c,a,i,y,x=[],w=[],d,o),o),123===b)if(0===c)Pn(S,t,k,k,x,o,d,i,w);else{switch(f){case 99:if(110===Qt(S,3))break;case 108:if(97===Qt(S,2))break;default:c=0;case 100:case 109:case 115:}c?Pn(e,k,k,r&&Xt(Nn(e,k,k,0,0,a,i,y,a,x=[],d,w),w),a,w,d,i,r?x:w):Pn(S,k,k,k,[""],w,0,i,w)}}u=c=p=0,g=v=1,y=S="",d=l;break;case 58:d=1+Gt(S),p=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==dn())continue;switch(S+=Ut(b),b*g){case 38:v=c>0?1:(S+="\f",-1);break;case 44:i[u++]=(Gt(S)-1)*v,v=1;break;case 64:45===pn()&&(S+=yn(fn())),f=pn(),c=d=Gt(y=S+=En(hn())),b++;break;case 45:45===h&&2==Gt(S)&&(g=0)}}return o}function Nn(e,t,n,r,a,o,l,i,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Yt(p),g=0,m=0,v=0;g<r;++g)for(var b=0,y=Kt(e,f+1,f=It(m=l[g])),x=e;b<h;++b)(x=Wt(m>0?p[b]+" "+y:Vt(y,/&\f/g,p[b])))&&(s[v++]=x);return sn(e,t,n,0===a?Dt:i,s,u,c,d)}function On(e,t,n,r){return sn(e,t,n,At,Ut(on),Kt(e,2,-2),0,r)}function Ln(e,t,n,r,a){return sn(e,t,n,Mt,Kt(e,0,r),Kt(e,r+1,-1),r,a)}const Rn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",$n="active",An="data-styled-version",Dn="6.4.1",Mn="/*!sc*/\n",Fn="undefined"!=typeof window&&"undefined"!=typeof document;function In(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const Un=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(en=null!==(Zt=In("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==Zt?Zt:In("SC_DISABLE_SPEEDY"))&&void 0!==en?en:"undefined"==typeof process||void 0==={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}||!1),Hn="sc-keyframes-";function Wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let Bn=new Map,Vn=new Map,qn=1;const Qn=e=>{if(Bn.has(e))return Bn.get(e);for(;Vn.has(qn);)qn++;const t=qn++;return Bn.set(e,t),Vn.set(t,e),t},Kn=e=>Vn.get(e),Gn=(e,t)=>{qn=t+1,Bn.set(e,t),Vn.set(t,e)},Yn=(new Set,Object.freeze([])),Xn=Object.freeze({});function Jn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Xn;return e.theme!==n.theme&&e.theme||t||n.theme}const Zn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,er=/(^-|-$)/g;function tr(e){return e.replace(Zn,"-").replace(er,"")}const nr=/(a)(d)/gi,rr=e=>String.fromCharCode(e+(e>25?39:97));function ar(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rr(t%52)+n;return(rr(t%52)+n).replace(nr,"$1-$2")}const or=5381,lr=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ir=e=>lr(or,e);function sr(e){return ar(ir(e)>>>0)}function ur(e){return e.displayName||e.name||"Component"}function cr(e){return"string"==typeof e&&!0}function dr(e){return cr(e)?`styled.${e}`:`Styled(${ur(e)})`}const fr=Symbol.for("react.memo"),pr=Symbol.for("react.forward_ref"),hr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},gr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vr={[pr]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[fr]:mr};function br(e){return("type"in(t=e)&&t.type.$$typeof)===fr?mr:"$$typeof"in e?vr[e.$$typeof]:hr;var t}const yr=Object.defineProperty,xr=Object.getOwnPropertyNames,wr=Object.getOwnPropertySymbols,kr=Object.getOwnPropertyDescriptor,Sr=Object.getPrototypeOf,Er=Object.prototype;function Cr(e,t,n){if("string"!=typeof t){const r=Sr(t);r&&r!==Er&&Cr(e,r,n);const a=xr(t).concat(wr(t)),o=br(e),l=br(t);for(let i=0;i<a.length;++i){const r=a[i];if(!(r in gr||n&&n[r]||l&&r in l||o&&r in o)){const n=kr(t,r);try{yr(e,r,n)}catch(e){}}}}return e}function zr(e){return"function"==typeof e}function _r(e){return"object"==typeof e&&"styledComponentId"in e}function jr(e,t){return e&&t?e+" "+t:e||t||""}function Tr(e,t){return e.join(t||"")}function Pr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nr(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!Pr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Nr(e[n],t[n]);else if(Pr(t))for(const n in t)e[n]=Nr(e[n],t[n]);return e}function Or(e,t){Object.defineProperty(e,"toString",{value:t})}const Lr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Wn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let a=0,o=t.length;a<o;a++)this.tag.insertRule(n,t[a])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n;for(let o=r;o<a;o++)t+=this.tag.getRule(o)+Mn;return t}},Rr=`style[${Rn}][${An}="${Dn}"]`,$r=new RegExp(`^${Rn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ar=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,Dr=e=>{if(!e)return document;if(Ar(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Ar(t))return t}return document},Mr=(e,t,n)=>{const r=n.split(",");let a;for(let o=0,l=r.length;o<l;o++)(a=r[o])&&e.registerName(t,a)},Fr=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Mn),a=[];for(let o=0,l=r.length;o<l;o++){const t=r[o].trim();if(!t)continue;const n=t.match($r);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(Gn(r,t),Mr(e,r,n[3]),e.getTag().insertRules(t,a)),a.length=0}else a.push(t)}},Ir=e=>{const t=Dr(e.options.target).querySelectorAll(Rr);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(Rn)!==$n&&(Fr(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let Ur=!1;function Hr(){if(!1!==Ur)return Ur;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ur=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Ur=t.getAttribute("content")||void 0}return Ur=n.nc}const Wr=(e,t)=>{const n=document.head,r=e||n,a=document.createElement("style"),o=(e=>{const t=Array.from(e.querySelectorAll(`style[${Rn}]`));return t[t.length-1]})(r),l=void 0!==o?o.nextSibling:null;a.setAttribute(Rn,$n),a.setAttribute(An,Dn);const i=t||Hr();return i&&a.setAttribute("nonce",i),r.insertBefore(a,l),a},Br=class{constructor(e,t){this.element=Wr(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,a=n.length;r<a;r++){const t=n[r];if(t.ownerNode===e)return t}throw Wn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Vr=class{constructor(e,t){this.element=Wr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let qr=Fn;const Qr={isServer:!Fn,useCSSOMInjection:!Un};class Kr{static registerId(e){return Qn(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},Qr),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Fn&&qr&&(qr=!1,Ir(this)),Or(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let a=0;a<n;a++){const n=Kn(a);if(void 0===n)continue;const o=e.names.get(n);if(void 0===o||!o.size)continue;const l=t.getGroup(a);if(0===l.length)continue;const i=Rn+".g"+a+'[id="'+n+'"]';let s="";for(const e of o)e.length>0&&(s+=e+",");r+=l+i+'{content:"'+s+'"}'+Mn}return r})(this))}rehydrate(){!this.server&&Fn&&Ir(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new Kr(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Fn&&e.target!==this.options.target&&Dr(this.options.target)!==Dr(e.target)&&Ir(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new Br(n,r):new Vr(n,r)})(this.options),new Lr(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){Qn(e),e.startsWith(Hn)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qn(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Qn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Gr=new WeakSet,Yr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Yr||e.startsWith("--")?String(t).trim():t+"px"}const Jr=47;function Zr(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const ea=Symbol.for("sc-keyframes");function ta(e){return zr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const na=e=>null==e||!1===e||""===e,ra=Symbol.for("react.client.reference");function aa(e){return e.$$typeof===ra}function oa(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!na(r)&&(Array.isArray(r)&&Gr.has(r)||zr(r)?t.push(Zr(n)+":",r,";"):Pr(r)?(t.push(n+" {"),oa(r,t),t.push("}")):t.push(Zr(n)+": "+Xr(n,r)+";"))}}function la(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(na(e))return a;const o=typeof e;if("string"===o)return a.push(e),a;if("function"===o){if(aa(e))return a;if(ta(e)&&t){return la(e(t),t,n,r,a)}return a.push(e),a}if(Array.isArray(e)){for(let o=0;o<e.length;o++)la(e[o],t,n,r,a);return a}return _r(e)?(a.push(`.${e.styledComponentId}`),a):function(e){return"object"==typeof e&&null!==e&&ea in e}(e)?(n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a):aa(e)?a:Pr(e)?(oa(e,a),a):(a.push(e.toString()),a)}const ia=ir(Dn);class sa{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=lr(ia,t),this.baseStyle=n,Kr.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let a="";for(let r=0;r<this.rules.length;r++){const o=this.rules[r];if("string"==typeof o)a+=o;else if(o)if(ta(o)){const r=o(e);"string"==typeof r?a+=r:null!=r&&!1!==r&&(a+=Tr(la(r,e,t,n)))}else a+=Tr(la(o,e,t,n))}if(a){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+a:a;let o=this.dynamicNameCache.get(e);if(!o){if(o=ar(lr(lr(this.baseHash,n.hash),a)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,o)}if(!t.hasNameForId(this.componentId,o)){const e=n(a,"."+o,void 0,this.componentId);t.insertRules(this.componentId,o,e)}r=jr(r,o)}}return r}}const ua=/&/g;function ca(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function da(e){const t=e.length;let n="",r=0,a=0,o=0,l=!1,i=!1;for(let s=0;s<t;s++){const u=e.charCodeAt(s);if(0!==o||l||u!==Jr||42!==e.charCodeAt(s+1))if(l)42===u&&e.charCodeAt(s+1)===Jr&&(l=!1,s++);else if(34!==u&&39!==u||ca(e,s)){if(0===o)if(123===u)a++;else if(125===u){if(a--,a<0){i=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,a=0,s=n-1,r=n;continue}0===a&&(n+=e.substring(r,s+1),r=s+1)}else 59===u&&0===a&&(n+=e.substring(r,s+1),r=s+1)}else 0===o?o=u:o===u&&(o=0);else l=!0,s++}return i||0!==a||0!==o?(r<t&&0===a&&0===o&&(n+=e.substring(r)),n):e}function fa(e,t){const n=t+" ",r=","+n;for(let a=0;a<e.length;a++){const o=e[a];if("rule"===o.type){o.value=(n+o.value).replaceAll(",",r);const e=o.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];o.props=t}Array.isArray(o.children)&&"@keyframes"!==o.type&&fa(o.children,t)}return e}function pa(){let e,t,n,{options:r=Xn,plugins:a=Yn}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn;const o=(n,r,a)=>a.startsWith(t)&&a.endsWith(t)&&a.replaceAll(t,"").length>0?`.${e}`:n,l=a.slice();l.push(e=>{e.type===Dt&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(ua,t).replace(n,o))}),r.prefix&&l.push(jn),l.push(zn);let i=[];const s=function(e){var t=Yt(e);return function(n,r,a,o){for(var l="",i=0;i<t;i++)l+=e[i](n,r,a,o)||"";return l}}(l.concat((d=e=>i.push(e),function(e){e.root||(e=e.return)&&d(e)}))),u=function(a){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=o,n=void 0;const u=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return da(e);const r=e.length;let a="",o=0,l=0,i=0,s=0,u=0,c=!1;for(;l<r;){const t=e.charCodeAt(l);if(34!==t&&39!==t||ca(e,l))if(0===i)if(t===Jr&&l+1<r&&42===e.charCodeAt(l+1)){for(l+=2;l+1<r&&(42!==e.charCodeAt(l)||e.charCodeAt(l+1)!==Jr);)l++;l+=2}else if(40!==t)if(41!==t)if(s>0)l++;else if(42===t&&l+1<r&&e.charCodeAt(l+1)===Jr)a+=e.substring(o,l),l+=2,o=l,c=!0;else if(t===Jr&&l+1<r&&e.charCodeAt(l+1)===Jr){for(a+=e.substring(o,l);l<r&&10!==e.charCodeAt(l);)l++;o=l,c=!0}else 123===t?u++:125===t&&u--,l++;else s>0&&s--,l++;else s++,l++;else l++;else 0===i?i=t:i===t&&(i=0),l++}return c?(o<r&&(a+=e.substring(o)),0===u?a:da(a)):0===u?e:da(e)}(a);let c=Tn(l||o?l+" "+o+" { "+u+" }":u);return r.namespace&&(c=fa(c,r.namespace)),i=[],Cn(c,s),i},c=r;var d;let f=or;for(let p=0;p<a.length;p++)a[p].name||Wn(15),f=lr(f,a[p].name);return(null==c?void 0:c.namespace)&&(f=lr(f,c.namespace)),(null==c?void 0:c.prefix)&&(f=lr(f,"p")),u.hash=f!==or?f.toString():"",u}const ha=new Kr,ga=pa(),ma=r.createContext({shouldForwardProp:void 0,styleSheet:ha,stylis:ga,stylisPlugins:void 0});ma.Consumer;function va(){return r.useContext(ma)}const ba=r.createContext(void 0);ba.Consumer;const ya=Object.prototype.hasOwnProperty,xa={};function wa(e,t){const n="string"!=typeof e?"sc":tr(e);xa[n]=(xa[n]||0)+1;const r=n+"-"+sr(Dn+n+xa[n]);return t?t+"-"+r:r}function ka(e,t,n){const a=_r(e),o=e,l=!cr(e),{attrs:i=Yn,componentId:s=wa(t.displayName,t.parentComponentId),displayName:u=dr(e)}=t,c=t.displayName&&t.componentId?tr(t.displayName)+"-"+t.componentId:t.componentId||s,d=a&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:f}=t;if(a&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;f=(t,r)=>e(t,r)&&n(t,r)}else f=e}const p=new sa(n,c,a?o.componentStyle:void 0);function h(e,t){return function(e,t,n){const{attrs:a,componentStyle:o,defaultProps:l,foldedComponentIds:i,styledComponentId:s,target:u}=e,c=r.useContext(ba),d=va(),f=e.shouldForwardProp||d.shouldForwardProp,p=Jn(t,c,l)||Xn;let h,g;{const e=r.useRef(null),n=e.current;if(null!==n&&n[1]===p&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===o&&function(e,t,n){const r=e,a=t;let o=0;for(const l in a)if(ya.call(a,l)&&(o++,r[l]!==a[l]))return!1;return o===n}(n[0],t,n[4]))h=n[5],g=n[6];else{h=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),a=e.length>1;for(let o=0;o<e.length;o++){const n=e[o],l=zr(n)?n(a?Object.assign({},r):r):n;for(const e in l)"className"===e?r.className=jr(r.className,l[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),l[e]):e in t&&void 0===t[e]||(r[e]=l[e])}return"className"in t&&"string"==typeof t.className&&(r.className=jr(r.className,t.className)),r}(a,t,p),g=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(o,h,d.styleSheet,d.stylis);let n=0;for(const e in t)ya.call(t,e)&&n++;e.current=[t,p,d.styleSheet,d.stylis,n,h,g,o]}}const m=h.as||u,v=function(e,t,n,r){const a={};for(const o in e)void 0===e[o]||"$"===o[0]||"as"===o||"theme"===o&&e.theme===n||("forwardedAs"===o?a.as=e.forwardedAs:r&&!r(o,t)||(a[o]=e[o]));return a}(h,m,p,f);let b=jr(i,s);return g&&(b+=" "+g),h.className&&(b+=" "+h.className),v[cr(m)&&m.includes("-")?"class":"className"]=b,n&&(v.ref=n),(0,r.createElement)(m,v)}(g,e,t)}h.displayName=u;let g=r.forwardRef(h);return g.attrs=d,g.componentStyle=p,g.displayName=u,g.shouldForwardProp=f,g.foldedComponentIds=a?jr(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=c,g.target=a?o.target:e,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=a?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const a of n)Nr(e,a,!0);return e}({},o.defaultProps,e):e}}),Or(g,()=>`.${g.styledComponentId}`),l&&Cr(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}var Sa=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ea(e,t){const n=[e[0]];for(let r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}const Ca=e=>(Gr.add(e),e);function za(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(zr(e)||Pr(e))return Ca(la(Ea(Yn,[e,...n])));const a=e;return 0===n.length&&1===a.length&&"string"==typeof a[0]?la(a):Ca(la(Ea(a,n)))}function _a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Xn;if(!t)throw Wn(1,t);const r=function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];return e(t,n,za(r,...o))};return r.attrs=r=>_a(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>_a(e,t,Object.assign(Object.assign({},n),r)),r}const ja=e=>_a(ka,e),Ta=ja;Sa.forEach(e=>{Ta[e]=ja(e)});const Pa=Ta.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 0 var(--space-md) 100px;
`,Na=Ta.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-lg) 0;
  position: relative;
`,Oa=Ta.h1`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -1px;
  margin: 0;
  text-align: center;
`,La=Ta.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`,Ra=Ta.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,$a=Ta.div`
  margin-bottom: var(--space-lg);
`,Aa=Ta.h2`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: var(--space-xl) 0 var(--space-md);
`,Da=Ta.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  margin-bottom: var(--space-xl);
`,Ma=Ta.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);
  width: 100%;
`,Fa=Ta.div`
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--color-text-tertiary);
    opacity: 0.5;
    margin-bottom: var(--space-md);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-sm);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }
`,Ia=(Ta.div`
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  padding: var(--space-lg) 0;
  margin-bottom: var(--space-xl);
`,Ta.div`
  text-align: center;
  
  span {
    display: block;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-primary);
  }
  
  label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }
`,()=>{var e;return null===(e=window.electronAPI)||void 0===e?void 0:e.links});function Ua(e){let t=e.tags;if("string"===typeof t)try{t=JSON.parse(t)}catch{t=[]}return Array.isArray(t)||(t=[]),{...e,tags:t}}var Ha={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wa=r.createContext&&r.createContext(Ha),Ba=["attr","size","title"];function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(null,arguments)}function qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qa(Object(n),!0).forEach(function(t){Ka(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ka(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e){return e&&e.map((e,t)=>r.createElement(e.tag,Qa({key:t},e.attr),Ga(e.child)))}function Ya(e){return t=>r.createElement(Xa,Va({attr:Qa({},e.attr)},t),Ga(e.child))}function Xa(e){var t=t=>{var n,{attr:a,size:o,title:l}=e,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Ba),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Va({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:n,style:Qa(Qa({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==Wa?r.createElement(Wa.Consumer,null,e=>t(e)):t(Ha)}function Ja(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"},child:[]}]})(e)}function Za(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"},child:[]}]})(e)}function eo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"},child:[]}]})(e)}function to(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"},child:[]}]})(e)}function no(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(e)}function ro(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"},child:[]}]})(e)}function ao(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"},child:[]}]})(e)}function oo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},child:[]}]})(e)}function lo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"},child:[]}]})(e)}function io(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"},child:[]}]})(e)}function so(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"},child:[]}]})(e)}function uo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},child:[]}]})(e)}function co(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"},child:[]}]})(e)}function fo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(e)}function po(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(e)}const ho=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(to,{size:t,color:n})},go=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(ro,{size:t,color:n})},mo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(io,{size:t,color:n})},vo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(eo,{size:t,color:n})},bo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(co,{size:t,color:n})},yo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(fo,{size:t,color:n})},xo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(lo,{size:t,color:n})},wo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(no,{size:t,color:n})},ko=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(ao,{size:t,color:n})},So=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(po,{size:t,color:n})},Eo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(Ja,{size:t,color:n})},Co=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(so,{size:t,color:n})},zo=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(uo,{size:t,color:n})},_o=e=>{let{size:t=24,color:n="currentColor"}=e;return(0,jt.jsx)(oo,{size:t,color:n})},jo=e=>{let{size:t=24,color:n="currentColor",style:r}=e;return(0,jt.jsx)(Za,{size:t,color:n,style:r})},To=()=>{const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)("All"),[o,l]=(0,r.useState)(["All"]);return(0,r.useEffect)(()=>{(async()=>{try{var e;const t=await(null===(e=(()=>{var e;return null===(e=window.electronAPI)||void 0===e?void 0:e.links})())||void 0===e?void 0:e.getAll())||[],n=new Set(["All"]);t.forEach(e=>{if(e.tags){let t=e.tags;if("string"===typeof t)try{t=JSON.parse(t)}catch{t=[]}Array.isArray(t)&&t.forEach(e=>{const t="string"===typeof e?e:e.name;t&&n.add(t)})}}),l(Array.from(n))}catch(t){console.error("Error fetching tags:",t)}})()},[]),{searchQuery:e,setSearchQuery:t,activeTag:n,setActiveTag:a,tags:o}},Po=Ta.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto var(--space-xl);
`,No=Ta.div`
  position: relative;
  margin-bottom: var(--space-md);
`,Oo=Ta.div`
  position: absolute;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  pointer-events: none;
  
  svg {
    width: 20px;
    height: 20px;
  }
`,Lo=Ta.input`
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-md) var(--space-md) var(--space-md) 48px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  background-color: var(--color-card-bg);
  transition: all 0.2s ease;
  color: var(--color-text-primary);
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    outline: none;
    border-color: #fd7a2d;
    box-shadow: 0 0 0 4px rgba(253, 122, 45, 0.1);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
`,Ro=Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`,$o=Ta.button`
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border: 1px solid ${e=>{let{$active:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-border)"}};
  background-color: ${e=>{let{$active:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-card-bg)"}};
  color: ${e=>{let{$active:t}=e;return t?"white":"var(--color-text-secondary)"}};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    border-color: #fd7a2d;
    color: ${e=>{let{$active:t}=e;return t?"white":"#fd7a2d"}};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Ao=(Ta.button`
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border: none;
  background-color: transparent;
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-text-secondary);
  }
`,()=>{const{searchQuery:e,setSearchQuery:t,activeTag:n,setActiveTag:r,tags:a}=To(),{t:o,language:l}=Ot(),i=e=>"All"===e?o("home.tag_all"):"Favorites"===e?o("home.tag_favorites"):e;return(0,jt.jsxs)(Po,{children:[(0,jt.jsxs)(No,{children:[(0,jt.jsx)(Oo,{children:(0,jt.jsx)(Co,{size:20})}),(0,jt.jsx)(Lo,{type:"text",placeholder:o("home.search"),value:e,onChange:e=>t(e.target.value)})]}),(0,jt.jsx)(Ro,{children:a.map(e=>(0,jt.jsx)($o,{$active:n===e,onClick:()=>r(e),children:i(e)},e))})]})}),Do=Ta.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: 1px solid var(--color-border);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-xl);
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
    border-color: #fd7a2d;
    
    &::before {
      border-color: #fd7a2d;
    }
    
    img {
      transform: scale(1.05);
    }
    
    .card-arrow span {
      color: #fd7a2d;
    }
    .card-arrow svg {
      transform: translateX(4px);
      color: #fd7a2d;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    border-radius: var(--radius-lg);
  }
`,Mo=Ta.div`
  width: 100%;
  height: 140px;
  max-height: 140px;
  background: var(--surface-secondary);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Fo=Ta.div`
  padding: var(--space-lg) var(--space-xl);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`,Io=Ta.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
`,Uo=Ta.div`
  width: 44px;
  height: 44px;
  background-color: ${e=>{let{$hasIcon:t}=e;return t?"var(--color-primary-light)":"var(--color-background)"}};
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid ${e=>{let{$hasIcon:t}=e;return t?"#fd7a2d":"var(--color-border)"}};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  img, svg {
    width: 24px;
    height: 24px;
  }
  
  img {
    object-fit: contain;
    border-radius: var(--radius-sm);
  }
`,Ho=Ta.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Wo=Ta.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: var(--space-xxs) 0 var(--space-md);
  word-break: break-all;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
`,Bo=Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: auto;
`,Vo=Ta.span`
  padding: 6px var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 500;
  background-color: ${e=>{let{$background:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,qo=Ta.div`
  margin-top: var(--space-md);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-xs);
  
  span {
    font-size: var(--font-size-sm);
    color: #fd7a2d;
    font-weight: 500;
    letter-spacing: -0.2px;
    transition: color 0.3s ease;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #fd7a2d;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.3s ease;
  }
`,Qo=e=>{let{imageUrl:t,title:n,url:a,iconUrl:o,tags:l,id:i}=e;const s=ge(),{t:u}=Ot(),{handleMouseEnter:c,handleMouseLeave:d}=(()=>{const[e,t]=(0,r.useState)(!1);return{isHovered:e,handleMouseEnter:()=>t(!0),handleMouseLeave:()=>t(!1)}})(),f=e=>"Favorites"===e?u("home.tag_favorites"):"Work"===e?u("home.tag_work"):"Personal"===e?u("home.tag_personal"):"All"===e?u("home.tag_all"):e;return(0,jt.jsxs)(Do,{onMouseEnter:c,onMouseLeave:d,onClick:()=>{s(`/link/${i}`)},style:{cursor:"pointer"},children:[t&&(0,jt.jsx)(Mo,{children:(0,jt.jsx)("img",{src:t,alt:n})}),(0,jt.jsxs)(Fo,{children:[(0,jt.jsxs)(Io,{children:[o?(0,jt.jsx)("img",{src:o,alt:"Website icon"}):(0,jt.jsx)(Uo,{children:(0,jt.jsx)(bo,{size:24,color:"currentColor"})}),(0,jt.jsx)(Ho,{children:n})]}),(0,jt.jsx)(Wo,{children:a}),(0,jt.jsx)(Bo,{children:l.map((e,t)=>{const n=(e=>"string"===typeof e?{name:e,background:"#e3f2fd",color:"#1976d2"}:{name:e.name||"",background:e.background||"#e3f2fd",color:e.color||"#1976d2"})(e),r="string"===typeof e?e:e.name||"";return(0,jt.jsx)(Vo,{$background:n.background,$color:n.color,children:f(r)},t)})}),(0,jt.jsxs)(qo,{className:"card-arrow",children:[(0,jt.jsx)("span",{children:u("home.see_more")}),(0,jt.jsx)(vo,{size:24,color:"currentColor"})]})]})]})},Ko=()=>{const e=ge(),{t:t}=Ot(),{filteredLinks:n,links:a,deleteLink:o}=(()=>{const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)([]),[o,l]=(0,r.useState)(""),[i,s]=(0,r.useState)("All"),[u,c]=(0,r.useState)(!0);(0,r.useEffect)(()=>{d()},[]),(0,r.useEffect)(()=>{const t=e.filter(e=>{var t,n;const r=e.tags.map(e=>"string"===typeof e?e:e.name),a="All"===i||r.includes(i),l=""===o||(null===(t=e.title)||void 0===t?void 0:t.toLowerCase().includes(o.toLowerCase()))||(null===(n=e.url)||void 0===n?void 0:n.toLowerCase().includes(o.toLowerCase()));return a&&l});a(t)},[e,o,i]);const d=async()=>{try{var e;const n=await(null===(e=Ia())||void 0===e?void 0:e.getAll());t((n||[]).map(Ua))}catch(n){console.error("Error fetching links:",n)}finally{c(!1)}};return{links:e,filteredLinks:n,searchQuery:o,setSearchQuery:l,activeTag:i,setActiveTag:s,addLink:async e=>{try{var n;const r=await(null===(n=Ia())||void 0===n?void 0:n.create(e));return t(e=>[Ua(r),...e]),r}catch(r){throw console.error("Error adding link:",r),r}},deleteLink:async e=>{try{var n;await(null===(n=Ia())||void 0===n?void 0:n.delete(e)),t(t=>t.filter(t=>t.id!==e))}catch(r){throw console.error("Error deleting link:",r),r}},loading:u}})(),[l,i]=(0,r.useState)(null);return(0,jt.jsxs)(Pa,{children:[(0,jt.jsxs)(Na,{children:[(0,jt.jsx)(Oa,{children:t("home.title")}),(0,jt.jsxs)(La,{onClick:()=>e("/add"),children:[(0,jt.jsx)(xo,{size:18,color:"white"}),t("home.add")]})]}),(0,jt.jsxs)(Ra,{children:[(0,jt.jsx)(Ao,{}),a.length>0&&(0,jt.jsx)(Da,{}),n.length>0?(0,jt.jsxs)(jt.Fragment,{children:[(0,jt.jsx)($a,{children:(0,jt.jsxs)(Aa,{children:[n.length," ",1===n.length?t("home.enlace"):t("home.enlaces")]})}),(0,jt.jsx)(Ma,{children:n.map(e=>(0,jt.jsx)(Qo,{imageUrl:e.imageUrl,title:e.title,url:e.url,iconUrl:e.iconUrl,tags:e.tags,id:e.id},e.id))})]}):(0,jt.jsxs)(Fa,{children:[(0,jt.jsx)(ko,{size:64}),(0,jt.jsx)("h3",{children:t("home.no_links")}),(0,jt.jsx)("p",{children:t("home.no_links_desc")})]})]}),l&&(0,jt.jsx)("div",{onClick:()=>i(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:(0,jt.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{backgroundColor:"white",borderRadius:"20px",padding:"28px",width:"90%",maxWidth:"360px",textAlign:"center",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.2)"},children:[(0,jt.jsx)("h2",{style:{fontSize:"20px",fontWeight:"600",color:"var(--color-text-primary)",margin:"0 0 8px"},children:t("home.delete_confirm")}),(0,jt.jsxs)("p",{style:{fontSize:"15px",color:"var(--color-text-secondary)",margin:"0 0 24px"},children:[t("home.delete_warning"),' "',l.title,'"?']}),(0,jt.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,jt.jsx)("button",{onClick:()=>i(null),style:{flex:1,padding:"14px 20px",backgroundColor:"var(--color-background)",color:"var(--color-text-primary)",border:"none",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},children:t("home.cancel")}),(0,jt.jsx)("button",{onClick:async()=>{l&&(await o(l.id),i(null))},style:{flex:1,padding:"14px 20px",backgroundColor:"var(--color-danger)",color:"white",border:"none",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},children:t("home.delete")})]})]})})]})},Go=Ta.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: var(--space-md) var(--space-md) 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`,Yo=Ta.form`
  width: 100%;
  max-width: 600px;
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  box-sizing: border-box;
`,Xo=Ta.div`
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  box-sizing: border-box;
`,Jo=Ta.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`,Zo=Ta.label`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  padding-left: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,el=Ta.input`
  width: 100%;
  padding: var(--space-md) var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: #fd7a2d;
    box-shadow: 0 0 0 4px rgba(253, 122, 45, 0.15);
  }
  
  &.error {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.15);
  }
`,tl=Ta.textarea`
  width: 100%;
  min-height: 100px;
  padding: var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  resize: vertical;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: #fd7a2d;
    box-shadow: 0 0 0 4px rgba(253, 122, 45, 0.15);
  }
`,nl=Ta.div`
  width: 100%;
  height: 180px;
  background: var(--color-background);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--color-border);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,rl=Ta.button`
  width: 100%;
  height: 120px;
  background: var(--color-background);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: #fd7a2d;
    opacity: 0.6;
    margin-bottom: var(--space-xs);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--color-text-tertiary);
    margin: 0;
  }
  
  &:hover {
    border-color: #fd7a2d;
    background: rgba(253, 122, 45, 0.1);
  }
`,al=Ta.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: var(--surface-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`,ol=(Ta.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-background);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  
  img {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
    background: white;
    object-fit: contain;
  }
`,Ta.button`
  padding: var(--space-sm) var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-danger);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 59, 48, 0.1);
  }
`,Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`),ll=Ta.button`
  padding: var(--space-sm) var(--space-md);
  background: ${e=>e.$selected?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-background)"};
  border: 1px solid ${e=>e.$selected?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-border)"};
  border-radius: var(--radius-full);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: ${e=>e.$selected?"white":"var(--color-text-secondary)"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #fd7a2d;
    color: ${e=>e.$selected?"white":"#fd7a2d"};
  }
`,il=Ta.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  border: none;
  border-radius: var(--radius-full);
  font-size: 20px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
`,sl=(Ta.button`
  padding: var(--space-md) var(--space-lg);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    border-color: #fd7a2d;
    color: #fd7a2d;
  }
`,Ta.div`
  display: flex;
  justify-content: space-between;
  padding: var(--space-lg);
  background: var(--color-card-bg);
  border-top: 1px solid var(--color-border);
  gap: var(--space-sm);
`),ul=Ta.button`
  flex: 1;
  padding: var(--space-md);
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-border);
  }
`,cl=Ta.button`
  flex: 1;
  padding: var(--space-md);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  border: none;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,dl=Ta.span`
  font-size: var(--font-size-sm);
  color: var(--color-danger);
  padding-left: 4px;
`,fl=Ta.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  padding-left: 4px;
  margin: 0;
`,pl=()=>{const e=ge(),[t,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(""),[l,i]=(0,r.useState)(""),[s,u]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[f,p]=(0,r.useState)([]),[h,g]=(0,r.useState)(["Favorites","Work","Personal"]),[m,v]=(0,r.useState)(null),[b,y]=(0,r.useState)(null),[x,w]=(0,r.useState)(!1),[k,S]=(0,r.useState)({}),[E,C]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!t||t.length<8)return;const e=setTimeout(()=>{let e=t;t.startsWith("http://")||t.startsWith("https://")||(e="https://"+t);const n=new URL(e).hostname;a||o(n.replace("www.","")),b||y(`https://www.google.com/s2/favicons?domain=${n}&sz=64`),m||v(`https://image.thum.io/get/${e}`)},1e3);return()=>clearTimeout(e)},[t]);const z=()=>{const e={},n=(()=>{if(!t.trim())return"La URL es obligatoria";try{let e=t;return t.startsWith("http://")||t.startsWith("https://")||(e="https://"+t),new URL(e),""}catch{return"Por favor ingresa una URL v\xe1lida"}})();n&&(e.url=n);const r=a.trim()?"":"El t\xedtulo es obligatorio";return r&&(e.title=r),S(e),0===Object.keys(e).length};return{url:t,title:a,subtitle:l,description:s,note:c,selectedTags:f,availableTags:h,imageUrl:m,iconUrl:b,isFetchingPreview:x,errors:k,isSaving:E,handleUrlChange:e=>{n(e.target.value),k.url&&S(e=>({...e,url:""}))},handleTitleChange:e=>{o(e.target.value),k.title&&S(e=>({...e,title:""}))},handleSubtitleChange:e=>{i(e.target.value)},handleDescriptionChange:e=>{u(e.target.value)},handleNoteChange:e=>{d(e.target.value)},handleImageChange:e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){const e=new FileReader;e.onloadend=()=>{v(e.result)},e.readAsDataURL(n)}},handleTagToggle:e=>{p(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},addNewTag:e=>{e.trim()&&!h.includes(e)&&(g(t=>[...t,e]),p(t=>[...t,e]))},fetchLinkPreview:async()=>{if(t.trim()){w(!0);try{new URL(t);const e=new URL(t).hostname;a||o(e.replace("www.","")),b||y(`https://www.google.com/s2/favicons?domain=${e}&sz=128`),m||v(`https://source.unsplash.com/800x450/?${encodeURIComponent(e)}&sig=${Date.now()}`)}catch(e){console.error("Error fetching link preview:",e)}finally{w(!1)}}},handleSubmit:async n=>{if(n.preventDefault(),z()){C(!0);try{var r;const n={url:t,title:a,subtitle:l,description:s,note:c,tags:f,imageUrl:m,iconUrl:b};await(null===(r=(()=>{var e;return null===(e=window.electronAPI)||void 0===e?void 0:e.links})())||void 0===r?void 0:r.create(n)),e("/")}catch(o){console.error("Error saving link:",o)}finally{C(!1)}}},setIconUrl:y}},hl=Ta.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-xs);
  position: relative;
`,gl=Ta.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-xs) var(--space-sm);
  background: transparent;
  border: none;
  color: #fd7a2d;
  font-size: var(--font-size-lg);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  position: absolute;
  left: 0;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,ml=Ta.h1`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -1px;
  text-align: center;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,vl=(Ta.button`
  padding: var(--space-sm) var(--space-lg);
  background: ${e=>{let{$variant:t}=e;return"secondary"===t?"var(--color-background)":"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)"}};
  color: ${e=>{let{$variant:t}=e;return"secondary"===t?"var(--color-text-primary)":"white"}};
  border: ${e=>{let{$variant:t}=e;return"secondary"===t?"1px solid var(--color-border)":"none"}};
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  box-shadow: ${e=>{let{$variant:t}=e;return"secondary"===t?"none":"var(--shadow-sm)"}};
  
  &:hover {
    background: ${e=>{let{$variant:t}=e;return"secondary"===t?"var(--color-border)":"linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%)"}};
    transform: translateY(-1px);
    box-shadow: ${e=>{let{$variant:t}=e;return"secondary"===t?"none":"var(--shadow-md)"}};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ta.div`
  width: 80px;
`),bl=Ta.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,yl=Ta.div`
  background: var(--color-card-bg);
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 320px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`,xl=Ta.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 16px;
  text-align: center;
`,wl=Ta.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--color-border);
  border-radius: 34px;
  font-size: 16px;
  background: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    border-color: #fd7a2d;
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
`,kl=Ta.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`,Sl=Ta.button`
  flex: 1;
  padding: 14px 20px;
  border-radius: 34px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>{let{$primary:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-background)"}};
  color: ${e=>{let{$primary:t}=e;return t?"white":"var(--color-text-primary)"}};
  border: ${e=>{let{$primary:t}=e;return t?"none":"1px solid var(--color-border)"}};
  
  &:hover {
    background: ${e=>{let{$primary:t}=e;return t?"linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%)":"var(--color-border)"}};
  }
  
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
    color: #666;
  }
`,El=e=>{let{isOpen:t,onClose:n,onAdd:a,title:o,placeholder:l,addButtonText:i,cancelButtonText:s}=e;const[u,c]=(0,r.useState)("");if(!t)return null;const d=()=>{u.trim()&&(a(u.trim()),c(""),n())};return(0,jt.jsx)(bl,{onClick:n,children:(0,jt.jsxs)(yl,{onClick:e=>e.stopPropagation(),children:[(0,jt.jsx)(xl,{children:o}),(0,jt.jsx)(wl,{type:"text",value:u,onChange:e=>c(e.target.value),onKeyDown:e=>{"Enter"===e.key?d():"Escape"===e.key&&n()},placeholder:l,autoFocus:!0}),(0,jt.jsxs)(kl,{children:[(0,jt.jsx)(Sl,{onClick:n,children:s}),(0,jt.jsx)(Sl,{$primary:!0,onClick:d,disabled:!u.trim(),children:i})]})]})})},Cl=()=>{const e=ge(),{t:t}=Ot(),[n,a]=(0,r.useState)(!1),{url:o,title:l,subtitle:i,description:s,note:u,selectedTags:c,availableTags:d,imageUrl:f,iconUrl:p,isFetchingPreview:h,errors:g,handleUrlChange:m,handleTitleChange:v,handleSubtitleChange:b,handleDescriptionChange:y,handleNoteChange:x,handleImageChange:w,handleTagToggle:k,addNewTag:S,fetchLinkPreview:E,handleSubmit:C}=pl(),z=e=>"Favorites"===e?t("home.tag_favorites"):"Work"===e?t("home.tag_work"):"Personal"===e?t("home.tag_personal"):e;return(0,jt.jsxs)(Go,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),t("add.cancel")]}),(0,jt.jsx)(ml,{children:t("add.title")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(Yo,{onSubmit:C,children:[(0,jt.jsxs)(Xo,{children:[(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.url")}),(0,jt.jsx)(el,{placeholder:"https://example.com",value:o,onChange:m,className:g.url?"error":""}),g.url&&(0,jt.jsx)(dl,{children:g.url})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.icon")}),p?(0,jt.jsx)(al,{children:(0,jt.jsx)("img",{src:p,alt:""})}):(0,jt.jsx)(fl,{children:t("add.get_from_url")})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.title_field")}),(0,jt.jsx)(el,{placeholder:t("add.title_placeholder"),value:l,onChange:v,className:g.title?"error":""}),g.title&&(0,jt.jsx)(dl,{children:g.title})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.subtitle")}),(0,jt.jsx)(el,{placeholder:t("add.subtitle_placeholder"),value:i,onChange:b})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.description")}),(0,jt.jsx)(tl,{placeholder:t("add.description_placeholder"),value:s,onChange:y})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.note")}),(0,jt.jsx)(tl,{placeholder:t("add.note_placeholder"),value:u,onChange:x})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.image")}),f?(0,jt.jsx)(nl,{onClick:()=>{var e;return null===(e=document.getElementById("imageUpload"))||void 0===e?void 0:e.click()},children:(0,jt.jsx)("img",{src:f,alt:""})}):(0,jt.jsxs)(rl,{onClick:()=>{var e;return null===(e=document.getElementById("imageUpload"))||void 0===e?void 0:e.click()},children:[(0,jt.jsx)(go,{size:36}),(0,jt.jsx)("p",{children:t("add.upload_image")})]}),(0,jt.jsx)("input",{id:"imageUpload",type:"file",accept:"image/*",style:{display:"none"},onChange:w})]}),(0,jt.jsxs)(Jo,{children:[(0,jt.jsx)(Zo,{children:t("add.tags")}),(0,jt.jsxs)(ol,{children:[d.map(e=>(0,jt.jsx)(ll,{type:"button",$selected:c.includes(e),onClick:()=>k(e),children:z(e)},e)),(0,jt.jsx)(il,{type:"button",onClick:()=>a(!0),children:"+"})]})]})]}),(0,jt.jsxs)(sl,{children:[(0,jt.jsx)(ul,{type:"button",onClick:()=>e("/"),children:t("add.cancel")}),(0,jt.jsx)(cl,{type:"submit",disabled:Object.keys(g).length>0,children:t("add.save")})]})]}),(0,jt.jsx)(El,{isOpen:n,onClose:()=>a(!1),onAdd:e=>S(e),title:t("add.new_tag"),placeholder:t("add.new_tag_placeholder"),addButtonText:t("add.add"),cancelButtonText:t("add.cancel")})]})},zl=Ta.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: var(--space-xl) var(--space-md) 90px;
  max-width: 600px;
  margin: 0 auto;
`,_l=(Ta.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xl);
  padding: 0 var(--space-xs);
`,Ta.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-primary);
`,Ta.button`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  padding: var(--space-xs) var(--space-sm);
  background-color: transparent;
  border: none;
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-text-primary);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,Ta.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  margin-bottom: var(--space-xl);
  overflow: hidden;
`),jl=Ta.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  padding: var(--space-lg) var(--space-xl);
  margin: 0;
  border-bottom: 1px solid var(--color-border);
`,Tl=Ta.div`
  padding: var(--space-lg);
`,Pl=(Ta.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-background);
  
  &:last-child {
    border-bottom: none;
  }
`,Ta.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 2px;
  }
  
  span:last-child {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }
`),Nl=(Ta.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`,Ta.input`
  width: 0;
  height: 0;
  opacity: 0;
`),Ol=(Ta.span`
  position: relative;
  width: 51px;
  height: 31px;
  background-color: var(--color-border);
  border-radius: 16px;
  display: inline-block;
  transition: all 0.2s ease;
  
  &:before {
    position: absolute;
    content: "";
    height: 27px;
    width: 27px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  ${Nl}:checked + & {
    background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
    
    &:before {
      transform: translateX(20px);
    }
  }
`,Ta.div`
  position: relative;
  width: 160px;
`,Ta.select`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  background-color: var(--color-card-bg);
  color: var(--color-text-primary);
  appearance: none;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #fd7a2d;
    box-shadow: 0 0 0 3px rgba(253, 122, 45, 0.15);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
  
  option {
    background-color: var(--color-card-bg);
    color: var(--color-text-primary);
  }
`,Ta.div`
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 18px;
    height: 18px;
    color: var(--color-text-secondary);
  }
`,Ta.div`
  margin-top: var(--space-md);
`,Ta.div`
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`,Ta.input`
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;
  background-color: var(--color-card-bg);
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    outline: none;
    border-color: #fd7a2d;
    box-shadow: 0 0 0 3px rgba(253, 122, 45, 0.15);
  }
  
  &:hover:not(:focus) {
    border-color: var(--color-text-tertiary);
  }
`,Ta.button`
  padding: var(--space-sm) var(--space-md);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`,Ta.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px var(--space-sm);
  background-color: rgba(253, 122, 45, 0.1);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  color: #fd7a2d;
  
  button {
    background: none;
    border: none;
    color: #fd7a2d;
    font-size: var(--font-size-sm);
    cursor: pointer;
    padding: 0;
    line-height: 1;
    
    &:hover {
      opacity: 0.8;
    }
  }
`,Ta.div`
  background-color: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
`),Ll=(Ta.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,Ta.img`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  object-fit: cover;
`,Ta.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-base);
`,Ta.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-align: center;
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border);
  
  a {
    color: var(--color-text-tertiary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,Ta.div`
  display: flex;
  gap: 8px;
  align-items: center;
`),Rl=Ta.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 35px;
  font-size: 14px;
  background: var(--color-background);
  color: var(--color-text-primary);
  outline: none;
  
  &:focus {
    border-color: #fd7a2d;
  }
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
`,$l=Ta.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  border: none;
  border-radius: 35px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:disabled {
    background: var(--color-border);
    cursor: not-allowed;
    transform: none;
  }
`,Al=Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`,Dl=Ta.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 13px;
  color: var(--color-text-primary);
`,Ml=Ta.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: var(--color-text-tertiary);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-danger);
  }
`,Fl=Ta.div`
  display: flex;
  background: var(--color-background);
  border-radius: 35px;
  padding: 4px;
  border: 1px solid var(--color-border);
`,Il=Ta.button`
  flex: 1;
  padding: 10px 8px;
  border: none;
  border-radius:35px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>{let{$active:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"transparent"}};
  color: ${e=>{let{$active:t}=e;return t?"white":"var(--color-text-secondary)"}};
  
  &:hover {
    color: ${e=>{let{$active:t}=e;return t?"white":"var(--color-text-primary)"}};
  }
`,Ul=Ta.div`
  display: flex;
  gap: 8px;
`,Hl=Ta.button`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${e=>{let{$active:t}=e;return t?"transparent":"var(--color-border)"}};
  border-radius: 35px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>{let{$active:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-card-bg)"}};
  color: ${e=>{let{$active:t}=e;return t?"white":"var(--color-text-primary)"}};
  
  &:hover {
    border-color: ${e=>{let{$active:t}=e;return t?"transparent":"#fd7a2d"}};
  }
`,Wl=()=>{const{t:e,language:t,setLanguage:n}=Ot(),[a,o]=(0,r.useState)("auto"),[l,i]=(0,r.useState)(["All","Favorites"]),[s,u]=(0,r.useState)(""),[c,d]=(0,r.useState)(!1);return{appearanceMode:a,setAppearanceMode:e=>{o(e),(e=>{if("auto"===e){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",e?"dark":"light")}else document.documentElement.setAttribute("data-theme",e);localStorage.setItem("linkio-appearance-mode",e)})(e)},language:t,setLanguage:e=>{n(e)},tags:l,newTag:s,setNewTag:e=>{u(e.target.value)},isSaving:c,handleAddTag:(e,t)=>{const n=e.trim();n&&!l.includes(n)&&(i(e=>[...e,n]),t(""))},handleRemoveTag:e=>{"All"!==e&&"Favorites"!==e&&i(t=>t.filter(t=>t!==e))},handleSaveSettings:async()=>{d(!0);try{await new Promise(e=>setTimeout(e,500)),console.log("Settings saved")}catch(e){console.error("Error saving settings:",e)}finally{d(!1)}},t:e}},Bl=()=>{const e=ge(),{appearanceMode:t,setAppearanceMode:n,language:a,setLanguage:o,tags:l,isSaving:i,handleAddTag:s,handleRemoveTag:u,handleSaveSettings:c,t:d}=Wl(),[f,p]=(0,r.useState)("");return(0,jt.jsxs)(zl,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),d("detail.back")]}),(0,jt.jsx)(ml,{children:d("config.title")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)("div",{style:{maxWidth:600,margin:"0 auto",padding:"0 16px"},children:[(0,jt.jsxs)(_l,{children:[(0,jt.jsx)(jl,{children:d("config.appearance")}),(0,jt.jsxs)(Tl,{children:[(0,jt.jsxs)(Pl,{children:[(0,jt.jsx)("span",{children:d("config.mode")}),(0,jt.jsx)("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)"},children:d("config.mode_desc")})]}),(0,jt.jsxs)(Fl,{children:[(0,jt.jsx)(Il,{$active:"light"===t,onClick:()=>n("light"),children:d("config.light")}),(0,jt.jsx)(Il,{$active:"dark"===t,onClick:()=>n("dark"),children:d("config.dark")}),(0,jt.jsx)(Il,{$active:"auto"===t,onClick:()=>n("auto"),children:d("config.system")})]})]})]}),(0,jt.jsxs)(_l,{children:[(0,jt.jsx)(jl,{children:d("config.language")}),(0,jt.jsxs)(Tl,{children:[(0,jt.jsxs)(Pl,{children:[(0,jt.jsx)("span",{children:d("config.language")}),(0,jt.jsx)("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)"},children:d("config.language_desc")})]}),(0,jt.jsxs)(Ul,{children:[(0,jt.jsx)(Hl,{$active:"es"===a,onClick:()=>o("es"),children:"Espa\xf1ol"}),(0,jt.jsx)(Hl,{$active:"en"===a,onClick:()=>o("en"),children:"English"})]})]})]}),(0,jt.jsxs)(_l,{children:[(0,jt.jsx)(jl,{children:d("config.tags")}),(0,jt.jsxs)(Tl,{children:[(0,jt.jsxs)(Ll,{children:[(0,jt.jsx)(Rl,{placeholder:d("config.new_tag"),value:f,onChange:e=>p(e.target.value),onKeyPress:e=>{"Enter"===e.key&&s(f,p)}}),(0,jt.jsx)($l,{onClick:()=>s(f,p),disabled:!f.trim(),children:(0,jt.jsx)(xo,{size:20})})]}),l.length>0&&(0,jt.jsx)(Al,{children:l.map((e,t)=>(0,jt.jsxs)(Dl,{children:[(0,jt.jsx)("span",{children:e}),(0,jt.jsx)(Ml,{onClick:()=>u(e),children:"\xd7"})]},t))})]})]}),(0,jt.jsxs)(Ol,{children:[(0,jt.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,jt.jsx)("img",{src:"/Linkio-icon.png",alt:"LinkIO",style:{width:48,height:48,borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",objectFit:"cover",backgroundColor:"var(--color-card-bg)"}}),(0,jt.jsx)("span",{style:{fontSize:18,fontWeight:600,color:"var(--color-text-primary)"},children:d("config.about")})]}),(0,jt.jsx)("p",{style:{fontSize:14,color:"var(--color-text-secondary)",marginTop:8},children:d("config.about_desc")}),(0,jt.jsxs)("div",{style:{fontSize:12,color:"var(--color-text-tertiary)",marginTop:8},children:[d("config.version")," ","1.0.0"," \u2022 ",d("config.developed")," ",(0,jt.jsx)("a",{href:"https://github.com/ismaelmarot",target:"_blank",rel:"noopener noreferrer",children:"Ismael Marot"})," ","\u2022 ",d("config.rights")]})]}),(0,jt.jsx)("div",{style:{textAlign:"center",marginTop:"32px",marginBottom:"40px"},children:(0,jt.jsx)("button",{type:"button",onClick:c,disabled:i,style:{width:"100%",padding:"16px 32px",background:i?"#e0e0e0":"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)",color:i?"#666":"white",border:"none",borderRadius:"34px",fontSize:"16px",fontWeight:"600",cursor:i?"not-allowed":"pointer",transition:"all 0.2s ease"},children:d(i?"config.saving":"config.save")})})]})]})},Vl=Ta.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 0 var(--space-md) 100px;
`,ql=Ta.main`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Ql=Ta.article`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
`,Kl=Ta.div`
  width: 100%;
  height: 220px;
  background: var(--color-background);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Gl=Ta.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-secondary);
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--color-text-tertiary);
    opacity: 0.3;
  }
`,Yl=Ta.div`
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Xl=Ta.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
`,Jl=Ta.div`
  width: 52px;
  height: 52px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--color-text-tertiary);
  }
`,Zl=Ta.div`
  flex: 1;
  min-width: 0;
`,ei=Ta.h1`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 4px;
  letter-spacing: -0.3px;
  line-height: 1.25;
`,ti=Ta.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`,ni=Ta.a`
  font-size: var(--font-size-sm);
  color: #fd7a2d;
  text-decoration: none;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
  }
`,ri=Ta.button`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-border);
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: var(--color-text-secondary);
  }
`,ai=Ta.div`
  height: 1px;
  background: var(--color-border);
  margin: 0 calc(-1 * var(--space-xl));
`,oi=Ta.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,li=Ta.h3`
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`,ii=Ta.p`
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
`,si=Ta.div`
  background: var(--surface-secondary);
  padding: var(--space-md);
  border-radius: var(--radius-xxl);
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`,ui=Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`,ci=Ta.span`
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  background: ${e=>{let{$bg:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
`,di=Ta.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,fi=Ta.button`
  width: 100%;
  height: 52px;
  border-radius: var(--radius-xxl);
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  border: none;
  
  ${e=>{let{$variant:t}=e;return"danger"===t?"\n        background: var(--color-danger);\n        color: white;\n        \n        &:hover { opacity: 0.9; }\n        &:active { opacity: 0.8; }\n      ":"\n      background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);\n      color: white;\n      \n      &:hover { background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%); }\n      &:active { opacity: 0.9; }\n    "}}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,pi=Ta.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  max-height: ${e=>{let{$open:t}=e;return t?"120px":"0"}};
  overflow: hidden;
  opacity: ${e=>{let{$open:t}=e;return t?"1":"0"}};
  transition: all 0.3s ease;
`,hi=Ta.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  background: transparent;
  border: none;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--color-text-primary);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,gi=Ta.button`
  height: 48px;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  background: var(--surface-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  
  &:hover {
    background: var(--color-border);
  }
  
  &:active {
    opacity: 0.8;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`,mi=Ta.p`
  text-align: center;
  font-size: 12px;
  color: var(--color-text-tertiary);
  margin: 0;
`,vi=Ta.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  
.spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--color-border);
    border-top-color: #fd7a2d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,bi=Ta.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  text-align: center;
  
  h2 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-danger);
    margin: 0;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
  }
`,yi=Ta.button`
  padding: 14px 28px;
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
`,xi=Ta.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,wi=Ta.div`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  width: calc(100% - 48px);
  max-width: 320px;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`,ki=Ta.h2`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-sm);
  text-align: center;
`,Si=Ta.p`
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-xl);
  text-align: center;
  line-height: 1.5;
`,Ei=Ta.div`
  display: flex;
  gap: var(--space-sm);
`,Ci=Ta.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 500;
  background: var(--surface-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: var(--color-border);
  }
`,zi=Ta.button`
  flex: 1;
  height: 48px;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-base);
  font-weight: 600;
  background: var(--color-danger);
  color: white;
  border: none;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_i=()=>{var e;return null===(e=window.electronAPI)||void 0===e?void 0:e.links},ji=()=>{const e=ge(),{id:t}=me(),{t:n}=Ot(),[a,o]=(0,r.useState)(null),[l,i]=(0,r.useState)(!0),[s,u]=(0,r.useState)(null),[c,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),[m,v]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(async()=>{if(!t)return u(n("detail.error")),void i(!1);try{var e;const r=await(null===(e=_i())||void 0===e?void 0:e.get(parseInt(t)));if(!r)return void u(n("detail.not_found"));o(r)}catch(r){u(n("detail.error"))}finally{i(!1)}})()},[t]);const b=()=>{null!==a&&void 0!==a&&a.url&&window.open(a.url,"_blank")};return l?(0,jt.jsxs)(Vl,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),n("detail.back")]}),(0,jt.jsx)(ml,{children:n("detail.link")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(vi,{children:[(0,jt.jsx)("div",{className:"spinner"}),(0,jt.jsx)("p",{children:n("detail.loading")})]})]}):s||!a?(0,jt.jsxs)(Vl,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),n("detail.back")]}),(0,jt.jsx)(ml,{children:n(a?"detail.link":"detail.error")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(bi,{children:[(0,jt.jsx)("h2",{children:s||n("detail.not_found")}),(0,jt.jsx)("p",{children:n("detail.not_exist")}),(0,jt.jsx)(yi,{onClick:()=>e("/"),children:n("detail.back_home")})]})]}):(0,jt.jsxs)(Vl,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),n("detail.back")]}),(0,jt.jsx)(ml,{children:n("detail.link")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(ql,{children:[(0,jt.jsxs)(Ql,{children:[a.imageUrl?(0,jt.jsx)(Kl,{children:(0,jt.jsx)("img",{src:a.imageUrl,alt:a.title})}):(0,jt.jsx)(Gl,{children:(0,jt.jsx)(Eo,{})}),(0,jt.jsxs)(Yl,{children:[(0,jt.jsxs)(Xl,{children:[a.iconUrl?(0,jt.jsx)(Jl,{$hasImage:!0,children:(0,jt.jsx)("img",{src:a.iconUrl,alt:"Icono"})}):(0,jt.jsx)(Jl,{children:(0,jt.jsx)(Eo,{})}),(0,jt.jsxs)(Zl,{children:[(0,jt.jsx)(ei,{children:a.title}),(0,jt.jsxs)(ti,{children:[(0,jt.jsx)(ni,{href:"#",onClick:e=>{e.preventDefault(),b()},children:a.url}),(0,jt.jsx)(ri,{onClick:async()=>{if(null!==a&&void 0!==a&&a.url)try{await navigator.clipboard.writeText(a.url),g(!0),setTimeout(()=>g(!1),2e3)}catch(e){console.error("Error copying:",e)}},title:n("detail.copy"),children:(0,jt.jsx)(_o,{size:16})})]})]})]}),a.subtitle&&(0,jt.jsx)(oi,{children:(0,jt.jsx)(ii,{children:a.subtitle})}),(0,jt.jsx)(ai,{}),a.description&&(0,jt.jsxs)(oi,{children:[(0,jt.jsx)(li,{children:n("detail.description")}),(0,jt.jsx)(ii,{children:a.description})]}),a.note&&(0,jt.jsxs)(oi,{children:[(0,jt.jsx)(li,{children:n("detail.note")}),(0,jt.jsx)(si,{children:(0,jt.jsx)("p",{children:a.note})})]}),a.tags&&a.tags.length>0&&(0,jt.jsx)(oi,{children:(0,jt.jsx)(ui,{children:a.tags.map((e,t)=>{const n=(e=>"string"===typeof e?{background:"#e3f2fd",color:"#1976d2",name:e}:{background:e.background||"#e3f2fd",color:e.color||"#1976d2",name:e.name||e})(e);return(0,jt.jsx)(ci,{$bg:n.background,$color:n.color,children:n.name},t)})})}),(0,jt.jsx)(ai,{}),(0,jt.jsxs)(di,{children:[(0,jt.jsxs)(fi,{$variant:"primary",onClick:b,children:[(0,jt.jsx)(zo,{}),n("detail.open")]}),(0,jt.jsxs)(pi,{$open:m,children:[(0,jt.jsxs)(gi,{onClick:()=>{e(`/link/${t}/edit`)},children:[(0,jt.jsx)(wo,{}),n("detail.edit")]}),(0,jt.jsxs)(gi,{onClick:()=>p(!0),children:[(0,jt.jsx)(So,{}),n("detail.delete")]})]}),(0,jt.jsxs)(hi,{onClick:()=>v(!m),children:[(0,jt.jsx)("span",{children:n(m?"detail.less_options":"detail.more_options")}),(0,jt.jsx)(jo,{style:{transform:m?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}})]})]})]})]}),a.createdAt&&(0,jt.jsxs)(mi,{children:[n("detail.added_on")," ",(e=>{if(!e)return"";return new Date(e).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})(a.createdAt)]})]}),f&&(0,jt.jsx)(xi,{onClick:()=>p(!1),children:(0,jt.jsxs)(wi,{onClick:e=>e.stopPropagation(),children:[(0,jt.jsx)(ki,{children:n("detail.delete_confirm")}),(0,jt.jsx)(Si,{children:n("detail.delete_warning")}),(0,jt.jsxs)(Ei,{children:[(0,jt.jsx)(Ci,{onClick:()=>p(!1),children:n("detail.cancel")}),(0,jt.jsx)(zi,{onClick:async()=>{d(!0);try{var n;await(null===(n=_i())||void 0===n?void 0:n.delete(parseInt(t))),e("/")}catch(r){console.error("Error:",r)}finally{d(!1)}},disabled:c,children:n(c?"detail.deleting":"detail.delete")})]})]})})]})},Ti=Ta.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 100px;
`,Pi=Ta.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,Ni=Ta.form`
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  overflow: hidden;
`,Oi=Ta.div`
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Li=Ta.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Ri=(Ta.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ta.label`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`),$i=Ta.input`
  width: 100%;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: #fd7a2d;
    box-shadow: 0 0 0 4px rgba(253, 122, 45, 0.15);
  }
  
  &.error {
    border-color: var(--color-danger);
    box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.15);
  }
`,Ai=Ta.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  resize: vertical;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  box-sizing: border-box;
  
  &::placeholder {
    color: var(--color-text-tertiary);
  }
  
  &:focus {
    border-color: #fd7a2d;
    box-shadow: 0 0 0 4px rgba(253, 122, 45, 0.15);
  }
`,Di=Ta.div`
  width: 100%;
  height: 180px;
  background: var(--color-background);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--color-border);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Mi=Ta.button`
  width: 100%;
  height: 100px;
  background: var(--color-background);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: #fd7a2d;
    opacity: 0.5;
    margin-bottom: var(--space-xs);
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin: 0;
  }
  
  &:hover {
    border-color: #fd7a2d;
    background: rgba(253, 122, 45, 0.1);
  }
`,Fi=Ta.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--surface-secondary);
  border-radius: var(--radius-lg);
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: var(--radius-sm);
  }
`,Ii=Ta.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xl);
  background: var(--color-background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  
  svg {
    color: var(--color-text-tertiary);
    opacity: 0.4;
  }
  
  p {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin: 0;
  }
`,Ui=(Ta.button`
  padding: var(--space-xs) var(--space-md);
  background: rgba(255, 59, 48, 0.08);
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-danger);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 59, 48, 0.15);
  }
`,Ta.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`),Hi=Ta.button`
  padding: 8px var(--space-md);
  background: ${e=>{let{$selected:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-background)"}};
  border: 1px solid ${e=>{let{$selected:t}=e;return t?"linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%)":"var(--color-border)"}};
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: ${e=>{let{$selected:t}=e;return t?"white":"var(--color-text-secondary)"}};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #fd7a2d;
    color: ${e=>{let{$selected:t}=e;return t?"white":"#fd7a2d"}};
  }
`,Wi=Ta.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  border: none;
  border-radius: var(--radius-full);
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
`,Bi=(Ta.button`
  width: 100%;
  padding: 14px var(--space-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    border-color: #fd7a2d;
    color: #fd7a2d;
  }
`,Ta.div`
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-lg);
  background: var(--color-card-bg);
  border-top: 1px solid var(--color-border);
`),Vi=Ta.button`
  flex: 1;
  padding: 14px var(--space-md);
  background: var(--surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
  cursor: pointer;
  
  &:hover {
    background: var(--color-border);
  }
`,qi=Ta.button`
  flex: 1;
  padding: 14px var(--space-md);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Qi=Ta.span`
  font-size: var(--font-size-sm);
  color: var(--color-danger);
  padding-left: 4px;
`,Ki=(Ta.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  padding-left: 4px;
  margin: 0;
`,Ta.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  
  .spinner {
    width: 36px;
    height: 36px;
    border: 3px solid var(--color-border);
    border-top-color: #fd7a2d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`),Gi=Ta.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-xl);
  text-align: center;
  
  h2 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-danger);
    margin: 0;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
  }
`,Yi=Ta.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
  }
`,Xi=()=>{var e;return null===(e=window.electronAPI)||void 0===e?void 0:e.links},Ji=()=>{const{id:e}=me(),t=ge(),[n,a]=(0,r.useState)(""),[o,l]=(0,r.useState)(""),[i,s]=(0,r.useState)(""),[u,c]=(0,r.useState)(""),[d,f]=(0,r.useState)(""),[p,h]=(0,r.useState)([]),[g,m]=(0,r.useState)(["Favorites","Work","Personal"]),[v,b]=(0,r.useState)(null),[y,x]=(0,r.useState)(null),[w,k]=(0,r.useState)(!1),[S,E]=(0,r.useState)({}),[C,z]=(0,r.useState)(!0),[_,j]=(0,r.useState)(null),[T,P]=(0,r.useState)(!1),[N,O]=(0,r.useState)(!1),[L,R]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(async()=>{if(!e)return j("ID de enlace no proporcionado"),void z(!1);try{var t;const n=await(null===(t=Xi())||void 0===t?void 0:t.get(parseInt(e)));if(!n)return void j("Enlace no encontrado");a(n.url),l(n.title),s(n.subtitle||""),c(n.description||""),f(n.note||""),h(n.tags||[]),b(n.imageUrl),x(n.iconUrl);const r=n.tags||[];m(e=>[...new Set([...e,...r])])}catch(n){j("Error al cargar el enlace")}finally{z(!1)}})()},[e]),(0,r.useEffect)(()=>{if(!n||n.length<8)return;const e=setTimeout(()=>{let e=n;n.startsWith("http://")||n.startsWith("https://")||(e="https://"+n);try{const t=new URL(e).hostname,n=`https://www.google.com/s2/favicons?domain=${t}&sz=64`;o||l(t.replace("www.","")),y||x(n),v||b(`https://image.thum.io/get/${e}`)}catch(t){}},800);return()=>clearTimeout(e)},[n]);const $=()=>{const e={},t=(()=>{if(!n.trim())return"La URL es obligatoria";try{let e=n;return n.startsWith("http://")||n.startsWith("https://")||(e="https://"+n),new URL(e),""}catch{return"Por favor ingresa una URL v\xe1lida"}})();t&&(e.url=t);const r=o.trim()?"":"El t\xedtulo es obligatorio";return r&&(e.title=r),E(e),0===Object.keys(e).length};return{url:n,title:o,subtitle:i,description:u,note:d,selectedTags:p,availableTags:g,imageUrl:v,iconUrl:y,isFetchingPreview:w,errors:S,loading:C,error:_,showDeleteConfirm:T,setShowDeleteConfirm:P,isSaving:N,isDeleting:L,handleUrlChange:e=>{a(e.target.value),S.url&&E(e=>({...e,url:""}))},handleTitleChange:e=>{l(e.target.value),S.title&&E(e=>({...e,title:""}))},handleSubtitleChange:e=>{s(e.target.value)},handleDescriptionChange:e=>{c(e.target.value)},handleNoteChange:e=>{f(e.target.value)},handleImageChange:e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){const e=new FileReader;e.onloadend=()=>{b(e.result)},e.readAsDataURL(n)}},handleTagToggle:e=>{h(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},addNewTag:e=>{e.trim()&&!g.includes(e)&&(m(t=>[...t,e]),h(t=>[...t,e]))},fetchLinkPreview:async()=>{if(n.trim()){k(!0);try{const e=new URL(n).hostname;o||l(e.replace("www.","")),y||x(`https://www.google.com/s2/favicons?domain=${e}&sz=64`),v||b(`https://image.thum.io/get/${n}`)}catch(_){console.error("Error fetching link preview:",_)}finally{k(!1)}}},handleSubmit:async r=>{if(r.preventDefault(),e&&$()){O(!0);try{var a;const r={url:n,title:o,subtitle:i,description:u,note:d,tags:p,imageUrl:v,iconUrl:y};await(null===(a=Xi())||void 0===a?void 0:a.update(parseInt(e),r)),t(`/link/${e}`)}catch(_){console.error("Error updating link:",_)}finally{O(!1)}}},handleDelete:async()=>{if(e){R(!0);try{var n;await(null===(n=Xi())||void 0===n?void 0:n.delete(parseInt(e))),t("/")}catch(_){console.error("Error deleting link:",_)}finally{R(!1)}}},setIconUrl:x}},Zi=()=>{const e=ge(),{id:t}=me(),{t:n}=Ot(),[a,o]=(0,r.useState)(!1),{url:l,title:i,subtitle:s,description:u,note:c,selectedTags:d,availableTags:f,imageUrl:p,iconUrl:h,isFetchingPreview:g,errors:m,loading:v,error:b,isSaving:y,handleUrlChange:x,handleTitleChange:w,handleSubtitleChange:k,handleDescriptionChange:S,handleNoteChange:E,handleImageChange:C,handleTagToggle:z,addNewTag:_,fetchLinkPreview:j,handleSubmit:T}=Ji(),P=e=>"Favorites"===e?n("home.tag_favorites"):"Work"===e?n("home.tag_work"):"Personal"===e?n("home.tag_personal"):e,N=()=>{e(`/link/${t}`)};return v?(0,jt.jsxs)(Ti,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:N,children:[(0,jt.jsx)(ho,{size:20}),n("edit.cancel")]}),(0,jt.jsx)(ml,{children:n("edit.title")}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(Ki,{children:[(0,jt.jsx)("div",{className:"spinner"}),(0,jt.jsx)("p",{children:"Cargando..."})]})]}):b?(0,jt.jsxs)(Ti,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:()=>e("/"),children:[(0,jt.jsx)(ho,{size:20}),"Atr\xe1s"]}),(0,jt.jsx)(ml,{children:"Error"}),(0,jt.jsx)(vl,{})]}),(0,jt.jsxs)(Gi,{children:[(0,jt.jsx)("h2",{children:b}),(0,jt.jsx)("p",{children:"Ha ocurrido un error al cargar el enlace."}),(0,jt.jsx)(Yi,{onClick:()=>e("/"),children:"Volver al inicio"})]})]}):(0,jt.jsxs)(Ti,{children:[(0,jt.jsxs)(hl,{children:[(0,jt.jsxs)(gl,{onClick:N,children:[(0,jt.jsx)(ho,{size:20}),"Atr\xe1s"]}),(0,jt.jsx)(ml,{children:"Editar"}),(0,jt.jsx)(vl,{})]}),(0,jt.jsx)(Pi,{children:(0,jt.jsxs)(Ni,{onSubmit:T,children:[(0,jt.jsxs)(Oi,{children:[(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"URL"}),(0,jt.jsx)($i,{type:"url",placeholder:"https://ejemplo.com",value:l,onChange:x,className:m.url?"error":""}),m.url&&(0,jt.jsx)(Qi,{children:m.url})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Icono"}),h?(0,jt.jsx)(Fi,{children:(0,jt.jsx)("img",{src:h,alt:"Icono"})}):(0,jt.jsxs)(Ii,{children:[(0,jt.jsx)(Eo,{size:32}),(0,jt.jsx)("p",{children:"Se obtendr\xe1 de la URL"})]})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"T\xedtulo"}),(0,jt.jsx)($i,{type:"text",placeholder:"T\xedtulo del enlace",value:i,onChange:w,className:m.title?"error":""}),m.title&&(0,jt.jsx)(Qi,{children:m.title})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Subt\xedtulo"}),(0,jt.jsx)($i,{type:"text",placeholder:"Subt\xedtulo opcional",value:s,onChange:k})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Descripci\xf3n"}),(0,jt.jsx)(Ai,{placeholder:"Describe el enlace...",value:u,onChange:S})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Nota"}),(0,jt.jsx)(Ai,{placeholder:"Nota personal...",value:c,onChange:E})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Imagen"}),p?(0,jt.jsx)(Di,{onClick:()=>{var e;return null===(e=document.getElementById("imageUpload"))||void 0===e?void 0:e.click()},children:(0,jt.jsx)("img",{src:p,alt:"Vista previa"})}):(0,jt.jsxs)(Mi,{onClick:e=>{var t;e.preventDefault(),null===(t=document.getElementById("imageUpload"))||void 0===t||t.click()},children:[(0,jt.jsx)(go,{size:36}),(0,jt.jsx)("p",{children:"Subir imagen"})]}),(0,jt.jsx)("input",{id:"imageUpload",type:"file",accept:"image/*",style:{display:"none"},onChange:C})]}),(0,jt.jsxs)(Li,{children:[(0,jt.jsx)(Ri,{children:"Etiquetas"}),(0,jt.jsxs)(Ui,{children:[f.map(e=>(0,jt.jsx)(Hi,{type:"button",$selected:d.includes(e),onClick:()=>z(e),children:P(e)},e)),(0,jt.jsx)(Wi,{type:"button",onClick:()=>o(!0),children:"+"})]})]})]}),(0,jt.jsxs)(Bi,{children:[(0,jt.jsx)(Vi,{type:"button",onClick:N,children:n("edit.cancel")}),(0,jt.jsx)(qi,{type:"submit",disabled:Object.keys(m).length>0||y,children:n(y?"edit.saving":"edit.save")})]})]})}),(0,jt.jsx)(El,{isOpen:a,onClose:()=>o(!1),onAdd:e=>_(e),title:n("add.new_tag"),placeholder:n("add.new_tag_placeholder"),addButtonText:n("add.add"),cancelButtonText:n("add.cancel")})]})},es=Ta.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  background-color: var(--color-card-bg);
  border-top: 1px solid var(--color-border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
`,ts=Ta.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: var(--space-xs) var(--space-2xl);
  background: transparent;
  border: none;
  color: ${e=>e.$active?"#fd7a2d":"var(--color-text-secondary)"};
  font-size: var(--font-size-sm);
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:active {
    transform: scale(0.95);
  }
`,ns=Ta.span`
  font-size: 10px;
  font-weight: ${e=>e.$active?"600":"500"};
  color: ${e=>e.$active?"#fd7a2d":"var(--color-text-secondary)"};
`,rs=()=>{const e=ge(),t=fe(),{t:n}=Ot(),r=e=>"/"===e?"/"===t.pathname:t.pathname.startsWith(e);return(0,jt.jsxs)(es,{children:[(0,jt.jsxs)(ts,{$active:r("/"),onClick:()=>e("/"),children:[(0,jt.jsx)(yo,{size:22,color:r("/")?"var(--color-primary)":"var(--color-text-secondary)"}),(0,jt.jsx)(ns,{$active:r("/"),children:n("nav.home")})]}),(0,jt.jsxs)(ts,{$active:r("/add"),onClick:()=>e("/add"),children:[(0,jt.jsx)(xo,{size:24}),(0,jt.jsx)(ns,{$active:r("/add"),children:n("nav.add")})]}),(0,jt.jsxs)(ts,{$active:r("/config"),onClick:()=>e("/config"),children:[(0,jt.jsx)(mo,{size:24}),(0,jt.jsx)(ns,{$active:r("/config"),children:n("nav.config")})]})]})},as=()=>(0,jt.jsx)(Nt,{children:(0,jt.jsx)(yt,{children:(0,jt.jsxs)(Fe,{children:[(0,jt.jsx)(De,{path:"/",element:(0,jt.jsxs)(jt.Fragment,{children:[(0,jt.jsx)(Ko,{}),(0,jt.jsx)(rs,{})]})}),(0,jt.jsx)(De,{path:"/add",element:(0,jt.jsxs)(jt.Fragment,{children:[(0,jt.jsx)(Cl,{}),(0,jt.jsx)(rs,{})]})}),(0,jt.jsx)(De,{path:"/config",element:(0,jt.jsxs)(jt.Fragment,{children:[(0,jt.jsx)(Bl,{}),(0,jt.jsx)(rs,{})]})}),(0,jt.jsx)(De,{path:"/link/:id",element:(0,jt.jsx)(ji,{})}),(0,jt.jsx)(De,{path:"/link/:id/edit",element:(0,jt.jsx)(Zi,{})}),(0,jt.jsx)(De,{path:"*",element:(0,jt.jsx)(Ae,{to:"/",replace:!0})})]})})});o.createRoot(document.getElementById("root")).render((0,jt.jsx)(r.StrictMode,{children:(0,jt.jsx)(as,{})}))})();
//# sourceMappingURL=main.9859c81e.js.map