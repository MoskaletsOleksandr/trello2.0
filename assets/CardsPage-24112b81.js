import{u as z,j as i,p as Fe,c as w,q as Be,_ as Oe,b as L,t as Ne,v as pe,w as je,x as Re,y as ke,z as He,m as De,A as Ae}from"./index-66f4a45c.js";import{M as re,S as ne,a as ae,b as $,c as oe,p as Me,f as Se,g as Z,h as Pe,C as ve,j as Qe,k as ze}from"./Button-27cc9a8e.js";import{n as l}from"./emotion-styled.browser.esm-157b1a13.js";import{s as F}from"./sprite-33c0d800.js";import{b as ie,c as se,d as Y,a as Xe,u as Ge}from"./index.esm-3266d17e.js";const Ve=l.div`
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
  gap: 18px;
`,at=l.div`
  display: flex;
  flex-direction: column;
`,ot=l.div`
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
`,st=l.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,lt=l.div`
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
`,dt=l.div`
  overflow-y: hidden;
`,ct=l.div`
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
`,ut=l.div``,ht=({columnId:r,onClose:t,columnTitle:e})=>{const n=z(),a=o=>{const s={title:o.title};n(Fe({columnId:r,body:s})),t()};return i.jsx(re,{onClose:t,title:"Edit column",children:i.jsx(ie,{initialValues:{title:e},validationSchema:se({title:Y().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:a,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(oe,{type:"submit",children:"Edit"})]})})})},mt=l.div`
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

  /* &::before {
    content: '';
    width: 334px;
    height: 154px;
    background-color: red;
    position: absolute;
    top: -10px;
    left: -4px;
    border-radius: 8px;
  } */
`,ft=l.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,pt=l.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,vt=l.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,gt=l.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,xt=l.ul`
  display: flex;
  gap: 14px;
`,ge=l.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,xe=l.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,bt=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,wt=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
`,be=l.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,yt=l.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: auto;
`,he=l.button`
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
`,me=l.svg`
  stroke: var(--card-icon-color);
  fill: none;
  transition: stroke 300ms var(--timing-function);
`,Ct=l.ul`
  display: flex;
  gap: 8px;
`,Tt=l.li`
  display: block;
  width: 18px;
  height: 18px;
`,Ot=l.label`
  cursor: pointer;
`,jt=l(Xe)`
  display: none;
`;l.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:r})=>r?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const kt=l.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:r})=>`var(--filter-${r}-priority-color)`};
  border: ${({selected:r})=>r?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:r,priority:t})=>r?`2px solid var(--filter-${t}-priority-color)`:"none"};
