import{n as o,j as e,r as l,u as v,h as G,d as m,i as J,k as K,m as Q,o as ee,p as te,q as _,t as U,v as oe,w as se,x as N,y as re,z as ne,O as ie,A as ae,B as ce,C as le}from"./index-3ff4ca18.js";import{s as h}from"./sprite-fc6f0751.js";import{M as w,S as y,a as j,b as f,B as I,C as de,t as pe,i as he,s as xe,c as k,d as M,e as ue,f as ge}from"./selectors-8deba72a.js";import{b as B,c as C,d as b,a as R,u as D}from"./index.esm-1f0c78ce.js";import{L as me}from"./Logo-4d95f970.js";import{I as V,_ as $}from"./index-41f37e34.js";const fe=o.header`
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
`,be=o.button`
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
`,ve=o.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,je=o.div`
  position: relative;
  display: flex;
  align-items: center;
`,ke=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,we=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,ye=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`,Ie=o.div`
  color: var(--header-name-color);
`,Be=o.div`
  position: relative;
  cursor: pointer;
`,Ce=o.svg`
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
`,Se=o.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`,$e=o.p`
  text-transform: capitalize;
  font-weight: medium;
`,Me=o.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`,Le=o.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`,Te=o.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`,Oe=o.label`
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
`,Fe=o.input`
  display: none;
  position: absolute;
`,Ee=o.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,qe=({avatarUrl:t,onAvatarChange:r})=>e.jsxs(Me,{children:[t?e.jsx(Te,{src:t}):e.jsx(Le,{children:e.jsx("use",{href:`${h}#icon-avatar`})}),e.jsxs(Oe,{children:[e.jsx(Fe,{type:"file",accept:"image/*",onChange:r}),e.jsx(Ee,{children:e.jsx("use",{href:`${h}#icon-plus`})})]})]}),ze=({onClose:t,user:r})=>{const[s,n]=l.useState(r.avatarUrl),[i,a]=l.useState(null),c=v(),p=x=>{const g=x.target.files[0];if(g){const S=URL.createObjectURL(g);n(S),a(g)}},u=x=>{const g=new FormData;g.append("newName",x.name),g.append("newEmail",x.email),g.append("avatar",i),c(G(g)),t()};return e.jsx(w,{onClose:t,title:"Edit profile",children:e.jsx(B,{initialValues:{name:r.name,email:r.email,avatarUrl:r.avatarUrl},validationSchema:C({name:b().max(29,"Must be 29 characters or less").required("Name is required").matches(/^[A-Za-z\s]+$/,"Name can only contain letters and spaces"),email:b().email("Invalid email address").required("Email is required")}),onSubmit:u,children:e.jsxs(y,{children:[e.jsx(qe,{avatarUrl:s,onAvatarChange:p}),e.jsx(j,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(f,{name:"name"}),e.jsx(j,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(f,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ae=()=>{const t=m(J),[r,s]=l.useState(!1),{name:n,avatarUrl:i}=t,a=()=>{s(!0)},c=()=>{s(!1)};return e.jsxs(ye,{children:[e.jsx(Ie,{children:e.jsx($e,{children:n})}),e.jsx(Be,{onClick:a,children:i?e.jsx(Se,{src:i}):e.jsx(Ce,{children:e.jsx("use",{href:`${h}#icon-avatar`})})}),r&&e.jsx(ze,{onClose:c,user:t})]})},_e=({toggleSidebar:t})=>{const r=m(K),[s,n]=l.useState(!1),i=l.useRef(null),a=v();l.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(r)},[r]);const c=()=>{n(!s)},p=x=>{x.stopPropagation(),c()},u=x=>{x!==r&&(a(Q({theme:x})),c())};return e.jsxs(fe,{children:[e.jsx(be,{onClick:()=>{t()},children:e.jsx(ve,{children:e.jsx("use",{href:`${h}#icon-menu`})})}),e.jsxs(je,{children:[e.jsxs(ke,{ref:i,onClick:p,children:["Theme",e.jsx(we,{children:e.jsx("use",{href:`${h}#icon-chevron-down`})})]}),e.jsx(Ae,{}),s&&e.jsx(de,{title:"Select theme",options:pe,selectedOption:r,isOpen:s,onClose:c,handleOptionClick:u,openBtnRef:i})]})]})},Ue=o.ul`
  display: flex;
  gap: 8px;
