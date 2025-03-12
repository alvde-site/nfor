import{ae as K,r as v,l as _,m as z,af as U,s as y,C as g,i as s,ag as V,z as G,e as T,k as t,n as O,p as A,B as Z,ah as w,ai as H,N as R,o as D,Z as M,I as C,V as q}from"./index-COVjf15h.js";import{C as J}from"./config-global-Cqss7OMM.js";import{a as Q,I as L}from"./flag-icon-Bf45H1Xj.js";import{D as X}from"./Divider-DlwGeSZU.js";import{T as S}from"./TextField-DyVRbYm3.js";import{I as Y}from"./InputAdornment-CjJVApcd.js";import"./Select-Cs5si9CU.js";function oo(){const i=K();return v.useMemo(()=>({back:()=>i(-1),forward:()=>i(1),refresh:()=>i(0),push:n=>i(n),replace:n=>i(n,{replace:!0})}),[i])}function io(i){return _("MuiCircularProgress",i)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const to=["className","color","disableShrink","size","style","thickness","value","variant"];let $=i=>i,E,W,F,N;const u=44,no=U(E||(E=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ro=U(W||(W=$`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),so=i=>{const{classes:o,variant:n,color:r,disableShrink:a}=i,e={root:["root",n,`color${g(r)}`],svg:["svg"],circle:["circle",`circle${g(n)}`,a&&"circleDisableShrink"]};return A(e,io,o)},ao=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:n}=i;return[o.root,o[n.variant],o[`color${g(n.color)}`]]}})(({ownerState:i,theme:o})=>s({display:"inline-block"},i.variant==="determinate"&&{transition:o.transitions.create("transform")},i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main}),({ownerState:i})=>i.variant==="indeterminate"&&V(F||(F=$`
      animation: ${0} 1.4s linear infinite;
    `),no)),eo=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(i,o)=>o.svg})({display:"block"}),lo=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(i,o)=>{const{ownerState:n}=i;return[o.circle,o[`circle${g(n.variant)}`],n.disableShrink&&o.circleDisableShrink]}})(({ownerState:i,theme:o})=>s({stroke:"currentColor"},i.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},i.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:i})=>i.variant==="indeterminate"&&!i.disableShrink&&V(N||(N=$`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ro)),co=v.forwardRef(function(o,n){const r=G({props:o,name:"MuiCircularProgress"}),{className:a,color:e="primary",disableShrink:b=!1,size:h=40,style:B,thickness:c=3.6,value:p=0,variant:j="indeterminate"}=r,k=T(r,to),x=s({},r,{color:e,disableShrink:b,size:h,thickness:c,value:p,variant:j}),f=so(x),m={},d={},I={};if(j==="determinate"){const P=2*Math.PI*((u-c)/2);m.strokeDasharray=P.toFixed(3),I["aria-valuenow"]=Math.round(p),m.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,d.transform="rotate(-90deg)"}return t.jsx(ao,s({className:O(f.root,a),style:s({width:h,height:h},d,B),ownerState:x,ref:n,role:"progressbar"},I,k,{children:t.jsx(eo,{className:f.svg,ownerState:x,viewBox:`${u/2} ${u/2} ${u} ${u}`,children:t.jsx(lo,{className:f.circle,style:m,ownerState:x,cx:u,cy:u,r:(u-c)/2,fill:"none",strokeWidth:c})})}))});function uo(i){return _("MuiLoadingButton",i)}const l=z("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),go=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],ho=i=>{const{loading:o,loadingPosition:n,classes:r}=i,a={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${g(n)}`],endIcon:[o&&`endIconLoading${g(n)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${g(n)}`]},e=A(a,uo,r);return s({},r,e)},po=i=>i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"&&i!=="classes",xo=y(Z,{shouldForwardProp:i=>po(i)||i==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(i,o)=>[o.root,o.startIconLoadingStart&&{[`& .${l.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${l.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:i,theme:o})=>s({[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},i.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}},i.loadingPosition==="start"&&i.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},i.loadingPosition==="end"&&i.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),fo=y("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(i,o)=>{const{ownerState:n}=i;return[o.loadingIndicator,o[`loadingIndicator${g(n.loadingPosition)}`]]}})(({theme:i,ownerState:o})=>s({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(i.vars||i).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),mo=v.forwardRef(function(o,n){const r=v.useContext(w),a=H(r,o),e=G({props:a,name:"MuiLoadingButton"}),{children:b,disabled:h=!1,id:B,loading:c=!1,loadingIndicator:p,loadingPosition:j="center",variant:k="text"}=e,x=T(e,go),f=Q(B),m=p??t.jsx(co,{"aria-labelledby":f,color:"inherit",size:16}),d=s({},e,{disabled:h,loading:c,loadingIndicator:m,loadingPosition:j,variant:k}),I=ho(d),P=c?t.jsx(fo,{className:I.loadingIndicator,ownerState:d,children:m}):null;return t.jsxs(xo,s({disabled:h||c,id:f,ref:n},x,{variant:k,classes:I,ownerState:d,children:[d.loadingPosition==="end"?b:P,d.loadingPosition==="end"?P:b]}))});function vo(){const i=oo(),[o,n]=v.useState(!1),r=v.useCallback(()=>{i.push("/")},[i]),a=t.jsxs(R,{display:"flex",flexDirection:"column",alignItems:"flex-end",children:[t.jsx(S,{fullWidth:!0,name:"email",label:"Email address",defaultValue:"hello@gmail.com",InputLabelProps:{shrink:!0},sx:{mb:3}}),t.jsx(M,{variant:"body2",color:"inherit",sx:{mb:1.5},children:"Forgot password?"}),t.jsx(S,{fullWidth:!0,name:"password",label:"Password",defaultValue:"@demo1234",InputLabelProps:{shrink:!0},type:o?"text":"password",InputProps:{endAdornment:t.jsx(Y,{position:"end",children:t.jsx(C,{onClick:()=>n(!o),edge:"end",children:t.jsx(L,{icon:o?"solar:eye-bold":"solar:eye-closed-bold"})})})},sx:{mb:3}}),t.jsx(mo,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"contained",onClick:r,children:"Sign in"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(R,{gap:1.5,display:"flex",flexDirection:"column",alignItems:"center",sx:{mb:5},children:[t.jsx(D,{variant:"h5",children:"Sign in"}),t.jsxs(D,{variant:"body2",color:"text.secondary",children:["Don’t have an account?",t.jsx(M,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]})]}),a,t.jsx(X,{sx:{my:3,"&::before, &::after":{borderTopStyle:"dashed"}},children:t.jsx(D,{variant:"overline",sx:{color:"text.secondary",fontWeight:"fontWeightMedium"},children:"OR"})}),t.jsxs(R,{gap:1,display:"flex",justifyContent:"center",children:[t.jsx(C,{color:"inherit",children:t.jsx(L,{icon:"logos:google-icon"})}),t.jsx(C,{color:"inherit",children:t.jsx(L,{icon:"eva:github-fill"})}),t.jsx(C,{color:"inherit",children:t.jsx(L,{icon:"ri:twitter-x-fill"})})]})]})}function Lo(){return t.jsxs(t.Fragment,{children:[t.jsx(q,{children:t.jsxs("title",{children:[" ",`Sign in - ${J.appName}`]})}),t.jsx(vo,{})]})}export{Lo as default};
