var html = JSON.parse(localStorage.getItem('html'));
var test = false;
console.log(html[0]);
var div = document.createElement('div');
var finalstring = '';
div.className = 'row';
for(var x = 0; x < html.length; x++) {
  for(var y = 0; y < html.length; y++) {
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
document.getElementById('search').appendChild(div);
