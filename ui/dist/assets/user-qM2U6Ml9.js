import{m as Je,l as Ze,s as E,i as c,C as oe,X as eo,r as i,z as oo,e as to,G as Oo,y as $o,a0 as Q,q as He,a1 as No,t as Ao,n as k,a2 as Y,k as o,p as ro,a3 as _o,A as Do,H as Fo,N as te,o as ee,I as xe,a4 as Eo,U as Uo,B as Bo,S as Wo,V as zo}from"./index-COVjf15h.js";import{C as Vo}from"./config-global-Cqss7OMM.js";import{a as D}from"./_data-BXRJ-JrP.js";import{u as Ho,a as Go,G as Ge,I as T,P as Xo,M as qo}from"./flag-icon-Bf45H1Xj.js";import{T as re,a as f,b as Ko,c as Qo,d as Yo,e as Jo,f as Zo}from"./TableRow-DDlcYu4D.js";import{L as et}from"./label-CCJF-uTu.js";import{C as no}from"./Checkbox-D49Z3ZwL.js";import{A as ot}from"./Avatar-Dnw3ZOz6.js";import{m as Xe,M as qe}from"./LastPage-BbbHOX9J.js";import{O as tt}from"./Select-Cs5si9CU.js";import{I as rt}from"./InputAdornment-CjJVApcd.js";import{P as so}from"./Popper-_F7pTIZR.js";import{C as nt}from"./listItemTextClasses-BDzUilaf.js";function st(e){return Ze("MuiTooltip",e)}const w=Je("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),it=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function at(e){return Math.round(e*1e5)/1e5}const lt=e=>{const{classes:t,disableInteractive:r,arrow:n,touch:l,placement:a}=e,p={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",l&&"touch",`tooltipPlacement${oe(a.split("-")[0])}`],arrow:["arrow"]};return ro(p,st,t)},ct=E(so,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>c({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${w.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${w.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${w.arrow}`]:c({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${w.arrow}`]:c({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),pt=E("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${oe(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>c({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:eo(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${at(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${w.popper}[data-popper-placement*="left"] &`]:c({transformOrigin:"right center"},t.isRtl?c({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):c({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${w.popper}[data-popper-placement*="right"] &`]:c({transformOrigin:"left center"},t.isRtl?c({marginRight:"14px"},t.touch&&{marginRight:"24px"}):c({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${w.popper}[data-popper-placement*="top"] &`]:c({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${w.popper}[data-popper-placement*="bottom"] &`]:c({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),dt=E("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:eo(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let J=!1;const Ke=new _o;let F={x:0,y:0};function Z(e,t){return(r,...n)=>{t&&t(r,...n),e(r,...n)}}const Qe=i.forwardRef(function(t,r){var n,l,a,p,d,g,j,I,v,y,L,U,B,u,x,W,be,ve,Pe;const ne=oo({props:t,name:"MuiTooltip"}),{arrow:Te=!1,children:se,components:z={},componentsProps:C={},describeChild:io=!1,disableFocusListener:ao=!1,disableHoverListener:we=!1,disableInteractive:lo=!1,disableTouchListener:co=!1,enterDelay:je=100,enterNextDelay:ye=0,enterTouchDelay:po=700,followCursor:ie=!1,id:uo,leaveDelay:Ce=0,leaveTouchDelay:ho=1500,onClose:Re,onOpen:Se,open:mo,placement:Ie="bottom",PopperComponent:ae,PopperProps:R={},slotProps:S={},slots:V={},title:M,TransitionComponent:fo=Ge,TransitionProps:go}=ne,Le=to(ne,it),P=i.isValidElement(se)?se:o.jsx("span",{children:se}),Me=Oo(),xo=$o(),[O,ke]=i.useState(),[le,bo]=i.useState(null),H=i.useRef(!1),ce=lo||ie,Oe=Q(),pe=Q(),G=Q(),$e=Q(),[vo,Ne]=Ho({controlled:mo,default:!1,name:"Tooltip",state:"open"});let b=vo;const de=Go(uo),$=i.useRef(),X=He(()=>{$.current!==void 0&&(document.body.style.WebkitUserSelect=$.current,$.current=void 0),$e.clear()});i.useEffect(()=>X,[X]);const Ae=s=>{Ke.clear(),J=!0,Ne(!0),Se&&!b&&Se(s)},q=He(s=>{Ke.start(800+Ce,()=>{J=!1}),Ne(!1),Re&&b&&Re(s),Oe.start(Me.transitions.duration.shortest,()=>{H.current=!1})}),K=s=>{H.current&&s.type!=="touchstart"||(O&&O.removeAttribute("title"),pe.clear(),G.clear(),je||J&&ye?pe.start(J?ye:je,()=>{Ae(s)}):Ae(s))},ue=s=>{pe.clear(),G.start(Ce,()=>{q(s)})},{isFocusVisibleRef:_e,onBlur:Po,onFocus:To,ref:wo}=No(),[,De]=i.useState(!1),Fe=s=>{Po(s),_e.current===!1&&(De(!1),ue(s))},Ee=s=>{O||ke(s.currentTarget),To(s),_e.current===!0&&(De(!0),K(s))},Ue=s=>{H.current=!0;const h=P.props;h.onTouchStart&&h.onTouchStart(s)},jo=s=>{Ue(s),G.clear(),Oe.clear(),X(),$.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",$e.start(po,()=>{document.body.style.WebkitUserSelect=$.current,K(s)})},yo=s=>{P.props.onTouchEnd&&P.props.onTouchEnd(s),X(),G.start(ho,()=>{q(s)})};i.useEffect(()=>{if(!b)return;function s(h){(h.key==="Escape"||h.key==="Esc")&&q(h)}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[q,b]);const Co=Ao(P.ref,wo,ke,r);!M&&M!==0&&(b=!1);const he=i.useRef(),Ro=s=>{const h=P.props;h.onMouseMove&&h.onMouseMove(s),F={x:s.clientX,y:s.clientY},he.current&&he.current.update()},N={},me=typeof M=="string";io?(N.title=!b&&me&&!we?M:null,N["aria-describedby"]=b?de:null):(N["aria-label"]=me?M:null,N["aria-labelledby"]=b&&!me?de:null);const m=c({},N,Le,P.props,{className:k(Le.className,P.props.className),onTouchStart:Ue,ref:Co},ie?{onMouseMove:Ro}:{}),A={};co||(m.onTouchStart=jo,m.onTouchEnd=yo),we||(m.onMouseOver=Z(K,m.onMouseOver),m.onMouseLeave=Z(ue,m.onMouseLeave),ce||(A.onMouseOver=K,A.onMouseLeave=ue)),ao||(m.onFocus=Z(Ee,m.onFocus),m.onBlur=Z(Fe,m.onBlur),ce||(A.onFocus=Ee,A.onBlur=Fe));const So=i.useMemo(()=>{var s;let h=[{name:"arrow",enabled:!!le,options:{element:le,padding:4}}];return(s=R.popperOptions)!=null&&s.modifiers&&(h=h.concat(R.popperOptions.modifiers)),c({},R.popperOptions,{modifiers:h})},[le,R]),_=c({},ne,{isRtl:xo,arrow:Te,disableInteractive:ce,placement:Ie,PopperComponentProp:ae,touch:H.current}),fe=lt(_),Be=(n=(l=V.popper)!=null?l:z.Popper)!=null?n:ct,We=(a=(p=(d=V.transition)!=null?d:z.Transition)!=null?p:fo)!=null?a:Ge,ze=(g=(j=V.tooltip)!=null?j:z.Tooltip)!=null?g:pt,Ve=(I=(v=V.arrow)!=null?v:z.Arrow)!=null?I:dt,Io=Y(Be,c({},R,(y=S.popper)!=null?y:C.popper,{className:k(fe.popper,R==null?void 0:R.className,(L=(U=S.popper)!=null?U:C.popper)==null?void 0:L.className)}),_),Lo=Y(We,c({},go,(B=S.transition)!=null?B:C.transition),_),Mo=Y(ze,c({},(u=S.tooltip)!=null?u:C.tooltip,{className:k(fe.tooltip,(x=(W=S.tooltip)!=null?W:C.tooltip)==null?void 0:x.className)}),_),ko=Y(Ve,c({},(be=S.arrow)!=null?be:C.arrow,{className:k(fe.arrow,(ve=(Pe=S.arrow)!=null?Pe:C.arrow)==null?void 0:ve.className)}),_);return o.jsxs(i.Fragment,{children:[i.cloneElement(P,m),o.jsx(Be,c({as:ae??so,placement:Ie,anchorEl:ie?{getBoundingClientRect:()=>({top:F.y,left:F.x,right:F.x,bottom:F.y,width:0,height:0})}:O,popperRef:he,open:O?b:!1,id:de,transition:!0},A,Io,{popperOptions:So,children:({TransitionProps:s})=>o.jsx(We,c({timeout:Me.transitions.duration.shorter},s,Lo,{children:o.jsxs(ze,c({},Mo,{children:[M,Te?o.jsx(Ve,c({},ko,{ref:bo})):null]}))}))}))]})}),ut=Do(o.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function ht(e){return Ze("MuiTableSortLabel",e)}const ge=Je("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),mt=["active","children","className","direction","hideSortIcon","IconComponent"],ft=e=>{const{classes:t,direction:r,active:n}=e,l={root:["root",n&&"active"],icon:["icon",`iconDirection${oe(r)}`]};return ro(l,ht,t)},gt=E(Fo,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.active&&t.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${ge.icon}`]:{opacity:.5}},[`&.${ge.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${ge.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),xt=E("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.icon,t[`iconDirection${oe(r.direction)}`]]}})(({theme:e,ownerState:t})=>c({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),bt=i.forwardRef(function(t,r){const n=oo({props:t,name:"MuiTableSortLabel"}),{active:l=!1,children:a,className:p,direction:d="asc",hideSortIcon:g=!1,IconComponent:j=ut}=n,I=to(n,mt),v=c({},n,{active:l,direction:d,hideSortIcon:g,IconComponent:j}),y=ft(v);return o.jsxs(gt,c({className:k(y.root,p),component:"span",disableRipple:!0,ownerState:v,ref:r},I,{children:[a,g&&!l?null:o.jsx(xt,{as:j,className:k(y.icon),ownerState:v})]}))});function vt({searchQuery:e,...t}){return o.jsx(re,{...t,children:o.jsx(f,{align:"center",colSpan:7,children:o.jsxs(te,{sx:{py:15,textAlign:"center"},children:[o.jsx(ee,{variant:"h6",sx:{mb:1},children:"Not found"}),o.jsxs(ee,{variant:"body2",children:["No results found for  ",o.jsxs("strong",{children:['"',e,'"']}),".",o.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}function Pt({row:e,selected:t,onSelectRow:r}){const[n,l]=i.useState(null),a=i.useCallback(d=>{l(d.currentTarget)},[]),p=i.useCallback(()=>{l(null)},[]);return o.jsxs(o.Fragment,{children:[o.jsxs(re,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,children:[o.jsx(f,{padding:"checkbox",children:o.jsx(no,{disableRipple:!0,checked:t,onChange:r})}),o.jsx(f,{component:"th",scope:"row",children:o.jsxs(te,{gap:2,display:"flex",alignItems:"center",children:[o.jsx(ot,{alt:e.name,src:e.avatarUrl}),e.name]})}),o.jsx(f,{children:e.company}),o.jsx(f,{children:e.role}),o.jsx(f,{align:"center",children:e.isVerified?o.jsx(T,{width:22,icon:"solar:check-circle-bold",sx:{color:"success.main"}}):"-"}),o.jsx(f,{children:o.jsx(et,{color:e.status==="banned"&&"error"||"success",children:e.status})}),o.jsx(f,{align:"right",children:o.jsx(xe,{onClick:a,children:o.jsx(T,{icon:"eva:more-vertical-fill"})})})]}),o.jsx(Xo,{open:!!n,anchorEl:n,onClose:p,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:o.jsxs(qo,{disablePadding:!0,sx:{p:.5,gap:.5,width:140,display:"flex",flexDirection:"column",[`& .${Xe.root}`]:{px:1,gap:2,borderRadius:.75,[`&.${Xe.selected}`]:{bgcolor:"action.selected"}}},children:[o.jsxs(qe,{onClick:p,children:[o.jsx(T,{icon:"solar:pen-bold"}),"Edit"]}),o.jsxs(qe,{onClick:p,sx:{color:"error.main"},children:[o.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}const Tt={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function wt(e,t,r){return e?Math.max(0,(1+e)*t-r):0}function Ye(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0}function jt(e,t){return e==="desc"?(r,n)=>Ye(r,n,t):(r,n)=>-Ye(r,n,t)}function yt({inputData:e,comparator:t,filterName:r}){const n=e.map((l,a)=>[l,a]);return n.sort((l,a)=>{const p=t(l[0],a[0]);return p!==0?p:l[1]-a[1]}),e=n.map(l=>l[0]),r&&(e=e.filter(l=>l.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),e}function Ct({order:e,onSort:t,orderBy:r,rowCount:n,headLabel:l,numSelected:a,onSelectAllRows:p}){return o.jsx(Ko,{children:o.jsxs(re,{children:[o.jsx(f,{padding:"checkbox",children:o.jsx(no,{indeterminate:a>0&&a<n,checked:n>0&&a===n,onChange:d=>p(d.target.checked)})}),l.map(d=>o.jsx(f,{align:d.align||"left",sortDirection:r===d.id?e:!1,sx:{width:d.width,minWidth:d.minWidth},children:o.jsxs(bt,{hideSortIcon:!0,active:r===d.id,direction:r===d.id?e:"asc",onClick:()=>t(d.id),children:[d.label,r===d.id?o.jsx(te,{sx:{...Tt},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},d.id))]})})}function Rt({emptyRows:e,height:t,sx:r,...n}){return e?o.jsx(re,{sx:{...t&&{height:t*e},...r},...n,children:o.jsx(f,{colSpan:9})}):null}function St({numSelected:e,filterName:t,onFilterName:r}){return o.jsxs(Eo,{sx:{height:96,display:"flex",justifyContent:"space-between",p:n=>n.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?o.jsxs(ee,{component:"div",variant:"subtitle1",children:[e," selected"]}):o.jsx(tt,{fullWidth:!0,value:t,onChange:r,placeholder:"Search user...",startAdornment:o.jsx(rt,{position:"start",children:o.jsx(T,{width:20,icon:"eva:search-fill",sx:{color:"text.disabled"}})}),sx:{maxWidth:320}}),e>0?o.jsx(Qe,{title:"Delete",children:o.jsx(xe,{children:o.jsx(T,{icon:"solar:trash-bin-trash-bold"})})}):o.jsx(Qe,{title:"Filter list",children:o.jsx(xe,{children:o.jsx(T,{icon:"ic:round-filter-list"})})})]})}function It(){const e=Lt(),[t,r]=i.useState(""),n=yt({inputData:D,comparator:jt(e.order,e.orderBy),filterName:t}),l=!n.length&&!!t;return o.jsxs(Uo,{children:[o.jsxs(te,{display:"flex",alignItems:"center",mb:5,children:[o.jsx(ee,{variant:"h4",flexGrow:1,children:"Users"}),o.jsx(Bo,{variant:"contained",color:"inherit",startIcon:o.jsx(T,{icon:"mingcute:add-line"}),children:"New user"})]}),o.jsxs(nt,{children:[o.jsx(St,{numSelected:e.selected.length,filterName:t,onFilterName:a=>{r(a.target.value),e.onResetPage()}}),o.jsx(Wo,{children:o.jsx(Qo,{sx:{overflow:"unset"},children:o.jsxs(Yo,{sx:{minWidth:800},children:[o.jsx(Ct,{order:e.order,orderBy:e.orderBy,rowCount:D.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:a=>e.onSelectAllRows(a,D.map(p=>p.id)),headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),o.jsxs(Jo,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(a=>o.jsx(Pt,{row:a,selected:e.selected.includes(a.id),onSelectRow:()=>e.onSelectRow(a.id)},a.id)),o.jsx(Rt,{height:68,emptyRows:wt(e.page,e.rowsPerPage,D.length)}),l&&o.jsx(vt,{searchQuery:t})]})]})})}),o.jsx(Zo,{component:"div",page:e.page,count:D.length,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e.onChangeRowsPerPage})]})]})}function Lt(){const[e,t]=i.useState(0),[r,n]=i.useState("name"),[l,a]=i.useState(5),[p,d]=i.useState([]),[g,j]=i.useState("asc"),I=i.useCallback(u=>{j(r===u&&g==="asc"?"desc":"asc"),n(u)},[g,r]),v=i.useCallback((u,x)=>{if(u){d(x);return}d([])},[]),y=i.useCallback(u=>{const x=p.includes(u)?p.filter(W=>W!==u):[...p,u];d(x)},[p]),L=i.useCallback(()=>{t(0)},[]),U=i.useCallback((u,x)=>{t(x)},[]),B=i.useCallback(u=>{a(parseInt(u.target.value,10)),L()},[L]);return{page:e,order:g,onSort:I,orderBy:r,selected:p,rowsPerPage:l,onSelectRow:y,onResetPage:L,onChangePage:U,onSelectAllRows:v,onChangeRowsPerPage:B}}function zt(){return o.jsxs(o.Fragment,{children:[o.jsx(zo,{children:o.jsxs("title",{children:[" ",`Users - ${Vo.appName}`]})}),o.jsx(It,{})]})}export{zt as default};
