import{F as q,S as y,i as E,s as N,e as p,t as H,c as f,a as d,h as M,d as c,b as u,g as _,G as m,j as S,H as b,I as k,J as w,k as g,w as A,K as B,m as v,x as C,y as j,L as x,M as F,N as G,q as h,o as $,B as I}from"../chunks/vendor-069a40fc.js";const J=()=>{const t=q("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},K={subscribe(t){return J().page.subscribe(t)}};function L(t){let a,n,i;return{c(){a=p("nav"),n=p("a"),i=H(t[0]),this.h()},l(s){a=f(s,"NAV",{class:!0});var o=d(a);n=f(o,"A",{href:!0,class:!0});var r=d(n);i=M(r,t[0]),r.forEach(c),o.forEach(c),this.h()},h(){u(n,"href","/"),u(n,"class","svelte-n3f8sb"),u(a,"class","svelte-n3f8sb")},m(s,o){_(s,a,o),m(a,n),m(n,i)},p(s,[o]){o&1&&S(i,s[0])},i:b,o:b,d(s){s&&c(a)}}}function O(t,a,n){let i,s;return k(t,K,o=>n(1,s=o)),t.$$.update=()=>{t.$$.dirty&2&&n(0,i=s.url.pathname==="/"?"HOME":"Back to Home")},[i,s]}class P extends y{constructor(a){super();E(this,a,O,L,N,{})}}function V(t){let a,n,i,s;n=new P({});const o=t[1].default,r=w(o,t,t[0],null);return{c(){a=g(),A(n.$$.fragment),i=g(),r&&r.c(),this.h()},l(e){B('[data-svelte="svelte-16r69nb"]',document.head).forEach(c),a=v(e),C(n.$$.fragment,e),i=v(e),r&&r.l(e),this.h()},h(){document.title="Popular Movie"},m(e,l){_(e,a,l),j(n,e,l),_(e,i,l),r&&r.m(e,l),s=!0},p(e,[l]){r&&r.p&&(!s||l&1)&&x(r,o,e,e[0],s?G(o,e[0],l,null):F(e[0]),null)},i(e){s||(h(n.$$.fragment,e),h(r,e),s=!0)},o(e){$(n.$$.fragment,e),$(r,e),s=!1},d(e){e&&c(a),I(n,e),e&&c(i),r&&r.d(e)}}}function z(t,a,n){let{$$slots:i={},$$scope:s}=a;return t.$$set=o=>{"$$scope"in o&&n(0,s=o.$$scope)},[s,i]}class Q extends y{constructor(a){super();E(this,a,z,V,N,{})}}export{Q as default};
