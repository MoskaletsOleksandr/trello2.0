import{u as v,j as e,p as ie,c,q as ne,b as g,t as se,v as le,w as ae,m as Q,x as X,y as ce,z as de,A as pe}from"./index-85d86f8a.js";import{M as I,S as $,a as P,b as u,c as D,p as Y,f as Z,g as S,C as W,h as xe,j as he}from"./Button-44229791.js";import{n as o}from"./emotion-styled.browser.esm-55173d94.js";import{s as f}from"./sprite-33c0d800.js";import{b as L,c as T,d as m,a as H,u as ue}from"./index.esm-c82d55e5.js";const me=o.div`
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
`,ge=o.div`
  position: relative;
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
`,fe=o.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--header-dashboard-title-color);
  text-transform: capitalize;
`,be=o.div`
  position: relative;
`,je=o.button`
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
`,ye=o.svg`
  width: 16px;
  height: 16px;
  stroke: var(--filter-icon-color);
  fill: none;

  transition: transform 300ms var(--timing-function);
`,ve=o.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 36px 24px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 12px;
    width: 100w;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--horizontal-scroll-slider-bg-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--horizontal-scroll-bar-bg-color);
    border-radius: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
`,Ce=o.div`
  display: flex;
  align-items: start;
  gap: 18px;
`,we=o.div`
  width: 350px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`,ke=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`,Oe=o.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`,Me=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,U=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,N=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Be=o.div`
  overflow-y: hidden;
`,Se=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  box-sizing: border-box;
  height: calc(100vh - 340px);

  ::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    height: 10px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    height: 130px;
    margin-left: 8px;
  }
`,Ie=({columnId:t,onClose:r,columnTitle:n})=>{const l=v(),i=s=>{const a={title:s.title};l(ie({columnId:t,body:a})),r()};return e.jsx(I,{onClose:r,title:"Edit column",children:e.jsx(L,{initialValues:{title:n},validationSchema:T({title:m().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:i,children:e.jsxs($,{children:[e.jsx(P,{type:"text",name:"title",placeholder:"Title"}),e.jsx(u,{name:"title"}),e.jsx(D,{type:"submit",children:"Edit"})]})})})},$e=o.div`
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
`,Pe=o.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--card-title-color);
  text-transform: capitalize;
`,De=o.div`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Le=o.p`
  color: var(--card-secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::first-letter {
    text-transform: uppercase;
  }
`,Te=o.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid var(--card-border-color);
`,qe=o.ul`
  display: flex;
  gap: 14px;
`,G=o.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,J=o.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--card-secondary-text-color);
`,Re=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ze=o.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
`,K=o.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--card-primary-text-color);
  text-transform: capitalize;
`,Fe=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`,_=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`,V=o.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`,Ae=o.ul`
  display: flex;
  gap: 8px;
`,Ee=o.li`
  display: block;
  width: 18px;
  height: 18px;
`,Ue=o.label``,Ne=o(H)`
  display: none;
`;o.svg`
  width: 18px;
  height: 18px;
  stroke: ${({selected:t})=>t?"var(--modal-selected-icon-color)":"var(--modal-icon-color)"};
  fill: transparent;
  cursor: pointer;
`;const _e=o.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({priority:t})=>`var(--filter-${t}-priority-color)`};
  border: ${({selected:t})=>t?"2px solid var(--modal-bg-color)":"none"};
  outline: ${({selected:t,priority:r})=>t?`2px solid var(--filter-${r}-priority-color)`:"none"};
