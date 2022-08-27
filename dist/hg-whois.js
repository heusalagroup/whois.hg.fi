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
get:function(){return r[e]}}))}),n.default=r,Object.freeze(n))}function U(e){
return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function V(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function F(e){var t,r=-1,n=null==e?0:e.length;
for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function D(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;
)t=e[r],this.set(t[0],t[1])}function $(e){e=this.__data__=new Rt(e),this.size=e.size}function B(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Et;++t<r;)this.add(e[t])}function H(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");return o.cache=new(
H.Cache||Qr),o}function J(e){return void 0===e}function G(e){return o(e)}function W(e){return J(e)||rs(e)}function u(e){
return as(e)}function l(e){return ls(e)}function K(e){return ws(e)}function Q(e,t){return ii(e,t)}function a(e,t){
return hi(e,t)}function X(e,t=u,r=void 0){var n;return!!(void 0===r||He(n=e)&&a(As(n),r))&&(n=void 0!==t?t:u,He(r=e)&&a(
te(r),n))}function Y(...e){return t=>Q(e,e=>e(t))}function Z(e){return He(e)}function ee(e){if(void 0!==e&&""!==e
)return""+e}function te(e,t=u){var r;return G(e)?(r=f(e,(e,t)=>t),Po(r,e=>t(e))):Z(e)?(r=Reflect.ownKeys(e),Po(r,e=>t(e)
)):[]}function re(e){if(!e.startsWith("%{")||!e.endsWith("}"))return ee(e)}function ne(e){if(l(e))switch(e){
case w.OPTIONS:return"options";case w.GET:return"get";case w.POST:return"post";case w.PUT:return"put";case w.DELETE:
return"delete";case w.PATCH:return"patch"}throw new TypeError("Unsupported value for stringifyRequestMethod(): "+e)}
function ie(e){return l(e)&&0<=e&&e<=5}function oe(e){if(ie(e))return e;if(u(e))switch(e=e.toLowerCase()){case"options":
return w.OPTIONS;case"get":return w.GET;case"post":return w.POST;case"put":return w.PUT;case"delete":return w.DELETE;
case"patch":return w.PATCH}throw new TypeError(`Cannot parse value "${e}" as a valid RequestMethod`)}function se(e){if(
l(e))switch(e){case y.Continue:case y.SwitchingProtocols:case y.Processing:case y.CheckPoint:case y.OK:case y.Created:
case y.Accepted:case y.NonAuthoritativeInformation:case y.NoContent:case y.ResetContent:case y.PartialContent:
case y.MultiStatus:case y.AlreadyReported:case y.IMUsed:case y.MultipleChoices:case y.MovedPermanently:case y.Found:
case y.SeeOther:case y.NotModified:case y.TemporaryRedirect:case y.PermanentRedirect:case y.BadRequest:
case y.Unauthorized:case y.PaymentRequired:case y.Forbidden:case y.NotFound:case y.MethodNotAllowed:
case y.NotAcceptable:case y.ProxyAuthenticationRequired:case y.RequestTimeout:case y.Conflict:case y.Gone:
case y.LengthRequired:case y.PreconditionFailed:case y.PayloadTooLarge:case y.URITooLong:case y.UnsupportedMediaType:
case y.RequestedRangeNotSatisfiable:case y.ExpectationFailed:case y.IAmATeapot:case y.UnprocessableEntity:case y.Locked:
case y.FailedDependency:case y.TooEarly:case y.UpgradeRequired:case y.PreconditionRequired:case y.TooManyRequests:
case y.RequestHeaderFieldsTooLarge:case y.UnavailableForLegalReasons:case y.InternalServerError:case y.NotImplemented:
case y.BadGateway:case y.ServiceUnavailable:case y.GatewayTimeout:case y.HttpVersionNotSupported:
case y.VariantAlsoNegotiates:case y.InsufficientStorage:case y.LoopDetected:case y.BandwidthLimitExceeded:
case y.NotExtended:case y.NetworkAuthenticationRequired:return 1}}function ae(e){switch(e){case y.Continue:
return"Continue";case y.SwitchingProtocols:return"Switching Protocols";case y.Processing:return"Processing";
case y.CheckPoint:return"Check Point";case y.OK:return"OK";case y.Created:return"Created";case y.Accepted:
return"Accepted";case y.NonAuthoritativeInformation:return"Non-Authoritative Information";case y.NoContent:
return"No Content";case y.ResetContent:return"Reset Content";case y.PartialContent:return"Partial Content";
case y.MultiStatus:return"Multi Status";case y.AlreadyReported:return"Already Reported";case y.IMUsed:return"IM Used";
case y.MultipleChoices:return"Multiple Choices";case y.MovedPermanently:return"Moved Permanently";case y.Found:
return"Found";case y.SeeOther:return"See Other";case y.NotModified:return"Not Modified";case y.TemporaryRedirect:
return"Temporary Redirect";case y.PermanentRedirect:return"Permanent Redirect";case y.BadRequest:return"Bad Request";
case y.Unauthorized:return"Unauthorized";case y.PaymentRequired:return"Payment Required";case y.Forbidden:
return"Forbidden";case y.NotFound:return"Not Found";case y.MethodNotAllowed:return"Method Not Allowed";
case y.NotAcceptable:return"Not Acceptable";case y.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case y.RequestTimeout:return"Request Timeout";case y.Conflict:return"Conflict";case y.Gone:return"Gone";
case y.LengthRequired:return"Length Required";case y.PreconditionFailed:return"Precondition Failed";
case y.PayloadTooLarge:return"Payload Too Large";case y.URITooLong:return"URI Too Long";case y.UnsupportedMediaType:
return"Unsupported Media Type";case y.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case y.ExpectationFailed:return"Expectation Failed";case y.IAmATeapot:return"I Am a Teapot";case y.UnprocessableEntity:
return"Unprocessable Entity";case y.Locked:return"Locked";case y.FailedDependency:return"Failed Dependency";
case y.TooEarly:return"Too Early";case y.UpgradeRequired:return"Upgrade Required";case y.PreconditionRequired:
return"Precondition Required";case y.TooManyRequests:return"Too Many Requests";case y.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case y.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case y.InternalServerError:return"Internal Server Error";case y.NotImplemented:return"Not Implemented";
case y.BadGateway:return"Bad Gateway";case y.ServiceUnavailable:return"Service Unavailable";case y.GatewayTimeout:
return"Gateway Timeout";case y.HttpVersionNotSupported:return"Http Version Not Supported";case y.VariantAlsoNegotiates:
return"Variant Also Negotiates";case y.InsufficientStorage:return"Insufficient Storage";case y.LoopDetected:
return"Loop Detected";case y.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case y.NotExtended:
return"Not Extended";case y.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}function ce(e,t=void 0){return new Pa(e,t)}function ue(e){
return e&&e instanceof Pa}function le(){if("undefined"!=typeof window)return window}function he(e){return N.isObject(e
)&&N.hasPropertyMethods(e)&&G(e.methods)&&a(e.methods,ie)&&N.hasPropertyPaths(e)&&G(e.paths)&&a(e.paths,u)}function de(e
){if(l(e))switch(e){case b.JSON:case b.STRING:case b.INTEGER:case b.NUMBER:return!0}return!1}function pe(e){
return!!e&&Z(e)&&N.everyPropertyIs(e,e=>u(e)||G(e)&&a(e,u))}function we(e){return!!e&&(null==e?void 0:e.objectType
)===_.MODEL_ATTRIBUTE&&u(null==e?void 0:e.attributeName)&&de(null==e?void 0:e.valueType)}function ge(e){return!!(t=e)&&(
null==t?void 0:t.objectType)===_.QUERY_PARAM&&u(null==t?void 0:t.queryParam)&&de(null==t?void 0:t.valueType)||!!e&&(
null==e?void 0:e.objectType)===_.REQUEST_BODY&&de(null==e?void 0:e.valueType)||!!(t=e)&&(null==t?void 0:t.objectType
)===_.REQUEST_HEADER&&u(null==t?void 0:t.headerName)&&rs(null==t?void 0:t.isRequired)&&de(null==t?void 0:t.valueType)&&(
void 0===(null==t?void 0:t.defaultValue)||u(null==t?void 0:t.defaultValue))||!!e&&(null==e?void 0:e.objectType
)===_.REQUEST_HEADER_MAP&&(void 0===(null==e?void 0:e.defaultValues)||pe(null==e?void 0:e.defaultValues))||!!(t=e)&&(
null==t?void 0:t.objectType)===_.PATH_VARIABLE&&u(null==t?void 0:t.variableName)&&rs(null==t?void 0:t.isRequired)&&de(
null==t?void 0:t.valueType)&&(void 0===(null==t?void 0:t.defaultValue)||u(null==t?void 0:t.defaultValue))||!!e&&(
null==e?void 0:e.objectType)===_.PATH_VARIABLE_MAP&&(void 0===(null==e?void 0:e.defaultValues)||!!(
t=null==e?void 0:e.defaultValues)&&Z(t)&&N.everyPropertyIs(t,u))||we(e);var t}function fe(e){return N.isObject(e
)&&N.hasPropertyMappings(e)&&G(e.mappings)&&a(e.mappings,he)&&N.hasPropertyParams(e)&&G(e.params)&&a(e.params,
N.createOrFunction(ge,ns))}function ve(e){if(!N.isObject(e))return"Value is not object";if(!N.hasPropertyMappings(e)
)return'Property "mappings" did not exist';if(!G(e.mappings))return'Property "mappings" was not an array';if(!a(
e.mappings,he))return'Property "mappings" had some elements which were not RequestMappingObject';if(
!N.hasPropertyParams(e))return'Property "params" did not exist';if(!G(e.params)
)return'Property "params" was not an array';const r=N.createOrFunction(ge,ns);return a(e.params,r
)?"ok":'Property "params" had some elements which were not RequestParamObject or null: '+Po(f(e.params,(e,t)=>r(e
)?"":`Item #${t} was not null or RequestParamObject`),e=>!!e).join(", ")}function ye(e){var t;return e&&(
!N.hasProperty__requestMappings(e)||(t=e=e[za],N.isObject(t)&&N.hasPropertyMappings(t)&&G(t.mappings)&&a(t.mappings,he
)&&N.hasPropertyControllerProperties(t)&&Z(t.controllerProperties)&&N.everyPropertyIs(t.controllerProperties,fe
)||void Ma.warn("The internal mapping object was not correct: "+JSON.stringify(e,null,2)+": "+(t=e,N.isObject(t
)?N.hasPropertyMappings(t)?G(t.mappings)?a(t.mappings,he)?N.hasPropertyControllerProperties(t)?Z(t.controllerProperties
)?N.everyPropertyIs(t.controllerProperties,fe
)?"ok":'Property "controllerProperties" was not valid: Some properties were not valid: '+N.explainEveryPropertyIs(
t.controllerProperties,fe,ve
):'Property "controllerProperties" was not valid: Property was not object':'Property "controllerProperties" was not valid: Property did not exist':'Property "mappings" was not valid: Some items were not valid':'Property "mappings" was not valid: Was not array':'Property "mappings" was not valid: Did not exist':"not object"
))))}function me(e,t){if(N.hasProperty__requestMappings(e))return g(g({},e[za]),{},{controller:t})}function be(e,t){
const r=g({},t);v(r,"controller")&&delete r.controller,e[za]=r}function _e(e){return u(t=e)||l(t)||rs(t)||ns(t)||Ee(e
)||Re(e);var t}function Re(e){return!!He(t=e)&&!(t instanceof Date)&&!We(t)&&!G(t)&&X(t,u,void 0)&&X(e,u,Y(_e,J));var t}
function Ee(e){return[e,t=void 0,r=void 0,n=void 0]=[e,Y(_e,J)],!!o(e)&&(i=null!=(i=null==e?void 0:e.length)?i:0,!(
void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||a(e,t)));var t,r,n,i}function Te(e){return e&&e instanceof Ua}
function Pe(e){return l(e)}function qe(e,t,r,n){var i,o,s=arguments.length,
a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if(
"object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(o=e.length-1;0<=o;o--
)(i=e[o])&&(a=(s<3?i(a):3<s?i(t,r,a):i(t,r))||a);return 3<s&&a&&Object.defineProperty(t,r,a),a}function Se(r,n){
return function(e,t){n(e,t,r)}}function xe(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata
)return Reflect.metadata(e,t)}function Oe(e,t,r){return L.param(e,t,r)}function Ne(e,t,r){return j.debug(
"RequestHeader: ",e,t,r),L.header(e,t,r)}function Ae(...e){return L.getMapping(...e)}function ke(e,t){return{error:e,
code:t}}function Ce(e,t){return{server:e,data:t}}function je(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[
r]=t(e[r],r,e);return i}function Le(e,t){return e===t||e!=e&&t!=t}function Me(e,t){for(var r=e.length;r--;)if(ha(e[r][0]
,t))return r;return-1}var ze,Ie,Ue,Ve,Fe,De,$e,Be,He,Je,Ge,We,Ke,Qe,Xe,Ye,Ze,et,tt,rt,nt,it,ot,st,at,ct,ut,lt,ht,dt,pt,
wt,gt,ft,vt,yt,mt,bt,_t,Rt,Et,Tt,Pt,qt,St,xt,Ot,Nt,At,kt,o,Ct,jt,Lt,Mt,zt,It,Ut,Vt,Ft,Dt,$t,Bt,Ht,Jt,t,Gt,Wt,Kt,Qt,Xt,Yt
,Zt,er,tr,rr,nr,ir,or,sr,ar,cr,ur,lr,hr,dr,pr,wr,gr,fr,vr,yr,mr,br,_r,Rr,Er,Tr,Pr,qr,Sr,xr,Or,Nr,Ar,kr,Cr,jr,Lr,Mr,zr,Ir
,Ur,Vr,Fr,Dr,$r,Br,Hr,Jr,Gr,Wr,Kr,Qr,Xr,Yr,Zr,en,tn,rn,nn,on,sn,an,cn,un,ln,hn,dn,pn,wn,gn,fn,vn,yn,mn,bn,_n,Rn,En,Tn,Pn
,qn,Sn,xn,e,On,Nn,An,kn,Cn,jn,Ln,Mn,zn,In,Un,Vn,Fn,Dn,$n,r,Bn,Hn,Jn,Gn,f,Wn,Kn,Qn,Xn,Yn,Zn,ei,ti,ri,ni,ii,oi,si,ai,ci,ui
,li,hi,di,pi,wi,gi,fi,vi,yi,mi,bi,_i,Ri,Ei,Ti,Pi,qi,Si,xi,Oi,n,Ni,Ai,ki,Ci,ji,Li,Mi,zi,Ii,Ui,Vi,Fi,Di,$i,Bi,Hi,Ji,Gi,Wi,
Ki,Qi,Xi,Yi,Zi,i,eo,to,ro,no,io,oo,so,ao,co,uo,lo,ho,po,wo,go,fo,vo,yo,mo,bo,_o,Ro,Eo,To,Po,qo,So,xo,Oo,No,h,Ao,ko,Co,jo
,Lo,c,d,Mo,zo,Io,Uo,Vo,Fo,Do,$o,Bo,Ho,Jo,Go,Wo,Ko,Qo,Xo,Yo,Zo,v,es,ts,rs,ns,is,os,ss,as,cs,us,ls,hs,ds,ps,ws,gs,fs,vs,ys
,ms,bs,_s,Rs,Es,Ts,Ps,qs,Ss,xs,Os,Ns,As,ks,p,w,y,Cs,m,js,b,_,Ls,Ms,R,zs,E,T,Is,Us,P,Vs,Fs,Ds,q,S,$s,Bs,Hs,Js,Gs,Ws,Ks,Qs
,Xs,Ys,Zs,ea,ta=require("fs"),x=require("path"),ra=require("url"),na=require("querystring"),ia=require("http"),
oa=require("net"),sa=require("punycode"),aa=z(ta),ca=z(x),ua=z(ra),la=I(na),
ta="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ha=Le,da=Me,pa=Array.prototype.splice,wa=Me,ga=Me,fa=Me;V.prototype.clear=function(){this.__data__=[],this.size=0},
V.prototype.delete=function(e){var t=this.__data__;return!((e=da(t,e))<0||(e==t.length-1?t.pop():pa.call(t,e,1),
--this.size,0))},V.prototype.get=function(e){var t=this.__data__;return(e=wa(t,e))<0?void 0:t[e][1]},
V.prototype.has=function(e){return-1<ga(this.__data__,e)},V.prototype.set=function(e,t){var r=this.__data__,n=fa(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},ze=x=V,na=function(){this.__data__=new ze,this.size=0},
Qo=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},ko=function(e){return this.__data__.get(e)},
Qi=function(e){return this.__data__.has(e)},ta="object"==typeof ta&&ta&&ta.Object===Object&&ta,
n="object"==typeof self&&self&&self.Object===Object&&self,Bs=(n=ta||n||Function("return this")()).Symbol,
$s=Object.prototype,Ie=$s.hasOwnProperty,Ue=$s.toString,Ve=Bs?Bs.toStringTag:void 0,$s=Object.prototype,Fe=$s.toString,
De=function(e){var t,r,n=Ie.call(e,Ve),i=e[Ve];try{t=!(e[Ve]=void 0)}catch(e){}return r=Ue.call(e),t&&(n?e[Ve
]=i:delete e[Ve]),r},$e=function(e){return Fe.call(e)},Be=Bs?Bs.toStringTag:void 0,Je=$s=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Be&&Be in Object(e)?De:$e)(e)},Ge=He=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},We=function(e){return!!Ge(e)&&("[object Function]"==(e=Je(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},R=n["__core-js_shared__"],
R=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""),Ke=R?"Symbol(src)_1."+R:"",R=Function.prototype,Qe=R.toString,Xe=We,
Ye=function(e){return!!Ke&&Ke in e},Ze=He,et=R=function(e){if(null!=e){try{return Qe.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},d=/[\\^$.*+?()[\]{}|]/g,tt=/^\[object .+?Constructor\]$/,i=Function.prototype,c=Object.prototype,
i=i.toString,c=c.hasOwnProperty,rt=RegExp("^"+i.call(c).replace(d,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=function(e){return!(!Ze(e)||Ye(e))&&(Xe(e
)?rt:tt).test(et(e))},it=function(e,t){return null==e?void 0:e[t]},c=(i=function(e,t){return e=it(e,t),nt(e)?e:void 0})(
n,"Map"),d=i(Object,"create"),st=ot=d,e=Object.prototype,at=e.hasOwnProperty,ct=d,e=Object.prototype,ut=e.hasOwnProperty
,lt=d,e=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},d=function(e){var t,
r=this.__data__;return st?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:at.call(r,e)?r[e]:void 0},Lo=function(e){
var t=this.__data__;return ct?void 0!==t[e]:ut.call(t,e)},r=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=lt&&void 0===t?"__lodash_hash_undefined__":t,this},F.prototype.clear=function(){
this.__data__=ot?ot(null):{},this.size=0},F.prototype.delete=e,F.prototype.get=d,F.prototype.has=Lo,F.prototype.set=r,
ht=F,dt=x,pt=c,wt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},yt=vt=ft=gt=function(e,t){
return e=e.__data__,wt(t)?e["string"==typeof t?"string":"hash"]:e.map},e=function(e){return e=gt(this,e).delete(e),
this.size-=e?1:0,e},d=function(e){return ft(this,e).get(e)},Lo=function(e){return vt(this,e).has(e)},r=function(e,t){
var r=yt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},D.prototype.clear=function(){this.size=0,
this.__data__={hash:new ht,map:new(pt||dt),string:new ht}},D.prototype.delete=e,D.prototype.get=d,D.prototype.has=Lo,
D.prototype.set=r,bt=c,_t=e=D,Rt=mt=x,d=Qo,Lo=ko,r=Qi,x=function(e,t){var r,n=this.__data__;if(n instanceof mt){if(
r=n.__data__,!bt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new _t(r)}return n.set(e,t),
this.size=n.size,this},$.prototype.clear=na,$.prototype.delete=d,$.prototype.get=Lo,$.prototype.has=r,$.prototype.set=x,
Qo=$,Et=e,ko=function(e){return this.__data__.has(e)},B.prototype.add=B.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},B.prototype.has=ko,Tt=B,Pt=Qi=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},qt=function(e,t){return e.has(t)},na=n.Uint8Array,St=na,
xt=Le,Ot=d=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p=1&r,w=e.length,g=t.length;if(w!=g&&!(p&&w<g))return!1;if(g=o.get(e)
,s=o.get(t),g&&s)return g==t&&s==e;for(a=-1,c=!0,u=2&r?new Tt:void 0,o.set(e,t),o.set(t,e);++a<w;){if(l=e[a],h=t[a],
void 0!==(d=n?p?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)){if(d)continue;c=!1;break}if(u){if(!Pt(t,function(e,t){if(!qt(u,t)&&(
l===e||i(l,e,r,n,o)))return u.push(t)})){c=!1;break}}else if(l!==h&&!i(l,h,r,n,o)){c=!1;break}}return o.delete(e),
o.delete(t),c},Nt=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},At=Lo=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},r=Bs?Bs.prototype:void 0,kt=r?r.valueOf:void 0,
x=function(e,t,r,n,i,o,s){var a,c;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new St(e),new St(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return xt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":a=Nt;case"[object Set]":return a=a||At,!!(
e.size==t.size||1&n)&&((c=s.get(e))?c==t:(n|=2,s.set(e,t),c=Ot(a(e),a(t),n,i,o,s),s.delete(e),c));case"[object Symbol]":
if(kt)return kt.call(e)==kt.call(t)}return!1},ko=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];
return e},na=Array.isArray,Ct=ko,jt=o=na,r=function(e,t,r){return t=t(e),jt(e)?t:Ct(t,r(e))},Lt=na=function(e,t){for(
var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e)&&(s[o++]=r);return s},Ds=Object.prototype,
Mt=Ds.propertyIsEnumerable,Ds=(zt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Lt(zt(t),
function(e){return Mt.call(t,e)}))}:function(){return[]},jo=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},It=$s,S=function(e){return Ut(e)&&"[object Arguments]"==It(e)},Vt=Ut=q=function(e){
return null!=e&&"object"==typeof e},Fs=Object.prototype,Ft=Fs.hasOwnProperty,Dt=Fs.propertyIsEnumerable,Fs=S(function(){
return arguments}())?S:function(e){return Vt(e)&&Ft.call(e,"callee")&&!Dt.call(e,"callee")},E=(zs=(zs=(E=(E=(S={
exports:{}}).exports)&&!E.nodeType&&E)&&S&&!S.nodeType&&S)&&zs.exports===E?n.Buffer:void 0)?zs.isBuffer:void 0,
S.exports=E||function(){return!1},$t=/^(?:0|[1-9]\d*)$/,zs=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&$t.test(e))&&-1<e&&e%1==0&&e<t},Bt=$s,Ht=E=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Jt=q,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,Ws=function(e){return Jt(e)&&Ht(
e.length)&&!!t[Bt(e)]},Vs=function(t){return function(e){return t(e)}},P=(P=(T=Gt={exports:{}}).exports)&&!P.nodeType&&P
,P=(Is=P&&T&&!T.nodeType&&T)&&Is.exports===P,Us=P&&ta.process,P=function(){try{return Is&&Is.require&&Is.require("util"
).types||Us&&Us.binding&&Us.binding("util")}catch(e){}}(),T.exports=P,P=(T=(ta=Gt.exports)&&ta.isTypedArray)?Vs(T):Ws,
Wt=jo,Kt=Fs,Qt=o,Xt=S.exports,Yt=zs,Zt=ta=P,T=Object.prototype,er=T.hasOwnProperty,tr=Object.prototype,Qs=Object.keys,
Xs=Object,rr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||tr)},nr=function(e){
return Qs(Xs(e))},Ws=Object.prototype,ir=Ws.hasOwnProperty,or=We,sr=E,ar=function(e,t){var r,n=Qt(e),i=!n&&Kt(e),
o=!n&&!i&&Xt(e),s=!n&&!i&&!o&&Zt(e),a=n||i||o||s,c=a?Wt(e.length,String):[],u=c.length;for(r in e)!t&&!er.call(e,r
)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Yt(r,u))||c.push(
r);return c},cr=function(e){var t,r;if(!rr(e))return nr(e);for(r in t=[],Object(e))ir.call(e,r
)&&"constructor"!=r&&t.push(r);return t},ur=jo=function(e){return null!=e&&sr(e.length)&&!or(e)},lr=r,hr=Ds,
dr=P=function(e){return(ur(e)?ar:cr)(e)},pr=function(e){return lr(e,dr,hr)},T=Object.prototype,wr=T.hasOwnProperty,
Ws=function(e,t,r,n,i,o){var s,a,c,u,l,h,d,p,w,g=1&r,f=pr(e),v=f.length;if(v!=pr(t).length&&!g)return!1;for(s=v;s--;)if(
a=f[s],!(g?a in t:wr.call(t,a)))return!1;if(p=o.get(e),w=o.get(t),p&&w)return p==t&&w==e;for(c=!0,o.set(e,t),o.set(t,e),
u=g;++s<v;){if(l=e[a=f[s]],h=t[a],!(void 0===(d=n?g?n(h,l,a,t,e,o):n(l,h,a,e,t,o):d)?l===h||i(l,h,r,n,o):d)){c=!1;break}
u=u||"constructor"==a}return c&&!u&&(p=e.constructor)!=(w=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof w&&w instanceof w)&&(c=!1),o.delete(e),o.delete(t),c},r=i(n,
"DataView"),Ds=c,T=i(n,"Promise"),yi=c=i(n,"Set"),n=i(n,"WeakMap"),gr=$s,vr=(fr=R)(R=r),yr=fr(Ds),mr=fr(T),br=fr(yi),
_r=fr(n),r=gr,(R&&"[object DataView]"!=r(new R(new ArrayBuffer(1)))||Ds&&"[object Map]"!=r(new Ds
)||T&&"[object Promise]"!=r(T.resolve())||yi&&"[object Set]"!=r(new yi)||n&&"[object WeakMap]"!=r(new n))&&(r=function(e
){var t=gr(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?fr(e):"")switch(e){case vr:return"[object DataView]";
case yr:return"[object Map]";case mr:return"[object Promise]";case br:return"[object Set]";case _r:
return"[object WeakMap]"}return t}),Rr=Qo,Er=d,Tr=x,Pr=Ws,qr=r,Sr=o,xr=S.exports,Or=ta,Nr="[object Arguments]",
Ar="[object Array]",kr="[object Object]",R=Object.prototype,Cr=R.hasOwnProperty,jr=function(e,t,r,n,i,o){var s=Sr(e),
a=Sr(t),c=s?Ar:qr(e),a=a?Ar:qr(t),u=(c=c==Nr?kr:c)==kr,l=(a=a==Nr?kr:a)==kr;if((a=c==a)&&xr(e)){if(!xr(t))return!1;u=!(
s=!0)}return a&&!u?(o=o||new Rr,s||Or(e)?Er(e,t,r,n,i,o):Tr(e,t,c,r,n,i,o)):1&r||(s=u&&Cr.call(e,"__wrapped__"),
c=l&&Cr.call(t,"__wrapped__"),!s&&!c)?a&&(o=o||new Rr,Pr(e,t,r,n,i,o)):i(s?e.value():e,c?t.value():t,r,n,o=o||new Rr)},
Mr=Qo,zr=Ds=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Lr(t)&&!Lr(r)?t!=t&&r!=r:jr(t,r,n,i,e,o))},Ir=He,
Ur=T=function(e){return e==e&&!Ir(e)},Vr=P,Fr=function(e,t,r,n){var i,o,s,a,c,u,l=r.length,h=l,d=!n;if(null==e)return!h;
for(e=Object(e);l--;)if(i=r[l],d&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++l<h;)if(s=e[o=(i=r[l])[0]],a=i[1],
d&&i[2]){if(void 0===s&&!(o in e))return!1}else if(c=new Mr,!(void 0===(u=n?n(s,a,o,e,t,c):u)?zr(a,s,3,n,c):u))return!1;
return!0},Dr=function(e){for(var t,r,n=Vr(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,Ur(r)];return n},$r=yi=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},n=function(t){var r=Dr(t);
return 1==r.length&&r[0][2]?$r(r[0][0],r[0][1]):function(e){return e===t||Fr(e,t,r)}},Br=$s,Hr=Lr=q,Jr=o,Gr=d=function(e
){return"symbol"==typeof e||Hr(e)&&"[object Symbol]"==Br(e)},Wr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Kr=/^\w*$/,x=function(e,t){var r;return!Jr(e)&&(!("number"!=(r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gr(e)
)||Kr.test(e)||!Wr.test(e)||null!=t&&e in Object(t))},Qr=e,H.Cache=Qr,
Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yr=/\\(\\)?/g,Ks=(
Ws=H(function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Xr,function(e,t,r,n){i.push(r?n.replace(Yr,
"$1"):t||e)}),i},function(e){return 500===Ks.size&&Ks.clear(),e})).cache,Zr=je,en=o,tn=d,r=Bs?Bs.prototype:void 0,
rn=r?r.toString:void 0,nn=S=function e(t){var r;return"string"==typeof t?t:en(t)?Zr(t,e)+"":tn(t)?rn?rn.call(t
):"":"0"==(r=t+"")&&1/t==-1/0?"-0":r},an=Ws,cn=ta=function(e){return null==e?"":nn(e)},un=d,wn=ln=function(e,t){
return on(e)?e:sn(e,t)?[e]:an(cn(e))},gn=Fs,yn=E,bn=function(e,t){return null!=e&&t in Object(e)},_n=R=function(e,t,r){
for(var n,i,o=(t=wn(t,e)).length,s=!(n=-1);++n<o&&(i=mn(t[n]),s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(
o=null==e?0:e.length)&&yn(o)&&vn(i,o)&&(fn(e)||gn(e))},Rn=Ds,En=pn=function(e,t,r){return void 0===(e=null==e?void 0:dn(
e,t))?r:e},Tn=function(e,t){return null!=e&&_n(e,t,bn)},qn=T,Sn=yi,On=dn=Qo=function(e,t){for(var r=0,n=(t=ln(t,e)
).length;null!=e&&r<n;)e=e[hn(t[r++])];return r&&r==n?e:void 0},Nn=function(t){return function(e){
return null==e?void 0:e[t]}},An=function(t){return function(e){return On(e,t)}},kn=Pn=sn=x,Cn=xn=mn=hn=function(e){var t
return"string"==typeof e||un(e)?e:"0"==(t=e+"")&&1/e==-1/0?"-0":t},jn=n,Ln=function(r,n){return Pn(r)&&qn(n)?Sn(xn(r),n
):function(e){var t=En(e,r);return void 0===t&&t===n?Tn(e,r):Rn(n,t,3)}},Mn=e=function(e){return e},zn=fn=on=o,
In=function(e){return kn(e)?Nn(Cn(e)):An(e)},Un=function(e,t,r){for(var n,i=-1,o=Object(e),s=r(e),
a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Vn=P,Bn=je,Jn=r=function(e,n){var i=-1,o=$n(e)?Array(e.length):[];
return Dn(e,function(e,t,r){o[++i]=n(e,t,r)}),o},f=function(e,t){return(Gn(e)?Bn:Jn)(e,Hn(t))},Kn=Le,Qn=$n=Fn=jo,
Xn=vn=zs,Yn=He,Zn=Qi,ti=function(e,n){var i;return Wn(e,function(e,t,r){return!(i=n(e,t,r))}),!!i},ii=function(e,t,r){
var n=ri(e)?Zn:ti;return r&&ni(e,t,r)&&(t=void 0),n(e,ei(t))},oi=Wn=Dn=Ws=function(e,t){var r,n,i;if(null!=e){if(!Fn(e)
)return e&&Un(e,t,Vn);for(r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););}return e},si=function(e,t){for(var r=-1
,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ai=function(e,n){var i=!0;return oi(e,function(e,t,r){
return i=!!n(e,t,r)}),i},ci=ei=Hn=E=function(e){return"function"==typeof e?e:null==e?Mn:"object"==typeof e?zn(e)?Ln(e[0]
,e[1]):jn(e):In(e)},ui=ri=Gn=o,li=ni=Ds=function(e,t,r){var n;return!!Yn(r)&&!!("number"==(n=typeof t)?Qn(r)&&Xn(t,
r.length):"string"==n&&t in r)&&Kn(r[t],e)},hi=function(e,t,r){var n=ui(e)?si:ai;return r&&li(e,t,r)&&(t=void 0),n(e,ci(
t))},di=i,T=function(){try{var e=di(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),pi=Fs,wi=o,
gi=Bs?Bs.isConcatSpreadable:void 0,vi=function(e){return wi(e)||pi(e)||!!(gi&&e&&e[gi])},mi=fi=ko,bi=yi=function e(t,r,n
,i,o){var s,a=-1,c=t.length;for(n=n||vi,o=o||[];++a<c;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):fi(o,s):i||(o[o.length]=s);
return o},_i=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},Ri=o,Ei=function(){var e,t,r
,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return mi(Ri(t)?_i(t):[t
],bi(e,1))},Ti=E,Pi=jo,qi=P,x=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;
return-1},Si=/\s/,xi=function(e){for(var t=e.length;t--&&Si.test(e.charAt(t)););return t},Oi=/^\s+/,Ni=n=function(e){
return e&&e.slice(0,xi(e)+1).replace(Oi,"")},Ai=He,ki=d,Ci=/^[-+]0x[0-9a-f]+$/i,ji=/^0b[01]+$/i,Li=/^0o[0-7]+$/i,
Mi=parseInt,zi=function(e){var t;return"number"==typeof e?e:ki(e)?NaN:(Ai(e)&&(t="function"==typeof e.valueOf?e.valueOf(
):e,e=Ai(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=Ni(e),(t=ji.test(e))||Li.test(e)?Mi(e.slice(2),t?2:8):Ci.test(e
)?NaN:+e))},Ii=function(e){return e?(e=zi(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},Ui=x,
Vi=E,Fi=zs=function(e){var t=(e=Ii(e))%1;return e==e?t?e-t:e:0},Di=Math.max,$i=function(e,t,r){var n,i,o,s=Object(e);
return Pi(e)||(n=Ti(t),e=qi(e),t=function(e){return n(s[e],e,s)}),-1<(o=(o=null==(i=e)?0:i.length)?((r=null==r?0:Fi(r)
)<0&&(r=Di(o+r,0)),Ui(i,Vi(t),r)):-1)?s[n?e[o]:o]:void 0},Bi=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(
r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Hi=Ws,Ji=E,Gi=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i
,e,t,r)}),i},Wi=o,Ki=function(e,t,r){var n=Wi(e)?Bi:Gi,i=arguments.length<3;return n(e,Ji(t),r,i,Hi)},Qi=function(e,t,r
){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t
];return n},Xi=x,Yi=function(e){return e!=e},Zi=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;
return-1},i=function(e,t,r){return t==t?Zi(e,t,r):Xi(e,Yi,r)},c&&Lo(new c([,-0]))[1],eo=d,to=function(e,t){var r,n,i,o,s
,a,c,u;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,o=eo(e),s=void 0!==t,a=null===t,c=t==t,u=eo(t),
!a&&!u&&!o&&t<e||o&&s&&c&&!a&&!u||n&&s&&c||!r&&c||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!c
)return-1}return 0},ro=je,no=Qo,io=E,oo=r,so=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},
ao=Vs,co=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,c=r.length;++i<a;)if(n=to(o[i],s[i])
)return c<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},uo=e,lo=o,ho=function(e,t,r){switch(r.length){case 0:
return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}
return e.apply(t,r)},po=Math.max,wo=function(e){return function(){return e}},Fs=(go=T)?function(e,t){return go(e,
"toString",{configurable:!0,enumerable:!1,value:wo(t),writable:!0})}:e,fo=Date.now,Hs=Fs,vo=yi,yo=function(e,n,r){var i;
return n=n.length?ro(n,function(t){return lo(t)?function(e){return no(e,1===t.length?t[0]:t)}:t}):[uo],i=-1,n=ro(n,ao(io
)),e=oo(e,function(t,e,r){return{criteria:ro(n,function(e){return e(t)}),index:++i,value:t}}),so(e,function(e,t){
return co(e,t,r)})},mo=Ds,function(){var e=fo(),t=16-e+ +Gs;if(Gs=e,0<t){if(800<=++Js)return}else Js=0;Hs.apply(void 0,
arguments)}((Ys=Bs=function(e,t){var r;return null==e?[]:(1<(r=t.length)&&mo(e,t[0],t[1])?t=[]:2<r&&mo(t[0],t[1],t[2]
)&&(t=[t[0]]),yo(e,vo(t,1),[]))},Zs=void(Gs=Js=0),ea=e,Zs=po(void 0===Zs?Ys.length-1:Zs,0),function(){for(var e,
t=arguments,r=-1,n=po(t.length-Zs,0),i=Array(n);++r<n;)i[r]=t[Zs+r];for(r=-1,e=Array(Zs+1);++r<Zs;)e[r]=t[r];return e[Zs
]=ea(i),ho(Ys,this,e)}),Bs+""),_o=na,Ro=function(e,n){var i=[];return bo(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Eo=E
,Po=function(e,t){return(To(e)?_o:Ro)(e,Eo(t))},qo=e,So=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[
r],r,e););return e},xo=bo=Ws,Oo=function(e){return"function"==typeof e?e:qo},No=To=o,h=function(e,t){return(No(e)?So:xo
)(e,Oo(t))},Ao=Qi,ko=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Ao(e,t,r)},Co=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),jo=function(e){return Co.test(e)}
,(x=Gt.exports)&&x.isRegExp,Lo=function(e){return e.split("")},
c="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",d="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Mo=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+d+c,"g"),zo=Lo,Io=jo,Uo=function(e){return e.match(Mo)||[]},
Fo=Vo=i,Do=S,$o=n,Bo=ko,Ho=function(e,t){for(var r=e.length;r--&&-1<Vo(t,e[r],0););return r},Jo=function(e,t){for(
var r=-1,n=e.length;++r<n&&-1<Fo(t,e[r],0););return r},Go=function(e){return(Io(e)?Uo:zo)(e)},Wo=ta,Ko=function(e,t,r){
var n;return(e=Wo(e))&&(r||void 0===t)?$o(e):e&&(t=Do(t))?(r=Go(e),t=Go(t),n=Jo(r,t),t=Ho(r,t)+1,Bo(r,n,t).join("")):e},
Qo=Object.prototype,Xo=Qo.hasOwnProperty,Yo=function(e,t){return null!=e&&Xo.call(e,t)},Zo=R,v=function(e,t){
return null!=e&&Zo(e,t,Yo)},rs=function(e){return!0===e||!1===e||ts(e)&&"[object Boolean]"==es(e)},ns=function(e){
return null===e},os=o,as=function(e){return"string"==typeof e||!os(e)&&ss(e)&&"[object String]"==is(e)},cs=is=es=$s,
us=ss=ts=q,ls=function(e){return"number"==typeof e||us(e)&&"[object Number]"==cs(e)},ds=function(e){
return"number"==typeof e&&e==hs(e)},ws=function(e){return ds(e)&&-ps<=e&&e<=ps},ps=9007199254740991,vs=function(e){
return e?gs(fs(e),-9007199254740991,9007199254740991):0===e?e:0},Rs=function(e,t,r){return e=_s(e),r=null==r?0:ys(bs(r),
0,e.length),t=ms(t),e.slice(r,r+t.length)==t},Es=ys=gs=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),
void 0!==t&&(e=t<=e?e:t)),e},Ts=ms=S,Ps=bs=fs=hs=zs,qs=_s=ta,Ss=function(e,t,r){var n;return e=qs(e),t=Ts(t),n=e.length,
n=r=void 0===r?n:Es(Ps(r),0,n),0<=(r-=t.length)&&e.slice(r,n)==t},xs=je,Os=function(t,e){return xs(e,function(e){
return t[e]})},Ns=P,As=function(e){return null==e?[]:Os(e,Ns(e))},ks=U(function(e){return e&&e.length?e[0]:void 0});
class va{constructor(e,t){s(this,"_logger",void 0),s(this,"name",void 0),s(this,"_level",void 0),this.name=e,
this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level)?e:this._logger.getLogLevel()}
setLogLevel(e){return this._level=e,this}debug(...e){(void 0===this._level||this._level<=p.DEBUG)&&this._logger.debug(
`[${this.name}]`,...e)}info(...e){(void 0===this._level||this._level<=p.INFO)&&this._logger.info(`[${this.name}]`,...e)}
warn(...e){(void 0===this._level||this._level<=p.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=p.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class O{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case p.DEBUG:return"DEBUG";case p.INFO:return"INFO";case p.WARN:return"WARN";case p.ERROR:return"ERROR";
case p.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=p.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=p.INFO&&this._logger.info(...e)}static warn(...e){this._level<=p.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=p.ERROR&&this._logger.error(...e)}static createLogger(e){return new va(e,O)}}s(O,
"Level",p={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),s(O,"_level",p.DEBUG),
s(O,"_logger",console);const ya=O.createLogger("ProcessUtils");class ma{static getArguments(){return process.argv.slice(
2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)t.length&&(e[t]="");else{const r=t.split("=");t=r.shift(),(t=Ko(t)
).length&&(e[t]=r.join("=").trim())}return e}static parseEnvFile(e){const t=aa.default.readFileSync(e,{encoding:"utf-8"}
),r=t.split("\n");return r.reduce(ma.parseEnvFileLine,{})}static initEnvFromFile(e){e=ma.parseEnvFile(e),process.env=g(
g({},e),process.env)}static initEnvFromDefaultFiles(){var e=ca.default.join(process.cwd(),".env");aa.default.existsSync(
e)&&ma.initEnvFromFile(e)}static setupDestroyHandler(r,n){let i=!1;var e=t=>e=>{ma._printErrors(t,e);try{i||(i=!0,r())
}catch(e){n(e)}};process.on("exit",e("exit")),process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),
process.on("SIGUSR1",e("SIGUSR1")),process.on("SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e(
"uncaughtException"))}static _printErrors(e,t){try{t?ya.error(`Closing process because "${e}" event: `,t
):"exit"===e?ya.debug(`Closing process because "${e}" event`):ya.info(`Closing process because "${e}" event`)}catch(e){
console.error("Error while printing errors: ",e)}}}Vs=null!=(r=re("%{BUILD_BACKEND_URL}"))?r:"http://0.0.0.0:3000",
Fs=null!=(T=re(""))?T:"nor-backend",Ds=null!=(yi=re(""))?yi:"","".startsWith("%{")&&"".endsWith("}"),Ws=null!=(
e=function(e){if(e){if(function(){switch(e){case p.DEBUG:case p.INFO:case p.WARN:case p.ERROR:case p.NONE:return 1;
default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return p.DEBUG;case"INFO":return p.INFO
case"WARN":case"WARNING":return p.WARN;case"ERR":case"ERROR":return p.ERROR;case"FALSE":case"OFF":case"QUIET":
case"SILENT":case"NONE":return p.NONE;default:return}}}(null!=(E=ee(null==(Bs=process)||null==(na=Bs.env
)?void 0:na.BACKEND_LOG_LEVEL))?E:ee(Ds)))?e:p.INFO;const ba=null!=(x=ee(null==(Qi=process)||null==(Gt=Qi.env
)?void 0:Gt.BACKEND_SCRIPT_NAME))?x:Fs,_a=null!=(Lo=ee(null==(d=process)||null==(c=d.env)?void 0:c.BACKEND_URL))?Lo:Vs,
Ra=(w={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},
"WINDOW"===($s=null!=(R=null!=(n=null==(jo=process)||null==(i=jo.env)?void 0:i.NOR_REQUEST_CLIENT_MODE)?n:null==(
ko=process)||null==(Qo=ko.env)?void 0:Qo.REACT_APP_REQUEST_CLIENT_MODE)?R:"")||!(
"undefined"==typeof window||!window.fetch)),Ea="NODE"===$s||!Ra;class Ta{static async getRequestDataAsBuffer(n){
return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(
Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){
const r=await Ta.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await Ta.getRequestDataAsString(e)))return la.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await Ta.getRequestDataAsString(e)))return JSON.parse(e)}}(q=y={Continue:100,100:"Continue",SwitchingProtocols:101,
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
]="InternalServerError",q[q.NotImplemented=501]="NotImplemented",q[q.BadGateway=502]="BadGateway",q[
q.ServiceUnavailable=503]="ServiceUnavailable",q[q.GatewayTimeout=504]="GatewayTimeout",q[q.HttpVersionNotSupported=505
]="HttpVersionNotSupported",q[q.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",q[q.InsufficientStorage=507
]="InsufficientStorage",q[q.LoopDetected=508]="LoopDetected",q[q.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",q[
q.NotExtended=510]="NotExtended",q[q.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Cs={
ERROR:"error"};class Pa extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(t||ae(e)),s(this,"status"
,void 0),s(this,"method",void 0),s(this,"url",void 0),s(this,"body",void 0),s(this,"__proto__",void 0),
t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,
this.url=n,this.body=i}valueOf(){return this.status}toString(){return this.status+" "+this.message}toJSON(){return{
type:Cs.ERROR,status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method
}getUrl(){return this.url}getBody(){return this.body}}m={TEXT:"text/plain",CALENDAR:"text/calendar",
JSON:"application/json"};const qa=Ea?require("fs").promises:void 0,Sa=O.createLogger("NodeRequestClient");class xa{
static setLogLevel(e){Sa.setLogLevel(e)}constructor(e,t){s(this,"_http",void 0),s(this,"_https",void 0),this._http=e,
this._https=t}async textRequest(e,t,r,n){switch(e){case w.GET:return this._getText(t,r,n);case w.POST:
return this._postText(t,r,n);case w.PATCH:return this._patchText(t,r,n);case w.PUT:return this._putText(t,r,n);
case w.DELETE:return this._deleteText(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _getText(e,t,r){const n={method:"GET",headers:{"Content-Type":m.TEXT}};return t&&(n.headers=g(g({},n.headers),t))
,this._textRequest(w.GET,e,n,r).then(xa._successTextResponse)}async _putText(e,t,r){const n={method:"PUT",headers:{
"Content-Type":m.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(w.PUT,e,n,r).then(
xa._successTextResponse)}async _postText(e,t,r){const n={method:"POST",headers:{"Content-Type":m.TEXT}};return t&&(
n.headers=g(g({},n.headers),t)),this._textRequest(w.POST,e,n,r).then(xa._successTextResponse)}async _patchText(e,t,r){
const n={method:"PATCH",headers:{"Content-Type":m.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(
w.PATCH,e,n,r).then(xa._successTextResponse)}async _deleteText(e,t,r){const n={method:"DELETE",headers:{
"Content-Type":m.TEXT}};return t&&(n.headers=g(g({},n.headers),t)),this._textRequest(w.DELETE,e,n,r).then(
xa._successTextResponse)}static async _successTextResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw Sa.error(`Unsuccessful response with status ${t}: `,e),new Pa(t,`Error ${t} for ${ne(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}async _textRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Ta.getRequestDataAsString(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async jsonRequest(e,t,r,n){switch(e){case w.GET:return this._getJson(t,r,n);case w.POST:
return this._postJson(t,r,n);case w.PATCH:return this._patchJson(t,r,n);case w.PUT:return this._putJson(t,r,n);
case w.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _checkSocketFile(t){try{const e=await qa.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))Sa.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t)throw Sa.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e;Sa.debug("_checkSocketFile: ENOENT: ",e)}}}async _findSocketFile(e){
var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=ca.default.dirname(e))&&t!==e?this._findSocketFile(
t):void 0}async _httpRequest(o,s,e){var t;const a=e?JSON.stringify(e)+"\n":void 0,c=new ua.default.URL(o);let u;
const l=null!=(e=null===c||void 0===c?void 0:c.protocol)?e:"";if("unix:"===l||"socket:"===l){
const r=null!==c&&void 0!==c&&c.pathname?null===c||void 0===c?void 0:c.pathname:"/";if("/"===r)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(r)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<r.length?r.substr(e.length):"")+(
"?"!==c.search?c.search:""),s=g(g({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===l?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=g(g({},s),{},{hostname:c.hostname,
port:null!=(i=null!==c&&void 0!==c&&c.port?parseInt(c.port,10):void 0)?i:"https:"===l?443:80,path:c.pathname+c.search}))
,(e=u.request(s,e=>{n?Sa.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(Sa.warn("Warning! Request had already ended when the response was received."),Sa.debug(
"Error from event: ",e)):(Sa.debug("Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(
Sa.warn("Warning! Request had already ended when the response was received."),Sa.debug("Exception: ",e)):(Sa.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _jsonRequest(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Ta.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!=(e=null==r?void 0:r.statusCode)?e:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":m.JSON}};return t&&(
n.headers=g(g({},n.headers),t)),this._jsonRequest(w.GET,e,n,r).then(xa._successJsonResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":m.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(
w.PUT,e,n,r).then(xa._successJsonResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{"Content-Type":m.JSON}
};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(w.POST,e,n,r).then(xa._successJsonResponse)}
async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":m.JSON}};return t&&(n.headers=g(g({},n.headers),
t)),this._jsonRequest(w.PATCH,e,n,r).then(xa._successJsonResponse)}async _deleteJson(e,t,r){const n={method:"DELETE",
headers:{"Content-Type":m.JSON}};return t&&(n.headers=g(g({},n.headers),t)),this._jsonRequest(w.DELETE,e,n,r).then(
xa._successJsonResponse)}static async _successJsonResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw Sa.error(`Unsuccessful response with status ${t}: `,e),new Pa(t,`Error ${t} for ${ne(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}}class Oa{constructor(e){s(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e
){case w.GET:return this._getJson(t,r,n);case w.POST:return this._postJson(t,r,n);case w.PUT:return this._putJson(t,r,n)
case w.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)
}}textRequest(e,t,r,n){switch(e){case w.GET:return this._getText(t,r,n);case w.POST:return this._postText(t,r,n);
case w.PUT:return this._putText(t,r,n);case w.DELETE:return this._deleteText(t,r,n);default:throw new TypeError(
"[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":m.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Oa._successJsonResponse(e,w.GET))}_putJson(e,t,r){const n={
method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":m.JSON},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Oa._successJsonResponse(e,w.PUT))
}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":m.JSON},
credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Oa._successJsonResponse(e,w.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":m.JSON},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Oa._successJsonResponse(e,w.DELETE))}static _successJsonResponse(e,t
){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${ne(t)} `+n;return e.json().then(
e=>{throw new Pa(r,i,t,n,e)})}return e.json()}_getText(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":m.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),r&&(n.body=r),
this._fetch(e,n).then(e=>Oa._successTextResponse(e,w.GET))}_putText(e,t,r){const n={method:"PUT",mode:"cors",
cache:"no-cache",headers:{"Content-Type":m.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},n.headers),t)),
r&&(n.body=r),this._fetch(e,n).then(e=>Oa._successTextResponse(e,w.PUT))}_postText(e,t,r){const n={method:"POST",
mode:"cors",cache:"no-cache",headers:{"Content-Type":m.TEXT},credentials:"same-origin"};return t&&(n.headers=g(g({},
n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Oa._successTextResponse(e,w.POST))}_deleteText(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":m.TEXT},credentials:"same-origin"};return t&&(
n.headers=g(g({},n.headers),t)),r&&(n.body=r),this._fetch(e,n).then(e=>Oa._successTextResponse(e,w.DELETE))}
static _successTextResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${ne(t)} `+n;return e.text().then(e=>{throw new Pa(r,i,t,n,e)})}return e.text()}}
const Na=Ea?require("http"):void 0,Aa=Ea?require("https"):void 0,ka=O.createLogger("RequestClient");class Ca{
static setLogLevel(e){ka.setLogLevel(e),xa.setLogLevel(e)}static async textRequest(e,t,r,n){
return this._client.textRequest(e,t,r,n)}static async getText(e,t){return this._client.textRequest(w.GET,e,t)}
static async postText(e,t,r){return ka.debug(".postJson: ",e,t,r),this._client.textRequest(w.POST,e,r,t)}
static async patchText(e,t,r){return ka.debug(".patchJson: ",e,t,r),this._client.textRequest(w.PATCH,e,r,t)}
static async putText(e,t,r){return ka.debug(".putJson: ",e,t,r),this._client.textRequest(w.PUT,e,r,t)}
static async deleteText(e,t,r){return ka.debug(".deleteJson: ",e,r,t),this._client.textRequest(w.DELETE,e,t,r)}
static async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){
return this._client.jsonRequest(w.GET,e,t)}static async postJson(e,t,r){return ka.debug(".postJson: ",e,t,r),
this._client.jsonRequest(w.POST,e,r,t)}static async patchJson(e,t,r){return ka.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(w.PATCH,e,r,t)}static async putJson(e,t,r){return ka.debug(".putJson: ",e,t,r),
this._client.jsonRequest(w.PUT,e,r,t)}static async deleteJson(e,t,r){return ka.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(w.DELETE,e,t,r)}static _initClient(){if(Ra){const e=class{static hasWindow(){return!!le()}
static getWindow(){return le()}static getParent(){var e;return null==(e=le())?void 0:e.parent}}.getWindow();if(e
)return ka.debug("Detected browser environment"),new Oa(e.fetch.bind(e));throw new TypeError(
"RequestClient: Could not detect request client implementation: No window object")}if(Ea)return new xa(Na,Aa);
throw new TypeError("RequestClient: Could not detect request client implementation")}}s(Ca,"_client",Ca._initClient()),
js={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const ja=O.createLogger("HttpServerService");
class La{constructor(e=3e3,t=void 0,r=void 0){s(this,"_requestHandler",void 0),s(this,"_hostname",void 0),s(this,"_port"
,void 0),s(this,"_closeCallback",void 0),s(this,"_listenCallback",void 0),s(this,"_server",void 0),s(this,"_handler",
void 0),ja.debug("new: ",t,e,r),this._requestHandler=this._onRequest.bind(this),
this._listenCallback=this._onListen.bind(this),this._closeCallback=this._onClose.bind(this),this._hostname=t,
this._port=e,this._handler=r,this._server=ia.createServer(this._requestHandler)}start(){ja.debug(
"Going to start server at "+this._getConnectionString()),void 0===this._hostname?this._server.listen(this._port,
this._listenCallback):this._server.listen(this._port,this._hostname,this._listenCallback)}stop(){ja.debug(
"Going to stop server at "+this._getConnectionString()),this._server.close(this._closeCallback)}setHandler(e){ja.debug(
`Setting handler at ${this._getConnectionString()} as "${e}", was "${this._handler}"`),this._handler=e}
_getConnectionString(){return void 0===this._hostname?"http://"+this._port:`http://${this._hostname}:`+this._port}
async _callRequestHandler(t,e){if(void 0!==this._handler){try{await this._handler(t,e)}catch(e){ja.error(
`"${t.method} ${t.url}": Response handler had an error: `,e)}e.writableEnded||(ja.warn(
`"${t.method} ${t.url}": Warning! Request handler did not close the response.`),e.end())}else ja.error(
`"${t.method} ${t.url}": No handler configured"`),e.end("Error")}_onRequest(t,e){this._callRequestHandler(t,e).catch(
e=>{ja.error(`${t.method} ${t.url}: Error: `,e)})}_onListen(){ja.info("Started at "+this._getConnectionString())}
_onClose(){ja.debug("Closed at "+this._getConnectionString())}}class N{static isObject(e){return Z(e)}
static hasPropertyMethods(e){return v(e,"methods")}static hasPropertyControllerProperties(e){return v(e,
"controllerProperties")}static hasPropertyPaths(e){return v(e,"paths")}static hasPropertyParams(e){return v(e,"params")}
static hasPropertyMappings(e){return v(e,"mappings")}static hasPropertyController(e){return v(e,"controller")}
static hasPropertyQueryParam(e){return v(e,"queryParam")}static hasPropertyType(e){return v(e,"type")}
static hasProperty__requestMappings(e){return v(e,"__requestMappings")}static hasPropertyStatus(e){return v(e,"status")}
static hasPropertyMessage(e){return v(e,"message")}static createOrFunction(...e){return t=>Q(e,e=>We(e)?e(t):t===e)}
static everyPropertyIs(t,e){return a(f(te(t),e=>t[e]),e)}static explainEveryPropertyIs(t,r,n){return Po(f(f(te(t),e=>t[e
]),(e,t)=>r(e)?"":`#${t}: `+n(e)),e=>!!e)}}b={JSON:0,0:"JSON",STRING:1,1:"STRING",INTEGER:2,2:"INTEGER",NUMBER:3,
3:"NUMBER"},(S=_=_||{})[S.REQUEST_BODY=0]="REQUEST_BODY",S[S.QUERY_PARAM=1]="QUERY_PARAM",S[S.REQUEST_HEADER=2
]="REQUEST_HEADER",S[S.REQUEST_HEADER_MAP=3]="REQUEST_HEADER_MAP",S[S.PATH_VARIABLE=4]="PATH_VARIABLE",S[
S.PATH_VARIABLE_MAP=5]="PATH_VARIABLE_MAP",S[S.MODEL_ATTRIBUTE=6]="MODEL_ATTRIBUTE";const Ma=O.createLogger(
"RequestController"),za="__requestMappings",Ia=O.createLogger("Headers");class Ua{static setLogLevel(e){Ia.setLogLevel(e
)}constructor(e){s(this,"_value",void 0),s(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=e}_initializeValue(){var t=this._value,r=this._uninitializedValue;try{r&&(
this._uninitializedValue=void 0,this.addAll(r))}catch(e){throw this._value=t,this._uninitializedValue=r,e}}clear(){
this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),Ia.debug(
"add header: ",e,t),e=e.toLowerCase();var r=this._value&&v(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==r?Ee(r)?this._value=g(g({},this._value),{},{[e]:Ei([],r,[t])}
):this._value=g(g({},this._value),{},{[e]:[r,t]}):this._value=g(g({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),v(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===te(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=te(this._value),
h(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),v(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),Ee(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),u(e)){const r=e;if(!G(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");h(t,e=>{this.add(r,e)})}else{const n=e;h(te(n)
,t=>{var e=n[t];Ee(e)?h(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const r=g({},this._value);
return r&&v(r,e)&&delete r[e],this._value=r,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=g(g({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),h(te(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const r=this._value;if(!r||this.isEmpty())return"Headers()";var e=te(r
);const t=f(e,e=>{const t=r[e];return t?G(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new Ua(this._value?g({},this._value):void 0)}}class Va{
static toString(...e){return f(e,e=>ns(e)?"null":""+e).join("")}static processVariables(n,i,o,s,a=void 0){return Ee(n
)?f(n,e=>Va.processVariables(e,i,o,s,a)):Re(n)?Ki(te(n),(e,t)=>{var r=n[t];return e[""+Va.processVariables(t,i,o,s,a)
]=Va.processVariables(r,i,o,s,a),e},{}):u(n)?Va.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(
e.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||a(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,c,u;if(0===t.length)return"";let l;if(l=We(r)?r:e=>pn(r,e,o),Rs(t,n)&&Ss(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=Ko(e),Va.isValidKeyword(e)))return l(e)}let h="",d=0;for(
;0<=d&&d<t.length;)if(e=d,(d=t.indexOf(n,e))<0)h+=t.substr(e),d=t.length;else{if(a=(s=d)+n.length,(u=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);c=u+i.length,u=Ko(
t.substr(a,u-a)),d=(Va.isValidKeyword(u)?(a=l(u),h+=""+t.substr(e,s-e)+a):h+=""+t.substr(e,c-e),c)}return h}
static formatNumber(e,t=" ",r="."){return e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,t).replace(/\./,r)}
static endsWithCharacters(e,t){var r=e.length;return!(1<=r)||t.includes(e[r-1])}static startsWithCharacters(e,t){
return!(1<=e.length)||t.includes(e[0])}static hasOnlyCharacters(e,t){return 0===e.length||a(e,e=>t.includes(e))}
static validateStringCharacters(e,t=void 0,r=t,n=r,i=0,o=void 0){var s=null!=(s=null==e?void 0:e.length)?s:0;return(
void 0===t||Va.startsWithCharacters(e,t))&&(void 0===r||Va.hasOnlyCharacters(e.substring(1,s-1),r))&&(
void 0===n||Va.endsWithCharacters(e,n))&&i<=s&&(void 0===o||s<=o)}}class A{constructor(e,t,r){s(this,"_status",void 0),
s(this,"_headers",void 0),s(this,"_body",void 0);let n,i,o;if(!Pe(e)||Pe(t)||Pe(r))if(Pe(t)&&!Pe(r)){if(void 0!==r
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");Te(e)?i=e:o=e,n=t}else{if(!Pe(r)
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(!Te(t))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");o=e,i=t,n=r}else{if(n=e,void 0!==t)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(void 0!==r)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=n,this._headers=null!=(e=i)?e:new Ua,this._body=o}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(e){return this._status=e,this}
headers(e){return Te(e)?this._headers=e:this._headers=new Ua(e),this}body(e){return this._body=e,this}getHeaders(){
return this._headers}allow(...e){e=f(e,oe);const t=f(e,e=>ne(e).toUpperCase());return this._headers.set("Allow",t.join(
", ")),this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}toString(){var e,t,r=ae(this._status);const n=this._headers;return e=n.isEmpty()?"":Va.toString(n),
void 0===(t=this._body)?e?`ResponseEntity(${r}, ${e})`:`ResponseEntity(${r})`:(t=_e(t)?JSON.stringify(t,null,2
):Va.toString(t),e?`ResponseEntity(${r}, ${e}, Body(${t}))`:`ResponseEntity(${r}, Body(${t}))`)}static accepted(){
return new A(y.Accepted)}static badRequest(){return new A(y.BadRequest)}static created(e){return new A(new Ua({
Location:e}),y.Created)}static noContent(){return new A(y.NoContent)}static notFound(){return new A(y.NotFound)}
static notImplemented(){return new A(y.NotImplemented)}static internalServerError(){return new A(y.InternalServerError)}
static methodNotAllowed(){return new A(y.MethodNotAllowed)}static unprocessableEntity(){return new A(
y.UnprocessableEntity)}static ok(e){return e?new A(e,y.OK):new A(y.OK)}}const Fa=O.createLogger("ParamRoutes");class Da{
constructor(r){s(this,"_routes",void 0);var e=te(r),e=f(e,e=>{var t=r[e];return Da.createCallbackFunction(e,t)});
this._routes=e}hasRoute(t){var e=Q(this._routes,e=>{var[e]=e(t);return void 0!==e&&1<=(null==e?void 0:e.length)});
return e?Fa.debug(`hasRoute: Looking up "${t}": Found`):Fa.debug(`hasRoute: Looking up "${t}": Not Found`),e}getRoute(r
){let n=void 0,i=void 0;return $i(this._routes,e=>{var[e,t]=e(r);return void 0!==e&&(n=e,i=t,!0)}),void 0!==n?[n,i]:[
void 0,void 0]}static createCallbackFunction(e,t){const i=(e=""===e?"/":e).split("/"),o=i.length;if(0===o
)throw new Error("Path format had no items. This should not happen.");const s=f(i,(e,t)=>3<=e.length&&"{"===e[0
]&&"}"===e[e.length-1]?Ko(e.substr(1,e.length-2)):(i[t]=e.toLowerCase(),null));if(Q(s,u))return e=>{const r=e.split("/")
if(0===(e=r.length))return[void 0,void 0];if(o!==e)return[void 0,void 0];let n={};return a(s,(e,t)=>u(e)?(n[e]=r[t],!0
):i[t]===r[t].toLowerCase())?[t,n]:[void 0,void 0]};{const r=e.toLowerCase();return e=>e.toLowerCase()!==r?[void 0,
void 0]:[t,void 0]}}}const $a=O.createLogger("StaticRoutes");class Ba{static setLogLevel(e){$a.setLogLevel(e)}
constructor(r){s(this,"_routes",void 0);var e=te(r),e=f(e,e=>{var t=r[e];return[e.toLowerCase(),t]});
this._routes=new Map(e)}hasRoute(e){return $a.debug(`Looking up "${e}" from `,this._routes),this._routes.has(
e.toLowerCase())}getRoute(e){return void 0!==(e=this._routes.get(e.toLowerCase()))?[e,void 0]:[void 0,void 0]}}class Ha{
static createRoutes(e){return new(Ha.routesHasParameter(e)?Da:Ba)(e)}static pathHasParameter(e){return e.split("/"
).some(e=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1])}static routesHasParameter(e){return Q(te(e),Ha.pathHasParameter)
}}const k=O.createLogger("RequestRouter");class Ja{static setLogLevel(e){k.setLogLevel(e)}constructor(){s(this,
"_controllers",void 0),s(this,"_routes",void 0),s(this,"_modelAttributeNames",void 0),s(this,"_requestMappings",void 0),
s(this,"_initialized",void 0),this._controllers=[],this._routes=void 0,this._requestMappings=void 0,
this._modelAttributeNames=void 0,this._initialized=!1}attachController(e){this._controllers.push(e),this._routes=void 0}
_initializeRequestMappings(){k.debug("Initializing request mappings."),this._requestMappings||(
this._requestMappings=this._getRequestMappings())}_initializeRouter(){this._initialized||(this._initialized=!0,k.debug(
"Initializing..."),this._initializeRequestMappings(),this._initializeRoutes(),
this._initializeRequiredModelAttributeNames())}_initializeRoutes(){var e;k.debug("Initializing routes."),null!=(
e=this._requestMappings)&&e.length?this._routes=Ha.createRoutes(Ja._parseMappingObject(this._requestMappings)
):this._routes=Ha.createRoutes({})}_initializeRequiredModelAttributeNames(){var e;k.debug(
"Initializing model attributes.");let n=[];null!=(e=this._requestMappings)&&e.length&&(n=Ki(this._requestMappings,(e,o
)=>{var t=o.controller,r=Ki(te(o.controllerProperties),(e,r)=>{k.debug(
"_initializeRequiredModelAttributeNames: propertyKey: ",r);var t=o.controllerProperties[r],n=t.modelAttributes;k.debug(
"_initializeRequiredModelAttributeNames: propertyAttributeNames: ",n);const i=t.params;return h(n,t=>{k.debug(
"_initializeRequiredModelAttributeNames: attributeName: ",t),void 0===$i(e,e=>e[0]===t)&&e.push([t,r,i])}),e},[]);
return k.debug("controllerUniqueAttributeNames: ",r),n.push([t,r]),e},n)),this._modelAttributeNames=new Map(n)}
async handleRequest(t,r=void 0,e=void 0,c){try{var n=oe(t),{pathName:i,queryParams:o}=Ja._parseRequestPath(r),s=(
k.debug(`handleRequest: method="${n}", pathName="${i}", queryParams=`,o),i);const u=o;if(void 0===u)return k.error(
"handleRequest: requestQueryParams was not initialized"),A.internalServerError().body({error:"Internal Server Error"});
if(void 0===s)return k.error("handleRequest: requestPathName was not initialized"),A.internalServerError().body({
error:"Internal Server Error"});this._initialized||this._initializeRouter();const{routes:l,bodyRequired:h,
pathVariables:d}=this._getRequestRoutesContext(n,s);if(!e&&h)return k.error(
"handleRequest: parseRequestBody was not provided and body is required"),A.internalServerError().body({
error:"Internal Server Error"});if(void 0===l)return k.debug("handleRequest: No routes defined"),A.methodNotAllowed(
).body({error:"Method Not Allowed"});if(0===l.length)return k.debug("handleRequest: No routes found"),A.notFound().body(
{error:"Not Found"});k.debug("routes: ",l);let a=void 0;const p=e&&h?await e(c):void 0,w=(k.debug(
"handleRequest: requestBody: ",p),new Map);return await Ki(l,async(e,t)=>{var r;const i=t.controller;if(r=t.propertyName
,t=t.propertyParams,await e,this._modelAttributeNames&&this._modelAttributeNames.has(i)){k.debug(
`Populating attributes for property "${r}"`);const o=Ja._getOrCreateRequestModelAttributesForController(w,i),n=f(Po(t,
e=>we(e)),e=>e.attributeName);k.debug("route attributeNames: ",n),e=this._modelAttributeNames.get(i),k.debug(
"all attributeNamePairs: ",e),e=Po(null!=e?e:[],e=>n.includes(e[0])),k.debug("attributeNamePairs: ",e),await Ki(e,async(
e,t)=>{var[t,r,n]=t,e=(await e,k.debug("attributeName: ",t),k.debug("propertyName: ",r),k.debug("propertyParams: ",n),
Ja._bindRequestActionParams(u,p,n,c,d,o)),n=await i[r](...e);o.set(t,n)},Promise.resolve())}if(
t=Ja._bindRequestActionParams(u,p,t,c,d,null!=(e=w.get(i))?e:new Map),k.debug("handleRequest: stepParams 1: ",t),v(i,r)
){k.debug(`Calling route property by name "${r}"`);const s=await i[r](...t);a=se(s)?new A(s):ue(s)?new A(s.toJSON(),
s.getStatusCode()):(e=s)&&e instanceof A?(void 0!==a&&k.warn("Warning! ResponseEntity from previous call ignored."),s
):Ee(s)?void 0===a?A.ok(s):new A(Ei(a.getBody(),s),a.getHeaders(),a.getStatusCode()):Re(s)?void 0===a?A.ok(s):new A(g(g(
{},a.getBody()),s),a.getHeaders(),a.getStatusCode()):(_e(s),void 0===a?A.ok(s):(k.warn(
"Warning! ResponseEntity from previous call ignored."),new A(s,a.getHeaders(),a.getStatusCode())))}else k.warn(
`Warning! No property by name "${r}" found in the controller`),a=A.notFound().body({error:"404 - Not Found",code:404})},
Promise.resolve()),k.debug("handleRequest: result finished: "+a),void 0===a?A.noContent():a}catch(e){return ue(e)?(
404===(r=null!=(t=null==e?void 0:e.status)?t:0)?A.notFound():(400<=r&&r<500?A.badRequest():A.internalServerError()
).status(r)).body(e.toJSON()):(k.error("Exception: ",e),A.internalServerError().body({error:"Internal Server Error",
code:500}))}}static _parseRequestPath(e){return{pathName:(e=new ra.URL("http://localhost"+(null!=e?e:""))).pathname,
queryParams:e.searchParams}}_getRequestRoutesContext(t,e){var r,n,i;return this._routes&&this._routes.hasRoute(e)?([n,r
]=this._routes.getRoute(e),(n=Po(n,e=>0<=e.methods.indexOf(t))).length?(i=Q(n,e=>!0===(
null==e?void 0:e.requestBodyRequired)),k.debug("_getRequestRoutesContext: requestBodyRequired=",i),{routes:n,
pathVariables:r,bodyRequired:i}):(k.debug(
"_getRequestRoutesContext: There were matching routes, but not for this method; Method not allowed."),{routes:void 0,
bodyRequired:!1})):(this._routes?k.debug("_getRequestRoutesContext: Routes did not match: ",e):k.debug(
"_getRequestRoutesContext: No routes defined"),{routes:[],bodyRequired:!1})}_getRequestMappings(){
return 0===this._controllers.length?[]:Po(f(this._controllers,e=>{var t=e.constructor;
return N.hasProperty__requestMappings(t)?me(e.constructor,e):me(e,e)}),e=>!!e)}static _parseMappingObject(e){function u(
e,t){v(r,e)?r[e].push(t):r[e]=[t]}const r={};return h(e,e=>{const c=e.controller,t=e.controllerProperties,r=te(t);
0<e.mappings.length?h(e.mappings,e=>{const a=e.methods;h(e.paths,s=>{h(r,n=>{const i=t[n],o=i.params;h(i.mappings,e=>{
var t=e.methods;if(Ja._matchMethods(a,t)){const r=Ja._parseCommonMethods(a,t);t=e.paths,h(t,e=>{u(Ja._joinRoutePaths(s,e
),{requestBodyRequired:null!=(e=null===i||void 0===i?void 0:i.requestBodyRequired)&&e,methods:r,controller:c,
propertyName:n,propertyParams:o})})}})})})}):h(r,r=>{const n=t[r],i=n.params;h(n.mappings,e=>{const t=e.methods;
e=e.paths,h(e,e=>{u(e,{requestBodyRequired:null!=(e=null===n||void 0===n?void 0:n.requestBodyRequired)&&e,methods:t,
controller:c,propertyName:r,propertyParams:i})})})})}),r}static _matchMethods(e,r){return 0===e.length||0==r.length||Q(e
,t=>Q(r,e=>t===e))}static _parseCommonMethods(e,t){return 0!==e.length?Po(t,t=>Q(e,e=>e===t)):t}static _joinRoutePaths(e
,t){return e=Ko(e),0===(t=Ko(Ko(t),"/")).length?e:0===e.length?t:"/"===e[e.length-1]||"/"===t[0]?e+t:e+"/"+t}
static _bindRequestActionParams(i,o,e,s,a,c){return f(e,e=>{var t,r,n;if(null!==e){switch(null==e?void 0:e.objectType){
case _.REQUEST_BODY:return o;case _.QUERY_PARAM:return t=(n=e).queryParam,!i.has(t)||(t=i.get(t),ns(t)
)?void 0:Ja._castParam(t,n.valueType);case _.REQUEST_HEADER:if(n=(t=e).headerName,s.containsKey(n))return void 0===(
r=s.getFirst(n))?void 0:Ja._castParam(r,t.valueType);if(t.isRequired)throw new Pa(400,"Bad Request: Header missing: "+n)
return null!=(r=null==t?void 0:t.defaultValue)?r:void 0;case _.REQUEST_HEADER_MAP:
return n=null==e?void 0:e.defaultValues,s.isEmpty()?n?new Ua(n):new Ua:n?new Ua(g(g({},n),s.valueOf())):s.clone();
case _.PATH_VARIABLE:if(r=(t=e).variableName,void 0!==(n=a&&v(a,r)?a[r]:void 0)&&""!==n
)return t.decodeValue?decodeURIComponent(n):n;if(t.isRequired)throw new Pa(404,"Not Found");return null!=(
r=t.defaultValue)?r:void 0;case _.MODEL_ATTRIBUTE:return n=e.attributeName,c.has(n)?c.get(n):void 0}throw new TypeError(
"Unsupported item type: "+e)}})}static _castParam(e,t){switch(t){case b.JSON:return JSON.parse(e);case b.STRING:return e
case b.INTEGER:return parseInt(e,10);case b.NUMBER:return parseFloat(e)}throw new TypeError("Unsupported type: "+t)}
static _getOrCreateRequestModelAttributesForController(e,t){let r=e.get(t);return null==r&&(r=new Map,e.set(t,r)),r}}
class Ga{getName(){return this._name}constructor(e){s(this,"_name",void 0),s(this,"_callbacks",void 0),this._name=e,
this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return v(this._callbacks,e)}
triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],h(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Po(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}}const Wa=O.createLogger("RequestServer");Ls={CONTROLLER_ATTACHED:"RequestServer:controllerAttached",
STARTED:"RequestServer:started",STOPPED:"RequestServer:stopped"};class Ka{static setLogLevel(e){Wa.setLogLevel(e)}on(e,t
){return this._observer.listenEvent(e,t)}constructor(e="http://localhost:3000"){s(this,"_server",void 0),s(this,
"_router",void 0),s(this,"_handleRequestCallback",void 0),s(this,"_observer",void 0),this._observer=new Ga(
"RequestServer"),this._server=Ka.createServerService(e),this._router=new Ja,
this._handleRequestCallback=this._handleRequest.bind(this),this._server.setHandler(this._handleRequestCallback)}destroy(
){this._observer.destroy()}attachController(e){if(!ye(e))throw new TypeError(
"RequestServer: The provided controller was not RequestController");this._router.attachController(e),
this._observer.hasCallbacks(Ls.CONTROLLER_ATTACHED)&&this._observer.triggerEvent(Ls.CONTROLLER_ATTACHED)}start(){
Wa.debug("Starting server"),this._server.start(),this._observer.hasCallbacks(Ls.STARTED)&&this._observer.triggerEvent(
Ls.STARTED)}stop(){Wa.debug("Stopping server"),this._server.stop(),this._observer.hasCallbacks(Ls.STOPPED
)&&this._observer.triggerEvent(Ls.STOPPED)}async _handleRequest(t,r){var e,n,i=t.method,o=t.url;try{e=oe(i),
n=await this._router.handleRequest(e,o,e=>Ka._requestBodyParser(t,e),this._parseRequestHeaders(t.headers)),Wa.debug(
`"${i} ${o}": Processing responseEntity`),this._handleResponse(n,r)}catch(e){Wa.debug(
`"${i} ${o}": Error, passing it on: `,e),this._handleErrorResponse(e,r)}}static async _requestBodyParser(e,t){
return"application/x-www-form-urlencoded"!==(null!=(t=null==(t=t.getFirst("content-type"))?void 0:t.toLowerCase()
)?t:"application/json")?Ta.getRequestDataAsJson(e):Ta.getRequestDataAsFormUrlEncoded(e)}_handleResponse(e,r){
var t=e.getStatusCode();r.statusCode=t,r.statusMessage=ae(t);const n=e.getHeaders();n.isEmpty()||n.keySet().forEach(e=>{
var t=null!=(t=n.getValue(e))?t:"";Wa.debug(`_handleResponse: Setting response header as "${e}": "${t}"`),G(t
)?r.setHeader(e,[...t]):r.setHeader(e,t)}),e.hasBody()?u(e=e.getBody())?(Wa.debug("_handleResponse: Ending as text ",t,e
),r.end(e)):(Wa.debug("_handleResponse: Ending as json ",t,e),r.end(JSON.stringify(e,null,2))):(Wa.debug(
"_handleResponse: Ending without body ",t),r.end())}_handleErrorResponse(e,t){var r=se(e)?new A(e):ue(e)?new A(e,
e.getStatusCode()):(Wa.error("_handleErrorResponse_ Exception: ",e),"production"===(null==(r=process)||null==(r=r.env
)?void 0:r.NODE_ENV)?A.internalServerError():new A(ce(y.InternalServerError,"Internal Server Error: "+e),
y.InternalServerError));this._handleResponse(r,t)}_parseRequestHeaders(e){return new Ua(e)}static createServerService(e
){var t;if("http:"===(e=new ua.default.URL(e)).protocol)return t=e.port?parseInt(e.port,10):80,new La(t,e.hostname);
throw new TypeError(`RequestServer: Protocol "${e.protocol}" not yet supported`)}}s(Ka,"Event",Ls);
const Qa=O.createLogger("RequestControllerUtils");class C{static setLogLevel(e){Qa.setLogLevel(e)}
static parseRequestMappings(e){return{methods:Po(e,ie),paths:Po(e,u)}}static attachControllerMapping(e,t){
var t=C.parseRequestMappings(t),r=me(e,e);be(e,void 0===r?{mappings:[t],controllerProperties:{}}:g(g({},r),{},{
mappings:Ei([],r.mappings,[t])}))}static attachControllerMethodMapping(e,t,r){var n=me(e,e),t=C.parseRequestMappings(t);
void 0===n?be(e,{mappings:[],controllerProperties:{[r]:{mappings:[t],params:[],modelAttributes:[]}}}):v(
n.controllerProperties,r)?be(e,g(g({},n),{},{controllerProperties:g(g({},n.controllerProperties),{},{[r]:g(g({},
n.controllerProperties[r]),{},{mappings:Ei([t],n.controllerProperties[r].mappings)})})})):be(e,g(g({},n),{},{
controllerProperties:g(g({},n.controllerProperties),{},{[r]:{mappings:[t],params:[],modelAttributes:[]}})}))}
static _setControllerMethodParam(e,t,r,n,i=!1){var o,s=me(e,e);void 0===s?(o=C._initializeParams(r,n),be(e,i?{mappings:[
],controllerProperties:{[t]:{requestBodyRequired:!0,mappings:[],modelAttributes:[],params:o}}}:{mappings:[],
controllerProperties:{[t]:{mappings:[],modelAttributes:[],params:o}}})):v(s.controllerProperties,t)?(
o=C._reinitializeParams(s,t,r,n),be(e,g(g({},s),{},i?{controllerProperties:g(g({},s.controllerProperties),{},{[t]:g(g({}
,s.controllerProperties[t]),{},{requestBodyRequired:!0,params:o})})}:{controllerProperties:g(g({},s.controllerProperties
),{},{[t]:g(g({},s.controllerProperties[t]),{},{params:o})})}))):(o=C._initializeParams(r,n),be(e,g(g({},s),{},i?{
controllerProperties:g(g({},s.controllerProperties),{},{[t]:{requestBodyRequired:!0,modelAttributes:[],mappings:[],
params:o}})}:{controllerProperties:g(g({},s.controllerProperties),{},{[t]:{mappings:[],modelAttributes:[],params:o}})}))
)}static findController(e){return We(e)&&ye(e)?e:Z(e)&&We(null==e?void 0:e.constructor)&&ye(e.constructor
)?e.constructor:void 0}static setControllerMethodModelAttributeParam(e,t,r,n,i){Qa.debug(
"setControllerMethodModelAttributeParam: attributeName =",n,i),n={objectType:_.MODEL_ATTRIBUTE,attributeName:n,
valueType:i},C._setControllerMethodParam(e,t,r,n)}static attachControllerMethodModelAttributeBuilder(e,t,r,n){Qa.debug(
"attachControllerMethodModelAttributeBuilder: attributeName =",n,t);var i=me(e,e);void 0===i?be(e,{mappings:[],
controllerProperties:{[t]:{mappings:[],params:[],modelAttributes:[n]}}}):v(i.controllerProperties,t)?be(e,g(g({},i),{},{
controllerProperties:g(g({},i.controllerProperties),{},{[t]:g(g({},i.controllerProperties[t]),{},{modelAttributes:Ei([n]
,i.controllerProperties[t].modelAttributes)})})})):be(e,g(g({},i),{},{controllerProperties:g(g({},i.controllerProperties
),{},{[t]:{mappings:[],params:[],modelAttributes:[n]}})}))}static setControllerMethodQueryParam(e,t,r,n,i){n={
objectType:_.QUERY_PARAM,queryParam:n,valueType:i},C._setControllerMethodParam(e,t,r,n)}
static setControllerMethodHeader(e,t,r,n,i,o,s){n={objectType:_.REQUEST_HEADER,headerName:n,valueType:i,
isRequired:null!=o&&o,defaultValue:s},C._setControllerMethodParam(e,t,r,n)}static setControllerMethodPathVariable(e,t,r,
n,i,o,s,a){n={objectType:_.PATH_VARIABLE,variableName:n,valueType:i,isRequired:null==o||o,decodeValue:null==s||s,
defaultValue:a},C._setControllerMethodParam(e,t,r,n)}static setControllerMethodPathVariableMap(e,t,r,n){n={
objectType:_.PATH_VARIABLE_MAP,defaultValues:n},C._setControllerMethodParam(e,t,r,n)}
static setControllerMethodHeaderMap(e,t,r,n){n={objectType:_.REQUEST_HEADER_MAP,defaultValues:n},
C._setControllerMethodParam(e,t,r,n)}static setControllerMethodBodyParam(e,t,r,n){n={objectType:_.REQUEST_BODY,
valueType:n},C._setControllerMethodParam(e,t,r,n,!0)}static _initializeParams(e,t){let r=[];for(;e>=r.length;)r.push(
null);return r[e]=t,r}static _reinitializeParams(e,t,r,n){let i=Ei([],e.controllerProperties[t].params);for(
;r>=i.length;)i.push(null);return i[r]=n,i}}const j=O.createLogger("Request");class L{static setLogLevel(e){
j.setLogLevel(e),Ua.setLogLevel(e),C.setLogLevel(e)}static mapping(...i){return(e,t,r)=>{var n=C.findController(e);
void 0!==n?void 0===t?C.attachControllerMapping(n,i):C.attachControllerMethodMapping(n,i,t):j.debug(
"mapping: for other: config=",i,"target=",e,"propertyKey=",t,"descriptor=",r)}}static Mapping(...e){return L.mapping(
...e)}static param(e,t,r){if(u(e)&&void 0===r&&(void 0===t||de(t))){const o=e,s=null!=t?t:b.STRING;return(e,t,r)=>{
L._param(e,t,r,o,s)}}var n=b.STRING,i=""+r;L._param(e,t,r,i,n)}static _param(e,t,r,n,i){var o=L._getRequestController(e,
t,r);void 0!==o?C.setControllerMethodQueryParam(o,t,r,n,i):j.warn("_param: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static _getRequestController(e,t,r){if(u(t)&&l(r))return C.findController(e)}
static Param(e,t,r){return L.param(e,t,r)}static header(e,t,r){var n,s;if(j.debug("header: ",e,t,r),!u(t)||!l(r)){if(u(e
)){const a=e;if(void 0!==t&&(!(s=t)||void 0!==(null==s?void 0:s.required)&&!rs(null==s?void 0:s.required)||void 0!==(
null==s?void 0:s.defaultValue)&&!u(null==s?void 0:s.defaultValue)))throw new TypeError(
"Request.header: Argument 2 is not type of RequestHeaderOptions: "+t);let i=void 0,o=void 0;if(void 0!==(s=t))if(rs(s)
)i=s;else{if(!Z(s))throw new TypeError("Request.header: Invalid type of options");i=null!=(n=null==s?void 0:s.required
)?n:void 0,o=null!=(n=null==s?void 0:s.defaultValue)?n:void 0}return j.debug("header: init: ",a),(e,t,r)=>{if(u(t)&&l(r)
){var n=C.findController(e);if(void 0!==n)return void C.setControllerMethodHeader(n,t,r,a,b.STRING,i,o)}j.warn(
"header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(s=e)&&(
!s||void 0!==(null==s?void 0:s.defaultValues)&&!pe(null==s?void 0:s.defaultValues)))throw new TypeError(
"Request.header: Invalid type of options");const i=null==s?void 0:s.defaultValues;return(e,t,r)=>{u(t)&&l(r
)?L._setMethodHeaderMap(e,t,r,i):j.warn("header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,
"; paramIndex=",r)}}L._setMethodHeaderMap(e,t,r,void 0)}static _setMethodHeaderMap(e,t,r,n){var i=C.findController(e);
void 0!==i?C.setControllerMethodHeaderMap(i,t,r,n):j.warn("_setMethodHeaderMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static Header(e,t,r){return L.header(e,t,r)}static pathVariable(e,t,
r){var n,a;if(j.debug("pathVariable: ",e,t,r),!u(t)||!l(r)){const c=e;if(u(c)){if(void 0!==t&&!((n=t)&&W(
null==n?void 0:n.required)&&(J(a=null==n?void 0:n.defaultValue)||u(a))&&W(null==n?void 0:n.decodeValue))
)throw new TypeError("Request.pathVariable: Argument 2 is not type of RequestPathVariableOptions: "+t);let i=void 0,
o=void 0,s=!0;if(void 0!==(a=t))if(rs(a))i=a;else{if(!Z(a))throw new TypeError(
"Request.pathVariable: Invalid type of options");i=null!=(n=null==a?void 0:a.required)?n:void 0,o=null!=(
n=null==a?void 0:a.defaultValue)?n:void 0,s=null==(n=null==a?void 0:a.decodeValue)||n}return j.debug(
"pathVariable: init: ",c),(e,t,r)=>{if(u(t)&&l(r)){var n=C.findController(e);if(void 0!==n
)return void C.setControllerMethodPathVariable(n,t,r,c,b.STRING,i,s,o)}j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}if(void 0!==(a=c)&&!Z(
null==a?void 0:a.defaultValues))throw new TypeError("Request.pathVariable: Invalid type of options");const i=a&&null!=(
n=null==a?void 0:a.defaultValues)?n:void 0;return(e,t,r)=>{u(t)&&l(r)?L._setPathVariableMap(e,t,r,i):j.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)}}a=e,n=t,e=r,
L._setPathVariableMap(a,n,e,void 0)}static _setPathVariableMap(e,t,r,n){var i=C.findController(e);
void 0!==i?C.setControllerMethodPathVariableMap(i,t,r,n):j.warn("_setPathVariableMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",r)}static PathVariable(e,t,r){return L.pathVariable(e,t,r)}
static modelAttribute(i){if(j.debug("modelAttribute: ",i),u(i))return(e,t,r)=>{if(u(t)){var n=C.findController(e);if(
void 0!==n){if(l(r))return void C.setControllerMethodModelAttributeParam(n,t,r,i,b.JSON);if(void 0!==r
)return void C.attachControllerMethodModelAttributeBuilder(n,t,r,i)}}j.warn(
"modelAttribute: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",r)};throw new TypeError(
"Request.modelAttribute: Argument 1 is not string: "+i)}static body(e,t,r){var n=C.findController(e);void 0!==n&&u(t
)&&l(r)?C.setControllerMethodBodyParam(n,t,r,b.JSON):j.warn("body: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",r)}static Body(e,t,r){return L.body(e,t,r)}static optionsMapping(...e){
return L.mapping(L.Method.OPTIONS,...e)}static getMapping(...e){return L.mapping(L.Method.GET,...e)}static Get(...e){
return L.getMapping(...e)}static postMapping(...e){return L.mapping(L.Method.POST,...e)}static Post(...e){
return L.postMapping(...e)}static deleteMapping(...e){return L.mapping(L.Method.DELETE,...e)}static Delete(...e){
return L.deleteMapping(...e)}static putMapping(...e){return L.mapping(L.Method.PUT,...e)}static Put(...e){
return L.putMapping(...e)}static createBadRequestError(e){return ce(y.BadRequest,e)}static createNotFoundRequestError(e
){return ce(y.NotFound,e)}static createMethodNotAllowedRequestError(e){return ce(y.MethodNotAllowed,e)}
static createConflictRequestError(e){return ce(y.Conflict,e)}static createInternalErrorRequestError(e){return ce(
y.InternalServerError,e)}static throwBadRequestError(e){throw L.createBadRequestError(e)}
static throwNotFoundRequestError(e){throw L.createNotFoundRequestError(e)}static throwMethodNotAllowedRequestError(e){
throw L.createMethodNotAllowedRequestError(e)}static throwConflictRequestError(e){throw L.createConflictRequestError(e)}
static throwInternalErrorRequestError(e){throw L.createInternalErrorRequestError(e)}}s(L,"Method",w),s(L,"Status",y),s(L
,"ParamType",b),s(L,"Type",Cs),s(L,"Error",Pa);const Xa=O.createLogger("FiHgWhoisBackendController");s(zs=class{
static setJokerWhoisService(e){this._jokerService=e}static setWhoisService(e){this._whois=e}
static setWhoisRegistryService(e){this._whoisServers=e}static async lookup(e,t){try{var r,n;return u(t)&&t?(
r=this._whoisServers.resolveServerFromAddress(t),Xa.debug(`lookup: "${t}": server: `,r),n=await this._whois.whoisLookup(
t,{server:r}),Xa.debug(`lookup: "${t}": payload: `,n),A.ok({payload:n})):A.badRequest().body(ke(
'Lookup address (Query param "a") must be defined and a string',400))}catch(e){return Xa.error("ERROR: ",e),
A.internalServerError().body(ke("Internal Server Error",500))}}static async lookupJoker(e,t){try{if(!u(t)||!t
)return A.badRequest().body(ke('Lookup address (Query param "a") must be defined and a string',400));Xa.debug(
`lookupJoker: "${t}"`);var r=await this._jokerService.jokerLookup(t);return Xa.debug(`lookupJoker: "${t}": dto: `,r),
A.ok(r)}catch(e){return Xa.error("ERROR: ",e),A.internalServerError().body(ke("Internal Server Error",500))}}},"_whois",
void 0),s(zs,"_whoisServers",void 0),s(zs,"_jokerService",void 0);let Ya=zs;qe([Ae("/"),Se(0,Ne("Authorization",{
required:!1,defaultValue:""})),Se(1,Oe("a")),xe("design:type",Function),xe("design:paramtypes",[String,String]),xe(
"design:returntype",Promise)],Ya,"lookup",null),qe([Ae("/joker"),Se(0,Ne("Authorization",{required:!1,defaultValue:""}))
,Se(1,Oe("a")),xe("design:type",Function),xe("design:paramtypes",[String,String]),xe("design:returntype",Promise)],Ya,
"lookupJoker",null),Ya=qe([L.mapping("/")],Ya);const Za=O.createLogger("NodeWhoisService");class ec{constructor(){}
async whoisLookup(e,t){var r,n;if(Za.debug(`whoisLookup: addr = "${e}"; options = `,t),t=g({responseEncoding:"utf8",
follow:2,timeout:6e4},null!=t?t:{}),!(r=ec._parseServerOptions(t.server)))throw new Error(
"whoisLookup: no whois server is known for this kind of object: "+t.server);Za.debug("server = ",r);const i={
host:r.host,port:r.port},o=(t.bind&&(i.localAddress=t.bind),Za.debug("sockOpts = ",i),oa.connect(i)),s=(
t.timeout&&o.setTimeout(t.timeout),t.encoding&&o.setEncoding(t.encoding),await ec._whoisSocketQuery(o,
!1!==r.punycode&&!1!==t.punycode?sa.toASCII(e):e,r.query)),a=s.toString(t.responseEncoding);if(Za.debug("data = ",a),Rs(
a,"ERROR:"))throw Error(a.substring("ERROR:".length).trim());return 0<t.follow&&(n=ec._parseNextServer(a))&&n!==r.host?[
Ce(r.host,a)].concat(await this.whoisLookup(e,g(g({},t),{},{follow:t.follow-1,server:n}))):[Ce(r.host,a)]}
static _parseServerOptions(e){var t;if(e&&(e=u(e)?{host:(t=e.split(":"))[0],port:2<=t.length?void 0===(t=t[1])||!K(t)&&(
u(t)&&0===(t=Ko(t)).length||!K(t=vs(t)))?void 0:t:43}:e).host)return(e=e.port?e:g(g({},e),{},{port:43})).query||(e=g(g(
{},e),{},{query:"$addr\r\n"})),g(g({},e),{},{host:e.host.trim()})}static _parseNextServer(e){const t=e.replace(/\r/gm,""
).match(
/(ReferralServer|Registrar Whois|Whois Server|WHOIS Server|Registrar WHOIS Server):[^\S\n]*((?:r?whois|https?):\/\/)?(.*)/
);return null!=t?ec._cleanParsingErrors(t[3].trim()):void 0}static _cleanParsingErrors(e){return e.replace(/^[:\s]+/,""
).replace(/^https?[:\/]+/,"")||e}static async _whoisSocketQuery(n,i,o){if(!i)throw new TypeError(
"_whoisSocketQuery: No idn param: "+i);if(o)return new Promise((e,t)=>{try{const r=[];return n.write(o.replace("$addr",i
)),n.on("data",e=>{r.push(e)}),n.on("timeout",()=>{n.destroy(),t(new Error("_whoisSocketQuery: timeout"))}),n.on("error"
,e=>{t(e)}),n.on("close",()=>{e(Buffer.concat(r))})}catch(e){t(e)}});throw new TypeError(
"_whoisSocketQuery: No query param: "+o)}}const tc={"br.com":"whois.centralnic.net","cn.com":"whois.centralnic.net",
"de.com":"whois.centralnic.net","eu.com":"whois.centralnic.net","gb.com":"whois.centralnic.net",
"gb.net":"whois.centralnic.net","gr.com":"whois.centralnic.net","hu.com":"whois.centralnic.net",
"in.net":"whois.centralnic.net","jpn.com":"whois.centralnic.net","no.com":"whois.centralnic.net",
"qc.com":"whois.centralnic.net","ru.com":"whois.centralnic.net","sa.com":"whois.centralnic.net",
"se.com":"whois.centralnic.net","se.net":"whois.centralnic.net","uk.com":"whois.centralnic.net",
"uk.net":"whois.centralnic.net","us.com":"whois.centralnic.net","uy.com":"whois.centralnic.net",
"web.com":"whois.centralnic.net","za.com":"whois.centralnic.net",com:{host:"whois.verisign-grs.com",
query:"DOMAIN $addr\r\n"},"za.net":"whois.za.net",net:{host:"whois.verisign-grs.com",query:"DOMAIN $addr\r\n"},
"eu.org":"whois.eu.org","za.org":"whois.za.org",org:"whois.pir.org",edu:"whois.educause.edu",gov:"whois.dotgov.gov",
int:"whois.iana.org",mil:null,"e164.arpa":"whois.ripe.net","in-addr.arpa":null,arpa:"whois.iana.org",aero:"whois.aero",
asia:"whois.nic.asia",biz:"whois.biz",cat:"whois.cat",coop:"whois.nic.coop",info:"whois.afilias.net",
jobs:"jobswhois.verisign-grs.com",mobi:"whois.dotmobiregistry.net",museum:"whois.museum",name:"whois.nic.name",
post:"whois.dotpostregistry.net",pro:"whois.afilias.net",tel:"whois.nic.tel",travel:"whois.nic.travel",
xxx:"whois.nic.xxx",academy:"whois.nic.academy",accountants:"whois.nic.accountants",actor:"whois.nic.actor",
agency:"whois.nic.agency",airforce:"whois.nic.airforce",apartments:"whois.nic.apartments",app:"whois.nic.google",
archi:"whois.nic.archi",army:"whois.nic.army",associates:"whois.nic.associates",attorney:"whois.nic.attorney",
auction:"whois.nic.auction",audio:"whois.nic.audio",autos:"whois.nic.autos",axa:"whois.nic.axa",band:"whois.nic.band",
bar:"whois.nic.bar",bargains:"whois.nic.bargains",bayern:"whois.nic.bayern",beer:"whois.nic.beer",
berlin:"whois.nic.berlin",best:"whois.nic.best",bid:"whois.nic.bid",bike:"whois.nic.bike",bingo:"whois.nic.bingo",
black:"whois.nic.black",blackfriday:"whois.nic.blackfriday",blog:"whois.nic.blog",blue:"whois.nic.blue",
boutique:"whois.nic.boutique",build:"whois.nic.build",builders:"whois.nic.builders",business:"whois.nic.business",
buzz:"whois.nic.buzz",cab:"whois.nic.cab",cafe:"whois.nic.cafe",camera:"whois.nic.camera",camp:"whois.nic.camp",
capital:"whois.nic.capital",cards:"whois.nic.cards",care:"whois.nic.care",career:"whois.nic.career",
careers:"whois.nic.careers",cash:"whois.nic.cash",casino:"whois.nic.casino",catering:"whois.nic.catering",
center:"whois.nic.center",ceo:"whois.nic.ceo",charity:"whois.nic.charity",chat:"whois.nic.chat",cheap:"whois.nic.cheap",
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
rc=O.createLogger("WhoisServerRegistryService");class nc{constructor(e){s(this,"_servers",void 0),this._servers=e}
resolveServerFromAddress(e){var t;if(0<=e.indexOf("@"))throw new TypeError("lookup: email addresses not supported");
return(t=0!==oa.isIP(e)?this._servers._IP:nc._resolveServer(this._servers,e))?rc.debug(`"${e}": Found: `,t):rc.debug(
`"${e}": Not found`),t}static _resolveServer(e,t){let r,n=sa.toASCII(t);for(;r=e[n],n&&!r;)n=n.replace(/^.+?(\.|$)/,"");
return r}}Ms={FREE:"FREE",REGISTERED:"REGISTERED",UNKNOWN:"UNKNOWN"};const ic=O.createLogger("JokerComWhoisService");
class oc{static getJokerServer(){return{host:"whois.joker.com",port:4343,query:"domain:$addr\r\n",punycode:void 0}}
constructor(e,t=oc.getJokerServer()){s(this,"_whois",void 0),s(this,"_jokerServer",void 0),this._whois=e,
this._jokerServer=t}async jokerLookup(e){var t=this._jokerServer,t=(ic.debug(`lookupJoker: "${e}": server: `,t),
await this._whois.whoisLookup(e,{server:t,follow:0})),r=(ic.debug(`lookupJoker: "${e}": payload: `,t),ks(t));if(
r=null!=r&&r.data?function(e){if(Rs(e,"domain:")){const t=(e=e.substring("domain:".length)).split(/\s+/);return{
name:t.shift(),state:null!=(e=function(e){if(void 0!==e)switch(Ko(""+e).toLowerCase()){case"free":return Ms.FREE;
case"registered":return Ms.REGISTERED;case"unknown":return Ms.UNKNOWN;default:return}}(t.shift()))?e:Ms.UNKNOWN}}}(
null==r?void 0:r.data):void 0)return r;throw ic.error(`jokerLookup: Could not parse for "${e}": payload: `,t),new Error(
`lookupJoker: Could not parse whois server response for "${e}": `+t)}}ma.initEnvFromDefaultFiles(),O.setLogLevel(Ws);
const sc=O.createLogger("main");!async function(e=[]){var t,n,i,o;try{Ua.setLogLevel(p.INFO),Ja.setLogLevel(p.INFO),
Ca.setLogLevel(p.INFO),Ka.setLogLevel(p.INFO),sc.debug("Loglevel as "+O.getLogLevelString());var{scriptName:s,
parseStatus:a,exitStatus:c,errorString:u}=class{static parseArguments(e,t=[]){var r,n,i,o=null!=(r=t.shift())?r:"",
s=null!=(r=t.shift())?r:"";if(!s)return{parseStatus:js.ERROR,exitStatus:3,nodePath:o,scriptName:e,freeArgs:[],
extraArgs:[]};if(0===t.length)return{parseStatus:js.ERROR,exitStatus:3,nodePath:o,scriptName:s,freeArgs:[],extraArgs:[]}
let a=!0,c=[],u=[];do{if(i=null!=(n=t.shift())?n:"",a)switch(function(){switch(i){case"-h":case"--help":case 0:return 0;
case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:js.HELP,exitStatus:0,
nodePath:o,scriptName:s,freeArgs:c,extraArgs:u};case 1:return{parseStatus:js.VERSION,exitStatus:0,nodePath:o,
scriptName:s,freeArgs:c,extraArgs:u};case 2:a=!1;break;default:if(a){if(Rs(i,"-"))return{
errorString:"Unknown argument: "+i,parseStatus:js.ERROR,exitStatus:4,nodePath:o,scriptName:s,freeArgs:c,extraArgs:u};
c.push(i)}else u.push(i)}}while(1<=t.length);return{parseStatus:js.OK,exitStatus:0,nodePath:o,scriptName:s,freeArgs:c,
extraArgs:u}}}.parseArguments(ba,e);if(a===js.HELP||a===js.VERSION)return console.log(
`USAGE: ${s} [OPT(s)] ARG(1) [...ARG(N)]

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
`),c;if(u)return console.error("ERROR: "+u),c;t=new ec,n=new nc(tc),i=new oc(t,oc.getJokerServer()),Ya.setWhoisService(t
),Ya.setWhoisRegistryService(n),Ya.setJokerWhoisService(i);const l=new Ka(_a);l.attachController(Ya),l.start();
let r=void 0;return o=new Promise((e,t)=>{try{sc.debug("Stopping server from RequestServer stop event"),r=l.on(
Ka.Event.STOPPED,()=>{r=void 0,e()})}catch(e){t(e)}}),ma.setupDestroyHandler(()=>{sc.debug(
"Stopping server from process utils event"),l.stop(),r&&(r(),r=void 0)},e=>{sc.error(
"Error while shutting down the service: ",e)}),await o,0}catch(e){return sc.error("Fatal error: ",e),6}}(process.argv
).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
