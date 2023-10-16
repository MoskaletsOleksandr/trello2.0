import{u as R,j as o,p as qe,c as y,q as Le,_ as ye,b as _,t as Fe,v as Ce,w as Ie,m as Te,x as je,y as Be,z as Ne,A as Re}from"./index-d0694a1d.js";import{M as K,S as Z,a as ee,b as k,c as te,p as Oe,f as ke,g as G,h as Me,C as me,j as He,k as Ae}from"./Button-eefdb8da.js";import{n as l}from"./emotion-styled.browser.esm-051bf8a0.js";import{s as $}from"./sprite-33c0d800.js";import{b as re,c as ne,d as M,a as Qe,u as ze}from"./index.esm-f655f8ba.js";const Xe=l.div`
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
`,Ge=l.div`
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
`,Ve=l.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,Je=l.div`
  position: relative;
`,Ke=l.button`
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
`,Ze=l.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,et=l.section`
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
`,tt=l.div`
  display: flex;
  align-items: start;
  gap: 18px;
`,rt=l.div`
  width: 350px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,nt=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,at=l.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,it=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,le=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,de=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,ot=l.div`
  overflow-y: hidden;
`,st=l.div`
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
`,lt=({columnId:r,onClose:t,columnTitle:e})=>{const n=R(),a=i=>{const s={title:i.title};n(qe({columnId:r,body:s})),t()};return o.jsx(K,{onClose:t,title:"Edit column",children:o.jsx(re,{initialValues:{title:e},validationSchema:ne({title:M().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:a,children:o.jsxs(Z,{children:[o.jsx(ee,{type:"text",name:"title",placeholder:"Title"}),o.jsx(k,{name:"title"}),o.jsx(te,{type:"submit",children:"Edit"})]})})})},dt=l.div`
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
`,ct=l.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,ut=l.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ht=l.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,mt=l.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,ft=l.ul`
  display: flex;
  gap: 14px;
`,fe=l.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ve=l.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,vt=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,pt=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
`,pe=l.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,gt=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,ce=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,ue=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,xt=l.ul`
  display: flex;
  gap: 8px;
`,bt=l.li`
  display: block;
  width: 18px;
  height: 18px;
`,wt=l.label``,yt=l(Qe)`
  display: none;
`;l.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:r})=>r?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const Ct=l.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
  border: ${({selected:r})=>r?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:r,priority:t})=>r?`2px solid var(--filter-${t}-priority-color)`:"none"};
