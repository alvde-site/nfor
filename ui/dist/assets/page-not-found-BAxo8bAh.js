import{j as e,B as i,aM as l,w as x,aN as u,aO as p,aP as m,aQ as h,L as d,ax as c,aR as f,T as r,a as y,H as j}from"./index-CqMyM57l.js";import{C as g}from"./config-global-Cqss7OMM.js";function w({children:n,sx:s,...t}){return e.jsx(i,{component:"main",className:l.main,sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",...s},...t,children:n})}function C({sx:n,layoutQuery:s,children:t,...a}){const o=x();return e.jsx(i,{className:l.content,sx:{width:1,mx:"auto",display:"flex",flex:"1 1 auto",textAlign:"center",flexDirection:"column",p:o.spacing(3,2,10,2),maxWidth:"var(--layout-simple-content-compact-width)",[o.breakpoints.up(s)]:{justifyContent:"center",p:o.spacing(10,0,10,0)},...n},...a,children:t})}function L({sx:n,children:s,header:t,content:a}){const o="md";return e.jsx(u,{headerSection:e.jsx(p,{layoutQuery:o,slotProps:{container:{maxWidth:!1}},sx:t==null?void 0:t.sx,slots:{topArea:e.jsx(m,{severity:"info",sx:{display:"none",borderRadius:0},children:"This is an info Alert."}),leftArea:e.jsx(h,{}),rightArea:e.jsx(d,{href:"#",component:c,color:"inherit",sx:{typography:"subtitle2"},children:"Need help?"})}}),footerSection:null,cssVars:{"--layout-simple-content-compact-width":"448px"},sx:n,children:e.jsx(w,{children:a!=null&&a.compact?e.jsx(C,{layoutQuery:o,children:s}):s})})}function N(){return e.jsx(L,{content:{compact:!0},children:e.jsxs(f,{children:[e.jsx(r,{variant:"h3",sx:{mb:2},children:"Sorry, page not found!"}),e.jsx(r,{sx:{color:"text.secondary"},children:"Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."}),e.jsx(i,{component:"img",src:"/assets/illustrations/illustration-404.svg",sx:{width:320,height:"auto",my:{xs:5,sm:10}}}),e.jsx(y,{component:c,href:"/",size:"large",variant:"contained",color:"inherit",children:"Go to home"})]})})}function A(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsxs("title",{children:[" ",`404 page not found! | Error - ${g.appName}`]})}),e.jsx(N,{})]})}export{A as default};
