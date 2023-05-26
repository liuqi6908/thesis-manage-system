import{h as Y,r as q,a as v,o as j,g as l,b as u,q as H,D as k,E as A,d as M,c as I,w as G,e as V,f as N,i as r,F as O,l as J,u as t,j as R,x as K,_ as Q}from"./index-6808ba74.js";import{m as P}from"./message-27522a78.js";import{P as X}from"./index-eb0c4c8c.js";import{u as T}from"./hooks-62a2627c.js";import{E as Z}from"./edit-pen-af58ba35.js";import{R as ee}from"./refresh-74425c09.js";import"./epTheme-ce7d143e.js";const te=m=>Y.request("post","/teacherGetDefenseList",{data:m});function le(){const m=q(),d=v(["待审核","有资格","无资格"]),i=q(!0),f=v({text:"正在加载第1页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),_=v({total:0,pageSize:10,currentPage:1,background:!0}),x=[{type:"selection",width:50,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"课题名称",prop:"title",minWidth:260},{label:"指导教师答辩资格",minWidth:140,cellRenderer:e=>l(u("el-tag"),{key:e.row.id,type:["warning","primary","danger"][e.row.qualification_01],class:"mx-1",effect:"light"},{default:()=>[d[e.row.qualification_01]]})},{label:"指导教师评语",prop:"teacherRemark",minWidth:120},{label:"答辩资格",minWidth:90,cellRenderer:e=>l(u("el-tag"),{key:e.row.id,type:["warning","primary","danger"][e.row.qualification_02],class:"mx-1",effect:"light"},{default:()=>[d[e.row.qualification_02]]})},{label:"答辩资格审核备注",prop:"desc",minWidth:140},{label:"答辩类型",prop:"type",minWidth:90},{label:"答辩成绩",prop:"grade",minWidth:90},{label:"答辩评语",prop:"defenseRemark",minWidth:100},{label:"组号",prop:"groupNumber",minWidth:120},{label:"答辩日期",prop:"date",minWidth:100},{label:"答辩时间",prop:"time",minWidth:110},{label:"答辩地点",prop:"place",minWidth:120},{label:"答辩组成员",prop:"groupMembers",minWidth:100},{label:"姓名",prop:"username",minWidth:90},{label:"学院",prop:"college",minWidth:120},{label:"专业",prop:"major",minWidth:150},{label:"班级",prop:"class",minWidth:100},{label:"学号",prop:"userNo",minWidth:100},{label:"课题英文名称",prop:"englishTitle",minWidth:120},{label:"评阅教师",prop:"evaluator",minWidth:90},{label:"创建时间",minWidth:160,prop:"createTime",formatter:({createTime:e})=>H(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:100,slot:"operation"}];function w(){f.text="正在加载...",i.value=!0,k(500).then(()=>{i.value=!1})}function p(e,h){A.confirm(`确认要将 <strong style='color:var(--el-color-primary)'>
      ${e.username}</strong> 的 <strong style='color:var(--el-color-primary)'>
      ${e.type}</strong> 答辩设置为 <strong>${h===1?"有资格":"无资格"}</strong> 吗?`,"审核提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{i.value=!0,setTimeout(()=>{e.qualification_01=h,h===1&&(e.qualification_02=0),P("审核成功",{type:"success"}),i.value=!1},500)}).catch(()=>{})}function C(e){f.text=`正在加载第${e}页...`,i.value=!0,k(500).then(()=>{i.value=!1})}function g(){i.value=!0,te().then(e=>{e.success?(m.value=e.data,_.total=e.data.length):P(e.message,{type:"error"})}).finally(()=>{setTimeout(()=>{i.value=!1},500)})}return j(()=>{g()}),{dataList:m,loading:i,loadingConfig:f,columns:x,statusList:d,pagination:_,onSearch:g,handleUpdate:p,handleSizeChange:w,handleCurrentChange:C}}const ae={class:"main"},ne=M({name:"DefenseManagement"}),oe=M({...ne,setup(m){const d=q(),{dataList:i,loading:f,loadingConfig:_,columns:x,statusList:w,pagination:p,onSearch:C,handleUpdate:g,handleSizeChange:e,handleCurrentChange:h}=le(),a=v({title:"",username:"",userNo:"",type:"",qualification:null}),B=n=>{n&&n.resetFields()},L=I(()=>i.value?i.value.filter(n=>n.title?n.title.toString().toLowerCase().includes(a.title):!1).filter(n=>n.username?n.username.toString().toLowerCase().includes(a.username):!1).filter(n=>n.userNo?n.userNo.toString().toLowerCase().includes(a.userNo):!1).filter(n=>n.type?n.type.toString().toLowerCase().includes(a.type):!1).filter(n=>[0,1,2].includes(a.qualification)?n.qualification_02===a.qualification:!0):[]);return G(()=>{p.total=L.value.length}),(n,s)=>{const b=u("el-input"),c=u("el-form-item"),U=u("el-option"),D=u("el-select"),S=u("el-button"),$=u("el-form"),z=u("el-popconfirm"),E=u("pure-table");return V(),N("div",ae,[l($,{ref_key:"formRef",ref:d,inline:!0,model:a,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:r(()=>[l(c,{label:"课题名称：",prop:"title"},{default:r(()=>[l(b,{modelValue:a.title,"onUpdate:modelValue":s[0]||(s[0]=o=>a.title=o),placeholder:"请输入课题名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),l(c,{label:"学生姓名：",prop:"username"},{default:r(()=>[l(b,{modelValue:a.username,"onUpdate:modelValue":s[1]||(s[1]=o=>a.username=o),placeholder:"请输入学生姓名",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),l(c,{label:"学号：",prop:"userNo"},{default:r(()=>[l(b,{modelValue:a.userNo,"onUpdate:modelValue":s[2]||(s[2]=o=>a.userNo=o),placeholder:"请输入学号",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),l(c,{label:"答辩类型：",prop:"type"},{default:r(()=>[l(b,{modelValue:a.type,"onUpdate:modelValue":s[3]||(s[3]=o=>a.type=o),placeholder:"请输入答辩类型",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),l(c,{label:"答辩资格：",prop:"qualification"},{default:r(()=>[l(D,{modelValue:a.qualification,"onUpdate:modelValue":s[4]||(s[4]=o=>a.qualification=o),placeholder:"请选择答辩资格",clearable:"",class:"!w-[180px]"},{default:r(()=>[(V(!0),N(O,null,J(t(w),(o,y)=>(V(),K(U,{key:y,label:o,value:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(c,null,{default:r(()=>[l(S,{icon:t(T)(t(ee)),onClick:s[5]||(s[5]=o=>B(d.value))},{default:r(()=>[R(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),l(t(X),{title:"答辩列表",onRefresh:t(C),class:"overflow-hidden"},{default:r(({size:o,checkList:y})=>[l(E,{border:"","align-whole":"center",showOverflowTooltip:"",loading:t(f),"loading-config":t(_),size:o,height:o==="small"?360:500,data:t(L).slice((t(p).currentPage-1)*t(p).pageSize,t(p).currentPage*t(p).pageSize),columns:t(x),checkList:y,pagination:t(p),paginationSmall:o==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onPageSizeChange:t(e),onPageCurrentChange:t(h)},{operation:r(({row:W})=>[l(z,{title:"审核提示!",width:"180px","confirm-button-text":"有资格","cancel-button-text":"无资格","cancel-button-type":"danger",onConfirm:F=>t(g)(W,1),onCancel:F=>t(g)(W,2)},{reference:r(()=>[l(S,{class:"reset-margin",link:"",type:"primary",size:o,disabled:W.qualification_01===1,icon:t(T)(t(Z))},{default:r(()=>[R(" 审核 ")]),_:2},1032,["size","disabled","icon"])]),_:2},1032,["onConfirm","onCancel"])]),_:2},1032,["loading","loading-config","size","height","data","columns","checkList","pagination","paginationSmall","header-cell-style","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["onRefresh"])])}}});const me=Q(oe,[["__scopeId","data-v-802694e6"]]);export{me as default};
