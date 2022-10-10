import{k as B,e as H,E as I,h as J,A as Y,f as Z,p as $,l as L,B as N,G as A,y as T,n as tt,t as et,m as st}from"../@vue/@vue.2b452c3d.js";var nt=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let U;const R=t=>U=t,W=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function at(){const t=B(!0),n=t.run(()=>H({}));let s=[],e=[];const c=I({install(u){R(c),c._a=u,u.provide(W,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!nt?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const q=()=>{};function V(t,n,s,e=q){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&J()&&T(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function x(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];O(c)&&O(e)&&t.hasOwnProperty(s)&&!L(e)&&!N(e)?t[s]=x(c,e):t[s]=e}return t}const ot=Symbol();function ct(t){return!O(t)||!t.hasOwnProperty(ot)}const{assign:h}=Object;function rt(t){return!!(L(t)&&t.effect)}function ut(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function b(){f||(s.state.value[t]=c?c():{});const y=et(s.state.value[t]);return h(y,u,Object.keys(a||{}).reduce((v,S)=>(v[S]=I(st(()=>{R(s);const _=s._s.get(t);return a[S].call(_,_)})),v),{}))}return m=z(t,b,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(S=>{h(S,v)})},m}function z(t,n,s={},e,c,u){let a;const f=h({actions:{}},s),m={deep:!0};let b,y,v=I([]),S=I([]),_;const p=e.state.value[t];!u&&!p&&(e.state.value[t]={}),H({});let C;function F(r){let o;b=y=!1,typeof r=="function"?(r(e.state.value[t]),o={type:k.patchFunction,storeId:t,events:_}):(x(e.state.value[t],r),o={type:k.patchObject,payload:r,storeId:t,events:_});const d=C=Symbol();tt().then(()=>{C===d&&(b=!0)}),y=!0,j(v,o,e.state.value[t])}const D=q;function G(){a.stop(),v=[],S=[],e._s.delete(t)}function K(r,o){return function(){R(e);const d=Array.from(arguments),g=[],w=[];function Q(i){g.push(i)}function X(i){w.push(i)}j(S,{args:d,name:r,store:l,after:Q,onError:X});let E;try{E=o.apply(this&&this.$id===t?this:l,d)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(g,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(g,E),E)}}const M={_p:e,$id:t,$onAction:V.bind(null,S),$patch:F,$reset:D,$subscribe(r,o={}){const d=V(v,r,o.detached,()=>g()),g=a.run(()=>Z(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&r({storeId:t,type:k.direct,events:_},w)},h({},m,o)));return d},$dispose:G},l=$(h({},M));e._s.set(t,l);const P=e._e.run(()=>(a=B(),a.run(()=>n())));for(const r in P){const o=P[r];if(L(o)&&!rt(o)||N(o))u||(p&&ct(o)&&(L(o)?o.value=p[r]:x(o,p[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const d=K(r,o);P[r]=d,f.actions[r]=o}}return h(l,P),h(A(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{h(o,r)})}}),e._p.forEach(r=>{h(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),p&&u&&s.hydrate&&s.hydrate(l.$state,p),b=!0,y=!0,l}function it(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const b=J();return f=f||b&&Y(W),f&&R(f),f=U,f._s.has(e)||(u?z(e,n,c,f):ut(e,c,f)),f._s.get(e)}return a.$id=e,a}export{at as c,it as d};