`,Ne=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,Re=o.label``,De=o(R)`
  display: none;
`,Ve=o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,H=({name:t,selectedItem:r})=>{const[s,n]=l.useState(r||""),{setFieldValue:i}=D();return l.useEffect(()=>{n(r||"")},[r]),e.jsx(Ue,{children:he.map(a=>e.jsx(Ne,{children:e.jsxs(Re,{children:[e.jsx(De,{type:"radio",name:t,value:a,onChange:c=>{n(c.target.value),i(t,c.target.value)}}),e.jsx(Ve,{selected:s===a,children:e.jsx("use",{href:h+`#${a}`})})]})},a))})},He=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,L=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,T=o.label``,O=o(R)`
  display: none;
`,F=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:t})=>t?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,Pe=o.img`
  width: 28px;
  height: 28px;
`,We=o.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,P=({name:t,selectedItem:r})=>{const[s,n]=l.useState(r||""),i=m(xe),{setFieldValue:a}=D();return l.useEffect(()=>{n(r||"")},[r]),e.jsxs(He,{children:[e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(O,{type:"radio",name:t,value:"null",onChange:c=>{n(c.target.value),a(t,c.target.value)}}),e.jsx(F,{selected:s==="null",children:e.jsx(We,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:h+"#null-background"})})})]})}),i.map(c=>e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(O,{type:"radio",name:t,value:c._id,onChange:p=>{n(p.target.value),a(t,p.target.value)}}),e.jsx(F,{selected:s===c._id,children:e.jsx(Pe,{src:c.previewURL})})]})},c._id))]})},W=({onClose:t})=>{const r=v(),s=n=>{const i={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};r(ee(i)),t()};return e.jsx(w,{onClose:t,title:"New board",children:e.jsx(B,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:C({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon"}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Xe=o.div`
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
`,Ye=o.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ze=o.button`
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
`,Ge=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Je=()=>{const[t,r]=l.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{children:[e.jsx(Ye,{children:"Create a new board"}),e.jsx(Ze,{type:"button",onClick:s,children:e.jsx(Ge,{width:"20px",height:"20px",children:e.jsx("use",{href:h+"#icon-plus"})})})]}),t&&e.jsx(W,{onClose:n})]})},Ke=({boardId:t,onClose:r})=>{var a,c;const s=m(M),n=v(),i=p=>{const u={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(te({boardId:t,body:u})),r()};return e.jsx(w,{onClose:r,title:"Edit board",children:e.jsx(B,{initialValues:{title:s==null?void 0:s.title,selectedIcon:s==null?void 0:s.icon,selectedBg:((a=s==null?void 0:s.background)==null?void 0:a._id)||"null"},validationSchema:C({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:i,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",selectedItem:s==null?void 0:s.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg",selectedItem:((c=s==null?void 0:s.background)==null?void 0:c._id)||"null"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Qe=o.ul`
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
`,et=o.li`
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
`,tt=o.li`
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
`,E=o.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,q=o.p`
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
`,ot=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,z=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,A=o.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,st=()=>{const[t,r]=l.useState(!1),[s,n]=l.useState(!1),i=m(ue),a=m(M),c=v(),p=_(),u=async(d,Y)=>{await c(U(d)),await c(oe({boardId:d}));const Z=Y.toLowerCase().replace(/[\s/]+/g,"-");p(Z)},x=()=>{r(!0)},g=()=>{r(!1)},S=d=>{n(d),x()},X=d=>{c(se(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Qe,{children:i.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(tt,{children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${d.icon}`})}),e.jsx(q,{children:d.title}),e.jsxs(ot,{children:[e.jsx(z,{type:"button",onClick:()=>S(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),e.jsx(z,{type:"button",onClick:()=>X(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})})]})]},d._id):e.jsxs(et,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${d.icon}`})}),e.jsx(q,{children:d.title})]},d._id))}),t&&e.jsx(Ke,{boardId:s,onClose:g})]})},rt=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,nt=o.button`
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
`,it=o.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,at=()=>{const t=v(),r=()=>{t(N())};return e.jsxs(nt,{onClick:r,children:[e.jsx(rt,{children:"Log out"}),e.jsx(it,{width:"32px",height:"32px",children:e.jsx("use",{href:`${h}#icon-login`})})]})},ct=({onClose:t})=>{const r=async s=>{const n={email:s.email,feedback:s.feedback};try{const i=await re(n);$.success(i.message)}catch(i){$.error(i.message)}t()};return e.jsxs(w,{onClose:t,title:"Leave feedback",children:[e.jsx(B,{initialValues:{email:"",feedback:""},validationSchema:C({email:b().email("Invalid email address"),feedback:b().max(499,"Must be 499 characters or less").required("Feedback is required")}),onSubmit:r,children:e.jsxs(y,{children:[e.jsx(j,{type:"email",name:"email",placeholder:"Your email"}),e.jsx(f,{name:"email"}),e.jsx(ge,{as:"textarea",name:"feedback",placeholder:"Your feedback"}),e.jsx(f,{name:"feedback"}),e.jsx(I,{type:"submit",children:"Send feedback"})]})}),e.jsx(V,{position:"top-right",reverseOrder:!1})]})},lt=o.div`
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
  transform: ${({isOpen:t})=>t?"translateX(0)":"translateX(-100%)"};
  z-index: 3;

  transition: transform 500ms var(--timing-function);

  @media screen and (min-width: 768px) {
    width: 260px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`,dt=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,pt=o.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,ht=o.div`
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
`,xt=o.h3`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,ut=o.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,gt=o.button`
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
`,mt=o.svg`
  width: 20px;
  height: 20px;
  stroke: var(--sidebar-needhelp-icon-color);
  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,ft=({isOpen:t,toggleSidebar:r})=>{const[s,n]=l.useState(!1),i=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[t&&e.jsx(dt,{onClick:()=>{r()},isOpen:t}),e.jsxs(lt,{isOpen:t,children:[e.jsx(me,{}),e.jsx(pt,{children:"My boards"}),e.jsx(Je,{}),e.jsx(st,{}),e.jsxs(ht,{children:[e.jsx(xt,{children:"Leave feedback"}),e.jsx(ut,{children:"Share your thoughts to help us. Your feedback on improvements or errors makes this app better!"}),e.jsxs(gt,{onClick:i,children:[e.jsx(mt,{children:e.jsx("use",{href:`${h}#icon-help-circle`})}),"Click me to write"]}),s&&e.jsx(ct,{onClose:a})]}),e.jsx(at,{})]})]})},bt=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,vt=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,jt=o.svg`
  width: 200px;
  height: 200px;
`,kt=o.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,wt=o.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,yt=()=>{const[t,r]=l.useState(!1),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(vt,{children:[e.jsx(jt,{children:e.jsx("use",{href:h+"#icon-main-trello"})}),e.jsxs(kt,{children:["Before starting your project, it is essential",e.jsx(wt,{onClick:s,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),t&&e.jsx(W,{onClose:n})]})},It=t=>t.auth.isAuthLoading||t.boards.isBoardsLoading||t.columns.isColumnsLoading||t.cards.isCardsLoading,Bt=t=>t.auth.authError||t.boards.boardsError||t.columns.columnsError||t.cards.cardsError,Ot=()=>{const[t,r]=l.useState(!1),s=m(ne),n=m(M),i=m(Bt),a=v(),c=_(),p=m(It);l.useEffect(()=>{(async()=>{await a(ce()),await a(le()),s&&s!=="null"&&await a(U(s))})()},[]),l.useEffect(()=>{if(n){const x=n.title.toLowerCase().replace(/[\s/]+/g,"-");c(x)}},[n]),l.useEffect(()=>{i==="Not authorized"&&a(N()),i&&$.error(i)},[i]);const u=()=>{r(!t)};return e.jsxs(bt,{children:[e.jsx(ft,{isOpen:t,toggleSidebar:u}),e.jsx(_e,{toggleSidebar:u}),n?e.jsx(ie,{}):e.jsx(yt,{}),e.jsx(V,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(ae,{})]})};export{Ot as default};