`,ee=({name:t,icons:r,selectedItem:n})=>{const[l,i]=c.useState(n||""),{setFieldValue:s}=ue();return c.useEffect(()=>{i(n||"")},[n]),e.jsx(Ae,{children:Y.map(a=>e.jsx(Ee,{children:e.jsxs(Ue,{children:[e.jsx(Ne,{type:"radio",name:t,value:a,onChange:x=>{i(x.target.value),s(t,x.target.value)}}),e.jsx(_e,{priority:a,selected:l===a})]})},a))})},Ve=({onClose:t,card:r})=>{const n=v(),{_id:l}=r,i=s=>{const a={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate};n(ne({cardId:l,body:a})),t()};return e.jsx(I,{onClose:t,title:"Edit card",children:e.jsx(L,{initialValues:{title:r.title,text:r.text,selectedPriority:r.priority,selectedDate:r.deadline},validationSchema:T({title:m().max(20,"Must be 20 characters or less").required("Name is required"),text:m().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:m().required("Priority is required"),selectedDate:m().required("Deadline is required")}),onSubmit:i,children:e.jsxs($,{children:[e.jsx(P,{type:"text",name:"title",placeholder:"Title"}),e.jsx(u,{name:"title"}),e.jsx(Z,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(u,{name:"text"}),e.jsx(S,{children:"Priority color"}),e.jsx(ee,{name:"selectedPriority",selectedItem:r==null?void 0:r.priority}),e.jsx(u,{name:"selectedPriority"}),e.jsx(S,{children:"Deadline"}),e.jsx(H,{type:"date",name:"selectedDate"}),e.jsx(u,{name:"selectedDate"}),e.jsx(D,{type:"submit",children:"Edit"})]})})})},te=t=>t.columns.columns,We=({card:t,columnTitle:r})=>{const n=c.useRef(null),[l,i]=c.useState(!1),[s,a]=c.useState(!1),x=v(),h=g(te),{_id:C,title:w,text:p,priority:O,deadline:q,order:M}=t,k=h.map(b=>b.title),R=k.length,j=()=>{i(!0)},z=()=>{i(!1)},F=()=>{x(se(C))},y=()=>{a(!s)},A=b=>{b.stopPropagation(),y()},E=b=>{if(b===r)return;const B={newColumnId:h.find(re=>re.title===b)._id};x(le({cardId:C,body:B})),y()};return e.jsxs($e,{priority:O,children:[e.jsx(Pe,{children:w}),e.jsxs("p",{children:["Order: ",M]}),e.jsx(De,{children:e.jsx(Le,{children:p})}),e.jsxs(Te,{children:[e.jsxs(qe,{children:[e.jsxs(G,{children:[e.jsx(J,{children:"Priority:"}),e.jsxs(Re,{children:[e.jsx(ze,{priority:O}),e.jsx(K,{children:O})]})]}),e.jsxs(G,{children:[e.jsx(J,{children:"Deadline:"}),e.jsx(K,{children:q})]})]}),e.jsxs(Fe,{children:[e.jsx(_,{type:"button",onClick:j,children:e.jsx(V,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-pencil"})})}),R>1&&e.jsx(_,{ref:n,type:"button",onClick:A,children:e.jsx(V,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-arrow-circle-broken-right"})})}),e.jsx(_,{type:"button",onClick:()=>{F()},children:e.jsx(V,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-trash"})})}),s&&e.jsx(W,{title:"Move to column",options:k,selectedOption:r,isOpen:s,onClose:y,handleOptionClick:E,openBtnRef:n})]})]}),l&&e.jsx(Ve,{onClose:z,card:t})]})},He=t=>t.cards.cards,oe=t=>t.cards.priority,Ge=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 334px;
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
`,Je=o.div`
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
`,Ke=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
`,Qe=({onClose:t,columnId:r,boardId:n})=>{const l=v(),i=s=>{const a={title:s.title,text:s.text,priority:s.selectedPriority,deadline:s.selectedDate,columnId:r,boardId:n};l(ae(a)),t()};return e.jsx(I,{onClose:t,title:"Add card",children:e.jsx(L,{initialValues:{title:"",text:"",selectedPriority:"",selectedDate:""},validationSchema:T({title:m().max(20,"Must be 20 characters or less").required("Name is required"),text:m().min(5,"Must be 5 characters or more").max(150,"Must be 150 characters or less").required("Description is required"),selectedPriority:m().required("Priority is required"),selectedDate:m().required("Deadline is required")}),onSubmit:i,children:e.jsxs($,{children:[e.jsx(P,{type:"text",name:"title",placeholder:"Title"}),e.jsx(u,{name:"title"}),e.jsx(Z,{as:"textarea",name:"text",placeholder:"Description"}),e.jsx(u,{name:"text"}),e.jsx(S,{children:"Priority color"}),e.jsx(ee,{name:"selectedPriority"}),e.jsx(u,{name:"selectedPriority"}),e.jsx(S,{children:"Deadline"}),e.jsx(H,{type:"date",name:"selectedDate"}),e.jsx(u,{name:"selectedDate"}),e.jsx(D,{type:"submit",children:"Add"})]})})})},Xe=({columnId:t})=>{const[r,n]=c.useState(!1),l=g(Q),i=()=>{n(!0)},s=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{onClick:i,type:"button",children:[e.jsx(Je,{children:e.jsx(Ke,{width:"28px",height:"28px",children:e.jsx("use",{href:f+"#icon-plus"})})}),"Add another card"]}),r&&e.jsx(Qe,{onClose:s,columnId:t,boardId:l})]})},Ye=({column:t,columns:r})=>{const n=v(),{title:l,_id:i,order:s}=t,[a,x]=c.useState(!1),[h,C]=c.useState(!1),[w,p]=c.useState([]),O=g(He),q=r.length,M=c.useRef(null),k=g(oe),R=r.map(d=>d.order),j=O.find(d=>d.columnId===i);c.useEffect(()=>{p(d=>j==null?void 0:j.cards.filter(B=>k==="all priorities"?!0:B.priority===k))},[j,k]),c.useEffect(()=>{n(X("all priorities"))},[j]);const z=()=>{x(!0)},F=()=>{x(!1)},y=()=>{C(!h)},A=d=>{d.stopPropagation(),y()},E=()=>{n(ce(i))},b=d=>{if(d===s)return;n(de({columnId:i,body:{newOrder:d}})),y()};return e.jsxs(we,{children:[e.jsxs(ke,{children:[e.jsx(Oe,{children:l}),e.jsxs(Me,{children:[e.jsx(U,{type:"button",onClick:z,children:e.jsx(N,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-pencil"})})}),q>1&&e.jsx(U,{ref:M,type:"button",onClick:A,children:e.jsx(N,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-arrow-circle-broken-right"})})}),e.jsx(U,{type:"button",onClick:()=>{E()},children:e.jsx(N,{width:"16px",height:"16px",children:e.jsx("use",{href:f+"#icon-trash"})})}),h&&e.jsx(W,{title:"Move to position",options:R,selectedOption:s,isOpen:h,onClose:y,handleOptionClick:b,openBtnRef:M})]})]}),e.jsx(Be,{children:e.jsx(Se,{children:w&&w.map(d=>e.jsx(We,{card:d,columnTitle:l},d._id))})}),e.jsx(Xe,{columnId:i}),a&&e.jsx(Ie,{columnId:i,onClose:F,columnTitle:l})]})},Ze=o.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 334px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: var(--column-add-btn-bg-color);
  color: var(--column-add-btn-text-color);
  font-size: 14px;
  cursor: pointer;
`,et=o.div`
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
`,tt=o.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
`,ot=({boardId:t,onClose:r})=>{const n=v(),l=i=>{const s={title:i.title,boardId:t};n(pe(s)),r()};return e.jsx(I,{onClose:r,title:"Add column",children:e.jsx(L,{initialValues:{title:""},validationSchema:T({title:m().max(15,"Must be 15 characters or less").required("Name is required")}),onSubmit:l,children:e.jsxs($,{children:[e.jsx(P,{type:"text",name:"title",placeholder:"Title"}),e.jsx(u,{name:"title"}),e.jsx(D,{type:"submit",children:"Add"})]})})})},rt=()=>{const[t,r]=c.useState(!1),n=g(Q),l=()=>{r(!0)},i=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ze,{onClick:l,type:"button",children:[e.jsx(et,{children:e.jsx(tt,{width:"28px",height:"28px",children:e.jsx("use",{href:f+"#icon-plus"})})}),"Add another column"]}),t&&e.jsx(ot,{boardId:n,onClose:i})]})},it=()=>{const t=g(xe),r=g(he),n=g(te),l=g(oe),[i,s]=c.useState(!1),a=c.useRef(null),x=v(),h=()=>{s(!i)},C=p=>{p.stopPropagation(),h()},w=p=>{p!==l&&(x(X(p)),h())};return e.jsxs(me,{background:r,children:[e.jsxs(ge,{children:[e.jsx(fe,{children:t}),e.jsxs(be,{children:[e.jsxs(je,{ref:a,onClick:C,children:[e.jsx(ye,{children:e.jsx("use",{href:f+"#icon-filter"})}),"Filters"]}),i&&e.jsx(W,{title:"Filter by priority",options:["all priorities",...Y],selectedOption:l,isOpen:i,onClose:h,handleOptionClick:w,openBtnRef:a})]})]}),e.jsx(ve,{children:e.jsxs(Ce,{children:[n.map(p=>e.jsx(Ye,{column:p,columns:n},p._id)),e.jsx(rt,{})]})})]})},nt=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,pt=()=>e.jsx(nt,{children:e.jsx(it,{})});export{pt as default};
