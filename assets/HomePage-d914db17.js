import{n as t,j as e,r as c,u as j,d as X,a as m,e as G,f as J,g as K,h as Q,i as Y,k as _,m as z,o as Z,p as ee,q as te,t as oe,v as se,x as re,O as ne,y as ie}from"./index-c62fe38d.js";import{s as x}from"./sprite-685f0d05.js";import{M as k,B as I,C as ae,t as le,i as ce,s as de,a as B,b as pe}from"./selectors-4ace1b60.js";import{b as C,c as S,d as f,e as $,S as v,f as b,a as U,u as N,B as w}from"./ModalComponents.styled-02e35bcb.js";import{L as xe}from"./Logo-84fa16de.js";import{s as he,a as ue,_ as ge,I as me}from"./selectors-25863b0f.js";const fe=t.header`
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
`,be=t.button`
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
`,ve=t.div`
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
`,ke=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`,Ie=t.div`
  color: var(--header-name-color);
`,Be=t.div`
  position: relative;
  cursor: pointer;
`,Ce=t.svg`
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
`,Se=t.img`
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
`,Me=t.div`
  width: 68px;
  height: 78px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`,Le=t.svg`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
`,Te=t.img`
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 8px;
`,Oe=t.label`
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
`,Fe=t.svg`
  stroke: black;
  width: 10px;
  height: 10px;
`,qe=({avatarUrl:o,onAvatarChange:s})=>e.jsxs(Me,{children:[o?e.jsx(Te,{src:o}):e.jsx(Le,{children:e.jsx("use",{href:`${x}#icon-avatar`})}),e.jsxs(Oe,{children:[e.jsx(Ee,{type:"file",accept:"image/*",onChange:s}),e.jsx(Fe,{children:e.jsx("use",{href:`${x}#icon-plus`})})]})]}),Ae=({onClose:o,user:s})=>{const[r,n]=c.useState(s.avatarUrl),[l,i]=c.useState(null),a=j(),p=h=>{const g=h.target.files[0];if(g){const y=URL.createObjectURL(g);n(y),i(g)}},u=h=>{const g=new FormData;g.append("newName",h.name),g.append("newEmail",h.email),g.append("avatar",l),a(X(g)),o()};return e.jsx(k,{onClose:o,title:"Edit profile",children:e.jsx(C,{initialValues:{name:s.name,email:s.email,avatarUrl:s.avatarUrl},validationSchema:S({name:f().max(15,"Must be 15 characters or less").required("Name is required"),email:f().email("Invalid email address").required("Email is required")}),onSubmit:u,children:e.jsxs($,{children:[e.jsx(qe,{avatarUrl:r,onAvatarChange:p}),e.jsx(v,{type:"text",name:"name",placeholder:"Name",profile:"true"}),e.jsx(b,{name:"name"}),e.jsx(v,{type:"email",name:"email",placeholder:"Email",profile:"true"}),e.jsx(b,{name:"email"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},_e=()=>{const o=m(G),[s,r]=c.useState(!1),{name:n,avatarUrl:l}=o,i=()=>{r(!0)},a=()=>{r(!1)};return e.jsxs(ke,{children:[e.jsx(Ie,{children:e.jsx($e,{children:n})}),e.jsx(Be,{onClick:i,children:l?e.jsx(Se,{src:l}):e.jsx(Ce,{children:e.jsx("use",{href:`${x}#icon-avatar`})})}),s&&e.jsx(Ae,{onClose:a,user:o})]})},ze=({toggleSidebar:o})=>{const s=m(J),[r,n]=c.useState(!1),l=c.useRef(null),i=j();c.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(s)},[s]);const a=()=>{n(!r)},p=h=>{h.stopPropagation(),a()},u=h=>{h!==s&&(i(K({theme:h})),a())};return e.jsxs(fe,{children:[e.jsx(be,{onClick:()=>{o()},children:e.jsx(je,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(ve,{children:[e.jsxs(we,{ref:l,onClick:p,children:["Theme",e.jsx(ye,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),e.jsx(_e,{}),r&&e.jsx(ae,{title:"Select theme",options:le,selectedOption:s,isOpen:r,onClose:a,handleOptionClick:u,openBtnRef:l})]})]})},Ue=t.ul`
  display: flex;
  gap: 8px;
`,Ne=t.li`
  display: block;
  width: 18px;
  height: 18px;
`,Re=t.label``,De=t(U)`
  display: none;
`,He=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:o})=>o?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,R=({name:o,selectedItem:s})=>{const[r,n]=c.useState(s||""),{setFieldValue:l}=N();return c.useEffect(()=>{n(s||"")},[s]),e.jsx(Ue,{children:ce.map(i=>e.jsx(Ne,{children:e.jsxs(Re,{children:[e.jsx(De,{type:"radio",name:o,value:i,onChange:a=>{n(a.target.value),l(o,a.target.value)}}),e.jsx(He,{selected:r===i,children:e.jsx("use",{href:x+`#${i}`})})]})},i))})},Pe=t.ul`
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
`,Ve=t.img`
  width: 28px;
  height: 28px;
