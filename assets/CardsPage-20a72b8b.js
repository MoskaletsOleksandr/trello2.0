import{n as l,u as A,j as o,D as qe,r as y,E as Fe,_ as Te,d as F,F as Be,G as me,H as je,I as Ne,J as Oe,K as Re,z as ke,M as He}from"./index-4565f2c7.js";import{M as K,S as ae,a as ie,b as $,B as oe,p as Me,f as De,g as te,h as Se,C as pe,j as Ae,k as ze}from"./selectors-095b0a57.js";import{s as Y}from"./sprite-fc6f0751.js";import{b as se,c as le,d as I,a as Qe,u as Xe}from"./index.esm-33eccfe4.js";const Ge=l.div`
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
`,Ve=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 48px;
  background: linear-gradient(
    to right,
    var(--header-dashboard-bg-color),
    transparent,
    transparent,
    var(--header-dashboard-bg-color)
  );

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`,Je=l.h2`
  font-size: 14px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Ke=l.div`
  position: relative;
`,Ze=l.button`
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
`,et=l.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,tt=l.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 36px 20px;
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    padding: 36px 32px;
  }

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
`,rt=l.div`
  display: flex;
  gap: 18px;
`,nt=l.div`
  display: flex;
  flex-direction: column;
`,at=l.div`
  /* background: linear-gradient(to right, red 333px, transparent 334px); */
  width: 350px;
  height: auto;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,it=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  cursor: grab;
`,ot=l.h3`
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
`,ct=l.div``,ut=({columnId:r,onClose:t,columnTitle:e})=>{const n=A(),a=i=>{const s={title:i.title};n(qe({columnId:r,body:s})),t()};return o.jsx(K,{onClose:t,title:"Edit column",children:o.jsx(se,{initialValues:{title:e},validationSchema:le({title:I().max(25,"Must be 25 characters or less").required("Title is required")}),onSubmit:a,children:o.jsxs(ae,{children:[o.jsx(ie,{type:"text",name:"title",placeholder:"Title"}),o.jsx($,{name:"title"}),o.jsx(oe,{type:"submit",children:"Edit"})]})})})},ht=l.div`
  position: relative;
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
`,ft=l.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,mt=l.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,pt=l.p`
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
`,gt=l.ul`
  display: flex;
  gap: 14px;
`,ve=l.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ge=l.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,xt=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,bt=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
`,xe=l.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,wt=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,Z=l.button`
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
`,ee=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  fill: ${({readMore:r})=>r?"var(--card-icon-color)":"none"};

  transition: stroke 300ms var(--timing-function);
`,yt=l.ul`
  display: flex;
  gap: 8px;
`,Ct=l.li`
  display: block;
  width: 18px;
  height: 18px;
`,Tt=l.label`
  cursor: pointer;
