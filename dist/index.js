"use strict";var b=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var Z=b(function(N,P){
var A=require('@stdlib/math-base-assert-is-positive-zero/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist'),p=require('@stdlib/math-base-assert-is-nan/dist');function C(e,i,o,g,t,x,l){var s,v,f,c,m,n,r,a,u,q;for(s=i.data,v=t.data,f=i.accessors[0],c=t.accessors[0],r=g,a=l,q=0;q<e&&c(v,a)!==0;q++)r+=o,a+=x;if(q===e)return NaN;if(n=f(s,r),p(n))return n;for(m=n,q+=1,q;q<e;q++)if(r+=o,a+=x,!c(v,a)){if(u=f(s,r),p(u))return u;u<n||u===n&&B(u)?n=u:(u>m||u===m&&A(u))&&(m=u)}return(m+n)/2}P.exports=C
});var y=b(function(Q,O){
var D=require('@stdlib/math-base-assert-is-positive-zero/dist'),E=require('@stdlib/math-base-assert-is-negative-zero/dist'),d=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),F=Z();function G(e,i,o,g,t,x,l){var s,v,f,c,m,n,r,a;if(e<=0)return NaN;if(m=j(i),n=j(t),m.accessorProtocol||n.accessorProtocol)return F(e,m,o,g,n,x,l);for(f=g,c=l,a=0;a<e&&t[c]!==0;a++)f+=o,c+=x;if(a===e)return NaN;if(v=i[f],d(v))return v;for(s=v,a+=1,a;a<e;a++)if(f+=o,c+=x,!t[c]){if(r=i[f],d(r))return r;r<v||r===v&&E(r)?v=r:(r>s||r===s&&D(r))&&(s=r)}return(s+v)/2}O.exports=G
});var w=b(function(S,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(e,i,o,g,t){return H(e,i,o,R(e,o),g,t,R(e,t))}h.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),K=y();J(z,"ndarray",K);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
