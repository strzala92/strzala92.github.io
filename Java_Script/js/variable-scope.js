'use strict';

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscosoba4 = 2000;

var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log(sumaKasy);


function policzSumeKasy (iloscOsoba1, iloscOsoba2, iloscOsoba3){
    var sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscosoba4;
    console.log(sumaKasy);
    var sumaKasyLokalnie = sumaKasy;
    console.log("Kassa lokalnie wewnatrz funkcji " + sumaKasyLokalnie);
}

policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3);