`,We=({name:r,icons:t,selectedItem:e})=>{const[n,a]=w.useState(e||""),{setFieldValue:o}=Ge();return w.useEffect(()=>{a(e||"")},[e]),i.jsx(Ct,{children:Me.map(s=>i.jsx(Tt,{children:i.jsxs(Ot,{children:[i.jsx(jt,{type:"radio",name:r,value:s,onChange:d=>{a(d.target.value),o(r,d.target.value)}}),i.jsx(kt,{priority:s,selected:n===s})]})},s))})},Dt=({onClose:r,card:t})=>{const e=z(),{_id:n}=t,a=o=>{const s={title:o.title,text:o.text,priority:o.selectedPriority,deadline:o.selectedDate};e(Be({cardId:n,body:s})),r()};return i.jsx(re,{onClose:r,title:"Edit card",children:i.jsx(ie,{initialValues:{title:t.title,text:t.text,selectedPriority:t.priority,selectedDate:t.deadline},validationSchema:se({title:Y().max(20,"Must be 20 characters or less").required("Name is required"),text:Y().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:Y().required("Priority is required"),selectedDate:Y().required("Deadline is required")}),onSubmit:a,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(Se,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx($,{name:"text"}),i.jsx(Z,{children:"Priority color"}),i.jsx(We,{name:"selectedPriority",selectedItem:t==null?void 0:t.priority}),i.jsx($,{name:"selectedPriority"}),i.jsx(Z,{children:"Deadline"}),i.jsx(Pe,{type:"date",name:"selectedDate"}),i.jsx($,{name:"selectedDate"}),i.jsx(oe,{type:"submit",children:"Edit"})]})})})},Ue=r=>r.columns.columns;function Q(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function D(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function I(r){D(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Oe(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Mt(r,t){D(2,arguments);var e=I(r).getTime(),n=Q(t);return new Date(e+n)}var St={};function le(){return St}function Pt(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function Wt(r){return D(1,arguments),r instanceof Date||Oe(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Ut(r){if(D(1,arguments),!Wt(r)&&typeof r!="number")return!1;var t=I(r);return!isNaN(Number(t))}function _t(r,t){D(2,arguments);var e=Q(t);return Mt(r,-e)}var Et=864e5;function $t(r){D(1,arguments);var t=I(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/Et)+1}function ee(r){D(1,arguments);var t=1,e=I(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function _e(r){D(1,arguments);var t=I(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=ee(n),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var s=ee(o);return t.getTime()>=a.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function Yt(r){D(1,arguments);var t=_e(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=ee(e);return n}var It=6048e5;function qt(r){D(1,arguments);var t=I(r),e=ee(t).getTime()-Yt(t).getTime();return Math.round(e/It)+1}function te(r,t){var e,n,a,o,s,d,h,c;D(1,arguments);var p=le(),f=Q((e=(n=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:p.weekStartsOn)!==null&&n!==void 0?n:(h=p.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=I(r),g=v.getUTCDay(),y=(g<f?7:0)+g-f;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function Ee(r,t){var e,n,a,o,s,d,h,c;D(1,arguments);var p=I(r),f=p.getUTCFullYear(),v=le(),g=Q((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&n!==void 0?n:(h=v.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,g),y.setUTCHours(0,0,0,0);var O=te(y,t),j=new Date(0);j.setUTCFullYear(f,0,g),j.setUTCHours(0,0,0,0);var W=te(j,t);return p.getTime()>=O.getTime()?f+1:p.getTime()>=W.getTime()?f:f-1}function Lt(r,t){var e,n,a,o,s,d,h,c;D(1,arguments);var p=le(),f=Q((e=(n=(a=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(d=s.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:p.firstWeekContainsDate)!==null&&n!==void 0?n:(h=p.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=Ee(r,t),g=new Date(0);g.setUTCFullYear(v,0,f),g.setUTCHours(0,0,0,0);var y=te(g,t);return y}var Ft=6048e5;function Bt(r,t){D(1,arguments);var e=I(r),n=te(e,t).getTime()-Lt(e,t).getTime();return Math.round(n/Ft)+1}function m(r,t){for(var e=r<0?"-":"",n=Math.abs(r).toString();n.length<t;)n="0"+n;return e+n}var Nt={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return m(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):m(n+1,2)},d:function(t,e){return m(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return m(t.getUTCHours()%12||12,e.length)},H:function(t,e){return m(t.getUTCHours(),e.length)},m:function(t,e){return m(t.getUTCMinutes(),e.length)},s:function(t,e){return m(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),o=Math.floor(a*Math.pow(10,n-3));return m(o,e.length)}};const B=Nt;var G={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Rt={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return B.y(t,e)},Y:function(t,e,n,a){var o=Ee(t,a),s=o>0?o:1-o;if(e==="YY"){var d=s%100;return m(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):m(s,e.length)},R:function(t,e){var n=_e(t);return m(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return m(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return B.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=Bt(t,a);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):m(o,e.length)},I:function(t,e,n){var a=qt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):m(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B.d(t,e)},D:function(t,e,n){var a=$t(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return m(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var o=t.getUTCDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return m(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return m(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),o=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),o;switch(a===12?o=G.noon:a===0?o=G.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),o;switch(a>=17?o=G.evening:a>=12?o=G.afternoon:a>=4?o=G.morning:o=G.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return B.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):B.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):B.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):B.s(t,e)},S:function(t,e){return B.S(t,e)},X:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return ye(s);case"XXXX":case"XX":return A(s);case"XXXXX":case"XXX":default:return A(s,":")}},x:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"x":return ye(s);case"xxxx":case"xx":return A(s);case"xxxxx":case"xxx":default:return A(s,":")}},O:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+we(s,":");case"OOOO":default:return"GMT"+A(s,":")}},z:function(t,e,n,a){var o=a._originalDate||t,s=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+we(s,":");case"zzzz":default:return"GMT"+A(s,":")}},t:function(t,e,n,a){var o=a._originalDate||t,s=Math.floor(o.getTime()/1e3);return m(s,e.length)},T:function(t,e,n,a){var o=a._originalDate||t,s=o.getTime();return m(s,e.length)}};function we(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),o=n%60;if(o===0)return e+String(a);var s=t||"";return e+String(a)+s+m(o,2)}function ye(r,t){if(r%60===0){var e=r>0?"-":"+";return e+m(Math.abs(r)/60,2)}return A(r,t)}function A(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),o=m(Math.floor(a/60),2),s=m(a%60,2);return n+o+e+s}const Ht=Rt;var Ce=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},$e=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},At=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return Ce(t,e);var s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Ce(a,e)).replace("{{time}}",$e(o,e))},Qt={p:$e,P:At};const zt=Qt;var Xt=["D","DD"],Gt=["YY","YYYY"];function Vt(r){return Xt.indexOf(r)!==-1}function Jt(r){return Gt.indexOf(r)!==-1}function Te(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Kt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zt=function(t,e,n){var a,o=Kt[t];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};const er=Zt;function fe(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var tr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},rr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ar={date:fe({formats:tr,defaultWidth:"full"}),time:fe({formats:rr,defaultWidth:"full"}),dateTime:fe({formats:nr,defaultWidth:"full"})};const or=ar;var ir={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},sr=function(t,e,n,a){return ir[t]};const lr=sr;function V(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,s=e!=null&&e.width?String(e.width):o;a=r.formattingValues[s]||r.formattingValues[o]}else{var d=r.defaultWidth,h=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[h]||r.values[d]}var c=r.argumentCallback?r.argumentCallback(t):t;return a[c]}}var dr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ur={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pr=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},vr={ordinalNumber:pr,era:V({values:dr,defaultWidth:"wide"}),quarter:V({values:cr,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:ur,defaultWidth:"wide"}),day:V({values:hr,defaultWidth:"wide"}),dayPeriod:V({values:mr,defaultWidth:"wide",formattingValues:fr,defaultFormattingWidth:"wide"})};const gr=vr;function J(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],o=t.match(a);if(!o)return null;var s=o[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],h=Array.isArray(d)?br(d,function(f){return f.test(s)}):xr(d,function(f){return f.test(s)}),c;c=r.valueCallback?r.valueCallback(h):h,c=e.valueCallback?e.valueCallback(c):c;var p=t.slice(s.length);return{value:c,rest:p}}}function xr(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function br(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function wr(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],o=t.match(r.parsePattern);if(!o)return null;var s=r.valueCallback?r.valueCallback(o[0]):o[0];s=e.valueCallback?e.valueCallback(s):s;var d=t.slice(a.length);return{value:s,rest:d}}}var yr=/^(\d+)(th|st|nd|rd)?/i,Cr=/\d+/i,Tr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Or={any:[/^b/i,/^(a|c)/i]},jr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},kr={any:[/1/i,/2/i,/3/i,/4/i]},Dr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Sr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ur={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_r={ordinalNumber:wr({matchPattern:yr,parsePattern:Cr,valueCallback:function(t){return parseInt(t,10)}}),era:J({matchPatterns:Tr,defaultMatchWidth:"wide",parsePatterns:Or,defaultParseWidth:"any"}),quarter:J({matchPatterns:jr,defaultMatchWidth:"wide",parsePatterns:kr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:Dr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),day:J({matchPatterns:Sr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:Wr,defaultMatchWidth:"any",parsePatterns:Ur,defaultParseWidth:"any"})};const Er=_r;var $r={code:"en-US",formatDistance:er,formatLong:or,formatRelative:lr,localize:gr,match:Er,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Yr=$r;var Ir=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lr=/^'([^]*?)'?$/,Fr=/''/g,Br=/[a-zA-Z]/;function Ye(r,t,e){var n,a,o,s,d,h,c,p,f,v,g,y,O,j,W,q,U,M;D(2,arguments);var N=String(t),k=le(),u=(n=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:k.locale)!==null&&n!==void 0?n:Yr,x=Q((o=(s=(d=(h=e==null?void 0:e.firstWeekContainsDate)!==null&&h!==void 0?h:e==null||(c=e.locale)===null||c===void 0||(p=c.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&d!==void 0?d:k.firstWeekContainsDate)!==null&&s!==void 0?s:(f=k.locale)===null||f===void 0||(v=f.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=Q((g=(y=(O=(j=e==null?void 0:e.weekStartsOn)!==null&&j!==void 0?j:e==null||(W=e.locale)===null||W===void 0||(q=W.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&O!==void 0?O:k.weekStartsOn)!==null&&y!==void 0?y:(U=k.locale)===null||U===void 0||(M=U.options)===null||M===void 0?void 0:M.weekStartsOn)!==null&&g!==void 0?g:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var _=I(r);if(!Ut(_))throw new RangeError("Invalid time value");var R=Pt(_),H=_t(_,R),S={firstWeekContainsDate:x,weekStartsOn:P,locale:u,_originalDate:_},K=N.match(qr).map(function(T){var E=T[0];if(E==="p"||E==="P"){var X=zt[E];return X(T,u.formatLong)}return T}).join("").match(Ir).map(function(T){if(T==="''")return"'";var E=T[0];if(E==="'")return Nr(T);var X=Ht[E];if(X)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Jt(T)&&Te(T,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Vt(T)&&Te(T,t,String(r)),X(H,T,u.localize,S);if(E.match(Br))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return T}).join("");return K}function Nr(r){var t=r.match(Lr);return t?t[1].replace(Fr,"'"):r}const Rr=({card:r,columnTitle:t})=>{const e=w.useRef(null),[n,a]=w.useState(!1),[o,s]=w.useState(!1),d=z(),h=L(Ue),{_id:c,title:p,text:f,priority:v,deadline:g}=r,y=Ye(new Date(g),"dd-MM-yyyy"),O=h.map(u=>u.title),j=O.length,W=()=>{a(!0)},q=()=>{a(!1)},U=()=>{d(Ne(c))},M=()=>{s(!o)},N=u=>{u.stopPropagation(),M()},k=u=>{if(u===t)return;const P={newColumnId:h.find(_=>_.title===u)._id,newOrderInColumn:"last"};d(pe({cardId:c,body:P})),M()};return i.jsxs(mt,{priority:v,children:[i.jsx(ft,{children:p}),i.jsx(pt,{children:i.jsx(vt,{children:f})}),i.jsxs(gt,{children:[i.jsxs(xt,{children:[i.jsxs(ge,{children:[i.jsx(xe,{children:"Priority:"}),i.jsxs(bt,{children:[i.jsx(wt,{priority:v}),i.jsx(be,{children:v})]})]}),i.jsxs(ge,{children:[i.jsx(xe,{children:"Deadline:"}),i.jsx(be,{children:y})]})]}),i.jsxs(yt,{children:[i.jsx(he,{type:"button",onClick:W,children:i.jsx(me,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-pencil"})})}),j>1&&i.jsx(he,{ref:e,type:"button",onClick:N,children:i.jsx(me,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-arrow-circle-broken-right"})})}),i.jsx(he,{type:"button",onClick:()=>{U()},children:i.jsx(me,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-trash"})})}),o&&i.jsx(ve,{title:"Move to column",options:O,selectedOption:t,isOpen:o,onClose:M,handleOptionClick:k,openBtnRef:e,forCard:!0})]})]}),n&&i.jsx(Dt,{onClose:q,card:r})]})},Hr=r=>r.cards.cards,Ie=r=>r.cards.priority,Ar=({column:r,columns:t,currentCard:e,setCurrentCard:n,currentColumn:a,setCurrentColumn:o,setIsCardOverAnotherCard:s})=>{const d=z(),{title:h,_id:c,order:p}=r,[f,v]=w.useState(!1),[g,y]=w.useState(!1),[O,j]=w.useState([]),W=L(Hr),q=t.length,U=w.useRef(null),M=L(Ie),N=t.map(b=>b.order),k=W.find(b=>b.columnId===c);w.useEffect(()=>{j(b=>k==null?void 0:k.cards.filter(C=>M==="all priorities"?!0:C.priority===M))},[k,M]),w.useEffect(()=>{d(je("all priorities"))},[k]);const u=()=>{v(!0)},x=()=>{v(!1)},P=()=>{y(!g)},_=b=>{b.stopPropagation(),P()},R=()=>{d(Re(c))},H=b=>{if(b===p)return;d(ke({columnId:c,body:{newOrder:b}})),P()};let S;const K=(b,C,de)=>{o(C),n(de)},T=b=>{S=b.currentTarget.closest(".DndWrapper"),S.style.marginTop="0",S.style.transform="none",s(!1)},E=b=>{b.preventDefault(),S=b.currentTarget.closest(".DndWrapper"),S.style.transition="transform 0.5s ease, margin-top 0.5s ease",S.style.marginTop="10px",S.style.transform="translateY(6px)",e&&s(!0)},X=(b,C)=>{if(S.style.marginTop="0",S.style.transform="none",e){const de=C.columnId,qe=C.order,Le=e._id;d(pe({cardId:Le,body:{newColumnId:de,newOrderInColumn:qe}}))}o(null),n(null)};return i.jsxs(ot,{children:[i.jsxs(it,{children:[i.jsx(st,{children:h}),i.jsxs(lt,{children:[i.jsx(ce,{type:"button",onClick:u,children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-pencil"})})}),q>1&&i.jsx(ce,{ref:U,type:"button",onClick:_,children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-arrow-circle-broken-right"})})}),i.jsx(ce,{type:"button",onClick:()=>{R()},children:i.jsx(ue,{width:"16px",height:"16px",children:i.jsx("use",{href:F+"#icon-trash"})})}),g&&i.jsx(ve,{title:"Move to position",options:N,selectedOption:p,isOpen:g,onClose:P,handleOptionClick:H,openBtnRef:U})]})]}),i.jsx(dt,{children:i.jsx(ct,{children:O&&O.map(b=>i.jsx(ut,{className:"DndWrapper",draggable:!0,onDragStart:C=>{K(C,r,b)},onDragLeave:C=>{T(C)},onDragEnd:C=>{T(C)},onDragOver:C=>{E(C)},onDrop:C=>{X(C,b)},children:i.jsx(Rr,{card:b,columnTitle:h})},b._id))})}),f&&i.jsx(ht,{columnId:c,onClose:x,columnTitle:h})]})},Qr=l.button`
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
`,zr=l.div`
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
`,Gr=({boardId:r,onClose:t})=>{const e=z(),n=a=>{const o={title:a.title,boardId:r};e(He(o)),t()};return i.jsx(re,{onClose:t,title:"Add column",children:i.jsx(ie,{initialValues:{title:""},validationSchema:se({title:Y().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:n,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(oe,{type:"submit",children:"Add"})]})})})},Vr=()=>{const[r,t]=w.useState(!1),e=L(De),n=()=>{t(!0)},a=()=>{t(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Qr,{onClick:n,type:"button",children:[i.jsx(zr,{children:i.jsx(Xr,{width:"28px",height:"28px",children:i.jsx("use",{href:F+"#icon-plus"})})}),"Add another column"]}),r&&i.jsx(Gr,{boardId:e,onClose:a})]})},Jr=l.button`
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
`,en=({onClose:r,columnId:t,boardId:e})=>{const n=z(),a=Ye(new Date,"yyyy-MM-dd"),o=s=>{const d={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:t,boardId:e};n(Ae(d)),r()};return i.jsx(re,{onClose:r,title:"Add card",children:i.jsx(ie,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:a},validationSchema:se({title:Y().max(20,"Must be 20 characters or less").required("Name is required"),text:Y().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:Y().required("Priority is required"),selectedDate:Y().required("Deadline is required")}),onSubmit:o,children:i.jsxs(ne,{children:[i.jsx(ae,{type:"text",name:"title",placeholder:"Title"}),i.jsx($,{name:"title"}),i.jsx(Se,{as:"textarea",name:"text",placeholder:"Description"}),i.jsx($,{name:"text"}),i.jsx(Z,{children:"Priority color"}),i.jsx(We,{name:"selectedPriority"}),i.jsx($,{name:"selectedPriority"}),i.jsx(Z,{children:"Deadline"}),i.jsx(Pe,{type:"date",name:"selectedDate"}),i.jsx($,{name:"selectedDate"}),i.jsx(oe,{type:"submit",children:"Add"})]})})})},tn=({columnId:r})=>{const[t,e]=w.useState(!1),n=L(De),a=()=>{e(!0)},o=()=>{e(!1)};return i.jsxs(i.Fragment,{children:[i.jsxs(Jr,{onClick:a,type:"button",children:[i.jsx(Kr,{children:i.jsx(Zr,{width:"28px",height:"28px",children:i.jsx("use",{href:F+"#icon-plus"})})}),"Add another card"]}),t&&i.jsx(en,{onClose:o,columnId:r,boardId:n})]})},rn=()=>{const r=L(Qe),t=L(ze),e=L(Ue),n=L(Ie),[a,o]=w.useState(!1),[s,d]=w.useState(null),[h,c]=w.useState(null),[p,f]=w.useState(null),[v,g]=w.useState(!1),y=w.useRef(null),O=z(),j=()=>{o(!a)},W=u=>{u.stopPropagation(),j()},q=u=>{u!==n&&(O(je(u)),j())},U=(u,x)=>{f(x)},M=u=>{u.stopPropagation()},N=u=>{u.preventDefault()},k=(u,x)=>{if(u.preventDefault(),s&&!v){const R=x._id,H="last",S=s._id;O(pe({cardId:S,body:{newColumnId:R,newOrderInColumn:H}}))}const P=x.order,_=p.order;if(P!==_){const R={newOrder:P},H=p._id;s||O(ke({columnId:H,body:R}))}d(null)};return i.jsxs(Ve,{background:t,children:[i.jsxs(Je,{children:[i.jsx(Ke,{children:r}),i.jsxs(Ze,{children:[i.jsxs(et,{ref:y,onClick:W,children:[i.jsx(tt,{children:i.jsx("use",{href:F+"#icon-filter"})}),"Filters"]}),a&&i.jsx(ve,{title:"Filter by priority",options:["all priorities",...Me],selectedOption:n,isOpen:a,onClose:j,handleOptionClick:q,openBtnRef:y})]})]}),i.jsx(rt,{children:i.jsxs(nt,{children:[e.map(u=>i.jsxs(at,{draggable:!0,onDragStart:x=>{U(x,u)},onDragLeave:x=>{M(x)},onDragEnd:x=>{M(x)},onDragOver:x=>{N(x)},onDrop:x=>{k(x,u)},children:[i.jsx(Ar,{column:u,columns:e,currentCard:s,setCurrentCard:d,currentColumn:h,setCurrentColumn:c,setIsCardOverAnotherCard:g}),i.jsx(tn,{columnId:u._id})]},u._id)),i.jsx(Vr,{})]})})]})},nn=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,un=()=>i.jsx(nn,{children:i.jsx(rn,{})});export{un as default};