`,We=t.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,D=({name:o,selectedItem:s})=>{const[r,n]=c.useState(s||""),l=m(de),{setFieldValue:i}=N();return c.useEffect(()=>{n(s||"")},[s]),e.jsxs(Pe,{children:[e.jsx(M,{children:e.jsxs(L,{children:[e.jsx(T,{type:"radio",name:o,value:"null",onChange:a=>{n(a.target.value),i(o,a.target.value)}}),e.jsx(O,{selected:r==="null",children:e.jsx(We,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),l.map(a=>e.jsx(M,{children:e.jsxs(L,{children:[e.jsx(T,{type:"radio",name:o,value:a._id,onChange:p=>{n(p.target.value),i(o,p.target.value)}}),e.jsx(O,{selected:r===a._id,children:e.jsx(Ve,{src:a.previewURL})})]})},a._id))]})},H=({onClose:o})=>{const s=j(),r=n=>{const l={title:n.title,icon:n.selectedIcon,backgroundId:n.selectedBg};s(Q(l)),o()};return e.jsx(k,{onClose:o,title:"New board",children:e.jsx(C,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:S({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:r,children:e.jsxs($,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(b,{name:"title"}),e.jsx(w,{children:"Icons"}),e.jsx(R,{name:"selectedIcon"}),e.jsx(b,{name:"selectedIcon"}),e.jsx(w,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg"}),e.jsx(b,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Xe=t.div`
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
`,Qe=()=>{const[o,s]=c.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{children:[e.jsx(Ge,{children:"Create a new board"}),e.jsx(Je,{type:"button",onClick:r,children:e.jsx(Ke,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),o&&e.jsx(H,{onClose:n})]})},Ye=({boardId:o,onClose:s})=>{var i,a;const r=m(B),n=j(),l=p=>{const u={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};n(Y({boardId:o,body:u})),s()};return e.jsx(k,{onClose:s,title:"Edit board",children:e.jsx(C,{initialValues:{title:r==null?void 0:r.title,selectedIcon:r==null?void 0:r.icon,selectedBg:((i=r==null?void 0:r.background)==null?void 0:i._id)||"null"},validationSchema:S({title:f().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:f().required("Icon is required"),selectedBg:f().required("Background is required")}),onSubmit:l,children:e.jsxs($,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(b,{name:"title"}),e.jsx(w,{children:"Icons"}),e.jsx(R,{name:"selectedIcon",selectedItem:r==null?void 0:r.icon}),e.jsx(b,{name:"selectedIcon"}),e.jsx(w,{children:"Backgrounds"}),e.jsx(D,{name:"selectedBg",selectedItem:((a=r==null?void 0:r.background)==null?void 0:a._id)||"null"}),e.jsx(b,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Ze=t.ul`
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
`,et=t.li`
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
`,tt=t.li`
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
`,F=t.p`
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
`,ot=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,q=t.button`
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
`,st=()=>{const[o,s]=c.useState(!1),[r,n]=c.useState(!1),l=m(pe),i=m(B),a=j(),p=_(),u=(d,V)=>{a(z(d));const W=V.toLowerCase().replace(/[\s/]+/g,"-");p(W)},h=()=>{s(!0)},g=()=>{s(!1)},y=d=>{n(d),h()},P=d=>{a(Z(d)),p("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:l.map(d=>d._id===(i==null?void 0:i._id)?e.jsxs(tt,{children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(F,{children:d.title}),e.jsxs(ot,{children:[e.jsx(q,{type:"button",onClick:()=>y(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(q,{type:"button",onClick:()=>P(d._id),children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},d._id):e.jsxs(et,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(E,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(F,{children:d.title})]},d._id))}),o&&e.jsx(Ye,{boardId:r,onClose:g})]})},rt=t.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,nt=t.button`
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
`,it=t.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,at=()=>{const o=j(),s=()=>{o(ee())};return e.jsxs(nt,{onClick:s,children:[e.jsx(rt,{children:"Log out"}),e.jsx(it,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},lt=()=>{const[o,s]=c.useState({email:"",feedback:""}),r=l=>{const{name:i,value:a}=l.target;s({...o,[i]:a})},n=async l=>{l.preventDefault();try{const i=await te(o);console.log("Response from server:",i)}catch(i){console.log("Error:",i.message)}};return e.jsxs("form",{onSubmit:n,children:[e.jsxs("label",{children:["Write your email",e.jsx("input",{type:"email",name:"email",value:o.email,onChange:r})]}),e.jsxs("label",{children:["Write your feedback",e.jsx("input",{type:"text",name:"feedback",value:o.feedback,onChange:r})]}),e.jsx("button",{type:"submit",children:"Send feedback"})]})},ct=t.div`
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
`,dt=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,pt=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,xt=t.div`
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
`,ht=({isOpen:o,toggleSidebar:s})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(dt,{onClick:()=>{s()},isOpen:o}),e.jsxs(ct,{isOpen:o,children:[e.jsx(xe,{}),e.jsx(pt,{children:"My boards"}),e.jsx(Qe,{}),e.jsx(st,{}),e.jsx(xt,{children:e.jsx(lt,{})}),e.jsx(at,{})]})]}),ut=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,gt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,mt=t.svg`
  width: 200px;
  height: 200px;
`,ft=t.p`
  width: 335px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`,bt=t.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,jt=()=>{const[o,s]=c.useState(!1),r=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(gt,{children:[e.jsx(mt,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(ft,{children:["Before starting your project, it is essential",e.jsx(bt,{onClick:r,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),o&&e.jsx(H,{onClose:n})]})},Ct=()=>{const[o,s]=c.useState(!1),r=m(oe),n=m(B),l=m(he),i=j(),a=_(),p=m(ue);c.useEffect(()=>{i(se()),i(re()),r&&i(z(r))},[]),c.useEffect(()=>{if(n){const h=n.title.toLowerCase().replace(/[\s/]+/g,"-");a(h)}},[n]),c.useEffect(()=>{l&&ge.error(l)},[l]);const u=()=>{s(!o)};return e.jsxs(ut,{children:[e.jsx(ht,{isOpen:o,toggleSidebar:u}),e.jsx(ze,{toggleSidebar:u}),n?e.jsx(ne,{}):e.jsx(jt,{}),e.jsx(me,{position:"bottom-right",reverseOrder:!1}),p&&e.jsx(ie,{})]})};export{Ct as default};
