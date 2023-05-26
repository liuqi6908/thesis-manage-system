import{h as T,r as W,a as _,o as B,g as l,b as o,q as F,D as C,d as q,c as N,w as Y,e as w,f as k,i as u,F as j,l as I,u as t,j as A,x as H,_ as U}from"./index-6808ba74.js";import{m as $}from"./message-27522a78.js";import{P as E}from"./index-eb0c4c8c.js";import{u as O}from"./hooks-62a2627c.js";import{R as G}from"./refresh-74425c09.js";import"./epTheme-ce7d143e.js";const J=c=>T.request("post","/studentDefenseList",{data:c});function K(){const c=W(),p=_(["待审核","有资格","无资格"]),a=W(!0),m=_({text:"正在加载第1页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),f=_({total:0,pageSize:10,currentPage:1,background:!0}),b=[{type:"selection",width:50,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"课题名称",prop:"title",minWidth:260},{label:"指导教师答辩资格",minWidth:140,cellRenderer:e=>l(o("el-tag"),{key:e.row.id,type:["warning","primary","danger"][e.row.qualification_01],class:"mx-1",effect:"light"},{default:()=>[p[e.row.qualification_01]]})},{label:"指导教师评语",prop:"teacherRemark",minWidth:120},{label:"答辩资格",minWidth:90,cellRenderer:e=>l(o("el-tag"),{key:e.row.id,type:["warning","primary","danger"][e.row.qualification_02],class:"mx-1",effect:"light"},{default:()=>[p[e.row.qualification_02]]})},{label:"答辩资格审核备注",prop:"desc",minWidth:140},{label:"答辩类型",prop:"type",minWidth:90},{label:"答辩成绩",prop:"grade",minWidth:90},{label:"答辩评语",prop:"defenseRemark",minWidth:100},{label:"组号",prop:"groupNumber",minWidth:120},{label:"答辩日期",prop:"date",minWidth:100},{label:"答辩时间",prop:"time",minWidth:110},{label:"答辩地点",prop:"place",minWidth:120},{label:"答辩组成员",prop:"groupMembers",minWidth:100},{label:"姓名",prop:"username",minWidth:90},{label:"学院",prop:"college",minWidth:120},{label:"专业",prop:"major",minWidth:150},{label:"班级",prop:"class",minWidth:100},{label:"学号",prop:"userNo",minWidth:100},{label:"课题英文名称",prop:"englishTitle",minWidth:120},{label:"指导教师",prop:"teacher",minWidth:90},{label:"评阅教师",prop:"evaluator",minWidth:90},{label:"创建时间",minWidth:160,prop:"createTime",formatter:({createTime:e})=>F(e).format("YYYY-MM-DD HH:mm:ss")}];function v(){m.text="正在加载...",a.value=!0,C(500).then(()=>{a.value=!1})}function i(e){m.text=`正在加载第${e}页...`,a.value=!0,C(500).then(()=>{a.value=!1})}function h(){a.value=!0,J().then(e=>{e.success?(c.value=e.data,f.total=e.data.length):$(e.message,{type:"error"})}).finally(()=>{setTimeout(()=>{a.value=!1},500)})}return B(()=>{h()}),{dataList:c,loading:a,loadingConfig:m,columns:b,statusList:p,pagination:f,onSearch:h,handleSizeChange:v,handleCurrentChange:i}}const Q={class:"main"},X=q({name:"DefenseInformation"}),Z=q({...X,setup(c){const p=W(),{dataList:a,loading:m,loadingConfig:f,columns:b,statusList:v,pagination:i,onSearch:h,handleSizeChange:e,handleCurrentChange:L}=K(),r=_({type:"",qualification:null}),S=s=>{s&&s.resetFields()},x=N(()=>a.value?a.value.filter(s=>s.type?s.type.toString().toLowerCase().includes(r.type):!1).filter(s=>[0,1,2].includes(r.qualification)?s.qualification_02===r.qualification:!0):[]);return Y(()=>{i.total=x.value.length}),(s,d)=>{const R=o("el-input"),y=o("el-form-item"),P=o("el-option"),V=o("el-select"),z=o("el-button"),D=o("el-form"),M=o("pure-table");return w(),k("div",Q,[l(D,{ref_key:"formRef",ref:p,inline:!0,model:r,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:u(()=>[l(y,{label:"答辩类型：",prop:"type"},{default:u(()=>[l(R,{modelValue:r.type,"onUpdate:modelValue":d[0]||(d[0]=n=>r.type=n),placeholder:"请输入答辩类型",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),l(y,{label:"答辩资格：",prop:"qualification"},{default:u(()=>[l(V,{modelValue:r.qualification,"onUpdate:modelValue":d[1]||(d[1]=n=>r.qualification=n),placeholder:"请选择答辩资格",clearable:"",class:"!w-[180px]"},{default:u(()=>[(w(!0),k(j,null,I(t(v),(n,g)=>(w(),H(P,{key:g,label:n,value:g},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(y,null,{default:u(()=>[l(z,{icon:t(O)(t(G)),onClick:d[2]||(d[2]=n=>S(p.value))},{default:u(()=>[A(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),l(t(E),{title:"答辩列表",onRefresh:t(h),class:"overflow-hidden"},{default:u(({size:n,checkList:g})=>[l(M,{border:"","align-whole":"center",showOverflowTooltip:"",loading:t(m),"loading-config":t(f),size:n,height:n==="small"?130:160,data:t(x).slice((t(i).currentPage-1)*t(i).pageSize,t(i).currentPage*t(i).pageSize),columns:t(b),checkList:g,pagination:t(i),paginationSmall:n==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onPageSizeChange:t(e),onPageCurrentChange:t(L)},null,8,["loading","loading-config","size","height","data","columns","checkList","pagination","paginationSmall","header-cell-style","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["onRefresh"])])}}});const ie=U(Z,[["__scopeId","data-v-d39e074e"]]);export{ie as default};