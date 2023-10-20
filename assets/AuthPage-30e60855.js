import{n as o,N as f,u,j as r,l as j,b as w,c as v,a as y,r as k}from"./index-6b385b69.js";import{F as E,a as S,E as q,b as m,c as x,d as i}from"./index.esm-0ab1e552.js";import{s as F,_ as I,I as c}from"./selectors-62cd845b.js";const h=o(E)`
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
`,s=o(S)`
  background-color: var(--auth-input-bg-color);
  border: 1px solid var(--auth-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  color: var(--auth-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: rgb(22, 22, 22) 0px 0px 0px 50px inset;
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
`,n=o(q)``,b=o.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,l=o(f)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: var(--hover-form-title-color);
  }
`,g=o.button`
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
`,L=()=>{const t=u(),e=a=>{const d={email:a.email,password:a.password};t(j(d))};return r.jsx(m,{initialValues:{email:"",password:""},validationSchema:x({email:i().email("Invalid email address").required("Email is required"),password:i().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:e,children:r.jsxs(h,{children:[r.jsxs(b,{children:[r.jsx(l,{to:"/auth/register",children:"Registration"}),r.jsx(l,{to:"/auth/login",children:" Log In"})]}),r.jsx(s,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(n,{name:"email"}),r.jsx(s,{type:"password",name:"password",placeholder:"Enter your password"}),r.jsx(n,{name:"password"}),r.jsx(g,{type:"submit",children:"Login"})]})})},M=()=>{const t=u(),e=a=>{const d={email:a.email,name:a.name,password:a.password};t(w(d))};return r.jsx(m,{initialValues:{name:"",email:"",password:""},validationSchema:x({name:i().max(15,"Must be 15 characters or less").required("Name is required"),email:i().email("Invalid email address").required("Email is required"),password:i().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:e,children:r.jsxs(h,{children:[r.jsxs(b,{children:[r.jsx(l,{to:"/auth/register",children:"Registration"}),r.jsx(l,{to:"/auth/login",children:" Log In"})]}),r.jsx(s,{type:"text",name:"name",placeholder:"Enter your name"}),r.jsx(n,{name:"name"}),r.jsx(s,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(n,{name:"email"}),r.jsx(s,{type:"password",name:"password",placeholder:"Enter your password"}),r.jsx(n,{name:"password"}),r.jsx(g,{type:"submit",children:"Register"})]})})},p=o.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,A=()=>{const{id:t}=v(),e=y(F);if(k.useEffect(()=>{e&&I.error(e)},[e]),t==="register")return r.jsxs(p,{children:[r.jsx(M,{}),r.jsx(c,{position:"top-right",reverseOrder:!1})]});if(t==="login")return r.jsxs(p,{children:[r.jsx(L,{}),r.jsx(c,{position:"top-right",reverseOrder:!1})]})};export{A as default};
