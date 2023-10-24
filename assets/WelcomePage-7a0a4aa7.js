import{n as e,L as i,u as a,r,a as s,b as c,c as l,d,j as t}from"./index-26cd6fe4.js";import{s as g}from"./sprite-cc172135.js";import{G as x}from"./GoogleButton-ee422493.js";import{L as h}from"./Logo-888a5090.js";const p=e.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,f=e.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,m=e.svg`
  width: 200px;
  height: 200px;
`,u=e.p`
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
`,v=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,b=e(i)`
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
`,w=e(i)`
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
`,I=()=>{const n=a();return r.useEffect(()=>{const o=new URLSearchParams(window.location.search).get("deviceId");o&&(localStorage.setItem("deviceId",o),n(s()))},[]),r.useEffect(()=>{n(c()),n(l()),n(d())},[]),t.jsx(p,{children:t.jsxs(f,{children:[t.jsx(m,{children:t.jsx("use",{href:g+"#icon-main-trello"})}),t.jsx(h,{large:!0}),t.jsx(u,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(v,{children:[t.jsx(w,{to:"/auth/login",children:"Log In"}),t.jsx(b,{to:"/auth/register",children:"Registration"}),t.jsx(x,{})]})]})})};export{I as default};
