import{a2 as t,$ as f}from"./request-7ebe3d6d.js";import{r as _,v as d,i as l,o as g,c as w,p as c,k as G}from"./runtime-core.esm-bundler-0dd628d9.js";const a={getList(e={}){return t({url:"system/appGroup/index",method:"get",params:e})},getSelectList(e={}){return t({url:"system/appGroup/list",method:"get",params:e})},getRecycleList(e={}){return t({url:"system/appGroup/recycle",method:"get",params:e})},save(e={}){return t({url:"system/appGroup/save",method:"post",data:e})},read(e={}){return t({url:"system/appGroup/read",method:"post",data:e})},deletes(e){return t({url:"system/appGroup/delete",method:"delete",data:e})},recoverys(e){return t({url:"system/appGroup/recovery",method:"put",data:e})},realDeletes(e){return t({url:"system/appGroup/realDelete",method:"delete",data:e})},update(e,r={}){return t({url:"system/appGroup/update/"+e,method:"put",data:r})},changeStatus(e={}){return t({url:"system/appGroup/changeStatus",method:"put",data:e})}},v={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},x={name:"system:appGroup"},I=Object.assign(x,{setup(e){const r=_(),n=async(u,p)=>{const s=await a.changeStatus({id:p,status:u});s.success&&f.success(s.message)},i=d({api:a.getList,recycleApi:a.getRecycleList,showIndex:!1,searchColNumber:3,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationWidth:160,add:{show:!0,api:a.save,auth:["system:appGroup:save"]},edit:{show:!0,api:a.update,auth:["system:appGroup:update"]},delete:{show:!0,api:a.deletes,auth:["system:appGroup:delete"],realApi:a.realDeletes,realAuth:["system:appGroup:realDeletes"]},recovery:{show:!0,api:a.recoverys,auth:["system:appGroup:recovery"]}}),m=d([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"组名称",dataIndex:"name",search:!0,width:220,commonRules:[{required:!0,message:"组名称必填"}]},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:160},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,width:180},{title:"更新时间",dataIndex:"updated_at",addDisplay:!1,editDisplay:!1,width:180}]);return(u,p)=>{const s=l("a-switch"),h=l("ma-crud");return g(),w("div",v,[c(h,{options:i,columns:m,ref_key:"crudRef",ref:r},{status:G(({record:o})=>[c(s,{"checked-value":1,"unchecked-value":"2",onChange:y=>n(y,o.id),"default-checked":o.status==1},null,8,["onChange","default-checked"])]),_:1},8,["options","columns"])])}}});export{I as default};