import{n as e,r as d,j as r,P as k,Q as y}from"./index-d97a85be.js";import{s as h}from"./sprite-fc6f0751.js";import{F as v,a as A,E as T}from"./index.esm-9ac69e75.js";const E=e.div`
  max-height: ${({forCard:o})=>o?"145px":"200px"};
  position: absolute;
  top: ${({forCard:o})=>o?"-112px":"20px"};
  left: ${({forCard:o})=>o?"-110px":"-135px"};
  margin: 0;
  padding: 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  font-size: ${({forCard:o})=>o?"12px":"14px"};
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
`,j=e.ul`
  list-style: none;
`,R=e.li`
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
`,S=e.h4`
  color: var(--card-title-color);
  font-weight: 500;
  margin-bottom: 10px;
`,C=e.span`
  font-size: 12px;
  text-transform: lowercase;
`,Y=({title:o,options:t,selectedOption:a,isOpen:s,onClose:i,handleOptionClick:p,openBtnRef:x,forCard:u})=>{const l=d.useRef(null);return d.useEffect(()=>{const n=g=>{s&&l.current&&!l.current.contains(g.target)&&x.current!==g.target&&i()};return s?document.addEventListener("click",n):document.removeEventListener("click",n),()=>{document.removeEventListener("click",n)}},[s]),r.jsxs(E,{ref:l,forCard:u,children:[r.jsx(S,{children:o}),r.jsx(j,{children:t.map(n=>r.jsxs(R,{onClick:()=>p(n),selected:a===n,children:[n,a===n&&r.jsx(C,{children:"(current)"})]},n))})]})},H=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],V=["light","dark","violet"],_=["without","low","medium","high"];var m={exports:{}},B="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z=B,L=z;function b(){}function f(){}f.resetWarningCache=b;var P=function(){function o(s,i,p,x,u,l){if(l!==L){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}o.isRequired=o;function t(){return o}var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:t,element:o,elementType:o,instanceOf:t,node:o,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:f,resetWarningCache:b};return a.PropTypes=a,a};m.exports=P();var M=m.exports;const c=k(M),X=e.div`
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
`,F=e.div`
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
`,Q=e.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--modal-title-color);
  font-size: 18px;
  font-weight: 600;
`,D=e.svg`
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
`,K=document.querySelector("#modal-root"),U=({onClose:o,children:t,title:a})=>{d.useEffect(()=>{const i=p=>{p.code==="Escape"&&o()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[o]);const s=i=>{i.currentTarget===i.target&&o()};return y.createPortal(r.jsx(X,{onClick:s,children:r.jsxs(F,{children:[r.jsx(Q,{children:a}),r.jsx(D,{width:24,height:24,onClick:()=>{o()},children:r.jsx("use",{href:h+"#icon-x-close"})}),t]})}),K)};U.propTypes={onClose:c.func.isRequired,title:c.string.isRequired};const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADjklEQVR4nO3TbUwTdxwHcMz01d4si2/2cq/ce7PE93tjXPZqL7ZFs0RALBFjtfFhgxiGTqgdO1uK5dSj0GuBtbZ3HERK27sqD4p4bUfLsNwhPkLURBMSnxgP3+V/tKWFmCzxKG/8Jr/0kv6T/+f+/++VlHzMe2JxjXx5yjYul/56f6G6KcV4vfhEkIXt3YPdu0qKkdPt04nDDffww5FZ/GicRS11+y3r7Zq3M9YXRQFUO59O7DcDpqanoFrCqD3nxsFjnThRH3r3Gx3/umiAcssimM4BmMzX8fPJR9qJ7DU9xqmm1HXKmfhswwCnXbPyCmAJNDuIA78/wcHGtzBR9/CTcUaD7P/lwUKNPWXbEAAty9suh2PzldZ3KD2/CILJThU1h6r6lX6QqTqrvKx3jn6vO0JSuNehu724IKRRZlkqQJA5aptFWc2DFYhxBkbLZNrMju3o73d9yku+Q7oAJJUHGT4RRq17Zh2izLIIk/Uh9h1/rEGMdcllhvX/a79kAy3Q2/UBKJyGIOMZHsZRx9w6SOWfb3CBGcIZcwcMx1hU1gzjDB2r0wUQiLWBHbKh/65PQ4hKN+jQ3zBQ8wWIVm8cxroADHXTuX4cp8amdQE4QufQEmlAKIMgc228D/Xe+yg9v6wBLnqSMNSOoLQBMNmeoPLsLeyp6F3+YACfaNcAZPomvNrmQpLNQbi4iOq2Z+uuZXd5jzYfDJBUHj0pD5hoYw5wKWJG2wCFa/905SCugREctr/aGICUKWMkU0gCICfScbN59X+VR2RSQHMwiYrGBXxr6MEJyreoyxX4Ri/nNifTecsBR3gVwMWd2hoxs6Y3FYRb6kTLXxR0K+EV6Q+E01fzStiFQKxVe/bLjLaGXFM47V/pyR2PPgAu7lxXwmDmNzv+WGtuTfZz1Q0gKRz8MQZ0xLxaQtEMz83m3NuS6/HJDOhwg66AQP5bhtJXEZ70F5SQIPLXkM0jSkAfAIk0xX0jKnyy4GtQebQPWgu+AmGMRU/SXbBGFwBJNBrdKk1xFaLKP8/fgEu0wXubLighO9ik7wnkJzju/VxUOauocgtrTyQL0LWE70s0LXwlKlzf2rt3D9uLA8gmonDfSSo/lQ/pTXUgkinqhgNIZJneJin8EUnl5tZeS1EA2dyY8H8hKTwtKfzSpgCykaa4naLCDW0agATAlqgS2CeMep65go5YyWYFwJZN2/z/5j8x5nNEeYCXywAAAABJRU5ErkJggg==",$=e(v)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`,w=e(A)`
  width: 100%;
  background-color: var(--modal-input-bg-color);
  border: 1px solid var(--modal-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  margin-top: ${({profile:o})=>o?"14px":"0"};
  color: var(--modal-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: var(--webkit-box-shadow);
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
`,oo=e(w)`
  resize: none;
  height: 154px;
  margin-top: 14px;
`,eo=e(w)`
  width: 125px;
  padding: 6px 10px;
  font-size: 14px;
  cursor: text;
  background: url(${N});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: 95%;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
  }
`,ro=e.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`,to=e.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 4px;

  &:last-of-type {
    margin-top: 14px;
  }
`,no=e(T)``,O=e.button`
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
`,q=e.div`
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
`,J=e.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,I=({children:o,onClick:t,type:a})=>r.jsxs(O,{onClick:t,type:a,children:[r.jsx(q,{children:r.jsx(J,{width:"28px",height:"28px",children:r.jsx("use",{href:h+"#icon-plus"})})}),o]});I.propTypes={children:c.oneOfType([c.string,c.object]).isRequired,onClick:c.func,type:c.string};const ao=o=>o.boards.boards,io=o=>o.boards.currentBoard,co=o=>o.boards.currentBoard.background,so=o=>o.boards.currentBoard.title,lo=o=>o.boards.backgrounds;export{I as B,Y as C,U as M,$ as S,w as a,no as b,ro as c,io as d,ao as e,oo as f,to as g,eo as h,H as i,so as j,co as k,_ as p,lo as s,V as t};
