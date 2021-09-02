import{h as e,g as t}from"./index.e6cd5654.js";import{d as n,h as a,e as i,i as o,x as r,au as l,av as c,aw as s,o as d,c as u,a as m,N as p}from"./vendor.86d64b26.js";const g=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],h=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"];let f=[];const b=(e,t)=>{const n=document.getElementById(e),a=t||function(){};if(!n){const t=document.createElement("script");t.src=e,t.id=e,document.body.appendChild(t),f.push(a);("onload"in t?function(t){t.onload=function(){this.onerror=this.onload=null;for(const e of f)e(null,t);f=null},t.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+e),t)}}:function(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;for(const t of f)t(null,e);f=null}}})(t)}n&&a&&(window.tinymce?a(null,n):f.push(a))};const y={en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"},_=n({name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:()=>[]},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},emits:["change","update:modelValue","input"],setup(n,d){const{emit:u,attrs:m}=d,f=a(!1),_=a(!1),v=a(n.id),w=a(!1),k=a(y),x=i((()=>{const e=n.width;return/^[\d]+(\.[\d]+)?$/.test(e)?`${e}px`:e}));o((()=>[n.value]),(()=>{!f.value&&_.value&&setValue(n.value)})),r((()=>{C()})),l((()=>{window.tinymce&&S()})),c((()=>{j()})),s((()=>{j()}));const C=()=>{b("https://resources.shadowcreator.com/project-sources/lib/tinymce5.7.1/tinymce.min.js",(e=>{if(e){const t=p();t&&t.appContext.config.globalProperties.$message.error(e.message)}else S()}))},S=()=>{window.tinymce.init({selector:`#${v.value}`,menubar:n.menubar,plugins:g.join(","),external_plugins:{},toolbar:n.toolbar.length>0?n.toolbar:h,toolbar_mode:"sliding",height:n.height,language:k.value.zh,body_class:"panel-body ",object_resizing:!0,lineheight_formats:"1 1.1 1.2 1.3 1.4 1.5 1.75 2",fontsize_formats:"12px 14px 16px 18px 24px 36px",media_live_embeds:!0,media_poster:!1,media_alt_source:!1,audio_template_callback:function(e){return`\n            <audio controls>\n              <source src="${e.source}" ${e.sourcemime?' type="'+e.sourcemime+'"':""} />\n            </audio>\n          `},file_picker_types:"file image media",file_picker_callback:function(e,t,n){if("image"==n.filetype){var a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept","image/png,image/jpg,image/gif"),a.onchange=function(){var t=this.files[0],n=new FileReader;n.onload=function(){var a="blobid"+(new Date).getTime(),i=tinymce.activeEditor.editorUpload.blobCache,o=n.result.split(",")[1],r=i.create(a,t,o);i.add(r),e(r.blobUri(),{title:t.name})},n.readAsDataURL(t)},a.click()}},end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,images_upload_handler:(n,a,i,o)=>{const r=n.filename(),l=new FormData;var c;l.append("file",n.blob(),r),l.append("mode",3),l.append("token",t("vite_token")),(c=l,e.request({url:"/upload/image",method:"post",data:c})).then((({data:e})=>{a(e.url)})).catch((e=>{i(e,{remove:!0})}))},init_instance_callback:e=>{n.value&&e.setContent(n.value),_.value=!0,e.on("KeyUp SetContent SetAttrib Change",(()=>{f.value=!0,u("input",e.getContent())}))},setup(e){e.on("FullscreenStateChanged",(e=>{_this.fullscreen=e.state}))}})},j=()=>{const e=window.tinymce.get(v.value);w.value&&e.execCommand("mceFullScreen"),e&&e.destroy()};return{fullscreen:w,containerWidth:x,tinymceId:v,init:C,initTinymce:S,destroyTinymce:j,setContent:function(e){window.tinymce.get(v.value).setContent(e)},getContent:()=>{window.tinymce.get(v.value).getContent()},imageSuccessCBK:e=>{e.forEach((e=>window.tinymce.get(v.value).insertContent(`<img class="wscnph" src="${e.url}" >`)))}}}}),v=m("div",{class:"editor-custom-btn-container"},null,-1);_.render=function(e,t,n,a,i,o){return d(),u("div",{class:[{fullscreen:e.fullscreen},"tinymce-container"],style:{width:e.containerWidth}},[m("textarea",{id:e.tinymceId,class:"tinymce-textarea"},null,8,["id"]),v],6)};export{_};
