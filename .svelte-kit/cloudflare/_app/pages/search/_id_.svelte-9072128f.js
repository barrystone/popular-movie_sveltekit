import{S as H,i as I,s as N,w as P,x as V,y as Y,q as z,o as w,B as F,e as g,t as p,k as J,c as b,a as y,h as C,d as f,m as K,b as k,g as T,G as _,j as D,p as L,Y as O,n as Q}from"../../chunks/vendor-069a40fc.js";import{M as R}from"../../chunks/MovieCard-e2fec08d.js";function U(r,a,n){const t=r.slice();return t[3]=a[n],t}function A(r){let a,n;return a=new R({props:{movie:r[3]}}),{c(){P(a.$$.fragment)},l(t){V(a.$$.fragment,t)},m(t,c){Y(a,t,c),n=!0},p(t,c){const i={};c&4&&(i.movie=t[3]),a.$set(i)},i(t){n||(z(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){F(a,t)}}}function W(r){let a,n,t,c,i,h,B,d,S,x,u,m,v=r[2],o=[];for(let e=0;e<v.length;e+=1)o[e]=A(U(r,v,e));const G=e=>w(o[e],1,1,()=>{o[e]=null});return{c(){a=g("h3"),n=p("Searched Movies "),t=g("span"),c=p("input: "),i=g("b"),h=p(r[0]),B=p(", count: "),d=g("b"),S=p(r[1]),x=J(),u=g("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){a=b(e,"H3",{class:!0});var l=y(a);n=C(l,"Searched Movies "),t=b(l,"SPAN",{class:!0});var s=y(t);c=C(s,"input: "),i=b(s,"B",{class:!0});var M=y(i);h=C(M,r[0]),M.forEach(f),B=C(s,", count: "),d=b(s,"B",{class:!0});var q=y(d);S=C(q,r[1]),q.forEach(f),s.forEach(f),l.forEach(f),x=K(e),u=b(e,"DIV",{class:!0});var j=y(u);for(let E=0;E<o.length;E+=1)o[E].l(j);j.forEach(f),this.h()},h(){k(i,"class","svelte-13bt41z"),k(d,"class","svelte-13bt41z"),k(t,"class","svelte-13bt41z"),k(a,"class","svelte-13bt41z"),k(u,"class","searched-movies svelte-13bt41z")},m(e,l){T(e,a,l),_(a,n),_(a,t),_(t,c),_(t,i),_(i,h),_(t,B),_(t,d),_(d,S),T(e,x,l),T(e,u,l);for(let s=0;s<o.length;s+=1)o[s].m(u,null);m=!0},p(e,[l]){if((!m||l&1)&&D(h,e[0]),(!m||l&2)&&D(S,e[1]),l&4){v=e[2];let s;for(s=0;s<v.length;s+=1){const M=U(e,v,s);o[s]?(o[s].p(M,l),z(o[s],1)):(o[s]=A(M),o[s].c(),z(o[s],1),o[s].m(u,null))}for(Q(),s=v.length;s<o.length;s+=1)G(s);L()}},i(e){if(!m){for(let l=0;l<v.length;l+=1)z(o[l]);m=!0}},o(e){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)w(o[l]);m=!1},d(e){e&&f(a),e&&f(x),e&&f(u),O(o,e)}}}async function ee({fetch:r,params:a}){const n=a.id,t=await r(`https://api.themoviedb.org/3/search/movie?api_key=22a2b619b5fe2221f6c9e2a24e7a28dd&language=en-US&page=1&include_adult=false&query=${n}`),c=await t.json();if(t.ok)return{props:{searchedMovie:c.results,searchedMovieCount:c.total_results,searchMovieText:n}}}function X(r,a,n){let{searchMovieText:t}=a,{searchedMovieCount:c}=a,{searchedMovie:i}=a;return r.$$set=h=>{"searchMovieText"in h&&n(0,t=h.searchMovieText),"searchedMovieCount"in h&&n(1,c=h.searchedMovieCount),"searchedMovie"in h&&n(2,i=h.searchedMovie)},[t,c,i]}class te extends H{constructor(a){super();I(this,a,X,W,N,{searchMovieText:0,searchedMovieCount:1,searchedMovie:2})}}export{te as default,ee as load};
