import{b as h,s as X,c as d,u as f,j as e,d as G,e as J,f as K,g as T,h as M,i as Q,k as Y,m as Z,n as ee,o as te,O as oe}from"./index-85d86f8a.js";import{n as t}from"./emotion-styled.browser.esm-55173d94.js";import{s as x}from"./sprite-33c0d800.js";import{C as se,t as ne,i as re,s as ie,M as L,S as O,a as q,b as g,B as j,c as z,d as v,e as ce}from"./Button-44229791.js";import{a as F,u as _,b as E,c as R,d as m}from"./index.esm-c82d55e5.js";import{L as ae}from"./Logo-830db167.js";const le=t.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);
`,de=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,pe=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,xe=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,he=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,ue=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,ge=({toggleSidebar:o})=>{const n=h(X),[s,r]=d.useState(!1),l=d.useRef(null),c=f();d.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(n)},[n]);const i=()=>{r(!s)},p=u=>{u.stopPropagation(),i()},b=u=>{u!==n&&(c(G({theme:u})),i())};return e.jsxs(le,{children:[e.jsx(de,{onClick:()=>{o()},children:e.jsx(pe,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(xe,{children:[e.jsxs(he,{ref:l,onClick:p,children:["Theme",e.jsx(ue,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),s&&e.jsx(se,{title:"Select theme",options:ne,selectedOption:n,isOpen:s,onClose:i,handleOptionClick:b,openBtnRef:l})]})]})},me=t.ul`
  display: flex;
  gap: 8px;
`,fe=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,be=t.label``,je=t(F)`
  display: none;
`,ve=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,A=({name:o,selectedItem:n})=>{const[s,r]=d.useState(n||""),{setFieldValue:l}=_();return d.useEffect(()=>{r(n||"")},[n]),e.jsx(me,{children:re.map(c=>e.jsx(fe,{children:e.jsxs(be,{children:[e.jsx(je,{type:"radio",name:o,value:c,onChange:i=>{r(i.target.value),l(o,i.target.value)}}),e.jsx(ve,{selected:s===c,children:e.jsx("use",{href:x+`#${c}`})})]})},c))})},ye=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,y=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,k=t.label``,w=t(F)`
  display: none;
`,B=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:o})=>o?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,ke=t.img`
  width: 28px;
  height: 28px;
`,we=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,H=({name:o,selectedItem:n})=>{const[s,r]=d.useState(n||""),l=h(ie),{setFieldValue:c}=_();return d.useEffect(()=>{r(n||"")},[n]),e.jsxs(ye,{children:[e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:o,value:"null",onChange:i=>{r(i.target.value),c(o,i.target.value)}}),e.jsx(B,{selected:s==="null",children:e.jsx(we,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),l.map(i=>e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:o,value:i._id,onChange:p=>{r(p.target.value),c(o,p.target.value)}}),e.jsx(B,{selected:s===i._id,children:e.jsx(ke,{src:i.previewURL})})]})},i._id))]})},N=({onClose:o})=>{const n=f(),s=r=>{const l={title:r.title,icon:r.selectedIcon,backgroundId:r.selectedBg};n(J(l)),o()};return e.jsx(L,{onClose:o,title:"New board",children:e.jsx(E,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:s,children:e.jsxs(O,{children:[e.jsx(q,{type:"text",name:"title",placeholder:"Title"}),e.jsx(g,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(A,{name:"selectedIcon"}),e.jsx(g,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg"}),e.jsx(g,{name:"selectedBg"}),e.jsx(z,{type:"submit",children:"Create"})]})})})},Be=t.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,Ie=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ce=t.button`
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
`,$e=()=>{const[o,n]=d.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Be,{children:[e.jsx(Ie,{children:"Create a new board"}),e.jsx(Ce,{type:"button",onClick:s,children:e.jsx(Se,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(N,{onClose:r})]})},Te=({boardId:o,onClose:n})=>{var c,i;const s=h(v),r=f(),l=p=>{const b={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};r(K({boardId:o,body:b})),n()};return e.jsx(L,{onClose:n,title:"Edit board",children:e.jsx(E,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((c=s==null?void 0:s.background)==null?void 0:c._id)||"null"},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:l,children:e.jsxs(O,{children:[e.jsx(q,{type:"text",name:"title",placeholder:"Title"}),e.jsx(g,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(A,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(g,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg",selectedItem:((i=s==null?void 0:s.background)==null?void 0:i._id)||"null"}),e.jsx(g,{name:"selectedBg"}),e.jsx(z,{type:"submit",children:"Edit"})]})})})},Me=t.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,Le=t.li`
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
`,Oe=t.li`
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
`,I=t.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,C=t.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`,qe=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,S=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,$=t.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,ze=()=>{const[o,n]=d.useState(!1),[s,r]=d.useState(!1),l=h(ce),c=h(v),i=f(),p=T(),b=(a,W)=>{i(M(a));const U=W.toLowerCase().replace(/[\s/]+/g,"-");p(U)},u=()=>{n(!0)},D=()=>{n(!1)},V=a=>{r(a),u()},P=a=>{i(Q(a)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:l.map(a=>a._id===(c==null?void 0:c._id)?e.jsxs(Oe,{children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${a.icon}`})}),e.jsx(C,{children:a.title}),e.jsxs(qe,{children:[e.jsx(S,{type:"button",onClick:()=>V(a._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(S,{type:"button",onClick:()=>P(a._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},a._id):e.jsxs(Le,{onClick:()=>{b(a._id,a.title)},children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${a.icon}`})}),e.jsx(C,{children:a.title})]},a._id))}),o&&e.jsx(Te,{boardId:s,onClose:D})]})},Fe=t.p`
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
`,Ee=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,Re=()=>{const o=f(),n=()=>{o(Y())};return e.jsxs(_e,{onClick:n,children:[e.jsx(Fe,{children:"Log out"}),e.jsx(Ee,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},Ae=t.div`
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
`,He=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,Ne=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,De=({isOpen:o,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(He,{onClick:()=>{n()},isOpen:o}),e.jsxs(Ae,{isOpen:o,children:[e.jsx(ae,{}),e.jsx(Ne,{children:"My boards"}),e.jsx($e,{}),e.jsx(ze,{}),e.jsx(Re,{})]})]}),Ve=t.div`
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
`,We=t.svg`
  width: 200px;
  height: 200px;
`,Ue=t.p`
  width: 486px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);
`,Xe=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,Ge=()=>{const[o,n]=d.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(Pe,{children:[e.jsx(We,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(Ue,{children:["Before starting your project, it is essential",e.jsx(Xe,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(N,{onClose:r})]})},tt=()=>{const[o,n]=d.useState(!1),s=h(Z),r=h(v),l=f(),c=T(),i=()=>{n(!o)};return d.useEffect(()=>{l(ee()),l(te()),s&&l(M(s))},[]),d.useEffect(()=>{if(r){const p=r.title.toLowerCase().replace(/[\s/]+/g,"-");c(p)}},[r]),e.jsxs(Ve,{children:[e.jsx(De,{isOpen:o,toggleSidebar:i}),e.jsx(ge,{toggleSidebar:i}),r?e.jsx(oe,{}):e.jsx(Ge,{})]})};export{tt as default};
