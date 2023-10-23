import{n as e,j as t,G as g,L as a,u as h,a as x,s as p,r as n,b as f,w as u}from"./index-96c59242.js";import{s as c}from"./sprite-cc172135.js";import{L as m}from"./Logo-310d1e71.js";const w=e.a`
  text-decoration: none;
  color: #161616;
`,v=e.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 344px;
  height: 49px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  color: #161616;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.15);
  }

  &:focus svg {
    transform: scale(1.15);
  }
`,b=e.svg`
  width: 40px;
  height: 40px;

  transition: transform 300ms var(--timing-function);
`,j=()=>t.jsxs(v,{children:[t.jsx(b,{children:t.jsx("use",{href:`${c}#icon-google`})}),t.jsx(w,{href:"https://trello2-0-backend.onrender.com/users/google",children:"Continue with Google"})]}),y=e.div`
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
`,k=e.h2`
  text-align: center;
  font-size: 50px;
  color: white;
`,L=e.p`
  text-align: center;
  font-size: 28px;
  color: white;
`,S=()=>t.jsxs(y,{children:[t.jsx(k,{children:"Welcome to the app Trello2.0"}),t.jsx(L,{children:"Sometimes render.com falls asleep, wait until we wake up our backend"}),t.jsx(g,{height:"240",width:"240",color:"green",ariaLabel:"grid-loading",radius:"12.5",visible:!0})]}),T=e.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,I=e.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,z=e.svg`
  width: 200px;
  height: 200px;
`,B=e.p`
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
`,R=e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,C=e(a)`
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
`,E=e(a)`
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
`,M=()=>{const o=h(),r=x(p),[l,d]=n.useState(!1);return n.useEffect(()=>{const s=new URLSearchParams(window.location.search).get("deviceId");s&&(localStorage.setItem("deviceId",s),o(f()))},[]),n.useEffect(()=>{o(u());const i=setTimeout(()=>{r||d(!0)},1500);return()=>{clearTimeout(i)}},[]),t.jsxs(T,{children:[t.jsxs(I,{children:[t.jsx(z,{children:t.jsx("use",{href:c+"#icon-main-trello"})}),t.jsx(m,{large:!0}),t.jsx(B,{children:"Supercharge your productivity and take control of your tasks with this Task Manager - Don't wait, start achieving your goals now!"}),t.jsxs(R,{children:[t.jsx(E,{to:"/auth/login",children:"Log In"}),t.jsx(C,{to:"/auth/register",children:"Registration"}),t.jsx(j,{})]})]}),l&&!r&&t.jsx(S,{})]})};export{M as default};
