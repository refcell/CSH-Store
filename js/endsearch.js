//window.onload = function {
  var htmlfiles = window.location.hash.substring(1);
  var e = document.getElementById('search');
  e.appendChild("<html-include src=" + searchproducts[x][1] + "></html-include>");
  e.insertAdjacentHTML(beforeend, "<html-include src=" + searchproducts[x][1] + "></html-include>");
//}
