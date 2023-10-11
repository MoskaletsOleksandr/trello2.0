import{u as p,j as e,p as M,c as u,q as S,t as k,b as a,m as T}from"./index-e7e5bf2a.js";import{M as m,S as g,a as f,b as j,B as b,e as $,f as R}from"./Button-1562105f.js";import{n}from"./emotion-styled.browser.esm-8d191a60.js";import{s as c}from"./sprite-33c0d800.js";import{b as v,c as y,d as C}from"./index.esm-8be93a92.js";const I=n.div`
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
`,z=n.div`
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
`,F=n.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,U=n.button`
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
`,L=n.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,q=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 34px;
  padding: 36px 24px;

  background-color: #00808067;
`,E=n.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;

  background-color: #ffa60078;
`,A=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,D=n.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,O=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,x=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,h=n.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,N=n.div`
  background-color: red;
  height: 50px;
`,V=({columnId:t,onClose:o,columnTitle:r})=>{const i=p(),s=l=>{const d={title:l.title,columnId:t};i(M(d)),o()};return e.jsx(m,{onClose:o,title:"Edit column",children:e.jsx(v,{initialValues:{title:r},validationSchema:y({title:C().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:s,children:e.jsxs(g,{children:[e.jsx(f,{type:"text",name:"title",placeholder:"Title"}),e.jsx(j,{name:"title"}),e.jsx(b,{type:"submit",children:"Edit"})]})})})},W=({column:t})=>{const o=p(),{title:r,_id:i}=t,[s,l]=u.useState(!1),d=()=>{l(!0)},w=()=>{l(!1)},B=()=>{o(S(i))};return e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(D,{children:r}),e.jsxs(O,{children:[e.jsx(x,{type:"button",onClick:d,children:e.jsx(h,{width:"16px",height:"16px",children:e.jsx("use",{href:c+"#icon-pencil"})})}),e.jsx(x,{type:"button",onClick:()=>{B()},children:e.jsx(h,{width:"16px",height:"16px",children:e.jsx("use",{href:c+"#icon-trash"})})})]})]}),e.jsx(N,{}),s&&e.jsx(V,{columnId:i,onClose:w,columnTitle:r})]})},_=n.button`
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
`,H=n.div`
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
`,P=n.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,G=({boardId:t,onClose:o})=>{const r=p(),i=s=>{const l={title:s.title,boardId:t};r(k(l)),o()};return e.jsx(m,{onClose:o,title:"Add column",children:e.jsx(v,{initialValues:{title:""},validationSchema:y({title:C().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:i,children:e.jsxs(g,{children:[e.jsx(f,{type:"text",name:"title",placeholder:"Title"}),e.jsx(j,{name:"title"}),e.jsx(b,{type:"submit",children:"Add"})]})})})},J=()=>{const[t,o]=u.useState(!1),r=a(T),i=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(_,{onClick:i,children:[e.jsx(H,{children:e.jsx(P,{width:"28px",height:"28px",children:e.jsx("use",{href:c+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(G,{boardId:r,onClose:s})]})},K=t=>t.columns.columns,Q=()=>{const t=a($),o=a(R),r=a(K);return e.jsxs(I,{background:o,children:[e.jsxs(z,{children:[e.jsx(F,{children:t}),e.jsxs(U,{children:[e.jsx(L,{children:e.jsx("use",{href:c+"#icon-filter"})}),"Filters"]})]}),e.jsxs(q,{children:[r.map(i=>e.jsx(W,{column:i},i._id)),e.jsx(J,{})]})]})},X=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,oe=()=>e.jsx(X,{children:e.jsx(Q,{})});export{oe as default};
