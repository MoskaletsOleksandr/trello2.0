import{r as c}from"./index-26cd6fe4.js";let F={data:""},S=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||F,_=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,H=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(t,e)=>{let r="",s="",o="";for(let a in t){let n=t[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":s+=a[1]=="f"?b(n,a):a+"{"+b(n,a[1]=="k"?"":e)+"}":typeof n=="object"?s+=b(n,e?e.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(a,n):a+":"+n+";")}return r+(e&&o?e+"{"+o+"}":o)+s},h={},P=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+P(t[r]);return e}return t},U=(t,e,r,s,o)=>{let a=P(t),n=h[a]||(h[a]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(a));if(!h[n]){let l=a!==t?t:(d=>{let u,f,m=[{}];for(;u=_.exec(d.replace(H,""));)u[4]?m.shift():u[3]?(f=u[3].replace(D," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][u[1]]=u[2].replace(D," ").trim();return m[0]})(t);h[n]=b(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&h.g?h.g:null;return r&&(h.g=h[n]),((l,d,u,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(h[n],e,s,i),n},B=(t,e,r)=>t.reduce((s,o,a)=>{let n=e[a];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return s+o+(n??"")},"");function C(t){let e=this||{},r=t.call?t(e.p):t;return U(r.unshift?r.raw?B(r,[].slice.call(arguments,1),e.p):r.reduce((s,o)=>Object.assign(s,o&&o.call?o(e.p):o),{}):r,S(e.target),e.g,e.o,e.k)}let T,I,N;C.bind({g:1});let y=C.bind({k:1});function R(t,e,r,s){b.p=e,T=t,I=r,N=s}function v(t,e){let r=this||{};return function(){let s=arguments;function o(a,n){let i=Object.assign({},a),l=i.className||o.className;r.p=Object.assign({theme:I&&I()},i),r.o=/ *go\d+/.test(l),i.className=C.apply(r,s)+(l?" "+l:""),e&&(i.ref=n);let d=t;return t[0]&&(d=i.as||t,delete i.as),N&&d[0]&&N(i),T(d,i)}return e?e(o):o}}var Y=t=>typeof t=="function",j=(t,e)=>Y(t)?t(e):t,Z=(()=>{let t=0;return()=>(++t).toString()})(),M=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),q=20,$=new Map,G=1e3,L=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),x({type:4,toastId:t})},G);$.set(t,e)},J=t=>{let e=$.get(t);e&&clearTimeout(e)},z=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,q)};case 1:return e.toast.id&&J(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return t.toasts.find(a=>a.id===r.id)?z(t,{type:1,toast:r}):z(t,{type:0,toast:r});case 3:let{toastId:s}=e;return s?L(s):t.toasts.forEach(a=>{L(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},k=[],O={toasts:[],pausedAt:void 0},x=t=>{O=z(O,t),k.forEach(e=>{e(O)})},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},V=(t={})=>{let[e,r]=c.useState(O);c.useEffect(()=>(k.push(r),()=>{let o=k.indexOf(r);o>-1&&k.splice(o,1)}),[e]);let s=e.toasts.map(o=>{var a,n;return{...t,...t[o.type],...o,duration:o.duration||((a=t[o.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||Q[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:s}},W=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Z()}),w=t=>(e,r)=>{let s=W(e,t,r);return x({type:2,toast:s}),s.id},p=(t,e)=>w("blank")(t,e);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=t=>{x({type:3,toastId:t})};p.remove=t=>x({type:4,toastId:t});p.promise=(t,e,r)=>{let s=p.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(o=>(p.success(j(e.success,o),{id:s,...r,...r==null?void 0:r.success}),o)).catch(o=>{p.error(j(e.error,o),{id:s,...r,...r==null?void 0:r.error})}),t};var X=(t,e)=>{x({type:1,toast:{id:t,height:e}})},K=()=>{x({type:5,time:Date.now()})},tt=t=>{let{toasts:e,pausedAt:r}=V(t);c.useEffect(()=>{if(r)return;let a=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(l<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,r]);let s=c.useCallback(()=>{r&&x({type:6,time:Date.now()})},[r]),o=c.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},u=e.filter(g=>(g.position||d)===(a.position||d)&&g.height),f=u.findIndex(g=>g.id===a.id),m=u.filter((g,A)=>A<f&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,A)=>g+(A.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:X,startPause:K,endPause:s,calculateOffset:o}}},et=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,rt=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,at=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ot=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${et} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${rt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${at} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,st=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,it=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${st} 1s linear infinite;
`,nt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,lt=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,dt=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ct=v("div")`
  position: absolute;
`,ut=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pt=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mt=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ft=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return e!==void 0?typeof e=="string"?c.createElement(mt,null,e):e:r==="blank"?null:c.createElement(ut,null,c.createElement(it,{...s}),r!=="loading"&&c.createElement(ct,null,r==="error"?c.createElement(ot,{...s}):c.createElement(dt,{...s})))},gt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ht=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,yt="0%{opacity:0;} 100%{opacity:1;}",bt="0%{opacity:1;} 100%{opacity:0;}",vt=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,xt=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,wt=(t,e)=>{let r=t.includes("top")?1:-1,[s,o]=M()?[yt,bt]:[gt(r),ht(r)];return{animation:e?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Et=c.memo(({toast:t,position:e,style:r,children:s})=>{let o=t.height?wt(t.position||e||"top-center",t.visible):{opacity:0},a=c.createElement(ft,{toast:t}),n=c.createElement(xt,{...t.ariaProps},j(t.message,t));return c.createElement(vt,{className:t.className,style:{...o,...r,...t.style}},typeof s=="function"?s({icon:a,message:n}):c.createElement(c.Fragment,null,a,n))});R(c.createElement);var $t=({id:t,className:e,style:r,onHeightUpdate:s,children:o})=>{let a=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return c.createElement("div",{ref:a,className:e,style:r},o)},kt=(t,e)=>{let r=t.includes("top"),s=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...s,...o}},Ot=C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ct=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:l}=tt(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let u=d.position||e,f=l.calculateOffset(d,{reverseOrder:t,gutter:s,defaultPosition:e}),m=kt(u,f);return c.createElement($t,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ot:"",style:m},d.type==="custom"?j(d.message,d):o?o(d):c.createElement(Et,{toast:d,position:u}))}))},At=p;const It=t=>t.auth.isAuthLoading||t.boards.isBoardsLoading||t.columns.isColumnsLoading||t.cards.isCardsLoading,Nt=t=>t.auth.authError||t.boards.boardsError||t.columns.columnsError||t.cards.cardsError;export{Ct as I,At as _,It as a,Nt as s};
