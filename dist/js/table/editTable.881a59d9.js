import{p as w}from"../index/index.fbfdf916.js";import{g as M}from"../article/article.7b75faac.js";import{L as N}from"../index/index.1586a293.js";import{_ as O}from"../../assets/index.8ef1213f.js";import{E as D}from"../element-plus/element-plus.caa9b8d8.js";import{F as R,e as $,p as S,Z as p,_ as e,u as k,ab as s,ao as j,o as l,a as m,a5 as i,$ as P,a4 as o,c as u,ae as A,R as g,a3 as c}from"../@vue/@vue.2b452c3d.js";import"../pinia/pinia.f1018e5b.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.35a30da6.js";import"../@amap/@amap.99378080.js";import"../geotiff/geotiff.ef2c36fd.js";import"../vue-router/vue-router.dd20951a.js";import"../path-to-regexp/path-to-regexp.ecb763cd.js";import"../fuse.js/fuse.js.8cd4e865.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../screenfull/screenfull.55a5d770.js";import"../vue-i18n/vue-i18n.6aec34d1.js";import"../@intlify/@intlify.4679f647.js";import"../mitt/mitt.fcf4f812.js";import"../lodash-es/lodash-es.7c973300.js";import"../@element-plus/@element-plus.efad60f8.js";import"../@vueuse/@vueuse.43da1a8a.js";import"../qs/qs.3da673cc.js";import"../side-channel/side-channel.3edb57a1.js";import"../get-intrinsic/get-intrinsic.5afea291.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.4790b089.js";import"../object-inspect/object-inspect.ce046177.js";import"../nprogress/nprogress.47a88857.js";/* empty css                                 */import"../clipboard/clipboard.37ebffe6.js";import"../xe-utils/xe-utils.088326cd.js";import"../vxe-table/vxe-table.94466d41.js";import"../vite-plugin-mock/vite-plugin-mock.ee99d99a.js";import"../mockjs/mockjs.7f7b19f3.js";import"../@ctrl/@ctrl.e9ed8208.js";import"../dayjs/dayjs.c11b9178.js";import"../async-validator/async-validator.c202887f.js";import"../memoize-one/memoize-one.ee232c16.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.49709035.js";import"../@floating-ui/@floating-ui.f0121856.js";import"../vue/vue.7cf591d0.js";import"../lodash-unified/lodash-unified.848cb84c.js";const Q={class:"section-container"},Z=c("Element Plus Table"),q=c(" cancel "),G={key:1},H=c("Ok"),J=c("Edit"),K=c("Vxe Table"),W=c(" cancel "),X={key:1},Y=c("Ok"),tt=c("Edit"),et=R({name:"EditTable"}),it=Object.assign(et,{setup(lt){const v=$(null),f=$(!0),I=S({page:1,limit:10}),y=n=>({published:"success",draft:"info",deleted:"danger"})[n],L=async()=>{f.value=!0;const{data:n}=await M(I),b=n.items;v.value=b.map(_=>({..._,edit:!1,originalTitle:_.title})),f.value=!1},x=n=>{n.title=n.originalTitle,n.edit=!1,D({message:"The title has been restored to the original value",type:"warning"})},C=n=>{n.edit=!1,n.originalTitle=n.title,D({message:"The title has been edited",type:"success"})};return L(),(n,b)=>{const _=s("el-divider"),d=s("el-table-column"),T=s("svg-icon"),V=s("el-tag"),E=s("el-input"),z=s("el-button"),h=s("vxe-button"),B=s("el-table"),r=s("vxe-column"),U=s("vxe-table"),F=j("loading");return l(),p(k(N),{title:"\u53EF\u7F16\u8F91\u8868\u683C"},{body:e(()=>[m("div",Q,[i(_,{"content-position":"left"},{default:e(()=>[Z]),_:1}),P((l(),p(B,{data:v.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[i(d,{align:"center",label:"ID",width:"65"},{default:e(({row:t})=>[m("span",null,o(t.id),1)]),_:1}),i(d,{width:"180px",align:"center",label:"Date"},{default:e(({row:t})=>[m("span",null,o(k(w)(t.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),i(d,{width:"110px",align:"center",label:"Author"},{default:e(({row:t})=>[m("span",null,o(t.author),1)]),_:1}),i(d,{width:"100px",label:"Importance"},{default:e(({row:t})=>[(l(!0),u(g,null,A(t.importance,a=>(l(),p(T,{key:a,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),i(d,{align:"center",label:"Readings",width:"95"},{default:e(({row:t})=>[m("span",null,o(t.pageviews),1)]),_:1}),i(d,{"class-name":"status-col",label:"Status",width:"110"},{default:e(({row:t})=>[i(V,{type:y(t.status)},{default:e(()=>[c(o(t.status),1)]),_:2},1032,["type"])]),_:1}),i(d,{"min-width":"300px",label:"Title"},{default:e(({row:t})=>[t.edit?(l(),u(g,{key:0},[i(E,{modelValue:t.title,"onUpdate:modelValue":a=>t.title=a,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),i(z,{class:"cancel-btn",size:"small",type:"warning",onClick:a=>x(t)},{default:e(()=>[q]),_:2},1032,["onClick"])],64)):(l(),u("span",G,o(t.title),1))]),_:1}),i(d,{align:"center",label:"Actions",width:"120"},{default:e(({row:t})=>[t.edit?(l(),p(h,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:a=>C(t)},{default:e(()=>[H]),_:2},1032,["onClick"])):(l(),p(h,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:a=>t.edit=!t.edit},{default:e(()=>[J]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])),[[F,f.value]]),i(_,{"content-position":"left"},{default:e(()=>[K]),_:1}),i(U,{round:"",border:"",data:v.value,loading:f.value,style:{width:"100%"}},{default:e(()=>[i(r,{align:"center",field:"id",title:"ID",width:"65"}),i(r,{align:"center",field:"timestamp",title:"Date",width:"180px"},{default:e(({row:t})=>[m("span",null,o(k(w)(t.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),i(r,{align:"center",field:"author",title:"Author",width:"110px"}),i(r,{width:"100px",title:"Importance"},{default:e(({row:t})=>[(l(!0),u(g,null,A(t.importance,a=>(l(),p(T,{key:a,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),i(r,{align:"center",title:"Readings",width:"95"},{default:e(({row:t})=>[m("span",null,o(t.pageviews),1)]),_:1}),i(r,{"class-name":"status-col",label:"Status",width:"110"},{default:e(({row:t})=>[i(V,{type:y(t.status)},{default:e(()=>[c(o(t.status),1)]),_:2},1032,["type"])]),_:1}),i(r,{"min-width":"300px",title:"Title"},{default:e(({row:t})=>[t.edit?(l(),u(g,{key:0},[i(E,{modelValue:t.title,"onUpdate:modelValue":a=>t.title=a,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),i(z,{class:"cancel-btn",size:"small",type:"warning",onClick:a=>x(t)},{default:e(()=>[W]),_:2},1032,["onClick"])],64)):(l(),u("span",X,o(t.title),1))]),_:1}),i(r,{align:"center",title:"Actions",width:"120"},{default:e(({row:t})=>[t.edit?(l(),p(h,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:a=>C(t)},{default:e(()=>[Y]),_:2},1032,["onClick"])):(l(),p(h,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:a=>t.edit=!t.edit},{default:e(()=>[tt]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data","loading"])])]),_:1})}}}),Kt=O(it,[["__scopeId","data-v-7ee72d99"]]);export{Kt as default};
