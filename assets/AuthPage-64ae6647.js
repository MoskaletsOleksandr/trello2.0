import{N as g,u,j as r,l as f,r as j,a as w}from"./index-85d86f8a.js";import{F as v,a as y,E as k,b as p,c as m,d as a}from"./index.esm-c82d55e5.js";import{n as e}from"./emotion-styled.browser.esm-55173d94.js";const x=e(v)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 424px;
  padding: 40px;
  background-color: var(--auth-form-bg-color);
  font-size: 14px;
  border: solid 1px black;
  border-radius: 8px;
  color: var(--auth-input-text-color);

  & > :last-child {
    margin-top: 10px;
  }
`,i=e(y)`
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
`,s=e(k)``,h=e.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`,n=e(g)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: var(--hover-form-title-color);
  }
`,b=e.button`
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
`,E=()=>{const o=u(),l=t=>{const d={email:t.email,password:t.password};o(f(d))};return r.jsx(p,{initialValues:{email:"",password:""},validationSchema:m({email:a().email("Invalid email address").required("Email is required"),password:a().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:l,children:r.jsxs(x,{children:[r.jsxs(h,{children:[r.jsx(n,{to:"/auth/register",children:"Registration"}),r.jsx(n,{to:"/auth/login",children:" Log In"})]}),r.jsx(i,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(s,{name:"email"}),r.jsx(i,{type:"password",name:"password",placeholder:"Enter your password"}),r.jsx(s,{name:"password"}),r.jsx(b,{type:"submit",children:"Login"})]})})},S=()=>{const o=u(),l=t=>{const d={email:t.email,name:t.name,password:t.password};o(j(d))};return r.jsx(p,{initialValues:{name:"",email:"",password:""},validationSchema:m({name:a().max(15,"Must be 15 characters or less").required("Name is required"),email:a().email("Invalid email address").required("Email is required"),password:a().max(20,"Must be 20 characters or less").required("Password is required")}),onSubmit:l,children:r.jsxs(x,{children:[r.jsxs(h,{children:[r.jsx(n,{to:"/auth/register",children:"Registration"}),r.jsx(n,{to:"/auth/login",children:" Log In"})]}),r.jsx(i,{type:"text",name:"name",placeholder:"Enter your name"}),r.jsx(s,{name:"name"}),r.jsx(i,{type:"email",name:"email",placeholder:"Enter your email"}),r.jsx(s,{name:"email"}),r.jsx(i,{type:"password",name:"password",placeholder:"Enter your password"}),r.jsx(s,{name:"password"}),r.jsx(b,{type:"submit",children:"Register"})]})})},c=e.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`,z=()=>{const{id:o}=w();if(o==="register")return r.jsx(c,{children:r.jsx(S,{})});if(o==="login")return r.jsx(c,{children:r.jsx(E,{})})};export{z as default};
