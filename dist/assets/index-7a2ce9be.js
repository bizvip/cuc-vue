import{c as h}from"./config-693dac75.js";import{h as Q}from"./common-a36cd801.js";import X from"./addGroup-5a45151c.js";import Y from"./addConfig-37044924.js";import Z from"./manageConfig-5874a5af.js";import{$ as i}from"./request-7ebe3d6d.js";import{r as s,z as ee,i as c,W as te,o as d,c as x,a as m,p as o,k as l,G as T,j as G,F as ae,L as oe,l as ne,s as k,u as L}from"./runtime-core.esm-bundler-0dd628d9.js";import"./index-895e8cc8.js";import"./_plugin-vue_export-helper-c27b6911.js";const se={class:"lg:flex justify-between"},ce={class:"ma-content-block p-5 h-full lg:w-1/2"},le={key:0,class:"ma-content-block p-5 h-full lg:w-1/2 lg:ml-3 mt-3 lg:mt-0"},ie={class:"mb-2"},ue={class:"text-red-500 underline font-black"},re={class:"text-red-500"},de={name:"setting:config"},Ce=Object.assign(de,{setup(pe){const D=s(!1),_=s("0-1"),C=s(""),r=s({name:""}),v=s(),$=s(),B=s(),g=s([]),w=s([]),y=s([]),V=s(!1),N=t=>{const e=t.split("-")[1];if(e==1||e==2){i.info("该配置为系统核心配置，无法删除");return}r.value=y.value.find(p=>p.id==e),V.value=!0},U=t=>{const e=t.split("-");v.value[e[0]].init(),_.value=t},b=async()=>{D.value=!1;const t=await h.getConfigGroupList();y.value=t.data,y.value.map(async e=>{g.value[e.id]={},w.value[e.id]=[],await F(e.id)}),D.value=!0},F=async t=>{const e={group_id:t,orderBy:"sort",orderType:"desc"},p=await h.getConfigList(e);let f={};w.value[t]=p.data.map(a=>{let u={title:a.name,dataIndex:a.key,formType:a.input_type,dict:{},labelWidth:"120px"};if(["select","radio","checkbox"].includes(a.input_type)&&(u.dict={data:a.config_select_data}),a.input_type==="switch")switch(typeof a.value){case"string":u.checkedValue="true",u.uncheckedValue="false";break;case"number":u.checkedValue=1,u.uncheckedValue=0;break}return f[a.key]=a.value,u}),g.value[t]=f},M=()=>{$.value.open(_.value.split("-")[1])},j=()=>B.value.open(),A=t=>{if(t){i.success("配置组保存成功"),b();return}i.success("配置组保存失败")},K=t=>{if(t){i.success("配置添加成功"),b();return}i.success("配置添加失败")},O=async t=>{if(C.value!==r.value.name){i.error("输入错误，验证失败"),t(!1);return}(await h.deleteConfigGroup({id:r.value.id})).success&&(i.success("配置删除成功"),r.value={},b(),t(!0))},W=async t=>{Q(["setting:config:update"])||i.info("没有权限修改配置");const e=await h.updateByKeys(t);e.success&&i.success(e.message)};return b(),ee(()=>v.value&&v.value[0].init()),(t,e)=>{const p=c("icon-plus"),f=c("a-button"),a=c("a-tooltip"),u=c("icon-settings"),R=c("a-space"),z=c("ma-form"),E=c("a-tab-pane"),I=c("a-tabs"),q=c("a-input"),H=c("a-modal"),S=te("auth");return d(),x("div",se,[m("div",ce,[o(I,{type:"rounded","active-key":_.value,"onUpdate:activeKey":e[0]||(e[0]=n=>_.value=n),onDelete:N,onChange:U,updateable:!0,"auto-switch":"",editable:!0},{extra:l(()=>[o(R,null,{default:l(()=>[o(a,{content:"添加组"},{default:l(()=>[T((d(),G(f,{shape:"round",onClick:j,type:"primary"},{icon:l(()=>[o(p)]),_:1})),[[S,["setting:config:save"]]])]),_:1}),o(a,{content:"管理该组配置"},{default:l(()=>[T((d(),G(f,{shape:"round",onClick:M,type:"primary"},{icon:l(()=>[o(u)]),_:1})),[[S,["setting:config:index"]]])]),_:1})]),_:1})]),default:l(()=>[(d(!0),x(ae,null,oe(y.value,(n,J)=>(d(),G(E,{key:`${J}-${n.id}`,title:n.name},{default:l(()=>[o(z,{modelValue:g.value[n.id],"onUpdate:modelValue":P=>g.value[n.id]=P,columns:w.value[n.id],onOnSubmit:W,class:"mt-3",ref_for:!0,ref_key:"maFormRef",ref:v},null,8,["modelValue","onUpdate:modelValue","columns"])]),_:2},1032,["title"]))),128))]),_:1},8,["active-key"])]),t.$common.auth(["setting:config:save"])?(d(),x("div",le,[o(Y,{onSuccess:K})])):ne("",!0),o(H,{visible:V.value,"onUpdate:visible":e[2]||(e[2]=n=>V.value=n),type:"warning","on-before-ok":O},{title:l(()=>[k("危险操作")]),default:l(()=>[m("div",ie,[k(" 确定要删除 "),m("span",ue,L(r.value.name),1),k(" 配置组吗？ ")]),m("div",null,[k(" 此操作会删除组和所属组配置项，如果执行请在下面输入框输入："),m("span",re,L(r.value.name),1)]),o(q,{placeholder:`请输入 ${r.value.name}`,class:"mt-2",modelValue:C.value,"onUpdate:modelValue":e[1]||(e[1]=n=>C.value=n)},null,8,["placeholder","modelValue"])]),_:1},8,["visible"]),o(X,{ref_key:"addGroupRef",ref:B,onSuccess:A},null,512),o(Z,{ref_key:"manageConfigRef",ref:$},null,512)])}}});export{Ce as default};