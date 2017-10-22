'use strict';

var wplata = parseInt(document.getElementById("wplata").value);

var okres = parseInt(document.getElementById("okres-kapitalizacji").value);

var ilosc = parseInt(document.getElementById("ilosc-lat").value);

var oprocentowanie = document.getElementById("oprocentowanie").value/100;

var podatek = document.getElementById("podatek").checked;

                 

function obliczZysk(wplata,okres,ilosc,stopa,podatek){
    var wplata = parseInt(document.getElementById("wplata").value);

var okres = parseInt(document.getElementById("okres-kapitalizacji").value);

var ilosc = parseInt(document.getElementById("ilosc-lat").value);

var oprocentowanie = document.getElementById("oprocentowanie").value/100;

var podatek = document.getElementById("podatek").checked;
    if(podatek == true){
        var oprocentowanieOpodatkowane = oprocentowanie-( oprocentowanie * 0.19);
        var pomocnicza = (1+oprocentowanieOpodatkowane/100);
        var kapital  = wplata * Math.pow( pomocnicza, ilosc-lat * okres);
        console.log(kapital)
        return kapital;
    }
    else{
//        var oprocentowanieOpodatkowane = oprocentowanie;
//        var pomocnicza = (1+oprocentowanieOpodatkowane/100);
//        var kapital  = wpalta * Math.pow( pomocnicza, ilosc-lat * okres);
//        console.log(kapital)
//        return kapital;
    }
}

function oblicz(){
    
}


