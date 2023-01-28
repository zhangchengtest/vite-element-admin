import{J as m}from"../echarts/echarts.ea307fdb.js";import{s as n,i as c,x as d,o as l,c as s,V as h,W as u,a5 as f}from"../@vue/@vue.2b452c3d.js";import{_ as x}from"../../assets/index.0c126eda.js";import"../zrender/zrender.911fcb2e.js";import"../tslib/tslib.e35f93b8.js";import"../@amap/@amap.99378080.js";import"../element-plus/element-plus.caa9b8d8.js";import"../lodash-es/lodash-es.7c973300.js";import"../@vueuse/@vueuse.43da1a8a.js";import"../@element-plus/@element-plus.efad60f8.js";import"../@ctrl/@ctrl.e9ed8208.js";import"../dayjs/dayjs.c11b9178.js";import"../async-validator/async-validator.c202887f.js";import"../memoize-one/memoize-one.ee232c16.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.49709035.js";import"../@floating-ui/@floating-ui.f0121856.js";import"../vue/vue.7cf591d0.js";import"../lodash-unified/lodash-unified.848cb84c.js";import"../pinia/pinia.f1018e5b.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.35a30da6.js";import"../geotiff/geotiff.ef2c36fd.js";import"../vue-router/vue-router.dd20951a.js";import"../path-browserify/path-browserify.a545effa.js";import"../screenfull/screenfull.e4fe316c.js";import"../mitt/mitt.fcf4f812.js";import"../qs/qs.3da673cc.js";import"../side-channel/side-channel.3edb57a1.js";import"../get-intrinsic/get-intrinsic.5afea291.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.4790b089.js";import"../object-inspect/object-inspect.ce046177.js";import"../nprogress/nprogress.47a88857.js";/* empty css                                 */import"../clipboard/clipboard.37ebffe6.js";import"../vue-i18n/vue-i18n.5b025ae2.js";import"../@intlify/@intlify.4679f647.js";import"../xe-utils/xe-utils.088326cd.js";import"../vxe-table/vxe-table.94466d41.js";import"../vite-plugin-mock/vite-plugin-mock.5aa09a6a.js";import"../mockjs/mockjs.7f7b19f3.js";import"../path-to-regexp/path-to-regexp.580946d7.js";const y=["id"],_={__name:"MixChart",props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup(a){const e=a,o=n(null);c(()=>{p()}),d(()=>{!o.value||(o.value.dispose(),o.value=null)});const p=()=>{o.value=m(document.getElementById(e.id));const i=function(){const t=[];for(let r=1;r<13;r++)t.push(r+"month");return t}();o.value.setOption({backgroundColor:"#344b58",title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["female","male","average"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:i}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"female",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter(t){return t.value>0?t.value:""}}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"male",type:"bar",stack:"total",itemStyle:{normal:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter(t){return t.value>0?t.value:""}}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter(t){return t.value>0?t.value:""}}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})};return(i,t)=>(l(),s("div",{id:e.id,class:h(e.className),style:u({height:e.height,width:e.width})},null,14,y))}};const b={class:"chart-container"},g={__name:"mix-chart",setup(a){return(e,o)=>(l(),s("div",b,[f(_,{height:"100%",width:"100%"})]))}},dt=x(g,[["__scopeId","data-v-da25346c"]]);export{dt as default};