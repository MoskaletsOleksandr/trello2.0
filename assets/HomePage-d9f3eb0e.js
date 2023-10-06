import{r as l,j as e,u as x,c as h,f as g}from"./index-c5e3c855.js";import{n as t}from"./emotion-styled.browser.esm-6d09e3a1.js";import{s as d}from"./sprite-394e7d5d.js";const u=t.header`
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
`,m=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,b=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,f=t.div`
  display: flex;
  align-items: center;
`,k=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,j=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,v=t.div`
  position: relative;
`,w=t.ul`
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
`,C=t.li`
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
`,y=["Light","Dark","Violet"],S=({toggleSidebar:o})=>{const[r,s]=l.useState(!1),a=()=>{s(!r)},c=n=>{console.log(n)};return e.jsxs(u,{children:[e.jsx(m,{onClick:()=>{o()},children:e.jsx(b,{children:e.jsx("use",{href:`${d}#icon-menu`})})}),e.jsxs(f,{children:[e.jsxs(k,{onClick:()=>{a()},children:["Theme",e.jsx(j,{children:e.jsx("use",{href:`${d}#icon-chevron-down`})})]}),e.jsx(v,{children:e.jsx(w,{open:r,children:y.map(n=>e.jsx(C,{onClick:()=>c(n),children:n},n))})})]})]})},O=t.div`
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
`,L=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 1;
`,$=({isOpen:o,toggleSidebar:r})=>{const[s,a]=l.useState([]),c=x(),n=()=>{c(h())},p=async()=>{const i=await g();a(i)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(L,{onClick:()=>{r()},isOpen:o}),e.jsxs(O,{isOpen:o,children:[e.jsx("button",{onClick:n,children:"logout"}),e.jsx("button",{onClick:p,children:"get users"}),e.jsx("ul",{children:s.map(i=>e.jsx("li",{children:i.email},i.email))})]})]})},D=t.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,z=()=>{const[o,r]=l.useState(!1),s=()=>{r(!o)};return e.jsxs(D,{children:[e.jsx($,{isOpen:o,toggleSidebar:s}),e.jsx(S,{toggleSidebar:s})]})};export{z as default};
