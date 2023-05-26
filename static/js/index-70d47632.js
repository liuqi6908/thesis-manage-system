import{r as p,o as A,g as t,b as m,q as ee,E as le,aH as te,d as I,a as B,c as ae,w as ne,e as k,f as D,i as o,u as d,j as x,F as O,l as S,x as Y}from"./index-6808ba74.js";import{m as _}from"./message-27522a78.js";import{c as $}from"./system-07b1b9f3.js";import{P as oe}from"./index-eb0c4c8c.js";import{u as R}from"./hooks-62a2627c.js";import{D as re}from"./delete-6d738bc7.js";import{E as se}from"./edit-pen-af58ba35.js";import{R as ie}from"./refresh-74425c09.js";import{A as ue}from"./add-circle-line-438b436c.js";import"./epTheme-ce7d143e.js";function de(){const g=p(),y=p(!0),h=p({}),j=[{type:"selection",width:50,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",minWidth:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"部门",prop:"name",align:"left",minWidth:150},{label:"类型",minWidth:70,prop:"type",formatter:({type:e})=>["学院","专业","班级"][e-1]},{label:"状态",minWidth:75,cellRenderer:e=>{var a;return t(m("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(a=h.value[e.index])==null?void 0:a.loading,modelValue:e.row.status,"onUpdate:modelValue":f=>e.row.status=f,"active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"禁用","inline-prompt":!0,disabled:e.row.type!==3,onChange:()=>L(e)},null)}},{label:"创建时间",minWidth:150,prop:"createTime",formatter:({createTime:e})=>ee(e).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"desc",minWidth:150},{label:"操作",fixed:"right",width:150,slot:"operation"}];function L({row:e,index:a}){le.confirm(`确认要 <strong>${e.status===0?"禁用":"启用"}</strong> <strong style='color:var(--el-color-primary)'>${e.name}</strong> 班级吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{h.value[a]=Object.assign({},h.value[a],{loading:!0}),setTimeout(()=>{h.value[a]=Object.assign({},h.value[a],{loading:!1}),_("已成功修改班级状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function c(e){if(e.type!==3)return _("禁止对学院/专业进行修改",{type:"warning"})}function T(e){if(e.type!==3)return _("禁止对学院/专业进行删除",{type:"warning"});for(let a=0;a<g.value.length;a++)for(let f=0;f<g.value[a].children.length;f++)if(e.parentId===g.value[a].children[f].id){const b=g.value[a].children[f].children.map(i=>i.id).indexOf(e.id);b>=0&&g.value[a].children[f].children.splice(b,1),_("删除成功",{type:"success"});return}}async function C(){y.value=!0,await $().then(e=>{e.success?g.value=te(e.data):_(e.message,{type:"error"})}).finally(()=>{setTimeout(()=>{y.value=!1},500)})}return A(()=>{C()}),{loading:y,columns:j,dataList:g,onSearch:C,handleUpdate:c,handleDelete:T}}const ce={class:"main"},me=I({name:"ClassList"}),ke=I({...me,setup(g){const y=p(),h=p(),{loading:j,columns:L,dataList:c,onSearch:T,handleUpdate:C,handleDelete:e}=de(),a=B({name:"",status:null}),f=n=>{n&&n.resetFields()},b=p(!1),i=B({college:null,major:null,class:""}),F=p(),P=B({college:[{required:!0,message:"请选择学院",trigger:"change"}],major:[{required:!0,message:"请选择专业",trigger:"change"}],class:[{required:!0,message:"请输入班级",trigger:"blur"}]}),E=p([]),U=p([]);A(()=>{$({type:1}).then(n=>{n.success&&(E.value=n.data)})});const z=ae(()=>c.value?c.value.filter(n=>n.name?n.name.toString().toLowerCase().includes(a.name):!1).filter(n=>a.status===0||a.status===1?n.status===a.status:!0):[]);function M(n){N(F.value),U.value=[],n?n():b.value=!1}const N=n=>{n&&n.resetFields()};ne(()=>{i.major=null,i.college&&$({type:2,id:i.college}).then(n=>{n.success&&(U.value=n.data)})});const G=n=>{n&&n.validate(r=>{if(r){const V=[];if(c.value.length>0&&c.value.forEach(s=>{s.children&&s.children.length>0&&s.children.forEach(u=>{u.children&&u.children.length>0&&u.children.forEach(v=>{v.name&&V.push(v.name)})})}),V.includes(i.class))return _("新增失败，该班级已存在",{grouping:!0,type:"error"});for(let s=0;s<c.value.length;s++)if(c.value[s].id===i.college){for(let u=0;u<c.value[s].children.length;u++)if(c.value[s].children[u].id===i.major){const v=c.value[s].children[u].children[c.value[s].children[u].children.length-1].id;c.value[s].children[u].children.push({id:v+1,name:i.class,type:3,parentId:c.value[s].children[u].id,status:1,createTime:new Date().getTime(),desc:"无"}),M(),_("新增成功",{grouping:!0,type:"success"});break}break}}})};return(n,r)=>{var q;const V=m("el-input"),s=m("el-form-item"),u=m("el-option"),v=m("el-select"),w=m("el-button"),W=m("el-form"),J=m("el-popconfirm"),K=m("pure-table"),Q=m("el-dialog");return k(),D("div",ce,[t(W,{ref_key:"formRef",ref:y,inline:!0,model:a,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:o(()=>[t(s,{label:"部门名称：",prop:"name"},{default:o(()=>[t(V,{modelValue:a.name,"onUpdate:modelValue":r[0]||(r[0]=l=>a.name=l),placeholder:"请输入部门名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),t(s,{label:"状态：",prop:"status"},{default:o(()=>[t(v,{modelValue:a.status,"onUpdate:modelValue":r[1]||(r[1]=l=>a.status=l),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:o(()=>[t(u,{label:"启用",value:1}),t(u,{label:"禁用",value:0})]),_:1},8,["modelValue"])]),_:1}),t(s,null,{default:o(()=>[t(w,{icon:d(R)(d(ie)),onClick:r[2]||(r[2]=l=>f(y.value))},{default:o(()=>[x(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),t(d(oe),{title:"班级列表",tableRef:(q=h.value)==null?void 0:q.getTableRef(),onRefresh:d(T)},{buttons:o(()=>[t(w,{type:"primary",icon:d(R)(d(ue)),onClick:r[3]||(r[3]=l=>b.value=!0)},{default:o(()=>[x(" 新增班级 ")]),_:1},8,["icon"])]),default:o(({size:l,checkList:X})=>[t(K,{ref_key:"tableRef",ref:h,border:"","align-whole":"center","row-key":"id",showOverflowTooltip:"","default-expand-all":"",loading:d(j),size:l,height:l==="small"?360:500,data:d(z),columns:d(L),checkList:X,"header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"}},{operation:o(({row:H})=>[t(w,{class:"reset-margin",link:"",type:"primary",size:l,icon:d(R)(d(se)),onClick:Z=>d(C)(H)},{default:o(()=>[x(" 修改 ")]),_:2},1032,["size","icon","onClick"]),t(J,{title:"是否确认删除?",onConfirm:Z=>d(e)(H)},{reference:o(()=>[t(w,{class:"reset-margin",link:"",type:"danger",size:l,icon:d(R)(d(re))},{default:o(()=>[x(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["onConfirm"])]),_:2},1032,["loading","size","height","data","columns","checkList","header-cell-style"])]),_:1},8,["tableRef","onRefresh"]),t(Q,{modelValue:b.value,"onUpdate:modelValue":r[8]||(r[8]=l=>b.value=l),title:"新增班级",width:"400px","destroy-on-close":!0,"before-close":M},{footer:o(()=>[t(w,{type:"primary",onClick:r[7]||(r[7]=l=>G(F.value))},{default:o(()=>[x(" 新增 ")]),_:1})]),default:o(()=>[t(W,{ref_key:"ruleFormRef",ref:F,model:i,rules:P,"label-width":"60px","status-icon":""},{default:o(()=>[t(s,{label:"学院",prop:"college"},{default:o(()=>[t(v,{modelValue:i.college,"onUpdate:modelValue":r[4]||(r[4]=l=>i.college=l),placeholder:"请选择学院",class:"w-full"},{default:o(()=>[(k(!0),D(O,null,S(E.value,l=>(k(),Y(u,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"专业",prop:"major"},{default:o(()=>[t(v,{modelValue:i.major,"onUpdate:modelValue":r[5]||(r[5]=l=>i.major=l),placeholder:"请选择专业",class:"w-full"},{default:o(()=>[(k(!0),D(O,null,S(U.value,l=>(k(),Y(u,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"班级",prop:"class"},{default:o(()=>[t(V,{modelValue:i.class,"onUpdate:modelValue":r[6]||(r[6]=l=>i.class=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});export{ke as default};