import{b as g,s as G,c as p,u as b,j as e,d as J,e as K,f as Q,g as M,h as O,i as Y,k as Z,m as ee,n as te,o as oe,O as se}from"./index-e7e5bf2a.js";import{n as t}from"./emotion-styled.browser.esm-8d191a60.js";import{s as h}from"./sprite-33c0d800.js";import{a as z,u as E,b as q,c as F,d as m}from"./index.esm-8be93a92.js";import{s as ne,M as _,S as R,a as A,b as f,R as v,B as H,c as y,d as re}from"./Button-1562105f.js";import{L as ie}from"./Logo-2b3ac7b6.js";const ce=t.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);
`,le=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ae=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,de=t.div`
  display: flex;
  align-items: center;
`,pe=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,xe=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,he=t.div`
  position: relative;
`,ue=t.ul`
  position: absolute;
  display: ${({open:o})=>o?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,ge=t.li`
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({selected:o})=>o?"var(--header-theme-select-text-color-hover)":"var(--header-theme-select-text-color)"};

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }
`,me=({toggleSidebar:o})=>{const r=["light","dark","violet"],s=g(G),[n,a]=p.useState(!1),c=p.useRef(null),i=p.useRef(null),d=b();p.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(s)},[s]),p.useEffect(()=>{const x=j=>{n&&c.current&&!c.current.contains(j.target)&&i.current!==j.target&&u()};return n?document.addEventListener("click",x):document.removeEventListener("click",x),()=>{document.removeEventListener("click",x)}},[n]);const u=()=>{a(!n)},k=x=>{d(J({theme:x})),u()};return e.jsxs(ce,{children:[e.jsx(le,{onClick:()=>{o()},children:e.jsx(ae,{children:e.jsx("use",{href:`${h}#icon-menu`})})}),e.jsxs(de,{children:[e.jsxs(pe,{ref:i,onClick:()=>{u()},children:["Theme",e.jsx(xe,{children:e.jsx("use",{href:`${h}#icon-chevron-down`})})]}),e.jsx(he,{ref:c,children:e.jsx(ue,{open:n,children:r.map(x=>e.jsx(ge,{onClick:()=>k(x),selected:s===x,children:x},x))})})]})]})},fe=t.ul`
  display: flex;
  gap: 8px;
`,be=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,je=t.label``,ve=t(z)`
  display: none;
`,ke=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,N=({name:o,icons:r,selectedItem:s})=>{const[n,a]=p.useState(s||""),{setFieldValue:c}=E();return p.useEffect(()=>{a(s||"")},[s]),e.jsx(fe,{children:r.map(i=>e.jsx(be,{children:e.jsxs(je,{children:[e.jsx(ve,{type:"radio",name:o,value:i,onChange:d=>{a(d.target.value),c(o,d.target.value)}}),e.jsx(ke,{selected:n===i,children:e.jsx("use",{href:h+`#${i}`})})]})},i))})},ye=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,w=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,B=t.label``,I=t(z)`
  display: none;
`,C=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:o})=>o?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,we=t.img`
  width: 28px;
  height: 28px;
`,Be=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,D=({name:o,selectedItem:r})=>{const[s,n]=p.useState(r||""),a=g(ne),{setFieldValue:c}=E();return p.useEffect(()=>{n(r||"")},[r]),e.jsxs(ye,{children:[e.jsx(w,{children:e.jsxs(B,{children:[e.jsx(I,{type:"radio",name:o,value:"null",onChange:i=>{n(i.target.value),c(o,i.target.value)}}),e.jsx(C,{selected:s==="null",children:e.jsx(Be,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:h+"#null-background"})})})]})}),a.map(i=>e.jsx(w,{children:e.jsxs(B,{children:[e.jsx(I,{type:"radio",name:o,value:i._id,onChange:d=>{n(d.target.value),c(o,d.target.value)}}),e.jsx(C,{selected:s===i._id,children:e.jsx(we,{src:i.previewURL})})]})},i._id))]})},V=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],W=({onClose:o})=>{const r=b(),s=n=>{const a={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};r(K(a)),o()};return e.jsx(_,{onClose:o,title:"New board",children:e.jsx(q,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:F({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:s,children:e.jsxs(R,{children:[e.jsx(A,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(v,{children:"Icons"}),e.jsx(N,{name:"selectedIcon",icons:V}),e.jsx(f,{name:"selectedIcon"}),e.jsx(v,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(H,{type:"submit",children:"Create"})]})})})},Ie=t.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,Ce=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,$e=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: var(--sidebar-button-plus-bg-color);
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    scale: 1.05;
    background-color: var(--modal-btn-bg-color-hover);
  }
`,Se=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Te=()=>{const[o,r]=p.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsx(Ce,{children:"Create a new board"}),e.jsx($e,{type:"button",onClick:s,children:e.jsx(Se,{width:"20px",height:"20px",children:e.jsx("use",{href:h+"#icon-plus"})})})]}),o&&e.jsx(W,{onClose:n})]})},Le=({boardId:o,onClose:r})=>{var c,i;const s=g(y),n=b(),a=d=>{const u={title:d.title,icon:d.selectedIcon,backgroundId:d.selectedBg};n(Q({boardId:o,body:u})),r()};return e.jsx(_,{onClose:r,title:"Edit board",children:e.jsx(q,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:(c=s==null?void 0:s.background)==null?void 0:c._id},validationSchema:F({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:a,children:e.jsxs(R,{children:[e.jsx(A,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(v,{children:"Icons"}),e.jsx(N,{name:"selectedIcon",icons:V,selectedItem:s==null?void 0:s.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(v,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg",selectedItem:(i=s==null?void 0:s.background)==null?void 0:i._id}),e.jsx(f,{name:"selectedBg"}),e.jsx(H,{type:"submit",children:"Edit"})]})})})},Me=t.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,Oe=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 300ms linear;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover {
    opacity: 1;
    /* background-color: var(--sidebar-active-board-bg-color); */
  }
`,ze=t.li`
  position: relative;
  display: flex;
  padding: 20px 14px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--sidebar-active-board-bg-color);
  opacity: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-left: 4px solid var(--sidebar-border-left-color);
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`,$=t.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,S=t.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`,Ee=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,T=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,L=t.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,qe=()=>{const[o,r]=p.useState(!1),[s,n]=p.useState(!1),a=g(re),c=g(y),i=b(),d=M(),u=(l,U)=>{i(O(l));const X=U.toLowerCase().replace(/[\s/]+/g,"-");d(X)},k=()=>{r(!0)},x=()=>{r(!1)},j=l=>{n(l),k()},P=l=>{i(Y(l)),d("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:a.map(l=>l._id===(c==null?void 0:c._id)?e.jsxs(ze,{children:[e.jsx($,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${l.icon}`})}),e.jsx(S,{children:l.title}),e.jsxs(Ee,{children:[e.jsx(T,{type:"button",onClick:()=>j(l._id),children:e.jsx(L,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),e.jsx(T,{type:"button",onClick:()=>P(l._id),children:e.jsx(L,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})})]})]},l._id):e.jsxs(Oe,{onClick:()=>{u(l._id,l.title)},children:[e.jsx($,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${l.icon}`})}),e.jsx(S,{children:l.title})]},l._id))}),o&&e.jsx(Le,{boardId:s,onClose:x})]})},Fe=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,_e=t.button`
  display: flex;
  gap: 14px;
  justify-content: left;
  align-items: center;
  margin-left: 24px;
  width: 120px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: var(--sidebar-logout-icon-color-hover);
    transform: scale(1.15);
  }

  &:focus svg {
    stroke: var(--sidebar-logout-icon-color-hover);
    transform: scale(1.15);
  }
`,Re=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,Ae=()=>{const o=b(),r=()=>{o(Z())};return e.jsxs(_e,{onClick:r,children:[e.jsx(Fe,{children:"Log out"}),e.jsx(Re,{width:"32px",height:"32px",children:e.jsx("use",{href:`${h}#icon-login`})})]})},He=t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: var(--sidebar-bg-color);
  transform: ${({isOpen:o})=>o?"translateX(0)":"translateX(-100%)"};
  z-index: 3;
  width: 260px;

  transition: transform 500ms var(--timing-function);
`,Ne=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,De=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Ve=({isOpen:o,toggleSidebar:r})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(Ne,{onClick:()=>{r()},isOpen:o}),e.jsxs(He,{isOpen:o,children:[e.jsx(ie,{}),e.jsx(De,{children:"My boards"}),e.jsx(Te,{}),e.jsx(qe,{}),e.jsx(Ae,{})]})]}),We=t.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,Pe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,Ue=t.svg`
  width: 200px;
  height: 200px;
`,Xe=t.p`
  width: 486px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);
`,Ge=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,Je=()=>{const[o,r]=p.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(Pe,{children:[e.jsx(Ue,{children:e.jsx("use",{href:h+"#icon-main-trello"})}),e.jsxs(Xe,{children:["Before starting your project, it is essential",e.jsx(Ge,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(W,{onClose:n})]})},ot=()=>{const[o,r]=p.useState(!1),s=g(ee),n=g(y),a=b(),c=M(),i=()=>{r(!o)};return p.useEffect(()=>{a(te()),a(oe()),s&&a(O(s))},[]),p.useEffect(()=>{if(n){const d=n.title.toLowerCase().replace(/[\s/]+/g,"-");c(d)}},[n]),e.jsxs(We,{children:[e.jsx(Ve,{isOpen:o,toggleSidebar:i}),e.jsx(me,{toggleSidebar:i}),n?e.jsx(se,{}):e.jsx(Je,{})]})};export{ot as default};
