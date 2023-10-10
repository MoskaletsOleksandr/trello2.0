import{b as u,s as P,c as x,u as g,j as e,d as q,g as D,e as N,f as W,h as $,i as L,k as A,m as H,n as V,o as U}from"./index-97f4fe38.js";import{n as o}from"./emotion-styled.browser.esm-e61dbf0c.js";import{s as p,L as X}from"./Logo-95d365b3.js";import{F as G,a as v,E as K,u as E,b as Y,c as J,d as m}from"./index.esm-f697630d.js";const Q=o.header`
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
`,Z=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ee=o.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,te=o.div`
  display: flex;
  align-items: center;
`,oe=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,re=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,ne=o.div`
  position: relative;
`,se=o.ul`
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
`,ie=o.li`
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
`,ce=({toggleSidebar:t})=>{const r=["light","dark","violet"],n=u(P),[a,i]=x.useState(!1),s=g();x.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(n)},[n]);const d=()=>{i(!a)},c=l=>{s(q({theme:l})),d()};return e.jsxs(Q,{children:[e.jsx(Z,{onClick:()=>{t()},children:e.jsx(ee,{children:e.jsx("use",{href:`${p}#icon-menu`})})}),e.jsxs(te,{children:[e.jsxs(oe,{onClick:()=>{d()},children:["Theme",e.jsx(re,{children:e.jsx("use",{href:`${p}#icon-chevron-down`})})]}),e.jsx(ne,{children:e.jsx(se,{open:a,children:r.map(l=>e.jsx(ie,{onClick:()=>c(l),children:l},l))})})]})]})};var O={exports:{}},ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",le=ae,de=le;function z(){}function _(){}_.resetWarningCache=z;var pe=function(){function t(a,i,s,d,c,l){if(l!==de){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}t.isRequired=t;function r(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:_,resetWarningCache:z};return n.PropTypes=n,n};O.exports=pe();var xe=O.exports;const h=D(xe),he=o.div`
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
`,ue=o.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,ge=o.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,be=o.svg`
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
`,me=document.querySelector("#modal-root"),R=({onClose:t,children:r,title:n})=>{x.useEffect(()=>{const i=s=>{s.code==="Escape"&&t()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t]);const a=i=>{i.currentTarget===i.target&&t()};return N.createPortal(e.jsx(he,{onClick:a,children:e.jsxs(ue,{children:[e.jsx(ge,{children:n}),e.jsx(be,{width:24,height:24,onClick:()=>{t()},children:e.jsx("use",{href:p+"#icon-x-close"})}),r]})}),me)};R.propTypes={onClose:h.func.isRequired,title:h.string.isRequired};const fe=o(G)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,ve=o(v)`
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
`,f=o(K)``,je=o.ul`
  display: flex;
  gap: 8px;
`,ye=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,ke=o.label``,we=o(v)`
  display: none;
`,Be=o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`,Te=({name:t,icons:r})=>{const[n,a]=x.useState(""),{setFieldValue:i}=E();return e.jsx(je,{children:r.map(s=>e.jsx(ye,{children:e.jsxs(ke,{children:[e.jsx(we,{type:"radio",name:t,value:s,onChange:d=>{a(d.target.value),i(t,d.target.value)}}),e.jsx(Be,{selected:n===s,children:e.jsx("use",{href:p+`#${s}`})})]})},s))})},Ce=t=>t.boards.boards,F=t=>t.boards.currentBoard,Ie=t=>t.boards.backgrounds,Se=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 252px;
`,y=o.li`
  display: block;
  width: 28px;
  height: 28px;
`,k=o.label``,w=o(v)`
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
`,$e=o.img`
  width: 28px;
  height: 28px;
`,Le=o.svg`
  stroke: var(--modal-icon-color);
  fill: transparent;
