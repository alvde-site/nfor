import{j as t,B as i,aU as c,y as l,aV as x,aW as u,aX as m,aY as p,aZ as d,T as r,a as h,aF as f,H as j}from"./index-CWqKb0XA.js";import{C as y}from"./config-global-Cqss7OMM.js";function g({children:n,sx:e,...s}){return t.jsx(i,{component:"main",className:c.main,sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",...e},...s,children:n})}function C({sx:n,layoutQuery:e,children:s,...o}){const a=l();return t.jsx(i,{className:c.content,sx:{width:1,mx:"auto",display:"flex",flex:"1 1 auto",textAlign:"center",flexDirection:"column",p:a.spacing(3,2,10,2),maxWidth:"var(--layout-simple-content-compact-width)",[a.breakpoints.up(e)]:{justifyContent:"center",p:a.spacing(10,0,10,0)},...n},...o,children:s})}function v({sx:n,children:e,header:s,content:o}){const a="md";return t.jsx(x,{headerSection:t.jsx(u,{layoutQuery:a,slotProps:{container:{maxWidth:!1}},sx:s==null?void 0:s.sx,slots:{topArea:t.jsx(m,{severity:"info",sx:{display:"none",borderRadius:0},children:"This is an info Alert."}),leftArea:t.jsx(p,{})}}),footerSection:null,cssVars:{"--layout-simple-content-compact-width":"448px"},sx:n,children:t.jsx(g,{children:o!=null&&o.compact?t.jsx(C,{layoutQuery:a,children:e}):e})})}function w(){return t.jsx(v,{content:{compact:!0},children:t.jsxs(d,{children:[t.jsx(r,{variant:"h3",sx:{mb:2},children:"Извините, страница не найдена!"}),t.jsx(r,{sx:{color:"text.secondary"},children:"Извините, мы не можем найти страницу, которую вы ищите. Возможно, вы неправильно ввели URL-адрес? Проверьте правильность написания."}),t.jsx(i,{component:"img",src:"/assets/illustrations/illustration-404.svg",sx:{width:320,height:"auto",my:{xs:5,sm:10}}}),t.jsx(h,{component:f,href:"/",size:"large",variant:"contained",color:"inherit",children:"Вернуть на главную страницу"})]})})}function N(){return t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs("title",{children:[" ",`404 страница не найдена! | Ошибка - ${y.appName}`]})}),t.jsx(w,{})]})}export{N as default};
