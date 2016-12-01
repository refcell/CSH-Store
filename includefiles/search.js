var a = document.getElementById('tfnewsearch');
    a.addEventListener('submit',function(e) {
        e.preventDefault();
        var b = document.getElementById('tftextinput').value;
        window.location.href = 'http://mywebsite.com/'+b;
});
