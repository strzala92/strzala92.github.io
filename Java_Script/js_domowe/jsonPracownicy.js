var jsonPracownicy = {
"pracownicy":[
{"firstName": "Krystian", "lastName": "Dziopa"},
{"firstName": "Anna", "lastName": "Szapiel"},
{"firstName": "Piotr", "lastName": "Żmuda"}
]
}

console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index){
    console.log(index + " "+ element.firstName+" "+element.lastName );
});
  
var Ksiazka = {
tytul: "",
autor: "",
przeczytane: Boolean,

opiszKsiazke:  function(){
        return "Książka ma tytuł " + tytul + ", autorem jest " + autor + " i została przeczytana";
    }
}


console.log(Ksiazka.opiszKsiazke);