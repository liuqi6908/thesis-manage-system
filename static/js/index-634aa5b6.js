import{h as j,r as v,a as M,o as Z,q,D as I,d as R,w as ee,b as s,s as te,e as r,f as m,g as o,i as a,u as e,v as ae,x as g,F as z,j as _,n as B,t as b,l as U,p as le,m as ne,y as oe,z as V,_ as se}from"./index-6808ba74.js";import{m as A}from"./message-27522a78.js";import{P as re}from"./index-eb0c4c8c.js";import"./epTheme-ce7d143e.js";const ie=l=>j.request("post","/studentThesisList",{data:l}),ce=l=>j.request("post","/studentThesisData",{data:l});function ue(){const l=v(),y=v(),i=v(!0),f=M({text:"正在加载第1页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),C=M({total:0,pageSize:10,currentPage:1,background:!0}),u=[{type:"selection",width:45,align:"left",hide:({checkList:t})=>!t.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:t})=>!t.includes("序号列")},{label:"姓名",prop:"username",minWidth:90},{label:"学院",prop:"college",minWidth:120},{label:"专业",prop:"major",minWidth:150},{label:"班级",prop:"class",minWidth:90},{label:"学号",prop:"userNo",minWidth:90},{label:"课题名称",prop:"title",minWidth:220},{label:"指导教师",prop:"teacher",minWidth:90},{label:"创建时间",minWidth:160,prop:"createTime",formatter:({createTime:t})=>q(t).format("YYYY-MM-DD HH:mm:ss")}];function d(){f.text="正在加载...",i.value=!0,I(500).then(()=>{i.value=!1})}function P(t){f.text=`正在加载第${t}页...`,i.value=!0,I(500).then(()=>{i.value=!1})}function L(t){y.value=t}function k(){i.value=!0,ie().then(t=>{t.success?(l.value=t.data,C.total=t.data.length):A(t.message,{type:"error"})}).finally(()=>{setTimeout(()=>{i.value=!1},500)})}return Z(()=>{k()}),{dataList:l,loading:i,loadingConfig:f,columns:u,pagination:C,multipleSelection:y,onSearch:k,handleSizeChange:d,handleCurrentChange:P,handleSelectionChange:L}}const de=l=>(le("data-v-64084467"),l=l(),ne(),l),pe={class:"main"},_e=de(()=>B("div",{class:"card-header"},[B("span",{class:"font-bold"},"教师指导过程资料")],-1)),fe={class:"text-blue-600"},he={key:0},me=R({name:"SubmitData"}),ge=R({...me,setup(l){const{dataList:y,loading:i,loadingConfig:f,columns:C,pagination:u,multipleSelection:d,onSearch:P,handleSizeChange:L,handleCurrentChange:k,handleSelectionChange:t}=ue(),S=v([]),N=v(!1),x=M(["开题报告","任务书","论文定稿","论文成绩考核表"]);ee(()=>{var W,Y;(W=d.value)!=null&&W.title&&(N.value=!0,ce({title:(Y=d.value)==null?void 0:Y.title}).then(c=>{c.success&&(S.value=c.data||[])}).finally(()=>{for(let c=0;c<x.length;c++)S.value.find(w=>w.name==x[c])||S.value.push({name:x[c],fileName:null,fileUrl:null,feedback:null,username:null,createTime:null});setTimeout(()=>{N.value=!1},1e3)}))});function E(){A("上传失败，服务器错误，请稍后再试！",{type:"error",grouping:!0})}return(W,Y)=>{const c=s("pure-table"),w=s("el-button"),F=s("el-upload"),h=s("el-descriptions-item"),O=s("el-link"),$=s("el-descriptions"),G=s("el-tab-pane"),J=s("el-tabs"),K=s("el-empty"),Q=s("el-card"),X=te("loading");return r(),m("div",pe,[o(e(re),{title:"课题列表（请选择一行）",onRefresh:e(P),class:"overflow-hidden"},{default:a(({size:p,checkList:D})=>{var T;return[o(c,{ref:"tableRef",border:"","align-whole":"center",showOverflowTooltip:"","highlight-current-row":"",loading:e(i),"loading-config":e(f),size:p,height:p==="small"?130:160,data:(T=e(y))==null?void 0:T.slice((e(u).currentPage-1)*e(u).pageSize,e(u).currentPage*e(u).pageSize),columns:e(C),checkList:D,pagination:e(u),paginationSmall:p==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},"row-style":{cursor:"pointer"},onPageSizeChange:e(L),onPageCurrentChange:e(k),onCurrentChange:e(t)},null,8,["loading","loading-config","size","height","data","columns","checkList","pagination","paginationSmall","header-cell-style","onPageSizeChange","onPageCurrentChange","onCurrentChange"])]}),_:1},8,["onRefresh"]),ae((r(),g(Q,{class:"box-card mt-6",shadow:"never"},{header:a(()=>[_e]),default:a(()=>{var p;return[(p=e(d))!=null&&p.id?(r(),m(z,{key:0},[_(" 课题名称："),B("span",fe,b(e(d).title),1),o(J,{type:"border-card",class:"mt-4"},{default:a(()=>[(r(!0),m(z,null,U(x,(D,T)=>(r(),g(G,{key:T,label:D},{default:a(()=>{var H;return[(r(!0),m(z,null,U((H=S.value)==null?void 0:H.filter(n=>n.name===D),n=>(r(),g($,{border:"",column:2,key:n.name},{default:a(()=>[o(h,{label:"上传资料"},{default:a(()=>[o(F,{ref_for:!0,ref:"upload",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"auto-upload":!1},{trigger:a(()=>[o(w,{type:"primary",icon:e(oe)},{default:a(()=>[_(" 选择文件 ")]),_:1},8,["icon"])]),default:a(()=>[o(w,{class:"ml-3",type:"success",onClick:E},{default:a(()=>[_(" 上传 ")]),_:1})]),_:1},512)]),_:1}),o(h,{label:"下载资料"},{default:a(()=>[n.fileName&&n.fileUrl?(r(),g(O,{key:0,type:"primary",href:n.fileUrl,target:"_blank"},{default:a(()=>[_(b(n.fileName),1)]),_:2},1032,["href"])):V("",!0)]),_:2},1024),o(h,{label:"上传者"},{default:a(()=>[_(b(n.username),1)]),_:2},1024),o(h,{label:"上传时间"},{default:a(()=>[n.createTime?(r(),m("span",he,b(e(q)(n.createTime).format("YYYY-MM-DD HH:mm:ss")),1)):V("",!0)]),_:2},1024),o(h,{label:"指导教师意见"},{default:a(()=>[_(b(n.feedback),1)]),_:2},1024)]),_:2},1024))),128))]}),_:2},1032,["label"]))),128))]),_:1})],64)):(r(),g(K,{key:1,description:"请选择一项课题"}))]}),_:1})),[[X,N.value]])])}}});const ke=se(ge,[["__scopeId","data-v-64084467"]]);export{ke as default};