`,jt=l(Qe)`
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
`,Pe=({name:r,selectedItem:t})=>{const[e,n]=y.useState(t||""),{setFieldValue:a}=Xe();return y.useEffect(()=>{n(t||"")},[t]),o.jsx(yt,{children:Me.map(i=>o.jsx(Ct,{children:o.jsxs(Tt,{children:[o.jsx(jt,{type:"radio",name:r,value:i,onChange:s=>{n(s.target.value),a(r,s.target.value)}}),o.jsx(Ot,{priority:i,selected:e===i})]})},i))})},kt=({onClose:r,card:t})=>{const e=A(),{_id:n}=t,a=i=>{const s={title:i.title,text:i.text,priority:i.selectedPriority,deadline:i.selectedDate};e(Fe({cardId:n,body:s})),r()};return o.jsx(K,{onClose:r,title:"Edit card",children:o.jsx(se,{initialValues:{title:t.title,text:t.text,selectedPriority:t.priority,selectedDate:t.deadline},validationSchema:le({title:I().max(24,"Must be 24 characters or less").required("Title is required"),text:I().max(449,"Must be 449 characters or less").required("Description is required"),selectedPriority:I().required("Priority is required"),selectedDate:I().required("Deadline is required")}),onSubmit:a,children:o.jsxs(ae,{children:[o.jsx(ie,{type:"text",name:"title",placeholder:"Title"}),o.jsx($,{name:"title"}),o.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),o.jsx($,{name:"text"}),o.jsx(te,{children:"Priority color"}),o.jsx(Pe,{name:"selectedPriority",selectedItem:t==null?void 0:t.priority}),o.jsx($,{name:"selectedPriority"}),o.jsx(te,{children:"Deadline"}),o.jsx(Se,{type:"date",name:"selectedDate"}),o.jsx($,{name:"selectedDate"}),o.jsx(oe,{type:"submit",children:"Edit"})]})})})},We=r=>r.columns.columns;function H(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function O(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function L(r){O(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Te(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Mt(r,t){O(2,arguments);var e=L(r).getTime(),n=H(t);return new Date(e+n)}var Dt={};function de(){return Dt}function St(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function Pt(r){return O(1,arguments),r instanceof Date||Te(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Wt(r){if(O(1,arguments),!Pt(r)&&typeof r!="number")return!1;var t=L(r);return!isNaN(Number(t))}function Ut(r,t){O(2,arguments);var e=H(t);return Mt(r,-e)}var _t=864e5;function Et(r){O(1,arguments);var t=L(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/_t)+1}function re(r){O(1,arguments);var t=1,e=L(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Ue(r){O(1,arguments);var t=L(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=re(n),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var s=re(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function $t(r){O(1,arguments);var t=Ue(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=re(e);return n}var Yt=6048e5;function It(r){O(1,arguments);var t=L(r),e=re(t).getTime()-$t(t).getTime();return Math.round(e/Yt)+1}function ne(r,t){var e,n,a,i,s,d,m,c;O(1,arguments);var v=de(),p=H((e=(n=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:v.weekStartsOn)!==null&&n!==void 0?n:(m=v.locale)===null||m===void 0||(c=m.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var b=L(r),g=b.getUTCDay(),w=(g<p?7:0)+g-p;return b.setUTCDate(b.getUTCDate()-w),b.setUTCHours(0,0,0,0),b}function _e(r,t){var e,n,a,i,s,d,m,c;O(1,arguments);var v=L(r),p=v.getUTCFullYear(),b=de(),g=H((e=(n=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:b.firstWeekContainsDate)!==null&&n!==void 0?n:(m=b.locale)===null||m===void 0||(c=m.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(p+1,0,g),w.setUTCHours(0,0,0,0);var k=ne(w,t),T=new Date(0);T.setUTCFullYear(p,0,g),T.setUTCHours(0,0,0,0);var D=ne(T,t);return v.getTime()>=k.getTime()?p+1:v.getTime()>=D.getTime()?p:p-1}function Lt(r,t){var e,n,a,i,s,d,m,c;O(1,arguments);var v=de(),p=H((e=(n=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&n!==void 0?n:(m=v.locale)===null||m===void 0||(c=m.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),b=_e(r,t),g=new Date(0);g.setUTCFullYear(b,0,p),g.setUTCHours(0,0,0,0);var w=ne(g,t);return w}var qt=6048e5;function Ft(r,t){O(1,arguments);var e=L(r),n=ne(e,t).getTime()-Lt(e,t).getTime();return Math.round(n/qt)+1}function f(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var Bt={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return f(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):f(n+1,2)},d:function(t,e){return f(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return f(t.getUTCHours()%12||12,e.length)},H:function(t,e){return f(t.getUTCHours(),e.length)},m:function(t,e){return f(t.getUTCMinutes(),e.length)},s:function(t,e){return f(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,n-3));return f(i,e.length)}};const B=Bt;var G={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Nt={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return B.y(t,e)},Y:function(t,e,n,a){var i=_e(t,a),s=i>0?i:1-i;if(e==="YY"){var d=s%100;return f(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):f(s,e.length)},R:function(t,e){var n=Ue(t);return f(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return f(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return f(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return f(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return B.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return f(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var i=Ft(t,a);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):f(i,e.length)},I:function(t,e,n){var a=It(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):f(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B.d(t,e)},D:function(t,e,n){var a=Et(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):f(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var i=t.getUTCDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return f(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var i=t.getUTCDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return f(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return f(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),i;switch(a===12?i=G.noon:a===0?i=G.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),i;switch(a>=17?i=G.evening:a>=12?i=G.afternoon:a>=4?i=G.morning:i=G.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return B.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):B.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):B.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):B.s(t,e)},S:function(t,e){return B.S(t,e)},X:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return we(s);case"XXXX":case"XX":return R(s);case"XXXXX":case"XXX":default:return R(s,":")}},x:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"x":return we(s);case"xxxx":case"xx":return R(s);case"xxxxx":case"xxx":default:return R(s,":")}},O:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+be(s,":");case"OOOO":default:return"GMT"+R(s,":")}},z:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+be(s,":");case"zzzz":default:return"GMT"+R(s,":")}},t:function(t,e,n,a){var i=a._originalDate||t,s=Math.floor(i.getTime()/1e3);return f(s,e.length)},T:function(t,e,n,a){var i=a._originalDate||t,s=i.getTime();return f(s,e.length)}};function be(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),i=n%60;if(i===0)return e+String(a);var s=t||"";return e+String(a)+s+f(i,2)}function we(r,t){if(r%60===0){var e=r>0?"-":"+";return e+f(Math.abs(r)/60,2)}return R(r,t)}function R(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),i=f(Math.floor(a/60),2),s=f(a%60,2);return n+i+e+s}const Rt=Nt;var ye=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ee=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ht=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return ye(t,e);var s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",ye(a,e)).replace("{{time}}",Ee(i,e))},At={p:Ee,P:Ht};const zt=At;var Qt=["D","DD"],Xt=["YY","YYYY"];function Gt(r){return Qt.indexOf(r)!==-1}function Vt(r){return Xt.indexOf(r)!==-1}function Ce(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Jt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Kt=function(t,e,n){var a,i=Jt[t];return typeof i=="string"?a=i:e===1?a=i.one:a=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};const Zt=Kt;function fe(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var er={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},rr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nr={date:fe({formats:er,defaultWidth:"full"}),time:fe({formats:tr,defaultWidth:"full"}),dateTime:fe({formats:rr,defaultWidth:"full"})};const ar=nr;var ir={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},or=function(t,e,n,a){return ir[t]};const sr=or;function V(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,s=e!=null&&e.width?String(e.width):i;a=r.formattingValues[s]||r.formattingValues[i]}else{var d=r.defaultWidth,m=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[m]||r.values[d]}var c=r.argumentCallback?r.argumentCallback(t):t;return a[c]}}var lr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},cr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ur={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},hr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mr=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},pr={ordinalNumber:mr,era:V({values:lr,defaultWidth:"wide"}),quarter:V({values:dr,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:cr,defaultWidth:"wide"}),day:V({values:ur,defaultWidth:"wide"}),dayPeriod:V({values:hr,defaultWidth:"wide",formattingValues:fr,defaultFormattingWidth:"wide"})};const vr=pr;function J(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],i=t.match(a);if(!i)return null;var s=i[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],m=Array.isArray(d)?xr(d,function(p){return p.test(s)}):gr(d,function(p){return p.test(s)}),c;c=r.valueCallback?r.valueCallback(m):m,c=e.valueCallback?e.valueCallback(c):c;var v=t.slice(s.length);return{value:c,rest:v}}}function gr(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function xr(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function br(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],i=t.match(r.parsePattern);if(!i)return null;var s=r.valueCallback?r.valueCallback(i[0]):i[0];s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(a.length);return{value:s,rest:d}}}var wr=/^(\d+)(th|st|nd|rd)?/i,yr=/\d+/i,Cr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Tr={any:[/^b/i,/^(a|c)/i]},jr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Or={any:[/1/i,/2/i,/3/i,/4/i]},kr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Sr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Pr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Wr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ur={ordinalNumber:br({matchPattern:wr,parsePattern:yr,valueCallback:function(t){return parseInt(t,10)}}),era:J({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Tr,defaultParseWidth:"any"}),quarter:J({matchPatterns:jr,defaultMatchWidth:"wide",parsePatterns:Or,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),day:J({matchPatterns:Dr,defaultMatchWidth:"wide",parsePatterns:Sr,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:Pr,defaultMatchWidth:"any",parsePatterns:Wr,defaultParseWidth:"any"})};const _r=Ur;var Er={code:"en-US",formatDistance:Zt,formatLong:ar,formatRelative:sr,localize:vr,match:_r,options:{weekStartsOn:0,firstWeekContainsDate:1}};const $r=Er;var Yr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ir=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lr=/^'([^]*?)'?$/,qr=/''/g,Fr=/[a-zA-Z]/;function $e(r,t,e){var n,a,i,s,d,m,c,v,p,b,g,w,k,T,D,q,_,W;O(2,arguments);var N=String(t),h=de(),x=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:h.locale)!==null&&n!==void 0?n:$r,S=H((i=(s=(d=(m=e==null?void 0:e.firstWeekContainsDate)!==null&&m!==void 0?m:e==null||(c=e.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&d!==void 0?d:h.firstWeekContainsDate)!==null&&s!==void 0?s:(p=h.locale)===null||p===void 0||(b=p.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=H((g=(w=(k=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(D=e.locale)===null||D===void 0||(q=D.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&k!==void 0?k:h.weekStartsOn)!==null&&w!==void 0?w:(_=h.locale)===null||_===void 0||(W=_.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&g!==void 0?g:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var P=L(r);if(!Wt(P))throw new RangeError("Invalid time value");var M=St(P),z=Ut(P,M),Q={firstWeekContainsDate:S,weekStartsOn:U,locale:x,_originalDate:P},X=N.match(Ir).map(function(j){var E=j[0];if(E==="p"||E==="P"){var u=zt[E];return u(j,x.formatLong)}return j}).join("").match(Yr).map(function(j){if(j==="''")return"'";var E=j[0];if(E==="'")return Br(j);var u=Rt[E];if(u)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Vt(j)&&Ce(j,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Gt(j)&&Ce(j,t,String(r)),u(z,j,x.localize,Q);if(E.match(Fr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return j}).join("");return X}function Br(r){var t=r.match(Lr);return t?t[1].replace(qr,"'"):r}const Nr=({card:r,onClose:t})=>o.jsx(K,{onClose:t,title:"Card details",children:o.jsx("p",{children:r.title})}),Rr=({card:r,columnTitle:t})=>{const e=y.useRef(null),[n,a]=y.useState(!1),[i,s]=y.useState(!1),[d,m]=y.useState(!1),c=A(),v=F(We),{_id:p,title:b,text:g,priority:w,deadline:k}=r,T=$e(new Date(k),"dd-MM-yyyy"),D=v.map(M=>M.title),q=D.length,_=()=>{a(!0)},W=()=>{a(!1)},N=()=>{s(!0)},h=()=>{s(!1)},x=()=>{c(Be(p))},S=()=>{m(!d)},U=M=>{M.stopPropagation(),S()},P=M=>{if(M===t)return;const Q={newColumnId:v.find(X=>X.title===M)._id,newOrderInColumn:"last"};c(me({cardId:p,body:Q})),S()};return o.jsxs(ht,{priority:w,children:[o.jsx(ft,{children:b}),o.jsx(mt,{children:o.jsx(pt,{children:g})}),o.jsxs(vt,{children:[o.jsxs(gt,{children:[o.jsxs(ve,{children:[o.jsx(ge,{children:"Priority:"}),o.jsxs(xt,{children:[o.jsx(bt,{priority:w}),o.jsx(xe,{children:w})]})]}),o.jsxs(ve,{children:[o.jsx(ge,{children:"Deadline:"}),o.jsx(xe,{children:T})]})]}),o.jsxs(wt,{children:[o.jsx(Z,{type:"button",onClick:()=>{N()},children:o.jsx(ee,{width:"16px",height:"16px",readMore:!0,children:o.jsx("use",{href:Y+"#icon-read-more"})})}),o.jsx(Z,{type:"button",onClick:_,children:o.jsx(ee,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-pencil"})})}),q>1&&o.jsx(Z,{ref:e,type:"button",onClick:U,children:o.jsx(ee,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-arrow-circle-broken-right"})})}),o.jsx(Z,{type:"button",onClick:()=>{x()},children:o.jsx(ee,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-trash"})})}),d&&o.jsx(pe,{title:"Move to column",options:D,selectedOption:t,isOpen:d,onClose:S,handleOptionClick:P,openBtnRef:e,forCard:!0})]})]}),n&&o.jsx(kt,{onClose:W,card:r}),i&&o.jsx(Nr,{onClose:h,card:r})]})},Hr=r=>r.cards.cards,Ye=r=>r.cards.priority,Ar=({column:r,columns:t,currentCard:e,setCurrentCard:n,currentColumn:a,setCurrentColumn:i,setIsCardOverAnotherCard:s})=>{const d=A(),{title:m,_id:c,order:v}=r,[p,b]=y.useState(!1),[g,w]=y.useState(!1),[k,T]=y.useState([]),D=F(Hr),q=t.length,_=y.useRef(null),W=F(Ye),N=t.map(u=>u.order),h=D.find(u=>u.columnId===c);y.useEffect(()=>{T(u=>h==null?void 0:h.cards.filter(C=>W==="all priorities"?!0:C.priority===W))},[h,W]),y.useEffect(()=>{d(je("all priorities"))},[h]);const x=()=>{b(!0)},S=()=>{b(!1)},U=()=>{w(!g)},P=u=>{u.stopPropagation(),U()},M=()=>{d(Ne(c))},z=u=>{if(u===v)return;d(Oe({columnId:c,body:{newOrder:u}})),U()},Q=(u,C,ce)=>{i(C),n(ce)},X=u=>{u.currentTarget.style.marginTop="0",u.currentTarget.style.transform="none",s(!1)},j=u=>{u.stopPropagation(),u.preventDefault(),u.currentTarget.style.transition="transform 0.5s ease, margin-top 0.5s ease",u.currentTarget.style.marginTop="15px",u.currentTarget.style.transform="translateY(10px)",u.currentTarget.style.transform="scale(0.95)",e&&s(!0)},E=(u,C)=>{if(u.currentTarget.style.marginTop="0",u.currentTarget.style.transform="none",e&&e!==C){const ce=C.columnId,Ie=C.order,Le=e._id;d(me({cardId:Le,body:{newColumnId:ce,newOrderInColumn:Ie}}))}i(null),n(null)};return o.jsxs(at,{children:[o.jsxs(it,{children:[o.jsx(ot,{children:m}),o.jsxs(st,{children:[o.jsx(ue,{type:"button",onClick:x,children:o.jsx(he,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-pencil"})})}),q>1&&o.jsx(ue,{ref:_,type:"button",onClick:P,children:o.jsx(he,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-arrow-circle-broken-right"})})}),o.jsx(ue,{type:"button",onClick:()=>{M()},children:o.jsx(he,{width:"16px",height:"16px",children:o.jsx("use",{href:Y+"#icon-trash"})})}),g&&o.jsx(pe,{title:"Move to position",options:N,selectedOption:v,isOpen:g,onClose:U,handleOptionClick:z,openBtnRef:_})]})]}),o.jsx(lt,{children:o.jsx(dt,{children:k&&k.map(u=>o.jsx(ct,{className:"DndWrapper",draggable:!0,onDragStart:C=>{Q(C,r,u)},onDragLeave:C=>{X(C)},onDragEnd:C=>{X(C)},onDragOver:C=>{j(C)},onDrop:C=>{E(C,u)},children:o.jsx(Rr,{card:u,columnTitle:m})},u._id))})}),p&&o.jsx(ut,{columnId:c,onClose:S,columnTitle:m})]})},zr=l.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-bg-color);
  color: var(--column-add-btn-text-color);
  font-size: 14px;
  cursor: pointer;
`,Qr=l.div`
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
`,Xr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Gr=({boardId:r,onClose:t})=>{const e=A(),n=a=>{const i={title:a.title,boardId:r};e(Re(i)),t()};return o.jsx(K,{onClose:t,title:"Add column",children:o.jsx(se,{initialValues:{title:""},validationSchema:le({title:I().max(25,"Must be 25 characters or less").required("Title is required")}),onSubmit:n,children:o.jsxs(ae,{children:[o.jsx(ie,{type:"text",name:"title",placeholder:"Title"}),o.jsx($,{name:"title"}),o.jsx(oe,{type:"submit",children:"Add"})]})})})},Vr=()=>{const[r,t]=y.useState(!1),e=F(ke),n=()=>{t(!0)},a=()=>{t(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(zr,{onClick:n,type:"button",children:[o.jsx(Qr,{children:o.jsx(Xr,{width:"28px",height:"28px",children:o.jsx("use",{href:Y+"#icon-plus"})})}),"Add another column"]}),r&&o.jsx(Gr,{boardId:e,onClose:a})]})},Jr=l.button`
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
`,Kr=l.div`
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
`,Zr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,en=({onClose:r,columnId:t,boardId:e})=>{const n=A(),a=$e(new Date,"yyyy-MM-dd"),i=s=>{const d={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:t,boardId:e};n(He(d)),r()};return o.jsx(K,{onClose:r,title:"Add card",children:o.jsx(se,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:a},validationSchema:le({title:I().max(24,"Must be 24 characters or less").required("Title is required"),text:I().max(449,"Must be 449 characters or less").required("Description is required"),selectedPriority:I().required("Priority is required"),selectedDate:I().required("Deadline is required")}),onSubmit:i,children:o.jsxs(ae,{children:[o.jsx(ie,{type:"text",name:"title",placeholder:"Title"}),o.jsx($,{name:"title"}),o.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),o.jsx($,{name:"text"}),o.jsx(te,{children:"Priority color"}),o.jsx(Pe,{name:"selectedPriority"}),o.jsx($,{name:"selectedPriority"}),o.jsx(te,{children:"Deadline"}),o.jsx(Se,{type:"date",name:"selectedDate"}),o.jsx($,{name:"selectedDate"}),o.jsx(oe,{type:"submit",children:"Add"})]})})})},tn=({columnId:r})=>{const[t,e]=y.useState(!1),n=F(ke),a=()=>{e(!0)},i=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(Jr,{onClick:a,type:"button",children:[o.jsx(Kr,{children:o.jsx(Zr,{width:"28px",height:"28px",children:o.jsx("use",{href:Y+"#icon-plus"})})}),"Add another card"]}),t&&o.jsx(en,{onClose:i,columnId:r,boardId:n})]})},rn=()=>{const r=F(Ae),t=F(ze),e=F(We),n=F(Ye),[a,i]=y.useState(!1),[s,d]=y.useState(null),[m,c]=y.useState(null),[v,p]=y.useState(null),[b,g]=y.useState(!1),w=y.useRef(null),k=A(),T=()=>{i(!a)},D=h=>{h.stopPropagation(),T()},q=h=>{h!==n&&(k(je(h)),T())},_=(h,x)=>{p(x)},W=h=>{h.preventDefault()},N=(h,x)=>{if(h.preventDefault(),s&&!b){const P=x._id,M="last",z=s._id;k(me({cardId:z,body:{newColumnId:P,newOrderInColumn:M}}))}const S=x.order,U=v.order;if(S!==U){const P={newOrder:S},M=v._id;s||k(Oe({columnId:M,body:P}))}d(null)};return o.jsxs(Ge,{background:t,children:[o.jsxs(Ve,{children:[o.jsx(Je,{children:r}),o.jsxs(Ke,{children:[o.jsxs(Ze,{ref:w,onClick:D,children:[o.jsx(et,{children:o.jsx("use",{href:Y+"#icon-filter"})}),"Filters"]}),a&&o.jsx(pe,{title:"Filter by priority",options:["all priorities",...Me],selectedOption:n,isOpen:a,onClose:T,handleOptionClick:q,openBtnRef:w})]})]}),o.jsx(tt,{children:o.jsxs(rt,{children:[e.map(h=>o.jsxs(nt,{draggable:!0,onDragStart:x=>{_(x,h)},onDragLeave:x=>{},onDragEnd:x=>{},onDragOver:x=>{W(x)},onDrop:x=>{N(x,h)},children:[o.jsx(Ar,{column:h,columns:e,currentCard:s,setCurrentCard:d,currentColumn:m,setCurrentColumn:c,setIsCardOverAnotherCard:g}),o.jsx(tn,{columnId:h._id})]},h._id)),o.jsx(Vr,{})]})})]})},nn=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,cn=()=>o.jsx(nn,{children:o.jsx(rn,{})});export{cn as default};
