import{S as E,i as q,s as A,k as m,q as H,l as p,m as h,r as N,h as c,n as u,b as _,B as d,u as k,A as $,C as w,D as B,a as v,v as C,E as M,c as g,w as S,x as D,F,G,H as L,f as y,t as b,y as O}from"../../chunks/index-b4eb67ee.js";import{p as P}from"../../chunks/stores-59bf42ca.js";import{b as f}from"../../chunks/paths-6cd3a76e.js";import"../../chunks/singletons-09bdf686.js";function V(l){let s,a,r;return{c(){s=m("nav"),a=m("a"),r=H(l[0]),this.h()},l(e){s=p(e,"NAV",{class:!0});var o=h(s);a=p(o,"A",{href:!0,class:!0});var n=h(a);r=N(n,l[0]),n.forEach(c),o.forEach(c),this.h()},h(){u(a,"href",f),u(a,"class","svelte-1e9i6a1"),u(s,"class","svelte-1e9i6a1")},m(e,o){_(e,s,o),d(s,a),d(a,r)},p(e,[o]){o&1&&k(r,e[0])},i:$,o:$,d(e){e&&c(s)}}}function W(l,s,a){let r,e;return w(l,P,o=>a(1,e=o)),l.$$.update=()=>{l.$$.dirty&2&&a(0,r=e.url.pathname.startsWith(f)&&e.url.pathname.length<=f.length+1?"HOME":"Back to Home")},[r,e]}class j extends E{constructor(s){super(),q(this,s,W,V,A,{})}}function x(l){let s,a,r,e;a=new j({});const o=l[1].default,n=B(o,l,l[0],null);return{c(){s=v(),C(a.$$.fragment),r=v(),n&&n.c(),this.h()},l(t){M('[data-svelte="svelte-16r69nb"]',document.head).forEach(c),s=g(t),S(a.$$.fragment,t),r=g(t),n&&n.l(t),this.h()},h(){document.title="Popular Movie"},m(t,i){_(t,s,i),D(a,t,i),_(t,r,i),n&&n.m(t,i),e=!0},p(t,[i]){n&&n.p&&(!e||i&1)&&F(n,o,t,t[0],e?L(o,t[0],i,null):G(t[0]),null)},i(t){e||(y(a.$$.fragment,t),y(n,t),e=!0)},o(t){b(a.$$.fragment,t),b(n,t),e=!1},d(t){t&&c(s),O(a,t),t&&c(r),n&&n.d(t)}}}function z(l,s,a){let{$$slots:r={},$$scope:e}=s;return l.$$set=o=>{"$$scope"in o&&a(0,e=o.$$scope)},[e,r]}class R extends E{constructor(s){super(),q(this,s,z,x,A,{})}}export{R as default};
