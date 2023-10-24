import{n as o,N as w,r as u,j as e,u as x,l as y,e as k,f as E,g as S}from"./index-26cd6fe4.js";import{F as q,a as F,E as I,b as m,c as h,d as a}from"./index.esm-ec6f3704.js";import{s as L}from"./sprite-cc172135.js";import{G as b}from"./GoogleButton-ee422493.js";import{s as M,_ as z,I as c}from"./selectors-5759c62d.js";const g=o(q)`
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
`,l=o(F)`
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
`,n=o(I)``,f=o.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,d=o(w)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: var(--hover-form-title-color);
  }
`,j=o.button`
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
`,P=o.div`
  position: relative;
  width: 100%;
  caret-color: var(--auth-input-text-color);
`,R=o.svg`
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
`,v=({name:t})=>{const[r,i]=u.useState(!1),s=()=>{i(!r)};return e.jsxs(P,{children:[e.jsx(l,{name:t,type:r?"text":"password",placeholder:"Enter your password"}),e.jsx(R,{onClick:s,children:e.jsx("use",{href:`${L}#${r?"icon-eye-blocked":"icon-eye"}`})})]})},$=()=>{const t=x(),r=i=>{const s={email:i.email,password:i.password};t(y(s))};return e.jsx(m,{initialValues:{email:"",password:""},validationSchema:h({email:a().email("Invalid email address").required("Email is required"),password:a().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:r,children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(d,{to:"/auth/register",children:"Registration"}),e.jsx(d,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Login"}),e.jsx(b,{})]})})},T=()=>{const t=x(),r=i=>{const s={email:i.email,name:i.name,password:i.password};t(k(s))};return e.jsx(m,{initialValues:{name:"",email:"",password:""},validationSchema:h({name:a().max(15,"Must be 15 characters or less").required("Name is required"),email:a().email("Invalid email address").required("Email is required"),password:a().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:r,children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(d,{to:"/auth/register",children:"Registration"}),e.jsx(d,{to:"/auth/login",children:" Log In"})]}),e.jsx(l,{type:"text",name:"name",placeholder:"Enter your name"}),e.jsx(n,{name:"name"}),e.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(j,{type:"submit",children:"Register"}),e.jsx(b,{})]})})},p=o.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,G=()=>{const{id:t}=E(),r=S(M);if(u.useEffect(()=>{r&&z.error(r)},[r]),t==="register")return e.jsxs(p,{children:[e.jsx(T,{}),e.jsx(c,{position:"top-right",reverseOrder:!1})]});if(t==="login")return e.jsxs(p,{children:[e.jsx($,{}),e.jsx(c,{position:"top-right",reverseOrder:!1})]})};export{G as default};
