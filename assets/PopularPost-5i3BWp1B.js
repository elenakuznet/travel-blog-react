import{j as s,u as i}from"./index-4LbO4DL_.js";import{d as a}from"./data-DEn-0__S.js";const p="_post_1wk47_1",r={post:p,"post-section":"_post-section_1wk47_17"},l="_post__title_1jb93_1",m={post__title:l},j=({name:o})=>s.jsx("h1",{className:m.post__title,children:o}),d="_post__intro_3067r_9",c={"post-section":"_post-section_3067r_1",post__intro:d},x=({intro:o})=>s.jsx("section",{className:c.post__section,children:s.jsx("p",{className:c.post__intro,children:o})}),u="_post__image_5swi4_1",w={post__image:u},g=({src:o,alt:t,className:e})=>s.jsx("img",{src:o,alt:t||"Travel blog image",className:`${w.post__image} ${e||""}`}),h="_post__row_w4r25_1",N="_post__content_w4r25_21",_={post__row:h,"row-reverse":"_row-reverse_w4r25_13",post__content:N},$=({content:o,image:t,reverse:e})=>s.jsxs("div",{className:`${_.post__row} ${e?_["row-reverse"]:""}`,children:[s.jsx("p",{className:_.post__content,children:o}),t&&s.jsx(g,{src:t.src,alt:t.alt,className:_.post__image})]}),y=()=>{const{index:o}=i(),t=a[o];return t?s.jsxs("div",{className:r.post,children:[s.jsx(j,{name:t.name}),s.jsx(x,{intro:t.intro}),s.jsx("section",{className:r.post__section,children:t.content.map((e,n)=>s.jsx($,{content:e,image:t.images[n],reverse:n%2===0},t.id+n))})]}):s.jsx("p",{children:"Destination not found."})};export{y as default};