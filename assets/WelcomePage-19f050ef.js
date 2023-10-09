import{L as o,j as t}from"./index-a606cd24.js";import{s as e}from"./sprite-d4b8cab1.js";import{n}from"./emotion-styled.browser.esm-67723922.js";const r=n.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,i=n.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,c=n.svg`
  width: 200px;
  height: 200px;
`,l=n.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`,a=n.div`
  display: flex;
  width: 48px;
  height: 48px;
  background-color: var(--registration-btn-bg-color);
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`,s=n.svg`
  width: 40px;
  height: 40px;
  fill: #bedbb0;
`,g=n.h1`
  color: var(--welcome-primary-text-color);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.6px;
`,x=n.p`
  color: var(--welcome-primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.2px;
  width: 473px;
  margin-bottom: 48px;
`,d=n.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,p=n(o)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02px;
  width: 344px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--registration-btn-bg-color);
  border-radius: 8px;
  color: var(--light-btn-text-color);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 500ms var(--timing-function),
    color 300ms var(--timing-function);
`,h=n(o)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02px;
  color: var(--dark-btn-text-color);
  text-decoration: none;
  width: 344px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 500ms var(--timing-function),
    color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--registration-btn-bg-color);
    color: var(--light-btn-text-color);
  }

  &:hover + * {
    background-color: transparent;
    color: var(--dark-btn-text-color);
  }
`,b=()=>t.jsx(r,{children:t.jsxs(i,{children:[t.jsx(c,{children:t.jsx("use",{href:e+"#icon-main-trello"})}),t.jsxs(l,{children:[t.jsx(a,{children:t.jsx(s,{children:t.jsx("use",{href:e+"#icon-trello"})})}),t.jsx(g,{children:"Trello2.0"})]}),t.jsx(x,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(d,{children:[t.jsx(h,{to:"/auth/login",children:"Log In"}),t.jsx(p,{to:"/auth/register",children:"Registration"})]})]})});export{b as default};
