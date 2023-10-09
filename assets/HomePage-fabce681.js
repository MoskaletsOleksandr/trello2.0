import{c as p,s as v,r as d,u as x,j as e,d as j,e as k,f as w}from"./index-379cbf85.js";import{n as t}from"./emotion-styled.browser.esm-6b7c39bf.js";import{s as i,L as y}from"./Logo-f30148ed.js";const B=t.header`
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
`,C=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,$=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,L=t.div`
  display: flex;
  align-items: center;
`,T=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,O=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,I=t.div`
  position: relative;
`,z=t.ul`
  position: absolute;
  display: ${o=>o.open?"block":"none"};
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
`,S=t.li`
  padding: 5px 10px;
  cursor: pointer;
  color: black;
  text-transform: capitalize;
  /* color: var(--header-theme-select-text-color); */

  /* &:hover {
    color: var(--header-theme-select-text-color-hover);
  }

  ${o=>o.selected&&`
      color: var(--header-theme-select-text-color-hover)
    `} */
`,E=({toggleSidebar:o})=>{const n=["light","dark","violet"],a=p(v),[c,r]=d.useState(!1),s=x();d.useEffect(()=>{document.body.classList.remove("light","dark","violet"),document.body.classList.add(a)},[a]);const h=()=>{r(!c)},m=l=>{s(j({theme:l})),h()};return e.jsxs(B,{children:[e.jsx(C,{onClick:()=>{o()},children:e.jsx($,{children:e.jsx("use",{href:`${i}#icon-menu`})})}),e.jsxs(L,{children:[e.jsxs(T,{onClick:()=>{h()},children:["Theme",e.jsx(O,{children:e.jsx("use",{href:`${i}#icon-chevron-down`})})]}),e.jsx(I,{children:e.jsx(z,{open:c,children:n.map(l=>e.jsx(S,{onClick:()=>m(l),children:l},l))})})]})]})},D=t.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid var(--sidebar-button-plus-border-color);
  border-bottom: 1px solid var(--sidebar-button-plus-border-color);
`,_=t.p`
  width: 76px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.2px;
`,A=t.button`
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
`,H=t.svg`
  stroke: var(--sidebar-button-plus-icon-color);
`,M=()=>e.jsxs(D,{children:[e.jsx(_,{children:"Create a new board"}),e.jsx(A,{type:"button",children:e.jsx(H,{width:"20px",height:"20px",children:e.jsx("use",{href:i+"#icon-plus"})})})]}),P=o=>o.boards.boards,W=o=>o.boards.currentBoard,X=t.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`,F=t.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  /* scroll-snap-align: start; */

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,R=t.li`
  position: relative;
  display: flex;
  padding: 20px 14px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: red;
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
`,g=t.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`,u=t.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`,q=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,b=t.button`
  display: block;
  background-color: transparent;
  border: none;
`,f=t.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`,G=()=>{const o=p(P);p(W);const n=()=>{console.log("handleOpenBoard")},a=(r,s)=>{r.stopPropagation(),console.log("handleEditBoard",s)},c=(r,s)=>{r.stopPropagation(),console.log("handleDeleteBoard",s)};return e.jsx(X,{children:o.map(r=>r._id==="652059f261e7de9cb1659b32"?e.jsxs(R,{onClick:n,children:[e.jsx(g,{width:"18px",height:"18px",children:e.jsx("use",{href:`${i}#${r.icon}`})}),e.jsx(u,{children:r.title}),e.jsxs(q,{children:[e.jsx(b,{type:"button",onClick:s=>a(s,r._id),children:e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:i+"#icon-pencil"})})}),e.jsx(b,{type:"button",onClick:s=>c(s,r._id),children:e.jsx(f,{width:"16px",height:"16px",children:e.jsx("use",{href:i+"#icon-trash"})})})]})]},r._id):e.jsxs(F,{onClick:n,children:[e.jsx(g,{width:"18px",height:"18px",children:e.jsx("use",{href:`${i}#${r.icon}`})}),e.jsx(u,{children:r.title})]},r._id))})},J=t.p`
  color: black;
  /* color: var(--primary-text-color); */
  font-size: 16px;
  font-weight: 500;
`,K=t.button`
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
`,N=t.svg`
  width: 32px;
  height: 32px;
  stroke: black;
  /* stroke: var(--sidebar-logout-icon-color); */
`,Q=()=>{const o=x(),n=()=>{o(k())};return e.jsxs(K,{onClick:n,children:[e.jsx(N,{width:"32px",height:"32px",children:e.jsx("use",{href:`${i}#icon-login`})}),e.jsx(J,{children:"Log out"})]})},U=t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: var(--sidebar-bg-color);
  transform: ${({isOpen:o})=>o?"translateX(0)":"translateX(-100%)"};
  z-index: 3;
  width: 260px;

  transition: transform 500ms var(--timing-function);
`,V=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 2;
`,Y=t.h2`
  margin-left: 14px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Z=({isOpen:o,toggleSidebar:n})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(V,{onClick:()=>{n()},isOpen:o}),e.jsxs(U,{isOpen:!0,children:[e.jsx(y,{}),e.jsx(Y,{children:"My boards"}),e.jsx(M,{}),e.jsx(G,{}),e.jsx(Q,{})]})]}),ee=t.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,ne=()=>{const[o,n]=d.useState(!1),a=x(),c=()=>{n(!o)};return d.useEffect(()=>{a(w())},[]),e.jsxs(ee,{children:[e.jsx(Z,{isOpen:o,toggleSidebar:c}),e.jsx(E,{toggleSidebar:c})]})};export{ne as default};
