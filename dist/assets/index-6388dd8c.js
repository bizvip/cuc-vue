import{_ as O}from"./index-831b9b58.js";import{c as C}from"./index-2e3b1493.js";import{u as I}from"./user-73ea5d93.js";import{c as L}from"./common-5d647e0d.js";import N from"./modifyPassword-129a1427.js";import T from"./userInfomation-c21a0704.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{$ as F}from"./request-7ebe3d6d.js";import{v as h,r as $,e as M,w as U,i as n,o as l,c as p,a as c,p as e,k as a,s as f,u as _,S as u,F as w,L as j,j as B}from"./runtime-core.esm-bundler-0dd628d9.js";import"./vue-i18n.cjs-61def1cf.js";const q={class:"block"},D={class:"user-header rounded-sm text-center"},E={class:"pt-3 mx-auto avatar-box"},P={class:"ma-content-block w-full lg:w-6/12 mt-3 p-4"},G={class:"ma-content-block w-full lg:w-6/12 mt-3 p-4 ml-0 lg:ml-3"},H={name:"userCenter"},J=Object.assign(H,{setup(K){const s=C(),r=h({...s.user}),g=$([]),v=$([]),y=h({username:s.user.username,pageSize:5});return M(()=>{L.getLoginLogList(Object.assign(y,{orderBy:"login_time",orderType:"desc"})).then(o=>{g.value=o.data.items}),L.getOperationLogList(Object.assign(y,{orderBy:"created_at",orderType:"desc"})).then(o=>{v.value=o.data.items})}),r.avatar=s.user&&s.user.avatar?s.user.avatar:"/avatar.jpg",U(()=>r.avatar,async o=>{o&&(await I.updateInfo({id:r.id,avatar:o})).success&&(F.success("头像修改成功"),s.user.avatar=o)}),(o,d)=>{const V=n("a-tag"),i=n("a-tab-pane"),b=n("a-tabs"),k=n("a-timeline-item"),x=n("a-timeline"),S=n("a-layout-content");return l(),p("div",q,[c("div",D,[c("div",E,[e(O,{modelValue:r.avatar,"onUpdate:modelValue":d[0]||(d[0]=t=>r.avatar=t),rounded:""},null,8,["modelValue"])]),c("div",null,[e(V,{size:"large",class:"mt-3 rounded-full",color:"#165dff"},{default:a(()=>[f(_(u(s).user&&u(s).user.nickname||u(s).user&&u(s).user.username),1)]),_:1})])]),e(S,{class:"block lg:flex lg:justify-between"},{default:a(()=>[c("div",P,[e(b,{type:"rounded"},{default:a(()=>[e(i,{key:"info",title:"个人资料"},{default:a(()=>[e(T)]),_:1}),e(i,{key:"safe",title:"安全设置"},{default:a(()=>[e(N)]),_:1})]),_:1})]),c("div",G,[e(b,{type:"rounded"},{default:a(()=>[e(i,{key:"login-log",title:"登录日志"},{default:a(()=>[e(x,{class:"pl-5 mt-3"},{default:a(()=>[(l(!0),p(w,null,j(g.value,(t,m)=>(l(),B(k,{label:`地理位置；${t.ip_location}，操作系统：${t.os}`,key:m},{default:a(()=>[f(" 您于 "+_(t.login_time)+" 登录系统，"+_(t.message),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),e(i,{key:"operation-log",title:"操作日志"},{default:a(()=>[e(x,{class:"pl-5 mt-3"},{default:a(()=>[(l(!0),p(w,null,j(v.value,(t,m)=>(l(),B(k,{label:`地理位置；${t.ip_location}，方式：${t.method}，路由：${t.router}`,key:m},{default:a(()=>[f(" 您于 "+_(t.created_at)+" 执行了 "+_(t.service_name),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})])]),_:1})])}}}),se=z(J,[["__scopeId","data-v-1745ecc0"]]);export{se as default};