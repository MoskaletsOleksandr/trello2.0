import{c as x,j as r,A as f,B as v}from"./index-cda7ef00.js";import{n as e}from"./emotion-styled.browser.esm-69db5252.js";import{s as h}from"./sprite-33c0d800.js";import{F as y,a as k,E as w}from"./index.esm-a174d4ee.js";const T=e.div`
  position: absolute;
  /* display: ${({isOpen:o})=>o?"block":"none"}; */
  top: 20px;
  left: -135px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`,j=e.ul`
  list-style: none;
`,E=e.li`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({selected:o})=>o?"var(--header-theme-select-text-color-hover)":"var(--header-theme-select-text-color)"};

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }
`,C=e.h4`
  font-weight: 500;
  margin-bottom: 10px;
`,S=e.span`
  font-size: 12px;
  text-transform: lowercase;
`,K=({title:o,options:t,selectedOption:s,isOpen:c,onClose:a,handleOptionClick:p,openBtnRef:u})=>{const d=x.useRef(null);return x.useEffect(()=>{const n=l=>{c&&d.current&&!d.current.contains(l.target)&&u.current!==l.target&&a()};return c?document.addEventListener("click",n):document.removeEventListener("click",n),()=>{document.removeEventListener("click",n)}},[c]),r.jsxs(T,{ref:d,children:[r.jsx(C,{children:o}),r.jsx(j,{children:t.map(n=>r.jsxs(E,{onClick:()=>p(n),selected:s===n,children:[n,s===n&&r.jsx(S,{children:"(current)"})]},n))})]})},Y=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],J=["light","dark","violet"],Q=["without","low","medium","high"];var m={exports:{}},B="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=B,z=R;function g(){}function b(){}b.resetWarningCache=g;var P=function(){function o(c,a,p,u,d,n){if(n!==z){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}o.isRequired=o;function t(){return o}var s={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:t,element:o,elementType:o,instanceOf:t,node:o,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:g};return s.PropTypes=s,s};m.exports=P();var O=m.exports;const i=f(O),F=e.div`
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
`,_=e.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,L=e.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,M=e.svg`
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
`,I=document.querySelector("#modal-root"),q=({onClose:o,children:t,title:s})=>{x.useEffect(()=>{const a=p=>{p.code==="Escape"&&o()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[o]);const c=a=>{a.currentTarget===a.target&&o()};return v.createPortal(r.jsx(F,{onClick:c,children:r.jsxs(_,{children:[r.jsx(L,{children:s}),r.jsx(M,{width:24,height:24,onClick:()=>{o()},children:r.jsx("use",{href:h+"#icon-x-close"})}),t]})}),I)};q.propTypes={onClose:i.func.isRequired,title:i.string.isRequired};const X=e(y)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,D=e(k)`
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
`,Z=e(D)`
  resize: none;
  height: 154px;
  margin-top: 14px;
`,oo=e.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,eo=e.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 4px;

  &:last-of-type {
    margin-top: 14px;
  }
`,ro=e(w)``,to=o=>o.boards.boards,no=o=>o.boards.currentBoard,so=o=>o.boards.currentBoard.background,ao=o=>o.boards.currentBoard.title,io=o=>o.boards.backgrounds,W=e.button`
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
`,N=e.div`
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
`,A=e.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,$=({children:o,onClick:t,type:s})=>r.jsxs(W,{onClick:t,type:s,children:[r.jsx(N,{children:r.jsx(A,{width:"28px",height:"28px",children:r.jsx("use",{href:h+"#icon-plus"})})}),o]});$.propTypes={children:i.oneOfType([i.string,i.object]).isRequired,onClick:i.func,type:i.string};export{oo as B,K as C,q as M,X as S,D as a,ro as b,$ as c,no as d,to as e,Z as f,eo as g,ao as h,Y as i,so as j,Q as p,io as s,J as t};
