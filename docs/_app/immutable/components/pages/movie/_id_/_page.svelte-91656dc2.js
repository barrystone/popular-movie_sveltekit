import{S as ht,i as mt,s as ft,k as a,a as p,q as l,l as r,m as u,h as o,c as h,r as n,R as gt,n as c,b as qt,B as t,A as et}from"../../../../chunks/index-b4eb67ee.js";function bt(d){let i,m,v,A,f,_,g,st=d[0].title+"",y,D,q,at=d[0].overview+"",I,N,e,b,V,k,lt=d[0].release_date+"",w,C,G,H,R,M,j,rt=d[0].budget+"",z,F,J,K,E,L,O,nt=d[0].vote_average+"",Q,T,U,W,B,X,Y,it=d[0].runtime+"",Z,x,tt;return{c(){i=a("div"),m=a("div"),v=a("img"),f=p(),_=a("div"),g=a("h1"),y=l(st),D=p(),q=a("p"),I=l(at),N=p(),e=a("p"),b=a("span"),V=l("Release date:"),k=l(`\xA0
      `),w=l(lt),C=p(),G=a("br"),H=p(),R=a("span"),M=l("Budget:"),j=l("\xA0 $"),z=l(rt),F=p(),J=a("br"),K=p(),E=a("span"),L=l("Rating:"),O=l("\xA0 $"),Q=l(nt),T=p(),U=a("br"),W=p(),B=a("span"),X=l("Runtime:"),Y=l("\xA0 $"),Z=l(it),x=l(`mins
      `),tt=a("br"),this.h()},l(S){i=r(S,"DIV",{class:!0});var P=u(i);m=r(P,"DIV",{class:!0});var ct=u(m);v=r(ct,"IMG",{src:!0,alt:!0,class:!0}),ct.forEach(o),f=h(P),_=r(P,"DIV",{class:!0});var $=u(_);g=r($,"H1",{class:!0});var dt=u(g);y=n(dt,st),dt.forEach(o),D=h($),q=r($,"P",{class:!0});var vt=u(q);I=n(vt,at),vt.forEach(o),N=h($),e=r($,"P",{class:!0});var s=u(e);b=r(s,"SPAN",{class:!0});var ot=u(b);V=n(ot,"Release date:"),ot.forEach(o),k=n(s,`\xA0
      `),w=n(s,lt),C=h(s),G=r(s,"BR",{}),H=h(s),R=r(s,"SPAN",{class:!0});var _t=u(R);M=n(_t,"Budget:"),_t.forEach(o),j=n(s,"\xA0 $"),z=n(s,rt),F=h(s),J=r(s,"BR",{}),K=h(s),E=r(s,"SPAN",{class:!0});var ut=u(E);L=n(ut,"Rating:"),ut.forEach(o),O=n(s,"\xA0 $"),Q=n(s,nt),T=h(s),U=r(s,"BR",{}),W=h(s),B=r(s,"SPAN",{class:!0});var pt=u(B);X=n(pt,"Runtime:"),pt.forEach(o),Y=n(s,"\xA0 $"),Z=n(s,it),x=n(s,`mins
      `),tt=r(s,"BR",{}),s.forEach(o),$.forEach(o),P.forEach(o),this.h()},h(){gt(v.src,A=`https://image.tmdb.org/t/p/original/${d[0].backdrop_path}`)||c(v,"src",A),c(v,"alt",d[0].title),c(v,"class","svelte-s71tqd"),c(m,"class","img-container svelte-s71tqd"),c(g,"class","svelte-s71tqd"),c(q,"class","overview svelte-s71tqd"),c(b,"class","svelte-s71tqd"),c(R,"class","svelte-s71tqd"),c(E,"class","svelte-s71tqd"),c(B,"class","svelte-s71tqd"),c(e,"class","svelte-s71tqd"),c(_,"class","txt-container"),c(i,"class","movie-details svelte-s71tqd")},m(S,P){qt(S,i,P),t(i,m),t(m,v),t(i,f),t(i,_),t(_,g),t(g,y),t(_,D),t(_,q),t(q,I),t(_,N),t(_,e),t(e,b),t(b,V),t(e,k),t(e,w),t(e,C),t(e,G),t(e,H),t(e,R),t(R,M),t(e,j),t(e,z),t(e,F),t(e,J),t(e,K),t(e,E),t(E,L),t(e,O),t(e,Q),t(e,T),t(e,U),t(e,W),t(e,B),t(B,X),t(e,Y),t(e,Z),t(e,x),t(e,tt)},p:et,i:et,o:et,d(S){S&&o(i)}}}function Rt(d,i,m){let{data:v}=i;const{movieDetail:A}=v;return d.$$set=f=>{"data"in f&&m(1,v=f.data)},[A,v]}class Bt extends ht{constructor(i){super(),mt(this,i,Rt,bt,ft,{data:1})}}export{Bt as default};
