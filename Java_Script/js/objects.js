'use strickt';

var osoba = {
    imie: 'Wojtek',
    wzrost: 181,
    przedstawOsobe: function() {
        console.log(this.imie);
    }
}

osoba.nazwisko = 'Potocki';
console.log(osoba.nazwisko);

osoba.przedstawOsobe();
