import{u as g,j as e,p as J,c as h,q as K,t as Q,b as m,m as F,v as X,w as Y,x as Z}from"./index-806423b4.js";import{M as b,S as y,a as v,b as d,c as C,p as ee,f as A,g as f,C as te,h as re,j as oe}from"./Button-2bd3cf3c.js";import{n as r}from"./emotion-styled.browser.esm-2278296d.js";import{s as x}from"./sprite-33c0d800.js";import{b as w,c as k,d as p,a as q,u as ie}from"./index.esm-8b07aa62.js";const ne=r.div`
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
`,se=r.div`
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
`,le=r.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,ae=r.button`
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
`,ce=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,de=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 34px;
  padding: 36px 24px;
`,pe=r.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,xe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,he=r.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,ue=r.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,I=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,D=r.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,me=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ge=({columnId:t,onClose:o,columnTitle:i})=>{const l=g(),s=n=>{const a={title:n.title};l(J({columnId:t,body:a})),o()};return e.jsx(b,{onClose:o,title:"Edit column",children:e.jsx(w,{initialValues:{title:i},validationSchema:k({title:p().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(C,{type:"submit",children:"Edit"})]})})})},je=r.div`
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
`,fe=r.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,be=r.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ye=r.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,ve=r.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,Ce=r.ul`
  display: flex;
  gap: 14px;
`,z=r.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,L=r.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,we=r.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ke=r.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
`,R=r.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,Me=r.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,P=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,T=r.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Se=r.ul`
  display: flex;
  gap: 8px;
`,$e=r.li`
  display: block;
  width: 18px;
  height: 18px;
`,Be=r.label``,Ie=r(q)`
  display: none;
`;r.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const De=r.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
  border: ${({selected:t})=>t?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:t,priority:o})=>t?`2px solid var(--filter-${o}-priority-color)`:"none"};
