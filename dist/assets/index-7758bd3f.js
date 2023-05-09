import{c as m}from"./channelList-ddf92601.js";import{a as n}from"./dayjs.min-7e8fbc3c.js";import{$ as F}from"./request-372f441e.js";import{r as _,v as w,i as l,o as i,c as k,p as a,k as t,s as d,u as s,j as h,l as N,F as O,L as z}from"./runtime-core.esm-bundler-0dd628d9.js";const M={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},W={name:"channel:list"},K=Object.assign(W,{setup(U){const f=_(!1),y=_(!0),x=_({code:0,data:{},message:"",success:!1});_(!1);const T=async o=>{f.value=!0,y.value=!0,x.value=await m.getOne(o),y.value=!1},I=_(),D=w([{label:"next 2 days",value:()=>[n(),n().add(2,"day")]},{label:"next 7 days",value:()=>[n(),n().add(1,"month")]},{label:"next 30 days",value:()=>[n(),n().add(1,"month")]},{label:"next 6 months",value:()=>[n(),n().add(6,"month")]},{label:"next 12 months",value:()=>[n(),n().add(1,"year")]},{label:"next 10 years",value:()=>[n(),n().add(10,"year")]}]),C=(o,r,b)=>{m.updateValue({id:r,name:b,value:o}).then(u=>{u.success&&F.success(u.message),I.value.refresh()}).catch(u=>{console.log(u)})},R=w({id:"cm_channel_list",rowSelection:!1,pk:"id",operationColumn:!0,operationWidth:180,operationColumnWidth:180,formOption:{viewType:"drawer",width:700},api:m.getList,add:{show:!0,api:m.save,auth:["channel:list:save"]},edit:{show:!0,api:m.update,auth:["channel:list:update"]},export:{show:!0,url:"channel/list/export",auth:["channel:list:export"]},beforeRequest(o){o.orderBy="id",o.orderType="desc"},contextMenu:{enabled:!0,items:[{operation:"refresh"}]}}),V=w([{title:"ID",dataIndex:"id",formType:"input-number",search:!0,hide:!1,display:!1,width:80,placeholder:"无需填写"},{title:"总代 | ID",dataIndex:"top_id",formType:"input-number",placeholder:"即隶属哪个总代ID",searchPlaceholder:"总代id",search:!0,hide:!1,display:!1,width:80,commonRules:{required:!1,message:"将自动绑定总代关系，无需填写"}},{title:"上级(ID)",dataIndex:"parent_id",formType:"input-number",placeholder:"直属上级的ID",search:!0,hide:!1,display:!1,width:80,commonRules:{required:!1,message:"将自动绑定上级关系，无需填写"}},{title:"渠道账号",dataIndex:"channel_account",formType:"input",search:!0,commonRules:{required:!0,message:"渠道账号6-32位，允许数字、小写字母、下划线_或连接线-，不得为空，不允许大写字母",minLength:6,maxLength:32,match:/^(?![0-9])[a-z0-9_-]+$/},addDefaultValue:"of-",extra:"渠道账号默认会自动指定一个开头字符串，请补充后面的字符串即可",width:120},{title:"渠道密码",dataIndex:"channel_pwd",formType:"input-password",editDisplay:!0,addDisplay:!0,commonRules:{required:!0,message:"请输入渠道账号密码"},hide:!0},{title:"渠道名",dataIndex:"channel_name",formType:"input",search:!0,commonRules:{required:!0,message:"渠道名字",minLength:2,maxLength:30,match:/^[\u4e00-\u9fa5a-zA-Z0-9-_]{2,30}$/},width:150,extra:"渠道名只允许英文大小写、数字、中文、连接线、下划线，长度2到30以内"},{title:"推广类型",dataIndex:"ad_type",formType:"radio",search:!0,commonRules:{required:!0,message:"请选择推广类型"},multiple:!1,dict:{name:"ad-type",props:{label:"title",value:"key"},translation:!0},width:80},{title:"状态",dataIndex:"is_enabled",formType:"radio",search:!0,commonRules:{required:!0,message:"请选择开启还是关闭"},multiple:!1,checkedValue:"1",uncheckedValue:"0",dict:{name:"is_enabled",props:{label:"title",value:"key"},translation:!0},width:60,addDefaultValue:1},{title:"更新时间",dataIndex:"updated_at",formType:"date",search:!0,hide:!1,disabled:!0,display:!1,sortable:{sortDirections:["ascend","descend"],sorter:!0},showTime:!0,width:150},{title:"层级",dataIndex:"level",formType:"input-number",width:60,hide:!1,disabled:!0,display:!1},{title:"扣量规则ID",dataIndex:"rule_id",formType:"input",hide:!0,disabled:!0,display:!1},{title:"产品",dataIndex:"product_ids",formType:"checkbox",hide:!0,dict:{url:"product/list/my-products",translation:!0,props:{label:"product_name",value:"id"}},width:100},{title:"备注信息",dataIndex:"remark",formType:"textarea",addDisplay:!1,editDisplay:!1,hide:!0},{title:"创建时间",dataIndex:"created_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0}]);return(o,r)=>{const b=l("a-range-picker"),u=l("a-switch"),L=l("a-tag"),p=l("a-typography-text"),g=l("a-link"),q=l("icon-eye"),B=l("ma-crud"),P=l("a-input"),j=l("a-form-item"),S=l("a-form"),$=l("a-typography"),A=l("a-spin"),E=l("a-drawer");return i(),k("div",M,[a(B,{options:R,columns:V,ref_key:"crudRef",ref:I},{"search-updated_at":t(({searchForm:e,component:c})=>[a(b,{"shortcuts-position":"right",shortcuts:D},null,8,["shortcuts"])]),is_enabled:t(({record:e})=>[a(u,{"default-checked":parseInt(e.is_enabled)===1,"checked-text":"开","unchecked-text":"关","checked-value":"1","unchecked-value":"0",onChange:c=>C(c,e.id,"is_enabled")},null,8,["default-checked","onChange"])]),top_id:t(({record:e})=>[a(L,{bordered:parseInt(e.top_id)===0,color:parseInt(e.top_id)===0?"blue":""},{default:t(()=>[d(s(parseInt(e.top_id)===0?"主渠道":"子 | "+e.top_id),1)]),_:2},1032,["bordered","color"])]),parent_id:t(({record:e})=>[a(p,null,{default:t(()=>[d(s(parseInt(e.parent_id)===0?"":e.parent_id),1)]),_:2},1024)]),channel_name:t(({record:e})=>[a(p,{bold:""},{default:t(()=>[d(s(e.top_id===0?"[主] | ":"")+" "+s(e.channel_name),1)]),_:2},1024)]),ad_type:t(({record:e})=>[e.ad_type==="CPA"?(i(),h(p,{key:0,type:"secondary"},{default:t(()=>[d(s(e.ad_type),1)]),_:2},1024)):e.ad_type==="CPS"?(i(),h(p,{key:1,type:"primary"},{default:t(()=>[d(s(e.ad_type),1)]),_:2},1024)):e.ad_type==="CPT"?(i(),h(p,{key:2,type:"warning"},{default:t(()=>[d(s(e.ad_type),1)]),_:2},1024)):e.ad_type==="CPC"?(i(),h(p,{key:3,type:"success"},{default:t(()=>[d(s(e.ad_type),1)]),_:2},1024)):N("",!0)]),operationBeforeExtend:t(({record:e})=>[a(g,{onClick:r[0]||(r[0]=()=>{})},{default:t(()=>[d(" 登陆 ")]),_:1}),a(g,{onClick:c=>T(e.id)},{default:t(()=>[a(q),d(" 查看 ")]),_:2},1032,["onClick"])]),operationAfterExtend:t(({record:e})=>[a(g,null,{default:t(()=>[d(" 日志 ")]),_:1})]),_:1},8,["options","columns"]),a(E,{visible:f.value,"onUpdate:visible":r[1]||(r[1]=e=>f.value=e),width:"700px",footer:!1},{title:t(()=>{var e;return[d("查看渠道 "+s((e=x.value)==null?void 0:e.data.channel_account)+" 详情 ",1)]}),default:t(()=>[a(A,{loading:y.value,tip:"数据加载中...",class:"block"},{default:t(()=>[a($,null,{default:t(()=>[a(S,null,{default:t(()=>{var e;return[(i(!0),k(O,null,z((e=x.value)==null?void 0:e.data,(c,v)=>(i(),k("div",{key:v},[a(j,{field:v,label:v},{default:t(()=>[a(P,{"model-value":c,readonly:"readonly"},null,8,["model-value"])]),_:2},1032,["field","label"])]))),128))]}),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},8,["visible"])])}}});export{K as default};
