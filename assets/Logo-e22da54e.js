import{j as t}from"./index-d0694a1d.js";import{s as e}from"./sprite-33c0d800.js";import{n as r}from"./emotion-styled.browser.esm-051bf8a0.js";const i=r.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: ${({large:o})=>o?"center":"flex-start"};
  margin-left: ${({large:o})=>o?"0":"14px"};
  margin-bottom: ${({large:o})=>o?"24px":"72px"};
`,n=r.div`
  display: flex;
  width: ${({large:o})=>o?"48px":"32px"};
  height: ${({large:o})=>o?"48px":"32px"};
  background-color: ${({large:o})=>o?"var(--registration-btn-bg-color)":"var(--sidebar-logo--bg-color)"};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`,s=r.svg`
  width: ${({large:o})=>o?"40px":"28px"};
  height: ${({large:o})=>o?"40px":"28px"};
  fill: ${({large:o})=>o?"#bedbb0":"var(--sidebar-logo--icon-color)"};
`,l=r.h1`
  color: ${({large:o})=>o?"var(--welcome-primary-text-color)":"var(--primary-text-color)"};
  font-size: ${({large:o})=>o?"40px":"18px"};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: ${({large:o})=>o?"-1.6px":"-0.2px"};
`,a=({large:o})=>t.jsxs(i,{large:o,children:[t.jsx(n,{large:o,children:t.jsx(s,{large:o,children:t.jsx("use",{href:e+"#icon-trello"})})}),t.jsx(l,{large:o,children:"Trello2.0"})]});export{a as L};
