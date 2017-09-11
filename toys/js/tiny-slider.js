var tns=function(){function t(){for(var t,e,n,a=arguments[0]||{},i=1,o=arguments.length;i<o;i++)if(null!==(t=arguments[i]))for(e in t)n=t[e],a!==n&&void 0!==n&&(a[e]=n);return a}function e(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}function n(t){return void 0!==t.item}function a(t,e){var a,i=n(t)?t:[t];if(void 0!==e.nodeType&&1===e.nodeType)for(a=i.length;a--;)i[a].appendChild(e);else if("string"==typeof e)for(a=i.length;a--;)i[a].insertAdjacentHTML("beforeend",e);else if(n(e)){var o=document.createDocumentFragment();for(a=e.length;a--;)o.insertBefore(e[a],o.firstChild);for(var r=i.length;r--;)i[r].appendChild(o)}}function i(t,e){for(var a=n(t)?t:[t],i=a.length;i--;){var o=i>0?e.cloneNode(!0):e,r=a[i],c=r.parentNode,l=r.nextSibling;o.appendChild(r),l?c.insertBefore(o,l):c.appendChild(o)}}function o(t){for(var e=n(t)?t:[t],a=e.length;a--;){for(var i=e[a],o=i.parentNode;i.firstChild;)o.insertBefore(i.firstChild,i);o.removeChild(i)}}function r(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function c(t,e){return Math.atan2(t,e)*(180/Math.PI)}function l(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function s(t,e){return t.hasAttribute(e)}function u(t,e){return t.getAttribute(e)}function d(t){return void 0!==t.item}function f(t,e){if(t=d(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var a in e)t[n].setAttribute(a,e[a])}function h(t,e){t=d(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,a=t.length;a--;)for(var i=n;i--;)t[a].removeAttribute(e[i])}function v(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function m(t){s(t,"hidden")||f(t,{hidden:""})}function p(t){s(t,"hidden")&&h(t,"hidden")}function y(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function g(t){var e,n=document.createElement("fakeelement");for(e in t)if(void 0!==n.style[e])return[e,t[e][0],t[e][1]];return!1}function b(t,e){for(var n in e){var a=("touchstart"===n||"touchmove"===n)&&M;t.addEventListener(n,e[n],a)}}function w(t,e){for(var n in e){var a=("touchstart"===n||"touchmove"===n)&&M;t.removeEventListener(n,e[n],a)}}function x(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function E(t,e,n,a,i,o,r){function c(){o-=l,s+=u,t.style[e]=n+s+"px"+a,o>0?setTimeout(c,l):r()}var l=Math.min(o,10),s=Number(t.style[e].slice(n.length,-(a.length+2))),u=(i-s)/o*l;setTimeout(c,l)}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var a=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(a+16,e);return setTimeout(function(){t(a=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";var t,e,n,a=window,i=document,o=Object,r="length",c="item contains add remove toggle toString toLocaleString".split(" "),l=c[2],s=c[3],u=c[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,a){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!a,get:n}):t.__defineGetter__(e,n)},v=function(t,e){var n=this,a=[],i={},d=0,f=0,v=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return m(),a[t]},!1)}(f)},m=function(){var n,o,c=arguments,l=/\s+/;if(c[r])for(o=0;o<c[r];++o)if(l.test(c[o]))throw n=new SyntaxError('String "'+c[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(""===(a=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l))[0]&&(a=[]),i={},o=0;o<a[r];++o)i[a[o]]=!0;d=a[r],v()};return m(),h(n,r,function(){return m(),d}),n[c[6]]=n[c[5]]=function(){return m(),a.join(" ")},n.item=function(t){return m(),a[t]},n.contains=function(t){return m(),!!i[t]},n[l]=function(){m.apply(n,o=arguments);for(var o,c,l=0,s=o[r];l<s;++l)c=o[l],i[c]||(a.push(c),i[c]=!0);d!==a[r]&&(d=a[r]>>>0,t[e]=a.join(" "),v())},n[s]=function(){m.apply(n,o=arguments);for(var o,c={},l=0,s=[];l<o[r];++l)c[o[l]]=!0,delete i[o[l]];for(l=0;l<a[r];++l)c[a[l]]||s.push(a[l]);a=s,d=s[r]>>>0,t[e]=a.join(" "),v()},n[u]=function(t,e){return m.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[s](t),!1):i[t]?(n[s](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,c[n],{enumerable:!1})}(n,o.defineProperty),n},m=function(t,e,n){h(t[d],e,function(){var t,a=this,o="__defineGetter__defineProperty"+e;if(a[o])return t;if(a[o]=!0,!1===f){for(var c,l=m.mirror=m.mirror||i.createElement("div"),s=l.childNodes,u=s[r],d=0;d<u;++d)if(s[d]._R===a){c=s[d];break}c||(c=l.appendChild(i.createElement("div"))),t=v.call(c,a,n)}else t=new v(a,n);return h(a,e,function(){return t}),delete a[o],t},!0)};if(a.DOMTokenList)t=i.createElement("div").classList,d=a.DOMTokenList[d],t[l].apply(t,c),2>t[r]&&(e=d[l],n=d[s],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[s]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:s](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}v.polyfill=!0,a.DOMTokenList=v,m(a.Element,"classList","className"),m(a.HTMLLinkElement,"relList","rel"),m(a.HTMLAnchorElement,"relList","rel"),m(a.HTMLAreaElement,"relList","rel")}}();var T=!1;try{var C=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,C)}catch(t){}var M=!!T&&{passive:!0},D=function(t){for(var e=document.documentElement,n=0;n<t.length;n++)if(t[n]in e.style)return t[n]}(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),k={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},L={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},A=g(k)[0],O=g(k)[1],N=g(k)[2],P=g(L)[0],I=g(L)[1],z=g(L)[2],S={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return function(n){function s(){return"gallery"===Ht||"page"===n.slideBy?_t:n.slideBy}function d(){return(It+Xt)/_t}function g(){It=un(),_t=ln(),Pt=re-_t-pe,"horizontal"!==Ft||Vt||(ae=d()),Le=sn(),qt=s()}function T(t){!xe&&Gt<=_t?(C(t,!0),_e&&nt(),ve="carousel"!==Ht?0:oe,Ae&&m(Oe),Ce&&m(De),Fe&&m(Ge),xe=!0):(C(t,!1),Fe&&!_e&&et(),Ae&&p(Oe),Ce&&p(De),Fe&&p(Ge),xe=!1)}function C(t,e){var n=!t&&e,a=!e;if("carousel"===Ht){var i={touchstart:mt,touchmove:pt,touchend:yt,touchcancel:yt},o={mousedown:mt,mousemove:pt,mouseup:yt,mouseleave:yt};n&&(Je&&w(Bt,i),tn&&w(Bt,o)),a&&(Je&&b(Bt,i),tn&&b(Bt,o))}var r={click:ot},c={mouseover:M,mouseout:k},l={visibilitychange:rt},s={keydown:ct};n&&(Fe&&(w(Ge,r),Re&&w(Bt,c),Xe&&w(document,l)),Kt&&w(document,s)),a&&(Fe&&(b(Ge,r),Re&&b(Bt,c),Xe&&b(document,l)),Kt&&b(document,s))}function M(){_e&&(nt(),qe=!0)}function k(){!_e&&qe&&(et(),qe=!1)}function L(){if(ee){var t=ve,e=ve+_t;for(Yt&&(t-=1,e+=1);t<e;t++)[].forEach.call(Rt[t].querySelectorAll('[data-tns-role="lazy-img"]'),function(t){var e={};e[N]=function(t){t.stopPropagation()},b(t,e),t.classList.contains("loaded")||(t.src=u(t,"data-src"),t.classList.add("loaded"))})}}function H(){if(Zt){for(var t=[],e=ve;e<ve+_t;e++)[].forEach.call(Rt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?j():F(t)}}function F(t){t.forEach(function(e,n){y(e)&&t.splice(n,1)}),0===t.length?j():setTimeout(function(){F(t)},16)}function W(){return(It%ae+Xt)/2}function j(){for(var t,e=[],n=ve;n<ve+_t;n++)e.push(Rt[n].offsetHeight);t=Math.max.apply(null,e),Bt.style.height!==t&&(A&&X($t),Bt.style.height=t+"px")}function B(){Nt=[0];for(var t,e=Rt[0].getBoundingClientRect()[ue],n=1;n<re;n++)t=Rt[n].getBoundingClientRect()[ue],Nt.push(t-e)}function R(){return Nt[ve+_t]-Nt[ve]}function G(){Wt.style.msScrollSnapPointsX="snapInterval(0%, "+ae+")"}function _(){var t,e,n,a;ve!==me&&(ve>me?(t=me,e=Math.min(me+_t,ve),n=Math.max(me+_t,ve),a=ve+_t):(t=Math.max(ve+_t,me),e=me+_t,n=ve,a=Math.min(ve+_t,me))),qt%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),a=Math.round(a));for(var i=t;i<e;i++)f(Rt[i],{"aria-hidden":"true",tabindex:"-1"});for(var o=n;o<a;o++)f(Rt[o],{"aria-hidden":"false"}),h(Rt[o],["tabindex"])}function q(){Ae&&(ze=-1!==Ie?Ie:ve%Gt,Ie=-1,ze!==Se&&(f(ke[Se],{tabindex:"-1","aria-selected":"false"}),f(ke[ze],{tabindex:"0","aria-selected":"true"}),Se=ze))}function U(){if(Ce&&!Qt){var t=[],e=[];ve===ye?(t.push(Ee),e.push(Te),lt(Ee,Te)):Jt||ve!==Pt?e.push(Ee,Te):(t.push(Te),e.push(Ee),lt(Te,Ee)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function X(t,e){t=t?t/1e3+"s":"",(e=e||Bt).style[A]=t,"gallery"===Ht&&(e.style[P]=t),"vertical"===Ft&&(jt.style[A]=t)}function Y(t,e){void 0===t&&(t=$t),A&&X(t),dn(t,e)}function V(){ge=!0,le&&fn(),ve%Gt!=me%Gt&&we.emit("indexChanged",Ct()),we.emit("transitionStart",Ct()),Y()}function K(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(we.emit("transitionEnd",Ct(t)),"gallery"===Ht&&ie.length>0)for(var n=0;n<_t;n++){var a=ie[n];A&&X(0,a),cn&&O&&(a.style[O]=a.style[I]=""),a.classList.remove(on),a.classList.add(rn),a.style.left=""}if(!t||"gallery"===Ht&&t.target.parentNode===Bt||t.target===Bt&&e(t.propertyName)===e(de)){if(!le){var i=ve;fn(),ve!==i&&(Y(0),we.emit("indexChanged",Ct()))}_(),(Ae&&!Qt||Ae&&Qt&&-1===Ne.indexOf(ve%Gt))&&Tt(),q(),U(),L(),H(),"inner"===Ut&&we.emit("innerLoaded",Ct()),ge=!1,$()}}function $(){me=ve}function J(t){ge||(ve+=t*qt,V())}function Q(){J(-1)}function Z(){J(Jt&&ve===Pt?-(Pt-ye)/qt:1)}function tt(t){if(!ge){for(var n=t.target||t.srcElement;-1===e(ke,n);)n=n.parentNode;Mt((Ie=e(ke,n))+("gallery"===Ht?0:oe))}}function et(){it(),f(Ge,{"data-action":"stop"}),Ge.innerHTML=Ue+Be[1],_e=!0}function nt(){at(),f(Ge,{"data-action":"start"}),Ge.innerHTML=Ue.replace("Stop","Start")+Be[0],_e=!1}function at(){_e="paused",clearInterval(He)}function it(){!0!==_e&&(clearInterval(He),He=setInterval(function(){J(je)},We))}function ot(){_e?nt():et()}function rt(){Ye!=document.hidden&&!1!==_e&&(document.hidden?at():it()),Ye=document.hidden}function ct(t){switch((t=t||window.event).keyCode){case S.LEFT:Q();break;case S.RIGHT:Z()}}function lt(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function st(t){var e=(t=t||window.event).keyCode;switch(document.activeElement,e){case S.LEFT:case S.UP:case S.PAGEUP:Ee.disabled||Q();break;case S.RIGHT:case S.DOWN:case S.PAGEDOWN:Te.disabled||Z();break;case S.HOME:Mt(0);break;case S.END:Mt(Gt-1)}}function ut(t){var e=(t=t||window.event).keyCode,n=document.activeElement,a=u(n,"data-nav");switch(e){case S.LEFT:case S.PAGEUP:a>0&&lt(n,n.previousElementSibling);break;case S.UP:case S.HOME:0!==a&&lt(n,ke[0]);break;case S.RIGHT:case S.PAGEDOWN:a<Le-1&&lt(n,n.nextElementSibling);break;case S.DOWN:case S.END:a<Le-1&&lt(n,ke[Le-1]);break;case S.ENTER:case S.SPACE:tt(t)}}function dt(){Y(0,Bt.scrollLeft()),$()}function ft(t){return t.target||t.srcElement}function ht(t){return"a"===t.tagName.toLowerCase()}function vt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function mt(t){ht(ft(t=t||window.event))&&"touchstart"!==t.type&&vt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Qe=parseInt(e.clientX),Ze=parseInt(e.clientY);var n=D?[11,-3]:[0,-2];Ve=Number(Bt.style[de].slice(n[0],n[1])),"touchstart"===t.type?we.emit("touchStart",Ct(t)):(we.emit("dragStart",Ct(t)),en=!0)}function pt(t){if(t=t||window.event,en&&"mousemove"===t.type&&!nn&&(nn=!0),null!==Qe){ht(ft(t))&&"touchmove"!==t.type&&vt(t);var e="touchmove"===t.type?t.changedTouches[0]:t;if(Ke=parseInt(e.clientX)-Qe,$e=parseInt(e.clientY)-Ze,l(c($e,Ke),15)===Ft){St=!0,"touchmove"===t.type?we.emit("touchMove",Ct(t)):we.emit("dragMove",Ct(t));var n="horizontal"===Ft?Ve+Ke:Ve+$e;n+="px",D&&(n="translate"+se+"("+n+")",X(0)),Bt.style[de]=n}}}function yt(t){if(t=t||window.event,en&&(en=!1),St){St=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Ke=parseInt(e.clientX)-Qe,$e=parseInt(e.clientY)-Ze,Qe=Ze=null,"horizontal"===Ft)ve=-(Ve+Ke)/ae,ve=Ke>0?Math.floor(ve):Math.ceil(ve);else{var n=-(Ve+$e);if(n<=0)ve=ye;else if(n>=Nt[Nt.length-1])ve=Pt;else{var a=0;do{a++,ve=$e<0?a+1:a}while(a<re&&n>=Math.round(Nt[a+1]))}}0===t.type.indexOf("touch")?we.emit("touchEnd",Ct(t)):we.emit("dragEnd",Ct(t)),V()}if(nn){nn=!1;var i=ft(t);ht(i)&&b(i,{click:function t(e){vt(e),w(i,{click:t})}})}}function gt(){Bt.style.width=(ae+1)*re+"px";for(var t=re;t--;)Rt[t].style.width=ae-Xt+"px"}function bt(){for(var t=ve+1,e=ve+_t;t<e;t++)Rt[t].style.left=ae*(t-ve)+"px"}function wt(){jt.style.cssText="margin: 0px "+W()+"px"}function xt(){jt.style.height=R()+"px"}function Et(){Ne=[];for(var t=ve%Gt%_t;t<Gt;)!Qt&&t+_t>Gt&&(t=Gt-_t),Ne.push(t),t+=_t;(Qt&&Ne.length*_t<Gt||!Qt&&Ne[0]>0)&&Ne.unshift(0)}function Tt(){Ae&&!n.navContainer&&(Et(),Ne!==Pe&&(Pe.length>0&&Pe.forEach(function(t){f(ke[t],{hidden:""})}),Ne.length>0&&Ne.forEach(function(t){h(ke[t],"hidden")}),Pe=Ne))}function Ct(t){return{container:Bt,slideItems:Rt,navItems:ke,prevButton:Ee,nextButton:Te,items:_t,index:ve,indexCached:me,navCurrent:ze,navCurrentCached:Se,slideCount:Gt,cloneCount:oe,slideCountNew:re,event:t||{}}}function Mt(t){var e,n=ve%Gt;switch(n<0&&(n+=Gt),t){case"next":e=1;break;case"prev":case"previous":e=-1;break;case"first":e=-n;break;case"last":e=Gt-1-n;break;default:if("number"==typeof t){var a=t%Gt;a<0&&(a+=Gt),e=a-n}}(ve+=e)%Gt!=me%Gt&&(fn(),V())}function Dt(){var t=ve,e=_t;g(),fn(),T(),"horizontal"===Ft?(Vt&&Yt?wt():(gt(),"gallery"===Ht&&bt()),B()):(B(),xt()),(ve!==t||"carousel"===Ht&&!Vt)&&Y(0),ve===t&&_t===e||(L(),Tt(),q()),H(),ve!==t&&(we.emit("indexChanged",Ct()),_(),U()),navigator.msMaxTouchPoints&&G()}function kt(t){clearTimeout(zt),zt=setTimeout(function(){It!==un()&&(Dt(),"outer"===Ut&&we.emit("outerResized",Ct(t)))},100)}n=t({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},n||{});for(var Lt=["container","controlsContainer","navContainer","autoplayButton"],At=4;At--;){var Ot=n[Lt[At]];"string"==typeof Ot&&(n[Lt[At]]=document.querySelector(Ot))}if(n.container&&n.container.nodeName&&!(n.container.children.length<2)){var Nt,Pt,It,zt,St,Ht=n.mode,Ft=n.axis,Wt=document.createElement("div"),jt=document.createElement("div"),Bt=n.container,Rt=Bt.children,Gt=Rt.length,_t=n.items,qt=s(),Ut=n.nested,Xt=n.gutter,Yt="gallery"!==Ht&&n.edgePadding,Vt=n.fixedWidth,Kt=n.arrowKeys,$t=n.speed,Jt=n.rewind,Qt="gallery"===Ht||!n.rewind&&n.loop,Zt="gallery"===Ht||n.autoHeight,te=!Vt&&n.responsive,ee=n.lazyload,ne=Bt.id||r(),ae=Vt?Vt+Xt:0,ie=[],oe=Qt?2*Gt:Yt?1:0,re="gallery"===Ht?Gt+oe:Gt+2*oe,ce=!(!Vt||Qt||Yt),le="gallery"===Ht||!Qt,se="horizontal"===Ft?"X":"Y",ue="horizontal"===Ft?"left":"top",de=ue,fe="",he="",ve="gallery"===Ht?0:oe,me=ve,pe=Yt?1:0,ye=pe,ge=!1,be=n.onInit,we=new x,xe=!1;if(n.controls)var Ee,Te,Ce=n.controls,Me=n.controlsText,De=n.controlsContainer;if(n.nav)var ke,Le,Ae=n.nav,Oe=n.navContainer,Ne=[],Pe=Ne,Ie=-1,ze=0,Se=0;if(n.autoplay)var He,Fe=n.autoplay,We=n.autoplayTimeout,je="forward"===n.autoplayDirection?1:-1,Be=n.autoplayText,Re=n.autoplayHoverPause,Ge=n.autoplayButton,_e=!1,qe=!1,Ue="<span hidden>Stop Animation</span>",Xe=n.autoplayResetOnVisibility,Ye=!1;if(n.touch)var Ve,Ke,$e,Je=n.touch,Qe=null,Ze=null;if(n.mouseDrag)var tn=n.mouseDrag,en=!1,nn=!1;if("gallery"===n.mode)var an=P?n.animateIn:"tns-fadeIn",on=P?n.animateOut:"tns-fadeOut",rn=P?n.animateNormal:"tns-normal",cn=!!P&&n.animateDelay;D&&(de=D,fe="translate"+se+"(",he=")");var ln=Vt?function(){return Math.max(1,Math.min(Gt,Math.floor(It/Vt)))}:function(){var t=n.items,e="object"==typeof te&&Object.keys(te);return e&&e.forEach(function(e){It>=e&&(t=te[e])}),Math.max(1,Math.min(Gt,t))},sn=n.navContainer?function(){return Gt}:function(){return Math.ceil(Gt/_t)},un="horizontal"===Ft&&!Vt&&Yt?function(){return Wt.clientWidth-2*(Yt+Xt)}:function(){return Wt.clientWidth};i(Bt,jt),i(jt,Wt),g(),""===Bt.id&&(Bt.id=ne),f(Bt,{"data-tns-role":"content","data-tns-mode":Ht,"data-tns-axis":Ft}),"horizontal"===Ft&&(Bt.style.width=(ae+1)*re+"px"),function(){for(var t=0;t<Gt;t++){var e=Rt[t];e.id=ne+"-item"+t,"gallery"===Ht&&rn&&e.classList.add(rn),f(e,{"aria-hidden":"true",tabindex:"-1"});var n="horizontal"===Ft?"right":"bottom",a="";"carousel"===Ht&&(a="margin-"+n+": "+Xt+"px;"),"horizontal"===Ft&&(a="width: "+(ae-Xt)+"px; "+a),e.style.cssText+=a}if(Qt||Yt){for(var i=document.createDocumentFragment(),o=document.createDocumentFragment(),r=oe;r--;){var c=r%Gt,l=Rt[c].cloneNode(!0);if(h(l,"id"),o.insertBefore(l,o.firstChild),"carousel"===Ht){var s=Rt[Gt-1-c].cloneNode(!0);h(s,"id"),i.appendChild(s)}}Bt.insertBefore(i,Bt.firstChild),Bt.appendChild(o),Rt=Bt.children}}(),B(),function(){if(f(Wt,{"data-tns-role":"wrapper"}),f(jt,{"data-tns-role":"content-wrapper"}),"vertical"===Ft?f(jt,{"data-tns-hidden":"y"}):f(Wt,{"data-tns-hidden":"x"}),"carousel"===Ht){var t=Vt&&Yt?W():Yt?Yt+Xt:0;jt.style.cssText="horizontal"===Ft?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Yt+"px; height: "+R()+"px;"}}(),"carousel"===Ht&&(Zt&&f(Bt,{"data-tns-hidden":"y"}),Bt.style[de]=fe+Math.round(-Nt[ve])+"px"+he),navigator.msMaxTouchPoints&&(Wt.classList.add("ms-touch"),b(Wt,{scroll:dt})),Ce&&(De?(Ee=De.children[0],Te=De.children[1],f(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),f(Ee,{"data-controls":"prev"}),f(Te,{"data-controls":"next"}),f(De.children,{"aria-controls":ne,tabindex:"-1"})):(a(Wt,'<div data-tns-role="controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ne+'" type="button">'+Me[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ne+'" type="button">'+Me[1]+"</button></div>"),[].forEach.call(Wt.children,function(t){"controls"===t.getAttribute("data-tns-role")&&(De=t)}),Ee=De.children[0],Te=De.children[1])),function(){if(Ae)if(n.navContainer)f(Oe,{"aria-label":"Carousel Pagination"}),ke=Oe.children,[].forEach.call(ke,function(t,e){f(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":ne+"-item"+e})});else{for(var t="",e=0;e<Gt;e++)t+='<button data-nav="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+ne+"-item"+e+'" hidden type="button"></button>';a(Wt,t='<div data-tns-role="nav" aria-label="Carousel Pagination">'+t+"</div>"),[].forEach.call(Wt.children,function(t){"nav"===t.getAttribute("data-tns-role")&&(Oe=t)}),ke=Oe.children,Tt()}}(),Fe&&(Ge?f(Ge,{"data-action":"stop"}):(Oe||(a(Wt,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),Oe=Wt.querySelector('[data-tns-role="nav"]')),a(Oe,'<button data-action="stop" type="button">'+Ue+Be[0]+"</button>"),Ge=Oe.querySelector("[data-action]")),et()),function(){for(var t=ve;t<ve+_t;t++){var e=Rt[t];f(e,{"aria-hidden":"false"}),h(e,["tabindex"]),"gallery"===Ht&&(e.style.left=ae*(t-ve)+"px",e.classList.remove(rn),e.classList.add(an))}Ce&&(ve===ye&&!Qt||Jt)&&(Ee.disabled=!0),Ae&&f(ke[0],{tabindex:"0","aria-selected":"true"})}(),function(){if("carousel"===Ht&&N){var t={};t[N]=K,b(Bt,t)}if(Ae)for(var e=0;e<Gt;e++)b(ke[e],{click:tt,keydown:ut});Ce&&(b(De,{keydown:st}),b(Ee,{click:Q}),b(Te,{click:Z})),"inner"===Ut?we.on("outerResized",function(){Dt(),we.emit("innerLoaded",Ct())}):(b(window,{resize:kt}),"outer"===Ut&&we.on("innerLoaded",H))}(),T(!0),L(),H(),"function"==typeof be&&be(Ct()),"inner"===Ut&&we.emit("innerLoaded",Ct());var dn="carousel"===Ht?function(t,e){e||(e=-Nt[ve]),ce&&ve===Pt&&(e=Math.max(e,-re*ae+It+Xt)),A||!t?Bt.style[de]=fe+Math.round(e)+"px"+he:E(Bt,de,fe,he,e,$t,K),"vertical"===Ft&&(jt.style.height=R()+"px")}:function(){ie=[];var t={};t[N]=t[z]=K,w(Rt[me],t),b(Rt[ve],t),function(){for(var t=me,e=me+_t;t<e;t++){var n=Rt[t];if(A&&X($t,n),cn&&O){var a=cn*(t-me)/1e3;n.style[O]=a+"s",n.style[I]=a+"s"}n.classList.remove(an),n.classList.add(on),ie.push(n)}}(),function(){for(var t=ve,e=ve+_t;t<e;t++){var n=Rt[t];if(A&&X($t,n),cn&&O){var a=cn*(t-ve)/1e3;n.style[O]=a+"s",n.style[I]=a+"s"}n.classList.remove(rn),n.classList.add(an),t>ve&&(n.style.left=(t-ve)*ae+"px")}}(),N||setTimeout(K,$t)},fn=Qt?function(){var t="carousel"===Ht?qt+ye:ye,e="carousel"===Ht?Pt-qt:Pt;if(Vt&&It%ae!=0&&(e-=1),ve>e)for(;ve>=t+Gt;)ve-=Gt;else if(ve<t)for(;ve<=e-Gt;)ve+=Gt}:function(){ve=Math.max(ye,Math.min(Pt,ve))};return{getInfo:Ct,events:we,goTo:Mt,destroy:function(){if(o(Wt),o(jt),Wt=jt=null,h(Bt,["id","style","data-tns-role","data-tns-features"]),Qt)for(var t=oe;t--;)Rt[0].remove(),Rt[Rt.length-1].remove();h(Rt,["id","style","aria-hidden","tabindex"]),ne=Gt=null,Ce&&(n.controlsContainer?(h(De,["aria-label","tabindex"]),h(De.children,["aria-controls","tabindex"]),v(De)):(De.remove(),De=Ee=Te=null)),Ae&&(n.navContainer?(h(Oe,["aria-label"]),h(ke,["aria-selected","aria-controls","tabindex"]),v(Oe)):(Oe.remove(),Oe=null),ke=null),Fe&&(n.navContainer||null===Oe?v(Ge):(Oe.remove(),Oe=null),w(document,{visibilitychange:rt})),v(Bt),Kt&&w(document,{keydown:ct}),w(window,{resize:kt})}}}}}();