"use strict";var b=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var P=b(function(S,d){
var B=require('@stdlib/math-base-assert-is-positive-zero/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),y=require('@stdlib/math-base-assert-is-nan/dist');function D(e,a,t,g,o,x,l){var s,v,c,f,m,u,r,i,n,q;for(s=a.data,v=o.data,c=a.accessors[0],f=o.accessors[0],r=g,i=l,q=0;q<e&&f(v,i)!==0;q++)r+=t,i+=x;if(q===e)return NaN;if(u=c(s,r),y(u))return u;for(m=u,q+=1,q;q<e;q++)if(r+=t,i+=x,!f(v,i)){if(n=c(s,r),y(n))return n;n<u||n===u&&C(n)?u=n:(n>m||n===m&&B(n))&&(m=n)}return(m+u)/2}d.exports=D
});var p=b(function(T,O){
var E=require('@stdlib/math-base-assert-is-positive-zero/dist'),F=require('@stdlib/math-base-assert-is-negative-zero/dist'),Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),G=P();function H(e,a,t,g,o,x,l){var s,v,c,f,m,u,r,i;if(e<=0)return NaN;if(m=j(a),u=j(o),m.accessorProtocol||u.accessorProtocol)return G(e,m,t,g,u,x,l);for(c=g,f=l,i=0;i<e&&o[f]!==0;i++)c+=t,f+=x;if(i===e)return NaN;if(v=a[c],Z(v))return v;for(s=v,i+=1,i;i<e;i++)if(c+=t,f+=x,!o[f]){if(r=a[c],Z(r))return r;r<v||r===v&&F(r)?v=r:(r>s||r===s&&E(r))&&(s=r)}return(s+v)/2}O.exports=H
});var k=b(function(U,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),I=p();function J(e,a,t,g,o){return I(e,a,t,R(e,t),g,o,R(e,o))}h.exports=J
});var A=b(function(V,z){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=k(),L=p();K(w,"ndarray",L);z.exports=w
});var N=A();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
