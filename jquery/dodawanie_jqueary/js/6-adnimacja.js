$(function () {
    'use strict';

    //    $('#first').slideUp(1000).slideDown(1000);

    function callbackZwrotny() {
        console.log('Zakończona pierwsza animacja');
        $('#first').animate({
            "font-size": "1em",
            "margin-left": "0px"
        }, 3000);
    };

    $('#first').animate({
        "font-size": "4em",
        "margin-left": "250px"
    },3000,callbackZwrotny)

});
