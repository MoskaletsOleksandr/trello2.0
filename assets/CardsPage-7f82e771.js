import{u as b,j as e,p as ee,c as x,q as te,b as m,t as oe,v as ie,w as re,m as G,x as ne,y as se,z as le}from"./index-cda7ef00.js";import{M as B,S as I,a as S,b as d,c as O,p as ae,f as J,g as M,C as K,h as ce,j as de}from"./Button-937f9e99.js";import{n as o}from"./emotion-styled.browser.esm-69db5252.js";import{s as h}from"./sprite-33c0d800.js";import{b as $,c as D,d as p,a as N,u as pe}from"./index.esm-a174d4ee.js";const xe=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({background:t})=>t==null?void 0:t.mobileURL});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({background:t})=>t==null?void 0:t.mobileRetinaURL});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${({background:t})=>t==null?void 0:t.tabletURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:t})=>t==null?void 0:t.tabletRetinaURL});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${({background:t})=>t==null?void 0:t.desktopURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:t})=>t==null?void 0:t.desktopRetainaURL});
    }
  }
`,he=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  background: linear-gradient(
    to right,
    var(--header-dashboard-bg-color),
    transparent,
    transparent,
    var(--header-dashboard-bg-color)
  );
`,ue=o.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,me=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--filter-text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.2);
  }

  &:focus svg {
    transform: scale(1.2);
  }
