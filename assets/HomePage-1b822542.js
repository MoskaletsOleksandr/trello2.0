import{n as o,a as h,d as X,r as p,u as b,j as e,e as G,f as J,g as K,h as L,i as T,k as Q,m as Y,o as Z,p as ee,q as te,O as oe,t as se}from"./index-63a99336.js";import{s as x}from"./sprite-33c0d800.js";import{C as ne,t as re,i as ie,s as ae,M,S as O,a as q,b as m,B as j,c as z,d as v,e as ce}from"./Button-ecb7ac6a.js";import{a as F,u as _,b as E,c as R,d as f}from"./index.esm-be11cb17.js";import{L as le}from"./Logo-341f5bfe.js";const de=o.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);
`,pe=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,xe=o.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,he=o.div`
  position: relative;
  display: flex;
  align-items: center;
`,ue=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,ge=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,me=({toggleSidebar:t})=>{const n=h(X),[s,r]=p.useState(!1),l=p.useRef(null),a=b();p.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(n)},[n]);const i=()=>{r(!s)},d=g=>{g.stopPropagation(),i()},u=g=>{g!==n&&(a(G({theme:g})),i())};return e.jsxs(de,{children:[e.jsx(pe,{onClick:()=>{t()},children:e.jsx(xe,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(he,{children:[e.jsxs(ue,{ref:l,onClick:d,children:["Theme",e.jsx(ge,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),s&&e.jsx(ne,{title:"Select theme",options:re,selectedOption:n,isOpen:s,onClose:i,handleOptionClick:u,openBtnRef:l})]})]})},fe=o.ul`
  display: flex;
  gap: 8px;
`,be=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,je=o.label``,ve=o(F)`
  display: none;
`,ye=o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,A=({name:t,selectedItem:n})=>{const[s,r]=p.useState(n||""),{setFieldValue:l}=_();return p.useEffect(()=>{r(n||"")},[n]),e.jsx(fe,{children:ie.map(a=>e.jsx(be,{children:e.jsxs(je,{children:[e.jsx(ve,{type:"radio",name:t,value:a,onChange:i=>{r(i.target.value),l(t,i.target.value)}}),e.jsx(ye,{selected:s===a,children:e.jsx("use",{href:x+`#${a}`})})]})},a))})},ke=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,y=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,k=o.label``,w=o(F)`
  display: none;
`,B=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:t})=>t?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,we=o.img`
  width: 28px;
  height: 28px;
