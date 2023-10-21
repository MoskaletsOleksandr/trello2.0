import{n as t,j as e,r as c,u as j,d as X,a as m,e as G,f as J,g as K,h as Q,i as Y,k as _,m as z,o as Z,p as ee,q as te,t as oe,v as se,O as re,x as ne}from"./index-a8367e59.js";import{s as x}from"./sprite-685f0d05.js";import{M as y,B as I,C as ie,t as ae,i as le,s as ce,a as B,b as de}from"./selectors-f3821ca6.js";import{b as C,c as $,d as f,e as S,S as v,f as b,a as U,u as N,B as w}from"./ModalComponents.styled-a8166df7.js";import{L as pe}from"./Logo-4de7322b.js";import{s as xe,a as he,_ as ue,I as ge}from"./selectors-04b54b30.js";const me=t.header`
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
`,fe=t.button`
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
`,be=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,je=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,ve=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,we=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,ke=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`,ye=t.div`
  color: var(--header-name-color);
`,Ie=t.div`
  position: relative;
  cursor: pointer;
`,Be=t.svg`
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
`,Ce=t.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`,$e=t.p`
  text-transform: capitalize;
  font-weight: medium;
`,Se=t.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`,Me=t.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`,Le=t.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`,Te=t.label`
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
`,Oe=t.input`
  display: none;
  position: absolute;
`,Ee=t.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,qe=({avatarUrl:o,onAvatarChange:s})=>e.jsxs(Se,{children:[o?e.jsx(Le,{src:o}):e.jsx(Me,{children:e.jsx("use",{href:`${x}#icon-avatar`})}),e.jsxs(Te,{children:[e.jsx(Oe,{type:"file",accept:"image/*",onChange:s}),e.jsx(Ee,{children:e.jsx("use",{href:`${x}#icon-plus`})})]})]}),Fe=({onClose:o,user:s})=>{const[r,n]=c.useState(s.avatarUrl),[l,a]=c.useState(null),i=j(),p=h=>{const u=h.target.files[0];if(u){const k=URL.createObjectURL(u);n(k),a(u),console.log("file: ",u)}},g=h=>{const u=new FormData;u.append("newName",h.name),u.append("newEmail",h.email),u.append("avatar",l),i(X(u)),o()};return e.jsx(y,{onClose:o,title:"Edit profile",children:e.jsx(C,{initialValues:{name:s.name,email:s.email,avatarUrl:s.avatarUrl},validationSchema:$({name:f().max(15,"Must be 15 characters or less").required("Name is required"),email:f().email("Invalid email address").required("Email is required")}),onSubmit:g,children:e.jsxs(S,{children:[e.jsx(qe,{avatarUrl:r,onAvatarChange:p}),e.jsx(v,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(b,{name:"name"}),e.jsx(v,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(b,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ae=()=>{const o=m(G),[s,r]=c.useState(!1),{name:n,avatarUrl:l}=o,a=()=>{r(!0)},i=()=>{r(!1)};return e.jsxs(ke,{children:[e.jsx(ye,{children:e.jsx($e,{children:n})}),e.jsx(Ie,{onClick:a,children:l?e.jsx(Ce,{src:l}):e.jsx(Be,{children:e.jsx("use",{href:`${x}#icon-avatar`})})}),s&&e.jsx(Fe,{onClose:i,user:o})]})},_e=({toggleSidebar:o})=>{const s=m(J),[r,n]=c.useState(!1),l=c.useRef(null),a=j();c.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(s)},[s]);const i=()=>{n(!r)},p=h=>{h.stopPropagation(),i()},g=h=>{h!==s&&(a(K({theme:h})),i())};return e.jsxs(me,{children:[e.jsx(fe,{onClick:()=>{o()},children:e.jsx(be,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(je,{children:[e.jsxs(ve,{ref:l,onClick:p,children:["Theme",e.jsx(we,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),e.jsx(Ae,{}),r&&e.jsx(ie,{title:"Select theme",options:ae,selectedOption:s,isOpen:r,onClose:i,handleOptionClick:g,openBtnRef:l})]})]})},ze=t.ul`
  display: flex;
  gap: 8px;
`,Ue=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,Ne=t.label``,Re=t(U)`
  display: none;
`,De=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,R=({name:o,selectedItem:s})=>{const[r,n]=c.useState(s||""),{setFieldValue:l}=N();return c.useEffect(()=>{n(s||"")},[s]),e.jsx(ze,{children:le.map(a=>e.jsx(Ue,{children:e.jsxs(Ne,{children:[e.jsx(Re,{type:"radio",name:o,value:a,onChange:i=>{n(i.target.value),l(o,i.target.value)}}),e.jsx(De,{selected:r===a,children:e.jsx("use",{href:x+`#${a}`})})]})},a))})},He=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,M=t.li`
  display: block;
  width: 28px;
  height: 28px;
`,L=t.label``,T=t(U)`
  display: none;
`,O=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:o})=>o?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,Pe=t.img`
  width: 28px;
  height: 28px;
