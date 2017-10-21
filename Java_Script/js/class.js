'use strickt';

class Osoba{
    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wysietlInfo() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa');

var wojtek = new Osoba('Wojtek', 'Potocki');

krystian.wysietlInfo();

wojtek.wysietlInfo();
