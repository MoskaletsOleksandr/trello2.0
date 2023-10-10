import{b as g,s as Y,c as x,u as v,j as e,d as J,g as Q,e as Z,f as ee,h as te,i as O,k as _,m as oe,n as re,o as ne,p as se,q as ie}from"./index-1e29e525.js";import{n as o}from"./emotion-styled.browser.esm-1ad9aeda.js";import{s as h,L as ce}from"./Logo-f9a5907a.js";import{F as ae,a as y,E as le,u as M,b as F,c as R,d as m}from"./index.esm-c5882fb5.js";const de=o.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 24px;
  color: black;
  background-color: teal;
  /* color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color); */

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 1200px) {
    padding-left: 20px;
    padding-right: 32px;
  }
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
  stroke: black;
  /* stroke: var(--header-name-color); */
`,he=o.div`
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
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,be=o.div`
  position: relative;
`,me=o.ul`
  position: absolute;
  display: ${t=>t.open?"block":"none"};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px black;
  /* border: solid 1px var(--header-theme-select-border-color); */
  border-radius: 8px;
  background-color: teal;
  /* background-color: var(--header-theme-select-bg-color); */
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,fe=o.li`
  padding: 5px 10px;
  cursor: pointer;
  color: black;
  text-transform: capitalize;
  /* color: var(--header-theme-select-text-color); */

  /* &:hover {
    color: var(--header-theme-select-text-color-hover);
  }

  ${t=>t.selected&&`
      color: var(--header-theme-select-text-color-hover)
    `} */
`,ve=({toggleSidebar:t})=>{const n=["light","dark","violet"],r=g(Y),[c,s]=x.useState(!1),a=v();x.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(r)},[r]);const i=()=>{s(!c)},d=p=>{a(J({theme:p})),i()};return e.jsxs(de,{children:[e.jsx(pe,{onClick:()=>{t()},children:e.jsx(xe,{children:e.jsx("use",{href:`${h}#icon-menu`})})}),e.jsxs(he,{children:[e.jsxs(ue,{onClick:()=>{i()},children:["Theme",e.jsx(ge,{children:e.jsx("use",{href:`${h}#icon-chevron-down`})})]}),e.jsx(be,{children:e.jsx(me,{open:c,children:n.map(p=>e.jsx(fe,{onClick:()=>d(p),children:p},p))})})]})]})};var q={exports:{}},je="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ye=je,ke=ye;function P(){}function N(){}N.resetWarningCache=P;var we=function(){function t(c,s,a,i,d,p){if(p!==ke){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}t.isRequired=t;function n(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:N,resetWarningCache:P};return r.PropTypes=r,r};q.exports=we();var Be=q.exports;const u=Q(Be),Te=o.div`
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
`,Ie=o.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,Ce=o.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,Se=o.svg`
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
`,$e=document.querySelector("#modal-root"),k=({onClose:t,children:n,title:r})=>{x.useEffect(()=>{const s=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[t]);const c=s=>{s.currentTarget===s.target&&t()};return Z.createPortal(e.jsx(Te,{onClick:c,children:e.jsxs(Ie,{children:[e.jsx(Ce,{children:r}),e.jsx(Se,{width:24,height:24,onClick:()=>{t()},children:e.jsx("use",{href:h+"#icon-x-close"})}),n]})}),$e)};k.propTypes={onClose:u.func.isRequired,title:u.string.isRequired};const D=o(ae)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,W=o(y)`
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
`,j=o.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,f=o(le)``,Ee=o.ul`
  display: flex;
  gap: 8px;
`,Le=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,ze=o.label``,Oe=o(y)`
  display: none;
`,_e=o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,V=({name:t,icons:n,selectedItem:r})=>{const[c,s]=x.useState(r||""),{setFieldValue:a}=M();return x.useEffect(()=>{s(r||"")},[r]),e.jsx(Ee,{children:n.map(i=>e.jsx(Le,{children:e.jsxs(ze,{children:[e.jsx(Oe,{type:"radio",name:t,value:i,onChange:d=>{s(d.target.value),a(t,d.target.value)}}),e.jsx(_e,{selected:c===i,children:e.jsx("use",{href:h+`#${i}`})})]})},i))})},Me=t=>t.boards.boards,w=t=>t.boards.currentBoard,Fe=t=>t.boards.backgrounds,Re=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,T=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,I=o.label``,C=o(y)`
  display: none;
`,S=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  outline: ${({selected:t})=>t?"2px solid var(--modal-selected-icon-color)":"none"};
  border-radius: 8px;
  cursor: pointer;
`,qe=o.img`
  width: 28px;
  height: 28px;
`,Pe=o.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,A=({name:t,selectedItem:n})=>{const[r,c]=x.useState(n||""),s=g(Fe),{setFieldValue:a}=M();return x.useEffect(()=>{c(n||"")},[n]),e.jsxs(Re,{children:[e.jsx(T,{children:e.jsxs(I,{children:[e.jsx(C,{type:"radio",name:t,value:"null",onChange:i=>{c(i.target.value),a(t,i.target.value)}}),e.jsx(S,{selected:r==="null",children:e.jsx(Pe,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:h+"#null-background"})})})]})}),s.map(i=>e.jsx(T,{children:e.jsxs(I,{children:[e.jsx(C,{type:"radio",name:t,value:i._id,onChange:d=>{c(d.target.value),a(t,d.target.value)}}),e.jsx(S,{selected:r===i._id,children:e.jsx(qe,{src:i.previewURL})})]})},i._id))]})},Ne=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: 40px;
  border-radius: 8px;
  border: none;
  background-color: var(--auth-btn-bg-color);

  color: var(--modal-btn-text-color);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--auth-btn-bg-color-hover);
  }
