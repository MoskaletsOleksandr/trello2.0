import{r as c,j as e,c as p,u as b,d as m}from"./index-34413043.js";import{n as o}from"./emotion-styled.browser.esm-cf28638c.js";import{s as l}from"./sprite-394e7d5d.js";const f=o.header`
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
`,j=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,v=o.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: black;
  /* stroke: var(--header-name-color); */
`,k=o.div`
  display: flex;
  align-items: center;
`,w=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,y=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: black;
  /* stroke: var(--header-theme-select-text-color); */
`,C=o.div`
  position: relative;
`,B=o.ul`
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
`,L=o.li`
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
`,S=["Light","Dark","Violet"],T=({toggleSidebar:t})=>{const[n,i]=c.useState(!1),d=()=>{i(!n)},a=r=>{console.log(r)};return e.jsxs(f,{children:[e.jsx(j,{onClick:()=>{t()},children:e.jsx(v,{children:e.jsx("use",{href:`${l}#icon-menu`})})}),e.jsxs(k,{children:[e.jsxs(w,{onClick:()=>{d()},children:["Theme",e.jsx(y,{children:e.jsx("use",{href:`${l}#icon-chevron-down`})})]}),e.jsx(C,{children:e.jsx(B,{open:n,children:S.map(r=>e.jsx(L,{onClick:()=>a(r),children:r},r))})})]})]})},I=async()=>{const{data:t}=await p.get();return t},O=async t=>{const{data:n}=await p.post("",t);return n},$=o.div`
  display: flex;
  justify-content: space-between;
  width: 87.6%;
  height: 70px;
  /* // margin-left: 14px; */
  margin-bottom: 40px;
  padding: 14px 4px 14px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,z=o.p`
  width: 76px;
  color: grey;
  /* color: var(--primary-text-color); */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`,D=o.button`
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
`,H=o.svg`
  stroke: black;
  /* stroke: var(--sidebar-button-plus-icon-color); */
`,E=()=>e.jsxs($,{children:[e.jsx(z,{children:"Create a new board"}),e.jsx(D,{type:"button",children:e.jsx(H,{width:"20px",height:"20px",children:e.jsx("use",{href:l+"#icon-plus"})})})]}),M=o.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
  margin-bottom: 70px;
`,W=o.svg`
  /* fill: var(--sidebar-logo--icon-color); */
  fill: black;
  /* position: absolute; */
`,X=o.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  font-weight: 600;
  letter-spacing: -0.64px;
  color: black;
  /* color: var(--primary-text-color); */
`,A=()=>e.jsxs(M,{children:[e.jsx(W,{width:"32px",height:"32px",children:e.jsx("use",{href:`${l}#icon-logo-lightning`})}),e.jsx(X,{children:"Trello2.0"})]}),F=o.div`
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
  transform: ${({isOpen:t})=>t?"translateX(0)":"translateX(-100%)"};
  z-index: 2;
  width: 260px;

  transition: transform 500ms;
`,G=o.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000004c;
  overflow-y: auto;
  z-index: 1;
`,N=o.h2`
  /* margin-left: 14px;
  margin-bottom: 8px; */
  /* align-self: flex-start; */
  color: grey;
  /* color: var(--secondary-text-color); */
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
`,P=({isOpen:t,toggleSidebar:n})=>{const[i,d]=c.useState([]),[a,r]=c.useState(""),x=b(),h=()=>{x(m())},g=async()=>{const s=await I();d(s)},u=async()=>{await O({title:a,icon:"icon",background:{},ownerId:"652052b691e27f6f6b5b3a68"})};return e.jsxs(e.Fragment,{children:[t&&e.jsx(G,{onClick:()=>{n()},isOpen:t}),e.jsxs(F,{isOpen:t,children:[e.jsx(A,{}),e.jsx(N,{children:"My boards"}),e.jsx(E,{}),e.jsx("button",{onClick:h,children:"logout"}),e.jsx("button",{onClick:g,children:"get boards"}),e.jsx("ul",{children:i.map(s=>e.jsx("li",{children:s.title},s._id))}),e.jsx("input",{type:"text",placeholder:"Enter a title",value:a,onChange:s=>r(s.target.value)}),e.jsx("button",{onClick:u,children:"Create"})]})]})},R=o.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: orange;
`,J=()=>{const[t,n]=c.useState(!1),i=()=>{n(!t)};return e.jsxs(R,{children:[e.jsx(P,{isOpen:t,toggleSidebar:i}),e.jsx(T,{toggleSidebar:i})]})};export{J as default};
