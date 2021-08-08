var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function l(n){return n&&c(n.destroy)?n.destroy:t}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((n=>{n.c(t)||(f.delete(n),n.f())})),0!==f.size&&d(p)}function m(t,n){t.appendChild(n)}function h(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n.host?n:document}function g(t){const n=y("style");return function(t,n){m(t.head||t,n)}(h(t),n),n}function $(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function k(){return w("")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const C=new Set;let A,E=0;function R(t,n,e,o,r,c,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,f=h(t);C.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,E+=1,d}function j(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||d((()=>{E||(C.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),C.clear())})))}function S(t){A=t}function L(){if(!A)throw new Error("Function called outside component initialization");return A}function D(t,n){L().$$.context.set(t,n)}function z(t){return L().$$.context.get(t)}const U=[],M=[],O=[],T=[],P=Promise.resolve();let N=!1;function B(t){O.push(t)}let q=!1;const I=new Set;function W(){if(!q){q=!0;do{for(let t=0;t<U.length;t+=1){const n=U[t];S(n),F(n.$$)}for(S(null),U.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];I.has(n)||(I.add(n),n())}O.length=0}while(U.length);for(;T.length;)T.pop()();N=!1,q=!1,I.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}let H;function Y(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const Z=new Set;let G;function J(){G={r:0,c:[],p:G}}function K(){G.r||r(G.c),G=G.p}function Q(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),G.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const X={duration:0};function tt(e,o,s,i){let l=o(e,s),u=i?0:1,m=null,h=null,g=null;function $(){g&&j(e,g)}function b(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:c=0,duration:s=300,easing:i=n,tick:y=t,css:w}=l||X,x={start:a()+c,b:o};o||(x.group=G,G.r+=1),m||h?h=x:(w&&($(),g=R(e,u,o,s,c,i,w)),o&&y(0,1),m=b(x,s),B((()=>Y(e,o,"start"))),function(t){let n;0===f.size&&d(p),new Promise((e=>{f.add(n={c:t,f:e})}))}((t=>{if(h&&t>h.start&&(m=b(h,s),h=null,Y(e,m.b,"start"),w&&($(),g=R(e,u,m.b,m.duration,0,i,l.css))),m)if(t>=m.end)y(u=m.b,1-u),Y(e,m.b,"end"),h||(m.b?$():--m.group.r||r(m.group.c)),m=null;else if(t>=m.start){const n=t-m.start;u=m.a+m.d*i(n/m.duration),y(u,1-u)}return!(!m&&!h)})))}return{run(t){c(l)?(H||(H=Promise.resolve(),H.then((()=>{H=null}))),H).then((()=>{l=l(),y(t)})):y(t)},end(){$(),m=h=null}}}function nt(t,n){V(t,1,1,(()=>{n.delete(t.key)}))}function et(t){t&&t.c()}function ot(t,n,o,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,o),s||B((()=>{const n=l.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(B)}function rt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(U.push(t),N||(N=!0,P.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function st(n,e,c,s,i,l,u,a=[-1]){const d=A;S(n);const f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&ct(n,t)),e})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&Q(n.$$.fragment),ot(n,e.target,e.anchor,e.customElement),W()}S(d)}class it{$destroy(){rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var lt=(t,n)=>{const e=n=>{let e={};Array.isArray(n)?n.forEach((t=>{e={...e,...t}})):e=n,Object.entries(e).forEach((([n,e])=>{n=n.replace(/[A-Z]/,(t=>"-"+t.toLowerCase())),t.style.setProperty(n,e)}))};return e(n),{update:e}};function ut(n){let e,o,s;return{c(){e=y("button"),e.textContent="🔓",_(e,"type","button")},m(t,r){$(t,e,r),o||(s=[l(lt.call(null,e,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:"10%",right:0,zIndex:9998})),v(e,"click",(function(){c(n[0])&&n[0].apply(this,arguments)}))],o=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&b(e),o=!1,r(s)}}}function at(t,n,e){let{onClick:o}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick)},[o]}class dt extends it{constructor(t){super(),st(this,t,at,ut,s,{onClick:0})}}function ft(t){const n=t-1;return n*n*n+1}function pt(t,{delay:n=0,duration:e=400,easing:o=ft,x:r=0,y:c=0,opacity:s=0}={}){const i=getComputedStyle(t),l=+i.opacity,u="none"===i.transform?"":i.transform,a=l*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${l-a*n}`}}function mt(n){let e,o,s,i;return{c(){e=y("button"),o=w(n[0]),_(e,"type","button")},m(t,r){$(t,e,r),m(e,o),s||(i=[l(lt.call(null,e,{fontSize:"20px",padding:"0 4px",margin:"4px"})),v(e,"click",(function(){c(n[1])&&n[1].apply(this,arguments)}))],s=!0)},p(t,[e]){n=t,1&e&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,n[0])},i:t,o:t,d(t){t&&b(e),s=!1,r(i)}}}function ht(t,n,e){let{emoji:o}=n,{onClick:r}=n;return t.$$set=t=>{"emoji"in t&&e(0,o=t.emoji),"onClick"in t&&e(1,r=t.onClick)},[o,r]}class gt extends it{constructor(t){super(),st(this,t,ht,mt,s,{emoji:0,onClick:1})}}function $t(n){let e,o,s;return{c(){e=y("button"),e.textContent="🔐",_(e,"type","button")},m(t,r){$(t,e,r),o||(s=[l(lt.call(null,e,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:0,left:0})),v(e,"click",(function(){c(n[0])&&n[0].apply(this,arguments)}))],o=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&b(e),o=!1,r(s)}}}function bt(t,n,e){let{onClick:o}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick)},[o]}class yt extends it{constructor(t){super(),st(this,t,bt,$t,s,{onClick:0})}}const wt=t=>{const n=document.createElement("canvas");return n.style.cssText="width:100%",n.setAttribute("width",`${t.videoWidth}`),n.setAttribute("height",`${t.videoHeight}`),n.getContext("2d").drawImage(t,0,0,n.width,n.height),n},xt=[];const kt=(()=>{const{subscribe:n,set:e,update:o}=function(n,e=t){let o;const r=new Set;function c(t){if(s(n,t)&&(n=t,o)){const t=!xt.length;for(const t of r)t[1](),xt.push(t,n);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const l=[s,i];return r.add(l),1===r.size&&(o=e(c)||t),s(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}([]),r=t=>o((n=>n.filter((n=>n.id!==t))));return{subscribe:n,add:t=>o((n=>[t,...n])),remove:r,reset:()=>e([]),download:(t,n)=>{((t,n)=>{new Promise(((e,o)=>{try{const o=document.createElement("a");o.download=`${t}.png`,o.href=n,o.click(),o.remove(),e()}catch(t){}}))})(t,n),r(t)}}})();function vt(n){let e,o,c,s,i,u,a=n[2]&&function(n){let e,o,r;return{c(){e=y("button"),e.textContent="💾"},m(t,c){$(t,e,c),o||(r=v(e,"click",n[4]),o=!0)},p:t,d(t){t&&b(e),o=!1,r()}}}(n);return{c(){e=y("div"),o=y("button"),o.textContent="🗑",c=x(),a&&a.c()},m(t,r){$(t,e,r),m(e,o),m(e,c),a&&a.m(e,null),i||(u=[v(o,"click",n[3]),l(s=lt.call(null,e,{position:"absolute",top:0,left:0,zIndex:2}))],i=!0)},p(t,n){t[2]&&a.p(t,n)},d(t){t&&b(e),a&&a.d(),i=!1,r(u)}}}function _t(n){let e,o,r,c=n[1]&&vt(n);return{c(){e=y("div"),c&&c.c()},m(t,s){$(t,e,s),c&&c.m(e,null),n[6](e),o||(r=l(lt.call(null,e,{width:"100%",position:"relative"})),o=!0)},p(t,[n]){t[1]?c?c.p(t,n):(c=vt(t),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&b(e),c&&c.d(),n[6](null),o=!1,r()}}}function Ct(t,n,e){let o,{capture:r}=n,c=z("blobWorker"),s=z("canDownload"),i=!1;var l;l=()=>{o.appendChild(r.canvas),e(1,i=!0)},L().$$.on_mount.push(l);return t.$$set=t=>{"capture"in t&&e(5,r=t.capture)},[o,i,s,()=>{kt.remove(r.id)},()=>{c.postMessage(r)},r,function(t){M[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class At extends it{constructor(t){super(),st(this,t,Ct,_t,s,{capture:5})}}function Et(t,n,e){const o=t.slice();return o[6]=n[e],o}function Rt(t){let n,e,o,c,s,i,u,a,d,f,p,h,g,w,k,v,_,C=[],A=new Map;e=new yt({props:{onClick:t[4]}}),a=new gt({props:{emoji:"📸",onClick:t[2]}}),f=new gt({props:{emoji:"🗑",onClick:t[5]}});let E=t[1];const R=t=>t[6].id;for(let n=0;n<E.length;n+=1){let e=Et(t,E,n),o=R(e);A.set(o,C[n]=jt(o,e))}return{c(){n=y("div"),et(e.$$.fragment),o=x(),c=y("h2"),c.textContent="CAPTURE",i=x(),u=y("div"),et(a.$$.fragment),d=x(),et(f.$$.fragment),h=x();for(let t=0;t<C.length;t+=1)C[t].c()},m(t,r){$(t,n,r),ot(e,n,null),m(n,o),m(n,c),m(n,i),m(n,u),ot(a,u,null),m(u,d),ot(f,u,null),m(n,h);for(let t=0;t<C.length;t+=1)C[t].m(n,null);k=!0,v||(_=[l(s=lt.call(null,c,{margin:"0",textAlign:"center",color:"#31426c",marginBottom:"0.5rem"})),l(p=lt.call(null,u,{textAlign:"center",borderRadius:"3px",padding:"4px",marginBottom:"1rem"})),l(g=lt.call(null,n,{position:"fixed",top:"10%",right:0,height:"100%",padding:"0.5rem 1rem",borderLeft:"1 solid #aaa",background:"#fff",overflowY:"auto",width:"375px",border:"1px solid #000",zIndex:9999}))],v=!0)},p(t,o){const r={};1&o&&(r.onClick=t[4]),e.$set(r),2&o&&(E=t[1],J(),C=function(t,n,e,o,r,c,s,i,l,u,a,d){let f=t.length,p=c.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,b=new Map;for(m=p;m--;){const t=d(r,c,m),i=e(t);let l=s.get(i);l?o&&l.p(t,n):(l=u(i,t),l.c()),$.set(i,g[m]=l),i in h&&b.set(i,Math.abs(m-h[i]))}const y=new Set,w=new Set;function x(t){Q(t,1),t.m(i,a),s.set(t.key,t),a=t.first,p--}for(;f&&p;){const n=g[p-1],e=t[f-1],o=n.key,r=e.key;n===e?(a=n.first,f--,p--):$.has(r)?!s.has(o)||y.has(o)?x(n):w.has(r)?f--:b.get(o)>b.get(r)?(w.add(o),x(n)):(y.add(r),f--):(l(e,s),f--)}for(;f--;){const n=t[f];$.has(n.key)||l(n,s)}for(;p;)x(g[p-1]);return g}(C,o,R,1,t,E,A,n,nt,jt,null,Et),K())},i(t){if(!k){Q(e.$$.fragment,t),Q(a.$$.fragment,t),Q(f.$$.fragment,t);for(let t=0;t<E.length;t+=1)Q(C[t]);B((()=>{w||(w=tt(n,pt,{x:375,opacity:1},!0)),w.run(1)})),k=!0}},o(t){V(e.$$.fragment,t),V(a.$$.fragment,t),V(f.$$.fragment,t);for(let t=0;t<C.length;t+=1)V(C[t]);w||(w=tt(n,pt,{x:375,opacity:1},!1)),w.run(0),k=!1},d(t){t&&b(n),rt(e),rt(a),rt(f);for(let t=0;t<C.length;t+=1)C[t].d();t&&w&&w.end(),v=!1,r(_)}}}function jt(t,n){let e,o,r;return o=new At({props:{capture:n[6]}}),{key:t,first:null,c(){e=k(),et(o.$$.fragment),this.first=e},m(t,n){$(t,e,n),ot(o,t,n),r=!0},p(t,e){n=t;const r={};2&e&&(r.capture=n[6]),o.$set(r)},i(t){r||(Q(o.$$.fragment,t),r=!0)},o(t){V(o.$$.fragment,t),r=!1},d(t){t&&b(e),rt(o,t)}}}function St(t){let n,e,o=t[0]&&Rt(t);return{c(){o&&o.c(),n=k()},m(t,r){o&&o.m(t,r),$(t,n,r),e=!0},p(t,[e]){t[0]?o?(o.p(t,e),1&e&&Q(o,1)):(o=Rt(t),o.c(),Q(o,1),o.m(n.parentNode,n)):o&&(J(),V(o,1,1,(()=>{o=null})),K())},i(t){e||(Q(o),e=!0)},o(t){V(o),e=!1},d(t){o&&o.d(t),t&&b(n)}}}function Lt(t,n,e){let o;i(t,kt,(t=>e(1,o=t)));let{show:r=!1}=n,{video:c}=n;return t.$$set=t=>{"show"in t&&e(0,r=t.show),"video"in t&&e(3,c=t.video)},[r,o,()=>{var t;kt.add((t=c,{id:Date.now().toString(),canvas:wt(t)}))},c,()=>e(0,r=!1),()=>{kt.reset()}]}class Dt extends it{constructor(t){super(),st(this,t,Lt,St,s,{show:0,video:3})}}var zt=()=>{self.onmessage=t=>{const{type:n,id:e,blob:o}=t.data;switch(n){case"DATA_URL":const t=new FileReader;t.readAsDataURL(o),t.onload=()=>{const n=t.result;postMessage({id:e,dataURL:n})}}}};const Ut=()=>{const t=(t=>{const n=t.toString(),e=new Blob([`(${n})()`]),o=URL.createObjectURL(e),r=new Worker(o);return r&&URL.revokeObjectURL(o),r})(zt);t.onmessage=t=>{const{id:n,dataURL:e}=t.data;kt.download(n,e)};return{postMessage:async n=>{const e=await(o=n.canvas,new Promise(((t,n)=>{o.toBlob((n=>t(n)))})));var o;t.postMessage({type:"DATA_URL",id:n.id,blob:e})},terminate:()=>t.terminate()}};function Mt(t){let n,e,o,r;return n=new dt({props:{onClick:t[3]}}),o=new Dt({props:{show:t[0],video:t[1]}}),{c(){et(n.$$.fragment),e=x(),et(o.$$.fragment)},m(t,c){ot(n,t,c),$(t,e,c),ot(o,t,c),r=!0},p(t,[e]){const r={};1&e&&(r.onClick=t[3]),n.$set(r);const c={};1&e&&(c.show=t[0]),o.$set(c)},i(t){r||(Q(n.$$.fragment,t),Q(o.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),V(o.$$.fragment,t),r=!1},d(t){rt(n,t),t&&b(e),rt(o,t)}}}function Ot(t,n,e){let{host:o}=n;console.log(o);let r=!1,c=(t=>{const n=document.querySelectorAll("video");switch(console.log(n),t){case"jp.pornhub.com":return n[n.length-1];case"www.youtube.com":case"jp.spankbang.com":case"localhost":default:return n[0]}})(o);const s=(t=>{const n=wt(t);try{const t=n.toDataURL("image/jpeg",0);return console.log("allowCors[ok]",t),!0}catch(t){return console.log("allowCors[ng]",t),!1}finally{n.remove()}})(c);console.log("canDownload",s),D("canDownload",s);const i=Ut();var l;D("blobWorker",i),l=()=>{i.terminate()},L().$$.on_destroy.push(l);return t.$$set=t=>{"host"in t&&e(2,o=t.host)},[r,c,o,()=>e(0,r=!r)]}class Tt extends it{constructor(t){super(),st(this,t,Ot,Mt,s,{host:2})}}return(()=>{((t=1e3)=>{const n=new Date;for(;;)if(Date.now()-n.getTime()>t){console.log(Date.now()-n.getTime()+"ms経過。Sleep終了");break}})(3e3);return document.querySelectorAll("video").length?new Tt({target:document.body,props:{host:window.location.hostname}}):null})()}();
