import{a0 as E,$ as H,a1 as G,a3 as le}from"./request-7ebe3d6d.js";import{c as P}from"./common-5d647e0d.js";import{u as J}from"./vue-i18n.cjs-61def1cf.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{A as q,r as T,w as R,i as F,o as b,c as S,S as m,m as D,p as A,k as $,j as N,F as k,L as Q,l as B,q as W,a as U,H as re,u as M,C as ee,s as te,a_ as ne,aY as oe,y as Z}from"./runtime-core.esm-bundler-0dd628d9.js";var Y={},ue={get exports(){return Y},set exports(v){Y=v}};(function(v,g){(function(c){v.exports=c()})(function(c){var _=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function o(n,r){var t=n[0],e=n[1],l=n[2],a=n[3];t+=(e&l|~e&a)+r[0]-680876936|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&l)+r[1]-389564586|0,a=(a<<12|a>>>20)+t|0,l+=(a&t|~a&e)+r[2]+606105819|0,l=(l<<17|l>>>15)+a|0,e+=(l&a|~l&t)+r[3]-1044525330|0,e=(e<<22|e>>>10)+l|0,t+=(e&l|~e&a)+r[4]-176418897|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&l)+r[5]+1200080426|0,a=(a<<12|a>>>20)+t|0,l+=(a&t|~a&e)+r[6]-1473231341|0,l=(l<<17|l>>>15)+a|0,e+=(l&a|~l&t)+r[7]-45705983|0,e=(e<<22|e>>>10)+l|0,t+=(e&l|~e&a)+r[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&l)+r[9]-1958414417|0,a=(a<<12|a>>>20)+t|0,l+=(a&t|~a&e)+r[10]-42063|0,l=(l<<17|l>>>15)+a|0,e+=(l&a|~l&t)+r[11]-1990404162|0,e=(e<<22|e>>>10)+l|0,t+=(e&l|~e&a)+r[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,a+=(t&e|~t&l)+r[13]-40341101|0,a=(a<<12|a>>>20)+t|0,l+=(a&t|~a&e)+r[14]-1502002290|0,l=(l<<17|l>>>15)+a|0,e+=(l&a|~l&t)+r[15]+1236535329|0,e=(e<<22|e>>>10)+l|0,t+=(e&a|l&~a)+r[1]-165796510|0,t=(t<<5|t>>>27)+e|0,a+=(t&l|e&~l)+r[6]-1069501632|0,a=(a<<9|a>>>23)+t|0,l+=(a&e|t&~e)+r[11]+643717713|0,l=(l<<14|l>>>18)+a|0,e+=(l&t|a&~t)+r[0]-373897302|0,e=(e<<20|e>>>12)+l|0,t+=(e&a|l&~a)+r[5]-701558691|0,t=(t<<5|t>>>27)+e|0,a+=(t&l|e&~l)+r[10]+38016083|0,a=(a<<9|a>>>23)+t|0,l+=(a&e|t&~e)+r[15]-660478335|0,l=(l<<14|l>>>18)+a|0,e+=(l&t|a&~t)+r[4]-405537848|0,e=(e<<20|e>>>12)+l|0,t+=(e&a|l&~a)+r[9]+568446438|0,t=(t<<5|t>>>27)+e|0,a+=(t&l|e&~l)+r[14]-1019803690|0,a=(a<<9|a>>>23)+t|0,l+=(a&e|t&~e)+r[3]-187363961|0,l=(l<<14|l>>>18)+a|0,e+=(l&t|a&~t)+r[8]+1163531501|0,e=(e<<20|e>>>12)+l|0,t+=(e&a|l&~a)+r[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,a+=(t&l|e&~l)+r[2]-51403784|0,a=(a<<9|a>>>23)+t|0,l+=(a&e|t&~e)+r[7]+1735328473|0,l=(l<<14|l>>>18)+a|0,e+=(l&t|a&~t)+r[12]-1926607734|0,e=(e<<20|e>>>12)+l|0,t+=(e^l^a)+r[5]-378558|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^l)+r[8]-2022574463|0,a=(a<<11|a>>>21)+t|0,l+=(a^t^e)+r[11]+1839030562|0,l=(l<<16|l>>>16)+a|0,e+=(l^a^t)+r[14]-35309556|0,e=(e<<23|e>>>9)+l|0,t+=(e^l^a)+r[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^l)+r[4]+1272893353|0,a=(a<<11|a>>>21)+t|0,l+=(a^t^e)+r[7]-155497632|0,l=(l<<16|l>>>16)+a|0,e+=(l^a^t)+r[10]-1094730640|0,e=(e<<23|e>>>9)+l|0,t+=(e^l^a)+r[13]+681279174|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^l)+r[0]-358537222|0,a=(a<<11|a>>>21)+t|0,l+=(a^t^e)+r[3]-722521979|0,l=(l<<16|l>>>16)+a|0,e+=(l^a^t)+r[6]+76029189|0,e=(e<<23|e>>>9)+l|0,t+=(e^l^a)+r[9]-640364487|0,t=(t<<4|t>>>28)+e|0,a+=(t^e^l)+r[12]-421815835|0,a=(a<<11|a>>>21)+t|0,l+=(a^t^e)+r[15]+530742520|0,l=(l<<16|l>>>16)+a|0,e+=(l^a^t)+r[2]-995338651|0,e=(e<<23|e>>>9)+l|0,t+=(l^(e|~a))+r[0]-198630844|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~l))+r[7]+1126891415|0,a=(a<<10|a>>>22)+t|0,l+=(t^(a|~e))+r[14]-1416354905|0,l=(l<<15|l>>>17)+a|0,e+=(a^(l|~t))+r[5]-57434055|0,e=(e<<21|e>>>11)+l|0,t+=(l^(e|~a))+r[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~l))+r[3]-1894986606|0,a=(a<<10|a>>>22)+t|0,l+=(t^(a|~e))+r[10]-1051523|0,l=(l<<15|l>>>17)+a|0,e+=(a^(l|~t))+r[1]-2054922799|0,e=(e<<21|e>>>11)+l|0,t+=(l^(e|~a))+r[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~l))+r[15]-30611744|0,a=(a<<10|a>>>22)+t|0,l+=(t^(a|~e))+r[6]-1560198380|0,l=(l<<15|l>>>17)+a|0,e+=(a^(l|~t))+r[13]+1309151649|0,e=(e<<21|e>>>11)+l|0,t+=(l^(e|~a))+r[4]-145523070|0,t=(t<<6|t>>>26)+e|0,a+=(e^(t|~l))+r[11]-1120210379|0,a=(a<<10|a>>>22)+t|0,l+=(t^(a|~e))+r[2]+718787259|0,l=(l<<15|l>>>17)+a|0,e+=(a^(l|~t))+r[9]-343485551|0,e=(e<<21|e>>>11)+l|0,n[0]=t+n[0]|0,n[1]=e+n[1]|0,n[2]=l+n[2]|0,n[3]=a+n[3]|0}function y(n){var r=[],t;for(t=0;t<64;t+=4)r[t>>2]=n.charCodeAt(t)+(n.charCodeAt(t+1)<<8)+(n.charCodeAt(t+2)<<16)+(n.charCodeAt(t+3)<<24);return r}function i(n){var r=[],t;for(t=0;t<64;t+=4)r[t>>2]=n[t]+(n[t+1]<<8)+(n[t+2]<<16)+(n[t+3]<<24);return r}function w(n){var r=n.length,t=[1732584193,-271733879,-1732584194,271733878],e,l,a,h,I,L;for(e=64;e<=r;e+=64)o(t,y(n.substring(e-64,e)));for(n=n.substring(e-64),l=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<l;e+=1)a[e>>2]|=n.charCodeAt(e)<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(o(t,a),e=0;e<16;e+=1)a[e]=0;return h=r*8,h=h.toString(16).match(/(.*?)(.{0,8})$/),I=parseInt(h[2],16),L=parseInt(h[1],16)||0,a[14]=I,a[15]=L,o(t,a),t}function p(n){var r=n.length,t=[1732584193,-271733879,-1732584194,271733878],e,l,a,h,I,L;for(e=64;e<=r;e+=64)o(t,i(n.subarray(e-64,e)));for(n=e-64<r?n.subarray(e-64):new Uint8Array(0),l=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<l;e+=1)a[e>>2]|=n[e]<<(e%4<<3);if(a[e>>2]|=128<<(e%4<<3),e>55)for(o(t,a),e=0;e<16;e+=1)a[e]=0;return h=r*8,h=h.toString(16).match(/(.*?)(.{0,8})$/),I=parseInt(h[2],16),L=parseInt(h[1],16)||0,a[14]=I,a[15]=L,o(t,a),t}function x(n){var r="",t;for(t=0;t<4;t+=1)r+=_[n>>t*8+4&15]+_[n>>t*8&15];return r}function V(n){var r;for(r=0;r<n.length;r+=1)n[r]=x(n[r]);return n.join("")}V(w("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function n(r,t){return r=r|0||0,r<0?Math.max(r+t,0):Math.min(r,t)}ArrayBuffer.prototype.slice=function(r,t){var e=this.byteLength,l=n(r,e),a=e,h,I,L,X;return t!==c&&(a=n(t,e)),l>a?new ArrayBuffer(0):(h=a-l,I=new ArrayBuffer(h),L=new Uint8Array(I),X=new Uint8Array(this,l,h),L.set(X),I)}}();function C(n){return/[\u0080-\uFFFF]/.test(n)&&(n=unescape(encodeURIComponent(n))),n}function z(n,r){var t=n.length,e=new ArrayBuffer(t),l=new Uint8Array(e),a;for(a=0;a<t;a+=1)l[a]=n.charCodeAt(a);return r?l:e}function s(n){return String.fromCharCode.apply(null,new Uint8Array(n))}function d(n,r,t){var e=new Uint8Array(n.byteLength+r.byteLength);return e.set(new Uint8Array(n)),e.set(new Uint8Array(r),n.byteLength),t?e:e.buffer}function u(n){var r=[],t=n.length,e;for(e=0;e<t-1;e+=2)r.push(parseInt(n.substr(e,2),16));return String.fromCharCode.apply(String,r)}function f(){this.reset()}return f.prototype.append=function(n){return this.appendBinary(C(n)),this},f.prototype.appendBinary=function(n){this._buff+=n,this._length+=n.length;var r=this._buff.length,t;for(t=64;t<=r;t+=64)o(this._hash,y(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},f.prototype.end=function(n){var r=this._buff,t=r.length,e,l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a;for(e=0;e<t;e+=1)l[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(l,t),a=V(this._hash),n&&(a=u(a)),this.reset(),a},f.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},f.prototype.setState=function(n){return this._buff=n.buff,this._length=n.length,this._hash=n.hash,this},f.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},f.prototype._finish=function(n,r){var t=r,e,l,a;if(n[t>>2]|=128<<(t%4<<3),t>55)for(o(this._hash,n),t=0;t<16;t+=1)n[t]=0;e=this._length*8,e=e.toString(16).match(/(.*?)(.{0,8})$/),l=parseInt(e[2],16),a=parseInt(e[1],16)||0,n[14]=l,n[15]=a,o(this._hash,n)},f.hash=function(n,r){return f.hashBinary(C(n),r)},f.hashBinary=function(n,r){var t=w(n),e=V(t);return r?u(e):e},f.ArrayBuffer=function(){this.reset()},f.ArrayBuffer.prototype.append=function(n){var r=d(this._buff.buffer,n,!0),t=r.length,e;for(this._length+=n.byteLength,e=64;e<=t;e+=64)o(this._hash,i(r.subarray(e-64,e)));return this._buff=e-64<t?new Uint8Array(r.buffer.slice(e-64)):new Uint8Array(0),this},f.ArrayBuffer.prototype.end=function(n){var r=this._buff,t=r.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l,a;for(l=0;l<t;l+=1)e[l>>2]|=r[l]<<(l%4<<3);return this._finish(e,t),a=V(this._hash),n&&(a=u(a)),this.reset(),a},f.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.ArrayBuffer.prototype.getState=function(){var n=f.prototype.getState.call(this);return n.buff=s(n.buff),n},f.ArrayBuffer.prototype.setState=function(n){return n.buff=z(n.buff,!0),f.prototype.setState.call(this,n)},f.ArrayBuffer.prototype.destroy=f.prototype.destroy,f.ArrayBuffer.prototype._finish=f.prototype._finish,f.ArrayBuffer.hash=function(n,r){var t=p(new Uint8Array(n)),e=V(t);return r?u(e):e},f})})(ue);const se=Y;function ie(){}var de=ie;const O=function(v,g={}){const{chunkSize:c=2*1024*1024,raw:_=!1,onProgress:o}=g,y=new se.ArrayBuffer,i=new FileReader,w=v.size,p=Math.ceil(w/c);let x=0,V=0;const C=function(){const d=x*c,u=d+c>=w?w:d+c;i.readAsArrayBuffer(File.prototype.slice.call(v,d,u))},z=function(){i.abort()},s=function(d,u){i.addEventListener("load",f=>{var n;if(y.append((n=f.target)===null||n===void 0?void 0:n.result),x++,V=+(x/p).toFixed(2),o==null||o(V),x<p){C();return}d(y.end(_))}),i.addEventListener("abort",()=>{y.reset(),d("")}),i.addEventListener("error",()=>{y.reset(),u(i.error)}),C()};return O.abort=z,new Promise(s)};O.abort=de;const j=async(v,g,c)=>{if(v=="url")return g;if(v=="id"){const _=await P.getFileInfoById(g);return _.data?E.attachUrl(_.data.url,c[_.data.storage_mode]):""}else if(v=="hash"){const _=await P.getFileInfoByHash(g);return _.data?E.attachUrl(_.data.url,c[_.data.storage_mode]):""}},ae=async(v,g,c,_={})=>{const o=await O(v),y=new FormData;y.append(g,v),y.append("isChunk",!1),y.append("hash",o);for(let w in _)y.append(w,_[w]);return(await P[c](y)).data};const ce={class:"upload-image flex"},pe={class:"icon text-3xl"},fe={class:"title"},me={__name:"image-upload",props:{modelValue:{type:[String,Number,Array],default:()=>{}}},emits:["update:modelValue"],setup(v,{emit:g}){const c=v,{t:_}=J(),o=q("config"),y=q("storageMode"),i=T([]),w=T(),p=T({}),x=async s=>{if(!s.fileItem)return;o.multiple||(p.value=s.fileItem);const d=s.fileItem.file;if(d.size>o.size){H.warning(d.name+" "+_("upload.sizeLimit")),p.value=void 0;return}const u=await ae(d,"image","uploadImage",o.requestData);if(u)if(u.url=E.attachUrl(u.url,y[u.storage_mode]),!o.multiple)w.value=u[o.returnType],g("update:modelValue",w.value);else{i.value.push(u);let f=[];f=i.value.map(n=>n[o.returnType]),g("update:modelValue",f)}},V=()=>{p.value=void 0,w.value=void 0,g("update:modelValue",null)},C=s=>{i.value.splice(s,1);let d=[];d=i.value.map(u=>u[o.returnType]),g("update:modelValue",d)},z=async()=>{if(o.multiple)if(G.isArray(c.modelValue)&&c.modelValue.length>0){const s=[];await c.modelValue.map(async d=>{const u=await j(o.returnType,d,y);s.push({url:u})}),i.value=s}else i.value=[];else c.modelValue?(w.value=c.modelValue,j(o.returnType,c.modelValue,y).then(s=>p.value.url=s),p.value.percent=100,p.value.status="complete"):V()};return R(()=>c.modelValue,s=>{z()},{deep:!0,immediate:!0}),(s,d)=>{var e;const u=F("icon-delete"),f=F("a-button"),n=F("a-image"),r=F("a-space"),t=F("a-upload");return b(),S("div",ce,[!m(o).multiple&&((e=p.value)!=null&&e.url)&&m(o).showList?(b(),S("div",{key:0,class:D("image-list "+(m(o).rounded?"rounded-full":""))},[A(f,{class:"delete",onClick:d[0]||(d[0]=l=>V())},{icon:$(()=>[A(u)]),_:1}),A(n,{width:"130",height:"130",class:D(m(o).rounded?"rounded-full":""),src:p.value.url},null,8,["class","src"])],2)):m(o).multiple&&m(o).showList?(b(),N(r,{key:1,class:D(i.value.length>0?"mr-2":"")},{default:$(()=>[(b(!0),S(k,null,Q(i.value,(l,a)=>(b(),S("div",{class:D("image-list "+(m(o).rounded?"rounded-full":"")),key:a},[A(f,{class:"delete",onClick:h=>C(a)},{icon:$(()=>[A(u)]),_:2},1032,["onClick"]),A(n,{width:"130",height:"130",class:D(m(o).rounded?"rounded-full":""),src:l.url},null,8,["class","src"])],2))),128))]),_:1},8,["class"])):B("",!0),A(t,{"custom-request":x,"show-file-list":!1,multiple:m(o).multiple,accept:m(o).accept??".jpg,jpeg,.gif,.png,.svg,.bpm",disabled:m(o).disabled,tip:m(o).tip,limit:m(o).limit},{"upload-button":$(()=>[W(s.$slots,"customer",{},()=>[!c.modelValue||m(o).multiple?(b(),S("div",{key:0,class:D("upload-skin "+(m(o).rounded?"rounded-full":"rounded-sm"))},[U("div",pe,[(b(),N(re(m(o).icon)))]),U("div",fe,M(m(o).title==="buttonText"?s.$t("upload.buttonText"):m(o).title),1)],2)):B("",!0)],!0)]),_:3},8,["multiple","accept","disabled","tip","limit"])])}}},he=K(me,[["__scopeId","data-v-8baf6950"]]);const ye=v=>(ne("data-v-98812ed8"),v=v(),oe(),v),_e={class:"upload-file w-full"},ve={style:{"background-color":"var(--color-fill-2)",border:"1px dashed var(--color-fill-4)"},class:"rounded text-center p-7 w-full"},ge={class:"text-red-600 font-bold"},be=ye(()=>U("span",{style:{color:"#3370FF"}},"点击上传",-1)),we={key:0,class:"file-list mt-2"},Ve={class:"file-item"},Ae={class:"file-item"},Se={__name:"file-upload",props:{modelValue:{type:[String,Number,Array],default:()=>{}}},emits:["update:modelValue"],setup(v,{emit:g}){const c=v,{t:_}=J(),o=q("config"),y=q("storageMode"),i=T([]),w=T(),p=T({}),x=async s=>{if(!s.fileItem)return;o.multiple||(p.value=s.fileItem);const d=s.fileItem.file;if(d.size>o.size){H.warning(d.name+" "+_("upload.sizeLimit")),p.value=void 0;return}const u=await ae(d,"file","uploadFile",o.requestData);if(u)if(u.url=E.attachUrl(u.url,y[u.storage_mode]),!o.multiple)w.value=u[o.returnType],g("update:modelValue",w.value),p.value.url=u.url;else{i.value.push(u);let f=[];f=i.value.map(n=>n[o.returnType]),g("update:modelValue",f)}},V=()=>{p.value=void 0,w.value=void 0,g("update:modelValue",null)},C=s=>{i.value.splice(s,1);let d=[];d=i.value.map(u=>u[o.returnType]),g("update:modelValue",d)},z=async()=>{if(o.multiple)if(G.isArray(c.modelValue)&&c.modelValue.length>0){const s=[];await c.modelValue.map(async d=>{const u=await j(o.returnType,d,y);s.push({url:u})}),i.value=s}else i.value=[];else c.modelValue?(w.value=c.modelValue,j(o.returnType,c.modelValue,y).then(s=>p.value.url=s),p.value.percent=100,p.value.status="complete"):V()};return R(()=>c.modelValue,s=>{z()},{deep:!0,immediate:!0}),(s,d)=>{var t;const u=F("icon-upload"),f=F("a-upload"),n=F("icon-delete"),r=F("a-button");return b(),S(k,null,[U("div",_e,[A(f,{"custom-request":x,"show-file-list":!1,multiple:m(o).multiple,accept:m(o).accept,disabled:m(o).disabled,tip:m(o).tip,draggable:m(o).draggable,limit:m(o).limit},ee({_:2},[m(o).draggable?{name:"upload-button",fn:$(()=>[W(s.$slots,"customer",{},()=>[U("div",ve,[U("div",null,[A(u,{class:"text-5xl text-gray-400"}),U("div",ge,M(m(o).title==="buttonText"?s.$t("upload.buttonText"):m(o).title),1),te(" 将文件拖到此处，或"),be])])],!0)]),key:"0"}:void 0]),1032,["multiple","accept","disabled","tip","draggable","limit"])]),!m(o).multiple&&((t=p.value)!=null&&t.url)&&m(o).showList?(b(),S("div",we,[A(r,{class:"delete",onClick:d[0]||(d[0]=e=>V())},{icon:$(()=>[A(n)]),_:1}),U("div",Ve,M(p.value.url),1)])):B("",!0),m(o).showList?(b(!0),S(k,{key:1},Q(i.value,(e,l)=>(b(),S("div",{class:"file-list mt-2",key:l},[A(r,{class:"delete",onClick:a=>C(l)},{icon:$(()=>[A(n)]),_:2},1032,["onClick"]),U("div",Ae,M(e.url),1)]))),128)):B("",!0)],64)}}},Be=K(Se,[["__scopeId","data-v-98812ed8"]]);const Ie={style:{"background-color":"var(--color-fill-2)",border:"1px dashed var(--color-fill-4)"},class:"rounded text-center p-7 w-full"},Fe={class:"text-red-600 font-bold"},Ue={style:{color:"#3370FF"}},xe={key:0,class:"file-list mt-2"},Ce={key:2,class:"file-item"},$e={key:2,class:"file-item"},Te={__name:"chunk-upload",props:{modelValue:{type:[String,Number,Array],default:()=>{}}},emits:["update:modelValue"],setup(v,{emit:g}){const c=v,{t:_}=J(),o=q("config"),y=q("storageMode"),i=T([]),w=T(),p=T({}),x=async s=>{let d;o.multiple?(i.value.push(s.fileItem),d=i.value.length-1):p.value=s.fileItem;try{const u=s.fileItem.file,f=await O(u);if(!u.type){H.error("获取文件类型失败，无法上传");return}const n=Math.ceil(u.size/o.chunkSize);for(let r=0;r<n;r++){const t=r*o.chunkSize,e=t+o.chunkSize>=u.size?u.size:t+o.chunkSize,l=new FormData;l.append("package",u.slice(t,e)),l.append("hash",f),l.append("total",n),l.append("name",u.name),l.append("type",u.type),l.append("size",u.size),l.append("index",r+1),l.append("ext",/[^.]+$/g.exec(u.name)[0]);for(let h in o.requestData)l.append(h,o.requestData[h]);const a=await P.chunkUpload(l);if(a.data&&a.data.hash){if(a.data.url=E.attachUrl(a.data.url,y[a.data.storage_mode]),o.multiple){i.value[d].percent=100,i.value[d].status="complete",i.value[d].url=a.data.url,i.value[d][o.returnType]=a.data[o.returnType];let h=[];h=i.value.map(I=>I[o.returnType]),g("update:modelValue",h)}else w.value=a.data[o.returnType],g("update:modelValue",w.value),p.value.url=a.data.url,p.value.percent=99,setTimeout(()=>{p.value.status="complete",p.value.percent=100},1e3);return}if(a.data&&a.data.code&&a.data.code===201){const h=parseFloat((1/n).toFixed(2));o.multiple?i.value[d].percent+=h:(p.value.status="uploading",p.value.percent+=h)}}}catch(u){console.error(u),H.error(_("upload.fileHashFail"))}},V=()=>{p.value=void 0,w.value=void 0,g("update:modelValue",null)},C=s=>{i.value.splice(s,1);let d=[];d=i.value.map(u=>u[o.returnType]),g("update:modelValue",d)},z=async()=>{if(o.multiple)if(G.isArray(c.modelValue)&&c.modelValue.length>0){const s=[];await c.modelValue.map(async d=>{const u=await j(o.returnType,d,y);s.push({percent:100,status:"complete",url:u})}),i.value=s}else i.value=[];else c.modelValue?(w.value=c.modelValue,j(o.returnType,c.modelValue,y).then(s=>p.value.url=s),p.value.percent=100,p.value.status="complete"):V()};return R(()=>c.modelValue,s=>{z()},{deep:!0,immediate:!0}),(s,d)=>{var e,l,a;const u=F("icon-upload"),f=F("a-upload"),n=F("a-progress"),r=F("icon-delete"),t=F("a-button");return b(),S(k,null,[A(f,{"custom-request":x,"show-file-list":!1,multiple:m(o).multiple,accept:m(o).accept,disabled:m(o).disabled,tip:m(o).tip,draggable:m(o).draggable,limit:m(o).limit},ee({_:2},[m(o).draggable?{name:"upload-button",fn:$(()=>[W(s.$slots,"customer",{},()=>[U("div",Ie,[U("div",null,[A(u,{class:"text-5xl text-gray-400"}),U("div",Fe,M(m(o).title==="buttonText"?s.$t("upload.buttonText"):m(o).title),1),te(" "+M(s.$t("upload.uploadDesc")),1),U("span",Ue,M(s.$t("upload.clickUpload")),1)])])],!0)]),key:"0"}:void 0]),1032,["multiple","accept","disabled","tip","draggable","limit"]),!m(o).multiple&&m(o).showList&&((e=p.value)!=null&&e.percent)?(b(),S("div",xe,[p.value.percent<100?(b(),N(n,{key:0,percent:p.value.percent,animation:"",type:"circle",size:"mini",class:"progress"},null,8,["percent"])):B("",!0),p.value.percent===100?(b(),N(t,{key:1,class:"delete",onClick:d[0]||(d[0]=h=>V())},{icon:$(()=>[A(r)]),_:1})):B("",!0),(l=p.value)!=null&&l.url&&p.value.percent===100&&((a=p.value)==null?void 0:a.status)==="complete"?(b(),S("div",Ce,M(p.value.url),1)):B("",!0)])):B("",!0),m(o).showList?(b(!0),S(k,{key:1},Q(i.value,(h,I)=>(b(),S("div",{class:"file-list mt-2",key:I},[h.percent<100?(b(),N(n,{key:0,percent:h.percent,animation:"",type:"circle",size:"mini",class:"progress"},null,8,["percent"])):B("",!0),h.percent===100?(b(),N(t,{key:1,class:"delete",onClick:L=>C(I)},{icon:$(()=>[A(r)]),_:2},1032,["onClick"])):B("",!0),h!=null&&h.url&&h.percent===100&&(h==null?void 0:h.status)==="complete"?(b(),S("div",$e,M(h.url),1)):B("",!0)]))),128)):B("",!0)],64)}}},ze=K(Te,[["__scopeId","data-v-d0f7571e"]]),je={__name:"index",props:{modelValue:{type:[String,Number,Array],default:()=>{}},title:{type:String,default:"buttonText"},icon:{type:String,default:"icon-plus"},rounded:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},size:{type:Number,default:4*1024*1024},chunk:{type:Boolean,default:!1},chunkSize:{type:Number,default:1*1024*1024},limit:{type:Number,default:0},tip:{type:String,default:void 0},type:{type:String,default:"image"},accept:{type:String,default:"*"},returnType:{type:String,default:"url"},fileType:{type:String,default:"button"},showList:{type:Boolean,default:!0},requestData:{type:Object,default:{}}},emits:["update:modelValue"],setup(v,{emit:g}){const c=v,_=T();return["id","url","hash"].includes(c.returnType)||(H.error("MaUpload组件props的returnType只能为：id, url, hash 其中一个"),console.error("MaUpload组件props的returnType只能为：id, url, hash 其中一个")),R(()=>c.modelValue,o=>{_.value=o},{deep:!0,immediate:!0}),Z("storageMode",le.storageMode),Z("config",c),R(()=>_.value,o=>g("update:modelValue",o)),(o,y)=>(b(),S("div",null,[c.type==="image"?(b(),N(he,{key:0,modelValue:_.value,"onUpdate:modelValue":y[0]||(y[0]=i=>_.value=i)},null,8,["modelValue"])):B("",!0),c.type==="file"?(b(),N(Be,{key:1,modelValue:_.value,"onUpdate:modelValue":y[1]||(y[1]=i=>_.value=i)},null,8,["modelValue"])):B("",!0),c.type==="chunk"?(b(),N(ze,{key:2,modelValue:_.value,"onUpdate:modelValue":y[2]||(y[2]=i=>_.value=i)},null,8,["modelValue"])):B("",!0)]))}};export{je as _};
