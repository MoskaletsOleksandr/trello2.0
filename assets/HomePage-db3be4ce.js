import{n as t,j as e,r as c,u as v,e as G,a as m,f as J,g as K,h as Q,i as Z,k as ee,m as _,o as U,p as te,q as oe,t as se,v as re,x as ne,y as ie,O as ae,z as le}from"./index-12b6f751.js";import{s as x}from"./sprite-cc172135.js";import{M as w,S as y,a as j,b as f,B as I,C as ce,t as de,i as pe,s as xe,c as k,d as M,e as he,f as ue}from"./selectors-5b86696f.js";import{b as B,c as C,d as b,a as N,u as R}from"./index.esm-1b011219.js";import{L as ge}from"./Logo-17d5465a.js";import{I as D,_ as $,s as me,a as fe}from"./selectors-e6602b00.js";const be=t.header`
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
`,ve=t.button`
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
`,je=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,ke=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,we=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,ye=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,Ie=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`,Be=t.div`
  color: var(--header-name-color);
`,Ce=t.div`
  position: relative;
  cursor: pointer;
`,Se=t.svg`
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
`,$e=t.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`,Me=t.p`
  text-transform: capitalize;
  font-weight: medium;
`,Le=t.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`,Te=t.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`,Oe=t.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`,Fe=t.label`
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
`,qe=t.input`
  display: none;
  position: absolute;
`,Ee=t.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,ze=({avatarUrl:o,onAvatarChange:r})=>e.jsxs(Le,{children:[o?e.jsx(Oe,{src:o}):e.jsx(Te,{children:e.jsx("use",{href:`${x}#icon-avatar`})}),e.jsxs(Fe,{children:[e.jsx(qe,{type:"file",accept:"image/*",onChange:r}),e.jsx(Ee,{children:e.jsx("use",{href:`${x}#icon-plus`})})]})]}),Ae=({onClose:o,user:r})=>{const[s,n]=c.useState(r.avatarUrl),[i,a]=c.useState(null),l=v(),p=h=>{const g=h.target.files[0];if(g){const S=URL.createObjectURL(g);n(S),a(g)}},u=h=>{const g=new FormData;g.append("newName",h.name),g.append("newEmail",h.email),g.append("avatar",i),l(G(g)),o()};return e.jsx(w,{onClose:o,title:"Edit profile",children:e.jsx(B,{initialValues:{name:r.name,email:r.email,avatarUrl:r.avatarUrl},validationSchema:C({name:b().max(25,"Must be 25 characters or less").required("Name is required"),email:b().email("Invalid email address").required("Email is required")}),onSubmit:u,children:e.jsxs(y,{children:[e.jsx(ze,{avatarUrl:s,onAvatarChange:p}),e.jsx(j,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(f,{name:"name"}),e.jsx(j,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(f,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},_e=()=>{const o=m(J),[r,s]=c.useState(!1),{name:n,avatarUrl:i}=o,a=()=>{s(!0)},l=()=>{s(!1)};return e.jsxs(Ie,{children:[e.jsx(Be,{children:e.jsx(Me,{children:n})}),e.jsx(Ce,{onClick:a,children:i?e.jsx($e,{src:i}):e.jsx(Se,{children:e.jsx("use",{href:`${x}#icon-avatar`})})}),r&&e.jsx(Ae,{onClose:l,user:o})]})},Ue=({toggleSidebar:o})=>{const r=m(K),[s,n]=c.useState(!1),i=c.useRef(null),a=v();c.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(r)},[r]);const l=()=>{n(!s)},p=h=>{h.stopPropagation(),l()},u=h=>{h!==r&&(a(Q({theme:h})),l())};return e.jsxs(be,{children:[e.jsx(ve,{onClick:()=>{o()},children:e.jsx(je,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(ke,{children:[e.jsxs(we,{ref:i,onClick:p,children:["Theme",e.jsx(ye,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),e.jsx(_e,{}),s&&e.jsx(ce,{title:"Select theme",options:de,selectedOption:r,isOpen:s,onClose:l,handleOptionClick:u,openBtnRef:i})]})]})},Ne=t.ul`
  display: flex;
  gap: 8px;
`,Re=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,De=t.label``,Ve=t(N)`
  display: none;
`,He=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,V=({name:o,selectedItem:r})=>{const[s,n]=c.useState(r||""),{setFieldValue:i}=R();return c.useEffect(()=>{n(r||"")},[r]),e.jsx(Ne,{children:pe.map(a=>e.jsx(Re,{children:e.jsxs(De,{children:[e.jsx(Ve,{type:"radio",name:o,value:a,onChange:l=>{n(l.target.value),i(o,l.target.value)}}),e.jsx(He,{selected:s===a,children:e.jsx("use",{href:x+`#${a}`})})]})},a))})},Pe=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,L=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,T=t.label``,O=t(N)`
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
`,We=t.img`
  width: 28px;
  height: 28px;
