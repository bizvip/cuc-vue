import{r as s}from"./role-e97fee2c.js";import T from"./menuPermission-dbc69130.js";import B from"./dataPermission-fd8ec4af.js";import{$ as l}from"./request-372f441e.js";import{r as d,b as E,v as h,i as r,o as m,c as y,p as o,k as i,l as v,S as N,j as P,s as k}from"./runtime-core.esm-bundler-0dd628d9.js";import"./index-492d5734.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./menu-1a9c7001.js";import"./dept-4a9ab04b.js";const j={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},M={key:0},O={name:"system:role"},U=Object.assign(O,{setup($){const u=d(),p=d(),f=d();let g=E(()=>u.value?u.value.isRecovery:!1);const b=e=>{p.value.open(e)},w=e=>{f.value.open(e)},x=async(e,a)=>{if(a.code==="superAdmin"){l.info("超级管理员角色不能禁用");return}const n=await s.changeStatus({id:a.id,status:e});n.success&&l.success(n.message)},C=async(e,a)=>{if(a===1){l.info("超级管理员不能修改");return}const n=await s.numberOperation({id:a,numberName:"sort",numberValue:e});n.success&&l.success(n.message)},D=h({api:s.getPageList,recycleApi:s.getRecyclePageList,showIndex:!1,pageLayout:"fixed",rowSelection:!1,operationColumn:!0,operationWidth:300,operationColumnWidth:300,add:{show:!1,api:s.save,auth:["system:role:save"]},edit:{show:!1,api:s.update,auth:["system:role:update"]},delete:{show:!1,api:s.deletes,auth:["system:role:delete"],realApi:s.realDeletes,realAuth:["system:role:realDeletes"]},recovery:{show:!1,api:s.recoverys,auth:["system:role:recovery"]},isDbClickEdit:!1,beforeOpenEdit:e=>e.id===1?(l.error("超级管理员角色不可编辑"),!1):!0,beforeDelete:e=>e.includes(1)?(l.error("超级管理员角色不可删除"),!1):!0}),R=h([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!1},{title:"角色名称",dataIndex:"name",search:!0,commonRules:[{required:!0,message:"角色名称必填"}],width:220,disabled:!0},{title:"角色标识",dataIndex:"code",search:!0,commonRules:[{required:!0,message:"角色标识必填"}],width:180,disabled:!0},{title:"排序",dataIndex:"sort",formType:"input-number",addDefaultValue:1,width:180,min:0,max:1e3},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:100},{title:"备注",dataIndex:"remark",hide:!1,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,width:200,search:!0,formType:"range"}]);return(e,a)=>{const n=r("a-input-number"),I=r("a-switch"),S=r("icon-menu"),_=r("a-link"),A=r("icon-layers"),V=r("a-space"),L=r("ma-crud");return m(),y("div",j,[o(L,{options:D,columns:R,ref_key:"crudRef",ref:u},{sort:i(({record:t})=>[o(n,{"default-value":t.sort,mode:"button",onChange:c=>C(c,t.id),min:0,max:1e3},null,8,["default-value","onChange"])]),status:i(({record:t})=>[o(I,{"checked-value":1,"unchecked-value":"2",onChange:c=>x(c,t),"default-checked":t.status==1},null,8,["onChange","default-checked"])]),operationCell:i(({record:t})=>[t.code==="superAdmin"?(m(),y("div",M)):v("",!0)]),operationBeforeExtend:i(({record:t})=>[t.code!=="superAdmin"&&!N(g)?(m(),P(V,{key:0,size:"mini"},{default:i(()=>[o(_,{onClick:c=>b(t)},{default:i(()=>[o(S),k(" 菜单权限 ")]),_:2},1032,["onClick"]),o(_,{onClick:c=>w(t)},{default:i(()=>[o(A),k(" 数据权限 ")]),_:2},1032,["onClick"])]),_:2},1024)):v("",!0)]),_:1},8,["options","columns"]),o(T,{ref_key:"mpRef",ref:p,onSuccess:a[0]||(a[0]=()=>u.value.refresh())},null,512),o(B,{ref_key:"dpRef",ref:f,onSuccess:a[1]||(a[1]=()=>u.value.refresh())},null,512)])}}});export{U as default};
