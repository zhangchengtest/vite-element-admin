import{g as _}from"../@amap/@amap.99378080.js";var N=!1,a,s,f,u,c,O,l,p,m,w,D,v,x,A,E;function o(){if(!N){N=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),n=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(v=/\b(iPhone|iP[ao]d)/.exec(e),x=/\b(iP[ao]d)/.exec(e),w=/Android/i.exec(e),A=/FBAN\/\w+;/i.exec(e),E=/Mobile/i.exec(e),D=!!/Win64/.exec(e),t){a=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,a&&document&&document.documentMode&&(a=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(e);O=r?parseFloat(r[1])+4:a,s=t[2]?parseFloat(t[2]):NaN,f=t[3]?parseFloat(t[3]):NaN,u=t[4]?parseFloat(t[4]):NaN,u?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),c=t&&t[1]?parseFloat(t[1]):NaN):c=NaN}else a=s=f=c=u=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);l=i?parseFloat(i[1].replace("_",".")):!0}else l=!1;p=!!n[2],m=!!n[3]}else l=p=m=!1}}var h={ie:function(){return o()||a},ieCompatibilityMode:function(){return o()||O>a},ie64:function(){return h.ie()&&D},firefox:function(){return o()||s},opera:function(){return o()||f},webkit:function(){return o()||u},safari:function(){return h.webkit()},chrome:function(){return o()||c},windows:function(){return o()||p},osx:function(){return o()||l},linux:function(){return o()||m},iphone:function(){return o()||v},mobile:function(){return o()||v||x||w||E},nativeApp:function(){return o()||A},android:function(){return o()||w},ipad:function(){return o()||x}},y=h,d=!!(typeof window<"u"&&window.document&&window.document.createElement),U={canUseDOM:d,canUseWorkers:typeof Worker<"u",canUseEventListeners:d&&!!(window.addEventListener||window.attachEvent),canUseViewport:d&&!!window.screen,isInWorker:!d},X=U,g;X.canUseDOM&&(g=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function Y(e,t){if(!X.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&g&&e==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var I=Y,M=10,F=40,b=800;function S(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*M,i=n*M,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(e.deltaMode==1?(r*=F,i*=F):(r*=b,i*=b)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}S.getEventType=function(){return y.firefox()?"DOMMouseScroll":I("wheel")?"wheel":"mousewheel"};var P=S;/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/const T=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),k=_(T);export{P as Y,k as r};
