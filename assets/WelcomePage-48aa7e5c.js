import{n as e,L as o,u as i,r as a,a as c,j as t}from"./index-de8af319.js";import{s}from"./sprite-cc172135.js";import{G as l}from"./GoogleButton-da71f776.js";import{L as d}from"./Logo-6e53bd64.js";const g=e.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,x=e.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,h=e.svg`
  width: 200px;
  height: 200px;
`,p=e.p`
  color: var(--welcome-primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.2px;
  width: 335px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`,f=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,m=e(o)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02px;
  width: 335px;
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

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`,u=e(o)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02px;
  color: var(--dark-btn-text-color);
  text-decoration: none;
  width: 335px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function),
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

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`,k=()=>{const r=i();return a.useEffect(()=>{const n=new URLSearchParams(window.location.search).get("deviceId");n&&(localStorage.setItem("deviceId",n),r(c()))},[]),t.jsx(g,{children:t.jsxs(x,{children:[t.jsx(h,{children:t.jsx("use",{href:s+"#icon-main-trello"})}),t.jsx(d,{large:!0}),t.jsx(p,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(f,{children:[t.jsx(u,{to:"/auth/login",children:"Log In"}),t.jsx(m,{to:"/auth/register",children:"Registration"}),t.jsx(l,{})]})]})})};export{k as default};
