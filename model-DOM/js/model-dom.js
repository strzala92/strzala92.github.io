'use strickt';

console.log(window);

console.log(document.documentElement);

var parFirst = document.getElementById('parFirst');

console.log(parFirst);

var link = document.getElementsByClassName('link');

console.log(link);

var linkiPoTagu = document.getElementsByTagName('p');

console.log(linkiPoTagu);

var wszystkieLinkiAll = document.querySelectorAll('.link');

console.log(wszystkieLinkiAll);

var wszystkieLinki = document.querySelector('.link');

console.log(wszystkieLinki);

wszystkieLinkiAll.forEach(function(link,index){
    console.log(link.outerHTML);
});

wszystkieLinkiAll.forEach(function(link,index){
    console.log(link.innerHTML);
});


var elementParent = document.getElementById("parFirst").parentNode;
console.log( elementParent ); 

console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1]);
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild );