import{S as P,i as Z,s as y,e as h,k as D,t as G,c as d,a as p,d as m,m as H,h as S,Z as V,b as l,g as z,G as i,j as k,H as A}from"./vendor-069a40fc.js";function B(o){let e,r,t,v,g,j,$,c,_,f=o[0].title+"",b,C,n,u=o[0].release_date+"",E;return{c(){e=h("div"),r=h("a"),t=h("img"),$=D(),c=h("div"),_=h("h2"),b=G(f),C=D(),n=h("p"),E=G(u),this.h()},l(s){e=d(s,"DIV",{class:!0});var a=p(e);r=d(a,"A",{href:!0});var I=p(r);t=d(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(m),$=H(a),c=d(a,"DIV",{class:!0});var M=p(c);_=d(M,"H2",{class:!0});var q=p(_);b=S(q,f),q.forEach(m),C=H(M),n=d(M,"P",{class:!0});var w=p(n);E=S(w,u),w.forEach(m),M.forEach(m),a.forEach(m),this.h()},h(){V(t.src,v=`https://image.tmdb.org/t/p/w500${o[0].poster_path}`)||l(t,"src",v),l(t,"alt",g=o[0].title),l(t,"class","svelte-1bjjc80"),l(r,"href",j=`/movie/${o[0].id}`),l(_,"class","svelte-1bjjc80"),l(n,"class","svelte-1bjjc80"),l(c,"class","description svelte-1bjjc80"),l(e,"class","movie-card svelte-1bjjc80")},m(s,a){z(s,e,a),i(e,r),i(r,t),i(e,$),i(e,c),i(c,_),i(_,b),i(c,C),i(c,n),i(n,E)},p(s,[a]){a&1&&!V(t.src,v=`https://image.tmdb.org/t/p/w500${s[0].poster_path}`)&&l(t,"src",v),a&1&&g!==(g=s[0].title)&&l(t,"alt",g),a&1&&j!==(j=`/movie/${s[0].id}`)&&l(r,"href",j),a&1&&f!==(f=s[0].title+"")&&k(b,f),a&1&&u!==(u=s[0].release_date+"")&&k(E,u)},i:A,o:A,d(s){s&&m(e)}}}function F(o,e,r){let{movie:t}=e;return o.$$set=v=>{"movie"in v&&r(0,t=v.movie)},[t]}class K extends P{constructor(e){super();Z(this,e,F,B,y,{movie:0})}}export{K as M};
