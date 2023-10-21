import{n,r as d,j as o,J as v,K as y}from"./index-c62fe38d.js";import{s as g}from"./sprite-685f0d05.js";const k=n.div`
  max-height: ${({forCard:e})=>e?"145px":"200px"};
  position: absolute;
  top: ${({forCard:e})=>e?"-112px":"20px"};
  left: ${({forCard:e})=>e?"-150px":"-135px"};
  margin: 0;
  padding: 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  font-size: ${({forCard:e})=>e?"12px":"14px"};
  z-index: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    margin-left: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    margin-left: 8px;
  }
`,w=n.ul`
  list-style: none;
`,T=n.li`
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
`,j=n.h4`
  color: var(--card-title-color);
  font-weight: 500;
  margin-bottom: 10px;
`,C=n.span`
  font-size: 12px;
  text-transform: lowercase;
`,A=({title:e,options:r,selectedOption:s,isOpen:a,onClose:c,handleOptionClick:p,openBtnRef:x,forCard:u})=>{const l=d.useRef(null);return d.useEffect(()=>{const t=h=>{a&&l.current&&!l.current.contains(h.target)&&x.current!==h.target&&c()};return a?document.addEventListener("click",t):document.removeEventListener("click",t),()=>{document.removeEventListener("click",t)}},[a]),o.jsxs(k,{ref:l,forCard:u,children:[o.jsx(j,{children:e}),o.jsx(w,{children:r.map(t=>o.jsxs(T,{onClick:()=>p(t),selected:s===t,children:[t,s===t&&o.jsx(C,{children:"(current)"})]},t))})]})},K=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],U=["light","dark","violet"],V=["without","low","medium","high"];var m={exports:{}},E="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=E,B=R;function b(){}function f(){}f.resetWarningCache=b;var S=function(){function e(a,c,p,x,u,l){if(l!==B){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}e.isRequired=e;function r(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:b};return s.PropTypes=s,s};m.exports=S();var P=m.exports;const i=v(P),O=n.div`
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
`,z=n.div`
  position: relative;
  width: 335px;
  background-color: var(--modal-bg-color);
  padding: 24px;
  padding-top: 75px;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,_=n.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,L=n.svg`
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
`,I=document.querySelector("#modal-root"),$=({onClose:e,children:r,title:s})=>{d.useEffect(()=>{const c=p=>{p.code==="Escape"&&e()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[e]);const a=c=>{c.currentTarget===c.target&&e()};return y.createPortal(o.jsx(O,{onClick:a,children:o.jsxs(z,{children:[o.jsx(_,{children:s}),o.jsx(L,{width:24,height:24,onClick:()=>{e()},children:o.jsx("use",{href:g+"#icon-x-close"})}),r]})}),I)};$.propTypes={onClose:i.func.isRequired,title:i.string.isRequired};const q=n.button`
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
`,D=n.div`
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
`,F=n.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,M=({children:e,onClick:r,type:s})=>o.jsxs(q,{onClick:r,type:s,children:[o.jsx(D,{children:o.jsx(F,{width:"28px",height:"28px",children:o.jsx("use",{href:g+"#icon-plus"})})}),e]});M.propTypes={children:i.oneOfType([i.string,i.object]).isRequired,onClick:i.func,type:i.string};const G=e=>e.boards.boards,H=e=>e.boards.currentBoard,J=e=>e.boards.currentBoard.background,Y=e=>e.boards.currentBoard.title,Q=e=>e.boards.backgrounds;export{M as B,A as C,$ as M,H as a,G as b,Y as c,J as d,K as i,V as p,Q as s,U as t};
