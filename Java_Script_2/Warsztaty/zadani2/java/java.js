'use strict';





//var submit = document.getElementsByTagName('input')[2];
var submit2 = document.querySelector('[type=submit]')

submit2.addEventListener("click", function(event){
    event.preventDefault();
    for(var i = 0; i<document.querySelectorAll('[type=text]').length;i++ )
{
    var fname = document.getElementsByTagName('input')[i].value;
    console.log(fname);}});
    


//
//submit.addEventListener("click", function(event){
//    event.preventDefault();
//    for(var i = 0; i<document.querySelectorAll('[type=text]').length;i++ )
//{
//    var fname = document.getElementsByTagName('input')[i].value;
//    console.log(fname);}});
//    




////submit.addEventListener('click',wyswietl());
////
////
//////preventDefault();
////function wyswietl(){
//// event.preventDefault();
//for(var i = 0; i<document.querySelectorAll('[type=text]').length;i++ )
//{
//  
//    var fname = document.getElementsByTagName('input')[i].value;
//    console.log(fname);
////}
////    
////}