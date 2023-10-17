import{u as R,j as i,p as Le,c as C,q as Fe,_ as Te,b as q,t as Be,v as me,w as Ne,m as je,x as Oe,y as Re,z as ke,A as He}from"./index-8b1b127f.js";import{M as Z,S as ee,a as te,b as $,c as re,p as Me,f as De,g as V,h as Se,C as fe,j as Ae,k as Qe}from"./Button-31b2feb9.js";import{n as l}from"./emotion-styled.browser.esm-abb5721d.js";import{s as L}from"./sprite-33c0d800.js";import{b as ne,c as ae,d as Y,a as ze,u as Xe}from"./index.esm-20520c16.js";const Ge=l.div`
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
`,Je=l.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
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
`,rt=l.div`
  display: flex;
  align-items: start;
  gap: 18px;
`,nt=l.div`
  width: 350px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,at=l.div`
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
`,it=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,le=l.button`
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
`,de=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  transition: stroke 300ms var(--timing-function);
`,st=l.div`
  overflow-y: hidden;
`,lt=l.div`
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
`,dt=({columnId:r,onClose:t,columnTitle:e})=>{const n=R(),a=o=>{const s={title:o.title};n(Le({columnId:r,body:s})),t()};return i.jsx(Z,{onClose:t,title:"Edit column",children:i.jsx(ne,{initialValues:{title:e},validationSchema:ae({title:Y().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:a,children:i.jsxs(ee,{children:[i.jsx(te,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(re,{type:"submit",children:"Edit"})]})})})},ct=l.div`
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
`,ut=l.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,ht=l.div`
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
`,ft=l.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,vt=l.ul`
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
`,pt=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,gt=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
`,xe=l.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,xt=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,ce=l.button`
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
`,ue=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  transition: stroke 300ms var(--timing-function);
`,bt=l.ul`
  display: flex;
  gap: 8px;
`,wt=l.li`
  display: block;
  width: 18px;
  height: 18px;
`,yt=l.label``,Ct=l(ze)`
  display: none;
