import{a2 as t}from"./request-7ebe3d6d.js";const u={getPageList(e={}){return t({url:"system/role/index",method:"get",params:e})},getList(e={}){return t({url:"system/role/list",method:"get",params:e})},getMenuByRole(e){return t({url:"system/role/getMenuByRole/"+e,method:"get"})},getDeptByRole(e){return t({url:"system/role/getDeptByRole/"+e,method:"get"})},getRecyclePageList(e={}){return t({url:"system/role/recycle",method:"get",params:e})},save(e={}){return t({url:"system/role/save",method:"post",data:e})},deletes(e){return t({url:"system/role/delete",method:"delete",data:e})},recoverys(e){return t({url:"system/role/recovery",method:"put",data:e})},realDeletes(e){return t({url:"system/role/realDelete",method:"delete",data:e})},update(e,r={}){return t({url:"system/role/update/"+e,method:"put",data:r})},updateMenuPermission(e,r){return t({url:"system/role/menuPermission/"+e,method:"put",data:r})},numberOperation(e={}){return t({url:"system/role/numberOperation",method:"put",data:e})},updateDataPermission(e,r){return t({url:"system/role/dataPermission/"+e,method:"put",data:r})},changeStatus(e={}){return t({url:"system/role/changeStatus",method:"put",data:e})}};export{u as r};
