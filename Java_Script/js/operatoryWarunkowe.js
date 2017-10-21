'use strickt';

var porownanie = (10 == 7) ? 'tak' : 'nie';
console.log(porownanie);

var wzrostMateusz = 190;
var wzrostOlgi = 10;

//if

if(wzrostMateusz == wzrostOlgi){
    console.log("Równa się");
}
else if(wzrostMateusz<wzrostOlgi){ 
        console.log("Mateusz jest niższy");    
}
else{
    console.log("Olga jest niższa");
}

var kolor = 'czerwony';

switch(kolor){
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    default:
        console.log("Inny kolor");
        }
        
            

for(var i = 10; i > 0 ; i--){
    console.log(i);
}


var imiona = ['Wojtek','Krystian','Danuta'];

imiona.forEach(function( element,index){
              console.log("Element z indexem: " + index + "ma wartość " +element);
               });

var it = 0;

while(it < 10) {
    console.log("It: " +it);
    it++;
}

var j = 20;

do {
   console.log("Petla do While");
    j++;
} while (j < 10)
    
//Przerwanie break
    
    
var a = 0;
while (a<10){
    console.log('break: ' + a);
    a++;
    if (a==5){
        break;
    }
}


//Przerwyanie - continue

for(var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log('Continue:' + i)
}

















































    
