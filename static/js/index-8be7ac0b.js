import{d as he,M as be}from"./index-6808ba74.js";const ne=e=>Array.isArray(e),le=e=>ne(e)?e:[e];let ge=function(e){let t=function(f){return le(f).forEach(w=>{var L;return b.set(Symbol((L=w.char)==null?void 0:L.innerText),o({...w}))}),this},n=()=>m().filter(f=>f.typeable),a=function(f,w){let L=[...b.keys()];b.set(L[f],o(w))},o=f=>(f.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},f),s=function(){b.forEach(f=>delete f.done)},y=function(){b=new Map,t(e)},d=()=>b,m=()=>Array.from(b.values()),p=f=>b.delete(f),_=(f=!1)=>f?m():m().filter(w=>!w.done),S=(f,w=!1)=>w?b.delete(f):b.get(f).done=!0,b=new Map;return t(e),{add:t,set:a,wipe:y,reset:s,destroy:p,done:S,getItems:_,getQueue:d,getTypeable:n}};const ae=e=>Array.from(e),W=e=>document.createTextNode(e);let j=e=>([...e.childNodes].forEach(t=>{if(t.nodeValue){[...t.nodeValue].forEach(n=>{t.parentNode.insertBefore(W(n),t)}),t.remove();return}j(t)}),e);const se=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,j(t.body)},ie="data-typeit-id",A="ti-cursor",Te="END",Se={started:!1,completed:!1,frozen:!1,destroyed:!1},x={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(e=>({opacity:e})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},we=`[${ie}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function oe(e,t=!1,n=!1){let a=e.querySelector(`.${A}`),o=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:d=>{var m,p;if(a&&n){if((m=d.classList)!=null&&m.contains(A))return NodeFilter.FILTER_ACCEPT;if(a.contains(d))return NodeFilter.FILTER_REJECT}return(p=d.classList)!=null&&p.contains(A)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,y=[];for(;s=o.nextNode();)s.originalParent||(s.originalParent=s.parentNode),y.push(s);return t?y.reverse():y}function Ee(e){return oe(se(e))}function Ce(e,t=!0){return t?Ee(e):ae(e).map(W)}const H=e=>document.createElement(e),ue=(e,t="")=>{let n=H("style");n.id=t,n.appendChild(W(e)),document.head.appendChild(n)},Y=e=>(ne(e)||(e=[e/2,e/2]),e),Z=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let ee=e=>e/2;function _e(e){let{speed:t,deleteSpeed:n,lifeLike:a}=e;return n=n!==null?n:t/3,a?[Z(t,ee(t)),Z(n,ee(n))]:[t,n]}const Pe=e=>(e.forEach(clearTimeout),[]),Ie=()=>Math.random().toString().substring(2,9),J=e=>"value"in e;let Ne=e=>J(e)?ae(e.value):oe(e,!0).filter(t=>!(t.childNodes.length>0));const Ae=(e,t)=>{new IntersectionObserver((a,o)=>{a.forEach(s=>{s.isIntersecting&&(t(),o.unobserve(e))})},{threshold:1}).observe(e)};let v=e=>typeof e=="function"?e():e;const de=e=>Number.isInteger(e);let X=(e,t=document,n=!1)=>t[`querySelector${n?"All":""}`](e),Le=e=>/body/i.test(e==null?void 0:e.tagName),De=(e,t)=>{if(J(e)){e.value=`${e.value}${t.textContent}`;return}t.innerHTML="";let n=Le(t.originalParent)?e:t.originalParent||e;n.insertBefore(t,X("."+A,n)||null)},ve=(e,t,n)=>Math.min(Math.max(t+e,0),n.length);const M=(e,t)=>Object.assign({},e,t),xe=(e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()},Me=(e,t,n)=>{let a=t[n-1],o=X(`.${A}`,e);e=(a==null?void 0:a.parentNode)||e,e.insertBefore(o,a||null)};function ke(e){return typeof e=="string"?X(e):e}const Re=e=>/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML);let $e=(e,t,n)=>new Promise(a=>{let o=async()=>{await e(),a()};n.push(setTimeout(o,t||0))}),Fe={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},He=(e,t)=>{let a=`${`[${ie}='${e}']`} .${A}`,o=getComputedStyle(t),s=Object.entries(Fe).reduce((y,[d,m])=>`${y} ${d}: var(--ti-cursor-${d}, ${m||o[d]});`,"");ue(`${a} { display: inline-block; width: 0; ${s} }`,e)};const F=(e,t)=>new Array(t).fill(e),te=({queueItems:e,selector:t,cursorPosition:n,to:a})=>{if(de(t))return t*-1;let o=new RegExp(Te,"i").test(a),s=t?[...e].reverse().findIndex(({char:d})=>{let m=d.parentElement,p=m.matches(t);return o&&p?!0:p&&m.firstChild.isSameNode(d)}):-1;s<0&&(s=o?0:e.length-1);let y=o?0:1;return s-n+y};let Q=e=>new Promise(t=>{requestAnimationFrame(async()=>{t(await e())})}),fe=e=>e==null?void 0:e.getAnimations().find(t=>t.id===e.dataset.tiAnimationId),ce=({cursor:e,frames:t,options:n})=>{let a=e.animate(t,n);return a.pause(),a.id=e.dataset.tiAnimationId,Q(()=>{Q(()=>{a.play()})}),a},Qe=({cursor:e,options:t,cursorOptions:n})=>{if(!e||!n)return;let a=fe(e),o;a&&(t.delay=a.effect.getComputedTiming().delay,o=a.currentTime,a.cancel());let s=ce({cursor:e,frames:n.animation.frames,options:t});return o&&(s.currentTime=o),s},re=e=>{var t;return(t=e.func)==null?void 0:t.call(null)},Be=async({index:e,queueItems:t,wait:n,cursor:a,cursorOptions:o})=>{let s=t[e][1],y=[],d=e,m=s,p=()=>m&&!m.delay,_=s.shouldPauseCursor()&&o.autoPause;for(;p();)y.push(m),p()&&d++,m=t[d]?t[d][1]:null;if(y.length)return await Q(async()=>{for(let f of y)await re(f)}),d-1;let S=fe(a),b;return S&&(b={...S.effect.getComputedTiming(),delay:_?o.autoPauseDelay:0}),await n(async()=>{S&&_&&S.cancel(),await Q(()=>{re(s)})},s.delay),await Qe({cursor:a,options:b,cursorOptions:o}),e},qe=e=>{var t,n;if(typeof e=="object"){let a={},{frames:o,options:s}=x.cursor.animation;return a.animation=e.animation||{},a.animation.frames=((t=e.animation)==null?void 0:t.frames)||o,a.animation.options=M(s,((n=e.animation)==null?void 0:n.options)||{}),a.autoPause=e.autoPause??x.cursor.autoPause,a.autoPauseDelay=e.autoPauseDelay||x.cursor.autoPauseDelay,a}return e===!0?x.cursor:e};const Ue=function(e,t={}){let n=async(r,l,u=!1)=>{E.frozen&&await new Promise(c=>{this.unfreeze=()=>{E.frozen=!1,c()}}),u||await i.beforeStep(this),await $e(r,l,q),u||await i.afterStep(this)},a=(r,l)=>Be({index:r,queueItems:l,wait:n,cursor:N,cursorOptions:i.cursor}),o=r=>xe(r,h),s=()=>J(h),y=(r=0)=>_e(i)[r],d=()=>Ne(h),m=(r={})=>{let l=r.delay;l&&g.add({delay:l})},p=(r,l)=>(g.add(r),m(l),this),_=()=>K??D,S=(r={})=>[{func:()=>R(r)},{func:()=>R(i)}],b=r=>{let l=i.nextStringDelay;g.add([{delay:l[0]},...r,{delay:l[1]}])},f=()=>{if(s())return;let r=H("span");return r.className=A,O?(r.innerHTML=se(i.cursorChar).innerHTML,r):(r.style.visibility="hidden",r)},w=async()=>{if(!s()&&N&&h.appendChild(N),O){He(U,h),N.dataset.tiAnimationId=U;let{animation:r}=i.cursor,{frames:l,options:u}=r;ce({frames:l,cursor:N,options:{duration:i.cursorSpeed,...u}})}},L=()=>{let r=i.strings.filter(l=>!!l);r.forEach((l,u)=>{if(this.type(l),u+1===r.length)return;let c=i.breakLines?[{func:()=>B(H("BR")),typeable:!0}]:F({func:$,delay:y(1)},g.getTypeable().length);b(c)})},ye=async r=>{let l=_();l&&await G({value:l});let u=d().map(c=>[Symbol(),{func:$,delay:y(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let c=0;c<u.length;c++)await a(c,u);g.reset(),g.set(0,{delay:r})},pe=r=>{let l=h.innerHTML;return l?(h.innerHTML="",i.startDelete?(h.innerHTML=l,j(h),b(F({func:$,delay:y(1),deletable:!0},d().length)),r):l.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(r)):r},k=async(r=!0)=>{E.started=!0;let l=u=>{g.done(u,!r)};try{let u=[...g.getQueue()];for(let T=0;T<u.length;T++){let[P,C]=u[T];if(!C.done){if(!C.deletable||C.deletable&&d().length){let I=await a(T,u);Array(I-T).fill(T+1).map((z,V)=>z+V).forEach(z=>{let[V]=u[z];l(V)}),T=I}l(P)}}if(!r)return this;if(E.completed=!0,await i.afterComplete(this),!i.loop)throw"";let c=i.loopDelay;n(async()=>{await ye(c[0]),k()},c[1])}catch{}return this},G=async r=>{D=ve(r,D,d()),Me(h,d(),D)},B=r=>De(h,r),R=async r=>i=M(i,r),me=async()=>{if(s()){h.value="";return}d().forEach(o)},$=()=>{let r=d();r.length&&(s()?h.value=h.value.slice(0,-1):o(r[D]))};this.break=function(r){return p({func:()=>B(H("BR")),typeable:!0},r)},this.delete=function(r=null,l={}){r=v(r);let u=S(l),c=r,{instant:T,to:P}=l,C=g.getTypeable(),I=(()=>c===null?C.length:de(c)?c:te({queueItems:C,selector:c,cursorPosition:_(),to:P}))();return p([u[0],...F({func:$,delay:T?0:y(1),deletable:!0},I),u[1]],l)},this.empty=function(r={}){return p({func:me},r)},this.exec=function(r,l={}){let u=S(l);return p([u[0],{func:()=>r(this)},u[1]],l)},this.move=function(r,l={}){r=v(r);let u=S(l),{instant:c,to:T}=l,P=te({queueItems:g.getTypeable(),selector:r===null?"":r,to:T,cursorPosition:_()}),C=P<0?-1:1;return K=_()+P,p([u[0],...F({func:()=>G(C),delay:c?0:y(),cursorable:!0},Math.abs(P)),u[1]],l)},this.options=function(r,l={}){return r=v(r),R(r),p({},l)},this.pause=function(r,l={}){return p({delay:v(r)},l)},this.type=function(r,l={}){r=v(r);let{instant:u}=l,c=S(l),P=Ce(r,i.html).map(I=>({func:()=>B(I),char:I,delay:u||Re(I)?0:y(),typeable:I.nodeType===Node.TEXT_NODE})),C=[c[0],{func:async()=>await i.beforeString(r,this)},...P,{func:async()=>await i.afterString(r,this)},c[1]];return p(C,l)},this.is=function(r){return E[r]},this.destroy=function(r=!0){q=Pe(q),v(r)&&N&&o(N),E.destroyed=!0},this.freeze=function(){E.frozen=!0},this.unfreeze=()=>{},this.reset=function(r){!this.is("destroyed")&&this.destroy(),r?(g.wipe(),r(this)):g.reset(),D=0;for(let l in E)E[l]=!1;return h[s()?"value":"innerHTML"]="",this},this.go=function(){return E.started?this:(w(),i.waitUntilVisible?(Ae(h,k.bind(this)),this):(k(),this))},this.flush=function(r=()=>{}){return w(),k(!1).then(r),this},this.getQueue=()=>g,this.getOptions=()=>i,this.updateOptions=r=>R(r),this.getElement=()=>h;let h=ke(e),q=[],D=0,K=null,E=M({},Se);t.cursor=qe(t.cursor??x.cursor);let i=M(x,t);i=M(i,{html:!s()&&i.html,nextStringDelay:Y(i.nextStringDelay),loopDelay:Y(i.loopDelay)});let U=Ie(),g=ge([{delay:i.startDelay}]);h.dataset.typeitId=U,ue(we);let O=!!i.cursor&&!s(),N=f();i.strings=pe(le(i.strings)),i.strings.length&&L()},Ve=he({name:"TypeIt",props:{speed:{type:Number,default:200},values:{type:Array,defalut:[]},className:{type:String,default:"type-it"},cursor:{type:Boolean,default:!0}},render(){return be("span",{class:this.className},{default:()=>[]})},mounted(){new Ue(`.${this.className}`,{strings:this.values,speed:this.speed,cursor:this.cursor}).go()}});export{Ve as T};
