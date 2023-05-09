import{m as B}from"./monitor-fc83cd45.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{r,i as c,o as s,j as h,k as a,c as p,p as e,s as t,u as l,a as z,l as g}from"./runtime-core.esm-bundler-0dd628d9.js";import"./request-372f441e.js";const N={key:0,class:"ma-content-block lg:flex p-4"},V={key:1,class:"flex justify-between w-full redis-info mt-3"},G={class:"echarts hidden lg:block"},O={key:1,class:"ma-content-block lg:flex p-4 mt-3"},U={key:1,class:"flex justify-between w-full redis-info mt-3"},A={class:"echarts hidden lg:block"},S={key:2,class:"ma-content-block lg:flex p-4 mt-3"},D={key:1,class:"flex justify-between w-full redis-info mt-3"},E={name:"system:monitor:server"},H=Object.assign(E,{setup(M){const x=r({}),C=r({}),u=r({}),i=r({}),n=r({}),_=r({}),m=r(!0);return(async()=>{var w,d,f,v;m.value=!0;const b=await B.getServerInfo();u.value=(w=b.data)==null?void 0:w.cpu,i.value=(d=b.data)==null?void 0:d.memory,n.value=(f=b.data)==null?void 0:f.phpenv,_.value=(v=b.data)==null?void 0:v.disk,x.value={tooltip:{formatter:"{b} : {c}%"},series:[{name:"CPU使用率",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:u.value.usage,name:"CPU使用率"}]}]},C.value={tooltip:{formatter:"{b} : {c}%"},series:[{name:"内存使用率",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:i.value.rate,name:"内存使用率"}]}]},m.value=!1})(),(b,w)=>{const d=c("a-skeleton-line"),f=c("a-space"),v=c("a-skeleton"),o=c("a-descriptions-item"),y=c("a-descriptions"),j=c("ma-chart"),k=c("a-divider"),P=c("a-layout-content");return s(),h(P,null,{default:a(()=>[u.value?(s(),p("div",N,[m.value?(s(),h(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(d,{rows:5})]),_:1})]),_:1})):(s(),p("div",V,[e(y,{column:1,size:"large",bordered:"",title:"CPU信息",class:"lg:w-9/12 w-full"},{default:a(()=>[e(o,{label:"型号"},{default:a(()=>[t(l(u.value.name),1)]),_:1}),e(o,{label:"核心数"},{default:a(()=>[t(l(u.value.cores),1)]),_:1}),e(o,{label:"缓存"},{default:a(()=>[t(l(u.value.cache),1)]),_:1}),e(o,{label:"使用率"},{default:a(()=>[t(l(u.value.usage)+"%",1)]),_:1}),e(o,{label:"空闲率"},{default:a(()=>[t(l(u.value.free)+"%",1)]),_:1})]),_:1}),z("div",G,[e(j,{options:x.value,width:"350px",height:"350px"},null,8,["options"])])]))])):g("",!0),i.value?(s(),p("div",O,[m.value?(s(),h(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(d,{rows:5})]),_:1})]),_:1})):(s(),p("div",U,[e(y,{column:1,size:"large",bordered:"",title:"内存信息",class:"lg:w-9/12 w-full"},{default:a(()=>[e(o,{label:"总内存"},{default:a(()=>[t(l(i.value.total)+"G",1)]),_:1}),e(o,{label:"已使用内存"},{default:a(()=>[t(l(i.value.usage)+"G",1)]),_:1}),e(o,{label:"应用使用内存"},{default:a(()=>[t(l(i.value.php)+"M",1)]),_:1}),e(o,{label:"空闲内存"},{default:a(()=>[t(l(i.value.free)+"G",1)]),_:1}),e(o,{label:"使用率"},{default:a(()=>[t(l(i.value.rate)+"%",1)]),_:1})]),_:1}),z("div",A,[e(j,{options:C.value,width:"350px",height:"350px"},null,8,["options"])])]))])):g("",!0),n.value?(s(),p("div",S,[m.value?(s(),h(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(d,{rows:5})]),_:1})]),_:1})):(s(),p("div",D,[e(y,{column:2,size:"large",bordered:"",title:"PHP及环境信息",class:"w-full"},{default:a(()=>[e(o,{label:"操作系统"},{default:a(()=>[t(l(n.value.os),1)]),_:1}),e(o,{label:"底层环境"},{default:a(()=>[t(l(n.value.php_version),1)]),_:1}),e(o,{label:"协程环境"},{default:a(()=>[t(l(n.value.swoole_version),1)]),_:1}),e(o,{label:"框架"},{default:a(()=>[t(l(n.value.hyperf_version),1)]),_:1}),e(o,{label:"渠道管理中心版本"},{default:a(()=>[t(" 1.0.0 ")]),_:1}),e(o,{label:"系统物理路径"},{default:a(()=>[t(l(n.value.project_path),1)]),_:1}),e(o,{label:"系统启动时间"},{default:a(()=>[t(l(n.value.start_time),1)]),_:1}),e(o,{label:"系统运行时间"},{default:a(()=>[t(l(n.value.run_time),1)]),_:1}),_.value?(s(),h(o,{key:0,label:"磁盘信息"},{default:a(()=>[t(" 总空间："+l(_.value.total)+" ",1),e(k,{direction:"vertical"}),t(" 已使用："+l(_.value.usage)+" ",1),e(k,{direction:"vertical"}),t(" 已剩余："+l(_.value.free)+" ",1),e(k,{direction:"vertical"}),t(" 使用率："+l(_.value.rate),1)]),_:1})):g("",!0)]),_:1})]))])):g("",!0)]),_:1})}}}),L=I(H,[["__scopeId","data-v-b08e0715"]]);export{L as default};
