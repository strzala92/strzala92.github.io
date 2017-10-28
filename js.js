var tablicaDoPosortowania = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 3];
function sortownaie(tablica){
for (var i = 1; i < tablica.length; i++)
    {
        var pomocnicza=tablica[i];
        
        for(var j = i; tablica[j-1]>pomocnicza; j--)
            {
                tablica[j]=tablica[j-1];
            }     
            tablica[j]=pomocnicza;
    }
   return tablica;
}
console.log(tablicaDoPosortowania);
console.log(sortownaie(tablicaDoPosortowania));