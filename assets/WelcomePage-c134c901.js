import{n as e,j as t,G as l,L as i,u as d,a as x,s as h,r as o,w as g}from"./index-1ddcd588.js";import{s as p}from"./sprite-33c0d800.js";import{L as u}from"./Logo-36f38946.js";const f=e.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #000000dc;
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,m=e.h2`
  font-size: 50px;
  color: white;
`,w=e.p`
  font-size: 28px;
  color: white;
`,b=()=>t.jsxs(f,{children:[t.jsx(m,{children:"Welcome to the app Trello2.0"}),t.jsx(w,{children:"Sometimes render.com falls asleep, wait until we wake up our backend"}),t.jsx(l,{height:"240",width:"240",color:"green",ariaLabel:"grid-loading",radius:"12.5",visible:!0})]}),v=e.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,y=e.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,j=e.svg`
  width: 200px;
  height: 200px;
`,k=e.p`
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
`,L=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,T=e(i)`
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
`,S=e(i)`
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
`,C=()=>{const r=d(),n=x(h),[a,s]=o.useState(!1);return o.useEffect(()=>{r(g());const c=setTimeout(()=>{n||s(!0)},1500);return()=>{clearTimeout(c)}},[]),t.jsxs(v,{children:[t.jsxs(y,{children:[t.jsx(j,{children:t.jsx("use",{href:p+"#icon-main-trello"})}),t.jsx(u,{large:!0}),t.jsx(k,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(L,{children:[t.jsx(S,{to:"/auth/login",children:"Log In"}),t.jsx(T,{to:"/auth/register",children:"Registration"})]})]}),a&&!n&&t.jsx(b,{})]})};export{C as default};
