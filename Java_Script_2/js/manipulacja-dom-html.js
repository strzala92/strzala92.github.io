'use strict';

var mainHeader = document.getElementById('main-header');
console.log(mainHeader.innerHTML);

mainHeader.innerHTML = 'Treść nagłówka'; //dodajemy tresc do naglowka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej 

link.href = 'http://akademia108.pl'; //Nadpisuje atrybut href w linku


console.log(link.classList); //pobiera liste klas w linku

//link.className ='nowa-klasa';

link.className += ' nowa-klasa';

mainHeader.style.color = 'red';