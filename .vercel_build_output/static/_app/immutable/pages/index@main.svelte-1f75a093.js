import{a8 as Ys,a9 as Et,r as Ei,S as yt,i as wt,s as bt,L as nn,M as sn,N as rn,q as Ie,o as Ne,e as Se,c as Me,a as Re,d as ae,b as ie,g as rt,Z as qc,T as jn,n as Bl,p as zl,H as Yc,O as xt,v as kl,aa as Ci,J as on,a2 as _n,X as os,E as Ws,a1 as Zs,a3 as Ln,x as Qe,k as Be,y as $e,m as ze,z as et,a5 as Pn,C as tt,ab as Je,ac as Go,ad as Zc,F as Js,t as lt,P as Ho,h as ct,Q as Wo,K as se,U as Ks,j as dr,Y as Jc,W as pr}from"../chunks/index-1d92a957.js";import{d as Qc,w as Nt,r as $c}from"../chunks/index-cf34c359.js";import{F as eu,Y as tu,M as nu}from"../chunks/YoutubeIcon-46c81372.js";import{g as fn,D as iu,a as su}from"../chunks/supabase-34816d3c.js";import"../chunks/preload-helper-60cab3ee.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="142",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ru=0,Ko=1,ou=2,Vl=1,Gl=2,ji=3,ts=0,tn=1,ii=2,au=1,Vn=0,Li=1,jo=2,Xo=3,qo=4,lu=5,Ti=100,cu=101,uu=102,Yo=103,Zo=104,hu=200,fu=201,du=202,pu=203,Hl=204,Wl=205,mu=206,gu=207,_u=208,vu=209,xu=210,yu=0,wu=1,bu=2,to=3,Su=4,Mu=5,Tu=6,Eu=7,Kl=0,Au=1,Ru=2,pn=0,Cu=1,Lu=2,Pu=3,jl=4,Du=5,Xl=300,Di=301,Ii=302,no=303,io=304,Qs=306,so=1e3,$t=1001,ro=1002,Ct=1003,Jo=1004,Qo=1005,Ut=1006,Iu=1007,as=1008,Bt=1009,Ou=1010,Fu=1011,ql=1012,Nu=1013,$n=1014,en=1015,Rn=1016,Uu=1017,Bu=1018,Pi=1020,zu=1021,ku=1022,It=1023,Vu=1024,Gu=1025,ti=1026,Oi=1027,Xi=1028,Hu=1029,qi=1030,Wu=1031,Ku=1033,Bs=33776,mr=33777,gr=33778,zs=33779,oo=35840,$o=35841,ao=35842,ea=35843,Yl=36196,lo=37492,co=37496,uo=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ua=37818,ha=37819,fa=37820,da=37821,ho=36492,js=2300,Xs=2301,_r=2302,pa=2400,ma=2401,ga=2402;const ju=2501;const gn=3e3,ot=3001,Xu=3200,qu=3201,Zl=0,Yu=1,Tn="srgb",ei="srgb-linear",vr=7680,Zu=519,_a=35044,va="300 es",fo=1035;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const xr=Math.PI/180,xa=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Ju(s,e){return(s%e+e)%e}function yr(s,e,t){return(1-t)*s+t*e}function ya(s){return(s&s-1)===0&&s!==0}function po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],w=i[1],y=i[4],v=i[7],S=i[2],b=i[5],P=i[8];return r[0]=o*p+a*w+l*S,r[3]=o*m+a*y+l*b,r[6]=o*_+a*v+l*P,r[1]=c*p+u*w+h*S,r[4]=c*m+u*y+h*b,r[7]=c*_+u*v+h*P,r[2]=f*p+d*w+g*S,r[5]=f*m+d*y+g*b,r[8]=f*_+d*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const wr={[Tn]:{[ei]:ni},[ei]:{[Tn]:ks}},qt={legacyMode:!0,get workingColorSpace(){return ei},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(wr[e]&&wr[e][t]!==void 0){const n=wr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},Yt={h:0,s:0,l:0},ds={h:0,s:0,l:0};function br(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ps(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ei){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ei){if(e=Ju(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=br(o,r,e+1/3),this.g=br(o,r,e),this.b=br(o,r,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return qt.fromWorkingColorSpace(ps(this,_t),e),Tt(_t.r*255,0,255)<<16^Tt(_t.g*255,0,255)<<8^Tt(_t.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ei){qt.fromWorkingColorSpace(ps(this,_t),t);const n=_t.r,i=_t.g,r=_t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ei){return qt.fromWorkingColorSpace(ps(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Tn){return qt.fromWorkingColorSpace(ps(this,_t),e),e!==Tn?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(ds);const n=yr(Yt.h,ds.h,t),i=yr(Yt.s,ds.s,t),r=yr(Yt.l,ds.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=Ql;let hi;class $l{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=ns("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ec{constructor(e=null){this.isSource=!0,this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sr(i[o].image)):r.push(Sr(i[o]))}else r=Sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?$l.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;class zt extends si{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=$t,i=$t,r=Ut,o=as,a=It,l=Bt,c=1,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Ni(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Xl;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,S=(_+1)/2,b=(u+f)/4,P=(h+p)/4,x=(g+m)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=P/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=x/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=P/r,i=x/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-p)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gn extends si{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tc extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,w=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const S=Math.sqrt(y),b=Math.atan2(S,_*w);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}const v=a*w;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+p*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new F,wa=new kt;class ri{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Xn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),ms.subVectors(this.max,Gi),fi.subVectors(e.a,Gi),di.subVectors(e.b,Gi),pi.subVectors(e.c,Gi),On.subVectors(di,fi),Fn.subVectors(pi,di),qn.subVectors(fi,pi);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-qn.z,qn.y,On.z,0,-On.x,Fn.z,0,-Fn.x,qn.z,0,-qn.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-qn.y,qn.x,0];return!Er(t,fi,di,pi,ms)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,fi,di,pi,ms))?!1:(gs.crossVectors(On,Fn),t=[gs.x,gs.y,gs.z],Er(t,fi,di,pi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new F,new F,new F,new F,new F,new F,new F,new F],Xn=new F,Tr=new ri,fi=new F,di=new F,pi=new F,On=new F,Fn=new F,qn=new F,Gi=new F,ms=new F,gs=new F,Yn=new F;function Er(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yn.fromArray(s,r);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $u=new ri,ba=new F,_s=new F,Ar=new F;class $s{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ar.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?_s.set(0,0,1).multiplyScalar(e.radius):_s.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ba.copy(e.center).add(_s)),this.expandByPoint(ba.copy(e.center).sub(_s)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new F,Rr=new F,vs=new F,Nn=new F,Cr=new F,xs=new F,Lr=new F;class ic{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.direction).multiplyScalar(t).add(this.origin),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=Nn.dot(this.direction),l=-Nn.dot(vs),c=Nn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(vs).multiplyScalar(f).add(Rr),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){Cr.subVectors(t,e),xs.subVectors(n,e),Lr.crossVectors(Cr,xs);let o=this.direction.dot(Lr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);const l=a*this.direction.dot(xs.crossVectors(Nn,xs));if(l<0)return null;const c=a*this.direction.dot(Cr.cross(Nn));if(c<0||l+c>o)return null;const u=-a*Nn.dot(Lr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eh,e,th)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Un.crossVectors(n,Gt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Un.crossVectors(n,Gt)),Un.normalize(),ys.crossVectors(Gt,Un),i[0]=Un.x,i[4]=ys.x,i[8]=Gt.x,i[1]=Un.y,i[5]=ys.y,i[9]=Gt.y,i[2]=Un.z,i[6]=ys.z,i[10]=Gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],w=n[3],y=n[7],v=n[11],S=n[15],b=i[0],P=i[4],x=i[8],E=i[12],U=i[1],L=i[5],q=i[9],B=i[13],C=i[2],G=i[6],z=i[10],V=i[14],W=i[3],N=i[7],I=i[11],ne=i[15];return r[0]=o*b+a*U+l*C+c*W,r[4]=o*P+a*L+l*G+c*N,r[8]=o*x+a*q+l*z+c*I,r[12]=o*E+a*B+l*V+c*ne,r[1]=u*b+h*U+f*C+d*W,r[5]=u*P+h*L+f*G+d*N,r[9]=u*x+h*q+f*z+d*I,r[13]=u*E+h*B+f*V+d*ne,r[2]=g*b+p*U+m*C+_*W,r[6]=g*P+p*L+m*G+_*N,r[10]=g*x+p*q+m*z+_*I,r[14]=g*E+p*B+m*V+_*ne,r[3]=w*b+y*U+v*C+S*W,r[7]=w*P+y*L+v*G+S*N,r[11]=w*x+y*q+v*z+S*I,r[15]=w*E+y*B+v*V+S*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+p*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],w=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*_-o*f*_,v=u*p*c-g*h*c+g*a*d-o*p*d-u*a*_+o*h*_,S=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,b=t*w+n*y+i*v+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=w*P,e[1]=(p*f*r-h*m*r-p*i*d+n*m*d+h*i*_-n*f*_)*P,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*_+n*l*_)*P,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*P,e[4]=y*P,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*_+t*f*_)*P,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*_-t*l*_)*P,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*P,e[8]=v*P,e[9]=(g*h*r-u*p*r-g*n*d+t*p*d+u*n*_-t*h*_)*P,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*P,e[12]=S*P,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*P,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*m-t*a*m)*P,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,p=o*u,m=o*h,_=a*h,w=l*c,y=l*u,v=l*h,S=n.x,b=n.y,P=n.z;return i[0]=(1-(p+_))*S,i[1]=(d+v)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+_))*b,i[6]=(m+w)*b,i[7]=0,i[8]=(g+y)*P,i[9]=(m-w)*P,i[10]=(1-(f+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),a=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/r,u=1/o,h=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new F,Zt=new at,eh=new F(0,0,0),th=new F(1,1,1),Un=new F,ys=new F,Gt=new F,Sa=new at,Ma=new kt;class Ui{constructor(e=0,t=0,n=0,i=Ui.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ui.DefaultOrder="XYZ";Ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const Ta=new F,gi=new kt,wn=new at,ws=new F,Hi=new F,ih=new F,sh=new kt,Ea=new F(1,0,0),Aa=new F(0,1,0),Ra=new F(0,0,1),rh={type:"added"},Ca={type:"removed"};class dt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();const e=new F,t=new Ui,n=new kt,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new jt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ra,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ra,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Hi,ws,this.up):wn.lookAt(ws,Hi,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(wn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ca)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ca)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DefaultUp=new F(0,1,0);dt.DefaultMatrixAutoUpdate=!0;const Jt=new F,bn=new F,Pr=new F,Sn=new F,_i=new F,vi=new F,La=new F,Dr=new F,Ir=new F,Or=new F;class En{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jt.subVectors(i,t),bn.subVectors(n,t),Pr.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(bn),l=Jt.dot(Pr),c=bn.dot(bn),u=bn.dot(Pr),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),bn.subVectors(e,t),Jt.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Jt.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return En.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;_i.subVectors(i,n),vi.subVectors(r,n),Dr.subVectors(e,n);const l=_i.dot(Dr),c=vi.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Ir.subVectors(e,i);const u=_i.dot(Ir),h=vi.dot(Ir);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(_i,o);Or.subVectors(e,r);const d=_i.dot(Or),g=vi.dot(Or);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return La.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(La,a);const _=1/(m+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let oh=0;class ls extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Li,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hl,this.blendDst=Wl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===au;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sc extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,bs=new fe;class mn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Xe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new fe),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new F),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new ht),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class rc extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ah=0;const Kt=new at,Fr=new dt,xi=new F,Ht=new ri,Wi=new ri,St=new F;class an extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?oc:rc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Ht.min,Wi.min),Ht.expandByPoint(St),St.addVectors(Ht.max,Wi.max),Ht.expandByPoint(St)):(Ht.expandByPoint(Wi.min),Ht.expandByPoint(Wi.max))}Ht.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(e,c),St.add(xi)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<a;U++)c[U]=new F,u[U]=new F;const h=new F,f=new F,d=new F,g=new fe,p=new fe,m=new fe,_=new F,w=new F;function y(U,L,q){h.fromArray(i,U*3),f.fromArray(i,L*3),d.fromArray(i,q*3),g.fromArray(o,U*2),p.fromArray(o,L*2),m.fromArray(o,q*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const B=1/(p.x*m.y-m.x*p.y);!isFinite(B)||(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(B),w.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(B),c[U].add(_),c[L].add(_),c[q].add(_),u[U].add(w),u[L].add(w),u[q].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let U=0,L=v.length;U<L;++U){const q=v[U],B=q.start,C=q.count;for(let G=B,z=B+C;G<z;G+=3)y(n[G+0],n[G+1],n[G+2])}const S=new F,b=new F,P=new F,x=new F;function E(U){P.fromArray(r,U*3),x.copy(P);const L=c[U];S.copy(L),S.sub(P.multiplyScalar(P.dot(L))).normalize(),b.crossVectors(x,L);const B=b.dot(u[U])<0?-1:1;l[U*4]=S.x,l[U*4+1]=S.y,l[U*4+2]=S.z,l[U*4+3]=B}for(let U=0,L=v.length;U<L;++U){const q=v[U],B=q.start,C=q.count;for(let G=B,z=B+C;G<z;G+=3)E(n[G+0]),E(n[G+1]),E(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new at,yi=new ic,Nr=new $s,Bn=new F,zn=new F,kn=new F,Ur=new F,Br=new F,zr=new F,Ss=new F,Ms=new F,Ts=new F,Es=new fe,As=new fe,Rs=new fe,kr=new F,Cs=new F;class dn extends dt{constructor(e=new an,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),e.ray.intersectsSphere(Nr)===!1)||(Pa.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Pa),n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const _=d[p],w=i[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=y,b=v;S<b;S+=3){const P=a.getX(S),x=a.getX(S+1),E=a.getX(S+2);o=Ls(this,w,e,yi,l,c,u,h,f,P,x,E),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=p,w=m;_<w;_+=3){const y=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);o=Ls(this,i,e,yi,l,c,u,h,f,y,v,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const _=d[p],w=i[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=y,b=v;S<b;S+=3){const P=S,x=S+1,E=S+2;o=Ls(this,w,e,yi,l,c,u,h,f,P,x,E),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=p,w=m;_<w;_+=3){const y=_,v=_+1,S=_+2;o=Ls(this,i,e,yi,l,c,u,h,f,y,v,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function lh(s,e,t,n,i,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==ii,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:s}}function Ls(s,e,t,n,i,r,o,a,l,c,u,h){Bn.fromBufferAttribute(i,c),zn.fromBufferAttribute(i,u),kn.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Ss.set(0,0,0),Ms.set(0,0,0),Ts.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const m=f[g],_=r[g];m!==0&&(Ur.fromBufferAttribute(_,c),Br.fromBufferAttribute(_,u),zr.fromBufferAttribute(_,h),o?(Ss.addScaledVector(Ur,m),Ms.addScaledVector(Br,m),Ts.addScaledVector(zr,m)):(Ss.addScaledVector(Ur.sub(Bn),m),Ms.addScaledVector(Br.sub(zn),m),Ts.addScaledVector(zr.sub(kn),m)))}Bn.add(Ss),zn.add(Ms),kn.add(Ts)}s.isSkinnedMesh&&(s.boneTransform(c,Bn),s.boneTransform(u,zn),s.boneTransform(h,kn));const d=lh(s,e,t,n,Bn,zn,kn,kr);if(d){a&&(Es.fromBufferAttribute(a,c),As.fromBufferAttribute(a,u),Rs.fromBufferAttribute(a,h),d.uv=En.getUV(kr,Bn,zn,kn,Es,As,Rs,new fe)),l&&(Es.fromBufferAttribute(l,c),As.fromBufferAttribute(l,u),Rs.fromBufferAttribute(l,h),d.uv2=En.getUV(kr,Bn,zn,kn,Es,As,Rs,new fe));const g={a:c,b:u,c:h,normal:new F,materialIndex:0};En.getNormal(Bn,zn,kn,g.normal),d.face=g}return d}class cs extends an{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(p,m,_,w,y,v,S,b,P,x,E){const U=v/P,L=S/x,q=v/2,B=S/2,C=b/2,G=P+1,z=x+1;let V=0,W=0;const N=new F;for(let I=0;I<z;I++){const ne=I*L-B;for(let Q=0;Q<G;Q++){const re=Q*U-q;N[p]=re*w,N[m]=ne*y,N[_]=C,c.push(N.x,N.y,N.z),N[p]=0,N[m]=0,N[_]=b>0?1:-1,u.push(N.x,N.y,N.z),h.push(Q/P),h.push(1-I/x),V+=1}}for(let I=0;I<x;I++)for(let ne=0;ne<P;ne++){const Q=f+ne+G*I,re=f+ne+G*(I+1),xe=f+(ne+1)+G*(I+1),Y=f+(ne+1)+G*I;l.push(Q,re,Y),l.push(re,xe,Y),W+=6}a.addGroup(d,W,E),d+=W,f+=V}}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Fi(s[t]);for(const i in n)e[i]=n[i]}return e}const So={clone:Fi,merge:Rt};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ch,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=90,bi=1;class hh extends dt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Wt(wi,bi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const r=new Wt(wi,bi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(-1,0,0)),this.add(r);const o=new Wt(wi,bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);const a=new Wt(wi,bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new Wt(wi,bi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Wt(wi,bi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ac extends zt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fh extends Gn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cs(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Vn});r.uniforms.tEquirect.value=t;const o=new dn(i,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Ut),new hh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Vr=new F,dh=new F,ph=new jt;class Zn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vr.subVectors(n,t).cross(dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ph.getNormalMatrix(e),i=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new $s,Ps=new F;class er{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],w=n[14],y=n[15];return t[0].setComponents(a-i,h-l,p-f,y-m).normalize(),t[1].setComponents(a+i,h+l,p+f,y+m).normalize(),t[2].setComponents(a+r,h+c,p+d,y+_).normalize(),t[3].setComponents(a-r,h-c,p-d,y-_).normalize(),t[4].setComponents(a-o,h-u,p-g,y-w).normalize(),t[5].setComponents(a+o,h+u,p+g,y+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ps.x=i.normal.x>0?e.max.x:e.min.x,Ps.y=i.normal.y>0?e.max.y:e.min.y,Ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class To extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const w=_*f-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-w,0),p.push(0,0,1),m.push(y/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const y=w+c*_,v=w+c*(_+1),S=w+1+c*(_+1),b=w+1+c*_;d.push(y,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(p,3)),this.setAttribute("uv",new Lt(m,2))}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}var gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh="vec3 transformed = vec3( position );",Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Th=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ff=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Lf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,od=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ad=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ld=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ud=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Md=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:xh,aomap_fragment:yh,aomap_pars_fragment:wh,begin_vertex:bh,beginnormal_vertex:Sh,bsdfs:Mh,iridescence_fragment:Th,bumpmap_pars_fragment:Eh,clipping_planes_fragment:Ah,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Lh,color_fragment:Ph,color_pars_fragment:Dh,color_pars_vertex:Ih,color_vertex:Oh,common:Fh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Uh,displacementmap_pars_vertex:Bh,displacementmap_vertex:zh,emissivemap_fragment:kh,emissivemap_pars_fragment:Vh,encodings_fragment:Gh,encodings_pars_fragment:Hh,envmap_fragment:Wh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:jh,envmap_pars_vertex:Xh,envmap_physical_pars_fragment:rf,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:Zh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:$h,lightmap_fragment:ef,lightmap_pars_fragment:tf,lights_lambert_vertex:nf,lights_pars_begin:sf,lights_toon_fragment:of,lights_toon_pars_fragment:af,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:uf,lights_physical_pars_fragment:hf,lights_fragment_begin:ff,lights_fragment_maps:df,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:vf,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:wf,map_particle_pars_fragment:bf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:Mf,morphcolor_vertex:Tf,morphnormal_vertex:Ef,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Lf,normal_pars_fragment:Pf,normal_pars_vertex:Df,normal_vertex:If,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Bf,output_fragment:zf,packing:kf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:Wf,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:qf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Zf,skinbase_vertex:Jf,skinning_pars_vertex:Qf,skinning_vertex:$f,skinnormal_vertex:ed,specularmap_fragment:td,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:od,uv_pars_fragment:ad,uv_pars_vertex:ld,uv_vertex:cd,uv2_pars_fragment:ud,uv2_pars_vertex:hd,uv2_vertex:fd,worldpos_vertex:dd,background_vert:pd,background_frag:md,cube_vert:gd,cube_frag:_d,depth_vert:vd,depth_frag:xd,distanceRGBA_vert:yd,distanceRGBA_frag:wd,equirect_vert:bd,equirect_frag:Sd,linedashed_vert:Md,linedashed_frag:Td,meshbasic_vert:Ed,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Ld,meshmatcap_frag:Pd,meshnormal_vert:Dd,meshnormal_frag:Id,meshphong_vert:Od,meshphong_frag:Fd,meshphysical_vert:Nd,meshphysical_frag:Ud,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:kd,points_frag:Vd,shadow_vert:Gd,shadow_frag:Hd,sprite_vert:Wd,sprite_frag:Kd},ve={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},Qt={basic:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Rt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Rt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Rt([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Rt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Rt([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Rt([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null}},vertexShader:We.background_vert,fragmentShader:We.background_frag},cube:{uniforms:Rt([ve.envmap,{opacity:{value:1}}]),vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Rt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Rt([ve.lights,ve.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qt.physical={uniforms:Rt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};function jd(s,e,t,n,i,r){const o=new Xe(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(p,m){let _=!1,w=m.isScene===!0?m.background:null;w&&w.isTexture&&(w=e.get(w));const y=s.xr,v=y.getSession&&y.getSession();v&&v.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Qs)?(c===void 0&&(c=new dn(new cs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Fi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||h!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new dn(new To(2,2),new Cn({name:"BackgroundMaterial",uniforms:Fi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),a=m,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:d}}function Xd(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(C,G,z,V,W){let N=!1;if(o){const I=p(V,z,G);c!==I&&(c=I,d(c.object)),N=_(C,V,z,W),N&&w(C,V,z,W)}else{const I=G.wireframe===!0;(c.geometry!==V.id||c.program!==z.id||c.wireframe!==I)&&(c.geometry=V.id,c.program=z.id,c.wireframe=I,N=!0)}W!==null&&t.update(W,34963),(N||u)&&(u=!1,x(C,G,z,V),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function p(C,G,z){const V=z.wireframe===!0;let W=a[C.id];W===void 0&&(W={},a[C.id]=W);let N=W[G.id];N===void 0&&(N={},W[G.id]=N);let I=N[V];return I===void 0&&(I=m(f()),N[V]=I),I}function m(C){const G=[],z=[],V=[];for(let W=0;W<i;W++)G[W]=0,z[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:V,object:C,attributes:{},index:null}}function _(C,G,z,V){const W=c.attributes,N=G.attributes;let I=0;const ne=z.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const xe=W[Q];let Y=N[Q];if(Y===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),xe===void 0||xe.attribute!==Y||Y&&xe.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==V}function w(C,G,z,V){const W={},N=G.attributes;let I=0;const ne=z.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let xe=N[Q];xe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const Y={};Y.attribute=xe,xe&&xe.data&&(Y.data=xe.data),W[Q]=Y,I++}c.attributes=W,c.attributesNum=I,c.index=V}function y(){const C=c.newAttributes;for(let G=0,z=C.length;G<z;G++)C[G]=0}function v(C){S(C,0)}function S(C,G){const z=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;z[C]=1,V[C]===0&&(s.enableVertexAttribArray(C),V[C]=1),W[C]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,G),W[C]=G)}function b(){const C=c.newAttributes,G=c.enabledAttributes;for(let z=0,V=G.length;z<V;z++)G[z]!==C[z]&&(s.disableVertexAttribArray(z),G[z]=0)}function P(C,G,z,V,W,N){n.isWebGL2===!0&&(z===5124||z===5125)?s.vertexAttribIPointer(C,G,z,W,N):s.vertexAttribPointer(C,G,z,V,W,N)}function x(C,G,z,V){if(n.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=V.attributes,N=z.getAttributes(),I=G.defaultAttributeValues;for(const ne in N){const Q=N[ne];if(Q.location>=0){let re=W[ne];if(re===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const xe=re.normalized,Y=re.itemSize,j=t.get(re);if(j===void 0)continue;const ke=j.buffer,ge=j.type,Le=j.bytesPerElement;if(re.isInterleavedBufferAttribute){const _e=re.data,Pe=_e.stride,$=re.offset;if(_e.isInstancedInterleavedBuffer){for(let J=0;J<Q.locationSize;J++)S(Q.location+J,_e.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let J=0;J<Q.locationSize;J++)v(Q.location+J);s.bindBuffer(34962,ke);for(let J=0;J<Q.locationSize;J++)P(Q.location+J,Y/Q.locationSize,ge,xe,Pe*Le,($+Y/Q.locationSize*J)*Le)}else{if(re.isInstancedBufferAttribute){for(let _e=0;_e<Q.locationSize;_e++)S(Q.location+_e,re.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<Q.locationSize;_e++)v(Q.location+_e);s.bindBuffer(34962,ke);for(let _e=0;_e<Q.locationSize;_e++)P(Q.location+_e,Y/Q.locationSize,ge,xe,Y*Le,Y/Q.locationSize*_e*Le)}}else if(I!==void 0){const xe=I[ne];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(Q.location,xe);break;case 3:s.vertexAttrib3fv(Q.location,xe);break;case 4:s.vertexAttrib4fv(Q.location,xe);break;default:s.vertexAttrib1fv(Q.location,xe)}}}}b()}function E(){q();for(const C in a){const G=a[C];for(const z in G){const V=G[z];for(const W in V)g(V[W].object),delete V[W];delete G[z]}delete a[C]}}function U(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const z in G){const V=G[z];for(const W in V)g(V[W].object),delete V[W];delete G[z]}delete a[C.id]}function L(C){for(const G in a){const z=a[G];if(z[C.id]===void 0)continue;const V=z[C.id];for(const W in V)g(V[W].object),delete V[W];delete z[C.id]}}function q(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:v,disableUnusedAttributes:b}}function qd(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Yd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),d=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),_=s.getParameter(36348),w=s.getParameter(36349),y=f>0,v=o||e.has("OES_texture_float"),S=y&&v,b=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:b}}function Zd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,y=w*4;let v=_.clippingState||null;l.value=v,v=u(g,f,y,d);for(let S=0;S!==y;++S)v[S]=t[S];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,v=d;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Jd(s){let e=new WeakMap;function t(o,a){return a===no?o.mapping=Di:a===io&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===no||a===io)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fh(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class tr extends Mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Da=[.125,.215,.35,.446,.526,.582],Qn=20,Gr=new tr,Ia=new Xe;let Hr=null;const Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,Oa=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Jn,Mi),new F(0,Jn,-Mi),new F(Mi,0,Jn),new F(-Mi,0,Jn),new F(Jn,Mi,0),new F(-Jn,Mi,0)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Rn,format:It,encoding:gn,depthBuffer:!1},i=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(r)),this._blurMaterial=$d(r,e,t)}return i}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,i){const a=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ia),u.toneMapping=pn,u.autoClear=!1;const d=new sc({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new dn(new cs,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ia),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Ds(i,w*y,_>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Oa[(i-1)%Oa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qn-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const _=[];let w=0;for(let P=0;P<Qn;++P){const x=P/p,E=Math.exp(-x*x/2);_.push(E),P===0?w+=E:P<m&&(w+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],S=3*v*(i>y-Ai?i-y+Ai:0),b=4*(this._cubeSize-v);Ds(t,S,b,3*v,2*v),l.setRenderTarget(t),l.render(h,Gr)}}function Qd(s){const e=[],t=[],n=[];let i=s;const r=s-Ai+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ai?l=Da[o-s+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,w=new Float32Array(p*g*d),y=new Float32Array(m*g*d),v=new Float32Array(_*g*d);for(let b=0;b<d;b++){const P=b%3*2/3-1,x=b>2?0:-1,E=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];w.set(E,p*g*b),y.set(f,m*g*b);const U=[b,b,b,b,b,b];v.set(U,_*g*b)}const S=new an;S.setAttribute("position",new mn(w,p)),S.setAttribute("uv",new mn(y,m)),S.setAttribute("faceIndex",new mn(v,_)),e.push(S),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(s,e,t){const n=new Gn(s,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function $d(s,e,t){const n=new Float32Array(Qn),i=new F(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ua(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ba(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===no||l===io,u=l===Di||l===Ii;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Fa(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Fa(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function np(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const w=d.array;p=d.version;for(let y=0,v=w.length;y<v;y+=3){const S=w[y+0],b=w[y+1],P=w[y+2];f.push(S,b,b,P,P,S)}}else{const w=g.array;p=g.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const S=y+0,b=y+1,P=y+2;f.push(S,b,b,P,P,S)}}const m=new(Jl(f)?oc:rc)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ip(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function sp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rp(s,e){return s[0]-e[0]}function op(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Wr(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function ap(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==p){let G=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",G)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),v===!0&&(E=2),S===!0&&(E=3);let U=u.attributes.position.count*E,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const q=new Float32Array(U*L*4*p),B=new tc(q,U,L,p);B.type=en,B.needsUpdate=!0;const C=E*4;for(let z=0;z<p;z++){const V=b[z],W=P[z],N=x[z],I=U*L*4*z;for(let ne=0;ne<V.count;ne++){const Q=ne*C;y===!0&&(o.fromBufferAttribute(V,ne),V.normalized===!0&&Wr(o,V),q[I+Q+0]=o.x,q[I+Q+1]=o.y,q[I+Q+2]=o.z,q[I+Q+3]=0),v===!0&&(o.fromBufferAttribute(W,ne),W.normalized===!0&&Wr(o,W),q[I+Q+4]=o.x,q[I+Q+5]=o.y,q[I+Q+6]=o.z,q[I+Q+7]=0),S===!0&&(o.fromBufferAttribute(N,ne),N.normalized===!0&&Wr(o,N),q[I+Q+8]=o.x,q[I+Q+9]=o.y,q[I+Q+10]=o.z,q[I+Q+11]=N.itemSize===4?o.w:1)}}m={count:p,texture:B,size:new fe(U,L)},r.set(u,m),u.addEventListener("dispose",G)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];const w=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<g;v++){const S=p[v];S[0]=v,S[1]=d[v]}p.sort(op);for(let v=0;v<8;v++)v<g&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(rp);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const S=a[v],b=S[0],P=S[1];b!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+v)!==m[b]&&u.setAttribute("morphTarget"+v,m[b]),_&&u.getAttribute("morphNormal"+v)!==_[b]&&u.setAttribute("morphNormal"+v,_[b]),i[v]=P,w+=P):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function lp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const cc=new zt,uc=new tc,hc=new nc,fc=new ac,za=[],ka=[],Va=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function Bi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=za[i];if(r===void 0&&(r=new Float32Array(i),za[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function nr(s,e){let t=ka[e];t===void 0&&(t=new Int32Array(e),ka[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Ha.set(n),s.uniformMatrix2fv(this.addr,!1,Ha),Ft(t,n)}}function pp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Ga.set(n),s.uniformMatrix3fv(this.addr,!1,Ga),Ft(t,n)}}function mp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Va.set(n),s.uniformMatrix4fv(this.addr,!1,Va),Ft(t,n)}}function gp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _p(s,e){const t=this.cache;Ot(t,e)||(s.uniform2iv(this.addr,e),Ft(t,e))}function vp(s,e){const t=this.cache;Ot(t,e)||(s.uniform3iv(this.addr,e),Ft(t,e))}function xp(s,e){const t=this.cache;Ot(t,e)||(s.uniform4iv(this.addr,e),Ft(t,e))}function yp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wp(s,e){const t=this.cache;Ot(t,e)||(s.uniform2uiv(this.addr,e),Ft(t,e))}function bp(s,e){const t=this.cache;Ot(t,e)||(s.uniform3uiv(this.addr,e),Ft(t,e))}function Sp(s,e){const t=this.cache;Ot(t,e)||(s.uniform4uiv(this.addr,e),Ft(t,e))}function Mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cc,i)}function Tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fc,i)}function Ap(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uc,i)}function Rp(s){switch(s){case 5126:return cp;case 35664:return up;case 35665:return hp;case 35666:return fp;case 35674:return dp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return yp;case 36294:return wp;case 36295:return bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Ap}}function Cp(s,e){s.uniform1fv(this.addr,e)}function Lp(s,e){const t=Bi(e,this.size,2);s.uniform2fv(this.addr,t)}function Pp(s,e){const t=Bi(e,this.size,3);s.uniform3fv(this.addr,t)}function Dp(s,e){const t=Bi(e,this.size,4);s.uniform4fv(this.addr,t)}function Ip(s,e){const t=Bi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Op(s,e){const t=Bi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fp(s,e){const t=Bi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Np(s,e){s.uniform1iv(this.addr,e)}function Up(s,e){s.uniform2iv(this.addr,e)}function Bp(s,e){s.uniform3iv(this.addr,e)}function zp(s,e){s.uniform4iv(this.addr,e)}function kp(s,e){s.uniform1uiv(this.addr,e)}function Vp(s,e){s.uniform2uiv(this.addr,e)}function Gp(s,e){s.uniform3uiv(this.addr,e)}function Hp(s,e){s.uniform4uiv(this.addr,e)}function Wp(s,e,t){const n=e.length,i=nr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||cc,i[r])}function Kp(s,e,t){const n=e.length,i=nr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||hc,i[r])}function jp(s,e,t){const n=e.length,i=nr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||fc,i[r])}function Xp(s,e,t){const n=e.length,i=nr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||uc,i[r])}function qp(s){switch(s){case 5126:return Cp;case 35664:return Lp;case 35665:return Pp;case 35666:return Dp;case 35674:return Ip;case 35675:return Op;case 35676:return Fp;case 5124:case 35670:return Np;case 35667:case 35671:return Up;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Vp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rp(t.type)}}class Zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=qp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Wa(s,e){s.seq.push(e),s.map[e.id]=e}function Qp(s,e,t){const n=s.name,i=n.length;for(Kr.lastIndex=0;;){const r=Kr.exec(n),o=Kr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wa(t,c===void 0?new Yp(a,s,e):new Zp(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Jp(a),Wa(t,h)),t=h}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Qp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ka(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let $p=0;function em(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function tm(s){switch(s){case gn:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ja(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+em(s.getShaderSource(e),o)}else return i}function nm(s,e){const t=tm(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function im(s,e){let t;switch(e){case Cu:t="Linear";break;case Lu:t="Reinhard";break;case Pu:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case Du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sm(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function rm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function om(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Yi(s){return s!==""}function Xa(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const am=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(s){return s.replace(am,lm)}function lm(s,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return mo(t)}const cm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(s){return s.replace(um,dc).replace(cm,hm)}function hm(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),dc(s,e,t,n)}function dc(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Za(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function dm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function mm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Au:e="ENVMAP_BLENDING_MIX";break;case Ru:e="ENVMAP_BLENDING_ADD";break}return e}function gm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _m(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fm(t),c=dm(t),u=pm(t),h=mm(t),f=gm(t),d=t.isWebGL2?"":sm(t),g=rm(r),p=i.createProgram();let m,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Yi).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(Yi).join(`
`),_.length>0&&(_+=`
`)):(m=[Za(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),_=[d,Za(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?We.tonemapping_pars_fragment:"",t.toneMapping!==pn?im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,nm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=mo(o),o=Xa(o,t),o=qa(o,t),a=mo(a),a=Xa(a,t),a=qa(a,t),o=Ya(o),a=Ya(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=w+m+o,v=w+_+a,S=Ka(i,35633,y),b=Ka(i,35632,v);if(i.attachShader(p,S),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),U=i.getShaderInfoLog(S).trim(),L=i.getShaderInfoLog(b).trim();let q=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const C=ja(i,S,"vertex"),G=ja(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+C+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(U===""||L==="")&&(B=!1);B&&(this.diagnostics={runnable:q,programLog:E,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:_}})}i.deleteShader(S),i.deleteShader(b);let P;this.getUniforms=function(){return P===void 0&&(P=new Vs(i,p)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=om(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=$p++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=b,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new ym(e);t.set(e,n)}return t.get(e)}}class ym{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}}function wm(s,e,t,n,i,r,o){const a=new bo,l=new xm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,E,U,L,q){const B=L.fog,C=q.geometry,G=x.isMeshStandardMaterial?L.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),V=!!z&&z.mapping===Qs?z.image.height:null,W=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const N=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,I=N!==void 0?N.length:0;let ne=0;C.morphAttributes.position!==void 0&&(ne=1),C.morphAttributes.normal!==void 0&&(ne=2),C.morphAttributes.color!==void 0&&(ne=3);let Q,re,xe,Y;if(W){const Pe=Qt[W];Q=Pe.vertexShader,re=Pe.fragmentShader}else Q=x.vertexShader,re=x.fragmentShader,l.update(x),xe=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);const j=s.getRenderTarget(),ke=x.alphaTest>0,ge=x.clearcoat>0,Le=x.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:x.type,vertexShader:Q,fragmentShader:re,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?s.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:gn,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:V,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Yu,tangentSpaceNormalMap:x.normalMapType===Zl,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ot,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!x.iridescenceMap,iridescenceThicknessMap:Le&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Li,alphaMap:!!x.alphaMap,alphaTest:ke,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!C.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:pn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===tn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(_(E,x),w(E,x),E.push(s.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),x.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),x.push(a.mask)}function y(x){const E=g[x.type];let U;if(E){const L=Qt[E];U=So.clone(L.uniforms)}else U=x.uniforms;return U}function v(x,E){let U;for(let L=0,q=c.length;L<q;L++){const B=c[L];if(B.cacheKey===E){U=B,++U.usedTimes;break}}return U===void 0&&(U=new _m(s,E,x,r),c.push(U)),U}function S(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:P}}function bm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ja(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,p,m){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Sm),n.length>1&&n.sort(f||Ja),i.length>1&&i.sort(f||Ja)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Mm(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Qa,s.set(n,[r])):i>=s.get(n).length?(r=new Qa,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Xe};break;case"SpotLight":t={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Em(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Am=0;function Rm(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Cm(s,e){const t=new Tm,n=Em(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,o=new at,a=new at;function l(u,h){let f=0,d=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,m=0,_=0,w=0,y=0,v=0,S=0,b=0;u.sort(Rm);const P=h!==!0?Math.PI:1;for(let E=0,U=u.length;E<U;E++){const L=u[E],q=L.color,B=L.intensity,C=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=q.r*B*P,d+=q.g*B*P,g+=q.b*B*P;else if(L.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],B);else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*P),L.castShadow){const V=L.shadow,W=n.get(L);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=z,p++}else if(L.isSpotLight){const z=t.get(L);if(z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(q).multiplyScalar(B*P),z.distance=C,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,L.castShadow){const V=L.shadow,W=n.get(L);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,i.spotShadowMatrix[_]=L.shadow.matrix,b++}i.spot[_]=z,_++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(q).multiplyScalar(B),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=z,w++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*P),z.distance=L.distance,z.decay=L.decay,L.castShadow){const V=L.shadow,W=n.get(L);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=z,m++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(B*P),z.groundColor.copy(L.groundColor).multiplyScalar(B*P),i.hemi[y]=z,y++}}w>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==p||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==w||x.hemiLength!==y||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=w,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=b,x.directionalLength=p,x.pointLength=m,x.spotLength=_,x.rectAreaLength=w,x.hemiLength=y,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=b,i.version=Am++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const v=u[w];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function $a(s,e){const t=new Cm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lm(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new $a(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new $a(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Pm extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dm extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fm(s,e,t){let n=new er;const i=new fe,r=new fe,o=new ht,a=new Pm({depthPacking:qu}),l=new Dm,c={},u=t.maxTextureSize,h={0:tn,1:ts,2:ii},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Im,fragmentShader:Om}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl,this.render=function(v,S,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const P=s.getRenderTarget(),x=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Vn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let L=0,q=v.length;L<q;L++){const B=v[L],C=B.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const G=C.getFrameExtents();if(i.multiply(G),r.copy(C.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,C.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,C.mapSize.y=r.y)),C.map===null){const V=this.type!==ji?{minFilter:Ct,magFilter:Ct}:{};C.map=new Gn(i.x,i.y,V),C.map.texture.name=B.name+".shadowMap",C.camera.updateProjectionMatrix()}s.setRenderTarget(C.map),s.clear();const z=C.getViewportCount();for(let V=0;V<z;V++){const W=C.getViewport(V);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),U.viewport(o),C.updateMatrices(B,V),n=C.getFrustum(),y(S,b,C.camera,B,this.type)}C.isPointLightShadow!==!0&&this.type===ji&&_(C,b),C.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(P,x,E)};function _(v,S){const b=e.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(S,null,b,f,p,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(S,null,b,d,p,null)}function w(v,S,b,P,x,E){let U=null;const L=b.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0?U=L:U=b.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const q=U.uuid,B=S.uuid;let C=c[q];C===void 0&&(C={},c[q]=C);let G=C[B];G===void 0&&(G=U.clone(),C[B]=G),U=G}return U.visible=S.visible,U.wireframe=S.wireframe,E===ji?U.side=S.shadowSide!==null?S.shadowSide:S.side:U.side=S.shadowSide!==null?S.shadowSide:h[S.side],U.alphaMap=S.alphaMap,U.alphaTest=S.alphaTest,U.clipShadows=S.clipShadows,U.clippingPlanes=S.clippingPlanes,U.clipIntersection=S.clipIntersection,U.displacementMap=S.displacementMap,U.displacementScale=S.displacementScale,U.displacementBias=S.displacementBias,U.wireframeLinewidth=S.wireframeLinewidth,U.linewidth=S.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(b.matrixWorld),U.nearDistance=P,U.farDistance=x),U}function y(v,S,b,P,x){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===ji)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld);const L=e.update(v),q=v.material;if(Array.isArray(q)){const B=L.groups;for(let C=0,G=B.length;C<G;C++){const z=B[C],V=q[z.materialIndex];if(V&&V.visible){const W=w(v,V,P,b.near,b.far,x);s.renderBufferDirect(b,null,L,W,v,z)}}}else if(q.visible){const B=w(v,q,P,b.near,b.far,x);s.renderBufferDirect(b,null,L,B,v,null)}}const U=v.children;for(let L=0,q=U.length;L<q;L++)y(U[L],S,b,P,x)}}function Nm(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const le=new ht;let he=null;const Ce=new ht(0,0,0,0);return{setMask:function(ye){he!==ye&&!D&&(s.colorMask(ye,ye,ye,ye),he=ye)},setLocked:function(ye){D=ye},setClear:function(ye,Te,ce,Fe,qe){qe===!0&&(ye*=Fe,Te*=Fe,ce*=Fe),le.set(ye,Te,ce,Fe),Ce.equals(le)===!1&&(s.clearColor(ye,Te,ce,Fe),Ce.copy(le))},reset:function(){D=!1,he=null,Ce.set(-1,0,0,0)}}}function r(){let D=!1,le=null,he=null,Ce=null;return{setTest:function(ye){ye?Y(2929):j(2929)},setMask:function(ye){le!==ye&&!D&&(s.depthMask(ye),le=ye)},setFunc:function(ye){if(he!==ye){if(ye)switch(ye){case yu:s.depthFunc(512);break;case wu:s.depthFunc(519);break;case bu:s.depthFunc(513);break;case to:s.depthFunc(515);break;case Su:s.depthFunc(514);break;case Mu:s.depthFunc(518);break;case Tu:s.depthFunc(516);break;case Eu:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);he=ye}},setLocked:function(ye){D=ye},setClear:function(ye){Ce!==ye&&(s.clearDepth(ye),Ce=ye)},reset:function(){D=!1,le=null,he=null,Ce=null}}}function o(){let D=!1,le=null,he=null,Ce=null,ye=null,Te=null,ce=null,Fe=null,qe=null;return{setTest:function(Ye){D||(Ye?Y(2960):j(2960))},setMask:function(Ye){le!==Ye&&!D&&(s.stencilMask(Ye),le=Ye)},setFunc:function(Ye,pt,Pt){(he!==Ye||Ce!==pt||ye!==Pt)&&(s.stencilFunc(Ye,pt,Pt),he=Ye,Ce=pt,ye=Pt)},setOp:function(Ye,pt,Pt){(Te!==Ye||ce!==pt||Fe!==Pt)&&(s.stencilOp(Ye,pt,Pt),Te=Ye,ce=pt,Fe=Pt)},setLocked:function(Ye){D=Ye},setClear:function(Ye){qe!==Ye&&(s.clearStencil(Ye),qe=Ye)},reset:function(){D=!1,le=null,he=null,Ce=null,ye=null,Te=null,ce=null,Fe=null,qe=null}}}const a=new i,l=new r,c=new o;let u={},h={},f=new WeakMap,d=[],g=null,p=!1,m=null,_=null,w=null,y=null,v=null,S=null,b=null,P=!1,x=null,E=null,U=null,L=null,q=null;const B=s.getParameter(35661);let C=!1,G=0;const z=s.getParameter(7938);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),C=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),C=G>=2);let V=null,W={};const N=s.getParameter(3088),I=s.getParameter(2978),ne=new ht().fromArray(N),Q=new ht().fromArray(I);function re(D,le,he){const Ce=new Uint8Array(4),ye=s.createTexture();s.bindTexture(D,ye),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Te=0;Te<he;Te++)s.texImage2D(le+Te,0,6408,1,1,0,6408,5121,Ce);return ye}const xe={};xe[3553]=re(3553,3553,1),xe[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(2929),l.setFunc(to),oe(!1),be(Ko),Y(2884),$(Vn);function Y(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function j(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function ke(D,le){return h[D]!==le?(s.bindFramebuffer(D,le),h[D]=le,n&&(D===36009&&(h[36160]=le),D===36160&&(h[36009]=le)),!0):!1}function ge(D,le){let he=d,Ce=!1;if(D)if(he=f.get(le),he===void 0&&(he=[],f.set(le,he)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(he.length!==ye.length||he[0]!==36064){for(let Te=0,ce=ye.length;Te<ce;Te++)he[Te]=36064+Te;he.length=ye.length,Ce=!0}}else he[0]!==36064&&(he[0]=36064,Ce=!0);else he[0]!==1029&&(he[0]=1029,Ce=!0);Ce&&(t.isWebGL2?s.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Le(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const _e={[Ti]:32774,[cu]:32778,[uu]:32779};if(n)_e[Yo]=32775,_e[Zo]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[Yo]=D.MIN_EXT,_e[Zo]=D.MAX_EXT)}const Pe={[hu]:0,[fu]:1,[du]:768,[Hl]:770,[xu]:776,[_u]:774,[mu]:772,[pu]:769,[Wl]:771,[vu]:775,[gu]:773};function $(D,le,he,Ce,ye,Te,ce,Fe){if(D===Vn){p===!0&&(j(3042),p=!1);return}if(p===!1&&(Y(3042),p=!0),D!==lu){if(D!==m||Fe!==P){if((_!==Ti||v!==Ti)&&(s.blendEquation(32774),_=Ti,v=Ti),Fe)switch(D){case Li:s.blendFuncSeparate(1,771,1,771);break;case jo:s.blendFunc(1,1);break;case Xo:s.blendFuncSeparate(0,769,0,1);break;case qo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:s.blendFuncSeparate(770,771,1,771);break;case jo:s.blendFunc(770,1);break;case Xo:s.blendFuncSeparate(0,769,0,1);break;case qo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,y=null,S=null,b=null,m=D,P=Fe}return}ye=ye||le,Te=Te||he,ce=ce||Ce,(le!==_||ye!==v)&&(s.blendEquationSeparate(_e[le],_e[ye]),_=le,v=ye),(he!==w||Ce!==y||Te!==S||ce!==b)&&(s.blendFuncSeparate(Pe[he],Pe[Ce],Pe[Te],Pe[ce]),w=he,y=Ce,S=Te,b=ce),m=D,P=null}function J(D,le){D.side===ii?j(2884):Y(2884);let he=D.side===tn;le&&(he=!he),oe(he),D.blending===Li&&D.transparent===!1?$(Vn):$(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ce=D.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Y(32926):j(32926)}function oe(D){x!==D&&(D?s.frontFace(2304):s.frontFace(2305),x=D)}function be(D){D!==ru?(Y(2884),D!==E&&(D===Ko?s.cullFace(1029):D===ou?s.cullFace(1028):s.cullFace(1032))):j(2884),E=D}function me(D){D!==U&&(C&&s.lineWidth(D),U=D)}function De(D,le,he){D?(Y(32823),(L!==le||q!==he)&&(s.polygonOffset(le,he),L=le,q=he)):j(32823)}function Ee(D){D?Y(3089):j(3089)}function we(D){D===void 0&&(D=33984+B-1),V!==D&&(s.activeTexture(D),V=D)}function Ke(D,le){V===null&&we();let he=W[V];he===void 0&&(he={type:void 0,texture:void 0},W[V]=he),(he.type!==D||he.texture!==le)&&(s.bindTexture(D,le||xe[D]),he.type=D,he.texture=le)}function Oe(){const D=W[V];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function R(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function M(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(D){ne.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function de(D){Q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function pe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},V=null,W={},h={},f=new WeakMap,d=[],g=null,p=!1,m=null,_=null,w=null,y=null,v=null,S=null,b=null,P=!1,x=null,E=null,U=null,L=null,q=null,ne.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:j,bindFramebuffer:ke,drawBuffers:ge,useProgram:Le,setBlending:$,setMaterial:J,setFlipSided:oe,setCullFace:be,setLineWidth:me,setPolygonOffset:De,setScissorTest:Ee,activeTexture:we,bindTexture:Ke,unbindTexture:Oe,compressedTexImage2D:R,texImage2D:Ae,texImage3D:T,texStorage2D:H,texStorage3D:ue,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:Z,scissor:te,viewport:de,reset:pe}}function Um(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,M){return _?new OffscreenCanvas(R,M):ns("canvas")}function y(R,M,O,Z){let H=1;if((R.width>Z||R.height>Z)&&(H=Z/Math.max(R.width,R.height)),H<1||M===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const ue=M?po:Math.floor,Ae=ue(H*R.width),T=ue(H*R.height);p===void 0&&(p=w(Ae,T));const te=O?w(Ae,T):p;return te.width=Ae,te.height=T,te.getContext("2d").drawImage(R,0,0,Ae,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+T+")."),te}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return ya(R.width)&&ya(R.height)}function S(R){return a?!1:R.wrapS!==$t||R.wrapT!==$t||R.minFilter!==Ct&&R.minFilter!==Ut}function b(R,M){return R.generateMipmaps&&M&&R.minFilter!==Ct&&R.minFilter!==Ut}function P(R){s.generateMipmap(R)}function x(R,M,O,Z,H=!1){if(a===!1)return M;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=M;return M===6403&&(O===5126&&(ue=33326),O===5131&&(ue=33325),O===5121&&(ue=33321)),M===33319&&(O===5126&&(ue=33328),O===5131&&(ue=33327),O===5121&&(ue=33323)),M===6408&&(O===5126&&(ue=34836),O===5131&&(ue=34842),O===5121&&(ue=Z===ot&&H===!1?35907:32856),O===32819&&(ue=32854),O===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function E(R,M,O){return b(R,O)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function U(R){return R===Ct||R===Jo||R===Qo?9728:9729}function L(R){const M=R.target;M.removeEventListener("dispose",L),B(M),M.isVideoTexture&&g.delete(M)}function q(R){const M=R.target;M.removeEventListener("dispose",q),G(M)}function B(R){const M=n.get(R);if(M.__webglInit===void 0)return;const O=R.source,Z=m.get(O);if(Z){const H=Z[M.__cacheKey];H.usedTimes--,H.usedTimes===0&&C(R),Object.keys(Z).length===0&&m.delete(O)}n.remove(R)}function C(R){const M=n.get(R);s.deleteTexture(M.__webglTexture);const O=R.source,Z=m.get(O);delete Z[M.__cacheKey],o.memory.textures--}function G(R){const M=R.texture,O=n.get(R),Z=n.get(M);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++)s.deleteFramebuffer(O.__webglFramebuffer[H]),O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[H]);else{if(s.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let H=0;H<O.__webglColorRenderbuffer.length;H++)O.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[H]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let H=0,ue=M.length;H<ue;H++){const Ae=n.get(M[H]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(M[H])}n.remove(M),n.remove(R)}let z=0;function V(){z=0}function W(){const R=z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),z+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.encoding),M.join()}function I(R,M){const O=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(O,R,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,O.__webglTexture)}function ne(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){ge(O,R,M);return}t.activeTexture(33984+M),t.bindTexture(35866,O.__webglTexture)}function Q(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){ge(O,R,M);return}t.activeTexture(33984+M),t.bindTexture(32879,O.__webglTexture)}function re(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Le(O,R,M);return}t.activeTexture(33984+M),t.bindTexture(34067,O.__webglTexture)}const xe={[so]:10497,[$t]:33071,[ro]:33648},Y={[Ct]:9728,[Jo]:9984,[Qo]:9986,[Ut]:9729,[Iu]:9985,[as]:9987};function j(R,M,O){if(O?(s.texParameteri(R,10242,xe[M.wrapS]),s.texParameteri(R,10243,xe[M.wrapT]),(R===32879||R===35866)&&s.texParameteri(R,32882,xe[M.wrapR]),s.texParameteri(R,10240,Y[M.magFilter]),s.texParameteri(R,10241,Y[M.minFilter])):(s.texParameteri(R,10242,33071),s.texParameteri(R,10243,33071),(R===32879||R===35866)&&s.texParameteri(R,32882,33071),(M.wrapS!==$t||M.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,10240,U(M.magFilter)),s.texParameteri(R,10241,U(M.minFilter)),M.minFilter!==Ct&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.type===en&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Rn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ke(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",L));const Z=M.source;let H=m.get(Z);H===void 0&&(H={},m.set(Z,H));const ue=N(M);if(ue!==R.__cacheKey){H[ue]===void 0&&(H[ue]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),H[ue].usedTimes++;const Ae=H[R.__cacheKey];Ae!==void 0&&(H[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(M)),R.__cacheKey=ue,R.__webglTexture=H[ue].texture}return O}function ge(R,M,O){let Z=3553;M.isDataArrayTexture&&(Z=35866),M.isData3DTexture&&(Z=32879);const H=ke(R,M),ue=M.source;if(t.activeTexture(33984+O),t.bindTexture(Z,R.__webglTexture),ue.version!==ue.__currentVersion||H===!0){s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const Ae=S(M)&&v(M.image)===!1;let T=y(M.image,Ae,!1,u);T=Oe(M,T);const te=v(T)||a,de=r.convert(M.format,M.encoding);let pe=r.convert(M.type),D=x(M.internalFormat,de,pe,M.encoding,M.isVideoTexture);j(Z,M,te);let le;const he=M.mipmaps,Ce=a&&M.isVideoTexture!==!0,ye=ue.__currentVersion===void 0||H===!0,Te=E(M,T,te);if(M.isDepthTexture)D=6402,a?M.type===en?D=36012:M.type===$n?D=33190:M.type===Pi?D=35056:D=33189:M.type===en&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ti&&D===6402&&M.type!==ql&&M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$n,pe=r.convert(M.type)),M.format===Oi&&D===6402&&(D=34041,M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pi,pe=r.convert(M.type))),ye&&(Ce?t.texStorage2D(3553,1,D,T.width,T.height):t.texImage2D(3553,0,D,T.width,T.height,0,de,pe,null));else if(M.isDataTexture)if(he.length>0&&te){Ce&&ye&&t.texStorage2D(3553,Te,D,he[0].width,he[0].height);for(let ce=0,Fe=he.length;ce<Fe;ce++)le=he[ce],Ce?t.texSubImage2D(3553,ce,0,0,le.width,le.height,de,pe,le.data):t.texImage2D(3553,ce,D,le.width,le.height,0,de,pe,le.data);M.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Te,D,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,de,pe,T.data)):t.texImage2D(3553,0,D,T.width,T.height,0,de,pe,T.data);else if(M.isCompressedTexture){Ce&&ye&&t.texStorage2D(3553,Te,D,he[0].width,he[0].height);for(let ce=0,Fe=he.length;ce<Fe;ce++)le=he[ce],M.format!==It?de!==null?Ce?t.compressedTexSubImage2D(3553,ce,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(3553,ce,D,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,ce,0,0,le.width,le.height,de,pe,le.data):t.texImage2D(3553,ce,D,le.width,le.height,0,de,pe,le.data)}else if(M.isDataArrayTexture)Ce?(ye&&t.texStorage3D(35866,Te,D,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,de,pe,T.data)):t.texImage3D(35866,0,D,T.width,T.height,T.depth,0,de,pe,T.data);else if(M.isData3DTexture)Ce?(ye&&t.texStorage3D(32879,Te,D,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,de,pe,T.data)):t.texImage3D(32879,0,D,T.width,T.height,T.depth,0,de,pe,T.data);else if(M.isFramebufferTexture){if(ye)if(Ce)t.texStorage2D(3553,Te,D,T.width,T.height);else{let ce=T.width,Fe=T.height;for(let qe=0;qe<Te;qe++)t.texImage2D(3553,qe,D,ce,Fe,0,de,pe,null),ce>>=1,Fe>>=1}}else if(he.length>0&&te){Ce&&ye&&t.texStorage2D(3553,Te,D,he[0].width,he[0].height);for(let ce=0,Fe=he.length;ce<Fe;ce++)le=he[ce],Ce?t.texSubImage2D(3553,ce,0,0,de,pe,le):t.texImage2D(3553,ce,D,de,pe,le);M.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Te,D,T.width,T.height),t.texSubImage2D(3553,0,0,0,de,pe,T)):t.texImage2D(3553,0,D,de,pe,T);b(M,te)&&P(Z),ue.__currentVersion=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,O){if(M.image.length!==6)return;const Z=ke(R,M),H=M.source;if(t.activeTexture(33984+O),t.bindTexture(34067,R.__webglTexture),H.version!==H.__currentVersion||Z===!0){s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ae=M.image[0]&&M.image[0].isDataTexture,T=[];for(let ce=0;ce<6;ce++)!ue&&!Ae?T[ce]=y(M.image[ce],!1,!0,c):T[ce]=Ae?M.image[ce].image:M.image[ce],T[ce]=Oe(M,T[ce]);const te=T[0],de=v(te)||a,pe=r.convert(M.format,M.encoding),D=r.convert(M.type),le=x(M.internalFormat,pe,D,M.encoding),he=a&&M.isVideoTexture!==!0,Ce=H.__currentVersion===void 0||Z===!0;let ye=E(M,te,de);j(34067,M,de);let Te;if(ue){he&&Ce&&t.texStorage2D(34067,ye,le,te.width,te.height);for(let ce=0;ce<6;ce++){Te=T[ce].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const qe=Te[Fe];M.format!==It?pe!==null?he?t.compressedTexSubImage2D(34069+ce,Fe,0,0,qe.width,qe.height,pe,qe.data):t.compressedTexImage2D(34069+ce,Fe,le,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ce,Fe,0,0,qe.width,qe.height,pe,D,qe.data):t.texImage2D(34069+ce,Fe,le,qe.width,qe.height,0,pe,D,qe.data)}}}else{Te=M.mipmaps,he&&Ce&&(Te.length>0&&ye++,t.texStorage2D(34067,ye,le,T[0].width,T[0].height));for(let ce=0;ce<6;ce++)if(Ae){he?t.texSubImage2D(34069+ce,0,0,0,T[ce].width,T[ce].height,pe,D,T[ce].data):t.texImage2D(34069+ce,0,le,T[ce].width,T[ce].height,0,pe,D,T[ce].data);for(let Fe=0;Fe<Te.length;Fe++){const Ye=Te[Fe].image[ce].image;he?t.texSubImage2D(34069+ce,Fe+1,0,0,Ye.width,Ye.height,pe,D,Ye.data):t.texImage2D(34069+ce,Fe+1,le,Ye.width,Ye.height,0,pe,D,Ye.data)}}else{he?t.texSubImage2D(34069+ce,0,0,0,pe,D,T[ce]):t.texImage2D(34069+ce,0,le,pe,D,T[ce]);for(let Fe=0;Fe<Te.length;Fe++){const qe=Te[Fe];he?t.texSubImage2D(34069+ce,Fe+1,0,0,pe,D,qe.image[ce]):t.texImage2D(34069+ce,Fe+1,le,pe,D,qe.image[ce])}}}b(M,de)&&P(34067),H.__currentVersion=H.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _e(R,M,O,Z,H){const ue=r.convert(O.format,O.encoding),Ae=r.convert(O.type),T=x(O.internalFormat,ue,Ae,O.encoding);n.get(M).__hasExternalTextures||(H===32879||H===35866?t.texImage3D(H,0,T,M.width,M.height,M.depth,0,ue,Ae,null):t.texImage2D(H,0,T,M.width,M.height,0,ue,Ae,null)),t.bindFramebuffer(36160,R),we(M)?f.framebufferTexture2DMultisampleEXT(36160,Z,H,n.get(O).__webglTexture,0,Ee(M)):s.framebufferTexture2D(36160,Z,H,n.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(R,M,O){if(s.bindRenderbuffer(36161,R),M.depthBuffer&&!M.stencilBuffer){let Z=33189;if(O||we(M)){const H=M.depthTexture;H&&H.isDepthTexture&&(H.type===en?Z=36012:H.type===$n&&(Z=33190));const ue=Ee(M);we(M)?f.renderbufferStorageMultisampleEXT(36161,ue,Z,M.width,M.height):s.renderbufferStorageMultisample(36161,ue,Z,M.width,M.height)}else s.renderbufferStorage(36161,Z,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,R)}else if(M.depthBuffer&&M.stencilBuffer){const Z=Ee(M);O&&we(M)===!1?s.renderbufferStorageMultisample(36161,Z,35056,M.width,M.height):we(M)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,R)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let H=0;H<Z.length;H++){const ue=Z[H],Ae=r.convert(ue.format,ue.encoding),T=r.convert(ue.type),te=x(ue.internalFormat,Ae,T,ue.encoding),de=Ee(M);O&&we(M)===!1?s.renderbufferStorageMultisample(36161,de,te,M.width,M.height):we(M)?f.renderbufferStorageMultisampleEXT(36161,de,te,M.width,M.height):s.renderbufferStorage(36161,te,M.width,M.height)}}s.bindRenderbuffer(36161,null)}function $(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),I(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,H=Ee(M);if(M.depthTexture.format===ti)we(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,H):s.framebufferTexture2D(36160,36096,3553,Z,0);else if(M.depthTexture.format===Oi)we(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,H):s.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function J(R){const M=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");$(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Pe(M.__webglDepthbuffer[Z],R,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Pe(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function oe(R,M,O){const Z=n.get(R);M!==void 0&&_e(Z.__webglFramebuffer,R,R.texture,36064,3553),O!==void 0&&J(R)}function be(R){const M=R.texture,O=n.get(R),Z=n.get(M);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,o.memory.textures++);const H=R.isWebGLCubeRenderTarget===!0,ue=R.isWebGLMultipleRenderTargets===!0,Ae=v(R)||a;if(H){O.__webglFramebuffer=[];for(let T=0;T<6;T++)O.__webglFramebuffer[T]=s.createFramebuffer()}else{if(O.__webglFramebuffer=s.createFramebuffer(),ue)if(i.drawBuffers){const T=R.texture;for(let te=0,de=T.length;te<de;te++){const pe=n.get(T[te]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&we(R)===!1){const T=ue?M:[M];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let te=0;te<T.length;te++){const de=T[te];O.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(36161,O.__webglColorRenderbuffer[te]);const pe=r.convert(de.format,de.encoding),D=r.convert(de.type),le=x(de.internalFormat,pe,D,de.encoding),he=Ee(R);s.renderbufferStorageMultisample(36161,he,le,R.width,R.height),s.framebufferRenderbuffer(36160,36064+te,36161,O.__webglColorRenderbuffer[te])}s.bindRenderbuffer(36161,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(H){t.bindTexture(34067,Z.__webglTexture),j(34067,M,Ae);for(let T=0;T<6;T++)_e(O.__webglFramebuffer[T],R,M,36064,34069+T);b(M,Ae)&&P(34067),t.unbindTexture()}else if(ue){const T=R.texture;for(let te=0,de=T.length;te<de;te++){const pe=T[te],D=n.get(pe);t.bindTexture(3553,D.__webglTexture),j(3553,pe,Ae),_e(O.__webglFramebuffer,R,pe,36064+te,3553),b(pe,Ae)&&P(3553)}t.unbindTexture()}else{let T=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?T=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,Z.__webglTexture),j(T,M,Ae),_e(O.__webglFramebuffer,R,M,36064,T),b(M,Ae)&&P(T),t.unbindTexture()}R.depthBuffer&&J(R)}function me(R){const M=v(R)||a,O=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Z=0,H=O.length;Z<H;Z++){const ue=O[Z];if(b(ue,M)){const Ae=R.isWebGLCubeRenderTarget?34067:3553,T=n.get(ue).__webglTexture;t.bindTexture(Ae,T),P(Ae),t.unbindTexture()}}}function De(R){if(a&&R.samples>0&&we(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],O=R.width,Z=R.height;let H=16384;const ue=[],Ae=R.stencilBuffer?33306:36096,T=n.get(R),te=R.isWebGLMultipleRenderTargets===!0;if(te)for(let de=0;de<M.length;de++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let de=0;de<M.length;de++){ue.push(36064+de),R.depthBuffer&&ue.push(Ae);const pe=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(pe===!1&&(R.depthBuffer&&(H|=256),R.stencilBuffer&&(H|=1024)),te&&s.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[de]),pe===!0&&(s.invalidateFramebuffer(36008,[Ae]),s.invalidateFramebuffer(36009,[Ae])),te){const D=n.get(M[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,D,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,H,9728),d&&s.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),te)for(let de=0;de<M.length;de++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,T.__webglColorRenderbuffer[de]);const pe=n.get(M[de]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,pe,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Ee(R){return Math.min(h,R.samples)}function we(R){const M=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ke(R){const M=o.render.frame;g.get(R)!==M&&(g.set(R,M),R.update())}function Oe(R,M){const O=R.encoding,Z=R.format,H=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===fo||O!==gn&&(O===ot?a===!1?e.has("EXT_sRGB")===!0&&Z===It?(R.format=fo,R.minFilter=Ut,R.generateMipmaps=!1):M=$l.sRGBToLinear(M):(Z!==It||H!==Bt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),M}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=I,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=oe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=we}function Bm(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Bt)return 5121;if(r===Uu)return 32819;if(r===Bu)return 32820;if(r===Ou)return 5120;if(r===Fu)return 5122;if(r===ql)return 5123;if(r===Nu)return 5124;if(r===$n)return 5125;if(r===en)return 5126;if(r===Rn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zu)return 6406;if(r===It)return 6408;if(r===Vu)return 6409;if(r===Gu)return 6410;if(r===ti)return 6402;if(r===Oi)return 34041;if(r===Xi)return 6403;if(r===ku)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===fo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hu)return 36244;if(r===qi)return 33319;if(r===Wu)return 33320;if(r===Ku)return 36249;if(r===Bs||r===mr||r===gr||r===zs)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===$o||r===ao||r===ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ao)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lo||r===co)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lo)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===co)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uo||r===ta||r===na||r===ia||r===sa||r===ra||r===oa||r===aa||r===la||r===ca||r===ua||r===ha||r===fa||r===da)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===uo)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ta)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===na)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ia)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ra)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===aa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===la)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ca)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ua)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ha)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===da)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ho)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ho)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Pi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class zm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const w=new Zi;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[p.jointName]=w,c.add(w)}const _=c.joints[p.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(km)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Vm extends zt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ti&&(n=$n),n===void 0&&u===Oi&&(n=Pi),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Gm extends si{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],w=[],y=new Wt;y.layers.enable(1),y.viewport=new ht;const v=new Wt;v.layers.enable(2),v.viewport=new ht;const S=[y,v],b=new zm;b.layers.enable(1),b.layers.enable(2);let P=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let I=_[N];return I===void 0&&(I=new jr,_[N]=I),I.getTargetRaySpace()},this.getControllerGrip=function(N){let I=_[N];return I===void 0&&(I=new jr,_[N]=I),I.getGripSpace()},this.getHand=function(N){let I=_[N];return I===void 0&&(I=new jr,_[N]=I),I.getHandSpace()};function E(N){const I=w.indexOf(N.inputSource);if(I===-1)return;const ne=_[I];ne!==void 0&&ne.dispatchEvent({type:N.type,data:N.inputSource})}function U(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",L);for(let N=0;N<_.length;N++){const I=w[N];I!==null&&(w[N]=null,_[N].disconnect(I))}P=null,x=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,m=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",U),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,I),i.updateRenderState({baseLayer:f}),m=new Gn(f.framebufferWidth,f.framebufferHeight,{format:It,type:Bt,encoding:e.outputEncoding})}else{let I=null,ne=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,I=g.stencil?Oi:ti,ne=g.stencil?Pi:$n);const re={colorFormat:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(re),i.updateRenderState({layers:[h]}),m=new Gn(h.textureWidth,h.textureHeight,{format:It,type:Bt,depthTexture:new Vm(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const xe=e.properties.get(m);xe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(N){for(let I=0;I<N.removed.length;I++){const ne=N.removed[I],Q=w.indexOf(ne);Q>=0&&(w[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:ne}))}for(let I=0;I<N.added.length;I++){const ne=N.added[I];let Q=w.indexOf(ne);if(Q===-1){for(let xe=0;xe<_.length;xe++)if(xe>=w.length){w.push(ne),Q=xe;break}else if(w[xe]===null){w[xe]=ne,Q=xe;break}if(Q===-1)break}const re=_[Q];re&&re.dispatchEvent({type:"connected",data:ne})}}const q=new F,B=new F;function C(N,I,ne){q.setFromMatrixPosition(I.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const Q=q.distanceTo(B),re=I.projectionMatrix.elements,xe=ne.projectionMatrix.elements,Y=re[14]/(re[10]-1),j=re[14]/(re[10]+1),ke=(re[9]+1)/re[5],ge=(re[9]-1)/re[5],Le=(re[8]-1)/re[0],_e=(xe[8]+1)/xe[0],Pe=Y*Le,$=Y*_e,J=Q/(-Le+_e),oe=J*-Le;I.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(oe),N.translateZ(J),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const be=Y+J,me=j+J,De=Pe-oe,Ee=$+(Q-oe),we=ke*j/me*be,Ke=ge*j/me*be;N.projectionMatrix.makePerspective(De,Ee,we,Ke,be,me)}function G(N,I){I===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(I.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;b.near=v.near=y.near=N.near,b.far=v.far=y.far=N.far,(P!==b.near||x!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,x=b.far);const I=N.parent,ne=b.cameras;G(b,I);for(let re=0;re<ne.length;re++)G(ne[re],I);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),N.position.copy(b.position),N.quaternion.copy(b.quaternion),N.scale.copy(b.scale),N.matrix.copy(b.matrix),N.matrixWorld.copy(b.matrixWorld);const Q=N.children;for(let re=0,xe=Q.length;re<xe;re++)Q[re].updateMatrixWorld(!0);ne.length===2?C(b,y,v):b.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let z=null;function V(N,I){if(c=I.getViewerPose(l||o),d=I,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Q=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,Q=!0);for(let re=0;re<ne.length;re++){const xe=ne[re];let Y=null;if(f!==null)Y=f.getViewport(xe);else{const ke=u.getViewSubImage(h,xe);Y=ke.viewport,re===0&&(e.setRenderTargetTextures(m,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(m))}let j=S[re];j===void 0&&(j=new Wt,j.layers.enable(re),j.viewport=new ht,S[re]=j),j.matrix.fromArray(xe.transform.matrix),j.projectionMatrix.fromArray(xe.projectionMatrix),j.viewport.set(Y.x,Y.y,Y.width,Y.height),re===0&&b.matrix.copy(j.matrix),Q===!0&&b.cameras.push(j)}}for(let ne=0;ne<_.length;ne++){const Q=w[ne],re=_[ne];Q!==null&&re!==void 0&&re.update(Q,I,l||o)}z&&z(N,I),d=null}const W=new lc;W.setAnimationLoop(V),this.setAnimationLoop=function(N){z=N},this.dispose=function(){}}}function Hm(s,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,w,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.iridescenceMap?w=m.iridescenceMap:m.iridescenceThicknessMap?w=m.iridescenceThicknessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularColorMap?w=m.specularColorMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap?w=m.thicknessMap:m.sheenColorMap?w=m.sheenColorMap:m.sheenRoughnessMap&&(w=m.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=w*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===tn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Wm(){const s=ns("canvas");return s.style.display="block",s}function pc(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Wm(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gn,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,_=0,w=0,y=null,v=-1,S=null;const b=new ht,P=new ht;let x=null,E=e.width,U=e.height,L=1,q=null,B=null;const C=new ht(0,0,E,U),G=new ht(0,0,E,U);let z=!1;const V=new er;let W=!1,N=!1,I=null;const ne=new at,Q=new fe,re=new F,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return y===null?L:1}let j=t;function ke(A,k){for(let X=0;X<A.length;X++){const K=A[X],ee=e.getContext(K,k);if(ee!==null)return ee}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",he,!1),j===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),j=ke(k,A),j===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Le,_e,Pe,$,J,oe,be,me,De,Ee,we,Ke,Oe,R,M,O,Z,H,ue,Ae,T,te;function de(){ge=new tp(j),Le=new Yd(j,ge,s),ge.init(Le),T=new Bm(j,ge,Le),_e=new Nm(j,ge,Le),Pe=new sp,$=new bm,J=new Um(j,ge,_e,$,Le,T,Pe),oe=new Jd(p),be=new ep(p),me=new mh(j,Le),te=new Xd(j,ge,me,Le),De=new np(j,me,Pe,te),Ee=new lp(j,De,me,Pe),H=new ap(j,Le,J),M=new Zd($),we=new wm(p,oe,be,ge,Le,te,M),Ke=new Hm(p,$),Oe=new Mm,R=new Lm(ge,Le),Z=new jd(p,oe,_e,Ee,u,o),O=new Fm(p,Ee,Le),ue=new qd(j,ge,Pe,Le),Ae=new ip(j,ge,Pe,Le),Pe.programs=we.programs,p.capabilities=Le,p.extensions=ge,p.properties=$,p.renderLists=Oe,p.shadowMap=O,p.state=_e,p.info=Pe}de();const pe=new Gm(p,j);this.xr=pe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(E,U,!1))},this.getSize=function(A){return A.set(E,U)},this.setSize=function(A,k,X){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,U=k,e.width=Math.floor(A*L),e.height=Math.floor(k*L),X!==!1&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(E*L,U*L).floor()},this.setDrawingBufferSize=function(A,k,X){E=A,U=k,L=X,e.width=Math.floor(A*X),e.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,k,X,K){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,k,X,K),_e.viewport(b.copy(C).multiplyScalar(L).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,k,X,K){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,k,X,K),_e.scissor(P.copy(G).multiplyScalar(L).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){_e.setScissorTest(z=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(A=!0,k=!0,X=!0){let K=0;A&&(K|=16384),k&&(K|=256),X&&(K|=1024),j.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",he,!1),Oe.dispose(),R.dispose(),$.dispose(),oe.dispose(),be.dispose(),Ee.dispose(),te.dispose(),we.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",qe),pe.removeEventListener("sessionend",Ye),I&&(I.dispose(),I=null),pt.stop()};function D(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Pe.autoReset,k=O.enabled,X=O.autoUpdate,K=O.needsUpdate,ee=O.type;de(),Pe.autoReset=A,O.enabled=k,O.autoUpdate=X,O.needsUpdate=K,O.type=ee}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ce(A){const k=A.target;k.removeEventListener("dispose",Ce),ye(k)}function ye(A){Te(A),$.remove(A)}function Te(A){const k=$.get(A).programs;k!==void 0&&(k.forEach(function(X){we.releaseProgram(X)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,K,ee,Ue){k===null&&(k=xe);const Ve=ee.isMesh&&ee.matrixWorld.determinant()<0,He=Kc(A,k,X,K,ee);_e.setMaterial(K,Ve);let Ge=X.index;const it=X.attributes.position;if(Ge===null){if(it===void 0||it.count===0)return}else if(Ge.count===0)return;let je=1;K.wireframe===!0&&(Ge=De.getWireframeAttribute(X),je=2),te.setup(ee,K,He,X,Ge);let Ze,ft=ue;Ge!==null&&(Ze=me.get(Ge),ft=Ae,ft.setIndex(Ze));const Kn=Ge!==null?Ge.count:it.count,oi=X.drawRange.start*je,ai=X.drawRange.count*je,cn=Ue!==null?Ue.start*je:0,nt=Ue!==null?Ue.count*je:1/0,li=Math.max(oi,cn),mt=Math.min(Kn,oi+ai,cn+nt)-1,un=Math.max(0,mt-li+1);if(un!==0){if(ee.isMesh)K.wireframe===!0?(_e.setLineWidth(K.wireframeLinewidth*Y()),ft.setMode(1)):ft.setMode(4);else if(ee.isLine){let In=K.linewidth;In===void 0&&(In=1),_e.setLineWidth(In*Y()),ee.isLineSegments?ft.setMode(1):ee.isLineLoop?ft.setMode(2):ft.setMode(3)}else ee.isPoints?ft.setMode(0):ee.isSprite&&ft.setMode(4);if(ee.isInstancedMesh)ft.renderInstances(li,un,ee.count);else if(X.isInstancedBufferGeometry){const In=Math.min(X.instanceCount,X._maxInstanceCount);ft.renderInstances(li,un,In)}else ft.render(li,un)}},this.compile=function(A,k){f=R.get(A),f.init(),g.push(f),A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(p.physicallyCorrectLights),A.traverse(function(X){const K=X.material;if(K)if(Array.isArray(K))for(let ee=0;ee<K.length;ee++){const Ue=K[ee];ur(Ue,A,X)}else ur(K,A,X)}),g.pop(),f=null};let ce=null;function Fe(A){ce&&ce(A)}function qe(){pt.stop()}function Ye(){pt.start()}const pt=new lc;pt.setAnimationLoop(Fe),typeof self!="undefined"&&pt.setContext(self),this.setAnimationLoop=function(A){ce=A,pe.setAnimationLoop(A),A===null?pt.stop():pt.start()},pe.addEventListener("sessionstart",qe),pe.addEventListener("sessionend",Ye),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,k,y),f=R.get(A,g.length),f.init(),g.push(f),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(ne),N=this.localClippingEnabled,W=M.init(this.clippingPlanes,N,k),h=Oe.get(A,d.length),h.init(),d.push(h),Pt(A,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(q,B),W===!0&&M.beginShadows();const X=f.state.shadowsArray;if(O.render(X,A,k),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,A),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const K=k.cameras;for(let ee=0,Ue=K.length;ee<Ue;ee++){const Ve=K[ee];zi(h,A,Ve,Ve.viewport)}}else zi(h,A,k);y!==null&&(J.updateMultisampleRenderTarget(y),J.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,k),te.resetDefaultState(),v=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Pt(A,k,X,K){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){K&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const Ve=Ee.update(A),He=A.material;He.visible&&h.push(A,Ve,He,X,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Pe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Pe.render.frame),!A.frustumCulled||V.intersectsObject(A))){K&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const Ve=Ee.update(A),He=A.material;if(Array.isArray(He)){const Ge=Ve.groups;for(let it=0,je=Ge.length;it<je;it++){const Ze=Ge[it],ft=He[Ze.materialIndex];ft&&ft.visible&&h.push(A,Ve,ft,X,re.z,Ze)}}else He.visible&&h.push(A,Ve,He,X,re.z,null)}}const Ue=A.children;for(let Ve=0,He=Ue.length;Ve<He;Ve++)Pt(Ue[Ve],k,X,K)}function zi(A,k,X,K){const ee=A.opaque,Ue=A.transmissive,Ve=A.transparent;f.setupLightsView(X),Ue.length>0&&fs(ee,k,X),K&&_e.viewport(b.copy(K)),ee.length>0&&Wn(ee,k,X),Ue.length>0&&Wn(Ue,k,X),Ve.length>0&&Wn(Ve,k,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function fs(A,k,X){const K=Le.isWebGL2;I===null&&(I=new Gn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Rn:Bt,minFilter:as,samples:K&&r===!0?4:0})),p.getDrawingBufferSize(Q),K?I.setSize(Q.x,Q.y):I.setSize(po(Q.x),po(Q.y));const ee=p.getRenderTarget();p.setRenderTarget(I),p.clear();const Ue=p.toneMapping;p.toneMapping=pn,Wn(A,k,X),p.toneMapping=Ue,J.updateMultisampleRenderTarget(I),J.updateRenderTargetMipmap(I),p.setRenderTarget(ee)}function Wn(A,k,X){const K=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Ue=A.length;ee<Ue;ee++){const Ve=A[ee],He=Ve.object,Ge=Ve.geometry,it=K===null?Ve.material:K,je=Ve.group;He.layers.test(X.layers)&&Vt(He,k,X,Ge,it,je)}}function Vt(A,k,X,K,ee,Ue){A.onBeforeRender(p,k,X,K,ee,Ue),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(p,k,X,K,A,Ue),ee.transparent===!0&&ee.side===ii?(ee.side=tn,ee.needsUpdate=!0,p.renderBufferDirect(X,k,K,ee,A,Ue),ee.side=ts,ee.needsUpdate=!0,p.renderBufferDirect(X,k,K,ee,A,Ue),ee.side=ii):p.renderBufferDirect(X,k,K,ee,A,Ue),A.onAfterRender(p,k,X,K,ee,Ue)}function ur(A,k,X){k.isScene!==!0&&(k=xe);const K=$.get(A),ee=f.state.lights,Ue=f.state.shadowsArray,Ve=ee.state.version,He=we.getParameters(A,ee.state,Ue,k,X),Ge=we.getProgramCacheKey(He);let it=K.programs;K.environment=A.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(A.isMeshStandardMaterial?be:oe).get(A.envMap||K.environment),it===void 0&&(A.addEventListener("dispose",Ce),it=new Map,K.programs=it);let je=it.get(Ge);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===Ve)return Vo(A,He),je}else He.uniforms=we.getUniforms(A),A.onBuild(X,He,p),A.onBeforeCompile(He,p),je=we.acquireProgram(He,Ge),it.set(Ge,je),K.uniforms=He.uniforms;const Ze=K.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=M.uniform),Vo(A,He),K.needsLights=Xc(A),K.lightsStateVersion=Ve,K.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMap.value=ee.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotShadowMap.value=ee.state.spotShadowMap,Ze.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ze.pointShadowMap.value=ee.state.pointShadowMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ft=je.getUniforms(),Kn=Vs.seqWithValue(ft.seq,Ze);return K.currentProgram=je,K.uniformsList=Kn,je}function Vo(A,k){const X=$.get(A);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Kc(A,k,X,K,ee){k.isScene!==!0&&(k=xe),J.resetTextureUnits();const Ue=k.fog,Ve=K.isMeshStandardMaterial?k.environment:null,He=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:gn,Ge=(K.isMeshStandardMaterial?be:oe).get(K.envMap||Ve),it=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!K.normalMap&&!!X.attributes.tangent,Ze=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,Kn=!!X.morphAttributes.color,oi=K.toneMapped?p.toneMapping:pn,ai=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,cn=ai!==void 0?ai.length:0,nt=$.get(K),li=f.state.lights;if(W===!0&&(N===!0||A!==S)){const hn=A===S&&K.id===v;M.setState(K,A,hn)}let mt=!1;K.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==li.state.version||nt.outputEncoding!==He||ee.isInstancedMesh&&nt.instancing===!1||!ee.isInstancedMesh&&nt.instancing===!0||ee.isSkinnedMesh&&nt.skinning===!1||!ee.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ge||K.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==M.numPlanes||nt.numIntersection!==M.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==je||nt.morphTargets!==Ze||nt.morphNormals!==ft||nt.morphColors!==Kn||nt.toneMapping!==oi||Le.isWebGL2===!0&&nt.morphTargetsCount!==cn)&&(mt=!0):(mt=!0,nt.__version=K.version);let un=nt.currentProgram;mt===!0&&(un=ur(K,k,ee));let In=!1,ki=!1,hr=!1;const Dt=un.getUniforms(),Vi=nt.uniforms;if(_e.useProgram(un.program)&&(In=!0,ki=!0,hr=!0),K.id!==v&&(v=K.id,ki=!0),In||S!==A){if(Dt.setValue(j,"projectionMatrix",A.projectionMatrix),Le.logarithmicDepthBuffer&&Dt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,ki=!0,hr=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const hn=Dt.map.cameraPosition;hn!==void 0&&hn.setValue(j,re.setFromMatrixPosition(A.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ee.isSkinnedMesh)&&Dt.setValue(j,"viewMatrix",A.matrixWorldInverse)}if(ee.isSkinnedMesh){Dt.setOptional(j,ee,"bindMatrix"),Dt.setOptional(j,ee,"bindMatrixInverse");const hn=ee.skeleton;hn&&(Le.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Dt.setValue(j,"boneTexture",hn.boneTexture,J),Dt.setValue(j,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fr=X.morphAttributes;return(fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&Le.isWebGL2===!0)&&H.update(ee,X,K,un),(ki||nt.receiveShadow!==ee.receiveShadow)&&(nt.receiveShadow=ee.receiveShadow,Dt.setValue(j,"receiveShadow",ee.receiveShadow)),ki&&(Dt.setValue(j,"toneMappingExposure",p.toneMappingExposure),nt.needsLights&&jc(Vi,hr),Ue&&K.fog===!0&&Ke.refreshFogUniforms(Vi,Ue),Ke.refreshMaterialUniforms(Vi,K,L,U,I),Vs.upload(j,nt.uniformsList,Vi,J)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vs.upload(j,nt.uniformsList,Vi,J),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(j,"center",ee.center),Dt.setValue(j,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(j,"normalMatrix",ee.normalMatrix),Dt.setValue(j,"modelMatrix",ee.matrixWorld),un}function jc(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Xc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,k,X){$.get(A.texture).__webglTexture=k,$.get(A.depthTexture).__webglTexture=X;const K=$.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const X=$.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){y=A,_=k,w=X;let K=!0;if(A){const Ge=$.get(A);Ge.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),K=!1):Ge.__webglFramebuffer===void 0?J.setupRenderTarget(A):Ge.__hasExternalTextures&&J.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture)}let ee=null,Ue=!1,Ve=!1;if(A){const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture)&&(Ve=!0);const it=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ee=it[k],Ue=!0):Le.isWebGL2&&A.samples>0&&J.useMultisampledRTT(A)===!1?ee=$.get(A).__webglMultisampledFramebuffer:ee=it,b.copy(A.viewport),P.copy(A.scissor),x=A.scissorTest}else b.copy(C).multiplyScalar(L).floor(),P.copy(G).multiplyScalar(L).floor(),x=z;if(_e.bindFramebuffer(36160,ee)&&Le.drawBuffers&&K&&_e.drawBuffers(A,ee),_e.viewport(b),_e.scissor(P),_e.setScissorTest(x),Ue){const Ge=$.get(A.texture);j.framebufferTexture2D(36160,36064,34069+k,Ge.__webglTexture,X)}else if(Ve){const Ge=$.get(A.texture),it=k||0;j.framebufferTextureLayer(36160,36064,Ge.__webglTexture,X||0,it)}v=-1},this.readRenderTargetPixels=function(A,k,X,K,ee,Ue,Ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He){_e.bindFramebuffer(36160,He);try{const Ge=A.texture,it=Ge.format,je=Ge.type;if(it!==It&&T.convert(it)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===Rn&&(ge.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ge.has("EXT_color_buffer_float"));if(je!==Bt&&T.convert(je)!==j.getParameter(35738)&&!(je===en&&(Le.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-K&&X>=0&&X<=A.height-ee&&j.readPixels(k,X,K,ee,T.convert(it),T.convert(je),Ue)}finally{const Ge=y!==null?$.get(y).__webglFramebuffer:null;_e.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(A,k,X=0){const K=Math.pow(2,-X),ee=Math.floor(k.image.width*K),Ue=Math.floor(k.image.height*K);J.setTexture2D(k,0),j.copyTexSubImage2D(3553,X,0,0,A.x,A.y,ee,Ue),_e.unbindTexture()},this.copyTextureToTexture=function(A,k,X,K=0){const ee=k.image.width,Ue=k.image.height,Ve=T.convert(X.format),He=T.convert(X.type);J.setTexture2D(X,0),j.pixelStorei(37440,X.flipY),j.pixelStorei(37441,X.premultiplyAlpha),j.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?j.texSubImage2D(3553,K,A.x,A.y,ee,Ue,Ve,He,k.image.data):k.isCompressedTexture?j.compressedTexSubImage2D(3553,K,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ve,k.mipmaps[0].data):j.texSubImage2D(3553,K,A.x,A.y,Ve,He,k.image),K===0&&X.generateMipmaps&&j.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X,K,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=A.max.x-A.min.x+1,Ve=A.max.y-A.min.y+1,He=A.max.z-A.min.z+1,Ge=T.convert(K.format),it=T.convert(K.type);let je;if(K.isData3DTexture)J.setTexture3D(K,0),je=32879;else if(K.isDataArrayTexture)J.setTexture2DArray(K,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,K.flipY),j.pixelStorei(37441,K.premultiplyAlpha),j.pixelStorei(3317,K.unpackAlignment);const Ze=j.getParameter(3314),ft=j.getParameter(32878),Kn=j.getParameter(3316),oi=j.getParameter(3315),ai=j.getParameter(32877),cn=X.isCompressedTexture?X.mipmaps[0]:X.image;j.pixelStorei(3314,cn.width),j.pixelStorei(32878,cn.height),j.pixelStorei(3316,A.min.x),j.pixelStorei(3315,A.min.y),j.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?j.texSubImage3D(je,ee,k.x,k.y,k.z,Ue,Ve,He,Ge,it,cn.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(je,ee,k.x,k.y,k.z,Ue,Ve,He,Ge,cn.data)):j.texSubImage3D(je,ee,k.x,k.y,k.z,Ue,Ve,He,Ge,it,cn),j.pixelStorei(3314,Ze),j.pixelStorei(32878,ft),j.pixelStorei(3316,Kn),j.pixelStorei(3315,oi),j.pixelStorei(32877,ai),ee===0&&K.generateMipmaps&&j.generateMipmap(je),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){_=0,w=0,y=null,_e.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Km extends pc{}Km.prototype.isWebGL1Renderer=!0;class jm extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Xm extends zt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ct,u=Ct,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qm extends zt{constructor(e,t,n,i,r,o,a,l,c,u,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new fe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],r=[],o=[],a=new F,l=new at;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Tt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Tt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ao extends vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new fe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ym extends Ao{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Is=new F,Xr=new Ro,qr=new Ro,Yr=new Ro;class Zm extends vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Is.subVectors(i[0],i[1]).add(i[0]),c=Is);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Is.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Xr.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,m),qr.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,m),Yr.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),qr.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Yr.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Xr.calc(l),qr.calc(l),Yr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function el(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Jm(s,e){const t=1-s;return t*t*e}function Qm(s,e){return 2*(1-s)*s*e}function $m(s,e){return s*s*e}function Ji(s,e,t,n){return Jm(s,e)+Qm(s,t)+$m(s,n)}function eg(s,e){const t=1-s;return t*t*t*e}function tg(s,e){const t=1-s;return 3*t*t*s*e}function ng(s,e){return 3*(1-s)*s*s*e}function ig(s,e){return s*s*s*e}function Qi(s,e,t,n,i){return eg(s,e)+tg(s,t)+ng(s,n)+ig(s,i)}class mc extends vn{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(e,i.x,r.x,o.x,a.x),Qi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sg extends vn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(e,i.x,r.x,o.x,a.x),Qi(e,i.y,r.y,o.y,a.y),Qi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Co extends vn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new fe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rg extends vn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends vn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(e,i.x,r.x,o.x),Ji(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class og extends vn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ji(e,i.x,r.x,o.x),Ji(e,i.y,r.y,o.y),Ji(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _c extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(el(a,l.x,c.x,u.x,h.x),el(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:Ym,CatmullRomCurve3:Zm,CubicBezierCurve:mc,CubicBezierCurve3:sg,EllipseCurve:Ao,LineCurve:Co,LineCurve3:rg,QuadraticBezierCurve:gc,QuadraticBezierCurve3:og,SplineCurve:_c});class ag extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Co(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vc[i.type]().fromJSON(i))}return this}}class tl extends ag{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Co(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new gc(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new mc(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _c(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Ao(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lo extends an{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new F,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}static fromJSON(e){return new Lo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gs extends tl{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new tl().fromJSON(i))}return this}}const lg={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=xc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=dg(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return is(r,o,t,a,l,d),o}};function xc(s,e,t,n,i){let r,o;if(i===Mg(s,e,t,n)>0)for(r=e;r<t;r+=n)o=nl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=nl(r,s[r],s[r+1],o);return o&&ir(o,o.next)&&(rs(o),o=o.next),o}function Hn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||ut(t.prev,t,t.next)===0)){if(rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function is(s,e,t,n,i,r,o){if(!s)return;!o&&r&&vg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ug(s,n,i,r):cg(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),rs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=hg(Hn(s),e,t),is(s,e,t,n,i,r,2)):o===2&&fg(s,e,t,n,i,r):is(Hn(s),e,t,n,i,r,1);break}}}function cg(s){const e=s.prev,t=s,n=s.next;if(ut(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Ri(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ut(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ug(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ut(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,u=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,h=go(a,l,e,t,n),f=go(c,u,e,t,n);let d=s.prevZ,g=s.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==s.prev&&d!==s.next&&Ri(i.x,i.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ut(d.prev,d,d.next)>=0||(d=d.prevZ,g!==s.prev&&g!==s.next&&Ri(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ut(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==s.prev&&d!==s.next&&Ri(i.x,i.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ut(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==s.prev&&g!==s.next&&Ri(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function hg(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ir(i,r)&&yc(i,n,n.next,r)&&ss(i,r)&&ss(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),rs(n),rs(n.next),n=s=r),n=n.next}while(n!==s);return Hn(n)}function fg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wg(o,a)){let l=wc(o,a);o=Hn(o,o.next),l=Hn(l,l.next),is(o,e,t,n,i,r),is(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function dg(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=xc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(yg(c));for(i.sort(pg),r=0;r<i.length;r++)mg(i[r],t),t=Hn(t,t.next);return t}function pg(s,e){return s.x-e.x}function mg(s,e){if(e=gg(s,e),e){const t=wc(e,s);Hn(e,e.next),Hn(t,t.next)}}function gg(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ri(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ss(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&_g(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function _g(s,e){return ut(s.prev,s,e.prev)<0&&ut(e.next,s,s.next)<0}function vg(s,e,t,n){let i=s;do i.z===null&&(i.z=go(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,xg(i)}function xg(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function go(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function yg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ri(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function wg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!bg(s,e)&&(ss(s,e)&&ss(e,s)&&Sg(s,e)&&(ut(s.prev,s,e.prev)||ut(s,e.prev,e))||ir(s,e)&&ut(s.prev,s,s.next)>0&&ut(e.prev,e,e.next)>0)}function ut(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ir(s,e){return s.x===e.x&&s.y===e.y}function yc(s,e,t,n){const i=Fs(ut(s,e,t)),r=Fs(ut(s,e,n)),o=Fs(ut(t,n,s)),a=Fs(ut(t,n,e));return!!(i!==r&&o!==a||i===0&&Os(s,t,e)||r===0&&Os(s,n,e)||o===0&&Os(t,s,n)||a===0&&Os(t,e,n))}function Os(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fs(s){return s>0?1:s<0?-1:0}function bg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&yc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ss(s,e){return ut(s.prev,s,s.next)<0?ut(s,e,s.next)>=0&&ut(s,s.prev,e)>=0:ut(s,e,s.prev)<0||ut(s,s.next,e)<0}function Sg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function wc(s,e){const t=new _o(s.i,s.x,s.y),n=new _o(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nl(s,e,t,n){const i=new _o(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _o(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class $i{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return $i.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];il(e),sl(n,e);let o=e.length;t.forEach(il);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,sl(n,t[l]);const a=lg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function il(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function sl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class es extends an{constructor(e=new Gs([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Tg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let y,v=!1,S,b,P,x;_&&(y=_.getSpacedPoints(u),v=!0,f=!1,S=_.computeFrenetFrames(u,!1),b=new F,P=new F,x=new F),f||(m=0,d=0,g=0,p=0);const E=a.extractPoints(c);let U=E.shape;const L=E.holes;if(!$i.isClockWise(U)){U=U.reverse();for(let $=0,J=L.length;$<J;$++){const oe=L[$];$i.isClockWise(oe)&&(L[$]=oe.reverse())}}const B=$i.triangulateShape(U,L),C=U;for(let $=0,J=L.length;$<J;$++){const oe=L[$];U=U.concat(oe)}function G($,J,oe){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(oe).add($)}const z=U.length,V=B.length;function W($,J,oe){let be,me,De;const Ee=$.x-J.x,we=$.y-J.y,Ke=oe.x-$.x,Oe=oe.y-$.y,R=Ee*Ee+we*we,M=Ee*Oe-we*Ke;if(Math.abs(M)>Number.EPSILON){const O=Math.sqrt(R),Z=Math.sqrt(Ke*Ke+Oe*Oe),H=J.x-we/O,ue=J.y+Ee/O,Ae=oe.x-Oe/Z,T=oe.y+Ke/Z,te=((Ae-H)*Oe-(T-ue)*Ke)/(Ee*Oe-we*Ke);be=H+Ee*te-$.x,me=ue+we*te-$.y;const de=be*be+me*me;if(de<=2)return new fe(be,me);De=Math.sqrt(de/2)}else{let O=!1;Ee>Number.EPSILON?Ke>Number.EPSILON&&(O=!0):Ee<-Number.EPSILON?Ke<-Number.EPSILON&&(O=!0):Math.sign(we)===Math.sign(Oe)&&(O=!0),O?(be=-we,me=Ee,De=Math.sqrt(R)):(be=Ee,me=we,De=Math.sqrt(R/2))}return new fe(be/De,me/De)}const N=[];for(let $=0,J=C.length,oe=J-1,be=$+1;$<J;$++,oe++,be++)oe===J&&(oe=0),be===J&&(be=0),N[$]=W(C[$],C[oe],C[be]);const I=[];let ne,Q=N.concat();for(let $=0,J=L.length;$<J;$++){const oe=L[$];ne=[];for(let be=0,me=oe.length,De=me-1,Ee=be+1;be<me;be++,De++,Ee++)De===me&&(De=0),Ee===me&&(Ee=0),ne[be]=W(oe[be],oe[De],oe[Ee]);I.push(ne),Q=Q.concat(ne)}for(let $=0;$<m;$++){const J=$/m,oe=d*Math.cos(J*Math.PI/2),be=g*Math.sin(J*Math.PI/2)+p;for(let me=0,De=C.length;me<De;me++){const Ee=G(C[me],N[me],be);ke(Ee.x,Ee.y,-oe)}for(let me=0,De=L.length;me<De;me++){const Ee=L[me];ne=I[me];for(let we=0,Ke=Ee.length;we<Ke;we++){const Oe=G(Ee[we],ne[we],be);ke(Oe.x,Oe.y,-oe)}}}const re=g+p;for(let $=0;$<z;$++){const J=f?G(U[$],Q[$],re):U[$];v?(P.copy(S.normals[0]).multiplyScalar(J.x),b.copy(S.binormals[0]).multiplyScalar(J.y),x.copy(y[0]).add(P).add(b),ke(x.x,x.y,x.z)):ke(J.x,J.y,0)}for(let $=1;$<=u;$++)for(let J=0;J<z;J++){const oe=f?G(U[J],Q[J],re):U[J];v?(P.copy(S.normals[$]).multiplyScalar(oe.x),b.copy(S.binormals[$]).multiplyScalar(oe.y),x.copy(y[$]).add(P).add(b),ke(x.x,x.y,x.z)):ke(oe.x,oe.y,h/u*$)}for(let $=m-1;$>=0;$--){const J=$/m,oe=d*Math.cos(J*Math.PI/2),be=g*Math.sin(J*Math.PI/2)+p;for(let me=0,De=C.length;me<De;me++){const Ee=G(C[me],N[me],be);ke(Ee.x,Ee.y,h+oe)}for(let me=0,De=L.length;me<De;me++){const Ee=L[me];ne=I[me];for(let we=0,Ke=Ee.length;we<Ke;we++){const Oe=G(Ee[we],ne[we],be);v?ke(Oe.x,Oe.y+y[u-1].y,y[u-1].x+oe):ke(Oe.x,Oe.y,h+oe)}}}xe(),Y();function xe(){const $=i.length/3;if(f){let J=0,oe=z*J;for(let be=0;be<V;be++){const me=B[be];ge(me[2]+oe,me[1]+oe,me[0]+oe)}J=u+m*2,oe=z*J;for(let be=0;be<V;be++){const me=B[be];ge(me[0]+oe,me[1]+oe,me[2]+oe)}}else{for(let J=0;J<V;J++){const oe=B[J];ge(oe[2],oe[1],oe[0])}for(let J=0;J<V;J++){const oe=B[J];ge(oe[0]+z*u,oe[1]+z*u,oe[2]+z*u)}}n.addGroup($,i.length/3-$,0)}function Y(){const $=i.length/3;let J=0;j(C,J),J+=C.length;for(let oe=0,be=L.length;oe<be;oe++){const me=L[oe];j(me,J),J+=me.length}n.addGroup($,i.length/3-$,1)}function j($,J){let oe=$.length;for(;--oe>=0;){const be=oe;let me=oe-1;me<0&&(me=$.length-1);for(let De=0,Ee=u+m*2;De<Ee;De++){const we=z*De,Ke=z*(De+1),Oe=J+be+we,R=J+me+we,M=J+me+Ke,O=J+be+Ke;Le(Oe,R,M,O)}}}function ke($,J,oe){l.push($),l.push(J),l.push(oe)}function ge($,J,oe){_e($),_e(J),_e(oe);const be=i.length/3,me=w.generateTopUV(n,i,be-3,be-2,be-1);Pe(me[0]),Pe(me[1]),Pe(me[2])}function Le($,J,oe,be){_e($),_e(J),_e(be),_e(J),_e(oe),_e(be);const me=i.length/3,De=w.generateSideWallUV(n,i,me-6,me-3,me-2,me-1);Pe(De[0]),Pe(De[1]),Pe(De[3]),Pe(De[1]),Pe(De[2]),Pe(De[3])}function _e($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function Pe($){r.push($.x),r.push($.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Eg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vc[i.type]().fromJSON(i)),new es(n,e.options)}}const Tg={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new fe(r,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],p=e[r*3],m=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-h),new fe(f,1-g),new fe(p,1-_)]:[new fe(a,1-l),new fe(u,1-h),new fe(d,1-g),new fe(m,1-_)]}};function Eg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bc extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vt={arraySlice:function(s,e,t){return vt.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*i;if(!(g<t||g>=n)){h.push(c.times[d]);for(let p=0;p<u;++p)f.push(c.values[d*u+p])}}h.length!==0&&(c.times=vt.convertArray(h,c.times.constructor),c.values=vt.convertArray(f,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let p;if(r<=a.times[0]){const _=u,w=h-u;p=vt.arraySlice(a.values,_,w)}else if(r>=a.times[g]){const _=g*h+u,w=_+h-u;p=vt.arraySlice(a.values,_,w)}else{const _=a.createInterpolant(),w=u,y=h-u;_.evaluate(r),p=vt.arraySlice(_.resultBuffer,w,y)}l==="quaternion"&&new kt().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let _=0;_<m;++_){const w=_*d+f;if(l==="quaternion")kt.multiplyQuaternionsFlat(c.values,w,p,0,c.values,w);else{const y=d-f*2;for(let v=0;v<y;++v)c.values[w+v]-=p[v]}}}return s.blendMode=ju,s}};class sr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ag extends sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pa,endingEnd:pa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ma:r=e,a=2*t-n;break;case ga:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ma:o=e,l=2*n-t;break;case ga:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,w=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*p+.5*g,v=d*m-d*p;for(let S=0;S!==a;++S)r[S]=_*o[u+S]+w*o[c+S]+y*o[l+S]+v*o[h+S];return r}}class Rg extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Cg extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vt.convertArray(t,this.TimeBufferType),this.values=vt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vt.convertArray(e.times,Array),values:vt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ag(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case _r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=vt.arraySlice(n,r,o),this.values=vt.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&vt.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=vt.arraySlice(this.times),t=vt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===_r,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=vt.arraySlice(e,0,o),this.values=vt.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=vt.arraySlice(this.times,0),t=vt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Xs;class us extends Dn{}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=js;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Lg extends Dn{}Lg.prototype.ValueTypeName="color";class Pg extends Dn{}Pg.prototype.ValueTypeName="number";class Dg extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)kt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Po extends Dn{InterpolantFactoryMethodLinear(e){return new Dg(this.times,this.values,this.getValueSize(),e)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.DefaultInterpolation=Xs;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Dn{}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=js;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ig extends Dn{}Ig.prototype.ValueTypeName="vector";const qs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Og{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Fg=new Og;class rr{constructor(e){this.manager=e!==void 0?e:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Mn={};class Zr extends rr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:i});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){w();function w(){h.read().then(({done:y,value:v})=>{if(y)_.close();else{p+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let b=0,P=u.length;b<P;b++){const x=u[b];x.onProgress&&x.onProgress(S)}_.enqueue(v),w()}})}}});return new Response(m)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{qs.add(e,c);const u=Mn[e];delete Mn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ng extends rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ns("img");function l(){u(),qs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rl extends rr{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new Ng(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sc extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ol=new at,al=new F,ll=new F;class Ug{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bg extends Ug{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zg extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kg extends Sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cl(){return(typeof performance=="undefined"?Date:performance).now()}const Do="\\[\\]\\.:\\/",Vg=new RegExp("["+Do+"]","g"),Io="[^"+Do+"]",Gg="[^"+Do.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Io),Wg=/(WCOD+)?/.source.replace("WCOD",Gg),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Io),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Io),Xg=new RegExp("^"+Hg+Wg+Kg+jg+"$"),qg=["material","materials","bones"];class Yg{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(e){const t=Xg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Yg;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tc{constructor(e,t,n=0,i=1/0){this.ray=new ic(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return vo(e,this,n,t),n.sort(ul),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)vo(e[i],this,n,t);return n.sort(ul),n}}function ul(s,e){return s.distance-e.distance}function vo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)vo(i[r],e,t,!0)}}class hl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fl=new F,Ns=new F;class Zg{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fl.subVectors(e,this.start),Ns.subVectors(this.end,this.start);const n=Ns.dot(Ns);let r=Ns.dot(fl)/n;return t&&(r=Tt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const Ec=Math.PI/180,dl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class or{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Jg=new tr(-1,1,1,-1,0,1),Oo=new an;Oo.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3));Oo.setAttribute("uv",new Lt([0,2,0,0,2,0],2));class Qg{constructor(e){this._mesh=new dn(Oo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pl extends or{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=So.clone(e.uniforms),this.material=new Cn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class ml extends or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class $g extends or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class e_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new fe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],dl===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),pl===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new pl(dl),this.clock=new Mc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ml!==void 0&&(o instanceof ml?n=!0:o instanceof $g&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new tr(-1,1,1,-1,0,1);const Ac=new an;Ac.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3));Ac.setAttribute("uv",new Lt([0,2,0,0,2,0],2));class Rc extends or{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const t_=(s,e,t)=>{s.renderer=new pc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new e_(s.renderer),s.composer.addPass(new Rc(s.scene,Ys(s.camera)))},gl=(s,e,t)=>{!s.renderer||(e?s.renderer.outputEncoding=gn:s.renderer.outputEncoding=ot,t?s.renderer.toneMapping=pn:s.renderer.toneMapping=jl)},_l=(s,e,t)=>{!s.renderer||!s.composer||(s.renderer.setSize(e.width,e.height),s.renderer.setPixelRatio(t),s.composer.setSize(e.width,e.height),s.composer.setPixelRatio(t))},vl=(s,e,t)=>{!s.renderer||(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Xt=s=>s.userData,n_=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},Cc=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),i_=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,s_=(s,e,t)=>{let n;const i=s.camera.subscribe(l=>n=l);Et(i);let r;const o=s.pointer.subscribe(l=>r=l);Et(o);const a=l=>{var u,h;if(l.preventDefault(),s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,n_(s,l),e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=Cc(e,r,n,Array.from(e.raycastableObjects));c.length>0&&e.interactiveObjects.has(c[0].object)&&((h=(u=Xt(c[0].object)).eventDispatcher)==null||h.call(u,l.type,{...c[0],event:l}))};return{onClick:a,onContextMenu:a,onPointerUp:a,onPointerDown:a,onPointerMove:a}},r_=(s,e)=>{let t=Ys(s.pointerOverCanvas);const n=s.pointerOverCanvas.subscribe(c=>t=c);Et(n);let i;const r=s.camera.subscribe(c=>i=c);Et(r);let o;const a=s.pointer.subscribe(c=>o=c);return Et(a),{raycast:()=>{var h,f,d,g,p,m,_,w;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Cc(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&i_(e.lastIntersection,u)&&((m=(p=Xt(e.lastIntersection.object)).eventDispatcher)==null||m.call(p,"pointerleave",e.lastIntersection),(w=(_=Xt(u.object)).eventDispatcher)==null||w.call(_,"pointerenter",u)):(g=(d=Xt(u.object)).eventDispatcher)==null||g.call(d,"pointerenter",u):e.lastIntersection&&((f=(h=Xt(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},ar=typeof window!="undefined",o_=s=>{if(!ar)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Et(()=>{!e||cancelAnimationFrame(e)})},a_=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>{var o,a;return((o=i.order)!=null?o:0)>((a=r.order)!=null?a:0)?1:-1}).forEach(i=>i.fn(s,n)):e.frameHandlers.forEach(i=>i.fn(s,n))},l_=s=>{!s.debugFrameloop||(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},c_=(s,e,t)=>{let n=Ys(s.camera);const i=s.camera.subscribe(o=>n=o);Et(i);const{raycast:r}=r_(s,e);o_(()=>{const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(r(),t.pointerInvalidated=!1),o&&(!n||!s.composer||!s.renderer||(a_(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,n),l_(t),t.frameInvalidated=!1,t.advance=!1))})},u_=()=>{const s=new Wt(75,0,.1,1e3);return Xt(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},h_=s=>{const e=s.size.subscribe(t=>{Xt(Ys(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),i})});Et(e)},f_=(s,e,t,n,i,r,o)=>{const a={audioListeners:new Map,addAudioListener:(p,m)=>{if(m=m!=null?m:"default",a.audioListeners.has(m)){console.warn(`An AudioListener with the id "${m}" has already been added, aborting.`);return}a.audioListeners.set(m,p)},removeAudioListener:p=>{if(p=p!=null?p:"default",!a.audioListeners.has(p)){console.warn(`No AudioListener with the id "${p}" found, aborting.`);return}a.audioListeners.delete(p)},getAudioListener:p=>{if(p=p!=null?p:"default",!a.audioListeners.has(p)){console.warn(`No AudioListener with the id "${p}" found, aborting.`);return}return a.audioListeners.get(p)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Qc([n,i],([p,m])=>p||m),pointer:Nt(new fe),pointerOverCanvas:Nt(!1),clock:new Mc,camera:Nt(u_()),scene:new jm,renderer:void 0,composer:void 0,invalidate:p=>{l.frameInvalidated=!0,l.debugFrameloop&&p&&(l.invalidations[p]=l.invalidations[p]?l.invalidations[p]+1:1)},advance:()=>{l.advance=!0}},u={flat:Nt(e),linear:Nt(s),dpr:Nt(t),setCamera:p=>{c.camera.set(p),c.composer&&(c.composer.passes.forEach(m=>{m instanceof Rc&&(m.camera=p)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Tc,lastIntersection:null,addRaycastableObject:p=>{u.raycastableObjects.add(p)},removeRaycastableObject:p=>{u.raycastableObjects.delete(p)},addInteractiveObject:p=>{u.interactiveObjects.add(p)},removeInteractiveObject:p=>{u.interactiveObjects.delete(p)},addPass:p=>{!c.composer||(c.composer.addPass(p),c.invalidate("Canvas: adding pass"))},removePass:p=>{!c.composer||(c.composer.removePass(p),c.invalidate("Canvas: removing pass"))}};return Ei("threlte",c),Ei("threlte-root",u),Ei("threlte-render-context",l),Ei("threlte-audio-context",a),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a}},d_=()=>{const s=Nt({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(o=>e=o);Et(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&s.set({width:a,height:l})},r=o=>{n=o,i(),window.addEventListener("resize",i)};return ar?(Et(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function xl(s){let e;const t=s[30].default,n=on(t,s,s[29],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[0]&536870912)&&nn(n,t,i,i[29],e?rn(t,i[29],r,null):sn(i[29]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function p_(s){let e,t,n,i,r=s[1]&&xl(s);return{c(){e=Se("canvas"),r&&r.c(),this.h()},l(o){e=Me(o,"CANVAS",{class:!0});var a=Re(e);r&&r.l(a),a.forEach(ae),this.h()},h(){ie(e,"class","svelte-15bl8wt")},m(o,a){rt(o,e,a),r&&r.m(e,null),s[31](e),t=!0,n||(i=[qc(s[2].call(null,e)),jn(e,"click",s[8]),jn(e,"contextmenu",s[9]),jn(e,"pointerup",s[12]),jn(e,"pointerdown",s[10]),jn(e,"pointermove",s[11]),jn(e,"pointerenter",s[32]),jn(e,"pointerleave",s[33])],n=!0)},p(o,a){o[1]?r?(r.p(o,a),a[0]&2&&Ie(r,1)):(r=xl(o),r.c(),Ie(r,1),r.m(e,null)):r&&(Bl(),Ne(r,1,1,()=>{r=null}),zl())},i(o){t||(Ie(r),t=!0)},o(o){Ne(r),t=!1},d(o){o&&ae(e),r&&r.d(),s[31](null),n=!1,Yc(i)}}}const yl=new Set;function m_(s,e,t){let n,i,r,o,{$$slots:a={},$$scope:l}=e,{dpr:c=ar?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:d=!1}=e,{shadows:g=!0}=e,{shadowMapType:p=Gl}=e,{size:m=void 0}=e,{rendererParameters:_=void 0}=e,w,y=!1;const v=Nt(m),{parentSize:S,parentSizeAction:b}=d_(),P=f_(h,u,c,v,S,d,f),{getCtx:x,getRootCtx:E,getRenderCtx:U,renderCtx:L}=P,{ctx:q,rootCtx:B,audioCtx:C}=P;h_(q),yl.add(q.invalidate),Et(()=>{yl.delete(q.invalidate)});const{size:G,scene:z}=q;xt(s,G,ge=>t(26,i=ge));const{flat:V,linear:W,dpr:N}=B;xt(s,V,ge=>t(27,r=ge)),xt(s,W,ge=>t(28,o=ge)),xt(s,N,ge=>t(25,n=ge)),Ei("threlte-parent",Nt(z)),kl(()=>{!w||(t_(q,w,_),gl(q,o,r),_l(q,i,n),vl(q,g,p),t(1,y=!0))}),c_(q,B,L);const{onClick:I,onContextMenu:ne,onPointerDown:Q,onPointerMove:re,onPointerUp:xe}=s_(q,B,L);function Y(ge){_n[ge?"unshift":"push"](()=>{w=ge,t(0,w)})}const j=()=>x().pointerOverCanvas.set(!0),ke=()=>x().pointerOverCanvas.set(!1);return s.$$set=ge=>{"dpr"in ge&&t(13,c=ge.dpr),"flat"in ge&&t(14,u=ge.flat),"linear"in ge&&t(15,h=ge.linear),"frameloop"in ge&&t(16,f=ge.frameloop),"debugFrameloop"in ge&&t(17,d=ge.debugFrameloop),"shadows"in ge&&t(18,g=ge.shadows),"shadowMapType"in ge&&t(19,p=ge.shadowMapType),"size"in ge&&t(20,m=ge.size),"rendererParameters"in ge&&t(21,_=ge.rendererParameters),"$$scope"in ge&&t(29,l=ge.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&1048576&&v.set(m),s.$$.dirty[0]&32768&&Ci(W,o=h,o),s.$$.dirty[0]&16384&&Ci(V,r=u,r),s.$$.dirty[0]&8192&&Ci(N,n=c,n),s.$$.dirty[0]&402653184&&gl(x(),o,r),s.$$.dirty[0]&100663296&&_l(x(),i,n),s.$$.dirty[0]&786432&&vl(x(),g,p)},[w,y,b,x,G,V,W,N,I,ne,Q,re,xe,c,u,h,f,d,g,p,m,_,q,B,C,n,i,r,o,l,a,Y,j,ke]}class g_ extends yt{constructor(e){super(),wt(this,e,m_,p_,bt,{dpr:13,flat:14,linear:15,frameloop:16,debugFrameloop:17,shadows:18,shadowMapType:19,size:20,rendererParameters:21,ctx:22,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[22]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const ln=()=>os("threlte"),Fo=()=>os("threlte-root"),No=s=>{const e=Nt(s);let t=s;const n=e.subscribe(r=>t=r);return Et(n),{...e,set:r=>{r.uuid!==t.uuid&&e.set(r)}}};function __(s){let e;const t=s[8].default,n=on(t,s,s[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&nn(n,t,i,i[7],e?rn(t,i[7],r,null):sn(i[7]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}const v_=s=>{Ei("threlte-parent",s)},Lc=()=>os("threlte-parent");function x_(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const a=Lc();xt(s,a,d=>t(6,i=d));let l=i,{object:c}=e;const u=Nt(c);xt(s,u,d=>t(5,n=d));let h=c;v_(u);const{invalidate:f}=ln();return i.add(n),f("HierarchicalObject: object added"),Et(()=>{i.remove(n),f("HierarchicalObject: object removed")}),s.$$set=d=>{"object"in d&&t(2,c=d.object),"$$scope"in d&&t(7,o=d.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&Ci(u,n=c,n),s.$$.dirty&112&&n!==h&&(h&&i.remove(h),i.add(n),f("HierarchicalObject: object changed"),t(4,h=n)),s.$$.dirty&104&&i!==l&&(l.remove(n),i.add(n),f("HierarchicalObject: parent changed"),t(3,l=i))},[a,u,c,l,h,n,i,o,r]}class Pc extends yt{constructor(e){super(),wt(this,e,x_,__,bt,{object:2})}}function y_(s,e,t){let n,i,{object:r}=e;const o=No(r);xt(s,o,c=>t(4,i=c));const a=os("threlte-layers");xt(s,a,c=>t(3,n=c));const{invalidate:l}=ln();return s.$$set=c=>{"object"in c&&t(2,r=c.object)},s.$$.update=()=>{if(s.$$.dirty&4&&o.set(r),s.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,r,n,i]}class w_ extends yt{constructor(e){super(),wt(this,e,y_,null,bt,{object:2})}}const lr=(s,e)=>{var a;if(!ar)return{start:()=>{},stop:()=>{},started:$c(!1)};const t=os("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Nt(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),Et(()=>{r()}),{start:o,stop:r,started:{subscribe:i.subscribe}}},Dc=()=>{const s=Nt(!1);return(async()=>{await Ws(),s.set(!0)})(),s};function b_(s,e,t){let n,i,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new F,h=Zs(),{invalidate:f}=ln(),d=Dc();xt(s,d,y=>t(8,i=y));const g=async()=>{i||await Ws(),h("transform")},p=async()=>{f("TransformableObject: transformed"),await g()};Xt(r).onTransform=p;const{start:m,stop:_}=lr(async()=>{c&&!l&&c instanceof dt&&(c.getWorldPosition(u),r.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),w=No(r);return xt(s,w,y=>t(7,n=y)),s.$$set=y=>{"object"in y&&t(2,r=y.object),"position"in y&&t(3,o=y.position),"scale"in y&&t(4,a=y.scale),"rotation"in y&&t(5,l=y.rotation),"lookAt"in y&&t(6,c=y.lookAt)},s.$$.update=()=>{var y,v,S,b,P,x,E,U,L,q,B,C,G;s.$$.dirty&4&&w.set(r),s.$$.dirty&232&&(o&&(n.position.set((y=o.x)!=null?y:0,(v=o.y)!=null?v:0,(S=o.z)!=null?S:0),p()),c&&!l&&(c instanceof dt?m():(_(),n.lookAt((b=c.x)!=null?b:0,(P=c.y)!=null?P:0,(x=c.z)!=null?x:0),p())),c||_()),s.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((E=a.x)!=null?E:1,(U=a.y)!=null?U:1,(L=a.z)!=null?L:1),p()),s.$$.dirty&160&&l&&(n.rotation.set((q=l.x)!=null?q:0,(B=l.y)!=null?B:0,(C=l.z)!=null?C:0,(G=l.order)!=null?G:"XYZ"),p())},[d,w,r,o,a,l,c,n]}class Uo extends yt{constructor(e){super(),wt(this,e,b_,null,bt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function S_(s,e,t){let n,i,r,{object:o}=e,{viewportAware:a=!1}=e;const l=Zs(),{camera:c,invalidate:u}=ln();xt(s,c,b=>t(8,r=b));const h=new er,f=new at,d=b=>b.type==="Mesh",g=new F,p=()=>r?(f.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),h.setFromProjectionMatrix(f),d(o)?h.intersectsObject(o):(o.getWorldPosition(g),h.containsPoint(g))):!0,m=Dc();xt(s,m,b=>t(7,i=b));let{inViewport:_=p()}=e;const w=async b=>{b?(i||await Ws(),l("viewportenter",o)):(i||await Ws(),l("viewportleave",o))},{start:y,stop:v,started:S}=lr(()=>{const b=p();_===void 0?(t(3,_=p()),w(_)):b!==_&&(w(b),t(3,_=b))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return xt(s,S,b=>t(6,n=b)),u("ViewportAwareObject"),s.$$set=b=>{"object"in b&&t(4,o=b.object),"viewportAware"in b&&t(5,a=b.viewportAware),"inViewport"in b&&t(3,_=b.inViewport)},s.$$.update=()=>{s.$$.dirty&96&&(a&&!n?y():!a&&n&&v())},[c,m,S,_,o,a,n]}class M_ extends yt{constructor(e){super(),wt(this,e,S_,null,bt,{object:4,viewportAware:5,inViewport:3})}}function T_(s){let e;const t=s[12].default,n=on(t,s,s[16],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&65536)&&nn(n,t,i,i[16],e?rn(t,i[16],r,null):sn(i[16]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function E_(s){let e,t,n,i,r,o,a,l,c;e=new w_({props:{object:s[1]}}),n=new Uo({props:{object:s[1],position:s[2],rotation:s[4],scale:s[3],lookAt:s[5]}}),r=new Pc({props:{object:s[1],$$slots:{default:[T_]},$$scope:{ctx:s}}});function u(f){s[13](f)}let h={object:s[1],viewportAware:s[6]};return s[0]!==void 0&&(h.inViewport=s[0]),a=new M_({props:h}),_n.push(()=>Ln(a,"inViewport",u)),a.$on("viewportenter",s[14]),a.$on("viewportleave",s[15]),{c(){Qe(e.$$.fragment),t=Be(),Qe(n.$$.fragment),i=Be(),Qe(r.$$.fragment),o=Be(),Qe(a.$$.fragment)},l(f){$e(e.$$.fragment,f),t=ze(f),$e(n.$$.fragment,f),i=ze(f),$e(r.$$.fragment,f),o=ze(f),$e(a.$$.fragment,f)},m(f,d){et(e,f,d),rt(f,t,d),et(n,f,d),rt(f,i,d),et(r,f,d),rt(f,o,d),et(a,f,d),c=!0},p(f,[d]){const g={};d&2&&(g.object=f[1]),e.$set(g);const p={};d&2&&(p.object=f[1]),d&4&&(p.position=f[2]),d&16&&(p.rotation=f[4]),d&8&&(p.scale=f[3]),d&32&&(p.lookAt=f[5]),n.$set(p);const m={};d&2&&(m.object=f[1]),d&65536&&(m.$$scope={dirty:d,ctx:f}),r.$set(m);const _={};d&2&&(_.object=f[1]),d&64&&(_.viewportAware=f[6]),!l&&d&1&&(l=!0,_.inViewport=f[0],Pn(()=>l=!1)),a.$set(_)},i(f){c||(Ie(e.$$.fragment,f),Ie(n.$$.fragment,f),Ie(r.$$.fragment,f),Ie(a.$$.fragment,f),c=!0)},o(f){Ne(e.$$.fragment,f),Ne(n.$$.fragment,f),Ne(r.$$.fragment,f),Ne(a.$$.fragment,f),c=!1},d(f){tt(e,f),f&&ae(t),tt(n,f),f&&ae(i),tt(r,f),f&&ae(o),tt(a,f)}}}function A_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e;const{invalidate:_}=ln(),w=()=>r;function y(b){h=b,t(0,h)}function v(b){Je.call(this,s,b)}function S(b){Je.call(this,s,b)}return s.$$set=b=>{"object"in b&&t(1,r=b.object),"position"in b&&t(2,o=b.position),"scale"in b&&t(3,a=b.scale),"rotation"in b&&t(4,l=b.rotation),"lookAt"in b&&t(5,c=b.lookAt),"viewportAware"in b&&t(6,u=b.viewportAware),"inViewport"in b&&t(0,h=b.inViewport),"castShadow"in b&&t(7,f=b.castShadow),"receiveShadow"in b&&t(8,d=b.receiveShadow),"frustumCulled"in b&&t(9,g=b.frustumCulled),"renderOrder"in b&&t(10,p=b.renderOrder),"visible"in b&&t(11,m=b.visible),"$$scope"in b&&t(16,i=b.$$scope)},s.$$.update=()=>{s.$$.dirty&3968&&(m!==void 0&&(w().visible=m),f!==void 0&&(w().castShadow=f),d!==void 0&&(w().receiveShadow=d),g!==void 0&&(w().frustumCulled=g),p!==void 0&&(w().renderOrder=p),_("Object3DInstance: props changed"))},[h,r,o,a,l,c,u,f,d,g,p,m,n,y,v,S,i]}class cr extends yt{constructor(e){super(),wt(this,e,A_,E_,bt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11})}}function R_(s){let e;const t=s[15].default,n=on(t,s,s[19],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&524288)&&nn(n,t,i,i[19],e?rn(t,i[19],r,null):sn(i[19]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function C_(s){let e,t,n;function i(o){s[16](o)}let r={object:s[1],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],$$slots:{default:[R_]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new cr({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("viewportenter",s[17]),e.$on("viewportleave",s[18]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&524288&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function L_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{useCamera:w=!1}=e;const y=No(o);xt(s,y,x=>t(14,n=x));const{setCamera:v}=Fo();function S(x){f=x,t(0,f)}function b(x){Je.call(this,s,x)}function P(x){Je.call(this,s,x)}return s.$$set=x=>{"camera"in x&&t(1,o=x.camera),"position"in x&&t(2,a=x.position),"scale"in x&&t(3,l=x.scale),"rotation"in x&&t(4,c=x.rotation),"lookAt"in x&&t(5,u=x.lookAt),"viewportAware"in x&&t(6,h=x.viewportAware),"inViewport"in x&&t(0,f=x.inViewport),"castShadow"in x&&t(7,d=x.castShadow),"receiveShadow"in x&&t(8,g=x.receiveShadow),"frustumCulled"in x&&t(9,p=x.frustumCulled),"renderOrder"in x&&t(10,m=x.renderOrder),"visible"in x&&t(11,_=x.visible),"useCamera"in x&&t(13,w=x.useCamera),"$$scope"in x&&t(19,r=x.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&y.set(o),s.$$.dirty&24576&&w&&v(n)},[f,o,a,l,c,u,h,d,g,p,m,_,y,w,n,i,S,b,P,r]}class P_ extends yt{constructor(e){super(),wt(this,e,L_,C_,bt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:13})}}function D_(s){let e;const t=s[18].default,n=on(t,s,s[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&nn(n,t,i,i[22],e?rn(t,i[22],r,null):sn(i[22]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function I_(s){let e,t,n;function i(o){s[19](o)}let r={camera:s[0],position:s[2],scale:s[3],rotation:s[4],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],viewportAware:s[11],lookAt:s[5],useCamera:s[12],$$slots:{default:[D_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new P_({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("viewportenter",s[20]),e.$on("viewportleave",s[21]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.viewportAware=o[11]),a&32&&(l.lookAt=o[5]),a&4096&&(l.useCamera=o[12]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function O_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:g=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{useCamera:_=!0}=e,{near:w=void 0}=e,{far:y=void 0}=e,{fov:v=void 0}=e;const{size:S,invalidate:b}=ln();xt(s,S,L=>t(17,n=L));const P=new Wt(v,n.width/n.height,w,y);function x(L){m=L,t(1,m)}function E(L){Je.call(this,s,L)}function U(L){Je.call(this,s,L)}return s.$$set=L=>{"position"in L&&t(2,o=L.position),"scale"in L&&t(3,a=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"castShadow"in L&&t(6,u=L.castShadow),"receiveShadow"in L&&t(7,h=L.receiveShadow),"frustumCulled"in L&&t(8,f=L.frustumCulled),"renderOrder"in L&&t(9,d=L.renderOrder),"visible"in L&&t(10,g=L.visible),"viewportAware"in L&&t(11,p=L.viewportAware),"inViewport"in L&&t(1,m=L.inViewport),"useCamera"in L&&t(12,_=L.useCamera),"near"in L&&t(14,w=L.near),"far"in L&&t(15,y=L.far),"fov"in L&&t(16,v=L.fov),"$$scope"in L&&t(22,r=L.$$scope)},s.$$.update=()=>{s.$$.dirty&131073&&(t(0,P.aspect=n.width/n.height,P),P.updateProjectionMatrix(),b("PerspectiveCamera: aspect changed")),s.$$.dirty&114689&&(w!==void 0&&t(0,P.near=w,P),y!==void 0&&t(0,P.far=y,P),v!==void 0&&t(0,P.fov=v,P),P.updateProjectionMatrix(),b("PerspectiveCamera: props changed"))},[P,m,o,a,l,c,u,h,f,d,g,p,_,S,w,y,v,n,i,x,E,U,r]}class F_ extends yt{constructor(e){super(),wt(this,e,O_,I_,bt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,viewportAware:11,inViewport:1,useCamera:12,near:14,far:15,fov:16,camera:0})}get camera(){return this.$$.ctx[0]}}const wl=[],N_=(s,e)=>{const t=wl.find(i=>i instanceof s);if(t)return t;const n=e();return wl.push(n),n};const bl={type:"change"},Jr={type:"start"},Sl={type:"end"};class U_ extends si{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Oe),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bl),n.update(),r=i.NONE},this.update=function(){const T=new F,te=new kt().setFromUnitVectors(e.up,new F(0,1,0)),de=te.clone().invert(),pe=new F,D=new kt,le=2*Math.PI;return function(){const Ce=n.object.position;T.copy(Ce).sub(n.target),T.applyQuaternion(te),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&E(P()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ye=n.minAzimuthAngle,Te=n.maxAzimuthAngle;return isFinite(ye)&&isFinite(Te)&&(ye<-Math.PI?ye+=le:ye>Math.PI&&(ye-=le),Te<-Math.PI?Te+=le:Te>Math.PI&&(Te-=le),ye<=Te?a.theta=Math.max(ye,Math.min(Te,a.theta)):a.theta=a.theta>(ye+Te)/2?Math.max(ye,a.theta):Math.min(Te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(de),Ce.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||pe.distanceToSquared(n.object.position)>o||8*(1-D.dot(n.object.quaternion))>o?(n.dispatchEvent(bl),pe.copy(n.object.position),D.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",O),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",De),n.domElement.removeEventListener("wheel",Ke),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",me),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Oe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new hl,l=new hl;let c=1;const u=new F;let h=!1;const f=new fe,d=new fe,g=new fe,p=new fe,m=new fe,_=new fe,w=new fe,y=new fe,v=new fe,S=[],b={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(T){l.theta-=T}function U(T){l.phi-=T}const L=function(){const T=new F;return function(de,pe){T.setFromMatrixColumn(pe,0),T.multiplyScalar(-de),u.add(T)}}(),q=function(){const T=new F;return function(de,pe){n.screenSpacePanning===!0?T.setFromMatrixColumn(pe,1):(T.setFromMatrixColumn(pe,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(de),u.add(T)}}(),B=function(){const T=new F;return function(de,pe){const D=n.domElement;if(n.object.isPerspectiveCamera){const le=n.object.position;T.copy(le).sub(n.target);let he=T.length();he*=Math.tan(n.object.fov/2*Math.PI/180),L(2*de*he/D.clientHeight,n.object.matrix),q(2*pe*he/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(de*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),q(pe*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function C(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(T){f.set(T.clientX,T.clientY)}function V(T){w.set(T.clientX,T.clientY)}function W(T){p.set(T.clientX,T.clientY)}function N(T){d.set(T.clientX,T.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*g.x/te.clientHeight),U(2*Math.PI*g.y/te.clientHeight),f.copy(d),n.update()}function I(T){y.set(T.clientX,T.clientY),v.subVectors(y,w),v.y>0?C(x()):v.y<0&&G(x()),w.copy(y),n.update()}function ne(T){m.set(T.clientX,T.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(m),n.update()}function Q(T){T.deltaY<0?G(x()):T.deltaY>0&&C(x()),n.update()}function re(T){let te=!1;switch(T.code){case n.keys.UP:B(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),te=!0;break}te&&(T.preventDefault(),n.update())}function xe(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);f.set(T,te)}}function Y(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);p.set(T,te)}}function j(){const T=S[0].pageX-S[1].pageX,te=S[0].pageY-S[1].pageY,de=Math.sqrt(T*T+te*te);w.set(0,de)}function ke(){n.enableZoom&&j(),n.enablePan&&Y()}function ge(){n.enableZoom&&j(),n.enableRotate&&xe()}function Le(T){if(S.length==1)d.set(T.pageX,T.pageY);else{const de=Ae(T),pe=.5*(T.pageX+de.x),D=.5*(T.pageY+de.y);d.set(pe,D)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*g.x/te.clientHeight),U(2*Math.PI*g.y/te.clientHeight),f.copy(d)}function _e(T){if(S.length===1)m.set(T.pageX,T.pageY);else{const te=Ae(T),de=.5*(T.pageX+te.x),pe=.5*(T.pageY+te.y);m.set(de,pe)}_.subVectors(m,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(m)}function Pe(T){const te=Ae(T),de=T.pageX-te.x,pe=T.pageY-te.y,D=Math.sqrt(de*de+pe*pe);y.set(0,D),v.set(0,Math.pow(y.y/w.y,n.zoomSpeed)),C(v.y),w.copy(y)}function $(T){n.enableZoom&&Pe(T),n.enablePan&&_e(T)}function J(T){n.enableZoom&&Pe(T),n.enableRotate&&Le(T)}function oe(T){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",be),n.domElement.addEventListener("pointerup",me)),Z(T),T.pointerType==="touch"?R(T):Ee(T))}function be(T){n.enabled!==!1&&(T.pointerType==="touch"?M(T):we(T))}function me(T){H(T),S.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",me)),n.dispatchEvent(Sl),r=i.NONE}function De(T){H(T)}function Ee(T){let te;switch(T.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ci.DOLLY:if(n.enableZoom===!1)return;V(T),r=i.DOLLY;break;case ci.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;W(T),r=i.PAN}else{if(n.enableRotate===!1)return;z(T),r=i.ROTATE}break;case ci.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;z(T),r=i.ROTATE}else{if(n.enablePan===!1)return;W(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Jr)}function we(T){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;N(T);break;case i.DOLLY:if(n.enableZoom===!1)return;I(T);break;case i.PAN:if(n.enablePan===!1)return;ne(T);break}}function Ke(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(Jr),Q(T),n.dispatchEvent(Sl))}function Oe(T){n.enabled===!1||n.enablePan===!1||re(T)}function R(T){switch(ue(T),S.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;xe(),r=i.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;Y(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(),r=i.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Jr)}function M(T){switch(ue(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(T),n.update();break;default:r=i.NONE}}function O(T){n.enabled!==!1&&T.preventDefault()}function Z(T){S.push(T)}function H(T){delete b[T.pointerId];for(let te=0;te<S.length;te++)if(S[te].pointerId==T.pointerId){S.splice(te,1);return}}function ue(T){let te=b[T.pointerId];te===void 0&&(te=new fe,b[T.pointerId]=te),te.set(T.pageX,T.pageY)}function Ae(T){const te=T.pointerId===S[0].pointerId?S[1]:S[0];return b[te.pointerId]}n.domElement.addEventListener("contextmenu",O),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",De),n.domElement.addEventListener("wheel",Ke,{passive:!1}),this.update()}}function B_(s){let e,t;return e=new Uo({props:{object:s[2],position:s[0]}}),e.$on("transform",s[3]),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,i){et(e,n,i),t=!0},p(n,i){const r={};i[0]&1&&(r.position=n[0]),e.$set(r)},i(n){t||(Ie(e.$$.fragment,n),t=!0)},o(n){Ne(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function z_(s,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:d=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:w=void 0}=e,{minDistance:y=void 0}=e,{minPolarAngle:v=void 0}=e,{minZoom:S=void 0}=e,{mouseButtons:b=void 0}=e,{panSpeed:P=void 0}=e,{rotateSpeed:x=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:U=void 0}=e,{zoomSpeed:L=void 0}=e,{target:q=void 0}=e;const B=Lc();xt(s,B,Y=>t(29,n=Y));const{renderer:C,invalidate:G}=ln();if(!C)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Mo))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const z=Zs(),V=()=>{G("Orbitcontrols: change event"),z("change")},W=()=>z("start"),N=()=>z("end"),I=new U_(n,C.domElement);Xt(n).orbitControls=I,I.addEventListener("change",V),I.addEventListener("start",W),I.addEventListener("end",N),Et(()=>{delete Xt(n).orbitControls,I.removeEventListener("change",V),I.removeEventListener("start",W),I.removeEventListener("end",N)});const{start:ne,stop:Q}=lr(()=>I.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),re=new dt,xe=()=>{t(4,I.target=re.position,I),I.update(),G("OrbitControls: target changed")};return Et(()=>{I.dispose(),G("OrbitControls: onDestroy")}),s.$$set=Y=>{"autoRotate"in Y&&t(5,i=Y.autoRotate),"autoRotateSpeed"in Y&&t(6,r=Y.autoRotateSpeed),"dampingFactor"in Y&&t(7,o=Y.dampingFactor),"enableDamping"in Y&&t(8,a=Y.enableDamping),"enabled"in Y&&t(9,l=Y.enabled),"enablePan"in Y&&t(10,c=Y.enablePan),"enableRotate"in Y&&t(11,u=Y.enableRotate),"enableZoom"in Y&&t(12,h=Y.enableZoom),"keyPanSpeed"in Y&&t(13,f=Y.keyPanSpeed),"keys"in Y&&t(14,d=Y.keys),"maxAzimuthAngle"in Y&&t(15,g=Y.maxAzimuthAngle),"maxDistance"in Y&&t(16,p=Y.maxDistance),"maxPolarAngle"in Y&&t(17,m=Y.maxPolarAngle),"maxZoom"in Y&&t(18,_=Y.maxZoom),"minAzimuthAngle"in Y&&t(19,w=Y.minAzimuthAngle),"minDistance"in Y&&t(20,y=Y.minDistance),"minPolarAngle"in Y&&t(21,v=Y.minPolarAngle),"minZoom"in Y&&t(22,S=Y.minZoom),"mouseButtons"in Y&&t(23,b=Y.mouseButtons),"panSpeed"in Y&&t(24,P=Y.panSpeed),"rotateSpeed"in Y&&t(25,x=Y.rotateSpeed),"screenSpacePanning"in Y&&t(26,E=Y.screenSpacePanning),"touches"in Y&&t(27,U=Y.touches),"zoomSpeed"in Y&&t(28,L=Y.zoomSpeed),"target"in Y&&t(0,q=Y.target)},s.$$.update=()=>{s.$$.dirty[0]&536870896&&(i!==void 0&&t(4,I.autoRotate=i,I),r!==void 0&&t(4,I.autoRotateSpeed=r,I),o!==void 0&&t(4,I.dampingFactor=o,I),a!==void 0&&t(4,I.enableDamping=a,I),l!==void 0&&t(4,I.enabled=l,I),c!==void 0&&t(4,I.enablePan=c,I),u!==void 0&&t(4,I.enableRotate=u,I),h!==void 0&&t(4,I.enableZoom=h,I),f!==void 0&&t(4,I.keyPanSpeed=f,I),d!==void 0&&t(4,I.keys=d,I),g!==void 0&&t(4,I.maxAzimuthAngle=g,I),p!==void 0&&t(4,I.maxDistance=p,I),m!==void 0&&t(4,I.maxPolarAngle=m,I),_!==void 0&&t(4,I.maxZoom=_,I),w!==void 0&&t(4,I.minAzimuthAngle=w,I),y!==void 0&&t(4,I.minDistance=y,I),v!==void 0&&t(4,I.minPolarAngle=v,I),S!==void 0&&t(4,I.minZoom=S,I),b!==void 0&&t(4,I.mouseButtons=b,I),P!==void 0&&t(4,I.panSpeed=P,I),x!==void 0&&t(4,I.rotateSpeed=x,I),E!==void 0&&t(4,I.screenSpacePanning=E,I),U!==void 0&&t(4,I.touches=U,I),L!==void 0&&t(4,I.zoomSpeed=L,I),I.update(),G("OrbitControls: props changed")),s.$$.dirty[0]&288&&(i||a?ne():Q())},[q,B,re,xe,I,i,r,o,a,l,c,u,h,f,d,g,p,m,_,w,y,v,S,b,P,x,E,U,L]}class k_ extends yt{constructor(e){super(),wt(this,e,z_,B_,bt,{autoRotate:5,autoRotateSpeed:6,dampingFactor:7,enableDamping:8,enabled:9,enablePan:10,enableRotate:11,enableZoom:12,keyPanSpeed:13,keys:14,maxAzimuthAngle:15,maxDistance:16,maxPolarAngle:17,maxZoom:18,minAzimuthAngle:19,minDistance:20,minPolarAngle:21,minZoom:22,mouseButtons:23,panSpeed:24,rotateSpeed:25,screenSpacePanning:26,touches:27,zoomSpeed:28,target:0,controls:4},null,[-1,-1])}get controls(){return this.$$.ctx[4]}}const mw=new Tc,gw=new F,_w=new F,vw=new kt,xw={X:new F(1,0,0),Y:new F(0,1,0),Z:new F(0,0,1)};const yw=new Ui,ww=new F(0,1,0),bw=new F(0,0,0),Sw=new at,Mw=new kt,Tw=new kt,Ew=new F,Aw=new at,Rw=new F(1,0,0),Cw=new F(0,1,0),Lw=new F(0,0,1),Pw=new F,Dw=new F,Iw=new F;const V_=(s,e)=>e?new Xe(s):new Xe().setHex(new Xe(s).getHex()).convertSRGBToLinear();function G_(s){let e;const t=s[16].default,n=on(t,s,s[20],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&1048576)&&nn(n,t,i,i[20],e?rn(t,i[20],r,null):sn(i[20]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function H_(s){let e,t,n;function i(o){s[17](o)}let r={object:s[0],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],$$slots:{default:[G_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new cr({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&1048576&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function W_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{color:w=void 0}=e,{intensity:y=void 0}=e;const{invalidate:v}=ln(),{linear:S}=Fo();xt(s,S,E=>t(15,n=E));function b(E){f=E,t(1,f)}function P(E){Je.call(this,s,E)}function x(E){Je.call(this,s,E)}return s.$$set=E=>{"light"in E&&t(0,o=E.light),"position"in E&&t(2,a=E.position),"scale"in E&&t(3,l=E.scale),"rotation"in E&&t(4,c=E.rotation),"lookAt"in E&&t(5,u=E.lookAt),"viewportAware"in E&&t(6,h=E.viewportAware),"inViewport"in E&&t(1,f=E.inViewport),"castShadow"in E&&t(7,d=E.castShadow),"receiveShadow"in E&&t(8,g=E.receiveShadow),"frustumCulled"in E&&t(9,p=E.frustumCulled),"renderOrder"in E&&t(10,m=E.renderOrder),"visible"in E&&t(11,_=E.visible),"color"in E&&t(13,w=E.color),"intensity"in E&&t(14,y=E.intensity),"$$scope"in E&&t(20,r=E.$$scope)},s.$$.update=()=>{s.$$.dirty&57344&&(y!==void 0&&t(0,o.intensity=y,o),w!==void 0&&t(0,o.color=V_(w,n),o),v("LightInstance: props changed"))},[o,f,a,l,c,u,h,d,g,p,m,_,S,w,y,n,i,b,P,x,r]}class Ic extends yt{constructor(e){super(),wt(this,e,W_,H_,bt,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,color:13,intensity:14})}}function K_(s){let e;const t=s[14].default,n=on(t,s,s[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&nn(n,t,i,i[18],e?rn(t,i[18],r,null):sn(i[18]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function j_(s){let e,t,n;function i(o){s[15](o)}let r={light:s[13],lookAt:s[4],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],viewportAware:s[10],color:s[11],intensity:s[12],$$slots:{default:[K_]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new Ic({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("viewportenter",s[16]),e.$on("viewportleave",s[17]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,[a]){const l={};a&16&&(l.lookAt=o[4]),a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&32&&(l.castShadow=o[5]),a&64&&(l.receiveShadow=o[6]),a&128&&(l.frustumCulled=o[7]),a&256&&(l.renderOrder=o[8]),a&512&&(l.visible=o[9]),a&1024&&(l.viewportAware=o[10]),a&2048&&(l.color=o[11]),a&4096&&(l.intensity=o[12]),a&262144&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function X_(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{viewportAware:g=!1}=e,{inViewport:p=!1}=e,{color:m=void 0}=e,{intensity:_=void 0}=e;const w=new kg(m,_);function y(b){p=b,t(0,p)}function v(b){Je.call(this,s,b)}function S(b){Je.call(this,s,b)}return s.$$set=b=>{"position"in b&&t(1,r=b.position),"scale"in b&&t(2,o=b.scale),"rotation"in b&&t(3,a=b.rotation),"lookAt"in b&&t(4,l=b.lookAt),"castShadow"in b&&t(5,c=b.castShadow),"receiveShadow"in b&&t(6,u=b.receiveShadow),"frustumCulled"in b&&t(7,h=b.frustumCulled),"renderOrder"in b&&t(8,f=b.renderOrder),"visible"in b&&t(9,d=b.visible),"viewportAware"in b&&t(10,g=b.viewportAware),"inViewport"in b&&t(0,p=b.inViewport),"color"in b&&t(11,m=b.color),"intensity"in b&&t(12,_=b.intensity),"$$scope"in b&&t(18,i=b.$$scope)},[p,r,o,a,l,c,u,h,f,d,g,m,_,w,n,y,v,S,i]}class q_ extends yt{constructor(e){super(),wt(this,e,X_,j_,bt,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,viewportAware:10,inViewport:0,color:11,intensity:12,light:13})}get light(){return this.$$.ctx[13]}}function Ml(s){let e,t,n,i;return e=new Pc({props:{object:s[14]}}),n=new Uo({props:{object:s[14],position:s[13]}}),{c(){Qe(e.$$.fragment),t=Be(),Qe(n.$$.fragment)},l(r){$e(e.$$.fragment,r),t=ze(r),$e(n.$$.fragment,r)},m(r,o){et(e,r,o),rt(r,t,o),et(n,r,o),i=!0},p(r,o){const a={};o&8192&&(a.position=r[13]),n.$set(a)},i(r){i||(Ie(e.$$.fragment,r),Ie(n.$$.fragment,r),i=!0)},o(r){Ne(e.$$.fragment,r),Ne(n.$$.fragment,r),i=!1},d(r){tt(e,r),r&&ae(t),tt(n,r)}}}function Y_(s){let e;const t=s[16].default,n=on(t,s,s[20],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&1048576)&&nn(n,t,i,i[20],e?rn(t,i[20],r,null):sn(i[20]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function Z_(s){let e,t,n,i,r=s[13]&&!(s[13]instanceof dt)&&Ml(s);function o(l){s[17](l)}let a={light:s[1],position:s[2],scale:s[3],rotation:s[4],castShadow:!!s[12],receiveShadow:s[5],frustumCulled:s[6],renderOrder:s[7],visible:s[8],viewportAware:s[9],color:s[10],intensity:s[11],$$slots:{default:[Y_]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),t=new Ic({props:a}),_n.push(()=>Ln(t,"inViewport",o)),t.$on("viewportenter",s[18]),t.$on("viewportleave",s[19]),{c(){r&&r.c(),e=Be(),Qe(t.$$.fragment)},l(l){r&&r.l(l),e=ze(l),$e(t.$$.fragment,l)},m(l,c){r&&r.m(l,c),rt(l,e,c),et(t,l,c),i=!0},p(l,[c]){l[13]&&!(l[13]instanceof dt)?r?(r.p(l,c),c&8192&&Ie(r,1)):(r=Ml(l),r.c(),Ie(r,1),r.m(e.parentNode,e)):r&&(Bl(),Ne(r,1,1,()=>{r=null}),zl());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&4096&&(u.castShadow=!!l[12]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.viewportAware=l[9]),c&1024&&(u.color=l[10]),c&2048&&(u.intensity=l[11]),c&1048576&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],Pn(()=>n=!1)),t.$set(u)},i(l){i||(Ie(r),Ie(t.$$.fragment,l),i=!0)},o(l){Ne(r),Ne(t.$$.fragment,l),i=!1},d(l){r&&r.d(l),l&&ae(e),tt(t,l)}}}function J_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:h=void 0}=e,{visible:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:g=!1}=e,{color:p=void 0}=e,{intensity:m=void 0}=e,{shadow:_=void 0}=e,{target:w=void 0}=e;const y=new zg(p,m),{invalidate:v}=ln(),S=y.target,{start:b,stop:P,started:x}=lr(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});xt(s,x,C=>t(21,n=C));const E=C=>{C&&C instanceof dt&&!n?(t(1,y.target=C,y),b(),v("DirectionalLight: target changed")):(!C||!(C instanceof dt))&&n&&(t(1,y.target=S,y),P(),v("DirectionalLight: target changed"))},U=C=>{if(C){const{mapSize:G=[512,512],camera:{left:z=-5,bottom:V=-5,right:W=5,top:N=5,near:I=.5,far:ne=500}={},bias:Q=0,radius:re=1}=C===!0?{}:C;y.shadow.mapSize.set(G[0],G[1]),t(1,y.shadow.camera.left=z,y),t(1,y.shadow.camera.top=N,y),t(1,y.shadow.camera.right=W,y),t(1,y.shadow.camera.bottom=V,y),t(1,y.shadow.camera.near=I,y),t(1,y.shadow.camera.far=ne,y),t(1,y.shadow.bias=Q,y),t(1,y.shadow.radius=re,y)}v("DirectionalLight: shadow changed")};function L(C){g=C,t(0,g)}function q(C){Je.call(this,s,C)}function B(C){Je.call(this,s,C)}return s.$$set=C=>{"position"in C&&t(2,o=C.position),"scale"in C&&t(3,a=C.scale),"rotation"in C&&t(4,l=C.rotation),"receiveShadow"in C&&t(5,c=C.receiveShadow),"frustumCulled"in C&&t(6,u=C.frustumCulled),"renderOrder"in C&&t(7,h=C.renderOrder),"visible"in C&&t(8,f=C.visible),"viewportAware"in C&&t(9,d=C.viewportAware),"inViewport"in C&&t(0,g=C.inViewport),"color"in C&&t(10,p=C.color),"intensity"in C&&t(11,m=C.intensity),"shadow"in C&&t(12,_=C.shadow),"target"in C&&t(13,w=C.target),"$$scope"in C&&t(20,r=C.$$scope)},s.$$.update=()=>{s.$$.dirty&8192&&E(w),s.$$.dirty&4096&&U(_)},[g,y,o,a,l,c,u,h,f,d,p,m,_,w,S,x,i,L,q,B,r]}class Tl extends yt{constructor(e){super(),wt(this,e,J_,Z_,bt,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,viewportAware:9,inViewport:0,color:10,intensity:11,shadow:12,target:13,light:1})}get light(){return this.$$.ctx[1]}}function Q_(s,e,t){let{object:n}=e,i=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=Zs(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:h}=Fo(),{invalidate:f}=ln(),d=p=>{h(p),c(p),delete Xt(p).eventDispatcher},g=(p,m,_)=>{Xt(p).eventDispatcher=a,m?(h(p),c(p)):(u(p),_?l(p):c(p))};return Et(()=>{d(n),f("InteractiveObject: object removed")}),s.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,r=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(n!==i?(d(i),g(n,o,r),f("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,o,r),f("InteractiveObject: props changed")))},[n,r,o,i]}class $_ extends yt{constructor(e){super(),wt(this,e,Q_,null,bt,{object:0,interactive:1,ignorePointer:2})}}function e0(s){let e;const t=s[14].default,n=on(t,s,s[25],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&33554432)&&nn(n,t,i,i[25],e?rn(t,i[25],r,null):sn(i[25]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function t0(s){let e,t,n,i,r;function o(l){s[15](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],viewportAware:s[6],$$slots:{default:[e0]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new cr({props:a}),_n.push(()=>Ln(e,"inViewport",o)),e.$on("viewportenter",s[16]),e.$on("viewportleave",s[17]),i=new $_({props:{object:s[1],interactive:s[12],ignorePointer:s[13]}}),i.$on("click",s[18]),i.$on("contextmenu",s[19]),i.$on("pointerup",s[20]),i.$on("pointerdown",s[21]),i.$on("pointerenter",s[22]),i.$on("pointerleave",s[23]),i.$on("pointermove",s[24]),{c(){Qe(e.$$.fragment),n=Be(),Qe(i.$$.fragment)},l(l){$e(e.$$.fragment,l),n=ze(l),$e(i.$$.fragment,l)},m(l,c){et(e,l,c),rt(l,n,c),et(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&64&&(u.viewportAware=l[6]),c&33554432&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Pn(()=>t=!1)),e.$set(u);const h={};c&2&&(h.object=l[1]),c&4096&&(h.interactive=l[12]),c&8192&&(h.ignorePointer=l[13]),i.$set(h)},i(l){r||(Ie(e.$$.fragment,l),Ie(i.$$.fragment,l),r=!0)},o(l){Ne(e.$$.fragment,l),Ne(i.$$.fragment,l),r=!1},d(l){tt(e,l),l&&ae(n),tt(i,l)}}}function n0(s,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{interactive:_=!1}=e,{ignorePointer:w=!1}=e;function y(B){h=B,t(0,h)}function v(B){Je.call(this,s,B)}function S(B){Je.call(this,s,B)}function b(B){Je.call(this,s,B)}function P(B){Je.call(this,s,B)}function x(B){Je.call(this,s,B)}function E(B){Je.call(this,s,B)}function U(B){Je.call(this,s,B)}function L(B){Je.call(this,s,B)}function q(B){Je.call(this,s,B)}return s.$$set=B=>{"mesh"in B&&t(1,r=B.mesh),"position"in B&&t(2,o=B.position),"scale"in B&&t(3,a=B.scale),"rotation"in B&&t(4,l=B.rotation),"lookAt"in B&&t(5,c=B.lookAt),"viewportAware"in B&&t(6,u=B.viewportAware),"inViewport"in B&&t(0,h=B.inViewport),"castShadow"in B&&t(7,f=B.castShadow),"receiveShadow"in B&&t(8,d=B.receiveShadow),"frustumCulled"in B&&t(9,g=B.frustumCulled),"renderOrder"in B&&t(10,p=B.renderOrder),"visible"in B&&t(11,m=B.visible),"interactive"in B&&t(12,_=B.interactive),"ignorePointer"in B&&t(13,w=B.ignorePointer),"$$scope"in B&&t(25,i=B.$$scope)},[h,r,o,a,l,c,u,f,d,g,p,m,_,w,n,y,v,S,b,P,x,E,U,L,q,i]}class i0 extends yt{constructor(e){super(),wt(this,e,n0,t0,bt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,interactive:12,ignorePointer:13})}}function s0(s){let e;const t=s[18].default,n=on(t,s,s[29],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[0]&536870912)&&nn(n,t,i,i[29],e?rn(t,i[29],r,null):sn(i[29]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function r0(s){let e,t,n;function i(o){s[19](o)}let r={mesh:s[13],position:s[1],scale:s[2],rotation:s[3],lookAt:s[12],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[10],ignorePointer:s[11],viewportAware:s[4],$$slots:{default:[s0]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new i0({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("click",s[20]),e.$on("contextmenu",s[21]),e.$on("pointerup",s[22]),e.$on("pointerdown",s[23]),e.$on("pointerenter",s[24]),e.$on("pointerleave",s[25]),e.$on("pointermove",s[26]),e.$on("viewportenter",s[27]),e.$on("viewportleave",s[28]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,a){const l={};a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&4096&&(l.lookAt=o[12]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.interactive=o[10]),a[0]&2048&&(l.ignorePointer=o[11]),a[0]&16&&(l.viewportAware=o[4]),a[0]&536870912&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function o0(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:g=void 0}=e,{interactive:p=!1}=e,{ignorePointer:m=!1}=e,{lookAt:_=void 0}=e,{geometry:w}=e,{material:y}=e,v=y,S=w;const{invalidate:b}=ln(),P=new dn(w,y),x=()=>P;function E(N){c=N,t(0,c)}function U(N){Je.call(this,s,N)}function L(N){Je.call(this,s,N)}function q(N){Je.call(this,s,N)}function B(N){Je.call(this,s,N)}function C(N){Je.call(this,s,N)}function G(N){Je.call(this,s,N)}function z(N){Je.call(this,s,N)}function V(N){Je.call(this,s,N)}function W(N){Je.call(this,s,N)}return s.$$set=N=>{"position"in N&&t(1,r=N.position),"scale"in N&&t(2,o=N.scale),"rotation"in N&&t(3,a=N.rotation),"viewportAware"in N&&t(4,l=N.viewportAware),"inViewport"in N&&t(0,c=N.inViewport),"castShadow"in N&&t(5,u=N.castShadow),"receiveShadow"in N&&t(6,h=N.receiveShadow),"frustumCulled"in N&&t(7,f=N.frustumCulled),"renderOrder"in N&&t(8,d=N.renderOrder),"visible"in N&&t(9,g=N.visible),"interactive"in N&&t(10,p=N.interactive),"ignorePointer"in N&&t(11,m=N.ignorePointer),"lookAt"in N&&t(12,_=N.lookAt),"geometry"in N&&t(14,w=N.geometry),"material"in N&&t(15,y=N.material),"$$scope"in N&&t(29,i=N.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&98304&&(y!==v?(x().material=y,b("Mesh: material changed")):b("Mesh: material props changed"),t(16,v=y)),s.$$.dirty[0]&147456&&(w!==S?(x().geometry=w,b("Mesh: geometry changed")):b("Mesh: geometry props changed"),t(17,S=w))},[c,r,o,a,l,u,h,f,d,g,p,m,_,P,w,y,v,S,n,E,U,L,q,B,C,G,z,V,W,i]}class Hs extends yt{constructor(e){super(),wt(this,e,o0,r0,bt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,geometry:14,material:15,mesh:13},null,[-1,-1])}get mesh(){return this.$$.ctx[13]}}const Oc=new dt;Oc.scale.set(0,0,0);Oc.matrix;new at().fromArray(new Array(16).fill(0));new Xe(16777215);function a0(s){let e;const t=s[12].default,n=on(t,s,s[16],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&65536)&&nn(n,t,i,i[16],e?rn(t,i[16],r,null):sn(i[16]),null)},i(i){e||(Ie(n,i),e=!0)},o(i){Ne(n,i),e=!1},d(i){n&&n.d(i)}}}function l0(s){let e,t,n;function i(o){s[13](o)}let r={object:s[11],position:s[1],scale:s[2],rotation:s[3],lookAt:s[4],frustumCulled:s[8],renderOrder:s[9],visible:s[10],castShadow:s[6],receiveShadow:s[7],viewportAware:s[5],$$slots:{default:[a0]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new cr({props:r}),_n.push(()=>Ln(e,"inViewport",i)),e.$on("viewportenter",s[14]),e.$on("viewportleave",s[15]),{c(){Qe(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){et(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&16&&(l.lookAt=o[4]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&32&&(l.viewportAware=o[5]),a&65536&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Pn(()=>t=!1)),e.$set(l)},i(o){n||(Ie(e.$$.fragment,o),n=!0)},o(o){Ne(e.$$.fragment,o),n=!1},d(o){tt(e,o)}}}function c0(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:g=void 0}=e,{visible:p=void 0}=e;const m=new Zi;function _(v){u=v,t(0,u)}function w(v){Je.call(this,s,v)}function y(v){Je.call(this,s,v)}return s.$$set=v=>{"position"in v&&t(1,r=v.position),"scale"in v&&t(2,o=v.scale),"rotation"in v&&t(3,a=v.rotation),"lookAt"in v&&t(4,l=v.lookAt),"viewportAware"in v&&t(5,c=v.viewportAware),"inViewport"in v&&t(0,u=v.inViewport),"castShadow"in v&&t(6,h=v.castShadow),"receiveShadow"in v&&t(7,f=v.receiveShadow),"frustumCulled"in v&&t(8,d=v.frustumCulled),"renderOrder"in v&&t(9,g=v.renderOrder),"visible"in v&&t(10,p=v.visible),"$$scope"in v&&t(16,i=v.$$scope)},[u,r,o,a,l,c,h,f,d,g,p,m,n,_,w,y,i]}class u0 extends yt{constructor(e){super(),wt(this,e,c0,l0,bt,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,group:11})}get group(){return this.$$.ctx[11]}}const Ow=new kt;class h0{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const f0=0,d0=1,p0=2,m0=3,g0=0,_0=0,v0=2,x0=0,y0=1,w0=160,b0=161,S0=162,M0=163,T0=0,E0=1,A0=0,R0=1,C0=2,L0=3,P0=4,D0=5,I0=6,O0=7,F0=8,N0=9,U0=10,B0=11,z0=12,k0=13,V0=14,G0=15,H0=16,W0=17,K0=18,j0=0,X0=1,q0=2,Y0=3,Z0=4,J0=5,Q0=6,$0=7,ev=8,tv=9,nv=10,iv=11,sv=0,rv=1,ov=2,av=13,lv=14,cv=15,uv=128,hv=64,fv=32,dv=16,pv=0,mv=1,gv=2,_v=3,vv=4,xv=5,yv=6,wv=7,bv=8,Sv=9,Mv=10,Tv=13,Ev=14,Av=15,Rv=16,Cv=17,Lv=20,Pv=21,Dv=22,Iv=23,Ov=24,Fv=27,Nv=28,Uv=29,Bv=30,zv=31,kv=34,Vv=35,Gv=36,Hv=37,Wv=38,Kv=41,jv=42,Xv=43,qv=44,Yv=45,Zv=48,Jv=49,Qv=50,$v=58,ex=59,tx=62,nx=63,ix=64,sx=65,rx=68,ox=69,ax=70,lx=71,cx=74,ux=75,hx=76,fx=77,dx=78,px=81,mx=82,gx=83,_x=84,vx=85,xx=88,yx=89,wx=90,bx=91,Sx=92,Mx=95,Tx=96,Ex=97,Ax=98,Rx=99,Cx=100,Lx=101,Px=102,Dx=103,Ix=104,Ox=105,Fx=106,Nx=107,Ux=108,Bx=109,zx=110,kx=111,Vx=112,Gx=113,Hx=114,Wx=115,Kx=116,jx=117,Xx=118,qx=119,Yx=120,Zx=121,Jx=122,Qx=123,$x=124,ey=125,ty=126,ny=127,iy=128,sy=129,ry=130,oy=131,ay=132,ly=133,cy=134,uy=135,hy=136,fy=137,dy=138,py=139,my=140,gy=141,_y=142,vy=143,xy=144,yy=145,wy=146,by=147,Sy=148,My=149,Ty=150,Ey=151,Ay=152,Ry=153,Cy=154,Ly=155,Py=156,Dy=157,Iy=158,Oy=159,Fy=160,Ny=161,Uy=162,By=163,zy=164,ky=165,Vy=166,Gy=167,Hy=168,Wy=169,Ky=170,jy=171,Xy=172,qy=173,Yy=174,Zy=175,Jy=176,Qy=177,$y=178,e1=179,t1=180,n1=181,i1=182,s1=183,r1=184,o1=1000156007,a1=1000156008,l1=1000156009,c1=1000156010,u1=1000156011,h1=1000156017,f1=1000156018,d1=1000156019,p1=1000156020,m1=1000156021,g1=1000054e3,_1=1000054001,v1=1000054002,x1=1000054003,y1=1000054004,w1=1000054005,b1=1000054006,S1=1000054007,M1=1000066e3,T1=1000066001,E1=1000066002,A1=1000066003,R1=1000066004,C1=1000066005,L1=1000066006,P1=1000066007,D1=1000066008,I1=1000066009,O1=1000066010,F1=1000066011,N1=1000066012,U1=1000066013,B1=100034e4,z1=1000340001;class Fc{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Ki{constructor(e,t,n,i){this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const El=new Uint8Array([0]),Mt=[171,75,84,88,32,50,48,187,13,10,26,10];function Al(s){return typeof TextEncoder!="undefined"?new TextEncoder().encode(s):Buffer.from(s)}function Rl(s){return typeof TextDecoder!="undefined"?new TextDecoder().decode(s):Buffer.from(s).toString("utf8")}function Us(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(new Uint8Array(i),n),n+=i.byteLength;return t}function k1(s){const e=new Uint8Array(s.buffer,s.byteOffset,Mt.length);if(e[0]!==Mt[0]||e[1]!==Mt[1]||e[2]!==Mt[2]||e[3]!==Mt[3]||e[4]!==Mt[4]||e[5]!==Mt[5]||e[6]!==Mt[6]||e[7]!==Mt[7]||e[8]!==Mt[8]||e[9]!==Mt[9]||e[10]!==Mt[10]||e[11]!==Mt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new Fc,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new Ki(s,Mt.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();const r=i._nextUint32();t.supercompressionScheme=i._nextUint32();const o=i._nextUint32(),a=i._nextUint32(),l=i._nextUint32(),c=i._nextUint32(),u=i._nextUint64(),h=i._nextUint64(),f=new Ki(s,Mt.length+n,3*r*8,!0);for(let V=0;V<r;V++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});const d=new Ki(s,o,a,!0),g={vendorId:d._skip(4)._nextUint16(),descriptorType:d._nextUint16(),versionNumber:d._nextUint16(),descriptorBlockSize:d._nextUint16(),colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},p=(g.descriptorBlockSize/4-6)/4;for(let V=0;V<p;V++){const W={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&W.channelType?(W.sampleLower=d._nextInt32(),W.sampleUpper=d._nextInt32()):(W.sampleLower=d._nextUint32(),W.sampleUpper=d._nextUint32()),g.samples[V]=W}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const m=new Ki(s,l,c,!0);for(;m._offset<c;){const V=m._nextUint32(),W=m._scan(V),N=Rl(W),I=m._scan(V-W.byteLength);t.keyValue[N]=N.match(/^ktx/i)?Rl(I):I,m._offset%4&&m._skip(4-m._offset%4)}if(h<=0)return t;const _=new Ki(s,u,h,!0),w=_._nextUint16(),y=_._nextUint16(),v=_._nextUint32(),S=_._nextUint32(),b=_._nextUint32(),P=_._nextUint32(),x=[];for(let V=0;V<r;V++)x.push({imageFlags:_._nextUint32(),rgbSliceByteOffset:_._nextUint32(),rgbSliceByteLength:_._nextUint32(),alphaSliceByteOffset:_._nextUint32(),alphaSliceByteLength:_._nextUint32()});const E=u+_._offset,U=E+v,L=U+S,q=L+b,B=new Uint8Array(s.buffer,s.byteOffset+E,v),C=new Uint8Array(s.buffer,s.byteOffset+U,S),G=new Uint8Array(s.buffer,s.byteOffset+L,b),z=new Uint8Array(s.buffer,s.byteOffset+q,P);return t.globalData={endpointCount:w,selectorCount:y,imageDescs:x,endpointsData:B,selectorsData:C,tablesData:G,extendedData:z},t}function xo(){return(xo=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s}).apply(this,arguments)}const V1={keepWriter:!1};function G1(s,e={}){e=xo({},V1,e);let t=new ArrayBuffer(0);if(s.globalData){const w=new ArrayBuffer(20+5*s.globalData.imageDescs.length*4),y=new DataView(w);y.setUint16(0,s.globalData.endpointCount,!0),y.setUint16(2,s.globalData.selectorCount,!0),y.setUint32(4,s.globalData.endpointsData.byteLength,!0),y.setUint32(8,s.globalData.selectorsData.byteLength,!0),y.setUint32(12,s.globalData.tablesData.byteLength,!0),y.setUint32(16,s.globalData.extendedData.byteLength,!0);for(let v=0;v<s.globalData.imageDescs.length;v++){const S=s.globalData.imageDescs[v];y.setUint32(20+5*v*4+0,S.imageFlags,!0),y.setUint32(20+5*v*4+4,S.rgbSliceByteOffset,!0),y.setUint32(20+5*v*4+8,S.rgbSliceByteLength,!0),y.setUint32(20+5*v*4+12,S.alphaSliceByteOffset,!0),y.setUint32(20+5*v*4+16,S.alphaSliceByteLength,!0)}t=Us([w,s.globalData.endpointsData,s.globalData.selectorsData,s.globalData.tablesData,s.globalData.extendedData])}const n=[];let i=s.keyValue;e.keepWriter||(i=xo({},s.keyValue,{KTXwriter:"KTX-Parse v0.3.1"}));for(const w in i){const y=i[w],v=Al(w),S=typeof y=="string"?Al(y):y,b=v.byteLength+1+S.byteLength+1,P=b%4?4-b%4:0;n.push(Us([new Uint32Array([b]),v,El,S,El,new Uint8Array(P).fill(0)]))}const r=Us(n);if(s.dataFormatDescriptor.length!==1||s.dataFormatDescriptor[0].descriptorType!==0)throw new Error("Only BASICFORMAT Data Format Descriptor output supported.");const o=s.dataFormatDescriptor[0],a=new ArrayBuffer(28+16*o.samples.length),l=new DataView(a),c=24+16*o.samples.length;if(l.setUint32(0,a.byteLength,!0),l.setUint16(4,o.vendorId,!0),l.setUint16(6,o.descriptorType,!0),l.setUint16(8,o.versionNumber,!0),l.setUint16(10,c,!0),l.setUint8(12,o.colorModel),l.setUint8(13,o.colorPrimaries),l.setUint8(14,o.transferFunction),l.setUint8(15,o.flags),!Array.isArray(o.texelBlockDimension))throw new Error("texelBlockDimension is now an array. For dimensionality `d`, set `d - 1`.");l.setUint8(16,o.texelBlockDimension[0]),l.setUint8(17,o.texelBlockDimension[1]),l.setUint8(18,o.texelBlockDimension[2]),l.setUint8(19,o.texelBlockDimension[3]);for(let w=0;w<8;w++)l.setUint8(20+w,o.bytesPlane[w]);for(let w=0;w<o.samples.length;w++){const y=o.samples[w],v=28+16*w;if(y.channelID)throw new Error("channelID has been renamed to channelType.");l.setUint16(v+0,y.bitOffset,!0),l.setUint8(v+2,y.bitLength),l.setUint8(v+3,y.channelType),l.setUint8(v+4,y.samplePosition[0]),l.setUint8(v+5,y.samplePosition[1]),l.setUint8(v+6,y.samplePosition[2]),l.setUint8(v+7,y.samplePosition[3]),64&y.channelType?(l.setInt32(v+8,y.sampleLower,!0),l.setInt32(v+12,y.sampleUpper,!0)):(l.setUint32(v+8,y.sampleLower,!0),l.setUint32(v+12,y.sampleUpper,!0))}const u=Mt.length+68+3*s.levels.length*8,h=u+a.byteLength;let f=t.byteLength>0?h+r.byteLength:0;f%8&&(f+=8-f%8);const d=[],g=new DataView(new ArrayBuffer(3*s.levels.length*8));let p=(f||h+r.byteLength)+t.byteLength;for(let w=0;w<s.levels.length;w++){const y=s.levels[w];d.push(y.levelData),g.setBigUint64(24*w+0,BigInt(p),!0),g.setBigUint64(24*w+8,BigInt(y.levelData.byteLength),!0),g.setBigUint64(24*w+16,BigInt(y.uncompressedByteLength),!0),p+=y.levelData.byteLength}const m=new ArrayBuffer(68),_=new DataView(m);return _.setUint32(0,s.vkFormat,!0),_.setUint32(4,s.typeSize,!0),_.setUint32(8,s.pixelWidth,!0),_.setUint32(12,s.pixelHeight,!0),_.setUint32(16,s.pixelDepth,!0),_.setUint32(20,s.layerCount,!0),_.setUint32(24,s.faceCount,!0),_.setUint32(28,s.levels.length,!0),_.setUint32(32,s.supercompressionScheme,!0),_.setUint32(36,u,!0),_.setUint32(40,a.byteLength,!0),_.setUint32(44,h,!0),_.setUint32(48,r.byteLength,!0),_.setBigUint64(52,BigInt(t.byteLength>0?f:0),!0),_.setBigUint64(60,BigInt(t.byteLength),!0),new Uint8Array(Us([new Uint8Array(Mt).buffer,m,g.buffer,a,r,f>0?new ArrayBuffer(f-(h+r.byteLength)):new ArrayBuffer(0),t,...d]))}var H1=Object.freeze(Object.defineProperty({__proto__:null,KHR_DF_CHANNEL_RGBSDA_ALPHA:cv,KHR_DF_CHANNEL_RGBSDA_BLUE:ov,KHR_DF_CHANNEL_RGBSDA_DEPTH:lv,KHR_DF_CHANNEL_RGBSDA_GREEN:rv,KHR_DF_CHANNEL_RGBSDA_RED:sv,KHR_DF_CHANNEL_RGBSDA_STENCIL:av,KHR_DF_FLAG_ALPHA_PREMULTIPLIED:E0,KHR_DF_FLAG_ALPHA_STRAIGHT:T0,KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT:g0,KHR_DF_MODEL_ASTC:S0,KHR_DF_MODEL_ETC1:w0,KHR_DF_MODEL_ETC1S:M0,KHR_DF_MODEL_ETC2:b0,KHR_DF_MODEL_RGBSDA:y0,KHR_DF_MODEL_UNSPECIFIED:x0,KHR_DF_PRIMARIES_ACES:Q0,KHR_DF_PRIMARIES_ACESCC:$0,KHR_DF_PRIMARIES_ADOBERGB:iv,KHR_DF_PRIMARIES_BT2020:Z0,KHR_DF_PRIMARIES_BT601_EBU:q0,KHR_DF_PRIMARIES_BT601_SMPTE:Y0,KHR_DF_PRIMARIES_BT709:X0,KHR_DF_PRIMARIES_CIEXYZ:J0,KHR_DF_PRIMARIES_DISPLAYP3:nv,KHR_DF_PRIMARIES_NTSC1953:ev,KHR_DF_PRIMARIES_PAL525:tv,KHR_DF_PRIMARIES_UNSPECIFIED:j0,KHR_DF_SAMPLE_DATATYPE_EXPONENT:fv,KHR_DF_SAMPLE_DATATYPE_FLOAT:uv,KHR_DF_SAMPLE_DATATYPE_LINEAR:dv,KHR_DF_SAMPLE_DATATYPE_SIGNED:hv,KHR_DF_TRANSFER_ACESCC:H0,KHR_DF_TRANSFER_ACESCCT:W0,KHR_DF_TRANSFER_ADOBERGB:K0,KHR_DF_TRANSFER_BT1886:O0,KHR_DF_TRANSFER_DCIP3:z0,KHR_DF_TRANSFER_HLG_EOTF:N0,KHR_DF_TRANSFER_HLG_OETF:F0,KHR_DF_TRANSFER_ITU:L0,KHR_DF_TRANSFER_LINEAR:R0,KHR_DF_TRANSFER_NTSC:P0,KHR_DF_TRANSFER_PAL625_EOTF:V0,KHR_DF_TRANSFER_PAL_OETF:k0,KHR_DF_TRANSFER_PQ_EOTF:U0,KHR_DF_TRANSFER_PQ_OETF:B0,KHR_DF_TRANSFER_SLOG:D0,KHR_DF_TRANSFER_SLOG2:I0,KHR_DF_TRANSFER_SRGB:C0,KHR_DF_TRANSFER_ST240:G0,KHR_DF_TRANSFER_UNSPECIFIED:A0,KHR_DF_VENDORID_KHRONOS:_0,KHR_DF_VERSION:v0,KHR_SUPERCOMPRESSION_BASISLZ:d0,KHR_SUPERCOMPRESSION_NONE:f0,KHR_SUPERCOMPRESSION_ZLIB:m0,KHR_SUPERCOMPRESSION_ZSTD:p0,KTX2Container:Fc,VK_FORMAT_A1R5G5B5_UNORM_PACK16:bv,VK_FORMAT_A2B10G10R10_SINT_PACK32:ox,VK_FORMAT_A2B10G10R10_SNORM_PACK32:sx,VK_FORMAT_A2B10G10R10_UINT_PACK32:rx,VK_FORMAT_A2B10G10R10_UNORM_PACK32:ix,VK_FORMAT_A2R10G10B10_SINT_PACK32:nx,VK_FORMAT_A2R10G10B10_SNORM_PACK32:ex,VK_FORMAT_A2R10G10B10_UINT_PACK32:tx,VK_FORMAT_A2R10G10B10_UNORM_PACK32:$v,VK_FORMAT_A4B4G4R4_UNORM_PACK16_EXT:z1,VK_FORMAT_A4R4G4B4_UNORM_PACK16_EXT:B1,VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT:F1,VK_FORMAT_ASTC_10x10_SRGB_BLOCK:t1,VK_FORMAT_ASTC_10x10_UNORM_BLOCK:e1,VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT:D1,VK_FORMAT_ASTC_10x5_SRGB_BLOCK:Yy,VK_FORMAT_ASTC_10x5_UNORM_BLOCK:qy,VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT:I1,VK_FORMAT_ASTC_10x6_SRGB_BLOCK:Jy,VK_FORMAT_ASTC_10x6_UNORM_BLOCK:Zy,VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT:O1,VK_FORMAT_ASTC_10x8_SRGB_BLOCK:$y,VK_FORMAT_ASTC_10x8_UNORM_BLOCK:Qy,VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT:N1,VK_FORMAT_ASTC_12x10_SRGB_BLOCK:i1,VK_FORMAT_ASTC_12x10_UNORM_BLOCK:n1,VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT:U1,VK_FORMAT_ASTC_12x12_SRGB_BLOCK:r1,VK_FORMAT_ASTC_12x12_UNORM_BLOCK:s1,VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT:M1,VK_FORMAT_ASTC_4x4_SRGB_BLOCK:Iy,VK_FORMAT_ASTC_4x4_UNORM_BLOCK:Dy,VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT:T1,VK_FORMAT_ASTC_5x4_SRGB_BLOCK:Fy,VK_FORMAT_ASTC_5x4_UNORM_BLOCK:Oy,VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT:E1,VK_FORMAT_ASTC_5x5_SRGB_BLOCK:Uy,VK_FORMAT_ASTC_5x5_UNORM_BLOCK:Ny,VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT:A1,VK_FORMAT_ASTC_6x5_SRGB_BLOCK:zy,VK_FORMAT_ASTC_6x5_UNORM_BLOCK:By,VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT:R1,VK_FORMAT_ASTC_6x6_SRGB_BLOCK:Vy,VK_FORMAT_ASTC_6x6_UNORM_BLOCK:ky,VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT:C1,VK_FORMAT_ASTC_8x5_SRGB_BLOCK:Hy,VK_FORMAT_ASTC_8x5_UNORM_BLOCK:Gy,VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT:L1,VK_FORMAT_ASTC_8x6_SRGB_BLOCK:Ky,VK_FORMAT_ASTC_8x6_UNORM_BLOCK:Wy,VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT:P1,VK_FORMAT_ASTC_8x8_SRGB_BLOCK:Xy,VK_FORMAT_ASTC_8x8_UNORM_BLOCK:jy,VK_FORMAT_B10G11R11_UFLOAT_PACK32:Jx,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16:u1,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16:m1,VK_FORMAT_B4G4R4A4_UNORM_PACK16:_v,VK_FORMAT_B5G5R5A1_UNORM_PACK16:wv,VK_FORMAT_B5G6R5_UNORM_PACK16:xv,VK_FORMAT_B8G8R8A8_SINT:Jv,VK_FORMAT_B8G8R8A8_SNORM:Yv,VK_FORMAT_B8G8R8A8_SRGB:Qv,VK_FORMAT_B8G8R8A8_UINT:Zv,VK_FORMAT_B8G8R8A8_UNORM:qv,VK_FORMAT_B8G8R8_SINT:Vv,VK_FORMAT_B8G8R8_SNORM:zv,VK_FORMAT_B8G8R8_SRGB:Gv,VK_FORMAT_B8G8R8_UINT:kv,VK_FORMAT_B8G8R8_UNORM:Bv,VK_FORMAT_BC1_RGBA_SRGB_BLOCK:cy,VK_FORMAT_BC1_RGBA_UNORM_BLOCK:ly,VK_FORMAT_BC1_RGB_SRGB_BLOCK:ay,VK_FORMAT_BC1_RGB_UNORM_BLOCK:oy,VK_FORMAT_BC2_SRGB_BLOCK:hy,VK_FORMAT_BC2_UNORM_BLOCK:uy,VK_FORMAT_BC3_SRGB_BLOCK:dy,VK_FORMAT_BC3_UNORM_BLOCK:fy,VK_FORMAT_BC4_SNORM_BLOCK:my,VK_FORMAT_BC4_UNORM_BLOCK:py,VK_FORMAT_BC5_SNORM_BLOCK:_y,VK_FORMAT_BC5_UNORM_BLOCK:gy,VK_FORMAT_BC6H_SFLOAT_BLOCK:xy,VK_FORMAT_BC6H_UFLOAT_BLOCK:vy,VK_FORMAT_BC7_SRGB_BLOCK:wy,VK_FORMAT_BC7_UNORM_BLOCK:yy,VK_FORMAT_D16_UNORM:$x,VK_FORMAT_D16_UNORM_S8_UINT:iy,VK_FORMAT_D24_UNORM_S8_UINT:sy,VK_FORMAT_D32_SFLOAT:ty,VK_FORMAT_D32_SFLOAT_S8_UINT:ry,VK_FORMAT_E5B9G9R9_UFLOAT_PACK32:Qx,VK_FORMAT_EAC_R11G11_SNORM_BLOCK:Py,VK_FORMAT_EAC_R11G11_UNORM_BLOCK:Ly,VK_FORMAT_EAC_R11_SNORM_BLOCK:Cy,VK_FORMAT_EAC_R11_UNORM_BLOCK:Ry,VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK:Ty,VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK:My,VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK:Ay,VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK:Ey,VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK:Sy,VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK:by,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16:c1,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16:p1,VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG:y1,VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG:g1,VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG:w1,VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG:_1,VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG:b1,VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG:v1,VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG:S1,VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG:x1,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16:l1,VK_FORMAT_R10X6G10X6_UNORM_2PACK16:a1,VK_FORMAT_R10X6_UNORM_PACK16:o1,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16:d1,VK_FORMAT_R12X4G12X4_UNORM_2PACK16:f1,VK_FORMAT_R12X4_UNORM_PACK16:h1,VK_FORMAT_R16G16B16A16_SFLOAT:Ex,VK_FORMAT_R16G16B16A16_SINT:Tx,VK_FORMAT_R16G16B16A16_SNORM:Sx,VK_FORMAT_R16G16B16A16_UINT:Mx,VK_FORMAT_R16G16B16A16_UNORM:bx,VK_FORMAT_R16G16B16_SFLOAT:wx,VK_FORMAT_R16G16B16_SINT:yx,VK_FORMAT_R16G16B16_SNORM:vx,VK_FORMAT_R16G16B16_UINT:xx,VK_FORMAT_R16G16B16_UNORM:_x,VK_FORMAT_R16G16_SFLOAT:gx,VK_FORMAT_R16G16_SINT:mx,VK_FORMAT_R16G16_SNORM:dx,VK_FORMAT_R16G16_UINT:px,VK_FORMAT_R16G16_UNORM:fx,VK_FORMAT_R16_SFLOAT:hx,VK_FORMAT_R16_SINT:ux,VK_FORMAT_R16_SNORM:lx,VK_FORMAT_R16_UINT:cx,VK_FORMAT_R16_UNORM:ax,VK_FORMAT_R32G32B32A32_SFLOAT:Bx,VK_FORMAT_R32G32B32A32_SINT:Ux,VK_FORMAT_R32G32B32A32_UINT:Nx,VK_FORMAT_R32G32B32_SFLOAT:Fx,VK_FORMAT_R32G32B32_SINT:Ox,VK_FORMAT_R32G32B32_UINT:Ix,VK_FORMAT_R32G32_SFLOAT:Dx,VK_FORMAT_R32G32_SINT:Px,VK_FORMAT_R32G32_UINT:Lx,VK_FORMAT_R32_SFLOAT:Cx,VK_FORMAT_R32_SINT:Rx,VK_FORMAT_R32_UINT:Ax,VK_FORMAT_R4G4B4A4_UNORM_PACK16:gv,VK_FORMAT_R4G4_UNORM_PACK8:mv,VK_FORMAT_R5G5B5A1_UNORM_PACK16:yv,VK_FORMAT_R5G6B5_UNORM_PACK16:vv,VK_FORMAT_R64G64B64A64_SFLOAT:Zx,VK_FORMAT_R64G64B64A64_SINT:Yx,VK_FORMAT_R64G64B64A64_UINT:qx,VK_FORMAT_R64G64B64_SFLOAT:Xx,VK_FORMAT_R64G64B64_SINT:jx,VK_FORMAT_R64G64B64_UINT:Kx,VK_FORMAT_R64G64_SFLOAT:Wx,VK_FORMAT_R64G64_SINT:Hx,VK_FORMAT_R64G64_UINT:Gx,VK_FORMAT_R64_SFLOAT:Vx,VK_FORMAT_R64_SINT:kx,VK_FORMAT_R64_UINT:zx,VK_FORMAT_R8G8B8A8_SINT:jv,VK_FORMAT_R8G8B8A8_SNORM:Wv,VK_FORMAT_R8G8B8A8_SRGB:Xv,VK_FORMAT_R8G8B8A8_UINT:Kv,VK_FORMAT_R8G8B8A8_UNORM:Hv,VK_FORMAT_R8G8B8_SINT:Nv,VK_FORMAT_R8G8B8_SNORM:Ov,VK_FORMAT_R8G8B8_SRGB:Uv,VK_FORMAT_R8G8B8_UINT:Fv,VK_FORMAT_R8G8B8_UNORM:Iv,VK_FORMAT_R8G8_SINT:Pv,VK_FORMAT_R8G8_SNORM:Cv,VK_FORMAT_R8G8_SRGB:Dv,VK_FORMAT_R8G8_UINT:Lv,VK_FORMAT_R8G8_UNORM:Rv,VK_FORMAT_R8_SINT:Ev,VK_FORMAT_R8_SNORM:Mv,VK_FORMAT_R8_SRGB:Av,VK_FORMAT_R8_UINT:Tv,VK_FORMAT_R8_UNORM:Sv,VK_FORMAT_S8_UINT:ny,VK_FORMAT_UNDEFINED:pv,VK_FORMAT_X8_D24_UNORM_PACK32:ey,read:k1,write:G1},Symbol.toStringTag,{value:"Module"}));const{read:W1,KHR_DF_FLAG_ALPHA_PREMULTIPLIED:K1,KHR_DF_TRANSFER_SRGB:j1,VK_FORMAT_UNDEFINED:X1,VK_FORMAT_R16_SFLOAT:Nc,VK_FORMAT_R16G16_SFLOAT:Uc,VK_FORMAT_R16G16B16A16_SFLOAT:Bc,VK_FORMAT_R32_SFLOAT:zc,VK_FORMAT_R32G32_SFLOAT:kc,VK_FORMAT_R32G32B32A32_SFLOAT:Vc,VK_FORMAT_R8_SRGB:Bo,VK_FORMAT_R8_UNORM:Gc,VK_FORMAT_R8G8_SRGB:zo,VK_FORMAT_R8G8_UNORM:Hc,VK_FORMAT_R8G8B8A8_SRGB:ko,VK_FORMAT_R8G8B8A8_UNORM:Wc}=H1,Qr=new WeakMap;let $r=0;class An extends rr{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new h0,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER!="undefined"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new Zr(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Zr(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,o])=>{const a=An.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(An.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(An.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(An.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),$r>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),$r++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Zr(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,o=>{if(Qr.has(o))return Qr.get(o).promise.then(t).catch(i);this._createTexture(o).then(a=>t?t(a):null).catch(i)},n,i)}_createTextureFrom(e){const{mipmaps:t,width:n,height:i,format:r,type:o,error:a,dfdTransferFn:l,dfdFlags:c}=e;if(o==="error")return Promise.reject(a);const u=new qm(t,n,i,r,Bt);return u.minFilter=t.length===1?Ut:as,u.magFilter=Ut,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=l===j1?ot:gn,u.premultiplyAlpha=!!(c&K1),u}_createTexture(e,t={}){const n=W1(new Uint8Array(e));if(n.vkFormat!==X1)return Y1(n);const i=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:i},[e])).then(o=>this._createTextureFrom(o.data));return Qr.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),$r--,this}}An.BasisFormat={ETC1S:0,UASTC_4x4:1};An.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};An.EngineFormat={RGBAFormat:It,RGBA_ASTC_4x4_Format:uo,RGBA_BPTC_Format:ho,RGBA_ETC2_EAC_Format:co,RGBA_PVRTC_4BPPV1_Format:ao,RGBA_S3TC_DXT5_Format:zs,RGB_ETC1_Format:Yl,RGB_ETC2_Format:lo,RGB_PVRTC_4BPPV1_Format:oo,RGB_S3TC_DXT1_Format:Bs};An.BasisWorker=function(){let s,e,t;const n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(d){const g=d.data;switch(g.type){case"init":s=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:p,height:m,hasAlpha:_,mipmaps:w,format:y,dfdTransferFn:v,dfdFlags:S}=a(g.buffer),b=[];for(let P=0;P<w.length;++P)b.push(w[P].data.buffer);self.postMessage({type:"transcode",id:g.id,width:p,height:m,hasAlpha:_,mipmaps:w,format:y,dfdTransferFn:v,dfdFlags:S},b)}catch(p){console.error(p),self.postMessage({type:"error",id:g.id,error:p.message})}});break}});function o(d){e=new Promise(g=>{t={wasmBinary:d,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(d){const g=new t.KTX2File(new Uint8Array(d));function p(){g.close(),g.delete()}if(!g.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const m=g.isUASTC()?r.UASTC_4x4:r.ETC1S,_=g.getWidth(),w=g.getHeight(),y=g.getLevels(),v=g.getHasAlpha(),S=g.getDFDTransferFunc(),b=g.getDFDFlags(),{transcoderFormat:P,engineFormat:x}=h(m,_,w,v);if(!_||!w||!y)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const E=[];for(let U=0;U<y;U++){const L=g.getImageLevelInfo(U,0,0),q=L.origWidth,B=L.origHeight,C=new Uint8Array(g.getImageTranscodedSizeInBytes(U,0,0,P));if(!g.transcodeImage(C,U,0,0,P,0,-1,-1))throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");E.push({data:C,width:q,height:B})}return p(),{width:_,height:w,hasAlpha:v,mipmaps:E,format:x,dfdTransferFn:S,dfdFlags:b}}const l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(d,g){return d.priorityETC1S-g.priorityETC1S}),u=l.sort(function(d,g){return d.priorityUASTC-g.priorityUASTC});function h(d,g,p,m){let _,w;const y=d===r.ETC1S?c:u;for(let v=0;v<y.length;v++){const S=y[v];if(!!s[S.if]&&!!S.basisFormat.includes(d)&&!(m&&S.transcoderFormat.length<2)&&!(S.needsPowerOfTwo&&!(f(g)&&f(p))))return _=S.transcoderFormat[m?1:0],w=S.engineFormat[m?1:0],{transcoderFormat:_,engineFormat:w}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),_=i.RGBA32,w=n.RGBAFormat,{transcoderFormat:_,engineFormat:w}}function f(d){return d<=2?!0:(d&d-1)===0&&d!==0}};const Cl={[Vc]:It,[Bc]:It,[Wc]:It,[ko]:It,[kc]:qi,[Uc]:qi,[Hc]:qi,[zo]:qi,[zc]:Xi,[Nc]:Xi,[Bo]:Xi,[Gc]:Xi},eo={[Vc]:en,[Bc]:Rn,[Wc]:Bt,[ko]:Bt,[kc]:en,[Uc]:Rn,[Hc]:Bt,[zo]:Bt,[zc]:en,[Nc]:Rn,[Bo]:Bt,[Gc]:Bt},q1={[ko]:ot,[zo]:ot,[Bo]:ot};function Y1(s){const{vkFormat:e,pixelWidth:t,pixelHeight:n,pixelDepth:i}=s;if(Cl[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let r;const o=s.levels[0].levelData;eo[e]===en?r=new Float32Array(o.buffer,o.byteOffset,o.byteLength/Float32Array.BYTES_PER_ELEMENT):eo[e]===Rn?r=new Uint16Array(o.buffer,o.byteOffset,o.byteLength/Uint16Array.BYTES_PER_ELEMENT):r=o;const a=i===0?new Xm(r,t,n):new nc(r,t,n,i);return a.type=eo[e],a.format=Cl[e],a.encoding=q1[e]||gn,a.needsUpdate=!0,Promise.resolve(a)}const Fw=new ri,Nw=new F;ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qt.line={uniforms:So.merge([ve.common,ve.fog,ve.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};const Uw=new F,Bw=new F,zw=new ht,kw=new ht,Vw=new ht,Gw=new F,Hw=new at,Ww=new Zg,Kw=new F,jw=new ri,Xw=new $s,qw=new ht;N_(rl,()=>new rl);function Ll(s){return Object.prototype.toString.call(s)==="[object Date]"}function yo(s,e,t,n){if(typeof t=="number"||Ll(t)){const i=n-t,r=(t-e)/(s.dt||1/60),o=s.opts.stiffness*i,a=s.opts.damping*r,l=(o-a)*s.inv_mass,c=(r+l)*s.dt;return Math.abs(c)<s.opts.precision&&Math.abs(i)<s.opts.precision?n:(s.settled=!1,Ll(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((i,r)=>yo(s,e[r],t[r],n[r]));if(typeof t=="object"){const i={};for(const r in t)i[r]=yo(s,e[r],t[r],n[r]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function Z1(s,e={}){const t=Nt(s),{stiffness:n=.15,damping:i=.8,precision:r=.01}=e;let o,a,l,c=s,u=s,h=1,f=0,d=!1;function g(m,_={}){u=m;const w=l={};if(s==null||_.hard||p.stiffness>=1&&p.damping>=1)return d=!0,o=Go(),c=m,t.set(s=u),Promise.resolve();if(_.soft){const y=_.soft===!0?.5:+_.soft;f=1/(y*60),h=0}return a||(o=Go(),d=!1,a=Zc(y=>{if(d)return d=!1,a=null,!1;h=Math.min(h+f,1);const v={inv_mass:h,opts:p,settled:!0,dt:(y-o)*60/1e3},S=yo(v,c,s,u);return o=y,c=s,t.set(s=S),v.settled&&(a=null),!v.settled})),new Promise(y=>{a.promise.then(()=>{w===l&&y()})})}const p={set:g,update:(m,_)=>g(m(u,s),_),subscribe:t.subscribe,stiffness:n,damping:i,precision:r};return p}function J1(s){let e,t;return e=new k_({props:{maxPolarAngle:Ec*80,autoRotate:!0,enableZoom:!0,target:{y:.5}}}),{c(){Qe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,i){et(e,n,i),t=!0},p:Js,i(n){t||(Ie(e.$$.fragment,n),t=!0)},o(n){Ne(e.$$.fragment,n),t=!1},d(n){tt(e,n)}}}function Q1(s){let e,t,n,i,r,o;return e=new Hs({props:{interactive:!0,castShadow:!0,geometry:new es(s[3],s[6]),material:s[0]}}),e.$on("pointerenter",s[7]),e.$on("pointerleave",s[8]),n=new Hs({props:{castShadow:!0,geometry:new es(s[4],s[6]),material:s[0]}}),r=new Hs({props:{castShadow:!0,geometry:new es(s[5],s[6]),material:s[0]}}),{c(){Qe(e.$$.fragment),t=Be(),Qe(n.$$.fragment),i=Be(),Qe(r.$$.fragment)},l(a){$e(e.$$.fragment,a),t=ze(a),$e(n.$$.fragment,a),i=ze(a),$e(r.$$.fragment,a)},m(a,l){et(e,a,l),rt(a,t,l),et(n,a,l),rt(a,i,l),et(r,a,l),o=!0},p(a,l){const c={};l&1&&(c.material=a[0]),e.$set(c);const u={};l&1&&(u.material=a[0]),n.$set(u);const h={};l&1&&(h.material=a[0]),r.$set(h)},i(a){o||(Ie(e.$$.fragment,a),Ie(n.$$.fragment,a),Ie(r.$$.fragment,a),o=!0)},o(a){Ne(e.$$.fragment,a),Ne(n.$$.fragment,a),Ne(r.$$.fragment,a),o=!1},d(a){tt(e,a),a&&ae(t),tt(n,a),a&&ae(i),tt(r,a)}}}function $1(s){let e,t,n,i,r,o,a,l,c,u,h,f;return e=new F_({props:{position:{x:0,y:0,z:-40},fov:24,$$slots:{default:[J1]},$$scope:{ctx:s}}}),n=new Tl({props:{shadow:!0,position:{x:3,y:10,z:10}}}),r=new Tl({props:{position:{x:-3,y:10,z:-10},intensity:.2}}),a=new q_({props:{intensity:.5}}),c=new u0({props:{scale:s[1],rotation:{z:Ec*90},position:{x:2.5},$$slots:{default:[Q1]},$$scope:{ctx:s}}}),h=new Hs({props:{receiveShadow:!0,rotation:{x:-90*(Math.PI/180)},position:{y:-1},geometry:new Lo(3,72),material:new bc({side:ii,color:"white"})}}),{c(){Qe(e.$$.fragment),t=Be(),Qe(n.$$.fragment),i=Be(),Qe(r.$$.fragment),o=Be(),Qe(a.$$.fragment),l=Be(),Qe(c.$$.fragment),u=Be(),Qe(h.$$.fragment)},l(d){$e(e.$$.fragment,d),t=ze(d),$e(n.$$.fragment,d),i=ze(d),$e(r.$$.fragment,d),o=ze(d),$e(a.$$.fragment,d),l=ze(d),$e(c.$$.fragment,d),u=ze(d),$e(h.$$.fragment,d)},m(d,g){et(e,d,g),rt(d,t,g),et(n,d,g),rt(d,i,g),et(r,d,g),rt(d,o,g),et(a,d,g),rt(d,l,g),et(c,d,g),rt(d,u,g),et(h,d,g),f=!0},p(d,g){const p={};g&2048&&(p.$$scope={dirty:g,ctx:d}),e.$set(p);const m={};g&2&&(m.scale=d[1]),g&2051&&(m.$$scope={dirty:g,ctx:d}),c.$set(m)},i(d){f||(Ie(e.$$.fragment,d),Ie(n.$$.fragment,d),Ie(r.$$.fragment,d),Ie(a.$$.fragment,d),Ie(c.$$.fragment,d),Ie(h.$$.fragment,d),f=!0)},o(d){Ne(e.$$.fragment,d),Ne(n.$$.fragment,d),Ne(r.$$.fragment,d),Ne(a.$$.fragment,d),Ne(c.$$.fragment,d),Ne(h.$$.fragment,d),f=!1},d(d){tt(e,d),d&&ae(t),tt(n,d),d&&ae(i),tt(r,d),d&&ae(o),tt(a,d),d&&ae(l),tt(c,d),d&&ae(u),tt(h,d)}}}function ew(s){let e,t,n;return t=new g_({props:{$$slots:{default:[$1]},$$scope:{ctx:s}}}),{c(){e=Se("div"),Qe(t.$$.fragment),this.h()},l(i){e=Me(i,"DIV",{class:!0});var r=Re(e);$e(t.$$.fragment,r),r.forEach(ae),this.h()},h(){ie(e,"class","w-full h-screen")},m(i,r){rt(i,e,r),et(t,e,null),n=!0},p(i,[r]){const o={};r&2051&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){n||(Ie(t.$$.fragment,i),n=!0)},o(i){Ne(t.$$.fragment,i),n=!1},d(i){i&&ae(e),tt(t)}}}function tw(s,e,t){let n;const i=Z1(1);xt(s,i,g=>t(1,n=g));let r=new Gs;r.moveTo(0,0).lineTo(0,6).lineTo(1,5).lineTo(1,1).lineTo(5,1).lineTo(5,5).lineTo(6,6).lineTo(6,0).lineTo(0,0);let o=new Gs;o.moveTo(2,2).lineTo(2,4).lineTo(3,3).lineTo(4,4).lineTo(4,2).lineTo(2,2);let a=new Gs;a.moveTo(1,6).lineTo(3,4).lineTo(5,6).lineTo(1,6);let l={depth:1},c=0,u=new Xe("hsl(0, 100%, 50%)"),h=new bc({color:u});return setInterval(()=>{c+=.01,c>1&&(c-=1),u.setHSL(c,1,.5),t(0,h.color=u,h)},100),[h,n,i,r,o,a,l,()=>Ci(i,n=1.2,n),()=>Ci(i,n=1,n)]}class nw extends yt{constructor(e){super(),wt(this,e,tw,ew,bt,{})}}function iw(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,p,m,_,w,y,v,S,b,P,x,E,U,L,q;return _=new eu({props:{size:"24"}}),v=new tu({props:{size:"24"}}),L=new nu({props:{size:"24"}}),{c(){e=Se("footer"),t=Se("div"),n=Se("span"),i=lt("Code Breaker"),r=Be(),o=Se("p"),a=lt("Copyright \xA9 "),l=lt(s[0]),c=lt(" - All right reserved"),u=Be(),h=Se("div"),f=Se("span"),d=lt("Connect"),g=Be(),p=Se("div"),m=Se("a"),Qe(_.$$.fragment),w=Be(),y=Se("a"),Qe(v.$$.fragment),S=Be(),b=Se("a"),P=Ho("svg"),x=Ho("path"),E=Be(),U=Se("a"),Qe(L.$$.fragment),this.h()},l(B){e=Me(B,"FOOTER",{class:!0});var C=Re(e);t=Me(C,"DIV",{});var G=Re(t);n=Me(G,"SPAN",{class:!0});var z=Re(n);i=ct(z,"Code Breaker"),z.forEach(ae),r=ze(G),o=Me(G,"P",{});var V=Re(o);a=ct(V,"Copyright \xA9 "),l=ct(V,s[0]),c=ct(V," - All right reserved"),V.forEach(ae),G.forEach(ae),u=ze(C),h=Me(C,"DIV",{});var W=Re(h);f=Me(W,"SPAN",{class:!0});var N=Re(f);d=ct(N,"Connect"),N.forEach(ae),g=ze(W),p=Me(W,"DIV",{class:!0});var I=Re(p);m=Me(I,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var ne=Re(m);$e(_.$$.fragment,ne),ne.forEach(ae),w=ze(I),y=Me(I,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var Q=Re(y);$e(v.$$.fragment,Q),Q.forEach(ae),S=ze(I),b=Me(I,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var re=Re(b);P=Wo(re,"svg",{role:!0,viewBox:!0,xmlns:!0,width:!0,height:!0,fill:!0,class:!0});var xe=Re(P);x=Wo(xe,"path",{d:!0}),Re(x).forEach(ae),xe.forEach(ae),re.forEach(ae),E=ze(I),U=Me(I,"A",{href:!0,target:!0,rel:!0,class:!0,"aria-label":!0});var Y=Re(U);$e(L.$$.fragment,Y),Y.forEach(ae),I.forEach(ae),W.forEach(ae),C.forEach(ae),this.h()},h(){ie(n,"class","footer-title"),ie(f,"class","footer-title"),ie(m,"href","//facebook.com/codebreakerTH"),ie(m,"target","_blank"),ie(m,"rel","noreferrer"),ie(m,"class","link link-hover"),ie(m,"aria-label","Facebook"),ie(y,"href","//youtube.com/@codebreakerth"),ie(y,"target","_blank"),ie(y,"rel","noreferrer"),ie(y,"class","link link-hover"),ie(y,"aria-label","YouTube"),ie(x,"d","M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"),ie(P,"role","img"),ie(P,"viewBox","0 0 24 24"),ie(P,"xmlns","http://www.w3.org/2000/svg"),ie(P,"width","24"),ie(P,"height","24"),ie(P,"fill","currentColor"),ie(P,"class","hover:opacity-70"),ie(b,"href","//www.tiktok.com/@codebreakerthailand"),ie(b,"target","_blank"),ie(b,"rel","noreferrer"),ie(b,"class","link link-hover"),ie(b,"aria-label","TikTok"),ie(U,"href","mailto:codebreakerth@gmail.com"),ie(U,"target","_blank"),ie(U,"rel","noreferrer"),ie(U,"class","link link-hover"),ie(U,"aria-label","Email"),ie(p,"class","grid grid-flow-col gap-4"),ie(e,"class","footer p-10 bg-neutral text-neutral-content rounded-t-xl mt-10")},m(B,C){rt(B,e,C),se(e,t),se(t,n),se(n,i),se(t,r),se(t,o),se(o,a),se(o,l),se(o,c),se(e,u),se(e,h),se(h,f),se(f,d),se(h,g),se(h,p),se(p,m),et(_,m,null),se(p,w),se(p,y),et(v,y,null),se(p,S),se(p,b),se(b,P),se(P,x),se(p,E),se(p,U),et(L,U,null),q=!0},p:Js,i(B){q||(Ie(_.$$.fragment,B),Ie(v.$$.fragment,B),Ie(L.$$.fragment,B),q=!0)},o(B){Ne(_.$$.fragment,B),Ne(v.$$.fragment,B),Ne(L.$$.fragment,B),q=!1},d(B){B&&ae(e),tt(_),tt(v),tt(L)}}}function sw(s){return[new Date().getFullYear()]}class rw extends yt{constructor(e){super(),wt(this,e,sw,iw,bt,{})}}const ow=[{type:"adventure",description:"\u0E15\u0E30\u0E25\u0E38\u0E22\u0E14\u0E48\u0E32\u0E19\u0E44\u0E02\u0E23\u0E2B\u0E31\u0E2A",icon:fn("assets","adventure.png")},{type:"rebus",description:"\u0E17\u0E32\u0E22\u0E04\u0E33\u0E08\u0E32\u0E01\u0E20\u0E32\u0E1E",icon:fn("assets","rebus.png")},{type:"crossword",description:"\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E44\u0E02\u0E27\u0E49",icon:fn("assets","crossword.png")},{type:"alphabet",description:"\u0E17\u0E32\u0E22\u0E04\u0E33\u0E08\u0E32\u0E01\u0E04\u0E33\u0E43\u0E1A\u0E49 \u0E42\u0E14\u0E22\u0E40\u0E1B\u0E34\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E43\u0E2B\u0E49\u0E19\u0E49\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14",icon:fn("assets","alphabet.png")},{type:"spellingbee",description:"\u0E2B\u0E32\u0E04\u0E33 7 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",icon:fn("assets","spellingbee.png")},{type:"puzzlehunt",description:"\u0E41\u0E01\u0E49\u0E0A\u0E38\u0E14\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32",icon:fn("assets","puzzlehunt.png")},{type:"weekly",description:"\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E1A\u0E19\u0E40\u0E1E\u0E08 fb",icon:fn("assets","adventure.png")},{type:"missingvowels",description:"\u0E17\u0E32\u0E22\u0E04\u0E33\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49\u0E41\u0E04\u0E48\u0E1E\u0E22\u0E31\u0E0D\u0E0A\u0E19\u0E30",icon:fn("assets","missing.png")},{type:"cryptogram",description:"\u0E17\u0E32\u0E22\u0E04\u0E33\u0E08\u0E32\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E31\u0E01\u0E29\u0E23",icon:fn("assets","cryptogram.png")},{type:"crossroad",description:"\u0E40\u0E15\u0E34\u0E21\u0E04\u0E33\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E33\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E35\u0E48\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07",icon:fn("assets","crossroad.png")}],Pl=[{url:"carddeck/vol1",title:"Puzzle Card Deck Vol.1",description:"\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E01\u0E32\u0E23\u0E4C\u0E14 18 \u0E43\u0E1A",imgUrl:"puzzle_card_deck_vol1.jpg"},{url:"logiccontestbook",title:"Code Breaker Logic Puzzle Contest Book",description:"\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E08\u0E32\u0E01\u0E07\u0E32\u0E19 Logic Puzzle Contest",imgUrl:"logic_puzzle_contest_book_cover.jpg"},{url:"rebusbook",title:"Rebus Puzzle Book",description:"\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E41\u0E17\u0E19\u0E04\u0E33",imgUrl:"rebus_book_cover.jpg"}],aw="https://raw.githubusercontent.com/lemononmars/codebreaker/main/src/lib/images/product/";function Dl(s,e,t){const n=s.slice();return n[3]=e[t],n}function Il(s,e,t){const n=s.slice();return n[3]=e[t],n}function Ol(s,e,t){const n=s.slice();return n[3]=e[t],n}function Fl(s){let e,t,n,i,r,o,a,l,c,u,h=s[3].week+"",f,d,g=s[3].year+"",p,m,_,w=(s[3].title||`\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48 ${s[3].week}`)+"",y,v,S;return{c(){e=Se("a"),t=Se("figure"),n=Se("img"),a=Be(),l=Se("div"),c=Se("div"),u=lt("Week "),f=lt(h),d=lt(" Year "),p=lt(g),m=Be(),_=Se("h2"),y=lt(w),v=Be(),this.h()},l(b){e=Me(b,"A",{href:!0,class:!0});var P=Re(e);t=Me(P,"FIGURE",{class:!0});var x=Re(t);n=Me(x,"IMG",{src:!0,alt:!0,class:!0,onerror:!0}),x.forEach(ae),a=ze(P),l=Me(P,"DIV",{class:!0});var E=Re(l);c=Me(E,"DIV",{class:!0});var U=Re(c);u=ct(U,"Week "),f=ct(U,h),d=ct(U," Year "),p=ct(U,g),U.forEach(ae),m=ze(E),_=Me(E,"H2",{class:!0});var L=Re(_);y=ct(L,w),L.forEach(ae),E.forEach(ae),v=ze(P),P.forEach(ae),this.h()},h(){Ks(n.src,i=s[2](s[3].year,s[3].week))||ie(n,"src",i),ie(n,"alt",r="Week "+s[3].week+" Puzzle"),ie(n,"class","rounded-xl w-full h-48 object-cover"),ie(n,"onerror",o="this.src='"+iu+"'"),ie(t,"class","px-4 pt-4"),ie(c,"class","text-xs badge badge-primary mb-2"),ie(_,"class","card-title text-lg"),ie(l,"class","card-body items-center text-center"),ie(e,"href",S="/puzzles/weekly/"+s[3].year+"/"+s[3].week),ie(e,"class","card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 border border-base-300")},m(b,P){rt(b,e,P),se(e,t),se(t,n),se(e,a),se(e,l),se(l,c),se(c,u),se(c,f),se(c,d),se(c,p),se(l,m),se(l,_),se(_,y),se(e,v)},p(b,P){P&1&&!Ks(n.src,i=b[2](b[3].year,b[3].week))&&ie(n,"src",i),P&1&&r!==(r="Week "+b[3].week+" Puzzle")&&ie(n,"alt",r),P&1&&h!==(h=b[3].week+"")&&dr(f,h),P&1&&g!==(g=b[3].year+"")&&dr(p,g),P&1&&w!==(w=(b[3].title||`\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48 ${b[3].week}`)+"")&&dr(y,w),P&1&&S!==(S="/puzzles/weekly/"+b[3].year+"/"+b[3].week)&&ie(e,"href",S)},d(b){b&&ae(e)}}}function Nl(s){let e,t,n,i,r,o,a,l,c=s[3].type+"",u,h,f,d=s[3].description+"",g,p,m;return{c(){e=Se("a"),t=Se("figure"),n=Se("img"),o=Be(),a=Se("div"),l=Se("h2"),u=lt(c),h=Be(),f=Se("p"),g=lt(d),p=Be(),this.h()},l(_){e=Me(_,"A",{href:!0,class:!0});var w=Re(e);t=Me(w,"FIGURE",{class:!0});var y=Re(t);n=Me(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(ae),o=ze(w),a=Me(w,"DIV",{class:!0});var v=Re(a);l=Me(v,"H2",{class:!0});var S=Re(l);u=ct(S,c),S.forEach(ae),h=ze(v),f=Me(v,"P",{class:!0});var b=Re(f);g=ct(b,d),b.forEach(ae),v.forEach(ae),p=ze(w),w.forEach(ae),this.h()},h(){Ks(n.src,i=s[3].icon)||ie(n,"src",i),ie(n,"alt",r=s[3].type),ie(n,"class","rounded-xl w-32 h-32 object-cover mx-auto"),ie(t,"class","px-4 pt-4"),ie(l,"class","card-title capitalize"),ie(f,"class","text-sm"),ie(a,"class","card-body items-center text-center"),ie(e,"href",m="/puzzles/"+s[3].type),ie(e,"class","card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200")},m(_,w){rt(_,e,w),se(e,t),se(t,n),se(e,o),se(e,a),se(a,l),se(l,u),se(a,h),se(a,f),se(f,g),se(e,p)},p:Js,d(_){_&&ae(e)}}}function Ul(s){let e,t,n,i,r,o,a,l,c=s[3].title+"",u,h,f,d=s[3].description+"",g,p,m,_,w,y,v;return{c(){e=Se("a"),t=Se("figure"),n=Se("img"),o=Be(),a=Se("div"),l=Se("h2"),u=lt(c),h=Be(),f=Se("p"),g=lt(d),p=Be(),m=Se("div"),_=Se("button"),w=lt("\u0E40\u0E1B\u0E34\u0E14"),y=Be(),this.h()},l(S){e=Me(S,"A",{href:!0,class:!0});var b=Re(e);t=Me(b,"FIGURE",{class:!0});var P=Re(t);n=Me(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(ae),o=ze(b),a=Me(b,"DIV",{class:!0});var x=Re(a);l=Me(x,"H2",{class:!0});var E=Re(l);u=ct(E,c),E.forEach(ae),h=ze(x),f=Me(x,"P",{class:!0});var U=Re(f);g=ct(U,d),U.forEach(ae),p=ze(x),m=Me(x,"DIV",{class:!0});var L=Re(m);_=Me(L,"BUTTON",{class:!0});var q=Re(_);w=ct(q,"\u0E40\u0E1B\u0E34\u0E14"),q.forEach(ae),L.forEach(ae),x.forEach(ae),y=ze(b),b.forEach(ae),this.h()},h(){Ks(n.src,i=aw+s[3].imgUrl)||ie(n,"src",i),ie(n,"alt",r=s[3].title),ie(n,"class","rounded-xl w-full h-48 object-cover object-top"),ie(t,"class","px-4 pt-4"),ie(l,"class","card-title text-lg"),ie(f,"class","text-sm"),ie(_,"class","btn btn-primary btn-sm"),ie(m,"class","card-actions justify-end mt-4"),ie(a,"class","card-body"),ie(e,"href",v="/shop/"+s[3].url),ie(e,"class","card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200")},m(S,b){rt(S,e,b),se(e,t),se(t,n),se(e,o),se(e,a),se(a,l),se(l,u),se(a,h),se(a,f),se(f,g),se(a,p),se(a,m),se(m,_),se(_,w),se(e,y)},p:Js,d(S){S&&ae(e)}}}function lw(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,p,m,_,w,y,v,S,b,P,x,E,U,L,q,B,C,G,z,V,W,N,I,ne,Q,re,xe,Y,j,ke,ge,Le,_e,Pe,$,J,oe,be,me,De;g=new nw({});let Ee=s[0],we=[];for(let O=0;O<Ee.length;O+=1)we[O]=Fl(Ol(s,Ee,O));let Ke=s[1],Oe=[];for(let O=0;O<Ke.length;O+=1)Oe[O]=Nl(Il(s,Ke,O));let R=Pl,M=[];for(let O=0;O<R.length;O+=1)M[O]=Ul(Dl(s,R,O));return me=new rw({}),{c(){e=Se("meta"),t=Se("meta"),n=Se("meta"),i=Se("meta"),r=Se("meta"),o=Se("meta"),a=Se("meta"),l=Be(),c=Se("div"),u=Se("div"),h=Se("div"),f=Se("div"),d=Se("div"),Qe(g.$$.fragment),p=Be(),m=Se("h1"),_=lt("Welcome to Code Breaker"),w=Be(),y=Se("p"),v=lt("Solve the puzzles. Break the codes."),S=Be(),b=Se("section"),P=Se("div"),x=Se("h2"),E=lt("\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"),U=Be(),L=Se("a"),q=lt("\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),B=Be(),C=Se("div");for(let O=0;O<we.length;O+=1)we[O].c();G=Be(),z=Se("section"),V=Se("div"),W=Se("h2"),N=lt("\u0E40\u0E25\u0E48\u0E19\u0E40\u0E25\u0E22"),I=Be(),ne=Se("a"),Q=lt("\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),re=Be(),xe=Se("div");for(let O=0;O<Oe.length;O+=1)Oe[O].c();Y=Be(),j=Se("section"),ke=Se("div"),ge=Se("h2"),Le=lt("\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32"),_e=Be(),Pe=Se("a"),$=lt("\u0E14\u0E39\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),J=Be(),oe=Se("div");for(let O=0;O<M.length;O+=1)M[O].c();be=Be(),Qe(me.$$.fragment),this.h()},l(O){const Z=Jc("svelte-1pxio96",document.head);e=Me(Z,"META",{name:!0,content:!0}),t=Me(Z,"META",{property:!0,content:!0}),n=Me(Z,"META",{property:!0,content:!0}),i=Me(Z,"META",{property:!0,content:!0}),r=Me(Z,"META",{property:!0,content:!0}),o=Me(Z,"META",{name:!0,content:!0}),a=Me(Z,"META",{name:!0,content:!0}),Z.forEach(ae),l=ze(O),c=Me(O,"DIV",{class:!0});var H=Re(c);u=Me(H,"DIV",{class:!0});var ue=Re(u);h=Me(ue,"DIV",{class:!0});var Ae=Re(h);f=Me(Ae,"DIV",{class:!0});var T=Re(f);d=Me(T,"DIV",{class:!0});var te=Re(d);$e(g.$$.fragment,te),te.forEach(ae),T.forEach(ae),p=ze(Ae),m=Me(Ae,"H1",{class:!0});var de=Re(m);_=ct(de,"Welcome to Code Breaker"),de.forEach(ae),w=ze(Ae),y=Me(Ae,"P",{class:!0});var pe=Re(y);v=ct(pe,"Solve the puzzles. Break the codes."),pe.forEach(ae),Ae.forEach(ae),ue.forEach(ae),H.forEach(ae),S=ze(O),b=Me(O,"SECTION",{class:!0});var D=Re(b);P=Me(D,"DIV",{class:!0});var le=Re(P);x=Me(le,"H2",{class:!0});var he=Re(x);E=ct(he,"\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"),he.forEach(ae),U=ze(le),L=Me(le,"A",{href:!0,class:!0});var Ce=Re(L);q=ct(Ce,"\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),Ce.forEach(ae),le.forEach(ae),B=ze(D),C=Me(D,"DIV",{class:!0});var ye=Re(C);for(let Vt=0;Vt<we.length;Vt+=1)we[Vt].l(ye);ye.forEach(ae),D.forEach(ae),G=ze(O),z=Me(O,"SECTION",{class:!0});var Te=Re(z);V=Me(Te,"DIV",{class:!0});var ce=Re(V);W=Me(ce,"H2",{class:!0});var Fe=Re(W);N=ct(Fe,"\u0E40\u0E25\u0E48\u0E19\u0E40\u0E25\u0E22"),Fe.forEach(ae),I=ze(ce),ne=Me(ce,"A",{href:!0,class:!0});var qe=Re(ne);Q=ct(qe,"\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),qe.forEach(ae),ce.forEach(ae),re=ze(Te),xe=Me(Te,"DIV",{class:!0});var Ye=Re(xe);for(let Vt=0;Vt<Oe.length;Vt+=1)Oe[Vt].l(Ye);Ye.forEach(ae),Te.forEach(ae),Y=ze(O),j=Me(O,"SECTION",{class:!0});var pt=Re(j);ke=Me(pt,"DIV",{class:!0});var Pt=Re(ke);ge=Me(Pt,"H2",{class:!0});var zi=Re(ge);Le=ct(zi,"\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32"),zi.forEach(ae),_e=ze(Pt),Pe=Me(Pt,"A",{href:!0,class:!0});var fs=Re(Pe);$=ct(fs,"\u0E14\u0E39\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),fs.forEach(ae),Pt.forEach(ae),J=ze(pt),oe=Me(pt,"DIV",{class:!0});var Wn=Re(oe);for(let Vt=0;Vt<M.length;Vt+=1)M[Vt].l(Wn);Wn.forEach(ae),pt.forEach(ae),be=ze(O),$e(me.$$.fragment,O),this.h()},h(){document.title="Code Breaker",ie(e,"name","description"),ie(e,"content","Welcome to Code Breaker! Solve a variety of high-quality puzzles, build custom crosswords and word searches, and explore our collection of puzzle tools."),ie(t,"property","og:title"),ie(t,"content","Code Breaker"),ie(n,"property","og:description"),ie(n,"content","Welcome to Code Breaker! Solve a variety of high-quality puzzles, build custom crosswords and word searches, and explore our collection of puzzle tools."),ie(i,"property","og:type"),ie(i,"content","website"),ie(r,"property","og:image"),ie(r,"content","/og-main.png"),ie(o,"name","twitter:card"),ie(o,"content","summary_large_image"),ie(a,"name","twitter:image"),ie(a,"content","/og-main.png"),ie(d,"class","w-64 h-64"),ie(f,"class","mb-4 flex justify-center"),ie(m,"class","text-5xl font-bold"),ie(y,"class","py-6"),ie(h,"class","max-w-md"),ie(u,"class","hero-content text-center"),ie(c,"class","hero min-h-[50vh] bg-transparent"),ie(x,"class","text-3xl font-bold"),ie(L,"href","/puzzles/weekly"),ie(L,"class","btn btn-primary btn-sm"),ie(P,"class","flex justify-between items-center mb-6"),ie(C,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"),ie(b,"class","max-w-7xl mx-auto px-4 py-8"),ie(W,"class","text-3xl font-bold"),ie(ne,"href","/puzzles"),ie(ne,"class","btn btn-primary btn-sm"),ie(V,"class","flex justify-between items-center mb-6"),ie(xe,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"),ie(z,"class","max-w-7xl mx-auto px-4 py-8"),ie(ge,"class","text-3xl font-bold"),ie(Pe,"href","/shop"),ie(Pe,"class","btn btn-secondary btn-sm"),ie(ke,"class","flex justify-between items-center mb-6"),ie(oe,"class","grid grid-cols-1 md:grid-cols-3 gap-6"),ie(j,"class","max-w-7xl mx-auto px-4 py-8 bg-base-200 rounded-xl my-8")},m(O,Z){se(document.head,e),se(document.head,t),se(document.head,n),se(document.head,i),se(document.head,r),se(document.head,o),se(document.head,a),rt(O,l,Z),rt(O,c,Z),se(c,u),se(u,h),se(h,f),se(f,d),et(g,d,null),se(h,p),se(h,m),se(m,_),se(h,w),se(h,y),se(y,v),rt(O,S,Z),rt(O,b,Z),se(b,P),se(P,x),se(x,E),se(P,U),se(P,L),se(L,q),se(b,B),se(b,C);for(let H=0;H<we.length;H+=1)we[H]&&we[H].m(C,null);rt(O,G,Z),rt(O,z,Z),se(z,V),se(V,W),se(W,N),se(V,I),se(V,ne),se(ne,Q),se(z,re),se(z,xe);for(let H=0;H<Oe.length;H+=1)Oe[H]&&Oe[H].m(xe,null);rt(O,Y,Z),rt(O,j,Z),se(j,ke),se(ke,ge),se(ge,Le),se(ke,_e),se(ke,Pe),se(Pe,$),se(j,J),se(j,oe);for(let H=0;H<M.length;H+=1)M[H]&&M[H].m(oe,null);rt(O,be,Z),et(me,O,Z),De=!0},p(O,[Z]){if(Z&5){Ee=O[0];let H;for(H=0;H<Ee.length;H+=1){const ue=Ol(O,Ee,H);we[H]?we[H].p(ue,Z):(we[H]=Fl(ue),we[H].c(),we[H].m(C,null))}for(;H<we.length;H+=1)we[H].d(1);we.length=Ee.length}if(Z&2){Ke=O[1];let H;for(H=0;H<Ke.length;H+=1){const ue=Il(O,Ke,H);Oe[H]?Oe[H].p(ue,Z):(Oe[H]=Nl(ue),Oe[H].c(),Oe[H].m(xe,null))}for(;H<Oe.length;H+=1)Oe[H].d(1);Oe.length=Ke.length}if(Z&0){R=Pl;let H;for(H=0;H<R.length;H+=1){const ue=Dl(O,R,H);M[H]?M[H].p(ue,Z):(M[H]=Ul(ue),M[H].c(),M[H].m(oe,null))}for(;H<M.length;H+=1)M[H].d(1);M.length=R.length}},i(O){De||(Ie(g.$$.fragment,O),Ie(me.$$.fragment,O),De=!0)},o(O){Ne(g.$$.fragment,O),Ne(me.$$.fragment,O),De=!1},d(O){ae(e),ae(t),ae(n),ae(i),ae(r),ae(o),ae(a),O&&ae(l),O&&ae(c),tt(g),O&&ae(S),O&&ae(b),pr(we,O),O&&ae(G),O&&ae(z),pr(Oe,O),O&&ae(Y),O&&ae(j),pr(M,O),O&&ae(be),tt(me,O)}}}function cw(s,e,t){const n=ow.sort(()=>.5-Math.random()).slice(0,4);let i=[];kl(async()=>{try{const a=await(await fetch("/api/puzzle/weekly/")).json();a.content&&t(0,i=a.content.sort((l,c)=>l.year!==c.year?c.year-l.year:c.week-l.week).slice(0,4))}catch(o){console.error("Failed to load weekly puzzles:",o)}});function r(o,a){const l=String(a).padStart(2,"0");return su("weekly",`${o}${l}.jpg`)}return[i,n,r]}class Yw extends yt{constructor(e){super(),wt(this,e,cw,lw,bt,{})}}export{Yw as default};
