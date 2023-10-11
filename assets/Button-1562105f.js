import{v as h,c as m,w as g,j as t}from"./index-e7e5bf2a.js";import{s as l}from"./sprite-33c0d800.js";import{n as e}from"./emotion-styled.browser.esm-8d191a60.js";import{F as f,a as y,E as v}from"./index.esm-8be93a92.js";var d={exports:{}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k=w,T=k;function x(){}function u(){}u.resetWarningCache=x;var j=function(){function o(i,s,c,I,q,b){if(b!==T){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}o.isRequired=o;function r(){return o}var n={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:r,element:o,elementType:o,instanceOf:r,node:o,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:u,resetWarningCache:x};return n.PropTypes=n,n};d.exports=j();var E=d.exports;const a=h(E),R=e.div`
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
`,S=e.div`
  position: relative;
  width: 400px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`,B=e.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,P=e.svg`
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
`,C=document.querySelector("#modal-root"),F=({onClose:o,children:r,title:n})=>{m.useEffect(()=>{const s=c=>{c.code==="Escape"&&o()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[o]);const i=s=>{s.currentTarget===s.target&&o()};return g.createPortal(t.jsx(R,{onClick:i,children:t.jsxs(S,{children:[t.jsx(B,{children:n}),t.jsx(P,{width:24,height:24,onClick:()=>{o()},children:t.jsx("use",{href:l+"#icon-x-close"})}),r]})}),C)};F.propTypes={onClose:a.func.isRequired,title:a.string.isRequired};const A=e(f)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,U=e(y)`
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
`,V=e.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,G=e(v)``,H=o=>o.boards.boards,K=o=>o.boards.currentBoard,Y=o=>o.boards.currentBoard.background,$=o=>o.boards.currentBoard.title,J=o=>o.boards.backgrounds,O=e.button`
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
`,_=e.div`
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
`,z=e.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,M=({children:o,onClick:r,type:n})=>t.jsxs(O,{onClick:r,type:n,children:[t.jsx(_,{children:t.jsx(z,{width:"28px",height:"28px",children:t.jsx("use",{href:l+"#icon-plus"})})}),o]});M.propTypes={children:a.oneOfType([a.string,a.object]).isRequired,onClick:a.func,type:a.string};export{M as B,F as M,V as R,A as S,U as a,G as b,K as c,H as d,$ as e,Y as f,J as s};
