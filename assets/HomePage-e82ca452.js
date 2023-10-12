import{b as h,s as G,c as p,u as f,j as e,d as J,e as K,f as Q,g as T,h as M,i as Y,k as Z,m as ee,n as te,o as oe,O as se}from"./index-1f132590.js";import{n as t}from"./emotion-styled.browser.esm-5791e782.js";import{s as x}from"./sprite-33c0d800.js";import{C as ne,s as ie,M as L,S as O,a as z,b as g,R as j,B as q,c as v,d as re}from"./Button-5fa041c4.js";import{a as F,u as _,b as E,c as R,d as m}from"./index.esm-528c2db0.js";import{L as ce}from"./Logo-574e1621.js";const ae=t.header`
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
`,de=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,pe=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,xe=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,he=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,A=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],ue=["light","dark","violet"],ge=({toggleSidebar:o})=>{const n=h(G),[s,r]=p.useState(!1),c=p.useRef(null),d=f();p.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(n)},[n]);const i=()=>{r(!s)},l=u=>{u.stopPropagation(),i()},b=u=>{u!==n&&(d(J({theme:u})),i())};return e.jsxs(ae,{children:[e.jsx(le,{onClick:()=>{o()},children:e.jsx(de,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(pe,{children:[e.jsxs(xe,{ref:c,onClick:l,children:["Theme",e.jsx(he,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),s&&e.jsx(ne,{title:"Select theme",options:ue,selectedOption:n,isOpen:s,onClose:i,handleOptionClick:b,openBtnRef:c})]})]})},me=t.ul`
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
`,H=({name:o,icons:n,selectedItem:s})=>{const[r,c]=p.useState(s||""),{setFieldValue:d}=_();return p.useEffect(()=>{c(s||"")},[s]),e.jsx(me,{children:n.map(i=>e.jsx(fe,{children:e.jsxs(be,{children:[e.jsx(je,{type:"radio",name:o,value:i,onChange:l=>{c(l.target.value),d(o,l.target.value)}}),e.jsx(ve,{selected:r===i,children:e.jsx("use",{href:x+`#${i}`})})]})},i))})},ye=t.ul`
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
`,N=({name:o,selectedItem:n})=>{const[s,r]=p.useState(n||""),c=h(ie),{setFieldValue:d}=_();return p.useEffect(()=>{r(n||"")},[n]),e.jsxs(ye,{children:[e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:o,value:"null",onChange:i=>{r(i.target.value),d(o,i.target.value)}}),e.jsx(B,{selected:s==="null",children:e.jsx(we,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),c.map(i=>e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:o,value:i._id,onChange:l=>{r(l.target.value),d(o,l.target.value)}}),e.jsx(B,{selected:s===i._id,children:e.jsx(ke,{src:i.previewURL})})]})},i._id))]})},D=({onClose:o})=>{const n=f(),s=r=>{const c={title:r.title,icon:r.selectedIcon,backgroundId:r.selectedBg};n(K(c)),o()};return e.jsx(L,{onClose:o,title:"New board",children:e.jsx(E,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:s,children:e.jsxs(O,{children:[e.jsx(z,{type:"text",name:"title",placeholder:"Title"}),e.jsx(g,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",icons:A}),e.jsx(g,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(N,{name:"selectedBg"}),e.jsx(g,{name:"selectedBg"}),e.jsx(q,{type:"submit",children:"Create"})]})})})},Be=t.div`
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
`,$e=()=>{const[o,n]=p.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Be,{children:[e.jsx(Ie,{children:"Create a new board"}),e.jsx(Ce,{type:"button",onClick:s,children:e.jsx(Se,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(D,{onClose:r})]})},Te=({boardId:o,onClose:n})=>{var d,i;const s=h(v),r=f(),c=l=>{const b={title:l.title,icon:l.selectedIcon,backgroundId:l.selectedBg};r(Q({boardId:o,body:b})),n()};return e.jsx(L,{onClose:n,title:"Edit board",children:e.jsx(E,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:(d=s==null?void 0:s.background)==null?void 0:d._id},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:c,children:e.jsxs(O,{children:[e.jsx(z,{type:"text",name:"title",placeholder:"Title"}),e.jsx(g,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",icons:A,selectedItem:s==null?void 0:s.icon}),e.jsx(g,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(N,{name:"selectedBg",selectedItem:(i=s==null?void 0:s.background)==null?void 0:i._id}),e.jsx(g,{name:"selectedBg"}),e.jsx(q,{type:"submit",children:"Edit"})]})})})},Me=t.ul`
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
`,ze=t.div`
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
`,qe=()=>{const[o,n]=p.useState(!1),[s,r]=p.useState(!1),c=h(re),d=h(v),i=f(),l=T(),b=(a,U)=>{i(M(a));const X=U.toLowerCase().replace(/[\s/]+/g,"-");l(X)},u=()=>{n(!0)},V=()=>{n(!1)},P=a=>{r(a),u()},W=a=>{i(Y(a)),l("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:c.map(a=>a._id===(d==null?void 0:d._id)?e.jsxs(Oe,{children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${a.icon}`})}),e.jsx(C,{children:a.title}),e.jsxs(ze,{children:[e.jsx(S,{type:"button",onClick:()=>P(a._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(S,{type:"button",onClick:()=>W(a._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},a._id):e.jsxs(Le,{onClick:()=>{b(a._id,a.title)},children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${a.icon}`})}),e.jsx(C,{children:a.title})]},a._id))}),o&&e.jsx(Te,{boardId:s,onClose:V})]})},Fe=t.p`
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
`,Re=()=>{const o=f(),n=()=>{o(Z())};return e.jsxs(_e,{onClick:n,children:[e.jsx(Fe,{children:"Log out"}),e.jsx(Ee,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},Ae=t.div`
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
`,De=({isOpen:o,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(He,{onClick:()=>{n()},isOpen:o}),e.jsxs(Ae,{isOpen:o,children:[e.jsx(ce,{}),e.jsx(Ne,{children:"My boards"}),e.jsx($e,{}),e.jsx(qe,{}),e.jsx(Re,{})]})]}),Ve=t.div`
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
`,Ge=()=>{const[o,n]=p.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(Pe,{children:[e.jsx(We,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(Ue,{children:["Before starting your project, it is essential",e.jsx(Xe,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(D,{onClose:r})]})},tt=()=>{const[o,n]=p.useState(!1),s=h(ee),r=h(v),c=f(),d=T(),i=()=>{n(!o)};return p.useEffect(()=>{c(te()),c(oe()),s&&c(M(s))},[]),p.useEffect(()=>{if(r){const l=r.title.toLowerCase().replace(/[\s/]+/g,"-");d(l)}},[r]),e.jsxs(Ve,{children:[e.jsx(De,{isOpen:o,toggleSidebar:i}),e.jsx(ge,{toggleSidebar:i}),r?e.jsx(se,{}):e.jsx(Ge,{})]})};export{tt as default};
