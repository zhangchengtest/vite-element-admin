import{F as N,e as s,f as B,ab as o,o as a,c as h,a as x,a5 as t,_ as e,Z as i,R as $,ae as w,a3 as n,a4 as D,u as V,ba as j,b9 as C}from"../@vue/@vue.2b452c3d.js";import{L as E}from"../index/index.1586a293.js";import{_ as L}from"../../assets/index.8ef1213f.js";import"../@amap/@amap.99378080.js";import"../element-plus/element-plus.caa9b8d8.js";import"../lodash-es/lodash-es.7c973300.js";import"../@vueuse/@vueuse.43da1a8a.js";import"../@element-plus/@element-plus.efad60f8.js";import"../@ctrl/@ctrl.e9ed8208.js";import"../dayjs/dayjs.c11b9178.js";import"../async-validator/async-validator.c202887f.js";import"../memoize-one/memoize-one.ee232c16.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.49709035.js";import"../@floating-ui/@floating-ui.f0121856.js";import"../vue/vue.7cf591d0.js";import"../lodash-unified/lodash-unified.848cb84c.js";import"../pinia/pinia.f1018e5b.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.35a30da6.js";import"../geotiff/geotiff.ef2c36fd.js";import"../vue-router/vue-router.dd20951a.js";import"../path-to-regexp/path-to-regexp.ecb763cd.js";import"../fuse.js/fuse.js.8cd4e865.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../screenfull/screenfull.55a5d770.js";import"../vue-i18n/vue-i18n.6aec34d1.js";import"../@intlify/@intlify.4679f647.js";import"../mitt/mitt.fcf4f812.js";import"../qs/qs.3da673cc.js";import"../side-channel/side-channel.3edb57a1.js";import"../get-intrinsic/get-intrinsic.5afea291.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.4790b089.js";import"../object-inspect/object-inspect.ce046177.js";import"../nprogress/nprogress.47a88857.js";/* empty css                                 */import"../clipboard/clipboard.37ebffe6.js";import"../xe-utils/xe-utils.088326cd.js";import"../vxe-table/vxe-table.94466d41.js";import"../vite-plugin-mock/vite-plugin-mock.ee99d99a.js";import"../mockjs/mockjs.7f7b19f3.js";const U={class:"app-container"},P={class:"filter-container"},R=n(" apple "),Z=n(" banana "),q=n(" orange "),z=n("Element Plus Table"),A=n("Vxe Table"),G=N({name:"FixedThead"}),H=Object.assign(G,{setup(m){const u=["apple","banana"],p=s([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),r=s(1),O=s(["apple","banana","orange"]),b=s(u),c=s(u);return B(b,g=>{c.value=O.value.filter(d=>g.indexOf(d)>=0),r.value=r.value+1}),(g,d)=>{const f=o("el-checkbox"),T=o("el-checkbox-group"),v=o("el-divider"),k=o("el-table-column"),l=o("el-table"),y=o("vxe-column"),I=o("vxe-table");return a(),h("div",U,[x("div",P,[t(T,{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=_=>b.value=_)},{default:e(()=>[t(f,{label:"apple"},{default:e(()=>[R]),_:1}),t(f,{label:"banana"},{default:e(()=>[Z]),_:1}),t(f,{label:"orange"},{default:e(()=>[q]),_:1})]),_:1},8,["modelValue"])]),t(v,{"content-position":"left"},{default:e(()=>[z]),_:1}),(a(),i(l,{key:r.value,data:p.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[t(k,{prop:"name",label:"fruitName",width:"180"}),(a(!0),h($,null,w(c.value,_=>(a(),i(k,{key:_,label:_},{default:e(S=>[n(D(S.row[_]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),t(v,{"content-position":"left"},{default:e(()=>[A]),_:1}),(a(),i(I,{key:r.value,round:"",border:"",data:p.value},{default:e(()=>[t(y,{field:"name",title:"fruitName",width:"180"}),(a(!0),h($,null,w(c.value,_=>(a(),i(y,{key:_,field:_,title:_},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}}),J={class:"app-container"},K={class:"filter-container"},M=n(" apple "),Q=n(" banana "),W=n(" orange "),X=n("Element Plus Table"),Y=n("Vxe Table"),ee=N({name:"UnfixedThead"}),te=Object.assign(ee,{setup(m){const u=s([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),p=s(1),r=s(["apple","banana"]);return B(r,()=>{p.value=p.value+1}),(O,b)=>{const c=o("el-checkbox"),g=o("el-checkbox-group"),d=o("el-divider"),f=o("el-table-column"),T=o("el-table"),v=o("vxe-column"),k=o("vxe-table");return a(),h("div",J,[x("div",K,[t(g,{modelValue:r.value,"onUpdate:modelValue":b[0]||(b[0]=l=>r.value=l)},{default:e(()=>[t(c,{label:"apple"},{default:e(()=>[M]),_:1}),t(c,{label:"banana"},{default:e(()=>[Q]),_:1}),t(c,{label:"orange"},{default:e(()=>[W]),_:1})]),_:1},8,["modelValue"])]),t(d,{"content-position":"left"},{default:e(()=>[X]),_:1}),(a(),i(T,{key:p.value,data:u.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[t(f,{prop:"name",label:"fruitName",width:"180"}),(a(!0),h($,null,w(r.value,l=>(a(),i(f,{key:l,label:l},{default:e(y=>[n(D(y.row[l]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),t(d,{"content-position":"left"},{default:e(()=>[Y]),_:1}),(a(),i(k,{key:p.value,round:"",border:"",data:u.value},{default:e(()=>[t(v,{field:"name",title:"fruitName",width:"180"}),(a(!0),h($,null,w(r.value,l=>(a(),i(v,{key:l,field:l,title:l},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}});const F=m=>(j("data-v-85188b50"),m=m(),C(),m),ae={class:"section-container"},oe=F(()=>x("div",{style:{margin:"0 0 5px 20px"}},"\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u8868\u5934\u987A\u5E8F\u6392\u5E8F",-1)),ne=F(()=>x("div",{style:{margin:"30px 0 5px 20px"}},"\u4E0D\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u70B9\u51FB\u987A\u5E8F\u6392\u5E8F",-1)),le=N({name:"DynamicTable"}),re=Object.assign(le,{setup(m){return(u,p)=>(a(),i(V(E),{title:"\u52A8\u6001\u8868\u683C"},{body:e(()=>[x("div",ae,[oe,t(V(H)),ne,t(V(te))])]),_:1}))}}),We=L(re,[["__scopeId","data-v-85188b50"]]);export{We as default};
