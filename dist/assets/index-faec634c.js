import{a as e}from"./apiGroup-8df4b8e1.js";import{$ as m}from"./request-7ebe3d6d.js";import{r as f,v as r,i,o as y,c as _,p as d,k as w}from"./runtime-core.esm-bundler-0dd628d9.js";const x={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},g={name:"system:apiGroup"},C=Object.assign(g,{setup(k){const c=f(),l=async(a,s)=>{const t=await e.changeStatus({id:s,status:a});t.success&&m.success(t.message)},u=r({api:e.getList,recycleApi:e.getRecycleList,showIndex:!1,searchColNumber:3,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationWidth:160,add:{show:!0,api:e.save,auth:["system:apiGroup:save"]},edit:{show:!0,api:e.update,auth:["system:apiGroup:update"]},delete:{show:!0,api:e.deletes,auth:["system:apiGroup:delete"],realApi:e.realDeletes,realAuth:["system:apiGroup:realDeletes"]},recovery:{show:!0,api:e.recoverys,auth:["system:apiGroup:recovery"]}}),p=r([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"组名称",dataIndex:"name",search:!0,width:220,commonRules:[{required:!0,message:"组名称必填"}]},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:160},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,width:180},{title:"更新时间",dataIndex:"updated_at",addDisplay:!1,editDisplay:!1,width:180}]);return(a,s)=>{const t=i("a-switch"),n=i("ma-crud");return y(),_("div",x,[d(n,{options:u,columns:p,ref_key:"crudRef",ref:c},{status:w(({record:o})=>[d(t,{"checked-value":1,"unchecked-value":"2",onChange:h=>l(h,o.id),"default-checked":o.status==1},null,8,["onChange","default-checked"])]),_:1},8,["options","columns"])])}}});export{C as default};
