import{n as o,N as j,r as u,j as r,u as x,l as w,c as y,d as k,a as E}from"./index-02aefbae.js";import{F as S,a as q,E as F,b as h,c as m,d as s}from"./index.esm-3162280f.js";import{s as I}from"./sprite-cc172135.js";import{s as L,_ as M,I as c}from"./selectors-ace46e3d.js";const b=o(S)`
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
`,l=o(q)`
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
`,n=o(F)``,g=o.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,d=o(j)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: var(--hover-form-title-color);
  }
`,f=o.button`
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
`,z=o.div`
  position: relative;
  width: 100%;
  caret-color: var(--auth-input-text-color);
`,P=o.svg`
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
`,v=({name:t})=>{const[e,i]=u.useState(!1),a=()=>{i(!e)};return r.jsxs(z,{children:[r.jsx(l,{name:t,type:e?"text":"password",placeholder:"Enter your password"}),r.jsx(P,{onClick:a,children:r.jsx("use",{href:`${I}#${e?"icon-eye-blocked":"icon-eye"}`})})]})},R=()=>{const t=x(),e=i=>{const a={email:i.email,password:i.password};t(w(a))};return r.jsx(h,{initialValues:{email:"",password:""},validationSchema:m({email:s().email("Invalid email address").required("Email is required"),password:s().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:e,children:r.jsxs(b,{children:[r.jsxs(g,{children:[r.jsx(d,{to:"/auth/register",children:"Registration"}),r.jsx(d,{to:"/auth/login",children:" Log In"})]}),r.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(n,{name:"email"}),r.jsx(v,{name:"password"}),r.jsx(n,{name:"password"}),r.jsx(f,{type:"submit",children:"Login"})]})})},$=()=>{const t=x(),e=i=>{const a={email:i.email,name:i.name,password:i.password};t(y(a))};return r.jsx(h,{initialValues:{name:"",email:"",password:""},validationSchema:m({name:s().max(15,"Must be 15 characters or less").required("Name is required"),email:s().email("Invalid email address").required("Email is required"),password:s().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:e,children:r.jsxs(b,{children:[r.jsxs(g,{children:[r.jsx(d,{to:"/auth/register",children:"Registration"}),r.jsx(d,{to:"/auth/login",children:" Log In"})]}),r.jsx(l,{type:"text",name:"name",placeholder:"Enter your name"}),r.jsx(n,{name:"name"}),r.jsx(l,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(n,{name:"email"}),r.jsx(v,{name:"password"}),r.jsx(n,{name:"password"}),r.jsx(f,{type:"submit",children:"Register"})]})})},p=o.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,N=()=>{const{id:t}=k(),e=E(L);if(u.useEffect(()=>{e&&M.error(e)},[e]),t==="register")return r.jsxs(p,{children:[r.jsx($,{}),r.jsx(c,{position:"top-right",reverseOrder:!1})]});if(t==="login")return r.jsxs(p,{children:[r.jsx(R,{}),r.jsx(c,{position:"top-right",reverseOrder:!1})]})};export{N as default};