`,Ve=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,D=({name:o,selectedItem:s})=>{const[r,n]=c.useState(s||""),l=m(ce),{setFieldValue:a}=N();return c.useEffect(()=>{n(s||"")},[s]),e.jsxs(He,{children:[e.jsx(M,{children:e.jsxs(L,{children:[e.jsx(T,{type:"radio",name:o,value:"null",onChange:i=>{n(i.target.value),a(o,i.target.value)}}),e.jsx(O,{selected:r==="null",children:e.jsx(Ve,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),l.map(i=>e.jsx(M,{children:e.jsxs(L,{children:[e.jsx(T,{type:"radio",name:o,value:i._id,onChange:p=>{n(p.target.value),a(o,p.target.value)}}),e.jsx(O,{selected:r===i._id,children:e.jsx(Pe,{src:i.previewURL})})]})},i._id))]})},H=({onClose:o})=>{const s=j(),r=n=>{const l={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};s(Q(l)),o()};return e.jsx(y,{onClose:o,title:"New board",children:e.jsx(C,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:$({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:r,children:e.jsxs(S,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(b,{name:"title"}),e.jsx(w,{children:"Icons"}),e.jsx(R,{name:"selectedIcon"}),e.jsx(b,{name:"selectedIcon"}),e.jsx(w,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg"}),e.jsx(b,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},We=t.div`
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
`,Xe=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ge=t.button`
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
`,Je=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Ke=()=>{const[o,s]=c.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(We,{children:[e.jsx(Xe,{children:"Create a new board"}),e.jsx(Ge,{type:"button",onClick:r,children:e.jsx(Je,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(H,{onClose:n})]})},Qe=({boardId:o,onClose:s})=>{var a,i;const r=m(B),n=j(),l=p=>{const g={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(Y({boardId:o,body:g})),s()};return e.jsx(y,{onClose:s,title:"Edit board",children:e.jsx(C,{initialValues:{title:r==null?void 0:r.title,selectedIcon:r==null?void 0:r.icon,selectedBg:((a=r==null?void 0:r.background)==null?void 0:a._id)||"null"},validationSchema:$({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:l,children:e.jsxs(S,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(b,{name:"title"}),e.jsx(w,{children:"Icons"}),e.jsx(R,{name:"selectedIcon",selectedItem:r==null?void 0:r.icon}),e.jsx(b,{name:"selectedIcon"}),e.jsx(w,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg",selectedItem:((i=r==null?void 0:r.background)==null?void 0:i._id)||"null"}),e.jsx(b,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ye=t.ul`
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
`,Ze=t.li`
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
`,et=t.li`
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
`,E=t.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,q=t.p`
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
`,tt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,F=t.button`
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
`,ot=()=>{const[o,s]=c.useState(!1),[r,n]=c.useState(!1),l=m(de),a=m(B),i=j(),p=_(),g=(d,V)=>{i(z(d));const W=V.toLowerCase().replace(/[\s/]+/g,"-");p(W)},h=()=>{s(!0)},u=()=>{s(!1)},k=d=>{n(d),h()},P=d=>{i(Z(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:l.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(et,{children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(q,{children:d.title}),e.jsxs(tt,{children:[e.jsx(F,{type:"button",onClick:()=>k(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(F,{type:"button",onClick:()=>P(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},d._id):e.jsxs(Ze,{onClick:()=>{g(d._id,d.title)},children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(q,{children:d.title})]},d._id))}),o&&e.jsx(Qe,{boardId:r,onClose:u})]})},st=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,rt=t.button`
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
`,nt=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,it=()=>{const o=j(),s=()=>{o(ee())};return e.jsxs(rt,{onClick:s,children:[e.jsx(st,{children:"Log out"}),e.jsx(nt,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},at=t.div`
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
`,lt=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,ct=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,dt=t.div`
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
`,pt=({isOpen:o,toggleSidebar:s})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(lt,{onClick:()=>{s()},isOpen:o}),e.jsxs(at,{isOpen:o,children:[e.jsx(pe,{}),e.jsx(ct,{children:"My boards"}),e.jsx(Ke,{}),e.jsx(ot,{}),e.jsx(dt,{}),e.jsx(it,{})]})]}),xt=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,ht=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,ut=t.svg`
  width: 200px;
  height: 200px;
`,gt=t.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,mt=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,ft=()=>{const[o,s]=c.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(ht,{children:[e.jsx(ut,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(gt,{children:["Before starting your project, it is essential",e.jsx(mt,{onClick:r,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(H,{onClose:n})]})},It=()=>{const[o,s]=c.useState(!1),r=m(te),n=m(B),l=m(xe),a=j(),i=_(),p=m(he);c.useEffect(()=>{a(oe()),a(se()),r&&a(z(r))},[]),c.useEffect(()=>{if(n){const h=n.title.toLowerCase().replace(/[\s/]+/g,"-");i(h)}},[n]),c.useEffect(()=>{l&&ue.error(l)},[l]);const g=()=>{s(!o)};return e.jsxs(xt,{children:[e.jsx(pt,{isOpen:o,toggleSidebar:g}),e.jsx(_e,{toggleSidebar:g}),n?e.jsx(re,{}):e.jsx(ft,{}),e.jsx(ge,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(ne,{})]})};export{It as default};
