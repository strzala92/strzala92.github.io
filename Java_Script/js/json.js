'use strickt';

var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania:[
                {nazwa: 'podróże'},
                {nazwa: 'gotowanie'}
                
            ]
        },
         {
            imie: 'Dominik',
            nazwisko: 'Gomuła',
            wzrost: 190,
            zainteresowania:[
                {nazwa: 'sport'},
                {nazwa: 'taniec'}
                
            ]
        },
        {
            imie: 'Klaudia',
            nazwisko: 'Kowalska',
            wzrost: 150,
            zainteresowania:[
                {nazwa: 'programowanie'},
                {nazwa: 'motoryzacja'}
                
            ]
        }
        
    ]
}

console.log(jsonOsoby);

console.log(jsonOsoby.osoby["0"].zainteresowania["1"].nazwa)

jsonOsoby.osoby.forEach(function(element,index)
                                   {
    console.log(element.imie);
}
                                   );
