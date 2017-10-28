'use strict';

$(document).ready(function(){
    console.log("dziala");
});

$(function(){
    console.log("asd");
    $('#first').css({'color':'red'}).hide('slow').show(2000);
    
    var paragraf1 = $("#first");
    var par1 = document.getElementById('first');
    
    console.log(paragraf1,par1);
});