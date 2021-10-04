var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(e){return e&&c(e.destroy)?e.destroy:t}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function h(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function m(t){const e=w("style");return function(t,e){h(t.head||t,e)}(g(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function v(){return y("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}const D=new Set;let A,E=0;function j(t,e,n,o,r,c,s,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=g(t);D.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=m(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,E+=1,d}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||d((()=>{E||(D.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),D.clear())})))}function L(t){A=t}function S(){if(!A)throw new Error("Function called outside component initialization");return A}function B(t){S().$$.on_mount.push(t)}function z(t){S().$$.on_destroy.push(t)}const T=[],M=[],O=[],I=[],U=Promise.resolve();let P=!1;function N(t){O.push(t)}let W=!1;const q=new Set;function F(){if(!W){W=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];L(e),H(e.$$)}for(L(null),T.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];q.has(e)||(q.add(e),e())}O.length=0}while(T.length);for(;I.length;)I.pop()();P=!1,W=!1,q.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let K;function Z(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const Y=new Set;let G;function J(){G={r:0,c:[],p:G}}function Q(){G.r||r(G.c),G=G.p}function V(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),G.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const tt={duration:0};function et(n,o,s,l){let i=o(n,s),a=l?0:1,h=null,g=null,m=null;function $(){m&&R(n,m)}function b(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:c=0,duration:s=300,easing:l=e,tick:w=t,css:y}=i||tt,k={start:u()+c,b:o};o||(k.group=G,G.r+=1),h||g?g=k:(y&&($(),m=j(n,a,o,s,c,l,y)),o&&w(0,1),h=b(k,s),N((()=>Z(n,o,"start"))),function(t){let e;0===f.size&&d(p),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(h=b(g,s),g=null,Z(n,h.b,"start"),y&&($(),m=j(n,a,h.b,h.duration,0,l,i.css))),h)if(t>=h.end)w(a=h.b,1-a),Z(n,h.b,"end"),g||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;a=h.a+h.d*l(e/h.duration),w(a,1-a)}return!(!h&&!g)})))}return{run(t){c(i)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{i=i(),w(t)})):w(t)},end(){$(),h=g=null}}}function nt(t,e){X(t,1,1,(()=>{e.delete(t.key)}))}function ot(t){t&&t.c()}function rt(t,e,o,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,o),s||N((()=>{const e=i.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(N)}function ct(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(T.push(t),P||(P=!0,U.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,c,s,l,i,a,u=[-1]){const d=A;L(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&st(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&V(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),F()}L(d)}class it{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var at=(t,e)=>{const n=e=>{let n={};Array.isArray(e)?e.forEach((t=>{n={...n,...t}})):n=e,Object.entries(n).forEach((([e,n])=>{e=e.replace(/[A-Z]/,(t=>"-"+t.toLowerCase())),t.style.setProperty(e,n)}))};return n(e),{update:n}};function ut(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔓",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(at.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:"10%",right:0,zIndex:9998})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function dt(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class ft extends it{constructor(t){super(),lt(this,t,dt,ut,s,{onClick:0})}}function pt(t){const e=t-1;return e*e*e+1}function ht(t,{delay:e=0,duration:n=400,easing:o=pt,x:r=0,y:c=0,opacity:s=0}={}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-u*e}`}}function gt(e){let n,o,s,l;return{c(){n=w("button"),o=y(e[0]),_(n,"type","button")},m(t,r){$(t,n,r),h(n,o),s||(l=[i(at.call(null,n,{fontSize:"20px",padding:"0 4px",margin:"4px"})),x(n,"click",(function(){c(e[1])&&e[1].apply(this,arguments)}))],s=!0)},p(t,[n]){e=t,1&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,e[0])},i:t,o:t,d(t){t&&b(n),s=!1,r(l)}}}function mt(t,e,n){let{emoji:o}=e,{onClick:r}=e;return t.$$set=t=>{"emoji"in t&&n(0,o=t.emoji),"onClick"in t&&n(1,r=t.onClick)},[o,r]}class $t extends it{constructor(t){super(),lt(this,t,mt,gt,s,{emoji:0,onClick:1})}}function bt(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔐",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(at.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:0,left:0})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function wt(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class yt extends it{constructor(t){super(),lt(this,t,wt,bt,s,{onClick:0})}}const kt=t=>{const e=document.createElement("canvas");return e.style.cssText="width:100%",e.setAttribute("width",`${t.videoWidth}`),e.setAttribute("height",`${t.videoHeight}`),e.getContext("2d").drawImage(t,0,0,e.width,e.height),e},vt=[];function xt(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!vt.length;for(const t of r)t[1](),vt.push(t,e);if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,l=t){const i=[s,l];return r.add(i),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}const _t=(t,e)=>parseInt(e.id,10)-parseInt(t.id,10),Ct=(t,e)=>parseInt(t.id,10)-parseInt(e.id,10),Dt=(()=>{const{subscribe:t,set:e,update:n}=xt({captures:[],orderByDesc:!0}),o=t=>n((e=>({captures:e.captures.filter((e=>e.id!==t)),orderByDesc:e.orderByDesc})));return{subscribe:t,add:(t,e)=>n((n=>{return e.postMessage(t),{captures:(o=n,r=t,o.orderByDesc?[r,...o.captures]:[...o.captures,r]),orderByDesc:n.orderByDesc};var o,r})),remove:o,reset:()=>e({captures:[],orderByDesc:!0}),download:(t,e)=>{((t,e)=>{new Promise(((n,o)=>{try{const o=document.createElement("a");o.download=`${t}.png`,o.href=e,o.click(),o.remove(),n()}catch(t){}}))})(t,e),o(t)},changeOrder:(t=!0)=>n((e=>{const n=[...e.captures].sort(t?_t:Ct);return console.log("order changed",n),{captures:n,orderByDesc:t}})),setDownloadLink:(t,e,o)=>n((n=>{const r=[...n.captures],c=r.findIndex((e=>e.id===t));if(c>-1){const n=r[c],l=document.createElement("a");l.download=`${t}.png`,l.href=e,n.aTag=l,n.size=o,console.log(`[Capture#${t}] create aTag: ${t}.png. ${s=o,`\n  [ファイルサイズ] メガバイト: ${s/1e6}mb\n  `}`)}var s;return{captures:r,orderByDesc:n.orderByDesc}}))}})(),At=(()=>{const{subscribe:t,set:e,update:n}=xt({canDownload:!1});return{subscribe:t,change:(t,e)=>n((n=>{const o=Object.assign({},n);return o[t]=e,o})),reset:()=>e({canDownload:!1})}})();var Et=()=>{self.onmessage=t=>{const{type:e,id:n,blob:o}=t.data;switch(e){case"DATA_URL":const t=o.size,e=new FileReader;e.readAsDataURL(o),e.onload=()=>{const o=e.result;postMessage({id:n,dataURL:o,size:t})}}}};const jt=(t=1)=>[...Array(t)].map(((t,e)=>Rt())),Rt=()=>{const t=(t=>{const e=t.toString(),n=new Blob([`(${e})()`]),o=URL.createObjectURL(n),r=new Worker(o);return r&&URL.revokeObjectURL(o),r})(Et),e=(t=>{let e=1e3;return t&&(e=t),(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)})();console.log(`[Worker] generated #${e}`),t.onmessage=t=>{const{id:e,dataURL:n,size:o}=t.data;Dt.setDownloadLink(e,n,o),console.log(`[Worker#${e}] onmessage: capture#${e}`)};return{id:e,postMessage:async n=>{console.log(`[Worker#${e}] postMessage: capture#${n.id}`);try{const e=await(o=n.canvas,new Promise(((t,e)=>{o.toBlob((e=>t(e)))})));t.postMessage({type:"DATA_URL",id:n.id,blob:e})}catch(t){console.log("download非対応")}var o},terminate:()=>{console.log(`[Worker] terminate #${e}`),t.terminate()}}},Lt=(()=>{const{subscribe:t,update:e}=xt({thread:0,workers:jt(1)});return{subscribe:t,add:(t=1)=>e((({thread:e,workers:n})=>({thread:e,workers:n.length+t>16?[...n]:[...n,...jt(t)]}))),remove:(t=1)=>e((({thread:e,workers:n})=>{const o=t>n.length?n.length:t;return{thread:e,workers:n.map(((t,e)=>e<o?(t.terminate(),null):t)).filter((t=>t))}})),deleteAll:()=>e((({workers:t})=>(t.forEach((t=>t.terminate())),{thread:0,workers:[]}))),use:t=>e((({thread:e,workers:n})=>{var o;return Dt.add((o=t,{id:Date.now().toString(),canvas:kt(o)}),n[e]),{thread:e+1===n.length?0:e+1,workers:[...n]}}))}})();function St(t){let e,n,o,c,s,l,a=t[2]&&Bt(t);return{c(){e=w("div"),n=w("button"),n.textContent="🗑",o=k(),a&&a.c()},m(r,u){$(r,e,u),h(e,n),h(e,o),a&&a.m(e,null),s||(l=[x(n,"click",t[3]),i(c=at.call(null,e,{position:"absolute",top:0,left:0,zIndex:2}))],s=!0)},p(t,n){t[2]?a?a.p(t,n):(a=Bt(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(t){t&&b(e),a&&a.d(),s=!1,r(l)}}}function Bt(e){let n,o,r;return{c(){n=w("button"),n.textContent="💾"},m(t,c){$(t,n,c),o||(r=x(n,"click",e[4]),o=!0)},p:t,d(t){t&&b(n),o=!1,r()}}}function zt(e){let n,o,r,c=e[1]&&St(e);return{c(){n=w("div"),c&&c.c()},m(t,s){$(t,n,s),c&&c.m(n,null),e[6](n),o||(r=i(at.call(null,n,{width:"100%",position:"relative"})),o=!0)},p(t,[e]){t[1]?c?c.p(t,e):(c=St(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&b(n),c&&c.d(),e[6](null),o=!1,r()}}}function Tt(t,e,n){let o,r,{capture:c}=e,s=!1;B((()=>{r.appendChild(c.canvas),n(1,s=!0)}));return t.$$set=t=>{"capture"in t&&n(5,c=t.capture)},t.$$.update=()=>{32&t.$$.dirty&&n(2,o=null!=c.aTag)},[r,s,o,()=>{Dt.remove(c.id)},()=>{c.aTag.click(),Dt.remove(c.id)},c,function(t){M[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class Mt extends it{constructor(t){super(),lt(this,t,Tt,zt,s,{capture:5})}}function Ot(t,e,n){const o=t.slice();return o[15]=e[n],o}function It(t,e,n){const o=t.slice();return o[18]=e[n],o}function Ut(t){let e,n,o,c,s,l,a,u,d,f,p,g,m,y,v,_,D,A,E,j=[],R=new Map;n=new yt({props:{onClick:t[11]}}),s=new $t({props:{emoji:"📸",onClick:t[6]}});let L=t[4].canDownload&&Pt(t);u=new $t({props:{emoji:"🗑",onClick:t[12]}}),f=new $t({props:{emoji:t[3],onClick:t[8]}});let S=t[5],B=[];for(let e=0;e<S.length;e+=1)B[e]=Nt(It(t,S,e));let z=t[2].captures;const T=t=>t[15].id;for(let e=0;e<z.length;e+=1){let n=Ot(t,z,e),o=T(n);R.set(o,j[e]=Wt(o,n))}return{c(){e=w("div"),ot(n.$$.fragment),o=k(),c=w("div"),ot(s.$$.fragment),l=k(),L&&L.c(),a=k(),ot(u.$$.fragment),d=k(),ot(f.$$.fragment),p=k(),g=w("select");for(let t=0;t<B.length;t+=1)B[t].c();y=k();for(let t=0;t<j.length;t+=1)j[t].c()},m(r,b){$(r,e,b),rt(n,e,null),h(e,o),h(e,c),rt(s,c,null),h(c,l),L&&L.m(c,null),h(c,a),rt(u,c,null),h(c,d),rt(f,c,null),h(c,p),h(c,g);for(let t=0;t<B.length;t+=1)B[t].m(g,null);C(g,t[1]),h(e,y);for(let t=0;t<j.length;t+=1)j[t].m(e,null);D=!0,A||(E=[x(g,"change",t[13]),i(m=at.call(null,c,{textAlign:"center",borderRadius:"3px",padding:"4px",marginBottom:"1rem"})),i(v=at.call(null,e,{position:"fixed",top:"10%",right:0,height:"90%",padding:"0.5rem 1rem 4Zrem",borderLeft:"1 solid #aaa",background:"#fff",overflowY:"auto",width:"375px",border:"1px solid #000",zIndex:9999}))],A=!0)},p(t,o){const r={};1&o&&(r.onClick=t[11]),n.$set(r),t[4].canDownload?L?(L.p(t,o),16&o&&V(L,1)):(L=Pt(t),L.c(),V(L,1),L.m(c,a)):L&&(J(),X(L,1,1,(()=>{L=null})),Q());const s={};if(8&o&&(s.emoji=t[3]),f.$set(s),32&o){let e;for(S=t[5],e=0;e<S.length;e+=1){const n=It(t,S,e);B[e]?B[e].p(n,o):(B[e]=Nt(n),B[e].c(),B[e].m(g,null))}for(;e<B.length;e+=1)B[e].d(1);B.length=S.length}(!D||34&o)&&C(g,t[1]),4&o&&(z=t[2].captures,J(),j=function(t,e,n,o,r,c,s,l,i,a,u,d){let f=t.length,p=c.length,h=f;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,b=new Map;for(h=p;h--;){const t=d(r,c,h),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),$.set(l,m[h]=i),l in g&&b.set(l,Math.abs(h-g[l]))}const w=new Set,y=new Set;function k(t){V(t,1),t.m(l,u),s.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=m[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,p--):$.has(r)?!s.has(o)||w.has(o)?k(e):y.has(r)?f--:b.get(o)>b.get(r)?(y.add(o),k(e)):(w.add(r),f--):(i(n,s),f--)}for(;f--;){const e=t[f];$.has(e.key)||i(e,s)}for(;p;)k(m[p-1]);return m}(j,o,T,1,t,z,R,e,nt,Wt,null,Ot),Q())},i(t){if(!D){V(n.$$.fragment,t),V(s.$$.fragment,t),V(L),V(u.$$.fragment,t),V(f.$$.fragment,t);for(let t=0;t<z.length;t+=1)V(j[t]);N((()=>{_||(_=et(e,ht,{x:375,opacity:1},!0)),_.run(1)})),D=!0}},o(t){X(n.$$.fragment,t),X(s.$$.fragment,t),X(L),X(u.$$.fragment,t),X(f.$$.fragment,t);for(let t=0;t<j.length;t+=1)X(j[t]);_||(_=et(e,ht,{x:375,opacity:1},!1)),_.run(0),D=!1},d(t){t&&b(e),ct(n),ct(s),L&&L.d(),ct(u),ct(f),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(B,t);for(let t=0;t<j.length;t+=1)j[t].d();t&&_&&_.end(),A=!1,r(E)}}}function Pt(e){let n,o;return n=new $t({props:{emoji:"💾",onClick:e[7]}}),{c(){ot(n.$$.fragment)},m(t,e){rt(n,t,e),o=!0},p:t,i(t){o||(V(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){ct(n,t)}}}function Nt(e){let n,o,r,c,s=e[18]+"";return{c(){n=w("option"),o=y(s),r=k(),n.__value=c=e[18],n.value=n.__value},m(t,e){$(t,n,e),h(n,o),h(n,r)},p:t,d(t){t&&b(n)}}}function Wt(t,e){let n,o,r;return o=new Mt({props:{capture:e[15]}}),{key:t,first:null,c(){n=v(),ot(o.$$.fragment),this.first=n},m(t,e){$(t,n,e),rt(o,t,e),r=!0},p(t,n){e=t;const r={};4&n&&(r.capture=e[15]),o.$set(r)},i(t){r||(V(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&b(n),ct(o,t)}}}function qt(t){let e,n,o=t[0]&&Ut(t);return{c(){o&&o.c(),e=v()},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&V(o,1)):(o=Ut(t),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(J(),X(o,1,1,(()=>{o=null})),Q())},i(t){n||(V(o),n=!0)},o(t){X(o),n=!1},d(t){o&&o.d(t),t&&b(e)}}}function Ft(t,e,n){let o,r,c,s,i;l(t,Dt,(t=>n(2,c=t))),l(t,Lt,(t=>n(10,s=t))),l(t,At,(t=>n(4,i=t)));let{show:a=!1}=e,{video:u}=e;const d=[...Array(16)].map(((t,e)=>e+1)),f=()=>Lt.use(u),p=t=>{if(t.shiftKey){if(t.metaKey)return f();if(t.altKey){const t=c.orderByDesc?0:c.captures.length-1;return Dt.remove(c.captures[t].id)}"A"!==t.key||n(0,a=!a)}};B((()=>{window.addEventListener("keydown",p)})),z((()=>{window.removeEventListener("keydown",p)}));return t.$$set=t=>{"show"in t&&n(0,a=t.show),"video"in t&&n(9,u=t.video)},t.$$.update=()=>{1024&t.$$.dirty&&n(1,o=s.workers.length),4&t.$$.dirty&&n(3,r=c.orderByDesc?"最新順":"撮影順"),1026&t.$$.dirty&&(t=>{const e=s.workers.length;t!==e&&(t>e?Lt.add(t-e):Lt.remove(e-t))})(o)},[a,o,c,r,i,d,f,()=>{const t=Date.now();console.log("[Download All] download start"),c.captures.forEach((t=>{const e=(t=>{const e=t/1e6;return e>=5?1250:e>=3?1e3:e>=1.5?750:e>=1?500:e>=.5?250:100})(t.size);t.aTag.click(),Dt.remove(t.id),console.log(`sleep start: ${e}ms`),((t=1e3)=>{const e=new Date;for(;;)if(Date.now()-e.getTime()>t){console.log(Date.now()-e.getTime()+"ms経過。Sleep終了");break}})(e),console.log(`[Capture#${t.id}] download`)})),console.log(`[Download All] download end: ${Date.now()-t}ms`)},()=>{Dt.changeOrder(!c.orderByDesc)},u,s,()=>n(0,a=!1),()=>{Dt.reset()},t=>{n(1,o=parseInt(t.currentTarget.value,10))}]}class Ht extends it{constructor(t){super(),lt(this,t,Ft,qt,s,{show:0,video:9})}}function Kt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Zt(t){let e,n;return e=new Ht({props:{show:t[0],video:t[4]}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.show=t[0]),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function Yt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Gt(t){let e,n,o,r;e=new ft({props:{onClick:t[3]}});let c={ctx:t,current:null,token:null,hasCatch:!1,pending:Yt,then:Zt,catch:Kt,value:4,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(J(),X(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),Q())})):e.block.d(1),l.c(),V(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&F()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=S();if(t.then((t=>{L(n),o(e.then,1,e.value,t),L(null)}),(t=>{if(L(n),o(e.catch,2,e.error,t),L(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(t[1],c),{c(){ot(e.$$.fragment),n=k(),o=v(),c.block.c()},m(t,s){rt(e,t,s),$(t,n,s),$(t,o,s),c.block.m(t,c.anchor=s),c.mount=()=>o.parentNode,c.anchor=o,r=!0},p(n,[o]){t=n;const r={};1&o&&(r.onClick=t[3]),e.$set(r),function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(c,t,o)},i(t){r||(V(e.$$.fragment,t),V(c.block),r=!0)},o(t){X(e.$$.fragment,t);for(let t=0;t<3;t+=1){X(c.blocks[t])}r=!1},d(t){ct(e,t),t&&b(n),t&&b(o),c.block.d(t),c.token=null,c=null}}}function Jt(t,e,n){let{host:o}=e,r=!1,c=((t,e)=>{const n=(o,r)=>t().then((t=>({result:t,isCompleted:null!==t}))).then((({result:t,isCompleted:c})=>c?o(t):(console.log(`Retry in ${e}ms`),setTimeout((()=>n(o,r)),e)))).catch(r);return new Promise(n)})((()=>{const t=(t=>{const e=document.querySelectorAll("video");switch(console.log(e),t){case"www.xvideos.com":{let t=null;return e.forEach((e=>{e.src.includes("blob")&&(t=e)})),t}case"jp.pornhub.com":const t=Array.from(e),n=t.pop();return n.currentSrc?n:t.pop();case"www.youtube.com":case"jp.spankbang.com":case"localhost":default:return e[0]}})(o);return Promise.resolve(t||null)}),100);z((()=>{Lt.deleteAll()}));return t.$$set=t=>{"host"in t&&n(2,o=t.host)},c.then((t=>{console.log(t);const e=(t=>{const e=kt(t);try{const t=e.toDataURL();return console.log("allowCors[ok]",t.length),!0}catch(t){return console.log("allowCors[ng]",t),!1}finally{e.remove()}})(t);console.log("[App] canDownload:",e),At.change("canDownload",e)})),[r,c,o,()=>n(0,r=!0)]}return new class extends it{constructor(t){super(),lt(this,t,Jt,Gt,s,{host:2})}}({target:document.body,props:{host:window.location.hostname}})}();
