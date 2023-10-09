import{L as o,j as t}from"./index-379cbf85.js";import{s as e,L as r}from"./Logo-f30148ed.js";import{n}from"./emotion-styled.browser.esm-6b7c39bf.js";const i=n.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,a=n.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,c=n.svg`
  width: 200px;
  height: 200px;
`,s=n.p`
  color: var(--welcome-primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.2px;
  width: 473px;
  margin-bottom: 48px;
`,l=n.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,g=n(o)`
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
`,x=n(o)`
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
`,h=()=>t.jsx(i,{children:t.jsxs(a,{children:[t.jsx(c,{children:t.jsx("use",{href:e+"#icon-main-trello"})}),t.jsx(r,{large:!0}),t.jsx(s,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(l,{children:[t.jsx(x,{to:"/auth/login",children:"Log In"}),t.jsx(g,{to:"/auth/register",children:"Registration"})]})]})});export{h as default};
