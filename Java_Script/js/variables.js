'use strict';

var imie;

var imie = 'Jan';

var wzrost = 120;

var wiek = 20;

var wiekWOjtka = wiek;


console.log(imie);
console.log(wzrost);
console.log(wiek);
console.log(wiekWOjtka);

function wyswietlNazwe() {
    var imie = 'Karolina';
    console.log(imie);
}
console.log(imie);
wyswietlNazwe();
console.log(imie);

var wyswietlWiek = function () {
    console.log(30);
}

wyswietlWiek();
var wieka;

function podajWiek(wieka) {
    console.log(wieka);
}

podajWiek(10);

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik ' + wynik);
}

mnozenie(1, 0);
mnozenie(10, 5);



function dodawanie(parametr1, parametr2) {
    var wynik = parametr1 + parametr2;
    return wynik;
}

console.log('dodawanie wynik ' + dodawanie(10, 5));
