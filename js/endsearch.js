//window.onload = function {
  var htmlfiles = window.location.hash.substring(1);
  var e = document.getElementById('search');
  for(var x = 0; x < htmlfiles.length; x ++) {
    e.appendChild("<html-include src=" + htmlfiles[x] + "></html-include>");
    e.insertAdjacentHTML(beforeend, "<html-include src=" + htmlfiles[x] + "></html-include>");
  }
//}
