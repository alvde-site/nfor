import{_ as $,ax as ce,ay as oe,r as p,aG as le,aD as ae,b as ue,j as B,c as fe,a8 as me,aE as pe,d as de,a as ge,s as be,u as ye}from"./index-vmuR-Bvi.js";const $e=(e,n)=>e.filter(r=>n.includes(r)),d=(e,n,r)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((i,s)=>{r((c,u)=>{s<=e.keys.length-1&&(s===0?Object.assign(c,u):c[e.up(e.keys[s])]=u)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:$e(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.indexOf(s)!==-1){const c=n[s];c!==void 0&&r((u,g)=>{t===s?Object.assign(u,g):u[e.up(s)]=g},c)}}):(typeof n=="number"||typeof n=="string")&&r((i,s)=>{Object.assign(i,s)},n)};function a(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function W(e){return function(r){return`var(--Grid-${r}Spacing${a(e.unstable_level)})`}}function D(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${a(e.unstable_level-1)})`}}function P(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${a(e.unstable_level-1)})`}const Ge=({theme:e,ownerState:n})=>{const r=W(n),t={};return d(e.breakpoints,n.gridSize,(i,s)=>{let c={};s===!0&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${P(n)}${G(n)?` + ${r("column")}`:""})`}),i(t,c)}),t},xe=({theme:e,ownerState:n})=>{const r={};return d(e.breakpoints,n.gridOffset,(t,i)=>{let s={};i==="auto"&&(s={marginLeft:"auto"}),typeof i=="number"&&(s={marginLeft:i===0?"0px":`calc(100% * ${i} / ${P(n)})`}),t(r,s)}),r},ve=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${a(n.unstable_level)}`]:P(n)}:{"--Grid-columns":12};return d(e.breakpoints,n.columns,(t,i)=>{t(r,{[`--Grid-columns${a(n.unstable_level)}`]:i})}),r},Se=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=D(n),t=G(n)?{[`--Grid-rowSpacing${a(n.unstable_level)}`]:r("row")}:{};return d(e.breakpoints,n.rowSpacing,(i,s)=>{var c;i(t,{[`--Grid-rowSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s)})}),t},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=D(n),t=G(n)?{[`--Grid-columnSpacing${a(n.unstable_level)}`]:r("column")}:{};return d(e.breakpoints,n.columnSpacing,(i,s)=>{var c;i(t,{[`--Grid-columnSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s)})}),t},Oe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return d(e.breakpoints,n.direction,(t,i)=>{t(r,{flexDirection:i})}),r},he=({ownerState:e})=>{const n=W(e),r=D(e);return $({minWidth:0,boxSizing:"border-box"},e.container&&$({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&$({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Ee=e=>{const n=[];return Object.entries(e).forEach(([r,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${r}-${String(t)}`)}),n},Ne=(e,n="xs")=>{function r(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([i,s])=>{r(s)&&t.push(`spacing-${i}-${String(s)}`)}),t}return[]},Ce=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],we=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],je=ce(),De=oe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Pe(e){return pe({props:e,name:"MuiGrid",defaultTheme:je})}function ke(e={}){const{createStyledComponent:n=De,useThemeProps:r=Pe,componentName:t="MuiGrid"}=e,i=p.createContext(void 0),s=(g,l)=>{const{container:x,direction:v,spacing:S,wrap:b,gridSize:_}=g,O={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ce(v),...Ee(_),...x?Ne(S,l.breakpoints.keys[0]):[]]};return de(O,h=>ge(t,h),{})},c=n(ve,_e,Se,Ge,Oe,he,xe),u=p.forwardRef(function(l,x){var v,S,b,_,O,h,F,L;const N=le(),U=r(l),C=ae(U),E=p.useContext(i),{className:I,children:K,columns:V=12,container:Z=!1,component:H="div",direction:J="row",wrap:Q="wrap",spacing:w=0,rowSpacing:X=w,columnSpacing:Y=w,disableEqualOverflow:R,unstable_level:f=0}=C,ee=ue(C,we);let y=R;f&&R!==void 0&&(y=l.disableEqualOverflow);const T={},A={},M={};Object.entries(ee).forEach(([o,m])=>{N.breakpoints.values[o]!==void 0?T[o]=m:N.breakpoints.values[o.replace("Offset","")]!==void 0?A[o.replace("Offset","")]=m:M[o]=m});const ne=(v=l.columns)!=null?v:f?void 0:V,re=(S=l.spacing)!=null?S:f?void 0:w,te=(b=(_=l.rowSpacing)!=null?_:l.spacing)!=null?b:f?void 0:X,se=(O=(h=l.columnSpacing)!=null?h:l.spacing)!=null?O:f?void 0:Y,z=$({},C,{level:f,columns:ne,container:Z,direction:J,wrap:Q,spacing:re,rowSpacing:te,columnSpacing:se,gridSize:T,gridOffset:A,disableEqualOverflow:(F=(L=y)!=null?L:E)!=null?F:!1,parentDisableEqualOverflow:E}),ie=s(z,N);let j=B.jsx(c,$({ref:x,as:H,ownerState:z,className:fe(ie.root,I)},M,{children:p.Children.map(K,o=>{if(p.isValidElement(o)&&me(o,["Grid"])){var m;return p.cloneElement(o,{unstable_level:(m=o.props.unstable_level)!=null?m:f+1})}return o})}));return y!==void 0&&y!==(E??!1)&&(j=B.jsx(i.Provider,{value:y,children:j})),j});return u.muiName="Grid",u}const Fe=ke({createStyledComponent:be("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>ye({props:e,name:"MuiGrid2"})}),k={code:"en-US",currency:"USD"};function q(e){return e==null||Number.isNaN(e)?null:Number(e)}function Le(e,n){const r=k,t=q(e);return t===null?"":new Intl.NumberFormat(r.code,{minimumFractionDigits:0,maximumFractionDigits:2,...n}).format(t)}function Re(e,n){const r=k,t=q(e);return t===null?"":new Intl.NumberFormat(r.code,{style:"currency",currency:r.currency,minimumFractionDigits:0,maximumFractionDigits:2,...n}).format(t)}function Te(e,n){const r=k,t=q(e);return t===null?"":new Intl.NumberFormat(r.code,{notation:"compact",maximumFractionDigits:2,...n}).format(t).replace(/[A-Z]/g,s=>s.toLowerCase())}export{Fe as G,Te as a,Re as b,Le as f};
