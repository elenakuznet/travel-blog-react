import{u as i,j as s}from"./index-CKv4VmTA.js";import{d as r}from"./data-CDi1aywU.js";const a="_post_n07gx_1",c="_post__title_n07gx_17",p="_post__intro_n07gx_47",l="_post__row_n07gx_59",m="_post__content_n07gx_81",x="_post__image_n07gx_95",t={post:a,post__title:c,"post-section":"_post-section_n07gx_29",post__intro:p,post__row:l,"row-reverse":"_row-reverse_n07gx_73",post__content:m,post__image:x},j=()=>{const{index:n}=i(),o=r[n];return o?s.jsxs("div",{className:t.post,children:[s.jsx("h1",{className:t.post__title,children:o.name}),s.jsx("section",{className:t.post__section,children:s.jsx("p",{className:t.post__intro,children:o.intro})}),s.jsx("section",{className:t.post__section,children:o.content.map((e,_)=>s.jsxs("div",{className:`${t.post__row} ${_%2===0?t["row-reverse"]:""}`,children:[s.jsx("p",{className:t.post__content,children:e}),o.images[_]&&s.jsx("img",{src:o.images[_].src,alt:o.images[_].alt||o.name,className:t.post__image})]},_))})]}):s.jsx("p",{children:"Destination not found."})};export{j as default};
