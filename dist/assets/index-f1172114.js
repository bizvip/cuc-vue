import{a2 as t}from"./request-7ebe3d6d.js";import{r as p,v as a,i as r,o as n,c as o,p as m}from"./runtime-core.esm-bundler-0dd628d9.js";const u={getList(e={}){return t({url:"settlement/placement/index",method:"get",params:e})},read(e={}){return t({url:"settlement/placement/read",method:"get",data:e})},importExcel(e={}){return t({url:"settlement/placement/import",method:"post",data:e})},downloadTemplate(){return t({url:"settlement/placement/downloadTemplate",method:"post",responseType:"blob"})},exportExcel(e={}){return t({url:"settlement/placement/export",method:"post",responseType:"blob",params:e})}},c={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},f={name:"settlement:placement"},x=Object.assign(f,{setup(e){const l=p(),s=a({id:"cm_settlement_placement",rowSelection:!1,pk:"id",operationColumn:!1,operationWidth:160,formOption:{viewType:"modal",width:600},api:u.getList,import:{show:!0,url:"settlement/placement/import",templateUrl:"settlement/placement/downloadTemplate",auth:["settlement:placement:import"]},export:{show:!0,url:"settlement/placement/export",auth:["settlement:placement:export"]}}),d=a([{title:"ID",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1},{title:"渠道ID",dataIndex:"channel_id",formType:"cascader",search:!0,addDisplay:!1,editDisplay:!1,hide:!0},{title:"渠道标识",dataIndex:"channel_slug",formType:"input",search:!0,addDisplay:!1,editDisplay:!1},{title:"产品名字",dataIndex:"product_name",formType:"cascader",search:!0,addDisplay:!1,editDisplay:!1,multiple:!1},{title:"产品ID",dataIndex:"product_id",formType:"input",search:!0,addDisplay:!1,editDisplay:!1,hide:!0},{title:"订单金额",dataIndex:"order_amount",formType:"input",addDisplay:!1,editDisplay:!1},{title:"支付金额",dataIndex:"pay_amount",formType:"input",addDisplay:!1,editDisplay:!1},{title:"订单号",dataIndex:"order_no",formType:"input",search:!0,addDisplay:!1,editDisplay:!1},{title:"支付时间",dataIndex:"pay_time",formType:"range",search:!0,addDisplay:!1,editDisplay:!1,showTime:!0},{title:"UUID",dataIndex:"uuid",formType:"input",search:!0,addDisplay:!1,editDisplay:!1},{title:"状态",dataIndex:"state",formType:"select",search:!0,addDisplay:!1,editDisplay:!1,multiple:!1},{title:"客户端用户ID",dataIndex:"client_user_id",formType:"input",addDisplay:!1,editDisplay:!1},{title:"创建时间",dataIndex:"created_at",formType:"range",addDisplay:!1,editDisplay:!1,showTime:!0},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0},{title:"数据权限",dataIndex:"created_by",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0}]);return(y,D)=>{const i=r("ma-crud");return n(),o("div",c,[m(i,{options:s,columns:d,ref_key:"crudRef",ref:l,"table-layout-fixed":"table-layout-fixed"},null,8,["options","columns"])])}}});export{x as default};