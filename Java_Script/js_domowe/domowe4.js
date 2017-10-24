'use strickt';

function odwroc(napis){
    var tablica=[];
    for(var i =0;i<napis.length;i++){    
        tablica[i]=napis[i];
    }
    
   tablica.sort();
   
    
    return tablica.join('');
}

var napis ="Akademia108"

console.log(odwroc(napis));