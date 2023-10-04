import{r as a,j as e}from"./index-ce3a370f.js";import{n as t}from"./emotion-styled.browser.esm-ec021a0b.js";import{s}from"./sprite-394e7d5d.js";const d=t.header`
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
`,p=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,x=t.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,h=t.div`
  display: flex;
  align-items: center;
`,g=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,m=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,u=t.div`
  position: relative;
`,b=t.ul`
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
`,f=t.li`
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
`,k=["Light","Dark","Violet"],v=({toggleSidebar:o})=>{const[r,i]=a.useState(!1),c=()=>{i(!r)},l=n=>{console.log(n)};return e.jsxs(d,{children:[e.jsx(p,{onClick:()=>{o()},children:e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-menu`})})}),e.jsxs(h,{children:[e.jsxs(g,{onClick:()=>{c()},children:["Theme",e.jsx(m,{children:e.jsx("use",{href:`${s}#icon-chevron-down`})})]}),e.jsx(u,{children:e.jsx(b,{open:r,children:k.map(n=>e.jsx(f,{onClick:()=>l(n),children:n},n))})})]})]})},j=t.div`
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
`,w=t.div`
  display: ${({isOpen:o})=>o?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 1;
`,y=({isOpen:o,toggleSidebar:r})=>e.jsxs(e.Fragment,{children:[o&&e.jsx(w,{onClick:()=>{r()},isOpen:o}),e.jsx(j,{isOpen:o})]}),C=t.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,L=()=>{const[o,r]=a.useState(!1),i=()=>{r(!o)};return e.jsxs(C,{children:[e.jsx(y,{isOpen:o,toggleSidebar:i}),e.jsx(v,{toggleSidebar:i})]})};export{L as default};
