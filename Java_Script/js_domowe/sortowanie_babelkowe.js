'use strickt';

var tablica = [5,8,3,8,0,2,3,6,8,3,7,9,1,3];
console.log(tablica);
function babelkowe(tablica) {
    var pomocnicza=0;
    for(var i = tablica.length-1; i > 0; i--) 
     { for(var a = tablica.length-1; a > 0; a--){
           if(tablica[a]<tablica[a-1])
           {
             pomocnicza=tablica[a-1];
             tablica[a-1]=tablica[a];
             tablica[a]=pomocnicza;
             console.log(tablica);
           }
          
     }
     }
   
   
}

babelkowe(tablica);
