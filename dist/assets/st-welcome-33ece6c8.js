import{c as w}from"./index-2e3b1493.js";import{a as y}from"./dayjs.min-c8708ebd.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,e as j,i as n,o as l,c as Y,a as c,p as s,k as e,S as o,s as a,u as i,j as _,l as d,a_ as B,aY as N}from"./runtime-core.esm-bundler-0dd628d9.js";import"./request-7ebe3d6d.js";const V=u=>(B("data-v-560636e5"),u=u(),N(),u),z={class:"flex justify-between"},C={class:"ma-content-block rounded-sm flex justify-between w-full p-3"},D={class:"pl-0 flex inline-block"},M=["src"],H={class:"pl-3 mt-2"},T={class:"content-block-title"},W=V(()=>c("div",{class:"leading-5 mt-2"}," 欢迎使用渠道联盟中心管理系统，同联盟，共发财 ",-1)),E={class:"datetime ml-5 hidden md:block"},P={class:"text-3xl text-center"},U={class:"text-base"},q={__name:"st-welcome",setup(u){const t=w();m(!1);const f=m(null),h=m(null);j(()=>{v(),setInterval(()=>v(),1e3)});const v=()=>{f.value=y().format("HH:mm:ss"),h.value=y().format("YYYY年MM月DD日")};return(A,F)=>{const b=n("a-avatar"),r=n("a-tag"),k=n("icon-star-fill"),x=n("icon-star"),g=n("icon-heart-fill"),p=n("icon-heart"),S=n("a-space");return l(),Y("div",z,[c("div",C,[c("div",D,[s(b,{size:75,class:"hidden lg:inline-block"},{default:e(()=>[c("img",{src:o(t).user&&o(t).user.avatar?o(t).user.avatar:"/avatar.jpg",alt:""},null,8,M)]),_:1}),c("div",H,[c("div",T,[s(S,{size:"medium"},{default:e(()=>[a(i(o(t).user.username)+" ",1),parseInt(o(t).user.status)!==1?(l(),_(r,{key:0,color:"red",size:"medium",bordered:""},{default:e(()=>[a(" 账号已停用 ")]),_:1})):d("",!0),o(t).user.user_type==="100"?(l(),_(r,{key:1,bordered:"",color:"red"},{icon:e(()=>[s(k)]),default:e(()=>[a("超管")]),_:1})):d("",!0),o(t).user.user_type==="199"?(l(),_(r,{key:2,color:"gold",bordered:""},{icon:e(()=>[s(x)]),default:e(()=>[a("管理员")]),_:1})):d("",!0),o(t).user.user_type==="200"?(l(),_(r,{key:3,color:"purple",bordered:""},{icon:e(()=>[s(g)]),default:e(()=>[a("总代")]),_:1})):d("",!0),o(t).user.user_type==="300"?(l(),_(r,{key:4,color:"arcoblue",bordered:""},{icon:e(()=>[s(p)]),default:e(()=>[a("一级代理")]),_:1})):d("",!0),o(t).user.user_type==="400"?(l(),_(r,{key:5,color:"arcoblue",bordered:""},{icon:e(()=>[s(p)]),default:e(()=>[a("二级代理")]),_:1})):d("",!0),o(t).user.user_type==="500"?(l(),_(r,{key:6,color:"arcoblue",bordered:""},{icon:e(()=>[s(p)]),default:e(()=>[a("三级代理")]),_:1})):d("",!0),s(r,null,{default:e(()=>[a(" 最后登陆IP："+i(o(t).user.login_ip),1)]),_:1}),s(r,null,{default:e(()=>[a(" 最后登陆时间："+i(o(t).user.login_time),1)]),_:1})]),_:1})]),W])]),c("div",E,[c("h2",P,i(f.value),1),c("p",U,i(h.value),1)])])])}}},Q=I(q,[["__scopeId","data-v-560636e5"]]);export{Q as default};