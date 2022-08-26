#!/usr/bin/env node
"use strict";function M(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function g(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?M(
Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function z(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function I(r){var n;return r&&r.__esModule?r:(n=Object.create(null),r&&Object.keys(r).forEach(function(e){
var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{enumerable:!0,
get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}function U(e){var t,r=-1,n=null==e?0:e.length;for(
this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function V(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function F(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],
t[1])}function D(e){e=this.__data__=new vt(e),this.size=e.size}function B(e){var t=-1,r=null==e?0:e.length;for(
this.__data__=new yt;++t<r;)this.add(e[t])}function H(n,i){function o(){var e=arguments,t=i?i.apply(this,e):e[0],
r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
H.Cache||$r),o}function $(e){return void 0===e}function G(e){return o(e)}function J(e){return $(e)||Yo(e)}function w(e){
return ns(e)}function u(e){return ss(e)}function W(e){return ls(e)}function K(e,t){return Zn(e,t)}function a(e,t){
return si(e,t)}function Q(e,t=w,r=void 0){var n;return!!(void 0===r||Ve(n=e)&&a(xs(n),r))&&(n=void 0!==t?t:w,Ve(r=e)&&a(
ee(r),n))}function X(...e){return t=>K(e,e=>e(t))}function Y(e){return Ve(e)}function Z(e){if(void 0!==e&&""!==e
)return""+e}function ee(e,t=w){var r;return G(e)?(r=f(e,(e,t)=>t),bo(r,e=>t(e))):Y(e)?(r=Reflect.ownKeys(e),bo(r,e=>t(e)
)):[]}function te(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Z(e)}function re(e){if(u(e))switch(e){
case d.OPTIONS:return"options";case d.GET:return"get";case d.POST:return"post";case d.PUT:return"put";case d.DELETE:
return"delete";case d.PATCH:return"patch"}throw new TypeError("Unsupported value for stringifyRequestMethod(): "+e)}
function ne(e){return u(e)&&0<=e&&e<=5}function ie(e){if(ne(e))return e;if(w(e))switch(e=e.toLowerCase()){case"options":
return d.OPTIONS;case"get":return d.GET;case"post":return d.POST;case"put":return d.PUT;case"delete":return d.DELETE;
case"patch":return d.PATCH}throw new TypeError(`Cannot parse value "${e}" as a valid RequestMethod`)}function oe(e){if(
u(e))switch(e){case p.Continue:case p.SwitchingProtocols:case p.Processing:case p.CheckPoint:case p.OK:case p.Created:
case p.Accepted:case p.NonAuthoritativeInformation:case p.NoContent:case p.ResetContent:case p.PartialContent:
case p.MultiStatus:case p.AlreadyReported:case p.IMUsed:case p.MultipleChoices:case p.MovedPermanently:case p.Found:
case p.SeeOther:case p.NotModified:case p.TemporaryRedirect:case p.PermanentRedirect:case p.BadRequest:
case p.Unauthorized:case p.PaymentRequired:case p.Forbidden:case p.NotFound:case p.MethodNotAllowed:
case p.NotAcceptable:case p.ProxyAuthenticationRequired:case p.RequestTimeout:case p.Conflict:case p.Gone:
case p.LengthRequired:case p.PreconditionFailed:case p.PayloadTooLarge:case p.URITooLong:case p.UnsupportedMediaType:
case p.RequestedRangeNotSatisfiable:case p.ExpectationFailed:case p.IAmATeapot:case p.UnprocessableEntity:case p.Locked:
case p.FailedDependency:case p.TooEarly:case p.UpgradeRequired:case p.PreconditionRequired:case p.TooManyRequests:
case p.RequestHeaderFieldsTooLarge:case p.UnavailableForLegalReasons:case p.InternalServerError:case p.NotImplemented:
case p.BadGateway:case p.ServiceUnavailable:case p.GatewayTimeout:case p.HttpVersionNotSupported:
case p.VariantAlsoNegotiates:case p.InsufficientStorage:case p.LoopDetected:case p.BandwidthLimitExceeded:
case p.NotExtended:case p.NetworkAuthenticationRequired:return 1}}function se(e){switch(e){case p.Continue:
return"Continue";case p.SwitchingProtocols:return"Switching Protocols";case p.Processing:return"Processing";
case p.CheckPoint:return"Check Point";case p.OK:return"OK";case p.Created:return"Created";case p.Accepted:
return"Accepted";case p.NonAuthoritativeInformation:return"Non-Authoritative Information";case p.NoContent:
return"No Content";case p.ResetContent:return"Reset Content";case p.PartialContent:return"Partial Content";
case p.MultiStatus:return"Multi Status";case p.AlreadyReported:return"Already Reported";case p.IMUsed:return"IM Used";
case p.MultipleChoices:return"Multiple Choices";case p.MovedPermanently:return"Moved Permanently";case p.Found:
return"Found";case p.SeeOther:return"See Other";case p.NotModified:return"Not Modified";case p.TemporaryRedirect:
return"Temporary Redirect";case p.PermanentRedirect:return"Permanent Redirect";case p.BadRequest:return"Bad Request";
case p.Unauthorized:return"Unauthorized";case p.PaymentRequired:return"Payment Required";case p.Forbidden:
return"Forbidden";case p.NotFound:return"Not Found";case p.MethodNotAllowed:return"Method Not Allowed";
case p.NotAcceptable:return"Not Acceptable";case p.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case p.RequestTimeout:return"Request Timeout";case p.Conflict:return"Conflict";case p.Gone:return"Gone";
case p.LengthRequired:return"Length Required";case p.PreconditionFailed:return"Precondition Failed";
case p.PayloadTooLarge:return"Payload Too Large";case p.URITooLong:return"URI Too Long";case p.UnsupportedMediaType:
return"Unsupported Media Type";case p.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case p.ExpectationFailed:return"Expectation Failed";case p.IAmATeapot:return"I Am a Teapot";case p.UnprocessableEntity:
return"Unprocessable Entity";case p.Locked:return"Locked";case p.FailedDependency:return"Failed Dependency";
case p.TooEarly:return"Too Early";case p.UpgradeRequired:return"Upgrade Required";case p.PreconditionRequired:
return"Precondition Required";case p.TooManyRequests:return"Too Many Requests";case p.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case p.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case p.InternalServerError:return"Internal Server Error";case p.NotImplemented:return"Not Implemented";
case p.BadGateway:return"Bad Gateway";case p.ServiceUnavailable:return"Service Unavailable";case p.GatewayTimeout:
return"Gateway Timeout";case p.HttpVersionNotSupported:return"Http Version Not Supported";case p.VariantAlsoNegotiates:
return"Variant Also Negotiates";case p.InsufficientStorage:return"Insufficient Storage";case p.LoopDetected:
return"Loop Detected";case p.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case p.NotExtended:
return"Not Extended";case p.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}function ae(e,t=void 0){return new ya(e,t)}function ce(e){
return e&&e instanceof ya}function ue(){if("undefined"!=typeof window)return window}function le(e){return O.isObject(e
)&&O.hasPropertyMethods(e)&&G(e.methods)&&a(e.methods,ne)&&O.hasPropertyPaths(e)&&G(e.paths)&&a(e.paths,w)}function he(e
){if(u(e))switch(e){case m.JSON:case m.STRING:case m.INTEGER:case m.NUMBER:return!0}return!1}function de(e){
return!!e&&Y(e)&&O.everyPropertyIs(e,e=>w(e)||G(e)&&a(e,w))}function pe(e){return!!e&&(null==e?void 0:e.objectType
)===b.MODEL_ATTRIBUTE&&w(null==e?void 0:e.attributeName)&&he(null==e?void 0:e.valueType)}function we(e){return!!(t=e)&&(
null==t?void 0:t.objectType)===b.QUERY_PARAM&&w(null==t?void 0:t.queryParam)&&he(null==t?void 0:t.valueType)||!!e&&(
null==e?void 0:e.objectType)===b.REQUEST_BODY&&he(null==e?void 0:e.valueType)||!!(t=e)&&(null==t?void 0:t.objectType
)===b.REQUEST_HEADER&&w(null==t?void 0:t.headerName)&&Yo(null==t?void 0:t.isRequired)&&he(null==t?void 0:t.valueType)&&(
void 0===(null==t?void 0:t.defaultValue)||w(null==t?void 0:t.defaultValue))||!!e&&(null==e?void 0:e.objectType
)===b.REQUEST_HEADER_MAP&&(void 0===(null==e?void 0:e.defaultValues)||de(null==e?void 0:e.defaultValues))||!!(t=e)&&(
null==t?void 0:t.objectType)===b.PATH_VARIABLE&&w(null==t?void 0:t.variableName)&&Yo(null==t?void 0:t.isRequired)&&he(
null==t?void 0:t.valueType)&&(void 0===(null==t?void 0:t.defaultValue)||w(null==t?void 0:t.defaultValue))||!!e&&(
null==e?void 0:e.objectType)===b.PATH_VARIABLE_MAP&&(void 0===(null==e?void 0:e.defaultValues)||!!(
t=null==e?void 0:e.defaultValues)&&Y(t)&&O.everyPropertyIs(t,w))||pe(e);var t}function ge(e){return O.isObject(e
)&&O.hasPropertyMappings(e)&&G(e.mappings)&&a(e.mappings,le)&&O.hasPropertyParams(e)&&G(e.params)&&a(e.params,
O.createOrFunction(we,Zo))}function fe(e){if(!O.isObject(e))return"Value is not object";if(!O.hasPropertyMappings(e)
)return'Property "mappings" did not exist';if(!G(e.mappings))return'Property "mappings" was not an array';if(!a(
e.mappings,le))return'Property "mappings" had some elements which were not RequestMappingObject';if(
!O.hasPropertyParams(e))return'Property "params" did not exist';if(!G(e.params)
)return'Property "params" was not an array';const r=O.createOrFunction(we,Zo);return a(e.params,r
)?"ok":'Property "params" had some elements which were not RequestParamObject or null: '+bo(f(e.params,(e,t)=>r(e
)?"":`Item #${t} was not null or RequestParamObject`),e=>!!e).join(", ")}function ve(e){var t;return e&&(
!O.hasProperty__requestMappings(e)||(t=e=e[Oa],O.isObject(t)&&O.hasPropertyMappings(t)&&G(t.mappings)&&a(t.mappings,le
)&&O.hasPropertyControllerProperties(t)&&Y(t.controllerProperties)&&O.everyPropertyIs(t.controllerProperties,ge
)||void Aa.warn("The internal mapping object was not correct: "+JSON.stringify(e,null,2)+": "+(t=e,O.isObject(t
)?O.hasPropertyMappings(t)?G(t.mappings)?a(t.mappings,le)?O.hasPropertyControllerProperties(t)?Y(t.controllerProperties
)?O.everyPropertyIs(t.controllerProperties,ge
)?"ok":'Property "controllerProperties" was not valid: Some properties were not valid: '+O.explainEveryPropertyIs(
t.controllerProperties,ge,fe
):'Property "controllerProperties" was not valid: Property was not object':'Property "controllerProperties" was not valid: Property did not exist':'Property "mappings" was not valid: Some items were not valid':'Property "mappings" was not valid: Was not array':'Property "mappings" was not valid: Did not exist':"not object"
))))}function ye(e,t){if(O.hasProperty__requestMappings(e))return g(g({},e[Oa]),{},{controller:t})}function me(e,t){
const r=g({},t);v(r,"controller")&&delete r.controller,e[Oa]=r}function be(e){return w(t=e)||u(t)||Yo(t)||Zo(t)||Re(e
)||_e(e);var t}function _e(e){return!!Ve(t=e)&&!(t instanceof Date)&&!Be(t)&&!G(t)&&Q(t,w,void 0)&&Q(e,w,X(be,$));var t}
function Re(e){return[e,t=void 0,r=void 0,n=void 0]=[e,X(be,$)],!!o(e)&&(i=null!=(i=null==e?void 0:e.length)?i:0,!(
void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||a(e,t)));var t,r,n,i}function Ee(e){return e&&e instanceof Ca}
function Te(e){return u(e)}function Pe(e,t,r,n){var i,o,s=arguments.length,
a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if(
"object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(o=e.length-1;0<=o;o--
)(i=e[o])&&(a=(s<3?i(a):3<s?i(t,r,a):i(t,r))||a);return 3<s&&a&&Object.defineProperty(t,r,a),a}function qe(r,n){
return function(e,t){n(e,t,r)}}function xe(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata
)return Reflect.metadata(e,t)}function Se(e,t){return{error:e,code:t}}function Ae(e,t){for(var r=-1,n=null==e?0:e.length
,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Oe(e,t){return e===t||e!=e&&t!=t}function Ne(e,t){for(
var r=e.length;r--;)if(ia(e[r][0],t))return r;return-1}var Ce,ke,je,Le,Me,ze,Ie,Ue,Ve,Fe,De,Be,He,$e,Ge,Je,We,Ke,Qe,Xe,
Ye,Ze,et,tt,rt,nt,it,ot,st,at,ct,ut,lt,ht,dt,pt,wt,gt,ft,vt,yt,mt,bt,_t,Rt,Et,Tt,Pt,qt,xt,o,St,At,Ot,Nt,Ct,kt,jt,Lt,Mt,
zt,It,Ut,Vt,Ft,t,Dt,Bt,Ht,$t,Gt,Jt,Wt,Kt,Qt,Xt,Yt,Zt,er,tr,rr,nr,ir,or,sr,ar,cr,ur,lr,hr,dr,pr,wr,gr,fr,vr,yr,mr,br,_r,
Rr,Er,Tr,Pr,qr,xr,Sr,Ar,Or,Nr,Cr,kr,jr,Lr,Mr,zr,Ir,Ur,Vr,Fr,Dr,Br,Hr,$r,Gr,Jr,Wr,Kr,Qr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,cn,
un,ln,hn,dn,pn,wn,gn,fn,vn,yn,mn,bn,_n,Rn,En,e,Tn,Pn,qn,xn,Sn,An,On,Nn,Cn,kn,jn,Ln,Mn,zn,In,r,Un,Vn,Fn,Dn,f,Bn,Hn,$n,Gn,
Jn,Wn,Kn,Qn,Xn,Yn,Zn,ei,ti,ri,ni,ii,oi,si,ai,ci,ui,li,hi,di,pi,wi,gi,fi,vi,yi,mi,bi,_i,Ri,Ei,Ti,n,Pi,qi,xi,Si,Ai,Oi,Ni,
Ci,ki,ji,Li,Mi,zi,Ii,Ui,Vi,Fi,Di,Bi,Hi,$i,Gi,Ji,Wi,i,Ki,Qi,Xi,Yi,Zi,eo,to,ro,no,io,oo,so,ao,co,uo,lo,ho,po,wo,go,fo,vo,
yo,mo,bo,_o,Ro,Eo,To,Po,l,qo,xo,So,Ao,Oo,No,c,Co,ko,jo,Lo,Mo,zo,Io,Uo,Vo,Fo,Do,Bo,Ho,$o,Go,Jo,Wo,Ko,v,Qo,Xo,Yo,Zo,es,ts,
rs,ns,is,os,ss,as,cs,us,ls,hs,ds,ps,ws,gs,fs,vs,ys,ms,bs,_s,Rs,Es,Ts,Ps,qs,xs,h,d,p,Ss,y,As,m,b,Os,_,Ns,R,E,Cs,ks,T,js,
Ls,Ms,P,q,zs,Is,Us,Vs,Fs,Ds,Bs,Hs,$s,Gs,Js,Ws,x=require("fs"),S=require("path"),Ks=require("url"),Qs=require(
"querystring"),Xs=require("http"),Ys=require("net"),Zs=require("punycode"),ea=z(x),ta=z(S),ra=z(Ks),na=I(Qs),
x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ia=Oe,oa=Ne,sa=Array.prototype.splice,aa=Ne,ca=Ne,ua=Ne;U.prototype.clear=function(){this.__data__=[],this.size=0},
U.prototype.delete=function(e){var t=this.__data__;return!((e=oa(t,e))<0||(e==t.length-1?t.pop():sa.call(t,e,1),
--this.size,0))},U.prototype.get=function(e){var t=this.__data__;return(e=aa(t,e))<0?void 0:t[e][1]},
U.prototype.has=function(e){return-1<ca(this.__data__,e)},U.prototype.set=function(e,t){var r=this.__data__,n=ua(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ce=S=U,Qs=function(){this.__data__=new Ce,this.size=0},
Go=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},xo=function(e){return this.__data__.get(e)},
$i=function(e){return this.__data__.has(e)},x="object"==typeof x&&x&&x.Object===Object&&x,
n="object"==typeof self&&self&&self.Object===Object&&self,Is=(n=x||n||Function("return this")()).Symbol,
zs=Object.prototype,ke=zs.hasOwnProperty,je=zs.toString,Le=Is?Is.toStringTag:void 0,zs=Object.prototype,Me=zs.toString,
ze=function(e){var t,r,n=ke.call(e,Le),i=e[Le];try{t=!(e[Le]=void 0)}catch(e){}return r=je.call(e),t&&(n?e[Le
]=i:delete e[Le]),r},Ie=function(e){return Me.call(e)},Ue=Is?Is.toStringTag:void 0,Fe=zs=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ue&&Ue in Object(e)?ze:Ie)(e)},De=Ve=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Be=function(e){return!!De(e)&&("[object Function]"==(e=Fe(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},_=n["__core-js_shared__"],
_=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||""),He=_?"Symbol(src)_1."+_:"",_=Function.prototype,$e=_.toString,Ge=Be,
Je=function(e){return!!He&&He in e},We=Ve,Ke=_=function(e){if(null!=e){try{return $e.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},c=/[\\^$.*+?()[\]{}|]/g,Qe=/^\[object .+?Constructor\]$/,i=Function.prototype,No=Object.prototype,
i=i.toString,No=No.hasOwnProperty,Xe=RegExp("^"+i.call(No).replace(c,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ye=function(e){return!(!We(e)||Je(e))&&(Ge(e
)?Xe:Qe).test(Ke(e))},Ze=function(e,t){return null==e?void 0:e[t]},No=(i=function(e,t){return e=Ze(e,t),Ye(e)?e:void 0}
)(n,"Map"),c=i(Object,"create"),tt=et=c,e=Object.prototype,rt=e.hasOwnProperty,nt=c,e=Object.prototype,
it=e.hasOwnProperty,ot=c,e=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},c=function(e){
var t,r=this.__data__;return tt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:rt.call(r,e)?r[e]:void 0},Oo=function(e
){var t=this.__data__;return nt?void 0!==t[e]:it.call(t,e)},r=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=ot&&void 0===t?"__lodash_hash_undefined__":t,this},V.prototype.clear=function(){
this.__data__=et?et(null):{},this.size=0},V.prototype.delete=e,V.prototype.get=c,V.prototype.has=Oo,V.prototype.set=r,
st=V,at=S,ct=No,ut=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},pt=dt=ht=lt=function(e,t){
return e=e.__data__,ut(t)?e["string"==typeof t?"string":"hash"]:e.map},e=function(e){return e=lt(this,e).delete(e),
this.size-=e?1:0,e},c=function(e){return ht(this,e).get(e)},Oo=function(e){return dt(this,e).has(e)},r=function(e,t){
var r=pt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},F.prototype.clear=function(){this.size=0,
this.__data__={hash:new st,map:new(ct||at),string:new st}},F.prototype.delete=e,F.prototype.get=c,F.prototype.has=Oo,
F.prototype.set=r,gt=No,ft=e=F,vt=wt=S,c=Go,Oo=xo,r=$i,S=function(e,t){var r,n=this.__data__;if(n instanceof wt){if(
r=n.__data__,!gt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ft(r)}return n.set(e,t),
this.size=n.size,this},D.prototype.clear=Qs,D.prototype.delete=c,D.prototype.get=Oo,D.prototype.has=r,D.prototype.set=S,
Go=D,yt=e,xo=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=xo,mt=B,bt=$i=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},_t=function(e,t){return e.has(t)},Qs=n.Uint8Array,Rt=Qs,
Et=Oe,Tt=c=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p=1&r,w=e.length,g=t.length;if(w!=g&&!(p&&w<g))return!1;if(g=o.get(e)
,s=o.get(t),g&&s)return g==t&&s==e;for(a=-1,c=!0,u=2&r?new mt:void 0,o.set(e,t),o.set(t,e);++a<w;){if(l=e[a],h=t[a],
void 0!==(d=n?p?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)){if(d)continue;c=!1;break}if(u){if(!bt(t,function(e,t){if(!_t(u,t)&&(
l===e||i(l,e,r,n,o)))return u.push(t)})){c=!1;break}}else if(l!==h&&!i(l,h,r,n,o)){c=!1;break}}return o.delete(e),
o.delete(t),c},Pt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},qt=Oo=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},r=Is?Is.prototype:void 0,xt=r?r.valueOf:void 0,
S=function(e,t,r,n,i,o,s){var a,c;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new Rt(e),new Rt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return Et(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=Pt;case"[object Set]":return a=a||qt,!!(
e.size==t.size||1&n)&&((c=s.get(e))?c==t:(n|=2,s.set(e,t),c=Tt(a(e),a(t),n,i,o,s),s.delete(e),c));case"[object Symbol]":
if(xt)return xt.call(e)==xt.call(t)}return!1},xo=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},Qs=Array.isArray,St=xo,At=o=Qs,r=function(e,t,r){return t=t(e),At(e)?t:St(t,r(e))},Ot=Qs=function(e,t){for(
var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},Ms=Object.prototype,
Nt=Ms.propertyIsEnumerable,Ms=(Ct=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Ot(Ct(t),
function(e){return Nt.call(t,e)}))}:function(){return[]},Ao=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},kt=zs,q=function(e){return jt(e)&&"[object Arguments]"==kt(e)},Lt=jt=P=function(e){
return null!=e&&"object"==typeof e},Ls=Object.prototype,Mt=Ls.hasOwnProperty,zt=Ls.propertyIsEnumerable,Ls=q(function(){
return arguments}())?q:function(e){return Lt(e)&&Mt.call(e,"callee")&&!zt.call(e,"callee")},R=(Ns=(Ns=(R=(R=(q={
exports:{}}).exports)&&!R.nodeType&&R)&&q&&!q.nodeType&&q)&&Ns.exports===R?n.Buffer:void 0)?Ns.isBuffer:void 0,
q.exports=R||function(){return!1},It=/^(?:0|[1-9]\d*)$/,Ns=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&It.test(e))&&-1<e&&e%1==0&&e<t},Ut=zs,Vt=R=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ft=P,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,Ds=function(e){return Ft(e)&&Vt(
e.length)&&!!t[Ut(e)]},js=function(t){return function(e){return t(e)}},T=(T=(E=Dt={exports:{}}).exports)&&!T.nodeType&&T
,T=(Cs=T&&E&&!E.nodeType&&E)&&Cs.exports===T,ks=T&&x.process,T=function(){try{return Cs&&Cs.require&&Cs.require("util"
).types||ks&&ks.binding&&ks.binding("util")}catch(e){}}(),E.exports=T,T=(E=(x=Dt.exports)&&x.isTypedArray)?js(E):Ds,
Bt=Ao,Ht=Ls,$t=o,Gt=q.exports,Jt=Ns,Wt=x=T,E=Object.prototype,Kt=E.hasOwnProperty,Qt=Object.prototype,Hs=Object.keys,
$s=Object,Xt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Qt)},Yt=function(e){
return Hs($s(e))},Ds=Object.prototype,Zt=Ds.hasOwnProperty,er=Be,tr=R,rr=function(e,t){var r,n=$t(e),i=!n&&Ht(e),
o=!n&&!i&&Gt(e),s=!n&&!i&&!o&&Wt(e),a=n||i||o||s,c=a?Bt(e.length,String):[],u=c.length;for(r in e)!t&&!Kt.call(e,r
)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Jt(r,u))||c.push(
r);return c},nr=function(e){var t,r;if(!Xt(e))return Yt(e);for(r in t=[],Object(e))Zt.call(e,r
)&&"constructor"!=r&&t.push(r);return t},ir=Ao=function(e){return null!=e&&tr(e.length)&&!er(e)},or=r,sr=Ms,
ar=T=function(e){return(ir(e)?rr:nr)(e)},cr=function(e){return or(e,ar,sr)},E=Object.prototype,ur=E.hasOwnProperty,
Ds=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p,w,g=1&r,f=cr(e),v=f.length;if(v!=cr(t).length&&!g)return!1;for(s=v;s--;)if(
a=f[s],!(g?a in t:ur.call(t,a)))return!1;if(p=o.get(e),w=o.get(t),p&&w)return p==t&&w==e;for(c=!0,o.set(e,t),o.set(t,e),
u=g;++s<v;){if(l=e[a=f[s]],h=t[a],!(void 0===(d=n?g?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)?l===h||i(l,h,r,n,o):d)){c=!1;break}
u=u||"constructor"==a}return c&&!u&&(p=e.constructor)!=(w=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof w&&w instanceof w)&&(c=!1),o.delete(e),o.delete(t),c},r=i(n,
"DataView"),Ms=No,E=i(n,"Promise"),pi=No=i(n,"Set"),n=i(n,"WeakMap"),lr=zs,dr=(hr=_)(_=r),pr=hr(Ms),wr=hr(E),gr=hr(pi),
fr=hr(n),r=lr,(_&&"[object DataView]"!=r(new _(new ArrayBuffer(1)))||Ms&&"[object Map]"!=r(new Ms
)||E&&"[object Promise]"!=r(E.resolve())||pi&&"[object Set]"!=r(new pi)||n&&"[object WeakMap]"!=r(new n))&&(r=function(e
){var t=lr(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?hr(e):"")switch(e){case dr:return"[object DataView]";
case pr:return"[object Map]";case wr:return"[object Promise]";case gr:return"[object Set]";case fr:
return"[object WeakMap]"}return t}),vr=Go,yr=c,mr=S,br=Ds,_r=r,Rr=o,Er=q.exports,Tr=x,Pr="[object Arguments]",
qr="[object Array]",xr="[object Object]",_=Object.prototype,Sr=_.hasOwnProperty,Ar=function(e,t,r,n,i,o){var s=Rr(e),
a=Rr(t),c=s?qr:_r(e),a=a?qr:_r(t),u=(c=c==Pr?xr:c)==xr,l=(a=a==Pr?xr:a)==xr;if((a=c==a)&&Er(e)){if(!Er(t))return!1;u=!(
s=!0)}return a&&!u?(o=o||new vr,s||Tr(e)?yr(e,t,r,n,i,o):mr(e,t,c,r,n,i,o)):1&r||(s=u&&Sr.call(e,"__wrapped__"),
c=l&&Sr.call(t,"__wrapped__"),!s&&!c)?a&&(o=o||new vr,br(e,t,r,n,i,o)):i(s?e.value():e,c?t.value():t,r,n,o=o||new vr)},
Nr=Go,Cr=Ms=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Or(t)&&!Or(r)?t!=t&&r!=r:Ar(t,r,n,i,e,o))},kr=Ve,
jr=E=function(e){return e==e&&!kr(e)},Lr=T,Mr=function(e,t,r,n){var i,o,s,a,c,u,l=r.length,h=l,d=!n;if(null==e)return!h;
for(e=Object(e);l--;)if(i=r[l],d&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<h;)if(s=e[o=(i=r[l])[0]],a=i[1],
d&&i[2]){if(void 0===s&&!(o in e))return!1}else if(c=new Nr,!(void 0===(u=n?n(s,a,o,e,t,c):u)?Cr(a,s,3,n,c):u))return!1;
return!0},zr=function(e){for(var t,r,n=Lr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,jr(r)];return n},Ir=pi=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},n=function(t){var r=zr(t);
return 1==r.length&&r[0][2]?Ir(r[0][0],r[0][1]):function(e){return e===t||Mr(e,t,r)}},Ur=zs,Vr=Or=P,Fr=o,Dr=c=function(e
){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Ur(e)},Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Hr=/^\w*$/,S=function(e,t){var r;return!Fr(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Dr(e)
)||Hr.test(e)||!Br.test(e)||null!=t&&e in Object(t))},$r=e,H.Cache=$r,
Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Bs=(
Ds=H(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Gr,function(e,t,r,n){i.push(r?n.replace(Jr,
"$1"):t||e)}),i},function(e){return 500===Bs.size&&Bs.clear(),e})).cache,Wr=Ae,Kr=o,Qr=c,r=Is?Is.prototype:void 0,
Xr=r?r.toString:void 0,Yr=q=function e(t){var r;return"string"==typeof t?t:Kr(t)?Wr(t,e)+"":Qr(t)?Xr?Xr.call(t
):"":"0"==(r=t+"")&&1/t==-1/0?"-0":r},tn=Ds,rn=x=function(e){return null==e?"":Yr(e)},nn=c,un=on=function(e,t){
return Zr(e)?e:en(e,t)?[e]:tn(rn(e))},ln=Ls,pn=R,gn=function(e,t){return null!=e&&t in Object(e)},fn=_=function(e,t,r){
for(var n,i,o=(t=un(t,e)).length,s=!(n=-1);++n<o&&(i=wn(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(
o=null==e?0:e.length)&&pn(o)&&dn(i,o)&&(hn(e)||ln(e))},vn=Ms,yn=cn=function(e,t,r){return void 0===(e=null==e?void 0:an(
e,t))?r:e},mn=function(e,t){return null!=e&&fn(e,t,gn)},_n=E,Rn=pi,Tn=an=Go=function(e,t){for(var r=0,n=(t=on(t,e)
).length;null!=e&&r<n;)e=e[sn(t[r++])];return r&&r==n?e:void 0},Pn=function(t){return function(e){
return null==e?void 0:e[t]}},qn=function(t){return function(e){return Tn(e,t)}},xn=bn=en=S,Sn=En=wn=sn=function(e){var t
return"string"==typeof e||nn(e)?e:"0"==(t=e+"")&&1/e==-1/0?"-0":t},An=n,On=function(r,n){return bn(r)&&_n(n)?Rn(En(r),n
):function(e){var t=yn(e,r);return void 0===t&&t===n?mn(e,r):vn(n,t,3)}},Nn=e=function(e){return e},Cn=hn=Zr=o,
kn=function(e){return xn(e)?Pn(Sn(e)):qn(e)},jn=function(e,t,r){for(var n,i=-1,o=Object(e),s=r(e),
a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Ln=T,Un=Ae,Fn=r=function(e,n){var i=-1,o=In(e)?Array(e.length):[];
return zn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},f=function(e,t){return(Dn(e)?Un:Fn)(e,Vn(t))},Hn=Oe,$n=In=Mn=Ao,
Gn=dn=Ns,Jn=Ve,Wn=$i,Qn=function(e,n){var i;return Bn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},Zn=function(e,t,r){
var n=Xn(e)?Wn:Qn;return r&&Yn(e,t,r)&&(t=void 0),n(e,Kn(t))},ei=Bn=zn=Ds=function(e,t){var r,n,i;if(null!=e){if(!Mn(e)
)return e&&jn(e,t,Ln);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},ti=function(e,t){for(var r=-1
,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ri=function(e,n){var i=!0;return ei(e,function(e,t,r){
return i=!!n(e,t,r)}),i},ni=Kn=Vn=R=function(e){return"function"==typeof e?e:null==e?Nn:"object"==typeof e?Cn(e)?On(e[0]
,e[1]):An(e):kn(e)},ii=Xn=Dn=o,oi=Yn=Ms=function(e,t,r){var n;return!!Jn(r)&&!!("number"==(n=typeof t)?$n(r)&&Gn(t,
r.length):"string"==n&&t in r)&&Hn(r[t],e)},si=function(e,t,r){var n=ii(e)?ti:ri;return r&&oi(e,t,r)&&(t=void 0),n(e,ni(
t))},ai=i,E=function(){try{var e=ai(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ci=Ls,ui=o,
li=Is?Is.isConcatSpreadable:void 0,di=function(e){return ui(e)||ci(e)||!!(li&&e&&e[li])},wi=hi=xo,gi=pi=function e(t,r,n
,i,o){var s,a=-1,c=t.length;for(n=n||di,o=o||[];++a<c;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):hi(o,s):i||(o[o.length]=s);
return o},fi=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},vi=o,yi=function(){var e,t,r
,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return wi(vi(t)?fi(t):[t
],gi(e,1))},mi=R,bi=Ao,_i=T,S=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;
return-1},Ri=/\s/,Ei=function(e){for(var t=e.length;t--&&Ri.test(e.charAt(t)););return t},Ti=/^\s+/,Pi=n=function(e){
return e&&e.slice(0,Ei(e)+1).replace(Ti,"")},qi=Ve,xi=c,Si=/^[-+]0x[0-9a-f]+$/i,Ai=/^0b[01]+$/i,Oi=/^0o[0-7]+$/i,
Ni=parseInt,Ci=function(e){var t;return"number"==typeof e?e:xi(e)?NaN:(qi(e)&&(t="function"==typeof e.valueOf?e.valueOf(
):e,e=qi(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=Pi(e),(t=Ai.test(e))||Oi.test(e)?Ni(e.slice(2),t?2:8):Si.test(e
)?NaN:+e))},ki=function(e){return e?(e=Ci(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},ji=S,
Li=R,Mi=Ns=function(e){var t=(e=ki(e))%1;return e==e?t?e-t:e:0},zi=Math.max,Ii=function(e,t,r){var n,i,o,s=Object(e);
return bi(e)||(n=mi(t),e=_i(e),t=function(e){return n(s[e],e,s)}),-1<(o=(o=null==(i=e)?0:i.length)?((r=null==r?0:Mi(r)
)<0&&(r=zi(o+r,0)),ji(i,Li(t),r)):-1)?s[n?e[o]:o]:void 0},Ui=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(
r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Vi=Ds,Fi=R,Di=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i
,e,t,r)}),i},Bi=o,Hi=function(e,t,r){var n=Bi(e)?Ui:Di,i=arguments.length<3;return n(e,Fi(t),r,i,Vi)},$i=function(e,t,r
){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t
];return n},Gi=S,Ji=function(e){return e!=e},Wi=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;
return-1},i=function(e,t,r){return t==t?Wi(e,t,r):Gi(e,Ji,r)},No&&Oo(new No([,-0]))[1],Ki=c,Qi=function(e,t){var r,n,i,o
,s,a,c,u;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=Ki(e),s=void 0!==t,a=null===t,c=t==t,u=Ki(t),
!a&&!u&&!o&&t<e||o&&s&&c&&!a&&!u||n&&s&&c||!r&&c||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!c
)return-1}return 0},Xi=Ae,Yi=Go,Zi=R,eo=r,to=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},
ro=js,no=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,c=r.length;++i<a;)if(n=Qi(o[i],s[i])
)return c<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},io=e,oo=o,so=function(e,t,r){switch(r.length){case 0:
return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}
return e.apply(t,r)},ao=Math.max,co=function(e){return function(){return e}},Ls=(uo=E)?function(e,t){return uo(e,
"toString",{configurable:!0,enumerable:!1,value:co(t),writable:!0})}:e,lo=Date.now,Us=Ls,ho=pi,po=function(e,n,r){var i;
return n=n.length?Xi(n,function(t){return oo(t)?function(e){return Yi(e,1===t.length?t[0]:t)}:t}):[io],i=-1,n=Xi(n,ro(Zi
)),e=eo(e,function(t,e,r){return{criteria:Xi(n,function(e){return e(t)}),index:++i,value:t}}),to(e,function(e,t){
return no(e,t,r)})},wo=Ms,function(){var e=lo(),t=16-e+ +Fs;if(Fs=e,0<t){if(800<=++Vs)return}else Vs=0;Us.apply(void 0,
arguments)}((Gs=Is=function(e,t){var r;return null==e?[]:(1<(r=t.length)&&wo(e,t[0],t[1])?t=[]:2<r&&wo(t[0],t[1],t[2]
)&&(t=[t[0]]),po(e,ho(t,1),[]))},Js=void(Fs=Vs=0),Ws=e,Js=ao(void 0===Js?Gs.length-1:Js,0),function(){for(var e,
t=arguments,r=-1,n=ao(t.length-Js,0),i=Array(n);++r<n;)i[r]=t[Js+r];for(r=-1,e=Array(Js+1);++r<Js;)e[r]=t[r];return e[Js
]=Ws(i),so(Gs,this,e)}),Is+""),fo=Qs,vo=function(e,n){var i=[];return go(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},yo=R
,bo=function(e,t){return(mo(e)?fo:vo)(e,yo(t))},_o=e,Ro=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[
r],r,e););return e},Eo=go=Ds,To=function(e){return"function"==typeof e?e:_o},Po=mo=o,l=function(e,t){return(Po(e)?Ro:Eo
)(e,To(t))},qo=$i,xo=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:qo(e,t,r)},So=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ao=function(e){return So.test(e)}
,(S=Dt.exports)&&S.isRegExp,Oo=function(e){return e.split("")},
No="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",c="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Co=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+c+No,"g"),ko=Oo,jo=Ao,Lo=function(e){return e.match(Co)||[]},
zo=Mo=i,Io=q,Uo=n,Vo=xo,Fo=function(e,t){for(var r=e.length;r--&&-1<Mo(t,e[r],0););return r},Do=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<zo(t,e[r],0););return r},Bo=function(e){return(jo(e)?Lo:ko)(e)},Ho=x,$o=function(e,t,r){
var n;return(e=Ho(e))&&(r||void 0===t)?Uo(e):e&&(t=Io(t))?(r=Bo(e),t=Bo(t),n=Do(r,t),t=Fo(r,t)+1,Vo(r,n,t).join("")):e},
Go=Object.prototype,Jo=Go.hasOwnProperty,Wo=function(e,t){return null!=e&&Jo.call(e,t)},Ko=_,v=function(e,t){
return null!=e&&Ko(e,t,Wo)},Yo=function(e){return!0===e||!1===e||Xo(e)&&"[object Boolean]"==Qo(e)},Zo=function(e){
return null===e},ts=o,ns=function(e){return"string"==typeof e||!ts(e)&&rs(e)&&"[object String]"==es(e)},is=es=Qo=zs,
os=rs=Xo=P,ss=function(e){return"number"==typeof e||os(e)&&"[object Number]"==is(e)},cs=function(e){
return"number"==typeof e&&e==as(e)},ls=function(e){return cs(e)&&-us<=e&&e<=us},us=9007199254740991,ps=function(e){
return e?hs(ds(e),-9007199254740991,9007199254740991):0===e?e:0},ys=function(e,t,r){return e=vs(e),r=null==r?0:ws(fs(r),
0,e.length),t=gs(t),e.slice(r,r+t.length)==t},ms=ws=hs=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),
void 0!==t&&(e=t<=e?e:t)),e},bs=gs=q,_s=fs=ds=as=Ns,Rs=vs=x,Es=function(e,t,r){var n;return e=Rs(e),t=bs(t),n=e.length,
n=r=void 0===r?n:ms(_s(r),0,n),0<=(r-=t.length)&&e.slice(r,n)==t},Ts=Ae,Ps=function(t,e){return Ts(e,function(e){
return t[e]})},qs=T,xs=function(e){return null==e?[]:Ps(e,qs(e))};class la{constructor(e,t){s(this,"_logger",void 0),s(
this,"name",void 0),s(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;
return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=h.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=h.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=h.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=h.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class A{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case h.DEBUG:return"DEBUG";case h.INFO:return"INFO";case h.WARN:return"WARN";case h.ERROR:return"ERROR";
case h.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=h.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=h.INFO&&this._logger.info(...e)}static warn(...e){this._level<=h.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=h.ERROR&&this._logger.error(...e)}static createLogger(e){return new la(e,A)}}s(A,
"Level",h={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),s(A,"_level",h.DEBUG),
s(A,"_logger",console);const ha=A.createLogger("ProcessUtils");class da{static getArguments(){return process.argv.slice(
2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)t.length&&(e[t]="");else{const r=t.split("=");t=r.shift(),(t=$o(t)
).length&&(e[t]=r.join("=").trim())}return e}static parseEnvFile(e){const t=ea.default.readFileSync(e,{encoding:"utf-8"}
),r=t.split("\n");return r.reduce(da.parseEnvFileLine,{})}static initEnvFromFile(e){e=da.parseEnvFile(e),process.env=g(
g({},e),process.env)}static initEnvFromDefaultFiles(){var e=ta.default.join(process.cwd(),".env");ea.default.existsSync(
e)&&da.initEnvFromFile(e)}static setupDestroyHandler(r,n){let i=!1;var e=t=>e=>{da._printErrors(t,e);try{i||(i=!0,r())
}catch(e){n(e)}};process.on("exit",e("exit")),process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),
process.on("SIGUSR1",e("SIGUSR1")),process.on("SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e(
"uncaughtException"))}static _printErrors(e,t){try{t?ha.error(`Closing process because "${e}" event: `,t
):"exit"===e?ha.debug(`Closing process because "${e}" event`):ha.info(`Closing process because "${e}" event`)}catch(e){
console.error("Error while printing errors: ",e)}}}js=null!=(r=te("%{BUILD_BACKEND_URL}"))?r:"http://0.0.0.0:3000",
Ls=null!=(E=te(""))?E:"nor-backend",Ms=null!=(pi=te(""))?pi:"","".startsWith("%{")&&"".endsWith("}"),Ds=null!=(
e=function(e){if(e){if(function(){switch(e){case h.DEBUG:case h.INFO:case h.WARN:case h.ERROR:case h.NONE:return 1;
default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return h.DEBUG;case"INFO":return h.INFO
case"WARN":case"WARNING":return h.WARN;case"ERR":case"ERROR":return h.ERROR;case"FALSE":case"OFF":case"QUIET":
case"SILENT":case"NONE":return h.NONE;default:return}}}(null!=(R=Z(null==(Is=process)||null==(Qs=Is.env
)?void 0:Qs.BACKEND_LOG_LEVEL))?R:Z(Ms)))?e:h.INFO;const pa=null!=(S=Z(null==($i=process)||null==(Dt=$i.env
)?void 0:Dt.BACKEND_SCRIPT_NAME))?S:Ls,wa=null!=(Oo=Z(null==(c=process)||null==(No=c.env)?void 0:No.BACKEND_URL))?Oo:js,
ga=(d={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},
"WINDOW"===(zs=null!=(_=null!=(n=null==(Ao=process)||null==(i=Ao.env)?void 0:i.NOR_REQUEST_CLIENT_MODE)?n:null==(
xo=process)||null==(Go=xo.env)?void 0:Go.REACT_APP_REQUEST_CLIENT_MODE)?_:"")||!(
"undefined"==typeof window||!window.fetch)),fa="NODE"===zs||!ga;class va{static async getRequestDataAsBuffer(n){
return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(
Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){
const r=await va.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await va.getRequestDataAsString(e)))return na.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await va.getRequestDataAsString(e)))return JSON.parse(e)}}(P=p={Continue:100,100:"Continue",SwitchingProtocols:101,
101:"SwitchingProtocols",Processing:102,102:"Processing",CheckPoint:103,103:"CheckPoint",OK:200,200:"OK",Created:201,
201:"Created",Accepted:202,202:"Accepted",NonAuthoritativeInformation:203,203:"NonAuthoritativeInformation",
NoContent:204,204:"NoContent",ResetContent:205,205:"ResetContent",PartialContent:206,206:"PartialContent",
MultiStatus:207,207:"MultiStatus",AlreadyReported:208,208:"AlreadyReported",IMUsed:226,226:"IMUsed",MultipleChoices:300,
300:"MultipleChoices",MovedPermanently:301,301:"MovedPermanently",Found:302,302:"Found",SeeOther:303,303:"SeeOther",
NotModified:304,304:"NotModified",TemporaryRedirect:307,307:"TemporaryRedirect",PermanentRedirect:308,
308:"PermanentRedirect",BadRequest:400,400:"BadRequest",Unauthorized:401,401:"Unauthorized",PaymentRequired:402,
402:"PaymentRequired",Forbidden:403,403:"Forbidden",NotFound:404,404:"NotFound",MethodNotAllowed:405,
405:"MethodNotAllowed",NotAcceptable:406,406:"NotAcceptable",ProxyAuthenticationRequired:407,
407:"ProxyAuthenticationRequired",RequestTimeout:408,408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,
410:"Gone",LengthRequired:411,411:"LengthRequired",PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,
413:"PayloadTooLarge",URITooLong:414,414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",
RequestedRangeNotSatisfiable:416,416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",
IAmATeapot:418,418:"IAmATeapot",UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",
FailedDependency:424,424:"FailedDependency",TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",
PreconditionRequired:428,428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",
RequestHeaderFieldsTooLarge:431,431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,
451:"UnavailableForLegalReasons",InternalError:500,500:"InternalError",InternalServerError:500})[500
]="InternalServerError",P[P.NotImplemented=501]="NotImplemented",P[P.BadGateway=502]="BadGateway",P[
P.ServiceUnavailable=503]="ServiceUnavailable",P[P.GatewayTimeout=504]="GatewayTimeout",P[P.HttpVersionNotSupported=505
]="HttpVersionNotSupported",P[P.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",P[P.InsufficientStorage=507
]="InsufficientStorage",P[P.LoopDetected=508]="LoopDetected",P[P.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",P[
P.NotExtended=510]="NotExtended",P[P.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Ss={
ERROR:"error"};class ya extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||se(e)),s(this,"status"
,void 0),s(this,"method",void 0),s(this,"url",void 0),s(this,"body",void 0),s(this,"__proto__",void 0),
t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,
this.url=n,this.body=i}valueOf(){return this.status}toString(){return this.status+" "+this.message}toJSON(){return{
type:Ss.ERROR,status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method
}getUrl(){return this.url}getBody(){return this.body}}y={TEXT:"text/plain",CALENDAR:"text/calendar",
JSON:"application/json"};const ma=fa?require("fs").promises:void 0,ba=A.createLogger("NodeRequestClient");class _a{
static setLogLevel(e){ba.setLogLevel(e)}constructor(e,t){s(this,"_http",void 0),s(this,"_https",void 0),this._http=e,
this._https=t}async textRequest(e,t,r,n){switch(e){case d.GET:return this._getText(t,r,n);case d.POST:
return this._postText(t,r,n);case d.PATCH:return this._patchText(t,r,n);case d.PUT:return this._putText(t,r,n);
case d.DELETE:return this._deleteText(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _getText(e,t,r){const n={method:"GET",headers:{"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t))
,this._textRequest(d.GET,e,n,r).then(_a._successTextResponse)}async _putText(e,t,r){const n={method:"PUT",headers:{
"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(d.PUT,e,n,r).then(
_a._successTextResponse)}async _postText(e,t,r){const n={method:"POST",headers:{"Content-Type":y.TEXT}};return t&&(
n.headers=g(g({},n.headers),t)),this._textRequest(d.POST,e,n,r).then(_a._successTextResponse)}async _patchText(e,t,r){
const n={method:"PATCH",headers:{"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(
d.PATCH,e,n,r).then(_a._successTextResponse)}async _deleteText(e,t,r){const n={method:"DELETE",headers:{
"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(d.DELETE,e,n,r).then(
_a._successTextResponse)}static async _successTextResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw ba.error(`Unsuccessful response with status ${t}: `,e),new ya(t,`Error ${t} for ${re(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}async _textRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await va.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case d.GET:return this._getJson(t,r,n);case d.POST:
return this._postJson(t,r,n);case d.PATCH:return this._patchJson(t,r,n);case d.PUT:return this._putJson(t,r,n);
case d.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _checkSocketFile(t){try{const e=await ma.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))ba.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t)throw ba.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e;ba.debug("_checkSocketFile: ENOENT: ",e)}}}async _findSocketFile(e){
var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=ta.default.dirname(e))&&t!==e?this._findSocketFile(
t):void 0}async _httpRequest(o,s,e){var t;const a=e?JSON.stringify(e)+"\n":void 0,c=new ra.default.URL(o);let u;
const l=null!=(e=null===c||void 0===c?void 0:c.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==c&&void 0!==c&&c.pathname?null===c||void 0===c?void 0:c.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==c.search?c.search:""),s=g(g({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=g(g({},s),{},{hostname:c.hostname,
port:null!=(i=null!==c&&void 0!==c&&c.port?parseInt(c.port,10):void 0)?i:"https:"===l?443:80,path:c.pathname+c.search}))
,(e=u.request(s,e=>{n?ba.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(ba.warn("Warning! Request had already ended when the response was received."),ba.debug(
"Error from event: ",e)):(ba.debug("Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(
ba.warn("Warning! Request had already ended when the response was received."),ba.debug("Exception: ",e)):(ba.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _jsonRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await va.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":y.JSON}};return t&&(
n.headers=g(g({},n.headers),t)),this._jsonRequest(d.GET,e,n,r).then(_a._successJsonResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(
d.PUT,e,n,r).then(_a._successJsonResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{"Content-Type":y.JSON}
};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(d.POST,e,n,r).then(_a._successJsonResponse)}
async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),
t)),this._jsonRequest(d.PATCH,e,n,r).then(_a._successJsonResponse)}async _deleteJson(e,t,r){const n={method:"DELETE",
headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(d.DELETE,e,n,r).then(
_a._successJsonResponse)}static async _successJsonResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw ba.error(`Unsuccessful response with status ${t}: `,e),new ya(t,`Error ${t} for ${re(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}}class Ra{constructor(e){s(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e
){case d.GET:return this._getJson(t,r,n);case d.POST:return this._postJson(t,r,n);case d.PUT:return this._putJson(t,r,n)
case d.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)
}}textRequest(e,t,r,n){switch(e){case d.GET:return this._getText(t,r,n);case d.POST:return this._postText(t,r,n);
case d.PUT:return this._putText(t,r,n);case d.DELETE:return this._deleteText(t,r,n);default:throw new TypeError(
"[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ra._successJsonResponse(e,d.GET))}_putJson(e,t,r){const n={
method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ra._successJsonResponse(e,d.PUT))
}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.JSON},
credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ra._successJsonResponse(e,d.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ra._successJsonResponse(e,d.DELETE))}static _successJsonResponse(e,t
){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${re(t)} `+n;return e.json().then(
e=>{throw new ya(r,i,t,n,e)})}return e.json()}_getText(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=r),
this._fetch(e,n).then(e=>Ra._successTextResponse(e,d.GET))}_putText(e,t,r){const n={method:"PUT",mode:"cors",
cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),
r&&(n.body=r),this._fetch(e,n).then(e=>Ra._successTextResponse(e,d.PUT))}_postText(e,t,r){const n={method:"POST",
mode:"cors",cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},
n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Ra._successTextResponse(e,d.POST))}_deleteText(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Ra._successTextResponse(e,d.DELETE))}
static _successTextResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${re(t)} `+n;return e.text().then(e=>{throw new ya(r,i,t,n,e)})}return e.text()}}
const Ea=fa?require("http"):void 0,Ta=fa?require("https"):void 0,Pa=A.createLogger("RequestClient");class qa{
static setLogLevel(e){Pa.setLogLevel(e),_a.setLogLevel(e)}static async textRequest(e,t,r,n){
return this._client.textRequest(e,t,r,n)}static async getText(e,t){return this._client.textRequest(d.GET,e,t)}
static async postText(e,t,r){return Pa.debug(".postJson: ",e,t,r),this._client.textRequest(d.POST,e,r,t)}
static async patchText(e,t,r){return Pa.debug(".patchJson: ",e,t,r),this._client.textRequest(d.PATCH,e,r,t)}
static async putText(e,t,r){return Pa.debug(".putJson: ",e,t,r),this._client.textRequest(d.PUT,e,r,t)}
static async deleteText(e,t,r){return Pa.debug(".deleteJson: ",e,r,t),this._client.textRequest(d.DELETE,e,t,r)}
static async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){
return this._client.jsonRequest(d.GET,e,t)}static async postJson(e,t,r){return Pa.debug(".postJson: ",e,t,r),
this._client.jsonRequest(d.POST,e,r,t)}static async patchJson(e,t,r){return Pa.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(d.PATCH,e,r,t)}static async putJson(e,t,r){return Pa.debug(".putJson: ",e,t,r),
this._client.jsonRequest(d.PUT,e,r,t)}static async deleteJson(e,t,r){return Pa.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(d.DELETE,e,t,r)}static _initClient(){if(ga){const e=class{static hasWindow(){return!!ue()}
static getWindow(){return ue()}static getParent(){var e;return null==(e=ue())?void 0:e.parent}}.getWindow();if(e
)return Pa.debug("Detected browser environment"),new Ra(e.fetch.bind(e));throw new TypeError(
"RequestClient: Could not detect request client implementation: No window object")}if(fa)return new _a(Ea,Ta);
throw new TypeError("RequestClient: Could not detect request client implementation")}}s(qa,"_client",qa._initClient()),
As={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const xa=A.createLogger("HttpServerService");
class Sa{constructor(e=3e3,t=void 0,r=void 0){s(this,"_requestHandler",void 0),s(this,"_hostname",void 0),s(this,"_port"
,void 0),s(this,"_closeCallback",void 0),s(this,"_listenCallback",void 0),s(this,"_server",void 0),s(this,"_handler",
void 0),xa.debug("new: ",t,e,r),this._requestHandler=this._onRequest.bind(this),
this._listenCallback=this._onListen.bind(this),this._closeCallback=this._onClose.bind(this),this._hostname=t,
this._port=e,this._handler=r,this._server=Xs.createServer(this._requestHandler)}start(){xa.debug(
"Going to start server at "+this._getConnectionString()),void 0===this._hostname?this._server.listen(this._port,
this._listenCallback):this._server.listen(this._port,this._hostname,this._listenCallback)}stop(){xa.debug(
"Going to stop server at "+this._getConnectionString()),this._server.close(this._closeCallback)}setHandler(e){xa.debug(
`Setting handler at ${this._getConnectionString()} as "${e}", was "${this._handler}"`),this._handler=e}
_getConnectionString(){return void 0===this._hostname?"http://"+this._port:`http://${this._hostname}:`+this._port}
async _callRequestHandler(t,e){if(void 0!==this._handler){try{await this._handler(t,e)}catch(e){xa.error(
`"${t.method} ${t.url}": Response handler had an error: `,e)}e.writableEnded||(xa.warn(
`"${t.method} ${t.url}": Warning! Request handler did not close the response.`),e.end())}else xa.error(
`"${t.method} ${t.url}": No handler configured"`),e.end("Error")}_onRequest(t,e){this._callRequestHandler(t,e).catch(
e=>{xa.error(`${t.method} ${t.url}: Error: `,e)})}_onListen(){xa.info("Started at "+this._getConnectionString())}
_onClose(){xa.debug("Closed at "+this._getConnectionString())}}class O{static isObject(e){return Y(e)}
static hasPropertyMethods(e){return v(e,"methods")}static hasPropertyControllerProperties(e){return v(e,
"controllerProperties")}static hasPropertyPaths(e){return v(e,"paths")}static hasPropertyParams(e){return v(e,"params")}
static hasPropertyMappings(e){return v(e,"mappings")}static hasPropertyController(e){return v(e,"controller")}
static hasPropertyQueryParam(e){return v(e,"queryParam")}static hasPropertyType(e){return v(e,"type")}
static hasProperty__requestMappings(e){return v(e,"__requestMappings")}static hasPropertyStatus(e){return v(e,"status")}
static hasPropertyMessage(e){return v(e,"message")}static createOrFunction(...e){return t=>K(e,e=>Be(e)?e(t):t===e)}
static everyPropertyIs(t,e){return a(f(ee(t),e=>t[e]),e)}static explainEveryPropertyIs(t,r,n){return bo(f(f(ee(t),e=>t[e
]),(e,t)=>r(e)?"":`#${t}: `+n(e)),e=>!!e)}}m={JSON:0,0:"JSON",STRING:1,1:"STRING",INTEGER:2,2:"INTEGER",NUMBER:3,
3:"NUMBER"},(q=b=b||{})[q.REQUEST_BODY=0]="REQUEST_BODY",q[q.QUERY_PARAM=1]="QUERY_PARAM",q[q.REQUEST_HEADER=2
]="REQUEST_HEADER",q[q.REQUEST_HEADER_MAP=3]="REQUEST_HEADER_MAP",q[q.PATH_VARIABLE=4]="PATH_VARIABLE",q[
q.PATH_VARIABLE_MAP=5]="PATH_VARIABLE_MAP",q[q.MODEL_ATTRIBUTE=6]="MODEL_ATTRIBUTE";const Aa=A.createLogger(
"RequestController"),Oa="__requestMappings",Na=A.createLogger("Headers");class Ca{static setLogLevel(e){Na.setLogLevel(e
)}constructor(e){s(this,"_value",void 0),s(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;try{r&&(
this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}clear(){
this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),Na.debug(
"add header: ",e,t),e=e.toLowerCase();var r=this._value&&v(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?Re(r)?this._value=g(g({},this._value),{},{[e]:yi([],r,[t])}
):this._value=g(g({},this._value),{},{[e]:[r,t]}):this._value=g(g({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),v(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===ee(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=ee(this._value),
l(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),v(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),Re(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),w(e)){const r=e;if(!G(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");l(t,e=>{this.add(r,e)})}else{const n=e;l(ee(n)
,t=>{var e=n[t];Re(e)?l(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=g({},this._value);
return r&&v(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=g(g({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),l(ee(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=ee(r
);const t=f(e,e=>{const t=r[e];return t?G(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new Ca(this._value?g({},this._value):void 0)}}class ka{
static toString(...e){return f(e,e=>Zo(e)?"null":""+e).join("")}static processVariables(n,i,o,s,a=void 0){return Re(n
)?f(n,e=>ka.processVariables(e,i,o,s,a)):_e(n)?Hi(ee(n),(e,t)=>{var r=n[t];return e[""+ka.processVariables(t,i,o,s,a)
]=ka.processVariables(r,i,o,s,a),e},{}):w(n)?ka.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(
e.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||a(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,c,u;if(0===t.length)return"";let l;if(l=Be(r)?r:e=>cn(r,e,o),ys(t,n)&&Es(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=$o(e),ka.isValidKeyword(e)))return l(e)}let h="",d=0;for(
;0<=d&&d<t.length;)if(e=d,(d=t.indexOf(n,e))<0)h+=t.substr(e),d=t.length;else{if(a=(s=d)+n.length,(u=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);c=u+i.length,u=$o(
t.substr(a,u-a)),d=(ka.isValidKeyword(u)?(a=l(u),h+=""+t.substr(e,s-e)+a):h+=""+t.substr(e,c-e),c)}return h}
static formatNumber(e,t=" ",r="."){return e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,t).replace(/\./,r)}
static endsWithCharacters(e,t){var r=e.length;return!(1<=r)||t.includes(e[r-1])}static startsWithCharacters(e,t){
return!(1<=e.length)||t.includes(e[0])}static hasOnlyCharacters(e,t){return 0===e.length||a(e,e=>t.includes(e))}
static validateStringCharacters(e,t=void 0,r=t,n=r,i=0,o=void 0){var s=null!=(s=null==e?void 0:e.length)?s:0;return(
void 0===t||ka.startsWithCharacters(e,t))&&(void 0===r||ka.hasOnlyCharacters(e.substring(1,s-1),r))&&(
void 0===n||ka.endsWithCharacters(e,n))&&i<=s&&(void 0===o||s<=o)}}class N{constructor(e,t,r){s(this,"_status",void 0),
s(this,"_headers",void 0),s(this,"_body",void 0);let n,i,o;if(!Te(e)||Te(t)||Te(r))if(Te(t)&&!Te(r)){if(void 0!==r
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");Ee(e)?i=e:o=e,n=t}else{if(!Te(r)
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(!Ee(t))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");o=e,i=t,n=r}else{if(n=e,void 0!==t)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(void 0!==r)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=n,this._headers=null!=(e=i)?e:new Ca,this._body=o}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(e){return this._status=e,this}
headers(e){return Ee(e)?this._headers=e:this._headers=new Ca(e),this}body(e){return this._body=e,this}getHeaders(){
return this._headers}allow(...e){e=f(e,ie);const t=f(e,e=>re(e).toUpperCase());return this._headers.set("Allow",t.join(
", ")),this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}toString(){var e,t,r=se(this._status);const n=this._headers;return e=n.isEmpty()?"":ka.toString(n),
void 0===(t=this._body)?e?`ResponseEntity(${r}, ${e})`:`ResponseEntity(${r})`:(t=be(t)?JSON.stringify(t,null,2
):ka.toString(t),e?`ResponseEntity(${r}, ${e}, Body(${t}))`:`ResponseEntity(${r}, Body(${t}))`)}static accepted(){
return new N(p.Accepted)}static badRequest(){return new N(p.BadRequest)}static created(e){return new N(new Ca({
Location:e}),p.Created)}static noContent(){return new N(p.NoContent)}static notFound(){return new N(p.NotFound)}
static notImplemented(){return new N(p.NotImplemented)}static internalServerError(){return new N(p.InternalServerError)}
static methodNotAllowed(){return new N(p.MethodNotAllowed)}static unprocessableEntity(){return new N(
p.UnprocessableEntity)}static ok(e){return e?new N(e,p.OK):new N(p.OK)}}const ja=A.createLogger("ParamRoutes");class La{
constructor(r){s(this,"_routes",void 0);var e=ee(r),e=f(e,e=>{var t=r[e];return La.createCallbackFunction(e,t)});
this._routes=e}hasRoute(t){var e=K(this._routes,e=>{var[e]=e(t);return void 0!==e&&1<=(null==e?void 0:e.length)});
return e?ja.debug(`hasRoute: Looking up "${t}": Found`):ja.debug(`hasRoute: Looking up "${t}": Not Found`),e}getRoute(r
){let n=void 0,i=void 0;return Ii(this._routes,e=>{var[e,t]=e(r);return void 0!==e&&(n=e,i=t,!0)}),void 0!==n?[n,i]:[
void 0,void 0]}static createCallbackFunction(e,t){const i=(e=""===e?"/":e).split("/"),o=i.length;if(0===o
)throw new Error("Path format had no items. This should not happen.");const s=f(i,(e,t)=>3<=e.length&&"{"===e[0
]&&"}"===e[e.length-1]?$o(e.substr(1,e.length-2)):(i[t]=e.toLowerCase(),null));if(K(s,w))return e=>{const r=e.split("/")
if(0===(e=r.length))return[void 0,void 0];if(o!==e)return[void 0,void 0];let n={};return a(s,(e,t)=>w(e)?(n[e]=r[t],!0
):i[t]===r[t].toLowerCase())?[t,n]:[void 0,void 0]};{const r=e.toLowerCase();return e=>e.toLowerCase()!==r?[void 0,
void 0]:[t,void 0]}}}const Ma=A.createLogger("StaticRoutes");class za{static setLogLevel(e){Ma.setLogLevel(e)}
constructor(r){s(this,"_routes",void 0);var e=ee(r),e=f(e,e=>{var t=r[e];return[e.toLowerCase(),t]});
this._routes=new Map(e)}hasRoute(e){return Ma.debug(`Looking up "${e}" from `,this._routes),this._routes.has(
e.toLowerCase())}getRoute(e){return void 0!==(e=this._routes.get(e.toLowerCase()))?[e,void 0]:[void 0,void 0]}}class Ia{
static createRoutes(e){return new(Ia.routesHasParameter(e)?La:za)(e)}static pathHasParameter(e){return e.split("/"
).some(e=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1])}static routesHasParameter(e){return K(ee(e),Ia.pathHasParameter)
}}const C=A.createLogger("RequestRouter");class Ua{static setLogLevel(e){C.setLogLevel(e)}constructor(){s(this,
"_controllers",void 0),s(this,"_routes",void 0),s(this,"_modelAttributeNames",void 0),s(this,"_requestMappings",void 0),
s(this,"_initialized",void 0),this._controllers=[],this._routes=void 0,this._requestMappings=void 0,
this._modelAttributeNames=void 0,this._initialized=!1}attachController(e){this._controllers.push(e),this._routes=void 0}
_initializeRequestMappings(){C.debug("Initializing request mappings."),this._requestMappings||(
this._requestMappings=this._getRequestMappings())}_initializeRouter(){this._initialized||(this._initialized=!0,C.debug(
"Initializing..."),this._initializeRequestMappings(),this._initializeRoutes(),
this._initializeRequiredModelAttributeNames())}_initializeRoutes(){var e;C.debug("Initializing routes."),null!=(
e=this._requestMappings)&&e.length?this._routes=Ia.createRoutes(Ua._parseMappingObject(this._requestMappings)
):this._routes=Ia.createRoutes({})}_initializeRequiredModelAttributeNames(){var e;C.debug(
"Initializing model attributes.");let n=[];null!=(e=this._requestMappings)&&e.length&&(n=Hi(this._requestMappings,(e,o
)=>{var t=o.controller,r=Hi(ee(o.controllerProperties),(e,r)=>{C.debug(
"_initializeRequiredModelAttributeNames: propertyKey: ",r);var t=o.controllerProperties[r],n=t.modelAttributes;C.debug(
"_initializeRequiredModelAttributeNames: propertyAttributeNames: ",n);const i=t.params;return l(n,t=>{C.debug(
"_initializeRequiredModelAttributeNames: attributeName: ",t),void 0===Ii(e,e=>e[0]===t)&&e.push([t,r,i])}),e},[]);
return C.debug("controllerUniqueAttributeNames: ",r),n.push([t,r]),e},n)),this._modelAttributeNames=new Map(n)}
async handleRequest(t,r=void 0,e=void 0,c){try{var n=ie(t),{pathName:i,queryParams:o}=Ua._parseRequestPath(r),s=(
C.debug(`handleRequest: method="${n}", pathName="${i}", queryParams=`,o),i);const u=o;if(void 0===u)return C.error(
"handleRequest: requestQueryParams was not initialized"),N.internalServerError().body({error:"Internal Server Error"});
if(void 0===s)return C.error("handleRequest: requestPathName was not initialized"),N.internalServerError().body({
error:"Internal Server Error"});this._initialized||this._initializeRouter();const{routes:l,bodyRequired:h,
pathVariables:d}=this._getRequestRoutesContext(n,s);if(!e&&h)return C.error(
"handleRequest: parseRequestBody was not provided and body is required"),N.internalServerError().body({
error:"Internal Server Error"});if(void 0===l)return C.debug("handleRequest: No routes defined"),N.methodNotAllowed(
).body({error:"Method Not Allowed"});if(0===l.length)return C.debug("handleRequest: No routes found"),N.notFound().body(
{error:"Not Found"});C.debug("routes: ",l);let a=void 0;const p=e&&h?await e(c):void 0,w=(C.debug(
"handleRequest: requestBody: ",p),new Map);return await Hi(l,async(e,t)=>{var r;const i=t.controller;if(r=t.propertyName
,t=t.propertyParams,await e,this._modelAttributeNames&&this._modelAttributeNames.has(i)){C.debug(
`Populating attributes for property "${r}"`);const o=Ua._getOrCreateRequestModelAttributesForController(w,i),n=f(bo(t,
e=>pe(e)),e=>e.attributeName);C.debug("route attributeNames: ",n),e=this._modelAttributeNames.get(i),C.debug(
"all attributeNamePairs: ",e),e=bo(null!=e?e:[],e=>n.includes(e[0])),C.debug("attributeNamePairs: ",e),await Hi(e,async(
e,t)=>{var[t,r,n]=t,e=(await e,C.debug("attributeName: ",t),C.debug("propertyName: ",r),C.debug("propertyParams: ",n),
Ua._bindRequestActionParams(u,p,n,c,d,o)),n=await i[r](...e);o.set(t,n)},Promise.resolve())}if(
t=Ua._bindRequestActionParams(u,p,t,c,d,null!=(e=w.get(i))?e:new Map),C.debug("handleRequest: stepParams 1: ",t),v(i,r)
){C.debug(`Calling route property by name "${r}"`);const s=await i[r](...t);a=oe(s)?new N(s):ce(s)?new N(s.toJSON(),
s.getStatusCode()):(e=s)&&e instanceof N?(void 0!==a&&C.warn("Warning! ResponseEntity from previous call ignored."),s
):Re(s)?void 0===a?N.ok(s):new N(yi(a.getBody(),s),a.getHeaders(),a.getStatusCode()):_e(s)?void 0===a?N.ok(s):new N(g(g(
{},a.getBody()),s),a.getHeaders(),a.getStatusCode()):(be(s),void 0===a?N.ok(s):(C.warn(
"Warning! ResponseEntity from previous call ignored."),new N(s,a.getHeaders(),a.getStatusCode())))}else C.warn(
`Warning! No property by name "${r}" found in the controller`),a=N.notFound().body({error:"404 - Not Found",code:404})},
Promise.resolve()),C.debug("handleRequest: result finished: "+a),void 0===a?N.noContent():a}catch(e){return ce(e)?(
404===(r=null!=(t=null==e?void 0:e.status)?t:0)?N.notFound():(400<=r&&r<500?N.badRequest():N.internalServerError()
).status(r)).body(e.toJSON()):(C.error("Exception: ",e),N.internalServerError().body({error:"Internal Server Error",
code:500}))}}static _parseRequestPath(e){return{pathName:(e=new Ks.URL("http://localhost"+(null!=e?e:""))).pathname,
queryParams:e.searchParams}}_getRequestRoutesContext(t,e){var r,n,i;return this._routes&&this._routes.hasRoute(e)?([n,r
]=this._routes.getRoute(e),(n=bo(n,e=>0<=e.methods.indexOf(t))).length?(i=K(n,e=>!0===(
null==e?void 0:e.requestBodyRequired)),C.debug("_getRequestRoutesContext: requestBodyRequired=",i),{routes:n,
pathVariables:r,bodyRequired:i}):(C.debug(
"_getRequestRoutesContext: There were matching routes, but not for this method; Method not allowed."),{routes:void 0,
bodyRequired:!1})):(this._routes?C.debug("_getRequestRoutesContext: Routes did not match: ",e):C.debug(
"_getRequestRoutesContext: No routes defined"),{routes:[],bodyRequired:!1})}_getRequestMappings(){
return 0===this._controllers.length?[]:bo(f(this._controllers,e=>{var t=e.constructor;
return O.hasProperty__requestMappings(t)?ye(e.constructor,e):ye(e,e)}),e=>!!e)}static _parseMappingObject(e){function u(
e,t){v(r,e)?r[e].push(t):r[e]=[t]}const r={};return l(e,e=>{const c=e.controller,t=e.controllerProperties,r=ee(t);
0<e.mappings.length?l(e.mappings,e=>{const a=e.methods;l(e.paths,s=>{l(r,n=>{const i=t[n],o=i.params;l(i.mappings,e=>{
var t=e.methods;if(Ua._matchMethods(a,t)){const r=Ua._parseCommonMethods(a,t);t=e.paths,l(t,e=>{u(Ua._joinRoutePaths(s,e
),{requestBodyRequired:null!=(e=null===i||void 0===i?void 0:i.requestBodyRequired)&&e,methods:r,controller:c,
propertyName:n,propertyParams:o})})}})})})}):l(r,r=>{const n=t[r],i=n.params;l(n.mappings,e=>{const t=e.methods;
e=e.paths,l(e,e=>{u(e,{requestBodyRequired:null!=(e=null===n||void 0===n?void 0:n.requestBodyRequired)&&e,methods:t,
controller:c,propertyName:r,propertyParams:i})})})})}),r}static _matchMethods(e,r){return 0===e.length||0==r.length||K(e
,t=>K(r,e=>t===e))}static _parseCommonMethods(e,t){return 0!==e.length?bo(t,t=>K(e,e=>e===t)):t}static _joinRoutePaths(e
,t){return e=$o(e),0===(t=$o($o(t),"/")).length?e:0===e.length?t:"/"===e[e.length-1]||"/"===t[0]?e+t:e+"/"+t}
static _bindRequestActionParams(i,o,e,s,a,c){return f(e,e=>{var t,r,n;if(null!==e){switch(null==e?void 0:e.objectType){
case b.REQUEST_BODY:return o;case b.QUERY_PARAM:return t=(n=e).queryParam,!i.has(t)||(t=i.get(t),Zo(t)
)?void 0:Ua._castParam(t,n.valueType);case b.REQUEST_HEADER:if(n=(t=e).headerName,s.containsKey(n))return void 0===(
r=s.getFirst(n))?void 0:Ua._castParam(r,t.valueType);if(t.isRequired)throw new ya(400,"Bad Request: Header missing: "+n)
return null!=(r=null==t?void 0:t.defaultValue)?r:void 0;case b.REQUEST_HEADER_MAP:
return n=null==e?void 0:e.defaultValues,s.isEmpty()?n?new Ca(n):new Ca:n?new Ca(g(g({},n),s.valueOf())):s.clone();
case b.PATH_VARIABLE:if(r=(t=e).variableName,void 0!==(n=a&&v(a,r)?a[r]:void 0)&&""!==n
)return t.decodeValue?decodeURIComponent(n):n;if(t.isRequired)throw new ya(404,"Not Found");return null!=(
r=t.defaultValue)?r:void 0;case b.MODEL_ATTRIBUTE:return n=e.attributeName,c.has(n)?c.get(n):void 0}throw new TypeError(
"Unsupported item type: "+e)}})}static _castParam(e,t){switch(t){case m.JSON:return JSON.parse(e);case m.STRING:return e
case m.INTEGER:return parseInt(e,10);case m.NUMBER:return parseFloat(e)}throw new TypeError("Unsupported type: "+t)}
static _getOrCreateRequestModelAttributesForController(e,t){let r=e.get(t);return null==r&&(r=new Map,e.set(t,r)),r}}
class Va{getName(){return this._name}constructor(e){s(this,"_name",void 0),s(this,"_callbacks",void 0),this._name=e,
this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return v(this._callbacks,e)}
triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],l(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=bo(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}}const Fa=A.createLogger("RequestServer");Os={CONTROLLER_ATTACHED:"RequestServer:controllerAttached",
STARTED:"RequestServer:started",STOPPED:"RequestServer:stopped"};class Da{static setLogLevel(e){Fa.setLogLevel(e)}on(e,t
){return this._observer.listenEvent(e,t)}constructor(e="http://localhost:3000"){s(this,"_server",void 0),s(this,
"_router",void 0),s(this,"_handleRequestCallback",void 0),s(this,"_observer",void 0),this._observer=new Va(
"RequestServer"),this._server=Da.createServerService(e),this._router=new Ua,
this._handleRequestCallback=this._handleRequest.bind(this),this._server.setHandler(this._handleRequestCallback)}destroy(
){this._observer.destroy()}attachController(e){if(!ve(e))throw new TypeError(
"RequestServer: The provided controller was not RequestController");this._router.attachController(e),
this._observer.hasCallbacks(Os.CONTROLLER_ATTACHED)&&this._observer.triggerEvent(Os.CONTROLLER_ATTACHED)}start(){
Fa.debug("Starting server"),this._server.start(),this._observer.hasCallbacks(Os.STARTED)&&this._observer.triggerEvent(
Os.STARTED)}stop(){Fa.debug("Stopping server"),this._server.stop(),this._observer.hasCallbacks(Os.STOPPED
)&&this._observer.triggerEvent(Os.STOPPED)}async _handleRequest(t,r){var e,n,i=t.method,o=t.url;try{e=ie(i),
n=await this._router.handleRequest(e,o,e=>Da._requestBodyParser(t,e),this._parseRequestHeaders(t.headers)),Fa.debug(
`"${i} ${o}": Processing responseEntity`),this._handleResponse(n,r)}catch(e){Fa.debug(
`"${i} ${o}": Error, passing it on: `,e),this._handleErrorResponse(e,r)}}static async _requestBodyParser(e,t){
return"application/x-www-form-urlencoded"!==(null!=(t=null==(t=t.getFirst("content-type"))?void 0:t.toLowerCase()
)?t:"application/json")?va.getRequestDataAsJson(e):va.getRequestDataAsFormUrlEncoded(e)}_handleResponse(e,r){
var t=e.getStatusCode();r.statusCode=t,r.statusMessage=se(t);const n=e.getHeaders();n.isEmpty()||n.keySet().forEach(e=>{
var t=null!=(t=n.getValue(e))?t:"";Fa.debug(`_handleResponse: Setting response header as "${e}": "${t}"`),G(t
)?r.setHeader(e,[...t]):r.setHeader(e,t)}),e.hasBody()?w(e=e.getBody())?(Fa.debug("_handleResponse: Ending as text ",t,e
),r.end(e)):(Fa.debug("_handleResponse: Ending as json ",t,e),r.end(JSON.stringify(e,null,2))):(Fa.debug(
"_handleResponse: Ending without body ",t),r.end())}_handleErrorResponse(e,t){var r=oe(e)?new N(e):ce(e)?new N(e,
e.getStatusCode()):(Fa.error("_handleErrorResponse_ Exception: ",e),"production"===(null==(r=process)||null==(r=r.env
)?void 0:r.NODE_ENV)?N.internalServerError():new N(ae(p.InternalServerError,"Internal Server Error: "+e),
p.InternalServerError));this._handleResponse(r,t)}_parseRequestHeaders(e){return new Ca(e)}static createServerService(e
){var t;if("http:"===(e=new ra.default.URL(e)).protocol)return t=e.port?parseInt(e.port,10):80,new Sa(t,e.hostname);
throw new TypeError(`RequestServer: Protocol "${e.protocol}" not yet supported`)}}s(Da,"Event",Os);
const Ba=A.createLogger("RequestControllerUtils");class k{static setLogLevel(e){Ba.setLogLevel(e)}
static parseRequestMappings(e){return{methods:bo(e,ne),paths:bo(e,w)}}static attachControllerMapping(e,t){
var t=k.parseRequestMappings(t),r=ye(e,e);me(e,void 0===r?{mappings:[t],controllerProperties:{}}:g(g({},r),{},{
mappings:yi([],r.mappings,[t])}))}static attachControllerMethodMapping(e,t,r){var n=ye(e,e),t=k.parseRequestMappings(t);
void 0===n?me(e,{mappings:[],controllerProperties:{[r]:{mappings:[t],params:[],modelAttributes:[]}}}):v(
n.controllerProperties,r)?me(e,g(g({},n),{},{controllerProperties:g(g({},n.controllerProperties),{},{[r]:g(g({},
n.controllerProperties[r]),{},{mappings:yi([t],n.controllerProperties[r].mappings)})})})):me(e,g(g({},n),{},{
controllerProperties:g(g({},n.controllerProperties),{},{[r]:{mappings:[t],params:[],modelAttributes:[]}})}))}
static _setControllerMethodParam(e,t,r,n,i=!1){var o,s=ye(e,e);void 0===s?(o=k._initializeParams(r,n),me(e,i?{mappings:[
],controllerProperties:{[t]:{requestBodyRequired:!0,mappings:[],modelAttributes:[],params:o}}}:{mappings:[],
controllerProperties:{[t]:{mappings:[],modelAttributes:[],params:o}}})):v(s.controllerProperties,t)?(
o=k._reinitializeParams(s,t,r,n),me(e,g(g({},s),{},i?{controllerProperties:g(g({},s.controllerProperties),{},{[t]:g(g({}
,s.controllerProperties[t]),{},{requestBodyRequired:!0,params:o})})}:{controllerProperties:g(g({},s.controllerProperties
),{},{[t]:g(g({},s.controllerProperties[t]),{},{params:o})})}))):(o=k._initializeParams(r,n),me(e,g(g({},s),{},i?{
controllerProperties:g(g({},s.controllerProperties),{},{[t]:{requestBodyRequired:!0,modelAttributes:[],mappings:[],
params:o}})}:{controllerProperties:g(g({},s.controllerProperties),{},{[t]:{mappings:[],modelAttributes:[],params:o}})}))
)}static findController(e){return Be(e)&&ve(e)?e:Y(e)&&Be(null==e?void 0:e.constructor)&&ve(e.constructor
)?e.constructor:void 0}static setControllerMethodModelAttributeParam(e,t,r,n,i){Ba.debug(
"setControllerMethodModelAttributeParam: attributeName =",n,i),n={objectType:b.MODEL_ATTRIBUTE,attributeName:n,
valueType:i},k._setControllerMethodParam(e,t,r,n)}static attachControllerMethodModelAttributeBuilder(e,t,r,n){Ba.debug(
"attachControllerMethodModelAttributeBuilder: attributeName =",n,t);var i=ye(e,e);void 0===i?me(e,{mappings:[],
controllerProperties:{[t]:{mappings:[],params:[],modelAttributes:[n]}}}):v(i.controllerProperties,t)?me(e,g(g({},i),{},{
controllerProperties:g(g({},i.controllerProperties),{},{[t]:g(g({},i.controllerProperties[t]),{},{modelAttributes:yi([n]
,i.controllerProperties[t].modelAttributes)})})})):me(e,g(g({},i),{},{controllerProperties:g(g({},i.controllerProperties
),{},{[t]:{mappings:[],params:[],modelAttributes:[n]}})}))}static setControllerMethodQueryParam(e,t,r,n,i){n={
objectType:b.QUERY_PARAM,queryParam:n,valueType:i},k._setControllerMethodParam(e,t,r,n)}
static setControllerMethodHeader(e,t,r,n,i,o,s){n={objectType:b.REQUEST_HEADER,headerName:n,valueType:i,
isRequired:null!=o&&o,defaultValue:s},k._setControllerMethodParam(e,t,r,n)}static setControllerMethodPathVariable(e,t,r,
n,i,o,s,a){n={objectType:b.PATH_VARIABLE,variableName:n,valueType:i,isRequired:null==o||o,decodeValue:null==s||s,
defaultValue:a},k._setControllerMethodParam(e,t,r,n)}static setControllerMethodPathVariableMap(e,t,r,n){n={
objectType:b.PATH_VARIABLE_MAP,defaultValues:n},k._setControllerMethodParam(e,t,r,n)}
static setControllerMethodHeaderMap(e,t,r,n){n={objectType:b.REQUEST_HEADER_MAP,defaultValues:n},
k._setControllerMethodParam(e,t,r,n)}static setControllerMethodBodyParam(e,t,r,n){n={objectType:b.REQUEST_BODY,
valueType:n},k._setControllerMethodParam(e,t,r,n,!0)}static _initializeParams(e,t){let r=[];for(;e>=r.length;)r.push(
null);return r[e]=t,r}static _reinitializeParams(e,t,r,n){let i=yi([],e.controllerProperties[t].params);for(
;r>=i.length;)i.push(null);return i[r]=n,i}}const j=A.createLogger("Request");class L{static setLogLevel(e){
j.setLogLevel(e),Ca.setLogLevel(e),k.setLogLevel(e)}static mapping(...i){return(e,t,r)=>{var n=k.findController(e);
void 0!==n?void 0===t?k.attachControllerMapping(n,i):k.attachControllerMethodMapping(n,i,t):j.debug(
"mapping: for other: config=",i,"target=",e,"propertyKey=",t,"descriptor=",r)}}static Mapping(...e){return L.mapping(
...e)}static param(e,t,r){if(w(e)&&void 0===r&&(void 0===t||he(t))){const o=e,s=null!=t?t:m.STRING;return(e,t,r)=>{
L._param(e,t,r,o,s)}}var n=m.STRING,i=""+r;L._param(e,t,r,i,n)}static _param(e,t,r,n,i){var o=L._getRequestController(e,
t,r);void 0!==o?k.setControllerMethodQueryParam(o,t,r,n,i):j.warn("_param: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static _getRequestController(e,t,r){if(w(t)&&u(r))return k.findController(e)}
static Param(e,t,r){return L.param(e,t,r)}static header(e,t,r){var n,s;if(j.debug("header: ",e,t,r),!w(t)||!u(r)){if(w(e
)){const a=e;if(void 0!==t&&(!(s=t)||void 0!==(null==s?void 0:s.required)&&!Yo(null==s?void 0:s.required)||void 0!==(
null==s?void 0:s.defaultValue)&&!w(null==s?void 0:s.defaultValue)))throw new TypeError(
"Request.header: Argument 2 is not type of RequestHeaderOptions: "+t);let i=void 0,o=void 0;if(void 0!==(s=t))if(Yo(s)
)i=s;else{if(!Y(s))throw new TypeError("Request.header: Invalid type of options");i=null!=(n=null==s?void 0:s.required
)?n:void 0,o=null!=(n=null==s?void 0:s.defaultValue)?n:void 0}return j.debug("header: init: ",a),(e,t,r)=>{if(w(t)&&u(r)
){var n=k.findController(e);if(void 0!==n)return void k.setControllerMethodHeader(n,t,r,a,m.STRING,i,o)}j.warn(
"header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(s=e)&&(
!s||void 0!==(null==s?void 0:s.defaultValues)&&!de(null==s?void 0:s.defaultValues)))throw new TypeError(
"Request.header: Invalid type of options");const i=null==s?void 0:s.defaultValues;return(e,t,r)=>{w(t)&&u(r
)?L._setMethodHeaderMap(e,t,r,i):j.warn("header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,
"; paramIndex=",r)}}L._setMethodHeaderMap(e,t,r,void 0)}static _setMethodHeaderMap(e,t,r,n){var i=k.findController(e);
void 0!==i?k.setControllerMethodHeaderMap(i,t,r,n):j.warn("_setMethodHeaderMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static Header(e,t,r){return L.header(e,t,r)}static pathVariable(e,t,
r){var n,a;if(j.debug("pathVariable: ",e,t,r),!w(t)||!u(r)){const c=e;if(w(c)){if(void 0!==t&&!((n=t)&&J(
null==n?void 0:n.required)&&($(a=null==n?void 0:n.defaultValue)||w(a))&&J(null==n?void 0:n.decodeValue))
)throw new TypeError("Request.pathVariable: Argument 2 is not type of RequestPathVariableOptions: "+t);let i=void 0,
o=void 0,s=!0;if(void 0!==(a=t))if(Yo(a))i=a;else{if(!Y(a))throw new TypeError(
"Request.pathVariable: Invalid type of options");i=null!=(n=null==a?void 0:a.required)?n:void 0,o=null!=(
n=null==a?void 0:a.defaultValue)?n:void 0,s=null==(n=null==a?void 0:a.decodeValue)||n}return j.debug(
"pathVariable: init: ",c),(e,t,r)=>{if(w(t)&&u(r)){var n=k.findController(e);if(void 0!==n
)return void k.setControllerMethodPathVariable(n,t,r,c,m.STRING,i,s,o)}j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(a=c)&&!Y(
null==a?void 0:a.defaultValues))throw new TypeError("Request.pathVariable: Invalid type of options");const i=a&&null!=(
n=null==a?void 0:a.defaultValues)?n:void 0;return(e,t,r)=>{w(t)&&u(r)?L._setPathVariableMap(e,t,r,i):j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}a=e,n=t,e=r,
L._setPathVariableMap(a,n,e,void 0)}static _setPathVariableMap(e,t,r,n){var i=k.findController(e);
void 0!==i?k.setControllerMethodPathVariableMap(i,t,r,n):j.warn("_setPathVariableMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static PathVariable(e,t,r){return L.pathVariable(e,t,r)}
static modelAttribute(i){if(j.debug("modelAttribute: ",i),w(i))return(e,t,r)=>{if(w(t)){var n=k.findController(e);if(
void 0!==n){if(u(r))return void k.setControllerMethodModelAttributeParam(n,t,r,i,m.JSON);if(void 0!==r
)return void k.attachControllerMethodModelAttributeBuilder(n,t,r,i)}}j.warn(
"modelAttribute: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)};throw new TypeError(
"Request.modelAttribute: Argument 1 is not string: "+i)}static body(e,t,r){var n=k.findController(e);void 0!==n&&w(t
)&&u(r)?k.setControllerMethodBodyParam(n,t,r,m.JSON):j.warn("body: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static Body(e,t,r){return L.body(e,t,r)}static optionsMapping(...e){
return L.mapping(L.Method.OPTIONS,...e)}static getMapping(...e){return L.mapping(L.Method.GET,...e)}static Get(...e){
return L.getMapping(...e)}static postMapping(...e){return L.mapping(L.Method.POST,...e)}static Post(...e){
return L.postMapping(...e)}static deleteMapping(...e){return L.mapping(L.Method.DELETE,...e)}static Delete(...e){
return L.deleteMapping(...e)}static putMapping(...e){return L.mapping(L.Method.PUT,...e)}static Put(...e){
return L.putMapping(...e)}static createBadRequestError(e){return ae(p.BadRequest,e)}static createNotFoundRequestError(e
){return ae(p.NotFound,e)}static createMethodNotAllowedRequestError(e){return ae(p.MethodNotAllowed,e)}
static createConflictRequestError(e){return ae(p.Conflict,e)}static createInternalErrorRequestError(e){return ae(
p.InternalServerError,e)}static throwBadRequestError(e){throw L.createBadRequestError(e)}
static throwNotFoundRequestError(e){throw L.createNotFoundRequestError(e)}static throwMethodNotAllowedRequestError(e){
throw L.createMethodNotAllowedRequestError(e)}static throwConflictRequestError(e){throw L.createConflictRequestError(e)}
static throwInternalErrorRequestError(e){throw L.createInternalErrorRequestError(e)}}s(L,"Method",d),s(L,"Status",p),s(L
,"ParamType",m),s(L,"Type",Ss),s(L,"Error",ya);const Ha=A.createLogger("FiHgWhoisBackendController");s(Ns=class{
static setWhoisService(e){this._whois=e}static async getIndex(e,t){try{var r;return w(t)&&t?(
r=await this._whois.whoisLookup(t),N.ok({payload:r})):N.badRequest().body(Se(
'Lookup address (Query param "a") must be defined and a string',400))}catch(e){return Ha.error("ERROR: ",e),
N.internalServerError().body(Se("Internal Server Error",500))}}},"_whois",void 0);let $a=Ns;Pe([L.getMapping("/"),qe(0,(
x={required:!1,defaultValue:""},j.debug("RequestHeader: ","Authorization",x,void 0),L.header("Authorization",x,void 0)))
,qe(1,L.param("a",void 0,void 0)),xe("design:type",Function),xe("design:paramtypes",[String,String]),xe(
"design:returntype",Promise)],$a,"getIndex",null),$a=Pe([L.mapping("/")],$a);const Ga=A.createLogger("NodeWhoisService")
class Ja{constructor(e){s(this,"_servers",void 0),this._servers=e}async whoisLookup(e,t){var n,i,o,r,s,a;let c=(t=g(g({}
,{follow:2,timeout:6e4}),null!=t?t:{})).server;s=t.timeout;let u;if(!c)switch(!0){case 0<=e.indexOf("@"):
throw new Error("lookup: email addresses not supported");case 0!==Ys.isIP(e):c=this._servers._IP;break;default:for(
u=Zs.toASCII(e);c=this._servers[u],u&&!c;)u=u.replace(/^.+?(\.|$)/,"")}if(!c)throw new Error(
"lookup: no whois server is known for this kind of object");w(c)&&(r=c.split(":"),c={host:r[0],
port:2<=r.length?void 0===(a=r[1])||!W(a)&&(w(a)&&0===(a=$o(a)).length||!W(a=ps(a)))?void 0:a:43}),c=g(g({},{port:43,
query:"$addr\r\n"}),c);const l={host:(c=g(g({},c),{},{host:c.host.trim()})).host,port:c.port},h=(t.bind&&(
l.localAddress=t.bind),Ga.debug("sockOpts = ",l),Ys.connect(l)),d=(s&&h.setTimeout(s),r=!1!==c.punycode&&!1!==t.punycode
,t.encoding&&h.setEncoding(t.encoding),n=h,i=0!=r?Zs.toASCII(e):e,o=c.query,await new Promise((e,t)=>{try{const r=[];
return n.write(o.replace("$addr",i)),n.on("data",e=>{r.push(e)}),n.on("timeout",()=>{n.destroy(),t(new Error(
"lookup: timeout"))}),n.on("error",e=>{t(e)}),n.on("close",()=>{e(Buffer.concat(r))})}catch(e){t(e)}})),p=d.toString(
"utf8");return Ga.debug("data = ",p),0<t.follow&&(s=function(){const e=p.replace(/\r/gm,"").match(
/(ReferralServer|Registrar Whois|Whois Server|WHOIS Server|Registrar WHOIS Server):[^\S\n]*((?:r?whois|https?):\/\/)?(.*)/
);return null!=e?(t=e[3].trim()).replace(/^[:\s]+/,"").replace(/^https?[:\/]+/,"")||t:void 0;var t}())&&s!==c.host?[{
server:c.host,data:p}].concat(await this.whoisLookup(e,g(g({},t),{follow:t.follow-1,server:s}))):[{server:c.host,data:p}
]}}const Wa={"br.com":"whois.centralnic.net","cn.com":"whois.centralnic.net","de.com":"whois.centralnic.net",
"eu.com":"whois.centralnic.net","gb.com":"whois.centralnic.net","gb.net":"whois.centralnic.net",
"gr.com":"whois.centralnic.net","hu.com":"whois.centralnic.net","in.net":"whois.centralnic.net",
"jpn.com":"whois.centralnic.net","no.com":"whois.centralnic.net","qc.com":"whois.centralnic.net",
"ru.com":"whois.centralnic.net","sa.com":"whois.centralnic.net","se.com":"whois.centralnic.net",
"se.net":"whois.centralnic.net","uk.com":"whois.centralnic.net","uk.net":"whois.centralnic.net",
"us.com":"whois.centralnic.net","uy.com":"whois.centralnic.net","web.com":"whois.centralnic.net",
"za.com":"whois.centralnic.net",com:{host:"whois.verisign-grs.com",query:"DOMAIN $addr\r\n"},"za.net":"whois.za.net",
net:{host:"whois.verisign-grs.com",query:"DOMAIN $addr\r\n"},"eu.org":"whois.eu.org","za.org":"whois.za.org",
org:"whois.pir.org",edu:"whois.educause.edu",gov:"whois.dotgov.gov",int:"whois.iana.org",mil:null,
"e164.arpa":"whois.ripe.net","in-addr.arpa":null,arpa:"whois.iana.org",aero:"whois.aero",asia:"whois.nic.asia",
biz:"whois.biz",cat:"whois.cat",coop:"whois.nic.coop",info:"whois.afilias.net",jobs:"jobswhois.verisign-grs.com",
mobi:"whois.dotmobiregistry.net",museum:"whois.museum",name:"whois.nic.name",post:"whois.dotpostregistry.net",
pro:"whois.afilias.net",tel:"whois.nic.tel",travel:"whois.nic.travel",xxx:"whois.nic.xxx",academy:"whois.nic.academy",
accountants:"whois.nic.accountants",actor:"whois.nic.actor",agency:"whois.nic.agency",airforce:"whois.nic.airforce",
apartments:"whois.nic.apartments",app:"whois.nic.google",archi:"whois.nic.archi",army:"whois.nic.army",
associates:"whois.nic.associates",attorney:"whois.nic.attorney",auction:"whois.nic.auction",audio:"whois.nic.audio",
autos:"whois.nic.autos",axa:"whois.nic.axa",band:"whois.nic.band",bar:"whois.nic.bar",bargains:"whois.nic.bargains",
bayern:"whois.nic.bayern",beer:"whois.nic.beer",berlin:"whois.nic.berlin",best:"whois.nic.best",bid:"whois.nic.bid",
bike:"whois.nic.bike",bingo:"whois.nic.bingo",black:"whois.nic.black",blackfriday:"whois.nic.blackfriday",
blog:"whois.nic.blog",blue:"whois.nic.blue",boutique:"whois.nic.boutique",build:"whois.nic.build",
builders:"whois.nic.builders",business:"whois.nic.business",buzz:"whois.nic.buzz",cab:"whois.nic.cab",
cafe:"whois.nic.cafe",camera:"whois.nic.camera",camp:"whois.nic.camp",capital:"whois.nic.capital",
cards:"whois.nic.cards",care:"whois.nic.care",career:"whois.nic.career",careers:"whois.nic.careers",
cash:"whois.nic.cash",casino:"whois.nic.casino",catering:"whois.nic.catering",center:"whois.nic.center",
ceo:"whois.nic.ceo",charity:"whois.nic.charity",chat:"whois.nic.chat",cheap:"whois.nic.cheap",
christmas:"whois.nic.christmas",church:"whois.nic.church",citic:"whois.nic.citic",city:"whois.nic.city",
claims:"whois.nic.claims",cleaning:"whois.nic.cleaning",clinic:"whois.nic.clinic",clothing:"whois.nic.clothing",
cloud:"whois.nic.cloud",club:"whois.nic.club",coach:"whois.nic.coach",codes:"whois.nic.codes",coffee:"whois.nic.coffee",
college:"whois.nic.college",cologne:"whois.nic.cologne",community:"whois.nic.community",company:"whois.nic.company",
computer:"whois.nic.computer",condos:"whois.nic.condos",construction:"whois.nic.construction",
consulting:"whois.nic.consulting",contractors:"whois.nic.contractors",cooking:"whois.nic.cooking",cool:"whois.nic.cool",
country:"whois.nic.country",coupons:"whois.nic.coupons",credit:"whois.nic.credit",creditcard:"whois.nic.creditcard",
cruises:"whois.nic.cruises",dance:"whois.nic.dance",dating:"whois.nic.dating",deals:"whois.nic.deals",
degree:"whois.nic.degree",delivery:"whois.nic.delivery",democrat:"whois.nic.democrat",dental:"whois.nic.dental",
dentist:"whois.nic.dentist",desi:"whois.nic.desi",dev:"whois.nic.google",diamonds:"whois.nic.diamonds",
digital:"whois.donuts.co",direct:"whois.nic.direct",directory:"whois.nic.directory",discount:"whois.nic.discount",
dnp:"whois.nic.dnp",doctor:"whois.nic.doctor",dog:"whois.nic.dog",domains:"whois.nic.domains",
education:"whois.nic.education",email:"whois.nic.email",energy:"whois.nic.energy",engineer:"whois.nic.engineer",
engineering:"whois.nic.engineering",enterprises:"whois.nic.enterprises",equipment:"whois.nic.equipment",
estate:"whois.nic.estate",eus:"whois.nic.eus",events:"whois.nic.events",exchange:"whois.nic.exchange",
expert:"whois.nic.expert",exposed:"whois.nic.exposed",express:"whois.nic.express",fail:"whois.nic.fail",
family:"whois.nic.family",fan:"whois.nic.fan",farm:"whois.nic.farm",feedback:"whois.nic.feedback",
finance:"whois.nic.finance",financial:"whois.nic.financial",fish:"whois.nic.fish",fishing:"whois.nic.fishing",
fitness:"whois.nic.fitness",flights:"whois.nic.flights",florist:"whois.nic.florist",foo:"whois.nic.foo",
football:"whois.nic.football",forsale:"whois.nic.forsale",foundation:"whois.nic.foundation",frogans:"whois.nic.frogans",
fun:"whois.nic.fun",fund:"whois.nic.fund",furniture:"whois.nic.furniture",futbol:"whois.nic.futbol",fyi:"whois.nic.fyi",
gal:"whois.nic.gal",gallery:"whois.nic.gallery",games:"whois.nic.games",gift:"whois.nic.gift",gifts:"whois.nic.gifts",
gives:"whois.nic.gives",glass:"whois.nic.glass",global:"whois.nic.global",globo:"whois.nic.globo",gmbh:"whois.nic.gmbh",
gmo:"whois.nic.gmo",gold:"whois.nic.gold",golf:"whois.nic.golf",gop:"whois.nic.gop",graphics:"whois.nic.graphics",
gratis:"whois.nic.gratis",gripe:"whois.nic.gripe",group:"whois.nic.group",guide:"whois.nic.guide",
guitars:"whois.nic.guitars",guru:"whois.nic.guru",haus:"whois.nic.haus",healthcare:"whois.nic.healthcare",
hiphop:"whois.nic.hiphop",hockey:"whois.nic.hockey",holdings:"whois.nic.holdings",holiday:"whois.nic.holiday",
homes:"whois.nic.homes",horse:"whois.nic.horse",hospital:"whois.nic.hospital",host:"whois.nic.host",
house:"whois.nic.house",immo:"whois.nic.immo",immobilien:"whois.nic.immobilien",industries:"whois.nic.industries",
ink:"whois.nic.ink",institute:"whois.nic.institute",insure:"whois.nic.insure",international:"whois.nic.international",
investments:"whois.nic.investments",irish:"whois.nic.irish",jetzt:"whois.nic.jetzt",jewelry:"whois.nic.jewelry",
juegos:"whois.nic.juegos",kaufen:"whois.nic.kaufen",kim:"whois.nic.kim",kitchen:"whois.nic.kitchen",
kiwi:"whois.nic.kiwi",koeln:"whois.nic.koeln",kred:"whois.nic.kred",land:"whois.nic.land",lawyer:"whois.nic.lawyer",
lease:"whois.nic.lease",legal:"whois.nic.legal",life:"whois.nic.life",lighting:"whois.nic.lighting",
limited:"whois.nic.limited",limo:"whois.nic.limo",link:"whois.nic.link",live:"whois.nic.live",loans:"whois.nic.loans",
london:"whois.nic.london",love:"whois.nic.love",ltd:"whois.nic.ltd",luxe:"whois.nic.luxe",luxury:"whois.nic.luxury",
maison:"whois.nic.maison",management:"whois.nic.management",mango:"whois.nic.mango",market:"whois.nic.market",
marketing:"whois.nic.marketing",mba:"whois.nic.mba",media:"whois.nic.media",meet:"whois.nic.meet",
memorial:"whois.nic.memorial",menu:"whois.nic.menu",miami:"whois.nic.miami",moda:"whois.nic.moda",moe:"whois.nic.moe",
monash:"whois.nic.monash",money:"whois.nic.money",mortgage:"whois.nic.mortgage",moscow:"whois.nic.moscow",
motorcycles:"whois.nic.motorcycles",movie:"whois.nic.movie",nagoya:"whois.nic.nagoya",navy:"whois.nic.navy",
network:"whois.nic.network",neustar:"whois.nic.neustar",news:"whois.nic.news",ninja:"whois.nic.ninja",
nyc:"whois.nic.nyc",okinawa:"whois.nic.okinawa",one:"whois.nic.one",onl:"whois.nic.onl",online:"whois.centralnic.net",
paris:"whois.nic.paris",partners:"whois.nic.partners",parts:"whois.nic.parts",photo:"whois.nic.photo",
photography:"whois.nic.photography",photos:"whois.nic.photos",pics:"whois.nic.pics",pictures:"whois.nic.pictures",
pink:"whois.nic.pink",pizza:"whois.nic.pizza",place:"whois.nic.place",plumbing:"whois.nic.plumbing",
plus:"whois.nic.plus",press:"whois.nic.press",productions:"whois.nic.productions",properties:"whois.nic.properties",
pub:"whois.nic.pub",qpon:"whois.nic.qpon",quebec:"whois.nic.quebec",recipes:"whois.nic.recipes",red:"whois.nic.red",
rehab:"whois.nic.rehab",reise:"whois.nic.reise",reisen:"whois.nic.reisen",ren:"whois.nic.ren",
rentals:"whois.nic.rentals",repair:"whois.nic.repair",report:"whois.nic.report",republican:"whois.nic.republican",
rest:"whois.nic.rest",restaurant:"whois.nic.restaurant",reviews:"whois.nic.reviews",rich:"whois.nic.rich",
rio:"whois.nic.rio",rip:"whois.nic.rip",rocks:"whois.nic.rocks",rodeo:"whois.nic.rodeo",ruhr:"whois.nic.ruhr",
run:"whois.nic.run",ryukyu:"whois.nic.ryukyu",saarland:"whois.nic.saarland",sale:"whois.nic.sale",
salon:"whois.nic.salon",sarl:"whois.nic.sarl",school:"whois.nic.school",schule:"whois.nic.schule",
services:"whois.nic.services",sexy:"whois.nic.sexy",shiksha:"whois.nic.shiksha",shoes:"whois.nic.shoes",
shopping:"whois.nic.shopping",show:"whois.nic.show",singles:"whois.nic.singles",site:"whois.nic.site",
soccer:"whois.nic.soccer",social:"whois.nic.social",software:"whois.nic.software",sohu:"whois.nic.sohu",
solar:"whois.nic.solar",solutions:"whois.nic.solutions",soy:"whois.nic.soy",space:"whois.nic.space",
sport:"whois.nic.sport",store:"whois.nic.store",studio:"whois.nic.studio",style:"whois.nic.style",
supplies:"whois.nic.supplies",supply:"whois.nic.supply",support:"whois.nic.support",surgery:"whois.nic.surgery",
systems:"whois.nic.systems",tattoo:"whois.nic.tattoo",tax:"whois.nic.tax",taxi:"whois.nic.taxi",team:"whois.nic.team",
tech:"whois.nic.tech",technology:"whois.nic.technology",tennis:"whois.nic.tennis",theater:"whois.nic.theater",
tienda:"whois.nic.tienda",tips:"whois.nic.tips",tires:"whois.nic.tires",today:"whois.nic.today",tokyo:"whois.nic.tokyo",
tools:"whois.nic.tools",top:"whois.nic.top",tours:"whois.nic.tours",town:"whois.nic.town",toys:"whois.nic.toys",
trade:"whois.nic.trade",training:"whois.nic.training",university:"whois.nic.university",uno:"whois.nic.uno",
vacations:"whois.nic.vacations",vegas:"whois.nic.vegas",ventures:"whois.nic.ventures",
versicherung:"whois.nic.versicherung",vet:"whois.nic.vet",viajes:"whois.nic.viajes",video:"whois.nic.video",
villas:"whois.nic.villas",vin:"whois.nic.vin",vip:"whois.nic.vip",vision:"whois.nic.vision",vodka:"whois.nic.vodka",
vote:"whois.nic.vote",voting:"whois.nic.voting",voto:"whois.nic.voto",voyage:"whois.nic.voyage",wang:"whois.nic.wang",
watch:"whois.nic.watch",webcam:"whois.nic.webcam",website:"whois.nic.website",wed:"whois.nic.wed",wien:"whois.nic.wien",
wiki:"whois.nic.wiki",wine:"whois.nic.wine",works:"whois.nic.works",world:"whois.nic.world",wtc:"whois.nic.wtc",
wtf:"whois.nic.wtf","xn--3bst00m":"whois.nic.xn--3bst00m","xn--3ds443g":"whois.nic.xn--3ds443g",
"xn--55qw42g":"whois.nic.xn--55qw42g","xn--55qx5d":"whois.nic.xn--55qx5d","xn--6frz82g":"whois.nic.xn--6frz82g",
"xn--6qq986b3xl":"whois.nic.xn--6qq986b3xl","xn--80adxhks":"whois.nic.xn--80adxhks",
"xn--80asehdb":"whois.nic.xn--80asehdb","xn--80aswg":"whois.nic.xn--80aswg","xn--c1avg":"whois.nic.xn--c1avg",
"xn--cg4bki":"whois.nic.xn--cg4bki","xn--czrs0t":"whois.nic.xn--czrs0t","xn--czr694b":"whois.nic.xn--czr694b",
"xn--czru2d":"whois.nic.xn--czru2d","xn--d1acj3b":"whois.nic.xn--d1acj3b","xn--fiq228c5hs":"whois.nic.xn--fiq228c5hs",
"xn--fiq64b":"whois.nic.xn--fiq64b","xn--i1b6b1a6a2e":"whois.nic.xn--i1b6b1a6a2e","xn--io0a7i":"whois.nic.xn--io0a7i",
"xn--mgbab2bd":"whois.nic.xn--mgbab2bd","xn--ngbc5azd":"whois.nic.xn--ngbc5azd","xn--nqv7f":"whois.nic.xn--nqv7f",
"xn--nqv7fs00ema":"whois.nic.xn--nqv7fs00ema","xn--q9jyb4c":"whois.nic.xn--q9jyb4c",
"xn--rhqv96g":"whois.nic.xn--rhqv96g","xn--ses554g":"whois.nic.xn--ses554g","xn--unup4y":"whois.nic.xn--unup4y",
"xn--vhquv":"whois.nic.xn--vhquv","xn--zfr164b":"whois.nic.xn--zfr164b",xyz:"whois.nic.xyz",yachts:"whois.nic.yachts",
yokohama:"whois.nic.yokohama",zone:"whois.nic.zone",ac:"whois.nic.ac",ad:null,ae:"whois.aeda.net.ae",af:"whois.nic.af",
ag:"whois.nic.ag",ai:"whois.nic.ai",al:null,am:"whois.amnic.net",an:null,ao:null,aq:null,ar:null,as:"whois.nic.as",
"priv.at":"whois.nic.priv.at",at:"whois.nic.at",au:"whois.auda.org.au",aw:"whois.nic.aw",ax:"whois.ax",az:null,ba:null,
bb:null,bd:null,be:"whois.dns.be",bf:null,bg:"whois.register.bg",bh:null,bi:"whois1.nic.bi",bj:"whois.nic.bj",bl:null,
bm:"whois.afilias-srs.net",bn:"whois.bn",bo:"whois.nic.bo",bq:null,br:"whois.registro.br",bs:null,bt:null,bv:null,
by:"whois.cctld.by",bw:"whois.nic.net.bw",bz:"whois.afilias-grs.info","co.ca":"whois.co.ca",ca:"whois.cira.ca",
cc:"ccwhois.verisign-grs.com",cd:"whois.nic.cd",cf:"whois.dot.cf",cg:null,ch:"whois.nic.ch",ci:"whois.nic.ci",ck:null,
cl:"whois.nic.cl",cm:"whois.netcom.cm","edu.cn":"whois.edu.cn",cn:"whois.cnnic.cn","uk.co":"whois.uk.co",
co:"whois.nic.co",cr:"whois.nic.cr",cu:null,cv:null,cw:null,cx:"whois.nic.cx",cy:null,cz:"whois.nic.cz",de:{
host:"whois.denic.de",query:"-T dn $addr\r\n",punycode:!1},dj:null,dk:{host:"whois.dk-hostmaster.dk",
query:"--charset=utf-8 --show-handles $addr\r\n"},dm:"whois.nic.dm",do:"whois.nic.do",dz:"whois.nic.dz",
ec:"whois.nic.ec",ee:"whois.tld.ee",eg:null,eh:null,er:null,es:null,et:null,eu:"whois.eu",fi:"whois.fi",
fj:"whois.usp.ac.fj",fk:null,fm:"whois.nic.fm",fo:"whois.nic.fo",fr:"whois.nic.fr",ga:"whois.dot.ga",gb:null,
gd:"whois.nic.gd",ge:"whois.nic.ge",gf:"whois.mediaserv.net",gg:"whois.gg",gh:"whois.nic.gh",
gi:"whois.afilias-grs.info",gl:"whois.nic.gl",gm:null,gn:null,gp:"whois.nic.gp",gq:"whois.dominio.gq",gr:null,
gs:"whois.nic.gs",gt:null,gu:null,gw:null,gy:"whois.registry.gy",hk:"whois.hkirc.hk",hm:"whois.registry.hm",
hn:"whois.nic.hn",hr:"whois.dns.hr",ht:"whois.nic.ht",hu:"whois.nic.hu",id:"whois.pandi.or.id",
ie:"whois.domainregistry.ie",il:"whois.isoc.org.il",im:"whois.nic.im",in:"whois.registry.in",io:"whois.nic.io",
iq:"whois.cmc.iq",ir:"whois.nic.ir",is:"whois.isnic.is",it:"whois.nic.it",je:"whois.je",jm:null,jo:null,jp:{
host:"whois.jprs.jp",query:"$addr/e\r\n"},ke:"whois.kenic.or.ke",kg:"whois.domain.kg",kh:null,ki:"whois.nic.ki",km:null,
kn:"whois.nic.kn",kp:null,kr:"whois.kr",kw:null,ky:"whois.kyregistry.ky",kz:"whois.nic.kz",la:"whois.nic.la",lb:null,
lc:"whois.afilias-grs.info",li:"whois.nic.li",lk:"whois.nic.lk",lr:null,ls:"whois.nic.ls",lt:"whois.domreg.lt",
lu:"whois.dns.lu",lv:"whois.nic.lv",ly:"whois.nic.ly",ma:"whois.iam.net.ma",mc:null,md:"whois.nic.md",me:"whois.nic.me",
mf:null,mg:"whois.nic.mg",mh:null,mk:"whois.marnet.mk",ml:"whois.dot.ml",mm:null,mn:"whois.nic.mn",mo:null,mp:null,
mq:"whois.mediaserv.net",mr:"whois.nic.mr",ms:"whois.nic.ms",mt:null,mu:"whois.nic.mu",mv:null,mw:"whois.nic.mw",
mx:"whois.mx",my:"whois.domainregistry.my",mz:"whois.nic.mz",na:"whois.na-nic.com.na",nc:"whois.nc",ne:null,
nf:"whois.nic.nf",ng:"whois.nic.net.ng",ni:null,nl:"whois.domain-registry.nl",no:{host:"whois.norid.no",
query:"-c utf-8 $addr\r\n"},np:null,nr:null,nu:"whois.iis.nu",nz:"whois.srs.net.nz",om:"whois.registry.om",pa:null,
pe:"kero.yachay.pe",pf:"whois.registry.pf",pg:null,ph:null,pk:null,"co.pl":"whois.co.pl",pl:"whois.dns.pl",
pm:"whois.nic.pm",pn:null,pr:"whois.nic.pr",ps:"whois.pnina.ps",pt:"whois.dns.pt",pw:"whois.nic.pw",py:null,
qa:"whois.registry.qa",re:"whois.nic.re",ro:"whois.rotld.ro",rs:"whois.rnids.rs","edu.ru":"whois.informika.ru",
ru:"whois.tcinet.ru",rw:"whois.ricta.org.rw",sa:"whois.nic.net.sa",sb:"whois.nic.sb",sc:"whois.afilias-grs.info",
sd:null,se:"whois.iis.se",sg:"whois.sgnic.sg",sh:"whois.nic.sh",si:"whois.arnes.si",sj:null,sk:"whois.sk-nic.sk",
sl:"whois.nic.sl",sm:"whois.nic.sm",sn:"whois.nic.sn",so:"whois.nic.so",sr:null,ss:"whois.nic.ss",st:"whois.nic.st",
su:"whois.tcinet.ru",sv:null,sx:"whois.sx",sy:"whois.tld.sy",sz:null,tc:"whois.nic.tc",td:"whois.nic.td",
tf:"whois.nic.tf",tg:"whois.nic.tg",th:"whois.thnic.co.th",tj:null,tk:"whois.dot.tk",tl:"whois.nic.tl",
tm:"whois.nic.tm",tn:"whois.ati.tn",to:"whois.tonic.to",tp:null,tr:"whois.nic.tr",tt:null,tv:"tvwhois.verisign-grs.com",
tw:"whois.twnic.net.tw",tz:"whois.tznic.or.tz","biz.ua":"whois.biz.ua","co.ua":"whois.co.ua","pp.ua":"whois.pp.ua",
ua:"whois.ua",ug:"whois.co.ug","ac.uk":"whois.ja.net","bl.uk":null,"british-library.uk":null,"gov.uk":"whois.ja.net",
"icnet.uk":null,"jet.uk":null,"mod.uk":null,"nhs.uk":null,"nls.uk":null,"parliament.uk":null,"police.uk":null,
uk:"whois.nic.uk",um:null,"fed.us":"whois.nic.gov",us:"whois.nic.us","com.uy":null,uy:"whois.nic.org.uy",
uz:"whois.cctld.uz",va:null,vc:"whois.afilias-grs.info",ve:"whois.nic.ve",vg:"whois.nic.vg",vi:null,vn:null,
vu:"vunic.vu",wf:"whois.nic.wf",ws:"whois.website.ws",ye:null,yt:"whois.nic.yt","ac.za":"whois.ac.za",
"alt.za":"whois.alt.za","co.za":"whois.registry.net.za","gov.za":"whois.gov.za","net.za":"whois.net.za","org.za":null,
"web.za":"whois.web.za",za:null,zm:"whois.nic.zm",zw:null,"xn--3e0b707e":"whois.kr",
"xn--45brj9c":"whois.inregistry.net","xn--80ao21a":"whois.nic.kz","xn--90a3ac":"whois.rnids.rs",
"xn--clchc0ea0b2g2a9gcd":"whois.sgnic.sg","xn--fiqs8s":"cwhois.cnnic.cn","xn--fiqz9s":"cwhois.cnnic.cn",
"xn--fpcrj9c3d":"whois.inregistry.net","xn--fzc2c9e2c":"whois.nic.lk","xn--gecrj9c":"whois.inregistry.net",
"xn--h2brj9c":"whois.inregistry.net","xn--j1amh":"whois.dotukr.com","xn--j6w193g":"whois.hkirc.hk",
"xn--kprw13d":"whois.twnic.net.tw","xn--kpry57d":"whois.twnic.net.tw","xn--l1acc":"whois.nic.mn",
"xn--lgbbat1ad8j":"whois.nic.dz","xn--mgb9awbf":"whois.registry.om","xn--mgba3a4f16a":"whois.nic.ir",
"xn--mgbaam7a8h":"whois.aeda.net.ae","xn--mgbayh7gpa":null,"xn--mgbbh1a71e":"whois.inregistry.net",
"xn--mgbc0a9azcg":null,"xn--mgberp4a5d4ar":"whois.nic.net.sa","xn--mgbx4cd0ab":"whois.domainregistry.my",
"xn--o3cw4h":"whois.thnic.co.th","xn--ogbpf8fl":"whois.tld.sy","xn--p1ai":"whois.tcinet.ru","xn--pgbs0dh":null,
"xn--s9brj9c":"whois.inregistry.net","xn--wgbh1c":"whois.dotmasr.eg","xn--wgbl6a":"whois.registry.qa",
"xn--xkc2al3hye2a":"whois.nic.lk","xn--xkc2dl3a5ee0h":"whois.inregistry.net","xn--yfro4i67o":"whois.sgnic.sg",
"xn--ygbi2ammx":"whois.pnina.ps","":"whois.ripe.net",_IP:{host:"whois.arin.net",query:"n + $addr\r\n"}},Ka=(
da.initEnvFromDefaultFiles(),A.setLogLevel(Ds),A.createLogger("main"));!async function(e=[]){var t,n;try{Ca.setLogLevel(
h.INFO),Ua.setLogLevel(h.INFO),qa.setLogLevel(h.INFO),Da.setLogLevel(h.INFO),Ka.debug(
"Loglevel as "+A.getLogLevelString());var{scriptName:i,parseStatus:o,exitStatus:s,errorString:a}=class{
static parseArguments(e,t=[]){var r,n,i,o=null!=(r=t.shift())?r:"",s=null!=(r=t.shift())?r:"";if(!s)return{
parseStatus:As.ERROR,exitStatus:3,nodePath:o,scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{
parseStatus:As.ERROR,exitStatus:3,nodePath:o,scriptName:s,freeArgs:[],extraArgs:[]};let a=!0,c=[],u=[];do{if(i=null!=(
n=t.shift())?n:"",a)switch(function(){switch(i){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:
return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:As.HELP,exitStatus:0,nodePath:o,scriptName:s,
freeArgs:c,extraArgs:u};case 1:return{parseStatus:As.VERSION,exitStatus:0,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u
};case 2:a=!1;break;default:if(a){if(ys(i,"-"))return{errorString:"Unknown argument: "+i,parseStatus:As.ERROR,
exitStatus:4,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u};c.push(i)}else u.push(i)}}while(1<=t.length);return{
parseStatus:As.OK,exitStatus:0,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u}}}.parseArguments(pa,e);if(
o===As.HELP||o===As.VERSION)return console.log(`USAGE: ${i} [OPT(s)] ARG(1) [...ARG(N)]

  HG Oy backend.
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    BACKEND_LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`),s;if(a)return console.error("ERROR: "+a),s;t=new Ja(Wa),$a.setWhoisService(t);const c=new Da(wa);c.attachController(
$a),c.start();let r=void 0;return n=new Promise((e,t)=>{try{Ka.debug("Stopping server from RequestServer stop event"),
r=c.on(Da.Event.STOPPED,()=>{r=void 0,e()})}catch(e){t(e)}}),da.setupDestroyHandler(()=>{Ka.debug(
"Stopping server from process utils event"),c.stop(),r&&(r(),r=void 0)},e=>{Ka.error(
"Error while shutting down the service: ",e)}),await n,0}catch(e){return Ka.error("Fatal error: ",e),6}}(process.argv
).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
