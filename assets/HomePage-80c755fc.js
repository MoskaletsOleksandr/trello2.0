import{n as t,a as h,d as X,r as d,u as b,j as e,e as G,f as J,g as K,h as M,i as T,k as Q,m as Y,o as Z,p as ee,q as te,O as oe,t as se}from"./index-0758601b.js";import{s as x}from"./sprite-33c0d800.js";import{C as ne,t as ie,i as re,s as ae,M as L,S as O,a as _,b as m,B as j,c as q,d as v,e as ce}from"./Button-3f8c4c2e.js";import{a as E,u as z,b as F,c as R,d as f}from"./index.esm-c6381a96.js";import{L as le}from"./Logo-56feda78.js";import{s as de,a as pe,_ as xe,I as he}from"./selectors-53a179f9.js";const ge=t.header`
  display: flex;
  flex-grow: 1;
  height: 60px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 20px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);

  @media screen and (min-width: 768px) {
    height: 68px;
    padding: 18px 32px;
  }
`,ue=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,me=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,fe=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,be=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,je=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,ve=({toggleSidebar:o})=>{const n=h(X),[s,i]=d.useState(!1),l=d.useRef(null),a=b();d.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(n)},[n]);const r=()=>{i(!s)},p=u=>{u.stopPropagation(),r()},g=u=>{u!==n&&(a(G({theme:u})),r())};return e.jsxs(ge,{children:[e.jsx(ue,{onClick:()=>{o()},children:e.jsx(me,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(fe,{children:[e.jsxs(be,{ref:l,onClick:p,children:["Theme",e.jsx(je,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),s&&e.jsx(ne,{title:"Select theme",options:ie,selectedOption:n,isOpen:s,onClose:r,handleOptionClick:g,openBtnRef:l})]})]})},we=t.ul`
  display: flex;
  gap: 8px;
`,ke=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,ye=t.label``,Be=t(E)`
  display: none;
`,Ie=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,H=({name:o,selectedItem:n})=>{const[s,i]=d.useState(n||""),{setFieldValue:l}=z();return d.useEffect(()=>{i(n||"")},[n]),e.jsx(we,{children:re.map(a=>e.jsx(ke,{children:e.jsxs(ye,{children:[e.jsx(Be,{type:"radio",name:o,value:a,onChange:r=>{i(r.target.value),l(o,r.target.value)}}),e.jsx(Ie,{selected:s===a,children:e.jsx("use",{href:x+`#${a}`})})]})},a))})},Ce=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,w=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,k=t.label``,y=t(E)`
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
`,Se=t.img`
  width: 28px;
  height: 28px;
`,$e=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,A=({name:o,selectedItem:n})=>{const[s,i]=d.useState(n||""),l=h(ae),{setFieldValue:a}=z();return d.useEffect(()=>{i(n||"")},[n]),e.jsxs(Ce,{children:[e.jsx(w,{children:e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:o,value:"null",onChange:r=>{i(r.target.value),a(o,r.target.value)}}),e.jsx(B,{selected:s==="null",children:e.jsx($e,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),l.map(r=>e.jsx(w,{children:e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:o,value:r._id,onChange:p=>{i(p.target.value),a(o,p.target.value)}}),e.jsx(B,{selected:s===r._id,children:e.jsx(Se,{src:r.previewURL})})]})},r._id))]})},N=({onClose:o})=>{const n=b(),s=i=>{const l={title:i.title,icon:i.selectedIcon,backgroundId:i.selectedBg};n(J(l)),o()};return e.jsx(L,{onClose:o,title:"New board",children:e.jsx(F,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:R({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:s,children:e.jsxs(O,{children:[e.jsx(_,{type:"text",name:"title",placeholder:"Title"}),e.jsx(m,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(H,{name:"selectedIcon"}),e.jsx(m,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(A,{name:"selectedBg"}),e.jsx(m,{name:"selectedBg"}),e.jsx(q,{type:"submit",children:"Create"})]})})})},Me=t.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`,Te=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Le=t.button`
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
`,Oe=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,_e=()=>{const[o,n]=d.useState(!1),s=()=>{n(!0)},i=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsx(Te,{children:"Create a new board"}),e.jsx(Le,{type:"button",onClick:s,children:e.jsx(Oe,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(N,{onClose:i})]})},qe=({boardId:o,onClose:n})=>{var a,r;const s=h(v),i=b(),l=p=>{const g={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};i(K({boardId:o,body:g})),n()};return e.jsx(L,{onClose:n,title:"Edit board",children:e.jsx(F,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((a=s==null?void 0:s.background)==null?void 0:a._id)||"null"},validationSchema:R({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:l,children:e.jsxs(O,{children:[e.jsx(_,{type:"text",name:"title",placeholder:"Title"}),e.jsx(m,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(m,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(A,{name:"selectedBg",selectedItem:((r=s==null?void 0:s.background)==null?void 0:r._id)||"null"}),e.jsx(m,{name:"selectedBg"}),e.jsx(q,{type:"submit",children:"Edit"})]})})})},Ee=t.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    height: 130px;
  }
`,ze=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px 14px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 300ms linear;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
  }
`,Fe=t.li`
  position: relative;
  display: flex;
  padding: 22px 18px 22px 14px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--sidebar-active-board-bg-color);
  opacity: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 5px solid var(--sidebar-border-right-color);
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
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
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 14px;
  }
`,Re=t.div`
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
`,He=()=>{const[o,n]=d.useState(!1),[s,i]=d.useState(!1),l=h(ce),a=h(v),r=b(),p=M(),g=(c,W)=>{r(T(c));const U=W.toLowerCase().replace(/[\s/]+/g,"-");p(U)},u=()=>{n(!0)},D=()=>{n(!1)},V=c=>{i(c),u()},P=c=>{r(Q(c)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{children:l.map(c=>c._id===(a==null?void 0:a._id)?e.jsxs(Fe,{children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${c.icon}`})}),e.jsx(C,{children:c.title}),e.jsxs(Re,{children:[e.jsx(S,{type:"button",onClick:()=>V(c._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(S,{type:"button",onClick:()=>P(c._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},c._id):e.jsxs(ze,{onClick:()=>{g(c._id,c.title)},children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${c.icon}`})}),e.jsx(C,{children:c.title})]},c._id))}),o&&e.jsx(qe,{boardId:s,onClose:D})]})},Ae=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,Ne=t.button`
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
`,De=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,Ve=()=>{const o=b(),n=()=>{o(Y())};return e.jsxs(Ne,{onClick:n,children:[e.jsx(Ae,{children:"Log out"}),e.jsx(De,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},Pe=t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 225px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: var(--sidebar-bg-color);
  transform: ${({isOpen:o})=>o?"translateX(0)":"translateX(-100%)"};
  z-index: 3;

  transition: transform 500ms var(--timing-function);

  @media screen and (min-width: 768px) {
    width: 260px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`,We=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,Ue=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Xe=t.div`
  width: 197px;
  height: 138px;
  background-color: teal;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 178px;
    margin-left: 24px;
    margin-right: 24px;
  }
`,Ge=({isOpen:o,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(We,{onClick:()=>{n()},isOpen:o}),e.jsxs(Pe,{isOpen:o,children:[e.jsx(le,{}),e.jsx(Ue,{children:"My boards"}),e.jsx(_e,{}),e.jsx(He,{}),e.jsx(Xe,{}),e.jsx(Ve,{})]})]}),Je=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,Ke=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,Qe=t.svg`
  width: 200px;
  height: 200px;
`,Ye=t.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,Ze=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,et=()=>{const[o,n]=d.useState(!1),s=()=>{n(!0)},i=()=>{n(!1)};return e.jsxs(Ke,{children:[e.jsx(Qe,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(Ye,{children:["Before starting your project, it is essential",e.jsx(Ze,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(N,{onClose:i})]})},at=()=>{const[o,n]=d.useState(!1),s=h(Z),i=h(v),l=h(de),a=b(),r=M(),p=h(pe);d.useEffect(()=>{a(ee()),a(te()),s&&a(T(s))},[]),d.useEffect(()=>{if(i){const u=i.title.toLowerCase().replace(/[\s/]+/g,"-");r(u)}},[i]),d.useEffect(()=>{l&&xe.error(l)},[l]);const g=()=>{n(!o)};return e.jsxs(Je,{children:[e.jsx(Ge,{isOpen:o,toggleSidebar:g}),e.jsx(ve,{toggleSidebar:g}),i?e.jsx(oe,{}):e.jsx(et,{}),e.jsx(he,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(se,{})]})};export{at as default};
