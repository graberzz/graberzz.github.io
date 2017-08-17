var tns=function(){function t(){for(var t,n,e,a=arguments[0]||{},i=1,o=arguments.length;i<o;i++)if(null!==(t=arguments[i]))for(n in t)e=t[n],a!==e&&void 0!==e&&(a[n]=e);return a}function n(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return-1}function e(t){return void 0!==t.item}function a(t,n){var a,i=e(t)?t:[t];if(void 0!==n.nodeType&&1===n.nodeType)for(a=i.length;a--;)i[a].appendChild(n);else if("string"==typeof n)for(a=i.length;a--;)i[a].insertAdjacentHTML("beforeend",n);else if(e(n)){var o=document.createDocumentFragment();for(a=n.length;a--;)o.insertBefore(n[a],o.firstChild);for(var r=i.length;r--;)i[r].appendChild(o)}}function i(t,n){for(var a=e(t)?t:[t],i=a.length;i--;){var o=i>0?n.cloneNode(!0):n,r=a[i],c=r.parentNode,l=r.nextSibling;o.appendChild(r),l?c.insertBefore(o,l):c.appendChild(o)}}function o(t){for(var n=e(t)?t:[t],a=n.length;a--;){for(var i=n[a],o=i.parentNode;i.firstChild;)o.insertBefore(i.firstChild,i);o.removeChild(i)}}function r(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function c(t,n){return Math.atan2(t,n)*(180/Math.PI)}function l(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function s(t,n){return t.hasAttribute(n)}function u(t,n){return t.getAttribute(n)}function d(t){return void 0!==t.item}function f(t,n){if(t=d(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function h(t,n){t=d(t)||t instanceof Array?t:[t];for(var e=(n=n instanceof Array?n:[n]).length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function v(t){var n=t.cloneNode(!0);t.parentNode.insertBefore(n,t),t.remove(),t=null}function m(t){s(t,"hidden")||f(t,{hidden:""})}function p(t){s(t,"hidden")&&h(t,"hidden")}function y(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function g(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function b(t,n){for(var e in n){var a=("touchstart"===e||"touchmove"===e)&&M;t.addEventListener(e,n[e],a)}}function w(t,n){for(var e in n){var a=("touchstart"===e||"touchmove"===e)&&M;t.removeEventListener(e,n[e],a)}}function x(){return{topics:{},on:function(t,n){this.topics[t]=this.topics[t]||[],this.topics[t].push(n)},off:function(t,n){if(this.topics[t])for(var e=0;e<this.topics[t].length;e++)if(this.topics[t][e]===n){this.topics[t].splice(e,1);break}},emit:function(t,n){this.topics[t]&&this.topics[t].forEach(function(t){t(n)})}}}function E(t,n,e,a,i,o,r){function c(){o-=l,s+=u,t.style[n]=e+s+"px"+a,o>0?setTimeout(c,l):r()}var l=Math.min(o,10),s=Number(t.style[n].slice(e.length,-(a.length+2))),u=(i-s)/o*l;setTimeout(c,l)}Object.keys||(Object.keys=function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var a=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(a+16,n);return setTimeout(function(){t(a=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";var t,n,e,a=window,i=document,o=Object,r="length",c="item contains add remove toggle toString toLocaleString".split(" "),l=c[2],s=c[3],u=c[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,n,e,a){o.defineProperty?o.defineProperty(t,n,{configurable:!1===f||!!a,get:e}):t.__defineGetter__(n,e)},v=function(t,n){var e=this,a=[],i={},d=0,f=0,v=function(){if(d>=f)for(;f<d;++f)!function(t){h(e,t,function(){return m(),a[t]},!1)}(f)},m=function(){var e,o,c=arguments,l=/\s+/;if(c[r])for(o=0;o<c[r];++o)if(l.test(c[o]))throw e=new SyntaxError('String "'+c[o]+'" contains an invalid character'),e.code=5,e.name="InvalidCharacterError",e;for(""===(a=(""+t[n]).replace(/^\s+|\s+$/g,"").split(l))[0]&&(a=[]),i={},o=0;o<a[r];++o)i[a[o]]=!0;d=a[r],v()};return m(),h(e,r,function(){return m(),d}),e[c[6]]=e[c[5]]=function(){return m(),a.join(" ")},e.item=function(t){return m(),a[t]},e.contains=function(t){return m(),!!i[t]},e[l]=function(){m.apply(e,o=arguments);for(var o,c,l=0,s=o[r];l<s;++l)c=o[l],i[c]||(a.push(c),i[c]=!0);d!==a[r]&&(d=a[r]>>>0,t[n]=a.join(" "),v())},e[s]=function(){m.apply(e,o=arguments);for(var o,c={},l=0,s=[];l<o[r];++l)c[o[l]]=!0,delete i[o[l]];for(l=0;l<a[r];++l)c[a[l]]||s.push(a[l]);a=s,d=s[r]>>>0,t[n]=a.join(" "),v()},e[u]=function(t,n){return m.apply(e,[t]),void 0!==n?n?(e[l](t),!0):(e[s](t),!1):i[t]?(e[s](t),!1):(e[l](t),!0)},function(t,n){if(n)for(var e=0;e<7;++e)n(t,c[e],{enumerable:!1})}(e,o.defineProperty),e},m=function(t,n,e){h(t[d],n,function(){var t,a=this,o="__defineGetter__defineProperty"+n;if(a[o])return t;if(a[o]=!0,!1===f){for(var c,l=m.mirror=m.mirror||i.createElement("div"),s=l.childNodes,u=s[r],d=0;d<u;++d)if(s[d]._R===a){c=s[d];break}c||(c=l.appendChild(i.createElement("div"))),t=v.call(c,a,e)}else t=new v(a,e);return h(a,n,function(){return t}),delete a[o],t},!0)};if(a.DOMTokenList)t=i.createElement("div").classList,d=a.DOMTokenList[d],t[l].apply(t,c),2>t[r]&&(n=d[l],e=d[s],d[l]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])},d[s]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])}),t[u]("List",!1)&&(d[u]=function(t,n){var e=this;return e[(n=void 0===n?!e.contains(t):n)?l:s](t),!!n});else{if(f)try{h({},"support")}catch(t){f=!1}v.polyfill=!0,a.DOMTokenList=v,m(a.Element,"classList","className"),m(a.HTMLLinkElement,"relList","rel"),m(a.HTMLAnchorElement,"relList","rel"),m(a.HTMLAreaElement,"relList","rel")}}();var T=!1;try{var C=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,C)}catch(t){}var M=!!T&&{passive:!0},D=function(t){for(var n=document.documentElement,e=0;e<t.length;e++)if(t[e]in n.style)return t[e]}(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),k={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},L={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},A=g(k)[0],O=g(k)[1],N=g(k)[2],P=g(L)[0],I=g(L)[1],z=g(L)[2],S={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return function(e){function s(){return"gallery"===Xt||"page"===e.slideBy?Zt:e.slideBy}function d(){return(_t+en)/Zt}function g(){if(f(Vt,{"data-tns-role":"wrapper"}),f(Kt,{"data-tns-role":"content-wrapper"}),"vertical"===Yt?f(Kt,{"data-tns-hidden":"y"}):f(Vt,{"data-tns-hidden":"x"}),"carousel"===Xt){var t=on&&an?V():an?an+en:0;Kt.style.cssText="horizontal"===Yt?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+an+"px; height: "+J()+"px;"}}function T(){_t=we(),Zt=ge(),Gt=yn-Zt-kn,"horizontal"!==Yt||on||(vn=d()),jn=be(),tn=s()}function C(){""===$t.id&&($t.id=hn),f($t,{"data-tns-role":"content","data-tns-mode":Xt,"data-tns-axis":Yt}),"horizontal"===Yt&&($t.style.width=(vn+1)*yn+"px")}function M(){"carousel"===Xt&&(un&&f($t,{"data-tns-hidden":"y"}),$t.style[En]=Tn+Math.round(-Rt[Mn])+"px"+Cn)}function k(){navigator.msMaxTouchPoints&&(Vt.classList.add("ms-touch"),b(Vt,{scroll:xt}))}function L(){for(var t=0;t<Qt;t++){var n=Jt[t];n.id=hn+"-item"+t,"gallery"===Xt&&pe&&n.classList.add(pe),f(n,{"aria-hidden":"true",tabindex:"-1"});var e="horizontal"===Yt?"right":"bottom",a="";"carousel"===Xt&&(a="margin-"+e+": "+en+"px;"),"horizontal"===Yt&&(a="width: "+(vn-en)+"px; "+a),n.style.cssText+=a}if(sn||an){for(var i=document.createDocumentFragment(),o=document.createDocumentFragment(),r=pn;r--;){var c=r%Qt,l=Jt[c].cloneNode(!0);if(h(l,"id"),o.insertBefore(l,o.firstChild),"carousel"===Xt){var s=Jt[Qt-1-c].cloneNode(!0);h(s,"id"),i.appendChild(s)}}$t.insertBefore(i,$t.firstChild),$t.appendChild(o),Jt=$t.children}}function H(){Sn&&(Fn?(In=Fn.children[0],zn=Fn.children[1],f(Fn,{"aria-label":"Carousel Navigation",tabindex:"0"}),f(In,{"data-controls":"prev"}),f(zn,{"data-controls":"next"}),f(Fn.children,{"aria-controls":hn,tabindex:"-1"})):(a(Vt,'<div data-tns-role="controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+hn+'" type="button">'+Hn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+hn+'" type="button">'+Hn[1]+"</button></div>"),[].forEach.call(Vt.children,function(t){"controls"===t.getAttribute("data-tns-role")&&(Fn=t)}),In=Fn.children[0],zn=Fn.children[1]))}function F(){if(Bn)if(e.navContainer)f(Rn,{"aria-label":"Carousel Pagination"}),Wn=Rn.children,[].forEach.call(Wn,function(t,n){f(t,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":hn+"-item"+n})});else{for(var t="",n=0;n<Qt;n++)t+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+hn+"-item"+n+'" hidden type="button"></button>';a(Vt,t='<div data-tns-role="nav" aria-label="Carousel Pagination">'+t+"</div>"),[].forEach.call(Vt.children,function(t){"nav"===t.getAttribute("data-tns-role")&&(Rn=t)}),Wn=Rn.children,It()}}function W(){Vn&&(Zn?f(Zn,{"data-action":"stop"}):(Rn||(a(Vt,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),Rn=Vt.querySelector('[data-tns-role="nav"]')),a(Rn,'<button data-action="stop" type="button">'+ee+Jn[0]+"</button>"),Zn=Rn.querySelector("[data-action]")),dt())}function j(){for(var t=Mn;t<Mn+Zt;t++){var n=Jt[t];f(n,{"aria-hidden":"false"}),h(n,["tabindex"]),"gallery"===Xt&&(n.style.left=vn*(t-Mn)+"px",n.classList.remove(pe),n.classList.add(ve))}Sn&&(Mn===Ln&&!sn||ln)&&(In.disabled=!0),Bn&&f(Wn[0],{tabindex:"0","aria-selected":"true"})}function B(){if("carousel"===Xt&&N){var t={};t[N]=ot,b($t,t)}if(Bn)for(var n=0;n<Qt;n++)b(Wn[n],{click:ut,keydown:wt});Sn&&(b(Fn,{keydown:bt}),b(In,{click:lt}),b(zn,{click:st})),"inner"===nn?Nn.on("outerResized",function(){Ht(),Nn.emit("innerLoaded",zt())}):(b(window,{resize:Ft}),"outer"===nn&&Nn.on("innerLoaded",X))}function R(t){!Pn&&Qt<=Zt?(G(t,!0),te&&ft(),Mn="carousel"!==Xt?0:pn,Bn&&m(Rn),Sn&&m(Fn),Vn&&m(Zn),Pn=!0):(G(t,!1),Vn&&!te&&dt(),Bn&&p(Rn),Sn&&p(Fn),Vn&&p(Zn),Pn=!1)}function G(t,n){var e=!t&&n,a=!n;if("carousel"===Xt){var i={touchstart:Mt,touchmove:Dt,touchend:kt,touchcancel:kt},o={mousedown:Mt,mousemove:Dt,mouseup:kt,mouseleave:kt};e&&(le&&w($t,i),de&&w($t,o)),a&&(le&&b($t,i),de&&b($t,o))}var r={click:mt},c={mouseover:_,mouseout:q},l={visibilitychange:pt},s={keydown:yt};e&&(Vn&&(w(Zn,r),Qn&&w($t,c),ae&&w(document,l)),rn&&w(document,s)),a&&(Vn&&(b(Zn,r),Qn&&b($t,c),ae&&b(document,l)),rn&&b(document,s))}function _(){te&&(ft(),ne=!0)}function q(){!te&&ne&&(dt(),ne=!1)}function U(){if(fn){var t=Mn,n=Mn+Zt;for(an&&(t-=1,n+=1);t<n;t++)[].forEach.call(Jt[t].querySelectorAll('[data-tns-role="lazy-img"]'),function(t){var n={};n[N]=function(t){t.stopPropagation()},b(t,n),t.classList.contains("loaded")||(t.src=u(t,"data-src"),t.classList.add("loaded"))})}}function X(){if(un){for(var t=[],n=Mn;n<Mn+Zt;n++)[].forEach.call(Jt[n].querySelectorAll("img"),function(n){t.push(n)});0===t.length?K():Y(t)}}function Y(t){t.forEach(function(n,e){y(n)&&t.splice(e,1)}),0===t.length?K():setTimeout(function(){Y(t)},16)}function V(){return(_t%vn+en)/2}function K(){for(var t,n=[],e=Mn;e<Mn+Zt;e++)n.push(Jt[e].offsetHeight);t=Math.max.apply(null,n),$t.style.height!==t&&(A&&et(cn),$t.style.height=t+"px")}function $(){Rt=[0];for(var t,n=Jt[0].getBoundingClientRect()[xn],e=1;e<yn;e++)t=Jt[e].getBoundingClientRect()[xn],Rt.push(t-n)}function J(){return Rt[Mn+Zt]-Rt[Mn]}function Q(){Vt.style.msScrollSnapPointsX="snapInterval(0%, "+vn+")"}function Z(){var t,n,e,a;Mn!==Dn&&(Mn>Dn?(t=Dn,n=Math.min(Dn+Zt,Mn),e=Math.max(Dn+Zt,Mn),a=Mn+Zt):(t=Math.max(Mn+Zt,Dn),n=Dn+Zt,e=Mn,a=Math.min(Mn+Zt,Dn))),tn%1!=0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)f(Jt[i],{"aria-hidden":"true",tabindex:"-1"});for(var o=e;o<a;o++)f(Jt[o],{"aria-hidden":"false"}),h(Jt[o],["tabindex"])}function tt(){Bn&&(Un=-1!==qn?qn:Mn%Qt,qn=-1,Un!==Xn&&(f(Wn[Xn],{tabindex:"-1","aria-selected":"false"}),f(Wn[Un],{tabindex:"0","aria-selected":"true"}),Xn=Un))}function nt(){if(Sn&&!sn){var t=[],n=[];Mn===Ln?(t.push(In),n.push(zn),gt(In,zn)):ln||Mn!==Gt?n.push(In,zn):(t.push(zn),n.push(In),gt(zn,In)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),n.length>0&&n.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function et(t,n){t=t?t/1e3+"s":"",(n=n||$t).style[A]=t,"gallery"===Xt&&(n.style[P]=t),"vertical"===Yt&&(Kt.style[A]=t)}function at(t,n){void 0===t&&(t=cn),A&&et(t),xe(t,n)}function it(){An=!0,bn&&Ee(),Mn%Qt!=Dn%Qt&&Nn.emit("indexChanged",zt()),Nn.emit("transitionStart",zt()),at()}function ot(t){function n(t){return t.toLowerCase().replace(/-/g,"")}if(Nn.emit("transitionEnd",zt(t)),"gallery"===Xt&&mn.length>0)for(var e=0;e<Zt;e++){var a=mn[e];A&&et(0,a),ye&&O&&(a.style[O]=a.style[I]=""),a.classList.remove(me),a.classList.add(pe),a.style.left=""}if(!t||"gallery"===Xt&&t.target.parentNode===$t||t.target===$t&&n(t.propertyName)===n(En)){if(!bn){var i=Mn;Ee(),Mn!==i&&(at(0),Nn.emit("indexChanged",zt()))}Z(),(Bn&&!sn||Bn&&sn&&-1===Gn.indexOf(Mn%Qt))&&It(),tt(),nt(),U(),X(),"inner"===nn&&Nn.emit("innerLoaded",zt()),An=!1,rt()}}function rt(){Dn=Mn}function ct(t){An||(Mn+=t*tn,it())}function lt(){ct(-1)}function st(){ct(ln&&Mn===Gt?-(Gt-Ln)/tn:1)}function ut(t){if(!An){for(var e=t.target||t.srcElement;-1===n(Wn,e);)e=e.parentNode;St((qn=n(Wn,e))+("gallery"===Xt?0:pn))}}function dt(){vt(),f(Zn,{"data-action":"stop"}),Zn.innerHTML=ee+Jn[1],te=!0}function ft(){ht(),f(Zn,{"data-action":"start"}),Zn.innerHTML=ee.replace("Stop","Start")+Jn[0],te=!1}function ht(){te="paused",clearInterval(Yn)}function vt(){!0!==te&&(clearInterval(Yn),Yn=setInterval(function(){ct($n)},Kn))}function mt(){te?ft():dt()}function pt(){ie!=document.hidden&&!1!==te&&(document.hidden?ht():vt()),ie=document.hidden}function yt(t){switch((t=t||window.event).keyCode){case S.LEFT:lt();break;case S.RIGHT:st()}}function gt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function bt(t){var n=(t=t||window.event).keyCode;switch(document.activeElement,n){case S.LEFT:case S.UP:case S.PAGEUP:In.disabled||lt();break;case S.RIGHT:case S.DOWN:case S.PAGEDOWN:zn.disabled||st();break;case S.HOME:St(0);break;case S.END:St(Qt-1)}}function wt(t){var n=(t=t||window.event).keyCode,e=document.activeElement,a=u(e,"data-nav");switch(n){case S.LEFT:case S.PAGEUP:a>0&&gt(e,e.previousElementSibling);break;case S.UP:case S.HOME:0!==a&&gt(e,Wn[0]);break;case S.RIGHT:case S.PAGEDOWN:a<jn-1&&gt(e,e.nextElementSibling);break;case S.DOWN:case S.END:a<jn-1&&gt(e,Wn[jn-1]);break;case S.ENTER:case S.SPACE:ut(t)}}function xt(){at(0,$t.scrollLeft()),rt()}function Et(t){return t.target||t.srcElement}function Tt(t){return"a"===t.tagName.toLowerCase()}function Ct(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Mt(t){Tt(Et(t=t||window.event))&&"touchstart"!==t.type&&Ct(t);var n="touchstart"===t.type?t.changedTouches[0]:t;se=parseInt(n.clientX),ue=parseInt(n.clientY);var e=D?[11,-3]:[0,-2];oe=Number($t.style[En].slice(e[0],e[1])),"touchstart"===t.type?Nn.emit("touchStart",zt(t)):(Nn.emit("dragStart",zt(t)),fe=!0)}function Dt(t){if(t=t||window.event,fe&&"mousemove"===t.type&&!he&&(he=!0),null!==se){Tt(Et(t))&&"touchmove"!==t.type&&Ct(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(re=parseInt(n.clientX)-se,ce=parseInt(n.clientY)-ue,l(c(ce,re),15)===Yt){Ut=!0,"touchmove"===t.type?Nn.emit("touchMove",zt(t)):Nn.emit("dragMove",zt(t));var e="horizontal"===Yt?oe+re:oe+ce;e+="px",D&&(e="translate"+wn+"("+e+")",et(0)),$t.style[En]=e}}}function kt(t){if(t=t||window.event,fe&&(fe=!1),Ut){Ut=!1;var n=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(re=parseInt(n.clientX)-se,ce=parseInt(n.clientY)-ue,se=ue=null,"horizontal"===Yt)Mn=-(oe+re)/vn,Mn=re>0?Math.floor(Mn):Math.ceil(Mn);else{var e=-(oe+ce);if(e<=0)Mn=Ln;else if(e>=Rt[Rt.length-1])Mn=Gt;else{var a=0;do{a++,Mn=ce<0?a+1:a}while(a<yn&&e>=Math.round(Rt[a+1]))}}0===t.type.indexOf("touch")?Nn.emit("touchEnd",zt(t)):Nn.emit("dragEnd",zt(t)),it()}if(he){he=!1;var i=Et(t);Tt(i)&&b(i,{click:function t(n){Ct(n),w(i,{click:t})}})}}function Lt(){$t.style.width=(vn+1)*yn+"px";for(var t=yn;t--;)Jt[t].style.width=vn-en+"px"}function At(){for(var t=Mn+1,n=Mn+Zt;t<n;t++)Jt[t].style.left=vn*(t-Mn)+"px"}function Ot(){Kt.style.cssText="margin: 0px "+V()+"px"}function Nt(){Kt.style.height=J()+"px"}function Pt(){Gn=[];for(var t=Mn%Qt%Zt;t<Qt;)!sn&&t+Zt>Qt&&(t=Qt-Zt),Gn.push(t),t+=Zt;(sn&&Gn.length*Zt<Qt||!sn&&Gn[0]>0)&&Gn.unshift(0)}function It(){Bn&&!e.navContainer&&(Pt(),Gn!==_n&&(_n.length>0&&_n.forEach(function(t){f(Wn[t],{hidden:""})}),Gn.length>0&&Gn.forEach(function(t){h(Wn[t],"hidden")}),_n=Gn))}function zt(t){return{container:$t,slideItems:Jt,navItems:Wn,prevButton:In,nextButton:zn,items:Zt,index:Mn,indexCached:Dn,navCurrent:Un,navCurrentCached:Xn,slideCount:Qt,cloneCount:pn,slideCountNew:yn,event:t||{}}}function St(t){var n,e=Mn%Qt;switch(e<0&&(e+=Qt),t){case"next":n=1;break;case"prev":case"previous":n=-1;break;case"first":n=-e;break;case"last":n=Qt-1-e;break;default:if("number"==typeof t){var a=t%Qt;a<0&&(a+=Qt),n=a-e}}(Mn+=n)%Qt!=Dn%Qt&&(Ee(),it())}function Ht(){var t=Mn,n=Zt;T(),Ee(),R(),"horizontal"===Yt?(on&&an?Ot():(Lt(),"gallery"===Xt&&At()),$()):($(),Nt()),(Mn!==t||"carousel"===Xt&&!on)&&at(0),Mn===t&&Zt===n||(U(),It(),tt()),X(),Mn!==t&&(Nn.emit("indexChanged",zt()),Z(),nt()),navigator.msMaxTouchPoints&&Q()}function Ft(t){clearTimeout(qt),qt=setTimeout(function(){_t!==we()&&(Ht(),"outer"===nn&&Nn.emit("outerResized",zt(t)))},100)}e=t({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{});for(var Wt=["container","controlsContainer","navContainer","autoplayButton"],jt=4;jt--;){var Bt=e[Wt[jt]];"string"==typeof Bt&&(e[Wt[jt]]=document.querySelector(Bt))}if(e.container&&e.container.nodeName&&!(e.container.children.length<2)){var Rt,Gt,_t,qt,Ut,Xt=e.mode,Yt=e.axis,Vt=document.createElement("div"),Kt=document.createElement("div"),$t=e.container,Jt=$t.children,Qt=Jt.length,Zt=e.items,tn=s(),nn=e.nested,en=e.gutter,an="gallery"!==Xt&&e.edgePadding,on=e.fixedWidth,rn=e.arrowKeys,cn=e.speed,ln=e.rewind,sn="gallery"===Xt||!e.rewind&&e.loop,un="gallery"===Xt||e.autoHeight,dn=!on&&e.responsive,fn=e.lazyload,hn=$t.id||r(),vn=on?on+en:0,mn=[],pn=sn?2*Qt:an?1:0,yn="gallery"===Xt?Qt+pn:Qt+2*pn,gn=!(!on||sn||an),bn="gallery"===Xt||!sn,wn="horizontal"===Yt?"X":"Y",xn="horizontal"===Yt?"left":"top",En=xn,Tn="",Cn="",Mn="gallery"===Xt?0:pn,Dn=Mn,kn=an?1:0,Ln=kn,An=!1,On=e.onInit,Nn=new x,Pn=!1;if(e.controls)var In,zn,Sn=e.controls,Hn=e.controlsText,Fn=e.controlsContainer;if(e.nav)var Wn,jn,Bn=e.nav,Rn=e.navContainer,Gn=[],_n=Gn,qn=-1,Un=0,Xn=0;if(e.autoplay)var Yn,Vn=e.autoplay,Kn=e.autoplayTimeout,$n="forward"===e.autoplayDirection?1:-1,Jn=e.autoplayText,Qn=e.autoplayHoverPause,Zn=e.autoplayButton,te=!1,ne=!1,ee="<span hidden>Stop Animation</span>",ae=e.autoplayResetOnVisibility,ie=!1;if(e.touch)var oe,re,ce,le=e.touch,se=null,ue=null;if(e.mouseDrag)var de=e.mouseDrag,fe=!1,he=!1;if("gallery"===e.mode)var ve=P?e.animateIn:"tns-fadeIn",me=P?e.animateOut:"tns-fadeOut",pe=P?e.animateNormal:"tns-normal",ye=!!P&&e.animateDelay;D&&(En=D,Tn="translate"+wn+"(",Cn=")");var ge=on?function(){return Math.max(1,Math.min(Qt,Math.floor(_t/on)))}:function(){var t=e.items,n="object"==typeof dn&&Object.keys(dn);return n&&n.forEach(function(n){_t>=n&&(t=dn[n])}),Math.max(1,Math.min(Qt,t))},be=e.navContainer?function(){return Qt}:function(){return Math.ceil(Qt/Zt)},we="horizontal"===Yt&&!on&&an?function(){return Vt.clientWidth-2*(an+en)}:function(){return Vt.clientWidth};i($t,Kt),i(Kt,Vt),T(),C(),L(),$(),g(),M(),k(),H(),F(),W(),j(),B(),R(!0),U(),X(),"function"==typeof On&&On(zt()),"inner"===nn&&Nn.emit("innerLoaded",zt());var xe="carousel"===Xt?function(t,n){n||(n=-Rt[Mn]),gn&&Mn===Gt&&(n=Math.max(n,-yn*vn+_t+en)),A||!t?$t.style[En]=Tn+Math.round(n)+"px"+Cn:E($t,En,Tn,Cn,n,cn,ot),"vertical"===Yt&&(Kt.style.height=J()+"px")}:function(){mn=[];var t={};t[N]=t[z]=ot,w(Jt[Dn],t),b(Jt[Mn],t),function(){for(var t=Dn,n=Dn+Zt;t<n;t++){var e=Jt[t];if(A&&et(cn,e),ye&&O){var a=ye*(t-Dn)/1e3;e.style[O]=a+"s",e.style[I]=a+"s"}e.classList.remove(ve),e.classList.add(me),mn.push(e)}}(),function(){for(var t=Mn,n=Mn+Zt;t<n;t++){var e=Jt[t];if(A&&et(cn,e),ye&&O){var a=ye*(t-Mn)/1e3;e.style[O]=a+"s",e.style[I]=a+"s"}e.classList.remove(pe),e.classList.add(ve),t>Mn&&(e.style.left=(t-Mn)*vn+"px")}}(),N||setTimeout(ot,cn)},Ee=sn?function(){var t="carousel"===Xt?tn+Ln:Ln,n="carousel"===Xt?Gt-tn:Gt;if(on&&_t%vn!=0&&(n-=1),Mn>n)for(;Mn>=t+Qt;)Mn-=Qt;else if(Mn<t)for(;Mn<=n-Qt;)Mn+=Qt}:function(){Mn=Math.max(Ln,Math.min(Gt,Mn))};return{getInfo:zt,events:Nn,goTo:St,destroy:function(){if(o(Vt),o(Kt),Vt=Kt=null,h($t,["id","style","data-tns-role","data-tns-features"]),sn)for(var t=pn;t--;)Jt[0].remove(),Jt[Jt.length-1].remove();h(Jt,["id","style","aria-hidden","tabindex"]),hn=Qt=null,Sn&&(e.controlsContainer?(h(Fn,["aria-label","tabindex"]),h(Fn.children,["aria-controls","tabindex"]),v(Fn)):(Fn.remove(),Fn=In=zn=null)),Bn&&(e.navContainer?(h(Rn,["aria-label"]),h(Wn,["aria-selected","aria-controls","tabindex"]),v(Rn)):(Rn.remove(),Rn=null),Wn=null),Vn&&(e.navContainer||null===Rn?v(Zn):(Rn.remove(),Rn=null),w(document,{visibilitychange:pt})),v($t),rn&&w(document,{keydown:yt}),w(window,{resize:Ft})}}}}}();