import{a2 as t}from"./request-7ebe3d6d.js";import{r as o,v as a,i as l,o as d,c as p,p as c}from"./runtime-core.esm-bundler-0dd628d9.js";const u={getList(e={}){return t({url:"channel/activityLog/index",method:"get",params:e})},read(e={}){return t({url:"channel/activityLog/read",method:"get",data:e})},exportExcel(e={}){return t({url:"channel/activityLog/export",method:"post",responseType:"blob",params:e})}},m={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},f={name:"channel:activityLog"},g=Object.assign(f,{setup(e){const r=o(),i=a({id:"cm_channel_activity_log",rowSelection:!1,pk:"id",operationColumn:!1,operationWidth:160,formOption:{viewType:"modal",width:600},api:u.getList,contextMenu:{enabled:!1},export:{show:!0,url:"channel/activityLog/export",auth:["channel:activityLog:export"]}}),n=a([{title:"ID",dataIndex:"id",formType:"input-number",search:!0,addDisplay:!1,editDisplay:!1,hide:!0,sortable:{sortDirections:["ascend","descend"],sorter:!0},min:1,max:41e8,step:1},{title:"产品id",dataIndex:"product_id",formType:"input-number",search:!0,min:1,max:42e8,step:1},{title:"产品名字",dataIndex:"product_name",formType:"input",search:!0},{title:"App用户ID",dataIndex:"uid",formType:"input-number",commonRules:{required:!0,message:"请输入App用户ID"},min:1,max:42e8,step:1},{title:"aff(只做兼容预留)",dataIndex:"invited_aff",formType:"input",commonRules:{required:!0,message:"请输入aff(只做兼容预留)"}},{title:"注册时间",dataIndex:"register_time",formType:"range",search:!0,addDisplay:!1,editDisplay:!1,showTime:!0},{title:"活跃时间",dataIndex:"last_activity_time",formType:"range",search:!0,addDisplay:!1,editDisplay:!1,showTime:!0},{title:"渠道名",dataIndex:"channel_name",formType:"input",search:!0,addDisplay:!1,editDisplay:!1},{title:"渠道账号",dataIndex:"channel_account",formType:"input",search:!0,addDisplay:!1,editDisplay:!1},{title:"代理id",dataIndex:"agent_id",formType:"input-number",search:!0,addDisplay:!1,min:1,max:41e8,step:1},{title:"备注数据",dataIndex:"remark",formType:"textarea",hide:!0}]);return(y,h)=>{const s=l("ma-crud");return d(),p("div",m,[c(s,{options:i,columns:n,ref_key:"crudRef",ref:r},null,8,["options","columns"])])}}});export{g as default};
