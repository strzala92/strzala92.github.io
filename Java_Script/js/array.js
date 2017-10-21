'use strickt';

var imiona = ['Wotjek', 'Krystian', 'Łukasz'];

console.log(imiona[0]);

imiona[3] = 'Piotrek';


//Dodawanie elementu 
var ileElementow = imiona.push('Geralt');

console.log(ileElementow);

console.log(imiona);

//Usuwanie elementu
var ostatniElement = imiona.pop();

console.log(ostatniElement);

console.log(imiona);

console.log("Ile elementow Tablicy: " + imiona.length);

console.log(imiona.join(' '));

console.log(imiona.reverse());

console.log(imiona.sort());