`,ge=o.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,fe=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 34px;
  padding: 36px 24px;
`,je=o.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,be=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,ye=o.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,ve=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,F=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,A=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Ce=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,we=({columnId:t,onClose:i,columnTitle:r})=>{const l=b(),s=n=>{const a={title:n.title};l(ee({columnId:t,body:a})),i()};return e.jsx(B,{onClose:i,title:"Edit column",children:e.jsx($,{initialValues:{title:r},validationSchema:D({title:p().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:s,children:e.jsxs(I,{children:[e.jsx(S,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(O,{type:"submit",children:"Edit"})]})})})},ke=o.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 334px;
  height: 154px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: var(--card-primary-text-color);
  padding: 14px 24px;
  border-left: 4px solid
    ${({priority:t})=>`var(--filter-${t}-priority-color)`};
  transition: background-color 300ms var(--timing-function);

  &:hover {
    background-color: var(--card-bg-color-hover);
  }
`,Me=o.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,Be=o.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Ie=o.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,Se=o.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,Oe=o.ul`
  display: flex;
  gap: 14px;
`,V=o.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,W=o.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,$e=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,De=o.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
`,H=o.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,Pe=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,E=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,U=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Te=o.ul`
  display: flex;
  gap: 8px;
`,qe=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,Le=o.label``,Re=o(N)`
  display: none;
`;o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const ze=o.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
  border: ${({selected:t})=>t?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:t,priority:i})=>t?`2px solid var(--filter-${i}-priority-color)`:"none"};
`,Q=({name:t,icons:i,selectedItem:r})=>{const[l,s]=x.useState(r||""),{setFieldValue:n}=pe();return x.useEffect(()=>{s(r||"")},[r]),e.jsx(Te,{children:ae.map(a=>e.jsx(qe,{children:e.jsxs(Le,{children:[e.jsx(Re,{type:"radio",name:t,value:a,onChange:u=>{s(u.target.value),n(t,u.target.value)}}),e.jsx(ze,{priority:a,selected:l===a})]})},a))})},Fe=({onClose:t,card:i})=>{const r=b(),{_id:l}=i,s=n=>{const a={title:n.title,text:n.text,priority:n.selectedPriority,deadline:n.selectedDate};r(te({cardId:l,body:a})),t()};return e.jsx(B,{onClose:t,title:"Edit card",children:e.jsx($,{initialValues:{title:i.title,text:i.text,selectedPriority:i.priority,selectedDate:i.deadline},validationSchema:D({title:p().max(20,"Must be 20 characters or less").required("Name is required"),text:p().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:p().required("Priority is required"),selectedDate:p().required("Deadline is required")}),onSubmit:s,children:e.jsxs(I,{children:[e.jsx(S,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(J,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(d,{name:"text"}),e.jsx(M,{children:"Priority color"}),e.jsx(Q,{name:"selectedPriority",selectedItem:i==null?void 0:i.priority}),e.jsx(d,{name:"selectedPriority"}),e.jsx(M,{children:"Deadline"}),e.jsx(N,{type:"date",name:"selectedDate"}),e.jsx(d,{name:"selectedDate"}),e.jsx(O,{type:"submit",children:"Edit"})]})})})},X=t=>t.columns.columns,Ae=({card:t,columnTitle:i})=>{const r=x.useRef(null),[l,s]=x.useState(!1),[n,a]=x.useState(!1),u=b(),g=m(X),{_id:w,title:P,text:T,priority:f,deadline:q,order:y}=t,k=g.map(j=>j.title),L=k.length,v=()=>{s(!0)},R=()=>{s(!1)},z=()=>{u(oe(w))},C=()=>{a(!n)},c=j=>{j.stopPropagation(),C()},_=j=>{if(j===i)return;const Y={newColumnId:g.find(Z=>Z.title===j)._id};u(ie({cardId:w,body:Y})),C()};return e.jsxs(ke,{priority:f,children:[e.jsx(Me,{children:P}),e.jsxs("p",{children:["Order: ",y]}),e.jsx(Be,{children:e.jsx(Ie,{children:T})}),e.jsxs(Se,{children:[e.jsxs(Oe,{children:[e.jsxs(V,{children:[e.jsx(W,{children:"Priority:"}),e.jsxs($e,{children:[e.jsx(De,{priority:f}),e.jsx(H,{children:f})]})]}),e.jsxs(V,{children:[e.jsx(W,{children:"Deadline:"}),e.jsx(H,{children:q})]})]}),e.jsxs(Pe,{children:[e.jsx(E,{type:"button",onClick:v,children:e.jsx(U,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),L>1&&e.jsx(E,{ref:r,type:"button",onClick:c,children:e.jsx(U,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-arrow-circle-broken-right"})})}),e.jsx(E,{type:"button",onClick:()=>{z()},children:e.jsx(U,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})}),n&&e.jsx(K,{title:"Move to column",options:k,selectedOption:i,isOpen:n,onClose:C,handleOptionClick:_,openBtnRef:r})]})]}),l&&e.jsx(Fe,{onClose:R,card:t})]})},Ee=t=>t.cards.cards,Ue=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: auto;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-btn-bg-color);

  color: var(--modal-btn-text-color);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 300ms var(--timing-function);

  &:hover,
  :focus {
    background-color: var(--modal-btn-bg-color-hover);
  }
`,Ne=o.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-plus-btn-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`,_e=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Ve=({onClose:t,columnId:i,boardId:r})=>{const l=b(),s=n=>{const a={title:n.title,text:n.text,priority:n.selectedPriority,deadline:n.selectedDate,columnId:i,boardId:r};l(re(a)),t()};return e.jsx(B,{onClose:t,title:"Add card",children:e.jsx($,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:""},validationSchema:D({title:p().max(20,"Must be 20 characters or less").required("Name is required"),text:p().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:p().required("Priority is required"),selectedDate:p().required("Deadline is required")}),onSubmit:s,children:e.jsxs(I,{children:[e.jsx(S,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(J,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(d,{name:"text"}),e.jsx(M,{children:"Priority color"}),e.jsx(Q,{name:"selectedPriority"}),e.jsx(d,{name:"selectedPriority"}),e.jsx(M,{children:"Deadline"}),e.jsx(N,{type:"date",name:"selectedDate"}),e.jsx(d,{name:"selectedDate"}),e.jsx(O,{type:"submit",children:"Add"})]})})})},We=({columnId:t})=>{const[i,r]=x.useState(!1),l=m(G),s=()=>{r(!0)},n=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ue,{onClick:s,type:"button",children:[e.jsx(Ne,{children:e.jsx(_e,{width:"28px",height:"28px",children:e.jsx("use",{href:h+"#icon-plus"})})}),"Add another card"]}),i&&e.jsx(Ve,{onClose:n,columnId:t,boardId:l})]})},He=({column:t,columns:i})=>{const r=b(),{title:l,_id:s,order:n}=t,[a,u]=x.useState(!1),[g,w]=x.useState(!1),P=m(Ee),T=i.length,f=x.useRef(null),q=i.map(c=>c.order),y=P.find(c=>c.columnId===s),k=()=>{u(!0)},L=()=>{u(!1)},v=()=>{w(!g)},R=c=>{c.stopPropagation(),v()},z=()=>{r(ne(s))},C=c=>{if(c===n)return;r(se({columnId:s,body:{newOrder:c}})),v()};return e.jsxs(je,{children:[e.jsxs(be,{children:[e.jsx(ye,{children:l}),e.jsxs(ve,{children:[e.jsx(F,{type:"button",onClick:k,children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-pencil"})})}),T>1&&e.jsx(F,{ref:f,type:"button",onClick:R,children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-arrow-circle-broken-right"})})}),e.jsx(F,{type:"button",onClick:()=>{z()},children:e.jsx(A,{width:"16px",height:"16px",children:e.jsx("use",{href:h+"#icon-trash"})})}),g&&e.jsx(K,{title:"Move to position",options:q,selectedOption:n,isOpen:g,onClose:v,handleOptionClick:C,openBtnRef:f})]})]}),e.jsx(Ce,{children:y==null?void 0:y.cards.map(c=>e.jsx(Ae,{card:c,columnTitle:l},c._id))}),e.jsx(We,{columnId:s}),a&&e.jsx(we,{columnId:s,onClose:L,columnTitle:l})]})},Ge=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-bg-color);
  color: var(--column-add-btn-text-color);
  font-size: 14px;
  cursor: pointer;
`,Je=o.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-plus-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;
`,Ke=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Qe=({boardId:t,onClose:i})=>{const r=b(),l=s=>{const n={title:s.title,boardId:t};r(le(n)),i()};return e.jsx(B,{onClose:i,title:"Add column",children:e.jsx($,{initialValues:{title:""},validationSchema:D({title:p().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:l,children:e.jsxs(I,{children:[e.jsx(S,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(O,{type:"submit",children:"Add"})]})})})},Xe=()=>{const[t,i]=x.useState(!1),r=m(G),l=()=>{i(!0)},s=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{onClick:l,type:"button",children:[e.jsx(Je,{children:e.jsx(Ke,{width:"28px",height:"28px",children:e.jsx("use",{href:h+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(Qe,{boardId:r,onClose:s})]})},Ye=()=>{const t=m(ce),i=m(de),r=m(X);return e.jsxs(xe,{background:i,children:[e.jsxs(he,{children:[e.jsx(ue,{children:t}),e.jsxs(me,{children:[e.jsx(ge,{children:e.jsx("use",{href:h+"#icon-filter"})}),"Filters"]})]}),e.jsxs(fe,{children:[r.map(l=>e.jsx(He,{column:l,columns:r},l._id)),e.jsx(Xe,{})]})]})},Ze=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,st=()=>e.jsx(Ze,{children:e.jsx(Ye,{})});export{st as default};
