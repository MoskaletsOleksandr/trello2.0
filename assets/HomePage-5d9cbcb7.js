import{n as t,j as e,r as c,u as v,e as J,d as m,s as K,f as Q,g as Z,h as ee,i as te,k as _,m as U,o as oe,p as se,q as N,t as re,v as ne,O as ie,w as ae,x as le,y as ce}from"./index-f2bb80be.js";import{s as x}from"./sprite-cc172135.js";import{M as w,S as y,a as j,b as f,B as I,C as de,t as pe,i as xe,s as he,c as k,d as M,e as ue,f as ge}from"./selectors-c5f81ce0.js";import{b as B,c as C,d as b,a as R,u as D}from"./index.esm-8c35a4c9.js";import{L as me}from"./Logo-c55643c5.js";import{I as V,_ as $,s as fe,a as be}from"./selectors-f9dee45c.js";const ve=t.header`
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
`,je=t.button`
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
`,ke=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,we=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,ye=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,Ie=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,Be=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`,Ce=t.div`
  color: var(--header-name-color);
`,Se=t.div`
  position: relative;
  cursor: pointer;
`,$e=t.svg`
  width: 32px;
  height: 32px;
  border: 1px solid var(--header-theme-select-border-color);
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`,Me=t.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`,Te=t.p`
  text-transform: capitalize;
  font-weight: medium;
`,Le=t.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`,Oe=t.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`,Fe=t.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`,qe=t.label`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: var(--modal-profile-plus-bg-color);
  cursor: pointer;
`,Ee=t.input`
  display: none;
  position: absolute;
`,ze=t.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,Ae=({avatarUrl:o,onAvatarChange:r})=>e.jsxs(Le,{children:[o?e.jsx(Fe,{src:o}):e.jsx(Oe,{children:e.jsx("use",{href:`${x}#icon-avatar`})}),e.jsxs(qe,{children:[e.jsx(Ee,{type:"file",accept:"image/*",onChange:r}),e.jsx(ze,{children:e.jsx("use",{href:`${x}#icon-plus`})})]})]}),_e=({onClose:o,user:r})=>{const[s,n]=c.useState(r.avatarUrl),[i,a]=c.useState(null),l=v(),p=h=>{const g=h.target.files[0];if(g){const S=URL.createObjectURL(g);n(S),a(g)}},u=h=>{const g=new FormData;g.append("newName",h.name),g.append("newEmail",h.email),g.append("avatar",i),l(J(g)),o()};return e.jsx(w,{onClose:o,title:"Edit profile",children:e.jsx(B,{initialValues:{name:r.name,email:r.email,avatarUrl:r.avatarUrl},validationSchema:C({name:b().max(25,"Must be 25 characters or less").required("Name is required"),email:b().email("Invalid email address").required("Email is required")}),onSubmit:u,children:e.jsxs(y,{children:[e.jsx(Ae,{avatarUrl:s,onAvatarChange:p}),e.jsx(j,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(f,{name:"name"}),e.jsx(j,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(f,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ue=()=>{const o=m(K),[r,s]=c.useState(!1),{name:n,avatarUrl:i}=o,a=()=>{s(!0)},l=()=>{s(!1)};return e.jsxs(Be,{children:[e.jsx(Ce,{children:e.jsx(Te,{children:n})}),e.jsx(Se,{onClick:a,children:i?e.jsx(Me,{src:i}):e.jsx($e,{children:e.jsx("use",{href:`${x}#icon-avatar`})})}),r&&e.jsx(_e,{onClose:l,user:o})]})},Ne=({toggleSidebar:o})=>{const r=m(Q),[s,n]=c.useState(!1),i=c.useRef(null),a=v();c.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(r)},[r]);const l=()=>{n(!s)},p=h=>{h.stopPropagation(),l()},u=h=>{h!==r&&(a(Z({theme:h})),l())};return e.jsxs(ve,{children:[e.jsx(je,{onClick:()=>{o()},children:e.jsx(ke,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(we,{children:[e.jsxs(ye,{ref:i,onClick:p,children:["Theme",e.jsx(Ie,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),e.jsx(Ue,{}),s&&e.jsx(de,{title:"Select theme",options:pe,selectedOption:r,isOpen:s,onClose:l,handleOptionClick:u,openBtnRef:i})]})]})},Re=t.ul`
  display: flex;
  gap: 8px;
