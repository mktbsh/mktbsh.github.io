var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(e){return e&&c(e.destroy)?e.destroy:t}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function m(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function h(t){const e=w("style");return function(t,e){m(t.head||t,e)}(g(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function k(){return y(" ")}function v(){return y("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const C=new Set;let D,A=0;function E(t,e,n,o,r,c,s,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=g(t);C.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=h(t).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,A+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),A-=r,A||d((()=>{A||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function R(t){D=t}function L(){if(!D)throw new Error("Function called outside component initialization");return D}function S(t){L().$$.on_mount.push(t)}function B(t){L().$$.on_destroy.push(t)}const z=[],T=[],M=[],O=[],P=Promise.resolve();let U=!1;function I(t){M.push(t)}let W=!1;const N=new Set;function q(){if(!W){W=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];R(e),F(e.$$)}for(R(null),z.length=0;T.length;)T.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];N.has(e)||(N.add(e),e())}M.length=0}while(z.length);for(;O.length;)O.pop()();U=!1,W=!1,N.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}let H;function K(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const Z=new Set;let Y;function G(){Y={r:0,c:[],p:Y}}function J(){Y.r||r(Y.c),Y=Y.p}function Q(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),Y.c.push((()=>{Z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const X={duration:0};function tt(n,o,s,l){let i=o(n,s),a=l?0:1,m=null,g=null,h=null;function $(){h&&j(n,h)}function b(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:c=0,duration:s=300,easing:l=e,tick:w=t,css:y}=i||X,k={start:u()+c,b:o};o||(k.group=Y,Y.r+=1),m||g?g=k:(y&&($(),h=E(n,a,o,s,c,l,y)),o&&w(0,1),m=b(k,s),I((()=>K(n,o,"start"))),function(t){let e;0===f.size&&d(p),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(m=b(g,s),g=null,K(n,m.b,"start"),y&&($(),h=E(n,a,m.b,m.duration,0,l,i.css))),m)if(t>=m.end)w(a=m.b,1-a),K(n,m.b,"end"),g||(m.b?$():--m.group.r||r(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;a=m.a+m.d*l(e/m.duration),w(a,1-a)}return!(!m&&!g)})))}return{run(t){c(i)?(H||(H=Promise.resolve(),H.then((()=>{H=null}))),H).then((()=>{i=i(),w(t)})):w(t)},end(){$(),m=g=null}}}function et(t,e){V(t,1,1,(()=>{e.delete(t.key)}))}function nt(t){t&&t.c()}function ot(t,e,o,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,o),s||I((()=>{const e=i.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(I)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(z.push(t),U||(U=!0,P.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,c,s,l,i,a,u=[-1]){const d=D;R(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&ct(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&Q(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),q()}R(d)}class lt{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var it=(t,e)=>{const n=e=>{let n={};Array.isArray(e)?e.forEach((t=>{n={...n,...t}})):n=e,Object.entries(n).forEach((([e,n])=>{e=e.replace(/[A-Z]/,(t=>"-"+t.toLowerCase())),t.style.setProperty(e,n)}))};return n(e),{update:n}};function at(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔓",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(it.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:"10%",right:0,zIndex:9998})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function ut(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class dt extends lt{constructor(t){super(),st(this,t,ut,at,s,{onClick:0})}}function ft(t){const e=t-1;return e*e*e+1}function pt(t,{delay:e=0,duration:n=400,easing:o=ft,x:r=0,y:c=0,opacity:s=0}={}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-u*e}`}}function mt(e){let n,o,s,l;return{c(){n=w("button"),o=y(e[0]),_(n,"type","button")},m(t,r){$(t,n,r),m(n,o),s||(l=[i(it.call(null,n,{fontSize:"20px",padding:"0 4px",margin:"4px"})),x(n,"click",(function(){c(e[1])&&e[1].apply(this,arguments)}))],s=!0)},p(t,[n]){e=t,1&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,e[0])},i:t,o:t,d(t){t&&b(n),s=!1,r(l)}}}function gt(t,e,n){let{emoji:o}=e,{onClick:r}=e;return t.$$set=t=>{"emoji"in t&&n(0,o=t.emoji),"onClick"in t&&n(1,r=t.onClick)},[o,r]}class ht extends lt{constructor(t){super(),st(this,t,gt,mt,s,{emoji:0,onClick:1})}}function $t(e){let n,o,s;return{c(){n=w("button"),n.textContent="🔐",_(n,"type","button")},m(t,r){$(t,n,r),o||(s=[i(it.call(null,n,{background:"none",border:"none",cursor:"pointer",fontSize:"28px",lineHeight:1,margin:"4px",textAlign:"center",padding:"4px",position:"absolute",top:0,left:0})),x(n,"click",(function(){c(e[0])&&e[0].apply(this,arguments)}))],o=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&b(n),o=!1,r(s)}}}function bt(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(0,o=t.onClick)},[o]}class wt extends lt{constructor(t){super(),st(this,t,bt,$t,s,{onClick:0})}}const yt=t=>{const e=document.createElement("canvas");return e.style.cssText="width:100%",e.setAttribute("width",`${t.videoWidth}`),e.setAttribute("height",`${t.videoHeight}`),e.getContext("2d").drawImage(t,0,0,e.width,e.height),e},kt=[];function vt(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!kt.length;for(const t of r)t[1](),kt.push(t,e);if(t){for(let t=0;t<kt.length;t+=2)kt[t][0](kt[t+1]);kt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,l=t){const i=[s,l];return r.add(i),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}const xt=(t,e)=>parseInt(e.id,10)-parseInt(t.id,10),_t=(t,e)=>parseInt(t.id,10)-parseInt(e.id,10),Ct=(()=>{const{subscribe:t,set:e,update:n}=vt({captures:[],orderByDesc:!0}),o=t=>n((e=>({captures:e.captures.filter((e=>e.id!==t)),orderByDesc:e.orderByDesc})));return{subscribe:t,add:(t,e)=>n((n=>{return e.postMessage(t),{captures:(o=n,r=t,o.orderByDesc?[r,...o.captures]:[...o.captures,r]),orderByDesc:n.orderByDesc};var o,r})),remove:o,reset:()=>e({captures:[],orderByDesc:!0}),download:(t,e)=>{((t,e)=>{new Promise(((n,o)=>{try{const o=document.createElement("a");o.download=`${t}.png`,o.href=e,o.click(),o.remove(),n()}catch(t){}}))})(t,e),o(t)},changeOrder:(t=!0)=>n((e=>{const n=[...e.captures].sort(t?xt:_t);return console.log("order changed",n),{captures:n,orderByDesc:t}})),setDownloadLink:(t,e,o)=>n((n=>{const r=[...n.captures],c=r.findIndex((e=>e.id===t));if(c>-1){const n=r[c],l=document.createElement("a");l.download=`${t}.png`,l.href=e,n.aTag=l,n.size=o,console.log(`[Capture#${t}] create aTag: ${t}.png. ${s=o,`\n  [ファイルサイズ] メガバイト: ${s/1e6}mb\n  `}`)}var s;return{captures:r,orderByDesc:n.orderByDesc}}))}})(),Dt=(()=>{const{subscribe:t,set:e,update:n}=vt({canDownload:!1});return{subscribe:t,change:(t,e)=>n((n=>{const o=Object.assign({},n);return o[t]=e,o})),reset:()=>e({canDownload:!1})}})();function At(t){let e,n,o,c,s,l,a=t[2]&&Et(t);return{c(){e=w("div"),n=w("button"),n.textContent="🗑",o=k(),a&&a.c()},m(r,u){$(r,e,u),m(e,n),m(e,o),a&&a.m(e,null),s||(l=[x(n,"click",t[3]),i(c=it.call(null,e,{position:"absolute",top:0,left:0,zIndex:2}))],s=!0)},p(t,n){t[2]?a?a.p(t,n):(a=Et(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(t){t&&b(e),a&&a.d(),s=!1,r(l)}}}function Et(e){let n,o,r;return{c(){n=w("button"),n.textContent="💾"},m(t,c){$(t,n,c),o||(r=x(n,"click",e[4]),o=!0)},p:t,d(t){t&&b(n),o=!1,r()}}}function jt(e){let n,o,r,c=e[1]&&At(e);return{c(){n=w("div"),c&&c.c()},m(t,s){$(t,n,s),c&&c.m(n,null),e[6](n),o||(r=i(it.call(null,n,{width:"100%",position:"relative"})),o=!0)},p(t,[e]){t[1]?c?c.p(t,e):(c=At(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&b(n),c&&c.d(),e[6](null),o=!1,r()}}}function Rt(t,e,n){let o,r,{capture:c}=e,s=!1;S((()=>{r.appendChild(c.canvas),n(1,s=!0)}));return t.$$set=t=>{"capture"in t&&n(5,c=t.capture)},t.$$.update=()=>{32&t.$$.dirty&&n(2,o=null!=c.aTag)},[r,s,o,()=>{Ct.remove(c.id)},()=>{c.aTag.click(),Ct.remove(c.id)},c,function(t){T[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class Lt extends lt{constructor(t){super(),st(this,t,Rt,jt,s,{capture:5})}}function St(t,e,n){const o=t.slice();return o[13]=e[n],o}function Bt(t){let e,n,o,c,s,l,a,u,d,f,p,g,h,y,v,x,_,C=[],D=new Map;n=new wt({props:{onClick:t[8]}}),s=new ht({props:{emoji:"📸",onClick:t[4]}});let A=t[3].canDownload&&zt(t);u=new ht({props:{emoji:"🗑",onClick:t[9]}}),f=new ht({props:{emoji:t[2],onClick:t[6]}});let E=t[1].captures;const j=t=>t[13].id;for(let e=0;e<E.length;e+=1){let n=St(t,E,e),o=j(n);D.set(o,C[e]=Tt(o,n))}return{c(){e=w("div"),nt(n.$$.fragment),o=k(),c=w("div"),nt(s.$$.fragment),l=k(),A&&A.c(),a=k(),nt(u.$$.fragment),d=k(),nt(f.$$.fragment),g=k();for(let t=0;t<C.length;t+=1)C[t].c()},m(t,r){$(t,e,r),ot(n,e,null),m(e,o),m(e,c),ot(s,c,null),m(c,l),A&&A.m(c,null),m(c,a),ot(u,c,null),m(c,d),ot(f,c,null),m(e,g);for(let t=0;t<C.length;t+=1)C[t].m(e,null);v=!0,x||(_=[i(p=it.call(null,c,{textAlign:"center",borderRadius:"3px",padding:"4px",marginBottom:"1rem"})),i(h=it.call(null,e,{position:"fixed",top:"10%",right:0,height:"90%",padding:"0.5rem 1rem 4Zrem",borderLeft:"1 solid #aaa",background:"#fff",overflowY:"auto",width:"375px",border:"1px solid #000",zIndex:9999}))],x=!0)},p(t,o){const r={};1&o&&(r.onClick=t[8]),n.$set(r),t[3].canDownload?A?(A.p(t,o),8&o&&Q(A,1)):(A=zt(t),A.c(),Q(A,1),A.m(c,a)):A&&(G(),V(A,1,1,(()=>{A=null})),J());const s={};4&o&&(s.emoji=t[2]),f.$set(s),2&o&&(E=t[1].captures,G(),C=function(t,e,n,o,r,c,s,l,i,a,u,d){let f=t.length,p=c.length,m=f;const g={};for(;m--;)g[t[m].key]=m;const h=[],$=new Map,b=new Map;for(m=p;m--;){const t=d(r,c,m),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),$.set(l,h[m]=i),l in g&&b.set(l,Math.abs(m-g[l]))}const w=new Set,y=new Set;function k(t){Q(t,1),t.m(l,u),s.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,p--):$.has(r)?!s.has(o)||w.has(o)?k(e):y.has(r)?f--:b.get(o)>b.get(r)?(y.add(o),k(e)):(w.add(r),f--):(i(n,s),f--)}for(;f--;){const e=t[f];$.has(e.key)||i(e,s)}for(;p;)k(h[p-1]);return h}(C,o,j,1,t,E,D,e,et,Tt,null,St),J())},i(t){if(!v){Q(n.$$.fragment,t),Q(s.$$.fragment,t),Q(A),Q(u.$$.fragment,t),Q(f.$$.fragment,t);for(let t=0;t<E.length;t+=1)Q(C[t]);I((()=>{y||(y=tt(e,pt,{x:375,opacity:1},!0)),y.run(1)})),v=!0}},o(t){V(n.$$.fragment,t),V(s.$$.fragment,t),V(A),V(u.$$.fragment,t),V(f.$$.fragment,t);for(let t=0;t<C.length;t+=1)V(C[t]);y||(y=tt(e,pt,{x:375,opacity:1},!1)),y.run(0),v=!1},d(t){t&&b(e),rt(n),rt(s),A&&A.d(),rt(u),rt(f);for(let t=0;t<C.length;t+=1)C[t].d();t&&y&&y.end(),x=!1,r(_)}}}function zt(e){let n,o;return n=new ht({props:{emoji:"💾",onClick:e[5]}}),{c(){nt(n.$$.fragment)},m(t,e){ot(n,t,e),o=!0},p:t,i(t){o||(Q(n.$$.fragment,t),o=!0)},o(t){V(n.$$.fragment,t),o=!1},d(t){rt(n,t)}}}function Tt(t,e){let n,o,r;return o=new Lt({props:{capture:e[13]}}),{key:t,first:null,c(){n=v(),nt(o.$$.fragment),this.first=n},m(t,e){$(t,n,e),ot(o,t,e),r=!0},p(t,n){e=t;const r={};2&n&&(r.capture=e[13]),o.$set(r)},i(t){r||(Q(o.$$.fragment,t),r=!0)},o(t){V(o.$$.fragment,t),r=!1},d(t){t&&b(n),rt(o,t)}}}function Mt(t){let e,n,o=t[0]&&Bt(t);return{c(){o&&o.c(),e=v()},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&Q(o,1)):(o=Bt(t),o.c(),Q(o,1),o.m(e.parentNode,e)):o&&(G(),V(o,1,1,(()=>{o=null})),J())},i(t){n||(Q(o),n=!0)},o(t){V(o),n=!1},d(t){o&&o.d(t),t&&b(e)}}}function Ot(t,e,n){let o,r,c;l(t,Ct,(t=>n(1,r=t))),l(t,Dt,(t=>n(3,c=t)));let{show:s=!1}=e,{video:i}=e,a=0;const u=(d="WorkerPool",L().$$.context.get(d));var d;const f=()=>{var t;Ct.add((t=i,{id:Date.now().toString(),canvas:yt(t)}),u[a]),a=a+1===u.length?0:a+1},p=t=>{if(t.shiftKey){if(t.metaKey)return f();if(t.altKey){const t=r.orderByDesc?0:r.captures.length-1;return Ct.remove(r.captures[t].id)}"Z"!==t.key||n(0,s=!s)}};S((()=>{window.addEventListener("keydown",p)})),B((()=>{window.removeEventListener("keydown",p)}));return t.$$set=t=>{"show"in t&&n(0,s=t.show),"video"in t&&n(7,i=t.video)},t.$$.update=()=>{2&t.$$.dirty&&n(2,o=r.orderByDesc?"最新順":"撮影順")},[s,r,o,c,f,()=>{const t=Date.now();let e=r.captures.length;console.log("[Download All] download start"),r.captures.forEach((t=>{const n=(t=>{const e=t/1e6;return e>=5?1250:e>=3?1e3:e>=1.5?750:e>=1?500:e>=.5?250:100})(t.size);t.aTag.click(),console.log(`sleep start: ${n}ms`),((t=1e3)=>{const e=new Date;for(;;)if(Date.now()-e.getTime()>t){console.log(Date.now()-e.getTime()+"ms経過。Sleep終了");break}})(n),console.log(`[Capture#${t.id}] download`),console.log("[Download All] remain: "+--e)})),console.log(`[Download All] download end: ${Date.now()-t}ms`),Ct.reset()},()=>{Ct.changeOrder(!r.orderByDesc)},i,()=>n(0,s=!1),()=>{Ct.reset()}]}class Pt extends lt{constructor(t){super(),st(this,t,Ot,Mt,s,{show:0,video:7})}}var Ut=()=>{self.onmessage=t=>{const{type:e,id:n,blob:o}=t.data;switch(e){case"DATA_URL":const t=o.size,e=new FileReader;e.readAsDataURL(o),e.onload=()=>{const o=e.result;postMessage({id:n,dataURL:o,size:t})}}}};const It=()=>{const t=(t=>{const e=t.toString(),n=new Blob([`(${e})()`]),o=URL.createObjectURL(n),r=new Worker(o);return r&&URL.revokeObjectURL(o),r})(Ut),e=(t=>{let e=1e3;return t&&(e=t),(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)})();console.log(`[Worker] generated #${e}`),t.onmessage=t=>{const{id:e,dataURL:n,size:o}=t.data;Ct.setDownloadLink(e,n,o),console.log(`[Worker#${e}] onmessage: capture#${e}`)};return{id:e,postMessage:async n=>{console.log(`[Worker#${e}] postMessage: capture#${n.id}`);try{const e=await(o=n.canvas,new Promise(((t,e)=>{o.toBlob((e=>t(e)))})));t.postMessage({type:"DATA_URL",id:n.id,blob:e})}catch(t){console.log("download非対応")}var o},terminate:()=>{console.log(`[Worker] terminate #${e}`),t.terminate()}}};function Wt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Nt(t){let e,n;return e=new Pt({props:{show:t[0],video:t[5]}}),{c(){nt(e.$$.fragment)},m(t,o){ot(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.show=t[0]),e.$set(o)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}function qt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Ft(t){let e,n,o,r;e=new dt({props:{onClick:t[3]}});let c={ctx:t,current:null,token:null,hasCatch:!1,pending:qt,then:Nt,catch:Wt,value:5,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(G(),V(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),J())})):e.block.d(1),l.c(),Q(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&q()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=L();if(t.then((t=>{R(n),o(e.then,1,e.value,t),R(null)}),(t=>{if(R(n),o(e.catch,2,e.error,t),R(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(t[1],c),{c(){nt(e.$$.fragment),n=k(),o=v(),c.block.c()},m(t,s){ot(e,t,s),$(t,n,s),$(t,o,s),c.block.m(t,c.anchor=s),c.mount=()=>o.parentNode,c.anchor=o,r=!0},p(n,[o]){t=n;const r={};1&o&&(r.onClick=t[3]),e.$set(r),function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(c,t,o)},i(t){r||(Q(e.$$.fragment,t),Q(c.block),r=!0)},o(t){V(e.$$.fragment,t);for(let t=0;t<3;t+=1){V(c.blocks[t])}r=!1},d(t){rt(e,t),t&&b(n),t&&b(o),c.block.d(t),c.token=null,c=null}}}function Ht(t,e,n){let{host:o}=e,r=!1,c=((t,e)=>{const n=(o,r)=>t().then((t=>({result:t,isCompleted:null!==t}))).then((({result:t,isCompleted:c})=>c?o(t):(console.log(`Retry in ${e}ms`),setTimeout((()=>n(o,r)),e)))).catch(r);return new Promise(n)})((()=>{const t=(t=>{const e=document.querySelectorAll("video");switch(console.log(e),t){case"www.xvideos.com":{let t=null;return e.forEach((e=>{e.src.includes("blob")&&(t=e)})),t}case"jp.pornhub.com":const t=Array.from(e),n=t.pop();return n.currentSrc?n:t.pop();case"www.youtube.com":case"jp.spankbang.com":case"localhost":default:return e[0]}})(o);return Promise.resolve(t||null)}),100);const s=((t=1)=>[...Array(t)].map(((t,e)=>It())))(4);var l,i;l="WorkerPool",i=s,L().$$.context.set(l,i),B((()=>{s.forEach((t=>t.terminate()))}));return t.$$set=t=>{"host"in t&&n(2,o=t.host)},c.then((t=>{console.log(t);const e=(t=>{const e=yt(t);try{const t=e.toDataURL();return console.log("allowCors[ok]",t.length),!0}catch(t){return console.log("allowCors[ng]",t),!1}finally{e.remove()}})(t);console.log("[App] canDownload:",e),Dt.change("canDownload",e)})),[r,c,o,()=>n(0,r=!0)]}return new class extends lt{constructor(t){super(),st(this,t,Ht,Ft,s,{host:2})}}({target:document.body,props:{host:window.location.hostname}})}();