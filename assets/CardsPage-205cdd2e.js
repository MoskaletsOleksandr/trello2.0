import{u as Q,j as i,p as Fe,c as w,q as Be,_ as Te,b as F,t as Ne,v as me,w as Re,m as Oe,x as je,y as He,z as ke,A as Ae}from"./index-7cf239cc.js";import{M as re,S as ne,a as ae,b as E,c as oe,p as Me,f as De,g as Z,h as Se,C as ve,j as Qe,k as ze}from"./Button-7716674e.js";import{n as l}from"./emotion-styled.browser.esm-0e84f48d.js";import{s as B}from"./sprite-33c0d800.js";import{b as ie,c as se,d as $,a as Xe,u as Ge}from"./index.esm-50265095.js";const Ve=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({background:r})=>r==null?void 0:r.mobileURL});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({background:r})=>r==null?void 0:r.mobileRetinaURL});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${({background:r})=>r==null?void 0:r.tabletURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:r})=>r==null?void 0:r.tabletRetinaURL});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${({background:r})=>r==null?void 0:r.desktopURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:r})=>r==null?void 0:r.desktopRetainaURL});
    }
  }
`,Je=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  background: linear-gradient(
    to right,
    var(--header-dashboard-bg-color),
    transparent,
    transparent,
    var(--header-dashboard-bg-color)
  );
`,Ke=l.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,Ze=l.div`
  position: relative;
`,et=l.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--filter-text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.2);
  }

  &:focus svg {
    transform: scale(1.2);
  }
`,tt=l.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,rt=l.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 36px 24px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 12px;
    width: 100w;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--horizontal-scroll-slider-bg-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--horizontal-scroll-bar-bg-color);
    border-radius: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
`,nt=l.div`
  display: flex;
  align-items: start;
  gap: 18px;
`,at=l.div`
  width: 350px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,ot=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  cursor: grab;
`,it=l.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,st=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,de=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: var(--progress-popup-text-color-hover);
  }

  &:focus svg {
    stroke: var(--progress-popup-text-color-hover);
  }
`,ce=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  transition: stroke 300ms var(--timing-function);
`,lt=l.div`
  overflow-y: hidden;
`,dt=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  box-sizing: border-box;
  height: calc(100vh - 340px);

  ::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    height: 10px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    height: 130px;
    margin-left: 8px;
  }
`,ct=({columnId:r,onClose:t,columnTitle:e})=>{const n=Q(),a=o=>{const s={title:o.title};n(Fe({columnId:r,body:s})),t()};return i.jsx(re,{onClose:t,title:"Edit column",children:i.jsx(ie,{initialValues:{title:e},validationSchema:se({title:$().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:a,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx(E,{name:"title"}),i.jsx(oe,{type:"submit",children:"Edit"})]})})})},ut=l.div`
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 334px;
  min-height: 154px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: var(--card-primary-text-color);
  padding: 14px 24px;
  border-left: 4px solid
    ${({priority:r})=>`var(--filter-${r}-priority-color)`};
  transition: background-color 300ms var(--timing-function);

  &:hover {
    background-color: var(--card-bg-color-hover);
  }
`,ht=l.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,ft=l.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,mt=l.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,vt=l.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,pt=l.ul`
  display: flex;
  gap: 14px;
`,pe=l.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ge=l.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,gt=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,xt=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
`,xe=l.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,bt=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,ue=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: var(--progress-popup-text-color-hover);
  }

  &:focus svg {
    stroke: var(--progress-popup-text-color-hover);
  }
`,he=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  transition: stroke 300ms var(--timing-function);
`,wt=l.ul`
  display: flex;
  gap: 8px;
`,yt=l.li`
  display: block;
  width: 18px;
  height: 18px;
`,Ct=l.label`
  cursor: pointer;
`,Tt=l(Xe)`
  display: none;
`;l.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:r})=>r?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const Ot=l.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
  border: ${({selected:r})=>r?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:r,priority:t})=>r?`2px solid var(--filter-${t}-priority-color)`:"none"};
