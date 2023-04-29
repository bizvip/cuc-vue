import{d as N}from"./dataMaintain-1ecf9a8d.js";import{d as B}from"./datasource-0712472c.js";import{g as I}from"./generate-813130fa.js";import{$ as R}from"./request-7ebe3d6d.js";import{r as c,v as M,i as u,o as j,j as z,k as a,s as b,p as e,z as $}from"./runtime-core.esm-bundler-0dd628d9.js";const O={__name:"loadTable",emits:["success"],setup(E,{expose:S,emit:T}){const r=c(),p=c([]),_=c(!1),s=c("MineAdmin"),i=c({}),d=c({}),f=c([]);I.getDataSourceList().then(l=>{f.value=l.data.items,f.value.unshift({label:"系统数据源",value:"MineAdmin"})});const g=()=>{const l=v.find(m=>m.dataIndex==="new_name"),o=v.find(m=>m.dataIndex==="new_comment");s.value==="MineAdmin"?(l.hide=!0,o.hide=!0):(l.hide=!1,o.hide=!1),k.api=s.value==="MineAdmin"?N.getPageList:B.getDataSourceTablePageList,r.value.requestParams.id=s.value==="MineAdmin"?void 0:s.value,r.value.requestData()},A=async l=>{if(p.value.length<1){R.info("至少要选择一条数据"),l(!1);return}let o=[];r.value.getTableData().filter(n=>{p.value.includes(n.name)&&o.push({name:n.name,comment:n.comment,sourceName:n.name})}),o.map(n=>{d.value[n.sourceName]&&(n.comment=d.value[n.sourceName]),i.value[n.name]&&(n.name=i.value[n.name])});const m=await I.loadTable({source:s.value,names:o});T("success",m.success),p.value=[],l(!0)},U=l=>p.value=l,L=()=>{_.value=!0,$(()=>{g()})},k=M({pk:"name",autoRequest:!1,searchColNumber:1,api:N.getPageList,showIndex:!0,rowSelection:{showCheckedAll:!0,key:"name",onlyCurrent:!0}}),v=M([{title:"表名称",dataIndex:"name",search:!0,width:200},{title:"新名称",dataIndex:"new_name",hide:!0,width:200},{title:"表注释",dataIndex:"comment",width:180},{title:"新注释",dataIndex:"new_comment",hide:!0,width:180},{title:"创建时间",dataIndex:"create_time",width:180}]);return S({open:L}),(l,o)=>{const m=u("a-alert"),n=u("a-select"),D=u("a-button"),h=u("a-input-group"),x=u("a-input"),C=u("icon-copy"),V=u("a-link"),y=u("a-tooltip"),P=u("ma-crud"),q=u("a-modal");return j(),z(q,{width:"1100px",visible:_.value,"onUpdate:visible":o[1]||(o[1]=t=>_.value=t),"on-before-ok":A,"align-center":!1,top:"50px","unmount-on-close":""},{title:a(()=>[b("装载数据表")]),default:a(()=>[e(m,{class:"mb-3",closable:""},{default:a(()=>[b("非系统数据源，载入表时，会同步远程的表结构到本地数据库。建议重新命名表名称和表注释。但需要注意表名称的规范")]),_:1}),e(P,{options:k,columns:v,ref_key:"crudRef",ref:r,onSelectionChange:U},{tableButtons:a(()=>[e(h,null,{default:a(()=>[e(n,{placeholder:"切换数据源",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),options:f.value,style:{width:"300px"}},null,8,["modelValue","options"]),e(D,{type:"primary",onClick:g},{default:a(()=>[b("确定切换")]),_:1})]),_:1})]),new_name:a(({record:t})=>[e(h,null,{default:a(()=>[e(x,{modelValue:i.value[t.name],"onUpdate:modelValue":w=>i.value[t.name]=w},null,8,["modelValue","onUpdate:modelValue"]),e(y,{content:"复制表名称到新名称"},{default:a(()=>[e(V,{onClick:()=>i.value[t.name]=t.name},{default:a(()=>[e(C)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),new_comment:a(({record:t})=>[e(h,null,{default:a(()=>[e(x,{modelValue:d.value[t.name],"onUpdate:modelValue":w=>d.value[t.name]=w},null,8,["modelValue","onUpdate:modelValue"]),e(y,{content:"复制表注释到新注释"},{default:a(()=>[e(V,{onClick:()=>d.value[t.name]=t.comment},{default:a(()=>[e(C)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["options","columns"])]),_:1},8,["visible"])}}};export{O as default};
