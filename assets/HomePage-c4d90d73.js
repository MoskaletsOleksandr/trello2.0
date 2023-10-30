import{n as o,j as e,r as l,u as v,h as G,d as m,i as J,k as K,m as Q,o as ee,p as _,q as U,t as te,v as oe,w as re,x as N,y as se,z as ne,O as ie,A as ae,B as ce,C as le}from"./index-4278c0ba.js";import{s as h}from"./sprite-fc6f0751.js";import{M as w,S as y,a as j,b as f,B as I,C as de,t as pe,i as he,s as xe,c as M,d as k,e as ue,f as ge}from"./selectors-f5f6839e.js";import{b as B,c as C,d as b,a as R,u as D}from"./index.esm-6f4ae1e2.js";import{L as me}from"./Logo-d194f465.js";import{I as V,_ as $}from"./index-5e38b3fd.js";const fe=o.header`
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
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
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
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
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
`,Fe=o.label`
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
`,Oe=o.input`
  display: none;
  position: absolute;
`,Ee=o.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,ze=({avatarUrl:t,onAvatarChange:s})=>e.jsxs(Me,{children:[t?e.jsx(Te,{src:t}):e.jsx(Le,{children:e.jsx("use",{href:`${h}#icon-avatar`})}),e.jsxs(Fe,{children:[e.jsx(Oe,{type:"file",accept:"image/*",onChange:s}),e.jsx(Ee,{children:e.jsx("use",{href:`${h}#icon-plus`})})]})]}),qe=({onClose:t,user:s})=>{const[r,n]=l.useState(s.avatarUrl),[i,a]=l.useState(null),c=v(),p=x=>{const g=x.target.files[0];if(g){const S=URL.createObjectURL(g);n(S),a(g)}},u=x=>{const g=new FormData;g.append("newName",x.name),g.append("newEmail",x.email),g.append("avatar",i),c(G(g)),t()};return e.jsx(w,{onClose:t,title:"Edit profile",children:e.jsx(B,{initialValues:{name:s.name,email:s.email,avatarUrl:s.avatarUrl},validationSchema:C({name:b().max(29,"Must be 29 characters or less").required("Name is required").matches(/^[A-Za-z\u0410-\u044F\u0451\u0401\s]+$/,"Name can only contain letters and spaces"),email:b().email("Invalid email address").required("Email is required")}),onSubmit:u,children:e.jsxs(y,{children:[e.jsx(ze,{avatarUrl:r,onAvatarChange:p}),e.jsx(j,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(f,{name:"name"}),e.jsx(j,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(f,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ae=()=>{const t=m(J),[s,r]=l.useState(!1),{name:n,avatarUrl:i}=t,a=()=>{r(!0)},c=()=>{r(!1)};return e.jsxs(ye,{children:[e.jsx(Ie,{children:e.jsx($e,{children:n})}),e.jsx(Be,{onClick:a,children:i?e.jsx(Se,{src:i}):e.jsx(Ce,{children:e.jsx("use",{href:`${h}#icon-avatar`})})}),s&&e.jsx(qe,{onClose:c,user:t})]})},_e=({toggleSidebar:t})=>{const s=m(K),[r,n]=l.useState(!1),i=l.useRef(null),a=v();l.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(s)},[s]);const c=()=>{n(!r)},p=x=>{x.stopPropagation(),c()},u=x=>{x!==s&&(a(Q({theme:x})),c())};return e.jsxs(fe,{children:[e.jsx(be,{onClick:()=>{t()},children:e.jsx(ve,{children:e.jsx("use",{href:`${h}#icon-menu`})})}),e.jsxs(je,{children:[e.jsxs(ke,{ref:i,onClick:p,children:["Theme",e.jsx(we,{children:e.jsx("use",{href:`${h}#icon-chevron-down`})})]}),e.jsx(Ae,{}),r&&e.jsx(de,{title:"Select theme",options:pe,selectedOption:s,isOpen:r,onClose:c,handleOptionClick:u,openBtnRef:i})]})]})},Ue=o.ul`
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
`,H=({name:t,selectedItem:s})=>{const[r,n]=l.useState(s||""),{setFieldValue:i}=D();return l.useEffect(()=>{n(s||"")},[s]),e.jsx(Ue,{children:he.map(a=>e.jsx(Ne,{children:e.jsxs(Re,{children:[e.jsx(De,{type:"radio",name:t,value:a,onChange:c=>{n(c.target.value),i(t,c.target.value)}}),e.jsx(Ve,{selected:r===a,children:e.jsx("use",{href:h+`#${a}`})})]})},a))})},He=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,L=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,T=o.label``,F=o(R)`
  display: none;
`,O=o.div`
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
`,P=({name:t,selectedItem:s})=>{const[r,n]=l.useState(s||""),i=m(xe),{setFieldValue:a}=D();return l.useEffect(()=>{n(s||"")},[s]),e.jsxs(He,{children:[e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(F,{type:"radio",name:t,value:"null",onChange:c=>{n(c.target.value),a(t,c.target.value)}}),e.jsx(O,{selected:r==="null",children:e.jsx(We,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:h+"#null-background"})})})]})}),i.map(c=>e.jsx(L,{children:e.jsxs(T,{children:[e.jsx(F,{type:"radio",name:t,value:c._id,onChange:p=>{n(p.target.value),a(t,p.target.value)}}),e.jsx(O,{selected:r===c._id,children:e.jsx(Pe,{src:c.previewURL})})]})},c._id))]})},Xe=({boardId:t,onClose:s})=>{var a,c;const r=m(M),n=v(),i=p=>{const u={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(ee({boardId:t,body:u})),s()};return e.jsx(w,{onClose:s,title:"Edit board",children:e.jsx(B,{initialValues:{title:r==null?void 0:r.title,selectedIcon:r==null?void 0:r.icon,selectedBg:((a=r==null?void 0:r.background)==null?void 0:a._id)||"null"},validationSchema:C({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:i,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon",selectedItem:r==null?void 0:r.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg",selectedItem:((c=r==null?void 0:r.background)==null?void 0:c._id)||"null"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ye=o.ul`
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
`,Ze=o.li`
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
`,Ge=o.li`
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
`,z=o.p`
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
`,Je=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,q=o.button`
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
`,Ke=()=>{const[t,s]=l.useState(!1),[r,n]=l.useState(!1),i=m(ue),a=m(M),c=v(),p=_(),u=async(d,Y)=>{await c(U(d)),await c(te({boardId:d}));const Z=Y.toLowerCase().replace(/[\s/]+/g,"-");p(Z)},x=()=>{s(!0)},g=()=>{s(!1)},S=d=>{n(d),x()},X=d=>{c(oe(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:i.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(Ge,{children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${d.icon}`})}),e.jsx(z,{children:d.title}),e.jsxs(Je,{children:[e.jsx(q,{type:"button",onClick:()=>S(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),e.jsx(q,{type:"button",onClick:()=>X(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})})]})]},d._id):e.jsxs(Ze,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${d.icon}`})}),e.jsx(z,{children:d.title})]},d._id))}),t&&e.jsx(Xe,{boardId:r,onClose:g})]})},W=({onClose:t})=>{const s=v(),r=n=>{const i={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};s(re(i)),t()};return e.jsx(w,{onClose:t,title:"New board",children:e.jsx(B,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:C({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:r,children:e.jsxs(y,{children:[e.jsx(j,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(H,{name:"selectedIcon"}),e.jsx(f,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(P,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Qe=o.div`
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
`,et=o.p`
  width: 86px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,tt=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: var(--sidebar-button-plus-bg-color);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function),
    transform 300ms var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: var(--modal-btn-bg-color-hover);
  }
`,ot=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,rt=()=>{const[t,s]=l.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Qe,{children:[e.jsx(et,{children:"Create a new board"}),e.jsx(tt,{type:"button",onClick:r,children:e.jsx(ot,{width:"20px",height:"20px",children:e.jsx("use",{href:h+"#icon-plus"})})})]}),t&&e.jsx(W,{onClose:n})]})},st=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  transition: color 300ms var(--timing-function);
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

  &:hover p {
    color: var(--sidebar-logout-icon-color-hover);
  }

  &:focus p {
    color: var(--sidebar-logout-icon-color-hover);
  }

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
`,at=()=>{const t=v(),s=()=>{t(N())};return e.jsxs(nt,{onClick:s,children:[e.jsx(st,{children:"Log out"}),e.jsx(it,{width:"32px",height:"32px",children:e.jsx("use",{href:`${h}#icon-login`})})]})},ct=({onClose:t})=>{const s=async r=>{const n={email:r.email,feedback:r.feedback};try{const i=await se(n);$.success(i.message)}catch(i){$.error(i.message)}t()};return e.jsxs(w,{onClose:t,title:"Leave feedback",children:[e.jsx(B,{initialValues:{email:"",feedback:""},validationSchema:C({email:b().email("Invalid email address"),feedback:b().max(499,"Must be 499 characters or less").required("Feedback is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(j,{type:"email",name:"email",placeholder:"Your email"}),e.jsx(f,{name:"email"}),e.jsx(ge,{as:"textarea",name:"feedback",placeholder:"Your feedback"}),e.jsx(f,{name:"feedback"}),e.jsx(I,{type:"submit",children:"Send feedback"})]})}),e.jsx(V,{position:"top-right",reverseOrder:!1})]})},lt=o.div`
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
  width: 160px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms var(--timing-function);

  &:hover,
  :focus {
    color: var(--sidebar-logout-icon-color-hover);
  }

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
`,ft=({isOpen:t,toggleSidebar:s})=>{const[r,n]=l.useState(!1),i=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[t&&e.jsx(dt,{onClick:()=>{s()},isOpen:t}),e.jsxs(lt,{isOpen:t,children:[e.jsx(me,{}),e.jsx(pt,{children:"My boards"}),e.jsx(rt,{}),e.jsx(Ke,{}),e.jsxs(ht,{children:[e.jsx(xt,{children:"Leave feedback"}),e.jsx(ut,{children:"Share your thoughts to help us. Your feedback on improvements or errors makes this app better!"}),e.jsxs(gt,{onClick:i,children:[e.jsx(mt,{children:e.jsx("use",{href:`${h}#icon-help-circle`})}),"Click me to write"]}),r&&e.jsx(ct,{onClose:a})]}),e.jsx(at,{})]})]})},bt=o.div`
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
`,yt=()=>{const[t,s]=l.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(vt,{children:[e.jsx(jt,{children:e.jsx("use",{href:h+"#icon-main-trello"})}),e.jsxs(kt,{children:["Before starting your project, it is essential",e.jsx(wt,{onClick:r,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),t&&e.jsx(W,{onClose:n})]})},It=t=>t.auth.isAuthLoading||t.boards.isBoardsLoading||t.columns.isColumnsLoading||t.cards.isCardsLoading,Bt=t=>t.auth.authError||t.boards.boardsError||t.columns.columnsError||t.cards.cardsError,Ft=()=>{const[t,s]=l.useState(!1),r=m(ne),n=m(M),i=m(Bt),a=v(),c=_(),p=m(It);l.useEffect(()=>{(async()=>{await a(ce()),await a(le()),r&&r!=="null"&&await a(U(r))})()},[]),l.useEffect(()=>{if(n){const x=n.title.toLowerCase().replace(/[\s/]+/g,"-");c(x)}},[n]),l.useEffect(()=>{i==="Not authorized"&&a(N()),i&&$.error(i)},[i]);const u=()=>{s(!t)};return e.jsxs(bt,{children:[e.jsx(ft,{isOpen:t,toggleSidebar:u}),e.jsx(_e,{toggleSidebar:u}),n?e.jsx(ie,{}):e.jsx(yt,{}),e.jsx(V,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(ae,{})]})};export{Ft as default};
