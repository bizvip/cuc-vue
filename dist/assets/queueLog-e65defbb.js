import{m as D}from"./index-6def9818.js";import{a2 as f}from"./request-7ebe3d6d.js";import{f as S}from"./common-782ee753.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{r as _,v as g,i as d,o as P,c as R,p as o,k as c,s as T,a as e,u as a,a_ as N,aY as j}from"./runtime-core.esm-bundler-0dd628d9.js";import"./index-2e3b1493.js";const y={getPageList(s={}){return f({url:"system/logs/getQueueLogPageList",method:"get",params:s})},deletes(s){return f({url:"system/logs/deleteQueueLog",method:"delete",data:s})}};const i=s=>(N("data-v-50c23dc9"),s=s(),j(),s),z={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},E={class:"arco-descriptions arco-descriptions-layout-horizontal arco-descriptions-size-medium arco-descriptions-border"},Q={class:"arco-descriptions-body"},U={class:"arco-descriptions-table"},A={class:"arco-descriptions-row"},J=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"交换机名称",-1)),O={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},W={class:"arco-descriptions-row"},Y=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"路由名称",-1)),$={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},F={class:"arco-descriptions-row"},G=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"队列名称",-1)),H={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},K={class:"arco-descriptions-row"},M=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"延迟时间（秒）",-1)),X={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},Z={class:"arco-descriptions-row"},ee=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"创建时间",-1)),te={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},se={name:"system:queueLog"},oe=Object.assign(se,{setup(s){const k=_(),u=_(!1),t=_({request_data:void 0,response_data:void 0}),w=l=>{t.value=l,l.queue_content.length>0&&(t.value.queue_content=/\\\\/g.test(l.queue_content)?t.value.queue_content.replace(/,/g,`,
`):S(t.value.queue_content)),u.value=!0},q=g({api:y.getPageList,showIndex:!1,searchLabelWidth:"100px",pageLayout:"fixed",rowSelection:{showCheckedAll:!0},requestParams:{orderBy:"created_at",orderType:"desc"},delete:{show:!0,api:y.deletes,auth:["system:queueLog:delete"]}}),x=g([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"交换机名称",dataIndex:"exchange_name",search:!0,width:150},{title:"路由名称",dataIndex:"routing_key_name",search:!0,width:150},{title:"队列名称",dataIndex:"queue_name",width:150},{title:"生产状态",dataIndex:"produce_status",width:150,search:!0,formType:"select",dict:{name:"queue_produce_status",props:{label:"title",value:"key"},translation:!0}},{title:"消费状态",dataIndex:"consume_status",width:150,search:!0,formType:"select",dict:{name:"queue_consume_status",props:{label:"title",value:"key"},translation:!0}},{title:"延迟时间（秒）",dataIndex:"delay_time",width:150}]);return(l,n)=>{const I=d("ma-crud"),p=d("a-collapse-item"),L=d("a-collapse"),V=d("a-drawer");return P(),R("div",z,[o(I,{options:q,columns:x,onRowClick:w,ref_key:"crudRef",ref:k},null,8,["options","columns"]),o(V,{visible:u.value,"onUpdate:visible":n[1]||(n[1]=r=>u.value=r),width:"600px",footer:!1},{title:c(()=>[T("队列日志详细信息")]),default:c(()=>{var r,m,h,v,b;return[e("div",E,[e("div",Q,[e("table",U,[e("tbody",null,[e("tr",A,[J,e("td",O,a((r=t.value)==null?void 0:r.exchange_name),1)]),e("tr",W,[Y,e("td",$,a((m=t.value)==null?void 0:m.routing_key_name),1)]),e("tr",F,[G,e("td",H,a((h=t.value)==null?void 0:h.queue_name),1)]),e("tr",K,[M,e("td",X,a((v=t.value)==null?void 0:v.delay_time),1)]),e("tr",Z,[ee,e("td",te,a((b=t.value)==null?void 0:b.created_at),1)])])])])]),o(L,{"default-active-key":["request","response"],"expand-icon-position":"right",class:"mt-3"},{default:c(()=>[o(p,{header:"队列数据",key:"request"},{default:c(()=>[o(D,{modelValue:t.value.queue_content,"onUpdate:modelValue":n[0]||(n[0]=C=>t.value.queue_content=C),"is-bind":"",height:150,readonly:""},null,8,["modelValue"])]),_:1}),o(p,{header:"队列日志",key:"response"},{default:c(()=>[e("pre",null,a(t.value.log_content==null?"无日志数据":t.value.log_content),1)]),_:1})]),_:1})]}),_:1},8,["visible"])])}}}),de=B(oe,[["__scopeId","data-v-50c23dc9"]]);export{de as default};