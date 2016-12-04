//window.onload = function {
  var html = JSON.parse(localStorage.getItem('html'));
  console.log(html[0]);
  var htmlfiles = window.location.hash.substring(1);
  var e = document.getElementById('search');
  for(var x = 0; x < html.length; x++) {
    e.appendChild("<html-include src=" + html[x] + "></html-include>");
    e.insertAdjacentHTML(beforeend, "<html-include src=" + html[x] + "></html-include>");
  }
//}