`,De=({name:r,icons:t,selectedItem:e})=>{const[n,a]=y.useState(e||""),{setFieldValue:i}=ze();return y.useEffect(()=>{a(e||"")},[e]),o.jsx(xt,{children:Oe.map(s=>o.jsx(bt,{children:o.jsxs(wt,{children:[o.jsx(yt,{type:"radio",name:r,value:s,onChange:d=>{a(d.target.value),i(r,d.target.value)}}),o.jsx(Ct,{priority:s,selected:n===s})]})},s))})},Tt=({onClose:r,card:t})=>{const e=R(),{_id:n}=t,a=i=>{const s={title:i.title,text:i.text,priority:i.selectedPriority,deadline:i.selectedDate};e(Le({cardId:n,body:s})),r()};return o.jsx(K,{onClose:r,title:"Edit card",children:o.jsx(re,{initialValues:{title:t.title,text:t.text,selectedPriority:t.priority,selectedDate:t.deadline},validationSchema:ne({title:M().max(20,"Must be 20 characters or less").required("Name is required"),text:M().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:M().required("Priority is required"),selectedDate:M().required("Deadline is required")}),onSubmit:a,children:o.jsxs(Z,{children:[o.jsx(ee,{type:"text",name:"title",placeholder:"Title"}),o.jsx(k,{name:"title"}),o.jsx(ke,{as:"textarea",name:"text",placeholder:"Description"}),o.jsx(k,{name:"text"}),o.jsx(G,{children:"Priority color"}),o.jsx(De,{name:"selectedPriority",selectedItem:t==null?void 0:t.priority}),o.jsx(k,{name:"selectedPriority"}),o.jsx(G,{children:"Deadline"}),o.jsx(Me,{type:"date",name:"selectedDate"}),o.jsx(k,{name:"selectedDate"}),o.jsx(te,{type:"submit",children:"Edit"})]})})})},Pe=r=>r.columns.columns;function N(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function T(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function D(r){T(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||ye(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function jt(r,t){T(2,arguments);var e=D(r).getTime(),n=N(t);return new Date(e+n)}var Ot={};function ae(){return Ot}function kt(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function Mt(r){return T(1,arguments),r instanceof Date||ye(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Dt(r){if(T(1,arguments),!Mt(r)&&typeof r!="number")return!1;var t=D(r);return!isNaN(Number(t))}function Pt(r,t){T(2,arguments);var e=N(t);return jt(r,-e)}var St=864e5;function Wt(r){T(1,arguments);var t=D(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/St)+1}function V(r){T(1,arguments);var t=1,e=D(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Se(r){T(1,arguments);var t=D(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=V(n),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var s=V(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function Ut(r){T(1,arguments);var t=Se(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=V(e);return n}var Et=6048e5;function _t(r){T(1,arguments);var t=D(r),e=V(t).getTime()-Ut(t).getTime();return Math.round(e/Et)+1}function J(r,t){var e,n,a,i,s,d,u,h;T(1,arguments);var p=ae(),f=N((e=(n=(a=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:p.weekStartsOn)!==null&&n!==void 0?n:(u=p.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&e!==void 0?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=D(r),g=v.getUTCDay(),b=(g<f?7:0)+g-f;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function We(r,t){var e,n,a,i,s,d,u,h;T(1,arguments);var p=D(r),f=p.getUTCFullYear(),v=ae(),g=N((e=(n=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&n!==void 0?n:(u=v.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,g),b.setUTCHours(0,0,0,0);var w=J(b,t),O=new Date(0);O.setUTCFullYear(f,0,g),O.setUTCHours(0,0,0,0);var P=J(O,t);return p.getTime()>=w.getTime()?f+1:p.getTime()>=P.getTime()?f:f-1}function $t(r,t){var e,n,a,i,s,d,u,h;T(1,arguments);var p=ae(),f=N((e=(n=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:p.firstWeekContainsDate)!==null&&n!==void 0?n:(u=p.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=We(r,t),g=new Date(0);g.setUTCFullYear(v,0,f),g.setUTCHours(0,0,0,0);var b=J(g,t);return b}var Yt=6048e5;function qt(r,t){T(1,arguments);var e=D(r),n=J(e,t).getTime()-$t(e,t).getTime();return Math.round(n/Yt)+1}function m(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var Lt={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return m(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):m(n+1,2)},d:function(t,e){return m(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return m(t.getUTCHours()%12||12,e.length)},H:function(t,e){return m(t.getUTCHours(),e.length)},m:function(t,e){return m(t.getUTCMinutes(),e.length)},s:function(t,e){return m(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,n-3));return m(i,e.length)}};const F=Lt;var H={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ft={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,a){var i=We(t,a),s=i>0?i:1-i;if(e==="YY"){var d=s%100;return m(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):m(s,e.length)},R:function(t,e){var n=Se(t);return m(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return m(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var i=qt(t,a);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):m(i,e.length)},I:function(t,e,n){var a=_t(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):m(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){var a=Wt(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var i=t.getUTCDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return m(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var i=t.getUTCDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return m(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return m(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),i;switch(a===12?i=H.noon:a===0?i=H.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),i;switch(a>=17?i=H.evening:a>=12?i=H.afternoon:a>=4?i=H.morning:i=H.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return xe(s);case"XXXX":case"XX":return B(s);case"XXXXX":case"XXX":default:return B(s,":")}},x:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"x":return xe(s);case"xxxx":case"xx":return B(s);case"xxxxx":case"xxx":default:return B(s,":")}},O:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ge(s,":");case"OOOO":default:return"GMT"+B(s,":")}},z:function(t,e,n,a){var i=a._originalDate||t,s=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ge(s,":");case"zzzz":default:return"GMT"+B(s,":")}},t:function(t,e,n,a){var i=a._originalDate||t,s=Math.floor(i.getTime()/1e3);return m(s,e.length)},T:function(t,e,n,a){var i=a._originalDate||t,s=i.getTime();return m(s,e.length)}};function ge(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),i=n%60;if(i===0)return e+String(a);var s=t||"";return e+String(a)+s+m(i,2)}function xe(r,t){if(r%60===0){var e=r>0?"-":"+";return e+m(Math.abs(r)/60,2)}return B(r,t)}function B(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),i=m(Math.floor(a/60),2),s=m(a%60,2);return n+i+e+s}const It=Ft;var be=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ue=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Bt=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return be(t,e);var s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",be(a,e)).replace("{{time}}",Ue(i,e))},Nt={p:Ue,P:Bt};const Rt=Nt;var Ht=["D","DD"],At=["YY","YYYY"];function Qt(r){return Ht.indexOf(r)!==-1}function zt(r){return At.indexOf(r)!==-1}function we(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Gt=function(t,e,n){var a,i=Xt[t];return typeof i=="string"?a=i:e===1?a=i.one:a=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};const Vt=Gt;function he(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var Jt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},er={date:he({formats:Jt,defaultWidth:"full"}),time:he({formats:Kt,defaultWidth:"full"}),dateTime:he({formats:Zt,defaultWidth:"full"})};const tr=er;var rr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nr=function(t,e,n,a){return rr[t]};const ar=nr;function A(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,s=e!=null&&e.width?String(e.width):i;a=r.formattingValues[s]||r.formattingValues[i]}else{var d=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[u]||r.values[d]}var h=r.argumentCallback?r.argumentCallback(t):t;return a[h]}}var ir={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},or={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},sr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},lr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ur=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},hr={ordinalNumber:ur,era:A({values:ir,defaultWidth:"wide"}),quarter:A({values:or,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:A({values:sr,defaultWidth:"wide"}),day:A({values:lr,defaultWidth:"wide"}),dayPeriod:A({values:dr,defaultWidth:"wide",formattingValues:cr,defaultFormattingWidth:"wide"})};const mr=hr;function Q(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],i=t.match(a);if(!i)return null;var s=i[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(d)?vr(d,function(f){return f.test(s)}):fr(d,function(f){return f.test(s)}),h;h=r.valueCallback?r.valueCallback(u):u,h=e.valueCallback?e.valueCallback(h):h;var p=t.slice(s.length);return{value:h,rest:p}}}function fr(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function vr(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function pr(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],i=t.match(r.parsePattern);if(!i)return null;var s=r.valueCallback?r.valueCallback(i[0]):i[0];s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(a.length);return{value:s,rest:d}}}var gr=/^(\d+)(th|st|nd|rd)?/i,xr=/\d+/i,br={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wr={any:[/^b/i,/^(a|c)/i]},yr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Cr={any:[/1/i,/2/i,/3/i,/4/i]},Tr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Or={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pr={ordinalNumber:pr({matchPattern:gr,parsePattern:xr,valueCallback:function(t){return parseInt(t,10)}}),era:Q({matchPatterns:br,defaultMatchWidth:"wide",parsePatterns:wr,defaultParseWidth:"any"}),quarter:Q({matchPatterns:yr,defaultMatchWidth:"wide",parsePatterns:Cr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Q({matchPatterns:Tr,defaultMatchWidth:"wide",parsePatterns:jr,defaultParseWidth:"any"}),day:Q({matchPatterns:Or,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any"}),dayPeriod:Q({matchPatterns:Mr,defaultMatchWidth:"any",parsePatterns:Dr,defaultParseWidth:"any"})};const Sr=Pr;var Wr={code:"en-US",formatDistance:Vt,formatLong:tr,formatRelative:ar,localize:mr,match:Sr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ur=Wr;var Er=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_r=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$r=/^'([^]*?)'?$/,Yr=/''/g,qr=/[a-zA-Z]/;function Ee(r,t,e){var n,a,i,s,d,u,h,p,f,v,g,b,w,O,P,Y,S,W;T(2,arguments);var U=String(t),E=ae(),j=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:E.locale)!==null&&n!==void 0?n:Ur,q=N((i=(s=(d=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(h=e.locale)===null||h===void 0||(p=h.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&d!==void 0?d:E.firstWeekContainsDate)!==null&&s!==void 0?s:(f=E.locale)===null||f===void 0||(v=f.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(q>=1&&q<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=N((g=(b=(w=(O=e==null?void 0:e.weekStartsOn)!==null&&O!==void 0?O:e==null||(P=e.locale)===null||P===void 0||(Y=P.options)===null||Y===void 0?void 0:Y.weekStartsOn)!==null&&w!==void 0?w:E.weekStartsOn)!==null&&b!==void 0?b:(S=E.locale)===null||S===void 0||(W=S.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&g!==void 0?g:0);if(!(I>=0&&I<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var L=D(r);if(!Dt(L))throw new RangeError("Invalid time value");var ie=kt(L),oe=Pt(L,ie),z={firstWeekContainsDate:q,weekStartsOn:I,locale:j,_originalDate:L},se=U.match(_r).map(function(C){var c=C[0];if(c==="p"||c==="P"){var x=Rt[c];return x(C,j.formatLong)}return C}).join("").match(Er).map(function(C){if(C==="''")return"'";var c=C[0];if(c==="'")return Lr(C);var x=It[c];if(x)return!(e!=null&&e.useAdditionalWeekYearTokens)&&zt(C)&&we(C,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Qt(C)&&we(C,t,String(r)),x(oe,C,j.localize,z);if(c.match(qr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return C}).join("");return se}function Lr(r){var t=r.match($r);return t?t[1].replace(Yr,"'"):r}const Fr=({card:r,columnTitle:t})=>{const e=y.useRef(null),[n,a]=y.useState(!1),[i,s]=y.useState(!1),d=R(),u=_(Pe),{_id:h,title:p,text:f,priority:v,deadline:g}=r,b=Ee(new Date(g),"dd-MM-yyyy"),w=u.map(j=>j.title),O=w.length,P=()=>{a(!0)},Y=()=>{a(!1)},S=()=>{d(Fe(h))},W=()=>{s(!i)},U=j=>{j.stopPropagation(),W()},E=j=>{if(j===t)return;const I={newColumnId:u.find(L=>L.title===j)._id};d(Ce({cardId:h,body:I})),W()};return o.jsxs(dt,{priority:v,children:[o.jsx(ct,{children:p}),o.jsx(ut,{children:o.jsx(ht,{children:f})}),o.jsxs(mt,{children:[o.jsxs(ft,{children:[o.jsxs(fe,{children:[o.jsx(ve,{children:"Priority:"}),o.jsxs(vt,{children:[o.jsx(pt,{priority:v}),o.jsx(pe,{children:v})]})]}),o.jsxs(fe,{children:[o.jsx(ve,{children:"Deadline:"}),o.jsx(pe,{children:b})]})]}),o.jsxs(gt,{children:[o.jsx(ce,{type:"button",onClick:P,children:o.jsx(ue,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-pencil"})})}),O>1&&o.jsx(ce,{ref:e,type:"button",onClick:U,children:o.jsx(ue,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-arrow-circle-broken-right"})})}),o.jsx(ce,{type:"button",onClick:()=>{S()},children:o.jsx(ue,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-trash"})})}),i&&o.jsx(me,{title:"Move to column",options:w,selectedOption:t,isOpen:i,onClose:W,handleOptionClick:E,openBtnRef:e,forCard:!0})]})]}),n&&o.jsx(Tt,{onClose:Y,card:r})]})},Ir=r=>r.cards.cards,_e=r=>r.cards.priority,Br=l.button`
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
`,Nr=l.div`
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
`,Rr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Hr=({onClose:r,columnId:t,boardId:e})=>{const n=R(),a=Ee(new Date,"yyyy-MM-dd"),i=s=>{const d={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:t,boardId:e};n(Ie(d)),r()};return o.jsx(K,{onClose:r,title:"Add card",children:o.jsx(re,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:a},validationSchema:ne({title:M().max(20,"Must be 20 characters or less").required("Name is required"),text:M().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:M().required("Priority is required"),selectedDate:M().required("Deadline is required")}),onSubmit:i,children:o.jsxs(Z,{children:[o.jsx(ee,{type:"text",name:"title",placeholder:"Title"}),o.jsx(k,{name:"title"}),o.jsx(ke,{as:"textarea",name:"text",placeholder:"Description"}),o.jsx(k,{name:"text"}),o.jsx(G,{children:"Priority color"}),o.jsx(De,{name:"selectedPriority"}),o.jsx(k,{name:"selectedPriority"}),o.jsx(G,{children:"Deadline"}),o.jsx(Me,{type:"date",name:"selectedDate"}),o.jsx(k,{name:"selectedDate"}),o.jsx(te,{type:"submit",children:"Add"})]})})})},Ar=({columnId:r})=>{const[t,e]=y.useState(!1),n=_(Te),a=()=>{e(!0)},i=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(Br,{onClick:a,type:"button",children:[o.jsx(Nr,{children:o.jsx(Rr,{width:"28px",height:"28px",children:o.jsx("use",{href:$+"#icon-plus"})})}),"Add another card"]}),t&&o.jsx(Hr,{onClose:i,columnId:r,boardId:n})]})},Qr=({column:r,columns:t,currentCard:e,setCurrentCard:n,currentColumn:a,setCurrentColumn:i})=>{const s=R(),{title:d,_id:u,order:h}=r,[p,f]=y.useState(!1),[v,g]=y.useState(!1),[b,w]=y.useState([]),O=_(Ir),P=t.length,Y=y.useRef(null),S=_(_e),W=t.map(c=>c.order),U=O.find(c=>c.columnId===u);y.useEffect(()=>{w(c=>U==null?void 0:U.cards.filter(x=>S==="all priorities"?!0:x.priority===S))},[U,S]),y.useEffect(()=>{s(je("all priorities"))},[U]);const E=()=>{f(!0)},j=()=>{f(!1)},q=()=>{g(!v)},I=c=>{c.stopPropagation(),q()},L=()=>{s(Be(u))},ie=c=>{if(c===h)return;s(Ne({columnId:u,body:{newOrder:c}})),q()},oe=(c,x,X)=>{console.log("drag column",x),console.log("drag card",X),i(x),n(X)},z=c=>{c.stopPropagation(),c.target.style.boxShadow="none"},se=c=>{c.preventDefault(),c.target.style.boxShadow="0 4px 3px grey"},C=(c,x,X)=>{c.preventDefault();const $e=e._id,Ye={newColumnId:X.columnId};s(Ce({cardId:$e,body:Ye}))};return o.jsxs(rt,{children:[o.jsxs(nt,{children:[o.jsx(at,{children:d}),o.jsxs(it,{children:[o.jsx(le,{type:"button",onClick:E,children:o.jsx(de,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-pencil"})})}),P>1&&o.jsx(le,{ref:Y,type:"button",onClick:I,children:o.jsx(de,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-arrow-circle-broken-right"})})}),o.jsx(le,{type:"button",onClick:()=>{L()},children:o.jsx(de,{width:"16px",height:"16px",children:o.jsx("use",{href:$+"#icon-trash"})})}),v&&o.jsx(me,{title:"Move to position",options:W,selectedOption:h,isOpen:v,onClose:q,handleOptionClick:ie,openBtnRef:Y})]})]}),o.jsx(ot,{children:o.jsx(st,{children:b&&b.map(c=>o.jsx("div",{draggable:!0,onDragStart:x=>{oe(x,r,c)},onDragLeave:x=>{z(x)},onDragEnd:x=>{z(x)},onDragOver:x=>{se(x)},onDrop:x=>{C(x,r,c)},children:o.jsx(Fr,{card:c,columnTitle:d})},c._id))})}),o.jsx(Ar,{columnId:u}),p&&o.jsx(lt,{columnId:u,onClose:j,columnTitle:d})]})},zr=l.button`
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
`,Xr=l.div`
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
`,Gr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Vr=({boardId:r,onClose:t})=>{const e=R(),n=a=>{const i={title:a.title,boardId:r};e(Re(i)),t()};return o.jsx(K,{onClose:t,title:"Add column",children:o.jsx(re,{initialValues:{title:""},validationSchema:ne({title:M().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:n,children:o.jsxs(Z,{children:[o.jsx(ee,{type:"text",name:"title",placeholder:"Title"}),o.jsx(k,{name:"title"}),o.jsx(te,{type:"submit",children:"Add"})]})})})},Jr=()=>{const[r,t]=y.useState(!1),e=_(Te),n=()=>{t(!0)},a=()=>{t(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(zr,{onClick:n,type:"button",children:[o.jsx(Xr,{children:o.jsx(Gr,{width:"28px",height:"28px",children:o.jsx("use",{href:$+"#icon-plus"})})}),"Add another column"]}),r&&o.jsx(Vr,{boardId:e,onClose:a})]})},Kr=()=>{const r=_(He),t=_(Ae),e=_(Pe),n=_(_e),[a,i]=y.useState(!1),[s,d]=y.useState(null),[u,h]=y.useState(null),p=y.useRef(null),f=R(),v=()=>{i(!a)},g=w=>{w.stopPropagation(),v()},b=w=>{w!==n&&(f(je(w)),v())};return o.jsxs(Xe,{background:t,children:[o.jsxs(Ge,{children:[o.jsx(Ve,{children:r}),o.jsxs(Je,{children:[o.jsxs(Ke,{ref:p,onClick:g,children:[o.jsx(Ze,{children:o.jsx("use",{href:$+"#icon-filter"})}),"Filters"]}),a&&o.jsx(me,{title:"Filter by priority",options:["all priorities",...Oe],selectedOption:n,isOpen:a,onClose:v,handleOptionClick:b,openBtnRef:p})]})]}),o.jsx(et,{children:o.jsxs(tt,{children:[e.map(w=>o.jsx(Qr,{column:w,columns:e,currentCard:s,setCurrentCard:d,currentColumn:u,setCurrentColumn:h},w._id)),o.jsx(Jr,{})]})})]})},Zr=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,on=()=>o.jsx(Zr,{children:o.jsx(Kr,{})});export{on as default};
