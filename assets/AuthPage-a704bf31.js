import{n as s,N as v,r as d,j as e,u,l as y,b as k,c as S,d as E,s as q,e as P,f as F,g as I}from"./index-4e36928a.js";import{F as z,a as L,E as M,b as h,c as x,d as i}from"./index.esm-cb17a7cf.js";import{s as $}from"./sprite-cc172135.js";import{G as b}from"./GoogleButton-916caabe.js";import{_ as A,I as p}from"./index-f8bc94f0.js";const f=s(z)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
  padding: 24px;
  background-color: var(--auth-form-bg-color);
  font-size: 14px;
  border: solid 1px black;
  border-radius: 8px;
  color: var(--auth-input-text-color);

  & > :last-child {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`,l=s(L)`
  width: 100%;
  background-color: var(--auth-input-bg-color);
  border: 1px solid var(--auth-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  color: var(--auth-input-text-color);
  caret-color: var(--auth-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: #1f1f1f 0px 0px 0px 50px inset;
    -webkit-text-fill-color: var(--auth-input-text-color);
    -webkit-border-before-color: var(--auth-input-border-color);
    -webkit-border-color: var(--auth-input-border-color);
    outline: transparent;
  }

  &:-webkit-autofill:focus {
    outline: transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--auth-input-border-color);
  }
`,n=s(M)``,g=s.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,c=s(v)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: var(--hover-form-title-color);
  }
`,j=s.button`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: none;
  background-color: var(--auth-btn-bg-color);

  color: var(--dark-btn-text-color);
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--auth-btn-bg-color-hover);
  }
`,C=s.div`
  position: relative;
  width: 100%;
  caret-color: var(--auth-input-text-color);
`,R=s.svg`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: var(--auth-input-border-color);
`,w=({name:o})=>{const[t,r]=d.useState(!1),a=()=>{r(!t)};return e.jsxs(C,{children:[e.jsx(l,{name:o,type:t?"text":"password",placeholder:"Enter your password"}),e.jsx(R,{onClick:a,children:e.jsx("use",{href:`${$}#${t?"icon-eye-blocked":"icon-eye"}`})})]})},N=()=>{const o=u(),t=r=>{const a={email:r.email,password:r.password};o(y(a))};return e.jsx(h,{initialValues:{email:"",password:""},validationSchema:x({email:i().email("Invalid email address").required("Email is required").max(49,"Must be 49 characters or less"),password:i().required("Password is required").min(6,"Password must be at least 6 characters").max(49,"Password must be 49 characters or less")}),onSubmit:t,children:e.jsxs(f,{children:[e.jsxs(g,{children:[e.jsx(c,{to:"/auth/register",children:"Registration"}),e.jsx(c,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(w,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Login"}),e.jsx(b,{})]})})},T=()=>{const o=u(),t=r=>{const a={email:r.email,name:r.name,password:r.password};o(k(a))};return e.jsx(h,{initialValues:{name:"",email:"",password:""},validationSchema:x({name:i().matches(/^[A-Za-z\s]+$/,"Name can only contain letters and spaces").max(29,"Must be 29 characters or less").required("Name is required"),email:i().email("Invalid email address").required("Email is required").max(49,"Must be 49 characters or less"),password:i().required("Password is required").min(6,"Password must be at least 6 characters").max(49,"Password must be 49 characters or less")}),onSubmit:t,children:e.jsxs(f,{children:[e.jsxs(g,{children:[e.jsx(c,{to:"/auth/register",children:"Registration"}),e.jsx(c,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"text",name:"name",placeholder:"Enter your name"}),e.jsx(n,{name:"name"}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(w,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Register"}),e.jsx(b,{})]})})},m=s.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,D=()=>{const o=u(),{id:t}=S(),r=E(q);if(d.useEffect(()=>{r&&A.error(r)},[r]),d.useEffect(()=>{o(P()),o(F()),o(I())},[]),t==="register")return e.jsxs(m,{children:[e.jsx(T,{}),e.jsx(p,{position:"top-right",reverseOrder:!1})]});if(t==="login")return e.jsxs(m,{children:[e.jsx(N,{}),e.jsx(p,{position:"top-right",reverseOrder:!1})]})};export{D as default};
