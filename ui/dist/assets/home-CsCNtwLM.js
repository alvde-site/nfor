import{u as h,j as e,S as m,B as n,a as u,r as d,I as f,d as j,v as y,b as c,c as g,t as C,D as b,H as v}from"./index-C7Qf8Ep0.js";import{C as k}from"./config-global-Cqss7OMM.js";import{L as I,C as L,c as S}from"./Collapse-q9mbVFhY.js";import{L as w}from"./label-C1hP311k.js";import{I as p}from"./flag-icon-7C4dDglI.js";import{C as B}from"./Card-BILRfnN6.js";import{C as D}from"./CardHeader-qCw5Fi8f.js";import{A}from"./Avatar-dHudQ2Hu.js";import{G as x}from"./Grid2-BWZ-7lwh.js";import"./users-CX3G6kN4.js";import"./listItemTextClasses-DmZtrlCK.js";function W({title:r,subheader:t,list:a,...o}){const l=h(),i=()=>{l("/concert")};return e.jsxs(B,{...o,children:[e.jsx(D,{title:r,subheader:t,sx:{mb:1}}),e.jsx(m,{children:e.jsx(n,{sx:{minWidth:744},children:a.map(s=>e.jsx(E,{item:s},s.id))})}),e.jsx(n,{sx:{p:2,textAlign:"right"},children:e.jsx(u,{size:"small",color:"inherit",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),onClick:i,children:"Все концерты"})})]})}function E({sx:r,item:t,...a}){const[o,l]=d.useState(!1),i=()=>{l(!o)};return e.jsxs(n,{children:[e.jsxs(n,{sx:{py:2,px:3,gap:2,display:"flex",alignItems:"center",borderBottom:s=>`dashed 1px ${s.vars.palette.divider}`,...r},...a,onClick:i,children:[e.jsx(A,{variant:"rounded",alt:t.title,src:t.coverUrl,sx:{width:48,height:48,flexShrink:0}}),e.jsx(n,{sx:{minWidth:38,flexShrink:0,color:"text.disabled",typography:"caption"},children:e.jsx(f,{"aria-label":"Сообщение",children:t.comments!=="null"&&e.jsx(p,{width:22,icon:"ic:baseline-announcement",sx:{color:"info.main"}})})}),e.jsx(I,{primary:t.title,secondary:t.description,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"},sx:{flex:"1 0 auto"}}),e.jsx(n,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:e.jsx(w,{color:t.approved&&"success"||"error",children:t.approved?"Утверждено":"Прогноз"})}),e.jsx(n,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:j(t.concertDate)})]}),t.comments!=="null"&&e.jsx(L,{in:o,timeout:"auto",unmountOnExit:!0,children:e.jsx(n,{sx:{py:2,px:3,gap:2,display:"flex",alignItems:"center",fontStyle:"italic",backgroundColor:s=>`${y(s.vars.palette.info.lighterChannel,.48)}`,borderBottom:s=>`dashed 1px ${s.vars.palette.divider}`,...r},...a,children:t.comments})})]})}c.extend(g);c.extend(C);function H({formattedData:r}){const[t,a]=d.useState([]);return d.useEffect(()=>{function o(){if(r.length){const i=S(r).filter(s=>c(c()).startOf("day")<=c(s.concertDate[s.concertDate.length-1]));a(i)}}o()},[r]),e.jsx(b,{maxWidth:"xl",children:e.jsx(x,{container:!0,spacing:3,children:e.jsx(x,{xs:12,children:e.jsx(W,{title:t.slice(0,10).length?"Ближайшие концерты":"В этом сезоне больше нет концертов",list:t.slice(0,10)})})})})}function q({data:r}){return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsxs("title",{children:[" ",`Dashboard - ${k.appName}`]}),e.jsx("meta",{name:"description",content:"Расписание группы тромбонов оркестра НФОР"}),e.jsx("meta",{name:"keywords",content:"НФОР, тромбоны"})]}),e.jsx(H,{formattedData:r})]})}export{q as default};
