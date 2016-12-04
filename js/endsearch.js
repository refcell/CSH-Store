var html = JSON.parse(localStorage.getItem('html'));
var test = false;
console.log(html[0]);
var noresults = document.createElement('div');
var div = document.createElement('div');
var finalstring = '';
noresults.className = 'row';
div.className = 'row';
for(var x = 0; x < html.length; x++) {
  for(var y = x; y < html.length; y++) {
    if((html[y] == html[x]) && (x != y)) {
      test = true;
    }
  }
  if(test == false){
    finalstring = finalstring + "<html-include src=" + html[x] + "></html-include>";
  }
  test = false;
}
div.innerHTML = finalstring;
if(finalstring == "") {
  finalstring = "<br  />" + "<br  />" + "<h1>No Products Found</h1>" + "<p>Try searching with a different search term or view our departments</p>;
  noresults.innerHTML = finalstring;
  document.getElementById('search').appendChild(noresults);
}
else {
  document.getElementById('search').appendChild(div);
}
