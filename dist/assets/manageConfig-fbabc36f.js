import{c as o}from"./config-9a68f289.js";import{r as l,v as n,i as u,o as v,j as b,k as r,s as x,a as w,p as k}from"./runtime-core.esm-bundler-0dd628d9.js";import"./request-372f441e.js";const y={class:"h-full"},T={__name:"manageConfig",setup(I,{expose:d}){const t=l(!1),s=l(),i=l(),c=[{label:"文本框",value:"input"},{label:"文本域",value:"textarea"},{label:"下拉选择框",value:"select"},{label:"单选框",value:"radio"},{label:"复选框",value:"checkbox"},{label:"开关",value:"switch"},{label:"图片上传",value:"upload"},{label:"富文本编辑器",value:"editor"}],p=e=>{s.value=e,t.value=!0,i.value.requestData()},m=n({pk:"key",autoRequest:!1,api:o.getConfigList,rowSelection:{showCheckedAll:!0,key:"key"},showIndex:!1,operationColumn:!0,operationWidth:160,edit:{show:!0,api:o.update,auth:["setting:config:update"]},delete:{show:!0,api:o.delete,auth:["setting:config:delete"]},beforeRequest:e=>e.group_id=s.value,beforeEdit:e=>{e.config_select_data&&(e.config_select_data=e.config_select_data.replace(/\r|\n|\s/g,""),e.config_select_data=e.config_select_data.replace(",]","]"))},formOption:{width:"700px"}}),f=n([{title:"所属组",dataIndex:"group_id",formType:"select",hide:!0,dict:{url:"setting/configGroup/index",props:{label:"name",value:"id"}},commonRules:[{required:!0,message:"所属组必选"}],width:180},{title:"配置标题",dataIndex:"name",search:!0,commonRules:[{required:!0,message:"配置标题必填"}],width:220},{title:"配置标识",dataIndex:"key",search:!0,commonRules:[{required:!0,message:"配置标识必填"}],disabled:!0,width:180},{title:"配置值",dataIndex:"value",width:200},{title:"排序",dataIndex:"sort",formType:"input-number",width:200,min:0,max:999},{title:"输入组件",dataIndex:"input_type",formType:"select",commonRules:[{required:!0,message:"输入组件必选"}],dict:{data:c},control:e=>({config_select_data:{display:["select","radio","checkbox"].includes(e)}}),width:180},{title:"配置选择数据",dataIndex:"config_select_data",formType:"code-editor",height:200,hide:!0,formExtra:'用于配置下拉、单选、复选的数据，格式例子：[{"label":"数据一", "code":"shuju1"},...]'}]);return d({open:p}),(e,a)=>{const _=u("ma-crud"),g=u("a-modal");return v(),b(g,{fullscreen:"",visible:t.value,"onUpdate:visible":a[0]||(a[0]=h=>t.value=h),footer:!1},{title:r(()=>[x("管理配置")]),default:r(()=>[w("div",y,[k(_,{ref_key:"crudRef",ref:i,options:m,columns:f},null,8,["options","columns"])])]),_:1},8,["visible"])}}};export{T as default};
