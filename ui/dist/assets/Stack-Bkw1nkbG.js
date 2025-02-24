import{ax as V,ay as D,_ as h,az as v,aA as p,aB as F,ak as T,aC as B,r as d,aD as E,b as M,j as G,c as N,aE as _,d as A,a as O,aF as k,s as U,u as $}from"./index-vmuR-Bvi.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],z=V(),I=D("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function W(e){return _({props:e,name:"MuiStack",defaultTheme:z})}function q(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=F(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=T(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:k(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:k(a,o)}}))}return n=B(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=W,componentName:a="MuiStack"}=e,c=()=>A({root:["root"]},o=>O(a,o),{}),t=s(J);return d.forwardRef(function(o,r){const i=n(o),l=E(i),{component:u="div",direction:x="column",spacing:j=0,divider:y,children:g,className:C,useFlexGap:P=!1}=l,S=M(l,L),b={direction:x,spacing:j,useFlexGap:P},R=c();return G.jsx(t,h({as:u,ownerState:b,ref:r,className:N(R.root,C)},S,{children:y?q(g,y):g}))})}const X=K({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>$({props:e,name:"MuiStack"})});export{X as S};
