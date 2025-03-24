import{j as e,r as a,I as z,B as p,d as H,T as h,b as m,v as F,M as D,L as k,D as G,S as N,H as _}from"./index-CqMyM57l.js";import{C as q}from"./config-global-Cqss7OMM.js";import{u as J,t as K}from"./users-BPsUgZM-.js";import{T as u,a as c,d as R,b as I,e as L,c as Q,f as U}from"./TableRow-A01p_WPR.js";import{L as V}from"./label-wdbPWKtM.js";import{I as P}from"./flag-icon-FgkhQeJT.js";import{r as X,L as Z,C as ee,e as se,c as ne}from"./Collapse-CCFT60Dk.js";import{L as ae,P as te,M as re}from"./Popover-Bu5UT-bH.js";import{m as S,M as T}from"./LastPage-COgdIjFA.js";import{C as le}from"./Card-D_rzvbeJ.js";import"./Select-B5d3cXMF.js";import"./listItemTextClasses-CXRqjWo7.js";function oe({emptyRows:s,height:n,sx:d,...r}){return s?e.jsx(u,{sx:{...n&&{height:n*s},...d},...r,children:e.jsx(c,{colSpan:4})}):null}function ie({row:s}){const[n,d]=a.useState(null),[r,g]=a.useState(!1),l=a.useCallback(()=>{d(null)},[]),j=X(s.emplDet);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{hover:!0,tabIndex:-1,children:[e.jsx(c,{sx:{minWidth:38,flexShrink:0,color:"text.disabled",typography:"caption",textAlign:"center"},children:e.jsx(z,{"aria-label":"expand row",size:"small",onClick:()=>g(!r),children:r?e.jsx(P,{width:22,icon:"simple-line-icons:arrow-up"}):e.jsx(P,{width:22,icon:"simple-line-icons:arrow-down"})})}),e.jsx(c,{component:"th",scope:"row",children:e.jsx(p,{gap:2,display:"flex",alignItems:"center",children:H(s.concertDate)})}),e.jsx(c,{children:e.jsx(Z,{primary:s.title,secondary:s.description,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"},sx:{flex:"1 0 auto"}})}),e.jsx(c,{children:e.jsx(p,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:e.jsx(V,{color:s.approved&&"success"||"error",children:s.approved?"Утверждено":"Прогноз"})})})]}),e.jsx(u,{sx:{background:"var(--palette-action-hover)"},children:e.jsx(c,{colSpan:4,sx:{padding:`${r?"16px":"0"}`},children:e.jsx(ee,{in:r,children:e.jsxs(p,{children:[s.concertDate.length&&e.jsxs(p,{sx:{mb:2},children:[e.jsx(h,{variant:"subtitle2",component:"h5",sx:{padding:"0 0 0 30px"},children:"Даты концертов:"}),e.jsx(h,{variant:"body1",sx:{padding:"0 0 0 120px"},children:Array.isArray(s.concertDate)&&s.concertDate.map(o=>m(o).format("D.MM.YYYY")).join(", ")})]}),s.rehearsalDate.length&&m(s.rehearsalDate[0]).isValid()&&e.jsxs(p,{sx:{mb:2},children:[e.jsx(h,{variant:"subtitle2",component:"h5",sx:{padding:"0 0 0 30px"},children:"Даты репетиций:"}),e.jsx(h,{variant:"body1",sx:{padding:"0 0 0 120px"},children:Array.isArray(s.rehearsalDate)&&s.rehearsalDate.map(o=>m(o).format("D.MM.YYYY")).join(", ")})]}),s.comments!=="null"&&e.jsxs(p,{sx:{mb:2},children:[e.jsx(h,{variant:"subtitle2",component:"h5",sx:{padding:"0 0 0 30px"},children:"Комментарий:"}),e.jsx(h,{variant:"body1",sx:{padding:"0 0 0 120px"},children:s.comments})]}),j.length&&e.jsxs(p,{sx:{mb:2},children:[e.jsx(h,{variant:"subtitle2",component:"h5",sx:{padding:"0 0 0 30px"},children:"Количество вызовов:"}),e.jsxs(R,{"aria-label":"Занятость",size:"small",sx:{"& th, & td":{background:`${F("var(--palette-info-lighterChannel)",.3)}`}},children:[e.jsx(I,{children:e.jsx(u,{children:j[0].map((o,b)=>e.jsx(c,{children:o},b))})}),e.jsx(L,{children:j.slice(1).map((o,b)=>e.jsxs(u,{children:[e.jsx(c,{component:"th",children:o[0]}),o.slice(1).map((f,y)=>e.jsx(c,{children:f},y))]},b))})]})]}),!(s.details==="null"&&s.notes==="null")&&e.jsxs(p,{sx:{mb:2},children:[e.jsx(h,{variant:"subtitle2",component:"h5",sx:{padding:"0 0 0 30px"},children:"Дополнительные ссылки:"}),e.jsxs(ae,{sx:{padding:"0 0 0 120px"},children:[s.details!=="null"&&e.jsx(D,{children:e.jsx(k,{href:s.details,target:"_blank",children:"О концерте"})}),s.notes!=="null"&&e.jsx(D,{children:e.jsx(k,{href:s.notes,target:"_blank",children:"Нотный материал"})})]})]})]})})})}),e.jsx(te,{open:!!n,anchorEl:n,onClose:l,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:e.jsxs(re,{disablePadding:!0,sx:{p:.5,gap:.5,width:140,display:"flex",flexDirection:"column",[`& .${S.root}`]:{px:1,gap:2,borderRadius:.75,[`&.${S.selected}`]:{bgcolor:"action.selected"}}},children:[e.jsxs(T,{onClick:l,children:[e.jsx(P,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(T,{onClick:l,sx:{color:"error.main"},children:[e.jsx(P,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}function ce({headLabel:s}){return e.jsx(I,{children:e.jsxs(u,{children:[e.jsx(c,{}),s.map(n=>e.jsx(c,{align:n.align||"left",sx:{width:n.width,minWidth:n.minWidth},children:n.label},n.id))]})})}m.extend(J);m.extend(K);function de({formattedData:s}){const n=xe({formattedData:s}),[d,r]=a.useState([]);return a.useEffect(()=>{function g(){if(s.length){const l=ne(s);console.log("useEffect conData",l),r(l)}}g()},[s]),console.log("conData",d),e.jsxs(G,{children:[e.jsx(p,{display:"flex",alignItems:"center",mb:5,children:e.jsx(h,{variant:"h4",flexGrow:1,children:"Концерты"})}),e.jsxs(le,{children:[e.jsx(N,{children:e.jsx(Q,{sx:{overflow:"unset"},children:e.jsxs(R,{sx:{minWidth:800},children:[e.jsx(ce,{headLabel:[{id:"date",label:"Дата"},{id:"name",label:"Название"},{id:"status",label:"Статус"}]}),e.jsxs(L,{children:[d.slice(1).slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(g=>e.jsx(ie,{row:g},g.id)),e.jsx(oe,{height:92,emptyRows:se(n.page,n.rowsPerPage,d.length-1)})]})]})})}),e.jsx(U,{component:"div",page:n.page,count:d.length-1,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,rowsPerPageOptions:[10,25,50],onRowsPerPageChange:n.onChangeRowsPerPage,labelDisplayedRows:n.defaultLabelDisplayedRows,labelRowsPerPage:"Строк на стр.:"})]})]})}function xe({formattedData:s}){const[n,d]=a.useState("name"),[r,g]=a.useState(10),[l,j]=a.useState([]),[o,b]=a.useState("asc"),f=s.length-1,y=a.useCallback(()=>{const t=s.map((x,W)=>W?m(x[2][x[2].length-1]):m(0)).slice(1).reverse().findIndex(x=>m().startOf("day")>=x),i=Math.floor((f-2-t)/r);return i>=0?i:0},[s,f,r]),[w,C]=a.useState(y),M=a.useCallback(t=>{b(n===t&&o==="asc"?"desc":"asc"),d(t)},[o,n]),A=a.useCallback((t,i)=>{if(t){j(i);return}j([])},[]),E=a.useCallback(t=>{const i=l.includes(t)?l.filter(x=>x!==t):[...l,t];j(i)},[l]),v=a.useCallback(()=>{C(0)},[]),O=a.useCallback((t,i)=>{C(i)},[]),Y=a.useCallback(t=>{C(t)},[]),$=a.useCallback(({from:t,to:i,count:x})=>x!==-1?`${t}–${i} из ${x}`:"Концертов нет",[]),B=a.useCallback(t=>{g(parseInt(t.target.value,10)),v()},[v]);return{page:w,order:o,onSort:M,orderBy:n,selected:l,rowsPerPage:r,onSelectRow:E,onResetPage:v,onChangePage:O,onSelectAllRows:A,onChangeRowsPerPage:B,defaultLabelDisplayedRows:$,onSetDefaultPage:Y}}function De({data:s}){return console.log("concert",s),e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsxs("title",{children:[" ",`Концерты - ${q.appName}`]})}),e.jsx(de,{formattedData:s})]})}export{De as default};
