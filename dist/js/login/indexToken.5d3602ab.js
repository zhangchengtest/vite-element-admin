import{t as l}from"../tinode-sdk/tinode-sdk.dad167f1.js";import{_ as d,u as _}from"../../assets/index.21f6149a.js";import{a as b,u as h}from"../vue-router/vue-router.dd20951a.js";import{d as f}from"../lodash-es/lodash-es.7c973300.js";import{F as w,e as g,v as A,i as v,y as I,c as T,o as M}from"../@vue/@vue.2b452c3d.js";import{N as a}from"../nprogress/nprogress.47a88857.js";import"../@amap/@amap.99378080.js";import"../element-plus/element-plus.caa9b8d8.js";import"../@vueuse/@vueuse.43da1a8a.js";import"../@element-plus/@element-plus.efad60f8.js";import"../@ctrl/@ctrl.e9ed8208.js";import"../dayjs/dayjs.c11b9178.js";import"../async-validator/async-validator.c202887f.js";import"../memoize-one/memoize-one.ee232c16.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.49709035.js";import"../@floating-ui/@floating-ui.f0121856.js";import"../vue/vue.7cf591d0.js";import"../lodash-unified/lodash-unified.848cb84c.js";import"../pinia/pinia.f1018e5b.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.1ab0adc1.js";import"../geotiff/geotiff.ef2c36fd.js";import"../path-browserify/path-browserify.a545effa.js";import"../screenfull/screenfull.e4fe316c.js";import"../mitt/mitt.fcf4f812.js";import"../qs/qs.3da673cc.js";import"../side-channel/side-channel.3edb57a1.js";import"../get-intrinsic/get-intrinsic.5afea291.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.4790b089.js";import"../object-inspect/object-inspect.ce046177.js";/* empty css                                 */import"../clipboard/clipboard.37ebffe6.js";import"../vue-i18n/vue-i18n.5b025ae2.js";import"../@intlify/@intlify.4679f647.js";import"../xe-utils/xe-utils.088326cd.js";import"../vxe-table/vxe-table.94466d41.js";import"../vite-plugin-mock/vite-plugin-mock.5aa09a6a.js";import"../mockjs/mockjs.7f7b19f3.js";import"../path-to-regexp/path-to-regexp.580946d7.js";const u=()=>{const o=navigator.userAgent.toLowerCase(),r=o.match(/iphone os/i)=="iphone os",c=o.match(/midp/i)=="midp",n=o.match(/rv:1.2.3.4/i)=="rv:1.2.3.4",i=o.match(/ucweb/i)=="ucweb",s=o.match(/android/i)=="android",t=o.match(/windows ce/i)=="windows ce",e=o.match(/windows mobile/i)=="windows mobile";return!!(r||c||n||i||s||t||e)},E="AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K",k="Tinode-IM2",x="localhost:6060";function y(){const o=new l.exports.Tinode({appName:k,host:x,apiKey:E,transport:null,secure:!1,persist:!1});return o.contacts={},o.enableLogging(!0),o.onDisconnect=function(){console.log("Client has disconnected!")},o}const p=y();const C={class:"section-container login-container un-select"},N=w({name:"LoginToken"}),z=Object.assign(N,{setup(o){const r=_(),c=b(),n=h(),i=g(!0),s=f(()=>{i.value=!u()},50);return A(()=>{i.value=!u()}),v(()=>{window.addEventListener("resize",s)}),I(()=>{window.removeEventListener("resize",s)}),a.start(),p.connect().then(()=>{console.log(n.query.token);var t=n.query.token;return t=t.replace(/ /g,"+"),p.loginToken(t)}).then(t=>{console.log(t);const e=p.getMeTopic();e.onMetaDesc=function(m){console.log(m.public.fn),r.SET_TOKEN(m.public.fn),c.push("/puzzle/index"),a.done()},e.subscribe(e.startMetaQuery().withDesc().build())}).catch(t=>{console.log(t)}),(t,e)=>(M(),T("div",C))}}),Io=d(z,[["__scopeId","data-v-46ab7544"]]);export{Io as default};
