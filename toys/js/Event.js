var Event=function(){"use strict";this.attach=function(t,n,e,r){var i="",o=void 0===r||r,a=null;return void 0===window.addEventListener?(i="on"+t,a=function(t,e){return n.attachEvent(t,e),e}):(i=t,a=function(t,e,r){return n.addEventListener(t,e,r),e}),a.apply(n,[i,function(t){var n=t||event,r=n.srcElement||n.target;e(n,r)},o])},this.detach=function(t,n,e,r){var i="",o=void 0===r||r;void 0===window.removeEventListener?(i="on"+t,n.detachEvent(i,e)):(i=t,n.removeEventListener(i,e,o))},this.stop=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()},this.prevent=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}};