import{a2 as t,$ as w}from"./request-372f441e.js";import{r as b,v as h,i as d,o as v,c as T,a as _,p as n,k as p}from"./runtime-core.esm-bundler-0dd628d9.js";const u={getList(e={}){return t({url:"product/list/index",method:"get",params:e})},getMyList(e={}){return t({url:"product/list/my-products",method:"get",params:e})},exportExcel(e={}){return t({url:"product/list/export",method:"post",responseType:"blob",params:e})},importExcel(e={}){return t({url:"product/list/import",method:"post",data:e})},downloadTemplate(){return t({url:"product/list/downloadTemplate",method:"post",responseType:"blob"})},numberOperation(e={}){return t({url:"product/list/numberOperation",method:"put",data:e})},changeStatus(e={}){return t({url:"product/list/changeStatus",method:"put",data:e})},getRecycleList(e={}){return t({url:"product/list/recycle",method:"get",params:e})},recoverys(e){return t({url:"product/list/recovery",method:"put",data:e})},realDeletes(e){return t({url:"product/list/realDelete",method:"delete",data:e})},deletes(e){return t({url:"product/list/delete",method:"delete",data:e})},read(e={}){return t({url:"product/list/read",method:"get",data:e})},update(e,s={}){return t({url:"product/list/update/"+e,method:"put",data:s})},updateValue(e={}){return t({url:"product/list/changeStatus",method:"put",data:e})},save(e={}){return t({url:"product/list/save",method:"post",data:e})}},k=_("div",null,null,-1),R={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},I={name:"product:list"},q=Object.assign(I,{setup(e){const s=b(),c=(a,m,i)=>{u.updateValue({id:m,name:i,value:a}).then(o=>{o.success&&w.success(o.message),s.value.refresh()}).catch(o=>{console.log(o)})},f=h({id:"cm_product_list",rowSelection:!1,pk:"id",operationColumn:!0,operationWidth:100,operationColumnWidth:100,formOption:{viewType:"modal",width:600},api:u.getList,recycleApi:u.getRecycleList,add:{show:!0,api:u.save,auth:["product:list:save"]},edit:{show:!0,api:u.update,auth:["product:list:update"]},export:{show:!0,url:"product/list/export",auth:["product:list:export"]},beforeRequest(a){a.orderBy="id",a.orderType="desc"}}),g=h([{title:"ID",dataIndex:"id",formType:"input-number",search:!0,addDisplay:!1,editDisplay:!0,editReadonly:!0,hide:!1,width:80},{title:"产品名字",dataIndex:"product_name",formType:"input",search:!0,commonRules:{required:!0,message:"请输入产品名字"},width:120},{title:"LOGO",dataIndex:"logo_url",formType:"upload",commonRules:{required:!0,message:"请输入LOGO"},multiple:!1,chunk:!1,onlyData:!1,type:"image",width:80},{title:"官网地址",dataIndex:"official_url",formType:"input",search:!0,commonRules:{required:!0,message:"请输入官网地址"},width:120},{title:"排序",dataIndex:"sort",formType:"input-number",commonRules:{required:!0,message:"请输入排序"},min:0,max:42e8,step:1,width:75},{title:"状态",dataIndex:"is_enabled",formType:"radio",search:!0,commonRules:{required:!0,message:"请选择状态"},multiple:!1,dict:{name:"is_enabled",props:{label:"title",value:"key"},translation:!0},width:50},{title:"推荐语",dataIndex:"remark",formType:"textarea",commonRules:{required:!0,message:"请输入推荐语"},width:300},{title:"创建时间",dataIndex:"created_at",formType:"date",search:!1,addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0,range:!1},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0,range:!1}]);return(a,m)=>{const i=d("a-switch"),o=d("a-input-number"),y=d("a-image"),x=d("ma-crud");return v(),T("div",null,[k,_("div",R,[n(x,{options:f,columns:g,ref_key:"crudRef",ref:s},{is_enabled:p(({record:r})=>[n(i,{"checked-value":1,"unchecked-value":"0",onChange:l=>c(l,r.id,"is_enabled"),"default-checked":parseInt(r.is_enabled)===1,"checked-text":"开","unchecked-text":"关"},null,8,["onChange","default-checked"])]),sort:p(({record:r})=>[n(o,{modelValue:r.sort,"onUpdate:modelValue":l=>r.sort=l,placeholder:"可填入排序，默认0",min:0,max:42e8,onChange:l=>c(l,r.id,"sort")},null,8,["modelValue","onUpdate:modelValue","onChange"])]),logo_url:p(({record:r})=>[n(y,{src:r.logo_url,fit:"cover",width:"60",height:"60",alt:r.product_name},null,8,["src","alt"])]),_:1},8,["options","columns"])])])}}});export{q as default};
