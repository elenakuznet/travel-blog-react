import{j as r,N as c,r as n,S as i}from"./index-4LbO4DL_.js";import{d as l}from"./data-DEn-0__S.js";import{S as u}from"./SectionHeader-BCY_LfVJ.js";const m="_popular__search_1kpmq_1",d={popular__search:m},h=({value:a,onChange:s,placeholder:p,ariaLabel:_})=>r.jsx(r.Fragment,{children:r.jsx("input",{type:"text",placeholder:p,value:a,onChange:s,className:d.popular__search,ariaLabel:_})}),x="_popular__card_17vf8_1",g="_popular__image_17vf8_29",j="_popular__img_17vf8_53",f="_popular__shadow_17vf8_61",v="_popular__name_17vf8_79",N="_popular__description_17vf8_91",e={popular__card:x,popular__image:g,popular__img:j,popular__shadow:f,popular__name:v,popular__description:N},S=({destination:a})=>r.jsxs(c,{to:`/travel-blog-react/popular/${a.id}`,className:e.popular__card,children:[r.jsxs("div",{className:e.popular__image,children:[r.jsx("img",{src:a.image,alt:a.name,className:e.popular__img}),r.jsx("div",{className:e.popular__shadow})]}),r.jsx("h3",{className:e.popular__name,children:a.name}),r.jsx("p",{className:e.popular__description,children:a.description})]}),w=(a,s)=>s?a.filter(p=>p.name.toLowerCase().includes(s.toLowerCase())):a;function L(){const[a,s]=n.useState(""),p=o=>{s(o.target.value)},_=w(l,a),t=a?_:l;return r.jsxs(i,{className:"popular",children:[r.jsx(h,{value:a,onChange:p,placeholder:"Search destinations...","aria-label":"Search popular destinations"}),r.jsx(u,{title:"Popular Destinations"}),r.jsx("div",{className:"popular__container container grid",children:t.map(o=>r.jsx(S,{destination:o},o.id))})]})}export{L as default};