var n=(n,e,o)=>new Promise(((a,i)=>{var t=n=>{try{s(o.next(n))}catch(e){i(e)}},p=n=>{try{s(o.throw(n))}catch(e){i(e)}},s=n=>n.done?a(n.value):Promise.resolve(n.value).then(t,p);s((o=o.apply(n,e)).next())}));import{a8 as e,h as o,x as a,c as i,a as t,D as p,w as s,o as l,p as r,g as c}from"./vendor.de15a04e.js";import{L as d}from"./index.669c2436.js";var u={exports:{}},A=u.exports=function(){function n(n){var a=[];return n.AMapUI&&a.push(e(n.AMapUI)),n.Loca&&a.push(o(n.Loca)),Promise.all(a)}function e(n){return new Promise((function(e,o){var i=[];if(n.plugins)for(var l=0;l<n.plugins.length;l+=1)-1==t.AMapUI.plugins.indexOf(n.plugins[l])&&i.push(n.plugins[l]);if(p.AMapUI===a.failed)o("前次请求 AMapUI 失败");else if(p.AMapUI===a.notload){p.AMapUI=a.loading,t.AMapUI.version=n.version||t.AMapUI.version,l=t.AMapUI.version;var r=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+l+"/main.js",c.onerror=function(n){p.AMapUI=a.failed,o("请求 AMapUI 失败")},c.onload=function(){if(p.AMapUI=a.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var n=0,o=i.length;n<o;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}for(e();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(e();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},r.appendChild(c)}else p.AMapUI===a.loaded?n.version&&n.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,o=i.length;n<o;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}e()})):e():n.version&&n.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(n){n?o(n):i.length?window.AMapUI.loadUI(i,(function(){for(var n=0,o=i.length;n<o;n++){var a=i[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}e()})):e()}))}))}function o(n){return new Promise((function(e,o){if(p.Loca===a.failed)o("前次请求 Loca 失败");else if(p.Loca===a.notload){p.Loca=a.loading,t.Loca.version=n.version||t.Loca.version;var i=t.Loca.version,l=t.AMap.version.startsWith("2"),r=i.startsWith("2");if(l&&!r||!l&&r)o("JSAPI 与 Loca 版本不对应！！");else{l=t.key,r=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+l,c.onerror=function(n){p.Loca=a.failed,o("请求 AMapUI 失败")},c.onload=function(){for(p.Loca=a.loaded,e();s.Loca.length;)s.Loca.splice(0,1)[0]()},r.appendChild(c)}}else p.Loca===a.loaded?n.version&&n.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):e():n.version&&n.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):s.Loca.push((function(n){n?o(n):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a,i;(i=a||(a={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]},l=[],r=function(n){"function"==typeof n&&(p.AMap===a.loaded?n(window.AMap):l.push(n))};return{load:function(e){return new Promise((function(o,i){if(p.AMap==a.failed)i("");else if(p.AMap==a.notload){var s=e.key,c=e.version,d=e.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=s,t.AMap.version=c||t.AMap.version,t.AMap.plugins=d||t.AMap.plugins,p.AMap=a.loading,c=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)p.AMap=a.failed,i(t);else for(p.AMap=a.loaded,n(e).then((function(){o(window.AMap)})).catch(i);l.length;)l.splice(0,1)[0]()},(d=document.createElement("script")).type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+s+"&plugin="+t.AMap.plugins.join(","),d.onerror=function(n){p.AMap=a.failed,i(n)},c.appendChild(d)):i("请填写key")}else if(p.AMap==a.loaded)if(e.key&&e.key!==t.key)i("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(s=[],e.plugins)for(c=0;c<e.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(e.plugins[c])&&s.push(e.plugins[c]);s.length?window.AMap.plugin(s,(function(){n(e).then((function(){o(window.AMap)})).catch(i)})):n(e).then((function(){o(window.AMap)})).catch(i)}else if(e.key&&e.key!==t.key)i("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var u=[];if(e.plugins)for(c=0;c<e.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(e.plugins[c])&&u.push(e.plugins[c]);r((function(){u.length?window.AMap.plugin(u,(function(){n(e).then((function(){o(window.AMap)})).catch(i)})):n(e).then((function(){o(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}();const M=s();r("data-v-42b51278");const f={class:"section-container"};c();const v={expose:[],setup(e){const s=o(),r={key:"5dc1bd09758a3d8eaafa4a8e5800e29c",version:"2.0",plugins:["AMap.MarkerCluster"],AMapUI:{version:"1.1",plugins:[]},Loca:{version:"2.0.0"}},c=e=>n(this,null,(function*(){const n=new AMap.Marker({position:new AMap.LngLat(116.39,39.9),title:"北京"});e.add(n)})),u=e=>n(this,null,(function*(){const n=new AMap.Marker({position:new AMap.LngLat(116.39,39.9),offset:new AMap.Pixel(-10,-10),icon:"//vdata.amap.com/icons/b18/1/2.png",title:"北京"});e.add(n)}));return a((()=>{A.load(r).then((e=>n(this,null,(function*(){const n=new e.Map(s.value,{zoom:12,center:[116.397428,39.90923],pitch:0,viewMode:"3D"});yield c(n),yield u(n)})))).catch((n=>{console.log(n)}))})),(n,e)=>(l(),i(p(d),{title:"高德地图",subtitle:"高德地图的简单使用"},{body:M((()=>[t("div",f,[t("div",{id:"container",ref:s},null,512)])])),_:1}))},__scopeId:"data-v-42b51278"};export default v;
