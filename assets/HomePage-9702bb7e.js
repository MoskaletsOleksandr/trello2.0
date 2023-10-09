import{r as a,j as o,c as d,u,d as b,e as f}from"./index-a606cd24.js";import{n as e}from"./emotion-styled.browser.esm-67723922.js";import{s}from"./sprite-d4b8cab1.js";const m=e.header`
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
`,v=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,k=e.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,j=e.div`
  display: flex;
  align-items: center;
`,w=e.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,y=e.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,B=e.div`
  position: relative;
`,C=e.ul`
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
`,$=e.li`
  padding: 5px 10px;
  cursor: pointer;
  color: black;
  /* color: var(--header-theme-select-text-color); */

  /* &:hover {
    color: var(--header-theme-select-text-color-hover);
  }

  ${t=>t.selected&&`
      color: var(--header-theme-select-text-color-hover)
    `} */
`,L=["Light","Dark","Violet"],I=({toggleSidebar:t})=>{const[i,l]=a.useState(!1),c=()=>{l(!i)},r=n=>{console.log(n)};return o.jsxs(m,{children:[o.jsx(v,{onClick:()=>{t()},children:o.jsx(k,{children:o.jsx("use",{href:`${s}#icon-menu`})})}),o.jsxs(j,{children:[o.jsxs(w,{onClick:()=>{c()},children:["Theme",o.jsx(y,{children:o.jsx("use",{href:`${s}#icon-chevron-down`})})]}),o.jsx(B,{children:o.jsx(C,{open:i,children:L.map(n=>o.jsx($,{onClick:()=>r(n),children:n},n))})})]})]})},T=e.div`
  display: flex;
  justify-content: space-between;
  width: 87.6%;
  height: 70px;
  /* // margin-left: 14px; */
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,z=e.p`
  width: 76px;
  color: grey;
  /* color: var(--primary-text-color); */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`,O=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  background-color: white;
  /* background-color: var(--sidebar-button-plus-bg-color); */
  border-radius: 6px;
  border: none;

  &:hover,
  &:focus {
    scale: 1.05;
    background-color: #f1c0c0;
    /* background-color: var(--modal-btn-bg-color-hover); */
  }
`,S=e.svg`
  stroke: black;
  /* stroke: var(--sidebar-button-plus-icon-color); */
`,D=()=>o.jsxs(T,{children:[o.jsx(z,{children:"Create a new board"}),o.jsx(O,{type:"button",children:o.jsx(S,{width:"20px",height:"20px",children:o.jsx("use",{href:s+"#icon-plus"})})})]}),E=t=>t.boards.boards,A=t=>t.boards.currentBoard,H=e.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  /* height: calc(100vh - 611px); */
  scroll-behavior: smooth;
  overflow-y: auto;
  /* scroll-snap-type: y mandatory; */

  /* @media only screen and (min-width: 768px) {
    height: calc(100vh - 646px);
  } */

  &::-webkit-scrollbar {
    width: 0px;
  }
