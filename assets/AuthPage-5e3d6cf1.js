import{n as s,N as w,r as c,j as e,u as p,l as y,b as k,c as S,d as E,s as q,e as F,f as I,g as L}from"./index-73833d1e.js";import{F as M,a as z,E as C,b as m,c as h,d as i}from"./index.esm-3d67a31c.js";import{s as P}from"./sprite-cc172135.js";import{G as b}from"./GoogleButton-4e15533d.js";import{_ as R,I as u}from"./index-5df3642f.js";const f=s(M)`
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
`,l=s(z)`
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
`,n=s(C)``,g=s.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,d=s(w)`
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
`,$=s.div`
  position: relative;
  width: 100%;
  caret-color: var(--auth-input-text-color);
`,A=s.svg`
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
`,v=({name:t})=>{const[o,r]=c.useState(!1),a=()=>{r(!o)};return e.jsxs($,{children:[e.jsx(l,{name:t,type:o?"text":"password",placeholder:"Enter your password"}),e.jsx(A,{onClick:a,children:e.jsx("use",{href:`${P}#${o?"icon-eye-blocked":"icon-eye"}`})})]})},T=()=>{const t=p(),o=r=>{const a={email:r.email,password:r.password};t(y(a))};return e.jsx(m,{initialValues:{email:"",password:""},validationSchema:h({email:i().email("Invalid email address").required("Email is required"),password:i().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:o,children:e.jsxs(f,{children:[e.jsxs(g,{children:[e.jsx(d,{to:"/auth/register",children:"Registration"}),e.jsx(d,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Login"}),e.jsx(b,{})]})})},V=()=>{const t=p(),o=r=>{const a={email:r.email,name:r.name,password:r.password};t(k(a))};return e.jsx(m,{initialValues:{name:"",email:"",password:""},validationSchema:h({name:i().max(15,"Must be 15 characters or less").required("Name is required"),email:i().email("Invalid email address").required("Email is required"),password:i().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:o,children:e.jsxs(f,{children:[e.jsxs(g,{children:[e.jsx(d,{to:"/auth/register",children:"Registration"}),e.jsx(d,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"text",name:"name",placeholder:"Enter your name"}),e.jsx(n,{name:"name"}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Register"}),e.jsx(b,{})]})})},x=s.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,D=()=>{const t=p(),{id:o}=S(),r=E(q);if(c.useEffect(()=>{r&&R.error(r)},[r]),c.useEffect(()=>{t(F()),t(I()),t(L())},[]),o==="register")return e.jsxs(x,{children:[e.jsx(V,{}),e.jsx(u,{position:"top-right",reverseOrder:!1})]});if(o==="login")return e.jsxs(x,{children:[e.jsx(T,{}),e.jsx(u,{position:"top-right",reverseOrder:!1})]})};export{D as default};
