import{a2 as x}from"./request-7ebe3d6d.js";import{f as I}from"./common-782ee753.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{r as u,v as q,i as r,o as U,c as j,p as o,k as d,s as L,a as e,u as a,a_ as z,aY as E}from"./runtime-core.esm-bundler-0dd628d9.js";import"./index-2e3b1493.js";const V={getPageList(s={}){return x({url:"system/logs/getOperLogPageList",method:"get",params:s})},deletes(s){return x({url:"system/logs/deleteOperLog",method:"delete",data:s})}};const c=s=>(z("data-v-2cc8055b"),s=s(),E(),s),J={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},Y={class:"arco-descriptions arco-descriptions-layout-horizontal arco-descriptions-size-medium arco-descriptions-border"},$={class:"arco-descriptions-body"},A={class:"arco-descriptions-table"},F={class:"arco-descriptions-row"},G=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"请求路由 ",-1)),H={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},K={class:"arco-descriptions-row"},M=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"操作用户 ",-1)),Q={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},W={class:"arco-descriptions-row"},X=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"请求方法 ",-1)),Z={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},ee={class:"arco-descriptions-row"},te=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"响应代码 ",-1)),se={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},oe={class:"arco-descriptions-row"},ae=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"业务名称 ",-1)),ce={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},ie={class:"arco-descriptions-row"},le=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"操作时间 ",-1)),re={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},de={class:"arco-descriptions-row"},ne=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"用户IP",-1)),pe={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},_e={class:"arco-descriptions-row"},ue=c(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"用户地点 ",-1)),me={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},he={name:"system:operLog"},ve=Object.assign(he,{setup(s){const P=u(),p=u(!1),t=u({request_data:void 0,response_data:void 0}),D=i=>{t.value=i,i.request_data.length>0&&(t.value.request_data=/\\\\/g.test(i.request_data)?t.value.request_data.replace(/,/g,`,
`):I(t.value.request_data)),i.response_data.length>0&&(t.value.response_data=/\\\\/g.test(i.response_data)?t.value.response_data.replace(/,/g,`
`):I(t.value.response_data)),p.value=!0},S=q({api:V.getPageList,showIndex:!1,pageLayout:"fixed",rowSelection:!1,requestParams:{orderBy:"created_at",orderType:"desc"},delete:{show:!1,api:V.deletes,auth:["system:operLog:delete"]}}),B=q([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:75,hide:!1},{title:"登录用户",dataIndex:"username",search:!0,width:150},{title:"业务名称",dataIndex:"service_name",search:!0,width:150},{title:"路由",dataIndex:"router",width:240},{title:"登录IP",dataIndex:"ip",width:150,search:!0},{title:"登录地点",dataIndex:"ip_location",width:150},{title:"状态码",dataIndex:"response_code",width:120},{title:"操作时间",dataIndex:"created_at",width:180,search:!0,formType:"range"}]);return(i,l)=>{const R=r("a-alert"),C=r("ma-crud"),m=r("ma-code-editor"),h=r("a-collapse-item"),N=r("a-collapse"),O=r("a-drawer");return U(),j("div",null,[o(R,{closable:"",style:{clear:"both"}},{default:d(()=>[L("点击表格任意行可以查看该条记录详情")]),_:1}),e("div",J,[o(C,{options:S,columns:B,onRowClick:D,ref_key:"crudRef",ref:P},null,8,["options","columns"]),o(O,{visible:p.value,"onUpdate:visible":l[2]||(l[2]=n=>p.value=n),width:"600px",footer:!1},{title:d(()=>[L("操作日志详细信息")]),default:d(()=>{var n,v,b,f,g,w,k,y;return[e("div",Y,[e("div",$,[e("table",A,[e("tbody",null,[e("tr",F,[G,e("td",H,a((n=t.value)==null?void 0:n.router),1)]),e("tr",K,[M,e("td",Q,a((v=t.value)==null?void 0:v.username),1)]),e("tr",W,[X,e("td",Z,a((b=t.value)==null?void 0:b.method),1)]),e("tr",ee,[te,e("td",se,a((f=t.value)==null?void 0:f.response_code),1)]),e("tr",oe,[ae,e("td",ce,a((g=t.value)==null?void 0:g.service_name),1)]),e("tr",ie,[le,e("td",re,a((w=t.value)==null?void 0:w.created_at),1)]),e("tr",de,[ne,e("td",pe,a((k=t.value)==null?void 0:k.ip),1)]),e("tr",_e,[ue,e("td",me,a((y=t.value)==null?void 0:y.ip_location),1)])])])])]),o(N,{"default-active-key":["request","response"],"expand-icon-position":"right",class:"mt-3"},{default:d(()=>[o(h,{header:"请求数据",key:"request"},{default:d(()=>[o(m,{modelValue:t.value.request_data,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value.request_data=_),"is-bind":"",height:150,readonly:""},null,8,["modelValue"])]),_:1}),o(h,{header:"响应数据",key:"response"},{default:d(()=>[o(m,{modelValue:t.value.response_data,"onUpdate:modelValue":l[1]||(l[1]=_=>t.value.response_data=_),"is-bind":"",height:150,readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]}),_:1},8,["visible"])])])}}}),ye=T(ve,[["__scopeId","data-v-2cc8055b"]]);export{ye as default};
