import{b as n,j as i}from"./index-ee35cadf.js";import{c as s}from"./selectors-66c51edb.js";import{n as t}from"./emotion-styled.browser.esm-fb3b8e5c.js";const o=t.div`
  width: 100%;
  height: 100%;
  background-color: var(--screens-page-bg-color);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({background:e})=>e==null?void 0:e.mobileURL});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${({background:e})=>e==null?void 0:e.mobileRetinaURL});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${({background:e})=>e==null?void 0:e.tabletURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:e})=>e==null?void 0:e.tabletRetinaURL});
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${({background:e})=>e==null?void 0:e.desktopURL});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${({background:e})=>e==null?void 0:e.desktopRetainaURL});
    }
  }
`,r=()=>{const e=n(s);return i.jsx(o,{background:e})},a=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=()=>i.jsx(a,{children:i.jsx(r,{})});export{d as default};
