import{u as f,j as e,p as U,c as d,q,t as A,v as E,b as p,m as D}from"./index-1f132590.js";import{M as v,S as y,a as C,b as w,B,C as N,e as P,f as V}from"./Button-5fa041c4.js";import{n as o}from"./emotion-styled.browser.esm-5791e782.js";import{s as c}from"./sprite-33c0d800.js";import{b as M,c as S,d as O}from"./index.esm-528c2db0.js";const W=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({background:t})=>t==null?void 0:t.mobileURL});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({background:t})=>t==null?void 0:t.mobileRetinaURL});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${({background:t})=>t==null?void 0:t.tabletURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:t})=>t==null?void 0:t.tabletRetinaURL});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${({background:t})=>t==null?void 0:t.desktopURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:t})=>t==null?void 0:t.desktopRetainaURL});
    }
  }
`,_=o.div`
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
`,H=o.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,G=o.button`
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
`,J=o.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,K=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 34px;
  padding: 36px 24px;

  background-color: #00808067;
`,Q=o.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;

  background-color: #ffa60078;
`,X=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,Y=o.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,Z=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,m=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,g=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,ee=o.div`
  background-color: red;
  height: 50px;
`,te=({columnId:t,onClose:n,columnTitle:i})=>{const s=f(),r=l=>{const h={title:l.title};s(U({columnId:t,body:h})),n()};return e.jsx(v,{onClose:n,title:"Edit column",children:e.jsx(M,{initialValues:{title:i},validationSchema:S({title:O().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:r,children:e.jsxs(y,{children:[e.jsx(C,{type:"text",name:"title",placeholder:"Title"}),e.jsx(w,{name:"title"}),e.jsx(B,{type:"submit",children:"Edit"})]})})})},oe=({column:t,columns:n})=>{const i=f(),{title:s,_id:r,order:l}=t,[h,j]=d.useState(!1),[x,k]=d.useState(!1),R=n.length,b=d.useRef(null),T=n.map(a=>a.order),I=()=>{j(!0)},L=()=>{j(!1)},u=()=>{k(!x)},$=a=>{a.stopPropagation(),u()},z=()=>{i(q(r))},F=a=>{if(a===l)return;i(A({columnId:r,body:{oldOrder:l,newOrder:a}})),u()};return e.jsxs(Q,{children:[e.jsxs(X,{children:[e.jsx(Y,{children:s}),e.jsxs("p",{children:["order ",l]}),e.jsxs(Z,{children:[e.jsx(m,{type:"button",onClick:I,children:e.jsx(g,{width:"16px",height:"16px",children:e.jsx("use",{href:c+"#icon-pencil"})})}),R>1&&e.jsx(m,{ref:b,type:"button",onClick:$,children:e.jsx(g,{width:"16px",height:"16px",children:e.jsx("use",{href:c+"#icon-arrow-circle-broken-right"})})}),e.jsx(m,{type:"button",onClick:()=>{z()},children:e.jsx(g,{width:"16px",height:"16px",children:e.jsx("use",{href:c+"#icon-trash"})})}),x&&e.jsx(N,{title:"Move to position",options:T,selectedOption:l,isOpen:x,onClose:u,handleOptionClick:F,openBtnRef:b})]})]}),e.jsx(ee,{}),h&&e.jsx(te,{columnId:r,onClose:L,columnTitle:s})]})},ne=o.button`
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
`,ie=o.div`
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
`,se=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,re=({boardId:t,onClose:n})=>{const i=f(),s=r=>{const l={title:r.title,boardId:t};i(E(l)),n()};return e.jsx(v,{onClose:n,title:"Add column",children:e.jsx(M,{initialValues:{title:""},validationSchema:S({title:O().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(C,{type:"text",name:"title",placeholder:"Title"}),e.jsx(w,{name:"title"}),e.jsx(B,{type:"submit",children:"Add"})]})})})},le=()=>{const[t,n]=d.useState(!1),i=p(D),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(ne,{onClick:s,children:[e.jsx(ie,{children:e.jsx(se,{width:"28px",height:"28px",children:e.jsx("use",{href:c+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(re,{boardId:i,onClose:r})]})},ae=t=>t.columns.columns,ce=()=>{const t=p(P),n=p(V),i=p(ae);return e.jsxs(W,{background:n,children:[e.jsxs(_,{children:[e.jsx(H,{children:t}),e.jsxs(G,{children:[e.jsx(J,{children:e.jsx("use",{href:c+"#icon-filter"})}),"Filters"]})]}),e.jsxs(K,{children:[i.map(s=>e.jsx(oe,{column:s,columns:i},s._id)),e.jsx(le,{})]})]})},de=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,fe=()=>e.jsx(de,{children:e.jsx(ce,{})});export{fe as default};
