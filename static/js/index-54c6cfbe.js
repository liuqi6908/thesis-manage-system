import{h as F,r as b,a as v,o as Y,q as j,D as S,d as L,c as D,w as N,b as u,e as $,f as q,g as a,i as r,u as e,j as y,_ as A}from"./index-6808ba74.js";import{m as k}from"./message-27522a78.js";import{P as H}from"./index-eb0c4c8c.js";import{u as z}from"./hooks-62a2627c.js";import{R as I}from"./refresh-74425c09.js";import"./epTheme-ce7d143e.js";const E=c=>F.request("post","/studentScoreList",{data:c});function O(){const c=b(),o=b(!0),i=v({text:"正在加载第1页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),d=v({total:0,pageSize:10,currentPage:1,background:!0}),h=[{type:"selection",width:50,align:"left",hide:({checkList:t})=>!t.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:t})=>!t.includes("序号列")},{label:"课题名称",prop:"title",minWidth:260},{label:"姓名",prop:"username",minWidth:90},{label:"学院",prop:"college",minWidth:120},{label:"专业",prop:"major",minWidth:150},{label:"班级",prop:"class",minWidth:100},{label:"学号",prop:"userNo",minWidth:100},{label:"指导教师",prop:"teacher",minWidth:90},{label:"成绩总评",prop:"score",minWidth:90},{label:"创建时间",minWidth:160,prop:"createTime",formatter:({createTime:t})=>j(t).format("YYYY-MM-DD HH:mm:ss")},{label:"查看",fixed:"right",width:100,slot:"operation"}];function g(){i.text="正在加载...",o.value=!0,S(500).then(()=>{o.value=!1})}function n(t){i.text=`正在加载第${t}页...`,o.value=!0,S(500).then(()=>{o.value=!1})}function _(t){t.url?window.open(t.url):k("查看失败，暂无文件",{type:"error",grouping:!0})}function p(){o.value=!0,E().then(t=>{t.success?(c.value=t.data,d.total=t.data.length):k(t.message,{type:"error"})}).finally(()=>{setTimeout(()=>{o.value=!1},500)})}return Y(()=>{p()}),{dataList:c,loading:o,loadingConfig:i,columns:h,pagination:d,onSearch:p,handleSizeChange:g,handleCurrentChange:n,showFile:_}}const U={width:1024,height:1024,body:'<path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/>'},G=U,J={class:"main"},K=L({name:"CheckTheScore"}),Q=L({...K,setup(c){const o=b(),{dataList:i,loading:d,loadingConfig:h,columns:g,pagination:n,onSearch:_,handleSizeChange:p,handleCurrentChange:t,showFile:P}=O(),m=v({title:""}),W=s=>{s&&s.resetFields()},C=D(()=>i.value?i.value.filter(s=>s.title?s.title.toString().toLowerCase().includes(m.title):!1):[]);return N(()=>{n.total=C.value.length}),(s,f)=>{const R=u("el-input"),w=u("el-form-item"),x=u("el-button"),M=u("el-form"),T=u("pure-table");return $(),q("div",J,[a(M,{ref_key:"formRef",ref:o,inline:!0,model:m,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:r(()=>[a(w,{label:"课题名称：",prop:"title"},{default:r(()=>[a(R,{modelValue:m.title,"onUpdate:modelValue":f[0]||(f[0]=l=>m.title=l),placeholder:"请输入课题名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),a(w,null,{default:r(()=>[a(x,{icon:e(z)(e(I)),onClick:f[1]||(f[1]=l=>W(o.value))},{default:r(()=>[y(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),a(e(H),{title:"成绩列表",onRefresh:e(_),class:"overflow-hidden"},{default:r(({size:l,checkList:V})=>[a(T,{border:"","align-whole":"center",showOverflowTooltip:"",loading:e(d),"loading-config":e(h),size:l,height:l==="small"?130:160,data:e(C).slice((e(n).currentPage-1)*e(n).pageSize,e(n).currentPage*e(n).pageSize),columns:e(g),checkList:V,pagination:e(n),paginationSmall:l==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onPageSizeChange:e(p),onPageCurrentChange:e(t)},{operation:r(({row:B})=>[a(x,{class:"reset-margin",link:"",type:"primary ",size:l,icon:e(z)(e(G)),onClick:X=>e(P)(B)},{default:r(()=>[y(" 查看 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1032,["loading","loading-config","size","height","data","columns","checkList","pagination","paginationSmall","header-cell-style","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["onRefresh"])])}}});const le=A(Q,[["__scopeId","data-v-ea7002f9"]]);export{le as default};