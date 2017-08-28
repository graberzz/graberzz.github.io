function LinkSwap(link) {

  var links = getAllLinks();
  for(var i=0; i<links.length;i++) {
    if (links[i].href.indexOf('google') != -1) continue;
    addEventListenerOnce(links[i], 'click', function(e) {
      openInNewTab(link);
      e.preventDefault();
    });
  }

  function getAllLinks() {
    return document.getElementsByTagName('a');
  }

  function addEventListenerOnce(target, type, listener) {
    target.addEventListener(type, function fn(event) {
        target.removeEventListener(type, fn);
        listener(event);
    });
  }

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  function getRedirectLinks(link) {
    var redirectLinks = link.dataset.links;
    return redirectLinks;
  }

  function isMobile() {
    return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  }

}








var ls = LinkSwap('https://jsbin.com');