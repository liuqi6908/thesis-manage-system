import{a1 as s,ao as t,a2 as r,a3 as m}from"./index-6808ba74.js";const p=s({id:"pure-epTheme",state:()=>{var e,o;return{epThemeColor:((e=t().getItem("responsive-layout"))==null?void 0:e.epThemeColor)??r().EpThemeColor,epTheme:((o=t().getItem("responsive-layout"))==null?void 0:o.theme)??r().Theme}},getters:{getEpThemeColor(e){return e.epThemeColor},fill(e){return e.epTheme==="light"?"#409eff":e.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(e){const o=t().getItem("responsive-layout");this.epTheme=o==null?void 0:o.theme,this.epThemeColor=e,o&&(o.epThemeColor=e,t().setItem("responsive-layout",o))}}});function i(){return p(m)}export{i as u};
