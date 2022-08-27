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
t[1])}function D(e){e=this.__data__=new yt(e),this.size=e.size}function B(e){var t=-1,r=null==e?0:e.length;for(
this.__data__=new mt;++t<r;)this.add(e[t])}function H(n,i){function o(){var e=arguments,t=i?i.apply(this,e):e[0],
r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
H.Cache||Gr),o}function $(e){return void 0===e}function G(e){return o(e)}function J(e){return $(e)||Zo(e)}function u(e){
return is(e)}function l(e){return as(e)}function W(e){return hs(e)}function K(e,t){return ei(e,t)}function a(e,t){
return ai(e,t)}function Q(e,t=u,r=void 0){var n;return!!(void 0===r||Fe(n=e)&&a(xs(n),r))&&(n=void 0!==t?t:u,Fe(r=e)&&a(
ee(r),n))}function X(...e){return t=>K(e,e=>e(t))}function Y(e){return Fe(e)}function Z(e){if(void 0!==e&&""!==e
)return""+e}function ee(e,t=u){var r;return G(e)?(r=f(e,(e,t)=>t),_o(r,e=>t(e))):Y(e)?(r=Reflect.ownKeys(e),_o(r,e=>t(e)
)):[]}function te(e){if(!e.startsWith("%{")||!e.endsWith("}"))return Z(e)}function re(e){if(l(e))switch(e){
case p.OPTIONS:return"options";case p.GET:return"get";case p.POST:return"post";case p.PUT:return"put";case p.DELETE:
return"delete";case p.PATCH:return"patch"}throw new TypeError("Unsupported value for stringifyRequestMethod(): "+e)}
function ne(e){return l(e)&&0<=e&&e<=5}function ie(e){if(ne(e))return e;if(u(e))switch(e=e.toLowerCase()){case"options":
return p.OPTIONS;case"get":return p.GET;case"post":return p.POST;case"put":return p.PUT;case"delete":return p.DELETE;
case"patch":return p.PATCH}throw new TypeError(`Cannot parse value "${e}" as a valid RequestMethod`)}function oe(e){if(
l(e))switch(e){case w.Continue:case w.SwitchingProtocols:case w.Processing:case w.CheckPoint:case w.OK:case w.Created:
case w.Accepted:case w.NonAuthoritativeInformation:case w.NoContent:case w.ResetContent:case w.PartialContent:
case w.MultiStatus:case w.AlreadyReported:case w.IMUsed:case w.MultipleChoices:case w.MovedPermanently:case w.Found:
case w.SeeOther:case w.NotModified:case w.TemporaryRedirect:case w.PermanentRedirect:case w.BadRequest:
case w.Unauthorized:case w.PaymentRequired:case w.Forbidden:case w.NotFound:case w.MethodNotAllowed:
case w.NotAcceptable:case w.ProxyAuthenticationRequired:case w.RequestTimeout:case w.Conflict:case w.Gone:
case w.LengthRequired:case w.PreconditionFailed:case w.PayloadTooLarge:case w.URITooLong:case w.UnsupportedMediaType:
case w.RequestedRangeNotSatisfiable:case w.ExpectationFailed:case w.IAmATeapot:case w.UnprocessableEntity:case w.Locked:
case w.FailedDependency:case w.TooEarly:case w.UpgradeRequired:case w.PreconditionRequired:case w.TooManyRequests:
case w.RequestHeaderFieldsTooLarge:case w.UnavailableForLegalReasons:case w.InternalServerError:case w.NotImplemented:
case w.BadGateway:case w.ServiceUnavailable:case w.GatewayTimeout:case w.HttpVersionNotSupported:
case w.VariantAlsoNegotiates:case w.InsufficientStorage:case w.LoopDetected:case w.BandwidthLimitExceeded:
case w.NotExtended:case w.NetworkAuthenticationRequired:return 1}}function se(e){switch(e){case w.Continue:
return"Continue";case w.SwitchingProtocols:return"Switching Protocols";case w.Processing:return"Processing";
case w.CheckPoint:return"Check Point";case w.OK:return"OK";case w.Created:return"Created";case w.Accepted:
return"Accepted";case w.NonAuthoritativeInformation:return"Non-Authoritative Information";case w.NoContent:
return"No Content";case w.ResetContent:return"Reset Content";case w.PartialContent:return"Partial Content";
case w.MultiStatus:return"Multi Status";case w.AlreadyReported:return"Already Reported";case w.IMUsed:return"IM Used";
case w.MultipleChoices:return"Multiple Choices";case w.MovedPermanently:return"Moved Permanently";case w.Found:
return"Found";case w.SeeOther:return"See Other";case w.NotModified:return"Not Modified";case w.TemporaryRedirect:
return"Temporary Redirect";case w.PermanentRedirect:return"Permanent Redirect";case w.BadRequest:return"Bad Request";
case w.Unauthorized:return"Unauthorized";case w.PaymentRequired:return"Payment Required";case w.Forbidden:
return"Forbidden";case w.NotFound:return"Not Found";case w.MethodNotAllowed:return"Method Not Allowed";
case w.NotAcceptable:return"Not Acceptable";case w.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case w.RequestTimeout:return"Request Timeout";case w.Conflict:return"Conflict";case w.Gone:return"Gone";
case w.LengthRequired:return"Length Required";case w.PreconditionFailed:return"Precondition Failed";
case w.PayloadTooLarge:return"Payload Too Large";case w.URITooLong:return"URI Too Long";case w.UnsupportedMediaType:
return"Unsupported Media Type";case w.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case w.ExpectationFailed:return"Expectation Failed";case w.IAmATeapot:return"I Am a Teapot";case w.UnprocessableEntity:
return"Unprocessable Entity";case w.Locked:return"Locked";case w.FailedDependency:return"Failed Dependency";
case w.TooEarly:return"Too Early";case w.UpgradeRequired:return"Upgrade Required";case w.PreconditionRequired:
return"Precondition Required";case w.TooManyRequests:return"Too Many Requests";case w.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case w.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case w.InternalServerError:return"Internal Server Error";case w.NotImplemented:return"Not Implemented";
case w.BadGateway:return"Bad Gateway";case w.ServiceUnavailable:return"Service Unavailable";case w.GatewayTimeout:
return"Gateway Timeout";case w.HttpVersionNotSupported:return"Http Version Not Supported";case w.VariantAlsoNegotiates:
return"Variant Also Negotiates";case w.InsufficientStorage:return"Insufficient Storage";case w.LoopDetected:
return"Loop Detected";case w.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case w.NotExtended:
return"Not Extended";case w.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}function ae(e,t=void 0){return new ma(e,t)}function ce(e){
return e&&e instanceof ma}function ue(){if("undefined"!=typeof window)return window}function le(e){return O.isObject(e
)&&O.hasPropertyMethods(e)&&G(e.methods)&&a(e.methods,ne)&&O.hasPropertyPaths(e)&&G(e.paths)&&a(e.paths,u)}function he(e
){if(l(e))switch(e){case m.JSON:case m.STRING:case m.INTEGER:case m.NUMBER:return!0}return!1}function de(e){
return!!e&&Y(e)&&O.everyPropertyIs(e,e=>u(e)||G(e)&&a(e,u))}function pe(e){return!!e&&(null==e?void 0:e.objectType
)===b.MODEL_ATTRIBUTE&&u(null==e?void 0:e.attributeName)&&he(null==e?void 0:e.valueType)}function we(e){return!!(t=e)&&(
null==t?void 0:t.objectType)===b.QUERY_PARAM&&u(null==t?void 0:t.queryParam)&&he(null==t?void 0:t.valueType)||!!e&&(
null==e?void 0:e.objectType)===b.REQUEST_BODY&&he(null==e?void 0:e.valueType)||!!(t=e)&&(null==t?void 0:t.objectType
)===b.REQUEST_HEADER&&u(null==t?void 0:t.headerName)&&Zo(null==t?void 0:t.isRequired)&&he(null==t?void 0:t.valueType)&&(
void 0===(null==t?void 0:t.defaultValue)||u(null==t?void 0:t.defaultValue))||!!e&&(null==e?void 0:e.objectType
)===b.REQUEST_HEADER_MAP&&(void 0===(null==e?void 0:e.defaultValues)||de(null==e?void 0:e.defaultValues))||!!(t=e)&&(
null==t?void 0:t.objectType)===b.PATH_VARIABLE&&u(null==t?void 0:t.variableName)&&Zo(null==t?void 0:t.isRequired)&&he(
null==t?void 0:t.valueType)&&(void 0===(null==t?void 0:t.defaultValue)||u(null==t?void 0:t.defaultValue))||!!e&&(
null==e?void 0:e.objectType)===b.PATH_VARIABLE_MAP&&(void 0===(null==e?void 0:e.defaultValues)||!!(
t=null==e?void 0:e.defaultValues)&&Y(t)&&O.everyPropertyIs(t,u))||pe(e);var t}function ge(e){return O.isObject(e
)&&O.hasPropertyMappings(e)&&G(e.mappings)&&a(e.mappings,le)&&O.hasPropertyParams(e)&&G(e.params)&&a(e.params,
O.createOrFunction(we,es))}function fe(e){if(!O.isObject(e))return"Value is not object";if(!O.hasPropertyMappings(e)
)return'Property "mappings" did not exist';if(!G(e.mappings))return'Property "mappings" was not an array';if(!a(
e.mappings,le))return'Property "mappings" had some elements which were not RequestMappingObject';if(
!O.hasPropertyParams(e))return'Property "params" did not exist';if(!G(e.params)
)return'Property "params" was not an array';const r=O.createOrFunction(we,es);return a(e.params,r
)?"ok":'Property "params" had some elements which were not RequestParamObject or null: '+_o(f(e.params,(e,t)=>r(e
)?"":`Item #${t} was not null or RequestParamObject`),e=>!!e).join(", ")}function ve(e){var t;return e&&(
!O.hasProperty__requestMappings(e)||(t=e=e[Na],O.isObject(t)&&O.hasPropertyMappings(t)&&G(t.mappings)&&a(t.mappings,le
)&&O.hasPropertyControllerProperties(t)&&Y(t.controllerProperties)&&O.everyPropertyIs(t.controllerProperties,ge
)||void Oa.warn("The internal mapping object was not correct: "+JSON.stringify(e,null,2)+": "+(t=e,O.isObject(t
)?O.hasPropertyMappings(t)?G(t.mappings)?a(t.mappings,le)?O.hasPropertyControllerProperties(t)?Y(t.controllerProperties
)?O.everyPropertyIs(t.controllerProperties,ge
)?"ok":'Property "controllerProperties" was not valid: Some properties were not valid: '+O.explainEveryPropertyIs(
t.controllerProperties,ge,fe
):'Property "controllerProperties" was not valid: Property was not object':'Property "controllerProperties" was not valid: Property did not exist':'Property "mappings" was not valid: Some items were not valid':'Property "mappings" was not valid: Was not array':'Property "mappings" was not valid: Did not exist':"not object"
))))}function ye(e,t){if(O.hasProperty__requestMappings(e))return g(g({},e[Na]),{},{controller:t})}function me(e,t){
const r=g({},t);v(r,"controller")&&delete r.controller,e[Na]=r}function be(e){return u(t=e)||l(t)||Zo(t)||es(t)||Re(e
)||_e(e);var t}function _e(e){return!!Fe(t=e)&&!(t instanceof Date)&&!He(t)&&!G(t)&&Q(t,u,void 0)&&Q(e,u,X(be,$));var t}
function Re(e){return[e,t=void 0,r=void 0,n=void 0]=[e,X(be,$)],!!o(e)&&(i=null!=(i=null==e?void 0:e.length)?i:0,!(
void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||a(e,t)));var t,r,n,i}function Ee(e){return e&&e instanceof ka}
function Te(e){return l(e)}function Pe(e,t,r,n){var i,o,s=arguments.length,
a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if(
"object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(o=e.length-1;0<=o;o--
)(i=e[o])&&(a=(s<3?i(a):3<s?i(t,r,a):i(t,r))||a);return 3<s&&a&&Object.defineProperty(t,r,a),a}function qe(r,n){
return function(e,t){n(e,t,r)}}function Se(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata
)return Reflect.metadata(e,t)}function xe(e,t){return{error:e,code:t}}function Ae(e,t){return{server:e,data:t}}
function Oe(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Ne(e,t){
return e===t||e!=e&&t!=t}function Ce(e,t){for(var r=e.length;r--;)if(oa(e[r][0],t))return r;return-1}var ke,je,Le,Me,ze,
Ie,Ue,Ve,Fe,De,Be,He,$e,Ge,Je,We,Ke,Qe,Xe,Ye,Ze,et,tt,rt,nt,it,ot,st,at,ct,ut,lt,ht,dt,pt,wt,gt,ft,vt,yt,mt,bt,_t,Rt,Et,
Tt,Pt,qt,St,xt,o,At,Ot,Nt,Ct,kt,jt,Lt,Mt,zt,It,Ut,Vt,Ft,Dt,t,Bt,Ht,$t,Gt,Jt,Wt,Kt,Qt,Xt,Yt,Zt,er,tr,rr,nr,ir,or,sr,ar,cr
,ur,lr,hr,dr,pr,wr,gr,fr,vr,yr,mr,br,_r,Rr,Er,Tr,Pr,qr,Sr,xr,Ar,Or,Nr,Cr,kr,jr,Lr,Mr,zr,Ir,Ur,Vr,Fr,Dr,Br,Hr,$r,Gr,Jr,Wr
,Kr,Qr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,cn,un,ln,hn,dn,pn,wn,gn,fn,vn,yn,mn,bn,_n,Rn,En,Tn,e,Pn,qn,Sn,xn,An,On,Nn,Cn,kn,jn,
Ln,Mn,zn,In,Un,r,Vn,Fn,Dn,Bn,f,Hn,$n,Gn,Jn,Wn,Kn,Qn,Xn,Yn,Zn,ei,ti,ri,ni,ii,oi,si,ai,ci,ui,li,hi,di,pi,wi,gi,fi,vi,yi,mi
,bi,_i,Ri,Ei,Ti,Pi,n,qi,Si,xi,Ai,Oi,Ni,Ci,ki,ji,Li,Mi,zi,Ii,Ui,Vi,Fi,Di,Bi,Hi,$i,Gi,Ji,Wi,Ki,i,Qi,Xi,Yi,Zi,eo,to,ro,no,
io,oo,so,ao,co,uo,lo,ho,po,wo,go,fo,vo,yo,mo,bo,_o,Ro,Eo,To,Po,qo,h,So,xo,Ao,Oo,No,Co,c,ko,jo,Lo,Mo,zo,Io,Uo,Vo,Fo,Do,Bo
,Ho,$o,Go,Jo,Wo,Ko,Qo,v,Xo,Yo,Zo,es,ts,rs,ns,is,os,ss,as,cs,us,ls,hs,ds,ps,ws,gs,fs,vs,ys,ms,bs,_s,Rs,Es,Ts,Ps,qs,Ss,xs,
d,p,w,As,y,Os,m,b,Ns,_,Cs,R,E,ks,js,T,Ls,Ms,zs,P,q,Is,Us,Vs,Fs,Ds,Bs,Hs,$s,Gs,Js,Ws,Ks,S=require("fs"),x=require("path")
,Qs=require("url"),Xs=require("querystring"),Ys=require("http"),Zs=require("net"),ea=require("punycode"),ta=z(S),ra=z(x)
,na=z(Qs),ia=I(Xs),
S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,oa=Ne,sa=Ce,aa=Array.prototype.splice,ca=Ce,ua=Ce,la=Ce;U.prototype.clear=function(){this.__data__=[],this.size=0},
U.prototype.delete=function(e){var t=this.__data__;return!((e=sa(t,e))<0||(e==t.length-1?t.pop():aa.call(t,e,1),
--this.size,0))},U.prototype.get=function(e){var t=this.__data__;return(e=ca(t,e))<0?void 0:t[e][1]},
U.prototype.has=function(e){return-1<ua(this.__data__,e)},U.prototype.set=function(e,t){var r=this.__data__,n=la(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},ke=x=U,Xs=function(){this.__data__=new ke,this.size=0},
Jo=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},xo=function(e){return this.__data__.get(e)},
Gi=function(e){return this.__data__.has(e)},S="object"==typeof S&&S&&S.Object===Object&&S,
n="object"==typeof self&&self&&self.Object===Object&&self,Us=(n=S||n||Function("return this")()).Symbol,
Is=Object.prototype,je=Is.hasOwnProperty,Le=Is.toString,Me=Us?Us.toStringTag:void 0,Is=Object.prototype,ze=Is.toString,
Ie=function(e){var t,r,n=je.call(e,Me),i=e[Me];try{t=!(e[Me]=void 0)}catch(e){}return r=Le.call(e),t&&(n?e[Me
]=i:delete e[Me]),r},Ue=function(e){return ze.call(e)},Ve=Us?Us.toStringTag:void 0,De=Is=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ve&&Ve in Object(e)?Ie:Ue)(e)},Be=Fe=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},He=function(e){return!!Be(e)&&("[object Function]"==(e=De(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},_=n["__core-js_shared__"],
_=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||""),$e=_?"Symbol(src)_1."+_:"",_=Function.prototype,Ge=_.toString,Je=He,
We=function(e){return!!$e&&$e in e},Ke=Fe,Qe=_=function(e){if(null!=e){try{return Ge.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},c=/[\\^$.*+?()[\]{}|]/g,Xe=/^\[object .+?Constructor\]$/,i=Function.prototype,Co=Object.prototype,
i=i.toString,Co=Co.hasOwnProperty,Ye=RegExp("^"+i.call(Co).replace(c,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ze=function(e){return!(!Ke(e)||We(e))&&(Je(e
)?Ye:Xe).test(Qe(e))},et=function(e,t){return null==e?void 0:e[t]},Co=(i=function(e,t){return e=et(e,t),Ze(e)?e:void 0}
)(n,"Map"),c=i(Object,"create"),rt=tt=c,e=Object.prototype,nt=e.hasOwnProperty,it=c,e=Object.prototype,
ot=e.hasOwnProperty,st=c,e=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},c=function(e){
var t,r=this.__data__;return rt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:nt.call(r,e)?r[e]:void 0},No=function(e
){var t=this.__data__;return it?void 0!==t[e]:ot.call(t,e)},r=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=st&&void 0===t?"__lodash_hash_undefined__":t,this},V.prototype.clear=function(){
this.__data__=tt?tt(null):{},this.size=0},V.prototype.delete=e,V.prototype.get=c,V.prototype.has=No,V.prototype.set=r,
at=V,ct=x,ut=Co,lt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},wt=pt=dt=ht=function(e,t){
return e=e.__data__,lt(t)?e["string"==typeof t?"string":"hash"]:e.map},e=function(e){return e=ht(this,e).delete(e),
this.size-=e?1:0,e},c=function(e){return dt(this,e).get(e)},No=function(e){return pt(this,e).has(e)},r=function(e,t){
var r=wt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},F.prototype.clear=function(){this.size=0,
this.__data__={hash:new at,map:new(ut||ct),string:new at}},F.prototype.delete=e,F.prototype.get=c,F.prototype.has=No,
F.prototype.set=r,ft=Co,vt=e=F,yt=gt=x,c=Jo,No=xo,r=Gi,x=function(e,t){var r,n=this.__data__;if(n instanceof gt){if(
r=n.__data__,!ft||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new vt(r)}return n.set(e,t),
this.size=n.size,this},D.prototype.clear=Xs,D.prototype.delete=c,D.prototype.get=No,D.prototype.has=r,D.prototype.set=x,
Jo=D,mt=e,xo=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=xo,bt=B,_t=Gi=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Rt=function(e,t){return e.has(t)},Xs=n.Uint8Array,Et=Xs,
Tt=Ne,Pt=c=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p=1&r,w=e.length,g=t.length;if(w!=g&&!(p&&w<g))return!1;if(g=o.get(e)
,s=o.get(t),g&&s)return g==t&&s==e;for(a=-1,c=!0,u=2&r?new bt:void 0,o.set(e,t),o.set(t,e);++a<w;){if(l=e[a],h=t[a],
void 0!==(d=n?p?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)){if(d)continue;c=!1;break}if(u){if(!_t(t,function(e,t){if(!Rt(u,t)&&(
l===e||i(l,e,r,n,o)))return u.push(t)})){c=!1;break}}else if(l!==h&&!i(l,h,r,n,o)){c=!1;break}}return o.delete(e),
o.delete(t),c},qt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},St=No=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},r=Us?Us.prototype:void 0,xt=r?r.valueOf:void 0,
x=function(e,t,r,n,i,o,s){var a,c;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new Et(e),new Et(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return Tt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=qt;case"[object Set]":return a=a||St,!!(
e.size==t.size||1&n)&&((c=s.get(e))?c==t:(n|=2,s.set(e,t),c=Pt(a(e),a(t),n,i,o,s),s.delete(e),c));case"[object Symbol]":
if(xt)return xt.call(e)==xt.call(t)}return!1},xo=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},Xs=Array.isArray,At=xo,Ot=o=Xs,r=function(e,t,r){return t=t(e),Ot(e)?t:At(t,r(e))},Nt=Xs=function(e,t){for(
var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},zs=Object.prototype,
Ct=zs.propertyIsEnumerable,zs=(kt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Nt(kt(t),
function(e){return Ct.call(t,e)}))}:function(){return[]},Oo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},jt=Is,q=function(e){return Lt(e)&&"[object Arguments]"==jt(e)},Mt=Lt=P=function(e){
return null!=e&&"object"==typeof e},Ms=Object.prototype,zt=Ms.hasOwnProperty,It=Ms.propertyIsEnumerable,Ms=q(function(){
return arguments}())?q:function(e){return Mt(e)&&zt.call(e,"callee")&&!It.call(e,"callee")},R=(Cs=(Cs=(R=(R=(q={
exports:{}}).exports)&&!R.nodeType&&R)&&q&&!q.nodeType&&q)&&Cs.exports===R?n.Buffer:void 0)?Cs.isBuffer:void 0,
q.exports=R||function(){return!1},Ut=/^(?:0|[1-9]\d*)$/,Cs=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ut.test(e))&&-1<e&&e%1==0&&e<t},Vt=Is,Ft=R=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Dt=P,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,Bs=function(e){return Dt(e)&&Ft(
e.length)&&!!t[Vt(e)]},Ls=function(t){return function(e){return t(e)}},T=(T=(E=Bt={exports:{}}).exports)&&!T.nodeType&&T
,T=(ks=T&&E&&!E.nodeType&&E)&&ks.exports===T,js=T&&S.process,T=function(){try{return ks&&ks.require&&ks.require("util"
).types||js&&js.binding&&js.binding("util")}catch(e){}}(),E.exports=T,T=(E=(S=Bt.exports)&&S.isTypedArray)?Ls(E):Bs,
Ht=Oo,$t=Ms,Gt=o,Jt=q.exports,Wt=Cs,Kt=S=T,E=Object.prototype,Qt=E.hasOwnProperty,Xt=Object.prototype,$s=Object.keys,
Gs=Object,Yt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Xt)},Zt=function(e){
return $s(Gs(e))},Bs=Object.prototype,er=Bs.hasOwnProperty,tr=He,rr=R,nr=function(e,t){var r,n=Gt(e),i=!n&&$t(e),
o=!n&&!i&&Jt(e),s=!n&&!i&&!o&&Kt(e),a=n||i||o||s,c=a?Ht(e.length,String):[],u=c.length;for(r in e)!t&&!Qt.call(e,r
)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Wt(r,u))||c.push(
r);return c},ir=function(e){var t,r;if(!Yt(e))return Zt(e);for(r in t=[],Object(e))er.call(e,r
)&&"constructor"!=r&&t.push(r);return t},or=Oo=function(e){return null!=e&&rr(e.length)&&!tr(e)},sr=r,ar=zs,
cr=T=function(e){return(or(e)?nr:ir)(e)},ur=function(e){return sr(e,cr,ar)},E=Object.prototype,lr=E.hasOwnProperty,
Bs=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p,w,g=1&r,f=ur(e),v=f.length;if(v!=ur(t).length&&!g)return!1;for(s=v;s--;)if(
a=f[s],!(g?a in t:lr.call(t,a)))return!1;if(p=o.get(e),w=o.get(t),p&&w)return p==t&&w==e;for(c=!0,o.set(e,t),o.set(t,e),
u=g;++s<v;){if(l=e[a=f[s]],h=t[a],!(void 0===(d=n?g?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)?l===h||i(l,h,r,n,o):d)){c=!1;break}
u=u||"constructor"==a}return c&&!u&&(p=e.constructor)!=(w=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof w&&w instanceof w)&&(c=!1),o.delete(e),o.delete(t),c},r=i(n,
"DataView"),zs=Co,E=i(n,"Promise"),wi=Co=i(n,"Set"),n=i(n,"WeakMap"),hr=Is,pr=(dr=_)(_=r),wr=dr(zs),gr=dr(E),fr=dr(wi),
vr=dr(n),r=hr,(_&&"[object DataView]"!=r(new _(new ArrayBuffer(1)))||zs&&"[object Map]"!=r(new zs
)||E&&"[object Promise]"!=r(E.resolve())||wi&&"[object Set]"!=r(new wi)||n&&"[object WeakMap]"!=r(new n))&&(r=function(e
){var t=hr(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?dr(e):"")switch(e){case pr:return"[object DataView]";
case wr:return"[object Map]";case gr:return"[object Promise]";case fr:return"[object Set]";case vr:
return"[object WeakMap]"}return t}),yr=Jo,mr=c,br=x,_r=Bs,Rr=r,Er=o,Tr=q.exports,Pr=S,qr="[object Arguments]",
Sr="[object Array]",xr="[object Object]",_=Object.prototype,Ar=_.hasOwnProperty,Or=function(e,t,r,n,i,o){var s=Er(e),
a=Er(t),c=s?Sr:Rr(e),a=a?Sr:Rr(t),u=(c=c==qr?xr:c)==xr,l=(a=a==qr?xr:a)==xr;if((a=c==a)&&Tr(e)){if(!Tr(t))return!1;u=!(
s=!0)}return a&&!u?(o=o||new yr,s||Pr(e)?mr(e,t,r,n,i,o):br(e,t,c,r,n,i,o)):1&r||(s=u&&Ar.call(e,"__wrapped__"),
c=l&&Ar.call(t,"__wrapped__"),!s&&!c)?a&&(o=o||new yr,_r(e,t,r,n,i,o)):i(s?e.value():e,c?t.value():t,r,n,o=o||new yr)},
Cr=Jo,kr=zs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Nr(t)&&!Nr(r)?t!=t&&r!=r:Or(t,r,n,i,e,o))},jr=Fe,
Lr=E=function(e){return e==e&&!jr(e)},Mr=T,zr=function(e,t,r,n){var i,o,s,a,c,u,l=r.length,h=l,d=!n;if(null==e)return!h;
for(e=Object(e);l--;)if(i=r[l],d&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<h;)if(s=e[o=(i=r[l])[0]],a=i[1],
d&&i[2]){if(void 0===s&&!(o in e))return!1}else if(c=new Cr,!(void 0===(u=n?n(s,a,o,e,t,c):u)?kr(a,s,3,n,c):u))return!1;
return!0},Ir=function(e){for(var t,r,n=Mr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Lr(r)];return n},Ur=wi=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},n=function(t){var r=Ir(t);
return 1==r.length&&r[0][2]?Ur(r[0][0],r[0][1]):function(e){return e===t||zr(e,t,r)}},Vr=Is,Fr=Nr=P,Dr=o,Br=c=function(e
){return"symbol"==typeof e||Fr(e)&&"[object Symbol]"==Vr(e)},Hr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
$r=/^\w*$/,x=function(e,t){var r;return!Dr(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Br(e)
)||$r.test(e)||!Hr.test(e)||null!=t&&e in Object(t))},Gr=e,H.Cache=Gr,
Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/\\(\\)?/g,Hs=(
Bs=H(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Jr,function(e,t,r,n){i.push(r?n.replace(Wr,
"$1"):t||e)}),i},function(e){return 500===Hs.size&&Hs.clear(),e})).cache,Kr=Oe,Qr=o,Xr=c,r=Us?Us.prototype:void 0,
Yr=r?r.toString:void 0,Zr=q=function e(t){var r;return"string"==typeof t?t:Qr(t)?Kr(t,e)+"":Xr(t)?Yr?Yr.call(t
):"":"0"==(r=t+"")&&1/t==-1/0?"-0":r},rn=Bs,nn=S=function(e){return null==e?"":Zr(e)},on=c,ln=sn=function(e,t){
return en(e)?e:tn(e,t)?[e]:rn(nn(e))},hn=Ms,wn=R,fn=function(e,t){return null!=e&&t in Object(e)},vn=_=function(e,t,r){
for(var n,i,o=(t=ln(t,e)).length,s=!(n=-1);++n<o&&(i=gn(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(
o=null==e?0:e.length)&&wn(o)&&pn(i,o)&&(dn(e)||hn(e))},yn=zs,mn=un=function(e,t,r){return void 0===(e=null==e?void 0:cn(
e,t))?r:e},bn=function(e,t){return null!=e&&vn(e,t,fn)},Rn=E,En=wi,Pn=cn=Jo=function(e,t){for(var r=0,n=(t=sn(t,e)
).length;null!=e&&r<n;)e=e[an(t[r++])];return r&&r==n?e:void 0},qn=function(t){return function(e){
return null==e?void 0:e[t]}},Sn=function(t){return function(e){return Pn(e,t)}},xn=_n=tn=x,An=Tn=gn=an=function(e){var t
return"string"==typeof e||on(e)?e:"0"==(t=e+"")&&1/e==-1/0?"-0":t},On=n,Nn=function(r,n){return _n(r)&&Rn(n)?En(Tn(r),n
):function(e){var t=mn(e,r);return void 0===t&&t===n?bn(e,r):yn(n,t,3)}},Cn=e=function(e){return e},kn=dn=en=o,
jn=function(e){return xn(e)?qn(An(e)):Sn(e)},Ln=function(e,t,r){for(var n,i=-1,o=Object(e),s=r(e),
a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Mn=T,Vn=Oe,Dn=r=function(e,n){var i=-1,o=Un(e)?Array(e.length):[];
return In(e,function(e,t,r){o[++i]=n(e,t,r)}),o},f=function(e,t){return(Bn(e)?Vn:Dn)(e,Fn(t))},$n=Ne,Gn=Un=zn=Oo,
Jn=pn=Cs,Wn=Fe,Kn=Gi,Xn=function(e,n){var i;return Hn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},ei=function(e,t,r){
var n=Yn(e)?Kn:Xn;return r&&Zn(e,t,r)&&(t=void 0),n(e,Qn(t))},ti=Hn=In=Bs=function(e,t){var r,n,i;if(null!=e){if(!zn(e)
)return e&&Ln(e,t,Mn);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},ri=function(e,t){for(var r=-1
,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ni=function(e,n){var i=!0;return ti(e,function(e,t,r){
return i=!!n(e,t,r)}),i},ii=Qn=Fn=R=function(e){return"function"==typeof e?e:null==e?Cn:"object"==typeof e?kn(e)?Nn(e[0]
,e[1]):On(e):jn(e)},oi=Yn=Bn=o,si=Zn=zs=function(e,t,r){var n;return!!Wn(r)&&!!("number"==(n=typeof t)?Gn(r)&&Jn(t,
r.length):"string"==n&&t in r)&&$n(r[t],e)},ai=function(e,t,r){var n=oi(e)?ri:ni;return r&&si(e,t,r)&&(t=void 0),n(e,ii(
t))},ci=i,E=function(){try{var e=ci(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ui=Ms,li=o,
hi=Us?Us.isConcatSpreadable:void 0,pi=function(e){return li(e)||ui(e)||!!(hi&&e&&e[hi])},gi=di=xo,fi=wi=function e(t,r,n
,i,o){var s,a=-1,c=t.length;for(n=n||pi,o=o||[];++a<c;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):di(o,s):i||(o[o.length]=s);
return o},vi=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},yi=o,mi=function(){var e,t,r
,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return gi(yi(t)?vi(t):[t
],fi(e,1))},bi=R,_i=Oo,Ri=T,x=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;
return-1},Ei=/\s/,Ti=function(e){for(var t=e.length;t--&&Ei.test(e.charAt(t)););return t},Pi=/^\s+/,qi=n=function(e){
return e&&e.slice(0,Ti(e)+1).replace(Pi,"")},Si=Fe,xi=c,Ai=/^[-+]0x[0-9a-f]+$/i,Oi=/^0b[01]+$/i,Ni=/^0o[0-7]+$/i,
Ci=parseInt,ki=function(e){var t;return"number"==typeof e?e:xi(e)?NaN:(Si(e)&&(t="function"==typeof e.valueOf?e.valueOf(
):e,e=Si(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=qi(e),(t=Oi.test(e))||Ni.test(e)?Ci(e.slice(2),t?2:8):Ai.test(e
)?NaN:+e))},ji=function(e){return e?(e=ki(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Li=x,
Mi=R,zi=Cs=function(e){var t=(e=ji(e))%1;return e==e?t?e-t:e:0},Ii=Math.max,Ui=function(e,t,r){var n,i,o,s=Object(e);
return _i(e)||(n=bi(t),e=Ri(e),t=function(e){return n(s[e],e,s)}),-1<(o=(o=null==(i=e)?0:i.length)?((r=null==r?0:zi(r)
)<0&&(r=Ii(o+r,0)),Li(i,Mi(t),r)):-1)?s[n?e[o]:o]:void 0},Vi=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(
r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Fi=Bs,Di=R,Bi=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i
,e,t,r)}),i},Hi=o,$i=function(e,t,r){var n=Hi(e)?Vi:Bi,i=arguments.length<3;return n(e,Di(t),r,i,Fi)},Gi=function(e,t,r
){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t
];return n},Ji=x,Wi=function(e){return e!=e},Ki=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;
return-1},i=function(e,t,r){return t==t?Ki(e,t,r):Ji(e,Wi,r)},Co&&No(new Co([,-0]))[1],Qi=c,Xi=function(e,t){var r,n,i,o
,s,a,c,u;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=Qi(e),s=void 0!==t,a=null===t,c=t==t,u=Qi(t),
!a&&!u&&!o&&t<e||o&&s&&c&&!a&&!u||n&&s&&c||!r&&c||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!c
)return-1}return 0},Yi=Oe,Zi=Jo,eo=R,to=r,ro=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},
no=Ls,io=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,c=r.length;++i<a;)if(n=Xi(o[i],s[i])
)return c<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},oo=e,so=o,ao=function(e,t,r){switch(r.length){case 0:
return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}
return e.apply(t,r)},co=Math.max,uo=function(e){return function(){return e}},Ms=(lo=E)?function(e,t){return lo(e,
"toString",{configurable:!0,enumerable:!1,value:uo(t),writable:!0})}:e,ho=Date.now,Vs=Ms,po=wi,wo=function(e,n,r){var i;
return n=n.length?Yi(n,function(t){return so(t)?function(e){return Zi(e,1===t.length?t[0]:t)}:t}):[oo],i=-1,n=Yi(n,no(eo
)),e=to(e,function(t,e,r){return{criteria:Yi(n,function(e){return e(t)}),index:++i,value:t}}),ro(e,function(e,t){
return io(e,t,r)})},go=zs,function(){var e=ho(),t=16-e+ +Ds;if(Ds=e,0<t){if(800<=++Fs)return}else Fs=0;Vs.apply(void 0,
arguments)}((Js=Us=function(e,t){var r;return null==e?[]:(1<(r=t.length)&&go(e,t[0],t[1])?t=[]:2<r&&go(t[0],t[1],t[2]
)&&(t=[t[0]]),wo(e,po(t,1),[]))},Ws=void(Ds=Fs=0),Ks=e,Ws=co(void 0===Ws?Js.length-1:Ws,0),function(){for(var e,
t=arguments,r=-1,n=co(t.length-Ws,0),i=Array(n);++r<n;)i[r]=t[Ws+r];for(r=-1,e=Array(Ws+1);++r<Ws;)e[r]=t[r];return e[Ws
]=Ks(i),ao(Js,this,e)}),Us+""),vo=Xs,yo=function(e,n){var i=[];return fo(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},mo=R
,_o=function(e,t){return(bo(e)?vo:yo)(e,mo(t))},Ro=e,Eo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[
r],r,e););return e},To=fo=Bs,Po=function(e){return"function"==typeof e?e:Ro},qo=bo=o,h=function(e,t){return(qo(e)?Eo:To
)(e,Po(t))},So=Gi,xo=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:So(e,t,r)},Ao=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Oo=function(e){return Ao.test(e)}
,(x=Bt.exports)&&x.isRegExp,No=function(e){return e.split("")},
Co="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",c="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",ko=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+c+Co,"g"),jo=No,Lo=Oo,Mo=function(e){return e.match(ko)||[]},
Io=zo=i,Uo=q,Vo=n,Fo=xo,Do=function(e,t){for(var r=e.length;r--&&-1<zo(t,e[r],0););return r},Bo=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<Io(t,e[r],0););return r},Ho=function(e){return(Lo(e)?Mo:jo)(e)},$o=S,Go=function(e,t,r){
var n;return(e=$o(e))&&(r||void 0===t)?Vo(e):e&&(t=Uo(t))?(r=Ho(e),t=Ho(t),n=Bo(r,t),t=Do(r,t)+1,Fo(r,n,t).join("")):e},
Jo=Object.prototype,Wo=Jo.hasOwnProperty,Ko=function(e,t){return null!=e&&Wo.call(e,t)},Qo=_,v=function(e,t){
return null!=e&&Qo(e,t,Ko)},Zo=function(e){return!0===e||!1===e||Yo(e)&&"[object Boolean]"==Xo(e)},es=function(e){
return null===e},rs=o,is=function(e){return"string"==typeof e||!rs(e)&&ns(e)&&"[object String]"==ts(e)},os=ts=Xo=Is,
ss=ns=Yo=P,as=function(e){return"number"==typeof e||ss(e)&&"[object Number]"==os(e)},us=function(e){
return"number"==typeof e&&e==cs(e)},hs=function(e){return us(e)&&-ls<=e&&e<=ls},ls=9007199254740991,ws=function(e){
return e?ds(ps(e),-9007199254740991,9007199254740991):0===e?e:0},ms=function(e,t,r){return e=ys(e),r=null==r?0:gs(vs(r),
0,e.length),t=fs(t),e.slice(r,r+t.length)==t},bs=gs=ds=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),
void 0!==t&&(e=t<=e?e:t)),e},_s=fs=q,Rs=vs=ps=cs=Cs,Es=ys=S,Ts=function(e,t,r){var n;return e=Es(e),t=_s(t),n=e.length,
n=r=void 0===r?n:bs(Rs(r),0,n),0<=(r-=t.length)&&e.slice(r,n)==t},Ps=Oe,qs=function(t,e){return Ps(e,function(e){
return t[e]})},Ss=T,xs=function(e){return null==e?[]:qs(e,Ss(e))};class ha{constructor(e,t){s(this,"_logger",void 0),s(
this,"name",void 0),s(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;
return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=d.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=d.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=d.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=d.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class A{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case d.DEBUG:return"DEBUG";case d.INFO:return"INFO";case d.WARN:return"WARN";case d.ERROR:return"ERROR";
case d.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=d.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=d.INFO&&this._logger.info(...e)}static warn(...e){this._level<=d.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=d.ERROR&&this._logger.error(...e)}static createLogger(e){return new ha(e,A)}}s(A,
"Level",d={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),s(A,"_level",d.DEBUG),
s(A,"_logger",console);const da=A.createLogger("ProcessUtils");class pa{static getArguments(){return process.argv.slice(
2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)t.length&&(e[t]="");else{const r=t.split("=");t=r.shift(),(t=Go(t)
).length&&(e[t]=r.join("=").trim())}return e}static parseEnvFile(e){const t=ta.default.readFileSync(e,{encoding:"utf-8"}
),r=t.split("\n");return r.reduce(pa.parseEnvFileLine,{})}static initEnvFromFile(e){e=pa.parseEnvFile(e),process.env=g(
g({},e),process.env)}static initEnvFromDefaultFiles(){var e=ra.default.join(process.cwd(),".env");ta.default.existsSync(
e)&&pa.initEnvFromFile(e)}static setupDestroyHandler(r,n){let i=!1;var e=t=>e=>{pa._printErrors(t,e);try{i||(i=!0,r())
}catch(e){n(e)}};process.on("exit",e("exit")),process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),
process.on("SIGUSR1",e("SIGUSR1")),process.on("SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e(
"uncaughtException"))}static _printErrors(e,t){try{t?da.error(`Closing process because "${e}" event: `,t
):"exit"===e?da.debug(`Closing process because "${e}" event`):da.info(`Closing process because "${e}" event`)}catch(e){
console.error("Error while printing errors: ",e)}}}Ls=null!=(r=te("%{BUILD_BACKEND_URL}"))?r:"http://0.0.0.0:3000",
Ms=null!=(E=te(""))?E:"nor-backend",zs=null!=(wi=te(""))?wi:"","".startsWith("%{")&&"".endsWith("}"),Bs=null!=(
e=function(e){if(e){if(function(){switch(e){case d.DEBUG:case d.INFO:case d.WARN:case d.ERROR:case d.NONE:return 1;
default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return d.DEBUG;case"INFO":return d.INFO
case"WARN":case"WARNING":return d.WARN;case"ERR":case"ERROR":return d.ERROR;case"FALSE":case"OFF":case"QUIET":
case"SILENT":case"NONE":return d.NONE;default:return}}}(null!=(R=Z(null==(Us=process)||null==(Xs=Us.env
)?void 0:Xs.BACKEND_LOG_LEVEL))?R:Z(zs)))?e:d.INFO;const wa=null!=(x=Z(null==(Gi=process)||null==(Bt=Gi.env
)?void 0:Bt.BACKEND_SCRIPT_NAME))?x:Ms,ga=null!=(No=Z(null==(c=process)||null==(Co=c.env)?void 0:Co.BACKEND_URL))?No:Ls,
fa=(p={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},
"WINDOW"===(Is=null!=(_=null!=(n=null==(Oo=process)||null==(i=Oo.env)?void 0:i.NOR_REQUEST_CLIENT_MODE)?n:null==(
xo=process)||null==(Jo=xo.env)?void 0:Jo.REACT_APP_REQUEST_CLIENT_MODE)?_:"")||!(
"undefined"==typeof window||!window.fetch)),va="NODE"===Is||!fa;class ya{static async getRequestDataAsBuffer(n){
return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(
Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){
const r=await ya.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await ya.getRequestDataAsString(e)))return ia.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await ya.getRequestDataAsString(e)))return JSON.parse(e)}}(P=w={Continue:100,100:"Continue",SwitchingProtocols:101,
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
P.NotExtended=510]="NotExtended",P[P.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",As={
ERROR:"error"};class ma extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||se(e)),s(this,"status"
,void 0),s(this,"method",void 0),s(this,"url",void 0),s(this,"body",void 0),s(this,"__proto__",void 0),
t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,
this.url=n,this.body=i}valueOf(){return this.status}toString(){return this.status+" "+this.message}toJSON(){return{
type:As.ERROR,status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method
}getUrl(){return this.url}getBody(){return this.body}}y={TEXT:"text/plain",CALENDAR:"text/calendar",
JSON:"application/json"};const ba=va?require("fs").promises:void 0,_a=A.createLogger("NodeRequestClient");class Ra{
static setLogLevel(e){_a.setLogLevel(e)}constructor(e,t){s(this,"_http",void 0),s(this,"_https",void 0),this._http=e,
this._https=t}async textRequest(e,t,r,n){switch(e){case p.GET:return this._getText(t,r,n);case p.POST:
return this._postText(t,r,n);case p.PATCH:return this._patchText(t,r,n);case p.PUT:return this._putText(t,r,n);
case p.DELETE:return this._deleteText(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _getText(e,t,r){const n={method:"GET",headers:{"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t))
,this._textRequest(p.GET,e,n,r).then(Ra._successTextResponse)}async _putText(e,t,r){const n={method:"PUT",headers:{
"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(p.PUT,e,n,r).then(
Ra._successTextResponse)}async _postText(e,t,r){const n={method:"POST",headers:{"Content-Type":y.TEXT}};return t&&(
n.headers=g(g({},n.headers),t)),this._textRequest(p.POST,e,n,r).then(Ra._successTextResponse)}async _patchText(e,t,r){
const n={method:"PATCH",headers:{"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(
p.PATCH,e,n,r).then(Ra._successTextResponse)}async _deleteText(e,t,r){const n={method:"DELETE",headers:{
"Content-Type":y.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(p.DELETE,e,n,r).then(
Ra._successTextResponse)}static async _successTextResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw _a.error(`Unsuccessful response with status ${t}: `,e),new ma(t,`Error ${t} for ${re(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}async _textRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ya.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case p.GET:return this._getJson(t,r,n);case p.POST:
return this._postJson(t,r,n);case p.PATCH:return this._patchJson(t,r,n);case p.PUT:return this._putJson(t,r,n);
case p.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _checkSocketFile(t){try{const e=await ba.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))_a.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t)throw _a.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e;_a.debug("_checkSocketFile: ENOENT: ",e)}}}async _findSocketFile(e){
var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=ra.default.dirname(e))&&t!==e?this._findSocketFile(
t):void 0}async _httpRequest(o,s,e){var t;const a=e?JSON.stringify(e)+"\n":void 0,c=new na.default.URL(o);let u;
const l=null!=(e=null===c||void 0===c?void 0:c.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==c&&void 0!==c&&c.pathname?null===c||void 0===c?void 0:c.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==c.search?c.search:""),s=g(g({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=g(g({},s),{},{hostname:c.hostname,
port:null!=(i=null!==c&&void 0!==c&&c.port?parseInt(c.port,10):void 0)?i:"https:"===l?443:80,path:c.pathname+c.search}))
,(e=u.request(s,e=>{n?_a.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(_a.warn("Warning! Request had already ended when the response was received."),_a.debug(
"Error from event: ",e)):(_a.debug("Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(
_a.warn("Warning! Request had already ended when the response was received."),_a.debug("Exception: ",e)):(_a.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _jsonRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ya.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":y.JSON}};return t&&(
n.headers=g(g({},n.headers),t)),this._jsonRequest(p.GET,e,n,r).then(Ra._successJsonResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(
p.PUT,e,n,r).then(Ra._successJsonResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{"Content-Type":y.JSON}
};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(p.POST,e,n,r).then(Ra._successJsonResponse)}
async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),
t)),this._jsonRequest(p.PATCH,e,n,r).then(Ra._successJsonResponse)}async _deleteJson(e,t,r){const n={method:"DELETE",
headers:{"Content-Type":y.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(p.DELETE,e,n,r).then(
Ra._successJsonResponse)}static async _successJsonResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw _a.error(`Unsuccessful response with status ${t}: `,e),new ma(t,`Error ${t} for ${re(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}}class Ea{constructor(e){s(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e
){case p.GET:return this._getJson(t,r,n);case p.POST:return this._postJson(t,r,n);case p.PUT:return this._putJson(t,r,n)
case p.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)
}}textRequest(e,t,r,n){switch(e){case p.GET:return this._getText(t,r,n);case p.POST:return this._postText(t,r,n);
case p.PUT:return this._putText(t,r,n);case p.DELETE:return this._deleteText(t,r,n);default:throw new TypeError(
"[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successJsonResponse(e,p.GET))}_putJson(e,t,r){const n={
method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successJsonResponse(e,p.PUT))
}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.JSON},
credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ea._successJsonResponse(e,p.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successJsonResponse(e,p.DELETE))}static _successJsonResponse(e,t
){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${re(t)} `+n;return e.json().then(
e=>{throw new ma(r,i,t,n,e)})}return e.json()}_getText(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=r),
this._fetch(e,n).then(e=>Ea._successTextResponse(e,p.GET))}_putText(e,t,r){const n={method:"PUT",mode:"cors",
cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),
r&&(n.body=r),this._fetch(e,n).then(e=>Ea._successTextResponse(e,p.PUT))}_postText(e,t,r){const n={method:"POST",
mode:"cors",cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},
n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Ea._successTextResponse(e,p.POST))}_deleteText(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":y.TEXT},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Ea._successTextResponse(e,p.DELETE))}
static _successTextResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${re(t)} `+n;return e.text().then(e=>{throw new ma(r,i,t,n,e)})}return e.text()}}
const Ta=va?require("http"):void 0,Pa=va?require("https"):void 0,qa=A.createLogger("RequestClient");class Sa{
static setLogLevel(e){qa.setLogLevel(e),Ra.setLogLevel(e)}static async textRequest(e,t,r,n){
return this._client.textRequest(e,t,r,n)}static async getText(e,t){return this._client.textRequest(p.GET,e,t)}
static async postText(e,t,r){return qa.debug(".postJson: ",e,t,r),this._client.textRequest(p.POST,e,r,t)}
static async patchText(e,t,r){return qa.debug(".patchJson: ",e,t,r),this._client.textRequest(p.PATCH,e,r,t)}
static async putText(e,t,r){return qa.debug(".putJson: ",e,t,r),this._client.textRequest(p.PUT,e,r,t)}
static async deleteText(e,t,r){return qa.debug(".deleteJson: ",e,r,t),this._client.textRequest(p.DELETE,e,t,r)}
static async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){
return this._client.jsonRequest(p.GET,e,t)}static async postJson(e,t,r){return qa.debug(".postJson: ",e,t,r),
this._client.jsonRequest(p.POST,e,r,t)}static async patchJson(e,t,r){return qa.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(p.PATCH,e,r,t)}static async putJson(e,t,r){return qa.debug(".putJson: ",e,t,r),
this._client.jsonRequest(p.PUT,e,r,t)}static async deleteJson(e,t,r){return qa.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(p.DELETE,e,t,r)}static _initClient(){if(fa){const e=class{static hasWindow(){return!!ue()}
static getWindow(){return ue()}static getParent(){var e;return null==(e=ue())?void 0:e.parent}}.getWindow();if(e
)return qa.debug("Detected browser environment"),new Ea(e.fetch.bind(e));throw new TypeError(
"RequestClient: Could not detect request client implementation: No window object")}if(va)return new Ra(Ta,Pa);
throw new TypeError("RequestClient: Could not detect request client implementation")}}s(Sa,"_client",Sa._initClient()),
Os={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const xa=A.createLogger("HttpServerService");
class Aa{constructor(e=3e3,t=void 0,r=void 0){s(this,"_requestHandler",void 0),s(this,"_hostname",void 0),s(this,"_port"
,void 0),s(this,"_closeCallback",void 0),s(this,"_listenCallback",void 0),s(this,"_server",void 0),s(this,"_handler",
void 0),xa.debug("new: ",t,e,r),this._requestHandler=this._onRequest.bind(this),
this._listenCallback=this._onListen.bind(this),this._closeCallback=this._onClose.bind(this),this._hostname=t,
this._port=e,this._handler=r,this._server=Ys.createServer(this._requestHandler)}start(){xa.debug(
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
static hasPropertyMessage(e){return v(e,"message")}static createOrFunction(...e){return t=>K(e,e=>He(e)?e(t):t===e)}
static everyPropertyIs(t,e){return a(f(ee(t),e=>t[e]),e)}static explainEveryPropertyIs(t,r,n){return _o(f(f(ee(t),e=>t[e
]),(e,t)=>r(e)?"":`#${t}: `+n(e)),e=>!!e)}}m={JSON:0,0:"JSON",STRING:1,1:"STRING",INTEGER:2,2:"INTEGER",NUMBER:3,
3:"NUMBER"},(q=b=b||{})[q.REQUEST_BODY=0]="REQUEST_BODY",q[q.QUERY_PARAM=1]="QUERY_PARAM",q[q.REQUEST_HEADER=2
]="REQUEST_HEADER",q[q.REQUEST_HEADER_MAP=3]="REQUEST_HEADER_MAP",q[q.PATH_VARIABLE=4]="PATH_VARIABLE",q[
q.PATH_VARIABLE_MAP=5]="PATH_VARIABLE_MAP",q[q.MODEL_ATTRIBUTE=6]="MODEL_ATTRIBUTE";const Oa=A.createLogger(
"RequestController"),Na="__requestMappings",Ca=A.createLogger("Headers");class ka{static setLogLevel(e){Ca.setLogLevel(e
)}constructor(e){s(this,"_value",void 0),s(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;try{r&&(
this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}clear(){
this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),Ca.debug(
"add header: ",e,t),e=e.toLowerCase();var r=this._value&&v(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?Re(r)?this._value=g(g({},this._value),{},{[e]:mi([],r,[t])}
):this._value=g(g({},this._value),{},{[e]:[r,t]}):this._value=g(g({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),v(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===ee(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=ee(this._value),
h(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),v(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),Re(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),u(e)){const r=e;if(!G(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");h(t,e=>{this.add(r,e)})}else{const n=e;h(ee(n)
,t=>{var e=n[t];Re(e)?h(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=g({},this._value);
return r&&v(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=g(g({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),h(ee(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=ee(r
);const t=f(e,e=>{const t=r[e];return t?G(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new ka(this._value?g({},this._value):void 0)}}class ja{
static toString(...e){return f(e,e=>es(e)?"null":""+e).join("")}static processVariables(n,i,o,s,a=void 0){return Re(n
)?f(n,e=>ja.processVariables(e,i,o,s,a)):_e(n)?$i(ee(n),(e,t)=>{var r=n[t];return e[""+ja.processVariables(t,i,o,s,a)
]=ja.processVariables(r,i,o,s,a),e},{}):u(n)?ja.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(
e.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||a(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,c,u;if(0===t.length)return"";let l;if(l=He(r)?r:e=>un(r,e,o),ms(t,n)&&Ts(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=Go(e),ja.isValidKeyword(e)))return l(e)}let h="",d=0;for(
;0<=d&&d<t.length;)if(e=d,(d=t.indexOf(n,e))<0)h+=t.substr(e),d=t.length;else{if(a=(s=d)+n.length,(u=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);c=u+i.length,u=Go(
t.substr(a,u-a)),d=(ja.isValidKeyword(u)?(a=l(u),h+=""+t.substr(e,s-e)+a):h+=""+t.substr(e,c-e),c)}return h}
static formatNumber(e,t=" ",r="."){return e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,t).replace(/\./,r)}
static endsWithCharacters(e,t){var r=e.length;return!(1<=r)||t.includes(e[r-1])}static startsWithCharacters(e,t){
return!(1<=e.length)||t.includes(e[0])}static hasOnlyCharacters(e,t){return 0===e.length||a(e,e=>t.includes(e))}
static validateStringCharacters(e,t=void 0,r=t,n=r,i=0,o=void 0){var s=null!=(s=null==e?void 0:e.length)?s:0;return(
void 0===t||ja.startsWithCharacters(e,t))&&(void 0===r||ja.hasOnlyCharacters(e.substring(1,s-1),r))&&(
void 0===n||ja.endsWithCharacters(e,n))&&i<=s&&(void 0===o||s<=o)}}class N{constructor(e,t,r){s(this,"_status",void 0),
s(this,"_headers",void 0),s(this,"_body",void 0);let n,i,o;if(!Te(e)||Te(t)||Te(r))if(Te(t)&&!Te(r)){if(void 0!==r
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");Ee(e)?i=e:o=e,n=t}else{if(!Te(r)
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(!Ee(t))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");o=e,i=t,n=r}else{if(n=e,void 0!==t)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(void 0!==r)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=n,this._headers=null!=(e=i)?e:new ka,this._body=o}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(e){return this._status=e,this}
headers(e){return Ee(e)?this._headers=e:this._headers=new ka(e),this}body(e){return this._body=e,this}getHeaders(){
return this._headers}allow(...e){e=f(e,ie);const t=f(e,e=>re(e).toUpperCase());return this._headers.set("Allow",t.join(
", ")),this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}toString(){var e,t,r=se(this._status);const n=this._headers;return e=n.isEmpty()?"":ja.toString(n),
void 0===(t=this._body)?e?`ResponseEntity(${r}, ${e})`:`ResponseEntity(${r})`:(t=be(t)?JSON.stringify(t,null,2
):ja.toString(t),e?`ResponseEntity(${r}, ${e}, Body(${t}))`:`ResponseEntity(${r}, Body(${t}))`)}static accepted(){
return new N(w.Accepted)}static badRequest(){return new N(w.BadRequest)}static created(e){return new N(new ka({
Location:e}),w.Created)}static noContent(){return new N(w.NoContent)}static notFound(){return new N(w.NotFound)}
static notImplemented(){return new N(w.NotImplemented)}static internalServerError(){return new N(w.InternalServerError)}
static methodNotAllowed(){return new N(w.MethodNotAllowed)}static unprocessableEntity(){return new N(
w.UnprocessableEntity)}static ok(e){return e?new N(e,w.OK):new N(w.OK)}}const La=A.createLogger("ParamRoutes");class Ma{
constructor(r){s(this,"_routes",void 0);var e=ee(r),e=f(e,e=>{var t=r[e];return Ma.createCallbackFunction(e,t)});
this._routes=e}hasRoute(t){var e=K(this._routes,e=>{var[e]=e(t);return void 0!==e&&1<=(null==e?void 0:e.length)});
return e?La.debug(`hasRoute: Looking up "${t}": Found`):La.debug(`hasRoute: Looking up "${t}": Not Found`),e}getRoute(r
){let n=void 0,i=void 0;return Ui(this._routes,e=>{var[e,t]=e(r);return void 0!==e&&(n=e,i=t,!0)}),void 0!==n?[n,i]:[
void 0,void 0]}static createCallbackFunction(e,t){const i=(e=""===e?"/":e).split("/"),o=i.length;if(0===o
)throw new Error("Path format had no items. This should not happen.");const s=f(i,(e,t)=>3<=e.length&&"{"===e[0
]&&"}"===e[e.length-1]?Go(e.substr(1,e.length-2)):(i[t]=e.toLowerCase(),null));if(K(s,u))return e=>{const r=e.split("/")
if(0===(e=r.length))return[void 0,void 0];if(o!==e)return[void 0,void 0];let n={};return a(s,(e,t)=>u(e)?(n[e]=r[t],!0
):i[t]===r[t].toLowerCase())?[t,n]:[void 0,void 0]};{const r=e.toLowerCase();return e=>e.toLowerCase()!==r?[void 0,
void 0]:[t,void 0]}}}const za=A.createLogger("StaticRoutes");class Ia{static setLogLevel(e){za.setLogLevel(e)}
constructor(r){s(this,"_routes",void 0);var e=ee(r),e=f(e,e=>{var t=r[e];return[e.toLowerCase(),t]});
this._routes=new Map(e)}hasRoute(e){return za.debug(`Looking up "${e}" from `,this._routes),this._routes.has(
e.toLowerCase())}getRoute(e){return void 0!==(e=this._routes.get(e.toLowerCase()))?[e,void 0]:[void 0,void 0]}}class Ua{
static createRoutes(e){return new(Ua.routesHasParameter(e)?Ma:Ia)(e)}static pathHasParameter(e){return e.split("/"
).some(e=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1])}static routesHasParameter(e){return K(ee(e),Ua.pathHasParameter)
}}const C=A.createLogger("RequestRouter");class Va{static setLogLevel(e){C.setLogLevel(e)}constructor(){s(this,
"_controllers",void 0),s(this,"_routes",void 0),s(this,"_modelAttributeNames",void 0),s(this,"_requestMappings",void 0),
s(this,"_initialized",void 0),this._controllers=[],this._routes=void 0,this._requestMappings=void 0,
this._modelAttributeNames=void 0,this._initialized=!1}attachController(e){this._controllers.push(e),this._routes=void 0}
_initializeRequestMappings(){C.debug("Initializing request mappings."),this._requestMappings||(
this._requestMappings=this._getRequestMappings())}_initializeRouter(){this._initialized||(this._initialized=!0,C.debug(
"Initializing..."),this._initializeRequestMappings(),this._initializeRoutes(),
this._initializeRequiredModelAttributeNames())}_initializeRoutes(){var e;C.debug("Initializing routes."),null!=(
e=this._requestMappings)&&e.length?this._routes=Ua.createRoutes(Va._parseMappingObject(this._requestMappings)
):this._routes=Ua.createRoutes({})}_initializeRequiredModelAttributeNames(){var e;C.debug(
"Initializing model attributes.");let n=[];null!=(e=this._requestMappings)&&e.length&&(n=$i(this._requestMappings,(e,o
)=>{var t=o.controller,r=$i(ee(o.controllerProperties),(e,r)=>{C.debug(
"_initializeRequiredModelAttributeNames: propertyKey: ",r);var t=o.controllerProperties[r],n=t.modelAttributes;C.debug(
"_initializeRequiredModelAttributeNames: propertyAttributeNames: ",n);const i=t.params;return h(n,t=>{C.debug(
"_initializeRequiredModelAttributeNames: attributeName: ",t),void 0===Ui(e,e=>e[0]===t)&&e.push([t,r,i])}),e},[]);
return C.debug("controllerUniqueAttributeNames: ",r),n.push([t,r]),e},n)),this._modelAttributeNames=new Map(n)}
async handleRequest(t,r=void 0,e=void 0,c){try{var n=ie(t),{pathName:i,queryParams:o}=Va._parseRequestPath(r),s=(
C.debug(`handleRequest: method="${n}", pathName="${i}", queryParams=`,o),i);const u=o;if(void 0===u)return C.error(
"handleRequest: requestQueryParams was not initialized"),N.internalServerError().body({error:"Internal Server Error"});
if(void 0===s)return C.error("handleRequest: requestPathName was not initialized"),N.internalServerError().body({
error:"Internal Server Error"});this._initialized||this._initializeRouter();const{routes:l,bodyRequired:h,
pathVariables:d}=this._getRequestRoutesContext(n,s);if(!e&&h)return C.error(
"handleRequest: parseRequestBody was not provided and body is required"),N.internalServerError().body({
error:"Internal Server Error"});if(void 0===l)return C.debug("handleRequest: No routes defined"),N.methodNotAllowed(
).body({error:"Method Not Allowed"});if(0===l.length)return C.debug("handleRequest: No routes found"),N.notFound().body(
{error:"Not Found"});C.debug("routes: ",l);let a=void 0;const p=e&&h?await e(c):void 0,w=(C.debug(
"handleRequest: requestBody: ",p),new Map);return await $i(l,async(e,t)=>{var r;const i=t.controller;if(r=t.propertyName
,t=t.propertyParams,await e,this._modelAttributeNames&&this._modelAttributeNames.has(i)){C.debug(
`Populating attributes for property "${r}"`);const o=Va._getOrCreateRequestModelAttributesForController(w,i),n=f(_o(t,
e=>pe(e)),e=>e.attributeName);C.debug("route attributeNames: ",n),e=this._modelAttributeNames.get(i),C.debug(
"all attributeNamePairs: ",e),e=_o(null!=e?e:[],e=>n.includes(e[0])),C.debug("attributeNamePairs: ",e),await $i(e,async(
e,t)=>{var[t,r,n]=t,e=(await e,C.debug("attributeName: ",t),C.debug("propertyName: ",r),C.debug("propertyParams: ",n),
Va._bindRequestActionParams(u,p,n,c,d,o)),n=await i[r](...e);o.set(t,n)},Promise.resolve())}if(
t=Va._bindRequestActionParams(u,p,t,c,d,null!=(e=w.get(i))?e:new Map),C.debug("handleRequest: stepParams 1: ",t),v(i,r)
){C.debug(`Calling route property by name "${r}"`);const s=await i[r](...t);a=oe(s)?new N(s):ce(s)?new N(s.toJSON(),
s.getStatusCode()):(e=s)&&e instanceof N?(void 0!==a&&C.warn("Warning! ResponseEntity from previous call ignored."),s
):Re(s)?void 0===a?N.ok(s):new N(mi(a.getBody(),s),a.getHeaders(),a.getStatusCode()):_e(s)?void 0===a?N.ok(s):new N(g(g(
{},a.getBody()),s),a.getHeaders(),a.getStatusCode()):(be(s),void 0===a?N.ok(s):(C.warn(
"Warning! ResponseEntity from previous call ignored."),new N(s,a.getHeaders(),a.getStatusCode())))}else C.warn(
`Warning! No property by name "${r}" found in the controller`),a=N.notFound().body({error:"404 - Not Found",code:404})},
Promise.resolve()),C.debug("handleRequest: result finished: "+a),void 0===a?N.noContent():a}catch(e){return ce(e)?(
404===(r=null!=(t=null==e?void 0:e.status)?t:0)?N.notFound():(400<=r&&r<500?N.badRequest():N.internalServerError()
).status(r)).body(e.toJSON()):(C.error("Exception: ",e),N.internalServerError().body({error:"Internal Server Error",
code:500}))}}static _parseRequestPath(e){return{pathName:(e=new Qs.URL("http://localhost"+(null!=e?e:""))).pathname,
queryParams:e.searchParams}}_getRequestRoutesContext(t,e){var r,n,i;return this._routes&&this._routes.hasRoute(e)?([n,r
]=this._routes.getRoute(e),(n=_o(n,e=>0<=e.methods.indexOf(t))).length?(i=K(n,e=>!0===(
null==e?void 0:e.requestBodyRequired)),C.debug("_getRequestRoutesContext: requestBodyRequired=",i),{routes:n,
pathVariables:r,bodyRequired:i}):(C.debug(
"_getRequestRoutesContext: There were matching routes, but not for this method; Method not allowed."),{routes:void 0,
bodyRequired:!1})):(this._routes?C.debug("_getRequestRoutesContext: Routes did not match: ",e):C.debug(
"_getRequestRoutesContext: No routes defined"),{routes:[],bodyRequired:!1})}_getRequestMappings(){
return 0===this._controllers.length?[]:_o(f(this._controllers,e=>{var t=e.constructor;
return O.hasProperty__requestMappings(t)?ye(e.constructor,e):ye(e,e)}),e=>!!e)}static _parseMappingObject(e){function u(
e,t){v(r,e)?r[e].push(t):r[e]=[t]}const r={};return h(e,e=>{const c=e.controller,t=e.controllerProperties,r=ee(t);
0<e.mappings.length?h(e.mappings,e=>{const a=e.methods;h(e.paths,s=>{h(r,n=>{const i=t[n],o=i.params;h(i.mappings,e=>{
var t=e.methods;if(Va._matchMethods(a,t)){const r=Va._parseCommonMethods(a,t);t=e.paths,h(t,e=>{u(Va._joinRoutePaths(s,e
),{requestBodyRequired:null!=(e=null===i||void 0===i?void 0:i.requestBodyRequired)&&e,methods:r,controller:c,
propertyName:n,propertyParams:o})})}})})})}):h(r,r=>{const n=t[r],i=n.params;h(n.mappings,e=>{const t=e.methods;
e=e.paths,h(e,e=>{u(e,{requestBodyRequired:null!=(e=null===n||void 0===n?void 0:n.requestBodyRequired)&&e,methods:t,
controller:c,propertyName:r,propertyParams:i})})})})}),r}static _matchMethods(e,r){return 0===e.length||0==r.length||K(e
,t=>K(r,e=>t===e))}static _parseCommonMethods(e,t){return 0!==e.length?_o(t,t=>K(e,e=>e===t)):t}static _joinRoutePaths(e
,t){return e=Go(e),0===(t=Go(Go(t),"/")).length?e:0===e.length?t:"/"===e[e.length-1]||"/"===t[0]?e+t:e+"/"+t}
static _bindRequestActionParams(i,o,e,s,a,c){return f(e,e=>{var t,r,n;if(null!==e){switch(null==e?void 0:e.objectType){
case b.REQUEST_BODY:return o;case b.QUERY_PARAM:return t=(n=e).queryParam,!i.has(t)||(t=i.get(t),es(t)
)?void 0:Va._castParam(t,n.valueType);case b.REQUEST_HEADER:if(n=(t=e).headerName,s.containsKey(n))return void 0===(
r=s.getFirst(n))?void 0:Va._castParam(r,t.valueType);if(t.isRequired)throw new ma(400,"Bad Request: Header missing: "+n)
return null!=(r=null==t?void 0:t.defaultValue)?r:void 0;case b.REQUEST_HEADER_MAP:
return n=null==e?void 0:e.defaultValues,s.isEmpty()?n?new ka(n):new ka:n?new ka(g(g({},n),s.valueOf())):s.clone();
case b.PATH_VARIABLE:if(r=(t=e).variableName,void 0!==(n=a&&v(a,r)?a[r]:void 0)&&""!==n
)return t.decodeValue?decodeURIComponent(n):n;if(t.isRequired)throw new ma(404,"Not Found");return null!=(
r=t.defaultValue)?r:void 0;case b.MODEL_ATTRIBUTE:return n=e.attributeName,c.has(n)?c.get(n):void 0}throw new TypeError(
"Unsupported item type: "+e)}})}static _castParam(e,t){switch(t){case m.JSON:return JSON.parse(e);case m.STRING:return e
case m.INTEGER:return parseInt(e,10);case m.NUMBER:return parseFloat(e)}throw new TypeError("Unsupported type: "+t)}
static _getOrCreateRequestModelAttributesForController(e,t){let r=e.get(t);return null==r&&(r=new Map,e.set(t,r)),r}}
class Fa{getName(){return this._name}constructor(e){s(this,"_name",void 0),s(this,"_callbacks",void 0),this._name=e,
this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return v(this._callbacks,e)}
triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],h(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=_o(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}}const Da=A.createLogger("RequestServer");Ns={CONTROLLER_ATTACHED:"RequestServer:controllerAttached",
STARTED:"RequestServer:started",STOPPED:"RequestServer:stopped"};class Ba{static setLogLevel(e){Da.setLogLevel(e)}on(e,t
){return this._observer.listenEvent(e,t)}constructor(e="http://localhost:3000"){s(this,"_server",void 0),s(this,
"_router",void 0),s(this,"_handleRequestCallback",void 0),s(this,"_observer",void 0),this._observer=new Fa(
"RequestServer"),this._server=Ba.createServerService(e),this._router=new Va,
this._handleRequestCallback=this._handleRequest.bind(this),this._server.setHandler(this._handleRequestCallback)}destroy(
){this._observer.destroy()}attachController(e){if(!ve(e))throw new TypeError(
"RequestServer: The provided controller was not RequestController");this._router.attachController(e),
this._observer.hasCallbacks(Ns.CONTROLLER_ATTACHED)&&this._observer.triggerEvent(Ns.CONTROLLER_ATTACHED)}start(){
Da.debug("Starting server"),this._server.start(),this._observer.hasCallbacks(Ns.STARTED)&&this._observer.triggerEvent(
Ns.STARTED)}stop(){Da.debug("Stopping server"),this._server.stop(),this._observer.hasCallbacks(Ns.STOPPED
)&&this._observer.triggerEvent(Ns.STOPPED)}async _handleRequest(t,r){var e,n,i=t.method,o=t.url;try{e=ie(i),
n=await this._router.handleRequest(e,o,e=>Ba._requestBodyParser(t,e),this._parseRequestHeaders(t.headers)),Da.debug(
`"${i} ${o}": Processing responseEntity`),this._handleResponse(n,r)}catch(e){Da.debug(
`"${i} ${o}": Error, passing it on: `,e),this._handleErrorResponse(e,r)}}static async _requestBodyParser(e,t){
return"application/x-www-form-urlencoded"!==(null!=(t=null==(t=t.getFirst("content-type"))?void 0:t.toLowerCase()
)?t:"application/json")?ya.getRequestDataAsJson(e):ya.getRequestDataAsFormUrlEncoded(e)}_handleResponse(e,r){
var t=e.getStatusCode();r.statusCode=t,r.statusMessage=se(t);const n=e.getHeaders();n.isEmpty()||n.keySet().forEach(e=>{
var t=null!=(t=n.getValue(e))?t:"";Da.debug(`_handleResponse: Setting response header as "${e}": "${t}"`),G(t
)?r.setHeader(e,[...t]):r.setHeader(e,t)}),e.hasBody()?u(e=e.getBody())?(Da.debug("_handleResponse: Ending as text ",t,e
),r.end(e)):(Da.debug("_handleResponse: Ending as json ",t,e),r.end(JSON.stringify(e,null,2))):(Da.debug(
"_handleResponse: Ending without body ",t),r.end())}_handleErrorResponse(e,t){var r=oe(e)?new N(e):ce(e)?new N(e,
e.getStatusCode()):(Da.error("_handleErrorResponse_ Exception: ",e),"production"===(null==(r=process)||null==(r=r.env
)?void 0:r.NODE_ENV)?N.internalServerError():new N(ae(w.InternalServerError,"Internal Server Error: "+e),
w.InternalServerError));this._handleResponse(r,t)}_parseRequestHeaders(e){return new ka(e)}static createServerService(e
){var t;if("http:"===(e=new na.default.URL(e)).protocol)return t=e.port?parseInt(e.port,10):80,new Aa(t,e.hostname);
throw new TypeError(`RequestServer: Protocol "${e.protocol}" not yet supported`)}}s(Ba,"Event",Ns);
const Ha=A.createLogger("RequestControllerUtils");class k{static setLogLevel(e){Ha.setLogLevel(e)}
static parseRequestMappings(e){return{methods:_o(e,ne),paths:_o(e,u)}}static attachControllerMapping(e,t){
var t=k.parseRequestMappings(t),r=ye(e,e);me(e,void 0===r?{mappings:[t],controllerProperties:{}}:g(g({},r),{},{
mappings:mi([],r.mappings,[t])}))}static attachControllerMethodMapping(e,t,r){var n=ye(e,e),t=k.parseRequestMappings(t);
void 0===n?me(e,{mappings:[],controllerProperties:{[r]:{mappings:[t],params:[],modelAttributes:[]}}}):v(
n.controllerProperties,r)?me(e,g(g({},n),{},{controllerProperties:g(g({},n.controllerProperties),{},{[r]:g(g({},
n.controllerProperties[r]),{},{mappings:mi([t],n.controllerProperties[r].mappings)})})})):me(e,g(g({},n),{},{
controllerProperties:g(g({},n.controllerProperties),{},{[r]:{mappings:[t],params:[],modelAttributes:[]}})}))}
static _setControllerMethodParam(e,t,r,n,i=!1){var o,s=ye(e,e);void 0===s?(o=k._initializeParams(r,n),me(e,i?{mappings:[
],controllerProperties:{[t]:{requestBodyRequired:!0,mappings:[],modelAttributes:[],params:o}}}:{mappings:[],
controllerProperties:{[t]:{mappings:[],modelAttributes:[],params:o}}})):v(s.controllerProperties,t)?(
o=k._reinitializeParams(s,t,r,n),me(e,g(g({},s),{},i?{controllerProperties:g(g({},s.controllerProperties),{},{[t]:g(g({}
,s.controllerProperties[t]),{},{requestBodyRequired:!0,params:o})})}:{controllerProperties:g(g({},s.controllerProperties
),{},{[t]:g(g({},s.controllerProperties[t]),{},{params:o})})}))):(o=k._initializeParams(r,n),me(e,g(g({},s),{},i?{
controllerProperties:g(g({},s.controllerProperties),{},{[t]:{requestBodyRequired:!0,modelAttributes:[],mappings:[],
params:o}})}:{controllerProperties:g(g({},s.controllerProperties),{},{[t]:{mappings:[],modelAttributes:[],params:o}})}))
)}static findController(e){return He(e)&&ve(e)?e:Y(e)&&He(null==e?void 0:e.constructor)&&ve(e.constructor
)?e.constructor:void 0}static setControllerMethodModelAttributeParam(e,t,r,n,i){Ha.debug(
"setControllerMethodModelAttributeParam: attributeName =",n,i),n={objectType:b.MODEL_ATTRIBUTE,attributeName:n,
valueType:i},k._setControllerMethodParam(e,t,r,n)}static attachControllerMethodModelAttributeBuilder(e,t,r,n){Ha.debug(
"attachControllerMethodModelAttributeBuilder: attributeName =",n,t);var i=ye(e,e);void 0===i?me(e,{mappings:[],
controllerProperties:{[t]:{mappings:[],params:[],modelAttributes:[n]}}}):v(i.controllerProperties,t)?me(e,g(g({},i),{},{
controllerProperties:g(g({},i.controllerProperties),{},{[t]:g(g({},i.controllerProperties[t]),{},{modelAttributes:mi([n]
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
null);return r[e]=t,r}static _reinitializeParams(e,t,r,n){let i=mi([],e.controllerProperties[t].params);for(
;r>=i.length;)i.push(null);return i[r]=n,i}}const j=A.createLogger("Request");class L{static setLogLevel(e){
j.setLogLevel(e),ka.setLogLevel(e),k.setLogLevel(e)}static mapping(...i){return(e,t,r)=>{var n=k.findController(e);
void 0!==n?void 0===t?k.attachControllerMapping(n,i):k.attachControllerMethodMapping(n,i,t):j.debug(
"mapping: for other: config=",i,"target=",e,"propertyKey=",t,"descriptor=",r)}}static Mapping(...e){return L.mapping(
...e)}static param(e,t,r){if(u(e)&&void 0===r&&(void 0===t||he(t))){const o=e,s=null!=t?t:m.STRING;return(e,t,r)=>{
L._param(e,t,r,o,s)}}var n=m.STRING,i=""+r;L._param(e,t,r,i,n)}static _param(e,t,r,n,i){var o=L._getRequestController(e,
t,r);void 0!==o?k.setControllerMethodQueryParam(o,t,r,n,i):j.warn("_param: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static _getRequestController(e,t,r){if(u(t)&&l(r))return k.findController(e)}
static Param(e,t,r){return L.param(e,t,r)}static header(e,t,r){var n,s;if(j.debug("header: ",e,t,r),!u(t)||!l(r)){if(u(e
)){const a=e;if(void 0!==t&&(!(s=t)||void 0!==(null==s?void 0:s.required)&&!Zo(null==s?void 0:s.required)||void 0!==(
null==s?void 0:s.defaultValue)&&!u(null==s?void 0:s.defaultValue)))throw new TypeError(
"Request.header: Argument 2 is not type of RequestHeaderOptions: "+t);let i=void 0,o=void 0;if(void 0!==(s=t))if(Zo(s)
)i=s;else{if(!Y(s))throw new TypeError("Request.header: Invalid type of options");i=null!=(n=null==s?void 0:s.required
)?n:void 0,o=null!=(n=null==s?void 0:s.defaultValue)?n:void 0}return j.debug("header: init: ",a),(e,t,r)=>{if(u(t)&&l(r)
){var n=k.findController(e);if(void 0!==n)return void k.setControllerMethodHeader(n,t,r,a,m.STRING,i,o)}j.warn(
"header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(s=e)&&(
!s||void 0!==(null==s?void 0:s.defaultValues)&&!de(null==s?void 0:s.defaultValues)))throw new TypeError(
"Request.header: Invalid type of options");const i=null==s?void 0:s.defaultValues;return(e,t,r)=>{u(t)&&l(r
)?L._setMethodHeaderMap(e,t,r,i):j.warn("header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,
"; paramIndex=",r)}}L._setMethodHeaderMap(e,t,r,void 0)}static _setMethodHeaderMap(e,t,r,n){var i=k.findController(e);
void 0!==i?k.setControllerMethodHeaderMap(i,t,r,n):j.warn("_setMethodHeaderMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static Header(e,t,r){return L.header(e,t,r)}static pathVariable(e,t,
r){var n,a;if(j.debug("pathVariable: ",e,t,r),!u(t)||!l(r)){const c=e;if(u(c)){if(void 0!==t&&!((n=t)&&J(
null==n?void 0:n.required)&&($(a=null==n?void 0:n.defaultValue)||u(a))&&J(null==n?void 0:n.decodeValue))
)throw new TypeError("Request.pathVariable: Argument 2 is not type of RequestPathVariableOptions: "+t);let i=void 0,
o=void 0,s=!0;if(void 0!==(a=t))if(Zo(a))i=a;else{if(!Y(a))throw new TypeError(
"Request.pathVariable: Invalid type of options");i=null!=(n=null==a?void 0:a.required)?n:void 0,o=null!=(
n=null==a?void 0:a.defaultValue)?n:void 0,s=null==(n=null==a?void 0:a.decodeValue)||n}return j.debug(
"pathVariable: init: ",c),(e,t,r)=>{if(u(t)&&l(r)){var n=k.findController(e);if(void 0!==n
)return void k.setControllerMethodPathVariable(n,t,r,c,m.STRING,i,s,o)}j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(a=c)&&!Y(
null==a?void 0:a.defaultValues))throw new TypeError("Request.pathVariable: Invalid type of options");const i=a&&null!=(
n=null==a?void 0:a.defaultValues)?n:void 0;return(e,t,r)=>{u(t)&&l(r)?L._setPathVariableMap(e,t,r,i):j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}a=e,n=t,e=r,
L._setPathVariableMap(a,n,e,void 0)}static _setPathVariableMap(e,t,r,n){var i=k.findController(e);
void 0!==i?k.setControllerMethodPathVariableMap(i,t,r,n):j.warn("_setPathVariableMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static PathVariable(e,t,r){return L.pathVariable(e,t,r)}
static modelAttribute(i){if(j.debug("modelAttribute: ",i),u(i))return(e,t,r)=>{if(u(t)){var n=k.findController(e);if(
void 0!==n){if(l(r))return void k.setControllerMethodModelAttributeParam(n,t,r,i,m.JSON);if(void 0!==r
)return void k.attachControllerMethodModelAttributeBuilder(n,t,r,i)}}j.warn(
"modelAttribute: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)};throw new TypeError(
"Request.modelAttribute: Argument 1 is not string: "+i)}static body(e,t,r){var n=k.findController(e);void 0!==n&&u(t
)&&l(r)?k.setControllerMethodBodyParam(n,t,r,m.JSON):j.warn("body: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static Body(e,t,r){return L.body(e,t,r)}static optionsMapping(...e){
return L.mapping(L.Method.OPTIONS,...e)}static getMapping(...e){return L.mapping(L.Method.GET,...e)}static Get(...e){
return L.getMapping(...e)}static postMapping(...e){return L.mapping(L.Method.POST,...e)}static Post(...e){
return L.postMapping(...e)}static deleteMapping(...e){return L.mapping(L.Method.DELETE,...e)}static Delete(...e){
return L.deleteMapping(...e)}static putMapping(...e){return L.mapping(L.Method.PUT,...e)}static Put(...e){
return L.putMapping(...e)}static createBadRequestError(e){return ae(w.BadRequest,e)}static createNotFoundRequestError(e
){return ae(w.NotFound,e)}static createMethodNotAllowedRequestError(e){return ae(w.MethodNotAllowed,e)}
static createConflictRequestError(e){return ae(w.Conflict,e)}static createInternalErrorRequestError(e){return ae(
w.InternalServerError,e)}static throwBadRequestError(e){throw L.createBadRequestError(e)}
static throwNotFoundRequestError(e){throw L.createNotFoundRequestError(e)}static throwMethodNotAllowedRequestError(e){
throw L.createMethodNotAllowedRequestError(e)}static throwConflictRequestError(e){throw L.createConflictRequestError(e)}
static throwInternalErrorRequestError(e){throw L.createInternalErrorRequestError(e)}}s(L,"Method",p),s(L,"Status",w),s(L
,"ParamType",m),s(L,"Type",As),s(L,"Error",ma);const $a=A.createLogger("FiHgWhoisBackendController");s(Cs=class{
static setWhoisService(e){this._whois=e}static setWhoisRegistryService(e){this._whoisServers=e}static async lookup(e,t){
try{var r,n;return u(t)&&t?(r=this._whoisServers.resolveServerFromAddress(t),$a.debug(`lookup: "${t}": server: `,r),
n=await this._whois.whoisLookup(t,{server:r}),$a.debug(`lookup: "${t}": payload: `,n),N.ok({payload:n})):N.badRequest(
).body(xe('Lookup address (Query param "a") must be defined and a string',400))}catch(e){return $a.error("ERROR: ",e),
N.internalServerError().body(xe("Internal Server Error",500))}}},"_whois",void 0),s(Cs,"_whoisServers",void 0);let Ga=Cs
Pe([L.getMapping("/"),qe(0,(S={required:!1,defaultValue:""},j.debug("RequestHeader: ","Authorization",S,void 0),
L.header("Authorization",S,void 0))),qe(1,L.param("a",void 0,void 0)),Se("design:type",Function),Se("design:paramtypes",
[String,String]),Se("design:returntype",Promise)],Ga,"lookup",null),Ga=Pe([L.mapping("/")],Ga);const Ja=A.createLogger(
"NodeWhoisService");class Wa{constructor(){}async whoisLookup(e,t){var r,n,t=g(g({},{responseEncoding:"utf8",follow:2,
timeout:6e4}),null!=t?t:{}),i=Wa._parseServerOptions(t.server);if(!i)throw new Error(
"lookup: no whois server is known for this kind of object");Ja.debug("server = ",i);const o={host:i.host,port:i.port},
s=(t.bind&&(o.localAddress=t.bind),Ja.debug("sockOpts = ",o),Zs.connect(o)),a=(t.timeout&&s.setTimeout(t.timeout),
t.encoding&&s.setEncoding(t.encoding),await Wa._whoisSocketQuery(s,!1!==i.punycode&&!1!==t.punycode?ea.toASCII(e):e,
i.query));return r=a.toString(t.responseEncoding),Ja.debug("data = ",r),0<t.follow&&(n=Wa._parseNextServer(r)
)&&n!==i.host?[Ae(i.host,r)].concat(await this.whoisLookup(e,g(g({},t),{follow:t.follow-1,server:n}))):[Ae(i.host,r)]}
static _parseServerOptions(e){var t;if(e)return u(e)&&(e={host:(t=e.split(":"))[0],port:2<=t.length?void 0===(t=t[1]
)||!W(t)&&(u(t)&&0===(t=Go(t)).length||!W(t=ws(t)))?void 0:t:43}),e=g(g({},{port:43,query:"$addr\r\n"}),e),g(g({},e),{},
{host:e.host.trim()})}static _parseNextServer(e){const t=e.replace(/\r/gm,"").match(
/(ReferralServer|Registrar Whois|Whois Server|WHOIS Server|Registrar WHOIS Server):[^\S\n]*((?:r?whois|https?):\/\/)?(.*)/
);return null!=t?Wa._cleanParsingErrors(t[3].trim()):void 0}static _cleanParsingErrors(e){return e.replace(/^[:\s]+/,""
).replace(/^https?[:\/]+/,"")||e}static async _whoisSocketQuery(n,i,o){return new Promise((e,t)=>{try{const r=[];
return n.write(o.replace("$addr",i)),n.on("data",e=>{r.push(e)}),n.on("timeout",()=>{n.destroy(),t(new Error(
"lookup: timeout"))}),n.on("error",e=>{t(e)}),n.on("close",()=>{e(Buffer.concat(r))})}catch(e){t(e)}})}}const Ka={
"br.com":"whois.centralnic.net","cn.com":"whois.centralnic.net","de.com":"whois.centralnic.net",
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
"xn--ygbi2ammx":"whois.pnina.ps","":"whois.ripe.net",_IP:{host:"whois.arin.net",query:"n + $addr\r\n"}},
Qa=A.createLogger("WhoisServerRegistryService");class Xa{constructor(e){s(this,"_servers",void 0),this._servers=e}
resolveServerFromAddress(e){var t;if(0<=e.indexOf("@"))throw new TypeError("lookup: email addresses not supported");
return(t=0!==Zs.isIP(e)?this._servers._IP:Xa._resolveServer(this._servers,e))?Qa.debug(`"${e}": Found: `,t):Qa.debug(
`"${e}": Not found`),t}static _resolveServer(e,t){let r,n=ea.toASCII(t);for(;r=e[n],n&&!r;)n=n.replace(/^.+?(\.|$)/,"");
return r}}pa.initEnvFromDefaultFiles(),A.setLogLevel(Bs);const Ya=A.createLogger("main");!async function(e=[]){var t,n,i
try{ka.setLogLevel(d.INFO),Va.setLogLevel(d.INFO),Sa.setLogLevel(d.INFO),Ba.setLogLevel(d.INFO),Ya.debug(
"Loglevel as "+A.getLogLevelString());var{scriptName:o,parseStatus:s,exitStatus:a,errorString:c}=class{
static parseArguments(e,t=[]){var r,n,i,o=null!=(r=t.shift())?r:"",s=null!=(r=t.shift())?r:"";if(!s)return{
parseStatus:Os.ERROR,exitStatus:3,nodePath:o,scriptName:e,freeArgs:[],extraArgs:[]};if(0===t.length)return{
parseStatus:Os.ERROR,exitStatus:3,nodePath:o,scriptName:s,freeArgs:[],extraArgs:[]};let a=!0,c=[],u=[];do{if(i=null!=(
n=t.shift())?n:"",a)switch(function(){switch(i){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:
return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:Os.HELP,exitStatus:0,nodePath:o,scriptName:s,
freeArgs:c,extraArgs:u};case 1:return{parseStatus:Os.VERSION,exitStatus:0,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u
};case 2:a=!1;break;default:if(a){if(ms(i,"-"))return{errorString:"Unknown argument: "+i,parseStatus:Os.ERROR,
exitStatus:4,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u};c.push(i)}else u.push(i)}}while(1<=t.length);return{
parseStatus:Os.OK,exitStatus:0,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u}}}.parseArguments(wa,e);if(
s===Os.HELP||s===Os.VERSION)return console.log(`USAGE: ${o} [OPT(s)] ARG(1) [...ARG(N)]

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
`),a;if(c)return console.error("ERROR: "+c),a;t=new Wa,n=new Xa(Ka),Ga.setWhoisService(t),Ga.setWhoisRegistryService(n);
const u=new Ba(ga);u.attachController(Ga),u.start();let r=void 0;return i=new Promise((e,t)=>{try{Ya.debug(
"Stopping server from RequestServer stop event"),r=u.on(Ba.Event.STOPPED,()=>{r=void 0,e()})}catch(e){t(e)}}),
pa.setupDestroyHandler(()=>{Ya.debug("Stopping server from process utils event"),u.stop(),r&&(r(),r=void 0)},e=>{
Ya.error("Error while shutting down the service: ",e)}),await i,0}catch(e){return Ya.error("Fatal error: ",e),6}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