`,Be=o.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,H=({name:t,selectedItem:n})=>{const[s,r]=p.useState(n||""),l=h(ae),{setFieldValue:a}=_();return p.useEffect(()=>{r(n||"")},[n]),e.jsxs(ke,{children:[e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:t,value:"null",onChange:i=>{r(i.target.value),a(t,i.target.value)}}),e.jsx(B,{selected:s==="null",children:e.jsx(Be,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),l.map(i=>e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:t,value:i._id,onChange:d=>{r(d.target.value),a(t,d.target.value)}}),e.jsx(B,{selected:s===i._id,children:e.jsx(we,{src:i.previewURL})})]})},i._id))]})},N=({onClose:t})=>{const n=b(),s=r=>{const l={title:r.title,icon:r.selectedIcon,backgroundId:r.selectedBg};n(J(l)),t()};return e.jsx(M,{onClose:t,title:"New board",children:e.jsx(E,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:R({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:s,children:e.jsxs(O,{children:[e.jsx(q,{type:"text",name:"title",placeholder:"Title"}),e.jsx(m,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(A,{name:"selectedIcon"}),e.jsx(m,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg"}),e.jsx(m,{name:"selectedBg"}),e.jsx(z,{type:"submit",children:"Create"})]})})})},Ie=o.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,Ce=o.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Se=o.button`
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
`,$e=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Le=()=>{const[t,n]=p.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsx(Ce,{children:"Create a new board"}),e.jsx(Se,{type:"button",onClick:s,children:e.jsx($e,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),t&&e.jsx(N,{onClose:r})]})},Te=({boardId:t,onClose:n})=>{var a,i;const s=h(v),r=b(),l=d=>{const u={title:d.title,icon:d.selectedIcon,backgroundId:d.selectedBg};r(K({boardId:t,body:u})),n()};return e.jsx(M,{onClose:n,title:"Edit board",children:e.jsx(E,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((a=s==null?void 0:s.background)==null?void 0:a._id)||"null"},validationSchema:R({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:l,children:e.jsxs(O,{children:[e.jsx(q,{type:"text",name:"title",placeholder:"Title"}),e.jsx(m,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(A,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(m,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg",selectedItem:((i=s==null?void 0:s.background)==null?void 0:i._id)||"null"}),e.jsx(m,{name:"selectedBg"}),e.jsx(z,{type:"submit",children:"Edit"})]})})})},Me=o.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,Oe=o.li`
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
`,qe=o.li`
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
`,I=o.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,C=o.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`,ze=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,S=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,$=o.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Fe=()=>{const[t,n]=p.useState(!1),[s,r]=p.useState(!1),l=h(ce),a=h(v),i=b(),d=L(),u=(c,W)=>{i(T(c));const U=W.toLowerCase().replace(/[\s/]+/g,"-");d(U)},g=()=>{n(!0)},D=()=>{n(!1)},V=c=>{r(c),g()},P=c=>{i(Q(c)),d("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:l.map(c=>c._id===(a==null?void 0:a._id)?e.jsxs(qe,{children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${c.icon}`})}),e.jsx(C,{children:c.title}),e.jsxs(ze,{children:[e.jsx(S,{type:"button",onClick:()=>V(c._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(S,{type:"button",onClick:()=>P(c._id),children:e.jsx($,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},c._id):e.jsxs(Oe,{onClick:()=>{u(c._id,c.title)},children:[e.jsx(I,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${c.icon}`})}),e.jsx(C,{children:c.title})]},c._id))}),t&&e.jsx(Te,{boardId:s,onClose:D})]})},_e=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,Ee=o.button`
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
`,Re=o.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,Ae=()=>{const t=b(),n=()=>{t(Y())};return e.jsxs(Ee,{onClick:n,children:[e.jsx(_e,{children:"Log out"}),e.jsx(Re,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},He=o.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: var(--sidebar-bg-color);
  transform: ${({isOpen:t})=>t?"translateX(0)":"translateX(-100%)"};
  z-index: 3;
  width: 260px;

  transition: transform 500ms var(--timing-function);
`,Ne=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,De=o.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Ve=({isOpen:t,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(Ne,{onClick:()=>{n()},isOpen:t}),e.jsxs(He,{isOpen:t,children:[e.jsx(le,{}),e.jsx(De,{children:"My boards"}),e.jsx(Le,{}),e.jsx(Fe,{}),e.jsx(Ae,{})]})]}),Pe=o.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,We=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,Ue=o.svg`
  width: 200px;
  height: 200px;
`,Xe=o.p`
  width: 486px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);
`,Ge=o.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,Je=()=>{const[t,n]=p.useState(!1),s=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(We,{children:[e.jsx(Ue,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(Xe,{children:["Before starting your project, it is essential",e.jsx(Ge,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),t&&e.jsx(N,{onClose:r})]})},Ke=t=>t.auth.isAuthLoading||t.boards.isBoardsLoading||t.columns.isColumnsLoading||t.cards.isCardsLoading,ot=()=>{const[t,n]=p.useState(!1),s=h(Z),r=h(v),l=b(),a=L(),i=h(Ke),d=()=>{n(!t)};return p.useEffect(()=>{l(ee()),l(te()),s&&l(T(s))},[]),p.useEffect(()=>{if(r){const u=r.title.toLowerCase().replace(/[\s/]+/g,"-");a(u)}},[r]),e.jsxs(Pe,{children:[e.jsx(Ve,{isOpen:t,toggleSidebar:d}),e.jsx(me,{toggleSidebar:d}),r?e.jsx(oe,{}):e.jsx(Je,{}),i&&e.jsx(se,{})]})};export{ot as default};
