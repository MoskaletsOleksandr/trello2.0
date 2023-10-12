import{c as x,j as r,w as f,x as v}from"./index-1f132590.js";import{n as o}from"./emotion-styled.browser.esm-5791e782.js";import{s as h}from"./sprite-33c0d800.js";import{F as y,a as k,E as w}from"./index.esm-528c2db0.js";const T=o.div`
  position: absolute;
  /* display: ${({isOpen:e})=>e?"block":"none"}; */
  top: 20px;
  left: -135px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,j=o.ul`
  list-style: none;
`,E=o.li`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({selected:e})=>e?"var(--header-theme-select-text-color-hover)":"var(--header-theme-select-text-color)"};

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }
`,C=o.h4`
  font-weight: 500;
  margin-bottom: 10px;
`,R=o.span`
  font-size: 12px;
  text-transform: lowercase;
`,H=({title:e,options:t,selectedOption:s,isOpen:c,onClose:a,handleOptionClick:p,openBtnRef:u})=>{const d=x.useRef(null);return x.useEffect(()=>{const n=l=>{c&&d.current&&!d.current.contains(l.target)&&u.current!==l.target&&a()};return c?document.addEventListener("click",n):document.removeEventListener("click",n),()=>{document.removeEventListener("click",n)}},[c]),r.jsxs(T,{ref:d,children:[r.jsx(C,{children:e}),r.jsx(j,{children:t.map(n=>r.jsxs(E,{onClick:()=>p(n),selected:s===n,children:[n,s===n&&r.jsx(R,{children:"(current)"})]},n))})]})};var m={exports:{}},S="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B=S,P=B;function b(){}function g(){}g.resetWarningCache=b;var z=function(){function e(c,a,p,u,d,n){if(n!==P){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:g,resetWarningCache:b};return s.PropTypes=s,s};m.exports=z();var O=m.exports;const i=f(O),F=o.div`
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
`,_=o.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,L=o.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,M=o.svg`
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
`,I=document.querySelector("#modal-root"),q=({onClose:e,children:t,title:s})=>{x.useEffect(()=>{const a=p=>{p.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]);const c=a=>{a.currentTarget===a.target&&e()};return v.createPortal(r.jsx(F,{onClick:c,children:r.jsxs(_,{children:[r.jsx(L,{children:s}),r.jsx(M,{width:24,height:24,onClick:()=>{e()},children:r.jsx("use",{href:h+"#icon-x-close"})}),t]})}),I)};q.propTypes={onClose:i.func.isRequired,title:i.string.isRequired};const K=o(y)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,Y=o(k)`
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
`,J=o.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,Q=o(w)``,X=e=>e.boards.boards,Z=e=>e.boards.currentBoard,ee=e=>e.boards.currentBoard.background,oe=e=>e.boards.currentBoard.title,re=e=>e.boards.backgrounds,D=o.button`
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
`,W=o.div`
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
`,N=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,$=({children:e,onClick:t,type:s})=>r.jsxs(D,{onClick:t,type:s,children:[r.jsx(W,{children:r.jsx(N,{width:"28px",height:"28px",children:r.jsx("use",{href:h+"#icon-plus"})})}),e]});$.propTypes={children:i.oneOfType([i.string,i.object]).isRequired,onClick:i.func,type:i.string};export{$ as B,H as C,q as M,J as R,K as S,Y as a,Q as b,Z as c,X as d,oe as e,ee as f,re as s};
