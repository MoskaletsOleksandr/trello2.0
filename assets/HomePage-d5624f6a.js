import{b as m,s as Q,c as p,u as j,j as e,d as Z,g as ee,e as te,f as oe,h as re,i as R,k as _,m as ne,n as se,o as ie,p as ce,q as ae,O as le}from"./index-ee35cadf.js";import{n as o}from"./emotion-styled.browser.esm-fb3b8e5c.js";import{s as x,L as de}from"./Logo-5d250e56.js";import{F as pe,a as w,E as xe,u as F,b as q,c as P,d as b}from"./index.esm-dd6f7505.js";import{s as he,a as B,b as ue}from"./selectors-66c51edb.js";const ge=o.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);
`,me=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,fe=o.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`,be=o.div`
  display: flex;
  align-items: center;
`,ve=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,je=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`,ye=o.div`
  position: relative;
`,ke=o.ul`
  position: absolute;
  display: ${({open:t})=>t?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,we=o.li`
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({selected:t})=>t?"var(--header-theme-select-text-color-hover)":"var(--header-theme-select-text-color)"};

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }
`,Be=({toggleSidebar:t})=>{const n=["light","dark","violet"],r=m(Q),[s,c]=p.useState(!1),a=p.useRef(null),i=p.useRef(null),l=j();p.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(r)},[r]),p.useEffect(()=>{const h=y=>{s&&a.current&&!a.current.contains(y.target)&&i.current!==y.target&&u()};return s?document.addEventListener("click",h):document.removeEventListener("click",h),()=>{document.removeEventListener("click",h)}},[s]);const u=()=>{c(!s)},f=h=>{l(Z({theme:h})),u()};return e.jsxs(ge,{children:[e.jsx(me,{onClick:()=>{t()},children:e.jsx(fe,{children:e.jsx("use",{href:`${x}#icon-menu`})})}),e.jsxs(be,{children:[e.jsxs(ve,{ref:i,onClick:()=>{u()},children:["Theme",e.jsx(je,{children:e.jsx("use",{href:`${x}#icon-chevron-down`})})]}),e.jsx(ye,{ref:a,children:e.jsx(ke,{open:s,children:n.map(h=>e.jsx(we,{onClick:()=>f(h),selected:r===h,children:h},h))})})]})]})};var N={exports:{}},Te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ie=Te,Ce=Ie;function D(){}function W(){}W.resetWarningCache=D;var Se=function(){function t(s,c,a,i,l,u){if(u!==Ce){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function n(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:W,resetWarningCache:D};return r.PropTypes=r,r};N.exports=Se();var $e=N.exports;const g=ee($e),Ee=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-window-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`,Le=o.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,Oe=o.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,Me=o.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;

  stroke: var(--modal-icon-close-color);

  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.2);
    outline: none;
  }
`,ze=document.querySelector("#modal-root"),T=({onClose:t,children:n,title:r})=>{p.useEffect(()=>{const c=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[t]);const s=c=>{c.currentTarget===c.target&&t()};return te.createPortal(e.jsx(Ee,{onClick:s,children:e.jsxs(Le,{children:[e.jsx(Oe,{children:r}),e.jsx(Me,{width:24,height:24,onClick:()=>{t()},children:e.jsx("use",{href:x+"#icon-x-close"})}),n]})}),ze)};T.propTypes={onClose:g.func.isRequired,title:g.string.isRequired};const A=o(pe)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,H=o(w)`
  background-color: var(--modal-input-bg-color);
  border: 1px solid var(--modal-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  color: var(--modal-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: rgb(22, 22, 22) 0px 0px 0px 50px inset;
    -webkit-text-fill-color: var(--modal-input-text-color);
    -webkit-border-before-color: var(--modal-input-border-color);
    -webkit-border-color: var(--modal-input-border-color);
    outline: transparent;
  }

  &:-webkit-autofill:focus {
    outline: transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--modal-input-placeholder-color);
  }
`,k=o.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,v=o(xe)``,Re=o.ul`
  display: flex;
  gap: 8px;
`,_e=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,Fe=o.label``,qe=o(w)`
  display: none;
`,Pe=o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,V=({name:t,icons:n,selectedItem:r})=>{const[s,c]=p.useState(r||""),{setFieldValue:a}=F();return p.useEffect(()=>{c(r||"")},[r]),e.jsx(Re,{children:n.map(i=>e.jsx(_e,{children:e.jsxs(Fe,{children:[e.jsx(qe,{type:"radio",name:t,value:i,onChange:l=>{c(l.target.value),a(t,l.target.value)}}),e.jsx(Pe,{selected:s===i,children:e.jsx("use",{href:x+`#${i}`})})]})},i))})},Ne=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,C=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,S=o.label``,$=o(w)`
  display: none;
`,E=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:t})=>t?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,De=o.img`
  width: 28px;
  height: 28px;
`,We=o.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,U=({name:t,selectedItem:n})=>{const[r,s]=p.useState(n||""),c=m(he),{setFieldValue:a}=F();return p.useEffect(()=>{s(n||"")},[n]),e.jsxs(Ne,{children:[e.jsx(C,{children:e.jsxs(S,{children:[e.jsx($,{type:"radio",name:t,value:"null",onChange:i=>{s(i.target.value),a(t,i.target.value)}}),e.jsx(E,{selected:r==="null",children:e.jsx(We,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:x+"#null-background"})})})]})}),c.map(i=>e.jsx(C,{children:e.jsxs(S,{children:[e.jsx($,{type:"radio",name:t,value:i._id,onChange:l=>{s(l.target.value),a(t,l.target.value)}}),e.jsx(E,{selected:r===i._id,children:e.jsx(De,{src:i.previewURL})})]})},i._id))]})},Ae=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: 40px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-btn-bg-color);

  color: var(--modal-btn-text-color);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--modal-btn-bg-color-hover);
  }
