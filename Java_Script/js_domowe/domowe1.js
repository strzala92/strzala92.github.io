'use strickt';

function odwroc(napis){
    var tablica=[];
    for(var i =0;i<napis.length;i++){    
        tablica[i]=napis[i];
    }
    
   tablica.reverse();
   
    
    return tablica.join('');
}

console.log(odwroc("Akademia108"));