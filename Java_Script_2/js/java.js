'use strict';

var istniejacyWezel = document.getElementById('parSecond');

console.log(istniejacyWezel);

var newElement = document.createElement('p');

var newElementContent = document.createTextNode('To jest nowy paragraf');

newElement.appendChild(newElementContent); //Dodaj tekst do elementu p


console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);


var parFirstDiv = document.getElementById('parFirst');
var linkWParagrafie = document.getElementById('parFirst').children[2];
console.log(linkWParagrafie);
//parFirstDiv.replaceChild(newElement, linkWParagrafie);

//Dodaj znacnzik <br> po każdym linku i usuń z nich atrybut klasy;D

var allLinks = document.getElementsByTagName('a');
for (var i = 0; i < allLinks.length; i++) {
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class');
    allLinks[i].setAttribute('id','link-id'+i)
}
