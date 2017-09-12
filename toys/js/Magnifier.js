var Magnifier=function(e,t){"use strict";var o=t||{},a=null,n={x:0,y:0,w:0,h:0,lensW:0,lensH:0,lensBgX:0,lensBgY:0,largeW:0,largeH:0,largeL:0,largeT:0,zoom:2,zoomMin:1.1,zoomMax:5,mode:"outside",largeWrapperId:void 0!==o.largeWrapper?o.largeWrapper.id||null:null,status:0,zoomAttached:!1,zoomable:void 0!==o.zoomable&&o.zoomable,onthumbenter:void 0!==o.onthumbenter?o.onthumbenter:null,onthumbmove:void 0!==o.onthumbmove?o.onthumbmove:null,onthumbleave:void 0!==o.onthumbleave?o.onthumbleave:null,onzoom:void 0!==o.onzoom?o.onzoom:null},l={t:0,l:0,x:0,y:0},r=0,s=0,m="",i=null,u=null,d=void 0!==o.zoom?o.zoom:n.zoom,h=void 0!==o.zoomMin?o.zoomMin:n.zoomMin,g=void 0!==o.zoomMax?o.zoomMax:n.zoomMax,c=o.mode||n.mode,p={},b=!1,z=0,f=function(e){var t=[],o=null,a=0,n="",l=0,r=0;if(document.getElementsByClassName)t=document.getElementsByClassName(e);else for(a=(o=document.getElementsByTagName("*")).length,n=new RegExp("(^|\\s)"+e+"(\\s|$)"),r;l<a;l+=1)n.test(o[l].className)&&(t[r]=o[l],r+=1);return t},v=function(e){var t="",o=e.charAt(0),a=null;if("#"!==o&&"."!==o||(t=e.substr(1,e.length)),""!==t)switch(o){case"#":a=document.getElementById(t);break;case".":a=f(t)}return a},x=function(e,t){var o=document.createElement("div");o.id=t+"-lens",o.className="magnifier-loader",e.parentNode.appendChild(o)},y=function(){i.style.left=l.l+"px",i.style.top=l.t+"px",i.style.width=n.lensW+"px",i.style.height=n.lensH+"px",i.style.backgroundPosition="-"+n.lensBgX+"px -"+n.lensBgY+"px",u.style.left="-"+n.largeL+"px",u.style.top="-"+n.largeT+"px",u.style.width=n.largeW+"px",u.style.height=n.largeH+"px"},M=function(e,t,o,a){var n=v("#"+e+"-lens"),l=null;1===p[e].status?((l=document.createElement("div")).className="magnifier-loader-text",n.className="magnifier-loader hidden",l.appendChild(document.createTextNode("Loading...")),n.appendChild(l)):2===p[e].status&&(n.className="magnifier-lens hidden",n.removeChild(n.childNodes[0]),n.style.background="url("+t.src+") no-repeat 0 0 scroll",o.id=e+"-large",o.style.width=p[e].largeW+"px",o.style.height=p[e].largeH+"px",o.className="magnifier-large hidden","inside"===p[e].mode?n.appendChild(o):a.appendChild(o)),n.style.width=p[e].lensW+"px",n.style.height=p[e].lensH+"px"},W=function(){var e=l.x-n.x,t=l.y-n.y,o=0,a=0;b=!(e<0||t<0||e>n.w||t>n.h),a=e-n.lensW/2,o=t-n.lensH/2,"inside"!==n.mode&&(e<n.lensW/2&&(a=0),t<n.lensH/2&&(o=0),e-n.w+n.lensW/2>0&&(a=n.w-(n.lensW+2)),t-n.h+n.lensH/2>0&&(o=n.h-(n.lensH+2))),l.l=Math.round(a),l.t=Math.round(o),n.lensBgX=l.l+1,n.lensBgY=l.t+1,"inside"===n.mode?(n.largeL=Math.round(e*(n.zoom-n.lensW/n.w)),n.largeT=Math.round(t*(n.zoom-n.lensH/n.h))):(n.largeL=Math.round(n.lensBgX*n.zoom*(n.largeWrapperW/n.w)),n.largeT=Math.round(n.lensBgY*n.zoom*(n.largeWrapperH/n.h)))},w=function(e){var t=e.wheelDelta>0||e.detail<0?.1:-.1,o=n.onzoom,r=1,s=0,m=0;e.preventDefault&&e.preventDefault(),e.returnValue=!1,n.zoom=Math.round(10*(n.zoom+t))/10,n.zoom>=n.zoomMax?n.zoom=n.zoomMax:n.zoom>=n.zoomMin?(n.lensW=Math.round(n.w/n.zoom),n.lensH=Math.round(n.h/n.zoom),"inside"===n.mode?(s=n.w,m=n.h):(s=n.largeWrapperW,m=n.largeWrapperH,r=n.largeWrapperW/n.w),n.largeW=Math.round(n.zoom*s),n.largeH=Math.round(n.zoom*m),W(),y(),null!==o&&o({thumb:a,lens:i,large:u,x:l.x,y:l.y,zoom:Math.round(n.zoom*r*10)/10,w:n.lensW,h:n.lensH})):n.zoom=n.zoomMin},N=function(){n=p[m],i=v("#"+m+"-lens"),2===n.status?(i.className="magnifier-lens",!1===n.zoomAttached&&(void 0!==n.zoomable&&!0===n.zoomable&&(e.attach("mousewheel",i,w),window.addEventListener&&i.addEventListener("DOMMouseScroll",function(e){w(e)})),n.zoomAttached=!0),(u=v("#"+m+"-large")).className="magnifier-large"):1===n.status&&(i.className="magnifier-loader")},H=function(){if(n.status>0){var e=n.onthumbleave;null!==e&&e({thumb:a,lens:i,large:u,x:l.x,y:l.y}),-1===i.className.indexOf("hidden")&&(i.className+=" hidden",a.className=n.thumbCssClass,null!==u&&(u.className+=" hidden"))}},B=function(){if(s!==n.status&&N(),n.status>0){a.className=n.thumbCssClass+" opaque",1===n.status?i.className="magnifier-loader":2===n.status&&(i.className="magnifier-lens",u.className="magnifier-large",u.style.left="-"+n.largeL+"px",u.style.top="-"+n.largeT+"px"),i.style.left=l.l+"px",i.style.top=l.t+"px",i.style.backgroundPosition="-"+n.lensBgX+"px -"+n.lensBgY+"px";var e=n.onthumbmove;null!==e&&e({thumb:a,lens:i,large:u,x:l.x,y:l.y})}s=n.status},C=function(e,t){var o=e.getBoundingClientRect(),a=0,n=0;t.x=o.left,t.y=o.top,t.w=Math.round(o.right-t.x),t.h=Math.round(o.bottom-t.y),t.lensW=Math.round(t.w/t.zoom),t.lensH=Math.round(t.h/t.zoom),"inside"===t.mode?(a=t.w,n=t.h):(a=t.largeWrapperW,n=t.largeWrapperH),t.largeW=Math.round(t.zoom*a),t.largeH=Math.round(t.zoom*n)};this.attach=function(e){if(void 0===e.thumb)throw{name:"Magnifier error",message:"Please set thumbnail",toString:function(){return this.name+": "+this.message}};var t=v(e.thumb),o=0;if(void 0!==t.length)for(o;o<t.length;o+=1)e.thumb=t[o],this.set(e);else e.thumb=t,this.set(e)},this.setThumb=function(e){a=e},this.set=function(t){if(void 0!==p[t.thumb.id])return a=t.thumb,!1;var o=new Image,s=new Image,b=t.thumb,f=b.id,y=null,w=null,A=v("#"+t.largeWrapper)||v("#"+b.getAttribute("data-large-img-wrapper"))||v("#"+n.largeWrapperId),E=t.zoom||b.getAttribute("data-zoom")||d,L=t.zoomMin||b.getAttribute("data-zoom-min")||h,T=t.zoomMax||b.getAttribute("data-zoom-max")||g,X=t.mode||b.getAttribute("data-mode")||c,Y=void 0!==t.onthumbenter?t.onthumbenter:n.onthumbenter,I=void 0!==t.onthumbleave?t.onthumbleave:n.onthumbleave,D=void 0!==t.onthumbmove?t.onthumbmove:n.onthumbmove,k=void 0!==t.onzoom?t.onzoom:n.onzoom;if(w=void 0===t.large?null!==t.thumb.getAttribute("data-large-img-url")?t.thumb.getAttribute("data-large-img-url"):t.thumb.src:t.large,null===A&&"inside"!==X)throw{name:"Magnifier error",message:"Please specify large image wrapper DOM element",toString:function(){return this.name+": "+this.message}};void 0!==t.zoomable?y=t.zoomable:null!==b.getAttribute("data-zoomable")?y="true"===b.getAttribute("data-zoomable"):void 0!==n.zoomable&&(y=n.zoomable),""===b.id&&(f=b.id="magnifier-item-"+r,r+=1),x(b,f),p[f]={zoom:E,zoomMin:L,zoomMax:T,mode:X,zoomable:y,thumbCssClass:b.className,zoomAttached:!1,status:0,largeUrl:w,largeWrapperId:"outside"===X?A.id:null,largeWrapperW:"outside"===X?A.offsetWidth:null,largeWrapperH:"outside"===X?A.offsetHeight:null,onzoom:k,onthumbenter:Y,onthumbleave:I,onthumbmove:D},e.attach("mouseover",b,function(e,t){0!==n.status&&H(),m=t.id,a=t,N(),C(a,n),l.x=e.clientX,l.y=e.clientY,W(),B();var o=n.onthumbenter;null!==o&&o({thumb:a,lens:i,large:u,x:l.x,y:l.y})},!1),e.attach("mousemove",b,function(e,t){z=1}),e.attach("load",o,function(){p[f].status=1,C(b,p[f]),M(f),e.attach("load",s,function(){p[f].status=2,M(f,b,s,A)}),s.src=p[f].largeUrl}),o.src=b.src},e.attach("mousemove",document,function(e){l.x=e.clientX,l.y=e.clientY,W(),!0===b?B():(0!==z&&H(),z=0)},!1),e.attach("scroll",window,function(){null!==a&&C(a,n)})};