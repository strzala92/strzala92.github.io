'use strict';

var secondLink = document.getElementsByTagName('a')[1];

function alarm(event){
    event.preventDefault();
    alert('Kliknięto w link');
}

secondLink.onclick = alarm;


var thirdLink = document.getElementsByTagName('a')[2];


thirdLink.addEventListener('click',alarm);

function klikHeader(){
    console.log('Kliknąłeś header');
}

document.getElementsByTagName('header')[0].addEventListener('click',klikHeader);

function klikH1(e){
    e.stopPropagation();
    console.log('KLik w h1');
}

document.getElementsByTagName('h1')[0].addEventListener('click',klikH1);