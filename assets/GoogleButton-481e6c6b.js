import{n as t,j as o}from"./index-914d4a3e.js";import{s as e}from"./sprite-cc172135.js";const n=t.a`
  text-decoration: none;
  color: #161616;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  border-radius: 8px;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--auth-btn-bg-color-hover);
  }

  &:hover svg {
    transform: scale(1.15);
  }

  &:focus svg {
    transform: scale(1.15);
  }
`,r=t.svg`
  width: 40px;
  height: 40px;

  transition: transform 300ms var(--timing-function);
`,c=()=>o.jsxs(n,{href:"https://trello2-0-backend.onrender.com/users/google",children:[o.jsx(r,{children:o.jsx("use",{href:`${e}#icon-google`})}),"Continue with Google"]});export{c as G};
