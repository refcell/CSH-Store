var html = JSON.parse(localStorage.getItem('html'));
console.log(html[0]);
var div = document.createElement('div');
var finalstring = '';
div.className = 'row';
for(var x = 0; x < html.length; x++) {
finalstring = finalstring + "<html-include src=" + html[x] + "></html-include>";
}
div.innerHTML = finalstring;
document.getElementById('search').appendChild(div);
