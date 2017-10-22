'use strict';

var name_ = document.getElementById("name");
var email_ = document.getElementById('email');
var wiadomosc = document.getElementById('wiadomosc');
var wszystkieZgody = document.getElementById('wszystkieZgody');

function walidacjaFromularza(event){
    
 wiadomosc.innerHTML='<ul id="wiadomosc"></ul>'
   
   
    if(name_.value.trim == ""){
        var msgImie = document.createElement('li');
        msgImie.innerHTML = "Wpisz Imie";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
    }
    
     if(email.value.trim == ""){
        var msgImie = document.createElement('li');
        msgEmail.innerHTML = "Wpisz Email";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();
    }

}

document.getElementById('wyslij').addEventListener('click',walidacjaFromularza)

function stanCheckbox(){
    
}

wszystkieZgody.addEventListener('change',stanCheckbox)
{
    
}


//
//
//var secondLink = document.querySelector('[type=submit]');
//
//function alarm(event) {
//
//    console.log(document.querySelector('[name=fname]').value);
//    if (document.querySelector('[name=fname]').value == "" && 
//       document.querySelector('[name=lname]').value == "" &&
//       document.querySelector('[name=email]').value == "")
//    {
//        document.getElementById("fname").innerText = "Wpisz Imię";
//        event.preventDefault();
//        
//
//    } 
//    
//    else {
//        event.preventDefault();
//        alert('Kliknięto w link');
//    }
//}
//
//secondLink.onclick = alarm;
