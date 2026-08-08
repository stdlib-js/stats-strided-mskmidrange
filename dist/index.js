"use strict";var b=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var Z=b(function(N,P){
var A=require('@stdlib/math-base-assert-is-positive-zero/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist'),p=require('@stdlib/math-base-assert-is-nan/dist');function C(e,a,u,g,t,x,l){var s,v,f,c,m,n,r,i,o,q;for(s=a.data,v=t.data,f=a.accessors[0],c=t.accessors[0],r=g,i=l,q=0;q<e&&c(v,i)!==0;q++)r+=u,i+=x;if(q===e)return NaN;if(n=f(s,r),p(n))return n;for(m=n,q+=1,q;q<e;q++)if(r+=u,i+=x,!c(v,i)){if(o=f(s,r),p(o))return o;o<n||o===n&&B(o)?n=o:(o>m||o===m&&A(o))&&(m=o)}return(m+n)/2}P.exports=C
});var y=b(function(Q,O){
var D=require('@stdlib/math-base-assert-is-positive-zero/dist'),E=require('@stdlib/math-base-assert-is-negative-zero/dist'),d=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),F=Z();function G(e,a,u,g,t,x,l){var s,v,f,c,m,n,r,i;if(e<=0)return NaN;if(m=j(a),n=j(t),m.accessorProtocol||n.accessorProtocol)return F(e,m,u,g,n,x,l);for(f=g,c=l,i=0;i<e&&t[c]!==0;i++)f+=u,c+=x;if(i===e)return NaN;if(v=a[f],d(v))return v;for(s=v,i+=1,i;i<e;i++)if(f+=u,c+=x,!t[c]){if(r=a[f],d(r))return r;r<v||r===v&&E(r)?v=r:(r>s||r===s&&D(r))&&(s=r)}return(s+v)/2}O.exports=G
});var w=b(function(S,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(e,a,u,g,t){return H(e,a,u,R(e,u),g,t,R(e,t))}h.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),K=y();J(z,"ndarray",K);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
