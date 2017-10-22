'use strict';



var secondLink = document.querySelector('[type=submit]');

function alarm(event) {

    console.log(document.querySelector('[name=fname]').value);
    if (document.querySelector('[name=fname]').value == "" && 
       document.querySelector('[name=lname]').value == "" &&
       document.querySelector('[name=email]').value == "")
    {
        document.getElementById("fname").innerText = "Wpisz Imię";
        event.preventDefault();
        

    } 
    
    else {
        event.preventDefault();
        alert('Kliknięto w link');
    }
}

secondLink.onclick = alarm;
