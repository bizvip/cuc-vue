import{f as B,u as V,e as q}from"./index-895e8cc8.js";import{a1 as l,$ as d}from"./request-7ebe3d6d.js";import{d as m}from"./common-a36cd801.js";import{r as u,c as I,p as S,k as N,n as O,i as L,o as R,S as j}from"./runtime-core.esm-bundler-0dd628d9.js";const z={class:"ma-content-block p-4"},M={name:"openForm"},K=Object.assign(M,{setup(U){var g,h,y,b,k,F,w;const e=B(),i=V(),P=q(),c=u(),n=u(((g=e.query)==null?void 0:g.tagId)??""),s=u(((h=e.query)==null?void 0:h.op)??""),f=u(((y=e.query)==null?void 0:y.key)??"");l.isEmpty(n.value)&&(d.error("缺少tagId参数"),m({path:e.fullPath})),l.isEmpty(s.value)&&(d.error("缺少op参数"),m({path:e.fullPath})),s.value==="edit"&&l.isEmpty(f.value)&&(d.error("缺少key参数"),m({path:e.fullPath})),i.formList[n.value]||(d.error("缺少Form配置"),m({path:e.fullPath}));const r=(b=i.formList[n.value])==null?void 0:b.config,p=u(s.value==="add"?(k=i.formList[n.value])==null?void 0:k.addData:i.formList[n.value].editData[f.value]),a=r==null?void 0:r.options,v=u(s.value==="add"?"新增":"编辑"),_=u(v.value+(((w=(F=r==null?void 0:r.options)==null?void 0:F.formOption)==null?void 0:w.tagName)??"未命名"));P.updateTagTitle(e.fullPath,` ${_.value} ${s.value==="edit"?" | "+f.value:""} `);const D=()=>{window.history.back(-1)},T=async()=>{const o=c.value.getFormData();if(await c.value.validateForm())return!1;let t;s.value==="add"?(l.isFunction(a.beforeAdd)&&await a.beforeAdd(o),t=await a.add.api(o),l.isFunction(a.afterAdd)&&await a.afterAdd(t,o)):(l.isFunction(a.beforeEdit)&&await a.beforeEdit(o),t=await a.edit.api(o[a.pk],o),l.isFunction(a.afterEdit)&&await a.afterEdit(t,o)),t.success&&(s.value==="add"&&(i.formList[n.value].addData={},p.value={}),d.success(t.message||`${v.value}成功！`),m({path:e.fullPath}),i.crudList[a.id]=!0)};return(o,t)=>{const $=L("ma-form"),x=L("a-page-header");return R(),I("div",z,[S(x,{style:O({background:"var(--color-bg-2)"}),title:_.value,subtitle:`数据${v.value}页`,onBack:D},{default:N(()=>{var E;return[S($,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=A=>p.value=A),columns:((E=j(r))==null?void 0:E.formColumns)??[],ref_key:"maFormRef",ref:c,onOnSubmit:T},null,8,["modelValue","columns"])]}),_:1},8,["style","title","subtitle"])])}}});export{K as default};
