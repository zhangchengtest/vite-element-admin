import{M as i}from"../@mojs/@mojs.02d0a2fb.js";import{_ as b}from"../../assets/index.20f9cd1c.js";import{F as g,e as a,i as f,c as h,a5 as n,_ as p,a as t,ab as c,o as k,ba as v,b9 as y,a3 as d}from"../@vue/@vue.2b452c3d.js";import"../@amap/@amap.99378080.js";import"../element-plus/element-plus.caa9b8d8.js";import"../lodash-es/lodash-es.7c973300.js";import"../@vueuse/@vueuse.43da1a8a.js";import"../@element-plus/@element-plus.efad60f8.js";import"../@ctrl/@ctrl.e9ed8208.js";import"../dayjs/dayjs.c11b9178.js";import"../async-validator/async-validator.c202887f.js";import"../memoize-one/memoize-one.ee232c16.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.49709035.js";import"../@floating-ui/@floating-ui.f0121856.js";import"../vue/vue.7cf591d0.js";import"../lodash-unified/lodash-unified.848cb84c.js";import"../pinia/pinia.f1018e5b.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.35a30da6.js";import"../geotiff/geotiff.ef2c36fd.js";import"../vue-router/vue-router.dd20951a.js";import"../path-browserify/path-browserify.a545effa.js";import"../screenfull/screenfull.e4fe316c.js";import"../mitt/mitt.fcf4f812.js";import"../qs/qs.3da673cc.js";import"../side-channel/side-channel.3edb57a1.js";import"../get-intrinsic/get-intrinsic.5afea291.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.4790b089.js";import"../object-inspect/object-inspect.ce046177.js";import"../nprogress/nprogress.47a88857.js";/* empty css                                 */import"../clipboard/clipboard.37ebffe6.js";import"../vue-i18n/vue-i18n.5b025ae2.js";import"../@intlify/@intlify.4679f647.js";import"../xe-utils/xe-utils.088326cd.js";import"../vxe-table/vxe-table.94466d41.js";import"../vite-plugin-mock/vite-plugin-mock.5aa09a6a.js";import"../mockjs/mockjs.7f7b19f3.js";import"../path-to-regexp/path-to-regexp.580946d7.js";const o=e=>(v("data-v-8a38bf69"),e=e(),y(),e),j={class:"animate-section"},x=d("mo.js "),M=o(()=>t("span",null," See More : https://mojs.github.io/tutorials/getting-started.html#setup-mo-js-in-your-project ",-1)),S=o(()=>t("span",null," See More : https://blog.csdn.net/qq_22841387/article/details/122930324 ",-1)),w=d(" start "),B=o(()=>t("div",{id:"js-black-bg",class:"background black-background"},null,-1)),C=o(()=>t("div",{id:"js-green-bg",class:"background green-background"},null,-1)),I=o(()=>t("div",{id:"js-pink-bg",class:"background pink-background"},[t("div",{id:"js-logo",class:"pink-background__logo"})],-1)),N=g({name:"Animate"}),V=Object.assign(N,{setup(e){const r=a(null),l=a(null);let s;f(()=>{s=new i.Burst({radius:{0:50},parent:r.value,easing:i.easing.bezier(.1,1,.3,1),duration:1500,delay:300,children:{duration:750,radius:{0:"rand(5,25)"},shape:["circle","rect","polygon"],fill:["#1abc9c","#2ecc71","#00cec9","#3498db","#9b59b6","#fdcb6e","#f1c40f","#e67e22","#e74c3c","#e84393"],degreeShift:"rand(-90, 90)",delay:"stagger(0, 40)"},opacity:.6,count:10})});const m=()=>{new i.Timeline().add(s).play()};return(q,z)=>{const _=c("el-divider"),u=c("el-button");return k(),h("div",j,[n(_,{"content-position":"left"},{default:p(()=>[x]),_:1}),M,S,n(u,{type:"primary",size:"default",onClick:m},{default:p(()=>[w]),_:1}),t("div",{ref_key:"heart",ref:r,class:"heart"},null,512),t("div",{ref_key:"logo",ref:l,class:"logo"},null,512),B,C,I])}}}),xt=b(V,[["__scopeId","data-v-8a38bf69"]]);export{xt as default};