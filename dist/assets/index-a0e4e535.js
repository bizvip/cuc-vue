import{a as t,_ as C}from"./bind-11e70660.js";import{M as u}from"./index-8e0d8596.js";import{$ as A}from"./request-7ebe3d6d.js";import{r as m,b as D,v as f,i,o as R,c as T,p as o,C as P,S,k as r,s as _}from"./runtime-core.esm-bundler-0dd628d9.js";import"./apiGroup-8df4b8e1.js";const L={class:"ma-content-block lg:flex justify-between pt-4 pl-2 pr-2 pb-2"},E={name:"system:app"},M=Object.assign(E,{setup(V){const s=m(),c=m(),h=e=>{window.open(window.location.origin+"/#/mineDoc?app_id="+e.app_id+"&app_secret="+e.app_secret)},y=e=>{c.value.open(e)},g=async(e,n)=>{const a=await t.changeStatus({id:n,status:e});a.success&&A.success(a.message)};let x=D(()=>s.value?s.value.isRecovery:!1);const w=f({api:t.getList,recycleApi:t.getRecycleList,showIndex:!1,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationWidth:270,add:{show:!0,api:t.save,auth:["system:app:save"]},edit:{show:!0,api:t.update,auth:["system:app:update"]},delete:{show:!0,api:t.deletes,auth:["system:app:delete"],realApi:t.realDeletes,realAuth:["system:app:realDeletes"]},recovery:{show:!0,api:t.recoverys,auth:["system:app:recovery"]},formOption:{width:"850px",layout:[{formType:"grid",cols:[{span:12,formList:[{dataIndex:"group_id"}]},{span:12,formList:[{dataIndex:"app_name"}]}]},{formType:"grid",cols:[{span:18,formList:[{dataIndex:"app_id"}]},{span:5,offset:1,formList:[{dataIndex:"app_id_button"}]}]},{formType:"grid",cols:[{span:18,formList:[{dataIndex:"app_secret"}]},{span:5,offset:1,formList:[{dataIndex:"app_secret_button"}]}]}]}}),k=f([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"所属组",dataIndex:"group_id",search:!0,commonRules:[{required:!0,message:"所属组必选"}],formType:"select",dict:{url:"system/appGroup/list",props:{label:"name",value:"id"},translation:!0},labelWidth:"140px",width:140},{title:"应用名称",dataIndex:"app_name",search:!0,commonRules:[{required:!0,message:"应用名称必填"}],labelWidth:"120px",width:150},{title:"APP ID",dataIndex:"app_id",search:!0,commonRules:[{required:!0,message:"APP ID必填"}],labelWidth:"120px",disabled:!0,width:120,addDefaultValue:async()=>(await t.getAppId()).data.app_id},{formType:"button",dataIndex:"app_id_button",hide:!0,type:"primary",title:"刷新APP ID",long:!0,onClick:async()=>{const e=s.value.getFormData();if(s.value.getCurrentAction()==="edit"){u.info({simple:!1,hideCancel:!1,title:"提示",content:"此操作会造成已使用的应用验证失败，确定执行吗？",onOk:async()=>{const a=await t.getAppId();e.app_id=a.data.app_id}});return}const n=await t.getAppId();e.app_id=n.data.app_id}},{title:"APP SECRET",dataIndex:"app_secret",commonRules:[{required:!0,message:"APP SECRET必填"}],labelWidth:"120px",disabled:!0,span:19,width:500,addDefaultValue:async()=>(await t.getAppSecret()).data.app_secret},{formType:"button",type:"primary",title:"刷新APP SECRET",long:!0,dataIndex:"app_secret_button",hide:!0,onClick:async()=>{const e=s.value.getFormData();if(s.value.getCurrentAction()==="edit"){u.info({simple:!1,hideCancel:!1,title:"提示",content:"此操作会造成已使用的应用验证失败，确定执行吗？",onOk:async()=>{const a=await t.getAppSecret();e.app_secret=a.data.app_secret}});return}const n=await t.getAppSecret();e.app_secret=n.data.app_secret}},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:80},{title:"应用介绍",dataIndex:"description",hide:!0,formType:"editor"},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,width:180}]);return(e,n)=>{const a=i("a-switch"),I=i("icon-book"),l=i("a-link"),b=i("icon-pushpin"),v=i("ma-crud");return R(),T("div",L,[o(v,{options:w,columns:k,ref_key:"crudRef",ref:s},P({status:r(({record:p})=>[o(a,{"checked-value":1,"unchecked-value":"2",onChange:d=>g(d,p.id),"default-checked":p.status==1},null,8,["onChange","default-checked"])]),_:2},[S(x)?void 0:{name:"operationBeforeExtend",fn:r(({record:p})=>[o(l,{onClick:d=>h(p)},{default:r(()=>[o(I),_(" 文档")]),_:2},1032,["onClick"]),o(l,{onClick:d=>y(p.id)},{default:r(()=>[o(b),_(" 绑定")]),_:2},1032,["onClick"])]),key:"0"}]),1032,["options","columns"]),o(C,{ref_key:"bindRef",ref:c},null,512)])}}});export{M as default};
