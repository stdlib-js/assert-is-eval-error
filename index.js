// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isEvalError=r()}(this,(function(){"use strict";var e=Object,r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function n(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+a(n):a(n)+e,i&&(e="-"+e)),e}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(e){return"string"==typeof e}var u=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,_=/(\..*[^0])0*e/;function E(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,v,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var i=r-e.length;return i<0?e:e=t?e+S(i):S(i)+e}var k=String.fromCharCode,x=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,i,n,a,c,s,u,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,u=0;u<e.length;u++)if(p(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,x(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=l(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(a)?String(i.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=o(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=j(i.arg,i.width,i.padRight)),c+=i.arg||"",s+=1}return c}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,R=Object.prototype,Z=R.toString,G=R.__defineGetter__,L=R.__defineSetter__,W=R.__lookupGetter__,B=R.__lookupSetter__;P=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||B.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};var N=P;function U(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=M();function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&H.call(e,r)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var Y=q()?function(e){var r,t,i;if(null==e)return D.call(e);t=e[Q],r=J(e,Q);try{e[Q]=void 0}catch(r){return D.call(e)}return i=D.call(e),r?e[Q]=t:delete e[Q],i}:function(e){return D.call(e)},ee=Boolean,re=Boolean.prototype.toString;var te=q();function ie(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function ne(e){return X(e)||ie(e)}function ae(){return new Function("return this;")()}U(ne,"isPrimitive",X),U(ne,"isObject",ie);var oe="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;var pe=function(e){if(arguments.length){if(!X(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(le)return le;if(oe)return oe;if(ce)return ce;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=pe.document&&pe.document.childNodes,fe=Int8Array;var ge=M();var de=Object.prototype.toString;var he="function"==typeof Symbol?Symbol:void 0,be="function"==typeof he?he.toStringTag:"";var ye=ge&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return de.call(e);t=e[be],r=J(e,be);try{e[be]=void 0}catch(r){return de.call(e)}return i=de.call(e),r?e[be]=t:delete e[be],i}:function(e){return de.call(e)},ve="function"==typeof Object.defineProperty?Object.defineProperty:null;var we=Object.defineProperty;function me(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+_e(n):_e(n)+e,i&&(e="-"+e)),e}var Se=String.prototype.toLowerCase,je=String.prototype.toUpperCase;function ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===je.call(e.specifier)?je.call(t):Se.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(e){return"string"==typeof e}var Te=Math.abs,Ve=String.prototype.toLowerCase,Oe=String.prototype.toUpperCase,$e=String.prototype.replace,Fe=/e\+(\d)$/,Ae=/e-(\d)$/,Ie=/^(\d+)$/,Ce=/^(\d+)e/,Pe=/\.0$/,Re=/\.0*e/,Ze=/(\..*[^0])0*e/;function Ge(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Te(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=$e.call(t,Ze,"$1e"),t=$e.call(t,Re,"e"),t=$e.call(t,Pe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=$e.call(t,Fe,"e+0$1"),t=$e.call(t,Ae,"e-0$1"),e.alternate&&(t=$e.call(t,Ie,"$1."),t=$e.call(t,Ce,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Oe.call(e.specifier)?Oe.call(t):Ve.call(t)}function Le(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function We(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Le(i):Le(i)+e}var Be=String.fromCharCode,Ne=isNaN,Ue=Array.isArray;function Xe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Me(e){var r,t,i,n,a,o,c,s,l;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Xe(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ne(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ne(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ne(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ne(a)?String(i.arg):Be(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ge(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=We(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function De(e){var r,t,i,n;for(t=[],n=0,i=ze.exec(e);i;)(r=e.slice(n,ze.lastIndex-i[0].length)).length&&t.push(r),t.push(qe(i)),n=ze.lastIndex,i=ze.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function He(e){return"string"==typeof e}function Je(e){var r,t;if(!He(e))throw new TypeError(Je("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[De(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Me.apply(null,r)}var Ke,Qe=Object.prototype,Ye=Qe.toString,er=Qe.__defineGetter__,rr=Qe.__defineSetter__,tr=Qe.__lookupGetter__,ir=Qe.__lookupSetter__;Ke=function(){try{return ve({},"x",{}),!0}catch(e){return!1}}()?we:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ye.call(e))throw new TypeError(Je("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ye.call(t))throw new TypeError(Je("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(tr.call(e,r)||ir.call(e,r)?(i=e.__proto__,e.__proto__=Qe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(e,r,t.get),o&&rr&&rr.call(e,r,t.set),e};var nr=Ke;function ar(){return/^\s*function\s*([^(]*)/i}var or=/^\s*function\s*([^(]*)/i;!function(e,r,t){nr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(ar,"REGEXP",or);var cr="function"==typeof Object.defineProperty?Object.defineProperty:null;var sr=Object.defineProperty;function lr(e){return"number"==typeof e}function pr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ur(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+pr(n):pr(n)+e,i&&(e="-"+e)),e}var fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase;function dr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!lr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ur(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ur(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===gr.call(e.specifier)?gr.call(t):fr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function hr(e){return"string"==typeof e}var br=Math.abs,yr=String.prototype.toLowerCase,vr=String.prototype.toUpperCase,wr=String.prototype.replace,mr=/e\+(\d)$/,_r=/e-(\d)$/,Er=/^(\d+)$/,Sr=/^(\d+)e/,jr=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Tr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!lr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":br(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=wr.call(t,xr,"$1e"),t=wr.call(t,kr,"e"),t=wr.call(t,jr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=wr.call(t,mr,"e+0$1"),t=wr.call(t,_r,"e-0$1"),e.alternate&&(t=wr.call(t,Er,"$1."),t=wr.call(t,Sr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===vr.call(e.specifier)?vr.call(t):yr.call(t)}function Vr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Or(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Vr(i):Vr(i)+e}var $r=String.fromCharCode,Fr=isNaN,Ar=Array.isArray;function Ir(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Cr(e){var r,t,i,n,a,o,c,s,l;if(!Ar(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(hr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ir(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Fr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Fr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=dr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Fr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Fr(a)?String(i.arg):$r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Tr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ur(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Or(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Rr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Zr(e){var r,t,i,n;for(t=[],n=0,i=Pr.exec(e);i;)(r=e.slice(n,Pr.lastIndex-i[0].length)).length&&t.push(r),t.push(Rr(i)),n=Pr.lastIndex,i=Pr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Gr(e){return"string"==typeof e}function Lr(e){var r,t;if(!Gr(e))throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Zr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Cr.apply(null,r)}var Wr,Br=Object.prototype,Nr=Br.toString,Ur=Br.__defineGetter__,Xr=Br.__defineSetter__,Mr=Br.__lookupGetter__,zr=Br.__lookupSetter__;Wr=function(){try{return cr({},"x",{}),!0}catch(e){return!1}}()?sr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Nr.call(e))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Nr.call(t))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Mr.call(e,r)||zr.call(e,r)?(i=e.__proto__,e.__proto__=Br,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ur&&Ur.call(e,r,t.get),o&&Xr&&Xr.call(e,r,t.set),e};var qr,Dr=Wr;qr=Array.isArray?Array.isArray:function(e){return"[object Array]"===ye(e)};var Hr=qr;function Jr(e){return null!==e&&"object"==typeof e}var Kr=function(e){if("function"!=typeof e)throw new TypeError(Lr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Hr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Jr);function Qr(e){var r,t,i,n;if(("Object"===(t=ye(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=or.exec(i.toString()))return r[1]}return Jr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){Dr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Jr,"isObjectLikeArray",Kr);var Yr="function"==typeof r||"object"==typeof fe||"function"==typeof ue?function(e){return Qr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Qr(e).toLowerCase():r};var et=Object.getPrototypeOf,rt=M();var tt=Object.prototype.toString;var it="function"==typeof Symbol?Symbol:void 0,nt="function"==typeof it?it.toStringTag:"";var at,ot,ct=rt&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return tt.call(e);t=e[nt],r=J(e,nt);try{e[nt]=void 0}catch(r){return tt.call(e)}return i=tt.call(e),r?e[nt]=t:delete e[nt],i}:function(e){return tt.call(e)};ot=Object.getPrototypeOf,at="function"===Yr(ot)?et:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ct(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var st=at;function lt(r){return null==r?null:(r=e(r),st(r))}var pt=M();var ut=Object.prototype.toString;var ft="function"==typeof Symbol?Symbol:void 0,gt="function"==typeof ft?ft.toStringTag:"";var dt=pt&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return ut.call(e);t=e[gt],r=J(e,gt);try{e[gt]=void 0}catch(r){return ut.call(e)}return i=ut.call(e),r?e[gt]=t:delete e[gt],i}:function(e){return ut.call(e)};return function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof EvalError)return!0;if(function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===dt(e))return!0;e=lt(e)}return!1}(e))for(;e;){if("evalerror"===Yr(e))return!0;e=lt(e)}return!1}}));
//# sourceMappingURL=index.js.map