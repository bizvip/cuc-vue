import{c as k}from"./common-5d647e0d.js";import{r as c,v as w,i as o,o as N,c as L,a as r,s as l,p as a,k as e,u as p}from"./runtime-core.esm-bundler-0dd628d9.js";import"./request-7ebe3d6d.js";const T={class:"w-full lg:w-9/12 ma-content-block rounded-sm p-3 mt-3"},B={class:"flex justify-between"},C=["innerHTML"],S={__name:"st-announced",setup(V){const _=c([]),f=w([{title:"标题",dataIndex:"title",slotName:"title"},{title:"发布时间",dataIndex:"created_at",width:180,align:"right"}]),n=c({}),i=c(!1),v=async s=>{n.value=s,i.value=!0};return(async()=>{const s=await k.getNoticeList({pageSize:5,orderBy:"id",orderType:"desc"});_.value=s.data.items})(),(s,d)=>{const u=o("a-link"),g=o("a-table"),y=o("a-typography-title"),h=o("a-space"),m=o("a-typography-paragraph"),x=o("a-typography"),b=o("a-modal");return N(),L("div",T,[r("div",B,[l(" 系统公告 "),a(u,null,{default:e(()=>[l("更多")]),_:1})]),a(g,{data:_.value,columns:f,class:"mt-2",pagination:!1},{title:e(({record:t})=>[a(u,{onClick:D=>v(t)},{default:e(()=>[l(p(t.title),1)]),_:2},1032,["onClick"])]),_:1},8,["data","columns"]),a(b,{visible:i.value,"onUpdate:visible":d[0]||(d[0]=t=>i.value=t),fullscreen:"",footer:!1},{title:e(()=>[l("公告详情")]),default:e(()=>[a(x,{style:{marginTop:"-30px"}},{default:e(()=>[a(y,{class:"text-center"},{default:e(()=>{var t;return[l(p((t=n.value)==null?void 0:t.title),1)]}),_:1}),a(m,{class:"text-right",style:{"font-size":"13px",color:"var(--color-text-3)"}},{default:e(()=>[a(h,{size:"large"},{default:e(()=>{var t;return[r("span",null,"创建时间："+p((t=n.value)==null?void 0:t.created_at),1)]}),_:1})]),_:1}),a(m,null,{default:e(()=>{var t;return[r("div",{innerHTML:(t=n.value)==null?void 0:t.content},null,8,C)]}),_:1})]),_:1})]),_:1},8,["visible"])])}}};export{S as default};