`,Pe=({name:r,icons:t,selectedItem:e})=>{const[n,a]=w.useState(e||""),{setFieldValue:o}=Ge();return w.useEffect(()=>{a(e||"")},[e]),i.jsx(wt,{children:Me.map(s=>i.jsx(yt,{children:i.jsxs(Ct,{children:[i.jsx(Tt,{type:"radio",name:r,value:s,onChange:d=>{a(d.target.value),o(r,d.target.value)}}),i.jsx(Ot,{priority:s,selected:n===s})]})},s))})},jt=({onClose:r,card:t})=>{const e=Q(),{_id:n}=t,a=o=>{const s={title:o.title,text:o.text,priority:o.selectedPriority,deadline:o.selectedDate};e(Be({cardId:n,body:s})),r()};return i.jsx(re,{onClose:r,title:"Edit card",children:i.jsx(ie,{initialValues:{title:t.title,text:t.text,selectedPriority:t.priority,selectedDate:t.deadline},validationSchema:se({title:$().max(20,"Must be 20 characters or less").required("Name is required"),text:$().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:$().required("Priority is required"),selectedDate:$().required("Deadline is required")}),onSubmit:a,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx(E,{name:"title"}),i.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx(E,{name:"text"}),i.jsx(Z,{children:"Priority color"}),i.jsx(Pe,{name:"selectedPriority",selectedItem:t==null?void 0:t.priority}),i.jsx(E,{name:"selectedPriority"}),i.jsx(Z,{children:"Deadline"}),i.jsx(Se,{type:"date",name:"selectedDate"}),i.jsx(E,{name:"selectedDate"}),i.jsx(oe,{type:"submit",children:"Edit"})]})})})},We=r=>r.columns.columns;function A(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function k(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function Y(r){k(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Te(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function kt(r,t){k(2,arguments);var e=Y(r).getTime(),n=A(t);return new Date(e+n)}var Mt={};function le(){return Mt}function Dt(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function St(r){return k(1,arguments),r instanceof Date||Te(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Pt(r){if(k(1,arguments),!St(r)&&typeof r!="number")return!1;var t=Y(r);return!isNaN(Number(t))}function Wt(r,t){k(2,arguments);var e=A(t);return kt(r,-e)}var Ut=864e5;function _t(r){k(1,arguments);var t=Y(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/Ut)+1}function ee(r){k(1,arguments);var t=1,e=Y(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Ue(r){k(1,arguments);var t=Y(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=ee(n),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var s=ee(o);return t.getTime()>=a.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function Et(r){k(1,arguments);var t=Ue(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=ee(e);return n}var $t=6048e5;function Yt(r){k(1,arguments);var t=Y(r),e=ee(t).getTime()-Et(t).getTime();return Math.round(e/$t)+1}function te(r,t){var e,n,a,o,s,d,u,c;k(1,arguments);var g=le(),p=A((e=(n=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:g.weekStartsOn)!==null&&n!==void 0?n:(u=g.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=Y(r),b=x.getUTCDay(),y=(b<p?7:0)+b-p;return x.setUTCDate(x.getUTCDate()-y),x.setUTCHours(0,0,0,0),x}function _e(r,t){var e,n,a,o,s,d,u,c;k(1,arguments);var g=Y(r),p=g.getUTCFullYear(),x=le(),b=A((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:x.firstWeekContainsDate)!==null&&n!==void 0?n:(u=x.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(p+1,0,b),y.setUTCHours(0,0,0,0);var M=te(y,t),C=new Date(0);C.setUTCFullYear(p,0,b),C.setUTCHours(0,0,0,0);var S=te(C,t);return g.getTime()>=M.getTime()?p+1:g.getTime()>=S.getTime()?p:p-1}function It(r,t){var e,n,a,o,s,d,u,c;k(1,arguments);var g=le(),p=A((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&n!==void 0?n:(u=g.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),x=_e(r,t),b=new Date(0);b.setUTCFullYear(x,0,p),b.setUTCHours(0,0,0,0);var y=te(b,t);return y}var qt=6048e5;function Lt(r,t){k(1,arguments);var e=Y(r),n=te(e,t).getTime()-It(e,t).getTime();return Math.round(n/qt)+1}function h(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var Ft={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return h(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):h(n+1,2)},d:function(t,e){return h(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return h(t.getUTCHours()%12||12,e.length)},H:function(t,e){return h(t.getUTCHours(),e.length)},m:function(t,e){return h(t.getUTCMinutes(),e.length)},s:function(t,e){return h(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,n-3));return h(o,e.length)}};const N=Ft;var z={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Bt={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return N.y(t,e)},Y:function(t,e,n,a){var o=_e(t,a),s=o>0?o:1-o;if(e==="YY"){var d=s%100;return h(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):h(s,e.length)},R:function(t,e){var n=Ue(t);return h(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return h(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return h(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return h(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return N.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return h(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=Lt(t,a);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):h(o,e.length)},I:function(t,e,n){var a=Yt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):h(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):N.d(t,e)},D:function(t,e,n){var a=_t(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):h(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return h(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return h(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return h(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),o=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),o;switch(a===12?o=z.noon:a===0?o=z.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),o;switch(a>=17?o=z.evening:a>=12?o=z.afternoon:a>=4?o=z.morning:o=z.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return N.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):N.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):h(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):h(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):N.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):N.s(t,e)},S:function(t,e){return N.S(t,e)},X:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return we(s);case"XXXX":case"XX":return H(s);case"XXXXX":case"XXX":default:return H(s,":")}},x:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"x":return we(s);case"xxxx":case"xx":return H(s);case"xxxxx":case"xxx":default:return H(s,":")}},O:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+be(s,":");case"OOOO":default:return"GMT"+H(s,":")}},z:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+be(s,":");case"zzzz":default:return"GMT"+H(s,":")}},t:function(t,e,n,a){var o=a._originalDate||t,s=Math.floor(o.getTime()/1e3);return h(s,e.length)},T:function(t,e,n,a){var o=a._originalDate||t,s=o.getTime();return h(s,e.length)}};function be(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),o=n%60;if(o===0)return e+String(a);var s=t||"";return e+String(a)+s+h(o,2)}function we(r,t){if(r%60===0){var e=r>0?"-":"+";return e+h(Math.abs(r)/60,2)}return H(r,t)}function H(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),o=h(Math.floor(a/60),2),s=h(a%60,2);return n+o+e+s}const Nt=Bt;var ye=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ee=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Rt=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return ye(t,e);var s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",ye(a,e)).replace("{{time}}",Ee(o,e))},Ht={p:Ee,P:Rt};const At=Ht;var Qt=["D","DD"],zt=["YY","YYYY"];function Xt(r){return Qt.indexOf(r)!==-1}function Gt(r){return zt.indexOf(r)!==-1}function Ce(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Vt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jt=function(t,e,n){var a,o=Vt[t];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};const Kt=Jt;function fe(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var Zt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},er={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},tr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rr={date:fe({formats:Zt,defaultWidth:"full"}),time:fe({formats:er,defaultWidth:"full"}),dateTime:fe({formats:tr,defaultWidth:"full"})};const nr=rr;var ar={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},or=function(t,e,n,a){return ar[t]};const ir=or;function V(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,s=e!=null&&e.width?String(e.width):o;a=r.formattingValues[s]||r.formattingValues[o]}else{var d=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[u]||r.values[d]}var c=r.argumentCallback?r.argumentCallback(t):t;return a[c]}}var sr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},lr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},cr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ur={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},hr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fr=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},mr={ordinalNumber:fr,era:V({values:sr,defaultWidth:"wide"}),quarter:V({values:lr,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:dr,defaultWidth:"wide"}),day:V({values:cr,defaultWidth:"wide"}),dayPeriod:V({values:ur,defaultWidth:"wide",formattingValues:hr,defaultFormattingWidth:"wide"})};const vr=mr;function J(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],o=t.match(a);if(!o)return null;var s=o[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(d)?gr(d,function(p){return p.test(s)}):pr(d,function(p){return p.test(s)}),c;c=r.valueCallback?r.valueCallback(u):u,c=e.valueCallback?e.valueCallback(c):c;var g=t.slice(s.length);return{value:c,rest:g}}}function pr(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function gr(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function xr(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],o=t.match(r.parsePattern);if(!o)return null;var s=r.valueCallback?r.valueCallback(o[0]):o[0];s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(a.length);return{value:s,rest:d}}}var br=/^(\d+)(th|st|nd|rd)?/i,wr=/\d+/i,yr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Cr={any:[/^b/i,/^(a|c)/i]},Tr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Or={any:[/1/i,/2/i,/3/i,/4/i]},jr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},kr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Sr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Pr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Wr={ordinalNumber:xr({matchPattern:br,parsePattern:wr,valueCallback:function(t){return parseInt(t,10)}}),era:J({matchPatterns:yr,defaultMatchWidth:"wide",parsePatterns:Cr,defaultParseWidth:"any"}),quarter:J({matchPatterns:Tr,defaultMatchWidth:"wide",parsePatterns:Or,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:jr,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any"}),day:J({matchPatterns:Mr,defaultMatchWidth:"wide",parsePatterns:Dr,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:Sr,defaultMatchWidth:"any",parsePatterns:Pr,defaultParseWidth:"any"})};const Ur=Wr;var _r={code:"en-US",formatDistance:Kt,formatLong:nr,formatRelative:ir,localize:vr,match:Ur,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Er=_r;var $r=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ir=/^'([^]*?)'?$/,qr=/''/g,Lr=/[a-zA-Z]/;function $e(r,t,e){var n,a,o,s,d,u,c,g,p,x,b,y,M,C,S,I,W,D;k(2,arguments);var q=String(t),T=le(),f=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:T.locale)!==null&&n!==void 0?n:Er,v=A((o=(s=(d=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(c=e.locale)===null||c===void 0||(g=c.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&d!==void 0?d:T.firstWeekContainsDate)!==null&&s!==void 0?s:(p=T.locale)===null||p===void 0||(x=p.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=A((b=(y=(M=(C=e==null?void 0:e.weekStartsOn)!==null&&C!==void 0?C:e==null||(S=e.locale)===null||S===void 0||(I=S.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&M!==void 0?M:T.weekStartsOn)!==null&&y!==void 0?y:(W=T.locale)===null||W===void 0||(D=W.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&b!==void 0?b:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!f.localize)throw new RangeError("locale must contain localize property");if(!f.formatLong)throw new RangeError("locale must contain formatLong property");var U=Y(r);if(!Pt(U))throw new RangeError("Invalid time value");var L=Dt(U),R=Wt(U,L),X={firstWeekContainsDate:v,weekStartsOn:P,locale:f,_originalDate:U},G=q.match(Yr).map(function(O){var _=O[0];if(_==="p"||_==="P"){var m=At[_];return m(O,f.formatLong)}return O}).join("").match($r).map(function(O){if(O==="''")return"'";var _=O[0];if(_==="'")return Fr(O);var m=Nt[_];if(m)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Gt(O)&&Ce(O,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Xt(O)&&Ce(O,t,String(r)),m(R,O,f.localize,X);if(_.match(Lr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return O}).join("");return G}function Fr(r){var t=r.match(Ir);return t?t[1].replace(qr,"'"):r}const Br=({card:r,columnTitle:t})=>{const e=w.useRef(null),[n,a]=w.useState(!1),[o,s]=w.useState(!1),d=Q(),u=F(We),{_id:c,title:g,text:p,priority:x,deadline:b,order:y}=r,M=$e(new Date(b),"dd-MM-yyyy"),C=u.map(v=>v.title),S=C.length,I=()=>{a(!0)},W=()=>{a(!1)},D=()=>{d(Ne(c))},q=()=>{s(!o)},T=v=>{v.stopPropagation(),q()},f=v=>{if(v===t)return;const U={newColumnId:u.find(L=>L.title===v)._id};d(me({cardId:c,body:U})),q()};return i.jsxs(ut,{priority:x,children:[i.jsx(ht,{children:g}),i.jsxs("p",{children:["Order: ",y]}),i.jsx(ft,{children:i.jsx(mt,{children:p})}),i.jsxs(vt,{children:[i.jsxs(pt,{children:[i.jsxs(pe,{children:[i.jsx(ge,{children:"Priority:"}),i.jsxs(gt,{children:[i.jsx(xt,{priority:x}),i.jsx(xe,{children:x})]})]}),i.jsxs(pe,{children:[i.jsx(ge,{children:"Deadline:"}),i.jsx(xe,{children:M})]})]}),i.jsxs(bt,{children:[i.jsx(ue,{type:"button",onClick:I,children:i.jsx(he,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-pencil"})})}),S>1&&i.jsx(ue,{ref:e,type:"button",onClick:T,children:i.jsx(he,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-arrow-circle-broken-right"})})}),i.jsx(ue,{type:"button",onClick:()=>{D()},children:i.jsx(he,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-trash"})})}),o&&i.jsx(ve,{title:"Move to column",options:C,selectedOption:t,isOpen:o,onClose:q,handleOptionClick:f,openBtnRef:e,forCard:!0})]})]}),n&&i.jsx(jt,{onClose:W,card:r})]})},Nr=r=>r.cards.cards,Ye=r=>r.cards.priority,Rr=l.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 49px;
  margin-top: auto;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-btn-bg-color);

  color: var(--modal-btn-text-color);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--modal-btn-bg-color-hover);
  }
`,Hr=l.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-plus-btn-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`,Ar=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Qr=({onClose:r,columnId:t,boardId:e})=>{const n=Q(),a=$e(new Date,"yyyy-MM-dd"),o=s=>{const d={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:t,boardId:e};n(Re(d)),r()};return i.jsx(re,{onClose:r,title:"Add card",children:i.jsx(ie,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:a},validationSchema:se({title:$().max(20,"Must be 20 characters or less").required("Name is required"),text:$().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:$().required("Priority is required"),selectedDate:$().required("Deadline is required")}),onSubmit:o,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx(E,{name:"title"}),i.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx(E,{name:"text"}),i.jsx(Z,{children:"Priority color"}),i.jsx(Pe,{name:"selectedPriority"}),i.jsx(E,{name:"selectedPriority"}),i.jsx(Z,{children:"Deadline"}),i.jsx(Se,{type:"date",name:"selectedDate"}),i.jsx(E,{name:"selectedDate"}),i.jsx(oe,{type:"submit",children:"Add"})]})})})},zr=({columnId:r})=>{const[t,e]=w.useState(!1),n=F(Oe),a=()=>{e(!0)},o=()=>{e(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Rr,{onClick:a,type:"button",children:[i.jsx(Hr,{children:i.jsx(Ar,{width:"28px",height:"28px",children:i.jsx("use",{href:B+"#icon-plus"})})}),"Add another card"]}),t&&i.jsx(Qr,{onClose:o,columnId:r,boardId:n})]})},Xr=({column:r,columns:t,currentCard:e,setCurrentCard:n,currentColumn:a,setCurrentColumn:o,setIsCardOverAnotherCard:s})=>{const d=Q(),{title:u,_id:c,order:g}=r,[p,x]=w.useState(!1),[b,y]=w.useState(!1),[M,C]=w.useState([]),S=F(Nr),I=t.length,W=w.useRef(null),D=F(Ye),q=t.map(m=>m.order),T=S.find(m=>m.columnId===c);w.useEffect(()=>{C(m=>T==null?void 0:T.cards.filter(j=>D==="all priorities"?!0:j.priority===D))},[T,D]),w.useEffect(()=>{d(je("all priorities"))},[T]);const f=()=>{x(!0)},v=()=>{x(!1)},P=()=>{y(!b)},U=m=>{m.stopPropagation(),P()},L=()=>{d(He(c))},R=m=>{if(m===g)return;d(ke({columnId:c,body:{newOrder:m}})),P()},X=(m,j,K)=>{m.target.style.opacity="0.5",o(j),n(K)},G=m=>{m.stopPropagation(),m.target.style.boxShadow="none",s(!1)},O=m=>{m.preventDefault(),m.target.style.boxShadow="0 4px 3px grey",e&&s(!0)},_=(m,j,K)=>{if(e){const Ie=K.columnId,qe=K.order,Le=e._id;d(me({cardId:Le,body:{newColumnId:Ie,newOrderInColumn:qe}}))}o(null),n(null)};return i.jsxs(at,{children:[i.jsxs(ot,{children:[i.jsx(it,{children:u}),i.jsxs(st,{children:[i.jsx(de,{type:"button",onClick:f,children:i.jsx(ce,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-pencil"})})}),I>1&&i.jsx(de,{ref:W,type:"button",onClick:U,children:i.jsx(ce,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-arrow-circle-broken-right"})})}),i.jsx(de,{type:"button",onClick:()=>{L()},children:i.jsx(ce,{width:"16px",height:"16px",children:i.jsx("use",{href:B+"#icon-trash"})})}),b&&i.jsx(ve,{title:"Move to position",options:q,selectedOption:g,isOpen:b,onClose:P,handleOptionClick:R,openBtnRef:W})]})]}),i.jsx(lt,{children:i.jsx(dt,{children:M&&M.map(m=>i.jsx("div",{draggable:!0,onDragStart:j=>{X(j,r,m)},onDragLeave:j=>{G(j)},onDragEnd:j=>{G(j)},onDragOver:j=>{O(j)},onDrop:j=>{_(j,r,m)},children:i.jsx(Br,{card:m,columnTitle:u})},m._id))})}),i.jsx(zr,{columnId:c}),p&&i.jsx(ct,{columnId:c,onClose:v,columnTitle:u})]})},Gr=l.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 334px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-bg-color);
  color: var(--column-add-btn-text-color);
  font-size: 14px;
  cursor: pointer;
`,Vr=l.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-plus-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`,Jr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Kr=({boardId:r,onClose:t})=>{const e=Q(),n=a=>{const o={title:a.title,boardId:r};e(Ae(o)),t()};return i.jsx(re,{onClose:t,title:"Add column",children:i.jsx(ie,{initialValues:{title:""},validationSchema:se({title:$().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:n,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx(E,{name:"title"}),i.jsx(oe,{type:"submit",children:"Add"})]})})})},Zr=()=>{const[r,t]=w.useState(!1),e=F(Oe),n=()=>{t(!0)},a=()=>{t(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Gr,{onClick:n,type:"button",children:[i.jsx(Vr,{children:i.jsx(Jr,{width:"28px",height:"28px",children:i.jsx("use",{href:B+"#icon-plus"})})}),"Add another column"]}),r&&i.jsx(Kr,{boardId:e,onClose:a})]})},en=()=>{const r=F(Qe),t=F(ze),e=F(We),n=F(Ye),[a,o]=w.useState(!1),[s,d]=w.useState(null),[u,c]=w.useState(null),[g,p]=w.useState(null),[x,b]=w.useState(!1),y=w.useRef(null),M=Q(),C=()=>{o(!a)},S=f=>{f.stopPropagation(),C()},I=f=>{f!==n&&(M(je(f)),C())},W=(f,v)=>{p(v)},D=f=>{f.stopPropagation(),f.target.style.boxShadow="none"},q=f=>{f.preventDefault(),f.target.style.boxShadow="0 4px 3px grey"},T=(f,v)=>{if(f.preventDefault(),s&&!x){const L=v._id,R="null",X=s._id;M(me({cardId:X,body:{newColumnId:L,newOrderInColumn:R}}))}const P=v.order,U=g.order;if(P!==U){const L={newOrder:P},R=g._id;s||M(ke({columnId:R,body:L}))}d(null)};return i.jsxs(Ve,{background:t,children:[i.jsxs(Je,{children:[i.jsx(Ke,{children:r}),i.jsxs(Ze,{children:[i.jsxs(et,{ref:y,onClick:S,children:[i.jsx(tt,{children:i.jsx("use",{href:B+"#icon-filter"})}),"Filters"]}),a&&i.jsx(ve,{title:"Filter by priority",options:["all priorities",...Me],selectedOption:n,isOpen:a,onClose:C,handleOptionClick:I,openBtnRef:y})]})]}),i.jsx(rt,{children:i.jsxs(nt,{children:[e.map(f=>i.jsx("div",{draggable:!0,onDragStart:v=>{W(v,f)},onDragLeave:v=>{D(v)},onDragEnd:v=>{D(v)},onDragOver:v=>{q(v)},onDrop:v=>{T(v,f)},children:i.jsx(Xr,{column:f,columns:e,currentCard:s,setCurrentCard:d,currentColumn:u,setCurrentColumn:c,setIsCardOverAnotherCard:b})},f._id)),i.jsx(Zr,{})]})})]})},tn=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,dn=()=>i.jsx(tn,{children:i.jsx(en,{})});export{dn as default};
