import{e as R,g as j,f as c,_ as i,r as T,i as N,k as P,T as d,j as s,l as M,m as A}from"./index-CqMyM57l.js";function U(a){return j("MuiCardHeader",a)}const v=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>i({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),$=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),D=T.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:l,className:C,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:g,title:x,titleTypographyProps:f}=p,H=P(p,_),r=i({},p,{component:y,disableTypography:u}),t=k(r);let o=x;o!=null&&o.type!==d&&!u&&(o=s.jsx(d,i({variant:l?"body2":"h5",className:t.title,component:"span",display:"block"},f,{children:o})));let n=b;return n!=null&&n.type!==d&&!u&&(n=s.jsx(d,i({variant:l?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:n}))),s.jsxs(w,i({className:M(t.root,C),as:y,ref:h,ownerState:r},H,{children:[l&&s.jsx(E,{className:t.avatar,ownerState:r,children:l}),s.jsxs($,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(S,{className:t.action,ownerState:r,children:m})]}))});export{D as C};
