import{u as g,j as e,p as P,c as x,b as c,q as _,t as N,v as W,m as V}from"./index-463f0bd0.js";import{M as w,S as B,a as k,b as I,B as M,C as H,e as G,f as J}from"./Button-4a6f9b61.js";import{n as o}from"./emotion-styled.browser.esm-d3e9ea42.js";import{s as d}from"./sprite-33c0d800.js";import{b as S,c as O,d as T}from"./index.esm-fbe775df.js";const K=o.div`
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
`,Q=o.div`
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
`,X=o.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,Y=o.button`
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
`,Z=o.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,ee=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 34px;
  padding: 36px 24px;
`,te=o.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,oe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,ie=o.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,ne=o.div`
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
`,f=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,se=({columnId:t,onClose:i,columnTitle:r})=>{const s=g(),n=a=>{const p={title:a.title};s(P({columnId:t,body:p})),i()};return e.jsx(w,{onClose:i,title:"Edit column",children:e.jsx(S,{initialValues:{title:r},validationSchema:O({title:T().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:n,children:e.jsxs(B,{children:[e.jsx(k,{type:"text",name:"title",placeholder:"Title"}),e.jsx(I,{name:"title"}),e.jsx(M,{type:"submit",children:"Edit"})]})})})},le=o.div`
  width: 334px;
  height: 154px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: var(--card-primary-text-color);
  padding: 14px 24px;
  border-left: 4px solid
    ${({priority:t})=>`var(--filter-${t}-priority-color)`};
  transition: background-color 300ms var(--timing-function);

  &:hover {
    background-color: var(--card-bg-color-hover);
  }
`,ae=o.h4`
  font-size: 14px;
  color: var(--card-title-color);
  text-transform: capitalize;
`,ce=o.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,de=o.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`,pe=o.div`
  display: flex;
  /* padding-top: 14px;
  margin-top: 14px; */
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,xe=o.ul`
  display: flex;
`,b=o.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,y=o.p`
  font-size: 12px;
  color: var(--card-secondary-text-color);
`,he=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ue=o.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
`,C=o.p`
  font-size: 12px;
  color: var(--card-primary-text-color);
`,me=({card:t})=>{const{_id:i,title:r,text:s,priority:n,deadline:a,order:p}=t;return e.jsxs(le,{priority:n,children:[e.jsx(ae,{children:r}),e.jsx(ce,{children:e.jsx(de,{children:s})}),e.jsx(pe,{children:e.jsxs(xe,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Priority:"}),e.jsxs(he,{children:[e.jsx(ue,{priority:n}),e.jsx(C,{children:n})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:"Deadline:"}),e.jsx(C,{children:a})]})]})})]})},fe=t=>t.cards.cards,ge=({column:t,columns:i})=>{const r=g(),{title:s,_id:n,order:a}=t,[p,j]=x.useState(!1),[h,$]=x.useState(!1),R=c(fe),z=i.length,v=x.useRef(null),L=i.map(l=>l.order),F=R.find(l=>l.columnId===n),U=()=>{j(!0)},q=()=>{j(!1)},u=()=>{$(!h)},A=l=>{l.stopPropagation(),u()},D=()=>{r(_(n))},E=l=>{if(l===a)return;r(N({columnId:n,body:{oldOrder:a,newOrder:l}})),u()};return e.jsxs(te,{children:[e.jsxs(oe,{children:[e.jsx(ie,{children:s}),e.jsxs(ne,{children:[e.jsx(m,{type:"button",onClick:U,children:e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:d+"#icon-pencil"})})}),z>1&&e.jsx(m,{ref:v,type:"button",onClick:A,children:e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:d+"#icon-arrow-circle-broken-right"})})}),e.jsx(m,{type:"button",onClick:()=>{D()},children:e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:d+"#icon-trash"})})}),h&&e.jsx(H,{title:"Move to position",options:L,selectedOption:a,isOpen:h,onClose:u,handleOptionClick:E,openBtnRef:v})]})]}),e.jsx(re,{children:F.cards.map(l=>e.jsx(me,{card:l},l._id))}),p&&e.jsx(se,{columnId:n,onClose:q,columnTitle:s})]})},je=o.button`
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
`,ve=o.div`
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
`,be=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,ye=({boardId:t,onClose:i})=>{const r=g(),s=n=>{const a={title:n.title,boardId:t};r(W(a)),i()};return e.jsx(w,{onClose:i,title:"Add column",children:e.jsx(S,{initialValues:{title:""},validationSchema:O({title:T().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:s,children:e.jsxs(B,{children:[e.jsx(k,{type:"text",name:"title",placeholder:"Title"}),e.jsx(I,{name:"title"}),e.jsx(M,{type:"submit",children:"Add"})]})})})},Ce=()=>{const[t,i]=x.useState(!1),r=c(V),s=()=>{i(!0)},n=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(je,{onClick:s,children:[e.jsx(ve,{children:e.jsx(be,{width:"28px",height:"28px",children:e.jsx("use",{href:d+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(ye,{boardId:r,onClose:n})]})},we=t=>t.columns.columns,Be=()=>{const t=c(G),i=c(J),r=c(we);return e.jsxs(K,{background:i,children:[e.jsxs(Q,{children:[e.jsx(X,{children:t}),e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx("use",{href:d+"#icon-filter"})}),"Filters"]})]}),e.jsxs(ee,{children:[r.map(s=>e.jsx(ge,{column:s,columns:r},s._id)),e.jsx(Ce,{})]})]})},ke=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Re=()=>e.jsx(ke,{children:e.jsx(Be,{})});export{Re as default};
