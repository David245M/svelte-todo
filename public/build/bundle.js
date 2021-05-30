var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function l(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){t.value=null==n?"":n}let g;function b(t){g=t}const y=[],x=[],k=[],v=[],w=Promise.resolve();let _=!1;function C(t){k.push(t)}let S=!1;const E=new Set;function O(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),A(n.$$)}for(b(null),y.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];E.has(n)||(E.add(n),n())}k.length=0}while(y.length);for(;v.length;)v.pop()();_=!1,S=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const D=new Set;let T;function M(){T={r:0,c:[],p:T}}function N(){T.r||c(T.c),T=T.p}function j(t,n){t&&t.i&&(D.delete(t),t.i(n))}function I(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),T.c.push((()=>{D.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t,n){I(t,1,1,(()=>{n.delete(t.key)}))}function L(t){t&&t.c()}function q(t,n,o,u){const{fragment:i,on_mount:l,on_destroy:s,after_update:f}=t.$$;i&&i.m(n,o),u||C((()=>{const n=l.map(e).filter(r);s?s.push(...n):c(n),t.$$.on_mount=[]})),f.forEach(C)}function B(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function P(t,n){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,w.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function W(n,e,r,u,i,l,s=[-1]){const a=g;b(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1};let p=!1;if(d.ctx=r?r(n,e.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=c)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](c),p&&P(n,t)),e})):[],d.update(),p=!0,c(d.before_update),d.fragment=!!u&&u(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();e.intro&&j(n.$$.fragment),q(n,e.target,e.anchor,e.customElement),O()}b(a)}class z{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const F=[];const G="todos";const H=function(){const n=JSON.parse(localStorage.getItem(G))||[],{subscribe:e,update:o}=function(n,e=t){let o;const c=[];function r(t){if(u(n,t)&&(n=t,o)){const t=!F.length;for(let t=0;t<c.length;t+=1){const e=c[t];e[1](),F.push(e,n)}if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(u,i=t){const l=[u,i];return c.push(l),1===c.length&&(o=e(r)||t),u(n),()=>{const t=c.indexOf(l);-1!==t&&c.splice(t,1),0===c.length&&(o(),o=null)}}}}(n),c=t=>{o((n=>n.map((n=>n.id!==t.id?n:{...n,...t}))))};return e((t=>localStorage.setItem(G,JSON.stringify(t)))),{subscribe:e,edit:c,add:t=>{o((n=>[...n,t]))},check:t=>{c({id:t,checked:!0})},rename:(t,n)=>{c({id:t,title:n})},remove:(...t)=>{o((n=>n.filter((n=>!t.includes(n.id)))))},removeChecked:()=>{const t=t=>!t.checked;o((n=>n.filter(t)))}}}();function K(n){let e,o,r,u,i,d;return{c(){e=a("form"),o=a("input"),r=p(),u=a("button"),u.textContent="Add Todo",$(o,"placeholder","TODO title"),$(u,"type","submit"),$(u,"class","pure-button pure-button-primary")},m(t,c){var f;s(t,e,c),l(e,o),m(o,n[0]),l(e,r),l(e,u),i||(d=[h(o,"input",n[2]),h(e,"submit",(f=n[1],function(t){return t.preventDefault(),f.call(this,t)}))],i=!0)},p(t,[n]){1&n&&o.value!==t[0]&&m(o,t[0])},i:t,o:t,d(t){t&&f(e),i=!1,c(d)}}}function Q(t,n,e){let o="";return[o,function(){H.add({title:o,checked:!1,id:(new Date).getTime()}),e(0,o="")},function(){o=this.value,e(0,o)}]}class R extends z{constructor(t){super(),W(this,t,Q,K,u,{})}}function U(n){let e,o,c;return{c(){e=a("button"),e.textContent="Delete All",$(e,"type","button")},m(t,r){s(t,e,r),o||(c=h(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&f(e),o=!1,c()}}}function V(t,n,e){let o,c;return i(t,H,(t=>e(1,o=t))),t.$$.update=()=>{2&t.$$.dirty&&(c=o.map((t=>t.id)))},[function(){H.remove(...c)},o]}class X extends z{constructor(t){super(),W(this,t,V,U,u,{})}}function Y(n){let e,o,c;return{c(){e=a("button"),e.textContent="Delete done",$(e,"type","button")},m(t,r){s(t,e,r),o||(c=h(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&f(e),o=!1,c()}}}function Z(t){return[function(){H.removeChecked()}]}class tt extends z{constructor(t){super(),W(this,t,Z,Y,u,{})}}function nt(n){let e,o,c,r,u,i,d;return o=new R({}),r=new tt({}),i=new X({}),{c(){e=a("header"),L(o.$$.fragment),c=p(),L(r.$$.fragment),u=p(),L(i.$$.fragment),$(e,"class","svelte-p7iy04")},m(t,n){s(t,e,n),q(o,e,null),l(e,c),q(r,e,null),l(e,u),q(i,e,null),d=!0},p:t,i(t){d||(j(o.$$.fragment,t),j(r.$$.fragment,t),j(i.$$.fragment,t),d=!0)},o(t){I(o.$$.fragment,t),I(r.$$.fragment,t),I(i.$$.fragment,t),d=!1},d(t){t&&f(e),B(o),B(r),B(i)}}}class et extends z{constructor(t){super(),W(this,t,null,nt,u,{})}}function ot(n){let e,o,c;return{c(){e=a("button"),e.textContent="Delete"},m(t,r){s(t,e,r),o||(c=h(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&f(e),o=!1,c()}}}function ct(t,n,e){let{id:o}=n;return t.$$set=t=>{"id"in t&&e(1,o=t.id)},[function(){H.remove(o)},o]}class rt extends z{constructor(t){super(),W(this,t,ct,ot,u,{id:1})}}function ut(n){let e,o,r,u,i;return{c(){e=a("input"),o=p(),r=a("button"),r.textContent="Save",$(e,"class","svelte-x3ndw9")},m(t,c){s(t,e,c),m(e,n[0]),s(t,o,c),s(t,r,c),u||(i=[h(e,"input",n[7]),h(r,"click",n[5])],u=!0)},p(t,n){1&n&&e.value!==t[0]&&m(e,t[0])},i:t,o:t,d(t){t&&f(e),t&&f(o),t&&f(r),u=!1,c(i)}}}function it(t){let n,e,o,r,u,i,m,g,b,y,x,k;return b=new rt({props:{id:t[1]}}),{c(){n=a("label"),e=a("input"),o=p(),r=a("span"),u=d(t[0]),i=p(),m=a("button"),m.textContent="Edit",g=p(),L(b.$$.fragment),$(e,"type","checkbox"),e.checked=t[2],$(e,"class","svelte-x3ndw9"),$(r,"class","svelte-x3ndw9"),$(n,"class","svelte-x3ndw9")},m(c,f){s(c,n,f),l(n,e),l(n,o),l(n,r),l(r,u),l(n,i),l(n,m),l(n,g),q(b,n,null),y=!0,x||(k=[h(e,"change",t[6]),h(m,"click",t[4])],x=!0)},p(t,n){(!y||4&n)&&(e.checked=t[2]),(!y||1&n)&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(u,t[0]);const o={};2&n&&(o.id=t[1]),b.$set(o)},i(t){y||(j(b.$$.fragment,t),y=!0)},o(t){I(b.$$.fragment,t),y=!1},d(t){t&&f(n),B(b),x=!1,c(k)}}}function lt(t){let n,e,o,c;const r=[it,ut],u=[];function i(t,n){return t[3]?1:0}return e=i(t),o=u[e]=r[e](t),{c(){n=a("li"),o.c()},m(t,o){s(t,n,o),u[e].m(n,null),c=!0},p(t,[c]){let l=e;e=i(t),e===l?u[e].p(t,c):(M(),I(u[l],1,1,(()=>{u[l]=null})),N(),o=u[e],o?o.p(t,c):(o=u[e]=r[e](t),o.c()),j(o,1),o.m(n,null))},i(t){c||(j(o),c=!0)},o(t){I(o),c=!1},d(t){t&&f(n),u[e].d()}}}function st(t,n,e){let{title:o}=n,{id:c}=n,{checked:r}=n,u=!1;return t.$$set=t=>{"title"in t&&e(0,o=t.title),"id"in t&&e(1,c=t.id),"checked"in t&&e(2,r=t.checked)},[o,c,r,u,function(){e(3,u=!0)},function(){H.rename(c,o),e(3,u=!1)},function(){H.check(c)},function(){o=this.value,e(0,o)}]}class ft extends z{constructor(t){super(),W(this,t,st,lt,u,{title:0,id:1,checked:2})}}function at(t,n,e){const o=t.slice();return o[1]=n[e],o}function dt(t){let n;return{c(){n=a("p"),n.textContent="Wow... so empty...\r\n    ",$(n,"class","svelte-yibrov")},m(t,e){s(t,n,e)},d(t){t&&f(n)}}}function pt(t,e){let o,c,r;const u=[e[1]];let i={};for(let t=0;t<u.length;t+=1)i=n(i,u[t]);return c=new ft({props:i}),{key:t,first:null,c(){o=d(""),L(c.$$.fragment),this.first=o},m(t,n){s(t,o,n),q(c,t,n),r=!0},p(t,n){e=t;const o=1&n?function(t,n){const e={},o={},c={$$scope:1};let r=t.length;for(;r--;){const u=t[r],i=n[r];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)c[t]||(e[t]=i[t],c[t]=1);t[r]=i}else for(const t in u)c[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(u,[(r=e[1],"object"==typeof r&&null!==r?r:{})]):{};var r;c.$set(o)},i(t){r||(j(c.$$.fragment,t),r=!0)},o(t){I(c.$$.fragment,t),r=!1},d(t){t&&f(o),B(c,t)}}}function ht(t){let n,e,o=[],c=new Map,r=t[0];const u=t=>t[1].id;for(let n=0;n<r.length;n+=1){let e=at(t,r,n),i=u(e);c.set(i,o[n]=pt(i,e))}let i=null;return r.length||(i=dt()),{c(){n=a("ul");for(let t=0;t<o.length;t+=1)o[t].c();i&&i.c()},m(t,c){s(t,n,c);for(let t=0;t<o.length;t+=1)o[t].m(n,null);i&&i.m(n,null),e=!0},p(t,[e]){1&e&&(r=t[0],M(),o=function(t,n,e,o,c,r,u,i,l,s,f,a){let d=t.length,p=r.length,h=d;const $={};for(;h--;)$[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=p;h--;){const t=a(c,r,h),i=e(t);let l=u.get(i);l?o&&l.p(t,n):(l=s(i,t),l.c()),g.set(i,m[h]=l),i in $&&b.set(i,Math.abs(h-$[i]))}const y=new Set,x=new Set;function k(t){j(t,1),t.m(i,f),u.set(t.key,t),f=t.first,p--}for(;d&&p;){const n=m[p-1],e=t[d-1],o=n.key,c=e.key;n===e?(f=n.first,d--,p--):g.has(c)?!u.has(o)||y.has(o)?k(n):x.has(c)?d--:b.get(o)>b.get(c)?(x.add(o),k(n)):(y.add(c),d--):(l(e,u),d--)}for(;d--;){const n=t[d];g.has(n.key)||l(n,u)}for(;p;)k(m[p-1]);return m}(o,e,u,1,t,r,c,n,J,pt,null,at),N(),r.length?i&&(i.d(1),i=null):i||(i=dt(),i.c(),i.m(n,null)))},i(t){if(!e){for(let t=0;t<r.length;t+=1)j(o[t]);e=!0}},o(t){for(let t=0;t<o.length;t+=1)I(o[t]);e=!1},d(t){t&&f(n);for(let t=0;t<o.length;t+=1)o[t].d();i&&i.d()}}}function $t(t,n,e){let o;return i(t,H,(t=>e(0,o=t))),[o]}class mt extends z{constructor(t){super(),W(this,t,$t,ht,u,{})}}function gt(n){let e,o,c,r,u,i,d;return r=new et({}),i=new mt({}),{c(){e=a("main"),o=a("h1"),o.textContent="This is my first Svelte app",c=p(),L(r.$$.fragment),u=p(),L(i.$$.fragment)},m(t,n){s(t,e,n),l(e,o),l(e,c),q(r,e,null),l(e,u),q(i,e,null),d=!0},p:t,i(t){d||(j(r.$$.fragment,t),j(i.$$.fragment,t),d=!0)},o(t){I(r.$$.fragment,t),I(i.$$.fragment,t),d=!1},d(t){t&&f(e),B(r),B(i)}}}return new class extends z{constructor(t){super(),W(this,t,null,gt,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
