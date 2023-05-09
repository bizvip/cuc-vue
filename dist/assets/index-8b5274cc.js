import{M as G}from"./index-492d5734.js";import{d as K}from"./dept-4a9ab04b.js";import{u as o}from"./user-6ba7dd95.js";import{c as z}from"./common-fa9d7b0c.js";import{$ as c}from"./request-372f441e.js";import{M as J}from"./index-a1461b30.js";import{r as m,e as Q,b as X,v as C,i as l,W as Y,o as i,c as w,a as x,p as d,k as s,s as n,l as V,S as Z,j as f,G as b,F as ee,L as te,u as ae}from"./runtime-core.esm-bundler-0dd628d9.js";import"./_plugin-vue_export-helper-c27b6911.js";const se={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},oe={class:"lg:w-2/12 w-full h-full p-2 shadow"},re={class:"lg:w-10/12 w-full lg:ml-4 mt-5 lg:mt-0"},le=["src"],de={key:0},ie={name:"system:user"},ve=Object.assign(ie,{setup(ne){const h=m([]),k=m([]),p=m(),_=m(!1),D=m(),y=m("");Q(()=>{K.tree().then(e=>{h.value=e.data,h.value.unshift({label:"所有部门",value:"all"})}),z.getDict("dashboard").then(e=>k.value=e.data)});let T=X(()=>p.value?p.value.isRecovery:!1);const P=e=>{p.value.requestParams=e[0]==="all"?{dept_id:void 0}:{dept_id:e[0]},p.value.requestData()},R=async(e,t)=>{const r=await o.changeStatus({id:t,status:e});r.success&&c.success(r.message)},I=e=>{o.clearCache(e).then(t=>{t.success&&c.success(t.message)})},q=e=>{o.initUserPassword({id:e}).then(t=>t.success&&c.success(t.message))},S=e=>{o.setHomePage({id:D.value,dashboard:y.value}).then(t=>{t.success&&c.success(t.message)}),e(!0)},B=(e,t)=>{if(e==="resetPassword"){J.info({title:"提示",content:"确定将该用户密码重置为 qwe123qwe 吗？",simple:!1,onBeforeOk:r=>{q(t),r(!0)}});return}if(e==="updateCache"){I(t);return}if(e==="setHomePage"){_.value=!0,D.value=t;return}},M=C({api:o.getPageList,recycleApi:o.getRecyclePageList,searchColNumber:3,showIndex:!1,pageLayout:"fixed",rowSelection:!1,operationColumn:!0,operationWidth:200,operationColumnWidth:200,add:{show:!0,api:o.save,auth:["system:user:save"]},edit:{show:!0,api:o.update,auth:["system:user:update"]},delete:{show:!0,api:o.deletes,auth:["system:user:delete"],realApi:o.realDeletes,realAuth:["system:user:realDeletes"]},recovery:{show:!0,api:o.recoverys,auth:["system:user:recovery"]},import:{show:!0,url:"system/user/import",templateUrl:"system/user/downloadTemplate",auth:["system:user:import"]},export:{show:!0,url:"system/user/export",auth:["system:user:export"]},formOption:{width:900,layout:[{formType:"grid",cols:[{span:24,formList:[{dataIndex:"avatar"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"username"}]},{span:12,formList:[{dataIndex:"dept_ids"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"password"}]},{span:12,formList:[{dataIndex:"nickname"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"role_ids"}]},{span:12,formList:[{dataIndex:"phone"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"post_ids"}]},{span:12,formList:[{dataIndex:"email"}]}]},{formType:"grid",cols:[{span:24,formList:[{dataIndex:"status"}]}]},{formType:"grid",cols:[{span:24,formList:[{dataIndex:"remark"}]}]}]},isDbClickEdit:!1,beforeOpenEdit:e=>e.id===1?(c.error("超管不可编辑"),!1):!0,beforeDelete:e=>e.includes(1)?(c.error("超管不可删除"),!1):!0}),O=C([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:85,hide:!1},{title:"头像",dataIndex:"avatar",width:75,formType:"upload",type:"image",rounded:!0,labelWidth:"86px",extra:"不上传则使用默认头像"},{title:"账户",dataIndex:"username",width:130,search:!0,addDisabled:!1,editDisabled:!0,commonRules:[{required:!0,message:"账户必填",minLength:6,maxLength:32}]},{title:"所属部门",dataIndex:"dept_ids",hide:!0,formType:"tree-select",multiple:!0,treeCheckable:!0,treeCheckStrictly:!0,dict:{url:"system/dept/tree"},commonRules:[{required:!0,message:"所属部门必选"}],editDefaultValue:async e=>(await o.read(e.id)).data.deptList.map(r=>r.id)},{title:"密码",dataIndex:"password",hide:!0,autocomplete:"off",addDefaultValue:"qwe123qwe",editDefaultValue:"",editDisabled:!0,type:"password",addRules:[{required:!0,message:"密码必填"}]},{title:"昵称",dataIndex:"nickname",width:120,disabled:!0,display:!0},{title:"角色",dataIndex:"role_ids",width:120,formType:"select",multiple:!1,dict:{url:"system/role/list",props:{label:"name",value:"id"}},hide:!0,commonRules:[{required:!0,message:"角色必选"}],display:!0,addDefaultValue:1002,addReadonly:!0,addDisabled:!0,editDefaultValue:async e=>(await o.read(e.id)).data.roleList.map(r=>r.id),editDisabled:!0},{title:"手机",dataIndex:"phone",width:150,search:!1,hide:!0,commonRules:[{match:/^[+0-9]{9,15}$/,message:"请输入正确的手机号码"}]},{title:"岗位",dataIndex:"post_ids",width:120,formType:"select",multiple:!0,placeholder:"可以多选。岗位不起任何权限作用，仅供展示",dict:{url:"system/post/list",props:{label:"name",value:"id"}},hide:!0,editDefaultValue:async e=>(await o.read(e.id)).data.postList.map(r=>r.id)},{title:"邮箱",dataIndex:"email",width:200,search:!0,commonRules:[{type:"email",message:"请输入正确的邮箱"}]},{title:"状态",dataIndex:"status",width:100,search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",labelWidth:"86px"},{title:"备注",dataIndex:"remark",width:180,hide:!0,formType:"textarea",labelWidth:"86px"},{title:"注册时间",dataIndex:"created_at",width:180,addDisplay:!1,editDisplay:!1,search:!0,formType:"range"}]);return(e,t)=>{const r=l("a-switch"),U=l("a-avatar"),W=l("icon-refresh"),L=l("a-link"),j=l("icon-double-right"),v=l("a-doption"),A=l("a-dropdown"),H=l("ma-crud"),N=l("a-option"),E=l("a-select"),$=l("a-form-item"),F=l("a-modal"),g=Y("auth");return i(),w("div",se,[x("div",oe,[d(G,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=a=>h.value=a),searchPlaceholder:"搜索部门","field-names":{title:"label",key:"value"},selectedKeys:["all"],onClick:P},null,8,["modelValue"])]),x("div",re,[d(H,{options:M,columns:O,ref_key:"crudRef",ref:p},{status:s(({record:a})=>[d(r,{"checked-value":1,"unchecked-value":"2",onChange:u=>R(u,a.id),"default-checked":a.status==1},null,8,["onChange","default-checked"])]),avatar:s(({record:a})=>[d(U,null,{default:s(()=>[x("img",{src:a.avatar||"/avatar.jpg",style:{"object-fit":"cover"},alt:""},null,8,le)]),_:2},1024)]),operationCell:s(({record:a})=>[a.id==1?(i(),w("div",de,[d(L,{onClick:u=>I(a.id)},{default:s(()=>[d(W),n(" 更新缓存 ")]),_:2},1032,["onClick"])])):V("",!0)]),operationAfterExtend:s(({record:a})=>[a.id!=1&&!Z(T)?(i(),f(A,{key:0,trigger:"hover",onSelect:u=>B(u,a.id)},{content:s(()=>[b((i(),f(v,{value:"updateCache"},{default:s(()=>[n("更新缓存")]),_:1})),[[g,["system:user:cache"]]]),b((i(),f(v,{value:"setHomePage"},{default:s(()=>[n("设置首页")]),_:1})),[[g,["system:user:homePage"]]]),b((i(),f(v,{value:"resetPassword"},{default:s(()=>[n("重置密码 ")]),_:1})),[[g,["system:user:initUserPassword"]]])]),default:s(()=>[d(L,null,{default:s(()=>[d(j),n(" 更多 ")]),_:1})]),_:2},1032,["onSelect"])):V("",!0)]),_:1},8,["options","columns"])]),d(F,{visible:_.value,"onUpdate:visible":t[2]||(t[2]=a=>_.value=a),onBeforeOk:S},{title:s(()=>[n("设置用户后台首页")]),default:s(()=>[d($,{label:"用户首页"},{default:s(()=>[d(E,{modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=a=>y.value=a),placeholder:"请选择用户首页"},{default:s(()=>[(i(!0),w(ee,null,te(k.value,(a,u)=>(i(),f(N,{key:u,value:a.key},{default:s(()=>[n(ae(a.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["visible"])])}}});export{ve as default};