`,Ee=({name:t})=>{const[r,n]=x.useState(""),a=u(Ie),{setFieldValue:i}=E();return e.jsxs(Se,{children:[e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:t,value:"null",onChange:s=>{n(s.target.value),i(t,s.target.value)}}),e.jsx(B,{selected:r==="null",children:e.jsx(Le,{style:{width:"16px",height:"16px"},children:e.jsx("use",{href:p+"#null-background"})})})]})}),a.map(s=>e.jsx(y,{children:e.jsxs(k,{children:[e.jsx(w,{type:"radio",name:t,value:s._id,onChange:d=>{n(d.target.value),i(t,d.target.value)}}),e.jsx(B,{selected:r===s._id,children:e.jsx($e,{src:s.previewURL})})]})},s._id))]})},Oe=o.button`
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
`,ze=o.div`
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
`,_e=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,M=({children:t,onClick:r,type:n})=>e.jsxs(Oe,{onClick:r,type:n,children:[e.jsx(ze,{children:e.jsx(_e,{width:"28px",height:"28px",children:e.jsx("use",{href:p+"#icon-plus"})})}),t]});M.propTypes={children:h.oneOfType([h.string,h.object]).isRequired,onClick:h.func,type:h.string};const Re=({onClose:t})=>{const r=g(),n=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],a=i=>{const s={title:i.title,icon:i.selectedIcon,backgroundId:i.selectedBg};console.log(s),r(W(s)),t()};return e.jsx(R,{onClose:t,title:"New board",children:e.jsx(Y,{initialValues:{title:"",selectedIcon:"",selectedBg:""},validationSchema:J({title:m().max(15,"Must be 15 characters or less").required("Name is required"),selectedIcon:m().required("Icon is required"),selectedBg:m().required("Background is required")}),onSubmit:a,children:e.jsxs(fe,{children:[e.jsx(ve,{type:"text",name:"title",placeholder:"Title"}),e.jsx(f,{name:"title"}),e.jsx(j,{children:"Icons"}),e.jsx(Te,{name:"selectedIcon",icons:n}),e.jsx(f,{name:"selectedIcon"}),e.jsx(j,{children:"Backgrounds"}),e.jsx(Ee,{name:"selectedBg"}),e.jsx(f,{name:"selectedBg"}),e.jsx(M,{type:"submit",children:"Create"})]})})})},Fe=o.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,Me=o.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,Pe=o.button`
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
`,qe=o.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,De=()=>{const[t,r]=x.useState(!0),n=()=>{r(!0)},a=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{children:[e.jsx(Me,{children:"Create a new board"}),e.jsx(Pe,{type:"button",onClick:n,children:e.jsx(qe,{width:"20px",height:"20px",children:e.jsx("use",{href:p+"#icon-plus"})})})]}),t&&e.jsx(Re,{onClose:a})]})},Ne=o.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,We=o.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,Ae=o.li`
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
`,T=o.svg`
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
  cursor: pointer;
`,He=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,I=o.button`
  display: block;
  background-color: transparent;
  border: none;
`,S=o.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`,Ve=()=>{const t=u(Ce),r=u(F),n=g(),a=$(),i=(c,l)=>{n(L(c));const b=l.toLowerCase().replace(/[\s/]+/g,"-");a(b)},s=(c,l)=>{c.stopPropagation(),console.log("handleEditBoard",l)},d=(c,l)=>{c.stopPropagation(),console.log("handleDeleteBoard",l)};return e.jsx(Ne,{children:t.map(c=>c._id===(r==null?void 0:r._id)?e.jsxs(Ae,{children:[e.jsx(T,{width:"18px",height:"18px",children:e.jsx("use",{href:`${p}#${c.icon}`})}),e.jsx(C,{children:c.title}),e.jsxs(He,{children:[e.jsx(I,{type:"button",onClick:l=>s(l,c._id),children:e.jsx(S,{width:"16px",height:"16px",children:e.jsx("use",{href:p+"#icon-pencil"})})}),e.jsx(I,{type:"button",onClick:l=>d(l,c._id),children:e.jsx(S,{width:"16px",height:"16px",children:e.jsx("use",{href:p+"#icon-trash"})})})]})]},c._id):e.jsxs(We,{onClick:()=>{i(c._id,c.title)},children:[e.jsx(T,{width:"18px",height:"18px",children:e.jsx("use",{href:`${p}#${c.icon}`})}),e.jsx(C,{children:c.title})]},c._id))})},Ue=o.p`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
`,Xe=o.button`
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
`,Ge=o.svg`
  width: 32px;
  height: 32px;
  stroke: var(--sidebar-logout-icon-color);
`,Ke=()=>{const t=g(),r=()=>{t(A())};return e.jsxs(Xe,{onClick:r,children:[e.jsx(Ge,{width:"32px",height:"32px",children:e.jsx("use",{href:`${p}#icon-login`})}),e.jsx(Ue,{children:"Log out"})]})},Ye=o.div`
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
`,Je=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,Qe=o.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Ze=({isOpen:t,toggleSidebar:r})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(Je,{onClick:()=>{r()},isOpen:t}),e.jsxs(Ye,{isOpen:!0,children:[e.jsx(X,{}),e.jsx(Qe,{children:"My boards"}),e.jsx(De,{}),e.jsx(Ve,{}),e.jsx(Ke,{})]})]}),et=o.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,st=()=>{const[t,r]=x.useState(!1),n=u(H),a=u(F),i=g(),s=$(),d=()=>{r(!t)};return x.useEffect(()=>{i(V()),i(U()),n&&i(L(n))},[]),x.useEffect(()=>{if(a){const c=a.title.toLowerCase().replace(/[\s/]+/g,"-");s(c)}},[a]),e.jsxs(et,{children:[e.jsx(Ze,{isOpen:t,toggleSidebar:d}),e.jsx(ce,{toggleSidebar:d})]})};export{st as default};
