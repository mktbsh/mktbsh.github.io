import{r as e,j as t,F as r,B as o,S as n,a as i,I as c,b as s,c as a,R as l,d,C as u}from"./vendor.30ac7c4c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=["https://www.youtube.com","https://jp.spankbang.com","https://www.xvideos.com","https://jp.pornhub.com"],h={captures:[]},m=e.exports.createContext(h),f=e.exports.createContext((()=>{})),g=r=>{var o;const[n,i]=e.exports.useState(null!=(o=r.initialState)?o:h);return t(m.Provider,{value:n,children:t(f.Provider,{value:i,children:r.children})})},w=e=>{const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");return null==r||r.putImageData(e,0,0),t.toDataURL()},v=()=>{const r=e.exports.useContext(m),l=e.exports.useContext(f),d=e=>{l((t=>({captures:t.captures.filter((t=>t.id!==e))})))},u=({origin:e,data:t})=>{if(!p.includes(e))return void console.log("origin:",e);const{action:r,id:o,body:n}=t;switch(console.log(r),r){case"capture_add":l((e=>({captures:[{id:o,dataURL:w(n)},...e.captures]})))}};return e.exports.useEffect((()=>(window.addEventListener("message",u),()=>{window.removeEventListener("message",u)})),[]),t(o,{flex:"1",bg:"blackAlpha.100",overflowY:"auto",p:4,children:t(n,{spacing:4,w:"50%",margin:"0 auto",children:r.captures.length>0&&r.captures.map((e=>i(o,{w:"100%",position:"relative",children:[t(c,{src:e.dataURL,alt:"capture"}),i(s,{spacing:"2",size:"sm",position:"absolute",top:"2",left:"2",children:[t(a,{colorScheme:"twitter",onClick:()=>(({id:e,dataURL:t})=>{const r=document.createElement("a");r.href=t,r.download=`${e}.png`,r.click(),r.remove(),d(e)})(e),children:"DL"}),t(a,{colorScheme:"pink",onClick:()=>d(e.id),children:"Del"})]})]},e.id)))})})},x=()=>t(g,{children:t(r,{h:"100vh",w:"80%",margin:"0 auto",overflowY:"hidden",children:t(v,{})})});l.render(t(d.StrictMode,{children:t(u,{children:t(x,{})})}),document.getElementById("root"));