`,De=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,Ve=t.label``,He=t(R)`
  display: none;
`,Pe=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,H=({name:o,selectedItem:r})=>{const[s,n]=c.useState(r||""),{setFieldValue:i}=D();return c.useEffect(()=>{n(r||"")},[r]),e.jsx(Re,{children:xe.map(a=>e.jsx(De,{children:e.jsxs(Ve,{children:[e.jsx(He,{type:"radio",name:o,value:a,onChange:l=>{n(l.target.value),i(o,l.target.value)}}),e.jsx(Pe,{selected:s===a,children:e.jsx("use",{href:x+`#${a}`})})]})},a))})},We=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,T=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,L=t.label``,O=t(R)`
  display: none;
`,F=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:o})=>o?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,Xe=t.img`
  width: 28px;
  height: 28px;
`,Ye=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,P=({name:o,selectedItem:r})=>{const[s,n]=c.useState(r||""),i=m(he),{setFieldValue:a}=D();return c.useEffect(()=>{n(r||"")},[r]),e.jsxs(We,{children:[e.jsx(T,{children:e.jsxs(L,{children:[e.jsx(O,{type:"radio",name:o,value:"null",onChange:l=>{n(l.target.value),a(o,l.target.value)}}),e.jsx(F,{selected:s==="null",children:e.jsx(Ye,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),i.map(l=>e.jsx(T,{children:e.jsxs(L,{children:[e.jsx(O,{type:"radio",name:o,value:l._id,onChange:p=>{n(p.target.value),a(o,p.target.value)}}),e.jsx(F,{selected:s===l._id,children:e.jsx(Xe,{src:l.previewURL})})]})},l._id))]})},W=({onClose:o})=>{const r=v(),s=n=>{const i={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};r(ee(i)),o()};return e.jsx(w,{onClose:o,title:"New board",children:e.jsx(B,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:C({title:b().max(20,"Must be 20 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon"}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Ge=t.div`
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
`,Je=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ke=t.button`
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
`,Qe=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Ze=()=>{const[o,r]=c.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:[e.jsx(Je,{children:"Create a new board"}),e.jsx(Ke,{type:"button",onClick:s,children:e.jsx(Qe,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(W,{onClose:n})]})},et=({boardId:o,onClose:r})=>{var a,l;const s=m(M),n=v(),i=p=>{const u={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(te({boardId:o,body:u})),r()};return e.jsx(w,{onClose:r,title:"Edit board",children:e.jsx(B,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((a=s==null?void 0:s.background)==null?void 0:a._id)||"null"},validationSchema:C({title:b().max(20,"Must be 20 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:i,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg",selectedItem:((l=s==null?void 0:s.background)==null?void 0:l._id)||"null"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},tt=t.ul`
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
`,ot=t.li`
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
`,st=t.li`
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
`,q=t.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,E=t.p`
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
`,rt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,z=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,A=t.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,nt=()=>{const[o,r]=c.useState(!1),[s,n]=c.useState(!1),i=m(ue),a=m(M),l=v(),p=_(),u=async(d,Y)=>{await l(U(d)),await l(oe({boardId:d}));const G=Y.toLowerCase().replace(/[\s/]+/g,"-");p(G)},h=()=>{r(!0)},g=()=>{r(!1)},S=d=>{n(d),h()},X=d=>{l(se(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(tt,{children:i.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(st,{children:[e.jsx(q,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(E,{children:d.title}),e.jsxs(rt,{children:[e.jsx(z,{type:"button",onClick:()=>S(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(z,{type:"button",onClick:()=>X(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},d._id):e.jsxs(ot,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(q,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(E,{children:d.title})]},d._id))}),o&&e.jsx(et,{boardId:s,onClose:g})]})},it=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,at=t.button`
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
`,lt=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,ct=()=>{const o=v(),r=()=>{o(N())};return e.jsxs(at,{onClick:r,children:[e.jsx(it,{children:"Log out"}),e.jsx(lt,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},dt=({onClose:o})=>{const r=async s=>{const n={email:s.email,feedback:s.feedback};try{const i=await re(n);$.success(i.message)}catch(i){$.error(i.message)}o()};return e.jsxs(w,{onClose:o,title:"Leave feedback",children:[e.jsx(B,{initialValues:{email:"",feedback:""},validationSchema:C({email:b().email("Invalid email address"),feedback:b().max(150,"Must be 150 characters or less").required("Feedback is required")}),onSubmit:r,children:e.jsxs(y,{children:[e.jsx(j,{type:"email",name:"email",placeholder:"Your email"}),e.jsx(f,{name:"email"}),e.jsx(ge,{as:"textarea",name:"feedback",placeholder:"Your feedback"}),e.jsx(f,{name:"feedback"}),e.jsx(I,{type:"submit",children:"Send feedback"})]})}),e.jsx(V,{position:"top-right",reverseOrder:!1})]})},pt=t.div`
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
`,xt=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,ht=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,ut=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 197px;
  height: 178px;
  background-color: var(--sidebar-active-board-bg-color);
  border-radius: 8px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 24px;
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: 212px;
    margin-left: 24px;
    margin-right: 24px;
    padding: 20px;
  }
`,gt=t.h3`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,mt=t.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,ft=t.button`
  display: flex;
  gap: 14px;
  justify-content: left;
  align-items: center;
  color: var(--primary-text-color);
  width: 150px;
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
`,bt=t.svg`
  width: 20px;
  height: 20px;
  stroke: var(--sidebar-needhelp-icon-color);
  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,vt=({isOpen:o,toggleSidebar:r})=>{const[s,n]=c.useState(!1),i=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(xt,{onClick:()=>{r()},isOpen:o}),e.jsxs(pt,{isOpen:o,children:[e.jsx(me,{}),e.jsx(ht,{children:"My boards"}),e.jsx(Ze,{}),e.jsx(nt,{}),e.jsxs(ut,{children:[e.jsx(gt,{children:"Leave feedback"}),e.jsx(mt,{children:"Share your thoughts to help us. Your feedback on improvements or errors makes this app better!"}),e.jsxs(ft,{onClick:i,children:[e.jsx(bt,{children:e.jsx("use",{href:`${x}#icon-help-circle`})}),"Click me to write"]}),s&&e.jsx(dt,{onClose:a})]}),e.jsx(ct,{})]})]})},jt=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,kt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,wt=t.svg`
  width: 200px;
  height: 200px;
`,yt=t.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,It=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,Bt=()=>{const[o,r]=c.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(kt,{children:[e.jsx(wt,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(yt,{children:["Before starting your project, it is essential",e.jsx(It,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(W,{onClose:n})]})},Ot=()=>{const[o,r]=c.useState(!1),s=m(ne),n=m(M),i=m(fe),a=v(),l=_(),p=m(be);c.useEffect(()=>{(async()=>{await a(le()),await a(ce()),s&&await a(U(s))})()},[]),c.useEffect(()=>{if(n){const h=n.title.toLowerCase().replace(/[\s/]+/g,"-");l(h)}},[n]),c.useEffect(()=>{i==="Not authorized"&&a(N()),i&&$.error(i)},[i]);const u=()=>{r(!o)};return e.jsxs(jt,{children:[e.jsx(vt,{isOpen:o,toggleSidebar:u}),e.jsx(Ne,{toggleSidebar:u}),n?e.jsx(ie,{}):e.jsx(Bt,{}),e.jsx(V,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(ae,{})]})};export{Ot as default};