`,E=({name:t,icons:o,selectedItem:i})=>{const[l,s]=h.useState(i||""),{setFieldValue:n}=ie();return h.useEffect(()=>{s(i||"")},[i]),e.jsx(Se,{children:ee.map(a=>e.jsx($e,{children:e.jsxs(Be,{children:[e.jsx(Ie,{type:"radio",name:t,value:a,onChange:u=>{s(u.target.value),n(t,u.target.value)}}),e.jsx(De,{priority:a,selected:l===a})]})},a))})},Pe=({onClose:t,card:o})=>{const i=g(),{_id:l}=o,s=n=>{const a={title:n.title,text:n.text,priority:n.selectedPriority,deadline:n.selectedDate};i(K({cardId:l,body:a})),t()};return e.jsx(b,{onClose:t,title:"Edit card",children:e.jsx(w,{initialValues:{title:o.title,text:o.text,selectedPriority:o.priority,selectedDate:o.deadline},validationSchema:k({title:p().max(20,"Must be 20 characters or less").required("Name is required"),text:p().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:p().required("Priority is required"),selectedDate:p().required("Deadline is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(A,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(d,{name:"text"}),e.jsx(f,{children:"Priority color"}),e.jsx(E,{name:"selectedPriority",selectedItem:o==null?void 0:o.priority}),e.jsx(d,{name:"selectedPriority"}),e.jsx(f,{children:"Deadline"}),e.jsx(q,{type:"date",name:"selectedDate"}),e.jsx(d,{name:"selectedDate"}),e.jsx(C,{type:"submit",children:"Edit"})]})})})},Te=({card:t})=>{const[o,i]=h.useState(!1),{_id:l,title:s,text:n,priority:a,deadline:u,order:j}=t,M=()=>{i(!0)},S=()=>{i(!1)};return e.jsxs(je,{priority:a,children:[e.jsx(fe,{children:s}),e.jsx(be,{children:e.jsx(ye,{children:n})}),e.jsxs(ve,{children:[e.jsxs(Ce,{children:[e.jsxs(z,{children:[e.jsx(L,{children:"Priority:"}),e.jsxs(we,{children:[e.jsx(ke,{priority:a}),e.jsx(R,{children:a})]})]}),e.jsxs(z,{children:[e.jsx(L,{children:"Deadline:"}),e.jsx(R,{children:u})]})]}),e.jsxs(Me,{children:[e.jsx(P,{type:"button",onClick:M,children:e.jsx(T,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),e.jsx(P,{type:"button",children:e.jsx(T,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-arrow-circle-broken-right"})})}),e.jsx(P,{type:"button",children:e.jsx(T,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})})]})]}),o&&e.jsx(Pe,{onClose:S,card:t})]})},qe=t=>t.cards.cards,Oe=r.button`
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
`,ze=r.div`
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
`,Le=r.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Re=({onClose:t,columnId:o,boardId:i})=>{const l=g(),s=n=>{const a={title:n.title,text:n.text,priority:n.selectedPriority,deadline:n.selectedDate,columnId:o,boardId:i};l(Q(a)),t()};return e.jsx(b,{onClose:t,title:"Add card",children:e.jsx(w,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:""},validationSchema:k({title:p().max(20,"Must be 20 characters or less").required("Name is required"),text:p().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:p().required("Priority is required"),selectedDate:p().required("Deadline is required")}),onSubmit:s,children:e.jsxs(y,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(A,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(d,{name:"text"}),e.jsx(f,{children:"Priority color"}),e.jsx(E,{name:"selectedPriority"}),e.jsx(d,{name:"selectedPriority"}),e.jsx(f,{children:"Deadline"}),e.jsx(q,{type:"date",name:"selectedDate"}),e.jsx(d,{name:"selectedDate"}),e.jsx(C,{type:"submit",children:"Add"})]})})})},Fe=({columnId:t})=>{const[o,i]=h.useState(!1),l=m(F),s=()=>{i(!0)},n=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Oe,{onClick:s,type:"button",children:[e.jsx(ze,{children:e.jsx(Le,{width:"28px",height:"28px",children:e.jsx("use",{href:x+"#icon-plus"})})}),"Add another card"]}),o&&e.jsx(Re,{onClose:n,columnId:t,boardId:l})]})},Ae=({column:t,columns:o})=>{const i=g(),{title:l,_id:s,order:n}=t,[a,u]=h.useState(!1),[j,M]=h.useState(!1),S=m(qe),U=o.length,O=h.useRef(null),N=o.map(c=>c.order),$=S.find(c=>c.columnId===s),V=()=>{u(!0)},_=()=>{u(!1)},B=()=>{M(!j)},W=c=>{c.stopPropagation(),B()},H=()=>{i(X(s))},G=c=>{if(c===n)return;i(Y({columnId:s,body:{oldOrder:n,newOrder:c}})),B()};return e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsx(he,{children:l}),e.jsxs(ue,{children:[e.jsx(I,{type:"button",onClick:V,children:e.jsx(D,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-pencil"})})}),U>1&&e.jsx(I,{ref:O,type:"button",onClick:W,children:e.jsx(D,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-arrow-circle-broken-right"})})}),e.jsx(I,{type:"button",onClick:()=>{H()},children:e.jsx(D,{width:"16px",height:"16px",children:e.jsx("use",{href:x+"#icon-trash"})})}),j&&e.jsx(te,{title:"Move to position",options:N,selectedOption:n,isOpen:j,onClose:B,handleOptionClick:G,openBtnRef:O})]})]}),e.jsx(me,{children:$==null?void 0:$.cards.map(c=>e.jsx(Te,{card:c},c._id))}),e.jsx(Fe,{columnId:s}),a&&e.jsx(ge,{columnId:s,onClose:_,columnTitle:l})]})},Ee=r.button`
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
`,Ue=r.div`
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
`,Ne=r.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,Ve=({boardId:t,onClose:o})=>{const i=g(),l=s=>{const n={title:s.title,boardId:t};i(Z(n)),o()};return e.jsx(b,{onClose:o,title:"Add column",children:e.jsx(w,{initialValues:{title:""},validationSchema:k({title:p().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:l,children:e.jsxs(y,{children:[e.jsx(v,{type:"text",name:"title",placeholder:"Title"}),e.jsx(d,{name:"title"}),e.jsx(C,{type:"submit",children:"Add"})]})})})},_e=()=>{const[t,o]=h.useState(!1),i=m(F),l=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{onClick:l,type:"button",children:[e.jsx(Ue,{children:e.jsx(Ne,{width:"28px",height:"28px",children:e.jsx("use",{href:x+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(Ve,{boardId:i,onClose:s})]})},We=t=>t.columns.columns,He=()=>{const t=m(re),o=m(oe),i=m(We);return e.jsxs(ne,{background:o,children:[e.jsxs(se,{children:[e.jsx(le,{children:t}),e.jsxs(ae,{children:[e.jsx(ce,{children:e.jsx("use",{href:x+"#icon-filter"})}),"Filters"]})]}),e.jsxs(de,{children:[i.map(l=>e.jsx(Ae,{column:l,columns:i},l._id)),e.jsx(_e,{})]})]})},Ge=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,et=()=>e.jsx(Ge,{children:e.jsx(He,{})});export{et as default};
