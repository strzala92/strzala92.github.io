var globalny_wynik;

function mnozenie(paramter1, paramter2, paramter3){
    var wynik = paramter1 * paramter2 * paramter3;
    return wynik;
}

globalny_wynik = mnozenie(3,5,6);
console.log(globalny_wynik);