`,Xe=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,H=({name:o,selectedItem:r})=>{const[s,n]=c.useState(r||""),i=m(xe),{setFieldValue:a}=R();return c.useEffect(()=>{n(r||"")},[r]),e.jsxs(Pe,{children:[e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(O,{type:"radio",name:o,value:"null",onChange:l=>{n(l.target.value),a(o,l.target.value)}}),e.jsx(F,{selected:s==="null",children:e.jsx(Xe,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),i.map(l=>e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(O,{type:"radio",name:o,value:l._id,onChange:p=>{n(p.target.value),a(o,p.target.value)}}),e.jsx(F,{selected:s===l._id,children:e.jsx(We,{src:l.previewURL})})]})},l._id))]})},P=({onClose:o})=>{const r=v(),s=n=>{const i={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};r(Z(i)),o()};return e.jsx(w,{onClose:o,title:"New board",children:e.jsx(B,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:C({title:b().max(20,"Must be 20 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(V,{name:"selectedIcon"}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Ye=t.div`
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
`,Ge=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Je=t.button`
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
`,Ke=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Qe=()=>{const[o,r]=c.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ye,{children:[e.jsx(Ge,{children:"Create a new board"}),e.jsx(Je,{type:"button",onClick:s,children:e.jsx(Ke,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(P,{onClose:n})]})},Ze=({boardId:o,onClose:r})=>{var a,l;const s=m(M),n=v(),i=p=>{const u={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(ee({boardId:o,body:u})),r()};return e.jsx(w,{onClose:r,title:"Edit board",children:e.jsx(B,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((a=s==null?void 0:s.background)==null?void 0:a._id)||"null"},validationSchema:C({title:b().max(20,"Must be 20 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:i,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(V,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(H,{name:"selectedBg",selectedItem:((l=s==null?void 0:s.background)==null?void 0:l._id)||"null"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},et=t.ul`
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
`,tt=t.li`
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
`,ot=t.li`
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
`,st=t.div`
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
`,rt=()=>{const[o,r]=c.useState(!1),[s,n]=c.useState(!1),i=m(he),a=m(M),l=v(),p=_(),u=(d,X)=>{l(U(d));const Y=X.toLowerCase().replace(/[\s/]+/g,"-");p(Y)},h=()=>{r(!0)},g=()=>{r(!1)},S=d=>{n(d),h()},W=d=>{l(te(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(et,{children:i.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(ot,{children:[e.jsx(q,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(E,{children:d.title}),e.jsxs(st,{children:[e.jsx(z,{type:"button",onClick:()=>S(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(z,{type:"button",onClick:()=>W(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},d._id):e.jsxs(tt,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(q,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(E,{children:d.title})]},d._id))}),o&&e.jsx(Ze,{boardId:s,onClose:g})]})},nt=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,it=t.button`
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
`,at=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,lt=()=>{const o=v(),r=()=>{o(oe())};return e.jsxs(it,{onClick:r,children:[e.jsx(nt,{children:"Log out"}),e.jsx(at,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},ct=({onClose:o})=>{const r=async s=>{const n={email:s.email,feedback:s.feedback};try{const i=await se(n);$.success(i.message)}catch(i){$.error(i.message)}o()};return e.jsxs(w,{onClose:o,title:"Leave feedback",children:[e.jsx(B,{initialValues:{email:"",feedback:""},validationSchema:C({email:b().email("Invalid email address"),feedback:b().max(150,"Must be 150 characters or less").required("Feedback is required")}),onSubmit:r,children:e.jsxs(y,{children:[e.jsx(j,{type:"email",name:"email",placeholder:"Your email"}),e.jsx(f,{name:"email"}),e.jsx(ue,{as:"textarea",name:"feedback",placeholder:"Your feedback"}),e.jsx(f,{name:"feedback"}),e.jsx(I,{type:"submit",children:"Send feedback"})]})}),e.jsx(D,{position:"top-right",reverseOrder:!1})]})},dt=t.div`
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
`,pt=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,xt=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,ht=t.div`
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
`,ut=t.h3`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,gt=t.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,mt=t.button`
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
`,ft=t.svg`
  width: 20px;
  height: 20px;
  stroke: var(--sidebar-needhelp-icon-color);
  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,bt=({isOpen:o,toggleSidebar:r})=>{const[s,n]=c.useState(!1),i=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(pt,{onClick:()=>{r()},isOpen:o}),e.jsxs(dt,{isOpen:o,children:[e.jsx(ge,{}),e.jsx(xt,{children:"My boards"}),e.jsx(Qe,{}),e.jsx(rt,{}),e.jsxs(ht,{children:[e.jsx(ut,{children:"Leave feedback"}),e.jsx(gt,{children:"Share your thoughts to help us. Your feedback on improvements or errors makes this app better!"}),e.jsxs(mt,{onClick:i,children:[e.jsx(ft,{children:e.jsx("use",{href:`${x}#icon-help-circle`})}),"Click me to write"]}),s&&e.jsx(ct,{onClose:a})]}),e.jsx(lt,{})]})]})},vt=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,jt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,kt=t.svg`
  width: 200px;
  height: 200px;
`,wt=t.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,yt=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,It=()=>{const[o,r]=c.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(jt,{children:[e.jsx(kt,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(wt,{children:["Before starting your project, it is essential",e.jsx(yt,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(P,{onClose:n})]})},Tt=()=>{const[o,r]=c.useState(!1),s=m(re),n=m(M),i=m(me),a=v(),l=_(),p=m(fe);c.useEffect(()=>{a(ne()),a(ie()),s&&a(U(s))},[]),c.useEffect(()=>{if(n){const h=n.title.toLowerCase().replace(/[\s/]+/g,"-");l(h)}},[n]),c.useEffect(()=>{i&&$.error(i)},[i]);const u=()=>{r(!o)};return e.jsxs(vt,{children:[e.jsx(bt,{isOpen:o,toggleSidebar:u}),e.jsx(Ue,{toggleSidebar:u}),n?e.jsx(ae,{}):e.jsx(It,{}),e.jsx(D,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(le,{})]})};export{Tt as default};
