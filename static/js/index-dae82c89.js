import{m as R}from"./message-27522a78.js";import{h as E,r as _,a as v,o as j,E as H,D as B,d as N,c as O,w as G,b as p,e as J,f as K,g as t,i as a,u as o,j as V,_ as Q}from"./index-6808ba74.js";import{P as X}from"./index-eb0c4c8c.js";import{u as P}from"./hooks-62a2627c.js";import{R as Z}from"./refresh-74425c09.js";import{A as ee}from"./add-circle-line-438b436c.js";import"./epTheme-ce7d143e.js";const te=u=>E.request("post","/getNoticeList",{data:u});function le(){const u=_(),s=_(!0),h=v({text:"正在加载第1页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),b=v({total:0,pageSize:10,currentPage:1,background:!0}),w=[{type:"selection",width:50,align:"left",hide:({checkList:i})=>!i.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:i})=>!i.includes("序号列")},{label:"标题",prop:"title",minWidth:200},{label:"描述",prop:"description",minWidth:150},{label:"发布时间",prop:"datetime",minWidth:120},{label:"跳转链接",prop:"link",minWidth:180},{label:"操作",fixed:"right",width:100,slot:"operation"}];function c(i){H.confirm(`确认要 <strong>删除</strong> <strong style='color:var(--el-color-primary)'>
      ${i.title}</strong> 通知吗?`,"删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{s.value=!0,setTimeout(()=>{const x=u.value.findIndex(m=>m.id===i.id);x>-1&&u.value.splice(x,1),R("删除成功",{type:"success"}),s.value=!1},500)}).catch(()=>{})}function d(){h.text="正在加载...",s.value=!0,B(500).then(()=>{s.value=!1})}function S(i){h.text=`正在加载第${i}页...`,s.value=!0,B(500).then(()=>{s.value=!1})}function y(){s.value=!0,te().then(i=>{i.success?(u.value=i.data,b.total=i.data.length):R(i.message,{type:"error"})}).finally(()=>{setTimeout(()=>{s.value=!1},500)})}return j(()=>{y()}),{loading:s,loadingConfig:h,columns:w,dataList:u,pagination:b,onSearch:y,handleDelete:c,handleSizeChange:d,handleCurrentChange:S}}const oe={class:"main"},ae=N({name:"NoticeManagement"}),ne=N({...ae,setup(u){const s=_(),{loading:h,loadingConfig:b,columns:w,dataList:c,pagination:d,onSearch:S,handleDelete:y,handleSizeChange:i,handleCurrentChange:x}=le(),m=v({title:""}),U=n=>{n&&n.resetFields()},k=_(!1),r=v({title:"",description:"",datetime:"",link:""}),L=_(),z=v({title:[{required:!0,message:"请输入标题",trigger:"blur"}],datetime:[{required:!0,message:"请输入发布时间",trigger:"blur"}],link:[{required:!0,message:"请输入跳转链接",trigger:"blur"}]}),M=O(()=>c.value?c.value.filter(n=>n.title?n.title.toString().toLowerCase().includes(m.title):!1):[]);G(()=>{d.total=M.value.length});function F(n){$(L.value),n?n():k.value=!1}const $=n=>{n&&n.resetFields()},A=n=>{n&&n.validate(e=>{e&&(c.value.push({id:Math.max(...c.value.map(f=>f.id))+1,title:r.title,description:r.description,datetime:r.datetime,link:r.link}),F(),R("新增成功",{grouping:!0,type:"success"}))})};return(n,e)=>{const f=p("el-input"),g=p("el-form-item"),C=p("el-button"),T=p("el-form"),D=p("pure-table"),q=p("el-date-picker"),W=p("el-dialog");return J(),K("div",oe,[t(T,{ref_key:"formRef",ref:s,inline:!0,model:m,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:a(()=>[t(g,{label:"标题：",prop:"title"},{default:a(()=>[t(f,{modelValue:m.title,"onUpdate:modelValue":e[0]||(e[0]=l=>m.title=l),placeholder:"请输入标题",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),t(g,null,{default:a(()=>[t(C,{icon:o(P)(o(Z)),onClick:e[1]||(e[1]=l=>U(s.value))},{default:a(()=>[V(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),t(o(X),{title:"公告列表",onRefresh:o(S),class:"overflow-hidden"},{buttons:a(()=>[t(C,{type:"primary",icon:o(P)(o(ee)),onClick:e[2]||(e[2]=l=>k.value=!0)},{default:a(()=>[V(" 新增公告 ")]),_:1},8,["icon"])]),default:a(({size:l,checkList:Y})=>[t(D,{border:"","align-whole":"center",showOverflowTooltip:"",loading:o(h),"loading-config":o(b),size:l,height:l==="small"?360:500,data:o(M).slice((o(d).currentPage-1)*o(d).pageSize,o(d).currentPage*o(d).pageSize),columns:o(w),checkList:Y,pagination:o(d),paginationSmall:l==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onPageSizeChange:o(i),onPageCurrentChange:o(x)},{operation:a(({row:I})=>[t(C,{class:"reset-margin",link:"",type:"danger",size:l,icon:o(P)(n.EditPen),onClick:ie=>o(y)(I)},{default:a(()=>[V(" 删除 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1032,["loading","loading-config","size","height","data","columns","checkList","pagination","paginationSmall","header-cell-style","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["onRefresh"]),t(W,{modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=l=>k.value=l),title:"新增公告",width:"500px","destroy-on-close":!0,"before-close":F},{footer:a(()=>[t(C,{type:"primary",onClick:e[7]||(e[7]=l=>A(L.value))},{default:a(()=>[V(" 添加 ")]),_:1})]),default:a(()=>[t(T,{ref_key:"ruleFormRef",ref:L,model:r,rules:z,"label-width":"100px","status-icon":""},{default:a(()=>[t(g,{label:"标题",prop:"title"},{default:a(()=>[t(f,{modelValue:r.title,"onUpdate:modelValue":e[3]||(e[3]=l=>r.title=l),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),t(g,{label:"描述",prop:"description"},{default:a(()=>[t(f,{modelValue:r.description,"onUpdate:modelValue":e[4]||(e[4]=l=>r.description=l),type:"textarea",placeholder:"请输入描述"},null,8,["modelValue"])]),_:1}),t(g,{label:"发布时间",prop:"datetime"},{default:a(()=>[t(q,{style:{width:"100%"},modelValue:r.datetime,"onUpdate:modelValue":e[5]||(e[5]=l=>r.datetime=l),"value-format":"YYYY-MM-DD",type:"date",placeholder:"请选择发布时间"},null,8,["modelValue"])]),_:1}),t(g,{label:"跳转链接",prop:"link"},{default:a(()=>[t(f,{modelValue:r.link,"onUpdate:modelValue":e[6]||(e[6]=l=>r.link=l),placeholder:"请输入跳转链接"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});const fe=Q(ne,[["__scopeId","data-v-793ff507"]]);export{fe as default};
