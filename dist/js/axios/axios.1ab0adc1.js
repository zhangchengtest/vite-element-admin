import{a as or}from"../@amap/@amap.99378080.js";var Je={exports:{}},ue={exports:{}},Ve=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},ur=Ve,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function O(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function L(e){return typeof e>"u"}function fr(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var We=O("ArrayBuffer");function lr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&We(e.buffer),r}function cr(e){return typeof e=="string"}function dr(e){return typeof e=="number"}function ze(e){return e!==null&&typeof e=="object"}function B(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var hr=O("Date"),pr=O("File"),vr=O("Blob"),mr=O("FileList");function de(e){return fe.call(e)==="[object Function]"}function Er(e){return ze(e)&&de(e.pipe)}function Rr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var yr=O("URLSearchParams");function wr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function br(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){B(e[a])&&B(n)?e[a]=oe(e[a],n):B(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function Or(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=ur(n,t):e[a]=n}),e}function Ar(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Sr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Cr(e,r,t){var i,n,a,o={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],o[a]||(r[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function xr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Tr(e){if(!e)return null;var r=e.length;if(L(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Pr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:We,isBuffer:fr,isFormData:Rr,isArrayBufferView:lr,isString:cr,isNumber:dr,isObject:ze,isPlainObject:B,isUndefined:L,isDate:hr,isFile:pr,isBlob:vr,isFunction:de,isStream:Er,isURLSearchParams:yr,isStandardBrowserEnv:br,forEach:he,merge:oe,extend:Or,trim:wr,stripBOM:Ar,inherits:Sr,toFlatObject:Cr,kindOf:le,kindOfTest:O,endsWith:xr,toArray:Tr,isTypedArray:Pr,isFileList:mr},x=v;function ye(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Xe=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(x.isURLSearchParams(t))n=t.toString();else{var a=[];x.forEach(t,function(f,h){f===null||typeof f>"u"||(x.isArray(f)?h=h+"[]":f=[f],x.forEach(f,function(d){x.isDate(d)?d=d.toISOString():x.isObject(d)&&(d=JSON.stringify(d)),a.push(ye(h)+"="+ye(d))}))}),n=a.join("&")}if(n){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Nr=v;function F(){this.handlers=[]}F.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};F.prototype.forEach=function(r){Nr.forEach(this.handlers,function(i){i!==null&&r(i)})};var _r=F,Dr=v,qr=function(r,t){Dr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},J,we;function N(){if(we)return J;we=1;var e=v;function r(n,a,o,s,f){Error.call(this),this.message=n,this.name="AxiosError",a&&(this.code=a),o&&(this.config=o),s&&(this.request=s),f&&(this.response=f)}e.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var t=r.prototype,i={};return["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(n){i[n]={value:n}}),Object.defineProperties(r,i),Object.defineProperty(t,"isAxiosError",{value:!0}),r.from=function(n,a,o,s,f,h){var l=Object.create(t);return e.toFlatObject(n,l,function(u){return u!==Error.prototype}),r.call(l,n.message,a,o,s,f),l.name=n.name,h&&Object.assign(l,h),l},J=r,J}var Ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V,be;function Qe(){if(be)return V;be=1;var e=v;function r(t,i){i=i||new FormData;var n=[];function a(s){return s===null?"":e.isDate(s)?s.toISOString():e.isArrayBuffer(s)||e.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function o(s,f){if(e.isPlainObject(s)||e.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+f);n.push(s),e.forEach(s,function(l,d){if(!e.isUndefined(l)){var u=f?f+"."+d:d,m;if(l&&!f&&typeof l=="object"){if(e.endsWith(d,"{}"))l=JSON.stringify(l);else if(e.endsWith(d,"[]")&&(m=e.toArray(l))){m.forEach(function(U){!e.isUndefined(U)&&i.append(u,a(U))});return}}o(l,u)}}),n.pop()}else i.append(f,a(s))}return o(t),i}return V=r,V}var W,Oe;function Ur(){if(Oe)return W;Oe=1;var e=N();return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var z,Ae;function Br(){if(Ae)return z;Ae=1;var e=v;return z=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,o,s,f){var h=[];h.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&h.push("expires="+new Date(a).toGMTString()),e.isString(o)&&h.push("path="+o),e.isString(s)&&h.push("domain="+s),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),z}var gr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Lr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Fr=gr,jr=Lr,Ye=function(r,t){return r&&!Fr(t)?jr(r,t):t},X,Se;function Ir(){if(Se)return X;Se=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,o,s;return i&&e.forEach(i.split(`
`),function(h){if(s=h.indexOf(":"),a=e.trim(h.substr(0,s)).toLowerCase(),o=e.trim(h.substr(s+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([o]):n[a]=n[a]?n[a]+", "+o:o}}),n},X}var K,Ce;function $r(){if(Ce)return K;Ce=1;var e=v;return K=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(o){var s=o;return t&&(i.setAttribute("href",s),s=i.href),i.setAttribute("href",s),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(s){var f=e.isString(s)?a(s):s;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),K}var Q,xe;function j(){if(xe)return Q;xe=1;var e=N(),r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),Q=t,Q}var Y,Te;function kr(){return Te||(Te=1,Y=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Y}var G,Pe;function Ne(){if(Pe)return G;Pe=1;var e=v,r=Ur(),t=Br(),i=Xe,n=Ye,a=Ir(),o=$r(),s=Ke,f=N(),h=j(),l=kr();return G=function(u){return new Promise(function(U,A){var _=u.data,D=u.headers,q=u.responseType,S;function me(){u.cancelToken&&u.cancelToken.unsubscribe(S),u.signal&&u.signal.removeEventListener("abort",S)}e.isFormData(_)&&e.isStandardBrowserEnv()&&delete D["Content-Type"];var c=new XMLHttpRequest;if(u.auth){var ir=u.auth.username||"",ar=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";D.Authorization="Basic "+btoa(ir+":"+ar)}var k=n(u.baseURL,u.url);c.open(u.method.toUpperCase(),i(k,u.params,u.paramsSerializer),!0),c.timeout=u.timeout;function Ee(){if(!!c){var y="getAllResponseHeaders"in c?a(c.getAllResponseHeaders()):null,C=!q||q==="text"||q==="json"?c.responseText:c.response,b={data:C,status:c.status,statusText:c.statusText,headers:y,config:u,request:c};r(function(H){U(H),me()},function(H){A(H),me()},b),c=null}}if("onloadend"in c?c.onloadend=Ee:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(Ee)},c.onabort=function(){!c||(A(new f("Request aborted",f.ECONNABORTED,u,c)),c=null)},c.onerror=function(){A(new f("Network Error",f.ERR_NETWORK,u,c,c)),c=null},c.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",b=u.transitional||s;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new f(C,b.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,c)),c=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||o(k))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(D[u.xsrfHeaderName]=Re)}"setRequestHeader"in c&&e.forEach(D,function(C,b){typeof _>"u"&&b.toLowerCase()==="content-type"?delete D[b]:c.setRequestHeader(b,C)}),e.isUndefined(u.withCredentials)||(c.withCredentials=!!u.withCredentials),q&&q!=="json"&&(c.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&c.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(S=function(y){!c||(A(!y||y&&y.type?new h:y),c.abort(),c=null)},u.cancelToken&&u.cancelToken.subscribe(S),u.signal&&(u.signal.aborted?S():u.signal.addEventListener("abort",S))),_||(_=null);var M=l(k);if(M&&["http","https","file"].indexOf(M)===-1){A(new f("Unsupported protocol "+M+":",f.ERR_BAD_REQUEST,u));return}c.send(_)})},G}var Z,_e;function Mr(){return _e||(_e=1,Z=null),Z}var p=v,De=qr,qe=N(),Hr=Ke,Jr=Qe(),Vr={"Content-Type":"application/x-www-form-urlencoded"};function Ue(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Wr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ne()),e}function zr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:Hr,adapter:Wr(),transformRequest:[function(r,t){if(De(t,"Accept"),De(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return Ue(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Jr(a?{"files[]":r}:r,o&&new o)}else if(i||n==="application/json")return Ue(t,"application/json"),zr(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(a)throw o.name==="SyntaxError"?qe.from(o,qe.ERR_BAD_RESPONSE,this,null,this.response):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(Vr)});var pe=I,Xr=v,Kr=pe,Qr=function(r,t,i){var n=this||Kr;return Xr.forEach(i,function(o){r=o.call(n,r,t)}),r},ee,Be;function Ge(){return Be||(Be=1,ee=function(r){return!!(r&&r.__CANCEL__)}),ee}var ge=v,re=Qr,Yr=Ge(),Gr=pe,Zr=j();function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zr}var et=function(r){te(r),r.headers=r.headers||{},r.data=re.call(r,r.data,r.headers,r.transformRequest),r.headers=ge.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||Gr.adapter;return t(r).then(function(n){return te(r),n.data=re.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Yr(n)||(te(r),n&&n.response&&(n.response.data=re.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},R=v,Ze=function(r,t){t=t||{};var i={};function n(l,d){return R.isPlainObject(l)&&R.isPlainObject(d)?R.merge(l,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function a(l){if(R.isUndefined(t[l])){if(!R.isUndefined(r[l]))return n(void 0,r[l])}else return n(r[l],t[l])}function o(l){if(!R.isUndefined(t[l]))return n(void 0,t[l])}function s(l){if(R.isUndefined(t[l])){if(!R.isUndefined(r[l]))return n(void 0,r[l])}else return n(void 0,t[l])}function f(l){if(l in t)return n(r[l],t[l]);if(l in r)return n(void 0,r[l])}var h={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:f};return R.forEach(Object.keys(r).concat(Object.keys(t)),function(d){var u=h[d]||a,m=u(d);R.isUndefined(m)&&u!==f||(i[d]=m)}),i},ne,Le;function er(){return Le||(Le=1,ne={version:"0.27.2"}),ne}var rt=er().version,w=N(),ve={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ve[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Fe={};ve.transitional=function(r,t,i){function n(a,o){return"[Axios v"+rt+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,s){if(r===!1)throw new w(n(o," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!Fe[o]&&(Fe[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,o,s):!0}};function tt(e,r,t){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],o=r[a];if(o){var s=e[a],f=s===void 0||o(s,a,e);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var nt={assertOptions:tt,validators:ve},rr=v,it=Xe,je=_r,Ie=et,$=Ze,at=Ye,tr=nt,T=tr.validators;function P(e){this.defaults=e,this.interceptors={request:new je,response:new je}}P.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=$(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&tr.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var s;if(!a){var f=[Ie,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),s=Promise.resolve(t);f.length;)s=s.then(f.shift(),f.shift());return s}for(var h=t;n.length;){var l=n.shift(),d=n.shift();try{h=l(h)}catch(u){d(u);break}}try{s=Ie(h)}catch(u){return Promise.reject(u)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};P.prototype.getUri=function(r){r=$(this.defaults,r);var t=at(r.baseURL,r.url);return it(t,r.params,r.paramsSerializer)};rr.forEach(["delete","get","head","options"],function(r){P.prototype[r]=function(t,i){return this.request($(i||{},{method:r,url:t,data:(i||{}).data}))}});rr.forEach(["post","put","patch"],function(r){function t(i){return function(a,o,s){return this.request($(s||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}P.prototype[r]=t(),P.prototype[r+"Form"]=t(!0)});var st=P,ie,$e;function ot(){if($e)return ie;$e=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(o){i=o});var n=this;this.promise.then(function(a){if(!!n._listeners){var o,s=n._listeners.length;for(o=0;o<s;o++)n._listeners[o](a);n._listeners=null}}),this.promise.then=function(a){var o,s=new Promise(function(f){n.subscribe(f),o=f}).then(a);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o){n.reason||(n.reason=new e(o),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(o){i=o});return{token:n,cancel:i}},ie=r,ie}var ae,ke;function ut(){return ke||(ke=1,ae=function(r){return function(i){return r.apply(null,i)}}),ae}var se,Me;function ft(){if(Me)return se;Me=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var He=v,lt=Ve,g=st,ct=Ze,dt=pe;function nr(e){var r=new g(e),t=lt(g.prototype.request,r);return He.extend(t,g.prototype,r),He.extend(t,r),t.create=function(n){return nr(ct(e,n))},t}var E=nr(dt);E.Axios=g;E.CanceledError=j();E.CancelToken=ot();E.isCancel=Ge();E.VERSION=er().version;E.toFormData=Qe();E.AxiosError=N();E.Cancel=E.CanceledError;E.all=function(r){return Promise.all(r)};E.spread=ut();E.isAxiosError=ft();ue.exports=E;ue.exports.default=E;(function(e){e.exports=ue.exports})(Je);const pt=or(Je.exports);export{pt as a};