`,He=o.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-plus-btn-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`,Ve=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,I=({children:t,onClick:n,type:r})=>e.jsxs(Ae,{onClick:n,type:r,children:[e.jsx(He,{children:e.jsx(Ve,{width:"28px",height:"28px",children:e.jsx("use",{href:x+"#icon-plus"})})}),t]});I.propTypes={children:g.oneOfType([g.string,g.object]).isRequired,onClick:g.func,type:g.string};const X=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],G=({onClose:t})=>{const n=j(),r=s=>{const c={title:s.title,icon:s.selectedIcon,backgroundId:s.selectedBg};n(oe(c)),t()};return e.jsx(T,{onClose:t,title:"New board",children:e.jsx(q,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:P({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:r,children:e.jsxs(A,{children:[e.jsx(H,{type:"text",name:"title",placeholder:"Title"}),e.jsx(v,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(V,{name:"selectedIcon",icons:X}),e.jsx(v,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(U,{name:"selectedBg"}),e.jsx(v,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Create"})]})})})},Ue=o.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,Xe=o.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ge=o.button`
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
`,Ke=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Ye=()=>{const[t,n]=p.useState(!1),r=()=>{n(!0)},s=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ue,{children:[e.jsx(Xe,{children:"Create a new board"}),e.jsx(Ge,{type:"button",onClick:r,children:e.jsx(Ke,{width:"20px",height:"20px",children:e.jsx("use",{href:x+"#icon-plus"})})})]}),t&&e.jsx(G,{onClose:s})]})},Je=({boardId:t,onClose:n})=>{var a,i;const r=m(B),s=j(),c=l=>{const u={title:l.title,icon:l.selectedIcon,backgroundId:l.selectedBg};s(re({boardId:t,body:u})),n()};return e.jsx(T,{onClose:n,title:"New board",children:e.jsx(q,{initialValues:{title:r==null?void 0:r.title,selectedIcon:r==null?void 0:r.icon,selectedBg:(a=r==null?void 0:r.background)==null?void 0:a._id},validationSchema:P({title:b().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:b().required("Icon is required"),selectedBg:b().required("Background is required")}),onSubmit:c,children:e.jsxs(A,{children:[e.jsx(H,{type:"text",name:"title",placeholder:"Title"}),e.jsx(v,{name:"title"}),e.jsx(k,{children:"Icons"}),e.jsx(V,{name:"selectedIcon",icons:X,selectedItem:r==null?void 0:r.icon}),e.jsx(v,{name:"selectedIcon"}),e.jsx(k,{children:"Backgrounds"}),e.jsx(U,{name:"selectedBg",selectedItem:(i=r==null?void 0:r.background)==null?void 0:i._id}),e.jsx(v,{name:"selectedBg"}),e.jsx(I,{type:"submit",children:"Edit"})]})})})},Qe=o.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,Ze=o.li`
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
`,et=o.li`
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
`,L=o.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,O=o.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`,tt=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,M=o.button`
  display: block;
  background-color: transparent;
  border: none;
`,z=o.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,ot=()=>{const[t,n]=p.useState(!1),[r,s]=p.useState(!1),c=m(ue),a=m(B),i=j(),l=R(),u=(d,Y)=>{i(_(d));const J=Y.toLowerCase().replace(/[\s/]+/g,"-");l(J)},f=()=>{n(!0)},h=()=>{n(!1)},y=d=>{s(d),f()},K=d=>{i(ne(d)),l("/home")};return e.jsxs(e.Fragment,{children:[e.jsx(Qe,{children:c.map(d=>d._id===(a==null?void 0:a._id)?e.jsxs(et,{children:[e.jsx(L,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(O,{children:d.title}),e.jsxs(tt,{children:[e.jsx(M,{type:"button",onClick:()=>y(d._id),children:e.jsx(z,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(M,{type:"button",onClick:()=>K(d._id),children:e.jsx(z,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]},d._id):e.jsxs(Ze,{onClick:()=>{u(d._id,d.title)},children:[e.jsx(L,{width:"18px",height:"18px",children:e.jsx("use",{href:`${x}#${d.icon}`})}),e.jsx(O,{children:d.title})]},d._id))}),t&&e.jsx(Je,{boardId:r,onClose:h})]})},rt=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,nt=o.button`
  display: flex;
  gap: 14px;
  justify-content: left;
  align-items: center;
  margin-left: 24px;
  width: 305px;
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
`,st=o.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);

  transition: stroke 300ms var(--timing-function),
    transform 300ms var(--timing-function);
`,it=()=>{const t=j(),n=()=>{t(se())};return e.jsxs(nt,{onClick:n,children:[e.jsx(rt,{children:"Log out"}),e.jsx(st,{width:"32px",height:"32px",children:e.jsx("use",{href:`${x}#icon-login`})})]})},ct=o.div`
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
`,at=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,lt=o.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,dt=({isOpen:t,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(at,{onClick:()=>{n()},isOpen:t}),e.jsxs(ct,{isOpen:t,children:[e.jsx(de,{}),e.jsx(lt,{children:"My boards"}),e.jsx(Ye,{}),e.jsx(ot,{}),e.jsx(it,{})]})]}),pt=o.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`,xt=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
`,ht=o.svg`
  width: 200px;
  height: 200px;
`,ut=o.p`
  width: 486px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--placeholder-board-text-color);
`,gt=o.span`
  color: var(--placeholder-board-text-accent-color);
  cursor: pointer;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`,mt=()=>{const[t,n]=p.useState(!1),r=()=>{n(!0)},s=()=>{n(!1)};return e.jsxs(xt,{children:[e.jsx(ht,{children:e.jsx("use",{href:x+"#icon-main-trello"})}),e.jsxs(ut,{children:["Before starting your project, it is essential",e.jsx(gt,{onClick:r,children:" to create a board "}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),t&&e.jsx(G,{onClose:s})]})},kt=()=>{const[t,n]=p.useState(!1),r=m(ie),s=m(B),c=j(),a=R(),i=()=>{n(!t)};return p.useEffect(()=>{c(ce()),c(ae()),r&&c(_(r))},[]),p.useEffect(()=>{if(s){const l=s.title.toLowerCase().replace(/[\s/]+/g,"-");a(l)}},[s]),e.jsxs(pt,{children:[e.jsx(dt,{isOpen:t,toggleSidebar:i}),e.jsx(Be,{toggleSidebar:i}),s?e.jsx(le,{}):e.jsx(mt,{})]})};export{kt as default};
