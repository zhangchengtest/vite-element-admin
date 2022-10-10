import{C as ct,a as ut,m as P,b as y,i as W,c as b,d as O,N as it,D as mt,e as C,r as ft,f as _t,g as gt,h as bt,j as dt,k as T,l as F,n as le,o as G,u as M,p as $,q as Et,s as pt,t as It,v as Oe,w as Z,x as Nt,y as se,z as oe,A as vt,B as ce,E as ue,M as ie,F as me,G as fe,H as _e,I as ge}from"../@intlify/@intlify.4679f647.js";import{am as Re,k as Lt,e as U,m as V,f as q,R as Ot,A as Rt,i as Tt,y as yt,l as Ft,h as Te,a5 as kt,aa as Ct}from"../@vue/@vue.2b452c3d.js";/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Pt="9.2.2";ct.__EXTEND_POINT__;let ye=ut.__EXTEND_POINT__;const I=()=>++ye,v={UNEXPECTED_RETURN_TYPE:ye,INVALID_ARGUMENT:I(),MUST_BE_CALL_SETUP_TOP:I(),NOT_INSLALLED:I(),NOT_AVAILABLE_IN_LEGACY_MODE:I(),REQUIRED_VALUE:I(),INVALID_VALUE:I(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:I(),NOT_INSLALLED_WITH_PROVIDE:I(),UNEXPECTED_ERROR:I(),NOT_COMPATIBLE_LEGACY_VUE_I18N:I(),BRIDGE_SUPPORT_VUE_2_ONLY:I(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:I(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:I(),__EXTEND_POINT__:I()};function L(e,...r){return bt(e,null,void 0)}const K=P("__transrateVNode"),J=P("__datetimeParts"),z=P("__numberParts"),ht=P("__setPluralRules");P("__intlifyMeta");const St=P("__injectWithOption");function Q(e){if(!O(e))return e;for(const r in e)if(!!Z(e,r))if(!r.includes("."))O(e[r])&&Q(e[r]);else{const a=r.split("."),o=a.length-1;let s=e;for(let c=0;c<o;c++)a[c]in s||(s[a[c]]={}),s=s[a[c]];s[a[o]]=e[r],delete e[r],O(s[a[o]])&&Q(s[a[o]])}return e}function Fe(e,r){const{messages:a,__i18n:o,messageResolver:s,flatJson:c}=r,l=F(a)?a:T(o)?{}:{[e]:{}};if(T(o)&&o.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:i,resource:f}=u;i?(l[i]=l[i]||{},w(f,l[i])):w(f,l)}else b(u)&&w(JSON.parse(u),l)}),s==null&&c)for(const u in l)Z(l,u)&&Q(l[u]);return l}const H=e=>!O(e)||T(e);function w(e,r){if(H(e)||H(r))throw L(v.INVALID_VALUE);for(const a in e)Z(e,a)&&(H(e[a])||H(r[a])?r[a]=e[a]:w(e[a],r[a]))}function Dt(e){return e.type}function At(e,r,a){let o=O(r.messages)?r.messages:{};"__i18nGlobal"in a&&(o=Fe(e.locale.value,{messages:o,__i18n:a.__i18nGlobal}));const s=Object.keys(o);s.length&&s.forEach(c=>{e.mergeLocaleMessage(c,o[c])});{if(O(r.datetimeFormats)){const c=Object.keys(r.datetimeFormats);c.length&&c.forEach(l=>{e.mergeDateTimeFormat(l,r.datetimeFormats[l])})}if(O(r.numberFormats)){const c=Object.keys(r.numberFormats);c.length&&c.forEach(l=>{e.mergeNumberFormat(l,r.numberFormats[l])})}}}function be(e){return kt(Ct,null,e,0)}let de=0;function Ee(e){return(r,a,o,s)=>e(a,o,Te()||void 0,s)}function ke(e={},r){const{__root:a}=e,o=a===void 0;let s=C(e.inheritLocale)?e.inheritLocale:!0;const c=U(a&&s?a.locale.value:b(e.locale)?e.locale:dt),l=U(a&&s?a.fallbackLocale.value:b(e.fallbackLocale)||T(e.fallbackLocale)||F(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),u=U(Fe(c.value,e)),i=U(F(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),f=U(F(e.numberFormats)?e.numberFormats:{[c.value]:{}});let p=a?a.missingWarn:C(e.missingWarn)||le(e.missingWarn)?e.missingWarn:!0,_=a?a.fallbackWarn:C(e.fallbackWarn)||le(e.fallbackWarn)?e.fallbackWarn:!0,g=a?a.fallbackRoot:C(e.fallbackRoot)?e.fallbackRoot:!0,N=!!e.fallbackFormat,h=G(e.missing)?e.missing:null,k=G(e.missing)?Ee(e.missing):null,D=G(e.postTranslation)?e.postTranslation:null,B=a?a.warnHtmlMessage:C(e.warnHtmlMessage)?e.warnHtmlMessage:!0,Y=!!e.escapeParameter;const ae=a?a.modifiers:F(e.modifiers)?e.modifiers:{};let j=e.pluralRules||a&&a.pluralRules,m;m=(()=>{const t={version:Pt,locale:c.value,fallbackLocale:l.value,messages:u.value,modifiers:ae,pluralRules:j,missing:k===null?void 0:k,missingWarn:p,fallbackWarn:_,fallbackFormat:N,unresolving:!0,postTranslation:D===null?void 0:D,warnHtmlMessage:B,escapeParameter:Y,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return t.datetimeFormats=i.value,t.numberFormats=f.value,t.__datetimeFormatters=F(m)?m.__datetimeFormatters:void 0,t.__numberFormatters=F(m)?m.__numberFormatters:void 0,Nt(t)})(),M(m,c.value,l.value);function he(){return[c.value,l.value,u.value,i.value,f.value]}const Se=V({get:()=>c.value,set:t=>{c.value=t,m.locale=c.value}}),De=V({get:()=>l.value,set:t=>{l.value=t,m.fallbackLocale=l.value,M(m,c.value,t)}}),Ae=V(()=>u.value),Me=V(()=>i.value),Ue=V(()=>f.value);function Ve(){return G(D)?D:null}function we(t){D=t,m.postTranslation=t}function We(){return h}function je(t){t!==null&&(k=Ee(t)),h=t,m.missing=k}const S=(t,n,R,E,X,x)=>{he();let A;if(A=t(m),W(A)&&A===vt){const[ot,Qt]=n();return a&&g?E(a):X(ot)}else{if(x(A))return A;throw L(v.UNEXPECTED_RETURN_TYPE)}};function ne(...t){return S(n=>Reflect.apply(ue,null,[n,...t]),()=>ce(...t),"translate",n=>Reflect.apply(n.t,n,[...t]),n=>n,n=>b(n))}function xe(...t){const[n,R,E]=t;if(E&&!O(E))throw L(v.INVALID_ARGUMENT);return ne(n,R,y({resolvedMessage:!0},E||{}))}function Ge(...t){return S(n=>Reflect.apply(fe,null,[n,...t]),()=>me(...t),"datetime format",n=>Reflect.apply(n.d,n,[...t]),()=>ie,n=>b(n))}function He(...t){return S(n=>Reflect.apply(ge,null,[n,...t]),()=>_e(...t),"number format",n=>Reflect.apply(n.n,n,[...t]),()=>ie,n=>b(n))}function Be(t){return t.map(n=>b(n)||W(n)||C(n)?be(String(n)):n)}const Ye={normalize:Be,interpolate:t=>t,type:"vnode"};function Xe(...t){return S(n=>{let R;const E=n;try{E.processor=Ye,R=Reflect.apply(ue,null,[E,...t])}finally{E.processor=null}return R},()=>ce(...t),"translate",n=>n[K](...t),n=>[be(n)],n=>T(n))}function $e(...t){return S(n=>Reflect.apply(ge,null,[n,...t]),()=>_e(...t),"number format",n=>n[z](...t),()=>[],n=>b(n)||T(n))}function qe(...t){return S(n=>Reflect.apply(fe,null,[n,...t]),()=>me(...t),"datetime format",n=>n[J](...t),()=>[],n=>b(n)||T(n))}function Ke(t){j=t,m.pluralRules=j}function Je(t,n){const R=b(n)?n:c.value,E=re(R);return m.messageResolver(E,t)!==null}function ze(t){let n=null;const R=Oe(m,l.value,c.value);for(let E=0;E<R.length;E++){const X=u.value[R[E]]||{},x=m.messageResolver(X,t);if(x!=null){n=x;break}}return n}function Qe(t){const n=ze(t);return n!=null?n:a?a.tm(t)||{}:{}}function re(t){return u.value[t]||{}}function Ze(t,n){u.value[t]=n,m.messages=u.value}function et(t,n){u.value[t]=u.value[t]||{},w(n,u.value[t]),m.messages=u.value}function tt(t){return i.value[t]||{}}function at(t,n){i.value[t]=n,m.datetimeFormats=i.value,se(m,t,n)}function nt(t,n){i.value[t]=y(i.value[t]||{},n),m.datetimeFormats=i.value,se(m,t,n)}function rt(t){return f.value[t]||{}}function lt(t,n){f.value[t]=n,m.numberFormats=f.value,oe(m,t,n)}function st(t,n){f.value[t]=y(f.value[t]||{},n),m.numberFormats=f.value,oe(m,t,n)}de++,a&&$&&(q(a.locale,t=>{s&&(c.value=t,m.locale=t,M(m,c.value,l.value))}),q(a.fallbackLocale,t=>{s&&(l.value=t,m.fallbackLocale=t,M(m,c.value,l.value))}));const d={id:de,locale:Se,fallbackLocale:De,get inheritLocale(){return s},set inheritLocale(t){s=t,t&&a&&(c.value=a.locale.value,l.value=a.fallbackLocale.value,M(m,c.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:Ae,get modifiers(){return ae},get pluralRules(){return j||{}},get isGlobal(){return o},get missingWarn(){return p},set missingWarn(t){p=t,m.missingWarn=p},get fallbackWarn(){return _},set fallbackWarn(t){_=t,m.fallbackWarn=_},get fallbackRoot(){return g},set fallbackRoot(t){g=t},get fallbackFormat(){return N},set fallbackFormat(t){N=t,m.fallbackFormat=N},get warnHtmlMessage(){return B},set warnHtmlMessage(t){B=t,m.warnHtmlMessage=t},get escapeParameter(){return Y},set escapeParameter(t){Y=t,m.escapeParameter=t},t:ne,getLocaleMessage:re,setLocaleMessage:Ze,mergeLocaleMessage:et,getPostTranslationHandler:Ve,setPostTranslationHandler:we,getMissingHandler:We,setMissingHandler:je,[ht]:Ke};return d.datetimeFormats=Me,d.numberFormats=Ue,d.rt=xe,d.te=Je,d.tm=Qe,d.d=Ge,d.n=He,d.getDateTimeFormat=tt,d.setDateTimeFormat=at,d.mergeDateTimeFormat=nt,d.getNumberFormat=rt,d.setNumberFormat=lt,d.mergeNumberFormat=st,d[St]=e.__injectWithOption,d[K]=Xe,d[J]=qe,d[z]=$e,d}const ee={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Mt({slots:e},r){return r.length===1&&r[0]==="default"?(e.default?e.default():[]).reduce((o,s)=>o=[...o,...T(s.children)?s.children:[s]],[]):r.reduce((a,o)=>{const s=e[o];return s&&(a[o]=s()),a},{})}function Ce(e){return Ot}const pe={name:"i18n-t",props:y({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>W(e)||!isNaN(e)}},ee),setup(e,r){const{slots:a,attrs:o}=r,s=e.i18n||te({useScope:e.scope,__useComponent:!0});return()=>{const c=Object.keys(a).filter(_=>_!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=b(e.plural)?+e.plural:e.plural);const u=Mt(r,c),i=s[K](e.keypath,u,l),f=y({},o),p=b(e.tag)||O(e.tag)?e.tag:Ce();return Re(p,f,i)}}};function Ut(e){return T(e)&&!b(e[0])}function Pe(e,r,a,o){const{slots:s,attrs:c}=r;return()=>{const l={part:!0};let u={};e.locale&&(l.locale=e.locale),b(e.format)?l.key=e.format:O(e.format)&&(b(e.format.key)&&(l.key=e.format.key),u=Object.keys(e.format).reduce((g,N)=>a.includes(N)?y({},g,{[N]:e.format[N]}):g,{}));const i=o(e.value,l,u);let f=[l.key];T(i)?f=i.map((g,N)=>{const h=s[g.type],k=h?h({[g.type]:g.value,index:N,parts:i}):[g.value];return Ut(k)&&(k[0].key=`${g.type}-${N}`),k}):b(i)&&(f=[i]);const p=y({},c),_=b(e.tag)||O(e.tag)?e.tag:Ce();return Re(_,p,f)}}const Ie={name:"i18n-n",props:y({value:{type:Number,required:!0},format:{type:[String,Object]}},ee),setup(e,r){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return Pe(e,r,it,(...o)=>a[z](...o))}},Ne={name:"i18n-d",props:y({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ee),setup(e,r){const a=e.i18n||te({useScope:"parent",__useComponent:!0});return Pe(e,r,mt,(...o)=>a[J](...o))}};function Vt(e,r){const a=e;if(e.mode==="composition")return a.__getInstance(r)||e.global;{const o=a.__getInstance(r);return o!=null?o.__composer:e.global.__composer}}function wt(e){const r=l=>{const{instance:u,modifiers:i,value:f}=l;if(!u||!u.$)throw L(v.UNEXPECTED_ERROR);const p=Vt(e,u.$),_=ve(f);return[Reflect.apply(p.t,p,[...Le(_)]),p]};return{created:(l,u)=>{const[i,f]=r(u);$&&e.global===f&&(l.__i18nWatcher=q(f.locale,()=>{u.instance&&u.instance.$forceUpdate()})),l.__composer=f,l.textContent=i},unmounted:l=>{$&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:u})=>{if(l.__composer){const i=l.__composer,f=ve(u);l.textContent=Reflect.apply(i.t,i,[...Le(f)])}},getSSRProps:l=>{const[u]=r(l);return{textContent:u}}}}function ve(e){if(b(e))return{path:e};if(F(e)){if(!("path"in e))throw L(v.REQUIRED_VALUE,"path");return e}else throw L(v.INVALID_VALUE)}function Le(e){const{path:r,locale:a,args:o,choice:s,plural:c}=e,l={},u=o||{};return b(a)&&(l.locale=a),W(s)&&(l.plural=s),W(c)&&(l.plural=c),[r,u,l]}function Wt(e,r,...a){const o=F(a[0])?a[0]:{},s=!!o.useI18nComponentName;(C(o.globalInstall)?o.globalInstall:!0)&&(e.component(s?"i18n":pe.name,pe),e.component(Ie.name,Ie),e.component(Ne.name,Ne)),e.directive("t",wt(r))}const jt=P("global-vue-i18n");function ta(e={},r){const a=C(e.globalInjection)?e.globalInjection:!0,o=!0,s=new Map,[c,l]=xt(e),u=P("");function i(_){return s.get(_)||null}function f(_,g){s.set(_,g)}function p(_){s.delete(_)}{const _={get mode(){return"composition"},get allowComposition(){return o},async install(g,...N){g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,_),a&&Kt(g,_.global),Wt(g,_,...N);const h=g.unmount;g.unmount=()=>{_.dispose(),h()}},get global(){return l},dispose(){c.stop()},__instances:s,__getInstance:i,__setInstance:f,__deleteInstance:p};return _}}function te(e={}){const r=Te();if(r==null)throw L(v.MUST_BE_CALL_SETUP_TOP);if(!r.isCE&&r.appContext.app!=null&&!r.appContext.app.__VUE_I18N_SYMBOL__)throw L(v.NOT_INSLALLED);const a=Gt(r),o=Bt(a),s=Dt(r),c=Ht(e,s);if(c==="global")return At(o,e,s),o;if(c==="parent"){let i=Yt(a,r,e.__useComponent);return i==null&&(i=o),i}const l=a;let u=l.__getInstance(r);if(u==null){const i=y({},e);"__i18n"in s&&(i.__i18n=s.__i18n),o&&(i.__root=o),u=ke(i),Xt(l,r),l.__setInstance(r,u)}return u}function xt(e,r,a){const o=Lt();{const s=o.run(()=>ke(e));if(s==null)throw L(v.UNEXPECTED_ERROR);return[o,s]}}function Gt(e){{const r=Rt(e.isCE?jt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!r)throw L(e.isCE?v.NOT_INSLALLED_WITH_PROVIDE:v.UNEXPECTED_ERROR);return r}}function Ht(e,r){return Et(e)?"__i18n"in r?"local":"global":e.useScope?e.useScope:"local"}function Bt(e){return e.mode==="composition"?e.global:e.global.__composer}function Yt(e,r,a=!1){let o=null;const s=r.root;let c=r.parent;for(;c!=null;){const l=e;if(e.mode==="composition"&&(o=l.__getInstance(c)),o!=null||s===c)break;c=c.parent}return o}function Xt(e,r,a){Tt(()=>{},r),yt(()=>{e.__deleteInstance(r)},r)}const $t=["locale","fallbackLocale","availableLocales"],qt=["t","rt","d","n","tm"];function Kt(e,r){const a=Object.create(null);$t.forEach(o=>{const s=Object.getOwnPropertyDescriptor(r,o);if(!s)throw L(v.UNEXPECTED_ERROR);const c=Ft(s.value)?{get(){return s.value.value},set(l){s.value.value=l}}:{get(){return s.get&&s.get()}};Object.defineProperty(a,o,c)}),e.config.globalProperties.$i18n=a,qt.forEach(o=>{const s=Object.getOwnPropertyDescriptor(r,o);if(!s||!s.value)throw L(v.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,s)})}ft(pt);_t(It);gt(Oe);export{ta as c,te as u};
