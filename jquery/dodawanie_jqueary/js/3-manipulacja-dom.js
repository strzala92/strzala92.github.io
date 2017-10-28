'use strict';

//var element = $('#h2').text('test');
$(function () {
    var element = $('#second').text();

    var h3 = $('p:first').text();

    //console.log(h3);
    //console.log(h3.length);
    //console.log(element);

    var body = $('body')
    //console.log(body.html("<p>Nowy paragraf </p>"));

    var par = $('.paragrafnext');

    //    parnext.append("Appendujemy tekst");

    var parAfter = $('.paragrafnext');
    parAfter.after("<p id='red'>After tekst</p>");

    var parAappend = $('.paragrafnext');
    parAappend.append(" append tekst");

    var parbefore = $('.paragrafnext');
    parbefore.before("<p>Before tekst</p>");

    var parprepend = $('.paragrafnext');
    parprepend.prepend("Prepand tekst ");

    var emptyPrzyklad = $('.paragrafnext');
    emptyPrzyklad.empty();
    // emptyPrzyklad.remove();

    var h1 = $("h1");
    h1.css('color','red');
    h1.css({'color':'green',"font-size" : '4em'});
    
    var inputValue =$("#inputValue")
    inputValue.val("Jestem tekstem");
    console.log(inputValue.val());
    
    var drugiNaglowek = $("#second");
    drugiNaglowek.addClass("blue");
    drugiNaglowek.removeClass("blue");
    
    

});
