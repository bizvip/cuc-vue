import{c as x}from"./config-693dac75.js";import{r as t,v as b,i as m,o as _,j as g,k as u,s as k,p as V}from"./runtime-core.esm-bundler-0dd628d9.js";import"./request-7ebe3d6d.js";const U={__name:"addGroup",emits:["success"],setup(w,{expose:i,emit:l}){const r=t({}),d=t(),o=t(!1),c=()=>{o.value=!0},f=async a=>{a&&((await x.saveConfigGroup(a)).success?(l("success",!0),o.value=!1):l("success",!1))},n=b([{title:"组名称（中文）",labelWidth:"145px",dataIndex:"name",rules:[{required:!0,message:"组名称必填"}]},{title:"组标识（英文）",labelWidth:"145px",dataIndex:"code",rules:[{required:!0,message:"组标识必填"}]},{title:"备注",labelWidth:"145px",dataIndex:"remark",formType:"textarea"}]);return i({open:c}),(a,e)=>{const p=m("ma-form"),v=m("a-modal");return _(),g(v,{visible:o.value,"onUpdate:visible":e[2]||(e[2]=s=>o.value=s),footer:!1,draggable:"",width:"600px"},{title:u(()=>[k("添加配置组")]),default:u(()=>[V(p,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),columns:n,"onUpdate:columns":e[1]||(e[1]=s=>n=s),onOnSubmit:f,ref_key:"maformRef",ref:d},null,8,["modelValue","columns"])]),_:1},8,["visible"])}}};export{U as default};