`,M=e.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  /* scroll-snap-align: start; */

  /* @media screen and (min-width: 768px) {
    padding: 20px 24px;
  } */
  /* 
  &:not(:last-child) {
    margin-bottom: 4px;
  } */
`,P=e.li`
  background-color: red;
  background-color: var(--sidebar-active-board-bg-color);
  opacity: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-left: 4px solid red;
    /* border-left: 4px solid var(--sidebar-border-left-color); */
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`,p=e.svg`
  stroke: black;
  /* stroke: var(--icon-stroke); */
  fill: black;
  /* fill: var(--sidebar-active-board-bg-color); */
  opacity: 1;
`,x=e.p`
  margin-right: auto;
  text-transform: capitalize;
  color: red;
  /* color: var(--sidebar-active-board-text-color); */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
  /* @media screen and (min-width: 768px) {
    margin-left: 24px;
  } */
`,W=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,h=e.button`
  display: block;
  background-color: transparent;
  border: none;
`,g=e.svg`
  stroke: red;
  /* stroke: var(--sidebar-inactive-icon-color); */
  /* fill: var(--sidebar-active-board-bg-color); */
  &:hover,
  &:focus {
    stroke: orange;
    /* stroke: var(--progress-popup-text-color-hover); */
    cursor: pointer;
  }
`,_=()=>{const t=d(E);d(A);const i=()=>{console.log("handleOpenBoard")},l=(r,n)=>{r.stopPropagation(),console.log("handleEditBoard",n)},c=(r,n)=>{r.stopPropagation(),console.log("handleDeleteBoard",n)};return o.jsx(H,{children:t.map(r=>r._id==="652059f261e7de9cb1659b32"?o.jsxs(P,{onClick:i,children:[o.jsx(p,{width:"18px",height:"18px",children:o.jsx("use",{href:`${s}#${r.icon}`})}),o.jsx(x,{children:r.title}),o.jsxs(W,{children:[o.jsx(h,{type:"button",onClick:n=>l(n,r._id),children:o.jsx(g,{width:"16px",height:"16px",children:o.jsx("use",{href:s+"#icon-pencil"})})}),o.jsx(h,{type:"button",onClick:n=>c(n,r._id),children:o.jsx(g,{width:"16px",height:"16px",children:o.jsx("use",{href:s+"#icon-trash"})})})]})]}):o.jsxs(M,{onClick:i,children:[o.jsx(p,{width:"18px",height:"18px",children:o.jsx("use",{href:`${s}#${r.icon}`})}),o.jsx(x,{children:r.title})]}))})},X=e.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
  margin-bottom: 70px;
`,F=e.svg`
  /* fill: var(--sidebar-logo--icon-color); */
  fill: black;
  /* position: absolute; */
`,R=e.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  font-weight: 600;
  letter-spacing: -0.64px;
  color: black;
  /* color: var(--primary-text-color); */
`,V=()=>o.jsxs(X,{children:[o.jsx(F,{width:"32px",height:"32px",children:o.jsx("use",{href:`${s}#icon-logo-lightning`})}),o.jsx(R,{children:"Trello2.0"})]}),q=e.p`
  color: black;
  /* color: var(--primary-text-color); */
  font-size: 16px;
  font-weight: 500;
`,G=e.button`
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
`,J=e.svg`
  width: 32px;
  height: 32px;
  stroke: black;
  /* stroke: var(--sidebar-logout-icon-color); */
`,K=()=>{const t=u(),i=()=>{t(b())};return o.jsxs(G,{onClick:i,children:[o.jsx(J,{width:"32px",height:"32px",children:o.jsx("use",{href:`${s}#icon-login`})}),o.jsx(q,{children:"Log out"})]})},N=e.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 0;
  /* background: var(--sidebar-bg-color); */
  background: white;
  transform: ${({isOpen:t})=>t?"translateX(0)":"translateX(-100%)"};
  z-index: 2;
  width: 260px;

  transition: transform 500ms;
`,Q=e.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 1;
`,U=e.h2`
  /* margin-left: 14px;
  margin-bottom: 8px; */
  /* align-self: flex-start; */
  color: grey;
  /* color: var(--secondary-text-color); */
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,Y=({isOpen:t,toggleSidebar:i})=>o.jsxs(o.Fragment,{children:[t&&o.jsx(Q,{onClick:()=>{i()},isOpen:t}),o.jsxs(N,{isOpen:t,children:[o.jsx(V,{}),o.jsx(U,{children:"My boards"}),o.jsx(D,{}),o.jsx(_,{}),o.jsx(K,{})]})]}),Z=e.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,ro=()=>{const[t,i]=a.useState(!1),l=u(),c=()=>{i(!t)};return a.useEffect(()=>{l(f())},[]),o.jsxs(Z,{children:[o.jsx(Y,{isOpen:t,toggleSidebar:c}),o.jsx(I,{toggleSidebar:c})]})};export{ro as default};
