var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(e){return e&&c(e.destroy)?e.destroy:t}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function h(t,e){t.appendChild(e)}function m(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function g(t){const e=w("style");return function(t,e){h(t.head||t,e)}(m(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function v(){return y("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const C=new Set;let D,E=0;function A(t,e,n,o,r,c,s,l=0){const i=16.666/o;let u="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,f=m(t);C.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,E+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||d((()=>{E||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function R(t){D=t}function S(){if(!D)throw new Error("Function called outside component initialization");return D}function L(t){S().$$.on_mount.push(t)}function B(t){S().$$.on_destroy.push(t)}function M(t){return S().$$.context.get(t)}const z=[],O=[],P=[],U=[],T=Promise.resolve();let I=!1;function W(t){P.push(t)}let N=!1;const q=new Set;function F(){if(!N){N=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];R(e),H(e.$$)}for(R(null),z.length=0;O.length;)O.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];q.has(e)||(q.add(e),e())}P.length=0}while(z.length);for(;U.length;)U.pop()();I=!1,N=!1,q.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let K;function Z(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const Y=new Set;let G;function J(){G={r:0,c:[],p:G}}function Q(){G.r||r(G.c),G=G.p}function V(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),G.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const tt={duration:0};function et(n,o,s,l){let i=o(n,s),u=l?0:1,h=null,m=null,g=null;function $(){g&&j(n,g)}function b(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:c=0,duration:s=300,easing:l=e,tick:w=t,css:y}=i||tt,k={start:a()+c,b:o};o||(k.group=G,G.r+=1),h||m?m=k:(y&&($(),g=A(n,u,o,s,c,l,y)),o&&w(0,1),h=b(k,s),W((()=>Z(n,o,"start"))),function(t){let e;0===f.size&&d(p),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(m&&t>m.start&&(h=b(m,s),m=null,Z(n,h.b,"start"),y&&($(),g=A(n,u,h.b,h.duration,0,l,i.css))),h)if(t>=h.end)w(u=h.b,1-u),Z(n,h.b,"end"),m||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;u=h.a+h.d*l(e/h.duration),w(u,1-u)}return!(!h&&!m)})))}return{run(t){c(i)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{i=i(),w(t)})):w(t)},end(){$(),h=m=null}}}function nt(t,e){X(t,1,1,(()=>{e.delete(t.key)}))}function ot(t){t&&t.c()}function rt(t,e,o,s){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),s||W((()=>{const e=i.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(W)}function ct(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(z.push(t),I||(I=!0,T.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,c,s,l,i,u,a=[-1]){const d=D;R(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&st(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&V(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),F()}R(d)}class it{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ut=(t,e)=>{const n=e=>{let n={};Array.isArray(e)?e.forEach((t=>{n={...n,...t}})):n=e,Object.entries(n).forEach((([e,n])=>{e=e.replace(/[A-Z]/,(t=>"-"+t.toLowerCase())),t.style.setProperty(e,n)}))};return n(e),{update:n}};function at(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔓",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(ut.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:"10%",right:0,zIndex:9998})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function dt(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class ft extends it{constructor(t){super(),lt(this,t,dt,at,s,{onClick:0})}}function pt(t){const e=t-1;return e*e*e+1}function ht(t,{delay:e=0,duration:n=400,easing:o=pt,x:r=0,y:c=0,opacity:s=0}={}){const l=getComputedStyle(t),i=+l.opacity,u="none"===l.transform?"":l.transform,a=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-a*e}`}}function mt(e){let n,o,s,l;return{c(){n=w("button"),o=y(e[0]),_(n,"type","button")},m(t,r){$(t,n,r),h(n,o),s||(l=[i(ut.call(null,n,{fontSize:"20px",padding:"0 4px",margin:"4px"})),x(n,"click",(function(){c(e[1])&&e[1].apply(this,arguments)}))],s=!0)},p(t,[n]){e=t,1&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,e[0])},i:t,o:t,d(t){t&&b(n),s=!1,r(l)}}}function gt(t,e,n){let{emoji:o}=e,{onClick:r}=e;return t.$$set=t=>{"emoji"in t&&n(0,o=t.emoji),"onClick"in t&&n(1,r=t.onClick)},[o,r]}class $t extends it{constructor(t){super(),lt(this,t,gt,mt,s,{emoji:0,onClick:1})}}function bt(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔐",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(ut.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:0,left:0})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function wt(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class yt extends it{constructor(t){super(),lt(this,t,wt,bt,s,{onClick:0})}}const kt=t=>{const e=document.createElement("canvas");return e.style.cssText="width:100%",e.setAttribute("width",`${t.videoWidth}`),e.setAttribute("height",`${t.videoHeight}`),e.getContext("2d").drawImage(t,0,0,e.width,e.height),e},vt=[];function xt(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!vt.length;for(const t of r)t[1](),vt.push(t,e);if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,l=t){const i=[s,l];return r.add(i),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}const _t=(t,e)=>parseInt(e.id,10)-parseInt(t.id,10),Ct=(t,e)=>parseInt(t.id,10)-parseInt(e.id,10),Dt=(()=>{const{subscribe:t,set:e,update:n}=xt({captures:[],orderByDesc:!0}),o=t=>n((e=>({captures:e.captures.filter((e=>e.id!==t)),orderByDesc:e.orderByDesc})));return{subscribe:t,add:t=>n((e=>{return{captures:(n=e,o=t,n.orderByDesc?[o,...n.captures]:[...n.captures,o]),orderByDesc:e.orderByDesc};var n,o})),remove:o,reset:()=>e({captures:[],orderByDesc:!0}),download:(t,e)=>{((t,e)=>{new Promise(((n,o)=>{try{const o=document.createElement("a");o.download=`${t}.png`,o.href=e,o.click(),o.remove(),n()}catch(t){}}))})(t,e),o(t)},changeOrder:(t=!0)=>n((e=>{const n=[...e.captures].sort(t?_t:Ct);return console.log("order changed",n),{captures:n,orderByDesc:t}}))}})(),Et=(()=>{const{subscribe:t,set:e,update:n}=xt({canDownload:!1});return{subscribe:t,change:(t,e)=>n((n=>{const o=Object.assign({},n);return o[t]=e,o})),reset:()=>e({canDownload:!1})}})();function At(e){let n,o,c,s,l,u,a=e[2]&&function(e){let n,o,r;return{c(){n=w("button"),n.textContent="💾"},m(t,c){$(t,n,c),o||(r=x(n,"click",e[4]),o=!0)},p:t,d(t){t&&b(n),o=!1,r()}}}(e);return{c(){n=w("div"),o=w("button"),o.textContent="🗑",c=k(),a&&a.c()},m(t,r){$(t,n,r),h(n,o),h(n,c),a&&a.m(n,null),l||(u=[x(o,"click",e[3]),i(s=ut.call(null,n,{position:"absolute",top:0,left:0,zIndex:2}))],l=!0)},p(t,e){t[2]&&a.p(t,e)},d(t){t&&b(n),a&&a.d(),l=!1,r(u)}}}function jt(e){let n,o,r,c=e[1]&&At(e);return{c(){n=w("div"),c&&c.c()},m(t,s){$(t,n,s),c&&c.m(n,null),e[6](n),o||(r=i(ut.call(null,n,{width:"100%",position:"relative"})),o=!0)},p(t,[e]){t[1]?c?c.p(t,e):(c=At(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&b(n),c&&c.d(),e[6](null),o=!1,r()}}}function Rt(t,e,n){let o;l(t,Et,(t=>n(7,o=t)));let r,{capture:c}=e;const s=M("WorkerPool");let i=o.canDownload;console.log("[CaptureResult] canDownload:",i);let u=!1;L((()=>{r.appendChild(c.canvas),n(1,u=!0)}));return t.$$set=t=>{"capture"in t&&n(5,c=t.capture)},[r,u,i,()=>{Dt.remove(c.id)},()=>{const t=s[Math.floor(Math.random()*s.length)];console.log(`[Capture#${c.id}] download with worker${t.id}`),t.postMessage(c),console.log(`[Capture#${c.id}] downloaded with worker${t.id}`)},c,function(t){O[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class St extends it{constructor(t){super(),lt(this,t,Rt,jt,s,{capture:5})}}function Lt(t,e,n){const o=t.slice();return o[13]=e[n],o}function Bt(t){let e,n,o,c,s,l,u,a,d,f,p,m,g,y,v,x,_,C=[],D=new Map;n=new yt({props:{onClick:t[8]}}),s=new $t({props:{emoji:"📸",onClick:t[4]}});let E=t[3].canDownload&&Mt(t);a=new $t({props:{emoji:"🗑",onClick:t[9]}}),f=new $t({props:{emoji:t[2],onClick:t[6]}});let A=t[1].captures;const j=t=>t[13].id;for(let e=0;e<A.length;e+=1){let n=Lt(t,A,e),o=j(n);D.set(o,C[e]=zt(o,n))}return{c(){e=w("div"),ot(n.$$.fragment),o=k(),c=w("div"),ot(s.$$.fragment),l=k(),E&&E.c(),u=k(),ot(a.$$.fragment),d=k(),ot(f.$$.fragment),m=k();for(let t=0;t<C.length;t+=1)C[t].c()},m(t,r){$(t,e,r),rt(n,e,null),h(e,o),h(e,c),rt(s,c,null),h(c,l),E&&E.m(c,null),h(c,u),rt(a,c,null),h(c,d),rt(f,c,null),h(e,m);for(let t=0;t<C.length;t+=1)C[t].m(e,null);v=!0,x||(_=[i(p=ut.call(null,c,{textAlign:"center",borderRadius:"3px",padding:"4px",marginBottom:"1rem"})),i(g=ut.call(null,e,{position:"fixed",top:"10%",right:0,height:"90%",padding:"0.5rem 1rem 4Zrem",borderLeft:"1 solid #aaa",background:"#fff",overflowY:"auto",width:"375px",border:"1px solid #000",zIndex:9999}))],x=!0)},p(t,o){const r={};1&o&&(r.onClick=t[8]),n.$set(r),t[3].canDownload?E?(E.p(t,o),8&o&&V(E,1)):(E=Mt(t),E.c(),V(E,1),E.m(c,u)):E&&(J(),X(E,1,1,(()=>{E=null})),Q());const s={};4&o&&(s.emoji=t[2]),f.$set(s),2&o&&(A=t[1].captures,J(),C=function(t,e,n,o,r,c,s,l,i,u,a,d){let f=t.length,p=c.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,b=new Map;for(h=p;h--;){const t=d(r,c,h),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=u(l,t),i.c()),$.set(l,g[h]=i),l in m&&b.set(l,Math.abs(h-m[l]))}const w=new Set,y=new Set;function k(t){V(t,1),t.m(l,a),s.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(a=e.first,f--,p--):$.has(r)?!s.has(o)||w.has(o)?k(e):y.has(r)?f--:b.get(o)>b.get(r)?(y.add(o),k(e)):(w.add(r),f--):(i(n,s),f--)}for(;f--;){const e=t[f];$.has(e.key)||i(e,s)}for(;p;)k(g[p-1]);return g}(C,o,j,1,t,A,D,e,nt,zt,null,Lt),Q())},i(t){if(!v){V(n.$$.fragment,t),V(s.$$.fragment,t),V(E),V(a.$$.fragment,t),V(f.$$.fragment,t);for(let t=0;t<A.length;t+=1)V(C[t]);W((()=>{y||(y=et(e,ht,{x:375,opacity:1},!0)),y.run(1)})),v=!0}},o(t){X(n.$$.fragment,t),X(s.$$.fragment,t),X(E),X(a.$$.fragment,t),X(f.$$.fragment,t);for(let t=0;t<C.length;t+=1)X(C[t]);y||(y=et(e,ht,{x:375,opacity:1},!1)),y.run(0),v=!1},d(t){t&&b(e),ct(n),ct(s),E&&E.d(),ct(a),ct(f);for(let t=0;t<C.length;t+=1)C[t].d();t&&y&&y.end(),x=!1,r(_)}}}function Mt(e){let n,o;return n=new $t({props:{emoji:"💾",onClick:e[5]}}),{c(){ot(n.$$.fragment)},m(t,e){rt(n,t,e),o=!0},p:t,i(t){o||(V(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){ct(n,t)}}}function zt(t,e){let n,o,r;return o=new St({props:{capture:e[13]}}),{key:t,first:null,c(){n=v(),ot(o.$$.fragment),this.first=n},m(t,e){$(t,n,e),rt(o,t,e),r=!0},p(t,n){e=t;const r={};2&n&&(r.capture=e[13]),o.$set(r)},i(t){r||(V(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&b(n),ct(o,t)}}}function Ot(t){let e,n,o=t[0]&&Bt(t);return{c(){o&&o.c(),e=v()},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&V(o,1)):(o=Bt(t),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(J(),X(o,1,1,(()=>{o=null})),Q())},i(t){n||(V(o),n=!0)},o(t){X(o),n=!1},d(t){o&&o.d(t),t&&b(e)}}}function Pt(t,e,n){let o,r,c;l(t,Dt,(t=>n(1,r=t))),l(t,Et,(t=>n(3,c=t)));let{show:s=!1}=e,{video:i}=e,u=0;const a=M("WorkerPool"),d=()=>{var t;Dt.add((t=i,{id:Date.now().toString(),canvas:kt(t)}))},f=t=>{if(t.shiftKey){if(t.metaKey)return d();if(t.altKey){const t=r.orderByDesc?0:r.captures.length-1;return Dt.remove(r.captures[t].id)}"Z"!==t.key||n(0,s=!s)}};L((()=>{window.addEventListener("keydown",f)})),B((()=>{window.removeEventListener("keydown",f)}));return t.$$set=t=>{"show"in t&&n(0,s=t.show),"video"in t&&n(7,i=t.video)},t.$$.update=()=>{2&t.$$.dirty&&n(2,o=r.orderByDesc?"最新順":"撮影順")},[s,r,o,c,d,()=>{const t=Date.now();r.captures.forEach((t=>{u===a.length&&(u=0);const e=a[u];console.log(`[Worker#${e.id}] download start`),e.postMessage(t),u+=1,((t=1e3)=>{const e=new Date;for(;;)if(Date.now()-e.getTime()>t){console.log(Date.now()-e.getTime()+"ms経過。Sleep終了");break}})(100)})),console.log(`[DownloadAll] ${Date.now()-t}ms`)},()=>{Dt.changeOrder(!r.orderByDesc)},i,()=>n(0,s=!1),()=>{Dt.reset()}]}class Ut extends it{constructor(t){super(),lt(this,t,Pt,Ot,s,{show:0,video:7})}}var Tt=()=>{self.onmessage=t=>{const{type:e,id:n,blob:o}=t.data;switch(e){case"DATA_URL":const t=new FileReader;t.readAsDataURL(o),t.onload=()=>{const e=t.result;postMessage({id:n,dataURL:e})}}}};const It=()=>{const t=(t=>{const e=t.toString(),n=new Blob([`(${e})()`]),o=URL.createObjectURL(n),r=new Worker(o);return r&&URL.revokeObjectURL(o),r})(Tt),e=(t=>{let e=1e3;return t&&(e=t),(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)})();console.log(`[Worker] generated #${e}`),t.onmessage=t=>{const{id:e,dataURL:n}=t.data;Dt.download(e,n)};return{id:e,postMessage:async e=>{const n=await(o=e.canvas,new Promise(((t,e)=>{o.toBlob((e=>t(e)))})));var o;t.postMessage({type:"DATA_URL",id:e.id,blob:n})},terminate:()=>{console.log(`[Worker] terminate #${e}`),t.terminate()}}};function Wt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Nt(t){let e,n;return e=new Ut({props:{show:t[0],video:t[5]}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.show=t[0]),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function qt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Ft(t){let e,n,o,r;e=new ft({props:{onClick:t[3]}});let c={ctx:t,current:null,token:null,hasCatch:!1,pending:qt,then:Nt,catch:Wt,value:5,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(J(),X(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),Q())})):e.block.d(1),l.c(),V(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&F()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=S();if(t.then((t=>{R(n),o(e.then,1,e.value,t),R(null)}),(t=>{if(R(n),o(e.catch,2,e.error,t),R(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(t[1],c),{c(){ot(e.$$.fragment),n=k(),o=v(),c.block.c()},m(t,s){rt(e,t,s),$(t,n,s),$(t,o,s),c.block.m(t,c.anchor=s),c.mount=()=>o.parentNode,c.anchor=o,r=!0},p(n,[o]){t=n;const r={};1&o&&(r.onClick=t[3]),e.$set(r),function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(c,t,o)},i(t){r||(V(e.$$.fragment,t),V(c.block),r=!0)},o(t){X(e.$$.fragment,t);for(let t=0;t<3;t+=1){X(c.blocks[t])}r=!1},d(t){ct(e,t),t&&b(n),t&&b(o),c.block.d(t),c.token=null,c=null}}}function Ht(t,e,n){let{host:o}=e,r=!1,c=((t,e)=>{const n=(o,r)=>t().then((t=>({result:t,isCompleted:null!==t}))).then((({result:t,isCompleted:c})=>c?o(t):(console.log(`Retry in ${e}ms`),setTimeout((()=>n(o,r)),e)))).catch(r);return new Promise(n)})((()=>{const t=(t=>{const e=document.querySelectorAll("video");switch(console.log(e),t){case"www.xvideos.com":{let t=null;return e.forEach((e=>{e.src.includes("blob")&&(t=e)})),t}case"jp.pornhub.com":const t=Array.from(e),n=t.pop();return n.currentSrc?n:t.pop();case"www.youtube.com":case"jp.spankbang.com":case"localhost":default:return e[0]}})(o);return Promise.resolve(t||null)}),100);const s=((t=1)=>[...Array(t)].map(((t,e)=>It())))(4);var l,i;l="WorkerPool",i=s,S().$$.context.set(l,i),B((()=>{s.forEach((t=>t.terminate()))}));return t.$$set=t=>{"host"in t&&n(2,o=t.host)},c.then((t=>{console.log(t);const e=(t=>{const e=kt(t);try{const t=e.toDataURL();return console.log("allowCors[ok]",t.length),!0}catch(t){return console.log("allowCors[ng]",t),!1}finally{e.remove()}})(t);console.log("[App] canDownload:",e),Et.change("canDownload",e)})),[r,c,o,()=>n(0,r=!0)]}return new class extends it{constructor(t){super(),lt(this,t,Ht,Ft,s,{host:2})}}({target:document.body,props:{host:window.location.hostname}})}();