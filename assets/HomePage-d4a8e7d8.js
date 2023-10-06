import{r as l,j as e,b as d}from"./index-b8e5bed7.js";import{n as t}from"./emotion-styled.browser.esm-73c260d8.js";import{s as a}from"./sprite-394e7d5d.js";import{u as p}from"./useDispatch-639cfd3c.js";const x=t.header`
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
`,h=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,g=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,u=t.div`
  display: flex;
  align-items: center;
`,m=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,b=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,f=t.div`
  position: relative;
`,k=t.ul`
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
`,v=t.li`
  padding: 5px 10px;
  cursor: pointer;
  color: black;
  /* color: var(--header-theme-select-text-color); */

  /* &:hover {
    color: var(--header-theme-select-text-color-hover);
  }

  ${o=>o.selected&&`
      color: var(--header-theme-select-text-color-hover)
    `} */
`,j=["Light","Dark","Violet"],w=({toggleSidebar:o})=>{const[n,r]=l.useState(!1),i=()=>{r(!n)},c=s=>{console.log(s)};return e.jsxs(x,{children:[e.jsx(h,{onClick:()=>{o()},children:e.jsx(g,{children:e.jsx("use",{href:`${a}#icon-menu`})})}),e.jsxs(u,{children:[e.jsxs(m,{onClick:()=>{i()},children:["Theme",e.jsx(b,{children:e.jsx("use",{href:`${a}#icon-chevron-down`})})]}),e.jsx(f,{children:e.jsx(k,{open:n,children:j.map(s=>e.jsx(v,{onClick:()=>c(s),children:s},s))})})]})]})},C=t.div`
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
  background: tomato;
  transform: ${({isOpen:o})=>o?"translateX(0)":"translateX(-100%)"};
  z-index: 2;
  width: 260px;

  transition: transform 500ms;
`,y=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 1;
`,L=({isOpen:o,toggleSidebar:n})=>{const r=p(),i=()=>{console.log("handleLogout"),r(d())};return e.jsxs(e.Fragment,{children:[o&&e.jsx(y,{onClick:()=>{n()},isOpen:o}),e.jsx(C,{isOpen:o,children:e.jsx("button",{onClick:i,children:"logout"})})]})},O=t.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,I=()=>{const[o,n]=l.useState(!1),r=()=>{n(!o)};return e.jsxs(O,{children:[e.jsx(L,{isOpen:o,toggleSidebar:r}),e.jsx(w,{toggleSidebar:r})]})};export{I as default};
