import{n as o,N as j,r as u,j as e,u as x,l as w,b as y,c as k,a as S}from"./index-81d3ec9b.js";import{F as E,a as q,E as F,S as I,b as m,c as h,d as s}from"./ModalComponents.styled-d7229d1e.js";import{s as L}from"./sprite-685f0d05.js";import{s as M,_ as $,I as c}from"./selectors-aec7f345.js";const b=o(E)`
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
`,d=o(q)`
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
`,l=o(j)`
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
  fill: var(--modal-input-border-color);
`,v=({name:t})=>{const[r,i]=u.useState(!1),a=()=>{i(!r)};return e.jsxs(z,{children:[e.jsx(I,{name:t,type:r?"text":"password",placeholder:"Enter your password"}),e.jsx(P,{onClick:a,children:e.jsx("use",{href:`${L}#${r?"icon-eye-blocked":"icon-eye"}`})})]})},R=()=>{const t=x(),r=i=>{const a={email:i.email,password:i.password};t(w(a))};return e.jsx(m,{initialValues:{email:"",password:""},validationSchema:h({email:s().email("Invalid email address").required("Email is required"),password:s().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:r,children:e.jsxs(b,{children:[e.jsxs(g,{children:[e.jsx(l,{to:"/auth/register",children:"Registration"}),e.jsx(l,{to:"/auth/login",children:" Log In"})]}),e.jsx(d,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(f,{type:"submit",children:"Login"})]})})},T=()=>{const t=x(),r=i=>{const a={email:i.email,name:i.name,password:i.password};t(y(a))};return e.jsx(m,{initialValues:{name:"",email:"",password:""},validationSchema:h({name:s().max(15,"Must be 15 characters or less").required("Name is required"),email:s().email("Invalid email address").required("Email is required"),password:s().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:r,children:e.jsxs(b,{children:[e.jsxs(g,{children:[e.jsx(l,{to:"/auth/register",children:"Registration"}),e.jsx(l,{to:"/auth/login",children:" Log In"})]}),e.jsx(d,{type:"text",name:"name",placeholder:"Enter your name"}),e.jsx(n,{name:"name"}),e.jsx(d,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(n,{name:"email"}),e.jsx(v,{name:"password"}),e.jsx(n,{name:"password"}),e.jsx(f,{type:"submit",children:"Register"})]})})},p=o.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,O=()=>{const{id:t}=k(),r=S(M);if(u.useEffect(()=>{r&&$.error(r)},[r]),t==="register")return e.jsxs(p,{children:[e.jsx(T,{}),e.jsx(c,{position:"top-right",reverseOrder:!1})]});if(t==="login")return e.jsxs(p,{children:[e.jsx(R,{}),e.jsx(c,{position:"top-right",reverseOrder:!1})]})};export{O as default};
