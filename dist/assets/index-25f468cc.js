import{a2 as a}from"./request-372f441e.js";import{r as n,v as t,i as p,o,c as r,p as f}from"./runtime-core.esm-bundler-0dd628d9.js";const c={getList(e={}){return a({url:"product/mine/index",method:"get",params:e})},read(e={}){return a({url:"product/mine/read",method:"get",data:e})}},u={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},m={name:"product:mine"},x=Object.assign(m,{setup(e){const l=n(),i=t({id:"cm_product_mine",rowSelection:!1,pk:"id",operationColumn:!1,operationWidth:160,formOption:{viewType:"modal",width:600},api:c.getList}),s=t([{title:"ID",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1},{title:"渠道ID",dataIndex:"channel_id",formType:"select",search:!0,addDisplay:!1,editDisplay:!1,multiple:!1},{title:"渠道标识",dataIndex:"channel_slug",formType:"input",addDisplay:!1,editDisplay:!1},{title:"渠道分成",dataIndex:"channel_sharing_rate",formType:"input",addDisplay:!1,editDisplay:!1},{title:"到帐率",dataIndex:"transfer_rate",formType:"input",addDisplay:!1,editDisplay:!1},{title:"产品名字",dataIndex:"product_name",formType:"input",addDisplay:!1,editDisplay:!1},{title:"LOGO",dataIndex:"logo_url",formType:"input",addDisplay:!1,editDisplay:!1},{title:"官网地址",dataIndex:"official_url",formType:"input",addDisplay:!1,editDisplay:!1},{title:"状态",dataIndex:"is_enabled",formType:"select",search:!0,addDisplay:!1,editDisplay:!1,multiple:!1,dict:{name:"is_enabled",props:{label:"title",value:"key"},translation:!0}},{title:"创建时间",dataIndex:"created_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,showTime:!0}]);return(y,_)=>{const d=p("ma-crud");return o(),r("div",u,[f(d,{options:i,columns:s,ref_key:"crudRef",ref:l},null,8,["options","columns"])])}}});export{x as default};
