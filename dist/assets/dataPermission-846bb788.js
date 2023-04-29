import{C as K,$ as j}from"./request-7ebe3d6d.js";import{M as z}from"./index-492d5734.js";import{r as x}from"./role-e30c5a62.js";import{d as G}from"./dept-b3534b74.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{r as u,i as d,o as g,j as C,k as s,s as p,p as t,c as O,F as $,L as q,u as H,G as J,a as N}from"./runtime-core.esm-bundler-0dd628d9.js";const Q={class:"w-full"},W={class:"tree-container p-2"},X={__name:"dataPermission",emits:["success"],setup(Y,{expose:U,emit:B}){const r=u(!1),V=u(!0),v=u([]),m=u([]),_=u(!1),i=u(),o=u({name:void 0,code:void 0,data_scope:1}),D=u([{value:1,label:"全部数据权限"},{value:2,label:"自定义数据权限"},{value:3,label:"本部门数据权限"},{value:4,label:"本部门及以下数据权限"},{value:5,label:"本人数据权限"}]),L=a=>{o.value={id:a.id,name:a.name,code:a.code,data_scope:a.data_scope},y(!1),h(!1),f(!1),P(a.id),r.value=!0},y=a=>{i.value.maTree.expandAll(a)},h=a=>{i.value.maTree.checkAll(a)},f=a=>{_.value=a},T=a=>{const e=i.value.maTree,c=e.getExpandedNodes().map(n=>n.id);e.expandNode(a,!c.includes(a[0]))},P=async a=>{const e=await G.tree({scope:!0});v.value=e.data;const c=await x.getDeptByRole(a);m.value=c.data[0].depts.map(n=>n.id),m.value.length>0&&f(!0),V.value=!1},w=async a=>{const c=i.value.maTree.getCheckedNodes().map(k=>k.id),n=await x.updateDataPermission(o.value.id,{data_scope:o.value.data_scope,dept_ids:c});n.success&&j.success(n.message),B("success"),a(!0)},S=()=>r.value=!1;return U({open:L}),(a,e)=>{const c=d("a-input"),n=d("a-form-item"),k=d("a-option"),E=d("a-select"),b=d("a-checkbox"),M=d("a-space"),R=d("a-spin"),A=d("a-form"),F=d("a-modal");return g(),C(F,{visible:r.value,"onUpdate:visible":e[6]||(e[6]=l=>r.value=l),onCancel:S,onBeforeOk:w},{title:s(()=>[p("数据权限")]),default:s(()=>[t(A,{model:o.value},{default:s(()=>[t(n,{label:"角色名称",field:"name"},{default:s(()=>[t(c,{disabled:"",modelValue:o.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.name=l)},null,8,["modelValue"])]),_:1}),t(n,{label:"角色标识",field:"code"},{default:s(()=>[t(c,{disabled:"",modelValue:o.value.code,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.code=l)},null,8,["modelValue"])]),_:1}),t(n,{label:"数据边界",field:"data_scope"},{default:s(()=>[t(E,{modelValue:o.value.data_scope,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.data_scope=l)},{default:s(()=>[(g(!0),O($,null,q(D.value,l=>(g(),C(k,{key:l,value:l.value},{default:s(()=>[p(H(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),J(t(n,{label:"部门列表",field:"dept_ids"},{default:s(()=>[t(R,{loading:V.value,tip:"部门加载中...",class:"w-full"},{default:s(()=>[N("div",Q,[t(M,{class:"mt-1.5",size:"large"},{default:s(()=>[t(b,{onChange:y},{default:s(()=>[p("展开/折叠")]),_:1}),t(b,{onChange:h},{default:s(()=>[p("全选/全不选")]),_:1}),t(b,{modelValue:_.value,"onUpdate:modelValue":e[3]||(e[3]=l=>_.value=l),onChange:f},{default:s(()=>[p("关闭父子级联动")]),_:1},8,["modelValue"])]),_:1}),N("div",W,[t(z,{ref_key:"tree",ref:i,modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=l=>v.value=l),checkable:"",fieldNames:{title:"label",key:"id"},searchPlaceholder:"过滤部门","checked-keys":m.value,"onUpdate:checkedKeys":e[5]||(e[5]=l=>m.value=l),"check-strictly":_.value,"virtual-list-props":{height:300},onClick:T},null,8,["modelValue","checked-keys","check-strictly"])])])]),_:1},8,["loading"])]),_:1},512),[[K,o.value.data_scope=="2"]])]),_:1},8,["model"])]),_:1},8,["visible"])}}},oe=I(X,[["__scopeId","data-v-e86525be"]]);export{oe as default};