`;l.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:r})=>r?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const Tt=l.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
  border: ${({selected:r})=>r?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:r,priority:t})=>r?`2px solid var(--filter-${t}-priority-color)`:"none"};
`,Pe=({name:r,icons:t,selectedItem:e})=>{const[n,a]=C.useState(e||""),{setFieldValue:o}=Xe();return C.useEffect(()=>{a(e||"")},[e]),i.jsx(bt,{children:Me.map(s=>i.jsx(wt,{children:i.jsxs(yt,{children:[i.jsx(Ct,{type:"radio",name:r,value:s,onChange:d=>{a(d.target.value),o(r,d.target.value)}}),i.jsx(Tt,{priority:s,selected:n===s})]})},s))})},jt=({onClose:r,card:t})=>{const e=R(),{_id:n}=t,a=o=>{const s={title:o.title,text:o.text,priority:o.selectedPriority,deadline:o.selectedDate};e(Fe({cardId:n,body:s})),r()};return i.jsx(Z,{onClose:r,title:"Edit card",children:i.jsx(ne,{initialValues:{title:t.title,text:t.text,selectedPriority:t.priority,selectedDate:t.deadline},validationSchema:ae({title:Y().max(20,"Must be 20 characters or less").required("Name is required"),text:Y().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:Y().required("Priority is required"),selectedDate:Y().required("Deadline is required")}),onSubmit:a,children:i.jsxs(ee,{children:[i.jsx(te,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx($,{name:"text"}),i.jsx(V,{children:"Priority color"}),i.jsx(Pe,{name:"selectedPriority",selectedItem:t==null?void 0:t.priority}),i.jsx($,{name:"selectedPriority"}),i.jsx(V,{children:"Deadline"}),i.jsx(Se,{type:"date",name:"selectedDate"}),i.jsx($,{name:"selectedDate"}),i.jsx(re,{type:"submit",children:"Edit"})]})})})},We=r=>r.columns.columns;function N(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function O(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function I(r){O(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Te(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ot(r,t){O(2,arguments);var e=I(r).getTime(),n=N(t);return new Date(e+n)}var kt={};function oe(){return kt}function Mt(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function Dt(r){return O(1,arguments),r instanceof Date||Te(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function St(r){if(O(1,arguments),!Dt(r)&&typeof r!="number")return!1;var t=I(r);return!isNaN(Number(t))}function Pt(r,t){O(2,arguments);var e=N(t);return Ot(r,-e)}var Wt=864e5;function Ut(r){O(1,arguments);var t=I(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/Wt)+1}function J(r){O(1,arguments);var t=1,e=I(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Ue(r){O(1,arguments);var t=I(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=J(n),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var s=J(o);return t.getTime()>=a.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function _t(r){O(1,arguments);var t=Ue(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=J(e);return n}var Et=6048e5;function $t(r){O(1,arguments);var t=I(r),e=J(t).getTime()-_t(t).getTime();return Math.round(e/Et)+1}function K(r,t){var e,n,a,o,s,d,u,h;O(1,arguments);var b=oe(),v=N((e=(n=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:b.weekStartsOn)!==null&&n!==void 0?n:(u=b.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&e!==void 0?e:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=I(r),x=p.getUTCDay(),w=(x<v?7:0)+x-v;return p.setUTCDate(p.getUTCDate()-w),p.setUTCHours(0,0,0,0),p}function _e(r,t){var e,n,a,o,s,d,u,h;O(1,arguments);var b=I(r),v=b.getUTCFullYear(),p=oe(),x=N((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:p.firstWeekContainsDate)!==null&&n!==void 0?n:(u=p.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(v+1,0,x),w.setUTCHours(0,0,0,0);var M=K(w,t),k=new Date(0);k.setUTCFullYear(v,0,x),k.setUTCHours(0,0,0,0);var P=K(k,t);return b.getTime()>=M.getTime()?v+1:b.getTime()>=P.getTime()?v:v-1}function Yt(r,t){var e,n,a,o,s,d,u,h;O(1,arguments);var b=oe(),v=N((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:b.firstWeekContainsDate)!==null&&n!==void 0?n:(u=b.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1),p=_e(r,t),x=new Date(0);x.setUTCFullYear(p,0,v),x.setUTCHours(0,0,0,0);var w=K(x,t);return w}var It=6048e5;function qt(r,t){O(1,arguments);var e=I(r),n=K(e,t).getTime()-Yt(e,t).getTime();return Math.round(n/It)+1}function m(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var Lt={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return m(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):m(n+1,2)},d:function(t,e){return m(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return m(t.getUTCHours()%12||12,e.length)},H:function(t,e){return m(t.getUTCHours(),e.length)},m:function(t,e){return m(t.getUTCMinutes(),e.length)},s:function(t,e){return m(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,n-3));return m(o,e.length)}};const F=Lt;var H={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ft={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,a){var o=_e(t,a),s=o>0?o:1-o;if(e==="YY"){var d=s%100;return m(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):m(s,e.length)},R:function(t,e){var n=Ue(t);return m(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return m(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=qt(t,a);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):m(o,e.length)},I:function(t,e,n){var a=$t(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):m(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){var a=Ut(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return m(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return m(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return m(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),o=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),o;switch(a===12?o=H.noon:a===0?o=H.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),o;switch(a>=17?o=H.evening:a>=12?o=H.afternoon:a>=4?o=H.morning:o=H.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return we(s);case"XXXX":case"XX":return B(s);case"XXXXX":case"XXX":default:return B(s,":")}},x:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"x":return we(s);case"xxxx":case"xx":return B(s);case"xxxxx":case"xxx":default:return B(s,":")}},O:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+be(s,":");case"OOOO":default:return"GMT"+B(s,":")}},z:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+be(s,":");case"zzzz":default:return"GMT"+B(s,":")}},t:function(t,e,n,a){var o=a._originalDate||t,s=Math.floor(o.getTime()/1e3);return m(s,e.length)},T:function(t,e,n,a){var o=a._originalDate||t,s=o.getTime();return m(s,e.length)}};function be(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),o=n%60;if(o===0)return e+String(a);var s=t||"";return e+String(a)+s+m(o,2)}function we(r,t){if(r%60===0){var e=r>0?"-":"+";return e+m(Math.abs(r)/60,2)}return B(r,t)}function B(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),o=m(Math.floor(a/60),2),s=m(a%60,2);return n+o+e+s}const Bt=Ft;var ye=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ee=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Nt=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return ye(t,e);var s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",ye(a,e)).replace("{{time}}",Ee(o,e))},Rt={p:Ee,P:Nt};const Ht=Rt;var At=["D","DD"],Qt=["YY","YYYY"];function zt(r){return At.indexOf(r)!==-1}function Xt(r){return Qt.indexOf(r)!==-1}function Ce(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Gt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vt=function(t,e,n){var a,o=Gt[t];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};const Jt=Vt;function he(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var Kt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Zt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},er={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tr={date:he({formats:Kt,defaultWidth:"full"}),time:he({formats:Zt,defaultWidth:"full"}),dateTime:he({formats:er,defaultWidth:"full"})};const rr=tr;var nr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ar=function(t,e,n,a){return nr[t]};const or=ar;function Q(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,s=e!=null&&e.width?String(e.width):o;a=r.formattingValues[s]||r.formattingValues[o]}else{var d=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[u]||r.values[d]}var h=r.argumentCallback?r.argumentCallback(t):t;return a[h]}}var ir={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},sr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},lr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ur={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},hr=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},mr={ordinalNumber:hr,era:Q({values:ir,defaultWidth:"wide"}),quarter:Q({values:sr,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Q({values:lr,defaultWidth:"wide"}),day:Q({values:dr,defaultWidth:"wide"}),dayPeriod:Q({values:cr,defaultWidth:"wide",formattingValues:ur,defaultFormattingWidth:"wide"})};const fr=mr;function z(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],o=t.match(a);if(!o)return null;var s=o[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(d)?pr(d,function(v){return v.test(s)}):vr(d,function(v){return v.test(s)}),h;h=r.valueCallback?r.valueCallback(u):u,h=e.valueCallback?e.valueCallback(h):h;var b=t.slice(s.length);return{value:h,rest:b}}}function vr(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function pr(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function gr(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],o=t.match(r.parsePattern);if(!o)return null;var s=r.valueCallback?r.valueCallback(o[0]):o[0];s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(a.length);return{value:s,rest:d}}}var xr=/^(\d+)(th|st|nd|rd)?/i,br=/\d+/i,wr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},yr={any:[/^b/i,/^(a|c)/i]},Cr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tr={any:[/1/i,/2/i,/3/i,/4/i]},jr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Or={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Dr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Sr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pr={ordinalNumber:gr({matchPattern:xr,parsePattern:br,valueCallback:function(t){return parseInt(t,10)}}),era:z({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any"}),quarter:z({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Tr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:jr,defaultMatchWidth:"wide",parsePatterns:Or,defaultParseWidth:"any"}),day:z({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:Dr,defaultMatchWidth:"any",parsePatterns:Sr,defaultParseWidth:"any"})};const Wr=Pr;var Ur={code:"en-US",formatDistance:Jt,formatLong:rr,formatRelative:or,localize:fr,match:Wr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const _r=Ur;var Er=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$r=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Yr=/^'([^]*?)'?$/,Ir=/''/g,qr=/[a-zA-Z]/;function $e(r,t,e){var n,a,o,s,d,u,h,b,v,p,x,w,M,k,P,W,U,_;O(2,arguments);var f=String(t),g=oe(),T=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:g.locale)!==null&&n!==void 0?n:_r,E=N((o=(s=(d=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(h=e.locale)===null||h===void 0||(b=h.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&d!==void 0?d:g.firstWeekContainsDate)!==null&&s!==void 0?s:(v=g.locale)===null||v===void 0||(p=v.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=N((x=(w=(M=(k=e==null?void 0:e.weekStartsOn)!==null&&k!==void 0?k:e==null||(P=e.locale)===null||P===void 0||(W=P.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&M!==void 0?M:g.weekStartsOn)!==null&&w!==void 0?w:(U=g.locale)===null||U===void 0||(_=U.options)===null||_===void 0?void 0:_.weekStartsOn)!==null&&x!==void 0?x:0);if(!(D>=0&&D<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!T.localize)throw new RangeError("locale must contain localize property");if(!T.formatLong)throw new RangeError("locale must contain formatLong property");var S=I(r);if(!St(S))throw new RangeError("Invalid time value");var A=Mt(S),X=Pt(S,A),G={firstWeekContainsDate:E,weekStartsOn:D,locale:T,_originalDate:S},ie=f.match($r).map(function(j){var c=j[0];if(c==="p"||c==="P"){var y=Ht[c];return y(j,T.formatLong)}return j}).join("").match(Er).map(function(j){if(j==="''")return"'";var c=j[0];if(c==="'")return Lr(j);var y=Bt[c];if(y)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Xt(j)&&Ce(j,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&zt(j)&&Ce(j,t,String(r)),y(X,j,T.localize,G);if(c.match(qr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return j}).join("");return ie}function Lr(r){var t=r.match(Yr);return t?t[1].replace(Ir,"'"):r}const Fr=({card:r,columnTitle:t})=>{const e=C.useRef(null),[n,a]=C.useState(!1),[o,s]=C.useState(!1),d=R(),u=q(We),{_id:h,title:b,text:v,priority:p,deadline:x}=r,w=$e(new Date(x),"dd-MM-yyyy"),M=u.map(T=>T.title),k=M.length,P=()=>{a(!0)},W=()=>{a(!1)},U=()=>{d(Be(h))},_=()=>{s(!o)},f=T=>{T.stopPropagation(),_()},g=T=>{if(T===t)return;const D={newColumnId:u.find(S=>S.title===T)._id};d(me({cardId:h,body:D})),_()};return i.jsxs(ct,{priority:p,children:[i.jsx(ut,{children:b}),i.jsx(ht,{children:i.jsx(mt,{children:v})}),i.jsxs(ft,{children:[i.jsxs(vt,{children:[i.jsxs(pe,{children:[i.jsx(ge,{children:"Priority:"}),i.jsxs(pt,{children:[i.jsx(gt,{priority:p}),i.jsx(xe,{children:p})]})]}),i.jsxs(pe,{children:[i.jsx(ge,{children:"Deadline:"}),i.jsx(xe,{children:w})]})]}),i.jsxs(xt,{children:[i.jsx(ce,{type:"button",onClick:P,children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-pencil"})})}),k>1&&i.jsx(ce,{ref:e,type:"button",onClick:f,children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-arrow-circle-broken-right"})})}),i.jsx(ce,{type:"button",onClick:()=>{U()},children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-trash"})})}),o&&i.jsx(fe,{title:"Move to column",options:M,selectedOption:t,isOpen:o,onClose:_,handleOptionClick:g,openBtnRef:e,forCard:!0})]})]}),n&&i.jsx(jt,{onClose:W,card:r})]})},Br=r=>r.cards.cards,Ye=r=>r.cards.priority,Nr=l.button`
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
`,Rr=l.div`
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
`,Hr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Ar=({onClose:r,columnId:t,boardId:e})=>{const n=R(),a=$e(new Date,"yyyy-MM-dd"),o=s=>{const d={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:t,boardId:e};n(Ne(d)),r()};return i.jsx(Z,{onClose:r,title:"Add card",children:i.jsx(ne,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:a},validationSchema:ae({title:Y().max(20,"Must be 20 characters or less").required("Name is required"),text:Y().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:Y().required("Priority is required"),selectedDate:Y().required("Deadline is required")}),onSubmit:o,children:i.jsxs(ee,{children:[i.jsx(te,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(De,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx($,{name:"text"}),i.jsx(V,{children:"Priority color"}),i.jsx(Pe,{name:"selectedPriority"}),i.jsx($,{name:"selectedPriority"}),i.jsx(V,{children:"Deadline"}),i.jsx(Se,{type:"date",name:"selectedDate"}),i.jsx($,{name:"selectedDate"}),i.jsx(re,{type:"submit",children:"Add"})]})})})},Qr=({columnId:r})=>{const[t,e]=C.useState(!1),n=q(je),a=()=>{e(!0)},o=()=>{e(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Nr,{onClick:a,type:"button",children:[i.jsx(Rr,{children:i.jsx(Hr,{width:"28px",height:"28px",children:i.jsx("use",{href:L+"#icon-plus"})})}),"Add another card"]}),t&&i.jsx(Ar,{onClose:o,columnId:r,boardId:n})]})},zr=({column:r,columns:t,currentCard:e,setCurrentCard:n,currentColumn:a,setCurrentColumn:o})=>{const s=R(),{title:d,_id:u,order:h}=r,[b,v]=C.useState(!1),[p,x]=C.useState(!1),[w,M]=C.useState([]),k=q(Br),P=t.length,W=C.useRef(null),U=q(Ye),_=t.map(c=>c.order),f=k.find(c=>c.columnId===u);C.useEffect(()=>{M(c=>f==null?void 0:f.cards.filter(y=>U==="all priorities"?!0:y.priority===U))},[f,U]),C.useEffect(()=>{s(Oe("all priorities"))},[f]);const g=()=>{v(!0)},T=()=>{v(!1)},E=()=>{x(!p)},D=c=>{c.stopPropagation(),E()},S=()=>{s(Re(u))},A=c=>{if(c===h)return;s(ke({columnId:u,body:{newOrder:c}})),E()},X=(c,y,se)=>{c.target.style.opacity="0.5",o(y),n(se)},G=c=>{c.stopPropagation(),c.target.style.boxShadow="none"},ie=c=>{c.preventDefault(),c.target.style.boxShadow="0 4px 3px grey"},j=(c,y,se)=>{if(e){const ve=se.columnId,Ie=e.columnId;if(ve!==Ie){const qe=e._id;s(me({cardId:qe,body:{newColumnId:ve}}))}}o(null),n(null)};return i.jsxs(nt,{children:[i.jsxs(at,{children:[i.jsx(ot,{children:d}),i.jsxs(it,{children:[i.jsx(le,{type:"button",onClick:g,children:i.jsx(de,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-pencil"})})}),P>1&&i.jsx(le,{ref:W,type:"button",onClick:D,children:i.jsx(de,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-arrow-circle-broken-right"})})}),i.jsx(le,{type:"button",onClick:()=>{S()},children:i.jsx(de,{width:"16px",height:"16px",children:i.jsx("use",{href:L+"#icon-trash"})})}),p&&i.jsx(fe,{title:"Move to position",options:_,selectedOption:h,isOpen:p,onClose:E,handleOptionClick:A,openBtnRef:W})]})]}),i.jsx(st,{children:i.jsx(lt,{children:w&&w.map(c=>i.jsx("div",{draggable:!0,onDragStart:y=>{X(y,r,c)},onDragLeave:y=>{G(y)},onDragEnd:y=>{G(y)},onDragOver:y=>{ie(y)},onDrop:y=>{j(y,r,c)},children:i.jsx(Fr,{card:c,columnTitle:d})},c._id))})}),i.jsx(Qr,{columnId:u}),b&&i.jsx(dt,{columnId:u,onClose:T,columnTitle:d})]})},Xr=l.button`
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
`,Gr=l.div`
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
`,Vr=l.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Jr=({boardId:r,onClose:t})=>{const e=R(),n=a=>{const o={title:a.title,boardId:r};e(He(o)),t()};return i.jsx(Z,{onClose:t,title:"Add column",children:i.jsx(ne,{initialValues:{title:""},validationSchema:ae({title:Y().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:n,children:i.jsxs(ee,{children:[i.jsx(te,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(re,{type:"submit",children:"Add"})]})})})},Kr=()=>{const[r,t]=C.useState(!1),e=q(je),n=()=>{t(!0)},a=()=>{t(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Xr,{onClick:n,type:"button",children:[i.jsx(Gr,{children:i.jsx(Vr,{width:"28px",height:"28px",children:i.jsx("use",{href:L+"#icon-plus"})})}),"Add another column"]}),r&&i.jsx(Jr,{boardId:e,onClose:a})]})},Zr=()=>{const r=q(Ae),t=q(Qe),e=q(We),n=q(Ye),[a,o]=C.useState(!1),[s,d]=C.useState(null),[u,h]=C.useState(null),[b,v]=C.useState(null),p=C.useRef(null),x=R(),w=()=>{o(!a)},M=f=>{f.stopPropagation(),w()},k=f=>{f!==n&&(x(Oe(f)),w())},P=(f,g)=>{v(g)},W=f=>{f.stopPropagation(),f.target.style.boxShadow="none"},U=f=>{f.preventDefault(),f.target.style.boxShadow="0 4px 3px grey"},_=(f,g)=>{if(f.preventDefault(),s){const D=g._id,S=s.columnId;if(D!==S){const A=s._id;x(me({cardId:A,body:{newColumnId:D}}))}}const T=g.order,E=b.order;if(T!==E){const D={newOrder:T},S=b._id;s||x(ke({columnId:S,body:D}))}d(null)};return i.jsxs(Ge,{background:t,children:[i.jsxs(Ve,{children:[i.jsx(Je,{children:r}),i.jsxs(Ke,{children:[i.jsxs(Ze,{ref:p,onClick:M,children:[i.jsx(et,{children:i.jsx("use",{href:L+"#icon-filter"})}),"Filters"]}),a&&i.jsx(fe,{title:"Filter by priority",options:["all priorities",...Me],selectedOption:n,isOpen:a,onClose:w,handleOptionClick:k,openBtnRef:p})]})]}),i.jsx(tt,{children:i.jsxs(rt,{children:[e.map(f=>i.jsx("div",{draggable:!0,onDragStart:g=>{P(g,f)},onDragLeave:g=>{W(g)},onDragEnd:g=>{W(g)},onDragOver:g=>{U(g)},onDrop:g=>{_(g,f)},children:i.jsx(zr,{column:f,columns:e,currentCard:s,setCurrentCard:d,currentColumn:u,setCurrentColumn:h})},f._id)),i.jsx(Kr,{})]})})]})},en=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ln=()=>i.jsx(en,{children:i.jsx(Zr,{})});export{ln as default};
