import{n as e,j as t,G as d,L as s,u as x,s as g,r as n,a as h,w as p}from"./index-bc89a093.js";import{u,s as f}from"./sprite-4b7d61e7.js";import{G as m}from"./GoogleButton-69ef60fa.js";import{L as w}from"./Logo-9db7de45.js";const v=e.div`
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
`,b=e.h2`
  text-align: center;
  font-size: 50px;
  color: white;
`,j=e.p`
  text-align: center;
  font-size: 28px;
  color: white;
`,k=()=>t.jsxs(v,{children:[t.jsx(b,{children:"Welcome to the app Trello2.0"}),t.jsx(j,{children:"Sometimes render.com falls asleep, wait until we wake up our backend"}),t.jsx(d,{height:"240",width:"240",color:"green",ariaLabel:"grid-loading",radius:"12.5",visible:!0})]}),y=e.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,L=e.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,T=e.svg`
  width: 200px;
  height: 200px;
`,S=e.p`
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
`,I=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,B=e(s)`
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
`,R=e(s)`
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
`,C=()=>{const o=u(),i=x(g),[c,l]=n.useState(!1);return n.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("deviceId");a&&(localStorage.setItem("deviceId",a),o(h()))},[]),n.useEffect(()=>{o(p());const r=setTimeout(()=>{i||l(!0)},1500);return()=>{clearTimeout(r)}},[]),t.jsxs(y,{children:[t.jsxs(L,{children:[t.jsx(T,{children:t.jsx("use",{href:f+"#icon-main-trello"})}),t.jsx(w,{large:!0}),t.jsx(S,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(I,{children:[t.jsx(R,{to:"/auth/login",children:"Log In"}),t.jsx(B,{to:"/auth/register",children:"Registration"}),t.jsx(m,{})]})]}),c&&!i&&t.jsx(k,{})]})};export{C as default};
