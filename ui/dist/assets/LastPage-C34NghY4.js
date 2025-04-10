import{f as O,g as z,h as N,K as D,av as G,_ as r,o as c,r as d,k as S,l as T,Q as C,a0 as _,p as w,j as p,m as I,n as E,J as k}from"./index-C7Qf8Ep0.js";import{d as $}from"./Popover-DnPtYUpS.js";import{l as M}from"./listItemTextClasses-DmZtrlCK.js";const L=O("MuiListItemIcon",["root","alignItemsFlexStart"]);function H(e){return z("MuiMenuItem",e)}const n=O("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),U=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,a)=>{const{ownerState:s}=e;return[a.root,s.dense&&a.dense,s.divider&&a.divider,!s.disableGutters&&a.gutters]},J=e=>{const{disabled:a,dense:s,divider:t,disableGutters:l,selected:u,classes:o}=e,i=E({root:["root",s&&"dense",a&&"disabled",!l&&"gutters",t&&"divider",u&&"selected"]},H,o);return r({},o,i)},K=N(D,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:a})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${L.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${L.root} svg`]:{fontSize:"1.25rem"}}))),X=d.forwardRef(function(a,s){const t=S({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:f=!1,disableGutters:i=!1,focusVisibleClassName:P,role:R="menuitem",tabIndex:b,className:F}=t,j=T(t,U),m=d.useContext(C),y=d.useMemo(()=>({dense:o||m.dense||!1,disableGutters:i}),[m.dense,o,i]),g=d.useRef(null);_(()=>{l&&g.current&&g.current.focus()},[l]);const B=r({},t,{dense:y.dense,divider:f,disableGutters:i}),v=J(t),V=w(g,s);let x;return t.disabled||(x=b!==void 0?b:-1),p.jsx(C.Provider,{value:y,children:p.jsx(K,r({ref:V,role:R,tabIndex:x,component:u,focusVisibleClassName:I(v.focusVisible,P),className:I(v.root,F)},j,{ownerState:B,classes:v}))})}),Y=k(p.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Z=k(p.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");export{Y as F,Z as L,X as M,n as m};