`,De=o.div`
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
`,We=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,B=({children:t,onClick:n,type:r})=>e.jsxs(Ne,{onClick:n,type:r,children:[e.jsx(De,{children:e.jsx(We,{width:"28px",height:"28px",children:e.jsx("use",{href:h+"#icon-plus"})})}),t]});B.propTypes={children:u.oneOfType([u.string,u.object]).isRequired,onClick:u.func,type:u.string};const Ve=({onClose:t})=>{const n=v(),r=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],c=s=>{const a={title:s.title,icon:s.selectedIcon,backgroundId:s.selectedBg};n(ee(a)),t()};return e.jsx(k,{onClose:t,title:"New board",children:e.jsx(F,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:c,children:e.jsxs(D,{children:[e.jsx(W,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(V,{name:"selectedIcon",icons:r}),e.jsx(f,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(A,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(B,{type:"submit",children:"Create"})]})})})},Ae=o.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,He=o.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Ue=o.button`
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
`,Xe=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,Ge=()=>{const[t,n]=x.useState(!1),r=()=>{n(!0)},c=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsx(He,{children:"Create a new board"}),e.jsx(Ue,{type:"button",onClick:r,children:e.jsx(Xe,{width:"20px",height:"20px",children:e.jsx("use",{href:h+"#icon-plus"})})})]}),t&&e.jsx(Ve,{onClose:c})]})},Ke=({boardId:t,onClose:n})=>{var i,d;const r=g(w),c=v(),s=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],a=p=>{const b={title:p.title,icon:p.selectedIcon,backgroundId:p.selectedBg};c(te({boardId:t,body:b})),n()};return e.jsx(k,{onClose:n,title:"New board",children:e.jsx(F,{initialValues:{title:r==null?void 0:r.title,selectedIcon:r==null?void 0:r.icon,selectedBg:(i=r==null?void 0:r.background)==null?void 0:i._id},validationSchema:R({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:a,children:e.jsxs(D,{children:[e.jsx(W,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(V,{name:"selectedIcon",icons:s,selectedItem:r==null?void 0:r.icon}),e.jsx(f,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(A,{name:"selectedBg",selectedItem:(d=r==null?void 0:r.background)==null?void 0:d._id}),e.jsx(f,{name:"selectedBg"}),e.jsx(B,{type:"submit",children:"Edit"})]})})})},Ye=o.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,Je=o.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,Qe=o.li`
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
`,$=o.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,E=o.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
  cursor: pointer;
`,Ze=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,L=o.button`
  display: block;
  background-color: transparent;
  border: none;
`,z=o.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`,et=()=>{const[t,n]=x.useState(!1),[r,c]=x.useState(!1),s=g(Me),a=g(w),i=v(),d=O(),p=(l,G)=>{i(_(l));const K=G.toLowerCase().replace(/[\s/]+/g,"-");d(K)},b=()=>{n(!0)},H=()=>{n(!1)},U=l=>{c(l),b()},X=l=>{i(oe(l))};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:s.map(l=>l._id===(a==null?void 0:a._id)?e.jsxs(Qe,{children:[e.jsx($,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${l.icon}`})}),e.jsx(E,{children:l.title}),e.jsxs(Ze,{children:[e.jsx(L,{type:"button",onClick:()=>U(l._id),children:e.jsx(z,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),e.jsx(L,{type:"button",onClick:()=>X(l._id),children:e.jsx(z,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})})]})]},l._id):e.jsxs(Je,{onClick:()=>{p(l._id,l.title)},children:[e.jsx($,{width:"18px",height:"18px",children:e.jsx("use",{href:`${h}#${l.icon}`})}),e.jsx(E,{children:l.title})]},l._id))}),t&&e.jsx(Ke,{boardId:r,onClose:H})]})},tt=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,ot=o.button`
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
`,rt=o.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);
`,nt=()=>{const t=v(),n=()=>{t(re())};return e.jsxs(ot,{onClick:n,children:[e.jsx(rt,{width:"32px",height:"32px",children:e.jsx("use",{href:`${h}#icon-login`})}),e.jsx(tt,{children:"Log out"})]})},st=o.div`
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
`,it=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,ct=o.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,at=({isOpen:t,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(it,{onClick:()=>{n()},isOpen:t}),e.jsxs(st,{isOpen:t,children:[e.jsx(ce,{}),e.jsx(ct,{children:"My boards"}),e.jsx(Ge,{}),e.jsx(et,{}),e.jsx(nt,{})]})]}),lt=o.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,ut=()=>{const[t,n]=x.useState(!1),r=g(ne),c=g(w),s=v(),a=O(),i=()=>{n(!t)};return x.useEffect(()=>{s(se()),s(ie()),r&&s(_(r))},[]),x.useEffect(()=>{if(c){const d=c.title.toLowerCase().replace(/[\s/]+/g,"-");a(d)}},[c]),e.jsxs(lt,{children:[e.jsx(at,{isOpen:t,toggleSidebar:i}),e.jsx(ve,{toggleSidebar:i})]})};export{ut as default};
